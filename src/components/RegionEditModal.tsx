import React, { useState, useEffect } from 'react';
import { X, Sparkles, Trash2, MapPin, Shield, Compass } from 'lucide-react';
import { RegionInfo, ElementType, JOURNEY_REGION_ORDER } from '../types';
import { ImageInput } from './ImageInput';

interface RegionEditModalProps {
  region?: RegionInfo;
  isOpen: boolean;
  onClose: () => void;
  onSave: (region: RegionInfo) => void;
  onDelete?: (id: string) => void;
}

const CANONICAL_CHAPTERS = [
  'Prologue: The Outlander Who Caught the Wind',
  'Chapter I: Farewell, Archaic Lord',
  'Chapter II: Omnipresence Over Mortals',
  'Chapter III: Truth Amongst the Pages of Purana',
  'Chapter IV: Masquerade of the Guilty',
  'Chapter V: Incandescent Ode of Resurrection',
  'Autonomous March: Northern Frontier Territory',
  'Chapter VI: Everwinter Without Mercy',
  'Interlude Chapter',
];

const CANONICAL_IDEALS = [
  'Freedom',
  'Contracts',
  'Eternity',
  'Wisdom',
  'Justice',
  'War',
  'Autonomous Neutrality & Frontier Survival',
  'Love & Rebellion',
];

const REGION_TEMPLATES = [
  {
    name: 'Autonomous Frontier',
    description: 'Self-governed borderland with independent charters (like Nod Krai)',
    data: {
      name: 'Nod Krai',
      element: 'Cryo' as ElementType,
      ideal: 'Autonomous Neutrality & Frontier Survival',
      archon: 'Self-Governing Frontier Charter & Council',
      mainCity: 'Novy Krai Citadel',
      description: 'An autonomous border territory situated along the rugged permafrost frontiers. Governed by neutral ancient charters, fortified trade leagues, and frontier wardens.',
      bannerUrl: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1400&auto=format&fit=crop',
      emblemColor: '#38bdf8',
      isAutonomous: true,
      chapterNumber: 'Autonomous March: Northern Frontier Territory',
    }
  },
  {
    name: 'Sovereign Archon Realm',
    description: 'Classic nation ruled under the divine ideal of the Seven',
    data: {
      name: 'Natlan',
      element: 'Pyro' as ElementType,
      ideal: 'War',
      archon: 'Habitation of the Sacred Flame (Mavuika)',
      mainCity: 'Stadium of the Sacred Flame',
      description: 'The nation of Pyro, nestled amidst thermal gorges, sacred volcano crags, and ancient Saurian tribes.',
      bannerUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1400&auto=format&fit=crop',
      emblemColor: '#f97316',
      isAutonomous: false,
      chapterNumber: 'Chapter V: Incandescent Ode of Resurrection',
    }
  },
  {
    name: 'Maritime Port Sovereign',
    description: 'Bustling archipelago or port federation governed by law and trade covenants',
    data: {
      name: 'Fontaine',
      element: 'Hydro' as ElementType,
      ideal: 'Justice',
      archon: 'Court of Fontaine & Iudex Neuvillette',
      mainCity: 'Court of Fontaine',
      description: 'The center of culture, high fashion, legal jurisprudence, and advanced clockwork engineering in Teyvat.',
      bannerUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop',
      emblemColor: '#0ea5e9',
      isAutonomous: false,
      chapterNumber: 'Chapter IV: Masquerade of the Guilty',
    }
  }
];

export const RegionEditModal: React.FC<RegionEditModalProps> = ({
  region,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) => {
  const isEditing = Boolean(region);

  const [selectedNationName, setSelectedNationName] = useState<string>(region?.name || 'Mondstadt');
  const [customNationName, setCustomNationName] = useState<string>('');
  const [element, setElement] = useState<ElementType>(region?.element || 'Anemo');
  const [ideal, setIdeal] = useState(region?.ideal || 'Freedom');
  const [customIdeal, setCustomIdeal] = useState('');
  const [archon, setArchon] = useState(region?.archon || '');
  const [mainCity, setMainCity] = useState(region?.mainCity || '');
  const [description, setDescription] = useState(region?.description || '');
  const [bannerUrl, setBannerUrl] = useState(region?.bannerUrl || '');
  const [emblemColor, setEmblemColor] = useState(region?.emblemColor || '#f59e0b');
  const [isAutonomous, setIsAutonomous] = useState(region?.isAutonomous || false);
  const [chapterNumber, setChapterNumber] = useState(region?.chapterNumber || CANONICAL_CHAPTERS[0]);
  const [customChapter, setCustomChapter] = useState('');

  useEffect(() => {
    if (region) {
      if ((JOURNEY_REGION_ORDER as readonly string[]).includes(region.name)) {
        setSelectedNationName(region.name);
        setCustomNationName('');
      } else {
        setSelectedNationName('Custom');
        setCustomNationName(region.name);
      }
      setElement(region.element);

      if (CANONICAL_IDEALS.includes(region.ideal)) {
        setIdeal(region.ideal);
        setCustomIdeal('');
      } else {
        setIdeal('Custom');
        setCustomIdeal(region.ideal);
      }

      setArchon(region.archon);
      setMainCity(region.mainCity);
      setDescription(region.description);
      setBannerUrl(region.bannerUrl);
      setEmblemColor(region.emblemColor);
      setIsAutonomous(Boolean(region.isAutonomous));

      const foundChapter = CANONICAL_CHAPTERS.find(c => c.toLowerCase().includes(region.chapterNumber?.toLowerCase() || ''));
      if (foundChapter) {
        setChapterNumber(foundChapter);
        setCustomChapter('');
      } else if (region.chapterNumber) {
        setChapterNumber('Custom');
        setCustomChapter(region.chapterNumber);
      } else {
        setChapterNumber(CANONICAL_CHAPTERS[0]);
        setCustomChapter('');
      }
    }
  }, [region]);

  const applyTemplate = (t: typeof REGION_TEMPLATES[0]) => {
    if ((JOURNEY_REGION_ORDER as readonly string[]).includes(t.data.name)) {
      setSelectedNationName(t.data.name);
      setCustomNationName('');
    } else {
      setSelectedNationName('Custom');
      setCustomNationName(t.data.name);
    }
    setElement(t.data.element);
    setIdeal(t.data.ideal);
    setCustomIdeal('');
    setArchon(t.data.archon);
    setMainCity(t.data.mainCity);
    setDescription(t.data.description);
    setBannerUrl(t.data.bannerUrl);
    setEmblemColor(t.data.emblemColor);
    setIsAutonomous(t.data.isAutonomous);
    setChapterNumber(t.data.chapterNumber);
    setCustomChapter('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalName = selectedNationName === 'Custom' ? customNationName.trim() : selectedNationName;
    if (!finalName) {
      alert('Please provide a valid Nation / Region name.');
      return;
    }

    const finalIdeal = ideal === 'Custom' ? customIdeal.trim() : ideal;
    const finalChapter = chapterNumber === 'Custom' ? customChapter.trim() : chapterNumber;

    const id = region?.id || finalName.toLowerCase().trim().replace(/[^a-z0-9]/g, '-');

    const updated: RegionInfo = {
      id,
      name: finalName,
      element,
      ideal: finalIdeal || 'National Ideal',
      archon: archon.trim() || 'Regional Authority',
      mainCity: mainCity.trim() || 'Capital Citadel',
      description: description.trim() || 'A sovereign realm of Teyvat.',
      bannerUrl: bannerUrl.trim() || 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1400&auto=format&fit=crop',
      emblemColor: emblemColor || '#38bdf8',
      isAutonomous,
      chapterNumber: finalChapter || (isAutonomous ? 'Autonomous March' : 'Teyvat Chapter'),
      isCustom: true,
    };

    onSave(updated);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-950/60">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold font-display text-slate-100">
              {isEditing ? `Edit Nation: ${region?.name}` : 'Add New Nation / Region'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Templates Bar */}
        <div className="border-b border-slate-800/80 bg-slate-950/40 p-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quick Starter Templates</span>
            <span className="text-[11px] text-slate-500 font-normal ml-1">(Pre-fills canonical structure & graphics)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {REGION_TEMPLATES.map((t) => (
              <button
                key={t.name}
                type="button"
                onClick={() => applyTemplate(t)}
                className="rounded-lg border border-slate-800 bg-slate-900/90 p-2 text-left hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-xs group"
              >
                <div className="font-semibold text-slate-200 group-hover:text-amber-300">
                  {t.name}
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                  {t.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Row 1: Dropdown for Nation / Region */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Nation / Region *
              </label>
              <select
                value={selectedNationName}
                onChange={(e) => setSelectedNationName(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              >
                {JOURNEY_REGION_ORDER.map((nation) => (
                  <option key={nation} value={nation}>{nation}</option>
                ))}
                <option value="Custom">+ Custom Nation / Territory...</option>
              </select>
              {selectedNationName === 'Custom' && (
                <input
                  type="text"
                  required
                  value={customNationName}
                  onChange={(e) => setCustomNationName(e.target.value)}
                  placeholder="Enter custom region name..."
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Elemental Alignment *
              </label>
              <select
                value={element}
                onChange={(e) => setElement(e.target.value as ElementType)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              >
                <option value="Pyro">Pyro (Fire)</option>
                <option value="Hydro">Hydro (Water)</option>
                <option value="Anemo">Anemo (Wind)</option>
                <option value="Electro">Electro (Lightning)</option>
                <option value="Dendro">Dendro (Nature)</option>
                <option value="Cryo">Cryo (Frost)</option>
                <option value="Geo">Geo (Earth)</option>
              </select>
            </div>
          </div>

          {/* Row 2: Journey Chapter & Autonomous Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Journey Chapter / Story Arc
              </label>
              <select
                value={chapterNumber}
                onChange={(e) => setChapterNumber(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              >
                {CANONICAL_CHAPTERS.map((chap) => (
                  <option key={chap} value={chap}>{chap}</option>
                ))}
                <option value="Custom">+ Custom Story Arc...</option>
              </select>
              {chapterNumber === 'Custom' && (
                <input
                  type="text"
                  required
                  value={customChapter}
                  onChange={(e) => setCustomChapter(e.target.value)}
                  placeholder="e.g. Chapter VII: The Horizon..."
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
              )}
            </div>

            <div className="flex items-center pt-5">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-200">
                <input
                  type="checkbox"
                  checked={isAutonomous}
                  onChange={(e) => setIsAutonomous(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-500"
                />
                <span className="font-semibold text-amber-300 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  Autonomous Frontier Territory (e.g. Nod Krai)
                </span>
              </label>
            </div>
          </div>

          {/* Row 3: Divine Ideal & Ruling Authority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Divine Ideal / Principle
              </label>
              <select
                value={ideal}
                onChange={(e) => setIdeal(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 focus:border-amber-500 focus:outline-none"
              >
                {CANONICAL_IDEALS.map((idVal) => (
                  <option key={idVal} value={idVal}>{idVal}</option>
                ))}
                <option value="Custom">+ Custom Ideal...</option>
              </select>
              {ideal === 'Custom' && (
                <input
                  type="text"
                  required
                  value={customIdeal}
                  onChange={(e) => setCustomIdeal(e.target.value)}
                  placeholder="e.g. Innovation & Progress..."
                  className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
                />
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                {isAutonomous ? 'Governing Authority / Council' : 'Ruling Archon / Deity'}
              </label>
              <input
                type="text"
                value={archon}
                onChange={(e) => setArchon(e.target.value)}
                placeholder="e.g. Barbatos, Morax, Raiden Shogun, Mavuika, The Tsaritsa..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 4: Main Citadel & Theme Color */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Primary Citadel / Capital
              </label>
              <input
                type="text"
                value={mainCity}
                onChange={(e) => setMainCity(e.target.value)}
                placeholder="e.g. City of Mondstadt, Liyue Harbor, Court of Fontaine..."
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Emblem Accent Color
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={emblemColor}
                  onChange={(e) => setEmblemColor(e.target.value)}
                  className="h-8 w-12 rounded border border-slate-700 bg-slate-950 cursor-pointer p-0.5"
                />
                <input
                  type="text"
                  value={emblemColor}
                  onChange={(e) => setEmblemColor(e.target.value)}
                  placeholder="#38bdf8"
                  className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 font-mono focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Banner Landscape Image */}
          <ImageInput
            label="Nation Banner / Landscape Image"
            value={bannerUrl}
            onChange={setBannerUrl}
            aspectRatio="banner"
            placeholder="Paste landscape image URL or upload image file..."
            helperText="Provides the prominent landscape backdrop and inspection illustration for this Nation."
          />

          {/* Lore / Description */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Nation Description & Lore
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the nation's culture, geography, and historical legacy..."
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            {isEditing && onDelete && region && (
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Are you sure you want to delete "${region.name}"?`)) {
                    onDelete(region.id);
                    onClose();
                  }
                }}
                className="flex items-center gap-1.5 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3 py-2 text-xs font-medium text-rose-300 hover:bg-rose-500/20 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete Nation
              </button>
            )}
            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-amber-400 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                {isEditing ? 'Save Changes' : 'Create Nation'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
