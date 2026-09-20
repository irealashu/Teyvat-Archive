import { useState } from 'react';
import { Character } from '../types';
import { ELEMENT_COLORS, RARITY_STYLES } from '../utils/elementStyles';
import { GenshinImage } from './GenshinImage';
import { X, Edit3, Sparkles, BookOpen, Shield, Sword, Award } from 'lucide-react';

interface CharacterDetailModalProps {
  character: Character;
  onClose: () => void;
  onEdit: (char: Character) => void;
  isAdmin?: boolean;
}

export function CharacterDetailModal({
  character,
  onClose,
  onEdit,
  isAdmin,
}: CharacterDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'skills' | 'constellations' | 'builds'>('overview');

  const elem = ELEMENT_COLORS[character.element];
  const rarity = RARITY_STYLES[character.rarity];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-4 sm:p-6 border-b border-slate-800 bg-gradient-to-r ${elem.gradient} flex items-start justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-lg bg-slate-950 flex-shrink-0">
              <GenshinImage
                src={character.iconUrl}
                alt={character.name}
                element={character.element}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {character.name}
                </h2>
                <span className={`px-2 py-0.5 text-xs font-bold rounded border ${elem.badge}`}>
                  {character.element}
                </span>
                <span className="text-amber-400 text-sm tracking-wider font-bold">
                  {rarity.stars}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 italic mb-1.5">
                "{character.title}"
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span>Nation: <strong className="text-slate-200">{character.region}</strong></span>
                <span>Weapon: <strong className="text-slate-200">{character.weaponType}</strong></span>
                <span>Affiliation: <strong className="text-slate-200">{character.affiliation}</strong></span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={() => {
                  onClose();
                  onEdit(character);
                }}
                id="char-detail-edit-btn"
                className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-950 text-slate-300 hover:text-amber-300 border border-slate-700 transition-colors"
                title="Edit character info"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-950 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Tabs Bar */}
        <div className="flex items-center gap-1 px-4 sm:px-6 pt-3 border-b border-slate-800 bg-slate-950/60 overflow-x-auto no-scrollbar">
          {[
            { id: 'overview', label: 'Overview & Stats', icon: <Sparkles className="w-3.5 h-3.5" /> },
            { id: 'skills', label: 'Combat Talents', icon: <Sword className="w-3.5 h-3.5" /> },
            { id: 'constellations', label: 'Constellations', icon: <Award className="w-3.5 h-3.5" /> },
            { id: 'builds', label: 'Recommended Build', icon: <Shield className="w-3.5 h-3.5" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-amber-400 text-amber-300 bg-amber-500/5'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-200 text-xs sm:text-sm">
          {/* TAB 1: OVERVIEW & STATS */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Lore Description */}
              <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 font-display">
                  Profile & Lore
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {character.description}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-3 border-t border-slate-800/80 text-xs">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Birthday</span>
                    <span className="font-semibold text-slate-300">{character.birthday || 'Unknown'}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Constellation</span>
                    <span className="font-semibold text-slate-300">{character.constellationName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Role</span>
                    <span className="font-semibold text-amber-400">{character.build.role}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Ascension Stat</span>
                    <span className="font-semibold text-emerald-400">{character.stats.ascensionStat} ({character.stats.ascensionStatValue})</span>
                  </div>
                </div>
              </div>

              {/* Base Stats Breakdown */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 font-display">
                  Level 90 Base Attributes
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-center">
                    <span className="text-slate-400 text-xs block mb-1">Base HP</span>
                    <span className="text-lg font-bold font-display text-emerald-400">
                      {character.stats.hpBase.toLocaleString()}
                    </span>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-center">
                    <span className="text-slate-400 text-xs block mb-1">Base ATK</span>
                    <span className="text-lg font-bold font-display text-red-400">
                      {character.stats.atkBase}
                    </span>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-center">
                    <span className="text-slate-400 text-xs block mb-1">Base DEF</span>
                    <span className="text-lg font-bold font-display text-amber-400">
                      {character.stats.defBase}
                    </span>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl text-center">
                    <span className="text-slate-400 text-xs block mb-1">Specialty Stat</span>
                    <span className="text-sm font-bold font-display text-sky-400">
                      {character.stats.ascensionStat}
                    </span>
                    <span className="text-xs text-slate-300 block font-semibold mt-0.5">
                      {character.stats.ascensionStatValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COMBAT TALENTS */}
          {activeTab === 'skills' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 font-display">
                Combat Talents & Passives
              </h4>
              <div className="space-y-3">
                {character.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-950/70 border border-slate-800 rounded-xl space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display font-bold text-sm text-slate-100">
                        {skill.name}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded">
                        {skill.type}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CONSTELLATIONS */}
          {activeTab === 'constellations' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 font-display">
                Constellation Astral Path ({character.constellationName})
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {character.constellations.map((c) => (
                  <div
                    key={c.level}
                    className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        C{c.level}
                      </span>
                      <span className="font-display font-semibold text-slate-200 text-xs sm:text-sm">
                        {c.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-8">
                      {c.effect}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: RECOMMENDED BUILDS */}
          {activeTab === 'builds' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Best Weapons */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-xs uppercase mb-3">
                    <Sword className="w-4 h-4" />
                    <span>Recommended Weapons</span>
                  </div>
                  <ul className="space-y-2">
                    {character.build.bestWeapons.map((wpn, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between p-2 bg-slate-900/80 rounded-lg text-xs"
                      >
                        <span className="font-medium text-slate-200">{wpn}</span>
                        <span className="text-[10px] text-amber-400/80 font-semibold">Priority #{idx + 1}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best Artifact Sets */}
                <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-xs uppercase mb-3">
                    <Shield className="w-4 h-4" />
                    <span>Recommended Artifact Sets</span>
                  </div>
                  <ul className="space-y-2">
                    {character.build.bestArtifacts.map((art, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between p-2 bg-slate-900/80 rounded-lg text-xs"
                      >
                        <span className="font-medium text-slate-200">{art}</span>
                        <span className="text-[10px] text-sky-400/80 font-semibold">Option #{idx + 1}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Main & Sub-stats Priorities */}
              <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
                  Artifact Main Stat & Substat Optimization
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block mb-0.5">Sands of Eon</span>
                    <span className="text-xs font-semibold text-amber-300">{character.build.mainStats.sands}</span>
                  </div>
                  <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block mb-0.5">Goblet of Eonothem</span>
                    <span className="text-xs font-semibold text-amber-300">{character.build.mainStats.goblet}</span>
                  </div>
                  <div className="p-2.5 bg-slate-900/90 rounded-lg border border-slate-800">
                    <span className="text-[10px] text-slate-400 block mb-0.5">Circlet of Logos</span>
                    <span className="text-xs font-semibold text-amber-300">{character.build.mainStats.circlet}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1.5">
                    Substat Priority Order
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {character.build.subStats.map((sub, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium bg-slate-900 text-slate-200 border border-slate-700/60 rounded"
                      >
                        {i + 1}. {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
