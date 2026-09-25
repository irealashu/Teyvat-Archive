import { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  MessageSquare,
  Gift,
  Sparkles,
  X,
  Compass,
  Filter,
  ChevronRight,
  ImageIcon,
  Award,
  Globe2,
  BookOpen,
} from 'lucide-react';
import { NPCEntry, NPCReward } from '../types';
import NPCS_DATA from '../data/npcs.json';

const REGION_COLORS: Record<string, { badge: string; border: string; text: string }> = {
  Mondstadt: { badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', border: 'border-emerald-500/40', text: 'text-emerald-300' },
  Liyue: { badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30', border: 'border-amber-500/40', text: 'text-amber-300' },
  Inazuma: { badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30', border: 'border-purple-500/40', text: 'text-purple-300' },
  Sumeru: { badge: 'bg-lime-500/15 text-lime-300 border-lime-500/30', border: 'border-lime-500/40', text: 'text-lime-300' },
  Fontaine: { badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30', border: 'border-sky-500/40', text: 'text-sky-300' },
  Natlan: { badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30', border: 'border-rose-500/40', text: 'text-rose-300' },
  'Nod-Krai': { badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30', border: 'border-indigo-500/40', text: 'text-indigo-300' },
  Snezhnaya: { badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30', border: 'border-cyan-500/40', text: 'text-cyan-300' },
};

const RARITY_BG: Record<number, string> = {
  1: 'bg-slate-700/80 border-slate-600',
  2: 'bg-emerald-950/60 border-emerald-600/40',
  3: 'bg-sky-950/60 border-sky-600/40',
  4: 'bg-purple-950/60 border-purple-600/40',
  5: 'bg-amber-950/60 border-amber-600/40',
};

export function ArchiveNPCView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedRewardCategory, setSelectedRewardCategory] = useState('All');
  const [selectedNpc, setSelectedNpc] = useState<NPCEntry | null>(null);

  const allNpcs: NPCEntry[] = NPCS_DATA as NPCEntry[];

  // Regions list with counts
  const regionCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allNpcs.length };
    allNpcs.forEach((n) => {
      counts[n.region] = (counts[n.region] || 0) + 1;
    });
    return counts;
  }, [allNpcs]);

  const regions = [
    'All',
    'Mondstadt',
    'Liyue',
    'Inazuma',
    'Sumeru',
    'Fontaine',
    'Natlan',
    'Nod-Krai',
    'Snezhnaya',
  ];

  // Filtering
  const filteredNpcs = useMemo(() => {
    return allNpcs.filter((npc) => {
      // Region
      if (selectedRegion !== 'All' && npc.region !== selectedRegion) return false;

      // Reward category
      if (selectedRewardCategory !== 'All') {
        const rewardNames = npc.rewards.map((r) => r.name.toLowerCase()).join(' ');
        if (
          selectedRewardCategory === 'Artifacts' &&
          !rewardNames.includes('berserker') &&
          !rewardNames.includes('scholar') &&
          !rewardNames.includes('feather') &&
          !rewardNames.includes('clock') &&
          !rewardNames.includes('cup') &&
          !rewardNames.includes('crown') &&
          !rewardNames.includes('flower') &&
          !rewardNames.includes('plume')
        ) {
          return false;
        }
        if (selectedRewardCategory === 'Mora' && !rewardNames.includes('mora')) {
          return false;
        }
        if (
          selectedRewardCategory === 'EXP & Books' &&
          !rewardNames.includes('experience') &&
          !rewardNames.includes('wit') &&
          !rewardNames.includes('advice') &&
          !rewardNames.includes('book') &&
          !rewardNames.includes('ballad') &&
          !rewardNames.includes('halberd') &&
          !rewardNames.includes('princess')
        ) {
          return false;
        }
      }

      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchName = npc.name.toLowerCase().includes(query);
        const matchLocation = (npc.locationText || '').toLowerCase().includes(query);
        const matchRewards = npc.rewards.some((r) => r.name.toLowerCase().includes(query));
        const matchPrompt = (npc.dialoguePrompt || '').toLowerCase().includes(query);
        if (!matchName && !matchLocation && !matchRewards && !matchPrompt) return false;
      }

      return true;
    });
  }, [allNpcs, selectedRegion, selectedRewardCategory, searchTerm]);

  return (
    <div className="space-y-6">
      {/* Hero Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Resident Conversation Gifts
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-white">
              NPC DIALOGUE REWARDS ARCHIVE
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Compendium of all <strong className="text-amber-300 font-semibold">{allNpcs.length} NPCs</strong> across Teyvat that grant conversation gifts, 2★ artifacts, recipe books, talent materials, Mora, and unique furnishings.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-center min-w-[100px] shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Total NPCs
              </span>
              <span className="text-xl font-bold font-mono text-amber-300">
                {allNpcs.length}
              </span>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-center min-w-[100px] shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Regions
              </span>
              <span className="text-xl font-bold font-mono text-sky-400">
                8
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Controls Panel */}
      <div className="p-4 sm:p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-lg">
        {/* Search and Category Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search NPC name, reward item (e.g. Mora, Berserker, Recipe), or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Reward Type Filter */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={selectedRewardCategory}
              onChange={(e) => setSelectedRewardCategory(e.target.value)}
              className="px-3 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:border-amber-500/70 cursor-pointer"
            >
              <option value="All">All Rewards</option>
              <option value="Artifacts">Artifacts</option>
              <option value="EXP & Books">EXP & Literature</option>
              <option value="Mora">Mora</option>
            </select>
          </div>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs">
          <span className="text-slate-500 font-bold uppercase tracking-wider text-[10px] w-14 flex-shrink-0">
            Region:
          </span>
          {regions.map((reg) => {
            const isSelected = selectedRegion === reg;
            const count = regionCounts[reg] || 0;
            return (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20 font-bold'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{reg}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isSelected ? 'bg-amber-600/40 text-slate-950' : 'bg-slate-900 text-slate-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Showing <strong className="text-amber-300 font-semibold">{filteredNpcs.length}</strong> of{' '}
          {allNpcs.length} NPCs
        </span>
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="text-amber-400 hover:underline text-[11px]"
          >
            Clear Search
          </button>
        )}
      </div>

      {/* NPC Cards Grid */}
      {filteredNpcs.length === 0 ? (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-3xl space-y-3">
          <Compass className="w-10 h-10 text-slate-600 mx-auto animate-pulse" />
          <p className="text-slate-300 font-medium text-base">No NPCs matching your filters</p>
          <p className="text-xs text-slate-500">Try adjusting your region or search term.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNpcs.map((npc) => {
            const regColor = REGION_COLORS[npc.region] || {
              badge: 'bg-slate-800 text-slate-300 border-slate-700',
              border: 'border-slate-700',
              text: 'text-slate-300',
            };

            return (
              <div
                key={npc.id}
                onClick={() => setSelectedNpc(npc)}
                className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-4 transition-all duration-200 cursor-pointer flex flex-col justify-between hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/5"
              >
                <div className="space-y-3">
                  {/* Top Bar: NPC Name & Region Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors truncate">
                        {npc.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${regColor.badge}`}
                        >
                          {npc.region}
                        </span>
                        {npc.locationText && (
                          <span className="text-[11px] text-slate-400 truncate flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-500 flex-shrink-0" />
                            <span className="truncate max-w-[180px]">{npc.locationText}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800 flex-shrink-0">
                      #{npc.id}
                    </span>
                  </div>

                  {/* Rewards Row */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
                      <Gift className="w-3 h-3 text-amber-400" /> Reward
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {npc.rewards.map((reward: NPCReward, idx: number) => (
                        <div
                          key={idx}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-xs font-semibold ${
                            RARITY_BG[reward.rarity] || 'bg-slate-950 border-slate-800'
                          }`}
                        >
                          {reward.iconUrl ? (
                            <img
                              src={reward.iconUrl}
                              alt={reward.name}
                              className="w-4 h-4 object-contain filter drop-shadow"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                              }}
                            />
                          ) : (
                            <Award className="w-3.5 h-3.5 text-amber-400" />
                          )}
                          <span className="text-slate-200">{reward.name}</span>
                          <span className="text-amber-400 font-mono text-[11px]">
                            ×{reward.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dialogue Option Trigger */}
                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" /> Dialogue Branch
                    </div>
                    <p className="text-xs text-slate-300 italic line-clamp-2 leading-relaxed">
                      "{npc.dialoguePrompt}"
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-500">
                    {npc.locationImages && npc.locationImages.length > 0 && (
                      <>
                        <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
                        <span>Map Available</span>
                      </>
                    )}
                  </span>
                  <span className="group-hover:text-amber-300 font-semibold flex items-center gap-0.5 transition-colors">
                    View Details <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* NPC Detail & Location Modal */}
      {selectedNpc && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-8">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold font-display text-white">
                    {selectedNpc.name}
                  </h2>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      REGION_COLORS[selectedNpc.region]?.badge || 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {selectedNpc.region}
                  </span>
                </div>
                <p className="text-xs text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {selectedNpc.locationText}
                </p>
              </div>

              <button
                onClick={() => setSelectedNpc(null)}
                className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Rewards Section */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-400" /> Dialogue Reward Items
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedNpc.rewards.map((reward: NPCReward, idx: number) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl border flex items-center justify-between ${
                        RARITY_BG[reward.rarity] || 'bg-slate-950 border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {reward.iconUrl ? (
                          <img
                            src={reward.iconUrl}
                            alt={reward.name}
                            className="w-8 h-8 object-contain filter drop-shadow"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <Award className="w-6 h-6 text-amber-400" />
                        )}
                        <div>
                          <span className="text-sm font-bold text-slate-200 block">
                            {reward.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            Rarity: {reward.rarity}★
                          </span>
                        </div>
                      </div>
                      <span className="text-base font-mono font-bold text-amber-300">
                        ×{reward.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dialogue Script */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-amber-400" /> Exact Conversation Route
                </h4>
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
                      Required Dialogue Option
                    </span>
                    <p className="text-sm text-amber-200 font-semibold bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl">
                      💬 "{selectedNpc.dialoguePrompt}"
                    </p>
                  </div>

                  {selectedNpc.dialogueResponse && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        NPC Response Line
                      </span>
                      <p className="text-xs text-slate-300 leading-relaxed pl-3 border-l-2 border-slate-700 italic">
                        "{selectedNpc.dialogueResponse}"
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Location Maps & Context Images */}
              {selectedNpc.locationImages && selectedNpc.locationImages.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-amber-400" /> Map & In-Game Context
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedNpc.locationImages.map((imgUrl: string, idx: number) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-md"
                      >
                        <img
                          src={imgUrl}
                          alt={`${selectedNpc.name} location ${idx + 1}`}
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.target as HTMLElement).parentElement!.style.display = 'none';
                          }}
                        />
                        <div className="p-2 text-center text-[10px] font-mono text-slate-400 bg-slate-950 border-t border-slate-800">
                          {idx === 0 ? 'Location Map' : 'In-Game View'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <span>Resident Conversation Gift Record #{selectedNpc.id}</span>
              <button
                onClick={() => setSelectedNpc(null)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors shadow-md shadow-amber-500/20"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
