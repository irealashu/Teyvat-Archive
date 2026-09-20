import React from 'react';
import { RegionInfo } from '../types';
import { ELEMENT_COLORS } from '../utils/elementStyles';
import { Eye, Shield, Edit3, MapPin, Compass } from 'lucide-react';

interface RegionCardProps {
  region: RegionInfo;
  onSelect: (r: RegionInfo) => void;
  onEdit?: (r: RegionInfo) => void;
  isAdmin?: boolean;
}

export function RegionCard({ region, onSelect, onEdit, isAdmin }: RegionCardProps) {
  const elem = ELEMENT_COLORS[region.element];

  return (
    <div
      id={`region-card-${region.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-2xl"
    >
      {/* Banner Backdrop */}
      <div
        className="relative h-44 w-full cursor-pointer overflow-hidden bg-slate-950"
        onClick={() => onSelect(region)}
      >
        <img
          src={region.bannerUrl}
          alt={region.name}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1400&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-950/40 to-black/30 pointer-events-none" />

        {/* Region Badge & Ideal */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border backdrop-blur-md ${elem.badge}`}>
            {region.element}
          </span>
          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 text-slate-200 border border-white/10 backdrop-blur-md">
            {region.ideal}
          </span>
          {region.isAutonomous && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-sky-950/80 text-sky-300 border border-sky-500/40 backdrop-blur-md flex items-center gap-1">
              <Shield className="w-2.5 h-2.5" />
              Autonomous
            </span>
          )}
        </div>

        {/* Edit Button for Curators */}
        {isAdmin && onEdit && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onEdit(region);
            }}
            title="Edit Nation (Curator Mode)"
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/70 hover:bg-amber-500 text-slate-300 hover:text-slate-950 border border-white/10 backdrop-blur-md transition-colors z-20"
          >
            <Edit3 className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <h3 className="font-display font-black text-2xl text-white drop-shadow-md tracking-wider">
            {region.name}
          </h3>
          <p className="text-xs text-amber-300 font-medium">
            {region.isAutonomous ? 'Authority: ' : 'Archon: '}
            {region.archon}
          </p>
        </div>
      </div>

      {/* Info Body */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
          {region.description}
        </p>

        {/* Key Geographic & Journey Badges */}
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
          <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-950 border border-slate-800/80">
            <MapPin className="w-3 h-3 text-amber-400" />
            <span className="truncate max-w-[130px]">{region.mainCity}</span>
          </div>
          {region.chapterNumber && (
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-slate-950 border border-slate-800/80">
              <Compass className="w-3 h-3 text-sky-400" />
              <span className="truncate max-w-[150px]">{region.chapterNumber}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-800/60 flex items-center justify-end gap-1.5">
          {isAdmin && onEdit && (
            <button
              type="button"
              onClick={() => onEdit(region)}
              className="flex items-center gap-1 py-1 px-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
            >
              <Edit3 className="w-3 h-3" />
              <span>Edit</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => onSelect(region)}
            className="flex items-center gap-1 py-1 px-3 text-xs font-medium text-amber-300 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors"
          >
            <Eye className="w-3 h-3" />
            <span>Explore</span>
          </button>
        </div>
      </div>
    </div>
  );
}
