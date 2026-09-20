import { ArtifactSet } from '../types';
import { GenshinImage } from './GenshinImage';
import { Edit3, Eye, Shield, MapPin, Sparkles } from 'lucide-react';

interface ArtifactCardProps {
  artifact: ArtifactSet;
  onSelect: (art: ArtifactSet) => void;
  onEdit: (art: ArtifactSet) => void;
  isAdmin?: boolean;
}

export function ArtifactCard({
  artifact,
  onSelect,
  onEdit,
  isAdmin,
}: ArtifactCardProps) {
  return (
    <div
      id={`artifact-card-${artifact.id}`}
      className="group relative flex flex-col rounded-xl overflow-hidden border border-amber-500/20 bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl"
    >
      {/* Header Area */}
      <div
        className="relative h-40 w-full cursor-pointer overflow-hidden bg-slate-950 flex items-center justify-center p-4 bg-gradient-to-b from-amber-500/10 via-slate-900/90 to-slate-950"
        onClick={() => onSelect(artifact)}
      >
        <GenshinImage
          src={artifact.iconUrl}
          alt={artifact.name}
          className="w-28 h-28 object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]"
        />

        {/* Rarity */}
        <div className="absolute top-2 left-2 z-10">
          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
            {artifact.maxRarity} ★ Set
          </span>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-3 flex-1 flex flex-col justify-between">
        <div>
          <h3
            onClick={() => onSelect(artifact)}
            className="font-display font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors cursor-pointer line-clamp-1 mb-2"
          >
            {artifact.name}
          </h3>

          <div className="space-y-1.5 text-[11px] mb-3">
            <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold block text-[10px]">2-Piece Set:</span>
              <p className="text-slate-300 line-clamp-2">{artifact.twoPieceBonus}</p>
            </div>
            <div className="p-1.5 rounded bg-slate-950/60 border border-slate-800">
              <span className="text-amber-400 font-bold block text-[10px]">4-Piece Set:</span>
              <p className="text-slate-300 line-clamp-2">{artifact.fourPieceBonus}</p>
            </div>
          </div>

          {/* Recommended users */}
          {artifact.recommendedCharacters && artifact.recommendedCharacters.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {artifact.recommendedCharacters.slice(0, 3).map((ch, idx) => (
                <span
                  key={idx}
                  className="px-1.5 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {ch}
                </span>
              ))}
              {artifact.recommendedCharacters.length > 3 && (
                <span className="text-[10px] text-slate-400 self-center">
                  +{artifact.recommendedCharacters.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-800/60 gap-1.5">
          <button
            onClick={() => onSelect(artifact)}
            className="flex-1 flex items-center justify-center gap-1 py-1 px-2 text-[11px] font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded transition-colors"
          >
            <Eye className="w-3 h-3" />
            <span>Set Details</span>
          </button>

          {isAdmin && (
            <button
              onClick={() => onEdit(artifact)}
              id={`artifact-edit-btn-${artifact.id}`}
              className="p-1 text-slate-400 hover:text-amber-300 hover:bg-slate-800/80 rounded transition-colors"
              title="Edit artifact set"
            >
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
