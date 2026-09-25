import { useState, useEffect } from 'react';
import { ActiveTab, ThemeMode } from './types';
import { getSavedTheme, applyTheme } from './utils/theme';

// Components
import { Navbar } from './components/Navbar';
import { ArchiveAvatarView } from './components/ArchiveAvatarView';
import { ArchiveWeaponView } from './components/ArchiveWeaponView';
import { ArchiveReliquaryView } from './components/ArchiveReliquaryView';
import { ArchiveBookView } from './components/ArchiveBookView';
import { ArchiveNPCView } from './components/ArchiveNPCView';
import { ArchiveQuestView } from './components/ArchiveQuestView';
import { ArchiveArchonQuestView } from './components/ArchiveArchonQuestView';
import { SyncModal } from './components/SyncModal';
import { Sparkles, RefreshCw } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('avatar');
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Dynamic Theme Mode
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => getSavedTheme());

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (newTheme: ThemeMode) => {
    setCurrentTheme(newTheme);
    applyTheme(newTheme);
  };

  const handleSyncComplete = () => {
    // Increment key to trigger fresh re-render and reload of child views
    setRefreshKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        onOpenSync={() => setIsSyncModalOpen(true)}
      />

      {/* Main Content Area */}
      <main key={refreshKey} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {activeTab === 'avatar' && <ArchiveAvatarView />}
        {activeTab === 'weapon' && <ArchiveWeaponView />}
        {activeTab === 'reliquary' && <ArchiveReliquaryView />}
        {activeTab === 'book' && <ArchiveBookView />}
        {activeTab === 'npc' && <ArchiveNPCView />}
        {activeTab === 'archon' && <ArchiveArchonQuestView />}
        {activeTab === 'quest' && <ArchiveQuestView />}
      </main>

      {/* Live Data Synchronizer Modal */}
      <SyncModal
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
        onSyncComplete={handleSyncComplete}
      />

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8 text-center text-xs text-slate-500 space-y-3">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-amber-300">The Damselette Archive</span>
        </div>
        <p className="text-slate-500 max-w-2xl mx-auto px-4 leading-relaxed">
          Genshin Impact, game content, and associated assets are copyright © HoYoverse / Cognosphere Pte. Ltd.
          <br />
          Game data & archive literature generously provided by <span className="text-slate-400 font-medium">Project Amber</span>, <span className="text-slate-400 font-medium">Genshin Impact Wiki</span>, and <span className="text-slate-400 font-medium">genshin-db</span>.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] pt-1">
          <button
            onClick={() => setIsSyncModalOpen(true)}
            className="text-amber-400 hover:text-amber-300 hover:underline flex items-center gap-1 font-bold cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Sync All Data
          </button>
          <span className="text-slate-700">|</span>
          <span className="text-slate-500">
            Dedicated to Columbina (The Damselette) & the literature seekers of Teyvat.
          </span>
        </div>
      </footer>
    </div>
  );
}
