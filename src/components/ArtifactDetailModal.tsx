import { ArtifactSet } from '../types';
import { GenshinImage } from './GenshinImage';
import { X, Edit3, Shield, MapPin, Sparkles, Users } from 'lucide-react';

interface ArtifactDetailModalProps {
  artifact: ArtifactSet;
  onClose: () => void;
  onEdit: (art: ArtifactSet) => void;
  isAdmin?: boolean;
}

export function ArtifactDetailModal({
  artifact,
  onClose,
  onEdit,
  isAdmin,
}: ArtifactDetailModalProps) {
  const pieces = [
    { type: 'Flower of Life', piece: artifact.pieces.flower },
    { type: 'Plume of Death', piece: artifact.pieces.feather },
    { type: 'Sands of Eon', piece: artifact.pieces.sands },
    { type: 'Goblet of Eonothem', piece: artifact.pieces.goblet },
    { type: 'Circlet of Logos', piece: artifact.pieces.circlet },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 bg-gradient-to-r from-amber-600/20 via-yellow-600/10 to-transparent flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-lg bg-slate-950 flex-shrink-0 flex items-center justify-center p-2">
              <GenshinImage
                src={artifact.iconUrl}
                alt={artifact.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {artifact.name}
                </h2>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  {artifact.maxRarity} ★ Set
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Domain / Source: <strong className="text-amber-300">{artifact.domainOrSource}</strong></span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={() => {
                  onClose();
                  onEdit(artifact);
                }}
                id="artifact-detail-edit-btn"
                className="p-2 rounded-lg bg-slate-950/60 hover:bg-slate-950 text-slate-300 hover:text-amber-300 border border-slate-700 transition-colors"
                title="Edit artifact set"
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

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
          {/* Set Bonuses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-block uppercase">
                2-Piece Set Effect
              </span>
              <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                {artifact.twoPieceBonus}
              </p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-1.5">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 inline-block uppercase">
                4-Piece Set Effect
              </span>
              <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                {artifact.fourPieceBonus}
              </p>
            </div>
          </div>

          {/* Recommended Characters */}
          {artifact.recommendedCharacters && artifact.recommendedCharacters.length > 0 && (
            <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-display font-bold text-xs uppercase">
                <Users className="w-4 h-4" />
                <span>Recommended Character Synergies</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {artifact.recommendedCharacters.map((charName, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-900 border border-slate-700/80 rounded-lg text-xs text-slate-200 font-medium"
                  >
                    {charName}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* All 5 Pieces Lore & Names */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 font-display">
              Set Pieces & Relic Artifacts
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pieces.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-950/60 border border-slate-800/80 rounded-xl space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold text-amber-400/90 tracking-wider">
                      {item.type}
                    </span>
                  </div>
                  <h5 className="font-display font-semibold text-slate-100 text-xs sm:text-sm">
                    {item.piece?.name || 'Standard Relic'}
                  </h5>
                  {item.piece?.description && (
                    <p className="text-[11px] text-slate-400 italic">
                      {item.piece.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
