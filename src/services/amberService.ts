import { ElementType, WeaponCategory } from '../types';
import AVATARS from '../data/avatars.json';
import WEAPONS from '../data/weapons.json';
import ARTIFACTS from '../data/artifacts.json';
import BOOKS from '../data/books.json';
import NPCS from '../data/npcs.json';
import EVENT_QUESTS from '../data/event_quests.json';

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

export async function fetchAmberList(category: 'avatar' | 'weapon' | 'reliquary' | 'book' | 'npc' | 'quest'): Promise<any[]> {
  try {
    const res = await fetch(`/api/amber/${category}`);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const json = await res.json();
    const itemsObj = json?.data?.items || json?.response?.items || json?.items || {};

    if (category === 'npc') {
      return Array.isArray(itemsObj) && itemsObj.length > 0 ? itemsObj : NPCS;
    }
    if (category === 'quest') {
      return Array.isArray(itemsObj) && itemsObj.length > 0 ? itemsObj : EVENT_QUESTS;
    }

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

export async function fetchAmberDetail(category: 'avatar' | 'weapon' | 'reliquary' | 'book' | 'npc' | 'quest', id: string | number): Promise<any> {
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

function getFallbackList(category: 'avatar' | 'weapon' | 'reliquary' | 'book' | 'npc' | 'quest'): any[] {
  switch (category) {
    case 'avatar':
      return AVATARS.map((c: any) => ({
        id: c.id,
        name: c.name,
        icon: c.icon,
        rank: c.rank,
        element: c.element,
        weaponType: c.weaponType,
        description: c.description,
      }));
    case 'weapon':
      return WEAPONS.map((w: any) => ({
        id: w.id,
        name: w.name,
        icon: w.icon,
        rank: w.rank,
        weaponType: w.weaponType,
        description: w.description,
      }));
    case 'reliquary':
      return ARTIFACTS.map((a: any) => ({
        id: a.id,
        name: a.name,
        icon: a.icon,
        rank: a.rank,
        description: a.twoPieceBonus,
      }));
    case 'book':
      return BOOKS.map((b: any) => ({
        id: b.id,
        name: b.name,
        icon: b.icon,
        description: b.description,
      }));
    case 'npc':
      return NPCS;
    case 'quest':
      return EVENT_QUESTS;
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

export function formatRegionName(region?: string, name?: string): string {
  if (!region) return 'Teyvat';
  const clean = region.trim().toLowerCase();
  if (clean.includes('snezhnaya') || clean === 'snezhnaya_star') return 'Snezhnaya';
  if (clean.includes('mondstadt')) return 'Mondstadt';
  if (clean.includes('liyue')) return 'Liyue';
  if (clean.includes('inazuma')) return 'Inazuma';
  if (clean.includes('sumeru')) return 'Sumeru';
  if (clean.includes('fontaine')) return 'Fontaine';
  if (clean.includes('natlan')) return 'Natlan';
  if (clean.includes('nodkrai') || clean.includes('nod-krai')) return 'Nod-Krai';
  if (clean.includes('khaenri') || clean.includes('omni_scourge') || clean.includes('mainactor') || clean.includes('ranger') || clean.includes('outlander')) return 'Outlander';
  if (name && (name.includes('Traveler') || name === 'Aether' || name === 'Lumine' || name === 'Aloy')) return 'Outlander';
  // Capitalize nicely
  return region.charAt(0).toUpperCase() + region.slice(1).replace(/_/g, ' ');
}
