import React from 'react';
import { ActiveTab, ThemeMode } from '../types';
import { Sparkles, Users, Sword, Shield, Globe2, Scale, Database, Plus, Lock, Unlock } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  counts: {
    characters: number;
    weapons: number;
    artifacts: number;
    regions: number;
  };
  onOpenAddModal: () => void;
  onOpenDataManager: () => void;
  lastUpdated: string;
  isAdmin: boolean;
  onOpenAdminModal: () => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export function Navbar({
  activeTab,
  onTabChange,
  counts,
  onOpenAddModal,
  onOpenDataManager,
  lastUpdated,
  isAdmin,
  onOpenAdminModal,
  currentTheme,
  onThemeChange,
}: NavbarProps) {
  const tabs: Array<{ id: ActiveTab; label: string; icon: React.ReactNode; count?: number }> = [
    { id: 'characters', label: 'Characters', icon: <Users className="w-4 h-4" />, count: counts.characters },
    { id: 'weapons', label: 'Weapons', icon: <Sword className="w-4 h-4" />, count: counts.weapons },
    { id: 'artifacts', label: 'Artifacts', icon: <Shield className="w-4 h-4" />, count: counts.artifacts },
    { id: 'regions', label: 'Nations of Teyvat', icon: <Globe2 className="w-4 h-4" />, count: counts.regions },
    { id: 'comparison', label: 'Compare & Theorycraft', icon: <Scale className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onTabChange('characters')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1px] shadow-[0_0_15px_rgba(245,158,11,0.3)]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold tracking-wide text-amber-300">
                  TEYVAT ARCHIVE
                </span>
                <span className="hidden md:inline-flex px-1.5 py-0.5 text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded">
                  v5.x Live
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                Comprehensive Compendium & Live Manager
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            {/* Dynamic Theme Selector */}
            <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />

            {/* Curator/Admin Mode Toggle Button */}
            <button
              onClick={onOpenAdminModal}
              id="nav-admin-toggle-btn"
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg border transition-all active:scale-95 ${
                isAdmin
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                  : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:text-amber-300 hover:border-amber-500/40'
              }`}
              title={isAdmin ? 'Curator Privileges Active - Click to Manage / Lock' : 'Protected Mode: Click to enter Curator Passcode for Edit / Add / Delete'}
            >
              {isAdmin ? (
                <>
                  <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Curator Mode: Active</span>
                </>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Curator Unlock</span>
                </>
              )}
            </button>

            {/* Add Entry - Only visible to authenticated curators */}
            {isAdmin && (
              <button
                onClick={onOpenAddModal}
                id="nav-add-entry-btn"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-md transition-all active:scale-95"
                title="Add a new character, weapon, artifact set, book, or nation"
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add Entry</span>
              </button>
            )}

            <button
              onClick={onOpenDataManager}
              id="nav-data-manager-btn"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-lg transition-colors"
              title="Backup, JSON Export/Import, & Sync"
            >
              <Database className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Manage Data</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 overflow-x-auto no-scrollbar py-2 border-t border-slate-800/40">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-btn-${tab.id}`}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.15)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                      isActive
                        ? 'bg-amber-400/20 text-amber-200'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
