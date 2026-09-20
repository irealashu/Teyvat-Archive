import { Character } from '../../types';

export const INAZUMA_CHARACTERS: Character[] = [
  {
    id: 'raiden-shogun',
    name: 'Raiden Shogun',
    title: 'Plane of Euthymia',
    element: 'Electro',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Inazuma Bakufu',
    birthday: 'June 26',
    constellationName: 'Imperatrix Umbrosa',
    description: 'Her Excellency, the Almighty Narukami Ogosho, who promised the people of Inazuma an unchanging eternity.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Shougun.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Shougun.png',
    stats: {
      hpBase: 12907,
      atkBase: 337,
      defBase: 789,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '32.0%',
    },
    skills: [
      {
        name: "Origin",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive spear strikes with sovereign precision.",
      },
      {
        name: "Transcendence: Baleful Ominous",
        type: "Elemental Skill",
        description: "Unveils the Eye of Stormy Judgment, dealing AoE Electro DMG and granting coordinated attacks that boost party members' Elemental Burst DMG.",
      },
      {
        name: "Secret Art: Musou Shinsetsu",
        type: "Elemental Burst",
        description: "Unleashes the Musou no Hitotachi dealing catastrophic AoE Electro DMG based on consumed Resolve stacks, followed by Musou Isshin sword attacks that restore party Energy.",
      },
      {
        name: "Wishes Unnumbered",
        type: "1st Ascension Passive",
        description: "When nearby party members gain Elemental Orbs or Particles, Chakra Desiderata gains 2 Resolve stacks (once every 3s).",
      },
      {
        name: "Enlightened One",
        type: "4th Ascension Passive",
        description: "Each 1% above 100% Energy Recharge that the Raiden Shogun possesses grants 0.4% Electro DMG Bonus and 0.6% greater Energy restoration from Musou Isshin.",
      },
      {
        name: "All-Preserver",
        type: "Utility Passive",
        description: "Cannot cook dishes.",
      },
    ],
    constellations: [
      { level: 1, name: 'Ominous Inscription', effect: 'Chakra Desiderata gathers Resolve even faster. Electro characters\' bursts provide 80% more Resolve; other elements provide 20% more.' },
      { level: 2, name: 'Steelbreaker', effect: 'While using Musou no Hitotachi and in the Musou Isshin state, the Raiden Shogun\'s attacks ignore 60% of opponents\' DEF.' },
      { level: 3, name: 'Shinkage Bygones', effect: 'Increases the Level of Secret Art: Musou Shinsetsu by 3.' },
      { level: 4, name: 'Pledge of Propriety', effect: 'When Musou Isshin state expires, all nearby party members gain 30% bonus ATK for 10s.' },
      { level: 5, name: 'Shogun\'s Descent', effect: 'Increases the Level of Transcendence: Baleful Ominous by 3.' },
      { level: 6, name: 'Wishbearer', effect: 'While in Musou Isshin state, Normal, Charged, and Plunging attacks decrease all party members\' Burst cooldowns by 1s (up to 5s).' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Engulfing Lightning', 'The Catch', 'Staff of Homa', 'Skyward Spine'],
      bestArtifacts: ['Emblem of Severed Fate'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Electro DMG Bonus or ATK%',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%']
    }
  },
  {
    id: 'kaedehara-kazuha',
    name: 'Kaedehara Kazuha',
    title: 'Scarlet Leaves Pursue Wild Waves',
    element: 'Anemo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'The Crux Fleet',
    birthday: 'October 29',
    constellationName: 'Acer Palmatum',
    description: 'A wandering samurai from Inazuma who is currently with Liyue\'s Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Kazuha.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Kazuha.png',
    stats: {
      hpBase: 13348,
      atkBase: 297,
      defBase: 807,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '115.2',
    },
    skills: [
      {
        name: "Garyuu Bladework",
        type: "Normal Attack",
        description: "Performs up to 5 rapid strikes using an ancient wandering samurai sword style.",
      },
      {
        name: "Chihayaburu",
        type: "Elemental Skill",
        description: "Unleashes a secret technique that pulls objects and opponents toward Kazuha before launching him into the air to unleash Midare Ranzan plunge.",
      },
      {
        name: "Kazuha Slash",
        type: "Elemental Burst",
        description: "Slashing with autumn wind, leaves an Autumn Whirlwind field dealing AoE Anemo DMG and absorbing Hydro, Pyro, Cryo, or Electro.",
      },
      {
        name: "Soumon Swordsmanship",
        type: "1st Ascension Passive",
        description: "If Chihayaburu comes into contact with Hydro/Pyro/Cryo/Electro while cast, Midare Ranzan plunge will deal an additional 200% ATK of that elemental DMG.",
      },
      {
        name: "Poetics of Fuubutsu",
        type: "4th Ascension Passive",
        description: "Upon triggering Swirl, Kazuha grants all party members 0.04% Elemental DMG Bonus for the swirled element per point of Elemental Mastery for 8s.",
      },
      {
        name: "Cloud Strider",
        type: "Utility Passive",
        description: "Decreases sprinting Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Scarlet Hills', effect: 'Decreases Chihayaburu\'s CD by 10%. Using Kazuha Slash resets the CD of Chihayaburu.' },
      { level: 2, name: 'Yamaarashi Tailwind', effect: 'The Autumn Whirlwind field increases Kazuha\'s own EM by 200 and the active character\'s EM by 200.' },
      { level: 3, name: 'Maple Monogatari', effect: 'Increases the Level of Chihayaburu by 3.' },
      { level: 4, name: 'Oozora Genpou', effect: 'When Kazuha\'s Energy is below 45, restores Energy on Skill tap/hold and while gliding.' },
      { level: 5, name: 'Wisdom of Bansei', effect: 'Increases the Level of Kazuha Slash by 3.' },
      { level: 6, name: 'Crimson Momiji', effect: 'Kazuha gains Anemo Infusion for 5s after using Skill or Burst, and attacks deal 0.2% extra DMG per EM point.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Freedom-Sworn', 'Xiphos\' Moonlight', 'Iron Sting', 'Favonius Sword'],
      bestArtifacts: ['Viridescent Venerer'],
      mainStats: {
        sands: 'Elemental Mastery',
        goblet: 'Elemental Mastery',
        circlet: 'Elemental Mastery'
      },
      subStats: ['Elemental Mastery', 'Energy Recharge', 'CRIT Rate', 'ATK%']
    }
  },
  {
    id: 'kamisato-ayaka',
    name: 'Kamisato Ayaka',
    title: 'Frostflake Heron',
    element: 'Cryo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Yashiro Commission / Kamisato Clan',
    birthday: 'September 28',
    constellationName: 'Grus Nivis',
    description: 'Daughter of the Yashiro Commission\'s Kamisato Clan. Dignified and elegant, as well as wise and strong, she is known as the Shirasagi Himegimi.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Ayaka.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Ayaka.png',
    stats: {
      hpBase: 12858,
      atkBase: 342,
      defBase: 784,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Kamisato Art: Kabuki",
        type: "Normal Attack",
        description: "Performs up to 5 rapid sword strikes with graceful elegance.",
      },
      {
        name: "Kamisato Art: Hyouka",
        type: "Elemental Skill",
        description: "Summons blooming ice to launch nearby opponents, dealing AoE Cryo DMG.",
      },
      {
        name: "Kamisato Art: Soumetsu",
        type: "Elemental Burst",
        description: "Summons a swirling Frostflake Sekki snowstorm that moves forward continuously, slashing opponents for immense Cryo DMG and exploding at duration end.",
      },
      {
        name: "Kamisato Art: Senho",
        type: "Alternate Sprint",
        description: "Ayaka cloaks herself within frozen fog, moving with high speed across ground or water; upon reappearing, infuses attacks with Cryo for 5s.",
      },
      {
        name: "Amatsuhito Ketsusaku",
        type: "1st Ascension Passive",
        description: "After using Kamisato Art: Hyouka, Ayaka's Normal and Charged Attacks deal 30% increased DMG for 6s.",
      },
      {
        name: "Kanten Senmyou Blessing",
        type: "4th Ascension Passive",
        description: "When Senho's emergence hits an opponent, Ayaka restores 10 Stamina and gains 18% Cryo DMG Bonus for 10s.",
      },
      {
        name: "Fruits of Shinsa",
        type: "Utility Passive",
        description: "When Ayaka crafts Weapon Ascension Materials, she has a 10% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Snowswept Sakura', effect: 'Normal or Charged attacks dealing Cryo DMG have a 50% chance to decrease Skill CD by 0.3s.' },
      { level: 2, name: 'Blizzard Blades Sekki', effect: 'Unleashing Soumetsu unleashes 2 smaller additional Frostflake Sekki dealing 20% of the original DMG.' },
      { level: 3, name: 'Frostbloom Kamifubuki', effect: 'Increases the Level of Kamisato Art: Soumetsu by 3.' },
      { level: 4, name: 'Ebb and Flow', effect: 'Opponents damaged by Soumetsu have their DEF decreased by 30% for 6s.' },
      { level: 5, name: 'Moonlit Cloud', effect: 'Increases the Level of Kamisato Art: Hyouka by 3.' },
      { level: 6, name: 'Dance of Suigetsu', effect: 'Ayaka gains Usurahi Butou every 10s, increasing her Charged Attack DMG by 298%.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Mistsplitter Reforged', 'Amenoma Kageuchi', 'Summit Shaper', 'The Black Sword'],
      bestArtifacts: ['Blizzard Strayer', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT DMG or ATK%'
      },
      subStats: ['CRIT DMG', 'ATK%', 'Energy Recharge', 'CRIT Rate']
    }
  },
  {
    id: 'kamisato-ayato',
    name: 'Kamisato Ayato',
    title: 'Pillar of Fortitude',
    element: 'Hydro',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Yashiro Commission / Kamisato Clan',
    birthday: 'March 26',
    constellationName: 'Cypressus Custos',
    description: 'The head of the Yashiro Commission and the elder brother of Ayaka. Resourceful and cunning, he manages clan and governmental affairs with effortless poise.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Ayato.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Ayato.png',
    stats: {
      hpBase: 13715,
      atkBase: 299,
      defBase: 769,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Kamisato Art: Marobashi",
        type: "Normal Attack",
        description: "Performs up to 5 rapid strikes.",
      },
      {
        name: "Kamisato Art: Kyouka",
        type: "Elemental Skill",
        description: "Shifts position, leaving a watery illusion while entering Takimeguri Kanka state to unleash blindingly fast Shunsuiken Hydro slashes that stack Namisen.",
      },
      {
        name: "Kamisato Art: Suiyuu",
        type: "Elemental Burst",
        description: "Unfurls a garden of purity that rains Bloomwater Blades dealing AoE Hydro DMG and boosting party Normal Attack DMG by 20%.",
      },
      {
        name: "Mine Wo Matoishi Kiyotaki",
        type: "1st Ascension Passive",
        description: "Using Kamisato Art: Kyouka grants Ayato 2 Namisen stacks; when the watery illusion explodes, Ayato gains max Namisen stacks.",
      },
      {
        name: "Michiyuku Hagetsu",
        type: "4th Ascension Passive",
        description: "If Ayato is not on the field and his Energy is below 40, he regenerates 2 Energy per second.",
      },
      {
        name: "Kamisato Art: Daily Cook",
        type: "Utility Passive",
        description: "When Ayato cooks a dish perfectly, he has an 18% chance to receive an additional \"Suspicious\" dish of the same type.",
      },
    ],
    constellations: [
      { level: 1, name: 'Kyouka Fuushi', effect: 'Shunsuiken DMG is increased by 40% against opponents with 50% HP or less.' },
      { level: 2, name: 'World Source', effect: 'Namisen max stack count increased to 5; with at least 3 stacks, Ayato\'s Max HP is increased by 50%.' },
      { level: 3, name: 'To Admire the Flowers', effect: 'Increases the Level of Kamisato Art: Kyouka by 3.' },
      { level: 4, name: 'Endless Flow', effect: 'After using Burst, all nearby party members gain 15% increased Normal Attack SPD for 15s.' },
      { level: 5, name: 'Bansui Ichiro', effect: 'Increases the Level of Kamisato Art: Suiyuu by 3.' },
      { level: 6, name: 'Boundless Origin', effect: 'After using Skill, Ayato\'s next Shunsuiken attack will unleash 2 extra strikes dealing 450% ATK each.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Haran Geppaku Futsu', 'Mistsplitter Reforged', 'Primordial Jade Cutter', 'The Black Sword'],
      bestArtifacts: ['Echoes of an Offering', 'Heart of Depth', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Hydro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge', 'HP%']
    }
  },
  {
    id: 'yae-miko',
    name: 'Yae Miko',
    title: 'Astute Amusement',
    element: 'Electro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Grand Narukami Shrine / Yae Publishing House',
    birthday: 'June 27',
    constellationName: 'Divina Vulpes',
    description: 'Lady Guuji of the Grand Narukami Shrine and the editor-in-chief of Yae Publishing House. Unpredictable, elegant, and intimately acquainted with the Raiden Shogun.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Yae.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Yae.png',
    stats: {
      hpBase: 10372,
      atkBase: 340,
      defBase: 569,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Spiritfox Sin-Eater",
        type: "Normal Attack",
        description: "Summons kitsune spirits to initiate up to 3 attacks dealing Electro DMG.",
      },
      {
        name: "Yakan Evocation: Sesshou Sakura",
        type: "Elemental Skill",
        description: "Swiftly leaves behind up to 3 Sesshou Sakura totems that periodically strike nearby enemies with lightning bolts.",
      },
      {
        name: "Great Secret Art: Tenko Kenshin",
        type: "Elemental Burst",
        description: "Summons a lightning strike dealing AoE Electro DMG, destroying nearby Sesshou Sakura and transforming each into a devastating Tenko Thunderbolt.",
      },
      {
        name: "The Shrine's Sacred Shade",
        type: "1st Ascension Passive",
        description: "When casting Tenko Kenshin, each Sesshou Sakura destroyed resets the cooldown for 1 charge of Yakan Evocation: Sesshou Sakura.",
      },
      {
        name: "Enlightened Blessing",
        type: "4th Ascension Passive",
        description: "Every point of Elemental Mastery Yae Miko possesses increases Sesshou Sakura DMG by 0.15%.",
      },
      {
        name: "Meditations of a Yako",
        type: "Utility Passive",
        description: "Has a 25% chance to get 1 regional Character Talent Material of the same region and base rarity when crafting.",
      },
    ],
    constellations: [
      { level: 1, name: 'Yakan Offering', effect: 'Each Tenko Thunderbolt triggered by Burst restores 8 Elemental Energy to Yae Miko.' },
      { level: 2, name: 'Fox\'s Mooncall', effect: 'Sesshou Sakura start at Level 2, can reach Level 4, and their attack range is increased by 60%.' },
      { level: 3, name: 'The Seven Glamours', effect: 'Increases the Level of Yakan Evocation: Sesshou Sakura by 3.' },
      { level: 4, name: 'Sakura Channeling', effect: 'When Sesshou Sakura lightning hits opponents, all nearby party members gain 20% Electro DMG bonus for 5s.' },
      { level: 5, name: 'Mischievous Teasing', effect: 'Increases the Level of Great Secret Art: Tenko Kenshin by 3.' },
      { level: 6, name: 'Forbidden Art: Daisesshou', effect: 'Sesshou Sakura attacks ignore 60% of the opponent\'s DEF.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Kagura\'s Verity', 'A Thousand Floating Dreams', 'The Widsith', 'Solar Pearl'],
      bestArtifacts: ['Golden Troupe', 'Gilded Dreams', 'Thundering Fury'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge']
    }
  },
  {
    id: 'yoimiya',
    name: 'Yoimiya',
    title: 'Frolicking Flames',
    element: 'Pyro',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Naganohara Fireworks',
    birthday: 'June 21',
    constellationName: 'Carassius Auratus',
    description: 'Current owner of Naganohara Fireworks. Known as the "Queen of the Summer Festival," she crafts sparkling fireworks that bring warmth and cheer to all.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Yoimiya.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Yoimiya.png',
    stats: {
      hpBase: 10164,
      atkBase: 323,
      defBase: 615,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Firework Flare-Up",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive shots with a bow; charged shots can charge Kindling Arrows that home in on nearby targets.",
      },
      {
        name: "Niwabi Fire-Dance",
        type: "Elemental Skill",
        description: "Surrounds herself with saltpeter blaze, converting all Normal Attack arrows into blazing Blazing Arrows dealing increased Pyro DMG.",
      },
      {
        name: "Ryuukin Saxifrage",
        type: "Elemental Burst",
        description: "Leaps into the air to fire explosive rockets, marking an enemy with Aurous Blaze which detonates for AoE Pyro DMG when struck by other party members.",
      },
      {
        name: "Tricks of the Trouble-Maker",
        type: "1st Ascension Passive",
        description: "During Niwabi Fire-Dance, shots from Yoimiya's Normal Attack increase her Pyro DMG Bonus by 2% on hit, up to 10 stacks (20%).",
      },
      {
        name: "Summer Night's Dawn",
        type: "4th Ascension Passive",
        description: "Using Ryuukin Saxifrage causes nearby party members to gain 10% ATK for 15s, plus 1% extra ATK per stack of Tricks of the Trouble-Maker.",
      },
      {
        name: "Blazing Match",
        type: "Utility Passive",
        description: "When crafting furnishings or courtyard items, refunds 100% of one material used.",
      },
    ],
    constellations: [
      { level: 1, name: 'Agate Ryuukin', effect: 'Aurous Blaze duration increased by 4s; defeating marked enemies grants Yoimiya 20% ATK for 20s.' },
      { level: 2, name: 'A Sleeve of Dynasties', effect: 'When Yoimiya\'s Pyro DMG scores a CRIT Hit, gains 25% Pyro DMG Bonus for 6s.' },
      { level: 3, name: 'Trickster\'s Flare', effect: 'Increases the Level of Niwabi Fire-Dance by 3.' },
      { level: 4, name: 'Pyrotechnic Professional', effect: 'When Aurous Blaze explodes, Niwabi Fire-Dance CD is decreased by 1.2s.' },
      { level: 5, name: 'A Summer Festival\'s Eve', effect: 'Increases the Level of Ryuukin Saxifrage by 3.' },
      { level: 6, name: 'Naganohara Meteor Swarm', effect: 'During Niwabi Fire-Dance, Normal Attacks have a 50% chance to fire an extra Blazing Arrow dealing 60% DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Thundering Pulse', 'Rust', 'Aqua Simulacra', 'Slingshot'],
      bestArtifacts: ['Shimenawa\'s Reminiscence', 'Crimson Witch of Flames'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge']
    }
  },
  {
    id: 'arataki-itto',
    name: 'Arataki Itto',
    title: 'Hanamizaka Heroics',
    element: 'Geo',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Arataki Gang',
    birthday: 'June 1',
    constellationName: 'Taurus Iracundus',
    description: 'The first and greatest head of the Arataki Gang, active in Hanamizaka. Fast as the wind and mighty as thunder, he is a crimson oni of grand bravado.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Itto.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Itto.png',
    stats: {
      hpBase: 12858,
      atkBase: 227,
      defBase: 959,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Fight Club Legend",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive strikes; 2nd and 4th hits grant Superlative Superstrength stacks for Arataki Kesagiri slashes.",
      },
      {
        name: "Masatsu Zesshou: Akaushi Burst!",
        type: "Elemental Skill",
        description: "Hurls Ushi, the young akaushi bull, dealing Geo DMG, taunting enemies, and granting Superlative Superstrength when taking damage or leaving.",
      },
      {
        name: "Royal Descent: Behold, Itto the Evil!",
        type: "Elemental Burst",
        description: "Unleashes his inner Raging Oni King, wielding the Kanabou infused with Geo and converting DEF into colossal ATK.",
      },
      {
        name: "Arataki Ichiban",
        type: "1st Ascension Passive",
        description: "When performing consecutive Arataki Kesagiri slashes, each slash increases attack speed by 10% (max 30%) and increases resistance to interruption.",
      },
      {
        name: "Bloodline of the Crimson Oni",
        type: "4th Ascension Passive",
        description: "Arataki Kesagiri slash DMG is increased by 35% of Arataki Itto's DEF.",
      },
      {
        name: "Woodchuck Chucked",
        type: "Utility Passive",
        description: "When a party member chops trees, has a 25% chance to obtain an additional wood log.",
      },
    ],
    constellations: [
      { level: 1, name: 'Stay a While and Listen Up', effect: 'Using Burst immediately grants Itto 2 stacks of Superlative Superstrength, then 1 extra stack every 0.5s for 1.5s.' },
      { level: 2, name: 'Gather \'Round, It\'s a Brawl!', effect: 'After using Burst, each Geo party member decreases Burst CD by 1.5s and restores 6 Energy to Itto.' },
      { level: 3, name: 'Horns Lowered, Coming Through', effect: 'Increases the Level of Masatsu Zetsugi: Akaushi Burst! by 3.' },
      { level: 4, name: 'Jailhouse Bread and Butter', effect: 'When Burst expires, all party members gain 20% DEF and 20% ATK for 10s.' },
      { level: 5, name: '10 Years of Hanamizaka Fame', effect: 'Increases the Level of Royal Descent: Behold, Itto the Evil! by 3.' },
      { level: 6, name: 'Arataki Itto, Present!', effect: 'Arataki Kesagiri slashes gain 70% CRIT DMG and have a 50% chance not to consume Superstrength stacks.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Redhorn Stonethresher', 'Serpent Spine', 'Whiteblind'],
      bestArtifacts: ['Husk of Opulent Dreams'],
      mainStats: {
        sands: 'DEF%',
        goblet: 'Geo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'DEF%', 'Energy Recharge']
    }
  },
  {
    id: 'sangonomiya-kokomi',
    name: 'Sangonomiya Kokomi',
    title: 'Pearl of Wisdom',
    element: 'Hydro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Watatsumi Island',
    birthday: 'February 22',
    constellationName: 'Dracaena Somnolenta',
    description: 'The Divine Priestess of Watatsumi Island and a supreme military strategist. Gentle and benevolent, she commands healing tides and fish apparitions.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Kokomi.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Kokomi.png',
    stats: {
      hpBase: 13471,
      atkBase: 222,
      defBase: 657,
      ascensionStat: 'Hydro DMG Bonus',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "The Shape of Water",
        type: "Normal Attack",
        description: "Performs up to 3 consecutive swimming fish attacks dealing Hydro DMG.",
      },
      {
        name: "Kurage's Oath",
        type: "Elemental Skill",
        description: "Summons a Bake-Kurage created from water that heals active allies and deals continuous Hydro DMG to nearby opponents.",
      },
      {
        name: "Nereid's Ascension",
        type: "Elemental Burst",
        description: "Dons a Ceremonial Garment, boosting Normal Attack, Charged Attack, and Bake-Kurage DMG based on Max HP, while healing party members on hit and allowing water walking.",
      },
      {
        name: "Tamanooya's Casket",
        type: "1st Ascension Passive",
        description: "If Kokomi's Bake-Kurage is on the field when using Nereid's Ascension, Bake-Kurage duration is refreshed.",
      },
      {
        name: "Song of Pearls",
        type: "4th Ascension Passive",
        description: "During Nereid's Ascension, Normal and Charged Attack DMG bonus based on HP receives a further increase equal to 15% of Healing Bonus.",
      },
      {
        name: "Flawless Strategy & Box of 500 Medicines",
        type: "Utility Passive",
        description: "Kokomi gains a 25% Healing Bonus, but her CRIT Rate is reduced by 100%; decreases swimming Stamina consumption by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'At Water\'s Edge', effect: 'During Burst, the final strike of Kokomi\'s Normal Attack unleashes a swimming fish dealing 30% Max HP as Hydro DMG.' },
      { level: 2, name: 'The Clouds Like Waves Rippling', effect: 'Kokomi gains increased healing toward characters with 50% HP or less.' },
      { level: 3, name: 'The Moon, A Ship O\'er the Ocean', effect: 'Increases the Level of Nereid\'s Ascension by 3.' },
      { level: 4, name: 'The Moon Overlooks the Waters', effect: 'During Burst, Kokomi\'s Normal Attack SPD increases by 10% and hits restore 0.8 Energy.' },
      { level: 5, name: 'All Streams Flow to the Sea', effect: 'Increases the Level of Kurage\'s Oath by 3.' },
      { level: 6, name: 'Sango Isshin', effect: 'During Burst, when Kokomi heals a character with 80% HP or more, she gains 40% Hydro DMG Bonus for 4s.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Everlasting Moonglow', 'Thrilling Tales of Dragon Slayers', 'Prototype Amber', 'Sacrificial Fragments'],
      bestArtifacts: ['Ocean-Hued Clam', 'Tenacity of the Millelith'],
      mainStats: {
        sands: 'HP% or Energy Recharge',
        goblet: 'Hydro DMG Bonus or HP%',
        circlet: 'Healing Bonus'
      },
      subStats: ['HP%', 'Energy Recharge', 'Elemental Mastery', 'Flat HP']
    }
  },
  {
    id: 'chiori',
    name: 'Chiori',
    title: 'The Thundering Seamstress',
    element: 'Geo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Chioriya Boutique',
    birthday: 'August 17',
    constellationName: 'Cisoria',
    description: 'The sharp-tongued boss and chief designer of Chioriya Boutique in Fontaine, hailing from Inazuma. Weaves dual Geo blades and automaton dolls with high fashion flair.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/8/88/Chiori_Icon.png',
    stats: {
      hpBase: 11438,
      atkBase: 323,
      defBase: 953,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Weaving Blade",
        type: "Normal Attack",
        description: "Performs up to 4 clean dual-blade strikes.",
      },
      {
        name: "Fluttering Hasode",
        type: "Elemental Skill",
        description: "Dashes forward, summoning the automaton doll Sode to deliver upward slashes and coordinated AoE Geo DMG.",
      },
      {
        name: "Hiyoku: Twin Blades",
        type: "Elemental Burst",
        description: "Unsheathes twin ceremonial blades, slicing through cloth and steel to deal massive AoE Geo DMG based on ATK and DEF.",
      },
      {
        name: "Tailor-Made",
        type: "1st Ascension Passive",
        description: "Shortly after pressing Fluttering Hasode, tapping Skill switches to the next character and grants Seize the Moment, or tapping Normal Attack infuses Geo for 5s.",
      },
      {
        name: "The Finishing Touch",
        type: "4th Ascension Passive",
        description: "When a nearby party member creates a Geo Construct, Chiori gains 20% Geo DMG Bonus for 20s.",
      },
      {
        name: "Brocade Mollusk",
        type: "Utility Passive",
        description: "When any party member is wearing an outfit other than default or default wind glider, party gains 10% Movement SPD.",
      },
    ],
    constellations: [
      { level: 1, name: 'Six Paths of Webbing', effect: 'Sode\'s attack range increased by 50%; having any Geo party member summons the second Sode even without constructs.' },
      { level: 2, name: 'In Five Colors Dyed', effect: 'Using Burst summons a miniature automaton Kinu that attacks alongside party members.' },
      { level: 3, name: 'Four Brocade Embellishments', effect: 'Increases the Level of Fluttering Hasode by 3.' },
      { level: 4, name: 'A Tailor\'s Three Courtesies', effect: 'Triggering Tailor-Made follow-up summons Kinu to unleash cutting strikes.' },
      { level: 5, name: 'Two Silken Plumes', effect: 'Increases the Level of Hiyoku: Twin Blades by 3.' },
      { level: 6, name: 'Sole Purpose', effect: 'After triggering Tailor-Made, Skill CD reduced by 12s, and Chiori\'s Normal Attacks gain Geo DMG scaling by 235% of DEF.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Uraku Misugiri', 'Cinnabar Spindle', 'Harbinger of Dawn', 'Primordial Jade Cutter'],
      bestArtifacts: ['Golden Troupe', 'Husk of Opulent Dreams'],
      mainStats: {
        sands: 'DEF% or ATK%',
        goblet: 'Geo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'DEF%', 'ATK%'],
    }
  },
  {
    id: 'gorou',
    name: 'Gorou',
    title: 'Canine Warrior',
    element: 'Geo',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Inazuma',
    affiliation: 'Watatsumi Army',
    birthday: 'May 18',
    constellationName: 'Canis Bellatoris',
    description: 'The courageous and loyal general of the Watatsumi Island resistance, providing steadfast DEF and Geo damage buffs for all earthen allies on the front lines.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/f/fe/Gorou_Icon.png',
    stats: {
      hpBase: 9570,
      atkBase: 183,
      defBase: 648,
      ascensionStat: 'Geo DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Ripping Fang Fletching",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive bow shots.",
      },
      {
        name: "Inuzuka All-Round Defense",
        type: "Elemental Skill",
        description: "Plants a General's War-Banner providing party buffs based on number of Geo characters: 1 Geo = DEF, 2 Geo = Interruption RES, 3 Geo = Geo DMG Bonus.",
      },
      {
        name: "Juuga: Forward Unto Victory",
        type: "Elemental Burst",
        description: "Creates a General's Glory field that moves with active character, dealing periodic Geo DMG, pulling Crystallize shards, and boosting team DEF.",
      },
      {
        name: "Heedless of the Wind and Weather",
        type: "1st Ascension Passive",
        description: "After using Juuga: Forward Unto Victory, all nearby party members' DEF increases by 25% for 12s.",
      },
      {
        name: "A Favor Repaid",
        type: "4th Ascension Passive",
        description: "Increases Inuzuka All-Round Defense DMG and Juuga: Forward Unto Victory DMG by 156% of Gorou's DEF.",
      },
      {
        name: "Seeker of Shinies",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Inazuma on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Rushing Hound: Swift as the Wind', effect: 'When characters dealing Geo DMG hit opponents, War-Banner CD reduced by 2s.' },
      { level: 2, name: 'Hound Sitting: Steady as a Clock', effect: 'Picking up a Crystallize shard extends General\'s Glory duration by 1s (up to 3s).' },
      { level: 3, name: 'Hound Pouncing: Fierce as Fire', effect: 'Increases the Level of Inuzaka All-Round Defense by 3.' },
      { level: 4, name: 'Hound Savoring: Warmth of Water', effect: 'When General\'s Glory has 2+ Geo members, heals active character every 1.5s based on 50% Gorou\'s DEF.' },
      { level: 5, name: 'Hound Striking: Clashing Tempest', effect: 'Increases the Level of Juuga: Forward Unto Victory by 3.' },
      { level: 6, name: 'Hound Valiant: Crag Warding', effect: 'Casting Skill or Burst increases Geo CRIT DMG of all party members by 10% to 40% based on Geo members.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Favonius Warbow', 'Sacrificial Bow', 'Elegy for the End'],
      bestArtifacts: ['Husk of Opulent Dreams', 'Noblesse Oblige', 'The Exile'],
      mainStats: {
        sands: 'DEF% or Energy Recharge',
        goblet: 'DEF%',
        circlet: 'DEF% or CRIT Rate',
      },
      subStats: ['Energy Recharge', 'DEF%', 'CRIT Rate', 'Flat DEF'],
    }
  },
  {
    id: 'kirara',
    name: 'Kirara',
    title: 'Cat Upon the Eaves',
    element: 'Dendro',
    weaponType: 'Sword',
    rarity: 4,
    region: 'Inazuma',
    affiliation: 'Komaniya Express',
    birthday: 'January 22',
    constellationName: 'Arcella',
    description: 'A cheerful nekomata courier working for Inazuma\'s Komaniya Express. Curls into a delivery parcel box to scamper across walls and shields her team with cat-box shields.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b6/Kirara_Icon.png',
    stats: {
      hpBase: 12180,
      atkBase: 223,
      defBase: 546,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Boxcutter",
        type: "Normal Attack",
        description: "Performs up to 4 rapid claw and box strikes.",
      },
      {
        name: "Meow-teor Kick",
        type: "Elemental Skill",
        description: "Delivers a flying tail kick or transforms into Urgent Neko Parcel delivery box, gaining Dendro Shield, increased movement, and climbing speed.",
      },
      {
        name: "Secret Art: Surprise Dispatch",
        type: "Elemental Burst",
        description: "Smashes a Special Delivery Package into enemies dealing AoE Dendro DMG and scattering Cat Grass Cardamoms that detonate on contact.",
      },
      {
        name: "Bewitching, Betwitching Tails",
        type: "1st Ascension Passive",
        description: "When in Urgent Neko Parcel state, each crash into an enemy increases Shield absorption by 20%, stacking up to 3 times.",
      },
      {
        name: "Pupillary Variance",
        type: "4th Ascension Passive",
        description: "Every 1,000 Max HP Kirara possesses increases Meow-teor Kick DMG by 0.4% and Secret Art: Surprise Dispatch DMG by 0.3%.",
      },
      {
        name: "Cat's Creeping Carriage",
        type: "Utility Passive",
        description: "Animals who produce Fowl, Raw Meat, or Chilled Meat will not be startled when party members approach them.",
      },
    ],
    constellations: [
      { level: 1, name: 'Material Circulation', effect: 'Every 8,000 Max HP grants Kirara 1 extra Cat Grass Cardamom from Burst (up to 4 extra).' },
      { level: 2, name: 'Perfect Packaging', effect: 'When in Urgent Neko Parcel state, grants shields to co-op party members she dashes into.' },
      { level: 3, name: 'Universal Recognition', effect: 'Increases the Level of Meow-teor Kick by 3.' },
      { level: 4, name: 'Steed of Skanda', effect: 'When characters protected by shield use Normal Attacks, Kirara unleashes coordinated Dendro strikes.' },
      { level: 5, name: 'A Hundred Miles a Day', effect: 'Increases the Level of Secret Art: Surprise Dispatch by 3.' },
      { level: 6, name: 'Countless Sights to See', effect: 'Using Skill or Burst grants all party members 12% All Elemental DMG Bonus for 15s.' }
    ],
    build: {
      role: 'Shielder',
      bestWeapons: ['Key of Khaj-Nisut', 'The Dockhand\'s Assistant', 'Sacrificial Sword', 'Favonius Sword'],
      bestArtifacts: ['Tenacity of the Millelith', 'Deepwood Memories', 'Noblesse Oblige'],
      mainStats: {
        sands: 'HP%',
        goblet: 'HP%',
        circlet: 'HP%',
      },
      subStats: ['HP%', 'Flat HP', 'Energy Recharge', 'CRIT Rate'],
    }
  },
  {
    id: 'kujou-sara',
    name: 'Kujou Sara',
    title: 'Crowfeather Kaburaya',
    element: 'Electro',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Inazuma',
    affiliation: 'Tenryou Commission',
    birthday: 'July 14',
    constellationName: 'Flabellum Fulgur',
    description: 'The general of the Tenryou Commission and adopted daughter of the Kujou Clan, a loyal tengu warrior dedicated to upholding the Raiden Shogun\'s eternity.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/df/Kujou_Sara_Icon.png',
    stats: {
      hpBase: 9570,
      atkBase: 195,
      defBase: 628,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Tengu Bowmanship",
        type: "Normal Attack",
        description: "Performs up to 5 consecutive shots with a bow.",
      },
      {
        name: "Tengu Stormcall",
        type: "Elemental Skill",
        description: "Retreats with tengu swiftness, leaving a Crowfeather that triggers Tengu Juurai: Ambush, dealing Electro DMG and granting ATK bonus based on Sara's Base ATK.",
      },
      {
        name: "Subjugation: Koukou Sendou",
        type: "Elemental Burst",
        description: "Casts down Tengu Juurai: Titanbreaker, dealing immense AoE Electro DMG and spreading 4 consecutive clusters of Stormcluster lightning.",
      },
      {
        name: "Immovable Will",
        type: "1st Ascension Passive",
        description: "While in the Crowfeather Cover state, Aimed Shot charge times are decreased by 60%.",
      },
      {
        name: "Decorum",
        type: "4th Ascension Passive",
        description: "When Tengu Juurai: Ambush hits opponents, Sara restores 1.2 Energy to all party members for every 100% Energy Recharge she possesses.",
      },
      {
        name: "Land Survey",
        type: "Utility Passive",
        description: "When dispatched on an expedition in Inazuma, time consumed is decreased by 25%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Crow\'s Eye', effect: 'When Tengu Juurai grants ATK buff, Skill CD reduced by 1s.' },
      { level: 2, name: 'Dark Wings', effect: 'Using Tengu Stormcall leaves a weaker Crowfeather at Sara\'s original position dealing 30% DMG and granting ATK buff.' },
      { level: 3, name: 'The War Within', effect: 'Increases the Level of Subjugation: Koukou Sendou by 3.' },
      { level: 4, name: 'Severing Void', effect: 'The number of Stormclusters released by Titanbreaker increased to 6.' },
      { level: 5, name: 'Spellsinger', effect: 'Increases the Level of Tengu Stormcall by 3.' },
      { level: 6, name: 'Sin of Pride', effect: 'Characters who have their ATK increased by Tengu Juurai gain 60% Electro CRIT DMG.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Skyward Harp', 'Elegy for the End', 'Mouun\'s Moon', 'Favonius Warbow'],
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
    id: 'kuki-shinobu',
    name: 'Kuki Shinobu',
    title: 'Mender of Tribulations',
    element: 'Electro',
    weaponType: 'Sword',
    rarity: 4,
    region: 'Inazuma',
    affiliation: 'Arataki Gang',
    birthday: 'July 27',
    constellationName: 'Tribulatio Demptio',
    description: 'The capable and reliable deputy leader of the Arataki Gang, a multi-certified legal advisor who sacrifices HP to generate a revolving Electro Grass Ring that heals allies and triggers Hyperblooms.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Kuki_Shinobu_Icon.png',
    stats: {
      hpBase: 12288,
      atkBase: 212,
      defBase: 751,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Shinobu's Shadowsword",
        type: "Normal Attack",
        description: "Performs up to 4 rapid sword strikes.",
      },
      {
        name: "Sanctifying Ring",
        type: "Elemental Skill",
        description: "Sacrifices 30% of current HP to create a Grass Ring of Sanctification that follows active character, healing them and dealing periodic Electro DMG.",
      },
      {
        name: "Gyoei Narukami Kariyama Rite",
        type: "Elemental Burst",
        description: "Stabs an evil-cleansing blade into the ground, creating an Electro field dealing continuous AoE Electro DMG (extended duration if HP is ≤50%).",
      },
      {
        name: "Breaking Free",
        type: "1st Ascension Passive",
        description: "When Shinobu's HP is not higher than 50%, her Healing Bonus is increased by 15%.",
      },
      {
        name: "Heart's Repose",
        type: "4th Ascension Passive",
        description: "Grass Ring of Sanctification's healing amount is increased by 75% of EM, and DMG dealt is increased by 25% of EM.",
      },
      {
        name: "Protracted Prayers",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on an Inazuma Expedition for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'To Cloister Compassion', effect: 'Gyoei Narukami Kariyama Rite\'s AoE is increased by 50%.' },
      { level: 2, name: 'To Forsake Fortune', effect: 'Grass Ring of Sanctification\'s duration is increased by 3s (granting 100% uptime).' },
      { level: 3, name: 'To Deliberate Defiance', effect: 'Increases the Level of Sanctifying Ring by 3.' },
      { level: 4, name: 'To Sever Seclusion', effect: 'When active characters attack within Grass Ring, Thundergrass Mark deals 9.7% Max HP as Electro DMG.' },
      { level: 5, name: 'To Cease Craving', effect: 'Increases the Level of Gyoei Narukami Kariyama Rite by 3.' },
      { level: 6, name: 'To Ward Weakness', effect: 'When Shinobu takes lethal damage, she survives with 1 HP (CD: 60s). When HP drops below 25%, gains 150 EM for 15s.' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Freedom-Sworn', 'Xiphos\' Moonlight', 'Iron Sting', 'Toukabou Shigure'],
      bestArtifacts: ['Gilded Dreams', 'Flower of Paradise Lost', 'Tenacity of the Millelith'],
      mainStats: {
        sands: 'Elemental Mastery or HP%',
        goblet: 'Elemental Mastery or HP%',
        circlet: 'Elemental Mastery or Healing Bonus',
      },
      subStats: ['Elemental Mastery', 'HP%', 'Flat HP', 'Energy Recharge'],
    }
  },
  {
    id: 'sayu',
    name: 'Sayu',
    title: 'Mujina Ninja',
    element: 'Anemo',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Inazuma',
    affiliation: 'Shuumatsuban',
    birthday: 'October 19',
    constellationName: 'Animus Nymph',
    description: 'A diminutive ninja of the Shuumatsuban who wears a mujina hood, obsessed with sleeping in order to grow taller, and rolls endlessly across terrain like a sonic windwheel.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/2/22/Sayu_Icon.png',
    stats: {
      hpBase: 11854,
      atkBase: 244,
      defBase: 745,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '96',
    },
    skills: [
      {
        name: "Shuumatsuban Ninja Blade",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive claymore strikes.",
      },
      {
        name: "Yoohoo Art: Fuuin Dash",
        type: "Elemental Skill",
        description: "Curls up into a rolling Fuufuu Windwheel, rolling across the battlefield with high speed and absorbing Hydro/Pyro/Cryo/Electro.",
      },
      {
        name: "Yoohoo Art: Mujina Flurry",
        type: "Elemental Burst",
        description: "Summons a Muji-Muji Daruma that periodically heals allies with HP below 70% or attacks nearby enemies dealing Anemo DMG.",
      },
      {
        name: "Someone More Capable",
        type: "1st Ascension Passive",
        description: "When Sayu triggers a Swirl reaction, she heals all party members and nearby allies for 300 HP plus 1.2 HP per point of EM.",
      },
      {
        name: "No Work Today!",
        type: "4th Ascension Passive",
        description: "Muji-Muji Daruma healing gains an AoE splash: when healing active character, also heals other party members for 30% of that amount.",
      },
      {
        name: "Yoohoo Art: Silencer's Secret",
        type: "Utility Passive",
        description: "Crystalflies and certain other wild creatures are not startled when party members approach them.",
      },
    ],
    constellations: [
      { level: 1, name: 'Multi-Task no Jutsu', effect: 'Muji-Muji Daruma will simultaneously attack and heal without HP threshold limits.' },
      { level: 2, name: 'Eihiko on the Outskirts', effect: 'Fuuin Dash deals up to 66% increased damage the longer Sayu rolls.' },
      { level: 3, name: 'Eh, the Bunshin Can Handle It', effect: 'Increases the Level of Yoohoo Art: Mujina Flurry by 3.' },
      { level: 4, name: 'Skive: New and Improved', effect: 'Sayu recovers 1.2 Energy when she triggers a Swirl reaction.' },
      { level: 5, name: 'Speed Comes First', effect: 'Increases the Level of Yoohoo Art: Fuuin Dash by 3.' },
      { level: 6, name: 'Sleep O\'Clock', effect: 'Muji-Muji Daruma gains ATK and healing scaling with Sayu\'s Elemental Mastery (up to 400% ATK and 6,000 HP).' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Wolf\'s Gravestone', 'Favonius Greatsword', 'Mailed Flower', 'Rainslasher'],
      bestArtifacts: ['Viridescent Venerer', 'Ocean-Hued Clam'],
      mainStats: {
        sands: 'Energy Recharge or Elemental Mastery',
        goblet: 'Elemental Mastery or Anemo DMG',
        circlet: 'Healing Bonus or Elemental Mastery',
      },
      subStats: ['Elemental Mastery', 'Energy Recharge', 'ATK%', 'CRIT Rate'],
    }
  },
  {
    id: 'shikanoin-heizou',
    name: 'Shikanoin Heizou',
    title: 'Cyclone of Answers',
    element: 'Anemo',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Inazuma',
    affiliation: 'Tenryou Commission',
    birthday: 'July 24',
    constellationName: 'Cervus Minor',
    description: 'A prodigiously talented detective of the Tenryou Commission whose keen intuition and martial-arts brawling style crack the most baffling cases in Inazuma.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/2/20/Shikanoin_Heizou_Icon.png',
    stats: {
      hpBase: 10657,
      atkBase: 225,
      defBase: 684,
      ascensionStat: 'Anemo DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Fudou Style Martial Arts",
        type: "Normal Attack",
        description: "Performs up to 5 martial arts strikes infused with Anemo wind power.",
      },
      {
        name: "Heartstopper Strike",
        type: "Elemental Skill",
        description: "Charges wind to unleash a devastating fist strike; holding accumulates Declension stacks, culminating in a Conviction strike.",
      },
      {
        name: "Windmuster Kick",
        type: "Elemental Burst",
        description: "Leaps into the air and kicks a Windmuster Iris projectile that explodes into an Arresting Windtunnel pulling enemies and dealing AoE Anemo DMG.",
      },
      {
        name: "Paradoxical Practice",
        type: "1st Ascension Passive",
        description: "When Heizou activates a Swirl reaction while on the field, he gains 1 Declension stack for Heartstopper Strike.",
      },
      {
        name: "Penetrative Reasoning",
        type: "4th Ascension Passive",
        description: "Hitting opponents with Heartstopper Strike increases all party members' Elemental Mastery by 80 for 10s, excluding Heizou.",
      },
      {
        name: "Pre-Existing Guilt",
        type: "Utility Passive",
        description: "Decreases sprinting Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Named Juvenile Casebook', effect: 'Taking the field increases Normal Attack SPD by 15% and grants 1 Declension stack.' },
      { level: 2, name: 'Investigative Collection', effect: 'Burst pull effect enhanced and duration extended by 1s.' },
      { level: 3, name: 'Esoteric Puzzle Book', effect: 'Increases the Level of Heartstopper Strike by 3.' },
      { level: 4, name: 'Tome of Lies', effect: 'The first Windmuster Iris explosion restores 9 Energy to Heizou.' },
      { level: 5, name: 'Secret Archive', effect: 'Increases the Level of Windmuster Kick by 3.' },
      { level: 6, name: 'Curious Casefiles', effect: 'Each Declension stack increases Heartstopper Strike CRIT Rate by 4% and Conviction adds 32% CRIT DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Lost Prayer to the Sacred Winds', 'The Widsith', 'Solar Pearl', 'Kagura\'s Verity'],
      bestArtifacts: ['Viridescent Venerer', 'Desert Pavilion Chronicle', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Anemo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery'],
    }
  },
  {
    id: 'thoma',
    name: 'Thoma',
    title: 'Protector From Afar',
    element: 'Pyro',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Inazuma',
    affiliation: 'Kamisato Clan / Yashiro Commission',
    birthday: 'January 9',
    constellationName: 'Rubeum Scutum',
    description: 'The Kamisato Clan\'s housekeeper and an active "fixer" in Inazuma, originally from Mondstadt. Deploys blazing defensive shields that refresh with normal attacks, making him an exceptional Burgeon trigger.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5b/Thoma_Icon.png',
    stats: {
      hpBase: 10331,
      atkBase: 202,
      defBase: 751,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Swiftshatter Spear",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive spear strikes.",
      },
      {
        name: "Blazing Blessing",
        type: "Elemental Skill",
        description: "Vaults forward with a flying kick dealing AoE Pyro DMG and casting a Blazing Barrier shield that absorbs Pyro DMG with 250% effectiveness.",
      },
      {
        name: "Crimson Ooyoroi",
        type: "Elemental Burst",
        description: "Spins his spear to unleash Scorching Panoply, triggering Fiery Collapses dealing AoE Pyro DMG and generating stacking Blazing Barriers upon Normal Attacks.",
      },
      {
        name: "Imbricated Armor",
        type: "1st Ascension Passive",
        description: "When the active character obtains or refreshes a Blazing Barrier, shield strength increases by 5% for 6s, stacking up to 5 times.",
      },
      {
        name: "Flaming Assault",
        type: "4th Ascension Passive",
        description: "DMG dealt by Crimson Ooyoroi's Fiery Collapses is increased by 2.2% of Thoma's Max HP.",
      },
      {
        name: "Snap and Swing",
        type: "Utility Passive",
        description: "Successful fishing in Inazuma grants a 20% chance of catching double the fish.",
      },
    ],
    constellations: [
      { level: 1, name: 'A Comrade\'s Duty', effect: 'When characters protected by shield are attacked, Skill and Burst CD reduced by 3s.' },
      { level: 2, name: 'A Subordinate\'s Skills', effect: 'Crimson Ooroyoi\'s duration is increased by 3s.' },
      { level: 3, name: 'Fortified Resolve', effect: 'Increases the Level of Blazing Blessing by 3.' },
      { level: 4, name: 'Long-Term Planning', effect: 'Using Crimson Ooroyoi restores 15 Energy to Thoma.' },
      { level: 5, name: 'Raging Wildfire', effect: 'Increases the Level of Crimson Ooroyoi by 3.' },
      { level: 6, name: 'Heart\'s Reckoning', effect: 'When Blazing Barrier is obtained or refreshed, all party members\' Normal, Charged, and Plunging Attack DMG increased by 15% for 6s.' }
    ],
    build: {
      role: 'Shielder',
      bestWeapons: ['Kitain Cross Spear', 'Favonius Lance', 'Rightful Reward', 'Black Tassel'],
      bestArtifacts: ['Gilded Dreams (Burgeon)', 'Flower of Paradise Lost', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Energy Recharge or Elemental Mastery',
        goblet: 'HP% or Elemental Mastery',
        circlet: 'HP% or Elemental Mastery',
      },
      subStats: ['Energy Recharge', 'Elemental Mastery', 'HP%', 'Flat HP'],
    }
  },
  {
    id: 'yumemizuki-mizuki',
    name: 'Yumemizuki Mizuki',
    title: 'Dreamweaver of the Sacred Forest',
    element: 'Anemo',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Inazuma',
    affiliation: 'Grand Narukami Shrine / Youkai Court',
    birthday: 'November 15',
    constellationName: 'Somnium Kitsune',
    description: 'An ethereal dreamweaver of the Narukami sacred forest who spins illusions and lucid dream phantasms into powerful Anemo vortexes.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/f/f6/Yumemizuki_Mizuki_Icon.png',
    stats: {
      hpBase: 13400,
      atkBase: 340,
      defBase: 710,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Reverie Parasol",
        type: "Normal Attack",
        description: "Performs up to 4 flowing strikes using a traditional ceremonial parasol.",
      },
      {
        name: "Mistbloom Flutter",
        type: "Elemental Skill",
        description: "Unfolds a mist-veiled parasol, dealing Anemo and Electro DMG while creating a gentle healing mist.",
      },
      {
        name: "Phantasmal Bloom",
        type: "Elemental Burst",
        description: "Summons an ethereal blooming garden dealing AoE Anemo DMG and granting party members an Elemental Mastery buff.",
      },
      {
        name: "Twilight Waking",
        type: "1st Ascension Passive",
        description: "When Mistbloom Flutter triggers an Electro Swirl, all nearby party members gain 60 Elemental Mastery for 10s.",
      },
      {
        name: "Dewdrop Awakening",
        type: "4th Ascension Passive",
        description: "Increases Yumemizuki's Anemo and Electro DMG Bonus by 0.2% for every 10 Elemental Mastery she possesses, up to 20%.",
      },
      {
        name: "Dreamer's Compass",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Inazuma on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Phantasmal Veil', effect: 'Illusory Sakura Mirage gains 1 extra charge and pulls with 50% stronger force.' },
      { level: 2, name: 'Dreamer\'s Awakening', effect: 'Opponents inside the dream realm have their All Elemental RES decreased by 20%.' },
      { level: 3, name: 'Scroll of Reverie', effect: 'Increases the Level of Illusory Sakura Mirage by 3.' },
      { level: 4, name: 'Slumbering Willow', effect: 'Burst restores 15 Energy to all off-field party members.' },
      { level: 5, name: 'Kitsune Dreamgate', effect: 'Increases the Level of Night of a Thousand Dreams by 3.' },
      { level: 6, name: 'Everlasting Phantasmagoria', effect: 'Mizuki gains 70% Anemo CRIT DMG and can slash through enemy invulnerability frames.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Kagura\'s Verity', 'A Thousand Floating Dreams', 'The Widsith'],
      bestArtifacts: ['Viridescent Venerer', 'Golden Troupe'],
      mainStats: {
        sands: 'Elemental Mastery or ATK%',
        goblet: 'Anemo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Elemental Mastery', 'Energy Recharge'],
    }
  }
];
