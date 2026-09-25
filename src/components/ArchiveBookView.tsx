import React, { useState, useEffect } from 'react';
import { Book } from '../types';
import BOOKS from '../data/books.json';
import { 
  Search, 
  BookOpen, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Bookmark, 
  Loader2, 
  Star, 
  Library, 
  Layers,
  BookMarked
} from 'lucide-react';
import { GenshinTextRenderer } from './GenshinTextRenderer';

export const ArchiveBookView: React.FC = () => {
  const [items, setItems] = useState<any[]>(BOOKS);
  const [loading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<any>(BOOKS[0]);
  const [activeVolumeIndex, setActiveVolumeIndex] = useState<number>(0);
  const [sortBy, setSortBy] = useState<
    'name-asc' | 'name-desc' | 'volumes-desc' | 'volumes-asc'
  >('name-asc');

  useEffect(() => {
    setItems(BOOKS);
    if (!selectedBook && BOOKS.length > 0) {
      setSelectedBook(BOOKS[0]);
      setActiveVolumeIndex(0);
    }
  }, []);

  const handleSelectBook = (bookItem: any) => {
    setSelectedBook(bookItem);
    setActiveVolumeIndex(0);
  };

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    if (sortBy === 'volumes-desc') {
      const volA = a.volumes?.length || 0;
      const volB = b.volumes?.length || 0;
      if (volB !== volA) return volB - volA;
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'volumes-asc') {
      const volA = a.volumes?.length || 0;
      const volB = b.volumes?.length || 0;
      if (volA !== volB) return volA - volB;
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const totalVolumes = selectedBook?.volumes?.length || 0;
  const activeVol = selectedBook?.volumes?.[activeVolumeIndex] || {
    title: selectedBook?.name || 'Volume I',
    description: selectedBook?.description || '',
    story: 'No volume story recorded in the archive.',
  };

  const hasPrevVolume = activeVolumeIndex > 0;
  const hasNextVolume = totalVolumes > 0 && activeVolumeIndex < totalVolumes - 1;

  const handlePrevVolume = () => {
    if (hasPrevVolume) {
      setActiveVolumeIndex((prev) => prev - 1);
    }
  };

  const handleNextVolume = () => {
    if (hasNextVolume) {
      setActiveVolumeIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-amber-500/20 text-amber-300 rounded-lg">
                <Library className="w-5 h-5 text-amber-400" />
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-slate-100">
                Royal Library & Literature Archive
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Read ancient manuscripts, novels, letters, historical treatises, notes, and fairy tales 
              preserved across Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan, and Enkanomiya.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end md:self-auto bg-slate-950/60 border border-slate-800 px-4 py-2 rounded-2xl">
            <BookMarked className="w-4 h-4 text-amber-400" />
            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Catalog</div>
              <div className="text-xs text-slate-300 font-mono">
                <strong className="text-amber-300 font-bold text-sm">{filteredItems.length}</strong> / {items.length} Books
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar Book Selector + Reader Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Book List Sidebar */}
        <div className="lg:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-4 space-y-4 shadow-xl flex flex-col max-h-[820px]">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title or summary..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          {/* Sort Row */}
          <div className="flex flex-col gap-1 text-[11px] p-3 bg-slate-950/60 border border-slate-800/80 rounded-2xl">
            <span className="text-slate-500 font-bold uppercase tracking-wider text-[9px] mb-0.5">Sort Literature:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-slate-900 text-amber-300 font-semibold focus:outline-none cursor-pointer text-xs rounded-xl border border-slate-800 p-2 text-left"
            >
              <option value="name-asc" className="bg-slate-900 text-slate-200">Name: A to Z</option>
              <option value="name-desc" className="bg-slate-900 text-slate-200">Name: Z to A</option>
              <option value="volumes-desc" className="bg-slate-900 text-slate-200">Volumes: Most to Least</option>
              <option value="volumes-asc" className="bg-slate-900 text-slate-200">Volumes: Least to Most</option>
            </select>
          </div>

          {/* List of 605 Books */}
          <div className="flex-1 overflow-y-auto space-y-1.5 pr-1 divide-y divide-transparent">
            {loading ? (
              <div className="p-12 text-center text-xs text-slate-500 flex flex-col items-center gap-2">
                <Loader2 className="w-5 h-5 animate-spin text-amber-400" />
                <span>Opening library archives...</span>
              </div>
            ) : sortedItems.length === 0 ? (
              <div className="p-8 text-center text-xs text-slate-500">
                No books match "{searchQuery}"
              </div>
            ) : (
              sortedItems.map((item) => {
                const isSelected = String(selectedBook?.id) === String(item.id);
                const volCount = item.volumes?.length || 0;

                return (
                  <button
                    key={String(item.id)}
                    onClick={() => handleSelectBook(item)}
                    className={`w-full p-2.5 rounded-2xl border text-left transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-amber-500/15 border-amber-400/80 text-amber-200 shadow-md ring-1 ring-amber-500/30'
                        : 'bg-slate-950/60 hover:bg-slate-950 border-slate-800/80 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 p-1 flex-shrink-0 flex items-center justify-center">
                      <img
                        src={item.icon || item.iconUrl}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = './assets/UI_ItemIcon_100188.png';
                        }}
                      />
                    </div>

                    {/* Book Metadata */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 justify-between">
                        <h4 className="text-xs font-bold truncate">{item.name}</h4>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5 text-[10px] text-slate-400">
                        <span className="text-amber-400/90 font-medium flex items-center gap-0.5">
                          <Layers className="w-2.5 h-2.5" />
                          {volCount} {volCount === 1 ? 'vol' : 'vols'}
                        </span>
                        {item.description && (
                          <span className="truncate text-slate-500">
                            • {item.description}
                          </span>
                        )}
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-amber-400' : 'text-slate-600'}`} />
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Reader Pane */}
        <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6 flex flex-col justify-between min-h-[600px]">
          {selectedBook ? (
            <div className="space-y-6">
              {/* Book Overview Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-950 border border-slate-800 p-2 flex-shrink-0 shadow-lg">
                    <img
                      src={selectedBook.icon || selectedBook.iconUrl}
                      alt={selectedBook.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.src = './assets/UI_ItemIcon_100188.png';
                      }}
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-100">
                        {selectedBook.name}
                      </h2>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-2xl">
                      {selectedBook.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Volume Selection Bar */}
              {selectedBook.volumes && selectedBook.volumes.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1.5">
                      <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                      Volumes ({selectedBook.volumes.length})
                    </span>
                    <span className="text-xs text-amber-400/90 font-mono font-medium">
                      Reading Vol. {activeVolumeIndex + 1} of {totalVolumes}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800">
                    {selectedBook.volumes.map((vol: any, idx: number) => {
                      const isCurrentVol = activeVolumeIndex === idx;
                      return (
                        <button
                          key={vol.id || `vol-${idx}`}
                          onClick={() => setActiveVolumeIndex(idx)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                            isCurrentVol
                              ? 'bg-amber-500 text-slate-950 font-bold shadow-md ring-2 ring-amber-400/30'
                              : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <span>Vol. {vol.volume || idx + 1}</span>
                          {vol.title && vol.title !== `Volume ${idx + 1}` && (
                            <span className={`text-[10px] opacity-75 truncate max-w-[120px] ${isCurrentVol ? 'text-slate-900 font-medium' : 'text-slate-500'}`}>
                              • {vol.title}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Text Reader Body */}
              <div className="p-6 sm:p-7 bg-slate-950 border border-slate-800 rounded-2xl space-y-5 shadow-inner min-h-[400px]">
                {/* Volume Heading */}
                <div className="border-b border-slate-800/80 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-amber-300 font-display">
                      {activeVol.title || `${selectedBook.name} (Vol. ${activeVolumeIndex + 1})`}
                    </h3>
                    {activeVol.description && activeVol.description !== activeVol.story && (
                      <p className="text-xs text-slate-400 italic mt-1 font-sans">
                        {activeVol.description}
                      </p>
                    )}
                  </div>

                  {/* Volume Prev / Next Quick Controls */}
                  {totalVolumes > 1 && (
                    <div className="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
                      <button
                        onClick={handlePrevVolume}
                        disabled={!hasPrevVolume}
                        className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                          hasPrevVolume
                            ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-amber-500/50'
                            : 'bg-slate-950 border-slate-900 text-slate-600 cursor-not-allowed'
                        }`}
                        title="Previous Volume"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span className="hidden sm:inline text-[11px]">Prev Vol</span>
                      </button>

                      <button
                        onClick={handleNextVolume}
                        disabled={!hasNextVolume}
                        className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition-all ${
                          hasNextVolume
                            ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 hover:border-amber-500/50'
                            : 'bg-slate-950 border-slate-900 text-slate-600 cursor-not-allowed'
                        }`}
                        title="Next Volume"
                      >
                        <span className="hidden sm:inline text-[11px]">Next Vol</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Story Content with Genshin In-Game Styling */}
                <GenshinTextRenderer
                  text={activeVol.story || 'No volume story recorded in this archive.'}
                  fallbackIconUrl={selectedBook.icon || selectedBook.iconUrl}
                  className="text-sm sm:text-base text-slate-200 leading-relaxed bg-slate-900/40 p-5 sm:p-6 rounded-xl border border-slate-800/50 shadow-inner"
                />

                {/* Bottom Volume Navigation (if multi-volume) */}
                {totalVolumes > 1 && (
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <button
                      onClick={handlePrevVolume}
                      disabled={!hasPrevVolume}
                      className={`px-3 py-1.5 rounded-xl border text-xs flex items-center gap-1.5 font-medium transition-all ${
                        hasPrevVolume
                          ? 'bg-slate-900 border-slate-700 text-amber-300 hover:bg-slate-800 hover:border-amber-400'
                          : 'bg-slate-950 border-slate-900 text-slate-700 cursor-not-allowed'
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Previous: Vol. {activeVolumeIndex}</span>
                    </button>

                    <span className="text-[11px] text-slate-500 font-mono">
                      {activeVolumeIndex + 1} / {totalVolumes}
                    </span>

                    <button
                      onClick={handleNextVolume}
                      disabled={!hasNextVolume}
                      className={`px-3 py-1.5 rounded-xl border text-xs flex items-center gap-1.5 font-medium transition-all ${
                        hasNextVolume
                          ? 'bg-slate-900 border-slate-700 text-amber-300 hover:bg-slate-800 hover:border-amber-400'
                          : 'bg-slate-950 border-slate-900 text-slate-700 cursor-not-allowed'
                      }`}
                    >
                      <span>Next: Vol. {activeVolumeIndex + 2}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="my-auto text-center space-y-3 py-16">
              <BookOpen className="w-12 h-12 text-amber-400 mx-auto opacity-80" />
              <h3 className="text-xl font-bold text-slate-200 font-display">Select a book to read</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                Explore the complete royal library of over 600 books from Teyvat. Choose any work from the list on the left to begin reading.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
