import { Character } from '../../types';

export const MONDSTADT_CHARACTERS: Character[] = [
  {
    id: 'venti',
    name: 'Venti',
    title: 'Windborne Bard',
    element: 'Anemo',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Mondstadt / Church of Favonius',
    birthday: 'June 16',
    constellationName: 'Carmen Dei',
    description: 'One of the many bards of Mondstadt, who freely wanders the city\'s streets and alleys. In truth, Barbatos, the Anemo Archon of Freedom.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Venti.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Venti.png',
    stats: {
      hpBase: 10531,
      atkBase: 263,
      defBase: 669,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '32.0%',
    },
    skills: [
      {
        name: "Favonius Marksmanship",
        type: "Normal Attack",
        description: "Performs up to 6 consecutive shots with a bow.",
      },
      {
        name: "Skyward Sonnet",
        type: "Elemental Skill",
        description: "Summons a Wind Domain at the target, dealing AoE Anemo DMG and launching opponents into the air. Holding summons a larger wind domain with an upcurrent.",
      },
      {
        name: "Wind's Grand Ode",
        type: "Elemental Burst",
        description: "Fires an arrow made of countless coalesced breezes, creating a huge Stormeye that sucks in objects and opponents while dealing continuous Anemo DMG and absorbing elements.",
      },
      {
        name: "Embrace of Winds",
        type: "1st Ascension Passive",
        description: "Holding Skyward Sonnet creates an upcurrent that lasts for 20s.",
      },
      {
        name: "Stormeye",
        type: "4th Ascension Passive",
        description: "Regenerates 15 Energy for Venti after the effects of Wind's Grand Ode end; if an Elemental Absorption occurred, restores 15 Energy to all characters of that element.",
      },
      {
        name: "Windrider",
        type: "Utility Passive",
        description: "Decreases gliding Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Splitting Gale', effect: 'Fires 2 additional split arrows per Aimed Shot, each dealing 33% of the original arrow\'s DMG.' },
      { level: 2, name: 'Breeze of Reminiscence', effect: 'Skyward Sonnet decreases opponents\' Anemo and Physical RES by 12% for 10s (increased to 24% while airborne).' },
      { level: 3, name: 'Ode to Thousand Winds', effect: 'Increases the Level of Wind\'s Grand Ode by 3.' },
      { level: 4, name: 'Hurricane of Freedom', effect: 'When Venti picks up an Elemental Orb or Particle, he receives a 25% Anemo DMG Bonus for 10s.' },
      { level: 5, name: 'Concerto dal Cielo', effect: 'Increases the Level of Skyward Sonnet by 3.' },
      { level: 6, name: 'Storm Defiance', effect: 'Targets who take DMG from Wind\'s Grand Ode have their Anemo RES decreased by 20%, as well as the absorbed element.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Elegy for the End', 'The Stringless', 'Favonius Warbow', 'Windblume Ode'],
      bestArtifacts: ['Viridescent Venerer'],
      mainStats: {
        sands: 'Elemental Mastery or Energy Recharge',
        goblet: 'Elemental Mastery or Anemo DMG Bonus',
        circlet: 'Elemental Mastery or CRIT Rate'
      },
      subStats: ['Elemental Mastery', 'Energy Recharge', 'CRIT Rate', 'ATK%']
    }
  },
  {
    id: 'diluc',
    name: 'Diluc',
    title: 'The Darknight Hero',
    element: 'Pyro',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Dawn Winery',
    birthday: 'April 30',
    constellationName: 'Noctua',
    description: 'The tycoon of an extensive winery empire in Mondstadt, unmatched in every possible way. Secretly protects the city from the shadows as the Darknight Hero.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Diluc.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Diluc.png',
    stats: {
      hpBase: 12981,
      atkBase: 335,
      defBase: 784,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Tempered Sword",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive claymore strikes.",
      },
      {
        name: "Searing Onslaught",
        type: "Elemental Skill",
        description: "Performs a forward slash that deals Pyro DMG; can be used 3 times consecutively with dynamic combo branching.",
      },
      {
        name: "Dawn",
        type: "Elemental Burst",
        description: "Releases intense flames that summon a soaring Phoenix flying forward, dealing massive Pyro DMG, knocking enemies back, and granting Diluc Pyro Infusion.",
      },
      {
        name: "Relentless",
        type: "1st Ascension Passive",
        description: "Diluc's Charged Attack Stamina Cost is decreased by 50%, and its maximum duration is increased by 3s.",
      },
      {
        name: "Blessing of Phoenix",
        type: "4th Ascension Passive",
        description: "The Pyro Infusion provided by Dawn lasts for 4s longer; additionally, Diluc gains 20% Pyro DMG Bonus during the infusion.",
      },
      {
        name: "Tradition of the Dawn Knight",
        type: "Utility Passive",
        description: "Refunds 15% of the ores used when crafting Claymore-type weapons.",
      },
    ],
    constellations: [
      { level: 1, name: 'Conviction', effect: 'Diluc deals 15% more DMG to opponents whose HP is above 50%.' },
      { level: 2, name: 'Searing Ember', effect: 'When Diluc takes DMG, his ATK increases by 10% and his ATK SPD increases by 5% for 10s (up to 3 stacks).' },
      { level: 3, name: 'Fire and Steel', effect: 'Increases the Level of Searing Onslaught by 3.' },
      { level: 4, name: 'Flowing Flame', effect: 'Casting Searing Onslaught in rhythm increases the next cast\'s DMG by 40%.' },
      { level: 5, name: 'Phoenix, Harbinger of Dawn', effect: 'Increases the Level of Dawn by 3.' },
      { level: 6, name: 'Flaming Sword, Nemesis of Dark', effect: 'After casting Searing Onslaught, the next 2 Normal Attacks within 6s have their DMG and ATK SPD increased by 30%.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Wolf\'s Gravestone', 'Redhorn Stonethresher', 'Beacon of the Reed Sea', 'Serpent Spine'],
      bestArtifacts: ['Crimson Witch of Flames', 'Marechaussee Hunter'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'ATK%', 'Energy Recharge']
    }
  },
  {
    id: 'jean',
    name: 'Jean',
    title: 'Dandelion Knight',
    element: 'Anemo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'March 14',
    constellationName: 'Leo Minor',
    description: 'The righteous and rigorous Acting Grand Master of the Knights of Favonius, constantly protecting Mondstadt with the wind of Barbatos.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Jean.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Jean.png',
    stats: {
      hpBase: 14695,
      atkBase: 239,
      defBase: 769,
      ascensionStat: 'Healing Bonus',
      ascensionStatValue: '22.1%',
    },
    skills: [
      {
        name: "Favonius Bladework",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive sword strikes.",
      },
      {
        name: "Gale Blade",
        type: "Elemental Skill",
        description: "Focusing the power of wind, releases a miniature storm launching enemies; holding pulls nearby enemies and objects towards Jean before launching them.",
      },
      {
        name: "Dandelion Breeze",
        type: "Elemental Burst",
        description: "Creates a swirling Dandelion Field, instantly regenerating large amounts of HP for all party members based on Jean's ATK and continuously dealing Anemo DMG and cleansing.",
      },
      {
        name: "Wind Companion",
        type: "1st Ascension Passive",
        description: "Hits by Normal Attacks have a 50% chance to regenerate HP equal to 15% of Jean's ATK for all party members.",
      },
      {
        name: "Let the Wind Lead",
        type: "4th Ascension Passive",
        description: "Using Dandelion Breeze will regenerate 20% of its Energy.",
      },
      {
        name: "Guiding Breeze",
        type: "Utility Passive",
        description: "When a Perfect Cooking is achieved on a dish with restorative effects, Jean has a 12% chance to obtain double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Spiraling Tempest', effect: 'Holding Gale Blade for more than 1s increases pulling speed and DMG by 40%.' },
      { level: 2, name: 'People\'s Aegis', effect: 'When Jean obtains an Elemental Orb/Particle, all party members gain 15% Movement and ATK SPD for 15s.' },
      { level: 3, name: 'When the West Wind Arises', effect: 'Increases the Level of Dandelion Breeze by 3.' },
      { level: 4, name: 'Kingdom of Dandelion', effect: 'Within the Dandelion Field, opponents have their Anemo RES decreased by 40%.' },
      { level: 5, name: 'Outbursting Gust', effect: 'Increases the Level of Gale Blade by 3.' },
      { level: 6, name: 'Lion\'s Fang, Fair Protector of Mondstadt', effect: 'Incoming DMG is decreased by 35% within the Dandelion Field.' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Freedom-Sworn', 'Favonius Sword', 'Amenoma Kageuchi', 'Skyward Blade'],
      bestArtifacts: ['Viridescent Venerer', 'Noblesse Oblige'],
      mainStats: {
        sands: 'ATK% or Energy Recharge',
        goblet: 'ATK% or Anemo DMG Bonus',
        circlet: 'Healing Bonus or CRIT Rate'
      },
      subStats: ['Energy Recharge', 'ATK%', 'CRIT Rate', 'Flat ATK']
    }
  },
  {
    id: 'eula',
    name: 'Eula',
    title: 'Spindrift Knight',
    element: 'Cryo',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius (Reconnaissance Captain)',
    birthday: 'October 25',
    constellationName: 'Aphros Delos',
    description: 'The Spindrift Knight and Captain of the Knights of Favonius Reconnaissance Company. Born into the tyrannical Lawrence Clan, she carves her own path of honor.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Eula.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Eula.png',
    stats: {
      hpBase: 13226,
      atkBase: 342,
      defBase: 751,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Favonius Bladework - Edel",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive claymore strikes.",
      },
      {
        name: "Icetide Vortex",
        type: "Elemental Skill",
        description: "Slashes swiftly, dealing Cryo DMG and gaining Grimheart stacks; holding consumes Grimheart to shred enemy Physical and Cryo RES and fire Icewhirl Brands.",
      },
      {
        name: "Glacial Illumination",
        type: "Elemental Burst",
        description: "Brandishes her greatsword dealing AoE Cryo DMG and summons a Lightfall Sword that charges up as Eula attacks, exploding for colossal Physical DMG after 7s.",
      },
      {
        name: "Roiling Rime",
        type: "1st Ascension Passive",
        description: "If 2 stacks of Grimheart are consumed upon unleashing the Holding Mode of Icetide Vortex, a Shattered Lightfall Sword falls dealing 50% of the baseline Burst Physical DMG.",
      },
      {
        name: "Wellspring of War-Lust",
        type: "4th Ascension Passive",
        description: "When Glacial Illumination is cast, the CD of Icetide Vortex is reset and Eula gains 1 stack of Grimheart.",
      },
      {
        name: "Aristocratic Introspection",
        type: "Utility Passive",
        description: "When Eula crafts Character Talent Materials, she has a 10% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Tidal Illusion', effect: 'Consuming Grimheart stacks grants Eula a 30% Physical DMG Bonus for 6s (+6s per stack consumed).' },
      { level: 2, name: 'The Lady of Seafoam', effect: 'Decreases the CD of Icetide Vortex\'s Holding Mode to match the Tapping Mode (4s).' },
      { level: 3, name: 'Lawrence Pedigree', effect: 'Increases the Level of Glacial Illumination by 3.' },
      { level: 4, name: 'The Obstinacy of One\'s Slaves', effect: 'Lightfall Swords deal 25% increased DMG against opponents with less than 50% HP.' },
      { level: 5, name: 'Chivalric Quality', effect: 'Increases the Level of Icetide Vortex by 3.' },
      { level: 6, name: 'Noble Obligation', effect: 'Lightfall Swords created by Glacial Illumination start with 5 stacks of energy, and attacks have a 50% chance to grant an extra stack.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Song of Broken Pines', 'Wolf\'s Gravestone', 'The Unforged', 'Serpent Spine'],
      bestArtifacts: ['Pale Flame', 'Bloodstained Chivalry'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Physical DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge']
    }
  },
  {
    id: 'klee',
    name: 'Klee',
    title: 'Fleeing Sunlight',
    element: 'Pyro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'July 27',
    constellationName: 'Trifolium',
    description: 'An explosives expert and a regular in the Knights of Favonius\' confinement room. Daughter of the legendary adventurer Alice.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Klee.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Klee.png',
    stats: {
      hpBase: 10287,
      atkBase: 311,
      defBase: 615,
      ascensionStat: 'Pyro DMG Bonus',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Kaboom!",
        type: "Normal Attack",
        description: "Throws explosive sparks that bounce and explode dealing AoE Pyro DMG.",
      },
      {
        name: "Jumpy Dumpty",
        type: "Elemental Skill",
        description: "Hurls Jumpy Dumpty, who bounces 3 times dealing AoE Pyro DMG on each bounce before splitting into 8 proximity mines that detonate on contact.",
      },
      {
        name: "Sparks 'n' Splash",
        type: "Elemental Burst",
        description: "Summons Sparks 'n' Splash to continuously bombard nearby enemies, dealing heavy AoE Pyro DMG over 10s.",
      },
      {
        name: "Pounding Surprise",
        type: "1st Ascension Passive",
        description: "When Jumpy Dumpty or Normal Attacks deal DMG, Klee has a 50% chance to obtain an Explosive Spark: next Charged Attack costs no Stamina and deals 50% increased DMG.",
      },
      {
        name: "Sparkling Burst",
        type: "4th Ascension Passive",
        description: "When Klee's Charged Attack results in a CRIT Hit, all party members gain 2 Elemental Energy.",
      },
      {
        name: "All Of My Treasures!",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Mondstadt on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Chained Reactions', effect: 'Attacks and Skills have a chance to summon sparks that bombard opponents, dealing 120% of Sparks \'n\' Splash DMG.' },
      { level: 2, name: 'Explosive Frags', effect: 'Being hit by Jumpy Dumpty\'s mines decreases opponents\' DEF by 23% for 10s.' },
      { level: 3, name: 'Exquisite Compound', effect: 'Increases the Level of Jumpy Dumpty by 3.' },
      { level: 4, name: 'Sparkly Explosion', effect: 'If Klee leaves the field during the duration of Sparks \'n\' Splash, her departure triggers an explosion dealing 555% ATK as AoE Pyro DMG.' },
      { level: 5, name: 'Nova Burst', effect: 'Increases the Level of Sparks \'n\' Splash by 3.' },
      { level: 6, name: 'Blazing Delight', effect: 'While Sparks \'n\' Splash is active, Klee regenerates 3 Energy for party members every 3s and grants 10% Pyro DMG Bonus.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Lost Prayer to the Sacred Winds', 'Skyward Atlas', 'The Widsith', 'Dodoco Tales'],
      bestArtifacts: ['Crimson Witch of Flames', 'Marechaussee Hunter', 'Lavawalker'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery']
    }
  },
  {
    id: 'mona',
    name: 'Mona',
    title: 'Astral Reflection',
    element: 'Hydro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Hexenzirkel (Barbeloth disciple)',
    birthday: 'August 31',
    constellationName: 'Astrolabos',
    description: 'A mysterious young astrologer who proclaims herself to be "Astrologist Mona Megistus," who possesses abilities to divine the celestial bodies.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Mona.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Mona.png',
    stats: {
      hpBase: 10409,
      atkBase: 287,
      defBase: 653,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '32.0%',
    },
    skills: [
      {
        name: "Ripple of Fate",
        type: "Normal Attack",
        description: "Performs up to 4 water splashes that deal Hydro DMG.",
      },
      {
        name: "Mirror Reflection of Doom",
        type: "Elemental Skill",
        description: "Creates an illusory Phantom from water that continuously taunts enemies, dealing periodic Hydro DMG before detonating.",
      },
      {
        name: "Stellaris Phantasm",
        type: "Elemental Burst",
        description: "Traps enemies in an illusory pocket of water (Shadow of Fate), applying Omen which dramatically amplifies damage taken when popped.",
      },
      {
        name: "Illusory Torrent",
        type: "Alternate Sprint",
        description: "Mona cloaks herself within water's flow, consuming Stamina to move at high speed across land and water; reappearing applies Wet to nearby opponents.",
      },
      {
        name: "Come 'n' Get Me, Hag!",
        type: "1st Ascension Passive",
        description: "After she has used Illusory Torrent for 2s, if there are any opponents nearby, Mona will automatically create a Phantom.",
      },
      {
        name: "Waterborne Destiny",
        type: "4th Ascension Passive",
        description: "Increases Mona's Hydro DMG Bonus by a degree equivalent to 20% of her Energy Recharge rate.",
      },
      {
        name: "Principium of Astrology",
        type: "Utility Passive",
        description: "When Mona crafts Weapon Ascension Materials, she has a 25% chance to refund one count of one material used.",
      },
    ],
    constellations: [
      { level: 1, name: 'Prophecy of Submersion', effect: 'When an opponent affected by an Omen is hit, Electro-Charged, Vaporize, and Hydro Swirl reactions have increased effects.' },
      { level: 2, name: 'Lunar Chain', effect: 'When a Normal Attack hits, there is a 20% chance that it will be automatically followed by a Charged Attack.' },
      { level: 3, name: 'Restless Revolution', effect: 'Increases the Level of Stellaris Phantasm by 3.' },
      { level: 4, name: 'Prophecy of Oblivion', effect: 'When any party member attacks an opponent affected by an Omen, their CRIT Rate is increased by 15%.' },
      { level: 5, name: 'Mockery of Fortuna', effect: 'Increases the Level of Mirror Reflection of Doom by 3.' },
      { level: 6, name: 'Rhetorics of Calamitas', effect: 'Upon entering Illusionary Torrent, Mona gains a 60% DMG bonus to her next Charged Attack per second of movement (up to 180%).' }
    ],
    build: {
      role: 'Buffer',
      bestWeapons: ['Thrilling Tales of Dragon Slayers', 'Favonius Codex', 'The Widsith'],
      bestArtifacts: ['Noblesse Oblige', 'Emblem of Severed Fate'],
      mainStats: {
        sands: 'Energy Recharge',
        goblet: 'Hydro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'ATK%']
    }
  },
  {
    id: 'bennett',
    name: 'Bennett',
    title: 'Trial by Fire',
    element: 'Pyro',
    weaponType: 'Sword',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Adventurers\' Guild (Benny\'s Adventure Team)',
    birthday: 'February 29',
    constellationName: 'Rota Calamitas',
    description: 'A righteous and good-natured adventurer from Mondstadt who is notoriously unlucky, but possessed of an indomitable spirit.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Bennett.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Bennett.png',
    stats: {
      hpBase: 12397,
      atkBase: 191,
      defBase: 771,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '26.7%',
    },
    skills: [
      {
        name: "Strike of Fortune",
        type: "Normal Attack",
        description: "Performs up to 5 rapid strikes.",
      },
      {
        name: "Passion Overload",
        type: "Elemental Skill",
        description: "Concentrates the flames of passion into a sword; can be tapped for a strike or charged to Level 1 or Level 2 explosion.",
      },
      {
        name: "Fantastic Voyage",
        type: "Elemental Burst",
        description: "Leaps into the air and strikes the ground dealing Pyro DMG and creating an Inspiration Field that heals allies below 70% HP and grants ATK bonus based on Bennett's Base ATK.",
      },
      {
        name: "Rekindle",
        type: "1st Ascension Passive",
        description: "Decreases Passion Overload's CD by 20%.",
      },
      {
        name: "Fearnaught",
        type: "4th Ascension Passive",
        description: "Within the area created by Fantastic Voyage, Passion Overload's CD is decreased by 50%, and Bennett cannot be launched by Charge Level 2.",
      },
      {
        name: "It Should Be Safe...",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Mondstadt Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Grand Expectation', effect: 'Fantastic Voyage\'s ATK increase is no longer restricted by the HP threshold and gains an additional 20% of Bennett\'s Base ATK.' },
      { level: 2, name: 'Impasse Conqueror', effect: 'When Bennett\'s HP falls below 70%, his Energy Recharge is increased by 30%.' },
      { level: 3, name: 'Unstoppable Fervor', effect: 'Increases the Level of Passion Overload by 3.' },
      { level: 4, name: 'Unexpected Odyssey', effect: 'Using a Normal Attack when executing the second attack of Passion Overload allows an additional attack.' },
      { level: 5, name: 'True Explorer', effect: 'Increases the Level of Fantastic Voyage by 3.' },
      { level: 6, name: 'Fire Ventures with Me', effect: 'Sword, Claymore, or Polearm characters inside Fantastic Voyage gain a 15% Pyro DMG Bonus and their weapons are infused with Pyro.' }
    ],
    build: {
      role: 'Buffer',
      bestWeapons: ['Aquila Favonia', 'Mistsplitter Reforged', 'Sapwood Blade', 'Favonius Sword'],
      bestArtifacts: ['Noblesse Oblige', 'Instructor'],
      mainStats: {
        sands: 'Energy Recharge or HP%',
        goblet: 'HP%',
        circlet: 'Healing Bonus or HP%'
      },
      subStats: ['Energy Recharge', 'HP%', 'Flat HP', 'CRIT Rate']
    }
  },
  {
    id: 'fischl',
    name: 'Fischl',
    title: 'Prinzessin der Verurteilung',
    element: 'Electro',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Adventurers\' Guild',
    birthday: 'May 27',
    constellationName: 'Corvus',
    description: 'A mysterious girl who calls herself "Prinzessin der Verurteilung" and travels with a night raven sovereign named Oz.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Fischl.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Fischl.png',
    stats: {
      hpBase: 9189,
      atkBase: 244,
      defBase: 594,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Bolts of Downfall",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive bow shots.",
      },
      {
        name: "Nightrider",
        type: "Elemental Skill",
        description: "Summons Oz, the raven of night, dealing AoE Electro DMG upon summon and continuously firing Freikugel Electro bullets at nearby enemies.",
      },
      {
        name: "Midnight Phantasmagoria",
        type: "Elemental Burst",
        description: "Fischl takes the form of Oz, striking nearby enemies with lightning as she flies swiftly across the field, resetting Oz's field duration.",
      },
      {
        name: "Stellar Predator",
        type: "1st Ascension Passive",
        description: "When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down Thundering Retribution, dealing AoE Electro DMG equal to 152.7% of the arrow's DMG.",
      },
      {
        name: "Undone Be Thy Sinful Hex",
        type: "4th Ascension Passive",
        description: "If your current active character triggers an Electro-related Elemental Reaction when Oz is on the field, opponents will be struck with Thundering Retribution, dealing 80% of Fischl's ATK as Electro DMG.",
      },
      {
        name: "Mein Hausgarten",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Mondstadt Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Gaze of the Deep', effect: 'Even when Oz is not on field, he watches over Fischl, firing an eye orb dealing 22% ATK on normal attack.' },
      { level: 2, name: 'Devourer of All Sins', effect: 'Nightrider deals 200% additional ATK as AoE Electro DMG upon summoning, and its AoE is increased by 50%.' },
      { level: 3, name: 'Wings of Nightmare', effect: 'Increases the Level of Nightrider by 3.' },
      { level: 4, name: 'Her Pilgrimage of Bleak', effect: 'Midnight Phantasmagoria deals 222% ATK as AoE Electro DMG and recovers 20% HP to Fischl.' },
      { level: 5, name: 'Against the Fleeing Light', effect: 'Increases the Level of Midnight Phantasmagoria by 3.' },
      { level: 6, name: 'Evernight Raven', effect: 'Extends Oz\'s duration by 2s; Oz attacks in tandem with the active character\'s Normal Attacks dealing 30% ATK Electro DMG.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['The Stringless', 'Aqua Simulacra', 'Polar Star', 'Favonius Warbow'],
      bestArtifacts: ['Golden Troupe', 'Thundering Fury'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery']
    }
  },
  {
    id: 'albedo',
    name: 'Albedo',
    title: 'Kreideprinz',
    element: 'Geo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'September 13',
    constellationName: 'Princeps Cretaceus',
    description: 'The Chief Alchemist and Captain of the Investigation Team of the Knights of Favonius, known as the "Kreideprinz." Crafts Solar Isotoma flowers that trigger transient blossoming Geo DMG.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/3/30/Albedo_Icon.png',
    stats: {
      hpBase: 13226,
      atkBase: 251,
      defBase: 876,
      ascensionStat: 'Geo DMG Bonus',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Favonius Bladework - Weiss",
        type: "Normal Attack",
        description: "Performs up to 5 rapid sword strikes.",
      },
      {
        name: "Abiogenesis: Solar Isotoma",
        type: "Elemental Skill",
        description: "Creates a Solar Isotoma that deals AoE Geo DMG. When enemies within take damage, Transient Blossoms bloom dealing AoE Geo DMG scaling with Albedo's DEF.",
      },
      {
        name: "Rite of Progeniture: Tectonic Tide",
        type: "Elemental Burst",
        description: "Releases Geo crystals that surge forward dealing AoE Geo DMG; if Solar Isotoma is present, generates 7 Fatal Blossoms that burst violently.",
      },
      {
        name: "Calcite Might",
        type: "1st Ascension Passive",
        description: "Transient Blossoms generated by Abiogenesis: Solar Isotoma deal 25% more DMG to opponents whose HP is below 50%.",
      },
      {
        name: "Homuncular Nature",
        type: "4th Ascension Passive",
        description: "Using Rite of Progeniture: Tectonic Tide increases the Elemental Mastery of nearby party members by 125 for 10s.",
      },
      {
        name: "Flash of Genius",
        type: "Utility Passive",
        description: "When Albedo crafts Weapon Ascension Materials, he has a 10% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Flower of Eden', effect: 'Transient Blossoms generated by Solar Isotoma regenerate 1.2 Energy for Albedo.' },
      { level: 2, name: 'Opening of Phanerozoic', effect: 'Transient Blossoms grant Fatal Reckoning for 30s; Unleashing Burst consumes stacks to increase DMG by 30% of Albedo\'s DEF per stack.' },
      { level: 3, name: 'Grace of Helios', effect: 'Increases the Level of Abiogenesis: Solar Isotoma by 3.' },
      { level: 4, name: 'Descent of Divinity', effect: 'Solar Isotoma increases Plunging Attack DMG of active party members by 30%.' },
      { level: 5, name: 'Tide of Hadaen', effect: 'Increases the Level of Rite of Progeniture: Tectonic Tide by 3.' },
      { level: 6, name: 'Domain of Purification', effect: 'If party members in the Solar Isotoma field are protected by a shield created by Crystallize, DMG is increased by 17%.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Cinnabar Spindle', 'Chiori\'s Signature', 'Harbinger of Dawn', 'Primordial Jade Cutter'],
      bestArtifacts: ['Husk of Opulent Dreams', 'Golden Troupe'],
      mainStats: {
        sands: 'DEF%',
        goblet: 'Geo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['DEF%', 'CRIT Rate', 'CRIT DMG', 'Energy Recharge'],
    }
  },
  {
    id: 'amber',
    name: 'Amber',
    title: 'Outrider',
    element: 'Pyro',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'August 10',
    constellationName: 'Lepus',
    description: 'Always energetic and full of life, Amber is the best—and only—Outrider of the Knights of Favonius. Accompanied by Baron Bunny and a fiery glidewing.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/7/75/Amber_Icon.png',
    stats: {
      hpBase: 9461,
      atkBase: 223,
      defBase: 601,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Sharpshooter",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive bow shots.",
      },
      {
        name: "Explosive Puppet",
        type: "Elemental Skill",
        description: "Hurls Baron Bunny into combat, taunting nearby enemies before detonating violently for AoE Pyro DMG.",
      },
      {
        name: "Fiery Rain",
        type: "Elemental Burst",
        description: "Fires off a shower of flaming arrows, dealing continuous AoE Pyro DMG over a short duration.",
      },
      {
        name: "Everywhere Upon the Earth",
        type: "1st Ascension Passive",
        description: "Fiery Rain increases Amber's CRIT Rate by 10% and widens the AoE by 30%.",
      },
      {
        name: "Precise Shot",
        type: "4th Ascension Passive",
        description: "Aimed Shots that hit weak spots increase Amber's ATK by 15% for 10s.",
      },
      {
        name: "Gliding Champion",
        type: "Utility Passive",
        description: "Decreases gliding Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'One Arrow to Rule Them All', effect: 'Fires 2 arrows per Aimed Shot, with the second dealing 20% of the first arrow\'s DMG.' },
      { level: 2, name: 'Bunny Triggered', effect: 'Baron Bunny can be manually detonated by shooting its foot with a fully-charged Aimed Shot for 200% bonus DMG.' },
      { level: 3, name: 'It Burns!', effect: 'Increases the Level of Fiery Rain by 3.' },
      { level: 4, name: 'It\'s Not Just Any Doll...', effect: 'Decreases Explosive Puppet\'s CD by 20% and adds 1 additional charge.' },
      { level: 5, name: 'It\'s Baron Bunny!', effect: 'Increases the Level of Explosive Puppet by 3.' },
      { level: 6, name: 'Wildfire', effect: 'Fiery Rain increases all party members\' Movement SPD by 15% and Base ATK by 15% for 10s.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Elegy for the End', 'Favonius Warbow', 'The Stringless'],
      bestArtifacts: ['Noblesse Oblige', 'Instructor'],
      mainStats: {
        sands: 'Energy Recharge',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'Elemental Mastery', 'ATK%'],
    }
  },
  {
    id: 'barbara',
    name: 'Barbara',
    title: 'Shining Idol',
    element: 'Hydro',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Church of Favonius',
    birthday: 'July 5',
    constellationName: 'Crater',
    description: 'The deaconess of the Church of Favonius and a shining idol of Mondstadt. Her singing and melodic water loops heal wounds and wash away fatigue.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/6/6a/Barbara_Icon.png',
    stats: {
      hpBase: 9787,
      atkBase: 159,
      defBase: 669,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Whisper of Water",
        type: "Normal Attack",
        description: "Performs up to 4 water splash attacks dealing Hydro DMG.",
      },
      {
        name: "Let the Show Begin♪",
        type: "Elemental Skill",
        description: "Summons droplets resembling musical notes to form a Melody Loop, periodically healing the active character, applying Wet, and healing on Normal/Charged hits.",
      },
      {
        name: "Shining Miracle♪",
        type: "Elemental Burst",
        description: "Heals all nearby party members and allies for a large amount of HP based on Barbara's Max HP.",
      },
      {
        name: "Glorious Season",
        type: "1st Ascension Passive",
        description: "The Stamina consumption of characters within the Melody Loop is decreased by 12%.",
      },
      {
        name: "Encore",
        type: "4th Ascension Passive",
        description: "When your active character gains an Elemental Orb or Particle, the duration of the Melody Loop is extended by 1s (max 5s).",
      },
      {
        name: "With All My Heart♪",
        type: "Utility Passive",
        description: "When a Perfect Cooking is achieved on a dish with restorative effects, Barbara has a 12% chance to obtain double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Gleeful Songs', effect: 'Barbara regenerates 1 Energy every 10s.' },
      { level: 2, name: 'Vitality Burst', effect: 'Decreases the CD of Let the Show Begin♪ by 15% and grants 15% Hydro DMG Bonus during its duration.' },
      { level: 3, name: 'Star of Tomorrow', effect: 'Increases the Level of Shining Miracle♪ by 3.' },
      { level: 4, name: 'Attentiveness be My Power', effect: 'Every opponent Barbara hits with a Charged Attack regenerates 1 Energy for her (up to 5).' },
      { level: 5, name: 'The Purest Companionship', effect: 'Increases the Level of Let the Show Begin♪ by 3.' },
      { level: 6, name: 'Dedicating Everything to You', effect: 'When a party member falls, automatically revives them to 100% HP (CD: 15min).' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Thrilling Tales of Dragon Slayers', 'Prototype Amber', 'Everlasting Moonglow'],
      bestArtifacts: ['Ocean-Hued Clam', 'Maiden Beloved'],
      mainStats: {
        sands: 'HP%',
        goblet: 'HP%',
        circlet: 'Healing Bonus or HP%',
      },
      subStats: ['HP%', 'Energy Recharge', 'Flat HP'],
    }
  },
  {
    id: 'dahlia',
    name: 'Dahlia',
    title: 'Deacon of Moonlit Petals',
    element: 'Hydro',
    weaponType: 'Sword',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Church of Favonius',
    birthday: 'November 8',
    constellationName: 'Dahlia Caerulea',
    description: 'A thoughtful deacon of the Church of Favonius who blends sacred rites with fluid swordplay, creating soothing hydro sanctuaries that purify ailments.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/6/6d/Dahlia_Icon.png',
    stats: {
      hpBase: 10400,
      atkBase: 210,
      defBase: 650,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '26.7%',
    },
    skills: [
      {
        name: "Deacon's Benediction",
        type: "Normal Attack",
        description: "Performs up to 4 swift fencing thrusts.",
      },
      {
        name: "Cleansing Cascade",
        type: "Elemental Skill",
        description: "Deploys a fountain of holy water, cleansing negative statuses and restoring HP to allies while dealing Hydro DMG to foes.",
      },
      {
        name: "Sacred Rite: Baptism of Light",
        type: "Elemental Burst",
        description: "Calls upon cathedral hymns to shower allies in restorative rain, granting continuous healing and Hydro infusion resistance.",
      },
      {
        name: "Serene Solace",
        type: "1st Ascension Passive",
        description: "Characters healed by Cleansing Cascade gain 15% Hydro and Cryo RES for 10s.",
      },
      {
        name: "Merciful Spring",
        type: "4th Ascension Passive",
        description: "After casting Baptism of Light, party members' incoming healing is increased by 20% for 12s.",
      },
      {
        name: "Clerical Grace",
        type: "Utility Passive",
        description: "When crafting Potions or Oils, has a 25% chance to refund crafting materials.",
      },
    ],
    constellations: [
      { level: 1, name: 'Vespers Prayer', effect: 'Cleansing Font generates 2 additional energy particles.' },
      { level: 2, name: 'Baptismal Grace', effect: 'Allied characters inside Hymn of the Cleansing Tides gain 15% Hydro DMG Bonus.' },
      { level: 3, name: 'Choral Cadence', effect: 'Increases the Level of Cleansing Font by 3.' },
      { level: 4, name: 'Sanctuary Shield', effect: 'Casting Burst shields the party with water absorbing 20% of Dahlia\'s Max HP.' },
      { level: 5, name: 'Benediction', effect: 'Increases the Level of Hymn of the Cleansing Tides by 3.' },
      { level: 6, name: 'Eternal Font', effect: 'Elemental reactions within the sacred ground extend Burst duration by 3s.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Favonius Sword', 'Sacrificial Sword', 'Fleuve Cendre Ferryman'],
      bestArtifacts: ['Noblesse Oblige', 'Emblem of Severed Fate'],
      mainStats: {
        sands: 'Energy Recharge',
        goblet: 'Hydro DMG Bonus or HP%',
        circlet: 'CRIT Rate or Healing Bonus',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'HP%', 'Elemental Mastery'],
    }
  },
  {
    id: 'diona',
    name: 'Diona',
    title: 'Kätzlein Cocktail',
    element: 'Cryo',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Cat\'s Tail',
    birthday: 'January 18',
    constellationName: 'Feles',
    description: 'The incredibly popular bartender of the Cat\'s Tail tavern, proud daughter of Draff. Despite desperately attempting to ruin Mondstadt\'s wine industry with horrific concoctions, all her drinks end up delicious.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/4/40/Diona_Icon.png',
    stats: {
      hpBase: 9570,
      atkBase: 212,
      defBase: 601,
      ascensionStat: 'Cryo DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Kätzlein Style",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive shots with a bow.",
      },
      {
        name: "Icy Paws",
        type: "Elemental Skill",
        description: "Fires Icy Paws that deal Cryo DMG and generate a shield based on Max HP (holding fires 5 paws and increases shield strength by 75%).",
      },
      {
        name: "Signature Mix",
        type: "Elemental Burst",
        description: "Tosses a special cold brew that splashes to deal AoE Cryo DMG and creates a Drunken Mist field that continuously heals allies and damages enemies.",
      },
      {
        name: "Cat's Tail Secret Menu",
        type: "1st Ascension Passive",
        description: "Characters shielded by Icy Paws have their Movement SPD increased by 10% and their Stamina Consumption decreased by 10%.",
      },
      {
        name: "Drunkards' Farce",
        type: "4th Ascension Passive",
        description: "Opponents who enter the Drunken Mist field created by Signature Mix have their ATK decreased by 10% for 15s.",
      },
      {
        name: "Complimentary Bar Food",
        type: "Utility Passive",
        description: "When a Perfect Cooking is achieved on a dish with restorative effects, Diona has a 12% chance to obtain double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'A Lingering Flavor', effect: 'Regenerates 15 Energy for Diona after Signature Mix\'s effects end.' },
      { level: 2, name: 'Shaken, Not Purred', effect: 'Increases Icy Paws DMG by 15% and shield absorption by 15%; creates shields for all nearby party members in co-op.' },
      { level: 3, name: 'A—Another Cup?', effect: 'Increases the Level of Signature Mix by 3.' },
      { level: 4, name: 'Wine Industry Slayer', effect: 'Within Drunken Mist, charge time for Diona\'s Aimed Shots is decreased by 60%.' },
      { level: 5, name: 'Double Shot, On the Rocks', effect: 'Increases the Level of Icy Paws by 3.' },
      { level: 6, name: 'Cat\'s Tail Closing Time', effect: 'Characters within Drunken Mist gain +30% Incoming Healing when HP ≤ 50%, or +200 Elemental Mastery when HP > 50%.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Sacrificial Bow', 'Favonius Warbow', 'Recurve Bow'],
      bestArtifacts: ['Noblesse Oblige', 'Tenacity of the Millelith / Maiden Beloved'],
      mainStats: {
        sands: 'HP% or Energy Recharge',
        goblet: 'HP%',
        circlet: 'HP% or Healing Bonus',
      },
      subStats: ['HP%', 'Energy Recharge', 'Flat HP', 'CRIT Rate'],
    }
  },
  {
    id: 'durin',
    name: 'Durin',
    title: 'Purified Dragonfire',
    element: 'Pyro',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius / Dragonspine Keepers',
    birthday: 'December 23',
    constellationName: 'Draco Rubescens',
    description: 'The revived, purified soul of the ancient chalk dragon, reborn with shimmering crimson scales and wielding burning draconic flames alongside swordsmanship.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/ba/Durin_Icon.png',
    stats: {
      hpBase: 13500,
      atkBase: 340,
      defBase: 780,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Corrupted Dragonclaw",
        type: "Normal Attack",
        description: "Performs up to 4 heavy claws and slashes.",
      },
      {
        name: "Festering Miasma",
        type: "Elemental Skill",
        description: "Erupts with concentrated dark alchemy, dealing Anemo and Cryo DMG in an area and inflicting Corrupted Blood debuff.",
      },
      {
        name: "Abyssal Cataclysm",
        type: "Elemental Burst",
        description: "Unleashes the full terrifying aura of the corrupted dragon, dealing colossal AoE Anemo DMG and creating a persistent vortex.",
      },
      {
        name: "Draconic Resurgence",
        type: "1st Ascension Passive",
        description: "When triggering Swirl with Pyro or Cryo, Durin regenerates 10 Energy.",
      },
      {
        name: "Heart of the Defiled",
        type: "4th Ascension Passive",
        description: "Festering Miasma deals 20% increased DMG to opponents afflicted with Corrupted Blood.",
      },
      {
        name: "Dragonspine Catalyst",
        type: "Utility Passive",
        description: "Decreases sheer cold accumulation rate for all party members by 25% on Dragonspine.",
      },
    ],
    constellations: [
      { level: 1, name: 'Chalk & Ember', effect: 'Heart of the Crimson Peak gains 1 additional charge.' },
      { level: 2, name: 'Dragonbone Resurgence', effect: 'Triggering Melt or Vaporize increases Durin\'s CRIT DMG by 40% for 8s.' },
      { level: 3, name: 'Ashen Flight', effect: 'Increases the Level of Heart of the Crimson Peak by 3.' },
      { level: 4, name: 'Igneous Ward', effect: 'When Durin casts Burst, all party members gain a Pyro shield absorbing 30% of Durin\'s Max HP.' },
      { level: 5, name: 'Baleful Wings', effect: 'Increases the Level of Cataclysmic Rebirth by 3.' },
      { level: 6, name: 'Unshackled Dragonflame', effect: 'Durin gains 50% Pyro DMG Bonus and ignites enemies with True Dragonfire that ignores 30% DEF.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Mistsplitter Reforged', 'Primordial Jade Cutter', 'The Black Sword'],
      bestArtifacts: ['Crimson Witch of Flames', 'Marechaussee Hunter'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery'],
    }
  },
  {
    id: 'kaeya',
    name: 'Kaeya',
    title: 'Frostwind Swordsman',
    element: 'Cryo',
    weaponType: 'Sword',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'November 30',
    constellationName: 'Pavo Ocellus',
    description: 'The Cavalry Captain of the Knights of Favonius and Diluc\'s estranged adoptive brother. A charming yet mysterious strategist harboring secrets of ancient Khaenri\'ah.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b6/Kaeya_Icon.png',
    stats: {
      hpBase: 11636,
      atkBase: 223,
      defBase: 792,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '26.7%',
    },
    skills: [
      {
        name: "Ceremonial Bladework",
        type: "Normal Attack",
        description: "Performs up to 5 rapid sword strikes.",
      },
      {
        name: "Frostgnaw",
        type: "Elemental Skill",
        description: "Releases a frigid blast, dealing Cryo DMG to opponents in front of Kaeya.",
      },
      {
        name: "Glacial Waltz",
        type: "Elemental Burst",
        description: "Summons 3 icicles that twirl around the active character, following them and dealing continuous Cryo DMG to enemies.",
      },
      {
        name: "Cold-Blooded Strike",
        type: "1st Ascension Passive",
        description: "Each hit with Frostgnaw regenerates HP for Kaeya equal to 15% of his ATK.",
      },
      {
        name: "Heart of the Abyss",
        type: "4th Ascension Passive",
        description: "Opponents Frozen by Frostgnaw will drop additional Elemental Particles.",
      },
      {
        name: "Hidden Strength",
        type: "Utility Passive",
        description: "Decreases sprinting Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Excellent Blood', effect: 'The CRIT Rate of Normal and Charged Attack hits against opponents affected by Cryo is increased by 15%.' },
      { level: 2, name: 'Never-Ending Performance', effect: 'Every time Glacial Waltz defeats an opponent, its duration is increased by 2.5s, up to a maximum of 15s.' },
      { level: 3, name: 'Dance of Frost', effect: 'Increases the Level of Frostgnaw by 3.' },
      { level: 4, name: 'Frozen Kiss', effect: 'Triggers automatically when Kaeya\'s HP falls below 20%: Creates a shield that absorbs damage equal to 30% of Max HP for 20s.' },
      { level: 5, name: 'Frostbiting Embrace', effect: 'Increases the Level of Glacial Waltz by 3.' },
      { level: 6, name: 'Glacial Whirlwind', effect: 'Glacial Waltz summons 1 additional icicle and regenerates 15 Energy when cast.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Mistsplitter Reforged', 'Favonius Sword', 'Sacrificial Sword', 'The Alley Flash'],
      bestArtifacts: ['Blizzard Strayer', 'Noblesse Oblige', 'Emblem of Severed Fate'],
      mainStats: {
        sands: 'ATK% or Energy Recharge',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%'],
    }
  },
  {
    id: 'lisa',
    name: 'Lisa',
    title: 'Witch of Purple Rose',
    element: 'Electro',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'June 9',
    constellationName: 'Tempus Fugit',
    description: 'The brilliant librarian of the Knights of Favonius, once recognized as Sumeru Akademiya\'s top student in two centuries. Commands shocking violet lightning with effortless elegance.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/6/65/Lisa_Icon.png',
    stats: {
      hpBase: 9570,
      atkBase: 232,
      defBase: 573,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '96',
    },
    skills: [
      {
        name: "Lightning Touch",
        type: "Normal Attack",
        description: "Performs up to 4 electrostatic strikes dealing Electro DMG.",
      },
      {
        name: "Violet Arc",
        type: "Elemental Skill",
        description: "Releases homing lightning orbs to stack Conductive status; holding summons lightning from the heavens dealing colossal AoE Electro DMG.",
      },
      {
        name: "Lightning Rose",
        type: "Elemental Burst",
        description: "Summons a Lightning Rose that unleashes powerful lightning bolts to knock back enemies and deal continuous AoE Electro DMG.",
      },
      {
        name: "Induced Aftershock",
        type: "1st Ascension Passive",
        description: "Hits by Charged Attacks apply Violet Arc's Conductive status to opponents.",
      },
      {
        name: "Static Electricity Field",
        type: "4th Ascension Passive",
        description: "Opponents hit by Lightning Rose have their DEF decreased by 15% for 10s.",
      },
      {
        name: "General Pharmaceutics",
        type: "Utility Passive",
        description: "When Lisa crafts potions, she has a 20% chance to refund one count of one material used.",
      },
    ],
    constellations: [
      { level: 1, name: 'Infinite Circuit', effect: 'Lisa regenerates 2 Energy for each opponent hit while channeling Violet Arc (up to 10 Energy).' },
      { level: 2, name: 'Electromagnetic Field', effect: 'Holding Violet Arc increases DEF by 25% and increases Lisa\'s resistance to interruption.' },
      { level: 3, name: 'Resonant Thunder', effect: 'Increases the Level of Lightning Rose by 3.' },
      { level: 4, name: 'Plasma Eruption', effect: 'Increases the number of lightning bolts released by Lightning Rose per attack to 1-3.' },
      { level: 5, name: 'Electrocute', effect: 'Increases the Level of Violet Arc by 3.' },
      { level: 6, name: 'Pulsing Witch', effect: 'When Lisa takes the field, she applies 3 stacks of the Conductive status to nearby opponents (CD: 5s).' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['A Thousand Floating Dreams', 'Kagura\'s Verity', 'The Widsith', 'Favonius Codex'],
      bestArtifacts: ['Gilded Dreams', 'Thundering Fury', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Energy Recharge or Elemental Mastery',
        goblet: 'Electro DMG Bonus or Elemental Mastery',
        circlet: 'CRIT Rate or Elemental Mastery',
      },
      subStats: ['Energy Recharge', 'Elemental Mastery', 'CRIT Rate', 'CRIT DMG'],
    }
  },
  {
    id: 'lohen',
    name: 'Lohen',
    title: 'Frostbound Paragon',
    element: 'Cryo',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius / Expeditionary Vanguard',
    birthday: 'January 29',
    constellationName: 'Glacies Polaris',
    description: 'A decorated knight officer returning from the far northern expedition, wielding glacial halberds of pure frost with unyielding martial discipline.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/8/86/Lohen_Icon.png',
    stats: {
      hpBase: 12900,
      atkBase: 345,
      defBase: 780,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Grand Falcon Strike",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive greatsword swings.",
      },
      {
        name: "Zephyr Tempest",
        type: "Elemental Skill",
        description: "Charges forward with Anemo winds, carving a gale slash that knocks lightweight enemies airborne.",
      },
      {
        name: "Sovereign Gale Vortex",
        type: "Elemental Burst",
        description: "Summons a mighty wind cyclone that sweeps across the field, vacuuming enemies and infusing with absorbed elements.",
      },
      {
        name: "Knightly Momentum",
        type: "1st Ascension Passive",
        description: "Sprinting increases Lohen's Anemo DMG Bonus by 10% for 5s.",
      },
      {
        name: "Zephyr's Blessing",
        type: "4th Ascension Passive",
        description: "Using Sovereign Gale Vortex restores 15 Stamina to all party members.",
      },
      {
        name: "Crest of the West Wind",
        type: "Utility Passive",
        description: "Decreases party gliding and sprinting Stamina consumption by 15%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Glacial Wedge', effect: 'Glacial Advance gains 1 additional charge and shreds Cryo RES by 15%.' },
      { level: 2, name: 'Iron Discipline', effect: 'Normal and Charged Attacks hit frozen or Cryo-affected enemies with 25% increased DMG.' },
      { level: 3, name: 'Spearhead Command', effect: 'Increases the Level of Glacial Advance by 3.' },
      { level: 4, name: 'Frostwall Bulwark', effect: 'When casting Burst, all party members gain 30% interruption resistance and 200 DEF.' },
      { level: 5, name: 'Blizzard\'s Domain', effect: 'Increases the Level of Polar Boreas Tempest by 3.' },
      { level: 6, name: 'Absolute Zero Vanguard', effect: 'Lohen gains 40% Cryo DMG and his attacks ignore 25% of opponent DEF during Burst.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Staff of Homa', 'Primordial Jade Winged-Spear', 'Calamity Queller', 'Deathmatch'],
      bestArtifacts: ['Blizzard Strayer', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge'],
    }
  },
  {
    id: 'mika',
    name: 'Mika',
    title: 'Coordinates of Clear Frost',
    element: 'Cryo',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'August 11',
    constellationName: 'Palumbus',
    description: 'The front-line surveyor of the Knights of Favonius Reconnaissance Company. Navigates harsh terrain with his crossbow and compass, inspiring allies with attack speed buffs and physical damage amplification.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Mika_Icon.png',
    stats: {
      hpBase: 12506,
      atkBase: 223,
      defBase: 731,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Spear of the Favonius Knight",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive strikes using a polearm and a crossbow.",
      },
      {
        name: "Starfrost Swirl",
        type: "Elemental Skill",
        description: "Fires Flowfrost Flares or Rimestar Flares with a crossbow, dealing Cryo DMG and granting the Soulwind state which buffs active character ATK SPD.",
      },
      {
        name: "Skyfeather Song",
        type: "Elemental Burst",
        description: "Recites Favonius knight prayers, instantly restoring HP to all party members based on Max HP and granting the Eagleplume healing state.",
      },
      {
        name: "Suppressive Barrage",
        type: "1st Ascension Passive",
        description: "Hitting opponents with Starfrost Swirl grants Detector stacks: each stack increases the active character's Physical DMG by 10% (max 3 stacks).",
      },
      {
        name: "Topographical Mapping",
        type: "4th Ascension Passive",
        description: "When an active character under Soulwind and Eagleplume scores a CRIT Hit, Mika gains 1 additional Detector stack.",
      },
      {
        name: "Demarcation",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Mondstadt on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Contingency Factor', effect: 'The Soulwind state reduces the healing interval of the Eagleplume state.' },
      { level: 2, name: 'Companion\'s Ingress', effect: 'Starfrost Swirl\'s first hit generates 1 Detector stack of the Soulwind state.' },
      { level: 3, name: 'Reconnaissance Veteran', effect: 'Increases the Level of Skyfeather Song by 3.' },
      { level: 4, name: 'Sunfrost Encomium', effect: 'When Mika\'s Eagleplume heals party members, Mika regenerates 3 Energy (up to 15 Energy).' },
      { level: 5, name: 'Signal Arrow', effect: 'Increases the Level of Starfrost Swirl by 3.' },
      { level: 6, name: 'Companion\'s Counsel', effect: 'Increases max Detector stacks by 1. Active characters under Soulwind deal 60% increased Physical CRIT DMG.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Favonius Lance', 'Black Tassel', 'Rightful Reward'],
      bestArtifacts: ['Noblesse Oblige', 'Ocean-Hued Clam'],
      mainStats: {
        sands: 'Energy Recharge or HP%',
        goblet: 'HP%',
        circlet: 'Healing Bonus or CRIT Rate',
      },
      subStats: ['Energy Recharge', 'HP%', 'CRIT Rate', 'Flat HP'],
    }
  },
  {
    id: 'noelle',
    name: 'Noelle',
    title: 'Chivalric Blossom',
    element: 'Geo',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'March 21',
    constellationName: 'Parma Cordis',
    description: 'A dutiful maid of the Knights of Favonius who dreams of one day joining their ranks as a true knight. Her steadfast heart and immense physical strength can move boulders.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/8/8e/Noelle_Icon.png',
    stats: {
      hpBase: 12071,
      atkBase: 191,
      defBase: 799,
      ascensionStat: 'DEF%',
      ascensionStatValue: '30.0%',
    },
    skills: [
      {
        name: "Favonius Bladework - Maid",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive claymore strikes.",
      },
      {
        name: "Breastplate",
        type: "Elemental Skill",
        description: "Summons protective stone armor dealing Geo DMG and absorbing damage based on Noelle's DEF; hits by Noelle can heal all party members.",
      },
      {
        name: "Sweeping Time",
        type: "Elemental Burst",
        description: "Gathers the strength of stone onto her greatsword, granting colossal attack range, converting attacks to Geo, and boosting ATK based on DEF.",
      },
      {
        name: "Devotion",
        type: "1st Ascension Passive",
        description: "When Noelle is in party but off-field and active character HP falls below 30%, creates a shield absorbing DMG equal to 400% of Noelle's DEF for 20s.",
      },
      {
        name: "Nice and Clean",
        type: "4th Ascension Passive",
        description: "Every 4 Normal or Charged Attack hits decreases the CD of Breastplate by 1s.",
      },
      {
        name: "Maid's Knighthood",
        type: "Utility Passive",
        description: "When a Perfect Cooking is achieved on a DEF-boosting dish, Noelle has a 12% chance to obtain double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'I Got Your Back', effect: 'While both Sweeping Time and Breastplate are active, Breastplate\'s healing chance is increased to 100%.' },
      { level: 2, name: 'Combat Maid', effect: 'Decreases the Stamina Consumption of Noelle\'s Charged Attacks by 20% and increases Charged Attack DMG by 15%.' },
      { level: 3, name: 'Invulnerable Maid', effect: 'Increases the Level of Breastplate by 3.' },
      { level: 4, name: 'To Be Cleaned', effect: 'When Breastplate expires or is destroyed, it deals 400% ATK as Geo DMG to surrounding opponents.' },
      { level: 5, name: 'Favonius Sweeper Master', effect: 'Increases the Level of Sweeping Time by 3.' },
      { level: 6, name: 'Must Keep Clean', effect: 'Sweeping Time increases Noelle\'s ATK by an additional 50% of her DEF, and extends duration by 1s per opponent defeated (up to 10s).' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Redhorn Stonethresher', 'Serpent Spine', 'Whiteblind', 'Favonius Greatsword'],
      bestArtifacts: ['Husk of Opulent Dreams', 'Marechaussee Hunter', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'DEF%',
        goblet: 'Geo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'DEF%', 'Energy Recharge'],
    }
  },
  {
    id: 'prune',
    name: 'Prune',
    title: 'Verdant Wind-Chime',
    element: 'Anemo',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Windblume Botanists',
    birthday: 'May 14',
    constellationName: 'Campanula Zephyri',
    description: 'An inquisitive herbal botanist from the outskirts of Mondstadt who rings enchanted wind chimes to gather dandelion seeds and swirl protective zephyrs.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/9/99/Prune_Icon.png',
    stats: {
      hpBase: 9600,
      atkBase: 210,
      defBase: 580,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '96',
    },
    skills: [
      {
        name: "Orchard Rapier",
        type: "Normal Attack",
        description: "Performs up to 4 swift fencing strikes.",
      },
      {
        name: "Blossom Whirlwind",
        type: "Elemental Skill",
        description: "Dances forward with floral flourishes, leaving blooming petals that detonate for Dendro and Anemo DMG.",
      },
      {
        name: "Petal Tempest Cascade",
        type: "Elemental Burst",
        description: "Unfurls a meadow of blooming flowers dealing continuous AoE Dendro DMG and boosting party Elemental Mastery.",
      },
      {
        name: "Floral Vigour",
        type: "1st Ascension Passive",
        description: "Normal attacks on enemies afflicted by Dendro reactions restore 1 Energy to Prune.",
      },
      {
        name: "Vernal Bloom",
        type: "4th Ascension Passive",
        description: "Petal Tempest Cascade increases party Elemental Mastery by 80 for 12s.",
      },
      {
        name: "Botanical Harvest",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Mondstadt on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Chime of Zephyr', effect: 'Wind-Chime Resonance gains 1 additional charge.' },
      { level: 2, name: 'Floral Dispersion', effect: 'Swirl reactions increase party Elemental Mastery by 80 for 10s.' },
      { level: 3, name: 'Harmonic Petals', effect: 'Increases the Level of Wind-Chime Resonance by 3.' },
      { level: 4, name: 'Dandelion Shield', effect: 'After casting Burst, creates a swirling wind shield absorbing 15% Max HP.' },
      { level: 5, name: 'Breeze Reverie', effect: 'Increases the Level of Breeze of the Four Winds by 3.' },
      { level: 6, name: 'Whirlwind Symphony', effect: 'Allied attacks against enemies in the cyclone trigger a 50% Anemo echo strike.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Sacrificial Fragments', 'Favonius Codex', 'The Widsith'],
      bestArtifacts: ['Viridescent Venerer', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Elemental Mastery',
        goblet: 'Elemental Mastery',
        circlet: 'Elemental Mastery',
      },
      subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%'],
    }
  },
  {
    id: 'razor',
    name: 'Razor',
    title: 'Wolf Boy',
    element: 'Electro',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Wolvendom',
    birthday: 'September 9',
    constellationName: 'Lupus Minor',
    description: 'A boy raised by the wolves of Wolvendom. Possesses sharpened instincts and lightning agility, battling side-by-side with his spectral Wolf Within avatar.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f8/Razor_Icon.png',
    stats: {
      hpBase: 11962,
      atkBase: 234,
      defBase: 751,
      ascensionStat: 'Physical DMG Bonus',
      ascensionStatValue: '30.0%',
    },
    skills: [
      {
        name: "Steel Fang",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive claymore strikes.",
      },
      {
        name: "Claw and Thunder",
        type: "Elemental Skill",
        description: "Swings the Thunder Wolf Claw to deal Electro DMG and gain Electro Sigils; holding summons a lightning storm dealing AoE Electro DMG.",
      },
      {
        name: "Lightning Fang",
        type: "Elemental Burst",
        description: "Summons the Wolf Within to fight alongside Razor, granting massive Normal ATK SPD, Electro DMG coordination, and Electro RES.",
      },
      {
        name: "Awakening",
        type: "1st Ascension Passive",
        description: "Decreases Claw and Thunder's CD by 18%; using Lightning Fang resets the CD of Claw and Thunder.",
      },
      {
        name: "Hunger",
        type: "4th Ascension Passive",
        description: "When Razor's Energy is below 50%, increases his Energy Recharge by 30%.",
      },
      {
        name: "Wolvensprint",
        type: "Utility Passive",
        description: "Decreases sprinting Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Wolf\'s Instinct', effect: 'Picking up an Elemental Orb or Particle increases Razor\'s DMG by 10% for 8s.' },
      { level: 2, name: 'Suppression', effect: 'Increases CRIT Rate against opponents below 30% HP by 10%.' },
      { level: 3, name: 'Soul Companion', effect: 'Increases the Level of Lightning Fang by 3.' },
      { level: 4, name: 'Bite', effect: 'When casting Claw and Thunder (Press), opponents hit have their DEF decreased by 15% for 7s.' },
      { level: 5, name: 'Sharpened Claws', effect: 'Increases the Level of Claw and Thunder by 3.' },
      { level: 6, name: 'Lupus Fulguris', effect: 'Every 10s, Razor\'s sword charges up, causing the next Normal Attack to unleash lightning dealing 100% ATK as Electro DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Wolf\'s Gravestone', 'Beacon of the Reed Sea', 'Serpent Spine', 'Mailed Flower'],
      bestArtifacts: ['Pale Flame', 'Gladiator\'s Finale', 'Gilded Dreams'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Physical DMG Bonus or Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge'],
    }
  },
  {
    id: 'rosaria',
    name: 'Rosaria',
    title: 'Thorny Benevolence',
    element: 'Cryo',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Church of Favonius',
    birthday: 'January 24',
    constellationName: 'Corona',
    description: 'A sister of the church though one would hardly know it. A shadowy executioner who works behind the scenes to purge threats to Mondstadt in the darkness of night.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/3/35/Rosaria_Icon.png',
    stats: {
      hpBase: 12288,
      atkBase: 240,
      defBase: 710,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Spear of the Church",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive spear strikes.",
      },
      {
        name: "Ravaging Confession",
        type: "Elemental Skill",
        description: "Shifts position behind an opponent, piercing and slashing them to deal Cryo DMG.",
      },
      {
        name: "Rites of Termination",
        type: "Elemental Burst",
        description: "Strikes the ground to plant an Ice Lance, dealing continuous pulses of AoE Cryo DMG over 8s.",
      },
      {
        name: "Regina Probationum",
        type: "1st Ascension Passive",
        description: "When Rosaria strikes an opponent from behind using Ravaging Confession, her CRIT Rate increases by 12% for 5s.",
      },
      {
        name: "Shadow Samaritana",
        type: "4th Ascension Passive",
        description: "Casting Rites of Termination increases CRIT Rate of all nearby party members by 15% of Rosaria's CRIT Rate (max 15%) for 10s.",
      },
      {
        name: "Night Walk",
        type: "Utility Passive",
        description: "At night (18:00 to 06:00), increases the Movement SPD of your party members by 10%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Unholy Revelation', effect: 'When Rosaria scores a CRIT Hit, her Attack SPD increases by 10% and Normal Attack DMG by 10% for 4s.' },
      { level: 2, name: 'Land Without Promise', effect: 'The duration of the Ice Lance created by Rites of Termination is increased by 4s.' },
      { level: 3, name: 'The Wages of Sin', effect: 'Increases the Level of Ravaging Confession by 3.' },
      { level: 4, name: 'Painful Grace', effect: 'Ravaging Confession\'s CRIT Hits regenerate 5 Energy for Rosaria.' },
      { level: 5, name: 'Last Rites', effect: 'Increases the Level of Rites of Termination by 3.' },
      { level: 6, name: 'Divine Retribution', effect: 'Rites of Termination\'s attack decreases opponents\' Physical RES by 20% for 10s.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Staff of Homa', 'Deathmatch', 'The Catch', 'Favonius Lance'],
      bestArtifacts: ['Noblesse Oblige', 'Emblem of Severed Fate', 'Blizzard Strayer'],
      mainStats: {
        sands: 'ATK% or Energy Recharge',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT Rate',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%'],
    }
  },
  {
    id: 'sucrose',
    name: 'Sucrose',
    title: 'Harmless Sweetie',
    element: 'Anemo',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'November 26',
    constellationName: 'Ampulla',
    description: 'An alchemist specializing in bio-alchemy and assistant to Albedo. Her curious experiments create miniature Wind Spirits that group foes and share massive Elemental Mastery.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/0/0e/Sucrose_Icon.png',
    stats: {
      hpBase: 9244,
      atkBase: 170,
      defBase: 703,
      ascensionStat: 'Anemo DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Wind Spirit Creation",
        type: "Normal Attack",
        description: "Performs up to 4 attacks using Wind Spirits that deal Anemo DMG.",
      },
      {
        name: "Astable Anemohypostasis Creation - 6308",
        type: "Elemental Skill",
        description: "Creates a small Wind Spirit that pulls opponents and objects in before launching them, dealing AoE Anemo DMG.",
      },
      {
        name: "Forbidden Creation - Isomer 75 / Type II",
        type: "Elemental Burst",
        description: "Hurls a flask creating a Large Wind Spirit that pulls enemies and bursts 3 times, dealing AoE Anemo DMG and absorbing elements.",
      },
      {
        name: "Catalyst Conversion",
        type: "1st Ascension Passive",
        description: "When Sucrose triggers a Swirl reaction, all characters in the party with matching elemental type gain 50 Elemental Mastery for 8s.",
      },
      {
        name: "Mollis Favonius",
        type: "4th Ascension Passive",
        description: "When Astable Creation or Forbidden Creation hits an opponent, increases all party members' Elemental Mastery by 20% of Sucrose's EM for 8s.",
      },
      {
        name: "Astable Invention",
        type: "Utility Passive",
        description: "When Sucrose crafts Character and Weapon Enhancement Materials, she has a 10% chance to obtain double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Clustered Vacuum Field', effect: 'Astable Anemohypostasis Creation - 6308 gains 1 additional charge.' },
      { level: 2, name: 'Beth: Unbound Form', effect: 'The duration of Forbidden Creation - Isomer 75 / Type II is increased by 2s.' },
      { level: 3, name: 'Flawless Alchemistress', effect: 'Increases the Level of Astable Anemohypostasis Creation - 6308 by 3.' },
      { level: 4, name: 'Alchemidaemon', effect: 'Every 7 Normal and Charged Attacks Sucrose hits opponents will reduce the CD of Astable Anemohypostasis Creation by 1-7s.' },
      { level: 5, name: 'Caution: Standard Flask', effect: 'Increases the Level of Forbidden Creation - Isomer 75 / Type II by 3.' },
      { level: 6, name: 'Chaotic Entropy', effect: 'If Burst triggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for that element during its duration.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Sacrificial Fragments', 'A Thousand Floating Dreams', 'Favonius Codex', 'Thrilling Tales of Dragon Slayers'],
      bestArtifacts: ['Viridescent Venerer'],
      mainStats: {
        sands: 'Elemental Mastery',
        goblet: 'Elemental Mastery',
        circlet: 'Elemental Mastery',
      },
      subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%'],
    }
  },
  {
    id: 'varka',
    name: 'Varka',
    title: 'Knight of Boreas',
    element: 'Anemo',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Mondstadt',
    affiliation: 'Knights of Favonius',
    birthday: 'July 17',
    constellationName: 'Lupus Polaris',
    description: 'The Grand Master of the Knights of Favonius, the legendary "Knight of Boreas." A towering warrior possessing peerless strength and howling gale-force claymore strikes.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/9/98/Varka_Icon.png',
    stats: {
      hpBase: 13900,
      atkBase: 350,
      defBase: 840,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Titan Greatsword",
        type: "Normal Attack",
        description: "Performs up to 4 devastating sweeps with a legendary greatsword.",
      },
      {
        name: "Boreas Howl",
        type: "Elemental Skill",
        description: "Channels the savage winds of Wolvendom, delivering an empowering spin slash that deflects projectile attacks and deals AoE Anemo DMG.",
      },
      {
        name: "Wrath of the Grand Master",
        type: "Elemental Burst",
        description: "Leaps high and smashes the earth with the fury of the northern gale, creating a persistent vortex that shreds elemental resistance and buffs party ATK.",
      },
      {
        name: "Knight Commander's Vow",
        type: "1st Ascension Passive",
        description: "When HP is above 50%, Varka's Normal and Charged Attacks deal 25% increased Physical and Anemo DMG.",
      },
      {
        name: "Northern Frontier Bastion",
        type: "4th Ascension Passive",
        description: "Boreas Howl grants party members 30% resistance to interruption and 20% DEF for 12s.",
      },
      {
        name: "Vanguard's Expedition",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Mondstadt Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Eye of the Howling Blizzard', effect: 'Howling Northwind Sweep gains 1 additional charge and increases attack reach by 30%.' },
      { level: 2, name: 'Alpha\'s Roar', effect: 'Hitting an enemy marked by Anemo lowers their ATK by 20% and increases Varka\'s ATK by 20%.' },
      { level: 3, name: 'Ascendant Dominance', effect: 'Increases the Level of Howling Northwind Sweep by 3.' },
      { level: 4, name: 'Northern Bastion', effect: 'Active characters under Varka\'s storm have their interruption resistance drastically increased and gain 20% All RES.' },
      { level: 5, name: 'Spirit of the Wolf King', effect: 'Increases the Level of Wrath of the Dominator by 3.' },
      { level: 6, name: 'Legend of the Knight of Boreas', effect: 'Varka gains 60% Anemo CRIT DMG and all claymore slashes trigger miniature howling windstorms.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Song of Broken Pines', 'Wolf\'s Gravestone', 'Beacon of the Reed Sea', 'Serpent Spine'],
      bestArtifacts: ['Desert Pavilion Chronicle', 'Viridescent Venerer', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Anemo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge'],
    }
  }
];
