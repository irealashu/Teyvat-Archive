import React, { useState, useEffect } from 'react';
import { Character } from '../types';
import { INITIAL_CHARACTERS } from '../data/characters';
import AVATARS from '../data/avatars.json';
import { Search, Star, Filter, Sparkles, X, Shield, Zap, User, BookOpen, Mic } from 'lucide-react';
import { GenshinTextRenderer } from './GenshinTextRenderer';
import { formatElementType, formatWeaponType } from '../services/amberService';

export const ArchiveAvatarView: React.FC = () => {
  const [items, setItems] = useState<any[]>(AVATARS);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState<string>('All');
  const [selectedWeapon, setSelectedWeapon] = useState<string>('All');
  const [selectedRarity, setSelectedRarity] = useState<number | 'All'>('All');
  const [selectedCharId, setSelectedCharIndex] = useState<string | number | null>(null);
  const [detailData, setDetailData] = useState<any>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailTab, setDetailTab] = useState<'profile' | 'talent' | 'constellation'>('profile');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'rarity-desc' | 'rarity-asc' | 'release-desc' | 'release-asc'>('release-desc');

  useEffect(() => {
      setItems(AVATARS);
  }, []);

  const handleSelectChar = async (id: string | number) => {
    setSelectedCharIndex(id);
    setDetailTab('profile');
    setDetailLoading(true);
    
    // In static mode, we look up details from our local pre-compiled data
    const char = AVATARS.find(c => c.id == id || c.name.toLowerCase() === id.toString().toLowerCase());
    
    if (char) {
      setDetailData(char);
    } else {
      const local = INITIAL_CHARACTERS.find((c: Character) => c.id === id || c.name.toLowerCase() === id.toString().toLowerCase());
      setDetailData(local || null);
    }
    setDetailLoading(false);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesElement =
      selectedElement === 'All' ||
      formatElementType(item.element).toLowerCase() === selectedElement.toLowerCase() ||
      (formatElementType(item.element) === 'Multi' && selectedElement !== 'All');
    const matchesWeapon =
      selectedWeapon === 'All' ||
      formatWeaponType(item.weaponType).toLowerCase() === selectedWeapon.toLowerCase();
    const matchesRarity = selectedRarity === 'All' || item.rank === selectedRarity;

    return matchesSearch && matchesElement && matchesWeapon && matchesRarity;
  });

  const parseVersion = (v?: string | number): number => {
    if (!v) return 0;
    const parts = String(v).split('.').map((num) => parseInt(num, 10) || 0);
    const major = parts[0] || 0;
    const minor = parts[1] || 0;
    const patch = parts[2] || 0;
    return major * 10000 + minor * 100 + patch;
  };

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'release-desc') {
      const vA = parseVersion(a.version);
      const vB = parseVersion(b.version);
      if (vB !== vA) return vB - vA;
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'release-asc') {
      const vA = parseVersion(a.version);
      const vB = parseVersion(b.version);
      if (vA !== vB) return vA - vB;
      return a.name.localeCompare(b.name);
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

  const getElementColor = (elem?: string) => {
    const formatted = formatElementType(elem);
    switch (formatted) {
      case 'Pyro': return 'bg-rose-500/20 text-rose-400 border-rose-500/30';
      case 'Hydro': return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'Anemo': return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      case 'Electro': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Dendro': return 'bg-lime-500/20 text-lime-400 border-lime-500/30';
      case 'Cryo': return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
      case 'Geo': return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      case 'Multi': return 'bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-sky-500/20 text-amber-300 border-emerald-500/40 font-bold';
      default: return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const localChar = INITIAL_CHARACTERS.find((c: Character) => c.id === selectedCharId || c.name.toLowerCase() === selectedCharId?.toString().toLowerCase());
  const activeChar = items.find((c) => c.id === selectedCharId || c.name.toLowerCase() === selectedCharId?.toString().toLowerCase());

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative p-6 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
              Character Archive
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Explore Teyvat's complete roster of playable heroes, complete with base combat statistics, talent scaling, constellation lore, and elemental vision profiles.
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
              placeholder="Search character by name..."
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
              <option value="rarity-desc" className="bg-slate-950 text-slate-200">Rarity: High to Low</option>
              <option value="rarity-asc" className="bg-slate-950 text-slate-200">Rarity: Low to High</option>
              <option value="release-desc" className="bg-slate-950 text-slate-200">Release: Newest First</option>
              <option value="release-asc" className="bg-slate-950 text-slate-200">Release: Oldest First</option>
              <option value="name-asc" className="bg-slate-950 text-slate-200">Name: A to Z</option>
              <option value="name-desc" className="bg-slate-950 text-slate-200">Name: Z to A</option>
            </select>
          </div>

          {/* Rarity Filter */}
          <div className="flex items-center gap-1 bg-slate-950 p-1 border border-slate-800 rounded-xl">
            {(['All', 5, 4] as const).map((r) => (
              <button
                key={r}
                onClick={() => setSelectedRarity(r)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedRarity === r
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {r === 'All' ? 'All Star' : `${r}★`}
              </button>
            ))}
          </div>
        </div>

        {/* Element & Weapon Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80 text-xs">
          <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3 text-amber-400" /> Element:
          </span>
          {['All', 'Pyro', 'Hydro', 'Anemo', 'Electro', 'Dendro', 'Cryo', 'Geo'].map((elem) => (
            <button
              key={elem}
              onClick={() => setSelectedElement(elem)}
              className={`px-2.5 py-1 rounded-lg border font-medium transition-all ${
                selectedElement === elem
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {elem}
            </button>
          ))}

          <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] ml-2 mr-1">
            Weapon:
          </span>
          {['All', 'Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'].map((w) => (
            <button
              key={w}
              onClick={() => setSelectedWeapon(w)}
              className={`px-2.5 py-1 rounded-lg border font-medium transition-all ${
                selectedWeapon === w
                  ? 'bg-amber-500/20 text-amber-300 border-amber-400'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Characters */}
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 animate-pulse">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="h-48 bg-slate-900 border border-slate-800 rounded-2xl"></div>
          ))}
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="p-12 text-center bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-200">No characters found</h3>
          <p className="text-xs text-slate-400">
            Try adjusting your search keywords, element, or weapon filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sortedItems.map((item, idx) => {
            const formattedElement = formatElementType(item.element);
            const formattedWeapon = formatWeaponType(item.weaponType);

            return (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => handleSelectChar(item.id)}
                className="group relative p-3 bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl text-left transition-all duration-300 flex flex-col items-center justify-between gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:-translate-y-1"
              >
                {/* Rarity & Element Badges */}
                <div className="w-full flex items-center justify-between text-[10px]">
                  <span className={`px-2 py-0.5 rounded border font-semibold ${getElementColor(item.element)}`}>
                    {formattedElement}
                  </span>
                  <span className="flex items-center text-amber-300 font-bold">
                    {item.rank} <Star className="w-3 h-3 fill-amber-300 text-amber-300 ml-0.5" />
                  </span>
                </div>

                {/* Character Icon Frame */}
                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 p-1 group-hover:border-amber-400/60 transition-colors">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.src.includes('yatta.moe') && item.filename) {
                        img.src = `https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/${item.filename}.png`;
                      } else if (img.src.includes('mihoyo.com') && item.filename) {
                        img.src = `https://enka.network/ui/${item.filename}.png`;
                      } else if (!img.src.includes('genshin.jmp.blue') && item.slug) {
                        img.src = `https://genshin.jmp.blue/characters/${item.slug}/icon`;
                      } else {
                        img.src = 'https://enka.network/ui/UI_AvatarIcon_Paimon.png';
                      }
                    }}
                  />
                </div>

                {/* Name & Weapon Type */}
                <div className="w-full text-center space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-100 group-hover:text-amber-300 truncate w-full transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 truncate">
                    {formattedWeapon}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Character Detail Drawer Modal */}
      {selectedCharId !== null && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-6 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedCharIndex(null);
                setDetailData(null);
              }}
              className="absolute top-4 right-4 p-2 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {detailLoading ? (
              <div className="p-12 text-center space-y-3">
                <Sparkles className="w-8 h-8 text-amber-400 animate-spin mx-auto" />
                <p className="text-xs text-slate-400">Loading character archive record...</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Header Card */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-4 border-b border-slate-800">
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/30 p-1 flex-shrink-0 shadow-xl overflow-hidden group">
                    <img
                      src={
                        detailData?.icon
                          ? detailData.icon.startsWith('http')
                            ? detailData.icon
                            : `https://gi.yatta.moe/assets/UI/${detailData.icon}.png`
                          : activeChar?.icon || localChar?.iconUrl || 'https://enka.network/ui/UI_AvatarIcon_Paimon.png'
                      }
                      alt={detailData?.name || activeChar?.name || localChar?.name}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = activeChar?.icon || 'https://enka.network/ui/UI_AvatarIcon_Paimon.png';
                      }}
                    />
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                        {detailData?.name || localChar?.name}
                      </h2>
                      <span className={`px-3 py-0.5 text-xs font-semibold rounded-lg border ${getElementColor(detailData?.element || localChar?.element)}`}>
                        {formatElementType(detailData?.element || localChar?.element)}
                      </span>
                      <span className="text-amber-300 font-bold text-xs inline-flex items-center gap-0.5 bg-amber-500/10 px-2 py-0.5 border border-amber-500/30 rounded-lg">
                        {detailData?.rank || localChar?.rarity || 5} <Star className="w-3.5 h-3.5 fill-amber-300" />
                      </span>
                    </div>

                    {detailData?.title && (
                      <p className="text-xs font-semibold text-amber-300/90 tracking-wide uppercase">
                        ✦ {detailData.title} ✦
                      </p>
                    )}

                    <div className="flex items-center gap-3 text-xs text-slate-400 flex-wrap">
                      <span>Weapon: <strong className="text-slate-200">{formatWeaponType(detailData?.weaponType || localChar?.weaponType)}</strong></span>
                      <span>•</span>
                      <span>Region / Affiliation: <strong className="text-amber-300">{detailData?.region || detailData?.affiliation || localChar?.region || 'Teyvat'}</strong></span>
                      {detailData?.constellation && (
                        <>
                          <span>•</span>
                          <span>Constellation: <strong className="text-cyan-300">{detailData.constellation}</strong></span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Mode Selector Tabs (Profile, Talent, Constellation) */}
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <button
                    onClick={() => setDetailTab('profile')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      detailTab === 'profile'
                        ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <User className="w-4 h-4" />
                    Profile
                  </button>

                  <button
                    onClick={() => setDetailTab('talent')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      detailTab === 'talent'
                        ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-4 h-4" />
                    Talents {detailData?.skills?.length ? `(${detailData.skills.length + (detailData.passives?.length || 0)})` : ''}
                  </button>

                  <button
                    onClick={() => setDetailTab('constellation')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      detailTab === 'constellation'
                        ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    Constellation {detailData?.constellations?.length ? `(${detailData.constellations.length})` : ''}
                  </button>
                </div>

                {/* TAB 1: PROFILE */}
                {detailTab === 'profile' && (
                  <div className="space-y-6">
                    {/* Character Story / Lore */}
                    <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                      <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                        <BookOpen className="w-4 h-4" /> Character Overview & Lore
                      </h3>
                      <div className="text-xs text-slate-300 leading-relaxed font-sans">
                        <GenshinTextRenderer
                          text={detailData?.description || detailData?.fetter?.detail || localChar?.description || 'A renowned hero traveling across the lands of Teyvat.'}
                          fallbackIconUrl={detailData?.icon}
                        />
                      </div>
                    </div>

                    {/* Fetter Details & Voice Actors Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Character Profile Info */}
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-4 h-4" /> Profile Fetter Records
                        </h4>
                        <div className="space-y-2 text-xs font-mono">
                          <div className="flex justify-between p-2 bg-slate-900 rounded-lg">
                            <span className="text-slate-400">Constellation</span>
                            <span className="font-bold text-cyan-300">
                              {detailData?.constellation || detailData?.fetter?.constellation || localChar?.constellationName || 'Unknown'}
                            </span>
                          </div>
                          <div className="flex justify-between p-2 bg-slate-900 rounded-lg">
                            <span className="text-slate-400">Affiliation / Native</span>
                            <span className="font-bold text-amber-300">
                              {detailData?.affiliation || detailData?.fetter?.native || localChar?.region || 'Teyvat'}
                            </span>
                          </div>
                          <div className="flex justify-between p-2 bg-slate-900 rounded-lg">
                            <span className="text-slate-400">Birthday</span>
                            <span className="font-bold text-slate-100">
                              {detailData?.birthday || localChar?.birthday || 'Unknown'}
                            </span>
                          </div>
                          <div className="flex justify-between p-2 bg-slate-900 rounded-lg">
                            <span className="text-slate-400">Region</span>
                            <span className="font-bold text-slate-100">
                              {detailData?.region || localChar?.region || 'Teyvat'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Voice Actors (CV) */}
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Mic className="w-4 h-4" /> Voice Actors (CV)
                        </h4>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between items-center p-2 bg-slate-900 rounded-lg">
                            <span className="text-slate-400 font-medium">🇺🇸 English CV</span>
                            <span className="font-bold text-slate-100">
                              {detailData?.fetter?.cv?.EN || 'English Cast'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-slate-900 rounded-lg">
                            <span className="text-slate-400 font-medium">🇯🇵 Japanese CV</span>
                            <span className="font-bold text-slate-100">
                              {detailData?.fetter?.cv?.JP || 'Japanese Cast'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-slate-900 rounded-lg">
                            <span className="text-slate-400 font-medium">🇨🇳 Chinese CV</span>
                            <span className="font-bold text-slate-100">
                              {detailData?.fetter?.cv?.CHS || 'Chinese Cast'}
                            </span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-slate-900 rounded-lg">
                            <span className="text-slate-400 font-medium">🇰🇷 Korean CV</span>
                            <span className="font-bold text-slate-100">
                              {detailData?.fetter?.cv?.KR || 'Korean Cast'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: TALENTS */}
                {detailTab === 'talent' && (
                  <div className="space-y-6">
                    {/* Combat Talents */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Zap className="w-4 h-4" /> Combat Skills
                      </h3>

                      {detailData?.skills && detailData.skills.length > 0 ? (
                        <div className="space-y-4">
                          {detailData.skills.map((skill: any, idx: number) => (
                            <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                              <div className="flex items-center gap-3">
                                {skill.iconUrl ? (
                                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-amber-500/30 p-1.5 flex-shrink-0 flex items-center justify-center">
                                    <img src={skill.iconUrl} alt={skill.name} className="w-full h-full object-contain filter drop-shadow" />
                                  </div>
                                ) : (
                                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-amber-400" />
                                  </div>
                                )}
                                <div>
                                  <h4 className="text-sm font-bold text-slate-100">{skill.name}</h4>
                                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] rounded-full font-semibold">
                                    {skill.type}
                                  </span>
                                </div>
                              </div>
                              <div className="text-xs text-slate-300 leading-relaxed font-sans pt-2 border-t border-slate-900">
                                <GenshinTextRenderer text={skill.description} />
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-6 text-center bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400">
                          No combat skills available for this character.
                        </div>
                      )}
                    </div>

                    {/* Passive Talents */}
                    {detailData?.passives && detailData.passives.length > 0 && (
                      <div className="space-y-4 pt-4 border-t border-slate-800">
                        <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                          ✦ Passive Ascension Talents
                        </h3>

                        <div className="space-y-4">
                          {detailData.passives.map((passive: any, idx: number) => (
                            <div key={idx} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                              <div className="flex items-center gap-3">
                                {passive.iconUrl ? (
                                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 p-1 flex-shrink-0 flex items-center justify-center">
                                    <img src={passive.iconUrl} alt={passive.name} className="w-full h-full object-contain filter drop-shadow" />
                                  </div>
                                ) : (
                                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                                    <Sparkles className="w-4 h-4 text-amber-400" />
                                  </div>
                                )}
                                <div>
                                  <h4 className="text-xs font-bold text-slate-100">{passive.name}</h4>
                                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">{passive.type}</span>
                                </div>
                              </div>
                              <div className="text-xs text-slate-300 leading-relaxed font-sans pt-1 border-t border-slate-900">
                                <GenshinTextRenderer text={passive.description} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 3: CONSTELLATIONS */}
                {detailTab === 'constellation' && (
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> Constellation Levels (C1 - C6)
                    </h3>

                    {detailData?.constellations && detailData.constellations.length > 0 ? (
                      <div className="space-y-4">
                        {detailData.constellations.map((c: any) => (
                          <div key={c.level} className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-3">
                            <div className="flex items-center gap-3">
                              {c.iconUrl ? (
                                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-cyan-500/30 p-1.5 flex-shrink-0 flex items-center justify-center shadow">
                                  <img src={c.iconUrl} alt={c.name} className="w-full h-full object-contain filter drop-shadow" />
                                </div>
                              ) : (
                                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                                  <span className="text-xs font-bold text-cyan-300">C{c.level}</span>
                                </div>
                              )}

                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold rounded">
                                    C{c.level}
                                  </span>
                                  <h4 className="text-sm font-bold text-slate-100">{c.name}</h4>
                                </div>
                              </div>
                            </div>

                            <div className="text-xs text-slate-300 leading-relaxed font-sans pt-2 border-t border-slate-900">
                              <GenshinTextRenderer text={c.description} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-6 text-center bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400">
                        No constellation information recorded for this character.
                      </div>
                    )}
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
