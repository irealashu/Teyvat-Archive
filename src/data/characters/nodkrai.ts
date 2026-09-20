import { Character } from '../../types';

export const NOD_KRAI_CHARACTERS: Character[] = [
  {
    id: 'aino',
    name: 'Aino',
    title: 'Warden of the Cold Verge',
    element: 'Hydro',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Nod Krai',
    affiliation: 'Nod Krai Frontier Wardens',
    birthday: 'September 10',
    constellationName: 'Flumen Glaciale',
    description: 'A steadfast frontier warden from the permafrost borders of Nod Krai. Wields a colossal claymore forged from glacial steel to maintain order along northern passes.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a3/Aino_Icon.png',
    stats: {
      hpBase: 11200,
      atkBase: 225,
      defBase: 690,
      ascensionStat: 'Hydro DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Frostvein Fencing",
        type: "Normal Attack",
        description: "Performs up to 4 rapid fencer strikes with icy grace.",
      },
      {
        name: "Glacier Piercer",
        type: "Elemental Skill",
        description: "Lungs forward with a piercing thrust that leaves a glacial spike dealing AoE Cryo DMG.",
      },
      {
        name: "Permafrost Dominion",
        type: "Elemental Burst",
        description: "Summons a sub-zero blizzard dome dealing continuous Cryo DMG and granting allies Cryo Infusion.",
      },
      {
        name: "Boreal Aegis",
        type: "1st Ascension Passive",
        description: "When HP is above 70%, Cryo DMG Bonus is increased by 20%.",
      },
      {
        name: "Winter's Edge",
        type: "4th Ascension Passive",
        description: "Hits against Frozen enemies ignore 15% DEF.",
      },
      {
        name: "Tundra Scout",
        type: "Utility Passive",
        description: "Decreases sprinting Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Glacial Threshold', effect: 'Increases the absorption capacity of Frigid Torrent barrier by 25%.' },
      { level: 2, name: 'Boreal Current', effect: 'Opponents hit by Torrent Slam have their Hydro RES decreased by 15% for 8s.' },
      { level: 3, name: 'Warden\'s Resolute Vow', effect: 'Increases the Level of Verge Torrent Slam by 3.' },
      { level: 4, name: 'Northern Torrent Surge', effect: 'When barrier shatters or expires, unleashes a burst of Hydro DMG equal to 120% of ATK.' },
      { level: 5, name: 'Unyielding Permafrost', effect: 'Increases the Level of Autonomous Frontier Deluge by 3.' },
      { level: 6, name: 'Frontier Dominion', effect: 'While inside the Deluge field, Aino\'s Normal and Charged Attacks gain 40% Hydro DMG bonus.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Wolf\'s Gravestone', 'The Catch', 'Favonius Greatsword', 'Sacrificial Greatsword'],
      bestArtifacts: ['Emblem of Severed Fate', 'Golden Troupe', 'Heart of Depth'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Hydro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%'],
    }
  },
  {
    id: 'columbina',
    name: 'Columbina',
    title: 'The Damselette',
    element: 'Hydro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Nod Krai',
    affiliation: 'Fatui Harbingers / Nod Krai Enclave',
    birthday: 'January 23',
    constellationName: 'Columba Lunaris',
    description: 'No. 3 of the Fatui Harbingers, known as the Damselette. Possessing an eerie and tranquil demeanor, her song channels tides of ancient abyssal and celestial currents.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/3/35/Columbina_Icon.png',
    stats: {
      hpBase: 15400,
      atkBase: 310,
      defBase: 710,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Seraphic Aria",
        type: "Normal Attack",
        description: "Channels celestial melodies that deal Anemo and Cryo DMG.",
      },
      {
        name: "Lament of the Broken Choir",
        type: "Elemental Skill",
        description: "Summons an angelic choir of phantoms that float around enemies, decreasing all elemental resistances by 20%.",
      },
      {
        name: "Celestial Dirge: Requiem of the Dove",
        type: "Elemental Burst",
        description: "Sings a haunting, ethereal lullaby that puts enemies into Stasis and deals devastating divine damage.",
      },
      {
        name: "Angelic Grace",
        type: "1st Ascension Passive",
        description: "When choir songs overlap, party gains 15% All-Elemental DMG Bonus.",
      },
      {
        name: "Song of the Seraphim",
        type: "4th Ascension Passive",
        description: "Increases Columbina's Energy Recharge by 30% when teammates trigger reactions.",
      },
      {
        name: "Moonlit Vigil",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Nod Krai on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Whisper of the Drowned Star', effect: 'Serene Resonator coordinated attacks deal 60% increased DMG and pierce 10% enemy Hydro RES.' },
      { level: 2, name: 'Nocturne of the Pale Maiden', effect: 'Increases all party members\' Elemental Mastery by 100 while inside the celestial tidepool.' },
      { level: 3, name: 'Hymn of the Abyss', effect: 'Increases the Level of Song of the Welkin Tide by 3.' },
      { level: 4, name: 'Requiem in Sapphire', effect: 'Burst cost decreased by 15 Energy; casting grants 20% Hydro DMG to the team for 12s.' },
      { level: 5, name: 'Cradle of Whispering Feathers', effect: 'Increases the Level of Dirge of the Everlasting Moon by 3.' },
      { level: 6, name: 'Echoes of the Broken Sky', effect: 'While Serene Resonator is active, Columbina\'s CRIT Rate increases by 15% and CRIT DMG by 70%.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Kagura\'s Verity', 'A Thousand Floating Dreams', 'Lost Prayer to the Sacred Winds', 'The Widsith'],
      bestArtifacts: ['Golden Troupe', 'Heart of Depth', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Elemental Mastery or ATK%',
        goblet: 'Hydro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT DMG', 'CRIT Rate', 'Elemental Mastery', 'Energy Recharge'],
    }
  },
  {
    id: 'flins',
    name: 'Flins',
    title: 'Thunder of the Iron Range',
    element: 'Electro',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Nod Krai',
    affiliation: 'Nod Krai Iron Vanguard',
    birthday: 'November 4',
    constellationName: 'Fulgur Saxum',
    description: 'A master tactician of the Iron Range in Nod Krai, renowned for executing high-voltage vanguard maneuvers in mountain skirmishes.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/a/af/Flins_Icon.png',
    stats: {
      hpBase: 13800,
      atkBase: 342,
      defBase: 780,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Permafrost Rapier",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive rapier strikes.",
      },
      {
        name: "Bitterwind Rush",
        type: "Elemental Skill",
        description: "Dashes with bitterwind fury, impaling opponents and leaving a trail of frozen needles.",
      },
      {
        name: "Glacial Shatter",
        type: "Elemental Burst",
        description: "Shatters the frozen ground into sharp permafrost shards, dealing heavy Cryo DMG to all surrounding foes.",
      },
      {
        name: "Sub-Zero Resilience",
        type: "1st Ascension Passive",
        description: "Increases shield strength by 20% in sub-zero environments.",
      },
      {
        name: "Northern Tenacity",
        type: "4th Ascension Passive",
        description: "Using Bitterwind Rush grants 10% ATK for 10s.",
      },
      {
        name: "Frontier Cartographer",
        type: "Utility Passive",
        description: "Gains 25% more rewards on 20h Nod Krai Expeditions.",
      },
    ],
    constellations: [
      { level: 1, name: 'Sparking Shunt', effect: 'Conduit lightning bounces to 2 additional targets and generates 1 particle.' },
      { level: 2, name: 'High-Voltage Fracture', effect: 'Decreases affected opponents\' Electro RES by 20% for 10s.' },
      { level: 3, name: 'Vanguard\'s Voltage', effect: 'Increases the Level of Stormlance Overcharge by 3.' },
      { level: 4, name: 'Magnetic Retention', effect: 'Active character inside the storm field gains 15% Normal and Charged Attack SPD.' },
      { level: 5, name: 'Storm King\'s Decree', effect: 'Increases the Level of Cataclysmic Discharge by 3.' },
      { level: 6, name: 'Superconductor Apex', effect: 'After casting Burst, Flins gains 60% Electro CRIT DMG for 12s.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Staff of the Scarlet Sands', 'Primordial Jade Winged-Spear', 'Deathmatch', 'The Catch'],
      bestArtifacts: ['Thundering Fury', 'Gilded Dreams', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery'],
    }
  },
  {
    id: 'illuga',
    name: 'Illuga',
    title: 'Quarry Stone Warden',
    element: 'Geo',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Nod Krai',
    affiliation: 'Nod Krai Stonecraft League',
    birthday: 'March 18',
    constellationName: 'Saxum Murus',
    description: 'A disciplined engineer and stonemason from the northern quarry leagues of Nod Krai, expert in subterranean fortifications and Geo resonance.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/9/96/Illuga_Icon.png',
    stats: {
      hpBase: 10800,
      atkBase: 210,
      defBase: 810,
      ascensionStat: 'DEF%',
      ascensionStatValue: '30.0%',
    },
    skills: [
      {
        name: "Aurora Pike",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive polearm strikes.",
      },
      {
        name: "Shimmering Frostwave",
        type: "Elemental Skill",
        description: "Sweeps an aurora-infused pike, releasing waves of shimmering frost that slow enemy attack speeds.",
      },
      {
        name: "Polar Veil",
        type: "Elemental Burst",
        description: "Unfurls a shimmering curtain of northern lights, protecting party members with high-absorption shields.",
      },
      {
        name: "Frostwoven Harmony",
        type: "1st Ascension Passive",
        description: "Polar Veil grants active character 15% Cryo DMG and 10% Movement SPD.",
      },
      {
        name: "Glacial Radiance",
        type: "4th Ascension Passive",
        description: "Hits against enemies in Polar Veil recover 2 Energy for Illuga.",
      },
      {
        name: "Starry Northern Sky",
        type: "Utility Passive",
        description: "Decreases swimming Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Bedrock Foundation', effect: 'Shield strength increased by 20% and absorbs all elemental types 150% effectively.' },
      { level: 2, name: 'Quarry Echo', effect: 'When shield is struck, unleashes Geo shockwave dealing 50% of Illuga\'s DEF.' },
      { level: 3, name: 'Mason\'s Blueprint', effect: 'Increases the Level of Rampart Bastion by 3.' },
      { level: 4, name: 'Frontier Fortification', effect: 'Party members protected by the shield gain 15% DEF.' },
      { level: 5, name: 'Lithic Bulwark', effect: 'Increases the Level of Tectonic Anchorage by 3.' },
      { level: 6, name: 'Immovable Cornerstone', effect: 'Burst grants all party members 20% Geo DMG bonus and 10% movement SPD for 12s.' }
    ],
    build: {
      role: 'Shielder',
      bestWeapons: ['Favonius Lance', 'Rightful Reward', 'Black Tassel', 'Footprint of the Rainbow'],
      bestArtifacts: ['Husk of Opulent Dreams', 'Noblesse Oblige', 'Tenacity of the Millelith'],
      mainStats: {
        sands: 'DEF%',
        goblet: 'DEF%',
        circlet: 'DEF% or Healing Bonus',
      },
      subStats: ['DEF%', 'Energy Recharge', 'HP%', 'CRIT Rate'],
    }
  },
  {
    id: 'ineffa',
    name: 'Ineffa',
    title: 'High Marshal of the Northern Marches',
    element: 'Electro',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Nod Krai',
    affiliation: 'Autonomous March High Council',
    birthday: 'October 29',
    constellationName: 'Imperatrix Fulguris',
    description: 'The commanding high marshal of Nod Krai\'s autonomous borders, renowned for iron discipline, lightning tactics, and unwavering vigilance against northern anomalies.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0b/Ineffa_Icon.png',
    stats: {
      hpBase: 14200,
      atkBase: 346,
      defBase: 760,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Whispering Ice",
        type: "Normal Attack",
        description: "Performs up to 4 ice shard attacks dealing Cryo DMG.",
      },
      {
        name: "Chill Needle",
        type: "Elemental Skill",
        description: "Hurls freezing needles that pin enemies to the spot, dealing continuous Cryo DMG.",
      },
      {
        name: "Abyssal Freeze",
        type: "Elemental Burst",
        description: "Unleashes an icy shockwave that plunges surrounding temperature to absolute zero.",
      },
      {
        name: "Boreal Silence",
        type: "1st Ascension Passive",
        description: "Increases CRIT Rate by 15% against enemies affected by Cryo.",
      },
      {
        name: "Cryo Mastery",
        type: "4th Ascension Passive",
        description: "Chill Needle CD reduced by 1.5s when triggering an elemental reaction.",
      },
      {
        name: "Frozen Whisper",
        type: "Utility Passive",
        description: "Displays the location of nearby resources on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Iron Discipline', effect: 'Skill cooldown reduced by 20%; dashes through opponents without stamina cost.' },
      { level: 2, name: 'Sovereign Command', effect: 'During Sovereign Overcharge, attacks ignore 30% of opponent DEF.' },
      { level: 3, name: 'Marshal\'s Standard', effect: 'Increases the Level of Marshal\'s Thunderclap by 3.' },
      { level: 4, name: 'Vanguard Rally', effect: 'Burst restores 15 Energy to all party members upon activation.' },
      { level: 5, name: 'Frontier Stormfall', effect: 'Increases the Level of Wrath of the Frontier Storm by 3.' },
      { level: 6, name: 'Apex of the Marches', effect: 'Increases Electro CRIT DMG by 60% and grants immunity to interruption while in Overcharge.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Engulfing Lightning', 'Staff of Homa', 'Primordial Jade Winged-Spear', 'The Catch'],
      bestArtifacts: ['Emblem of Severed Fate', 'Thundering Fury', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%'],
    }
  },
  {
    id: 'jahoda',
    name: 'Jahoda',
    title: 'Frontier Wind Ranger',
    element: 'Anemo',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Nod Krai',
    affiliation: 'Nod Krai Wildland Rangers',
    birthday: 'June 27',
    constellationName: 'Sagitta Zephyrus',
    description: 'A keen-eyed frontier scout from Nod Krai\'s vast pine barrens, skilled in tracking game, spotting blizzards, and guiding travelers through howling passes.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/bf/Jahoda_Icon.png',
    stats: {
      hpBase: 9900,
      atkBase: 215,
      defBase: 640,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '96',
    },
    skills: [
      {
        name: "Northern Sabre",
        type: "Normal Attack",
        description: "Performs up to 4 heavy sabre strikes.",
      },
      {
        name: "Sleet Barrage",
        type: "Elemental Skill",
        description: "Strikes the ground, releasing a barrage of sleet and hailstones that stagger enemies.",
      },
      {
        name: "Avalanche Roar",
        type: "Elemental Burst",
        description: "Summons an immense avalanche, crushing all foes in its path with overwhelming force.",
      },
      {
        name: "Frostbound Fury",
        type: "1st Ascension Passive",
        description: "Avalanche Roar deals 25% increased DMG to Frozen opponents.",
      },
      {
        name: "Glacial Persistence",
        type: "4th Ascension Passive",
        description: "When HP falls below 50%, grants 20% DEF for 15s.",
      },
      {
        name: "Winter Forager",
        type: "Utility Passive",
        description: "Gains 25% more rewards on 20h Expeditions.",
      },
    ],
    constellations: [
      { level: 1, name: 'Boreal Snare', effect: 'Gale Trapper Trap gains 1 additional charge.' },
      { level: 2, name: 'Vortex Infusion', effect: 'Triggering Swirl grants all party members 60 Elemental Mastery for 10s.' },
      { level: 3, name: 'Windrunner\'s Sights', effect: 'Increases the Level of Gale Trapper Trap by 3.' },
      { level: 4, name: 'Gale Convergence', effect: 'Opponents caught in Tempest suffer 20% Anemo RES reduction for 6s.' },
      { level: 5, name: 'Howling North', effect: 'Increases the Level of Northern Howling Tempest by 3.' },
      { level: 6, name: 'Echo of the Pine Barrens', effect: 'When Swirl occurs inside the Tempest, Jahoda generates 3 Energy for the party.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Elegy for the End', 'Stringless', 'Favonius Warbow', 'Sacrificial Bow'],
      bestArtifacts: ['Viridescent Venerer', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Elemental Mastery or Energy Recharge',
        goblet: 'Elemental Mastery',
        circlet: 'Elemental Mastery',
      },
      subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'CRIT Rate'],
    }
  },
  {
    id: 'lauma',
    name: 'Lauma',
    title: 'Botanist of the Permafrost',
    element: 'Dendro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Nod Krai',
    affiliation: 'Nod Krai Herbalist Conservatory',
    birthday: 'April 14',
    constellationName: 'Planta Glaciem',
    description: 'A revered botanist and apothecary studying arctic flora that thrive underneath the deep glaciers of Nod Krai. Commands verdant healing and blooms.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/2/27/Lauma_Icon.png',
    stats: {
      hpBase: 14800,
      atkBase: 245,
      defBase: 710,
      ascensionStat: 'Healing Bonus',
      ascensionStatValue: '22.1%',
    },
    skills: [
      {
        name: "Blizzard Staff",
        type: "Normal Attack",
        description: "Casts crystalline frost orbs dealing Cryo DMG.",
      },
      {
        name: "Winter Gale",
        type: "Elemental Skill",
        description: "Conjures a protective winter gale that pushes back approaching enemies and shields the team.",
      },
      {
        name: "Absolute Zero",
        type: "Elemental Burst",
        description: "Channels the primordial freeze of the northern peaks, freezing all water and moisture in a huge radius.",
      },
      {
        name: "Frost Barrier",
        type: "1st Ascension Passive",
        description: "Absolute Zero shields active character for 25% of Lauma's Max HP.",
      },
      {
        name: "Frostborn Wisdom",
        type: "4th Ascension Passive",
        description: "When crafting Cryo potions, 25% chance to refund materials.",
      },
      {
        name: "Hearthkeeper",
        type: "Utility Passive",
        description: "When cooking restorative dishes, 12% chance of double product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Deep Root Nurture', effect: 'Increases Frostflora healing interval frequency by 30% and adds 15% Max HP scaling.' },
      { level: 2, name: 'Glacial Bloom', effect: 'Bloom and Hyperbloom cores created inside Everspring Oasis deal 25% increased damage.' },
      { level: 3, name: 'Botanist\'s Compendium', effect: 'Increases the Level of Arctic Blossom Ward by 3.' },
      { level: 4, name: 'Permafrost Synthesis', effect: 'Active characters healed by Lauma gain 80 Elemental Mastery for 8s.' },
      { level: 5, name: 'Verdant Sanctuary', effect: 'Increases the Level of Everspring Oasis by 3.' },
      { level: 6, name: 'Flora of the Eternal Dawn', effect: 'When casting Burst, all party members gain 25% Max HP and 20% all-elemental RES for 15s.' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Everlasting Moonglow', 'Prototype Amber', 'Thrilling Tales of Dragon Slayers', 'Sacrificial Fragments'],
      bestArtifacts: ['Deepwood Memories', 'Ocean-Hued Clam', 'Maiden Beloved'],
      mainStats: {
        sands: 'HP% or Energy Recharge',
        goblet: 'HP%',
        circlet: 'Healing Bonus or HP%',
      },
      subStats: ['HP%', 'Energy Recharge', 'Elemental Mastery', 'DEF%'],
    }
  },
  {
    id: 'linnea',
    name: 'Linnea',
    title: 'Bastion Marksman',
    element: 'Geo',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Nod Krai',
    affiliation: 'Nod Krai Citadel Guard',
    birthday: 'August 19',
    constellationName: 'Arcus Territorium',
    description: 'An elite citadel marksman stationed atop the towering stone battlements of Novy Krai Citadel. Her crystallized arrows shatter enemy shields from extreme range.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a9/Linnea_Icon.png',
    stats: {
      hpBase: 12900,
      atkBase: 350,
      defBase: 650,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Glacial Bow",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive shots with a bow.",
      },
      {
        name: "Hoarfrost Volley",
        type: "Elemental Skill",
        description: "Fires a fan of frozen arrows that pierce enemies and frost them to the core.",
      },
      {
        name: "Blizzard Cascade",
        type: "Elemental Burst",
        description: "Shoots an arrow skyward to call down a relentless cascade of icicles over a designated area.",
      },
      {
        name: "Piercing Frost",
        type: "1st Ascension Passive",
        description: "Charged Shots pierce through up to 2 enemies.",
      },
      {
        name: "Snowfield Stalker",
        type: "4th Ascension Passive",
        description: "Increases movement speed by 10% when aiming with bow.",
      },
      {
        name: "Tundra Forager",
        type: "Utility Passive",
        description: "Displays the location of nearby resources on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Armor-Piercing Tipped', effect: 'Aimed shots and skill arrows pierce 15% opponent Geo RES.' },
      { level: 2, name: 'Crystalline Caliber', effect: 'Picking up a Crystallize shard increases Linnea\'s CRIT DMG by 30% for 10s.' },
      { level: 3, name: 'Marksman\'s Focus', effect: 'Increases the Level of Bastion Sniping Stance by 3.' },
      { level: 4, name: 'Garrison Support', effect: 'Burst increases nearby party members\' ATK by 20% for 12s.' },
      { level: 5, name: 'Tectonic Ballista', effect: 'Increases the Level of Fortress Railcannon Arrow by 3.' },
      { level: 6, name: 'Apex of the High Tower', effect: 'Skill arrows fire double projectiles and ignore 25% of opponent DEF.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['The First Great Magic', 'Thundering Pulse', 'Skyward Harp', 'Rust'],
      bestArtifacts: ['Husk of Opulent Dreams', 'Nighttime Whispers in the Echoing Woods', 'Shimenawa\'s Reminiscence'],
      mainStats: {
        sands: 'ATK% or DEF%',
        goblet: 'Geo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'DEF%'],
    }
  },
  {
    id: 'nefer',
    name: 'Nefer',
    title: 'Seer of the Ancient Frost',
    element: 'Dendro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Nod Krai',
    affiliation: 'Nod Krai Ancient Charter Seers',
    birthday: 'December 21',
    constellationName: 'Oraculum Antiquum',
    description: 'An enigmatic mystic who reads prophecies inscribed in ancient sub-glacial petroglyphs across Nod Krai, weaving potent Dendro spells of life and decay.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Nefer_Icon.png',
    stats: {
      hpBase: 13900,
      atkBase: 315,
      defBase: 680,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '115',
    },
    skills: [
      {
        name: "Frostbite Claws",
        type: "Normal Attack",
        description: "Performs up to 4 feral claw strikes dealing Physical and Cryo DMG.",
      },
      {
        name: "Rime Tempest",
        type: "Elemental Skill",
        description: "Leaps into a spinning rime tempest, clawing nearby enemies and decreasing their Cryo RES.",
      },
      {
        name: "Howling Gale of the North",
        type: "Elemental Burst",
        description: "Releases a terrifying lupine howl that blankets the field in fog, empowering all Cryo attacks.",
      },
      {
        name: "Arctic Predation",
        type: "1st Ascension Passive",
        description: "Increases Normal Attack speed by 15% for 6s after casting Rime Tempest.",
      },
      {
        name: "Frostbound Instinct",
        type: "4th Ascension Passive",
        description: "When hitting Frozen enemies, grants 20% CRIT DMG for 8s.",
      },
      {
        name: "Frozen Frontier Guide",
        type: "Utility Passive",
        description: "Decreases climbing Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Sigil of Foreknowledge', effect: 'Skill binding duration extended by 3s and reduces enemy Dendro RES by 15%.' },
      { level: 2, name: 'Verdant Divination', effect: 'Quicken and Spread reactions triggered by party members grant 15% Energy recharge to Nefer.' },
      { level: 3, name: 'Charter Inscription', effect: 'Increases the Level of Charter of the Living Vine by 3.' },
      { level: 4, name: 'Astral Foliage', effect: 'Burst increases party member Dendro DMG by 20% for 12s.' },
      { level: 5, name: 'Prophet\'s Shroud', effect: 'Increases the Level of Prophetic Eclipse by 3.' },
      { level: 6, name: 'Ancient Ley Line Weaver', effect: 'While Sigil is active, Nefer gains 80% Dendro CRIT DMG and can trigger additional Spread blasts.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['A Thousand Floating Dreams', 'Kagura\'s Verity', 'The Widsith', 'Sacrificial Fragments'],
      bestArtifacts: ['Deepwood Memories', 'Gilded Dreams'],
      mainStats: {
        sands: 'Elemental Mastery',
        goblet: 'Dendro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['Elemental Mastery', 'CRIT Rate', 'CRIT DMG', 'Energy Recharge'],
    }
  }
];
