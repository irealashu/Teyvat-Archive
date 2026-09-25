export type ElementType = 'Pyro' | 'Hydro' | 'Anemo' | 'Electro' | 'Dendro' | 'Cryo' | 'Geo' | 'Adaptive' | 'Multi' | 'None';

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

export interface BookVolume {
  id: string;
  volume: number;
  title: string;
  story: string;
}

export interface Book {
  id: string;
  name: string;
  iconUrl: string;
  rarity: Rarity;
  description: string;
  volumes?: BookVolume[];
}

export interface NPCReward {
  name: string;
  count: string;
  rarity: number;
  iconUrl?: string;
}

export interface NPCEntry {
  id: number;
  name: string;
  region: string;
  rewards: NPCReward[];
  locationText: string;
  dialoguePrompt: string;
  dialogueResponse: string;
  locationImages?: string[];
}

export interface EventItem {
  eventName: string;
  questsCount: number;
  quests: string[];
}

export interface VersionEventQuestGroup {
  id: number;
  version: string;
  majorTag: string;
  eventsCount: number;
  totalQuestsCount: number;
  events: EventItem[];
}

export type ActiveTab = 'avatar' | 'weapon' | 'reliquary' | 'book' | 'npc' | 'quest' | 'archon';

export interface PlayerShowcaseProfile {
  uid: string;
  nickname: string;
  level: number;
  worldLevel: number;
  signature: string;
  achievementCount: number;
  abyssFloor: string;
  avatarIconUrl: string;
  nameCardUrl: string;
  serverRegion: string;
}

export interface ShowcaseArtifact {
  id: string;
  name: string;
  iconUrl: string;
  rarity: number;
  slot: 'Flower' | 'Plume' | 'Sands' | 'Goblet' | 'Circlet';
  setName: string;
  mainStat: { name: string; value: string };
  subStats: Array<{ name: string; value: string }>;
}

export interface ShowcaseWeapon {
  name: string;
  iconUrl: string;
  rarity: number;
  level: number;
  refinement: number;
  baseAtk: number;
  subStatName: string;
  subStatValue: string;
}

export interface ShowcaseCharacter {
  id: string;
  name: string;
  element: ElementType;
  level: number;
  friendship: number;
  constellation: number;
  iconUrl: string;
  splashUrl?: string;
  weapon: ShowcaseWeapon;
  artifacts: ShowcaseArtifact[];
  activeSetBonuses: Array<{ name: string; pieces: number }>;
  stats: {
    maxHp: number;
    baseHp?: number;
    bonusHp?: number;
    atk: number;
    baseAtk?: number;
    bonusAtk?: number;
    def: number;
    baseDef?: number;
    bonusDef?: number;
    elementalMastery: number;
    critRate: number;
    critDmg: number;
    energyRecharge: number;
    dmgBonusType: string;
    dmgBonusValue: number;
  };
  talents: Array<{
    name: string;
    type: string;
    level: number;
    boosted?: boolean;
    iconUrl?: string;
  }>;
}
