import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  X,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Award,
  Users,
  MapPin,
  ListOrdered,
  LayoutGrid,
  ListTree,
  BookOpen,
  Crown,
  Globe2,
  RefreshCw,
  Gift,
} from 'lucide-react';
import ARCHON_QUESTS_DATA from '../data/archon_quests.json';
import {
  DetailedQuestData,
  fetchQuestFullDetail,
} from '../services/questService';

const REGION_THEMES: Record<string, { badge: string; border: string; text: string; gradient: string }> = {
  Mondstadt: { badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', border: 'border-emerald-500/40', text: 'text-emerald-300', gradient: 'from-emerald-500/20 to-teal-900/30' },
  Liyue: { badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30', border: 'border-amber-500/40', text: 'text-amber-300', gradient: 'from-amber-500/20 to-yellow-900/30' },
  Inazuma: { badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30', border: 'border-purple-500/40', text: 'text-purple-300', gradient: 'from-purple-500/20 to-indigo-900/30' },
  Sumeru: { badge: 'bg-lime-500/15 text-lime-300 border-lime-500/30', border: 'border-lime-500/40', text: 'text-lime-300', gradient: 'from-lime-500/20 to-emerald-900/30' },
  Fontaine: { badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30', border: 'border-sky-500/40', text: 'text-sky-300', gradient: 'from-sky-500/20 to-blue-900/30' },
  Natlan: { badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30', border: 'border-rose-500/40', text: 'text-rose-300', gradient: 'from-rose-500/20 to-red-900/30' },
  'Nod-Krai': { badge: 'bg-teal-500/15 text-teal-300 border-teal-500/30', border: 'border-teal-500/40', text: 'text-teal-300', gradient: 'from-teal-600/20 to-slate-900/30' },
  Snezhnaya: { badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30', border: 'border-cyan-500/40', text: 'text-cyan-300', gradient: 'from-cyan-500/20 to-blue-900/30' },
  "Khaenri'ah": { badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40', border: 'border-amber-500/50', text: 'text-amber-300', gradient: 'from-amber-600/20 to-purple-950/30' },
  'Multi-Region': { badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30', border: 'border-indigo-500/40', text: 'text-indigo-300', gradient: 'from-indigo-500/20 to-slate-900/30' },
};

interface FlatArchonQuest {
  id: string;
  name: string;
  chapter: string;
  chapterTitle: string;
  actNumber: string;
  actTitle: string;
  region: string;
  requiredAR: number;
}

export function ArchiveArchonQuestView() {
  const [viewMode, setViewMode] = useState<'chapters' | 'all'>('chapters');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [sortBy, setSortBy] = useState<'chronological' | 'name-asc' | 'name-desc'>('chronological');

  // Modal State
  const [activeQuestModal, setActiveQuestModal] = useState<DetailedQuestData | null>(null);
  const [modalLoading, setModalLoading] = useState(false);

  // Expanded Acts in Chapter view
  const [expandedActs, setExpandedActs] = useState<Set<string>>(() => {
    const set = new Set<string>();
    ARCHON_QUESTS_DATA.slice(0, 3).forEach((c) => {
      c.acts.forEach((a) => set.add(`${c.chapter}__${a.actNumber}`));
    });
    return set;
  });

  const regions = ['All', 'Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'Natlan', 'Nod-Krai', 'Snezhnaya', "Khaenri'ah", 'Multi-Region'];

  // Flatten all individual quests
  const allQuests: FlatArchonQuest[] = useMemo(() => {
    const list: FlatArchonQuest[] = [];
    ARCHON_QUESTS_DATA.forEach((ch) => {
      ch.acts.forEach((act) => {
        act.quests.forEach((qName) => {
          list.push({
            id: `${ch.chapter}__${act.actNumber}__${qName}`,
            name: qName,
            chapter: ch.chapter,
            chapterTitle: ch.chapterTitle,
            actNumber: act.actNumber,
            actTitle: act.actTitle,
            region: ch.region,
            requiredAR: act.requiredAR,
          });
        });
      });
    });
    return list;
  }, []);

  // Filtered Flat Quests
  const filteredFlatQuests = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    const filtered = allQuests.filter((q) => {
      if (selectedRegion !== 'All' && q.region !== selectedRegion) return false;
      if (query) {
        const matchName = q.name.toLowerCase().includes(query);
        const matchChapter = q.chapterTitle.toLowerCase().includes(query);
        const matchAct = q.actTitle.toLowerCase().includes(query);
        const matchRegion = q.region.toLowerCase().includes(query);
        if (!matchName && !matchChapter && !matchAct && !matchRegion) {
          return false;
        }
      }
      return true;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return allQuests.indexOf(a) - allQuests.indexOf(b);
    });
  }, [allQuests, selectedRegion, searchTerm, sortBy]);

  // Filtered Chapters
  const filteredChapters = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    return ARCHON_QUESTS_DATA.map((ch) => {
      if (selectedRegion !== 'All' && ch.region !== selectedRegion) return null;

      let matchingActs = ch.acts;
      if (query) {
        matchingActs = ch.acts.filter((act) => {
          const matchActName = act.actTitle.toLowerCase().includes(query);
          const matchDesc = act.description.toLowerCase().includes(query);
          const matchQuests = act.quests.some((q) => q.toLowerCase().includes(query));
          const matchChapter = ch.chapterTitle.toLowerCase().includes(query);
          return matchActName || matchDesc || matchQuests || matchChapter;
        });
      }

      if (matchingActs.length === 0) return null;

      return {
        ...ch,
        acts: matchingActs,
      };
    }).filter(Boolean) as typeof ARCHON_QUESTS_DATA;
  }, [selectedRegion, searchTerm]);

  const toggleActExpand = (actKey: string) => {
    setExpandedActs((prev) => {
      const next = new Set(prev);
      if (next.has(actKey)) {
        next.delete(actKey);
      } else {
        next.add(actKey);
      }
      return next;
    });
  };

  const expandAllActs = () => {
    const all = new Set<string>();
    filteredChapters.forEach((ch) => {
      ch.acts.forEach((a) => all.add(`${ch.chapter}__${a.actNumber}`));
    });
    setExpandedActs(all);
  };

  const collapseAllActs = () => {
    setExpandedActs(new Set());
  };

  const handleOpenQuest = async (questName: string, actTitle: string, chapter: string, region: string) => {
    setModalLoading(true);
    setActiveQuestModal({
      id: `${chapter}__${actTitle}__${questName}`,
      name: questName,
      eventName: actTitle,
      version: chapter,
      majorTag: 'Archon Quest',
      region,
      category: 'Archon Quest',
      summary: `Main story Archon Quest for ${actTitle} in ${region}. Fetching in-game walkthrough and reward data...`,
      prerequisites: `Completion of previous chapter acts.`,
      steps: [],
      rewards: [],
      characters: ['Traveler', 'Paimon'],
      wikiUrl: `https://genshin-impact.fandom.com/wiki/${encodeURIComponent(questName.replace(/\s+/g, '_'))}`,
      isLiveFetched: false,
    });

    try {
      const realData = await fetchQuestFullDetail(questName, actTitle, chapter, 'Archon');
      setActiveQuestModal({
        ...realData,
        region,
        category: 'Archon Quest',
      });
    } catch (err) {
      console.warn('Failed to fetch Archon quest details:', err);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5" />
              Main Narrative Chronicle
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-white">
              ARCHON QUESTS
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              The grand epic of Teyvat across <strong className="text-amber-300 font-semibold">{ARCHON_QUESTS_DATA.length} Chapters</strong>,{' '}
              <strong className="text-emerald-300 font-semibold">{ARCHON_QUESTS_DATA.reduce((acc, c) => acc + c.acts.length, 0)} Story Acts</strong>, and{' '}
              <strong className="text-sky-300 font-semibold">{allQuests.length} Main Quests</strong> from Mondstadt to Snezhnaya, Khaenri'ah, and the Interlude Chronicles.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-center min-w-[90px] shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Total Quests
              </span>
              <span className="text-xl font-bold font-mono text-amber-300">
                {allQuests.length}
              </span>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-center min-w-[90px] shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Story Acts
              </span>
              <span className="text-xl font-bold font-mono text-emerald-400">
                {ARCHON_QUESTS_DATA.reduce((acc, c) => acc + c.acts.length, 0)}
              </span>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-center min-w-[90px] shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Chapters
              </span>
              <span className="text-xl font-bold font-mono text-sky-400">
                {ARCHON_QUESTS_DATA.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Controls Bar */}
      <div className="p-4 sm:p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search Archon Quests by Title, Act, or Region (e.g., We Will Be Reunited, Masquerade of the Guilty, Caribert)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-xl p-1 flex-shrink-0">
            <button
              onClick={() => setViewMode('chapters')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'chapters'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ListTree className="w-3.5 h-3.5" />
              Chapter Acts
            </button>
            <button
              onClick={() => setViewMode('all')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'all'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Individual Quests ({filteredFlatQuests.length})
            </button>
          </div>

          {/* Sort Dropdown */}
          {viewMode === 'all' && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="px-3 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:border-amber-500/70 cursor-pointer"
              >
                <option value="chronological">Storyline Order</option>
                <option value="name-asc">Quest Name (A-Z)</option>
                <option value="name-desc">Quest Name (Z-A)</option>
              </select>
            </div>
          )}
        </div>

        {/* Region Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-slate-800/80">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex-shrink-0 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-sky-400" /> Nation:
          </span>
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                selectedRegion === reg
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW MODE 1: CHAPTERS & ACTS VIEW */}
      {viewMode === 'chapters' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing <strong className="text-amber-300 font-semibold">{filteredChapters.length}</strong> Chapters
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={expandAllActs}
                className="text-xs text-slate-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={collapseAllActs}
                className="text-xs text-slate-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {filteredChapters.map((ch) => {
              const theme = REGION_THEMES[ch.region] || REGION_THEMES['Multi-Region'];

              return (
                <div
                  key={ch.chapter}
                  className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-xl"
                >
                  {/* Chapter Header Banner */}
                  <div className={`p-5 bg-gradient-to-r ${theme.gradient} border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-lg border text-xs font-mono font-bold ${theme.badge}`}>
                          {ch.chapter}
                        </span>
                        <span className="text-xs font-semibold text-sky-300 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {ch.region}
                        </span>
                        <span className="text-xs text-slate-300 font-medium">
                          • {ch.archon}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold font-display text-white">
                        {ch.chapterTitle}
                      </h2>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono text-slate-300 flex-shrink-0">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-700 font-semibold text-amber-300">
                        Ideal: {ch.ideal}
                      </span>
                      <span className="text-slate-400">{ch.acts.length} Acts</span>
                    </div>
                  </div>

                  {/* Acts List */}
                  <div className="divide-y divide-slate-800/80">
                    {ch.acts.map((act) => {
                      const actKey = `${ch.chapter}__${act.actNumber}`;
                      const isExpanded = expandedActs.has(actKey);

                      return (
                        <div key={act.actNumber} className="transition-colors">
                          <div
                            onClick={() => toggleActExpand(actKey)}
                            className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-800/40 cursor-pointer select-none"
                          >
                            <div className="flex items-start sm:items-center gap-3 min-w-0">
                              <span className="p-1 rounded-lg bg-slate-800 text-slate-400 mt-0.5 sm:mt-0 flex-shrink-0">
                                {isExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-amber-400" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </span>
                              <div className="space-y-0.5 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-amber-400 font-mono">
                                    {act.actNumber}
                                  </span>
                                  <h3 className="text-sm font-bold text-slate-100 hover:text-amber-300 transition-colors truncate">
                                    {act.actTitle}
                                  </h3>
                                  {act.requiredAR > 0 ? (
                                    <span className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400">
                                      AR {act.requiredAR}+
                                    </span>
                                  ) : (
                                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-400 font-semibold">
                                      Upcoming
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-400 line-clamp-1">
                                  {act.description}
                                </p>
                              </div>
                            </div>

                            <span className="text-xs font-mono text-amber-300 font-semibold flex items-center gap-1 flex-shrink-0 self-end sm:self-center">
                              {act.quests.length > 0 ? `${act.quests.length} Quests` : 'Upcoming'}
                            </span>
                          </div>

                          {/* Expanded Quests */}
                          {isExpanded && (
                            <div className="bg-slate-950/60 p-4 sm:px-8 space-y-3 border-t border-slate-800/60">
                              <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                                <strong className="text-amber-400">Synopsis: </strong>
                                {act.description}
                              </p>

                              {act.quests.length === 0 ? (
                                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 text-center flex items-center justify-center gap-2">
                                  <Sparkles className="w-4 h-4 text-amber-400" />
                                  <span>This chapter is upcoming and featured in the Teyvat Storyline Preview. Quests will be cataloged upon official release.</span>
                                </div>
                              ) : (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                                  {act.quests.map((qName, idx) => (
                                    <div
                                      key={qName + idx}
                                      onClick={() => handleOpenQuest(qName, act.actTitle, ch.chapter, ch.region)}
                                      className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 cursor-pointer transition-all flex items-start justify-between gap-2 group shadow-sm"
                                    >
                                      <div className="space-y-1 min-w-0">
                                        <span className="text-[10px] font-mono text-slate-500 block">
                                          Part {idx + 1}
                                        </span>
                                        <p className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition-colors truncate">
                                          {qName}
                                        </p>
                                      </div>
                                      <span className="text-[10px] font-semibold text-amber-400/80 group-hover:text-amber-300 flex items-center gap-0.5 pt-2 flex-shrink-0">
                                        Inspect <ChevronRight className="w-3 h-3" />
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW MODE 2: FLAT ALL ARCHON QUESTS GRID */}
      {viewMode === 'all' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing <strong className="text-amber-300 font-semibold">{filteredFlatQuests.length}</strong> Archon Quest missions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredFlatQuests.map((q) => {
              const theme = REGION_THEMES[q.region] || REGION_THEMES['Multi-Region'];

              return (
                <div
                  key={q.id}
                  onClick={() => handleOpenQuest(q.name, q.actTitle, q.chapter, q.region)}
                  className="group relative bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4 transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between gap-3 overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className={`px-2 py-0.5 rounded-md border text-[10px] font-mono font-bold ${theme.badge}`}>
                      {q.chapter}
                    </span>
                    <span className="text-[11px] font-semibold text-sky-300 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-sky-400" /> {q.region}
                    </span>
                  </div>

                  <div className="space-y-1 flex-1">
                    <h3 className="text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                      {q.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                      <Award className="w-3 h-3 text-amber-400 flex-shrink-0" />
                      <span>{q.actNumber}: {q.actTitle}</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="font-mono text-slate-400">AR {q.requiredAR}+</span>
                    <span className="text-amber-400 font-semibold flex items-center gap-0.5">
                      Inspect <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* RICH ARCHON QUEST DETAILS MODAL */}
      {activeQuestModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-6 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900 flex-shrink-0">
              <div className="space-y-1.5 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold bg-amber-500/15 border-amber-500/30 text-amber-300">
                    {activeQuestModal.version}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[10px] font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {activeQuestModal.region}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-semibold">
                    Archon Quest
                  </span>
                  {activeQuestModal.isLiveFetched && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold flex items-center gap-1">
                      <Globe2 className="w-3 h-3" /> Live Wiki Parsed
                    </span>
                  )}
                  {modalLoading && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-semibold flex items-center gap-1 animate-pulse">
                      <RefreshCw className="w-3 h-3 animate-spin" /> Fetching real data...
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold font-display text-white truncate">
                  {activeQuestModal.name}
                </h2>
                <p className="text-xs text-amber-300/90 font-medium flex items-center gap-1.5 truncate">
                  <Crown className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  Act: {activeQuestModal.eventName}
                </p>
              </div>

              <button
                onClick={() => setActiveQuestModal(null)}
                className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors cursor-pointer flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto flex-1">
              {/* Synopsis */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> Story Synopsis & Context
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeQuestModal.summary}
                </p>
                {activeQuestModal.prerequisites && (
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <strong className="text-slate-300">Prerequisites: </strong>
                    {activeQuestModal.prerequisites}
                  </div>
                )}
              </div>

              {/* Sequential Steps */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ListOrdered className="w-4 h-4 text-emerald-400" /> Sequential Steps & Objectives ({activeQuestModal.steps.length})
                </span>

                {activeQuestModal.steps.length === 0 ? (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                    Storyline quest progression. Progress through the Archon chapter to complete.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {activeQuestModal.steps.map((step) => (
                      <div
                        key={step.number}
                        className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-3 text-xs text-slate-200"
                      >
                        <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {step.number}
                        </div>
                        <span className="leading-relaxed pt-0.5">{step.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Rewards */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-400" /> Completion Rewards ({activeQuestModal.rewards.length})
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {activeQuestModal.rewards.map((reward, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center gap-2"
                    >
                      {reward.iconUrl ? (
                        <img
                          src={reward.iconUrl}
                          alt={reward.name}
                          className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 object-contain p-1"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                          ★
                        </div>
                      )}
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-amber-300 font-mono block truncate">
                          {reward.count}
                        </span>
                        <span className="text-[10px] text-slate-400 block truncate">
                          {reward.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Characters */}
              {activeQuestModal.characters.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-sky-400" /> Key Characters
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {activeQuestModal.characters.map((charName) => (
                      <span
                        key={charName}
                        className="px-2.5 py-1 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-medium flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        {charName}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-400 flex-shrink-0">
              <a
                href={activeQuestModal.wikiUrl}
                target="_blank"
                rel="noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition-colors"
              >
                View Wiki Page <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setActiveQuestModal(null)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors shadow-md shadow-amber-500/20 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
