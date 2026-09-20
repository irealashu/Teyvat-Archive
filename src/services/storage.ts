import { Character, Weapon, ArtifactSet, RegionInfo, JOURNEY_REGION_ORDER } from '../types';
import { INITIAL_CHARACTERS } from '../data/characters';
import { INITIAL_WEAPONS } from '../data/weapons';
import { INITIAL_ARTIFACTS } from '../data/artifacts';
import { INITIAL_REGIONS } from '../data/regions';

export interface ArchiveDatabase {
  version: string;
  lastUpdated: string;
  characters: Character[];
  weapons: Weapon[];
  artifacts: ArtifactSet[];
  regions: RegionInfo[];
}

const STORAGE_KEY = 'genshin_archive_data_v7';
const PREV_STORAGE_KEYS = ['genshin_archive_data_v6', 'genshin_archive_data_v5', 'genshin_archive_data_v4', 'genshin_archive_data_v3', 'genshin_archive_data_v2', 'genshin_archive_data_v1'];

export function getInitialDatabase(): ArchiveDatabase {
  return {
    version: '7.0.0',
    lastUpdated: new Date().toISOString(),
    characters: INITIAL_CHARACTERS,
    weapons: INITIAL_WEAPONS,
    artifacts: INITIAL_ARTIFACTS,
    regions: INITIAL_REGIONS,
  };
}

export function sortRegionsInJourneyOrder(regions: RegionInfo[]): RegionInfo[] {
  const journeyOrder = JOURNEY_REGION_ORDER as readonly string[];
  return [...regions].sort((a, b) => {
    const idxA = journeyOrder.indexOf(a.name);
    const idxB = journeyOrder.indexOf(b.name);
    if (idxA !== -1 && idxB !== -1) return idxA - idxB;
    if (idxA !== -1) return -1;
    if (idxB !== -1) return 1;
    return a.name.localeCompare(b.name);
  });
}

export function sanitizeDatabase(db: ArchiveDatabase): ArchiveDatabase {
  // 1. Synchronize characters with the complete INITIAL_CHARACTERS catalog
  const savedCharMap = new Map((db.characters || []).map(c => [c.id, c]));

  // Base list containing all characters from INITIAL_CHARACTERS
  const cleanCharacters: Character[] = INITIAL_CHARACTERS
    .filter(c => c.id !== 'dainsleif' && c.id !== 'il-capitano' && c.region !== "Khaenri'ah")
    .map(initChar => {
      const savedChar = savedCharMap.get(initChar.id);
      if (savedChar) {
        return {
          ...initChar,
          ...savedChar,
          // Ensure all talents are retained if saved character has older truncated skill set
          skills: (savedChar.skills && savedChar.skills.length >= initChar.skills.length)
            ? savedChar.skills
            : initChar.skills,
        };
      }
      return initChar;
    });

  // Also include any user-created custom characters that are not in INITIAL_CHARACTERS
  if (db.characters) {
    for (const savedChar of db.characters) {
      if (
        !INITIAL_CHARACTERS.some(ic => ic.id === savedChar.id) &&
        savedChar.id !== 'dainsleif' &&
        savedChar.id !== 'il-capitano' &&
        savedChar.region !== "Khaenri'ah"
      ) {
        cleanCharacters.push(savedChar);
      }
    }
  }

  // Ensure Tartaglia is assigned to Snezhnaya
  const finalCharacters = cleanCharacters.map(c => {
    if (c.id === 'tartaglia') {
      return { ...c, region: 'Snezhnaya' as const };
    }
    return c;
  });

  // 2. Filter out Khaenri'ah from regions
  let cleanRegions = (db.regions || INITIAL_REGIONS).filter(
    r => r.id !== 'khaenriah' && r.name !== "Khaenri'ah"
  );

  // 3. Ensure Nod Krai exists
  const hasNodKrai = cleanRegions.some(r => r.id === 'nod-krai' || r.name.toLowerCase() === 'nod krai');
  if (!hasNodKrai) {
    const defaultNodKrai = INITIAL_REGIONS.find(r => r.id === 'nod-krai');
    if (defaultNodKrai) {
      cleanRegions.push(defaultNodKrai);
    }
  }

  // 4. Sort in Journey order: Mondstadt, Liyue, Inazuma, Sumeru, Fontaine, Natlan, Nod Krai, Snezhnaya
  cleanRegions = sortRegionsInJourneyOrder(cleanRegions);

  return {
    ...db,
    characters: finalCharacters,
    weapons: db.weapons || INITIAL_WEAPONS,
    artifacts: db.artifacts || INITIAL_ARTIFACTS,
    regions: cleanRegions,
    version: '6.0.0',
    lastUpdated: new Date().toISOString(),
  };
}

export function loadDatabase(): ArchiveDatabase {
  try {
    let saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Check previous versions for migration
      for (const oldKey of PREV_STORAGE_KEYS) {
        const oldData = localStorage.getItem(oldKey);
        if (oldData) {
          saved = oldData;
          break;
        }
      }
    }

    if (!saved) {
      const initial = getInitialDatabase();
      saveDatabase(initial);
      return initial;
    }

    const parsed = JSON.parse(saved);
    const sanitized = sanitizeDatabase(parsed);
    saveDatabase(sanitized);
    return sanitized;
  } catch (err) {
    console.error('Failed to load database from localStorage:', err);
    return getInitialDatabase();
  }
}

export function saveDatabase(db: ArchiveDatabase): void {
  try {
    const updated = {
      ...db,
      lastUpdated: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save database to localStorage:', err);
  }
}

export function resetDatabase(): ArchiveDatabase {
  const initial = getInitialDatabase();
  saveDatabase(initial);
  return initial;
}

export function exportDatabaseJSON(db: ArchiveDatabase): void {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(db, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute('href', dataStr);
  downloadAnchor.setAttribute('download', `teyvat-archive-backup-${new Date().toISOString().slice(0, 10)}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}
