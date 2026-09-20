import React from 'react';
import { RegionInfo } from '../types';
import { ELEMENT_COLORS } from '../utils/elementStyles';
import { X, Shield, MapPin, Sparkles, Compass, Edit3 } from 'lucide-react';

interface RegionDetailModalProps {
  region: RegionInfo;
  onClose: () => void;
  onEdit?: (r: RegionInfo) => void;
  isAdmin?: boolean;
}

export function RegionDetailModal({ region, onClose, onEdit, isAdmin }: RegionDetailModalProps) {
  const elem = ELEMENT_COLORS[region.element];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Title */}
        <div className="relative h-56 w-full bg-slate-950 flex-shrink-0 overflow-hidden">
          <img
            src={region.bannerUrl}
            alt={region.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-75"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1400&auto=format&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/50 to-transparent" />

          {/* Action buttons */}
          <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
            {isAdmin && onEdit && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEdit(region);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Nation</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Title and Badges */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border backdrop-blur-md ${elem.badge}`}>
                {region.element}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-black/60 text-slate-200 border border-white/10 backdrop-blur-md">
                Divine Ideal: {region.ideal}
              </span>
              {region.isAutonomous && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-sky-950/80 text-sky-300 border border-sky-500/40 backdrop-blur-md flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Autonomous Frontier
                </span>
              )}
            </div>
            <h2 className="font-display font-black text-3xl text-white drop-shadow-md">
              {region.name}
            </h2>
            <p className="text-sm text-amber-300 font-medium">
              {region.isAutonomous ? 'Regional Authority: ' : 'Ruling Archon: '}
              {region.archon}
            </p>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm flex-1">
          {/* Quick Fact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Primary Citadel / Capital</span>
              </div>
              <span className="font-display font-semibold text-slate-200 text-sm">
                {region.mainCity}
              </span>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>Journey Story Arc</span>
              </div>
              <span className="font-semibold text-slate-200 text-sm">
                {region.chapterNumber || (region.isAutonomous ? 'Autonomous March' : 'Teyvat Chapter')}
              </span>
            </div>
          </div>

          {/* Lore Overview */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-slate-200 text-sm flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>National History & Lore Overview</span>
            </h4>
            <p className="text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/80 text-xs sm:text-sm">
              {region.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
