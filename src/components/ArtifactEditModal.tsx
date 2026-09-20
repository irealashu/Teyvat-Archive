import React, { useState } from 'react';
import { ArtifactSet } from '../types';
import { X, Save, Trash2, Sparkles, Shield } from 'lucide-react';
import { ImageInput } from './ImageInput';

interface ArtifactEditModalProps {
  artifact?: ArtifactSet | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (art: ArtifactSet) => void;
  onDelete?: (id: string) => void;
}

const ARTIFACT_TEMPLATES = [
  {
    name: 'Natlan Nightsoul Set',
    desc: 'CRIT Rate boost during Nightsoul\'s Blessing',
    data: {
      twoPieceBonus: 'While the equipping character is in Nightsoul\'s Blessing and on the field, their DMG dealt is increased by 15%.',
      fourPieceBonus: 'After the equipping character consumes 1 Nightsoul point while on the field, CRIT Rate is increased by 40% for 6s. This effect can trigger once every 1s.',
      domainOrSource: 'Sanctum of Rainbow Spirits (Natlan)',
      recommendedCharacters: ['Mualani', 'Kinich', 'Chasca', 'Xilonen'],
    }
  },
  {
    name: 'Fontaine Sovereign Set',
    desc: 'Normal/Charged Atk & CRIT upon HP fluctuations',
    data: {
      twoPieceBonus: 'Normal and Charged Attack DMG +15%.',
      fourPieceBonus: 'When current HP increases or decreases, CRIT Rate will be increased by 12% for 5s. Max 3 stacks (36% CRIT Rate).',
      domainOrSource: 'Denouement of Sin (Fontaine)',
      recommendedCharacters: ['Neuvillette', 'Wriothesley', 'Lyney', 'Gaming'],
    }
  },
  {
    name: 'Team Burst Buffer Set',
    desc: 'Energy Recharge + 20% team ATK on Burst cast',
    data: {
      twoPieceBonus: 'Elemental Burst DMG +20%.',
      fourPieceBonus: 'Using an Elemental Burst increases all party members\' ATK by 20% for 12s. This effect cannot stack.',
      domainOrSource: 'Clear Pool and Mountain Cavern',
      recommendedCharacters: ['Bennett', 'Xiangling', 'Xingqiu', 'Faruzan'],
    }
  },
  {
    name: 'Elemental Mastery Reactor',
    desc: 'EM buff + stacking reaction bonuses',
    data: {
      twoPieceBonus: 'Increases Elemental Mastery by 80.',
      fourPieceBonus: 'Within 8s of triggering an Elemental Reaction, party members of the same element increase ATK by 14%, and differing elements increase EM by 50.',
      domainOrSource: 'Spire of Solitary Enlightenment (Sumeru)',
      recommendedCharacters: ['Nahida', 'Alhaitham', 'Cyno', 'Tighnari'],
    }
  }
];

const DEFAULT_EMPTY_ARTIFACT: ArtifactSet = {
  id: '',
  name: '',
  maxRarity: 5,
  iconUrl: 'https://enka.network/ui/UI_RelicIcon_15037_4.png',
  twoPieceBonus: 'Elemental DMG Bonus +15% or ATK +18%.',
  fourPieceBonus: 'Increases specific damage type upon triggering elemental reactions or abilities.',
  pieces: {
    flower: { name: 'Flower of Life', description: 'A fossilized flower.' },
    feather: { name: 'Plume of Death', description: 'A bird pinion feather.' },
    sands: { name: 'Sands of Eon', description: 'A timeless hourglass.' },
    goblet: { name: 'Goblet of Eonothem', description: 'A ceremonial chalice.' },
    circlet: { name: 'Circlet of Logos', description: 'An ancient headdress.' },
  },
  domainOrSource: 'Blessing Domain',
  recommendedCharacters: ['Main DPS', 'Sub-DPS']
};

export const ArtifactEditModal: React.FC<ArtifactEditModalProps> = ({
  artifact,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) => {
  if (!isOpen) return null;

  const isEditing = Boolean(artifact);
  const [formData, setFormData] = useState<ArtifactSet>(
    artifact ? JSON.parse(JSON.stringify(artifact)) : {
      ...DEFAULT_EMPTY_ARTIFACT,
      id: `art-${Date.now()}`
    }
  );

  const [recommendedInput, setRecommendedInput] = useState(
    formData.recommendedCharacters?.join(', ') || ''
  );

  const applyTemplate = (t: typeof ARTIFACT_TEMPLATES[0]) => {
    setFormData(prev => ({
      ...prev,
      twoPieceBonus: t.data.twoPieceBonus,
      fourPieceBonus: t.data.fourPieceBonus,
      domainOrSource: t.data.domainOrSource,
      recommendedCharacters: [...t.data.recommendedCharacters],
    }));
    setRecommendedInput(t.data.recommendedCharacters.join(', '));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter artifact set name');
      return;
    }
    const updated = {
      ...formData,
      recommendedCharacters: recommendedInput
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
    };
    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-display font-bold text-lg text-amber-300">
                {isEditing ? `Update Artifact Set: ${artifact?.name}` : 'Add New Artifact Set to Archive'}
              </h3>
              <p className="text-xs text-slate-400">
                Modify set bonus effects, domain drop sources, and recommended character synergies.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Starter Templates */}
        <div className="border-b border-slate-800/80 bg-slate-950/40 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quick Starter Templates</span>
            <span className="text-[11px] text-slate-500 font-normal ml-1">(Fills 2pc/4pc effects & domains)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {ARTIFACT_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.name}
                type="button"
                onClick={() => applyTemplate(tmpl)}
                className="rounded-lg border border-slate-800 bg-slate-900/90 p-2 text-left hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-xs group"
              >
                <div className="font-semibold text-slate-200 group-hover:text-amber-300 truncate">
                  {tmpl.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {tmpl.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Set Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
                placeholder="e.g. Obsidian Codex"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Max Rarity</label>
              <select
                value={formData.maxRarity || 5}
                onChange={(e) => setFormData({ ...formData, maxRarity: Number(e.target.value) as 4 | 5 })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value={5}>5-Star (Legendary Artifact)</option>
                <option value={4}>4-Star (Heroic Artifact)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Domain / Source Location</label>
              <input
                type="text"
                value={formData.domainOrSource}
                onChange={(e) => setFormData({ ...formData, domainOrSource: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
                placeholder="e.g. Sanctum of Rainbow Spirits"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-400 mb-1 font-medium">2-Piece Set Effect</label>
            <textarea
              rows={2}
              value={formData.twoPieceBonus}
              onChange={(e) => setFormData({ ...formData, twoPieceBonus: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-slate-400 mb-1 font-medium">4-Piece Set Effect</label>
            <textarea
              rows={3}
              value={formData.fourPieceBonus}
              onChange={(e) => setFormData({ ...formData, fourPieceBonus: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-slate-400 mb-1 font-medium">Recommended Characters (comma-separated)</label>
            <input
              type="text"
              value={recommendedInput}
              onChange={(e) => setRecommendedInput(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
              placeholder="e.g. Mualani, Kinich, Neuvillette, Furina"
            />
          </div>

          {/* Artifact Set Icon using ImageInput (URL or File Upload) */}
          <ImageInput
            label="Artifact Set Icon"
            value={formData.iconUrl}
            onChange={(url) => setFormData({ ...formData, iconUrl: url })}
            aspectRatio="square"
            placeholder="Paste set icon URL or upload local image..."
            helperText="Set icon representative of the flower or signature piece."
          />

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            {isEditing && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Are you sure you want to delete ${formData.name}?`)) {
                    onDelete(formData.id);
                    onClose();
                  }
                }}
                className="flex items-center gap-1 px-3 py-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg shadow transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Save Set</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
