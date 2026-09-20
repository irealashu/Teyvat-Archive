import { ElementType, WeaponCategory, Rarity, RegionName } from '../types';
import { ELEMENT_COLORS } from '../utils/elementStyles';
import { Search, X, Star, SlidersHorizontal } from 'lucide-react';

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedElement?: ElementType | 'All';
  onElementChange?: (elem: ElementType | 'All') => void;
  selectedWeapon?: WeaponCategory | 'All';
  onWeaponChange?: (weapon: WeaponCategory | 'All') => void;
  selectedRarity?: Rarity | 'All';
  onRarityChange?: (rarity: Rarity | 'All') => void;
  selectedRegion?: RegionName | 'All';
  onRegionChange?: (region: RegionName | 'All') => void;
  showElementFilter?: boolean;
  showWeaponFilter?: boolean;
  showRarityFilter?: boolean;
  showRegionFilter?: boolean;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
  totalMatches: number;
}

const ELEMENTS: ElementType[] = ['Pyro', 'Hydro', 'Anemo', 'Electro', 'Dendro', 'Cryo', 'Geo'];
const WEAPONS: WeaponCategory[] = ['Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'];
const RARITIES: Rarity[] = [5, 4, 3];
const REGIONS: RegionName[] = ['Mondstadt', 'Liyue', 'Inazuma', 'Sumeru', 'Fontaine', 'Natlan', 'Snezhnaya', 'Khaenri\'ah'];

export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedElement = 'All',
  onElementChange,
  selectedWeapon = 'All',
  onWeaponChange,
  selectedRarity = 'All',
  onRarityChange,
  selectedRegion = 'All',
  onRegionChange,
  showElementFilter = true,
  showWeaponFilter = true,
  showRarityFilter = true,
  showRegionFilter = true,
  onResetFilters,
  hasActiveFilters,
  totalMatches,
}: FilterBarProps) {
  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 mb-6 shadow-md backdrop-blur-sm space-y-3">
      {/* Top Search & Toggles Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by name, title, skill, role, or keywords..."
            className="w-full bg-slate-950/80 border border-slate-700/80 focus:border-amber-400 focus:outline-none rounded-lg pl-9 pr-8 py-2 text-xs text-slate-200 placeholder-slate-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 px-2.5 py-2 text-xs text-amber-300/80 hover:text-amber-200 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors"
              title="Clear all filters"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}

          <div className="text-xs text-slate-400 whitespace-nowrap pl-2 border-l border-slate-800">
            <span className="font-semibold text-amber-400">{totalMatches}</span> found
          </div>
        </div>
      </div>

      {/* Filter Badges & Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-2 border-t border-slate-800/60">
        {/* Element Filter */}
        {showElementFilter && onElementChange && (
          <div>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 block mb-1.5">
              Element Vision
            </span>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => onElementChange('All')}
                className={`px-2 py-1 text-[11px] rounded font-medium border transition-colors ${
                  selectedElement === 'All'
                    ? 'bg-slate-700 text-white border-slate-500'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                All
              </button>
              {ELEMENTS.map((elem) => {
                const isSelected = selectedElement === elem;
                const style = ELEMENT_COLORS[elem];
                return (
                  <button
                    key={elem}
                    onClick={() => onElementChange(isSelected ? 'All' : elem)}
                    className={`px-2 py-1 text-[11px] rounded font-medium border transition-colors ${
                      isSelected
                        ? style.badge
                        : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {elem}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Weapon Type Filter */}
        {showWeaponFilter && onWeaponChange && (
          <div>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 block mb-1.5">
              Weapon Type
            </span>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => onWeaponChange('All')}
                className={`px-2 py-1 text-[11px] rounded font-medium border transition-colors ${
                  selectedWeapon === 'All'
                    ? 'bg-slate-700 text-white border-slate-500'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                All
              </button>
              {WEAPONS.map((wpn) => {
                const isSelected = selectedWeapon === wpn;
                return (
                  <button
                    key={wpn}
                    onClick={() => onWeaponChange(isSelected ? 'All' : wpn)}
                    className={`px-2 py-1 text-[11px] rounded font-medium border transition-colors ${
                      isSelected
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                        : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {wpn}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Rarity Filter */}
        {showRarityFilter && onRarityChange && (
          <div>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 block mb-1.5">
              Rarity Stars
            </span>
            <div className="flex flex-wrap gap-1">
              <button
                onClick={() => onRarityChange('All')}
                className={`px-2 py-1 text-[11px] rounded font-medium border transition-colors ${
                  selectedRarity === 'All'
                    ? 'bg-slate-700 text-white border-slate-500'
                    : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                All
              </button>
              {RARITIES.map((r) => {
                const isSelected = selectedRarity === r;
                return (
                  <button
                    key={r}
                    onClick={() => onRarityChange(isSelected ? 'All' : r)}
                    className={`px-2 py-1 text-[11px] rounded font-medium border transition-colors ${
                      isSelected
                        ? r === 5
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                          : r === 4
                          ? 'bg-purple-500/20 text-purple-300 border-purple-500/50'
                          : 'bg-blue-500/20 text-blue-300 border-blue-500/50'
                        : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {r} ★
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Region Filter */}
        {showRegionFilter && onRegionChange && (
          <div>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400 block mb-1.5">
              Nation of Teyvat
            </span>
            <select
              value={selectedRegion}
              onChange={(e) => onRegionChange(e.target.value as RegionName | 'All')}
              className="w-full bg-slate-950/80 border border-slate-700/80 rounded px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-amber-400"
            >
              <option value="All">All Nations</option>
              {REGIONS.map((reg) => (
                <option key={reg} value={reg}>
                  {reg}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
}
