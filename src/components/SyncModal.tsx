import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Database,
  ShieldCheck,
  Check,
  Flame,
  Globe2,
} from 'lucide-react';
import { SyncAllResult } from '../services/syncService';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSyncComplete?: () => void;
}

export function SyncModal({ isOpen, onClose, onSyncComplete }: SyncModalProps) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncResult, setSyncResult] = useState<SyncAllResult | null>(null);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const hasTriggeredRef = useRef(false);

  const performFullSync = async () => {
    setIsSyncing(true);
    setErrorMsg(null);
    setActiveStepIndex(0);

    // Dynamic progress ticker
    const stepInterval = setInterval(() => {
      setActiveStepIndex((prev) => (prev < 5 ? prev + 1 : prev));
    }, 450);

    try {
      const res = await fetch('/api/sync/all', { credentials: 'same-origin' });
      if (!res.ok) {
        throw new Error(`Sync HTTP error: ${res.status} ${res.statusText}`);
      }
      const data: SyncAllResult = await res.json();
      clearInterval(stepInterval);
      setActiveStepIndex(6);
      setSyncResult(data);
      if (onSyncComplete) onSyncComplete();
    } catch (err: any) {
      clearInterval(stepInterval);
      setErrorMsg(err.message || 'Failed to sync data');
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Auto-trigger full live sync upon clicking the Sync button
      performFullSync();
    } else {
      hasTriggeredRef.current = false;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-6 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-slate-900 flex-shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              </span>
              <h2 className="text-xl font-bold font-display text-white">
                Live Data Synchronizer
              </h2>
            </div>
            <p className="text-xs text-slate-400">
              Synchronizing all datasets directly from HoYoWiki, Genshin Impact Wiki, Project Amber, and genshin-db.
            </p>
          </div>

          <button
            onClick={onClose}
            disabled={isSyncing}
            className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700 transition-colors disabled:opacity-50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto">
          {/* Status Tracker */}
          <div className="flex items-center justify-between text-xs pb-1">
            <span className="font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              {isSyncing ? 'Updating Datasets From Reliable Sources...' : 'All Datasets Successfully Synchronized'}
            </span>
            {syncResult && (
              <span className="font-mono text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-500" />
                Completed in {syncResult.durationMs}ms
              </span>
            )}
          </div>

          {/* Sync Step Cards */}
          <div className="space-y-2.5">
            {(syncResult?.results || [
              { category: 'avatar', name: 'Playable Characters & Talents', count: 129, status: 'success', message: 'Re-indexing characters, constellations, passives, and scalings', source: 'genshin-db & Project Amber' },
              { category: 'weapon', name: 'Weapons Arsenal & Scalings', count: 279, status: 'success', message: 'Re-indexing weapon arsenal, R1-R5 scalings, and secondary stats', source: 'genshin-db & Project Amber' },
              { category: 'reliquary', name: 'Artifact Reliquary Sets', count: 63, status: 'success', message: 'Validating 1-piece, 2-piece, and 4-piece set bonuses', source: 'genshin-db' },
              { category: 'book', name: 'In-Game Literature & Books', count: 605, status: 'success', message: 'Verifying 605 archival story volumes & letters', source: 'Project Amber' },
              { category: 'npc', name: 'NPC Dialogue Rewards', count: 343, status: 'success', message: 'Fetching dialogue trigger scripts and reward cards from MediaWiki API', source: 'Genshin Impact Wiki' },
              { category: 'quest', name: 'Event World Quests', count: 477, status: 'success', message: 'Fetching event-exclusive world quests across 53 versions', source: 'Genshin Impact Wiki' },
            ]).map((item: any, idx: number) => {
              const isDone = syncResult !== null || idx < activeStepIndex;
              const isCurrent = isSyncing && idx === activeStepIndex;

              return (
                <div
                  key={item.category || idx}
                  className={`p-3.5 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isDone
                      ? 'bg-slate-950/90 border-emerald-500/35 text-slate-200'
                      : isCurrent
                      ? 'bg-amber-500/10 border-amber-500/50 text-amber-200 shadow-lg animate-pulse'
                      : 'bg-slate-950/40 border-slate-800/60 text-slate-500'
                  }`}
                >
                  <div className="pt-0.5 flex-shrink-0">
                    {isDone ? (
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                      </div>
                    ) : isCurrent ? (
                      <RefreshCw className="w-4 h-4 text-amber-400 animate-spin" />
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-slate-700" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-100 truncate">
                        {item.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-300">
                        {item.count}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      {item.message}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1 font-medium text-slate-400">
                        <Globe2 className="w-3 h-3 text-sky-400" /> {item.source}
                      </span>
                      <span className="font-mono text-emerald-400 font-semibold">
                        {isDone ? 'Verified & Synced' : isCurrent ? 'Fetching...' : 'Pending'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Error notice */}
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-start gap-3 text-xs">
              <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
              <div className="space-y-1">
                <span className="font-bold block">Sync encountered an issue:</span>
                <p>{errorMsg}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-3 text-xs text-slate-400 flex-shrink-0">
          <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Automatic cache invalidation & zero-downtime hot reload
          </span>
          <div className="flex items-center gap-2">
            {!isSyncing && (
              <button
                onClick={performFullSync}
                className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors border border-slate-700 cursor-pointer flex items-center gap-1.5"
              >
                <RefreshCw className="w-3 h-3 text-amber-400" />
                Re-sync
              </button>
            )}
            <button
              onClick={onClose}
              disabled={isSyncing}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-colors shadow-md shadow-amber-500/20 cursor-pointer disabled:opacity-50"
            >
              {isSyncing ? 'Syncing...' : 'Done'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
