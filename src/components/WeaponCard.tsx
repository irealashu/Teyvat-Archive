import { Weapon } from '../types';
import { RARITY_STYLES } from '../utils/elementStyles';
import { GenshinImage } from './GenshinImage';
import { Edit3, Eye, Sparkles } from 'lucide-react';

interface WeaponCardProps {
  weapon: Weapon;
  onSelect: (weapon: Weapon) => void;
  onEdit: (weapon: Weapon) => void;
  onCompare?: (weapon: Weapon) => void;
  isSelectedForCompare?: boolean;
  isAdmin?: boolean;
}

export function WeaponCard({
  weapon,
  onSelect,
  onEdit,
  onCompare,
  isSelectedForCompare,
  isAdmin,
}: WeaponCardProps) {
  const rarity = RARITY_STYLES[weapon.rarity];

  return (
    <div
      id={`weapon-card-${weapon.id}`}
      className={`group relative flex flex-col rounded-xl overflow-hidden border bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        rarity.cardBorder
      } ${isSelectedForCompare ? 'ring-2 ring-amber-400' : ''}`}
    >
      {/* Weapon Icon Image Area */}
      <div
        className="relative h-44 w-full cursor-pointer overflow-hidden bg-slate-950 flex items-center justify-center p-4"
        onClick={() => onSelect(weapon)}
      >
        <GenshinImage
          src={weapon.iconUrl}
          alt={weapon.name}
          weaponType={weapon.type}
          className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
        />

        {/* Ambient Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/80 text-amber-300 border border-slate-700/80">
            {weapon.type}
          </span>
          {weapon.region && (
            <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-300 bg-slate-950/70 border border-slate-800">
              {weapon.region}
            </span>
          )}
        </div>

        {/* Rarity Stars */}
        <div className="absolute bottom-2 left-2 z-10">
          <span className="text-amber-400 text-xs tracking-wider font-bold drop-shadow">
            {rarity.stars}
          </span>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={() => onSelect(weapon)}
            className="font-display font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1 mb-1"
          >
            {weapon.name}
          </h3>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-1.5 py-1.5 px-2 bg-slate-950/60 rounded border border-slate-800/80 text-[10px] text-slate-300 mb-2">
            <div>
              <span className="text-slate-500 block text-[9px]">Base ATK (Lv 90)</span>
              <span className="font-semibold text-red-400 text-xs">{weapon.baseAtk}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px] truncate">{weapon.subStatType}</span>
              <span className="font-semibold text-emerald-400 text-xs">{weapon.subStatValue}</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
            <strong className="text-amber-300 font-semibold">{weapon.passiveName}: </strong>
            {weapon.passiveDescription}
          </p>
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 gap-1.5 mt-2">
          <button
            onClick={() => onSelect(weapon)}
            className="flex-1 flex items-center justify-center gap-1 py-1 px-2 text-[11px] font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded transition-colors"
          >
            <Eye className="w-3 h-3" />
            <span>Details</span>
          </button>

          {onCompare && (
            <button
              onClick={() => onCompare(weapon)}
              className={`py-1 px-2 text-[11px] font-medium rounded border transition-colors ${
                isSelectedForCompare
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 border-slate-700/60'
              }`}
              title="Compare with another weapon"
            >
              VS
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => onEdit(weapon)}
              id={`weapon-edit-btn-${weapon.id}`}
              className="p-1 text-slate-400 hover:text-amber-300 hover:bg-slate-800/80 rounded transition-colors"
              title="Edit weapon information"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
