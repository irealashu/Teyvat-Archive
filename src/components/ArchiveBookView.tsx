import React, { useState, useEffect } from 'react';
import { Book, BookVolume } from '../types';
import { COMPREHENSIVE_BOOKS } from '../data/books';
import { fetchAmberList, fetchAmberDetail, AmberListItem } from '../services/amberService';
import { Search, BookOpen, Sparkles, X, ChevronRight, Bookmark, Loader2, Star } from 'lucide-react';
import { GenshinTextRenderer } from './GenshinTextRenderer';

export const ArchiveBookView: React.FC = () => {
  const [items, setItems] = useState<AmberListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [activeVolumeIndex, setActiveVolumeIndex] = useState<number>(0);
  const [selectedRarity, setSelectedRarity] = useState<number | 'All'>('All');
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'rarity-desc' | 'rarity-asc'>('name-asc');

  useEffect(() => {
    let isMounted = true;
    async function loadBooks() {
      setLoading(true);
      const list = await fetchAmberList('book');
      if (isMounted) {
        if (list && list.length > 0) {
          setItems(list);
          // Auto select first book
          handleSelectBook(list[0].id);
        } else {
          setItems(
            COMPREHENSIVE_BOOKS.map((b) => ({
              id: b.id,
              name: b.name,
              icon: b.iconUrl,
              rank: b.rarity,
              description: b.description,
            }))
          );
          setSelectedBook(COMPREHENSIVE_BOOKS[0]);
        }
        setLoading(false);
      }
    }
    loadBooks();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelectBook = async (id: string | number) => {
    setDetailLoading(true);
    const remoteDetail = await fetchAmberDetail('book', id);
    if (remoteDetail) {
      setSelectedBook({
        id: String(remoteDetail.id),
        name: remoteDetail.name,
        iconUrl: remoteDetail.iconUrl || remoteDetail.icon,
        rarity: (remoteDetail.rank || remoteDetail.rarity || 4) as any,
        description: remoteDetail.description || 'An ancient manuscript stored in Teyvat\'s archives.',
        volumes: remoteDetail.volumes && remoteDetail.volumes.length > 0 ? remoteDetail.volumes : [
          {
            id: 'vol-1',
            volume: 1,
            title: remoteDetail.name || 'Volume I',
            story: remoteDetail.description || 'No volume story recorded.',
          }
        ],
      });
      setActiveVolumeIndex(0);
    } else {
      const local = COMPREHENSIVE_BOOKS.find((b) => b.id === id || b.name.toLowerCase().includes(id.toString().toLowerCase()));
      if (local) {
        setSelectedBook(local);
        setActiveVolumeIndex(0);
      }
    }
    setDetailLoading(false);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRarity = selectedRarity === 'All' || item.rank === selectedRarity;
    return matchesSearch && matchesRarity;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
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

  const activeVol = selectedBook?.volumes?.[activeVolumeIndex] || {
    title: 'Volume I',
    story: 'No volume story recorded.',
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative p-6 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
              Royal Library & Literature Archive
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Read ancient manuscripts, novels, historical treatises, and fairy tales preserved across the Royal Libraries of Mondstadt, Liyue, and Enkanomiya.
            </p>
          </div>

          <div className="text-right self-end md:self-auto">
            <span className="text-xs text-slate-400 font-mono">
              Total Books: <strong className="text-amber-300 font-bold">{filteredItems.length}</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar Book Selector + Reader Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Book List Sidebar */}
        <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-3xl p-4 space-y-4 shadow-xl flex flex-col max-h-[700px]">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search literature..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Rarity & Sort Row */}
          <div className="flex flex-col gap-2 p-2 bg-slate-950/50 border border-slate-800/80 rounded-2xl">
            {/* Rarity filter */}
            <div className="flex items-center justify-between text-[11px] px-1">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px]">Rarity:</span>
              <div className="flex items-center gap-1">
                {(['All', 4, 3] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRarity(r)}
                    className={`px-2 py-0.5 rounded font-semibold transition-all ${
                      selectedRarity === r
                        ? 'bg-amber-500 text-slate-950'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {r === 'All' ? 'All' : `${r}★`}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Selector */}
            <div className="flex flex-col gap-1 text-[11px] px-1 border-t border-slate-800/60 pt-2">
              <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px] mb-1">Sort Order:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-900 text-amber-300 font-semibold focus:outline-none cursor-pointer text-xs rounded-xl border border-slate-800 p-2 text-left"
              >
                <option value="name-asc" className="bg-slate-900 text-slate-200">Name: A to Z</option>
                <option value="name-desc" className="bg-slate-900 text-slate-200">Name: Z to A</option>
                <option value="rarity-desc" className="bg-slate-900 text-slate-200">Rarity: High to Low</option>
                <option value="rarity-asc" className="bg-slate-900 text-slate-200">Rarity: Low to High</option>
              </select>
            </div>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {loading ? (
              <div className="p-8 text-center text-xs text-slate-500">Loading library...</div>
            ) : sortedItems.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">No books found</div>
            ) : (
              sortedItems.map((item, idx) => {
                const isSelected = selectedBook?.id === item.id || selectedBook?.name === item.name;

                return (
                  <button
                    key={`${item.id}-${idx}`}
                    onClick={() => handleSelectBook(item.id)}
                    className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-400 text-amber-300 shadow-md'
                        : 'bg-slate-950/60 hover:bg-slate-950 border-slate-800/80 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 p-1 flex-shrink-0">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          if (img.src.includes('yatta.moe') && item.filename) {
                            img.src = `https://upload-os-bbs.mihoyo.com/game_record/genshin/equip/${item.filename}.png`;
                          } else {
                            img.src = 'https://enka.network/ui/UI_ItemIcon_100001.png';
                          }
                        }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold truncate">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">
                        {item.description && !item.description.toLowerCase().includes('collection containing')
                          ? item.description
                          : `Literature Record • ${item.rank || 4}★`}
                      </p>
                    </div>

                    <ChevronRight className="w-4 h-4 text-slate-600" />
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Reader Reader Pane */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6 flex flex-col justify-between min-h-[500px]">
          {selectedBook ? (
            <div className="space-y-6">
              {/* Book Overview Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 p-2 flex-shrink-0">
                    <img
                      src={selectedBook.iconUrl}
                      alt={selectedBook.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold text-slate-100">
                      {selectedBook.name}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {selectedBook.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Volume Tabs */}
              {selectedBook.volumes && selectedBook.volumes.length > 0 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800/80">
                  <span className="text-[10px] text-slate-500 uppercase font-bold mr-1 flex items-center gap-1">
                    <Bookmark className="w-3 h-3 text-amber-400" /> Volume:
                  </span>
                  {selectedBook.volumes.map((vol, idx) => (
                    <button
                      key={vol.id}
                      onClick={() => setActiveVolumeIndex(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        activeVolumeIndex === idx
                          ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                          : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                      }`}
                    >
                      Vol. {vol.volume}
                    </button>
                  ))}
                </div>
              )}

              {/* Text Reader Body */}
              <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-5 shadow-inner min-h-[350px]">
                {detailLoading ? (
                  <div className="py-20 text-center space-y-3">
                    <Loader2 className="w-8 h-8 text-amber-400 animate-spin mx-auto" />
                    <p className="text-xs text-slate-400 font-mono">Retrieving complete literature text from Teyvat library archive...</p>
                  </div>
                ) : (
                  <>
                    <div className="border-b border-slate-800/80 pb-3">
                      <h3 className="text-lg font-bold text-amber-300 font-display">
                        {(activeVol as any).title || selectedBook.name}
                      </h3>
                      {(activeVol as any).description && (activeVol as any).description !== activeVol.story && (
                        <p className="text-xs text-slate-400 italic mt-1 font-sans">
                          {(activeVol as any).description}
                        </p>
                      )}
                    </div>

                    <GenshinTextRenderer
                      text={activeVol.story || ''}
                      fallbackIconUrl={selectedBook.iconUrl}
                      className="text-sm sm:text-base text-slate-200 bg-slate-900/40 p-5 rounded-xl border border-slate-800/50 shadow-inner"
                    />
                  </>
                )}
              </div>
            </div>
          ) : (
            <div className="my-auto text-center space-y-3 py-12">
              <BookOpen className="w-10 h-10 text-amber-400 mx-auto opacity-80" />
              <h3 className="text-lg font-bold text-slate-200">Select a book to read</h3>
              <p className="text-xs text-slate-400">
                Choose any literature volume from the library sidebar to begin reading.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
