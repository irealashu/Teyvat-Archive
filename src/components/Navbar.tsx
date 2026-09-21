import React from 'react';
import { ActiveTab, ThemeMode } from '../types';
import { Sparkles, Users, Sword, Shield, BookOpen, ExternalLink } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';

interface NavbarProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export function Navbar({
  activeTab,
  onTabChange,
  currentTheme,
  onThemeChange,
}: NavbarProps) {
  const tabs: Array<{ id: ActiveTab; label: string; icon: React.ReactNode }> = [
    { id: 'avatar', label: 'Characters', icon: <Users className="w-4 h-4" /> },
    { id: 'weapon', label: 'Weapons', icon: <Sword className="w-4 h-4" /> },
    { id: 'reliquary', label: 'Artifacts', icon: <Shield className="w-4 h-4" /> },
    { id: 'book', label: 'Books', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onTabChange('avatar')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[1.5px] shadow-[0_0_15px_rgba(245,158,11,0.35)] overflow-hidden flex-shrink-0">
              <img
                src="https://enka.network/ui/UI_AvatarIcon_Columbina.png"
                alt="Columbina DP"
                className="w-full h-full object-cover bg-slate-900 rounded-2xl"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = 'https://gi.yatta.moe/assets/UI/UI_AvatarIcon_Columbina.png';
                }}
              />
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-wide text-amber-300 block leading-tight">
                THE DAMSELETTE ARCHIVE
              </span>
              <p className="text-[11px] text-slate-400 hidden sm:block mt-0.5">
                Teyvat Literature & Game Records
              </p>
            </div>
          </div>

          {/* Quick Actions & Links */}
          <div className="flex items-center gap-3">
            {/* Dynamic Theme Selector */}
            <ThemeSelector currentTheme={currentTheme} onThemeChange={onThemeChange} />
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-1 overflow-x-auto py-2 border-t border-slate-900 no-scrollbar">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-amber-500/15 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.15)] font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
