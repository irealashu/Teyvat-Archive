import { Character } from '../../types';

export const SUMERU_CHARACTERS: Character[] = [
  {
    id: 'nahida',
    name: 'Nahida',
    title: 'Physic of Purity',
    element: 'Dendro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Sumeru',
    affiliation: 'Sanctuary of Surasthana',
    birthday: 'October 27',
    constellationName: 'Sapientia Oromasdis',
    description: 'Lesser Lord Kusanali, the current Dendro Archon of Sumeru. Deeply caring and endlessly wise, she strives to be a worthy god for her people.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Nahida.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Nahida.png',
    stats: {
      hpBase: 10331,
      atkBase: 299,
      defBase: 630,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '115.2',
    },
    skills: [
      {
        name: "Akara",
        type: "Normal Attack",
        description: "Performs up to 4 attacks that deal Dendro DMG to opponents in front of her.",
      },
      {
        name: "All Schemes to Know",
        type: "Elemental Skill",
        description: "Sends forth karmic bonds of wood and tree, dealing AoE Dendro DMG and marking up to 8 opponents with the Seed of Skandha to unleash Tri-Karma Purification upon reactions.",
      },
      {
        name: "Illusory Heart",
        type: "Elemental Burst",
        description: "Manifests the Court of Dreams and expands the Shrine of Maya, granting team buffs to Tri-Karma Purification based on the Elemental Types (Pyro, Electro, Hydro) present in party.",
      },
      {
        name: "Compassion Illuminated",
        type: "1st Ascension Passive",
        description: "When unleashing Illusory Heart, the Shrine of Maya will gain the following effects: The Elemental Mastery of the active character within the field will be increased by 25% of the Elemental Mastery of the party member with the highest EM (max 250 EM).",
      },
      {
        name: "Awakening Elucidated",
        type: "4th Ascension Passive",
        description: "Each point of Nahida's Elemental Mastery beyond 200 will grant 0.1% Bonus DMG and 0.03% CRIT Rate to Tri-Karma Purification from All Schemes to Know (max 80% DMG and 24% CRIT Rate).",
      },
      {
        name: "On All Things Meditated",
        type: "Utility Passive",
        description: "Nahida can use All Schemes to Know to interact with some harvestable items within a fixed AoE and listen to the inner thoughts of Sumeru NPCs.",
      },
    ],
    constellations: [
      { level: 1, name: 'The Seed of Stored Knowledge', effect: 'When the Shrine of Maya is unleashed, party member element counts are considered as having 1 additional Pyro, Electro, and Hydro character.' },
      { level: 2, name: 'The Root of All Fullness', effect: 'Burning, Bloom, Hyperbloom, and Burgeon DMG can score CRIT Hits (fixed 20% CRIT Rate, 100% CRIT DMG). Quicken, Aggravate, and Spread decrease DEF by 30% for 8s.' },
      { level: 3, name: 'The Shoot of Conscious Attainment', effect: 'Increases the Level of All Schemes to Know by 3.' },
      { level: 4, name: 'The Stem of Manifest Inference', effect: 'Nahida\'s Elemental Mastery increases by up to 160 based on the number of opponents marked by Seed of Skandha.' },
      { level: 5, name: 'The Leaves of Enlightening Speech', effect: 'Increases the Level of Illusory Heart by 3.' },
      { level: 6, name: 'The Fruit of Reason\'s Culmination', effect: 'After using Burst, Nahida\'s Normal Attacks unleash Karmic Oblivion on marked targets, dealing 200% ATK + 400% EM as Dendro DMG.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['A Thousand Floating Dreams', 'Kagura\'s Verity', 'The Widsith', 'Sacrificial Fragments'],
      bestArtifacts: ['Deepwood Memories', 'Gilded Dreams'],
      mainStats: {
        sands: 'Elemental Mastery',
        goblet: 'Dendro DMG Bonus or Elemental Mastery',
        circlet: 'CRIT Rate or Elemental Mastery'
      },
      subStats: ['Elemental Mastery', 'CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%']
    }
  },
  {
    id: 'alhaitham',
    name: 'Alhaitham',
    title: 'Admonishing Instruction',
    element: 'Dendro',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Sumeru',
    affiliation: 'Sumeru Akademiya (Haravatat)',
    birthday: 'February 11',
    constellationName: 'Vultur Volans',
    description: 'The Scribe of the Sumeru Akademiya, a man of immense intellect who cherishes living an ordinary life governed by logic and pragmatism.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Alhatham.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Alhatham.png',
    stats: {
      hpBase: 13348,
      atkBase: 313,
      defBase: 782,
      ascensionStat: 'Dendro DMG Bonus',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Abductive Reasoning",
        type: "Normal Attack",
        description: "Performs up to 5 rapid strikes.",
      },
      {
        name: "Universality: An Elaboration on Form",
        type: "Elemental Skill",
        description: "Rushes forward, dealing Dendro DMG and generating Chisel-Light Mirrors; mirrors infuse attacks with Dendro and coordinate Projection Attacks.",
      },
      {
        name: "Particular Field: Fetters of Phenomena",
        type: "Elemental Burst",
        description: "Creates a Particular Binding Field and unleashes several instances of AoE Dendro DMG; consumes and generates Chisel-Light Mirrors based on mirrors present.",
      },
      {
        name: "Four-Causal Correction",
        type: "1st Ascension Passive",
        description: "When Alhaitham's Charged or Plunging Attacks hit opponents, they will generate 1 Chisel-Light Mirror (once every 12s).",
      },
      {
        name: "Mysteries Laid Bare",
        type: "4th Ascension Passive",
        description: "Each point of Alhaitham's Elemental Mastery will increase the DMG dealt by Projection Attacks and Particular Field: Fetters of Phenomena by 0.1% (max 100%).",
      },
      {
        name: "Law of Reductive Overdetermination",
        type: "Utility Passive",
        description: "When Alhaitham crafts Weapon Upgrade Materials, he has a 10% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Intuition', effect: 'When a Projection Attack hits an opponent, decreases Skill CD by 1.2s (every 1s).' },
      { level: 2, name: 'Debate', effect: 'Generating Chisel-Light Mirrors increases Alhaitham\'s Elemental Mastery by 50 for 8s (up to 4 stacks).' },
      { level: 3, name: 'Negation', effect: 'Increases the Level of Universality: An Elaboration on Form by 3.' },
      { level: 4, name: 'Elucidation', effect: 'Unleashing Burst buffs party Elemental Mastery by 30 for each mirror consumed, and grants Alhaitham 10% Dendro DMG bonus for each mirror generated.' },
      { level: 5, name: 'Sagacity', effect: 'Increases the Level of Particular Field: Fetters of Phenomena by 3.' },
      { level: 6, name: 'Structuring', effect: 'If generating mirrors exceeds max capacity, increases CRIT Rate by 10% and CRIT DMG by 70% for 6s.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Light of Foliar Incision', 'Mistsplitter Reforged', 'Primordial Jade Cutter', 'Iron Sting'],
      bestArtifacts: ['Gilded Dreams', 'Deepwood Memories'],
      mainStats: {
        sands: 'Elemental Mastery',
        goblet: 'Dendro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'Energy Recharge', 'ATK%']
    }
  },
  {
    id: 'wanderer',
    name: 'Wanderer',
    title: 'Eons Adrift',
    element: 'Anemo',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Sumeru',
    affiliation: 'None / Vahumana',
    birthday: 'January 3',
    constellationName: 'Peregrinus',
    description: 'The former Sixth Fatui Harbinger Scaramouche, reborn anew after resetting his Irminsul records. He soars through the sky with wind blades and untamed resolve.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Wanderer.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Wanderer.png',
    stats: {
      hpBase: 10164,
      atkBase: 328,
      defBase: 607,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Yuuban Meigen",
        type: "Normal Attack",
        description: "Performs up to 3 windblade attacks dealing Anemo DMG.",
      },
      {
        name: "Hanega: Song of the Wind",
        type: "Elemental Skill",
        description: "Concentrates the power of the winds to leap into the air, entering the Windfavored state with a custom Kuugoryoku Stamina bar and boosting Normal/Charged Attack AoE and DMG.",
      },
      {
        name: "Kyougen: Five Ceremonial Plays",
        type: "Elemental Burst",
        description: "Compresses the atmosphere into a singular vacuum that grinds all troubles away, dealing multiple instances of AoE Anemo DMG.",
      },
      {
        name: "Jade-Claimed Flower",
        type: "1st Ascension Passive",
        description: "If Hanega: Song of the Wind comes into contact with Hydro/Pyro/Cryo/Electro when cast, gains buffs: Hydro (+20 Kuugoryoku), Pyro (+30% ATK), Cryo (+20% CRIT Rate), Electro (Normal/Charged restore 0.8 Energy).",
      },
      {
        name: "Gales of Reverie",
        type: "4th Ascension Passive",
        description: "When Wanderer hits opponents with Kuugo: Fushoudan or Kuugo: Tofukai in Windfavored state, has a 16% chance to gain Descent: next sprint fires 4 wind arrows without consuming Kuugoryoku.",
      },
      {
        name: "Strum the Swirling Winds",
        type: "Utility Passive",
        description: "Mora expended when ascending Bows and Catalysts is decreased by 50%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Shoban: Ostentatious Plumage', effect: 'While in Windfavored state, attack speed increased by 10% and Wind Arrow DMG increased by 25% ATK.' },
      { level: 2, name: 'Niban: Moonlit Isle Amidst White Waves', effect: 'Burst DMG increases by 4% per Kuugoryoku point consumed (up to 200% bonus).' },
      { level: 3, name: 'Sanban: Moonflower Kusemai', effect: 'Increases the Level of Kyougen: Five Ceremonial Plays by 3.' },
      { level: 4, name: 'Yonban: Set Adrift into Spring', effect: 'Using Skill triggers up to 3 elemental absorptions from passive simultaneously, granting 1 additional random buff.' },
      { level: 5, name: 'Matsuban: Ancient Light From Afar', effect: 'Increases the Level of Hanega: Song of the Wind by 3.' },
      { level: 6, name: 'Shugen: The Melancholy of Matsukaze', effect: 'While hovering, Normal Attacks fire an extra wind blade dealing 40% ATK and restore Kuugoryoku points.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Tulaytullah\'s Remembrance', 'Lost Prayer to the Sacred Winds', 'The Widsith', 'Solar Pearl'],
      bestArtifacts: ['Desert Pavilion Chronicle', 'Shimenawa\'s Reminiscence', 'Echoes of an Offering'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Anemo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge']
    }
  },
  {
    id: 'cyno',
    name: 'Cyno',
    title: 'Judicator of Secrets',
    element: 'Electro',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Sumeru',
    affiliation: 'Temple of Silence / Sumeru Akademiya',
    birthday: 'June 23',
    constellationName: 'Lupus Aureus',
    description: 'The General Mahamatra of the Sumeru Akademiya, tasked with upholding the rules and hunting down errant researchers with an uncompromising canine spirit.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Cyno.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Cyno.png',
    stats: {
      hpBase: 12439,
      atkBase: 318,
      defBase: 859,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Invoker's Spear",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive spear strikes.",
      },
      {
        name: "Secret Rite: Chasmic Soulfarer",
        type: "Elemental Skill",
        description: "Performs a swift thrust, dealing Electro DMG; when in the Pactsworn Pathclearer state, unleashes a Mortuary Rite dealing thunderous AoE Electro DMG.",
      },
      {
        name: "Sacred Rite: Wolf's Swiftness",
        type: "Elemental Burst",
        description: "Calls upon a divine spirit to possess him, morphing into the Pactsworn Pathclearer; converts attacks to Electro DMG, boosts EM and interruption resistance, and triggers Judgments.",
      },
      {
        name: "Featherfall Judgment",
        type: "1st Ascension Passive",
        description: "When Cyno is in Pactsworn Pathclearer state, he enters Endseer stance at intervals. Activating Chasmic Soulfarer during Endseer increases its DMG by 35% and fires 3 Duststalker Bolts.",
      },
      {
        name: "Authority Over the Nine Bows",
        type: "4th Ascension Passive",
        description: "Cyno's DMG values are increased based on his Elemental Mastery: Pactsworn Pathclearer Normal Attack DMG by 150% of EM, and Duststalker Bolt DMG by 250% of EM.",
      },
      {
        name: "The Gift of Silence",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Sumeru Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Ordinance: Unceasing Vigil', effect: 'Using Burst increases Cyno\'s Normal Attack SPD by 20% for 10s and resets Judication timing.' },
      { level: 2, name: 'Ceremony: Homecoming of Spirits', effect: 'Normal Attacks hitting opponents increase Cyno\'s Electro DMG Bonus by 10% for 4s (up to 50%).' },
      { level: 3, name: 'Precept: Lawful Enforcer', effect: 'Increases the Level of Sacred Rite: Wolf\'s Swiftness by 3.' },
      { level: 4, name: 'Austerity: Forbidding Guard', effect: 'Triggering Electro reactions during Burst restores 3 Elemental Energy to all party members.' },
      { level: 5, name: 'Funerary Rite: The Passing of Starlight', effect: 'Increases the Level of Chasmic Soulfarer by 3.' },
      { level: 6, name: 'Raiment: Just Scales', effect: 'After using Burst or triggering Judication, Normal Attacks unleash additional Duststalker Bolts.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Staff of the Scarlet Sands', 'Staff of Homa', 'Primordial Jade Winged-Spear', 'White Tassel'],
      bestArtifacts: ['Gilded Dreams', 'Thundering Fury', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'Elemental Mastery or ATK%',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'Energy Recharge', 'ATK%']
    }
  },
  {
    id: 'nilou',
    name: 'Nilou',
    title: 'Dance of Lotuslight',
    element: 'Hydro',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Sumeru',
    affiliation: 'Zubayr Theater',
    birthday: 'December 3',
    constellationName: 'Lotos Somno',
    description: 'The graceful star performer of the Zubayr Theater, whose exquisite dances transform Dendro Cores into explosive Bountiful Cores.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Nilou.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Nilou.png',
    stats: {
      hpBase: 15185,
      atkBase: 230,
      defBase: 729,
      ascensionStat: 'HP%',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Dance of Samser",
        type: "Normal Attack",
        description: "Performs up to 3 rapid sword strikes.",
      },
      {
        name: "Dance of Haftkarsvar",
        type: "Elemental Skill",
        description: "Enters the Pirouette state; 3rd dance step transforms into Sword Dance (infusing Hydro slashes) or Whirling Steps (creating a Tranquil Water Veil water wheel around active character).",
      },
      {
        name: "Dance of Abzendegi: Distant Dreams, Listening Spring",
        type: "Elemental Burst",
        description: "Begins the dance of faraway dreams, springing a Lotus of Abzendegi that deals AoE Hydro DMG and inflicts Lingering Aeon to pop for secondary Hydro DMG.",
      },
      {
        name: "Court of Dancing Petals",
        type: "1st Ascension Passive",
        description: "When party consists exclusively of Dendro and Hydro characters, completing the third dance step of Dance of Haftkarsvar grants Golden Chalice's Bounty, converting Bloom cores into instant-exploding Bountiful Cores.",
      },
      {
        name: "Dreamy Dance of Aeons",
        type: "4th Ascension Passive",
        description: "Every 1,000 points of Nilou's Max HP above 30,000 will increase the DMG dealt by Bountiful Cores triggered by characters being buffed by Golden Chalice's Bounty by 9% (max 400%).",
      },
      {
        name: "White Jade Lotus",
        type: "Utility Passive",
        description: "When Perfect Cooking is achieved on an Adventure-related dish, Nilou has a 12% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Dance of the Waning Moon', effect: 'Sword Dance DMG increased by 65% and Tranquil Water Wheel duration extended by 6s.' },
      { level: 2, name: 'The Starry Skies Their Flowers Rain', effect: 'Characters under Golden Chalice\'s Bounty decrease enemies\' Hydro and Dendro RES by 35% for 10s upon dealing elemental DMG.' },
      { level: 3, name: 'Beguiling Shadow Step', effect: 'Increases the Level of Dance of Abzendegi by 3.' },
      { level: 4, name: 'Fricative Pulse', effect: 'The 3rd step of Pirouette restores 15 Energy to Nilou and increases Burst DMG by 50%.' },
      { level: 5, name: 'Twirling Light', effect: 'Increases the Level of Dance of Haftkarsvar by 3.' },
      { level: 6, name: 'Frostbreaker\'s Melody', effect: 'Nilou gains up to 30% CRIT Rate and 60% CRIT DMG based on her Max HP.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Key of Khaj-Nisut', 'Dockhand\'s Assistant', 'Primordial Jade Cutter', 'Iron Sting'],
      bestArtifacts: ['2pc Tenacity + 2pc Vourukasha\'s Glow', 'Flower of Paradise Lost'],
      mainStats: {
        sands: 'HP%',
        goblet: 'HP%',
        circlet: 'HP%'
      },
      subStats: ['HP%', 'Elemental Mastery', 'Energy Recharge', 'Flat HP']
    }
  },
  {
    id: 'tighnari',
    name: 'Tighnari',
    title: 'Verdant Strider',
    element: 'Dendro',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Sumeru',
    affiliation: 'Gandharva Ville / Forest Rangers',
    birthday: 'December 29',
    constellationName: 'Vulpes Zerda',
    description: 'The Chief Officer of the Forest Rangers and an Amurta botanist, safeguarding the tranquility of Avidya Forest with rapid cluster-shot arrows.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Tighnari.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Tighnari.png',
    stats: {
      hpBase: 10850,
      atkBase: 268,
      defBase: 630,
      ascensionStat: 'Dendro DMG Bonus',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Khanda Barrier-Buster",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive shots with a bow; Charge Level 2 fires Wreath Arrows that summon 4 Clusterbloom Arrows on hit.",
      },
      {
        name: "Vijnana-Phala Mine",
        type: "Elemental Skill",
        description: "Throws a Vijnana Stormheart that creates a Vijnana-Khanda Field creating illusions that taunt enemies and reduces Wreath Arrow charge time by 2.4s for 3 shots.",
      },
      {
        name: "Fashioner's Tanglevine Shaft",
        type: "Elemental Burst",
        description: "Fires 6 Tanglevine Shafts that track opponents and deal Dendro DMG; on hit, they create a secondary wave of tracking Tanglevine Shafts.",
      },
      {
        name: "Keen Sight",
        type: "1st Ascension Passive",
        description: "After Tighnari fires a Wreath Arrow, his Elemental Mastery is increased by 50 for 4s.",
      },
      {
        name: "Scholarly Blade",
        type: "4th Ascension Passive",
        description: "For every point of Elemental Mastery Tighnari possesses, his Charged Attack and Fashioner's Tanglevine Shaft DMG are increased by 0.06% (max 60%).",
      },
      {
        name: "Encyclopedic Knowledge",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Sumeru on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'From the Roots Grow the Shoots', effect: 'Tighnari\'s Charged Attack CRIT Rate is increased by 15%.' },
      { level: 2, name: 'Origins Known From the Stem', effect: 'When opponents are inside the Vijnana field, Tighnari gains 20% Dendro DMG bonus.' },
      { level: 3, name: 'Fortunes Read Amongst the Branches', effect: 'Increases the Level of Fashioner\'s Tanglevine Shaft by 3.' },
      { level: 4, name: 'Withering Glimpsed in the Leaves', effect: 'Using Burst increases all party members\' Elemental Mastery by up to 120.' },
      { level: 5, name: 'Comprehension Amidst the Flowers', effect: 'Increases the Level of Vijnana-Phala Mine by 3.' },
      { level: 6, name: 'Karma Adjudged From the Leaden Fruit', effect: 'Wreath Arrow charging time reduced by 0.9s and spawns 1 additional Clusterbloom Arrow dealing 150% ATK.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Hunter\'s Path', 'Aqua Simulacra', 'The First Great Magic', 'Slingshot'],
      bestArtifacts: ['Gilded Dreams', 'Wanderer\'s Troupe', 'Deepwood Memories'],
      mainStats: {
        sands: 'Elemental Mastery or ATK%',
        goblet: 'Dendro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'ATK%', 'Energy Recharge']
    }
  },
  {
    id: 'dehya',
    name: 'Dehya',
    title: 'Flame-Mane',
    element: 'Pyro',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Sumeru',
    affiliation: 'The Eremites (Blazing Beasts)',
    birthday: 'April 7',
    constellationName: 'Mantichora',
    description: 'A valiant and renowned mercenary of the Eremites in Sumeru, known as the "Flame-Mane," who absorbs team damage and strikes with blazing fiery fists.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Dehya.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Dehya.png',
    stats: {
      hpBase: 15675,
      atkBase: 265,
      defBase: 628,
      ascensionStat: 'HP%',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Sandstorm Assault",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive claymore strikes and martial hand combat.",
      },
      {
        name: "Molten Inferno",
        type: "Elemental Skill",
        description: "Creates a Fiery Sanctum field dealing AoE Pyro DMG, triggering coordinated Pyro attacks, increasing party interruption resistance, and mitigating damage taken via Redmane's Blood.",
      },
      {
        name: "Leonine Bite",
        type: "Elemental Burst",
        description: "Enters the Blazing Lioness state, automatically and continuously unleashing Flame-Mane's Fists that deal continuous Pyro DMG, concluding with an Incineration Drive kick.",
      },
      {
        name: "Unstinting Succor",
        type: "1st Ascension Passive",
        description: "Within 6s after Dehya retrieves the Fiery Sanctum field, she takes 60% less DMG from Redmane's Blood and grants party members Gold-Forged Form (complete interruption immunity).",
      },
      {
        name: "Stalwart and True",
        type: "4th Ascension Passive",
        description: "When her HP falls below 40%, Dehya will recover 20% of her Max HP immediately and 6% of her Max HP every 2s for the next 10s.",
      },
      {
        name: "The Sunlit Way",
        type: "Utility Passive",
        description: "Increases the Movement SPD of your party members by 10% during the day (06:00 to 18:00).",
      },
    ],
    constellations: [
      { level: 1, name: 'The Cleansing Flame', effect: 'Dehya\'s Max HP increased by 20%, and Skill and Burst DMG gain substantial scaling bonuses based on HP.' },
      { level: 2, name: 'The Sand-Blades Glittering', effect: 'Recasting Fiery Sanctum increases its duration by 6s and boosts coordinated attack DMG by 50%.' },
      { level: 3, name: 'A Rage Swift as Fire', effect: 'Increases the Level of Leonine Bite by 3.' },
      { level: 4, name: 'An Oath Abiding', effect: 'Fist hits during Burst restore 1.5 Energy to Dehya and recover 2.5% Max HP.' },
      { level: 5, name: 'The Alpha Unleashed', effect: 'Increases the Level of Molten Inferno by 3.' },
      { level: 6, name: 'The Burning Claws Cleaving', effect: 'Burst CRIT Rate increased by 10%; CRIT hits extend Burst duration and increase CRIT DMG by up to 60%.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Beacon of the Reed Sea', 'Wolf\'s Gravestone', 'The Bell', 'Favonius Greatsword'],
      bestArtifacts: ['Tenacity of the Millelith', 'Vourukasha\'s Glow', 'Emblem of Severed Fate'],
      mainStats: {
        sands: 'HP% or ATK%',
        goblet: 'Pyro DMG Bonus or HP%',
        circlet: 'CRIT Rate or HP%'
      },
      subStats: ['HP%', 'CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%']
    }
  },
  {
    id: 'candace',
    name: 'Candace',
    title: 'Golden Vow',
    element: 'Hydro',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Sumeru',
    affiliation: 'Aaru Village',
    birthday: 'May 3',
    constellationName: 'Sagitta Scutum',
    description: 'The protector of Aaru Village with amber heterochromatic eyes, bearing the lineage of King Deshret and wielding a shield and spear with graceful authority.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Candace_Icon.png',
    stats: {
      hpBase: 10875,
      atkBase: 212,
      defBase: 683,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Radiant Spear",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive spear strikes paired with shield bashes.",
      },
      {
        name: "Sacred Rite: Heron's Sanctum",
        type: "Elemental Skill",
        description: "Rushes forward with her shield or holds to form a barrier that absorbs damage based on Max HP, finishing with a jumping strike that deals Hydro DMG.",
      },
      {
        name: "Sacred Rite: Wagtail's Tide",
        type: "Elemental Burst",
        description: "Calls upon divine blessing dealing AoE Hydro DMG and conferring Prayer of the Crimson Crown: grants active characters Hydro Infusion and increases Normal Elemental DMG.",
      },
      {
        name: "Aegis of Crossed Arrows",
        type: "1st Ascension Passive",
        description: "If Candace is hit by an attack during Sacred Rite: Heron's Sanctum holding mode, the skill charges instantly.",
      },
      {
        name: "Celestial Dome of Sand",
        type: "4th Ascension Passive",
        description: "Characters affected by the Prayer of the Crimson Crown will deal 0.5% increased DMG to opponents for their Normal Attacks for every 1,000 points of Candace's Max HP.",
      },
      {
        name: "To Dawn's First Light",
        type: "Utility Passive",
        description: "Decreases climbing Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Returning Heiress of the Scarlet Sands', effect: 'The duration of Prayer of the Crimson Crown is increased by 3s.' },
      { level: 2, name: 'Moon-Piercing Brilliance', effect: 'When Heron\'s Sanctum hits opponents, Candace\'s Max HP is increased by 20% for 15s.' },
      { level: 3, name: 'Hunter\'s Supplication', effect: 'Increases the Level of Sacred Rite: Wagtail\'s Tide by 3.' },
      { level: 4, name: 'Sentinel Oath', effect: 'Shortens the Hold CD of Heron\'s Sanctum to be the same as the Tap CD.' },
      { level: 5, name: 'Heterochromatic Gaze', effect: 'Increases the Level of Sacred Rite: Heron\'s Sanctum by 3.' },
      { level: 6, name: 'The Overflow', effect: 'When active characters dealing Elemental Normal Attacks hit opponents, unleashes a tidal wave dealing 15% of Candace\'s Max HP as AoE Hydro DMG.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Favonius Lance', 'Black Tassel', 'Rightful Reward'],
      bestArtifacts: ['Noblesse Oblige', 'Emblem of Severed Fate', 'Tenacity of the Millelith'],
      mainStats: {
        sands: 'HP% or Energy Recharge',
        goblet: 'HP%',
        circlet: 'HP% or CRIT Rate',
      },
      subStats: ['HP%', 'Energy Recharge', 'Flat HP', 'CRIT Rate'],
    }
  },
  {
    id: 'collei',
    name: 'Collei',
    title: 'Sprout of Rebirth',
    element: 'Dendro',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Sumeru',
    affiliation: 'Gandharva Ville / Forest Rangers',
    birthday: 'May 8',
    constellationName: 'Leptailurus Cervarius',
    description: 'A trainee forest ranger active in Avidya Forest. Behind her enthusiastic words and actions lies a slightly introverted personality, guided by her mentor Tighnari and Amber.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/a/a2/Collei_Icon.png',
    stats: {
      hpBase: 9787,
      atkBase: 200,
      defBase: 601,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Supplicant's Bowmanship",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive shots with a bow.",
      },
      {
        name: "Floral Brush",
        type: "Elemental Skill",
        description: "Deploys a Floral Ring that slices through targets dealing Dendro DMG as it flies out and returns.",
      },
      {
        name: "Trump-Card Kitty",
        type: "Elemental Burst",
        description: "Tosses a Cuilein-Anbar doll that explodes into a Cuilein-Anbar Zone, dealing continuous AoE Dendro DMG.",
      },
      {
        name: "Floral Sidewinder",
        type: "1st Ascension Passive",
        description: "If any party member triggers a Dendro-related reaction before the Floral Ring returns, grants Sprout effect dealing 40% ATK as Dendro DMG.",
      },
      {
        name: "The Languid Wood",
        type: "4th Ascension Passive",
        description: "When a character within the Cuilein-Anbar Zone triggers a Dendro reaction, the zone's duration is increased by 1s (max 3s).",
      },
      {
        name: "Gliding Master",
        type: "Utility Passive",
        description: "Decreases gliding Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Deepwood Patrol', effect: 'When off-field, Collei\'s Energy Recharge is increased by 20%.' },
      { level: 2, name: 'Through Hill and Copse', effect: 'From using Floral Brush, grants the Sprout effect, which deals 40% ATK as Dendro DMG to nearby opponents.' },
      { level: 3, name: 'Scent of Summer', effect: 'Increases the Level of Floral Brush by 3.' },
      { level: 4, name: 'Gift of the Woods', effect: 'Using Trump-Card Kitty increases all nearby characters\' Elemental Mastery by 60 for 12s.' },
      { level: 5, name: 'All Embers', effect: 'Increases the Level of Trump-Card Kitty by 3.' },
      { level: 6, name: 'Forest of Falling Arrows', effect: 'When the Floral Ring hits, it will create a miniature Cuilein-Anbar that deals 200% ATK as Dendro DMG.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Elegy for the End', 'The Stringless', 'Favonius Warbow', 'Sacrificial Bow'],
      bestArtifacts: ['Deepwood Memories', 'Noblesse Oblige', 'Gilded Dreams'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Dendro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'ATK%'],
    }
  },
  {
    id: 'dori',
    name: 'Dori',
    title: 'Treasure of Dream Garden',
    element: 'Electro',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Sumeru',
    affiliation: 'The Palace of Alcazarzaray',
    birthday: 'December 21',
    constellationName: 'Magicae Lucerna',
    description: 'An intrepid merchant in Sumeru with an unfathomable wealth of rare treasures and an insatiable love for Mora. Commands an enchanted Jinni lamp.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/54/Dori_Icon.png',
    stats: {
      hpBase: 12397,
      atkBase: 223,
      defBase: 723,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Marvelous Sword-Dance (Modified)",
        type: "Normal Attack",
        description: "Performs up to 3 consecutive claymore strikes using her Jinni companion.",
      },
      {
        name: "Spirit-Warding Lamp: Troubleshooter Cannon",
        type: "Elemental Skill",
        description: "Directs the Spirit-Warding Lamp to fire Troubleshooter Shots; on hit, creates 2 After-Sales Service Rounds that track nearby opponents.",
      },
      {
        name: "Alcazarzaray's Exactitude",
        type: "Elemental Burst",
        description: "Summons the Jinni from the lamp to connect to the active character, continuously restoring HP, regenerating Energy, and dealing Electro DMG to opponents crossing the connector line.",
      },
      {
        name: "An Eye for Gold",
        type: "1st Ascension Passive",
        description: "After a character connected to the Jinni triggers Electro-Charged, Superconduct, Overloaded, Quicken, Aggravate, Hyperbloom, or Electro Swirl/Crystallize, the CD of Spirit-Warding Lamp is decreased by 1s.",
      },
      {
        name: "Compound Interest",
        type: "4th Ascension Passive",
        description: "When Troubleshooter Shots hit opponents, Dori will restore 5 Elemental Energy for every 100% Energy Recharge she possesses (max 15 Energy per skill).",
      },
      {
        name: "Unexpected Order",
        type: "Utility Passive",
        description: "Has a 25% chance to refund a portion of the crafting materials used when crafting Character and Weapon Enhancement Materials.",
      },
    ],
    constellations: [
      { level: 1, name: 'Additional Investment', effect: 'The number of After-Sales Service Rounds is increased by 1.' },
      { level: 2, name: 'Special Franchise', effect: 'When in combat, the Jinni fires a Toop from the connector\'s position, dealing 50% ATK as Electro DMG.' },
      { level: 3, name: 'Wonders Never Cease', effect: 'Increases the Level of Alcazarzaray\'s Exactitude by 3.' },
      { level: 4, name: 'Discretionary Supplement', effect: 'Connected character gains 50% Incoming Healing when HP < 50%, and 30% Energy Recharge when Energy < 50%.' },
      { level: 5, name: 'Value for Mora', effect: 'Increases the Level of Spirit-Parting Cannon by 3.' },
      { level: 6, name: 'Sprinkling Weight', effect: 'After using Skill, Dori gains Electro Infusion for 3s; Normal attacks hitting foes heal party for 4% Max HP.' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Sacrificial Greatsword', 'Favonius Greatsword', 'The Bell'],
      bestArtifacts: ['Noblesse Oblige', 'Ocean-Hued Clam', 'Maiden Beloved'],
      mainStats: {
        sands: 'Energy Recharge or HP%',
        goblet: 'HP%',
        circlet: 'Healing Bonus or HP%',
      },
      subStats: ['Energy Recharge', 'HP%', 'Flat HP'],
    }
  },
  {
    id: 'faruzan',
    name: 'Faruzan',
    title: 'Enigmatic Machinist',
    element: 'Anemo',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Sumeru',
    affiliation: 'Haravatat / Sumeru Akademiya',
    birthday: 'August 20',
    constellationName: 'Flabellum',
    description: 'A senior scholar from the Haravatat Darshan who solved an ancient desert mechanism and returned a century later, renowned as the ultimate Anemo buffer and mechanism maestro.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b2/Faruzan_Icon.png',
    stats: {
      hpBase: 9570,
      atkBase: 196,
      defBase: 628,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Parthian Shot",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive shots with a bow.",
      },
      {
        name: "Wind Realm of Nasamjnin",
        type: "Elemental Skill",
        description: "Deploys a polyhedron that deals AoE Anemo DMG and enters the Manifest Gale state; next Aimed Shot fires a Hurricane Arrow that creates a Pressurized Collapse vortex.",
      },
      {
        name: "The Wind's Secret Ways",
        type: "Elemental Burst",
        description: "Deploys a Dazzling Polyhedron that travels along a triangular path, continuously unleashing Whirlwind Pulses that decrease enemy Anemo RES and buff party Anemo DMG.",
      },
      {
        name: "Impetuous Flow",
        type: "1st Ascension Passive",
        description: "When Faruzan is in the Manifest Gale state, the time required to charge a shot is decreased by 60%, and Pressurized Collapse shreds enemy Anemo RES.",
      },
      {
        name: "Lost Wisdom of the Seven Caverns",
        type: "4th Ascension Passive",
        description: "When characters affected by Prayer of the Wind deal Anemo DMG, their DMG is increased by 32% of Faruzan's Base ATK (once every 0.8s).",
      },
      {
        name: "Tomes Light the Path",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Sumeru Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Truth by Any Means', effect: 'Faruzan can fire up to 2 Hurricane Arrows using fully charged Aimed Shots while in Manifest Gale.' },
      { level: 2, name: 'Overzealous Intellect', effect: 'The duration of the Dazzling Polyhedron is increased by 6s.' },
      { level: 3, name: 'Spirit-Orchard Stroll', effect: 'Increases the Level of Wind Realm of Nasamjnin by 3.' },
      { level: 4, name: 'Divine Comprehension', effect: 'Vortex restores 2-4 Energy to Faruzan based on opponents hit.' },
      { level: 5, name: 'Wonderland of Rumination', effect: 'Increases the Level of The Wind\'s Secret Ways by 3.' },
      { level: 6, name: 'The Wondrous Path of Truth', effect: 'Characters affected by Prayerful Wind gain 40% Anemo CRIT DMG; when active characters deal DMG, they fire a Hurricane Arrow vortex (CD: 3s).' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Favonius Warbow', 'Elegy for the End', 'Sacrificial Bow'],
      bestArtifacts: ['Viridescent Venerer', 'Noblesse Oblige', 'Tenacity of the Millelith (C6)'],
      mainStats: {
        sands: 'Energy Recharge',
        goblet: 'Anemo DMG Bonus',
        circlet: 'CRIT Rate',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'ATK%'],
    }
  },
  {
    id: 'kaveh',
    name: 'Kaveh',
    title: 'Empyrean Reflection',
    element: 'Dendro',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Sumeru',
    affiliation: 'Kshahrewar / Sumeru Akademiya',
    birthday: 'July 9',
    constellationName: 'Paradisaea',
    description: 'A renowned architect from Sumeru\'s Kshahrewar Darshan who designed the magnificent Palace of Alcazarzaray. Accompanied by his intelligent automated toolbox, Mehrak.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Kaveh_Icon.png',
    stats: {
      hpBase: 11962,
      atkBase: 234,
      defBase: 751,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '96',
    },
    skills: [
      {
        name: "Schematic Setup",
        type: "Normal Attack",
        description: "Uses Mehrak to perform up to 4 consecutive strikes.",
      },
      {
        name: "Artistic Ingenuity",
        type: "Elemental Skill",
        description: "Uses Mehrak's mapping ability to scan the area, dealing AoE Dendro DMG and causing all Dendro Cores within the scanning area to immediately burst.",
      },
      {
        name: "Painted Dome",
        type: "Elemental Burst",
        description: "Creates a cubic mapped space dealing AoE Dendro DMG, infusing attacks with Dendro, increasing attack AoE, and increasing party Bloom Core rupture DMG.",
      },
      {
        name: "An Architect's Undertaking",
        type: "1st Ascension Passive",
        description: "When Dendro Cores hit Kaveh, he recovers HP equal to 300% of his Elemental Mastery (once every 0.5s).",
      },
      {
        name: "A Craftsman's Curious Conceptions",
        type: "4th Ascension Passive",
        description: "During Painted Dome, hitting opponents with Normal, Charged, or Plunging Attacks increases Kaveh's Elemental Mastery by 25 (max 4 stacks).",
      },
      {
        name: "The Art of Budgeting",
        type: "Utility Passive",
        description: "When crafting Landscape, Building, and Courtyard furnishings, 100% of one material used is refunded.",
      },
    ],
    constellations: [
      { level: 1, name: 'Sublime Salutations', effect: 'Using Skill increases Dendro RES by 50% and Incoming Healing by 25% for 3s.' },
      { level: 2, name: 'Grace of Convergence', effect: 'During Painted Dome, Kaveh\'s Normal Attack SPD is increased by 15%.' },
      { level: 3, name: 'Proffered Golden Ratio', effect: 'Increases the Level of Painted Dome by 3.' },
      { level: 4, name: 'Feast of Hundred Pillars', effect: 'Dendro Cores created by Kaveh\'s Bloom reactions deal 60% more DMG upon detonation.' },
      { level: 5, name: 'Storage of Antiquity', effect: 'Increases the Level of Artistic Ingenuity by 3.' },
      { level: 6, name: 'Fairyland of Ideals', effect: 'During Painted Dome, Kaveh\'s Normal attacks trigger a Light of Pairidaezah dealing 61.8% ATK as AoE Dendro DMG and detonating cores.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Mailed Flower', 'Makhaira Aquamarine', 'Favonius Greatsword', 'Rainslasher'],
      bestArtifacts: ['Deepwood Memories', 'Flower of Paradise Lost', 'Gilded Dreams'],
      mainStats: {
        sands: 'Elemental Mastery or Energy Recharge',
        goblet: 'Dendro DMG Bonus or Elemental Mastery',
        circlet: 'Elemental Mastery or CRIT Rate',
      },
      subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'CRIT Rate'],
    }
  },
  {
    id: 'layla',
    name: 'Layla',
    title: 'Fantastical Evening Star',
    element: 'Cryo',
    weaponType: 'Sword',
    rarity: 4,
    region: 'Sumeru',
    affiliation: 'Rtawahist / Sumeru Akademiya',
    birthday: 'December 19',
    constellationName: 'Luscinia',
    description: 'A chronic sleep-deprived student of theoretical astrology at the Rtawahist Darshan. When she sleepwalks, an alternate confident persona protects her with resilient starlight shields.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Layla_Icon.png',
    stats: {
      hpBase: 11092,
      atkBase: 216,
      defBase: 655,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Sword of the Radiant Path",
        type: "Normal Attack",
        description: "Performs up to 3 rapid sword strikes.",
      },
      {
        name: "Nights of Formal Focus",
        type: "Elemental Skill",
        description: "Creates a Curtain of Slumber shield based on Max HP; while the shield is active, accumulates Night Stars that transform into homing Shooting Stars dealing Cryo DMG.",
      },
      {
        name: "Dream of the Star-Stream Shaker",
        type: "Elemental Burst",
        description: "Unleashes a Celestial Dreamsphere that continuously fires Starlight Slugs at opponents within an AoE, dealing Cryo DMG and generating Night Stars for the shield.",
      },
      {
        name: "Like Nascent Light",
        type: "1st Ascension Passive",
        description: "While the Curtain of Slumber is active, each time it gains a Night Star, the Deep Slumber effect is triggered: increases shield strength by 6% (max 4 stacks).",
      },
      {
        name: "Sweet Slumber Undisturbed",
        type: "4th Ascension Passive",
        description: "Shooting Stars fired by Nights of Formal Focus have their DMG increased by 1.5% of Layla's Max HP.",
      },
      {
        name: "Shadowy Dream-Signs",
        type: "Utility Passive",
        description: "When Layla crafts Character Talent Materials, she has a 10% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Fortress of Fantasy', effect: 'Increases shield DMG Absorption by 20% and grants shields to nearby co-op party members.' },
      { level: 2, name: 'Light\'s Remit', effect: 'When Shooting Stars hit opponents, each star restores 1 Energy to Layla.' },
      { level: 3, name: 'Secrets of the Night', effect: 'Increases the Level of Nights of Formal Focus by 3.' },
      { level: 4, name: 'Starry Illumination', effect: 'When Shooting Stars fire, grants all party members Dawn Star, increasing Normal and Charged Attack DMG by 5% of Layla\'s Max HP.' },
      { level: 5, name: 'Stream of Consciousness', effect: 'Increases the Level of Dream of the Star-Stream Shaker by 3.' },
      { level: 6, name: 'Radiant Soulfire', effect: 'Shooting Stars deal 40% more DMG and Starlight Slugs deal 40% more DMG; Night Star generation interval reduced by 20%.' }
    ],
    build: {
      role: 'Shielder',
      bestWeapons: ['Key of Khaj-Nisut', 'Favonius Sword', 'The Dockhand\'s Assistant', 'Sacrificial Sword'],
      bestArtifacts: ['Tenacity of the Millelith', 'Noblesse Oblige'],
      mainStats: {
        sands: 'HP%',
        goblet: 'HP%',
        circlet: 'HP% or CRIT Rate',
      },
      subStats: ['HP%', 'Energy Recharge', 'Flat HP', 'CRIT Rate'],
    }
  },
  {
    id: 'sethos',
    name: 'Sethos',
    title: 'Wisdom\'s Measure',
    element: 'Electro',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Sumeru',
    affiliation: 'Temple of Silence',
    birthday: 'May 31',
    constellationName: 'Basileus Delta',
    description: 'The envoy and heir to the Temple of Silence in the Sumeru desert, wielding high-velocity lightning-charged piercing arrows powered by Hermanubis.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/9/90/Sethos_Icon.png',
    stats: {
      hpBase: 9787,
      atkBase: 227,
      defBase: 560,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '96',
    },
    skills: [
      {
        name: "Royal Reed Bowmanship",
        type: "Normal Attack",
        description: "Performs up to 3 consecutive shots with a bow; Charge Level 2 fires Shadowpiercing Shot that pierces enemies dealing Electro DMG by consuming Energy.",
      },
      {
        name: "Ancient Rite: The Thundering Sands",
        type: "Elemental Skill",
        description: "Gathers the thunderous sands to deal AoE Electro DMG and quickly retreat; triggering Electro reactions restores Sethos's Energy.",
      },
      {
        name: "Secret Rite: Twilight's Shadow Piercer",
        type: "Elemental Burst",
        description: "Enters the Twilight Meditation state, converting Normal Attacks into piercing Dusk Bolts that deal Electro DMG based on Sethos's Elemental Mastery.",
      },
      {
        name: "Black Kite's Enigma",
        type: "1st Ascension Passive",
        description: "When aiming a Shadowpiercing Shot, each point of Sethos's current Energy decreases the charge time by 0.0285s.",
      },
      {
        name: "The Sand King's Boon",
        type: "4th Ascension Passive",
        description: "Sethos gains the Scorching Sandshade effect, increasing Shadowpiercing Shot DMG by 700% of his Elemental Mastery.",
      },
      {
        name: "Thoth's Revelation",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Sumeru on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Shutters in the Temple of Silence', effect: 'The CRIT Rate of Shadowpiercing Shot is increased by 15%.' },
      { level: 2, name: 'Papyrus of Silent Truth', effect: 'Gaining Energy or triggering reactions increases Electro DMG by up to 30%.' },
      { level: 3, name: 'Ode to the Desert Ode', effect: 'Increases the Level of Royal Reed Bow by 3.' },
      { level: 4, name: 'Benefaction of Feather and Falcon', effect: 'When Shadowpiercing Shot or Dusk Bolt hits 2+ opponents, party members gain 80 EM for 10s.' },
      { level: 5, name: 'Record of the Silent Chamber', effect: 'Increases the Level of Secret Rite: Twilight\'s Shadow by 3.' },
      { level: 6, name: 'Pylon of Hermetic Radiance', effect: 'Firing Shadowpiercing Shot refunds the Energy consumed if it hits an opponent (CD: 15s).' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Hunter\'s Path', 'The First Great Magic', 'Slingshot', 'Cloudforged'],
      bestArtifacts: ['Wanderer\'s Troupe', 'Gilded Dreams'],
      mainStats: {
        sands: 'Elemental Mastery',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'Energy Recharge', 'ATK%'],
    }
  }
];
