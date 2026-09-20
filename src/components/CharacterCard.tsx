import { Character } from '../types';
import { ELEMENT_COLORS, RARITY_STYLES } from '../utils/elementStyles';
import { GenshinImage } from './GenshinImage';
import { Edit3, Eye, Sparkles } from 'lucide-react';

interface CharacterCardProps {
  character: Character;
  onSelect: (char: Character) => void;
  onEdit: (char: Character) => void;
  onCompare?: (char: Character) => void;
  isSelectedForCompare?: boolean;
  isAdmin?: boolean;
}

export function CharacterCard({
  character,
  onSelect,
  onEdit,
  onCompare,
  isSelectedForCompare,
  isAdmin,
}: CharacterCardProps) {
  const elem = ELEMENT_COLORS[character.element];
  const rarity = RARITY_STYLES[character.rarity];

  return (
    <div
      id={`character-card-${character.id}`}
      className={`group relative flex flex-col rounded-xl overflow-hidden border bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        rarity.cardBorder
      } ${isSelectedForCompare ? 'ring-2 ring-amber-400' : ''}`}
    >
      {/* Top Banner Gradient & Image */}
      <div
        className="relative h-48 w-full cursor-pointer overflow-hidden bg-slate-950"
        onClick={() => onSelect(character)}
      >
        <GenshinImage
          src={character.iconUrl}
          alt={character.name}
          element={character.element}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {/* Ambient Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex items-center gap-1.5 z-10">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border backdrop-blur-md ${elem.badge}`}>
            {character.element}
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-950/70 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            {character.weaponType}
          </span>
        </div>

        {/* Rarity Stars */}
        <div className="absolute bottom-2 left-2 z-10">
          <span className="text-amber-400 text-xs tracking-wider font-bold drop-shadow">
            {rarity.stars}
          </span>
        </div>

        {/* Region Badge */}
        <div className="absolute bottom-2 right-2 z-10">
          <span className="text-[10px] font-medium text-slate-300 bg-slate-950/80 px-1.5 py-0.5 rounded border border-slate-800">
            {character.region}
          </span>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h3
              onClick={() => onSelect(character)}
              className="font-display font-bold text-base text-slate-100 group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1"
            >
              {character.name}
            </h3>
          </div>
          <p className="text-[11px] text-slate-400 line-clamp-1 italic mb-2">
            {character.title}
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-1 py-1 px-1.5 bg-slate-950/60 rounded border border-slate-800/80 text-[10px] text-slate-300 mb-2">
            <div>
              <span className="text-slate-500 block text-[9px]">Base HP</span>
              <span className="font-semibold text-slate-200">{character.stats.hpBase}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Base ATK</span>
              <span className="font-semibold text-slate-200">{character.stats.atkBase}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[9px]">Role</span>
              <span className="font-semibold text-amber-300 truncate block">{character.build.role}</span>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 gap-1.5">
          <button
            onClick={() => onSelect(character)}
            className="flex-1 flex items-center justify-center gap-1 py-1 px-2 text-[11px] font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded transition-colors"
          >
            <Eye className="w-3 h-3" />
            <span>Archive</span>
          </button>

          {onCompare && (
            <button
              onClick={() => onCompare(character)}
              className={`py-1 px-2 text-[11px] font-medium rounded border transition-colors ${
                isSelectedForCompare
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-800/60 hover:bg-slate-800 border-slate-700/60'
              }`}
              title="Compare with another character"
            >
              VS
            </button>
          )}

          {isAdmin && (
            <button
              onClick={() => onEdit(character)}
              id={`character-edit-btn-${character.id}`}
              className="p-1 text-slate-400 hover:text-amber-300 hover:bg-slate-800/80 rounded transition-colors"
              title="Edit character information"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
