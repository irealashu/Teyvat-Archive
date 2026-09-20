import { Character } from '../../types';

export const FONTAINE_CHARACTERS: Character[] = [
  {
    id: 'furina',
    name: 'Furina',
    title: 'Endless Solo of Solitude',
    element: 'Hydro',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Court of Fontaine',
    birthday: 'October 13',
    constellationName: 'Animula Choragi',
    description: 'The beloved star and former Hydro Archon of Fontaine, who played the role of deity for five hundred years to deceive Heavenly Principles and avert the prophecy.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Furina.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Furina.png',
    stats: {
      hpBase: 15307,
      atkBase: 244,
      defBase: 696,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Soloist's Solicitation",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive strikes and switches between Ousia and Pneuma alignments via Charged Attacks.",
      },
      {
        name: "Salon Solitaire",
        type: "Elemental Skill",
        description: "Invites Salon Members (Gentilhomme Usher, Surintendante Chevalmarin, Mademoiselle Crabaletta) to deal continuous Hydro DMG while draining party HP, or Singer of Many Waters to heal the active character.",
      },
      {
        name: "Let the People Rejoice",
        type: "Elemental Burst",
        description: "Creates a stage of foam, granting party members Universal DMG Bonus and Incoming Healing Bonus based on Fanfare points accumulated via HP fluctuations.",
      },
      {
        name: "Endless Waltz",
        type: "1st Ascension Passive",
        description: "When the active character in your party receives healing, if the source of the healing is not Furina herself and the healing overflows, Furina will heal nearby party members by 2% of their Max HP once every 2s for 4s.",
      },
      {
        name: "Unheard Confession",
        type: "4th Ascension Passive",
        description: "Every 1,000 points of Furina's Max HP buffs Salon Solitaire: Salon Members' DMG dealt increases by 0.7% (max 28%), and Singer of Many Waters' healing interval decreases by 0.4% (max 16%).",
      },
      {
        name: "The Sea Is My Stage",
        type: "Utility Passive",
        description: "Xenochromatic Fontemer Aberrant ability CD is decreased by 30% underwater.",
      },
    ],
    constellations: [
      { level: 1, name: '"Love Is a Rebellious Bird That None Can Tame"', effect: 'Furina immediately gains 150 Fanfare upon using Burst, and the Fanfare limit is increased by 100.' },
      { level: 2, name: '"A Woman Adapts Like Duckweed in the Wind"', effect: 'Fanfare gain increased by 250%; excess Fanfare increases Furina\'s Max HP by up to 140%.' },
      { level: 3, name: '"My Secret Is Hidden Within Me"', effect: 'Increases the Level of Let the People Rejoice by 3.' },
      { level: 4, name: '"They Know Not Life, Who Ne\'er In the Green Abyss Dwelt!"', effect: 'When Salon Members hit opponents or Singer heals, Furina restores 4 Energy every 5s.' },
      { level: 5, name: '"His Name I Now Know, It Is...!"', effect: 'Increases the Level of Salon Solitaire by 3.' },
      { level: 6, name: '"Hear Me — Let Us Raise the Chalice of Love!"', effect: 'Using Skill infuses Normal Attacks with Hydro and triggers team healing or enhanced damage based on alignment.' }
    ],
    build: {
      role: 'Buffer',
      bestWeapons: ['Splendor of Tranquil Waters', 'Festering Desire', 'Fleuve Cendre Ferryman', 'Favonius Sword'],
      bestArtifacts: ['Golden Troupe', 'Tenacity of the Millelith'],
      mainStats: {
        sands: 'HP% or Energy Recharge',
        goblet: 'HP% or Hydro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['Energy Recharge', 'HP%', 'CRIT Rate', 'CRIT DMG', 'Flat HP']
    }
  },
  {
    id: 'neuvillette',
    name: 'Neuvillette',
    title: 'Ordainer of Inexorable Judgment',
    element: 'Hydro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Court of Fontaine',
    birthday: 'December 18',
    constellationName: 'Leviathan Judicator',
    description: 'The Iudex of Fontaine and the reincarnated Hydro Sovereign Dragon. Fair, solemn, and in charge of the Palais Mermonia judicial hearings.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Neuvillette.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Neuvillette.png',
    stats: {
      hpBase: 14695,
      atkBase: 208,
      defBase: 576,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "As Water Seeks Equilibrium",
        type: "Normal Attack",
        description: "Performs up to 3 water strikes, or charges Equitable Judgment: a torrent of high-pressure water beams dealing continuous AoE Hydro DMG based on Max HP.",
      },
      {
        name: "O Tears, I Shall Repay",
        type: "Elemental Skill",
        description: "Summons a Raging Waterfall dealing AoE Hydro DMG based on Max HP and generating 3 Sourcewater Droplets to instantly charge Equitable Judgment.",
      },
      {
        name: "O Tides, I Have Returned",
        type: "Elemental Burst",
        description: "Discharges crushing waves dealing AoE Hydro DMG based on Max HP, followed by 2 smaller waterfalls that spawn 6 Sourcewater Droplets.",
      },
      {
        name: "Heir to the Ancient Sea's Authority",
        type: "1st Ascension Passive",
        description: "When party members trigger Vaporize, Frozen, Electro-Charged, Bloom, Hydro Swirl, or Hydro Crystallize, Neuvillette gains stacks increasing Equitable Judgment DMG by up to 160%.",
      },
      {
        name: "Discipline of the Supreme Arbitration",
        type: "4th Ascension Passive",
        description: "For each 1% of Neuvillette's current HP above 30% Max HP, he gains 0.6% Hydro DMG Bonus, up to a maximum of 30%.",
      },
      {
        name: "Gather Like the Tide",
        type: "Utility Passive",
        description: "Increases underwater sprint SPD for all party members by 15%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Venerable Institution', effect: 'Neuvillette gains 1 stack of Past Draconic Glories upon taking the field and gains complete interruption resistance while charging Equitable Judgment.' },
      { level: 2, name: 'The Juridical Exhortation', effect: 'Each stack of Past Draconic Glories increases Equitable Judgment\'s CRIT DMG by 14% (up to 42%).' },
      { level: 3, name: 'Ancient Postulation', effect: 'Increases the Level of Normal Attack: As Water Seeks Equilibrium by 3.' },
      { level: 4, name: 'Crown of Commiseration', effect: 'When Neuvillette is on the field and receives healing, 1 Sourcewater Droplet will be generated (every 4s).' },
      { level: 5, name: 'Axiomatic Verdict', effect: 'Increases the Level of O Tides, I Have Returned by 3.' },
      { level: 6, name: 'Wrathful Retribution', effect: 'Equitable Judgment duration can be extended by absorbing nearby droplets, and unleashes 2 extra torrents dealing 10% Max HP each.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Tome of the Eternal Flow', 'Sacrificial Jade', 'Prototype Amber', 'Lost Prayer to the Sacred Winds'],
      bestArtifacts: ['Marechaussee Hunter', 'Heart of Depth'],
      mainStats: {
        sands: 'HP%',
        goblet: 'Hydro DMG Bonus or HP%',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'HP%', 'Energy Recharge', 'Flat HP']
    }
  },
  {
    id: 'navia',
    name: 'Navia',
    title: 'Helm of the Radiant Rose',
    element: 'Geo',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Spina di Rosula',
    birthday: 'August 16',
    constellationName: 'Rosa Multiflora',
    description: 'The glamorous and resolute President of Spina di Rosula, armed with a gunbrella that fires Crystal Shrapnel infused with the golden warmth of Geo.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Navia.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Navia.png',
    stats: {
      hpBase: 12650,
      atkBase: 352,
      defBase: 793,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Blunt Refusal",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive strikes using a claymore and folded Gunbrella.",
      },
      {
        name: "Ceremonial Crystalshot",
        type: "Elemental Skill",
        description: "Opens her Gunbrella to fire Rosula Shrapnel dealing Geo DMG based on Crystal Shrapnel stacks gathered from Crystallize shards.",
      },
      {
        name: "As the Sunlit Sky's Singing Salute",
        type: "Elemental Burst",
        description: "Calls down a magnificent Rosula Dorata cannon salute dealing AoE Geo DMG over time and granting Crystal Shrapnel stacks every 2.4s.",
      },
      {
        name: "Undisclosed Distribution Channels",
        type: "1st Ascension Passive",
        description: "For 4s after using Ceremonial Crystalshot, Navia's Normal, Charged, and Plunging Attacks are converted to Geo DMG and deal 40% increased DMG.",
      },
      {
        name: "Mutual Assistance Network",
        type: "4th Ascension Passive",
        description: "For each Pyro, Electro, Cryo, or Hydro party member, Navia gains 20% increased ATK, stacking up to 2 times for 40% ATK.",
      },
      {
        name: "Painstaking Transaction",
        type: "Utility Passive",
        description: "Gains 25% more rewards when dispatched on an Expedition in Fontaine for 20 hours.",
      },
    ],
    constellations: [
      { level: 1, name: 'A Lady\'s Rules of Punctuality', effect: 'Each Crystal Shrapnel consumed during Skill restores 3 Energy to Navia and decreases Burst CD by 1s.' },
      { level: 2, name: 'The President\'s Pursuit of Victory', effect: 'Each Crystal Shrapnel consumed increases Skill CRIT Rate by 12% (up to 36%) and summons an artillery strike.' },
      { level: 3, name: 'Businesswoman\'s Broad Vision', effect: 'Increases the Level of Ceremonial Crystalshot by 3.' },
      { level: 4, name: 'The Oathsworn Never Surrender', effect: 'When Burst hits opponents, their Geo RES is decreased by 20% for 8s.' },
      { level: 5, name: 'Negotiator\'s Resolute Stance', effect: 'Increases the Level of As the Sunlit Sky\'s Singing Salute by 3.' },
      { level: 6, name: 'The Flexible Finesse of the Spina\'s Chief', effect: 'Consuming more than 3 Shrapnel charges increases Skill CRIT DMG by up to 135% and refunds charges consumed beyond the third.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Verdict', 'The Unforged', 'Beacon of the Reed Sea', 'Serpent Spine'],
      bestArtifacts: ['Nighttime Whispers in the Echoing Woods', 'Golden Troupe', 'Marechaussee Hunter'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Geo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge']
    }
  },
  {
    id: 'clorinde',
    name: 'Clorinde',
    title: 'Candlebearer of Shadows',
    element: 'Electro',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Court of Fontaine / Champion Duelists',
    birthday: 'September 20',
    constellationName: 'Rapiaria',
    description: 'The undefeated Champion Duelist of Fontaine, famed for her blinding rapier thrusts and twin iron pistols calibrated to execute justice.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Clorinde.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Clorinde.png',
    stats: {
      hpBase: 12956,
      atkBase: 337,
      defBase: 784,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Oath of Hunting Shadows",
        type: "Normal Attack",
        description: "Performs rapid fencing strikes; in Night Patrol state, Normal Attacks become piercing Swift Hunt pistolet shots that grant Bond of Life.",
      },
      {
        name: "Hunter's Vigil",
        type: "Elemental Skill",
        description: "Enters the Night Patrol state, alternating between piercing pistolet shots (Swift Hunt) and lunging blade thrusts (Impale the Night) to clear Bond of Life and self-heal.",
      },
      {
        name: "Last Lightfall",
        type: "Elemental Burst",
        description: "Unleashes 5 rapid lunging strikes dealing AoE Electro DMG based on ATK and granting a 120% Bond of Life to fuel her next rotation.",
      },
      {
        name: "Dark-Shattering Flame",
        type: "1st Ascension Passive",
        description: "When nearby party members trigger Electro-related reactions, Clorinde's Normal Attack and Last Lightfall DMG increase by 20% of ATK, up to 1,800 per stack (max 3 stacks).",
      },
      {
        name: "Law's Sanctity",
        type: "4th Ascension Passive",
        description: "When Bond of Life increases or decreases, Clorinde gains 10% CRIT Rate for 15s, stacking up to 2 times for 20% CRIT Rate.",
      },
      {
        name: "Night-Watch Fees",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Fontaine on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: '"From the Depth of Night, A Ray of Light"', effect: 'While Night Vigil is active, Normal Attacks summon Nightpatrol shadow slashes dealing 30% ATK as Electro DMG.' },
      { level: 2, name: '"Now, Walk Through the Mists of Time"', effect: 'Passive reaction damage bonus enhanced; increases interruption resistance while Night Vigil is active.' },
      { level: 3, name: '"I Pledge to the Oath of the Duel"', effect: 'Increases the Level of Hunter\'s Vigil by 3.' },
      { level: 4, name: '"Remember the Tears of Yesterday"', effect: 'Burst DMG increases by up to 200% based on current Bond of Life.' },
      { level: 5, name: '"Never Shall the Flame Fade"', effect: 'Increases the Level of Last Lightfall by 3.' },
      { level: 6, name: '"And So I Carry the Candle of Hope"', effect: 'After using Skill, CRIT Rate increased by 10%, CRIT DMG by 80%, and summons Glimmering Shades to retaliate.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Absolution', 'Mistsplitter Reforged', 'Haran Geppaku Futsu', 'The Black Sword'],
      bestArtifacts: ['Fragment of Harmonic Whimsy', 'Thundering Fury', 'Gladiator\'s Finale'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT DMG or CRIT Rate'
      },
      subStats: ['CRIT DMG', 'CRIT Rate', 'ATK%', 'Elemental Mastery', 'Energy Recharge']
    }
  },
  {
    id: 'wriothesley',
    name: 'Wriothesley',
    title: 'Emissary of Solitary Iniquity',
    element: 'Cryo',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Fortress of Meropide',
    birthday: 'November 23',
    constellationName: 'Cerberus',
    description: 'The Duke and Administrator of the Fortress of Meropide. A heavyweight champion boxer who infuses mechanical gauntlets with freezing Cryo strikes.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Wriothesley.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Wriothesley.png',
    stats: {
      hpBase: 12516,
      atkBase: 318,
      defBase: 785,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Forceful Fists of Frost",
        type: "Normal Attack",
        description: "Rhythmically pummels enemies with rapid Cryo punches using his mechanical boxing gauntlets.",
      },
      {
        name: "Icefang Rush",
        type: "Elemental Skill",
        description: "Enters Chilling Penalty state, enhancing Normal Attack DMG when HP is above 50% while consuming HP with each hit.",
      },
      {
        name: "Darkgold Wolfbite",
        type: "Elemental Burst",
        description: "Strikes forward with an icicle-charged uppercut that erupts into multiple AoE Cryo impacts with Ousia-aligned Surge.",
      },
      {
        name: "There Shall Be a Plea for Justice",
        type: "1st Ascension Passive",
        description: "When HP drops below 60%, gains Gracious Rebuke: next Charged Attack costs no Stamina, deals 50% increased DMG, and restores 30% Max HP.",
      },
      {
        name: "There Shall Be a Reckoning for Sin",
        type: "4th Ascension Passive",
        description: "When Wriothesley's HP increases or decreases while in Chilling Penalty state, gains Prosecution Edict: grants 6% ATK per stack, up to 5 stacks (30% ATK).",
      },
      {
        name: "The Duke's Grace",
        type: "Utility Passive",
        description: "When crafting Weapon Ascension Materials, has a 10% chance to receive double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Terror for the Evildoers', effect: 'Gracious Rebuke triggers on every 5th Normal Attack hit during Skill, boosting Rebuke damage by 200% and extending Skill by 4s.' },
      { level: 2, name: 'Shackles for the Arrogant', effect: 'Each stack of Prosecution Edict increases Burst DMG by 40% (up to 200%).' },
      { level: 3, name: 'Punishment for the Frauds', effect: 'Increases the Level of Normal Attack: Forceful Fists of Frost by 3.' },
      { level: 4, name: 'Redemption for the Suffering', effect: 'Healing overflow increases Wriothesley\'s ATK SPD by 20% when on-field, or grants 50 ATK SPD to all party members when off-field.' },
      { level: 5, name: 'Mercy for the Wronged', effect: 'Increases the Level of Darkgold Wolfbite by 3.' },
      { level: 6, name: 'Shield for the Innocent', effect: 'Rebuke: Vaulting Fist CRIT Rate increases by 10%, CRIT DMG increases by 80%, and unleashes an additional icicle dealing 100% DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Cashflow Supervision', 'Tulaytullah\'s Remembrance', 'Lost Prayer to the Sacred Winds', 'Widsith'],
      bestArtifacts: ['Marechaussee Hunter', 'Blizzard Strayer', 'Shimenawa\'s Reminiscence'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery', 'Energy Recharge']
    }
  },
  {
    id: 'lyney',
    name: 'Lyney',
    title: 'Spectacle of Phantasmagoria',
    element: 'Pyro',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Court of Fontaine / House of the Hearth',
    birthday: 'February 2',
    constellationName: 'Felis Alba',
    description: 'The celebrated head magician of the Opera Epiclese and an operative of the House of the Hearth, pulling dazzling fiery pyrotechnics from his top hat.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Lyney.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Lyney.png',
    stats: {
      hpBase: 11021,
      atkBase: 318,
      defBase: 538,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Card Force Translocation",
        type: "Normal Attack",
        description: "Performs up to 4 bow shots; Prop Arrow charges summon a Grin-Malkin Hat that taunts enemies and detonates with Pyrotechnic Strike while generating Prop Surplus.",
      },
      {
        name: "Bewildering Lights",
        type: "Elemental Skill",
        description: "Fires fireworks that detonate active Grin-Malkin Hats for AoE Pyro DMG and clears Prop Surplus stacks to deal massive damage and restore HP.",
      },
      {
        name: "Wondrous Trick: Miracle Parade",
        type: "Elemental Burst",
        description: "Transforms into a bouncing Grin-Malkin Cat dealing Pyro DMG to nearby enemies, then explodes into fireworks and summons a Grin-Malkin Hat.",
      },
      {
        name: "Perilous Performance",
        type: "1st Ascension Passive",
        description: "If the Prop Arrow consumes Lyney's HP upon firing, the summoned Grin-Malkin Hat restores 3 Energy to Lyney and deals 80% increased DMG.",
      },
      {
        name: "Conclusive Ovation",
        type: "4th Ascension Passive",
        description: "Lyney's DMG against opponents affected by Pyro increases by 60%, plus an additional 20% for each additional Pyro party member, up to a total of 100%.",
      },
      {
        name: "Trivial Puree",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Fontaine on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Whimsical Wonders', effect: 'Can have up to 2 Grin-Malkin Hats simultaneously, and Prop Arrows summon 2 hats and grant 1 extra Prop Surplus stack.' },
      { level: 2, name: 'Loquacious Cajolery', effect: 'While on the field, Lyney gains a stack of Crisp Focus every 2s, increasing CRIT DMG by 20% (up to 60%).' },
      { level: 3, name: 'Prestidigitation', effect: 'Increases the Level of Normal Attack: Card Force Translocation by 3.' },
      { level: 4, name: 'Well-Versed, Well-Rehearsed', effect: 'When Pyro Charged Attack hits an opponent, decreases opponent\'s Pyro RES by 20% for 6s.' },
      { level: 5, name: 'To Reveal an Enigma', effect: 'Increases the Level of Wondrous Trick: Miracle Parade by 3.' },
      { level: 6, name: 'Guileful Smile', effect: 'Firing Prop Arrow launches a Pyrotechnic Strike: Reprised, dealing 80% of Pyrotechnic Strike DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['The First Great Magic', 'Aqua Simulacra', 'Thundering Pulse', 'Song of Stillness'],
      bestArtifacts: ['Marechaussee Hunter', 'Lavawalker', 'Vermillion Hereafter'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT DMG or CRIT Rate'
      },
      subStats: ['CRIT DMG', 'CRIT Rate', 'ATK%', 'Energy Recharge']
    }
  },
  {
    id: 'emilie',
    name: 'Emilie',
    title: 'Thousand Scents Traced',
    element: 'Dendro',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Court of Fontaine',
    birthday: 'September 22',
    constellationName: 'Pomum de Ambra',
    description: 'A renowned perfumer in Fontaine who crafts exquisite fragrances and works discreetly as a forensics crime-scene cleaner tracking the scent of truth.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Emilie.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Emilie.png',
    stats: {
      hpBase: 13103,
      atkBase: 337,
      defBase: 765,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Shadow-Cleaning Spear",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive spear strikes infused with elegant perfumer movements.",
      },
      {
        name: "Fragrance Extraction",
        type: "Elemental Skill",
        description: "Creates a Lumidouce Case that sprays Pneuma-aligned AoE Dendro DMG and levels up from Level 1 to Level 2 when nearby opponents take Burning DMG.",
      },
      {
        name: "Aromatic Explication",
        type: "Elemental Burst",
        description: "Deploys a Level 3 Lumidouce Case that repeatedly bombards nearby enemies with fragrant Dendro dew drops, dealing immense AoE Dendro DMG.",
      },
      {
        name: "Lingering Fragrance",
        type: "1st Ascension Passive",
        description: "Each time the Lumidouce Case collects 2 Scents, it releases Cleargreen Scent dealing AoE Dendro DMG equal to 600% of Emilie's ATK to enemies.",
      },
      {
        name: "Rectification",
        type: "4th Ascension Passive",
        description: "Increases Emilie's DMG against Burning enemies by 15% for every 1,000 ATK she possesses, up to a maximum of 36% DMG Bonus.",
      },
      {
        name: "Head Fragrance Capture",
        type: "Utility Passive",
        description: "When the Lumidouce Case created by Emilie is on the field, all party members gain 85% Pyro RES against Burning DMG.",
      },
    ],
    constellations: [
      { level: 1, name: 'Light Fragrance Leaching', effect: 'Fragrance Extraction and Cleardew DMG increased by 20%, and collecting scents grants party members 7% Dendro DMG bonus.' },
      { level: 2, name: 'Lakelight Top Note', effect: 'When Skill or Burst hits opponents, decreases their Dendro RES by 30% for 10s.' },
      { level: 3, name: 'Exquisite Essence', effect: 'Increases the Level of Fragrance Extraction by 3.' },
      { level: 4, name: 'Lumidouce Heart Note', effect: 'Burst duration increased by 2s and target acquisition interval decreased by 0.3s.' },
      { level: 5, name: 'Pristine Pure Base', effect: 'Increases the Level of Aromatic Explication by 3.' },
      { level: 6, name: 'Marcotte Trail', effect: 'Using Skill or Burst infuses Emilie\'s Normal and Charged attacks with Dendro and generates Scent scents on hit.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Lumidouce Elegy', 'Staff of Homa', 'Calamity Queller', 'Deathmatch'],
      bestArtifacts: ['Unfinished Reverie', 'Deepwood Memories', 'Golden Troupe'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Dendro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge']
    }
  },
  {
    id: 'chevreuse',
    name: 'Chevreuse',
    title: 'Executor of Penal Decrees',
    element: 'Pyro',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Fontaine',
    affiliation: 'Special Security and Surveillance Patrol',
    birthday: 'January 10',
    constellationName: 'Sclopetum',
    description: 'The Captain of Fontaine\'s Special Security and Surveillance Patrol, enforcing the law with her customized musket and a steadfast moral compass.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Chevreuse.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Chevreuse.png',
    stats: {
      hpBase: 11956,
      atkBase: 193,
      defBase: 605,
      ascensionStat: 'HP%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Line Bayonet Thrust EX",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive spear thrusts utilizing Fontaine Security and Surveillance bayonet techniques.",
      },
      {
        name: "Short-Range Rapid Interdiction Fire",
        type: "Elemental Skill",
        description: "Shoulders her musket and fires at enemies; holding allows aiming, firing an Overcharged Ball that grants team-wide ATK buff and healing over time.",
      },
      {
        name: "Ring of Bursting Grenades",
        type: "Elemental Burst",
        description: "Fires an explosive grenade that splits into secondary explosive shells dealing massive AoE Pyro DMG.",
      },
      {
        name: "Vanguard's Coordinated Tactics",
        type: "1st Ascension Passive",
        description: "When the party consists exclusively of Pyro and Electro characters, triggering Overloaded decreases opponents' Pyro and Electro RES by 40% for 6s.",
      },
      {
        name: "Vertical Force Coordination",
        type: "4th Ascension Passive",
        description: "After Chevreuse fires an Overcharged Ball, all nearby party members gain 1% ATK for every 1,000 Max HP Chevreuse possesses (max 40% ATK) for 30s.",
      },
      {
        name: "Double Quick-March",
        type: "Utility Passive",
        description: "Decreases sprinting Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Stable Frontline\'s Resolve', effect: 'When an active character triggers Overloaded, they recover 6 Elemental Energy.' },
      { level: 2, name: 'Sniper Strike Inducement', effect: 'Holding Skill to fire musket triggers 2 chain explosions dealing 120% ATK as Pyro DMG.' },
      { level: 3, name: 'Practiced Field Reload', effect: 'Increases the Level of Short-Range Rapid Interdiction Fire by 3.' },
      { level: 4, name: 'The Secret of Rapid Multishot', effect: 'Using Burst allows Skill to be cast twice consecutively without triggering cooldown.' },
      { level: 5, name: 'Incendiary Ordnance Array', effect: 'Increases the Level of Ring of Bursting Grenades by 3.' },
      { level: 6, name: 'In Pursuit of Ending Evil', effect: 'Skill healing grants all party members 20% Pyro and Electro DMG bonus per heal tick (up to 60%).' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Rightful Reward', 'Black Tassel', 'Favonius Lance'],
      bestArtifacts: ['Noblesse Oblige', 'Song of Days Past'],
      mainStats: {
        sands: 'HP%',
        goblet: 'HP%',
        circlet: 'HP% or Healing Bonus'
      },
      subStats: ['HP%', 'Flat HP', 'Energy Recharge', 'CRIT Rate']
    }
  },
  {
    id: 'charlotte',
    name: 'Charlotte',
    title: 'Lens of Verite',
    element: 'Cryo',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Fontaine',
    affiliation: 'The Steambird',
    birthday: 'April 10',
    constellationName: 'Hualina Veritas',
    description: 'An energetic and passionate reporter for The Steambird, constantly running about Fontaine in search of the "truth" with her custom Kamera, Monsieur Vérité.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/d2/Charlotte_Icon.png',
    stats: {
      hpBase: 10766,
      atkBase: 173,
      defBase: 546,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Cool-Color Capture",
        type: "Normal Attack",
        description: "Aims Monsieur Verite to snap photos, dealing up to 3 instances of Cryo DMG.",
      },
      {
        name: "Framing: Freezing Point Composition",
        type: "Elemental Skill",
        description: "Snaps photos in a viewfinder to mark enemies with Snappy Silhouette or Focused Impression, dealing continuous Cryo DMG over time.",
      },
      {
        name: "Still Photo: Comprehensive Confirmation",
        type: "Elemental Burst",
        description: "Creates a Newsflash Field that deals AoE Cryo DMG and restores HP to all party members based on Charlotte's ATK.",
      },
      {
        name: "Moment of Impact",
        type: "1st Ascension Passive",
        description: "When Monsieur Verite hits marked enemies, Elemental Skill CD decreases by 2s, up to 4 times per 12s.",
      },
      {
        name: "Diversified Investigation",
        type: "4th Ascension Passive",
        description: "For each Fontaine character in party excluding herself, Charlotte gains 5% Healing Bonus; for each non-Fontaine character, gains 5% Cryo DMG Bonus.",
      },
      {
        name: "First-Person Shutter",
        type: "Utility Passive",
        description: "When using the Special Analysis Zoom Lens gadget, Charlotte can take photos and move simultaneously.",
      },
    ],
    constellations: [
      { level: 1, name: 'A Need to Verify Facts', effect: 'After casting Burst, party members continue to regenerate HP for 6s.' },
      { level: 2, name: 'A Duty to Pursue Truth', effect: 'Skill hits grant Charlotte 10% to 30% ATK based on number of enemies marked.' },
      { level: 3, name: 'An Imperative to Internalize', effect: 'Increases the Level of Still Photo: Comprehensive Confirmation by 3.' },
      { level: 4, name: 'A Motive for Promotion', effect: 'Burst hitting marked targets deals 10% more DMG and restores 2 Energy to Charlotte.' },
      { level: 5, name: 'A Principle of Truth', effect: 'Increases the Level of Framing: Freezing Point Composition by 3.' },
      { level: 6, name: 'A Sum of Interests', effect: 'Active character attacking marked targets summons Monsieur Vérité to unleash coordinated AoE Cryo healing and damage.' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Favonius Codex', 'Oathsworn Eye', 'Prototype Amber'],
      bestArtifacts: ['Ocean-Hued Clam', 'Noblesse Oblige', 'Song of Days Past'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'ATK%',
        circlet: 'Healing Bonus or CRIT Rate',
      },
      subStats: ['Energy Recharge', 'ATK%', 'CRIT Rate', 'Flat ATK'],
    }
  },
  {
    id: 'escoffier',
    name: 'Escoffier',
    title: 'Chef de Cuisine of the High Court',
    element: 'Cryo',
    weaponType: 'Polearm',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Palais Mermonia Culinary Guild',
    birthday: 'September 28',
    constellationName: 'Culinaris Glacialis',
    description: 'The master chef of Palais Mermonia, crafting gastronomic frozen marvels and slicing ingredients with absolute subzero precision.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/2/2a/Escoffier_Icon.png',
    stats: {
      hpBase: 13200,
      atkBase: 340,
      defBase: 780,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Culinary Fencing",
        type: "Normal Attack",
        description: "Performs up to 4 rapid fencer thrusts and flourishes.",
      },
      {
        name: "Gourmet Flambé",
        type: "Elemental Skill",
        description: "Throws seasoned gourmet pans dealing Pyro DMG and applying Sizzling Sear to enemies.",
      },
      {
        name: "Grand Feast of Fontaine",
        type: "Elemental Burst",
        description: "Summons a banqueting table that continuously feeds the active character, providing sustained healing and 25% ATK bonus.",
      },
      {
        name: "Secret Reduction",
        type: "1st Ascension Passive",
        description: "When Gourmet Flambé triggers a Pyro-related reaction, party members gain 60 Elemental Mastery for 10s.",
      },
      {
        name: "Chef's Palette",
        type: "4th Ascension Passive",
        description: "Increases Escoffier's Pyro DMG Bonus by 0.5% for every 100 Max HP, up to a maximum of 25%.",
      },
      {
        name: "Kitchen Connoisseur",
        type: "Utility Passive",
        description: "When a Perfect Cooking is achieved on an ATK-boosting dish, has a 12% chance to obtain double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Art of Glacage', effect: 'Gourmet Sorbet orbs also grant 15% Cryo DMG bonus for 10s.' },
      { level: 2, name: 'Melt-in-Mouth Texture', effect: 'Melt reactions triggered inside Grand Banquet decrease enemy DEF by 20%.' },
      { level: 3, name: 'Head Chef\'s Secret Recipe', effect: 'Increases the Level of Flash-Freeze Julienne by 3.' },
      { level: 4, name: 'Haute Cuisine', effect: 'Burst restores 15 Energy to all off-field party members.' },
      { level: 5, name: 'Michelin Star Standard', effect: 'Increases the Level of Grand Banquet of Frost by 3.' },
      { level: 6, name: 'Culinary Masterpiece', effect: 'Escoffier gains 70% Cryo CRIT DMG and can slash through enemy barriers.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Staff of Homa', 'Primordial Jade Winged-Spear', 'Deathmatch'],
      bestArtifacts: ['Blizzard Strayer', 'Marechaussee Hunter'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Cryo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery'],
    }
  },
  {
    id: 'freminet',
    name: 'Freminet',
    title: 'Yearning for Unseen Depths',
    element: 'Cryo',
    weaponType: 'Claymore',
    rarity: 4,
    region: 'Fontaine',
    affiliation: 'Hotel Bouffes d\'ete / House of the Hearth',
    birthday: 'September 24',
    constellationName: 'Automaton Automata',
    description: 'A quiet, introverted young diver who is an expert in the deep waters of Fontaine. Accompanied by his mechanical clockwork penguin, Pers.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/e/ee/Freminet_Icon.png',
    stats: {
      hpBase: 12071,
      atkBase: 255,
      defBase: 708,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Flowing Eddies",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive greatsword swings with underwater-diving precision.",
      },
      {
        name: "Pressurized Floe",
        type: "Elemental Skill",
        description: "Enters Pers Time; Normal Attacks build Pressure levels from 0 to 4, culminating in either pure Cryo DMG (Level 0) or devastating Physical DMG (Level 4 Shattering Pressure).",
      },
      {
        name: "Shadowhunter's Ambush",
        type: "Elemental Burst",
        description: "Unleashes a wave of frost dealing AoE Cryo DMG, resets Pressurized Floe CD, and reduces Pers Time skill cooldown by 70%.",
      },
      {
        name: "Saturation Deep Dive",
        type: "1st Ascension Passive",
        description: "When using Pressurized Floe, if Pressure Level is less than 4, CD of Pressurized Floe is decreased by 1s.",
      },
      {
        name: "Parallel Condensers",
        type: "4th Ascension Passive",
        description: "When Freminet triggers Shatter on opponents, Pressurized Floe: Shattering Pressure DMG increases by 40% for 5s.",
      },
      {
        name: "Deepwater Navigation",
        type: "Utility Passive",
        description: "Decreases aquatic Stamina consumption by 35% when diving underwater.",
      },
    ],
    constellations: [
      { level: 1, name: 'Dreams of the Foamy Deep', effect: 'The CRIT Rate of Pressurized Floe: Shattering Pressure is increased by 15%.' },
      { level: 2, name: 'Penguins and the Shore', effect: 'Unleashing Pressurized Floe restores 2-3 Energy to Freminet.' },
      { level: 3, name: 'Song of the Eddies and Bleached Sands', effect: 'Increases the Level of Flowing Eddies by 3.' },
      { level: 4, name: 'Dance of the Snowy Moon and Flute', effect: 'Triggering Frozen, Shatter, or Superconduct increases Freminet\'s ATK by 9% (up to 2 stacks).' },
      { level: 5, name: 'Nights and Hearthfire\'s Joy', effect: 'Increases the Level of Pressurized Floe by 3.' },
      { level: 6, name: 'Moment of Awakening and Resolve', effect: 'Triggering Frozen, Shatter, or Superconduct increases Freminet\'s CRIT DMG by 12% (up to 3 stacks).' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Song of Broken Pines', 'The Unforged', 'Serpent Spine', 'Tidal Shadow'],
      bestArtifacts: ['Pale Flame', 'Blizzard Strayer'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Physical DMG Bonus or Cryo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge'],
    }
  },
  {
    id: 'lynette',
    name: 'Lynette',
    title: 'Elegance in the Shadows',
    element: 'Anemo',
    weaponType: 'Sword',
    rarity: 4,
    region: 'Fontaine',
    affiliation: 'Hotel Bouffes d\'ete / House of the Hearth',
    birthday: 'February 2',
    constellationName: 'Felis Alba',
    description: 'A quiet, feline magician\'s assistant in Fontaine. Possesses Ousia alignment and cloaks herself in shadows to surprise enemies with swift fencing.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/a/ad/Lynette_Icon.png',
    stats: {
      hpBase: 12397,
      atkBase: 232,
      defBase: 715,
      ascensionStat: 'Anemo DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Rapid Ritesword",
        type: "Normal Attack",
        description: "Performs up to 4 rapid sword strikes.",
      },
      {
        name: "Enigmatic Feint",
        type: "Elemental Skill",
        description: "Dashes forward in high-speed Shadowskulk, marking an opponent with a Shadowsign and delivering an Enigma Thrust dealing Anemo DMG.",
      },
      {
        name: "Bizarre Magic: Mending Monstrosity",
        type: "Elemental Burst",
        description: "Summons a giant Boggart Box that taunts enemies, fires Anemo shots, and absorbs elements to fire elemental Vivid Shots.",
      },
      {
        name: "Sophisticated Synergy",
        type: "1st Ascension Passive",
        description: "Within 10s of using Bizarre Magic, for each different Elemental Type in the party, party members gain 8%/12%/16%/20% increased ATK.",
      },
      {
        name: "Props Well Rehearsed",
        type: "4th Ascension Passive",
        description: "After the Boggart Box triggers an Elemental Absorption, Lynette's Elemental Burst DMG increases by 15% until the box expires.",
      },
      {
        name: "Locus Detective",
        type: "Utility Passive",
        description: "Shows the location of nearby Recovery Orbs on the mini-map and increases underwater Stamina and HP recovery by 25%.",
      },
    ],
    constellations: [
      { level: 1, name: 'A Cold Blade Like a Shadow', effect: 'When Enigma Thrust hits an opponent with a Shadow Mark, a vortex will be created at that opponent\'s position that pulls nearby foes.' },
      { level: 2, name: 'Endless Mysteries', effect: 'Whenever the Bogglecat Box fires a Vivid Shot, it will fire an extra shot.' },
      { level: 3, name: 'Cognition-Inverting Vision', effect: 'Increases the Level of Magic Trick: Astonishing Shift by 3.' },
      { level: 4, name: 'Tacit Coordination', effect: 'Enigmatic Feint gains 1 additional charge.' },
      { level: 5, name: 'Obscuring Ambiguity', effect: 'Increases the Level of Enigmatic Feint by 3.' },
      { level: 6, name: 'Intent-Identifying Watch', effect: 'When Lynette uses Enigma Thrust, she gains an Anemo Infusion and 20% Anemo DMG Bonus for 6s.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Sacrificial Sword', 'Favonius Sword', 'Fleuve Cendre Ferryman', 'Freedom-Sworn'],
      bestArtifacts: ['Viridescent Venerer', 'Noblesse Oblige', 'Emblem of Severed Fate'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Anemo DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'ATK%'],
    }
  },
  {
    id: 'sigewinne',
    name: 'Sigewinne',
    title: 'Wondrous Dragonheir',
    element: 'Hydro',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Fontaine',
    affiliation: 'Fortress of Meropide',
    birthday: 'March 30',
    constellationName: 'Nereides',
    description: 'The head nurse of the Fortress of Meropide, a kind-hearted Melusine who uses pressurized medical bubble-guns to soothe prisoners and care for all beings.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/3/37/Sigewinne_Icon.png',
    stats: {
      hpBase: 13348,
      atkBase: 193,
      defBase: 500,
      ascensionStat: 'HP%',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Targeted Treatment",
        type: "Normal Attack",
        description: "Fires miniature sedative darts with a pneumatic toy gun.",
      },
      {
        name: "Rebound Hydrotherapy",
        type: "Elemental Skill",
        description: "Blows a giant Bolstering Bubblebath that bounces between enemies, dealing Hydro DMG based on Max HP and healing party members except Sigewinne; upon popping, heals Sigewinne.",
      },
      {
        name: "Super Saturated Syringing",
        type: "Elemental Burst",
        description: "Pulls out a custom syringe cannon to spray continuous high-pressure medicinal Hydro blasts dealing AoE Hydro DMG based on Max HP.",
      },
      {
        name: "Requires Appropriate Rest",
        type: "1st Ascension Passive",
        description: "When using Rebound Hydrotherapy, Sigewinne grants Convalescence: party members' off-field Elemental Skill DMG increases based on Sigewinne's HP above 30,000 (up to 2,800 DMG per hit).",
      },
      {
        name: "Detailed Diagnosis, Thorough Treatment",
        type: "4th Ascension Passive",
        description: "Sigewinne's Healing Bonus increases by 8% for every 1,000 points of Bond of Life on all party members, up to a max 30% Healing Bonus.",
      },
      {
        name: "Emergency Dose",
        type: "Utility Passive",
        description: "When underwater, if active character's HP drops below 50%, continuously restores HP over 2.5s and decreases all Elemental and Physical RES by 10%.",
      },
    ],
    constellations: [
      { level: 1, name: '"Can the Happiest of Spirits Understand Anxiety?"', effect: 'Rebound Hydrotherapy\'s Bolstering Bubblebath can bounce an extra 3 times.' },
      { level: 2, name: '"Can the Most Cruel of Mercies Purify Sin?"', effect: 'When using Skill or Burst, creates a bubble shield absorbing 30% Max HP.' },
      { level: 3, name: '"Can the Healthiest of Bodies Cure Fever?"', effect: 'Increases the Level of Rebound Hydrotherapy by 3.' },
      { level: 4, name: '"Can the Loveliest of Vows Bring Forth Joy?"', effect: 'Increases the duration of Super Saturated Syringing by 3s.' },
      { level: 5, name: '"Can the Purest of Thoughts Wash Clean the Past?"', effect: 'Increases the Level of Super Saturated Syringing by 3.' },
      { level: 6, name: '"Can the Most Patient of Seekers Find the Truth?"', effect: 'Sigewinne gains CRIT Rate (up to 20%) and CRIT DMG (up to 110%) based on her Max HP.' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Silvershower Heartstrings', 'Elegy for the End', 'Recurve Bow', 'Favonius Warbow'],
      bestArtifacts: ['Ocean-Hued Clam', 'Song of Days Past', 'Tenacity of the Millelith'],
      mainStats: {
        sands: 'HP%',
        goblet: 'HP%',
        circlet: 'HP% or Healing Bonus',
      },
      subStats: ['HP%', 'Energy Recharge', 'Flat HP', 'CRIT Rate'],
    }
  }
];
