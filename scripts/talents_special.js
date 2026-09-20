export const SPECIAL_TALENTS = {
  tartaglia: [
    {
      name: 'Cutting Torrent',
      type: 'Normal Attack',
      description: 'Performs up to 6 consecutive shots with a bow; charged shots apply Riptide to opponents.'
    },
    {
      name: 'Foul Legacy: Raging Tide',
      type: 'Elemental Skill',
      description: 'Unleashes a set of weaponry made of pure water, switching to melee stance where attacks deal Hydro DMG and trigger Riptide Slash.'
    },
    {
      name: 'Havoc: Obliteration',
      type: 'Elemental Burst',
      description: 'In Ranged Stance: fires Flash of Havoc dealing AoE Hydro DMG and applying Riptide. In Melee Stance: performs Light of Obliteration, slashing for colossal AoE Hydro DMG.'
    },
    {
      name: 'Never Ending',
      type: '1st Ascension Passive',
      description: 'Extends Riptide duration by 8s.'
    },
    {
      name: 'Sword of Torrents',
      type: '4th Ascension Passive',
      description: 'When Tartaglia is in Foul Legacy: Raging Tide\'s Melee Stance, on scoring a CRIT Hit, Normal and Charged Attacks apply the Riptide status effect to opponents.'
    },
    {
      name: 'Master of Weaponry',
      type: 'Utility Passive',
      description: 'Increases your own party members\' Normal Attack Level by 1.'
    }
  ],

  arlecchino: [
    {
      name: 'Invitation to a Beheading',
      type: 'Normal Attack',
      description: 'Performs up to 6 consecutive spear strikes; when Bond of Life is ≥30% of Max HP, enters Masque of the Red Death, converting attacks to Pyro.'
    },
    {
      name: 'All Is Ash',
      type: 'Elemental Skill',
      description: 'Summons Balemoon Bloodfire, cleaving opponents for Pyro DMG and inflicting Blood-Debt Directive; charged attacks collect Directives to grant Bond of Life.'
    },
    {
      name: 'Balemoon Rising',
      type: 'Elemental Burst',
      description: 'Unfurls her wings of Balemoon Bloodfire, absorbing Directives and clearing Bond of Life to deal colossal AoE Pyro DMG, reset Skill CD, and heal herself.'
    },
    {
      name: 'Agony Alone May Be Repaid',
      type: '1st Ascension Passive',
      description: 'Defeating opponents afflicted with Blood-Debt Directive grants Arlecchino 130% Bond of Life; directives upgrade to Blood-Debt Due after 5s for greater Bond of Life.'
    },
    {
      name: 'The Balemoon Alone Knew',
      type: '4th Ascension Passive',
      description: 'Arlecchino gains 1% Elemental and Physical RES for every 100 ATK she possesses that exceeds 1,000 (max 20% RES).'
    },
    {
      name: "The Balemoon's Pity",
      type: 'Utility Passive',
      description: 'While in combat, Arlecchino gains a 40% Pyro DMG Bonus and can only be healed through Balemoon Rising.'
    }
  ],

  alyosha: [
    {
      name: "Fatui Officer's Saber",
      type: 'Normal Attack',
      description: 'Performs up to 5 disciplined military saber strikes.'
    },
    {
      name: 'Frostfire Barrage',
      type: 'Elemental Skill',
      description: 'Fires high-caliber ordnance from his Fatui gauntlet, alternating between Pyro and Cryo explosive rounds.'
    },
    {
      name: 'Snezhnayan Iron Fist',
      type: 'Elemental Burst',
      description: 'Calls down artillery bombardment from the Zapolyarny Palace vanguard, devastating the battlefield.'
    },
    {
      name: 'Tactical Superiority',
      type: '1st Ascension Passive',
      description: 'When triggering Melt, increases party ATK by 20% for 10s.'
    },
    {
      name: 'Iron Discipline',
      type: '4th Ascension Passive',
      description: 'Decreases damage taken by 15% when performing Charged Attacks.'
    },
    {
      name: 'Imperial Logistics',
      type: 'Utility Passive',
      description: 'Gains 25% more rewards on Snezhnaya Expeditions.'
    }
  ],

  odette: [
    {
      name: 'Clockwork Fencing',
      type: 'Normal Attack',
      description: 'Performs up to 4 mechanical rapier thrusts.'
    },
    {
      name: 'Mechanized Ballet',
      type: 'Elemental Skill',
      description: 'Pirouettes with razor-sharp gears, dealing Hydro and Physical DMG and building kinetic energy.'
    },
    {
      name: 'Clockwork Crescendo',
      type: 'Elemental Burst',
      description: 'Unleashes a grand mechanical music box that plays harmonious melodies, boosting party attack speed and dealing continuous AoE Hydro DMG.'
    },
    {
      name: 'Precision Calibration',
      type: '1st Ascension Passive',
      description: 'Normal attacks gain 10% CRIT Rate when kinetic energy is full.'
    },
    {
      name: 'Clockwork Momentum',
      type: '4th Ascension Passive',
      description: 'Using Mechanized Ballet increases party movement speed by 15% for 8s.'
    },
    {
      name: 'Automaton Mastery',
      type: 'Utility Passive',
      description: 'When crafting weapon enhancement materials, 10% chance to receive double the product.'
    }
  ],

  sandrone: [
    {
      name: 'Marionette Strings',
      type: 'Normal Attack',
      description: 'Commands floating puppet strings to strike foes with blunt impact.'
    },
    {
      name: 'Puppet Vanguard',
      type: 'Elemental Skill',
      description: 'Commands her colossal mechanical companion to charge forward, creating an impenetrable vanguard and taunting enemies.'
    },
    {
      name: 'Grand Automaton Symphony',
      type: 'Elemental Burst',
      description: 'The giant automaton enters overdrive, stomping the earth to unleash devastating tectonic shockwaves and granting party DEF shields.'
    },
    {
      name: 'Clockwork Overhaul',
      type: '1st Ascension Passive',
      description: 'Automaton absorbs 250% Geo and Physical damage and reflects 15% back to attackers.'
    },
    {
      name: 'Mechanical Dominance',
      type: '4th Ascension Passive',
      description: 'Increases party DEF by 20% while Grand Automaton Symphony is active.'
    },
    {
      name: 'Marionette Artisan',
      type: 'Utility Passive',
      description: 'When crafting furnishings, has a 25% chance to refund crafting materials.'
    }
  ],

  aloy: [
    {
      name: 'Rapid Fire',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive shots with a bow.'
    },
    {
      name: 'Frozen Wilds',
      type: 'Elemental Skill',
      description: 'Throws a Freeze Bomb forward that detonates into Chillwater Bomblets; gaining 4 Coil stacks triggers Rushing Ice state infusing attacks with Cryo.'
    },
    {
      name: 'Prophecies of Dawn',
      type: 'Elemental Burst',
      description: 'Hurls a Cryo power cell overhead and detonates it with an arrow, dealing massive AoE Cryo DMG.'
    },
    {
      name: 'Combat Override',
      type: '1st Ascension Passive',
      description: "When Aloy gains the Coil effect from Frozen Wilds, her ATK is increased by 16%, while nearby party members' ATK is increased by 8% for 10s."
    },
    {
      name: 'Strong Strike',
      type: '4th Ascension Passive',
      description: "When Aloy is in the Rushing Ice state, her Cryo DMG Bonus increases by 3.5% every 1s (max 35%)."
    },
    {
      name: 'Easy Does It',
      type: 'Utility Passive',
      description: 'Animals from whom poultry, raw meat, or chilled meat can be obtained are not easily startled when party members approach.'
    }
  ],

  nicole: [
    {
      name: 'Prophetic Wand',
      type: 'Normal Attack',
      description: 'Performs up to 4 starlight wand strikes dealing Anemo DMG.'
    },
    {
      name: 'Whispers of Fate',
      type: 'Elemental Skill',
      description: 'Consults the prophecy voice within the tea cup, revealing enemy weak points and decreasing enemy elemental resistances.'
    },
    {
      name: 'Cosmic Convergence',
      type: 'Elemental Burst',
      description: 'Unveils the tea party of fate, granting allies invulnerability for 2s and empowering all elemental reactions for 15s.'
    },
    {
      name: 'Guided Destinies',
      type: '1st Ascension Passive',
      description: 'Party members trigger elemental reactions with 20% increased reaction DMG.'
    },
    {
      name: 'Web of Fate',
      type: '4th Ascension Passive',
      description: 'When an ally takes fatal damage, prevents death and heals for 20% Max HP (once per 15 min).'
    },
    {
      name: 'Hexenzirkel Lore',
      type: 'Utility Passive',
      description: 'Increases party Elemental Mastery by 50 in domains and spiral abyss.'
    }
  ],

  skirk: [
    {
      name: 'Voidblade Mastery',
      type: 'Normal Attack',
      description: 'Performs up to 5 otherworldly sword strikes slicing through dimensional rifts.'
    },
    {
      name: 'Abyssal Rift',
      type: 'Elemental Skill',
      description: 'Tears open a rift to the primordial void, swallowing incoming attacks and blinking behind the foe with an execution slash.'
    },
    {
      name: 'Calamity of the Void',
      type: 'Elemental Burst',
      description: 'Unleashes the cosmic calamity of the deep abyss, plunging the entire area into a starry black void that obliterates all enemy shields.'
    },
    {
      name: 'Transcendent Voidform',
      type: '1st Ascension Passive',
      description: 'Attacks deal 25% true damage, ignoring enemy defensive barriers and shields.'
    },
    {
      name: 'Sovereign of Chaos',
      type: '4th Ascension Passive',
      description: "Increases Skirk's CRIT DMG by 30% for 10s after casting Calamity of the Void."
    },
    {
      name: 'Abyssal Wanderer',
      type: 'Utility Passive',
      description: 'Can sprint across any terrain surface without taking fall damage.'
    }
  ],

  traveler: [
    {
      name: 'Foreign Blade',
      type: 'Normal Attack',
      description: 'Performs up to 5 rapid sword strikes.'
    },
    {
      name: 'Elemental Resonance Strike',
      type: 'Elemental Skill',
      description: 'Channels the attuned element (Palm Vortex, Starfell Sword, Lightning Blade, Razorgrass Blade, Aquacrest Saber) to release elemental force.'
    },
    {
      name: 'Elemental Rupture',
      type: 'Elemental Burst',
      description: 'Unleashes elemental cataclysm (Gust Surge, Wake of Earth, Bellowing Thunder, Surgent Manifestation, Torrential Discharge).'
    },
    {
      name: 'Slitting Wind & Elemental Insight',
      type: '1st Ascension Passive',
      description: 'The last hit of a Normal Attack combo unleashes an elemental blade dealing 60% of ATK as elemental DMG to opponents.'
    },
    {
      name: 'Second Wind & Abyssal Memory',
      type: '4th Ascension Passive',
      description: 'Defeating opponents with Elemental Skill regenerates 2% HP for 5s and restores 10 Energy.'
    },
    {
      name: "Journey's Echo",
      type: 'Utility Passive',
      description: 'Decreases party sprinting and swimming Stamina consumption by 10% across all nations.'
    }
  ],

  'wonderland-manekin': [
    {
      name: 'Puppet Strike',
      type: 'Normal Attack',
      description: 'Performs up to 4 rhythmic toy mallet strikes.'
    },
    {
      name: 'Mimicry Mirage',
      type: 'Elemental Skill',
      description: 'Deploys a duplicate toy manekin that mimics active character attacks, dealing coordinated physical and elemental DMG.'
    },
    {
      name: 'Clockwork Carnival',
      type: 'Elemental Burst',
      description: 'Launches a carnival parade of mechanized toys that march across the battlefield with joyous explosions.'
    },
    {
      name: 'Whimsical Automaton',
      type: '1st Ascension Passive',
      description: 'Mimicry Mirage taunts nearby enemies for 6s and increases team attack speed by 10%.'
    },
    {
      name: 'Clockwork Spark',
      type: '4th Ascension Passive',
      description: 'Triggering reactions restores 5 Energy to all party members.'
    },
    {
      name: "Toymaker's Wonder",
      type: 'Utility Passive',
      description: 'Crafting toys and gadgets yields a 10% chance to receive double the product.'
    }
  ]
};

