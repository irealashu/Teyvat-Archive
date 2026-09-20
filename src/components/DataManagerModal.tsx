import { useState, useRef } from 'react';
import { ArchiveDatabase, exportDatabaseJSON } from '../services/storage';
import { X, Download, Upload, RotateCcw, Database, Check, AlertTriangle, FileCode, Lock } from 'lucide-react';

interface DataManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  database: ArchiveDatabase;
  onImportDatabase: (imported: ArchiveDatabase) => void;
  onResetDatabase: () => void;
  isAdmin: boolean;
  onOpenAdminModal: () => void;
}

export function DataManagerModal({
  isOpen,
  onClose,
  database,
  onImportDatabase,
  onResetDatabase,
  isAdmin,
  onOpenAdminModal,
}: DataManagerModalProps) {
  if (!isOpen) return null;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleExport = () => {
    exportDatabaseJSON(database);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);
        if (!parsed.characters || !parsed.weapons || !parsed.artifacts) {
          throw new Error('Invalid archive backup format. Missing core sections.');
        }
        onImportDatabase(parsed);
        setImportStatus('Successfully imported archive database!');
        setTimeout(() => setImportStatus(null), 3000);
      } catch (err: any) {
        alert(`Failed to import JSON: ${err.message}`);
      }
    };
    reader.readAsText(file);
  };

  const handleConfirmReset = () => {
    onResetDatabase();
    setShowResetConfirm(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Database className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-slate-100">
                Teyvat Archive Data Manager
              </h3>
              <p className="text-[11px] text-slate-400">
                Persistent storage, backups, and live synchronizer
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5 text-xs text-slate-300">
          {/* Status Metrics */}
          <div className="bg-slate-950/70 border border-slate-800 p-4 rounded-xl space-y-2">
            <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider block">
              Current Archival Repository Stats
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px]">
              <div className="p-2 bg-slate-900 rounded border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Characters</span>
                <span className="font-bold text-slate-200">{database.characters.length} entries</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Weapons</span>
                <span className="font-bold text-slate-200">{database.weapons.length} entries</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Artifact Sets</span>
                <span className="font-bold text-slate-200">{database.artifacts.length} entries</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">Nations</span>
                <span className="font-bold text-slate-200">{database.regions.length} nations</span>
              </div>
              <div className="p-2 bg-slate-900 rounded border border-slate-800/80 col-span-2 sm:col-span-1">
                <span className="text-slate-500 block text-[10px]">Last Synced</span>
                <span className="font-medium text-amber-300 truncate block">
                  {new Date(database.lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>

          {importStatus && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center gap-2 text-emerald-300">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{importStatus}</span>
            </div>
          )}

          {/* Export & Import Actions */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-slate-200 text-xs">
              Backup & Restoration
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Export - Safe for all visitors */}
              <button
                onClick={handleExport}
                className="flex items-center justify-center gap-2 p-3 bg-slate-950 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 transition-all shadow"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Export JSON Backup</span>
              </button>

              {/* Import - Admin Only */}
              {isAdmin ? (
                <>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center justify-center gap-2 p-3 bg-slate-950 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 rounded-xl text-xs font-semibold text-slate-200 hover:text-amber-300 transition-all shadow"
                  >
                    <Upload className="w-4 h-4 text-sky-400" />
                    <span>Import JSON Backup</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </>
              ) : (
                <button
                  onClick={() => {
                    onClose();
                    onOpenAdminModal();
                  }}
                  className="flex items-center justify-center gap-2 p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-xs text-slate-400 hover:text-amber-300 hover:border-amber-500/30 transition-all"
                  title="Unlock Curator Mode to import data"
                >
                  <Lock className="w-4 h-4 text-amber-400/70" />
                  <span>Import (Curator Only)</span>
                </button>
              )}
            </div>
          </div>

          {/* Reset Action */}
          <div className="pt-3 border-t border-slate-800 space-y-2">
            {!isAdmin ? (
              <div className="p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl flex items-center justify-between text-xs">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  Resetting & importing requires Curator authentication
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onOpenAdminModal();
                  }}
                  className="text-amber-400 hover:text-amber-300 font-semibold underline"
                >
                  Unlock
                </button>
              </div>
            ) : !showResetConfirm ? (
              <button
                onClick={() => setShowResetConfirm(true)}
                className="flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-300 hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to default Teyvat Archive datasets</span>
              </button>
            ) : (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-rose-300 font-semibold">
                  <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                  <span>Restore default dataset?</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  This will reload the official default characters, weapons, artifacts, and nations. Any custom additions will be reset unless backed up via JSON.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={handleConfirmReset}
                    className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white rounded font-bold text-xs"
                  >
                    Confirm Reset
                  </button>
                  <button
                    onClick={() => setShowResetConfirm(false)}
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
