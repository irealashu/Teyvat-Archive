import React from 'react';
import { ActiveTab, ThemeMode } from '../types';
import { Users, Sword, Shield, BookOpen, MessageSquare, Scroll, Crown, RefreshCw } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenSync?: () => void;
}

export function Navbar({
  activeTab,
  onTabChange,
  currentTheme,
  onThemeChange,
  onOpenSync,
}: NavbarProps) {
  const tabs: Array<{
    id: ActiveTab;
    label: string;
    count: string;
    sublabel: string;
    icon: React.ReactNode;
    color: string;
  }> = [
    {
      id: 'avatar',
      label: 'Characters',
      count: '129',
      sublabel: 'Roster & Talents',
      icon: <Users className="w-4 h-4" />,
      color: 'from-amber-500/20 via-yellow-500/10 to-amber-500/5',
    },
    {
      id: 'weapon',
      label: 'Weapons',
      count: '279',
      sublabel: 'Arsenal & Lore',
      icon: <Sword className="w-4 h-4" />,
      color: 'from-sky-500/20 via-blue-500/10 to-sky-500/5',
    },
    {
      id: 'reliquary',
      label: 'Artifacts',
      count: '63 Sets',
      sublabel: 'Reliquary Sets',
      icon: <Shield className="w-4 h-4" />,
      color: 'from-emerald-500/20 via-teal-500/10 to-emerald-500/5',
    },
    {
      id: 'book',
      label: 'Literature',
      count: '605 Vols',
      sublabel: 'Archival Books',
      icon: <BookOpen className="w-4 h-4" />,
      color: 'from-purple-500/20 via-indigo-500/10 to-purple-500/5',
    },
    {
      id: 'npc',
      label: 'NPC Gifts',
      count: '343 NPCs',
      sublabel: 'Dialogue Rewards',
      icon: <MessageSquare className="w-4 h-4" />,
      color: 'from-rose-500/20 via-orange-500/10 to-rose-500/5',
    },
    {
      id: 'archon',
      label: 'Archon Quests',
      count: '53 Acts (Wiki)',
      sublabel: 'Main Storyline',
      icon: <Crown className="w-4 h-4" />,
      color: 'from-amber-500/20 via-orange-500/10 to-amber-500/5',
    },
    {
      id: 'quest',
      label: 'World Quests',
      count: '477 Quests',
      sublabel: 'World Chronicles',
      icon: <Scroll className="w-4 h-4" />,
      color: 'from-cyan-500/20 via-teal-500/10 to-cyan-500/5',
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950 border-b border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-3">
          {/* Logo & Brand */}
          <div
            className="flex items-center space-x-3 cursor-pointer group select-none py-1"
            onClick={() => onTabChange('avatar')}
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full p-0.5 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.45)] flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.6)]">
              <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center overflow-hidden relative border border-amber-500/40">
                {/* Ethereal backing aura */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/20 via-rose-500/15 to-indigo-950/70 pointer-events-none" />
                <img
                  src="./assets/UI_AvatarIcon_Columbina.png"
                  alt="Columbina Logo"
                  className="w-full h-full object-contain rounded-full relative z-10 transition-transform duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    if (!img.src.includes('enka.network')) {
                      img.src = 'https://enka.network/ui/UI_AvatarIcon_Columbina.png';
                    } else if (!img.src.includes('upload-os-bbs.mihoyo.com')) {
                      img.src = 'https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Columbina.png';
                    }
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display text-base sm:text-lg font-bold tracking-wider text-amber-300 block leading-tight group-hover:text-amber-200 transition-colors">
                  THE DAMSELETTE ARCHIVE
                </span>
                <span className="hidden md:inline-block px-1.5 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full">
                  v7.1
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block mt-0.5 font-medium">
                Teyvat Literature, Records & Compendium
              </p>
            </div>
          </div>

          {/* Quick Actions & Links */}
          <div className="flex items-center gap-2">
            {onOpenSync && (
              <button
                onClick={onOpenSync}
                title="Synchronize and Update All Data from Reliable Sources"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/40 text-xs font-bold text-amber-300 hover:from-amber-500/30 hover:to-amber-600/30 hover:border-amber-400 transition-all shadow-sm cursor-pointer group"
              >
                <RefreshCw className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
                <span className="hidden sm:inline">Sync Data</span>
              </button>
            )}

            {/* Dynamic Theme Selector */}
            <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />
          </div>
        </div>

        {/* Improved Navigation Tab Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pb-3 pt-1 border-t border-slate-900/90">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative group overflow-hidden p-2.5 sm:p-3 rounded-2xl text-left transition-all duration-300 flex items-center justify-between gap-3 border ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent text-amber-300 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                    : 'bg-slate-900/60 hover:bg-slate-900 text-slate-400 hover:text-slate-200 border-slate-800/80 hover:border-slate-700/80 shadow-sm'
                }`}
              >
                {/* Active Glowing Left Accent Bar */}
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-r-full shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                )}

                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.3)]'
                        : 'bg-slate-800/80 text-slate-400 group-hover:text-slate-200 group-hover:bg-slate-800 border border-slate-700/50'
                    }`}
                  >
                    {tab.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs sm:text-sm font-bold truncate block ${isActive ? 'text-amber-200' : 'text-slate-200'}`}>
                        {tab.label}
                      </span>
                    </div>
                    <span className="text-[10px] text-slate-500 block truncate font-medium">
                      {tab.sublabel}
                    </span>
                  </div>
                </div>

                {/* Counter Badge */}
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-lg border font-semibold flex-shrink-0 hidden xs:inline-block sm:inline-block ${
                    isActive
                      ? 'bg-amber-500/25 text-amber-300 border-amber-500/40'
                      : 'bg-slate-950/60 text-slate-400 border-slate-800 group-hover:border-slate-700'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}

