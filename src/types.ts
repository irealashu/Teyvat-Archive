export type ElementType = 'Pyro' | 'Hydro' | 'Anemo' | 'Electro' | 'Dendro' | 'Cryo' | 'Geo' | 'Adaptive' | 'None';

export type WeaponCategory = 'Sword' | 'Claymore' | 'Polearm' | 'Bow' | 'Catalyst';

export type Rarity = 1 | 2 | 3 | 4 | 5;

export type RegionName = 
  | 'Mondstadt' 
  | 'Liyue' 
  | 'Inazuma' 
  | 'Sumeru' 
  | 'Fontaine' 
  | 'Natlan' 
  | 'Nod Krai' 
  | 'Snezhnaya'
  | string;

export const JOURNEY_REGION_ORDER = [
  'Mondstadt',
  'Liyue',
  'Inazuma',
  'Sumeru',
  'Fontaine',
  'Natlan',
  'Nod Krai',
  'Snezhnaya',
] as const;

export type ThemeMode = 'whitenight' | 'evernight';

export interface CharacterSkill {
  name: string;
  type:
    | 'Normal Attack'
    | 'Elemental Skill'
    | 'Elemental Burst'
    | 'Alternate Sprint'
    | '1st Ascension Passive'
    | '4th Ascension Passive'
    | 'Utility Passive'
    | 'Nightrealm\'s Gift'
    | 'Passive';
  description: string;
}

export interface CharacterConstellation {
  level: number;
  name: string;
  effect: string;
}

export interface CharacterBuildRecommendation {
  role: 'Main DPS' | 'Sub-DPS' | 'Support' | 'Healer' | 'Shield' | 'Shielder' | 'Buffer';
  bestWeapons: string[];
  bestArtifacts: string[];
  mainStats: {
    sands: string;
    goblet: string;
    circlet: string;
  };
  subStats: string[];
}

export interface Character {
  id: string;
  name: string;
  title: string;
  element: ElementType;
  weaponType: WeaponCategory;
  rarity: 4 | 5;
  region: RegionName;
  affiliation: string;
  birthday?: string;
  constellationName: string;
  description: string;
  iconUrl: string;
  splashUrl?: string;
  stats: {
    hpBase: number;
    atkBase: number;
    defBase: number;
    ascensionStat: string;
    ascensionStatValue: string;
  };
  skills: CharacterSkill[];
  constellations: CharacterConstellation[];
  build: CharacterBuildRecommendation;
}

export interface Weapon {
  id: string;
  name: string;
  type: WeaponCategory;
  rarity: Rarity;
  baseAtk: number;
  subStatType: string;
  subStatValue: string;
  passiveName: string;
  passiveDescription: string;
  refinementBonus?: string;
  iconUrl: string;
  region?: RegionName;
  source: string;
  description: string;
}

export interface ArtifactPiece {
  name: string;
  iconUrl?: string;
  description?: string;
}

export interface ArtifactSet {
  id: string;
  name: string;
  maxRarity: 4 | 5;
  iconUrl: string;
  twoPieceBonus: string;
  fourPieceBonus: string;
  pieces: {
    flower: ArtifactPiece;
    feather: ArtifactPiece;
    sands: ArtifactPiece;
    goblet: ArtifactPiece;
    circlet: ArtifactPiece;
  };
  domainOrSource: string;
  recommendedCharacters: string[];
}

export interface RegionInfo {
  id: string;
  name: RegionName;
  element: ElementType;
  ideal: string;
  archon: string;
  mainCity: string;
  factions?: string[];
  specialties?: string[];
  description: string;
  bannerUrl: string;
  ostTheme?: string;
  emblemColor: string;
  isAutonomous?: boolean;
  chapterNumber?: string;
  isCustom?: boolean;
}

export type ActiveTab = 'characters' | 'weapons' | 'artifacts' | 'regions' | 'comparison';
