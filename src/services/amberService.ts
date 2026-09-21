import { Character, Weapon, ArtifactSet, Book, ElementType, WeaponCategory } from '../types';
import { INITIAL_CHARACTERS } from '../data/characters';
import { INITIAL_WEAPONS } from '../data/weapons';
import { INITIAL_ARTIFACTS } from '../data/artifacts';
import { COMPREHENSIVE_BOOKS } from '../data/books';

export interface AmberListItem {
  id: string | number;
  slug?: string;
  name: string;
  icon: string;
  rank?: number;
  element?: string;
  weaponType?: string;
  type?: string;
  route?: string;
  description?: string;
  filename?: string;
  baseAtk?: string | number;
  subStat?: string;
  passiveName?: string;
  passiveDescription?: string;
  version?: string;
}

export async function fetchAmberList(category: 'avatar' | 'weapon' | 'reliquary' | 'book'): Promise<AmberListItem[]> {
  try {
    const res = await fetch(`/api/amber/${category}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const json = await res.json();
    const itemsObj = json?.data?.items || json?.response?.items || json?.items || {};

    if (Array.isArray(itemsObj)) {
      return itemsObj.map((item: any) => {
        const rawIcon = item.icon || '';
        const icon = rawIcon.startsWith('http')
          ? rawIcon
          : rawIcon
          ? `https://gi.yatta.moe/assets/UI/${rawIcon}.png`
          : '';

        return {
          id: item.id || item.key,
          slug: item.slug,
          name: item.name || item.title || 'Unknown',
          icon,
          rank: item.rank || item.rarity || item.star || 4,
          element: item.element,
          weaponType: item.weaponType || item.type,
          type: item.type,
          description: item.description,
          filename: item.filename,
          baseAtk: item.baseAtk,
          subStat: item.subStat,
          passiveName: item.passiveName,
          passiveDescription: item.passiveDescription,
          version: item.version,
        };
      });
    }

    return Object.entries(itemsObj).map(([id, item]: [string, any]) => {
      const iconName = item.icon || '';
      return {
        id: item.id || id,
        slug: item.slug,
        name: item.name || 'Unknown Item',
        icon: iconName.startsWith('http')
          ? iconName
          : iconName
          ? `https://gi.yatta.moe/assets/UI/${iconName}.png`
          : '',
        rank: item.rank || item.rarity || item.star || 4,
        element: item.element,
        weaponType: item.weaponType || item.type,
        type: item.type,
        description: item.description,
        filename: item.filename,
      };
    });
  } catch (err) {
    console.warn(`Fallback to local dataset for category '${category}':`, err);
    return getFallbackList(category);
  }
}

export async function fetchAmberDetail(category: 'avatar' | 'weapon' | 'reliquary' | 'book', id: string | number): Promise<any> {
  try {
    const res = await fetch(`/api/amber/${category}/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const json = await res.json();
    return json?.data || json?.response || json;
  } catch (err) {
    console.warn(`Failed to fetch Amber detail for ${category}/${id}:`, err);
    return null;
  }
}

function getFallbackList(category: 'avatar' | 'weapon' | 'reliquary' | 'book'): AmberListItem[] {
  switch (category) {
    case 'avatar':
      return INITIAL_CHARACTERS.map((c: Character) => ({
        id: c.id,
        name: c.name,
        icon: c.iconUrl,
        rank: c.rarity,
        element: c.element,
        weaponType: c.weaponType,
        description: c.description,
      }));
    case 'weapon':
      return INITIAL_WEAPONS.map((w: Weapon) => ({
        id: w.id,
        name: w.name,
        icon: w.iconUrl,
        rank: w.rarity,
        weaponType: w.type,
        description: w.description,
      }));
    case 'reliquary':
      return INITIAL_ARTIFACTS.map((a: ArtifactSet) => ({
        id: a.id,
        name: a.name,
        icon: a.iconUrl,
        rank: a.maxRarity,
        description: a.twoPieceBonus,
      }));
    case 'book':
      return COMPREHENSIVE_BOOKS.map((b: Book) => ({
        id: b.id,
        name: b.name,
        icon: b.iconUrl,
        rank: b.rarity,
        description: b.description,
      }));
    default:
      return [];
  }
}

export function formatElementType(element?: string): ElementType {
  if (!element) return 'None';
  const clean = element.trim().toLowerCase();
  if (clean.includes('multi') || clean.includes('adaptive') || clean.includes('all')) return 'Multi';
  if (clean.includes('pyro') || clean === 'fire') return 'Pyro';
  if (clean.includes('hydro') || clean === 'water') return 'Hydro';
  if (clean.includes('anemo') || clean === 'wind') return 'Anemo';
  if (clean.includes('electro') || clean === 'elec') return 'Electro';
  if (clean.includes('dendro') || clean === 'grass') return 'Dendro';
  if (clean.includes('cryo') || clean === 'ice') return 'Cryo';
  if (clean.includes('geo') || clean === 'rock') return 'Geo';
  return 'None';
}

export function formatWeaponType(type?: string): WeaponCategory {
  if (!type) return 'Sword';
  const clean = type.trim().toLowerCase();
  if (clean.includes('claymore')) return 'Claymore';
  if (clean.includes('pole') || clean.includes('spear')) return 'Polearm';
  if (clean.includes('bow')) return 'Bow';
  if (clean.includes('catalyst')) return 'Catalyst';
  return 'Sword';
}
