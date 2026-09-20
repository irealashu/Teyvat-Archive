import { Weapon } from '../types';
import { RARITY_STYLES } from '../utils/elementStyles';
import { GenshinImage } from './GenshinImage';
import { X, Edit3, Sword, Sparkles, MapPin, Award } from 'lucide-react';

interface WeaponDetailModalProps {
  weapon: Weapon;
  onClose: () => void;
  onEdit: (weapon: Weapon) => void;
  isAdmin?: boolean;
}

export function WeaponDetailModal({
  weapon,
  onClose,
  onEdit,
  isAdmin,
}: WeaponDetailModalProps) {
  const rarity = RARITY_STYLES[weapon.rarity];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className={`p-4 sm:p-6 border-b border-slate-800 ${rarity.bgGrad} flex items-start justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-lg bg-slate-950 flex-shrink-0 flex items-center justify-center p-2">
              <GenshinImage
                src={weapon.iconUrl}
                alt={weapon.name}
                weaponType={weapon.type}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {weapon.name}
                </h2>
                <span className="text-amber-400 text-sm tracking-wider font-bold">
                  {rarity.stars}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-700/60 font-semibold text-amber-300">
                  {weapon.type}
                </span>
                {weapon.region && (
                  <span className="px-2 py-0.5 rounded bg-slate-950/80 border border-slate-700/60 text-slate-300">
                    {weapon.region}
                  </span>
                )}
                <span className="text-slate-400">
                  Source: <strong className="text-slate-200">{weapon.source}</strong>
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={() => {
                  onClose();
                  onEdit(weapon);
                }}
                id="weapon-detail-edit-btn"
                className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-950 text-slate-300 hover:text-amber-300 border border-slate-700 transition-colors"
                title="Edit weapon info"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-950 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          {/* Attributes */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl text-center">
              <span className="text-slate-400 text-xs block mb-1">Base ATK (Level 90)</span>
              <span className="text-2xl font-bold font-display text-red-400">{weapon.baseAtk}</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-xl text-center">
              <span className="text-slate-400 text-xs block mb-1">{weapon.subStatType}</span>
              <span className="text-2xl font-bold font-display text-emerald-400">{weapon.subStatValue}</span>
            </div>
          </div>

          {/* Passive Skill */}
          <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <h3 className="font-display font-bold text-sm text-amber-300">
                Passive: {weapon.passiveName}
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              {weapon.passiveDescription}
            </p>
            {weapon.refinementBonus && (
              <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-amber-300/90 bg-amber-500/5 p-2 rounded-lg">
                <strong className="block text-[11px] uppercase tracking-wider text-amber-400 font-display mb-0.5">
                  Refinement Rank 5 (R5) Scaling:
                </strong>
                {weapon.refinementBonus}
              </div>
            )}
          </div>

          {/* Lore Description */}
          <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-display">
              Weapon Archive Lore
            </h4>
            <p className="text-slate-300 italic leading-relaxed text-xs sm:text-sm">
              {weapon.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
