import React, { useState, useEffect } from 'react';
import { Weapon } from '../types';
import { INITIAL_WEAPONS } from '../data/weapons';
import { fetchAmberList, fetchAmberDetail, AmberListItem, formatWeaponType } from '../services/amberService';
import { Search, Star, Filter, Sparkles, X, Swords, BookOpen, Shield, Zap } from 'lucide-react';
import { GenshinTextRenderer } from './GenshinTextRenderer';

export const ArchiveWeaponView: React.FC = () => {
  const [items, setItems] = useState<AmberListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedWeaponType, setSelectedWeaponType] = useState<string>('All');
  const [selectedRarity, setSelectedRarity] = useState<number | 'All'>('All');
  const [selectedWeaponId, setSelectedWeaponId] = useState<string | number | null>(null);
  const [detailData, setDetailData] = useState<any>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [refinementLevel, setRefinementLevel] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'story'>('overview');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'rarity-desc' | 'rarity-asc' | 'release-desc' | 'release-asc'>('release-desc');

  useEffect(() => {
    let isMounted = true;
    async function loadWeapons() {
      setLoading(true);
      const list = await fetchAmberList('weapon');
      if (isMounted) {
        if (list && list.length > 0) {
          setItems(list);
        } else {
          setItems(
            INITIAL_WEAPONS.map((w: Weapon) => ({
              id: w.id,
              name: w.name,
              icon: w.iconUrl,
              rank: w.rarity,
              weaponType: w.type,
              description: w.description,
            }))
          );
        }
        setLoading(false);
      }
    }
    loadWeapons();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelectWeapon = async (id: string | number) => {
    setSelectedWeaponId(id);
    setRefinementLevel(1);
    setActiveTab('overview');
    setDetailLoading(true);
    const local = INITIAL_WEAPONS.find((w: Weapon) => w.id === id || w.name.toLowerCase() === id.toString().toLowerCase());
    const remoteDetail = await fetchAmberDetail('weapon', id);

    if (remoteDetail) {
      setDetailData(remoteDetail);
    } else if (local) {
      setDetailData(local);
    } else {
      setDetailData(null);
    }
    setDetailLoading(false);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType =
      selectedWeaponType === 'All' ||
      formatWeaponType(item.weaponType).toLowerCase() === selectedWeaponType.toLowerCase();
    const matchesRarity = selectedRarity === 'All' || item.rank === selectedRarity;

    return matchesSearch && matchesType && matchesRarity;
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
      return (b.rank || 0) - (a.rank || 0) || a.name.localeCompare(b.name);
    }
    if (sortBy === 'release-asc') {
      const verA = parseVersion(a.version);
      const verB = parseVersion(b.version);
      if (verA !== verB) return verA - verB;
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
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'rarity-asc') {
      const rankA = a.rank || 0;
      const rankB = b.rank || 0;
      if (rankA !== rankB) return rankA - rankB;
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const localWeapon = INITIAL_WEAPONS.find((w: Weapon) => w.id === selectedWeaponId || w.name.toLowerCase() === selectedWeaponId?.toString().toLowerCase());

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative p-6 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
              Weapon Arsenal
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Inspect Teyvat's legendary swords, claymores, polearms, bows, and catalysts with base ATK values, substat scalings, and passive refinement bonuses.
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
      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl backdrop-blur-md space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search weapon by name..."
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
            {(['All', 5, 4, 3, 2, 1] as const).map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRarity(r)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedRarity === r
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {r === 'All' ? 'All' : `${r}★`}
              </button>
            ))}
          </div>
        </div>

        {/* Weapon Type Filter */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs">
          <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-amber-400" /> Type:
          </span>
          {['All', 'Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'].map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWeaponType(w)}
              className={`px-2.5 py-1 rounded-lg border font-medium transition-all ${
                selectedWeaponType === w
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Weapons */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-pulse">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="h-48 bg-slate-900 border border-slate-800 rounded-2xl"></div>
          ))}
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-200">No weapons found</h3>
          <p className="text-xs text-slate-400">
            Try adjusting your search query or weapon type filter.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sortedItems.map((item, idx) => {
            const formattedType = formatWeaponType(item.weaponType);

            return (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => handleSelectWeapon(item.id)}
                className="group relative p-3 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl text-left transition-all duration-300 flex flex-col items-center justify-between gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:-translate-y-1"
              >
                {/* Rarity Badge */}
                <div className="w-full flex items-center justify-between text-[10px]">
                  <span className="px-2 py-0.5 rounded border bg-slate-800 text-slate-300 border-slate-700 font-semibold">
                    {formattedType}
                  </span>
                  <span className="flex items-center text-amber-300 font-bold">
                    {item.rank} <Star className="w-3 h-3 fill-amber-300 text-amber-300 ml-0.5" />
                  </span>
                </div>

                {/* Weapon Icon Frame */}
                <div className="relative w-20 h-20 rounded-2xl bg-slate-950 border border-slate-800 p-1 group-hover:border-amber-400/60 transition-colors">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain p-1"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.src.includes('yatta.moe') && item.filename) {
                        img.src = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${item.filename}.png`;
                      } else if (img.src.includes('mihoyo.com') && item.filename) {
                        img.src = `https://enka.network/ui/${item.filename}.png`;
                      } else if (!img.src.includes('genshin.jmp.blue') && item.slug) {
                        img.src = `https://genshin.jmp.blue/weapons/${item.slug}/icon`;
                      }
                    }}
                  />
                </div>

                {/* Name */}
                <div className="w-full text-center space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 truncate w-full transition-colors">
                    {item.name}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Weapon Detail Modal */}
      {selectedWeaponId !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedWeaponId(null);
                setDetailData(null);
              }}
              className="absolute top-4 right-4 p-2 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {detailLoading ? (
              <div className="p-12 text-center space-y-3">
                <Sparkles className="w-8 h-8 text-amber-400 animate-spin mx-auto" />
                <p className="text-xs text-slate-400">Loading weapon specifications...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Header Card */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/30 p-2 flex-shrink-0 shadow-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={
                        detailData?.icon
                          ? detailData.icon.startsWith('http')
                            ? detailData.icon
                            : `https://gi.yatta.moe/assets/UI/${detailData.icon}.png`
                          : localWeapon?.iconUrl || ''
                      }
                      alt={detailData?.name || localWeapon?.name}
                      className="w-full h-full object-contain filter drop-shadow-md"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = 'https://enka.network/ui/UI_EquipIcon_Sword_Blunt.png';
                      }}
                    />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-2xl font-display font-bold text-slate-100">
                        {detailData?.name || localWeapon?.name}
                      </h2>
                      <span className="text-amber-300 font-bold text-xs inline-flex items-center gap-0.5 bg-amber-500/10 px-2.5 py-0.5 border border-amber-500/30 rounded-lg">
                        {detailData?.rank || localWeapon?.rarity || 5} <Star className="w-3.5 h-3.5 fill-amber-300" />
                      </span>
                    </div>

                    <p className="text-xs text-slate-400">
                      Weapon Type: <strong className="text-amber-300">{formatWeaponType(detailData?.type || detailData?.weaponType || localWeapon?.type)}</strong>
                    </p>
                  </div>
                </div>

                {/* Base Stats & Substat Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider flex items-center gap-1">
                      <Shield className="w-3 h-3 text-amber-400" /> Base ATK (Lv. 90)
                    </span>
                    <p className="text-lg font-bold text-amber-300">
                      {detailData?.baseAtk || localWeapon?.baseAtk || 542}
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider flex items-center gap-1">
                      <Zap className="w-3 h-3 text-cyan-400" /> Secondary Stat
                    </span>
                    <p className="text-lg font-bold text-slate-100">
                      {detailData?.subStatType || detailData?.subStat || localWeapon?.subStatType || 'Secondary Stat'}{' '}
                      <span className="text-xs font-semibold text-cyan-300">
                        ({detailData?.subStatValue || '44.1%'})
                      </span>
                    </p>
                  </div>
                </div>

                {/* Refinement Passive Section */}
                {(detailData?.passiveName || localWeapon?.passiveName) && (
                  <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-slate-900">
                      <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Zap className="w-4 h-4 text-amber-400" />
                        Refinement Passive: {detailData?.passiveName || localWeapon?.passiveName}
                      </h4>

                      {/* R1 - R5 Level Switcher */}
                      <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                        {[1, 2, 3, 4, 5].map((r) => (
                          <button
                            key={r}
                            onClick={() => setRefinementLevel(r)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                              refinementLevel === r
                                ? 'bg-amber-500 text-slate-950 shadow'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            R{r}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-slate-300 leading-relaxed font-sans">
                      <GenshinTextRenderer
                        text={
                          detailData?.refinements?.[refinementLevel] ||
                          detailData?.passiveDescription ||
                          localWeapon?.passiveDescription ||
                          'Increases stats and triggers specialized elemental passive skills.'
                        }
                      />
                    </div>
                  </div>
                )}

                {/* Tabs: Overview vs Story */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                        activeTab === 'overview'
                          ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                          : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      <Swords className="w-4 h-4" />
                      Overview & Description
                    </button>

                    <button
                      onClick={() => setActiveTab('story')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                        activeTab === 'story'
                          ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                          : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      <BookOpen className="w-4 h-4" />
                      Weapon Lore Story
                    </button>
                  </div>

                  {activeTab === 'overview' && (
                    <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-2">
                      <h4 className="text-[10px] font-bold text-amber-400/80 uppercase tracking-wider">Description</h4>
                      <div className="text-xs text-slate-300 leading-relaxed font-sans">
                        <GenshinTextRenderer
                          text={
                            detailData?.description ||
                            localWeapon?.description ||
                            'A weapon of remarkable craftsmanship preserved in Teyvat.'
                          }
                        />
                      </div>
                    </div>
                  )}

                  {activeTab === 'story' && (
                    <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-3 max-h-80 overflow-y-auto">
                      <h4 className="text-[10px] font-bold text-amber-400/80 uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> Full Weapon Story
                      </h4>
                      {detailData?.story ? (
                        <div className="text-xs text-slate-300 leading-relaxed font-sans space-y-2">
                          <GenshinTextRenderer text={detailData.story} />
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400 italic">
                          "{detailData?.description || localWeapon?.description || 'No detailed story recorded for this weapon.'}"
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
