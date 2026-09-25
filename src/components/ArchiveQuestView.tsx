import React, { useState, useMemo } from 'react';
import {
  Search,
  Calendar,
  Sparkles,
  X,
  ChevronDown,
  ChevronRight,
  Scroll,
  ExternalLink,
  Flame,
  Award,
  Users,
  MapPin,
  ListOrdered,
  LayoutGrid,
  ListTree,
  BookOpen,
  Globe2,
  RefreshCw,
  Gift,
} from 'lucide-react';
import { VersionEventQuestGroup } from '../types';
import EVENT_QUESTS_DATA from '../data/event_quests.json';
import {
  DetailedQuestData,
  fetchQuestFullDetail,
} from '../services/questService';

const MAJOR_TAG_COLORS: Record<string, { badge: string; border: string; text: string }> = {
  '1.x': { badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30', border: 'border-emerald-500/40', text: 'text-emerald-300' },
  '2.x': { badge: 'bg-purple-500/15 text-purple-300 border-purple-500/30', border: 'border-purple-500/40', text: 'text-purple-300' },
  '3.x': { badge: 'bg-lime-500/15 text-lime-300 border-lime-500/30', border: 'border-lime-500/40', text: 'text-lime-300' },
  '4.x': { badge: 'bg-sky-500/15 text-sky-300 border-sky-500/30', border: 'border-sky-500/40', text: 'text-sky-300' },
  '5.x': { badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30', border: 'border-rose-500/40', text: 'text-rose-300' },
  '6.x': { badge: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30', border: 'border-cyan-500/40', text: 'text-cyan-300' },
  '7.x': { badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40', border: 'border-amber-500/50', text: 'text-amber-300' },
  Special: { badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30', border: 'border-indigo-500/40', text: 'text-indigo-300' },
};

interface FlatQuestItem {
  id: string;
  name: string;
  eventName: string;
  version: string;
  majorTag: string;
}

export function ArchiveQuestView() {
  const [viewMode, setViewMode] = useState<'grid' | 'tree'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMajorTag, setSelectedMajorTag] = useState('All');
  const [selectedVersion, setSelectedVersion] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name-asc' | 'name-desc'>('newest');

  // Selected quest modal state
  const [activeQuestModal, setActiveQuestModal] = useState<DetailedQuestData | null>(null);
  const [modalLoading, setModalLoading] = useState(false);

  // Tree view expansion state
  const [expandedEvents, setExpandedEvents] = useState<Set<string>>(() => {
    const set = new Set<string>();
    EVENT_QUESTS_DATA.slice(0, 3).forEach((vg) => {
      vg.events.forEach((e) => set.add(`${vg.version}__${e.eventName}`));
    });
    return set;
  });

  const versionsData: VersionEventQuestGroup[] = EVENT_QUESTS_DATA as VersionEventQuestGroup[];

  // Flatten all individual quests
  const allIndividualQuests: FlatQuestItem[] = useMemo(() => {
    const list: FlatQuestItem[] = [];
    versionsData.forEach((vg) => {
      vg.events.forEach((e) => {
        (e.quests || []).forEach((qName) => {
          list.push({
            id: `${vg.version}__${e.eventName}__${qName}`,
            name: qName,
            eventName: e.eventName,
            version: vg.version,
            majorTag: vg.majorTag,
          });
        });
      });
    });
    return list;
  }, [versionsData]);

  const majorTags = ['All', '1.x', '2.x', '3.x', '4.x', '5.x', '6.x', '7.x', 'Special'];

  // Available versions under selected major tag
  const availableVersions = useMemo(() => {
    if (selectedMajorTag === 'All') {
      return ['All', ...versionsData.map((v) => v.version)];
    }
    return [
      'All',
      ...versionsData.filter((v) => v.majorTag === selectedMajorTag).map((v) => v.version),
    ];
  }, [versionsData, selectedMajorTag]);

  // Filtered Individual Quests for Grid View
  const filteredIndividualQuests = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    const filtered = allIndividualQuests.filter((q) => {
      if (selectedMajorTag !== 'All' && q.majorTag !== selectedMajorTag) return false;
      if (selectedVersion !== 'All' && q.version !== selectedVersion) return false;

      if (query) {
        const matchName = q.name.toLowerCase().includes(query);
        const matchEvent = q.eventName.toLowerCase().includes(query);
        const matchVersion = q.version.toLowerCase().includes(query);
        if (!matchName && !matchEvent && !matchVersion) {
          return false;
        }
      }
      return true;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      if (sortBy === 'oldest') {
        return allIndividualQuests.indexOf(a) - allIndividualQuests.indexOf(b);
      }
      return allIndividualQuests.indexOf(b) - allIndividualQuests.indexOf(a);
    });
  }, [allIndividualQuests, selectedMajorTag, selectedVersion, searchTerm, sortBy]);

  // Filtered Version Groups for Tree View
  const filteredVersionGroups = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    return versionsData
      .map((vg) => {
        if (selectedMajorTag !== 'All' && vg.majorTag !== selectedMajorTag) return null;
        if (selectedVersion !== 'All' && vg.version !== selectedVersion) return null;

        let matchingEvents = vg.events;

        if (query) {
          matchingEvents = vg.events.filter((e) => {
            const matchEventName = e.eventName.toLowerCase().includes(query);
            const matchQuests = e.quests.some((q) => q.toLowerCase().includes(query));
            const matchVersion = vg.version.toLowerCase().includes(query);
            return matchEventName || matchQuests || matchVersion;
          });
        }

        if (matchingEvents.length === 0) return null;

        return {
          ...vg,
          events: matchingEvents,
          eventsCount: matchingEvents.length,
          totalQuestsCount: matchingEvents.reduce((acc, e) => acc + e.quests.length, 0),
        };
      })
      .filter(Boolean) as VersionEventQuestGroup[];
  }, [versionsData, selectedMajorTag, selectedVersion, searchTerm]);

  // Open Quest Detail with authentic live MediaWiki fetch
  const handleOpenQuest = async (questName: string, eventName: string, version: string, majorTag: string) => {
    setModalLoading(true);
    setActiveQuestModal({
      id: `${version}__${eventName}__${questName}`,
      name: questName,
      eventName,
      version,
      majorTag,
      region: 'Teyvat',
      category: 'Event World Quest',
      summary: 'Fetching authentic in-game quest objectives, story lore, and rewards from database...',
      prerequisites: 'Fetching event requirements...',
      steps: [],
      rewards: [],
      characters: ['Traveler', 'Paimon'],
      wikiUrl: `https://genshin-impact.fandom.com/wiki/${encodeURIComponent(questName.replace(/\s+/g, '_'))}`,
      isLiveFetched: false,
    });

    try {
      const realData = await fetchQuestFullDetail(questName, eventName, version, majorTag);
      setActiveQuestModal(realData);
    } catch (err) {
      console.warn('Failed to load quest details:', err);
    } finally {
      setModalLoading(false);
    }
  };

  const toggleEventExpand = (eventKey: string) => {
    setExpandedEvents((prev) => {
      const next = new Set(prev);
      if (next.has(eventKey)) {
        next.delete(eventKey);
      } else {
        next.add(eventKey);
      }
      return next;
    });
  };

  const expandAll = () => {
    const allKeys = new Set<string>();
    filteredVersionGroups.forEach((vg) => {
      vg.events.forEach((e) => allKeys.add(`${vg.version}__${e.eventName}`));
    });
    setExpandedEvents(allKeys);
  };

  const collapseAll = () => {
    setExpandedEvents(new Set());
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              World Quests Compendium
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-white">
              WORLD QUESTS ARCHIVE
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Browse all <strong className="text-amber-300 font-semibold">{allIndividualQuests.length} World Quests</strong> with real, individual in-game objectives, item reward drops, and lore descriptions.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-center min-w-[90px] shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Total Quests
              </span>
              <span className="text-xl font-bold font-mono text-amber-300">
                {allIndividualQuests.length}
              </span>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-center min-w-[90px] shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Events
              </span>
              <span className="text-xl font-bold font-mono text-emerald-400">146</span>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3 text-center min-w-[90px] shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Versions
              </span>
              <span className="text-xl font-bold font-mono text-sky-400">{versionsData.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Controls Bar */}
      <div className="p-4 sm:p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 shadow-lg">
        {/* Top Search & Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by Quest name or Event (e.g., Unreconciled Stars, Lantern Rite, Simulanka, Waterborne Poetry)..."
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
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Separate Quests ({filteredIndividualQuests.length})
            </button>
            <button
              onClick={() => setViewMode('tree')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'tree'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <ListTree className="w-3.5 h-3.5" />
              Event Hierarchy
            </button>
          </div>

          {/* Sort Dropdown */}
          {viewMode === 'grid' && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="px-3 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:border-amber-500/70 cursor-pointer"
              >
                <option value="newest">Release (Newest)</option>
                <option value="oldest">Release (Oldest)</option>
                <option value="name-asc">Quest Name (A-Z)</option>
                <option value="name-desc">Quest Name (Z-A)</option>
              </select>
            </div>
          )}

          {/* Version Dropdown */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Calendar className="w-4 h-4 text-slate-400 hidden sm:block" />
            <select
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
              className="px-3 py-2.5 bg-slate-950 border border-slate-700/80 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:border-amber-500/70 cursor-pointer max-w-[170px]"
            >
              <option value="All">All Versions</option>
              {availableVersions
                .filter((v) => v !== 'All')
                .map((ver) => (
                  <option key={ver} value={ver}>
                    {ver}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Major Tag Era Filter */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-slate-800/80">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex-shrink-0 flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-amber-400" /> Era:
          </span>
          {majorTags.map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSelectedMajorTag(tag);
                setSelectedVersion('All');
              }}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border cursor-pointer ${
                selectedMajorTag === tag
                  ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-sm'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW MODE 1: INDIVIDUAL SEPARATE QUESTS GRID */}
      {viewMode === 'grid' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Showing <strong className="text-amber-300 font-semibold">{filteredIndividualQuests.length}</strong> separate world quests
            </span>
            <span className="text-slate-500 hidden sm:inline">Click any quest card to inspect exact steps and rewards</span>
          </div>

          {filteredIndividualQuests.length === 0 ? (
            <div className="p-12 text-center rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <Scroll className="w-10 h-10 text-slate-600 mx-auto" />
              <h3 className="text-base font-bold text-slate-300">No World Quests Found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No quests matched your current filter. Try clearing your search query.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {filteredIndividualQuests.map((q) => {
                const eraBadge = MAJOR_TAG_COLORS[q.majorTag] || MAJOR_TAG_COLORS.Special;

                return (
                  <div
                    key={q.id}
                    onClick={() => handleOpenQuest(q.name, q.eventName, q.version, q.majorTag)}
                    className="group relative bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4 transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer flex flex-col justify-between gap-3 overflow-hidden"
                  >
                    {/* Header: Version Pill */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-2 py-0.5 rounded-md border text-[10px] font-mono font-bold ${eraBadge.badge}`}
                      >
                        {q.version}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-400 group-hover:text-amber-300 flex items-center gap-0.5">
                        Details <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>

                    {/* Quest Title & Parent Event */}
                    <div className="space-y-1 flex-1">
                      <h3 className="text-sm font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                        {q.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1 line-clamp-1">
                        <Award className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        <span className="truncate">{q.eventName}</span>
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="pt-2 border-t border-slate-800/70 flex items-center justify-between text-[10px] text-slate-500">
                      <span className="font-mono text-slate-400">Event World Quest</span>
                      <span className="text-amber-400 font-medium">Click to inspect</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* VIEW MODE 2: EVENT HIERARCHY TREE VIEW */}
      {viewMode === 'tree' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <div className="flex items-center gap-2">
              <span>
                Showing <strong className="text-amber-300 font-semibold">{filteredVersionGroups.length}</strong> Version Updates
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={expandAll}
                className="text-xs text-slate-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
              >
                Expand All
              </button>
              <span className="text-slate-700">•</span>
              <button
                onClick={collapseAll}
                className="text-xs text-slate-400 hover:text-amber-300 transition-colors font-medium cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredVersionGroups.map((vg) => {
              const eraBadge = MAJOR_TAG_COLORS[vg.majorTag] || MAJOR_TAG_COLORS.Special;

              return (
                <div
                  key={vg.version}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-md"
                >
                  {/* Version Header Banner */}
                  <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2.5 py-1 rounded-lg border text-xs font-mono font-bold ${eraBadge.badge}`}
                      >
                        {vg.majorTag}
                      </span>
                      <h2 className="text-base font-bold text-white font-display">
                        {vg.version}
                      </h2>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                      <span>{vg.eventsCount} Events</span>
                      <span className="text-slate-700">•</span>
                      <span className="text-amber-300 font-bold">{vg.totalQuestsCount} Quests</span>
                    </div>
                  </div>

                  {/* Events List */}
                  <div className="divide-y divide-slate-800/60">
                    {vg.events.map((event) => {
                      const eventKey = `${vg.version}__${event.eventName}`;
                      const isExpanded = expandedEvents.has(eventKey);

                      return (
                        <div key={event.eventName} className="transition-colors">
                          <div
                            onClick={() => toggleEventExpand(eventKey)}
                            className="p-3.5 sm:px-5 flex items-center justify-between gap-3 hover:bg-slate-800/40 cursor-pointer select-none"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="p-1 rounded-lg bg-slate-800 text-slate-400">
                                {isExpanded ? (
                                  <ChevronDown className="w-4 h-4 text-amber-400" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                              </span>
                              <div className="min-w-0">
                                <h3 className="text-sm font-bold text-slate-100 hover:text-amber-300 transition-colors truncate">
                                  {event.eventName}
                                </h3>
                                <span className="text-[11px] text-slate-400 font-mono">
                                  {event.questsCount} World Quest{event.questsCount > 1 ? 's' : ''}
                                </span>
                              </div>
                            </div>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                const firstQuest = event.quests[0] || event.eventName;
                                handleOpenQuest(firstQuest, event.eventName, vg.version, vg.majorTag);
                              }}
                              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-amber-500/20 text-[11px] font-semibold text-slate-300 hover:text-amber-300 border border-slate-700/80 transition-colors flex items-center gap-1 flex-shrink-0 cursor-pointer"
                            >
                              Inspect First Part
                            </button>
                          </div>

                          {/* Expanded Quests sub-list */}
                          {isExpanded && (
                            <div className="bg-slate-950/50 p-3 sm:px-6 space-y-2 border-t border-slate-800/40">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {event.quests.map((questName, qIdx) => (
                                  <div
                                    key={questName + qIdx}
                                    onClick={() => handleOpenQuest(questName, event.eventName, vg.version, vg.majorTag)}
                                    className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 hover:border-amber-500/40 hover:bg-slate-850 cursor-pointer transition-all flex items-start justify-between gap-2 group"
                                  >
                                    <div className="space-y-0.5 min-w-0">
                                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-mono">
                                        <span>Part {qIdx + 1}</span>
                                        <span>•</span>
                                        <span className="text-amber-400">Click for details</span>
                                      </div>
                                      <p className="text-xs font-bold text-slate-200 group-hover:text-amber-300 transition-colors truncate">
                                        {questName}
                                      </p>
                                    </div>
                                    <span className="text-[10px] font-semibold text-amber-400/80 group-hover:text-amber-300 flex items-center gap-0.5 pt-1 flex-shrink-0">
                                      Details <ChevronRight className="w-3 h-3" />
                                    </span>
                                  </div>
                                ))}
                              </div>
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

      {/* CLEAN & STREAMLINED QUEST DETAILS MODAL */}
      {activeQuestModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/85 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-6 flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900 flex-shrink-0">
              <div className="space-y-1.5 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold ${
                      MAJOR_TAG_COLORS[activeQuestModal.majorTag]?.badge ||
                      MAJOR_TAG_COLORS.Special.badge
                    }`}
                  >
                    {activeQuestModal.version}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-500/30 text-sky-300 text-[10px] font-semibold flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {activeQuestModal.region}
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
                  <Award className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  Parent Event: {activeQuestModal.eventName}
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
              {/* 1. Summary & Lore Context */}
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

              {/* 2. Sequential Steps Walkthrough */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ListOrdered className="w-4 h-4 text-emerald-400" /> Sequential Steps & Objectives ({activeQuestModal.steps.length})
                  </span>
                </div>

                {activeQuestModal.steps.length === 0 ? (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                    Standard event dialogue trial. Speak with event hosts to complete.
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

              {/* 3. Quest Completion Rewards */}
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

              {/* 4. Involved Characters */}
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
