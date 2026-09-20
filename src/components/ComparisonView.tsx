import { useState } from 'react';
import { Character, Weapon } from '../types';
import { ELEMENT_COLORS, RARITY_STYLES } from '../utils/elementStyles';
import { GenshinImage } from './GenshinImage';
import { GitCompare, Plus, X, Shield, Sword, Sparkles } from 'lucide-react';

interface ComparisonViewProps {
  characters: Character[];
  weapons: Weapon[];
  onSelectCharacter: (c: Character) => void;
  onSelectWeapon: (w: Weapon) => void;
}

export function ComparisonView({
  characters,
  weapons,
  onSelectCharacter,
  onSelectWeapon,
}: ComparisonViewProps) {
  const [mode, setMode] = useState<'characters' | 'weapons'>('characters');

  // Selected for comparison
  const [char1Id, setChar1Id] = useState<string>(characters[0]?.id || '');
  const [char2Id, setChar2Id] = useState<string>(characters[1]?.id || characters[0]?.id || '');

  const [wpn1Id, setWpn1Id] = useState<string>(weapons[0]?.id || '');
  const [wpn2Id, setWpn2Id] = useState<string>(weapons[1]?.id || weapons[0]?.id || '');

  const c1 = characters.find((c) => c.id === char1Id) || characters[0];
  const c2 = characters.find((c) => c.id === char2Id) || characters[1];

  const w1 = weapons.find((w) => w.id === wpn1Id) || weapons[0];
  const w2 = weapons.find((w) => w.id === wpn2Id) || weapons[1];

  return (
    <div className="space-y-6">
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/70 border border-slate-800 p-4 sm:p-5 rounded-2xl backdrop-blur-sm">
        <div>
          <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-base sm:text-lg mb-1">
            <GitCompare className="w-5 h-5" />
            <span>Theorycrafting & Stat Comparison Matrix</span>
          </div>
          <p className="text-xs text-slate-400">
            Compare level 90 base attributes, ascensions, skill scalings, and loadout synergies side-by-side.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setMode('characters')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'characters'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Compare Characters
          </button>
          <button
            onClick={() => setMode('weapons')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              mode === 'weapons'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Compare Weapons
          </button>
        </div>
      </div>

      {/* CHARACTER COMPARISON */}
      {mode === 'characters' && c1 && c2 && (
        <div className="space-y-6">
          {/* Selectors Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center gap-3">
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Slot A:</span>
              <select
                value={c1.id}
                onChange={(e) => setChar1Id(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
              >
                {characters.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.element} • {c.weaponType})
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center gap-3">
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Slot B:</span>
              <select
                value={c2.id}
                onChange={(e) => setChar2Id(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
              >
                {characters.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.element} • {c.weaponType})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Side by Side Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[c1, c2].map((char, index) => {
              const elem = ELEMENT_COLORS[char.element];
              const other = index === 0 ? c2 : c1;

              return (
                <div
                  key={char.id}
                  className={`bg-slate-900/90 border rounded-2xl p-5 space-y-5 ${RARITY_STYLES[char.rarity].cardBorder}`}
                >
                  {/* Portrait Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 border-2 border-amber-400/40 flex-shrink-0">
                      <GenshinImage
                        src={char.iconUrl}
                        alt={char.name}
                        element={char.element}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display font-bold text-lg text-white">
                          {char.name}
                        </h3>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${elem.badge}`}>
                          {char.element}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 italic mb-1">{char.title}</p>
                      <div className="flex items-center gap-2 text-[11px] text-slate-300">
                        <span>{char.weaponType}</span>
                        <span>•</span>
                        <span>{char.region}</span>
                        <span>•</span>
                        <span className="text-amber-400 font-semibold">{char.build.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Level 90 Stats */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
                      Level 90 Base Attributes
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-950/80 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Base HP</span>
                        <span
                          className={`font-bold font-display text-sm ${
                            char.stats.hpBase > other.stats.hpBase
                              ? 'text-emerald-400'
                              : 'text-slate-200'
                          }`}
                        >
                          {char.stats.hpBase.toLocaleString()}
                        </span>
                      </div>

                      <div className="p-2 bg-slate-950/80 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Base ATK</span>
                        <span
                          className={`font-bold font-display text-sm ${
                            char.stats.atkBase > other.stats.atkBase
                              ? 'text-red-400'
                              : 'text-slate-200'
                          }`}
                        >
                          {char.stats.atkBase}
                        </span>
                      </div>

                      <div className="p-2 bg-slate-950/80 rounded-lg border border-slate-800">
                        <span className="text-[10px] text-slate-500 block">Base DEF</span>
                        <span
                          className={`font-bold font-display text-sm ${
                            char.stats.defBase > other.stats.defBase
                              ? 'text-amber-400'
                              : 'text-slate-200'
                          }`}
                        >
                          {char.stats.defBase}
                        </span>
                      </div>
                    </div>
                    <div className="p-2 bg-slate-950/60 rounded-lg border border-slate-800/80 text-xs text-slate-300 flex justify-between">
                      <span className="text-slate-500">Ascension Specialty Stat:</span>
                      <span className="font-semibold text-sky-400">
                        {char.stats.ascensionStat} ({char.stats.ascensionStatValue})
                      </span>
                    </div>
                  </div>

                  {/* Build Comparison */}
                  <div className="space-y-3 pt-2 border-t border-slate-800/80 text-xs">
                    <div>
                      <span className="text-slate-400 text-[11px] font-semibold block mb-1">
                        Recommended Weapons:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {char.build.bestWeapons.map((w, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-950 text-slate-200 border border-slate-800 text-[11px]">
                            {w}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-400 text-[11px] font-semibold block mb-1">
                        Recommended Artifacts:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {char.build.bestArtifacts.map((a, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-slate-950 text-slate-200 border border-slate-800 text-[11px]">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-2.5 bg-slate-950/60 rounded-lg border border-slate-800/80">
                      <span className="text-[10px] uppercase font-bold text-amber-400/90 block mb-1">
                        Optimal Main Stats
                      </span>
                      <p className="text-[11px] text-slate-300">
                        <strong>Sands:</strong> {char.build.mainStats.sands} | <strong>Goblet:</strong> {char.build.mainStats.goblet} | <strong>Circlet:</strong> {char.build.mainStats.circlet}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectCharacter(char)}
                    className="w-full py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-semibold transition-colors"
                  >
                    View Full Profile & Skills
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* WEAPON COMPARISON */}
      {mode === 'weapons' && w1 && w2 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center gap-3">
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Slot A:</span>
              <select
                value={w1.id}
                onChange={(e) => setWpn1Id(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
              >
                {weapons.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name} ({w.type} • {w.rarity}★)
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-xl flex items-center gap-3">
              <span className="text-xs text-slate-400 font-medium whitespace-nowrap">Slot B:</span>
              <select
                value={w2.id}
                onChange={(e) => setWpn2Id(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-400"
              >
                {weapons.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.name} ({w.type} • {w.rarity}★)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[w1, w2].map((wpn, index) => {
              const other = index === 0 ? w2 : w1;

              return (
                <div
                  key={wpn.id}
                  className={`bg-slate-900/90 border rounded-2xl p-5 space-y-4 ${RARITY_STYLES[wpn.rarity].cardBorder}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 border-2 border-amber-400/40 p-2 flex items-center justify-center flex-shrink-0">
                      <GenshinImage
                        src={wpn.iconUrl}
                        alt={wpn.name}
                        weaponType={wpn.type}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {wpn.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-amber-300 font-semibold">
                          {wpn.type}
                        </span>
                        <span className="text-amber-400 font-bold">{wpn.rarity}★</span>
                        {wpn.region && <span className="text-slate-400">{wpn.region}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-500 block">Base ATK (Lv 90)</span>
                      <span
                        className={`text-xl font-bold font-display ${
                          wpn.baseAtk > other.baseAtk ? 'text-red-400' : 'text-slate-200'
                        }`}
                      >
                        {wpn.baseAtk}
                      </span>
                    </div>
                    <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                      <span className="text-[10px] text-slate-500 block truncate">{wpn.subStatType}</span>
                      <span className="text-xl font-bold font-display text-emerald-400">
                        {wpn.subStatValue}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs space-y-1">
                    <span className="text-amber-400 font-semibold block">{wpn.passiveName}</span>
                    <p className="text-slate-300 leading-relaxed text-[11px]">
                      {wpn.passiveDescription}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectWeapon(wpn)}
                    className="w-full py-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-semibold transition-colors"
                  >
                    View Weapon Details
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
