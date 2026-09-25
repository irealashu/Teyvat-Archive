import React, { useState, useEffect } from 'react';
import { ArtifactSet } from '../types';
import ARTIFACTS from '../data/artifacts.json';
import { Search, Star, Sparkles, X, Gem, Shield, Layers } from 'lucide-react';
import { GenshinTextRenderer } from './GenshinTextRenderer';

export const ArchiveReliquaryView: React.FC = () => {
  const [items, setItems] = useState<any[]>(ARTIFACTS);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRarity, setSelectedRarity] = useState<number | 'All'>('All');
  const [selectedSetId, setSelectedSetId] = useState<string | number | null>(null);
  const [detailData, setDetailData] = useState<any>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'rarity-desc' | 'rarity-asc' | 'release-desc' | 'release-asc'>('release-desc');

  useEffect(() => {
      setItems(ARTIFACTS);
  }, []);

  const handleSelectSet = async (id: string | number) => {
    setSelectedSetId(id);
    setDetailLoading(true);
    
    // Look up details from our local pre-compiled data
    const artifact = ARTIFACTS.find(a => a.id == id || a.name.toLowerCase() === id.toString().toLowerCase());
    setDetailData(artifact || null);
    setDetailLoading(false);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRarity = selectedRarity === 'All' || item.rank === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  const parseVersion = (vStr?: string) => {
    if (!vStr) return 0;
    const parts = vStr.split('.').map(Number);
    const major = parts[0] || 0;
    const minor = parts[1] || 0;
    const patch = parts[2] || 0;
    return major * 10000 + minor * 100 + patch;
  };

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'release-desc') {
      const verA = parseVersion(a.version);
      const verB = parseVersion(b.version);
      if (verB !== verA) return verB - verA;
      const idA = Number(a.id) || 0;
      const idB = Number(b.id) || 0;
      if (idB !== idA) return idB - idA;
      return (b.rank || 0) - (a.rank || 0) || a.name.localeCompare(b.name);
    }
    if (sortBy === 'release-asc') {
      const verA = parseVersion(a.version);
      const verB = parseVersion(b.version);
      if (verA !== verB) return verA - verB;
      const idA = Number(a.id) || 0;
      const idB = Number(b.id) || 0;
      if (idA !== idB) return idA - idB;
      return (b.rank || 0) - (a.rank || 0) || a.name.localeCompare(b.name);
    }
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    if (sortBy === 'rarity-desc') {
      const rankA = a.rank || 0;
      const rankB = b.rank || 0;
      if (rankB !== rankA) return rankB - rankA;
      const verA = parseVersion(a.version);
      const verB = parseVersion(b.version);
      if (verB !== verA) return verB - verA;
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'rarity-asc') {
      const rankA = a.rank || 0;
      const rankB = b.rank || 0;
      if (rankA !== rankB) return rankA - rankB;
      const verA = parseVersion(a.version);
      const verB = parseVersion(b.version);
      if (verB !== verA) return verB - verA;
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const activeSet = items.find((a) => a.id === selectedSetId || a.name.toLowerCase() === selectedSetId?.toString().toLowerCase());
  const localSet = activeSet;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative p-6 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
              Reliquary & Artifact Compendium
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Inspect sacred reliquary sets from across Teyvat's ancient domains, complete with 2-Piece & 4-Piece elemental set effects and individual relic icons.
            </p>
          </div>

          <div className="text-right self-end md:self-auto">
            <span className="text-xs text-slate-400 font-mono">
              Total Recorded: <strong className="text-amber-300 font-bold">{filteredItems.length}</strong> / {items.length}
            </span>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search artifact set name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 border border-slate-800 rounded-xl">
            <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-xs text-amber-300 font-semibold focus:outline-none cursor-pointer"
            >
              <option value="release-desc" className="bg-slate-950 text-slate-200">Release: Newest First</option>
              <option value="release-asc" className="bg-slate-950 text-slate-200">Release: Oldest First</option>
              <option value="rarity-desc" className="bg-slate-950 text-slate-200">Rarity: High to Low</option>
              <option value="rarity-asc" className="bg-slate-950 text-slate-200">Rarity: Low to High</option>
              <option value="name-asc" className="bg-slate-950 text-slate-200">Name: A to Z</option>
              <option value="name-desc" className="bg-slate-950 text-slate-200">Name: Z to A</option>
            </select>
          </div>

          {/* Rarity Filter */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 border border-slate-800 rounded-xl">
            {(['All', 5, 4, 3] as const).map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRarity(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedRarity === r
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {r === 'All' ? 'All Sets' : `${r}★`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Artifact Sets */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-pulse">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="h-44 bg-slate-900 border border-slate-800 rounded-2xl"></div>
          ))}
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-200">No artifact sets found</h3>
          <p className="text-xs text-slate-400">
            Try adjusting your search query or set filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {sortedItems.map((item, idx) => (
            <button
              key={`${item.id}-${idx}`}
              onClick={() => handleSelectSet(item.id)}
              className="group relative p-4 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl text-left transition-all duration-300 flex flex-col items-center justify-between gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:-translate-y-1"
            >
              {/* Rarity */}
              <div className="w-full flex items-center justify-between text-[10px]">
                <span className={`px-2 py-0.5 rounded border font-semibold ${
                  item.rank === 5
                    ? 'text-amber-300 bg-amber-500/10 border-amber-500/30'
                    : item.rank === 4
                    ? 'text-purple-300 bg-purple-500/10 border-purple-500/30'
                    : 'text-blue-300 bg-blue-500/10 border-blue-500/30'
                }`}>
                  {item.minRank && item.maxRank && item.minRank !== item.maxRank
                    ? `${item.minRank}★–${item.maxRank}★`
                    : `${item.rank}★ Set`}
                </span>
                <span className={`flex items-center font-bold ${
                  item.rank === 5 ? 'text-amber-300' : item.rank === 4 ? 'text-purple-300' : 'text-blue-300'
                }`}>
                  {item.rank} <Star className={`w-3 h-3 ml-0.5 ${
                    item.rank === 5 ? 'fill-amber-300 text-amber-300' : item.rank === 4 ? 'fill-purple-300 text-purple-300' : 'fill-blue-300 text-blue-300'
                  }`} />
                </span>
              </div>

              {/* Set Icon */}
              <div className="relative w-20 h-20 rounded-2xl bg-slate-950 border border-slate-800 p-2 group-hover:border-amber-400/60 transition-colors">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (img.src.includes('yatta.moe') && item.filename) {
                      img.src = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${item.filename}.png`;
                    } else if (img.src.includes('mihoyo.com') && item.filename) {
                      img.src = `https://enka.network/ui/${item.filename}.png`;
                    } else if (!img.src.includes('genshin.jmp.blue') && item.slug) {
                      img.src = `https://genshin.jmp.blue/artifacts/${item.slug}/flower-of-life`;
                    }
                  }}
                />
              </div>

              {/* Name */}
              <div className="w-full text-center space-y-1">
                <h4 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 truncate w-full transition-colors">
                  {item.name}
                </h4>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Detail Modal */}
      {selectedSetId !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedSetId(null);
                setDetailData(null);
              }}
              className="absolute top-4 right-4 p-2 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {detailLoading ? (
              <div className="p-12 text-center space-y-3">
                <Sparkles className="w-8 h-8 text-amber-400 animate-spin mx-auto" />
                <p className="text-xs text-slate-400">Loading reliquary specifications...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/30 p-2 flex-shrink-0 shadow-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={
                        detailData?.icon ||
                        activeSet?.icon ||
                        (detailData?.filename ? `./assets/${detailData.filename}.png` : '') ||
                        localSet?.iconUrl ||
                        'https://enka.network/ui/UI_RelicIcon_15001_4.png'
                      }
                      alt={detailData?.name || activeSet?.name || localSet?.name || 'Artifact Set'}
                      className="w-full h-full object-contain filter drop-shadow-md"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        const filename = detailData?.filename || activeSet?.filename;
                        if (img.src.includes('yatta.moe') && filename) {
                          img.src = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${filename}.png`;
                        } else if (img.src.includes('mihoyo.com') && filename) {
                          img.src = `https://enka.network/ui/${filename}.png`;
                        } else if (!img.src.includes('genshin.jmp.blue') && (detailData?.slug || activeSet?.slug)) {
                          img.src = `https://genshin.jmp.blue/artifacts/${detailData?.slug || activeSet?.slug}/flower-of-life`;
                        } else {
                          img.src = 'https://enka.network/ui/UI_RelicIcon_15001_4.png';
                        }
                      }}
                    />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-2xl font-display font-bold text-slate-100">
                        {detailData?.name || localSet?.name || 'Artifact Set'}
                      </h2>
                      <div className="flex items-center gap-1">
                        {(detailData?.levelList || [localSet?.maxRarity || 5]).map((lvl: number) => (
                          <span
                            key={lvl}
                            className="text-amber-300 font-bold text-xs inline-flex items-center gap-0.5 bg-amber-500/10 px-2 py-0.5 border border-amber-500/30 rounded-lg"
                          >
                            {lvl} <Star className="w-3 h-3 fill-amber-300" />
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-400">
                      Reliquary Category: <strong className="text-amber-300">Artifact Set</strong>
                    </p>
                  </div>
                </div>

                {/* Set Effects Section */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-amber-400" /> Set Bonuses
                  </h3>

                  {(detailData?.twoPieceBonus || localSet?.twoPieceBonus) && (
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-1">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        2-Piece Set Bonus
                      </span>
                      <div className="text-xs text-slate-200 leading-relaxed font-sans">
                        <GenshinTextRenderer
                          text={detailData?.twoPieceBonus || localSet?.twoPieceBonus || 'ATK +18%'}
                        />
                      </div>
                    </div>
                  )}

                  {(detailData?.fourPieceBonus || localSet?.fourPieceBonus) && (
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-1">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                        4-Piece Set Bonus
                      </span>
                      <div className="text-xs text-slate-200 leading-relaxed font-sans">
                        <GenshinTextRenderer
                          text={
                            detailData?.fourPieceBonus ||
                            localSet?.fourPieceBonus ||
                            'Increases Normal Attack DMG by 35% if the wielder uses a Sword, Claymore, or Polearm.'
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 5 Set Pieces (Flower, Plume, Sands, Goblet, Circlet) */}
                {detailData?.suitPieces && detailData.suitPieces.length > 0 && (
                  <div className="space-y-3 pt-2">
                    <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Gem className="w-4 h-4 text-amber-400" /> Artifact Set Pieces ({detailData.suitPieces.length})
                    </h3>

                    <div className="space-y-3">
                      {detailData.suitPieces.map((piece: any, idx: number) => (
                        <div key={piece.id || idx} className="p-3.5 bg-slate-950 border border-slate-800 rounded-2xl flex items-start gap-3">
                          {piece.icon ? (
                            <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-amber-500/30 p-1 flex-shrink-0 flex items-center justify-center shadow-inner overflow-hidden">
                              <img
                                src={
                                  piece.icon.startsWith('http')
                                    ? piece.icon
                                    : `https://enka.network/ui/${piece.icon}.png`
                                }
                                alt={piece.name}
                                className="w-full h-full object-contain filter drop-shadow"
                                onError={(e) => {
                                  const img = e.target as HTMLImageElement;
                                  if (piece.icon && !img.src.includes('gi.yatta.moe')) {
                                    img.src = `https://gi.yatta.moe/assets/UI/${piece.icon}.png`;
                                  } else {
                                    img.src = 'https://enka.network/ui/UI_RelicIcon_15001_4.png';
                                  }
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                              <Gem className="w-5 h-5" />
                            </div>
                          )}

                          <div className="space-y-1 flex-1">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                              <h4 className="text-xs font-bold text-slate-100">{piece.name}</h4>
                              <span className="px-2 py-0.5 bg-slate-900 text-slate-400 border border-slate-800 text-[10px] font-semibold rounded-md">
                                {piece.slotName}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-400 italic leading-relaxed">
                              "{piece.description}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
