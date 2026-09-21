import { Character } from '../../types';

export const SPECIAL_CHARACTERS: Character[] = [
  // Snezhnaya
  {
    id: 'tartaglia',
    name: 'Tartaglia',
    title: 'Childe',
    element: 'Hydro',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Snezhnaya',
    affiliation: 'Fatui Harbingers',
    birthday: 'July 20',
    constellationName: 'Monoceros Caeli',
    description: 'No. 11 of the Fatui Harbingers, also known as "Childe." A battle-hungry warrior who wields pure water blades, can switch between ranged bow and melee twin-daggers, and triggers cascading Riptide bursts.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/8/85/Tartaglia_Icon.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Tartaglia.png',
    stats: {
      hpBase: 13103,
      atkBase: 301,
      defBase: 815,
      ascensionStat: 'Hydro DMG Bonus',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Cutting Torrent",
        type: "Normal Attack",
        description: "Performs up to 6 consecutive shots with a bow; charged shots apply Riptide to opponents.",
      },
      {
        name: "Foul Legacy: Raging Tide",
        type: "Elemental Skill",
        description: "Unleashes a set of weaponry made of pure water, switching to melee stance where attacks deal Hydro DMG and trigger Riptide Slash.",
      },
      {
        name: "Havoc: Obliteration",
        type: "Elemental Burst",
        description: "In Ranged Stance: fires Flash of Havoc dealing AoE Hydro DMG and applying Riptide. In Melee Stance: performs Light of Obliteration, slashing for colossal AoE Hydro DMG.",
      },
      {
        name: "Never Ending",
        type: "1st Ascension Passive",
        description: "Extends Riptide duration by 8s.",
      },
      {
        name: "Sword of Torrents",
        type: "4th Ascension Passive",
        description: "When Tartaglia is in Foul Legacy: Raging Tide's Melee Stance, on scoring a CRIT Hit, Normal and Charged Attacks apply the Riptide status effect to opponents.",
      },
      {
        name: "Master of Weaponry",
        type: "Utility Passive",
        description: "Increases your own party members' Normal Attack Level by 1.",
      },
    ],
    constellations: [
      { level: 1, name: 'Foul Legacy: Tide Withholder', effect: 'Decreases the CD of Foul Legacy: Raging Tide by 20%.' },
      { level: 2, name: 'Foul Legacy: Understream', effect: 'When opponents affected by Riptide are defeated, Tartaglia regenerates 4 Elemental Energy.' },
      { level: 3, name: 'Abyssal Mayhem: Vortex of Turmoil', effect: 'Increases the Level of Foul Legacy: Raging Tide by 3.' },
      { level: 4, name: 'Abyssal Mayhem: Hydrospout', effect: 'Opponents affected by Riptide take periodic Riptide Slash or Riptide Flash damage even while Tartaglia is off-field.' },
      { level: 5, name: 'Havoc: Formless Curb', effect: 'Increases the Level of Havoc: Obliteration by 3.' },
      { level: 6, name: 'Havoc: Annihilation', effect: 'In melee stance, unleashing Havoc: Obliteration resets the CD of Foul Legacy: Raging Tide upon switching back.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Polar Star', 'Thundering Pulse', 'Aqua Simulacra', 'The Viridescent Hunt', 'Rust'],
      bestArtifacts: ['Nymph\'s Dream', 'Heart of Depth', 'Shimenawa\'s Reminiscence'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Hydro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge'],
    }
  },
  {
    id: 'arlecchino',
    name: 'Arlecchino',
    title: 'The Knave',
    element: 'Pyro',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Snezhnaya',
    affiliation: 'Fatui Harbingers / House of the Hearth',
    birthday: 'August 22',
    constellationName: 'Ignis Purgatorius',
    description: 'No. 4 of the Fatui Harbingers, the "Father" of the House of the Hearth. Commands devastating Crimson Moon flames and weaves Bond of Life into scythe slashes.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9a/Arlecchino_Icon.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Arlecchino.png',
    stats: {
      hpBase: 13103,
      atkBase: 342,
      defBase: 765,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Invitation to a Beheading",
        type: "Normal Attack",
        description: "Performs up to 6 consecutive spear strikes; when Bond of Life is ≥30% of Max HP, enters Masque of the Red Death, converting attacks to Pyro.",
      },
      {
        name: "All Is Ash",
        type: "Elemental Skill",
        description: "Summons Balemoon Bloodfire, cleaving opponents for Pyro DMG and inflicting Blood-Debt Directive; charged attacks collect Directives to grant Bond of Life.",
      },
      {
        name: "Balemoon Rising",
        type: "Elemental Burst",
        description: "Unfurls her wings of Balemoon Bloodfire, absorbing Directives and clearing Bond of Life to deal colossal AoE Pyro DMG, reset Skill CD, and heal herself.",
      },
      {
        name: "Agony Alone May Be Repaid",
        type: "1st Ascension Passive",
        description: "Defeating opponents afflicted with Blood-Debt Directive grants Arlecchino 130% Bond of Life; directives upgrade to Blood-Debt Due after 5s for greater Bond of Life.",
      },
      {
        name: "The Balemoon Alone Knew",
        type: "4th Ascension Passive",
        description: "Arlecchino gains 1% Elemental and Physical RES for every 100 ATK she possesses that exceeds 1,000 (max 20% RES).",
      },
      {
        name: "The Balemoon's Pity",
        type: "Utility Passive",
        description: "While in combat, Arlecchino gains a 40% Pyro DMG Bonus and can only be healed through Balemoon Rising.",
      },
    ],
    constellations: [
      { level: 1, name: '"All Reprisals and Arrears, Mine to Bear..."', effect: 'Masque of the Red Death value increased by 100%. While performing attacks in Masque state, interruption resistance is increased.' },
      { level: 2, name: '"All Rewards and Retribution, Mine to Bestow..."', effect: 'Blood-Debt Directives immediately start at Blood-Debt Due. Absorbing them unleashes Balemoon Bloodfire dealing 900% ATK as AoE Pyro DMG.' },
      { level: 3, name: '"You Shall Become a New Family..."', effect: 'Increases the Level of Invitation to a Beheading by 3.' },
      { level: 4, name: '"You Shall Love and Protect Each Other..."', effect: 'Absorbing Blood-Debt decreases Burst CD by 2s and restores 15 Elemental Energy.' },
      { level: 5, name: '"For Alone, We Are as Good as Dead..."', effect: 'Increases the Level of Balemoon Rising by 3.' },
      { level: 6, name: '"From This Day On, We Shall Delight in New Life."', effect: 'The DMG of Balemoon Rising is increased by Arlecchino\'s ATK multiplied by 700% of current Bond of Life percentage. Casting Skill grants 10% CRIT Rate and 70% CRIT DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Crimson Moon\'s Semblance', 'Staff of Homa', 'Primordial Jade Winged-Spear', 'Deathmatch'],
      bestArtifacts: ['Fragment of Harmonic Whimsy', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery'],
    }
  },
  {
    id: 'alyosha',
    name: 'Alyosha',
    title: 'Thunder of the Tundra',
    element: 'Electro',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Snezhnaya',
    affiliation: 'Zapolyarny Guard',
    birthday: 'February 12',
    constellationName: 'Ferrum Fulmen',
    description: 'A dedicated sergeant of the northern tundra garrison in Snezhnaya, charging forward with shock-spear tactics in subzero temperatures.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Alyosha_Icon.png',
    stats: {
      hpBase: 10900,
      atkBase: 220,
      defBase: 690,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '26.7%',
    },
    skills: [
      {
        name: "Fatui Officer's Saber",
        type: "Normal Attack",
        description: "Performs up to 5 disciplined military saber strikes.",
      },
      {
        name: "Frostfire Barrage",
        type: "Elemental Skill",
        description: "Fires high-caliber ordnance from his Fatui gauntlet, alternating between Pyro and Cryo explosive rounds.",
      },
      {
        name: "Snezhnayan Iron Fist",
        type: "Elemental Burst",
        description: "Calls down artillery bombardment from the Zapolyarny Palace vanguard, devastating the battlefield.",
      },
      {
        name: "Tactical Superiority",
        type: "1st Ascension Passive",
        description: "When triggering Melt, increases party ATK by 20% for 10s.",
      },
      {
        name: "Iron Discipline",
        type: "4th Ascension Passive",
        description: "Decreases damage taken by 15% when performing Charged Attacks.",
      },
      {
        name: "Imperial Logistics",
        type: "Utility Passive",
        description: "Gains 25% more rewards on Snezhnaya Expeditions.",
      },
    ],
    constellations: [
      { level: 1, name: 'Rapid Re-insulation', effect: 'Skill generates 1 additional elemental particle.' },
      { level: 2, name: 'Shockwave Relay', effect: 'Electro-Charged and Superconduct reactions decrease enemy DEF by 15%.' },
      { level: 3, name: 'Sergeant\'s Drills', effect: 'Increases the Level of Zapolyarny Discharge by 3.' },
      { level: 4, name: 'Perimeter Armor', effect: 'Party members inside the discharge area gain 150 DEF and 10% Electro DMG.' },
      { level: 5, name: 'Northern Thunder', effect: 'Increases the Level of Cryo-Electric Overload by 3.' },
      { level: 6, name: 'Polar Vanguard', effect: 'Burst critical hits restore 12 Energy to Alyosha.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['The Catch', 'Favonius Lance', 'Dragon\'s Bane'],
      bestArtifacts: ['Emblem of Severed Fate', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Energy Recharge',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'ATK%'],
    }
  },
  {
    id: 'odette',
    name: 'Odette',
    title: 'Frostflower Blade of the North',
    element: 'Cryo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Snezhnaya',
    affiliation: 'Snezhnaya Noblesse Academy',
    birthday: 'December 8',
    constellationName: 'Cygnum Glaciale',
    description: 'An aristocratic swordmistress from the imperial court of Zapolyarny Palace, wielding graceful, razor-sharp Cryo rapier techniques.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/8/87/Odette_Icon.png',
    stats: {
      hpBase: 13400,
      atkBase: 345,
      defBase: 770,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Clockwork Fencing",
        type: "Normal Attack",
        description: "Performs up to 4 mechanical rapier thrusts.",
      },
      {
        name: "Mechanized Ballet",
        type: "Elemental Skill",
        description: "Pirouettes with razor-sharp gears, dealing Hydro and Physical DMG and building kinetic energy.",
      },
      {
        name: "Clockwork Crescendo",
        type: "Elemental Burst",
        description: "Unleashes a grand mechanical music box that plays harmonious melodies, boosting party attack speed and dealing continuous AoE Hydro DMG.",
      },
      {
        name: "Precision Calibration",
        type: "1st Ascension Passive",
        description: "Normal attacks gain 10% CRIT Rate when kinetic energy is full.",
      },
      {
        name: "Clockwork Momentum",
        type: "4th Ascension Passive",
        description: "Using Mechanized Ballet increases party movement speed by 15% for 8s.",
      },
      {
        name: "Automaton Mastery",
        type: "Utility Passive",
        description: "When crafting weapon enhancement materials, 10% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Glacial Adagio', effect: 'Frost Crystal shatter DMG increased by 40%.' },
      { level: 2, name: 'Ballroom Pas de Deux', effect: 'Freeze reactions triggered inside the dome grant 20% Cryo DMG bonus for 10s.' },
      { level: 3, name: 'Prima Ballerina', effect: 'Increases the Level of Glacial Pirouette by 3.' },
      { level: 4, name: 'Crystalline Cadence', effect: 'Burst cooldown reduced by 3s and grants 15 Energy to Odette.' },
      { level: 5, name: 'Winter Requiem', effect: 'Increases the Level of Swan Lake Reverie by 3.' },
      { level: 6, name: 'Eternal White Swan', effect: 'Odette gains 80% Cryo CRIT DMG against frozen or cryo-affected enemies.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Mistsplitter Reforged', 'Haran Geppaku Futsu', 'The Black Sword'],
      bestArtifacts: ['Blizzard Strayer', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT DMG or CRIT Rate',
      },
      subStats: ['CRIT DMG', 'CRIT Rate', 'ATK%', 'Energy Recharge'],
    }
  },
  {
    id: 'sandrone',
    name: 'Sandrone',
    title: 'Marionette',
    element: 'Cryo',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Snezhnaya',
    affiliation: 'Fatui Harbingers',
    birthday: 'May 7',
    constellationName: 'Puppa Mechanica',
    description: 'No. 7 of the Fatui Harbingers, the "Marionette." Accompanied by a towering clockwork automaton that heeds her cold commands with devastating strength.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/c/c8/Sandrone_Icon.png',
    stats: {
      hpBase: 14500,
      atkBase: 335,
      defBase: 790,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Marionette Strings",
        type: "Normal Attack",
        description: "Commands floating puppet strings to strike foes with blunt impact.",
      },
      {
        name: "Puppet Vanguard",
        type: "Elemental Skill",
        description: "Commands her colossal mechanical companion to charge forward, creating an impenetrable vanguard and taunting enemies.",
      },
      {
        name: "Grand Automaton Symphony",
        type: "Elemental Burst",
        description: "The giant automaton enters overdrive, stomping the earth to unleash devastating tectonic shockwaves and granting party DEF shields.",
      },
      {
        name: "Clockwork Overhaul",
        type: "1st Ascension Passive",
        description: "Automaton absorbs 250% Geo and Physical damage and reflects 15% back to attackers.",
      },
      {
        name: "Mechanical Dominance",
        type: "4th Ascension Passive",
        description: "Increases party DEF by 20% while Grand Automaton Symphony is active.",
      },
      {
        name: "Marionette Artisan",
        type: "Utility Passive",
        description: "When crafting furnishings, has a 25% chance to refund crafting materials.",
      },
    ],
    constellations: [
      { level: 1, name: 'Precision Gears', effect: 'Turret attacks fire 50% faster and generate additional energy.' },
      { level: 2, name: 'Reinforced Exoskeleton', effect: 'Automaton punch shreds 25% of opponent Physical and Cryo RES.' },
      { level: 3, name: 'Clockwork Blueprint', effect: 'Increases the Level of Marionette Piston Driver by 3.' },
      { level: 4, name: 'Perpetual Motion Engine', effect: 'Burst restores 20 Energy and resets Skill CD upon defeating an opponent.' },
      { level: 5, name: 'Imperial Artifice', effect: 'Increases the Level of Gilded Automation Protocol by 3.' },
      { level: 6, name: 'Sovereignty of the Dollmaker', effect: 'Sandrone and her automaton gain 60% Cryo CRIT DMG and immunity to interruption.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Wolf\'s Gravestone', 'Song of Broken Pines', 'Serpent Spine'],
      bestArtifacts: ['Blizzard Strayer', 'Pale Flame', 'Golden Troupe'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Cryo DMG Bonus or Physical DMG',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge'],
    }
  },

  // Other
  {
    id: 'aloy',
    name: 'Aloy',
    title: 'Savior From Another World',
    element: 'Cryo',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Other',
    affiliation: 'Wandering Hunter',
    birthday: 'April 4',
    constellationName: 'Nora Fortis',
    description: 'Formerly an outcast, now a machine hunter of unmatched skill from a distant world. She came to Teyvat in search of new challenges.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e5/Aloy_Icon.png',
    stats: {
      hpBase: 10899,
      atkBase: 234,
      defBase: 676,
      ascensionStat: 'Cryo DMG Bonus',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Rapid Fire",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive shots with a bow.",
      },
      {
        name: "Frozen Wilds",
        type: "Elemental Skill",
        description: "Throws a Freeze Bomb forward that detonates into Chillwater Bomblets; gaining 4 Coil stacks triggers Rushing Ice state infusing attacks with Cryo.",
      },
      {
        name: "Prophecies of Dawn",
        type: "Elemental Burst",
        description: "Hurls a Cryo power cell overhead and detonates it with an arrow, dealing massive AoE Cryo DMG.",
      },
      {
        name: "Combat Override",
        type: "1st Ascension Passive",
        description: "When Aloy gains the Coil effect from Frozen Wilds, her ATK is increased by 16%, while nearby party members' ATK is increased by 8% for 10s.",
      },
      {
        name: "Strong Strike",
        type: "4th Ascension Passive",
        description: "When Aloy is in the Rushing Ice state, her Cryo DMG Bonus increases by 3.5% every 1s (max 35%).",
      },
      {
        name: "Easy Does It",
        type: "Utility Passive",
        description: "Animals from whom poultry, raw meat, or chilled meat can be obtained are not easily startled when party members approach.",
      },
    ],
    constellations: [
      { level: 1, name: 'Star of Another World', effect: 'The time has not yet come for this person\'s corner of the night sky to light up.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Thundering Pulse', 'The Stringless', 'Predator', 'Favonius Warbow'],
      bestArtifacts: ['Blizzard Strayer', 'Noblesse Oblige'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge'],
    }
  },
  {
    id: 'nicole',
    name: 'Nicole',
    title: 'The Guide Who Never Strays',
    element: 'Pyro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Other',
    affiliation: 'Hexenzirkel',
    birthday: 'October 13',
    constellationName: 'Stella Viatori',
    description: 'Codename "N" of the Hexenzirkel. A wise guide who speaks into the minds of seekers and gently points the world back toward its true course.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Nicole_Icon.png',
    stats: {
      hpBase: 14100,
      atkBase: 338,
      defBase: 710,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Prophetic Wand",
        type: "Normal Attack",
        description: "Performs up to 4 starlight wand strikes dealing Anemo DMG.",
      },
      {
        name: "Whispers of Fate",
        type: "Elemental Skill",
        description: "Consults the prophecy voice within the tea cup, revealing enemy weak points and decreasing enemy elemental resistances.",
      },
      {
        name: "Cosmic Convergence",
        type: "Elemental Burst",
        description: "Unveils the tea party of fate, granting allies invulnerability for 2s and empowering all elemental reactions for 15s.",
      },
      {
        name: "Guided Destinies",
        type: "1st Ascension Passive",
        description: "Party members trigger elemental reactions with 20% increased reaction DMG.",
      },
      {
        name: "Web of Fate",
        type: "4th Ascension Passive",
        description: "When an ally takes fatal damage, prevents death and heals for 20% Max HP (once per 15 min).",
      },
      {
        name: "Hexenzirkel Lore",
        type: "Utility Passive",
        description: "Increases party Elemental Mastery by 50 in domains and spiral abyss.",
      },
    ],
    constellations: [
      { level: 1, name: 'Guiding Whispers', effect: 'Fate\'s Thread extends duration by 5s and shreds 15% Pyro RES.' },
      { level: 2, name: 'Causality Anchor', effect: 'Triggering Vaporize or Melt grants 25% Pyro DMG to Nicole for 10s.' },
      { level: 3, name: 'Chalice of Prophecy', effect: 'Increases the Level of Hexen Guidance by 3.' },
      { level: 4, name: 'Thread of Fortune', effect: 'Burst restores 15 Energy to all party members.' },
      { level: 5, name: 'Hexen Assembly', effect: 'Increases the Level of Destiny\'s Correction by 3.' },
      { level: 6, name: 'Weaver of Worlds', effect: 'Nicole gains 70% Pyro CRIT DMG and allows party members to ignore 20% DEF.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Lost Prayer to the Sacred Winds', 'Kagura\'s Verity', 'The Widsith'],
      bestArtifacts: ['Crimson Witch of Flames', 'Noblesse Oblige'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'ATK%'],
    }
  },
  {
    id: 'skirk',
    name: 'Skirk',
    title: 'Blade of the Darkest Abyss',
    element: 'Cryo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Other',
    affiliation: 'The Abyss / Surtalogi\'s Disciple',
    birthday: 'November 28',
    constellationName: 'Vorago Profunda',
    description: 'The master of Tartaglia who dwells in the deepest, darkest depths of the Abyss. A disciple of the enigmatic Surtalogi.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/0/03/Skirk_Icon.png',
    stats: {
      hpBase: 13900,
      atkBase: 355,
      defBase: 780,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Voidblade Mastery",
        type: "Normal Attack",
        description: "Performs up to 5 otherworldly sword strikes slicing through dimensional rifts.",
      },
      {
        name: "Abyssal Rift",
        type: "Elemental Skill",
        description: "Tears open a rift to the primordial void, swallowing incoming attacks and blinking behind the foe with an execution slash.",
      },
      {
        name: "Calamity of the Void",
        type: "Elemental Burst",
        description: "Unleashes the cosmic calamity of the deep abyss, plunging the entire area into a starry black void that obliterates all enemy shields.",
      },
      {
        name: "Transcendent Voidform",
        type: "1st Ascension Passive",
        description: "Attacks deal 25% true damage, ignoring enemy defensive barriers and shields.",
      },
      {
        name: "Sovereign of Chaos",
        type: "4th Ascension Passive",
        description: "Increases Skirk's CRIT DMG by 30% for 10s after casting Calamity of the Void.",
      },
      {
        name: "Abyssal Wanderer",
        type: "Utility Passive",
        description: "Can sprint across any terrain surface without taking fall damage.",
      },
    ],
    constellations: [
      { level: 1, name: 'Singularity Threshold', effect: 'Rift pull radius increased by 50% and pulls heavier opponents.' },
      { level: 2, name: 'Void Piercer', effect: 'Attacks ignore 25% of opponent Cryo and Physical RES.' },
      { level: 3, name: 'Surtalogi\'s Teachings', effect: 'Increases the Level of Primordial Gravity Tear by 3.' },
      { level: 4, name: 'Abyssal Resonance', effect: 'Burst critical hits refund 18 Energy to Skirk.' },
      { level: 5, name: 'Star-Eater Protocol', effect: 'Increases the Level of All-Devouring Starfall by 3.' },
      { level: 6, name: 'Dominion of the Void', effect: 'Skirk gains 80% Cryo CRIT DMG and can slash through interdimensional space.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Mistsplitter Reforged', 'Light of Foliar Incision', 'Haran Geppaku Futsu'],
      bestArtifacts: ['Blizzard Strayer', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT DMG or CRIT Rate',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge'],
    }
  },
  {
    id: 'traveler',
    name: 'Traveler (Aether/Lumine)',
    title: 'Outlander',
    element: 'Multi',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Other',
    affiliation: 'Travelers / Adventurers\' Guild',
    birthday: 'Player\'s Choice',
    constellationName: 'Viator / Viatrix',
    description: 'Aether and Lumine, travelers from another world whose twin was taken by an unknown god. As Outlanders, they possess the unique multi-element capability to resonate with and wield all 7 elements across Teyvat.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/59/Traveler_Icon.png',
    stats: {
      hpBase: 10875,
      atkBase: 212,
      defBase: 683,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Foreign Blade",
        type: "Normal Attack",
        description: "Performs up to 5 rapid sword strikes.",
      },
      {
        name: "Elemental Resonance Strike",
        type: "Elemental Skill",
        description: "Channels the attuned element (Palm Vortex, Starfell Sword, Lightning Blade, Razorgrass Blade, Aquacrest Saber) to release elemental force.",
      },
      {
        name: "Elemental Rupture",
        type: "Elemental Burst",
        description: "Unleashes elemental cataclysm (Gust Surge, Wake of Earth, Bellowing Thunder, Surgent Manifestation, Torrential Discharge).",
      },
      {
        name: "Slitting Wind & Elemental Insight",
        type: "1st Ascension Passive",
        description: "The last hit of a Normal Attack combo unleashes an elemental blade dealing 60% of ATK as elemental DMG to opponents.",
      },
      {
        name: "Second Wind & Abyssal Memory",
        type: "4th Ascension Passive",
        description: "Defeating opponents with Elemental Skill regenerates 2% HP for 5s and restores 10 Energy.",
      },
      {
        name: "Journey's Echo",
        type: "Utility Passive",
        description: "Decreases party sprinting and swimming Stamina consumption by 10% across all nations.",
      },
    ],
    constellations: [
      { level: 1, name: 'Raging Vortex', effect: 'Pulls opponents within 5m of the Traveler.' },
      { level: 2, name: 'Uprising Whirlwind', effect: 'Increases Energy Recharge by 16%.' },
      { level: 3, name: 'Sweeping Gust', effect: 'Increases Skill level by 3.' },
      { level: 4, name: 'Cherishing Breezes', effect: 'Reduces DMG taken while casting Skill by 10%.' },
      { level: 5, name: 'Vortex Stellaris', effect: 'Increases Burst level by 3.' },
      { level: 6, name: 'Intertwined Winds', effect: 'Targets hit by Burst have their Elemental RES reduced by 20%.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Favonius Sword', 'Sacrificial Sword', 'Mistsplitter Reforged', 'Freedom-Sworn'],
      bestArtifacts: ['Noblesse Oblige', 'Emblem of Severed Fate', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Elemental DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%'],
    }
  },
  {
    id: 'wonderland-manekin',
    name: 'Wonderland Manekin',
    title: 'Automaton of the Simulacra',
    element: 'Adaptive',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Other',
    affiliation: 'Simulanka / Fairytale Realm',
    birthday: 'July 17',
    constellationName: 'Manekin Mirabilis',
    description: 'A magical wooden automaton brought to life within the fairytale realm of Simulanka, wielding toy-blade magic and imaginative resonance.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/0/02/Wonderland_Manekin_Icon.png',
    stats: {
      hpBase: 11900,
      atkBase: 290,
      defBase: 720,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Puppet Strike",
        type: "Normal Attack",
        description: "Performs up to 4 rhythmic toy mallet strikes.",
      },
      {
        name: "Mimicry Mirage",
        type: "Elemental Skill",
        description: "Deploys a duplicate toy manekin that mimics active character attacks, dealing coordinated physical and elemental DMG.",
      },
      {
        name: "Clockwork Carnival",
        type: "Elemental Burst",
        description: "Launches a carnival parade of mechanized toys that march across the battlefield with joyous explosions.",
      },
      {
        name: "Whimsical Automaton",
        type: "1st Ascension Passive",
        description: "Mimicry Mirage taunts nearby enemies for 6s and increases team attack speed by 10%.",
      },
      {
        name: "Clockwork Spark",
        type: "4th Ascension Passive",
        description: "Triggering reactions restores 5 Energy to all party members.",
      },
      {
        name: "Toymaker's Wonder",
        type: "Utility Passive",
        description: "Crafting toys and gadgets yields a 10% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Wind-up Key', effect: 'Skill cooldown reduced by 2s.' },
      { level: 2, name: 'Pop-up Castle', effect: 'Burst increases party member ATK by 20%.' },
      { level: 3, name: 'Toybox Surprise', effect: 'Increases the Level of Clockwork Clocktower Spring by 3.' },
      { level: 4, name: 'Paper Soldiers', effect: 'Shields party members with 15% Max HP barrier upon casting Burst.' },
      { level: 5, name: 'Origami Skies', effect: 'Increases the Level of Fairytale Symphony by 3.' },
      { level: 6, name: 'Eternal Fairytale', effect: 'Manekin gains 60% CRIT DMG and causes toy explosions on hit.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Favonius Sword', 'Sacrificial Sword', 'The Dockhand\'s Assistant'],
      bestArtifacts: ['Noblesse Oblige', 'Golden Troupe'],
      mainStats: {
        sands: 'Energy Recharge',
        goblet: 'ATK% or HP%',
        circlet: 'CRIT Rate',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'ATK%', 'Elemental Mastery'],
    }
  }
];
