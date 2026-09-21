import { useState, useEffect } from 'react';
import { ActiveTab, ThemeMode } from './types';
import { getSavedTheme, applyTheme } from './utils/theme';

// Components
import { Navbar } from './components/Navbar';
import { ArchiveAvatarView } from './components/ArchiveAvatarView';
import { ArchiveWeaponView } from './components/ArchiveWeaponView';
import { ArchiveReliquaryView } from './components/ArchiveReliquaryView';
import { ArchiveBookView } from './components/ArchiveBookView';
import { Sparkles, ExternalLink } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('avatar');

  // Dynamic Theme Mode
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => getSavedTheme());

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (newTheme: ThemeMode) => {
    setCurrentTheme(newTheme);
    applyTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {activeTab === 'avatar' && <ArchiveAvatarView />}
        {activeTab === 'weapon' && <ArchiveWeaponView />}
        {activeTab === 'reliquary' && <ArchiveReliquaryView />}
        {activeTab === 'book' && <ArchiveBookView />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-xs text-slate-500 space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-amber-300">The Damselette Archive</span>
        </div>
        <p className="text-slate-500 max-w-2xl mx-auto px-4 leading-relaxed">
          Genshin Impact, game content, and associated assets are copyright © HoYoverse / Cognosphere Pte. Ltd.
          <br />
          Game data & archive literature generously provided by <span className="text-slate-400 font-medium">Project Amber</span>.
        </p>
        <p className="text-[11px] text-slate-600">
          Dedicated to Columbina (The Damselette) & the literature seekers of Teyvat.
        </p>
      </footer>
    </div>
  );
}
