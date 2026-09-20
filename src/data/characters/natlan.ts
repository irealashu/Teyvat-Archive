import { Character } from '../../types';

export const NATLAN_CHARACTERS: Character[] = [
  {
    id: 'mualani',
    name: 'Mualani',
    title: 'Splish-Splash Wavechaser',
    element: 'Hydro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Natlan',
    affiliation: 'People of the Springs',
    birthday: 'August 3',
    constellationName: 'Phoca Neomonachus',
    description: 'A well-known guide in Natlan, owner of a watersports shop, and an expert in all manner of wave-riding endeavors.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Mualani.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Mualani.png',
    stats: {
      hpBase: 15185,
      atkBase: 182,
      defBase: 588,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Cooling Treatment",
        type: "Normal Attack",
        description: "Performs up to 3 strikes that deal Hydro DMG; Charged Attack tosses a Pufferball.",
      },
      {
        name: "Surfshark Wavebreaker",
        type: "Elemental Skill",
        description: "Summons Sharky Surfboard, entering Nightsoul's Blessing state to surf at high speed across land and water, accumulating Wavechaser momentum to unleash crushing Sharky's Bite attacks.",
      },
      {
        name: "Boomsharks Away",
        type: "Elemental Burst",
        description: "Fires a giant Super Shark Missile that tracks opponents, dealing massive AoE Nightsoul-aligned Hydro DMG based on Max HP.",
      },
      {
        name: "Heat-Resistant Freshwater Flying Fish",
        type: "1st Ascension Passive",
        description: "When Sharky's Bite hits an opponent, grants 1 Wavechaser stack and increases Sharky's Surfs-Up DMG by 15%.",
      },
      {
        name: "Natlan's Greatest Guide",
        type: "4th Ascension Passive",
        description: "When hitting an opponent with Sharky's Surfs-Up, a Floater is generated; picking it up restores 20 Phlogiston to the party in Natlan.",
      },
      {
        name: "Nightrealm's Gift: Crests and Troughs",
        type: "Nightrealm's Gift",
        description: "While in Natlan, surfing on liquid or phlogiston consumes no Nightsoul points, and movement speed is increased by 20%.",
      },
      {
        name: "The Gift of Phlogiston",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Natlan on the mini-map and restores 20 Phlogiston when interacting with harvestable items.",
      },
    ],
    constellations: [
      { level: 1, name: 'The "Meztli" Smiles Upon You', effect: 'The DMG dealt by the first Sharky\'s Bite after entering Nightsoul\'s Blessing is increased by 66% of Mualani\'s Max HP.' },
      { level: 2, name: 'Mualani, Going All Out!', effect: 'Entering Nightsoul\'s Blessing grants 2 stacks of Wavechaser\'s Momentum and accelerates stack generation.' },
      { level: 3, name: 'Surfing on Joyous Seas', effect: 'Increases the Level of Surfshark Wavebreaker by 3.' },
      { level: 4, name: 'Sharky Eats Pufferfish', effect: 'Obtaining a Pufferfish restores 8 Energy to Mualani and increases Burst DMG by 75%.' },
      { level: 5, name: 'Same Old Surfboard', effect: 'Increases the Level of Boomsharka-laka by 3.' },
      { level: 6, name: 'Spirit of the Springs', effect: 'Removes the C1 single-use restriction per Nightsoul state, allowing every Sharky\'s Bite with full stacks to gain the DMG increase.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Surf\'s Up', 'Sacrificial Jade', 'Ring of Yaxche', 'Lost Prayer to the Sacred Winds'],
      bestArtifacts: ['Obsidian Codex', 'Heart of Depth', 'Marechaussee Hunter'],
      mainStats: {
        sands: 'HP% or Elemental Mastery',
        goblet: 'Hydro DMG Bonus',
        circlet: 'CRIT DMG or CRIT Rate'
      },
      subStats: ['CRIT DMG', 'CRIT Rate', 'HP%', 'Elemental Mastery', 'Energy Recharge']
    }
  },
  {
    id: 'kinich',
    name: 'Kinich',
    title: 'Hunting Flame of the Turnfire',
    element: 'Dendro',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Natlan',
    affiliation: 'Scions of the Canopy',
    birthday: 'October 11',
    constellationName: 'Chimaera Alepidota',
    description: 'A Saurian Hunter of the Scions of the Canopy, adept at sizing up the price of everything and accompanied by the self-proclaimed Dragonlord Ajaw.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Kinich.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Kinich.png',
    stats: {
      hpBase: 12858,
      atkBase: 332,
      defBase: 815,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Sunfire Style",
        type: "Normal Attack",
        description: "Performs up to 3 consecutive claymore swings infused with Saurian momentum.",
      },
      {
        name: "Canopy Hunter: Riding High",
        type: "Elemental Skill",
        description: "Fires a grappling hook forward to swing through the air or attaches to enemies in Nightsoul's Blessing, strafing around them while firing Loop Shots and blasting Scalespiker Cannon shots.",
      },
      {
        name: "Hail to the Almighty Dragonlord",
        type: "Elemental Burst",
        description: "Unleashes the full terrifying power of the ancient dragonlord Ajaw, who breathes continuous Laser Breath dealing devastating AoE Nightsoul-aligned Dendro DMG.",
      },
      {
        name: "Flame-Turned Mystery",
        type: "1st Ascension Passive",
        description: "When Kinich is in Nightsoul's Blessing, opponents hit by Scalespiker Cannon gain Blind Spot; hitting Blind Spot restores 3 Nightsoul points.",
      },
      {
        name: "Desolation's Price",
        type: "4th Ascension Passive",
        description: "After a nearby party member triggers Burgeon or Burning, Kinich's next Scalespiker Cannon deals increased DMG equal to 320% of his ATK.",
      },
      {
        name: "Nightrealm's Gift: Repaying Returns",
        type: "Nightrealm's Gift",
        description: "While in Natlan, Kinich can grapple onto mid-air Coil points and replenish mid-air jumps using Phlogiston.",
      },
      {
        name: "Swift Dispatch",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Natlan on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Parrot\'s Beak', effect: 'After landing from Canopy Hunter, Kinich\'s Movement SPD increases by 30% for 6s. Scalespiker Cannon CRIT DMG is increased by 100%.' },
      { level: 2, name: 'Tiger Beetle\'s Palm', effect: 'When Elemental Skill hits opponents, their Dendro RES is decreased by 30% for 6s. The first Scalespiker Cannon has enlarged AoE and deals 100% more DMG.' },
      { level: 3, name: 'Proptornis\'s Claw', effect: 'Increases the Level of Canopy Hunter: Riding High by 3.' },
      { level: 4, name: 'Colibri\'s Feather', effect: 'While in Nightsoul\'s Blessing, circle-strafing restores 5 Energy to Kinich and increases Burst DMG by 70%.' },
      { level: 5, name: 'Howler Monkey\'s Tail', effect: 'Increases the Level of Hail to the Almighty Dragonlord by 3.' },
      { level: 6, name: 'Auspicious Beast\'s Shape', effect: 'After Scalespiker Cannon hits an opponent, it will bounce once between opponents, dealing 700% of Kinich\'s ATK as Dendro DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Fang of the Mountain King', 'Beacon of the Reed Sea', 'Earth Shaker', 'Serpent Spine'],
      bestArtifacts: ['Obsidian Codex', 'Unfinished Reverie', 'Deepwood Memories'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Dendro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery']
    }
  },
  {
    id: 'xilonen',
    name: 'Xilonen',
    title: 'Nameless Calling',
    element: 'Geo',
    weaponType: 'Sword',
    rarity: 5,
    region: 'Natlan',
    affiliation: 'Children of Echoes',
    birthday: 'March 20',
    constellationName: 'Panthera Ocelotl',
    description: 'A master Name-Engraver from the Children of Echoes tribe, famed throughout Natlan for forging ancient heroic names into sacred obsidian relics.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Xilonen.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Xilonen.png',
    stats: {
      hpBase: 12476,
      atkBase: 247,
      defBase: 931,
      ascensionStat: 'DEF%',
      ascensionStatValue: '28.8%',
    },
    skills: [
      {
        name: "Echocatl Blades",
        type: "Normal Attack",
        description: "Performs up to 3 rapid kick and blade strikes.",
      },
      {
        name: "Yohual's Scratch",
        type: "Elemental Skill",
        description: "Dons her custom rollerblade gear, entering Nightsoul's Blessing to carve through enemies with Geo speed, gathering Source Samples that shred enemy Elemental RES.",
      },
      {
        name: "Ocelotlicue Point!",
        type: "Elemental Burst",
        description: "Turns up the stereo volume to drop a rhythm bass drop dealing AoE Geo DMG, healing allies or firing coordinated Geo rhythm shockwaves based on active Source Samples.",
      },
      {
        name: "Netotiliztli's Echoes",
        type: "1st Ascension Passive",
        description: "While in Nightsoul's Blessing, hitting enemies with Normal Attacks activates Source Samples and decreases corresponding Elemental RES by 36%.",
      },
      {
        name: "Armored Quintessence",
        type: "4th Ascension Passive",
        description: "When Xilonen triggers a Crystallize reaction, nearby active characters gain 15% Geo and corresponding Elemental DMG Bonus for 15s.",
      },
      {
        name: "Nightrealm's Gift: Relentless Heart",
        type: "Nightrealm's Gift",
        description: "While in Natlan, climbing cliffs in Rollerblade mode costs 0 Phlogiston and climbs at rapid speed.",
      },
      {
        name: "Forge's Soul",
        type: "Utility Passive",
        description: "Restores 15 Phlogiston when harvesting local specialties in Natlan.",
      },
    ],
    constellations: [
      { level: 1, name: 'Sabertooth\'s Recline', effect: 'Xilonen\'s interruption resistance is increased in Nightsoul state, and Source Samplers reduce Phlogiston consumption.' },
      { level: 2, name: 'Chiapan\'s Claws', effect: 'Geo samplers remain permanently active and grant party-wide elemental buffs based on elements present (Pyro ATK+45%, Hydro Max HP+45%, etc.).' },
      { level: 3, name: 'Echoing Chords', effect: 'Increases the Level of Yohual\'s Scratch by 3.' },
      { level: 4, name: 'Sunken Sunken Feast', effect: 'After using Skill, all party members\' Normal, Charged, and Plunging Attack DMG is increased by 65% of Xilonen\'s DEF.' },
      { level: 5, name: 'Transitional Cadence', effect: 'Increases the Level of Ocelotlicue Point! by 3.' },
      { level: 6, name: 'Imperishable Song', effect: 'Xilonen gains continuous Nightsoul points on normal attacks, dealing massive DEF-scaling damage with no duration limit.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Peak Patrol Song', 'Favonius Sword', 'Flute of Ezpitzal', 'Freedom-Sworn'],
      bestArtifacts: ['Scroll of the Hero of Cinder City', 'Husk of Opulent Dreams'],
      mainStats: {
        sands: 'DEF% or Energy Recharge',
        goblet: 'DEF%',
        circlet: 'Healing Bonus or DEF%'
      },
      subStats: ['DEF%', 'Energy Recharge', 'CRIT Rate', 'Flat DEF']
    }
  },
  {
    id: 'chasca',
    name: 'Chasca',
    title: 'Skyborne Radiance',
    element: 'Anemo',
    weaponType: 'Bow',
    rarity: 5,
    region: 'Natlan',
    affiliation: 'Flower-Feather Clan',
    birthday: 'December 20',
    constellationName: 'Vultur Gryphus',
    description: 'The supreme peacekeeper and sharp-eyed peacemaker of the Flower-Feather Clan. A master of aerial combat who pilots the Soulreaper Cannon in flight.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Chasca.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Chasca.png',
    stats: {
      hpBase: 12050,
      atkBase: 347,
      defBase: 635,
      ascensionStat: 'CRIT Rate',
      ascensionStatValue: '19.2%',
    },
    skills: [
      {
        name: "Phantom Feather",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive shots with a bow.",
      },
      {
        name: "Spirit Reins: Shadow Hunt",
        type: "Elemental Skill",
        description: "Summons Soulsnatcher, mounting her flying rifle in Nightsoul's Blessing to hover and fire multi-target lock-on elemental shells matching party members' elements.",
      },
      {
        name: "Soul Reaper's Bullet",
        type: "Elemental Burst",
        description: "Fires a massive Soul Reaper Shell that explodes into secondary elemental rounds matching party elements, dealing colossal multi-elemental AoE DMG.",
      },
      {
        name: "Bullet's Trick",
        type: "1st Ascension Passive",
        description: "When charging Multi-Target Aiming with Soulsnatcher, converts Shadowhunt Shells into elemental bullets based on party members' elements.",
      },
      {
        name: "Gaze of the Hunter",
        type: "4th Ascension Passive",
        description: "When triggering Nightsoul Burst, Chasca's Charged Shot charge time is reduced by 50% for 6s.",
      },
      {
        name: "Nightrealm's Gift: True Sight",
        type: "Nightrealm's Gift",
        description: "When airborne in Natlan, can glide long distances on her rifle using Phlogiston.",
      },
      {
        name: "Wildwood Tracker",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Natlan on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Canyon\'s Whisper', effect: 'Converts Shadowhunt Shells into elemental bullets more reliably and extends flight duration.' },
      { level: 2, name: 'Gale Over Highlands', effect: 'Shadowhunt Shells trigger chain elemental explosions dealing 400% of Chasca\'s ATK.' },
      { level: 3, name: 'Feather\'s True Path', effect: 'Increases the Level of Spirit Rein: Havoc Flight by 3.' },
      { level: 4, name: 'Radiant Piercer', effect: 'Elemental Burst restores 60 Nightsoul points and increases projectile homing velocity.' },
      { level: 5, name: 'Falcon\'s Vision', effect: 'Increases the Level of Soulseeker\'s Fatal Shot by 3.' },
      { level: 6, name: 'Sky-Sovereign Decree', effect: 'Shadowhunt Shells require zero charge time and deal 120% additional CRIT DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Astral Vulture\'s Crimson Plumage', 'The First Great Magic', 'Aqua Simulacra', 'Chain Breaker'],
      bestArtifacts: ['Obsidian Codex', 'Desert Pavilion Chronicle', 'Viridescent Venerer'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Anemo DMG Bonus or ATK%',
        circlet: 'CRIT DMG or CRIT Rate'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery']
    }
  },
  {
    id: 'mavuika',
    name: 'Mavuika',
    title: 'Incandescent Ode of Resurrection',
    element: 'Pyro',
    weaponType: 'Claymore',
    rarity: 5,
    region: 'Natlan',
    affiliation: 'Stadium of the Sacred Flame',
    birthday: 'August 18',
    constellationName: 'Ignis Redivivus',
    description: 'The reigning Pyro Archon of Natlan and the bearer of the Sacred Flame. A legendary warrior who rode a motorcycle into the Night Kingdom to reclaim the souls of fallen warriors.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Mavuika.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Mavuika.png',
    stats: {
      hpBase: 13920,
      atkBase: 356,
      defBase: 785,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Sun-Forged Bladework",
        type: "Normal Attack",
        description: "Performs up to 4 heavy claymore slashes infused with sacred flame.",
      },
      {
        name: "Nameless Scorching Flurry",
        type: "Elemental Skill",
        description: "Summons the Flamestrider cycle, entering Nightsoul's Blessing to ride across terrain and water, unleashing fiery donut drifts and explosive pyro wheelies.",
      },
      {
        name: "The Great Return of Sun and Fire",
        type: "Elemental Burst",
        description: "Ignites the primordial flame of Natlan, delivering an apocalyptic downward slash that cleanses darkness and grants party members devastating Pyro DMG amplification.",
      },
      {
        name: "Scion of Volcano's Legacy",
        type: "1st Ascension Passive",
        description: "When active characters consume Nightsoul points or trigger Nightsoul Burst, Mavuika accumulates Fighting Spirit.",
      },
      {
        name: "Eternal Blaze of the Sacred Flame",
        type: "4th Ascension Passive",
        description: "Mavuika's Normal, Charged, and Skill DMG is increased by 40% of her accumulated Fighting Spirit.",
      },
      {
        name: "Nightrealm's Gift: Primal Combustion",
        type: "Nightrealm's Gift",
        description: "Can summon and ride her flame-cycle across water, lava, and land in Natlan without taking environmental damage.",
      },
      {
        name: "Radiant Hearth",
        type: "Utility Passive",
        description: "While in Natlan, grants 30% increased maximum party Phlogiston capacity.",
      },
    ],
    constellations: [
      { level: 1, name: 'Kindled Ash of the Primordial Torch', effect: 'Increases Nightsoul Blessing duration and grants 40% Pyro DMG bonus on motorcycle collision.' },
      { level: 2, name: 'Trophy of the Resurrected Hero', effect: 'Decreases nearby enemies\' Pyro RES and all Elemental RES by 25% when in Nightsoul mode.' },
      { level: 3, name: 'Sovereign of the Stadium', effect: 'Increases the Level of Flamestrider\'s Charge by 3.' },
      { level: 4, name: 'Unbroken Ring of Flame', effect: 'When party members trigger Nightsoul Burst, restores 12 Energy to Mavuika.' },
      { level: 5, name: 'Eternal Beacon', effect: 'Increases the Level of Dawn of Resurrected Names by 3.' },
      { level: 6, name: 'Haborym\'s Coronation', effect: 'Motorcycle speed and impact force doubled; normal attacks in Nightsoul form explode for 800% ATK Pyro DMG.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['A Thousand Blazing Suns', 'Beacon of the Reed Sea', 'Redhorn Stonethresher', 'Earth Shaker'],
      bestArtifacts: ['Obsidian Codex', 'Scroll of the Hero of Cinder City', 'Crimson Witch of Flames'],
      mainStats: {
        sands: 'ATK%',
        goblet: 'Pyro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge', 'Elemental Mastery']
    }
  },
  {
    id: 'citlali',
    name: 'Citlali',
    title: 'Star-Reader of the Night-Wind',
    element: 'Cryo',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Natlan',
    affiliation: 'Masters of the Night-Wind',
    birthday: 'January 14',
    constellationName: 'Noctiluca Astralis',
    description: 'An illustrious divination master from the Masters of the Night-Wind tribe, capable of reading destinies written in the auroras and night sky.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Citlali.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Citlali.png',
    stats: {
      hpBase: 11200,
      atkBase: 310,
      defBase: 650,
      ascensionStat: 'Elemental Mastery',
      ascensionStatValue: '115.2',
    },
    skills: [
      {
        name: "Starlight Divination",
        type: "Normal Attack",
        description: "Casts obsidian stars dealing Cryo DMG to enemies.",
      },
      {
        name: "Obsidian Moonward Dance",
        type: "Elemental Skill",
        description: "Summons Itzpapa, deploying an obsidian celestial shield that absorbs Cryo DMG with 250% efficiency and reflects frost upon attackers.",
      },
      {
        name: "Twilight Constellation Descent",
        type: "Elemental Burst",
        description: "Calls down an obsidian meteor shower from the heavens, dealing immense AoE Cryo DMG and granting party members Cryo DMG Bonus.",
      },
      {
        name: "Obsidian Revelation",
        type: "1st Ascension Passive",
        description: "When Citlali triggers Frozen or Melt reactions, active characters gain 80 Elemental Mastery and 20% Cryo DMG Bonus for 12s.",
      },
      {
        name: "Astral Aegis",
        type: "4th Ascension Passive",
        description: "Shield created by Obsidian Moonward Dance absorbs Cryo DMG with 250% effectiveness and reflects 20% back as Cryo DMG.",
      },
      {
        name: "Nightrealm's Gift: Star Weaver",
        type: "Nightrealm's Gift",
        description: "While in Natlan, can glide horizontally on astral ribbons consuming Phlogiston.",
      },
      {
        name: "Stargazer's Altar",
        type: "Utility Passive",
        description: "Displays the location of nearby resources unique to Natlan on the mini-map.",
      },
    ],
    constellations: [
      { level: 1, name: 'Constellation Divination', effect: 'Shield strength increased by 35% and grants 100 EM to active character.' },
      { level: 2, name: 'Glacial Omens', effect: 'Whenever Melt is triggered, party members gain 20% Cryo and Pyro DMG bonus.' },
      { level: 3, name: 'Mirror of Eternity', effect: 'Increases the Level of Night-Wind Stargaze by 3.' },
      { level: 4, name: 'Midnight Astral Echo', effect: 'Hitting enemies with Frostbolts refunds 4 Energy to Citlali.' },
      { level: 5, name: 'Celestial Canopy', effect: 'Increases the Level of Aurora Prophecy by 3.' },
      { level: 6, name: 'Destiny\'s Frozen Veil', effect: 'Frostbolts crit unconditionally against burning or melt-affected opponents.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['Starcaller\'s Watch', 'A Thousand Floating Dreams', 'Wandering Evenstar', 'Sacrificial Fragments'],
      bestArtifacts: ['Scroll of the Hero of Cinder City', 'Gilded Dreams', 'Blizzard Strayer'],
      mainStats: {
        sands: 'Elemental Mastery',
        goblet: 'Cryo DMG Bonus or Elemental Mastery',
        circlet: 'CRIT Rate or Elemental Mastery'
      },
      subStats: ['Elemental Mastery', 'Energy Recharge', 'CRIT Rate', 'CRIT DMG', 'ATK%']
    }
  },
  {
    id: 'kachina',
    name: 'Kachina',
    title: 'Mottled Gold Yet Unsmelted',
    element: 'Geo',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Natlan',
    affiliation: 'Children of Echoes',
    birthday: 'September 12',
    constellationName: 'Ochotona Princeps',
    description: 'A courageous young warrior of the Children of Echoes tribe who rides her trusty drill, Turbo Twirly, through subterranean tunnels and rocky mountains.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Kachina.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Kachina.png',
    stats: {
      hpBase: 10550,
      atkBase: 198,
      defBase: 792,
      ascensionStat: 'Geo DMG Bonus',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Crag-Crushing Strike",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive polearm strikes.",
      },
      {
        name: "Go, Go, Turbo Twirly!",
        type: "Elemental Skill",
        description: "Summons Turbo Twirly drill; can ride it to climb sheer cliffs or deploy it independently to drill the ground, dealing AoE Nightsoul-aligned Geo DMG.",
      },
      {
        name: "Time to Get Serious!",
        type: "Elemental Burst",
        description: "Strikes the ground to create a Turbo Twirly Field, expanding Turbo Twirly's attack AoE and movement speed.",
      },
      {
        name: "Mountain Echoes",
        type: "1st Ascension Passive",
        description: "When Kachina triggers Crystallize, Turbo Twirly deals 15% more Geo DMG and restores 1.5 Energy.",
      },
      {
        name: "Solid as a Rock",
        type: "4th Ascension Passive",
        description: "Turbo Twirly deals 20% increased DMG when Kachina is actively riding it.",
      },
      {
        name: "Nightrealm's Gift: Heart of the Mountain",
        type: "Nightrealm's Gift",
        description: "Can ride Turbo Twirly up steep cliffs in Natlan using Phlogiston without consuming stamina.",
      },
      {
        name: "Geode Explorer",
        type: "Utility Passive",
        description: "Displays nearby local specialties of Natlan on the mini-map and restores 20 Phlogiston upon harvesting.",
      },
    ],
    constellations: [
      { level: 1, name: 'Shards Are Gems Too', effect: 'Mounting or dismounting Turbo Twirly pulls nearby Elemental Shards created by Crystallize.' },
      { level: 2, name: 'Turbo Twirly, Leaving You in the Dust', effect: 'Using Burst restores 20 Nightsoul points to Kachina.' },
      { level: 3, name: 'Improved Gearbox', effect: 'Increases the Level of Go, Turbo Twirly! by 3.' },
      { level: 4, name: 'More Foes, More Caution', effect: 'Increases Kachina\'s DEF based on the number of opponents inside the field.' },
      { level: 5, name: 'All I\'ve Learned Till Now', effect: 'Increases the Level of Time to Get Serious! by 3.' },
      { level: 6, name: 'This Time, I Gotta Win', effect: 'When a character\'s shield breaks or is replaced, deals 200% of Kachina\'s DEF as AoE Geo DMG.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Footprint of the Rainbow', 'Favonius Lance', 'Rightful Reward'],
      bestArtifacts: ['Scroll of the Hero of Cinder City', 'Husk of Opulent Dreams'],
      mainStats: {
        sands: 'DEF%',
        goblet: 'Geo DMG Bonus or DEF%',
        circlet: 'DEF% or CRIT Rate'
      },
      subStats: ['DEF%', 'Energy Recharge', 'CRIT Rate', 'Flat DEF']
    }
  },
  {
    id: 'ororon',
    name: 'Ororon',
    title: 'Shadow of the Night-Wind',
    element: 'Electro',
    weaponType: 'Bow',
    rarity: 4,
    region: 'Natlan',
    affiliation: 'Masters of the Night-Wind',
    birthday: 'November 1',
    constellationName: 'Vespertilio Umbra',
    description: 'An enigmatic youth from the Masters of the Night-Wind tribe who communes with spirits, raises crops, and strikes with shadowed bat talismans.',
    iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Ororon.png',
    splashUrl: 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Ororon.png',
    stats: {
      hpBase: 9800,
      atkBase: 228,
      defBase: 610,
      ascensionStat: 'ATK%',
      ascensionStatValue: '24.0%',
    },
    skills: [
      {
        name: "Nightshade Archery",
        type: "Normal Attack",
        description: "Performs up to 4 consecutive bow shots.",
      },
      {
        name: "Nightshade Manifestation",
        type: "Elemental Skill",
        description: "Tosses a Spirit Orb that bounces between enemies, dealing Electro DMG and marking them with Nightshade Brand.",
      },
      {
        name: "Darkwing Descent",
        type: "Elemental Burst",
        description: "Summons a phantom dark shadow bat that pulses with sound waves, dealing continuous AoE Electro DMG.",
      },
      {
        name: "Shadow Sight",
        type: "1st Ascension Passive",
        description: "When nearby party members trigger Electro-Charged or Nightsoul Burst, Ororon fires a Spiritshade arrow dealing Electro DMG.",
      },
      {
        name: "Umbral Resurgence",
        type: "4th Ascension Passive",
        description: "Restores 3 Energy to active character whenever Spiritshade hits.",
      },
      {
        name: "Nightrealm's Gift: Shrouded Stride",
        type: "Nightrealm's Gift",
        description: "Can glide with dark wings in Natlan consuming Phlogiston.",
      },
      {
        name: "Night Watcher",
        type: "Utility Passive",
        description: "Increases party gliding speed in Natlan by 15%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Forest Spirit Trail', effect: 'Elemental Skill talisman bounces 3 additional times.' },
      { level: 2, name: 'Bat\'s Echonavigation', effect: 'Burst soundwaves decrease opponents\' Electro RES by 20%.' },
      { level: 3, name: 'Shadow Whisperer', effect: 'Increases the Level of Nightshade Talisman by 3.' },
      { level: 4, name: 'Gloaming Shroud', effect: 'Restores 10 Energy when triggering Electro-Charged or Overloaded reactions.' },
      { level: 5, name: 'Nocturnal Eye', effect: 'Increases the Level of Dark Realm Calling by 3.' },
      { level: 6, name: 'Spirit-King\'s Accord', effect: 'Nearby party members gain 10% Electro DMG bonus for each talisman bounce.' }
    ],
    build: {
      role: 'Sub-DPS',
      bestWeapons: ['The Stringless', 'Favonius Warbow', 'Elegy for the End'],
      bestArtifacts: ['Scroll of the Hero of Cinder City', 'Noblesse Oblige', 'Golden Troupe'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG'
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'Energy Recharge', 'ATK%', 'Elemental Mastery']
    }
  },
  {
    id: 'iansan',
    name: 'Iansan',
    title: 'Trainer of the Mountain Springs',
    element: 'Electro',
    weaponType: 'Polearm',
    rarity: 4,
    region: 'Natlan',
    affiliation: 'Collective of Plenty',
    birthday: 'February 8',
    constellationName: 'Lupus Fortis',
    description: 'A fiercely dedicated and spirited physical trainer from the Collective of Plenty in Natlan, renowned for demanding training regimens and explosive Electro agility.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/3/38/Iansan_Icon.png',
    stats: {
      hpBase: 10800,
      atkBase: 220,
      defBase: 710,
      ascensionStat: 'Energy Recharge',
      ascensionStatValue: '26.7%',
    },
    skills: [
      {
        name: "Tribal Power Strike",
        type: "Normal Attack",
        description: "Performs up to 4 explosive boxing strikes.",
      },
      {
        name: "Thunderous Sprint",
        type: "Elemental Skill",
        description: "Dashes forward with electrified sprint steps, punching through enemies and generating high-voltage Electro shocks.",
      },
      {
        name: "Primal Roar: Blitzkrieg",
        type: "Elemental Burst",
        description: "Roars with primal tribal ferocity, calling down thunder strikes that grant party members attack speed and Electro infusion.",
      },
      {
        name: "Adrenaline Surge",
        type: "1st Ascension Passive",
        description: "Each hit during Thunderous Sprint increases Iansan's ATK by 5% (max 25%).",
      },
      {
        name: "Thunderous Will",
        type: "4th Ascension Passive",
        description: "Blitzkrieg grants party members 20% Electro DMG and 15% Movement SPD for 10s.",
      },
      {
        name: "Nightrealm's Gift: High-Octane Rush",
        type: "Nightrealm's Gift",
        description: "Sprint speed in Natlan increased by 30% when consuming Phlogiston.",
      },
      {
        name: "Saurian Trainer",
        type: "Utility Passive",
        description: "Restores 25% Stamina to party when entering combat.",
      },
    ],
    constellations: [
      { level: 1, name: 'Extra Repetition', effect: 'Skill cooldown reduced by 20% upon defeating an enemy.' },
      { level: 2, name: 'Endurance Threshold', effect: 'Workout High grants an additional 15% ATK SPD to all party members.' },
      { level: 3, name: 'Coach\'s Whistle', effect: 'Increases the Level of Thunderous Sprint Charge by 3.' },
      { level: 4, name: 'Electrolyte Hydration', effect: 'Restores 12 Energy to Iansan when triggering Electro reactions during Nightsoul state.' },
      { level: 5, name: 'Maximum Voltage Push', effect: 'Increases the Level of Warmup Climax Slam by 3.' },
      { level: 6, name: 'Championship Form', effect: 'Electro reactions triggered by party members deal 30% increased damage during Workout High.' }
    ],
    build: {
      role: 'Support',
      bestWeapons: ['Favonius Lance', 'The Catch', 'Footprint of the Rainbow'],
      bestArtifacts: ['Scroll of the Hero of Cinder City', 'Noblesse Oblige'],
      mainStats: {
        sands: 'Energy Recharge or ATK%',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['Energy Recharge', 'CRIT Rate', 'ATK%', 'Elemental Mastery'],
    }
  },
  {
    id: 'ifa',
    name: 'Ifa',
    title: 'Saurian Physician',
    element: 'Anemo',
    weaponType: 'Catalyst',
    rarity: 4,
    region: 'Natlan',
    affiliation: 'Flower-Feather Clan',
    birthday: 'May 16',
    constellationName: 'Medicus Saurianus',
    description: 'A caring and renowned veterinarian and doctor from the Flower-Feather Clan, specializing in treating wounded saurians and humans alike with soothing Anemo breezes.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/5/5f/Ifa_Icon.png',
    stats: {
      hpBase: 11400,
      atkBase: 195,
      defBase: 650,
      ascensionStat: 'Healing Bonus',
      ascensionStatValue: '22.1%',
    },
    skills: [
      {
        name: "Healing Remedy Thrust",
        type: "Normal Attack",
        description: "Performs up to 4 spear thrusts with herbalist precision.",
      },
      {
        name: "Saurian Salve",
        type: "Elemental Skill",
        description: "Applies restorative Saurian salves, healing party members and cleansing status conditions.",
      },
      {
        name: "Blessed Shamanic Canopy",
        type: "Elemental Burst",
        description: "Erects a protective shamanic totem that pulses healing waves and grants party members continuous damage reduction.",
      },
      {
        name: "Tending the Wild",
        type: "1st Ascension Passive",
        description: "Characters healed by Saurian Salve gain 15% Max HP shield for 8s.",
      },
      {
        name: "Herbal Infusion",
        type: "4th Ascension Passive",
        description: "Increases incoming healing by 25% for characters below 40% HP.",
      },
      {
        name: "Nightrealm's Gift: Saurian Empathy",
        type: "Nightrealm's Gift",
        description: "Saurians in Natlan will not attack unless provoked.",
      },
      {
        name: "Veterinary Care",
        type: "Utility Passive",
        description: "When cooking recovery food, has a 12% chance to obtain double the product.",
      },
    ],
    constellations: [
      { level: 1, name: 'Clinic on the Wing', effect: 'Healing ring interval is reduced by 25% and heals an additional 10%.' },
      { level: 2, name: 'Herbal Infusion', effect: 'Swirl reactions triggered inside the Cloudburst increase party elemental DMG by 15%.' },
      { level: 3, name: 'Veterinary Poultice', effect: 'Increases the Level of Saurian Salve Gust by 3.' },
      { level: 4, name: 'Saurian Kinship', effect: 'Active characters under healing ring gain 100 Elemental Mastery.' },
      { level: 5, name: 'Doctor\'s Sanctuary', effect: 'Increases the Level of Restorative Cloudburst by 3.' },
      { level: 6, name: 'Breath of the Sky-Father', effect: 'When casting Burst, revives fallen party members to 30% HP (once every 15m).' }
    ],
    build: {
      role: 'Healer',
      bestWeapons: ['Prototype Amber', 'Thrilling Tales of Dragon Slayers', 'Sacrificial Fragments'],
      bestArtifacts: ['Viridescent Venerer', 'Maiden Beloved', 'Ocean-Hued Clam'],
      mainStats: {
        sands: 'Energy Recharge or HP%',
        goblet: 'HP%',
        circlet: 'Healing Bonus',
      },
      subStats: ['Energy Recharge', 'HP%', 'Elemental Mastery', 'CRIT Rate'],
    }
  },
  {
    id: 'varesa',
    name: 'Varesa',
    title: 'Volcano Chieftain',
    element: 'Electro',
    weaponType: 'Catalyst',
    rarity: 5,
    region: 'Natlan',
    affiliation: 'Scions of the Canopy / Flame Keepers',
    birthday: 'July 11',
    constellationName: 'Fulgur Vulcanus',
    description: 'A formidable battle-shaman who commands lightning formed from volcanic plumes. Her thunderous incantations electrify the battlefield.',
    iconUrl: 'https://static.wikia.nocookie.net/gensin-impact/images/d/dd/Varesa_Icon.png',
    stats: {
      hpBase: 13500,
      atkBase: 338,
      defBase: 720,
      ascensionStat: 'CRIT DMG',
      ascensionStatValue: '38.4%',
    },
    skills: [
      {
        name: "Duskblade Cleave",
        type: "Normal Attack",
        description: "Performs up to 4 heavy swings with a tribal greatsword.",
      },
      {
        name: "Solar Flare Vortex",
        type: "Elemental Skill",
        description: "Spins in a blazing vortex, pulling in lightweight opponents and igniting them with intense Pyro DMG.",
      },
      {
        name: "Incandescent Twilight",
        type: "Elemental Burst",
        description: "Calls upon the ancient sun warriors, delivering an overhead cleave that bursts into solar shockwaves.",
      },
      {
        name: "Solar Infusion",
        type: "1st Ascension Passive",
        description: "Infuses greatsword with Pyro for 8s after casting Solar Flare Vortex.",
      },
      {
        name: "Radiance of the Sun Tribe",
        type: "4th Ascension Passive",
        description: "Increases party members' Pyro DMG Bonus by 15% when Nightsoul Burst triggers.",
      },
      {
        name: "Nightrealm's Gift: Obsidian Flame",
        type: "Nightrealm's Gift",
        description: "Consumes Phlogiston to perform double-jump in Natlan.",
      },
      {
        name: "Tribal Vanguard",
        type: "Utility Passive",
        description: "Decreases sprinting Stamina consumption for party members by 20%.",
      },
    ],
    constellations: [
      { level: 1, name: 'Magma Corona', effect: 'Increases the number of revolving orbs to 5 and extends duration by 3s.' },
      { level: 2, name: 'Pyroclastic Surge', effect: 'Overload and Electro reactions triggered by Varesa decrease enemy DEF by 20%.' },
      { level: 3, name: 'Shaman\'s Brand', effect: 'Increases the Level of Magma Spark Surge by 3.' },
      { level: 4, name: 'Mantle Conduit', effect: 'Burst restores 15 Energy to all off-field party members.' },
      { level: 5, name: 'Heart of the Volcano', effect: 'Increases the Level of Calamity of the Molten Sky by 3.' },
      { level: 6, name: 'Wrath of the Earth-Mother', effect: 'Increases Varesa\'s Electro CRIT Rate by 15% and CRIT DMG by 70% during Burst.' }
    ],
    build: {
      role: 'Main DPS',
      bestWeapons: ['Kagura\'s Verity', 'Lost Prayer to the Sacred Winds', 'The Widsith'],
      bestArtifacts: ['Obsidian Codex', 'Thundering Fury', 'Gilded Dreams'],
      mainStats: {
        sands: 'ATK% or Elemental Mastery',
        goblet: 'Electro DMG Bonus',
        circlet: 'CRIT Rate or CRIT DMG',
      },
      subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Elemental Mastery'],
    }
  }
];
