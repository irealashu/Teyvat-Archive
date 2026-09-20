import React from 'react';
import { ActiveTab } from '../types';
import { X, Users, Sword, Shield, Compass } from 'lucide-react';

interface AddEntryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectType: (type: 'characters' | 'weapons' | 'artifacts' | 'regions') => void;
}

export function AddEntryModal({ isOpen, onClose, onSelectType }: AddEntryModalProps) {
  if (!isOpen) return null;

  const options = [
    {
      id: 'characters' as const,
      label: 'New Character',
      desc: 'Create and catalogue a playable character with stats, talents, constellations, and builds.',
      icon: <Users className="w-6 h-6 text-amber-400" />,
      border: 'hover:border-amber-400/60',
    },
    {
      id: 'weapons' as const,
      label: 'New Weapon',
      desc: 'Add a 3★, 4★, or 5★ weapon with base ATK, sub-stat, and refinement passive scaling.',
      icon: <Sword className="w-6 h-6 text-red-400" />,
      border: 'hover:border-red-400/60',
    },
    {
      id: 'artifacts' as const,
      label: 'New Artifact Set',
      desc: 'Add relic sets with 2-piece and 4-piece set bonuses, domain locations, and character synergies.',
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      border: 'hover:border-emerald-400/60',
    },
    {
      id: 'regions' as const,
      label: 'New Nation / Region',
      desc: 'Create sovereign archon realms or autonomous frontier borderlands (like Nod Krai).',
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      border: 'hover:border-cyan-400/60',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display font-bold text-lg text-slate-100">
              Add New Entry to Archive
            </h3>
            <p className="text-xs text-slate-400">
              Choose the category you wish to expand with starter templates or custom attributes.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => {
                onClose();
                onSelectType(opt.id);
              }}
              className={`p-4 bg-slate-950/70 border border-slate-800 rounded-xl text-left transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-900 ${opt.border}`}
            >
              <div className="mb-2">{opt.icon}</div>
              <h4 className="font-display font-bold text-sm text-slate-200 mb-1">
                {opt.label}
              </h4>
              <p className="text-[11px] text-slate-400 leading-tight">
                {opt.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
