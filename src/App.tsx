import { useState, useMemo, useEffect } from 'react';
import {
  ActiveTab,
  Character,
  Weapon,
  ArtifactSet,
  RegionInfo,
  ElementType,
  WeaponCategory,
  Rarity,
  RegionName,
  ThemeMode,
} from './types';
import {
  loadDatabase,
  saveDatabase,
  resetDatabase,
  ArchiveDatabase,
} from './services/storage';
import { getSavedTheme, applyTheme } from './utils/theme';

// Components
import { Navbar } from './components/Navbar';
import { FilterBar } from './components/FilterBar';
import { CharacterCard } from './components/CharacterCard';
import { CharacterDetailModal } from './components/CharacterDetailModal';
import { CharacterEditModal } from './components/CharacterEditModal';
import { WeaponCard } from './components/WeaponCard';
import { WeaponDetailModal } from './components/WeaponDetailModal';
import { WeaponEditModal } from './components/WeaponEditModal';
import { ArtifactCard } from './components/ArtifactCard';
import { ArtifactDetailModal } from './components/ArtifactDetailModal';
import { ArtifactEditModal } from './components/ArtifactEditModal';
import { RegionCard } from './components/RegionCard';
import { RegionDetailModal } from './components/RegionDetailModal';
import { RegionEditModal } from './components/RegionEditModal';
import { ComparisonView } from './components/ComparisonView';
import { AddEntryModal } from './components/AddEntryModal';
import { DataManagerModal } from './components/DataManagerModal';
import { AdminAuthModal } from './components/AdminAuthModal';
import { Plus } from 'lucide-react';

export default function App() {
  const [database, setDatabase] = useState<ArchiveDatabase>(() => loadDatabase());
  const [activeTab, setActiveTab] = useState<ActiveTab>('characters');

  // Curator / Admin Security Authentication State
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem('teyvat_curator_auth') === 'true';
    } catch {
      return false;
    }
  });
  const [isAdminAuthOpen, setIsAdminAuthOpen] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState<string>(() => {
    try {
      return localStorage.getItem('teyvat_curator_passcode') || 'genshin123';
    } catch {
      return 'genshin123';
    }
  });

  const handleUnlockAdmin = (passcode: string): boolean => {
    if (passcode === adminPasscode) {
      setIsAdmin(true);
      try {
        sessionStorage.setItem('teyvat_curator_auth', 'true');
      } catch {}
      return true;
    }
    return false;
  };

  const handleLockAdmin = () => {
    setIsAdmin(false);
    try {
      sessionStorage.removeItem('teyvat_curator_auth');
    } catch {}
  };

  const handleChangePasscode = (oldPass: string, newPass: string): boolean => {
    if (oldPass === adminPasscode) {
      setAdminPasscode(newPass);
      try {
        localStorage.setItem('teyvat_curator_passcode', newPass);
      } catch {}
      return true;
    }
    return false;
  };

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedElement, setSelectedElement] = useState<ElementType | 'All'>('All');
  const [selectedWeapon, setSelectedWeapon] = useState<WeaponCategory | 'All'>('All');
  const [selectedRarity, setSelectedRarity] = useState<Rarity | 'All'>('All');
  const [selectedRegion, setSelectedRegion] = useState<RegionName | 'All'>('All');

  // Dynamic Theme Mode
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => getSavedTheme());

  useEffect(() => {
    applyTheme(currentTheme);
  }, [currentTheme]);

  const handleThemeChange = (newTheme: ThemeMode) => {
    setCurrentTheme(newTheme);
    applyTheme(newTheme);
  };

  // Modals Detail States
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [selectedWeaponDetail, setSelectedWeaponDetail] = useState<Weapon | null>(null);
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactSet | null>(null);
  const [selectedRegionDetail, setSelectedRegionDetail] = useState<RegionInfo | null>(null);

  // Modals Edit States
  const [editingCharacter, setEditingCharacter] = useState<Character | null | undefined>(undefined);
  const [editingWeapon, setEditingWeapon] = useState<Weapon | null | undefined>(undefined);
  const [editingArtifact, setEditingArtifact] = useState<ArtifactSet | null | undefined>(undefined);
  const [editingRegion, setEditingRegion] = useState<RegionInfo | null | undefined>(undefined);

  // Utility Modals
  const [isAddEntryOpen, setIsAddEntryOpen] = useState(false);
  const [isDataManagerOpen, setIsDataManagerOpen] = useState(false);

  // Reset filters helper
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedElement('All');
    setSelectedWeapon('All');
    setSelectedRarity('All');
    setSelectedRegion('All');
  };

  const hasActiveFilters = Boolean(
    searchQuery ||
    selectedElement !== 'All' ||
    selectedWeapon !== 'All' ||
    selectedRarity !== 'All' ||
    selectedRegion !== 'All'
  );

  // Filtered Collections
  const filteredCharacters = useMemo(() => {
    return database.characters.filter((c) => {
      if (selectedElement !== 'All' && c.element !== selectedElement) return false;
      if (selectedWeapon !== 'All' && c.weaponType !== selectedWeapon) return false;
      if (selectedRarity !== 'All' && c.rarity !== selectedRarity) return false;
      if (selectedRegion !== 'All' && c.region !== selectedRegion) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesAffiliation = c.affiliation.toLowerCase().includes(q);
        const matchesRole = c.build.role.toLowerCase().includes(q);
        const matchesWeapon = c.weaponType.toLowerCase().includes(q);
        const matchesElement = c.element.toLowerCase().includes(q);
        if (!matchesName && !matchesTitle && !matchesAffiliation && !matchesRole && !matchesWeapon && !matchesElement) {
          return false;
        }
      }
      return true;
    });
  }, [database.characters, searchQuery, selectedElement, selectedWeapon, selectedRarity, selectedRegion]);

  const filteredWeapons = useMemo(() => {
    return database.weapons.filter((w) => {
      if (selectedWeapon !== 'All' && w.type !== selectedWeapon) return false;
      if (selectedRarity !== 'All' && w.rarity !== selectedRarity) return false;
      if (selectedRegion !== 'All' && w.region && w.region !== selectedRegion) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = w.name.toLowerCase().includes(q);
        const matchesType = w.type.toLowerCase().includes(q);
        const matchesPassive = w.passiveName.toLowerCase().includes(q) || w.passiveDescription.toLowerCase().includes(q);
        const matchesSubstat = w.subStatType.toLowerCase().includes(q);
        if (!matchesName && !matchesType && !matchesPassive && !matchesSubstat) {
          return false;
        }
      }
      return true;
    });
  }, [database.weapons, searchQuery, selectedWeapon, selectedRarity, selectedRegion]);

  const filteredArtifacts = useMemo(() => {
    return database.artifacts.filter((a) => {
      if (selectedRarity !== 'All' && a.maxRarity !== selectedRarity) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = a.name.toLowerCase().includes(q);
        const matchesBonus = a.twoPieceBonus.toLowerCase().includes(q) || a.fourPieceBonus.toLowerCase().includes(q);
        const matchesDomain = a.domainOrSource.toLowerCase().includes(q);
        const matchesChar = a.recommendedCharacters?.some((c) => c.toLowerCase().includes(q));
        if (!matchesName && !matchesBonus && !matchesDomain && !matchesChar) {
          return false;
        }
      }
      return true;
    });
  }, [database.artifacts, searchQuery, selectedRarity]);

  const filteredRegions = useMemo(() => {
    return database.regions.filter((r) => {
      if (selectedElement !== 'All' && r.element !== selectedElement) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = r.name.toLowerCase().includes(q);
        const matchesArchon = r.archon.toLowerCase().includes(q);
        const matchesIdeal = r.ideal.toLowerCase().includes(q);
        const matchesDesc = r.description.toLowerCase().includes(q);
        if (!matchesName && !matchesArchon && !matchesIdeal && !matchesDesc) {
          return false;
        }
      }
      return true;
    });
  }, [database.regions, searchQuery, selectedElement]);

  // CRUD HANDLERS - CHARACTERS
  const handleSaveCharacter = (char: Character) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const exists = database.characters.some((c) => c.id === char.id);
    const updated = exists
      ? database.characters.map((c) => (c.id === char.id ? char : c))
      : [char, ...database.characters];
    const newDb = { ...database, characters: updated };
    setDatabase(newDb);
    saveDatabase(newDb);
    setEditingCharacter(undefined);
  };

  const handleDeleteCharacter = (id: string) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const updated = database.characters.filter((c) => c.id !== id);
    const newDb = { ...database, characters: updated };
    setDatabase(newDb);
    saveDatabase(newDb);
    setEditingCharacter(undefined);
    if (selectedCharacter?.id === id) setSelectedCharacter(null);
  };

  // CRUD HANDLERS - WEAPONS
  const handleSaveWeapon = (wpn: Weapon) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const exists = database.weapons.some((w) => w.id === wpn.id);
    const updated = exists
      ? database.weapons.map((w) => (w.id === wpn.id ? wpn : w))
      : [wpn, ...database.weapons];
    const newDb = { ...database, weapons: updated };
    setDatabase(newDb);
    saveDatabase(newDb);
    setEditingWeapon(undefined);
  };

  const handleDeleteWeapon = (id: string) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const updated = database.weapons.filter((w) => w.id !== id);
    const newDb = { ...database, weapons: updated };
    setDatabase(newDb);
    saveDatabase(newDb);
    setEditingWeapon(undefined);
    if (selectedWeaponDetail?.id === id) setSelectedWeaponDetail(null);
  };

  // CRUD HANDLERS - ARTIFACTS
  const handleSaveArtifact = (art: ArtifactSet) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const exists = database.artifacts.some((a) => a.id === art.id);
    const updated = exists
      ? database.artifacts.map((a) => (a.id === art.id ? art : a))
      : [art, ...database.artifacts];
    const newDb = { ...database, artifacts: updated };
    setDatabase(newDb);
    saveDatabase(newDb);
    setEditingArtifact(undefined);
  };

  const handleDeleteArtifact = (id: string) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const updated = database.artifacts.filter((a) => a.id !== id);
    const newDb = { ...database, artifacts: updated };
    setDatabase(newDb);
    saveDatabase(newDb);
    setEditingArtifact(undefined);
    if (selectedArtifact?.id === id) setSelectedArtifact(null);
  };

  // CRUD HANDLERS - REGIONS / NATIONS
  const handleSaveRegion = (region: RegionInfo) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const exists = database.regions.some((r) => r.id === region.id);
    const updated = exists
      ? database.regions.map((r) => (r.id === region.id ? region : r))
      : [...database.regions, region];
    const newDb = { ...database, regions: updated };
    setDatabase(newDb);
    saveDatabase(newDb);
    setEditingRegion(undefined);
    if (selectedRegionDetail?.id === region.id) setSelectedRegionDetail(region);
  };

  const handleDeleteRegion = (id: string) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const updated = database.regions.filter((r) => r.id !== id);
    const newDb = { ...database, regions: updated };
    setDatabase(newDb);
    saveDatabase(newDb);
    setEditingRegion(undefined);
    if (selectedRegionDetail?.id === id) setSelectedRegionDetail(null);
  };

  // DATA MANAGEMENT
  const handleImportDatabase = (imported: ArchiveDatabase) => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    setDatabase(imported);
    saveDatabase(imported);
  };

  const handleResetToDefaults = () => {
    if (!isAdmin) {
      setIsAdminAuthOpen(true);
      return;
    }
    const reset = resetDatabase();
    setDatabase(reset);
  };

  const handleAddTypeSelected = (type: 'characters' | 'weapons' | 'artifacts' | 'regions') => {
    if (type === 'characters') setEditingCharacter(null);
    if (type === 'weapons') setEditingWeapon(null);
    if (type === 'artifacts') setEditingArtifact(null);
    if (type === 'regions') setEditingRegion(null);
  };

  // Active items counts for navbar
  const counts = {
    characters: database.characters.length,
    weapons: database.weapons.length,
    artifacts: database.artifacts.length,
    regions: database.regions.length,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Sticky Header Navbar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        counts={counts}
        onOpenAddModal={() => {
          if (!isAdmin) {
            setIsAdminAuthOpen(true);
          } else {
            setIsAddEntryOpen(true);
          }
        }}
        onOpenDataManager={() => setIsDataManagerOpen(true)}
        lastUpdated={database.lastUpdated}
        isAdmin={isAdmin}
        onOpenAdminModal={() => setIsAdminAuthOpen(true)}
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
      />

      {/* Curator Active Notice Bar */}
      {isAdmin && (
        <div className="bg-emerald-950/90 border-b border-emerald-500/40 px-4 py-2 text-xs text-emerald-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="font-bold text-emerald-200">Curator Mode Active:</span>
              <span className="text-emerald-300/90 hidden sm:inline">
                You have administrative access to add, edit, or remove entries. When done, lock the archive so visitors cannot alter records.
              </span>
            </div>
            <button
              onClick={handleLockAdmin}
              className="px-2.5 py-1 text-[11px] font-bold text-white bg-emerald-700/90 hover:bg-emerald-600 rounded-md transition-colors whitespace-nowrap"
            >
              Lock Archive
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Banner Section */}
        <div className="mb-6 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  Teyvat Live Compendium
                </span>
                <span className="text-xs text-slate-400">
                  All Natlan, Fontaine, Sumeru & Historic Archive
                </span>
              </div>
              <h1 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide">
                Genshin Impact Master Archive
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                Complete database for characters, signature weapons, relic artifact sets, and nations of Teyvat. Update any attribute, compare builds, and explore your personal collection.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-3 bg-slate-950/80 border border-slate-800 p-3 rounded-xl backdrop-blur-md self-start md:self-auto">
              <div className="text-center px-2">
                <span className="text-xs text-slate-400 block">Characters</span>
                <span className="font-display font-bold text-amber-400 text-lg">{counts.characters}</span>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div className="text-center px-2">
                <span className="text-xs text-slate-400 block">Weapons</span>
                <span className="font-display font-bold text-red-400 text-lg">{counts.weapons}</span>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div className="text-center px-2">
                <span className="text-xs text-slate-400 block">Artifacts</span>
                <span className="font-display font-bold text-emerald-400 text-lg">{counts.artifacts}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab 1: CHARACTERS */}
        {activeTab === 'characters' && (
          <div>
            <FilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedElement={selectedElement}
              onElementChange={setSelectedElement}
              selectedWeapon={selectedWeapon}
              onWeaponChange={setSelectedWeapon}
              selectedRarity={selectedRarity}
              onRarityChange={setSelectedRarity}
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
              onResetFilters={handleResetFilters}
              hasActiveFilters={hasActiveFilters}
              totalMatches={filteredCharacters.length}
            />

            {filteredCharacters.length === 0 ? (
              <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-3">No characters match your current filters.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg hover:bg-amber-500/30"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCharacters.map((char) => (
                  <CharacterCard
                    key={char.id}
                    character={char}
                    onSelect={setSelectedCharacter}
                    onEdit={(c) => setEditingCharacter(c)}
                    isAdmin={isAdmin}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: WEAPONS */}
        {activeTab === 'weapons' && (
          <div>
            <FilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              showElementFilter={false}
              selectedWeapon={selectedWeapon}
              onWeaponChange={setSelectedWeapon}
              selectedRarity={selectedRarity}
              onRarityChange={setSelectedRarity}
              selectedRegion={selectedRegion}
              onRegionChange={setSelectedRegion}
              onResetFilters={handleResetFilters}
              hasActiveFilters={hasActiveFilters}
              totalMatches={filteredWeapons.length}
            />

            {filteredWeapons.length === 0 ? (
              <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-3">No weapons match your current filters.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg hover:bg-amber-500/30"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredWeapons.map((wpn) => (
                  <WeaponCard
                    key={wpn.id}
                    weapon={wpn}
                    onSelect={setSelectedWeaponDetail}
                    onEdit={(w) => setEditingWeapon(w)}
                    isAdmin={isAdmin}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: ARTIFACTS */}
        {activeTab === 'artifacts' && (
          <div>
            <FilterBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              showElementFilter={false}
              showWeaponFilter={false}
              showRegionFilter={false}
              selectedRarity={selectedRarity}
              onRarityChange={setSelectedRarity}
              onResetFilters={handleResetFilters}
              hasActiveFilters={hasActiveFilters}
              totalMatches={filteredArtifacts.length}
            />

            {filteredArtifacts.length === 0 ? (
              <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm mb-3">No artifact sets match your current filters.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg hover:bg-amber-500/30"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredArtifacts.map((art) => (
                  <ArtifactCard
                    key={art.id}
                    artifact={art}
                    onSelect={setSelectedArtifact}
                    onEdit={(a) => setEditingArtifact(a)}
                    isAdmin={isAdmin}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 4: REGIONS */}
        {activeTab === 'regions' && (
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
              <FilterBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedElement={selectedElement}
                onElementChange={setSelectedElement}
                showWeaponFilter={false}
                showRarityFilter={false}
                showRegionFilter={false}
                onResetFilters={handleResetFilters}
                hasActiveFilters={hasActiveFilters}
                totalMatches={filteredRegions.length}
              />
              {isAdmin && (
                <button
                  onClick={() => setEditingRegion(null)}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg shadow-md transition-all self-end sm:self-center whitespace-nowrap active:scale-95"
                  title="Add new nation or autonomous region with template support"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Nation / Region</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRegions.map((region) => (
                <RegionCard
                  key={region.id}
                  region={region}
                  onSelect={setSelectedRegionDetail}
                  onEdit={(r) => setEditingRegion(r)}
                  isAdmin={isAdmin}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: COMPARISON MATRIX */}
        {activeTab === 'comparison' && (
          <ComparisonView
            characters={database.characters}
            weapons={database.weapons}
            onSelectCharacter={setSelectedCharacter}
            onSelectWeapon={setSelectedWeaponDetail}
          />
        )}
      </main>

      {/* DETAIL MODALS */}
      {selectedCharacter && (
        <CharacterDetailModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
          onEdit={(c) => {
            setSelectedCharacter(null);
            setEditingCharacter(c);
          }}
          isAdmin={isAdmin}
        />
      )}

      {selectedWeaponDetail && (
        <WeaponDetailModal
          weapon={selectedWeaponDetail}
          onClose={() => setSelectedWeaponDetail(null)}
          onEdit={(w) => {
            setSelectedWeaponDetail(null);
            setEditingWeapon(w);
          }}
          isAdmin={isAdmin}
        />
      )}

      {selectedArtifact && (
        <ArtifactDetailModal
          artifact={selectedArtifact}
          onClose={() => setSelectedArtifact(null)}
          onEdit={(a) => {
            setSelectedArtifact(null);
            setEditingArtifact(a);
          }}
          isAdmin={isAdmin}
        />
      )}

      {selectedRegionDetail && (
        <RegionDetailModal
          region={selectedRegionDetail}
          onClose={() => setSelectedRegionDetail(null)}
          onEdit={(r) => {
            setSelectedRegionDetail(null);
            setEditingRegion(r);
          }}
          isAdmin={isAdmin}
        />
      )}

      {/* EDIT / ADD MODALS */}
      {editingCharacter !== undefined && (
        <CharacterEditModal
          character={editingCharacter}
          isOpen={true}
          onClose={() => setEditingCharacter(undefined)}
          onSave={handleSaveCharacter}
          onDelete={handleDeleteCharacter}
        />
      )}

      {editingWeapon !== undefined && (
        <WeaponEditModal
          weapon={editingWeapon}
          isOpen={true}
          onClose={() => setEditingWeapon(undefined)}
          onSave={handleSaveWeapon}
          onDelete={handleDeleteWeapon}
        />
      )}

      {editingArtifact !== undefined && (
        <ArtifactEditModal
          artifact={editingArtifact}
          isOpen={true}
          onClose={() => setEditingArtifact(undefined)}
          onSave={handleSaveArtifact}
          onDelete={handleDeleteArtifact}
        />
      )}

      {editingRegion !== undefined && (
        <RegionEditModal
          region={editingRegion || undefined}
          isOpen={true}
          onClose={() => setEditingRegion(undefined)}
          onSave={handleSaveRegion}
          onDelete={handleDeleteRegion}
        />
      )}

      {/* ADD ENTRY MODAL */}
      <AddEntryModal
        isOpen={isAddEntryOpen}
        onClose={() => setIsAddEntryOpen(false)}
        onSelectType={handleAddTypeSelected}
      />

      {/* DATA MANAGER MODAL */}
      <DataManagerModal
        isOpen={isDataManagerOpen}
        onClose={() => setIsDataManagerOpen(false)}
        database={database}
        onImportDatabase={handleImportDatabase}
        onResetDatabase={handleResetToDefaults}
        isAdmin={isAdmin}
        onOpenAdminModal={() => setIsAdminAuthOpen(true)}
      />

      {/* ADMIN AUTH MODAL */}
      <AdminAuthModal
        isOpen={isAdminAuthOpen}
        onClose={() => setIsAdminAuthOpen(false)}
        isAdmin={isAdmin}
        onUnlock={handleUnlockAdmin}
        onLock={handleLockAdmin}
        onChangePasscode={handleChangePasscode}
      />

      {/* Global Footer */}
      <footer className="mt-12 border-t border-slate-900 bg-slate-950 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-display font-semibold text-slate-400">
            Teyvat Archive • Genshin Impact Compendium & Manager
          </span>
          <span className="text-[11px] text-slate-600">
            Genshin Impact™ is a registered trademark of HoYoverse. Game assets & imagery © HoYoverse.
          </span>
        </div>
      </footer>
    </div>
  );
}
