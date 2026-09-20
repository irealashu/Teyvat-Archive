import { Character } from '../../types';

export const LIYUE_CHARACTERS: Character[] = [
  {
    id: 'zhongli',
    name: 'Zhongli',
    title: 'Vago Mundo',
    element: 'Geo',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Wangsheng Funeral Parlor / Adepti',
    birthday: 'December 31',
    constellationName: 'Lapis Dei',
    description: 'A consultant of the Wangsheng Funeral Parlor, possessed of vast knowledge regarding all manner of things. True identity is Morax, the Geo Archon Rex Lapis.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Zhongli.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Zhongli.png',
    stats: {
      hpBase: 14695,
      atkBase: 251,
      defBase: 738,
      ascensionStat: 'Geo DMG Bonus',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Rain of Stone",
        type: "Normal Attack",
        description: "Performs up to 6 rapid spear strikes, kicking the spear forward in a spinning flurry.",
      },
      {
        name: "Dominus Lapidis",
        type: "Elemental Skill",
        description: "Commands the earth to create a Stone Stele that resonates with other Geo constructs. Holding summons the impenetrable Jade Shield and causes Geo AoE DMG.",
      },
      {
        name: "Planet Befall",
        type: "Elemental Burst",
        description: "Brings a falling meteor down upon the earth, dealing massive AoE Geo DMG and applying Petrification to opponents.",
      },
      {
        name: "Resonant Waves",
        type: "1st Ascension Passive",
        description: "When the Jade Shield takes DMG, it Fortifies: Fortified characters gain 5% Shield Strength, stacking up to 5 times (25% Shield Strength).",
      },
      {
        name: "Dominance of Earth",
        type: "4th Ascension Passive",
        description: "Zhongli deals bonus DMG based on his Max HP: Normal/Charged/Plunge +1.39% Max HP; Stone Stele/Resonance +1.9% Max HP; Planet Befall +33% Max HP.",
      },
      {
        name: "Arcanum of Archaic",
        type: "Utility Passive",
        description: "Refunds 15% of the ores used when crafting Polearm-type weapons.",
      },
    ],
    constellations: [
      { level: 1, name: 'Rock, the Backbone of Earth', effect: 'Increases the maximum number of Stone Steles created by Dominus Lapidis that may exist simultaneously to 2.' },
      { level: 2, name: 'Stone, the Cradle of Jade', effect: 'Planet Befall grants nearby characters on the field a Jade Shield when it descends.' },
      { level: 3, name: 'Jade, Shimmering through Darkness', effect: 'Increases the Level of Dominus Lapidis by 3.' },
      { level: 4, name: 'Topaz, Unbreakable and Fearless', effect: 'Increases Planet Befall\'s AoE by 20% and increases Petrification duration by 2s.' },
      { level: 5, name: 'Lazuli, Herald of the Order', effect: 'Increases the Level of Planet Befall by 3.' },
      { level: 6, name: 'Chrysos, Bounty of Dominator', effect: 'When Jade Shield takes DMG, 40% of that incoming DMG is converted to HP for the current character.' }
    ],
    build: {
      role: 'Shielder',
      bestWeapons: ['Staff of Homa', 'Black Tassel', 'Favonius Lance', 'Vortex Vanquisher'],
      bestArtifacts: ['Tenacity of the Millelith', 'Noblesse Oblige'],
      mainStats: {
        sands: 'HP%',
        goblet: 'HP% or Geo DMG Bonus',
        circlet: 'HP% or CRIT Rate'
      },
      subStats: ['HP%', 'Flat HP', 'CRIT Rate', 'Energy Recharge']
    }
  },
  {
    id: 'hu-tao',
    name: 'Hu Tao',
    title: 'Fragrance in Thaw',
    element: 'Pyro',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Wangsheng Funeral Parlor',
    birthday: 'July 15',
    constellationName: 'Papilio Charontis',
    description: 'The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age and is famous for her lively, eccentric personality.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Hutao.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Hutao.png',
    stats: {
      hpBase: 15552,
      atkBase: 106,
      defBase: 876,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Secret Spear of Wangsheng",
        type: "Normal Attack",
        description: "Performs up to 6 rapid spear strikes.",
      },
      {
        name: "Guide to Afterlife",
        type: "Elemental Skill",
        description: "Consumes 30% current HP to enter Paramita Papilio state: converts ATK based on Max HP, infuses attacks with Pyro, and applies Blood Blossom.",
      },
      {
        name: "Spirit Soother",
        type: "Elemental Burst",
        description: "Commands a blazing spirit to attack, dealing large AoE Pyro DMG and regenerating Hu Tao's HP (increased if HP is ≤50%).",
      },
      {
        name: "Flutter By",
        type: "1st Ascension Passive",
        description: "When a Paramita Papilio state activated by Guide to Afterlife ends, all allies in the party (excluding Hu Tao) have their CRIT Rate increased by 12% for 8s.",
      },
      {
        name: "Sanguine Rouge",
        type: "4th Ascension Passive",
        description: "When Hu Tao's HP is equal to or less than 50%, her Pyro DMG Bonus is increased by 33%.",
      },
      {
        name: "The More the Merrier",
        type: "Utility Passive",
        description: "When Hu Tao cooks a dish perfectly, she has an 18% chance to receive an additional \"Suspicious\" dish of the same type.",
      },
    ],
    constellations: [
      { level: 1, name: 'Crimson Bouquet', effect: 'While in a Paramita Papilio state activated by Guide to Afterlife, Hu Tao\'s Charged Attacks do not consume Stamina.' },
      { level: 2, name: 'Ominous Rainfall', effect: 'Increases the Blood Blossom DMG by an amount equal to 10% of Hu Tao\'s Max HP at the time the effect is applied.' },
      { level: 3, name: 'Lingering Carmine', effect: 'Increases the Level of Guide to Afterlife by 3.' },
      { level: 4, name: 'Garden of Eternal Rest', effect: 'Upon defeating an opponent affected by a Blood Blossom, all nearby party members\' CRIT Rate is increased by 12% for 15s.' },
      { level: 5, name: 'Floral Incense', effect: 'Increases the Level of Spirit Soother by 3.' },
      { level: 6, name: 'Butterfly\'s Embrace', effect: 'When HP drops below 25% or takes lethal damage, Hu Tao will not fall. For the next 10s, all Elemental and Physical RES increased by 200%, and CRIT Rate increased by 100%.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Staff of Homa', 'Dragon\'s Bane', 'Ballad of the Fjords', 'Deathmatch'],
      bestArtifacts: ['Crimson Witch of Flames', 'Shimenawa\'s Reminiscence', 'Marechaussee Hunter'],
      mainStats: {
        sands: 'HP% or Elemental Mastery',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'HP%', 'Energy Recharge']
    }
  },
  {
    id: 'yelan',
    name: 'Yelan',
    title: 'Valley Orchid',
    element: 'Hydro',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Yanshang Teahouse / Ministry of Civil Affairs',
    birthday: 'April 20',
    constellationName: 'Umbrabilis Orchis',
    description: 'A mysterious person who claims to work for the Ministry of Civil Affairs, but is actually a master of intelligence and espionage answering directly to Ningguang.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Yelan.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Yelan.png',
    stats: {
      hpBase: 14450,
      atkBase: 244,
      defBase: 547,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Stealthy Bowshot",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive bow shots; entering Breakthrough state allows a rapid Breakthrough Barb charged shot dealing AoE Hydro DMG based on Max HP.",
      },
      {
        name: "Lingering Lifeline",
        type: "Elemental Skill",
        description: "Fires off a Lifeline that trails behind her as she dashes rapidly, entangling and marking opponents to explode for Hydro DMG based on Max HP.",
      },
      {
        name: "Depth-Clarion Dice",
        type: "Elemental Burst",
        description: "Deals AoE Hydro DMG and initiates an Exquisite Throw dice that coordinates with active character Normal Attacks and Lifeline explosions.",
      },
      {
        name: "Turn Control",
        type: "1st Ascension Passive",
        description: "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%.",
      },
      {
        name: "Adapt With Ease",
        type: "4th Ascension Passive",
        description: "So long as an Exquisite Throw is in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second (max 50%).",
      },
      {
        name: "Necessary Calculation",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Enter the Plotters', effect: 'Lingering Lifeline gains 1 additional charge.' },
      { level: 2, name: 'Taking All Comers', effect: 'Exquisite Throw launches an extra water arrow that deals 14% of Yelan\'s Max HP as Hydro DMG.' },
      { level: 3, name: 'Beware the Trickster\'s Dice', effect: 'Increases the Level of Depth-Clarion Dice by 3.' },
      { level: 4, name: 'Bait-and-Switch', effect: 'Increases all party members\' Max HP by up to 40% based on opponents marked by Lifeline.' },
      { level: 5, name: 'Dealer\'s Sleight', effect: 'Increases the Level of Lingering Lifeline by 3.' },
      { level: 6, name: 'Winner Takes All', effect: 'After using Burst, Yelan\'s next 5 Normal Attacks fire special Breakthrough Barbs dealing 156% of normal barb damage.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Aqua Simulacra', 'Elegy for the End', 'Favonius Warbow', 'Sacrificial Bow'],
      bestArtifacts: ['Emblem of Severed Fate'],
      mainStats: {
        sands: 'Energy Recharge or HP%',
        goblet: 'Hydro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'HP%']
    }
  },
  {
    id: 'xiao',
    name: 'Xiao',
    title: 'Vigilant Yaksha',
    element: 'Anemo',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Liyue Adepti (Alatus)',
    birthday: 'April 17',
    constellationName: 'Alatus Nemeseos',
    description: 'A yaksha adeptus who defends Liyue. Also heralded as the "Conqueror of Demons" and "Vigilant Yaksha," bearing the heavy weight of karmic debt.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Xiao.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Xiao.png',
    stats: {
      hpBase: 12720,
      atkBase: 349,
      defBase: 799,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Whirlwind Thrust",
        type: "Normal Attack",
        description: "Performs up to 6 rapid spear strikes.",
      },
      {
        name: "Lemniscatic Wind Cycling",
        type: "Elemental Skill",
        description: "Xiao lunges forward, dealing Anemo DMG to opponents in his path; can be unleashed in mid-air with 2 charges.",
      },
      {
        name: "Bane of All Evil",
        type: "Elemental Burst",
        description: "Dons the Yaksha Mask, drastically increasing jumping ability, attack AoE, and attack DMG, converting attacks to Anemo while draining HP.",
      },
      {
        name: "Conqueror of Evil: Tamer of Demons",
        type: "1st Ascension Passive",
        description: "While under the effects of Bane of All Evil, all DMG dealt by Xiao increases by 5%. DMG increases by a further 5% for every 3s the ability persists (max 25%).",
      },
      {
        name: "Dissolution Eon: Heaven Fall",
        type: "4th Ascension Passive",
        description: "Using Lemniscatic Wind Cycling increases the DMG of subsequent uses of Lemniscatic Wind Cycling by 15% for 7s (max 3 stacks).",
      },
      {
        name: "Transcension: Gravity Defier",
        type: "Utility Passive",
        description: "Decreases climbing Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Dissolution Eon: Destroyer of Worlds', effect: 'Increases Lemniscatic Wind Cycling\'s charges by 1.' },
      { level: 2, name: 'Annihilation Eon: Blossom of Kaleidos', effect: 'When off-field, Xiao\'s Energy Recharge is increased by 25%.' },
      { level: 3, name: 'Conqueror of Evil: Wrath Deity', effect: 'Increases the Level of Lemniscatic Wind Cycling by 3.' },
      { level: 4, name: 'Transcension: Extinction of Suffering', effect: 'When Xiao\'s HP falls below 50%, he gains a 100% DEF Bonus.' },
      { level: 5, name: 'Evolution Eon: Origin of Ignorance', effect: 'Increases the Level of Bane of All Evil by 3.' },
      { level: 6, name: 'Conqueror of Evil: Guardian Yaksha', effect: 'While in Bane of All Evil, hitting 2 or more opponents with a Plunging Attack grants 1 charge of Skill and resets its cooldown for 1s.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Primordial Jade Winged-Spear', 'Staff of Homa', 'Calamity Queller', 'Deathmatch'],
      bestArtifacts: ['Vermillion Hereafter', 'Marechaussee Hunter', 'Desert Pavilion Chronicle'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Anemo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge']
    }
  },
  {
    id: 'ganyu',
    name: 'Ganyu',
    title: 'Plenilune Gaze',
    element: 'Cryo',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Yuehai Pavilion / Liyue Qixing',
    birthday: 'December 2',
    constellationName: 'Sinae Unicornis',
    description: 'The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins, gracefully wielding frostflake arrows.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Ganyu.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Ganyu.png',
    stats: {
      hpBase: 9797,
      atkBase: 335,
      defBase: 630,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Liutian Archery",
        type: "Normal Attack",
        description: "Performs up to 6 consecutive bow shots; Charge Level 2 fires Frostflake Arrows that bloom on hit to deal colossal AoE Cryo DMG.",
      },
      {
        name: "Trail of the Qilin",
        type: "Elemental Skill",
        description: "Leaves an Ice Lotus behind as Ganyu dashes backward, taunting enemies and blooming with AoE Cryo DMG when cast and destroyed.",
      },
      {
        name: "Celestial Shower",
        type: "Elemental Burst",
        description: "Coalesces a sacred Cryo Sacred Cryo Pearl to continuously rain down ice shards over a massive zone, dealing sustained AoE Cryo DMG.",
      },
      {
        name: "Undivided Heart",
        type: "1st Ascension Passive",
        description: "After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their resulting bloom effects is increased by 20% for 5s.",
      },
      {
        name: "Harmony between Heaven and Earth",
        type: "4th Ascension Passive",
        description: "Celestial Shower grants a 20% Cryo DMG Bonus to active party members within its AoE.",
      },
      {
        name: "Preserved for the Hunt",
        type: "Utility Passive",
        description: "Refunds 15% of the ores used when crafting Bow-type weapons.",
      },
    ],
    constellations: [
      { level: 1, name: 'Dew-Drinker', effect: 'Frostflake Arrow hits decrease opponents\' Cryo RES by 15% for 6s and regenerate 2 Energy for Ganyu.' },
      { level: 2, name: 'The Auspicious', effect: 'Trail of the Qilin gains 1 additional charge.' },
      { level: 3, name: 'Cloud-Strider', effect: 'Increases the Level of Celestial Shower by 3.' },
      { level: 4, name: 'Westward Sojourn', effect: 'Opponents standing within Celestial Shower take increased DMG up to 25%.' },
      { level: 5, name: 'The Merciful', effect: 'Increases the Level of Trail of the Qilin by 3.' },
      { level: 6, name: 'The Clement', effect: 'Using Trail of the Qilin causes the next Frostflake Arrow shot within 30s not to require charging.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Amos\' Bow', 'Aqua Simulacra', 'The First Great Magic', 'Prototype Crescent'],
      bestArtifacts: ['Wanderer\'s Troupe', 'Blizzard Strayer', 'Shimenawa\'s Reminiscence'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery']
    }
  },
  {
    id: 'xianyun',
    name: 'Xianyun',
    title: 'Passerine Herald',
    element: 'Anemo',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Mt. Aocang / Liyue Adepti',
    birthday: 'April 11',
    constellationName: 'Grus Serena',
    description: 'One of the Mighty and Illuminated Adepti of Jueyun Karst, Cloud Retainer. An inventive master who dwells in Liyue Harbor disguised as an eccentric auntie.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Xianyun.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Xianyun.png',
    stats: {
      hpBase: 10398,
      atkBase: 335,
      defBase: 588,
      ascensionStat: 'ATK%',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Word of Wind and Flower",
        type: "Normal Attack",
        description: "Performs up to 4 swirling wind strikes that deal Anemo DMG.",
      },
      {
        name: "White Clouds at Dawn",
        type: "Elemental Skill",
        description: "Enters Cloud Transfiguration state, executing up to 3 Skyladder leaps into the air and culminating in an explosive Driftcloud Wave plunge.",
      },
      {
        name: "Stars Gather at Dusk",
        type: "Elemental Burst",
        description: "Summons Starwicker bamboo bird automaton, healing the entire party and granting Adeptal Assistance which boosts jump heights and empowers Plunging Attacks.",
      },
      {
        name: "Galefeather Pursuit",
        type: "1st Ascension Passive",
        description: "Each opponent hit by Driftcloud Wave grants party members 4%/6%/8%/10% increased CRIT Rate on Plunging Attacks for 20s.",
      },
      {
        name: "Adept Breath",
        type: "4th Ascension Passive",
        description: "When Starwicker has Adeptal Assistance stacks, active character's Plunging Attack shockwave DMG is increased by 200% of Xianyun's ATK (max 9,000 bonus DMG).",
      },
      {
        name: "Aldermaster Form",
        type: "Utility Passive",
        description: "Decreases gliding Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Purifying Wind', effect: 'White Clouds at Dawn gains 1 additional charge.' },
      { level: 2, name: 'Aloof from the World', effect: 'After using Skill, Xianyun gains 20% ATK, and Adeptic Concealment Plunging buff limit is increased to 18,000.' },
      { level: 3, name: 'Creations of Star and Moon', effect: 'Increases the Level of Stars Gather at Dusk by 3.' },
      { level: 4, name: 'Mystery in the Milieu', effect: 'Skyladder hops heal all nearby party members based on Xianyun\'s ATK.' },
      { level: 5, name: 'Bellowing Beauty', effect: 'Increases the Level of White Clouds at Dawn by 3.' },
      { level: 6, name: 'Cloudstrider', effect: 'Using Skill increases Xianyun\'s CRIT DMG by up to 70%, and casting Burst removes Skill CD for 16s.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Crane\'s Echoing Call', 'Oathsworn Eye', 'Favonius Codex', 'Skyward Atlas'],
      bestArtifacts: ['Viridescent Venerer', 'Song of Days Past', 'Noblesse Oblige'],
      mainStats: {
        sands: 'ATK% or Energy Recharge',
        goblet: 'ATK%',
        circlet: 'ATK% or Healing Bonus'
      },
      subStats: ['ATK%', 'Energy Recharge', 'CRIT Rate', 'Flat ATK']
    }
  },
  {
    id: 'shenhe',
    name: 'Shenhe',
    title: 'Lonesome Transcendence',
    element: 'Cryo',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Mt. Aocang / Liyue Adepti',
    birthday: 'March 10',
    constellationName: 'Crista Doloris',
    description: 'An adepti disciple who grew up in the secluded mountains of Jueyun Karst. Bound by red ropes to quell her homicidal tendencies, she wields piercing icy talismans.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Shenhe.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Shenhe.png',
    stats: {
      hpBase: 12993,
      atkBase: 304,
      defBase: 830,
      ascensionStat: 'ATK%',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Dawnstar Piercer",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive spear strikes.",
      },
      {
        name: "Spring Spirit Summoning",
        type: "Elemental Skill",
        description: "Commands a Talisman Spirit to grant the Icy Quill buff to all nearby party members, enhancing Cryo DMG dealt based on Shenhe's ATK.",
      },
      {
        name: "Divine Maiden's Deliverance",
        type: "Elemental Burst",
        description: "Unleashes the Talisman Spirit to roam freely, decreasing Cryo and Physical RES of opponents while dealing continuous AoE Cryo DMG.",
      },
      {
        name: "Deific Embrace",
        type: "1st Ascension Passive",
        description: "An active character within the field created by Divine Maiden's Deliverance gains 15% Cryo DMG Bonus.",
      },
      {
        name: "Spirit Communion Seal",
        type: "4th Ascension Passive",
        description: "Tapping Spring Spirit Summoning grants 15% Elemental Skill and Burst DMG; holding grants 15% Normal, Charged, and Plunging Attack DMG for 15s.",
      },
      {
        name: "Precise Composure",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Clarity of Heart', effect: 'Spring Spirit Summoning gains 1 additional charge.' },
      { level: 2, name: 'Centered Spirit', effect: 'Divine Maiden\'s Deliverance duration extended by 6s and grants 15% Cryo CRIT DMG to active characters inside.' },
      { level: 3, name: 'Seclusion', effect: 'Increases the Level of Spring Spirit Summoning by 3.' },
      { level: 4, name: 'Insight', effect: 'When characters trigger Icy Quill buffs, Shenhe gains Skyfrost Mantra stacks, boosting next Skill damage.' },
      { level: 5, name: 'Divine Attainment', effect: 'Increases the Level of Divine Maiden\'s Deliverance by 3.' },
      { level: 6, name: 'Mystical Abandon', effect: 'When characters trigger Icy Quill effects via Normal or Charged attacks, Icy Quill stack count is not consumed.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Calamity Queller', 'Engulfing Lightning', 'Favonius Lance', 'Missive Windspear'],
      bestArtifacts: ['2pc Gladiator + 2pc Shimenawa', 'Noblesse Oblige'],
      mainStats: {
        sands: 'ATK% or Energy Recharge',
        goblet: 'ATK%',
        circlet: 'ATK%'
      },
      subStats: ['ATK%', 'Energy Recharge', 'CRIT Rate', 'Flat ATK']
    }
  },
  {
    id: 'xingqiu',
    name: 'Xingqiu',
    title: 'Juvenile Galant',
    element: 'Hydro',
    weaponType: 'Sword',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Feiyun Commerce Guild / Guhua Clan',
    birthday: 'April 23',
    constellationName: 'Fabulae Fabula',
    description: 'The second son of the Feiyun Commerce Guild. An avid reader of martial novels and secret practitioner of the ancient Guhua martial arts style.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Xingqiu.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Xingqiu.png',
    stats: {
      hpBase: 10222,
      atkBase: 202,
      defBase: 758,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Guhua Style",
        type: "Normal Attack",
        description: "Performs up to 5 rapid sword strikes.",
      },
      {
        name: "Fatal Rainscreen",
        type: "Elemental Skill",
        description: "Performs twin sword strikes dealing Hydro DMG and creating orbiting Rain Swords that reduce damage taken, provide interruption resistance, and apply Wet.",
      },
      {
        name: "Raincutter",
        type: "Elemental Burst",
        description: "Initiates Rainbow Twinblade stance, summoning max Rain Swords and coordinating continuous cascading sword rain attacks with active character Normal Attacks.",
      },
      {
        name: "Hydropathic",
        type: "1st Ascension Passive",
        description: "When a Rain Sword is shattered or expires, the active character's HP is regenerated by 6% of Xingqiu's Max HP.",
      },
      {
        name: "Bladesidhe",
        type: "4th Ascension Passive",
        description: "Xingqiu gains a 20% Hydro DMG Bonus.",
      },
      {
        name: "Flash of Genius",
        type: "Utility Passive",
        description: "When Xingqiu crafts Character Talent Materials, he has a 25% chance to refund a portion of the crafting materials used.",
      },
    ],
    constellations: [
      { level: 1, name: 'The Scent Remained', effect: 'Increases the maximum number of Rain Swords by 1.' },
      { level: 2, name: 'Rainbow Upon the Azure Sky', effect: 'Extends Raincutter duration by 3s and decreases opponents\' Hydro RES by 15% upon hit.' },
      { level: 3, name: 'Weaver of Verses', effect: 'Increases the Level of Raincutter by 3.' },
      { level: 4, name: 'Evilsoother', effect: 'Throughout the duration of Raincutter, the DMG dealt by Fatal Rainscreen is increased by 50%.' },
      { level: 5, name: 'Embrace of Rain', effect: 'Increases the Level of Fatal Rainscreen by 3.' },
      { level: 6, name: 'Hence, Call Them My Own Verses', effect: 'Activating 2 Raincutter sword rain attacks substantially enhances the third, firing 5 swords and regenerating 3 Energy for Xingqiu.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Sacrificial Sword', 'Favonius Sword', 'Primordial Jade Cutter'],
      bestArtifacts: ['Emblem of Severed Fate', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Hydro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'ATK%']
    }
  },
  {
    id: 'xiangling',
    name: 'Xiangling',
    title: 'Exquisite Delicacy',
    element: 'Pyro',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Wanmin Restaurant',
    birthday: 'November 2',
    constellationName: 'Trulla',
    description: 'The Head Chef at the Wanmin Restaurant and a waitress there. Passionate about culinary art, accompanied by her mystical fire-breathing panda Guoba.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Xiangling.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Xiangling.png',
    stats: {
      hpBase: 10873,
      atkBase: 225,
      defBase: 669,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '96.0',
    },
    skills: [
      {
        name: "Dough-Fu",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive spear strikes.",
      },
      {
        name: "Guoba Attack",
        type: "Elemental Skill",
        description: "Summons Guoba the panda, who continuously breathes fiery breath dealing AoE Pyro DMG.",
      },
      {
        name: "Pyronado",
        type: "Elemental Burst",
        description: "Summons a Pyronado that twirls rapidly around the active character, dealing continuous AoE Pyro DMG with no ICD.",
      },
      {
        name: "Crossfire",
        type: "1st Ascension Passive",
        description: "Increases the flame range of Guoba by 20%.",
      },
      {
        name: "Beware the Angry Fire!",
        type: "4th Ascension Passive",
        description: "When Guoba Attack ends, Guoba leaves a chili pepper on the spot; picking it up increases ATK by 10% for 10s.",
      },
      {
        name: "Chef de Cuisine",
        type: "Utility Passive",
        description: "When a Perfect Cooking is achieved on an ATK-boosting dish, Xiangling has a 12% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Crispy Outside, Tender Inside', effect: 'Opponents hit by Guoba\'s attacks have their Pyro RES reduced by 15% for 6s.' },
      { level: 2, name: 'Oil Meets Fire', effect: 'The final strike of a Normal Attack combo applies the Implode status to opponents for 2s, exploding for 75% ATK Pyro DMG.' },
      { level: 3, name: 'Deepfry', effect: 'Increases the Level of Pyronado by 3.' },
      { level: 4, name: 'Slowbake', effect: 'Pyronado\'s duration is increased by 40% (extended from 10s to 14s).' },
      { level: 5, name: 'Guoba Mad', effect: 'Increases the Level of Guoba Attack by 3.' },
      { level: 6, name: 'Condensed Pyronado', effect: 'For the duration of Pyronado, all party members receive a 15% Pyro DMG Bonus.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['The Catch', 'Staff of Homa', 'Engulfing Lightning', 'Dragon\'s Bane'],
      bestArtifacts: ['Emblem of Severed Fate', 'Crimson Witch of Flames'],
      mainStats: {
        sands: 'Energy Recharge or Elemental Mastery',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'ATK%']
    }
  },
  {
    id: 'baizhu',
    name: 'Baizhu',
    title: 'Beyond Mortality',
    element: 'Dendro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Bubu Pharmacy',
    birthday: 'April 25',
    constellationName: 'Lagenaria',
    description: 'The compassionate owner of Bubu Pharmacy, accompanied by the talking white snake Changsheng. Commands healing medicinal spirits and seamless shielding.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Baizhu_Icon.png',
    stats: {
      hpBase: 13348,
      atkBase: 193,
      defBase: 500,
      ascensionStat: 'HP%',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "The Classics of Acupuncture",
        type: "Normal Attack",
        description: "Performs up to 4 attacks that deal Dendro DMG to opponents in front of him.",
      },
      {
        name: "Universal Diagnosis",
        type: "Elemental Skill",
        description: "Controls a Gossamer Sprite that darts around nearby enemies dealing Dendro DMG and returns to heal all party members based on Max HP.",
      },
      {
        name: "Holistic Revivification",
        type: "Elemental Burst",
        description: "Enters Pulsing Clarity state, generating a Seamless Shield every 2.5s that heals the active character and fires Spiritveins dealing Dendro DMG.",
      },
      {
        name: "Five Fortunes Forever",
        type: "1st Ascension Passive",
        description: "Baizhu gains different buffs based on active character HP: <50% HP grants Baizhu 20% Healing Bonus; ≥50% HP grants Baizhu 25% Dendro DMG Bonus.",
      },
      {
        name: "All Things Are of the Earth",
        type: "4th Ascension Passive",
        description: "Characters healed by Seamless Shield gain up to 100% Bloom/Burgeon/Hyperbloom DMG and 40% Aggravate/Spread DMG based on Baizhu's Max HP (up to 50,000 HP).",
      },
      {
        name: "Herbal Nourishment",
        type: "Utility Passive",
        description: "When Baizhu is in the party, interacting with certain harvestable items heals active party members for 2.5% of Baizhu's Max HP.",
      },
    ],
    constellations: [
      { level: 1, name: 'Attentive Observation', effect: 'Universal Diagnosis gains 1 additional charge.' },
      { level: 2, name: 'Incisive Discernment', effect: 'When active character hits an opponent, Baizhu unleashes Gossamer Sprite: Splice without taking the field.' },
      { level: 3, name: 'All Aspects Stabilized', effect: 'Increases the Level of Holistic Revivification by 3.' },
      { level: 4, name: 'Ancient Art of Perception', effect: 'For 15s after using Holistic Revivification, all nearby party members gain 80 Elemental Mastery.' },
      { level: 5, name: 'The Hidden Ebb and Flow', effect: 'Increases the Level of Universal Diagnosis by 3.' },
      { level: 6, name: 'Elimination of Malicious Qi', effect: 'Increases the DMG dealt by Spiritveins by 8% of Baizhu\'s Max HP and automatically summons a Seamless Shield.' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Jadefall\'s Splendor', 'Prototype Amber', 'Thrilling Tales of Dragon Slayers', 'Favonius Codex'],
      bestArtifacts: ['Deepwood Memories', 'Ocean-Hued Clam', 'Song of Days Past'],
      mainStats: {
        sands: 'HP% or Energy Recharge',
        goblet: 'HP%',
        circlet: 'HP% or Healing Bonus',
      },
      subStats: ['HP%', 'Energy Recharge', 'Flat HP'],
    }
  },
  {
    id: 'beidou',
    name: 'Beidou',
    title: 'Uncrowned Lord of the Ocean',
    element: 'Electro',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'The Crux',
    birthday: 'February 14',
    constellationName: 'Victor Mare',
    description: 'Captain of The Crux, an armed fleet based in Liyue Harbor. A legendary pirate commander who slayed the sea monster Haishan without a Vision.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e1/Beidou_Icon.png',
    stats: {
      hpBase: 13050,
      atkBase: 225,
      defBase: 648,
      ascensionStat: 'Electro DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Oceanborne",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive claymore strikes.",
      },
      {
        name: "Tidecaller",
        type: "Elemental Skill",
        description: "Accumulates power into a claymore; holding raises a shield absorbing damage and counters with a thunderous slash scaling with damage absorbed.",
      },
      {
        name: "Stormbreaker",
        type: "Elemental Burst",
        description: "Creates a Thunderbeast's Targe around the character, granting damage reduction and causing lightning to discharge and arc between opponents upon Normal/Charged Attacks.",
      },
      {
        name: "Retribution",
        type: "1st Ascension Passive",
        description: "Counterattacking with Tidecaller at the precise moment of getting hit grants the maximum DMG Bonus.",
      },
      {
        name: "Lightning Storm",
        type: "4th Ascension Passive",
        description: "Unleashing Tidecaller with maximum DMG Bonus increases Normal and Charged Attack DMG and ATK SPD by 15% for 10s.",
      },
      {
        name: "Conqueror of Tides",
        type: "Utility Passive",
        description: "Decreases swimming Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Sea Beast\'s Scourge', effect: 'Using Stormbreaker creates a shield absorbing DMG equal to 16% of Max HP for 15s.' },
      { level: 2, name: 'Upon the Turbulent Sea, the Thunder Arises', effect: 'Stormbreaker\'s lightning arc can jump to 2 additional targets.' },
      { level: 3, name: 'Summoner of Storm', effect: 'Increases the Level of Tidecaller by 3.' },
      { level: 4, name: 'Stunning Revenge', effect: 'Upon being attacked, Beidou\'s Normal Attacks gain 20% additional Electro DMG for 10s.' },
      { level: 5, name: 'Crimson Tidewalker', effect: 'Increases the Level of Stormbreaker by 3.' },
      { level: 6, name: 'Bane of Evil', effect: 'During Stormbreaker, the Electro RES of surrounding opponents is decreased by 15%.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Wolf\'s Gravestone', 'Serpent Spine', 'Akuoumaru', 'Favonius Greatsword'],
      bestArtifacts: ['Emblem of Severed Fate', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'ATK%'],
    }
  },
  {
    id: 'chongyun',
    name: 'Chongyun',
    title: 'Frozen Ardor',
    element: 'Cryo',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Tianheng Thaumaturges',
    birthday: 'September 7',
    constellationName: 'Nubis Caestus',
    description: 'A young exorcist from a clan of thaumaturges. Born with excessive pure Yang energy that drives away evil spirits instantly, much to his personal dismay.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/3/35/Chongyun_Icon.png',
    stats: {
      hpBase: 10984,
      atkBase: 223,
      defBase: 648,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Demonbane",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive claymore strikes.",
      },
      {
        name: "Spirit Blade: Chonghua's Layered Frost",
        type: "Elemental Skill",
        description: "Strikes the ground to cause a frost explosion, creating a field that infuses Sword, Claymore, and Polearm attacks with Cryo.",
      },
      {
        name: "Spirit Blade: Cloud-Parting Star",
        type: "Elemental Burst",
        description: "Summons 3 giant spirit blades that crash into the earth in succession, dealing massive AoE Cryo DMG and launching opponents.",
      },
      {
        name: "Steady Breathing",
        type: "1st Ascension Passive",
        description: "Sword, Claymore, and Polearm-wielding characters within the frost field created by Chonghua's Layered Frost gain 8% Normal ATK SPD.",
      },
      {
        name: "Rimechaser Blade",
        type: "4th Ascension Passive",
        description: "When the Chonghua's Layered Frost field expires, a spirit blade summons to deal 100% Skill DMG as Cryo and reduce enemy Cryo RES by 10% for 8s.",
      },
      {
        name: "Gallant Journey",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Venturing Towards Ice', effect: 'The last attack of a Normal Attack combo releases 3 ice blades, each dealing 50% ATK as Cryo DMG.' },
      { level: 2, name: 'Revolutionary Path', effect: 'Elemental Skills and Bursts cast inside Chonghua Frost Field have their CD decreased by 15%.' },
      { level: 3, name: 'Cloudburst', effect: 'Increases the Level of Spirit Blade: Cloud-Parting Star by 3.' },
      { level: 4, name: 'Frozen Skies', effect: 'Chongyun regenerates 1 Energy every time he hits an opponent affected by Cryo.' },
      { level: 5, name: 'The True Path', effect: 'Increases the Level of Spirit Blade: Chonghua\'s Layered Frost by 3.' },
      { level: 6, name: 'Rally of Four Blades', effect: 'Burst deals 15% more DMG to targets with lower HP percentage than Chongyun, and summons 1 additional spirit blade.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Wolf\'s Gravestone', 'Serpent Spine', 'Sacrificial Greatsword', 'Mailed Flower'],
      bestArtifacts: ['Noblesse Oblige', 'Emblem of Severed Fate', 'Blizzard Strayer'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge'],
    }
  },
  {
    id: 'gaming',
    name: 'Gaming',
    title: 'Leonine Vanguard',
    element: 'Pyro',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Sword and Strongbox Armed Escort Agency',
    birthday: 'December 22',
    constellationName: 'Leo Expergiscens',
    description: 'A guard of the Sword and Strongbox Agency and the head of the "Mighty Mythical Beasts" Wushou troupe, leaping high with Man Chai for explosive Pyro plunging attacks.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/a/ae/Gaming_Icon.png',
    stats: {
      hpBase: 11419,
      atkBase: 302,
      defBase: 710,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Stellar Rend",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive strikes using Northern lion-dance kung fu.",
      },
      {
        name: "Bestial Ascent",
        type: "Elemental Skill",
        description: "Pounces forward using Wushou arts, leaping high into the air on collision to unleash a devastating Chani Ascent Plunging Attack dealing Pyro DMG.",
      },
      {
        name: "Suanni's Gilded Dance",
        type: "Elemental Burst",
        description: "Enters Wushou Stance, applying Pyro to himself and summoning the companion Man Chai; Man Chai smashes into enemies, dealing AoE Pyro DMG and resetting Bestial Ascent CD.",
      },
      {
        name: "Dance of Amity",
        type: "1st Ascension Passive",
        description: "After landing a Chani Ascent Plunging Attack, Gaming recovers 1.5% of his Max HP every 0.2s for 0.8s.",
      },
      {
        name: "Air of Prosperity",
        type: "4th Ascension Passive",
        description: "When Gaming has less than 50% HP, he gains 20% incoming healing bonus; when HP is ≥50%, Chani Ascent Plunge deals 20% more DMG.",
      },
      {
        name: "Striding Beast",
        type: "Utility Passive",
        description: "Increases party members' Movement SPD by 10% during the day (06:00 to 18:00).",
      },
    ],
    constellations: [
      { level: 1, name: 'Bringer of Blessing', effect: 'When Man Chai meets up with Gaming again during Burst, heals Gaming for 15% of his Max HP.' },
      { level: 2, name: 'Plum Blossoms Underfoot', effect: 'When Gaming receives healing and this healing overflows, his ATK is increased by 20% for 5s.' },
      { level: 3, name: 'Awakening Spirit', effect: 'Increases the Level of Bestial Ascent by 3.' },
      { level: 4, name: 'Soar Across the Mountains', effect: 'When Plunging Attack: Charmed Cloudstrider hits an opponent, restores 2 Energy to Gaming.' },
      { level: 5, name: 'Demon-Daunting Roar', effect: 'Increases the Level of Suanni\'s Gilded Dance by 3.' },
      { level: 6, name: 'To Tame All Beasts', effect: 'Plunging Attack: Charmed Cloudstrider CRIT Rate increased by 20%, CRIT DMG increased by 40%, and radius expanded.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Serpent Spine', 'Beacon of the Reed Sea', 'Redhorn Stonethresher', 'Rainslasher'],
      bestArtifacts: ['Marechaussee Hunter', 'Crimson Witch of Flames'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'ATK%'],
    }
  },
  {
    id: 'keqing',
    name: 'Keqing',
    title: 'Driving Thunder',
    element: 'Electro',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Liyue Qixing',
    birthday: 'November 20',
    constellationName: 'Trulla Cementarii',
    description: 'The Yuheng of the Liyue Qixing. A resolute pragmatist who believes humanity should shape its own destiny rather than relying on gods and adepti.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/52/Keqing_Icon.png',
    stats: {
      hpBase: 13103,
      atkBase: 323,
      defBase: 799,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Yunlai Swordsmanship",
        type: "Normal Attack",
        description: "Performs up to 5 rapid sword strikes; rapid charged attacks deliver double high-speed slashes.",
      },
      {
        name: "Stellar Restoration",
        type: "Elemental Skill",
        description: "Hurls a Lightning Stiletto that pierces opponents dealing Electro DMG; recasting blinks Keqing to the stiletto with a slashing strike.",
      },
      {
        name: "Starward Sword",
        type: "Elemental Burst",
        description: "Unleashes the power of lightning, moving in the speed of light to slash all opponents within a huge AoE and delivering a devastating final blow.",
      },
      {
        name: "Thundering Penance",
        type: "1st Ascension Passive",
        description: "After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing's weapon gains Electro Infusion for 5s.",
      },
      {
        name: "Aristocratic Dignity",
        type: "4th Ascension Passive",
        description: "When casting Starward Sword, Keqing's CRIT Rate and Energy Recharge are increased by 15% for 8s.",
      },
      {
        name: "Land's Overseer",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'Thundering Might', effect: 'Recasting Stellar Restoration causes Keqing to deal 50% ATK as AoE Electro DMG at start and end points.' },
      { level: 2, name: 'Keen Extraction', effect: 'Keqing\'s Normal and Charged Attacks hitting Electro-affected opponents have a 50% chance to generate an Elemental Particle.' },
      { level: 3, name: 'Foreseen Reformation', effect: 'Increases the Level of Starward Sword by 3.' },
      { level: 4, name: 'Attunement', effect: 'Triggering an Electro reaction increases Keqing\'s ATK by 25% for 10s.' },
      { level: 5, name: 'Beckoning Stars', effect: 'Increases the Level of Stellar Restoration by 3.' },
      { level: 6, name: 'Tenacious Star', effect: 'Using Normal, Charged, Skill, or Burst grants 6% Electro DMG Bonus for 8s (stacks up to 4 times).' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Mistsplitter Reforged', 'Primordial Jade Cutter', 'The Black Sword', 'Lion\'s Roar'],
      bestArtifacts: ['Thundering Fury', 'Gilded Dreams'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery'],
    }
  },
  {
    id: 'lan-yan',
    name: 'Lan Yan',
    title: 'Gossamer of Qingce Winds',
    element: 'Anemo',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Qingce Village Craftsfolk',
    birthday: 'September 12',
    constellationName: 'Serica Zephyrus',
    description: 'A graceful silk spinner and wind-weaver from Qingce Village who dances with enchanted bamboo flutes and gossamer wind ribbons.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/1/1a/Lan_Yan_Icon.png',
    stats: {
      hpBase: 9800,
      atkBase: 215,
      defBase: 590,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '96',
    },
    skills: [
      {
        name: "Swallow's Plumage",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive swift sword slashes.",
      },
      {
        name: "Feathery Gale",
        type: "Elemental Skill",
        description: "Summons swirling feather winds that gather nearby lightweight enemies and deal AoE Anemo DMG.",
      },
      {
        name: "Piercing Zephyr Gale",
        type: "Elemental Burst",
        description: "Unleashes a tempest of razor-sharp wind blades dealing continuous Anemo DMG and shredding enemy elemental resistances.",
      },
      {
        name: "Tailwind Guidance",
        type: "1st Ascension Passive",
        description: "Triggering Swirl increases party Movement SPD by 15% and ATK by 10% for 10s.",
      },
      {
        name: "Plumed Harmony",
        type: "4th Ascension Passive",
        description: "Increases Lan Yan's Anemo DMG Bonus by 15% when stamina is above 50%.",
      },
      {
        name: "Courier's Stride",
        type: "Utility Passive",
        description: "Decreases sprinting Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Woven Breezes', effect: 'Silkweaver\'s Gale gains 1 additional charge.' },
      { level: 2, name: 'Harmonic Resonance', effect: 'When triggering Swirl, party members gain 10% movement speed and 12% ATK.' },
      { level: 3, name: 'Bamboo Echoes', effect: 'Increases the Level of Silkweaver\'s Gale by 3.' },
      { level: 4, name: 'Silken Shielding', effect: 'Swirl reactions create a jade ribbon shield equal to 12% of Lan Yan\'s Max HP.' },
      { level: 5, name: 'Melodic Reverie', effect: 'Increases the Level of Melody of the Qingce Brook by 3.' },
      { level: 6, name: 'Brocade of Zephyrs', effect: 'During Burst, active character deals 20% increased Elemental DMG and gains 100 EM.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Sacrificial Fragments', 'Favonius Codex', 'A Thousand Floating Dreams'],
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
    id: 'ningguang',
    name: 'Ningguang',
    title: 'Eclipsing Star',
    element: 'Geo',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Liyue Qixing',
    birthday: 'August 26',
    constellationName: 'Opus Aque',
    description: 'The Tianquan of the Liyue Qixing and master of the floating Jade Chamber. Her wealth is unrivaled throughout Teyvat, matched only by her shrewd intellect.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/e/e0/Ningguang_Icon.png',
    stats: {
      hpBase: 9787,
      atkBase: 212,
      defBase: 573,
      ascensionStat: 'Geo DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Sparkling Scatter",
        type: "Normal Attack",
        description: "Shoots gem projectiles dealing Geo DMG and accumulating Star Jades; Charged Attack fires a giant gem and all collected Star Jades.",
      },
      {
        name: "Jade Screen",
        type: "Elemental Skill",
        description: "Constructs a grand Jade Screen made of gold and jade that blocks enemy projectiles and deals AoE Geo DMG.",
      },
      {
        name: "Starshatter",
        type: "Elemental Burst",
        description: "Gathers a great number of gems and fires them all at once to home in on nearby enemies; if Jade Screen is nearby, fires additional gem projectiles.",
      },
      {
        name: "Backup Plan",
        type: "1st Ascension Passive",
        description: "When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina.",
      },
      {
        name: "Strategic Reserve",
        type: "4th Ascension Passive",
        description: "A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.",
      },
      {
        name: "Trove of Marvelous Treasures",
        type: "Utility Passive",
        description: "Displays the location of nearby ore veins (Iron, White Iron, Crystal, Starsilver, etc.) on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Piercing Fragments', effect: 'Normal Attack hits deal AoE DMG.' },
      { level: 2, name: 'Shock Effect', effect: 'When Jade Screen is shattered, its CD will reset (can occur once every 6s).' },
      { level: 3, name: 'Majesty of the Phoenix', effect: 'Increases the Level of Starshatter by 3.' },
      { level: 4, name: 'Exquisite be the Jade, Outshining All the Earth', effect: 'Jade Screen increases nearby party members\' Elemental RES by 10%.' },
      { level: 5, name: 'Invictus Falcon Flying into the Heavens', effect: 'Increases the Level of Jade Screen by 3.' },
      { level: 6, name: 'Grandeur be the Seven Stars', effect: 'When Starshatter is used, Ningguang gains 7 Star Jades.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Lost Prayer to the Sacred Winds', 'Skyward Atlas', 'Solar Pearl', 'The Widsith'],
      bestArtifacts: ['Archaic Petra', 'Gladiator\'s Finale', 'Nighttime Whispers in the Echoing Woods'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Geo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge'],
    }
  },
  {
    id: 'qiqi',
    name: 'Qiqi',
    title: 'Icy Resurrection',
    element: 'Cryo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Bubu Pharmacy',
    birthday: 'March 3',
    constellationName: 'Pristina Nola',
    description: 'An apprentice and herb gatherer at Bubu Pharmacy. An "undead" jiangshi with a bone-white complexion who commands the Herald of Frost and preserves life.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Qiqi_Icon.png',
    stats: {
      hpBase: 12368,
      atkBase: 287,
      defBase: 922,
      ascensionStat: 'Healing Bonus',
      ascensionStatValue: '22.2%',
    },
    skills: [
      {
        name: "Ancient Sword Art",
        type: "Normal Attack",
        description: "Performs up to 5 rapid sword strikes.",
      },
      {
        name: "Adeptus Art: Herald of Frost",
        type: "Elemental Skill",
        description: "Summons the Herald of Frost, dealing Cryo DMG and swirling around the active character, periodically healing and attacking.",
      },
      {
        name: "Adeptus Art: Preserver of Fortune",
        type: "Elemental Burst",
        description: "Releases the adeptus energy imprisoned within her body, marking nearby enemies with a Fortune-Preserving Talisman that heals allies when hitting marked foes.",
      },
      {
        name: "Life-Prolonging Methods",
        type: "1st Ascension Passive",
        description: "When a character under the effect of Herald of Frost triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.",
      },
      {
        name: "A Glimpse into Arcanum",
        type: "4th Ascension Passive",
        description: "When Qiqi hits opponents with Normal and Charged Attacks, she has a 50% chance to apply a Fortune-Preserving Talisman for 6s (30s CD).",
      },
      {
        name: "Former Life Memories",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Liyue on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Ascetics of Frost', effect: 'When Herald of Frost hits an opponent marked by Fortune-Preserving Talisman, Qiqi regenerates 2 Energy.' },
      { level: 2, name: 'Frozen to the Bone', effect: 'Qiqi\'s Normal and Charged Attack DMG against opponents affected by Cryo is increased by 15%.' },
      { level: 3, name: 'Praise of Fleeting', effect: 'Increases the Level of Adeptus Art: Preserver of Fortune by 3.' },
      { level: 4, name: 'Divine Suppression', effect: 'Targets marked by Fortune-Preserving Talisman have their ATK decreased by 20%.' },
      { level: 5, name: 'Crimson Lotus Bloom', effect: 'Increases the Level of Adeptus Art: Herald of Frost by 3.' },
      { level: 6, name: 'Rite of Resurrection', effect: 'Using Burst revives all fallen nearby party members and regenerates 50% of their HP (CD: 15min).' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Sacrificial Sword', 'Favonius Sword', 'Skyward Blade', 'The Flute'],
      bestArtifacts: ['Ocean-Hued Clam', 'Maiden Beloved', 'Tenacity of the Millelith'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'ATK%',
        circlet: 'Healing Bonus or ATK%',
      },
      subStats: ['Energy Recharge', 'ATK%', 'Flat ATK', 'CRIT Rate'],
    }
  },
  {
    id: 'xinyan',
    name: 'Xinyan',
    title: 'Blazing Riff',
    element: 'Pyro',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'The Crux',
    birthday: 'October 16',
    constellationName: 'Fila Ignium',
    description: 'Liyue\'s sole rock \'n\' roll pioneer. With her fiery performances and homemade instrument, she rebels against ossified prejudices in Liyue Harbor.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/2/24/Xinyan_Icon.png',
    stats: {
      hpBase: 11201,
      atkBase: 249,
      defBase: 799,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Dance on Fire",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive claymore strikes.",
      },
      {
        name: "Sweeping Fervor",
        type: "Elemental Skill",
        description: "Brandishes her rock 'n' roll instrument, dealing Pyro DMG and generating a shield based on the number of enemies hit (Level 3 Rave pulses Pyro AoE).",
      },
      {
        name: "Riff Revolution",
        type: "Elemental Burst",
        description: "Strums furiously, causing sound waves that deal physical DMG and erupting the ground with searing Pyro explosions.",
      },
      {
        name: "\"The Show Goes On, Even Without An Audience...\"",
        type: "1st Ascension Passive",
        description: "Decreases the number of opponents Sweeping Fervor must hit to trigger each shield level.",
      },
      {
        name: "\"...Now That's Rock 'N' Roll!\"",
        type: "4th Ascension Passive",
        description: "Characters shielded by Sweeping Fervor deal 15% increased Physical DMG.",
      },
      {
        name: "A Rad Recipe",
        type: "Utility Passive",
        description: "When a Perfect Cooking is achieved on a DEF-boosting dish, Xinyan has a 12% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Fatal Acceleration', effect: 'Upon scoring a CRIT Hit, increases Normal and Charged Attack SPD by 12% for 5s.' },
      { level: 2, name: 'Impromptu Opening', effect: 'Riff Revolution\'s Physical DMG has its CRIT Rate increased by 100% and forms a Level 3 Shield: Rave.' },
      { level: 3, name: 'Double-Stop', effect: 'Increases the Level of Sweeping Fervor by 3.' },
      { level: 4, name: 'Wildfire Rhythm', effect: 'Sweeping Fervor\'s swing DMG decreases opponent\'s Physical RES by 15% for 12s.' },
      { level: 5, name: 'Screamin\' for an Encore', effect: 'Increases the Level of Riff Revolution by 3.' },
      { level: 6, name: 'Rockin\' in a Flaming World', effect: 'Decreases Stamina consumption of Charged Attacks by 30% and adds DEF-scaled bonus ATK during Charged Attacks.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Redhorn Stonethresher', 'Wolf\'s Gravestone', 'Snow-Tombed Starsilver', 'Sacrificial Greatsword'],
      bestArtifacts: ['Pale Flame', 'Bloodstained Chivalry', 'Husk of Opulent Dreams'],
      mainStats: {
        sands: 'ATK% or DEF%',
        goblet: 'Physical DMG Bonus',
        circlet: 'CRIT DMG or CRIT Rate',
      },
      subStats: ['CRIT DMG', 'CRIT Rate', 'ATK%', 'DEF%', 'Energy Recharge'],
    }
  },
  {
    id: 'yanfei',
    name: 'Yanfei',
    title: 'Wise Innocence',
    element: 'Pyro',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Yanfei Legal Consultancy Office',
    birthday: 'July 28',
    constellationName: 'Bestia Iustitia',
    description: 'A premier legal adviser in Liyue Harbor with mixed illuminated beast (adeptus) ancestry. Uses codified legal terms to rain down fiery seals upon lawbreakers.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/54/Yanfei_Icon.png',
    stats: {
      hpBase: 9352,
      atkBase: 240,
      defBase: 587,
      ascensionStat: 'Pyro DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Seal of Approval",
        type: "Normal Attack",
        description: "Shoots fireballs dealing Pyro DMG and granting Scarlet Seals; consuming seals empowers Charged Attacks to drop a giant flaming seal.",
      },
      {
        name: "Signed Edict",
        type: "Elemental Skill",
        description: "Summons blistering flames that deal AoE Pyro DMG; hitting an opponent grants Yanfei the maximum number of Scarlet Seals.",
      },
      {
        name: "Done Deal",
        type: "Elemental Burst",
        description: "Triggers a spray of intense flames dealing AoE Pyro DMG, granting maximum Scarlet Seals and applying Brilliance to periodically grant seals.",
      },
      {
        name: "Proviso",
        type: "1st Ascension Passive",
        description: "When Yanfei consumes Scarlet Seals by using a Charged Attack, each Scarlet Seal increases her Pyro DMG Bonus by 5% for 6s.",
      },
      {
        name: "Blazing Eye",
        type: "4th Ascension Passive",
        description: "When Yanfei's Charged Attack deals a CRIT Hit, she deals an additional instance of AoE Pyro DMG equal to 80% of her ATK.",
      },
      {
        name: "Encyclopedic Expertise",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Liyue on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Law Abiding', effect: 'Each active Scarlet Seal reduces stamina cost of Charged Attacks by 10% and increases interruption resistance.' },
      { level: 2, name: 'Right of Final Interpretation', effect: 'Increases Yanfei\'s Charged Attack CRIT Rate by 20% against opponents below 50% HP.' },
      { level: 3, name: 'Samadhi Fire-Forged', effect: 'Increases the Level of Signed Edict by 3.' },
      { level: 4, name: 'Supreme Amnesty', effect: 'Using Done Deal creates a shield absorbing DMG equal to 45% of Max HP for 15s.' },
      { level: 5, name: 'Abiding Affidavit', effect: 'Increases the Level of Done Deal by 3.' },
      { level: 6, name: 'Extra Clause', effect: 'Increases the maximum number of Scarlet Seals by 1 (to 4).' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Lost Prayer to the Sacred Winds', 'The Widsith', 'Solar Pearl', 'Dodoco Tales'],
      bestArtifacts: ['Crimson Witch of Flames', 'Wanderer\'s Troupe'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge'],
    }
  },
  {
    id: 'yaoyao',
    name: 'Yaoyao',
    title: 'Burgeoning Grace',
    element: 'Dendro',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Madame Ping\'s Disciples',
    birthday: 'March 6',
    constellationName: 'Osmanthus',
    description: 'Madame Ping\'s youngest disciple and a caring junior sister to Xiangling. Accompanied by the adeptal creation Yuegui, who flings White Jade Radishes that heal allies and harm foes.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/8/83/Yaoyao_Icon.png',
    stats: {
      hpBase: 12288,
      atkBase: 212,
      defBase: 751,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Toss 'N' Turn Spear",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive spear strikes.",
      },
      {
        name: "Raphanus Sky Cluster",
        type: "Elemental Skill",
        description: "Calls upon Yuegui: Throwing Mode, who continuously tosses White Jade Radishes that explode to heal allies and deal Dendro DMG to enemies.",
      },
      {
        name: "Moonjade Descent",
        type: "Elemental Burst",
        description: "Unleashes the full adeptal might of Yuegui, entering the Adeptal Legacy state which summons up to 3 Yuegui jumpers while running and jumping.",
      },
      {
        name: "Starscatter",
        type: "1st Ascension Passive",
        description: "While in Adeptal Legacy state, Yaoyao continuously throws White Jade Radishes when sprinting, jumping, or running.",
      },
      {
        name: "In Others' Shoes",
        type: "4th Ascension Passive",
        description: "When White Jade Radishes explode, active characters in AoE recover HP equal to 0.8% of Yaoyao's Max HP every 1s for 5s.",
      },
      {
        name: "Tiptoe Stealth",
        type: "Utility Passive",
        description: "When Yaoyao is in the party, your characters will not startle Crystalflies and certain other small wild animals.",
      },
    ],
    constellations: [
      { level: 1, name: 'Adeptus\' Tutelage', effect: 'When White Jade Radishes explode, active characters in the AoE gain 15% Dendro DMG Bonus for 8s and 15 Stamina.' },
      { level: 2, name: 'Innocent', effect: 'While in Adeptal Legacy, when radish explosions damage opponents, Yaoyao restores 3 Energy.' },
      { level: 3, name: 'Befittingly Blooming', effect: 'Increases the Level of Raphanus Sky Cluster by 3.' },
      { level: 4, name: 'Winsome', effect: 'Using Skill or Burst increases Yaoyao\'s Elemental Mastery based on 0.3% of her Max HP (up to 120 EM).' },
      { level: 5, name: 'Compassionate', effect: 'Increases the Level of Moonjade Descent by 3.' },
      { level: 6, name: 'Beneficent', effect: 'Every 2 radishes Yuegui throws will also fire a Mega Radish dealing 75% AoE Dendro DMG and healing 7.5% Max HP.' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Favonius Lance', 'Black Tassel', 'Rightful Reward', 'Moonpiercer'],
      bestArtifacts: ['Deepwood Memories', 'Tenacity of the Millelith', 'Maiden Beloved'],
      mainStats: {
        sands: 'HP% or Energy Recharge',
        goblet: 'HP%',
        circlet: 'Healing Bonus or HP%',
      },
      subStats: ['HP%', 'Energy Recharge', 'Flat HP', 'CRIT Rate'],
    }
  },
  {
    id: 'yun-jin',
    name: 'Yun Jin',
    title: 'Stage Lucida',
    element: 'Geo',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Liyue',
    affiliation: 'Yun-Han Opera Troupe',
    birthday: 'May 21',
    constellationName: 'Opera Grandis',
    description: 'The director of the Yun-Han Opera Troupe and a renowned opera icon in Liyue Harbor. Her poetic performances and flag-bearing spear dances grant immense Normal Attack buffs to allies.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/9/9c/Yun_Jin_Icon.png',
    stats: {
      hpBase: 10657,
      atkBase: 191,
      defBase: 734,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '26.7%',
    },
    skills: [
      {
        name: "Cloud-Grazing Strike",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive spear strikes with theatrical flair.",
      },
      {
        name: "Opening Flourish",
        type: "Elemental Skill",
        description: "Takes the Cloud-Grazing stance to form a shield; holding charges power up to Level 2 to deal Geo DMG upon release.",
      },
      {
        name: "Cliffbreaker's Banner",
        type: "Elemental Burst",
        description: "Deals AoE Geo DMG and grants all nearby party members the Flying Cloud Flag Formation: enhances Normal Attack DMG based on Yun Jin's DEF.",
      },
      {
        name: "True to Oneself",
        type: "1st Ascension Passive",
        description: "Using Opening Flourish at the precise moment when Yun Jin is attacked will unleash its Level 2 Charged Form immediately.",
      },
      {
        name: "Breaking Conventional Norms",
        type: "4th Ascension Passive",
        description: "Flying Cloud Flag Formation Normal Attack DMG bonus is further increased by 2.5%/5%/7.5%/11.5% of Yun Jin's DEF based on 1/2/3/4 different Elemental Types in party.",
      },
      {
        name: "Light Nourishment",
        type: "Utility Passive",
        description: "When a Perfect Cooking is achieved on an exploration-type dish, Yun Jin has a 12% chance to obtain double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Thespian Gallop', effect: 'Opening Flourish CD decreased by 18%.' },
      { level: 2, name: 'Myriad Array', effect: 'After Cliffbreaker\'s Banner is unleashed, all party members\' Normal Attack DMG is increased by 15% for 12s.' },
      { level: 3, name: 'Seafaring General', effect: 'Increases the Level of Cliffbreaker\'s Banner by 3.' },
      { level: 4, name: 'Flower\'s Teeth', effect: 'When Yun Jin triggers Crystallize, her DEF is increased by 20% for 12s.' },
      { level: 5, name: 'Famously Unguarded', effect: 'Increases the Level of Opening Flourish by 3.' },
      { level: 6, name: 'Decorous Harmony', effect: 'Characters under the Flying Cloud Flag Formation gain 12% Normal Attack SPD.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Favonius Lance', 'Rightful Reward', 'The Catch', 'Deathmatch'],
      bestArtifacts: ['Husk of Opulent Dreams', 'Noblesse Oblige'],
      mainStats: {
        sands: 'DEF% or Energy Recharge',
        goblet: 'DEF%',
        circlet: 'DEF% or CRIT Rate',
      },
      subStats: ['DEF%', 'Energy Recharge', 'CRIT Rate', 'Flat DEF'],
    }
  },
  {
    id: 'zibai',
    name: 'Zibai',
    title: 'Gilded Resonator',
    element: 'Geo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Liyue',
    affiliation: 'Feiyun Enclave / Adeptal Relic Keepers',
    birthday: 'June 18',
    constellationName: 'Resonantia Crystallina',
    description: 'A master of crystalline Geo harmonics in Liyue, using resonance blades that shatter stone and empower all elemental crystallization.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Zibai_Icon.png',
    stats: {
      hpBase: 12800,
      atkBase: 330,
      defBase: 820,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Jade Carving Thrust",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive heavy claymore swings.",
      },
      {
        name: "Resonant Tremor",
        type: "Elemental Skill",
        description: "Slams the earth to create resonating Geo pillars that pulse with tectonic energy, absorbing damage and dealing AoE Geo DMG.",
      },
      {
        name: "Celestial Terra Surge",
        type: "Elemental Burst",
        description: "Calls upon ancestral jade power, shattering the surrounding terrain to deal massive Geo DMG and boosting party DEF.",
      },
      {
        name: "Earthen Resilience",
        type: "1st Ascension Passive",
        description: "Characters shielded by Geo constructs gain 15% DEF and 10% Geo DMG Bonus.",
      },
      {
        name: "Mountain Weaver",
        type: "4th Ascension Passive",
        description: "Triggering Crystallize increases Zibai's ATK by 20% of his DEF for 12s.",
      },
      {
        name: "Stonemason's Eye",
        type: "Utility Passive",
        description: "Refunds 15% of the ores used when crafting Claymore-type weapons.",
      },
    ],
    constellations: [
      { level: 1, name: 'Shattered Prisms', effect: 'Lithic Resonance Wave deals 50% more DMG against shielded opponents.' },
      { level: 2, name: 'Symphonic Surge', effect: 'Resonance waves shred enemy Geo RES by 20% for 8s.' },
      { level: 3, name: 'Echo of the Ancients', effect: 'Increases the Level of Lithic Resonance Wave by 3.' },
      { level: 4, name: 'Harmonic Haven', effect: 'Crystal shields formed by party members absorb 40% more DMG.' },
      { level: 5, name: 'Crystalline Crescendo', effect: 'Increases the Level of Cataclysmic Crystal Choir by 3.' },
      { level: 6, name: 'Grand Geo Cadenza', effect: 'Zibai gains 70% Geo CRIT DMG and can trigger resonance pulses without cooldown.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Uraku Misugiri', 'Mistsplitter Reforged', 'Primordial Jade Cutter'],
      bestArtifacts: ['Nighttime Whispers in the Echoing Woods', 'Archaic Petra'],
      mainStats: {
        sands: 'ATK% or DEF%',
        goblet: 'Geo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge'],
    }
  }
];
