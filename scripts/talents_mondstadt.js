export const MONDSTADT_TALENTS = {
  venti: [
    {
      name: 'Favonius Marksmanship',
      type: 'Normal Attack',
      description: 'Performs up to 6 consecutive shots with a bow.'
    },
    {
      name: 'Skyward Sonnet',
      type: 'Elemental Skill',
      description: 'Summons a Wind Domain at the target, dealing AoE Anemo DMG and launching opponents into the air. Holding summons a larger wind domain with an upcurrent.'
    },
    {
      name: "Wind's Grand Ode",
      type: 'Elemental Burst',
      description: 'Fires an arrow made of countless coalesced breezes, creating a huge Stormeye that sucks in objects and opponents while dealing continuous Anemo DMG and absorbing elements.'
    },
    {
      name: 'Embrace of Winds',
      type: '1st Ascension Passive',
      description: 'Holding Skyward Sonnet creates an upcurrent that lasts for 20s.'
    },
    {
      name: 'Stormeye',
      type: '4th Ascension Passive',
      description: "Regenerates 15 Energy for Venti after the effects of Wind's Grand Ode end; if an Elemental Absorption occurred, restores 15 Energy to all characters of that element."
    },
    {
      name: 'Windrider',
      type: 'Utility Passive',
      description: 'Decreases gliding Stamina consumption for party members by 20%.'
    }
  ],

  diluc: [
    {
      name: 'Tempered Sword',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive claymore strikes.'
    },
    {
      name: 'Searing Onslaught',
      type: 'Elemental Skill',
      description: 'Performs a forward slash that deals Pyro DMG; can be used 3 times consecutively with dynamic combo branching.'
    },
    {
      name: 'Dawn',
      type: 'Elemental Burst',
      description: 'Releases intense flames that summon a soaring Phoenix flying forward, dealing massive Pyro DMG, knocking enemies back, and granting Diluc Pyro Infusion.'
    },
    {
      name: 'Relentless',
      type: '1st Ascension Passive',
      description: "Diluc's Charged Attack Stamina Cost is decreased by 50%, and its maximum duration is increased by 3s."
    },
    {
      name: 'Blessing of Phoenix',
      type: '4th Ascension Passive',
      description: 'The Pyro Infusion provided by Dawn lasts for 4s longer; additionally, Diluc gains 20% Pyro DMG Bonus during the infusion.'
    },
    {
      name: 'Tradition of the Dawn Knight',
      type: 'Utility Passive',
      description: 'Refunds 15% of the ores used when crafting Claymore-type weapons.'
    }
  ],

  jean: [
    {
      name: 'Favonius Bladework',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive sword strikes.'
    },
    {
      name: 'Gale Blade',
      type: 'Elemental Skill',
      description: 'Focusing the power of wind, releases a miniature storm launching enemies; holding pulls nearby enemies and objects towards Jean before launching them.'
    },
    {
      name: 'Dandelion Breeze',
      type: 'Elemental Burst',
      description: 'Creates a swirling Dandelion Field, instantly regenerating large amounts of HP for all party members based on Jean\'s ATK and continuously dealing Anemo DMG and cleansing.'
    },
    {
      name: 'Wind Companion',
      type: '1st Ascension Passive',
      description: "Hits by Normal Attacks have a 50% chance to regenerate HP equal to 15% of Jean's ATK for all party members."
    },
    {
      name: 'Let the Wind Lead',
      type: '4th Ascension Passive',
      description: 'Using Dandelion Breeze will regenerate 20% of its Energy.'
    },
    {
      name: 'Guiding Breeze',
      type: 'Utility Passive',
      description: 'When a Perfect Cooking is achieved on a dish with restorative effects, Jean has a 12% chance to obtain double the product.'
    }
  ],

  eula: [
    {
      name: 'Favonius Bladework - Edel',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive claymore strikes.'
    },
    {
      name: 'Icetide Vortex',
      type: 'Elemental Skill',
      description: 'Slashes swiftly, dealing Cryo DMG and gaining Grimheart stacks; holding consumes Grimheart to shred enemy Physical and Cryo RES and fire Icewhirl Brands.'
    },
    {
      name: 'Glacial Illumination',
      type: 'Elemental Burst',
      description: 'Brandishes her greatsword dealing AoE Cryo DMG and summons a Lightfall Sword that charges up as Eula attacks, exploding for colossal Physical DMG after 7s.'
    },
    {
      name: 'Roiling Rime',
      type: '1st Ascension Passive',
      description: 'If 2 stacks of Grimheart are consumed upon unleashing the Holding Mode of Icetide Vortex, a Shattered Lightfall Sword falls dealing 50% of the baseline Burst Physical DMG.'
    },
    {
      name: 'Wellspring of War-Lust',
      type: '4th Ascension Passive',
      description: 'When Glacial Illumination is cast, the CD of Icetide Vortex is reset and Eula gains 1 stack of Grimheart.'
    },
    {
      name: 'Aristocratic Introspection',
      type: 'Utility Passive',
      description: 'When Eula crafts Character Talent Materials, she has a 10% chance to receive double the product.'
    }
  ],

  klee: [
    {
      name: 'Kaboom!',
      type: 'Normal Attack',
      description: 'Throws explosive sparks that bounce and explode dealing AoE Pyro DMG.'
    },
    {
      name: 'Jumpy Dumpty',
      type: 'Elemental Skill',
      description: 'Hurls Jumpy Dumpty, who bounces 3 times dealing AoE Pyro DMG on each bounce before splitting into 8 proximity mines that detonate on contact.'
    },
    {
      name: "Sparks 'n' Splash",
      type: 'Elemental Burst',
      description: 'Summons Sparks \'n\' Splash to continuously bombard nearby enemies, dealing heavy AoE Pyro DMG over 10s.'
    },
    {
      name: 'Pounding Surprise',
      type: '1st Ascension Passive',
      description: 'When Jumpy Dumpty or Normal Attacks deal DMG, Klee has a 50% chance to obtain an Explosive Spark: next Charged Attack costs no Stamina and deals 50% increased DMG.'
    },
    {
      name: 'Sparkling Burst',
      type: '4th Ascension Passive',
      description: "When Klee's Charged Attack results in a CRIT Hit, all party members gain 2 Elemental Energy."
    },
    {
      name: 'All Of My Treasures!',
      type: 'Utility Passive',
      description: 'Displays the location of nearby resources unique to Mondstadt on the mini-map.'
    }
  ],

  mona: [
    {
      name: 'Ripple of Fate',
      type: 'Normal Attack',
      description: 'Performs up to 4 water splashes that deal Hydro DMG.'
    },
    {
      name: 'Mirror Reflection of Doom',
      type: 'Elemental Skill',
      description: 'Creates an illusory Phantom from water that continuously taunts enemies, dealing periodic Hydro DMG before detonating.'
    },
    {
      name: 'Stellaris Phantasm',
      type: 'Elemental Burst',
      description: 'Traps enemies in an illusory pocket of water (Shadow of Fate), applying Omen which dramatically amplifies damage taken when popped.'
    },
    {
      name: 'Illusory Torrent',
      type: 'Alternate Sprint',
      description: 'Mona cloaks herself within water\'s flow, consuming Stamina to move at high speed across land and water; reappearing applies Wet to nearby opponents.'
    },
    {
      name: "Come 'n' Get Me, Hag!",
      type: '1st Ascension Passive',
      description: 'After she has used Illusory Torrent for 2s, if there are any opponents nearby, Mona will automatically create a Phantom.'
    },
    {
      name: 'Waterborne Destiny',
      type: '4th Ascension Passive',
      description: "Increases Mona's Hydro DMG Bonus by a degree equivalent to 20% of her Energy Recharge rate."
    },
    {
      name: 'Principium of Astrology',
      type: 'Utility Passive',
      description: 'When Mona crafts Weapon Ascension Materials, she has a 25% chance to refund one count of one material used.'
    }
  ],

  bennett: [
    {
      name: 'Strike of Fortune',
      type: 'Normal Attack',
      description: 'Performs up to 5 rapid strikes.'
    },
    {
      name: 'Passion Overload',
      type: 'Elemental Skill',
      description: 'Concentrates the flames of passion into a sword; can be tapped for a strike or charged to Level 1 or Level 2 explosion.'
    },
    {
      name: 'Fantastic Voyage',
      type: 'Elemental Burst',
      description: 'Leaps into the air and strikes the ground dealing Pyro DMG and creating an Inspiration Field that heals allies below 70% HP and grants ATK bonus based on Bennett\'s Base ATK.'
    },
    {
      name: 'Rekindle',
      type: '1st Ascension Passive',
      description: "Decreases Passion Overload's CD by 20%."
    },
    {
      name: 'Fearnaught',
      type: '4th Ascension Passive',
      description: 'Within the area created by Fantastic Voyage, Passion Overload\'s CD is decreased by 50%, and Bennett cannot be launched by Charge Level 2.'
    },
    {
      name: 'It Should Be Safe...',
      type: 'Utility Passive',
      description: 'Gains 25% more rewards when dispatched on a Mondstadt Expedition for 20 hours.'
    }
  ],

  fischl: [
    {
      name: 'Bolts of Downfall',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive bow shots.'
    },
    {
      name: 'Nightrider',
      type: 'Elemental Skill',
      description: 'Summons Oz, the raven of night, dealing AoE Electro DMG upon summon and continuously firing Freikugel Electro bullets at nearby enemies.'
    },
    {
      name: 'Midnight Phantasmagoria',
      type: 'Elemental Burst',
      description: 'Fischl takes the form of Oz, striking nearby enemies with lightning as she flies swiftly across the field, resetting Oz\'s field duration.'
    },
    {
      name: 'Stellar Predator',
      type: '1st Ascension Passive',
      description: 'When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down Thundering Retribution, dealing AoE Electro DMG equal to 152.7% of the arrow\'s DMG.'
    },
    {
      name: 'Undone Be Thy Sinful Hex',
      type: '4th Ascension Passive',
      description: 'If your current active character triggers an Electro-related Elemental Reaction when Oz is on the field, opponents will be struck with Thundering Retribution, dealing 80% of Fischl\'s ATK as Electro DMG.'
    },
    {
      name: 'Mein Hausgarten',
      type: 'Utility Passive',
      description: 'Gains 25% more rewards when dispatched on a Mondstadt Expedition for 20 hours.'
    }
  ],

  albedo: [
    {
      name: 'Favonius Bladework - Weiss',
      type: 'Normal Attack',
      description: 'Performs up to 5 rapid sword strikes.'
    },
    {
      name: 'Abiogenesis: Solar Isotoma',
      type: 'Elemental Skill',
      description: 'Creates a Solar Isotoma that deals AoE Geo DMG. When enemies within take damage, Transient Blossoms bloom dealing AoE Geo DMG scaling with Albedo\'s DEF.'
    },
    {
      name: 'Rite of Progeniture: Tectonic Tide',
      type: 'Elemental Burst',
      description: 'Releases Geo crystals that surge forward dealing AoE Geo DMG; if Solar Isotoma is present, generates 7 Fatal Blossoms that burst violently.'
    },
    {
      name: 'Calcite Might',
      type: '1st Ascension Passive',
      description: "Transient Blossoms generated by Abiogenesis: Solar Isotoma deal 25% more DMG to opponents whose HP is below 50%."
    },
    {
      name: 'Homuncular Nature',
      type: '4th Ascension Passive',
      description: 'Using Rite of Progeniture: Tectonic Tide increases the Elemental Mastery of nearby party members by 125 for 10s.'
    },
    {
      name: 'Flash of Genius',
      type: 'Utility Passive',
      description: 'When Albedo crafts Weapon Ascension Materials, he has a 10% chance to receive double the product.'
    }
  ],

  amber: [
    {
      name: 'Sharpshooter',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive bow shots.'
    },
    {
      name: 'Explosive Puppet',
      type: 'Elemental Skill',
      description: 'Hurls Baron Bunny into combat, taunting nearby enemies before detonating violently for AoE Pyro DMG.'
    },
    {
      name: 'Fiery Rain',
      type: 'Elemental Burst',
      description: 'Fires off a shower of flaming arrows, dealing continuous AoE Pyro DMG over a short duration.'
    },
    {
      name: 'Everywhere Upon the Earth',
      type: '1st Ascension Passive',
      description: 'Fiery Rain increases Amber\'s CRIT Rate by 10% and widens the AoE by 30%.'
    },
    {
      name: 'Precise Shot',
      type: '4th Ascension Passive',
      description: "Aimed Shots that hit weak spots increase Amber's ATK by 15% for 10s."
    },
    {
      name: 'Gliding Champion',
      type: 'Utility Passive',
      description: 'Decreases gliding Stamina consumption for party members by 20%.'
    }
  ],

  barbara: [
    {
      name: 'Whisper of Water',
      type: 'Normal Attack',
      description: 'Performs up to 4 water splash attacks dealing Hydro DMG.'
    },
    {
      name: 'Let the Show Begin♪',
      type: 'Elemental Skill',
      description: 'Summons droplets resembling musical notes to form a Melody Loop, periodically healing the active character, applying Wet, and healing on Normal/Charged hits.'
    },
    {
      name: 'Shining Miracle♪',
      type: 'Elemental Burst',
      description: 'Heals all nearby party members and allies for a large amount of HP based on Barbara\'s Max HP.'
    },
    {
      name: 'Glorious Season',
      type: '1st Ascension Passive',
      description: 'The Stamina consumption of characters within the Melody Loop is decreased by 12%.'
    },
    {
      name: 'Encore',
      type: '4th Ascension Passive',
      description: 'When your active character gains an Elemental Orb or Particle, the duration of the Melody Loop is extended by 1s (max 5s).'
    },
    {
      name: 'With All My Heart♪',
      type: 'Utility Passive',
      description: 'When a Perfect Cooking is achieved on a dish with restorative effects, Barbara has a 12% chance to obtain double the product.'
    }
  ],

  dahlia: [
    {
      name: "Deacon's Benediction",
      type: 'Normal Attack',
      description: 'Performs up to 4 swift fencing thrusts.'
    },
    {
      name: 'Cleansing Cascade',
      type: 'Elemental Skill',
      description: 'Deploys a fountain of holy water, cleansing negative statuses and restoring HP to allies while dealing Hydro DMG to foes.'
    },
    {
      name: 'Sacred Rite: Baptism of Light',
      type: 'Elemental Burst',
      description: 'Calls upon cathedral hymns to shower allies in restorative rain, granting continuous healing and Hydro infusion resistance.'
    },
    {
      name: 'Serene Solace',
      type: '1st Ascension Passive',
      description: 'Characters healed by Cleansing Cascade gain 15% Hydro and Cryo RES for 10s.'
    },
    {
      name: 'Merciful Spring',
      type: '4th Ascension Passive',
      description: 'After casting Baptism of Light, party members\' incoming healing is increased by 20% for 12s.'
    },
    {
      name: 'Clerical Grace',
      type: 'Utility Passive',
      description: 'When crafting Potions or Oils, has a 25% chance to refund crafting materials.'
    }
  ],

  diona: [
    {
      name: 'Kätzlein Style',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive shots with a bow.'
    },
    {
      name: 'Icy Paws',
      type: 'Elemental Skill',
      description: 'Fires Icy Paws that deal Cryo DMG and generate a shield based on Max HP (holding fires 5 paws and increases shield strength by 75%).'
    },
    {
      name: 'Signature Mix',
      type: 'Elemental Burst',
      description: 'Tosses a special cold brew that splashes to deal AoE Cryo DMG and creates a Drunken Mist field that continuously heals allies and damages enemies.'
    },
    {
      name: "Cat's Tail Secret Menu",
      type: '1st Ascension Passive',
      description: 'Characters shielded by Icy Paws have their Movement SPD increased by 10% and their Stamina Consumption decreased by 10%.'
    },
    {
      name: "Drunkards' Farce",
      type: '4th Ascension Passive',
      description: 'Opponents who enter the Drunken Mist field created by Signature Mix have their ATK decreased by 10% for 15s.'
    },
    {
      name: 'Complimentary Bar Food',
      type: 'Utility Passive',
      description: 'When a Perfect Cooking is achieved on a dish with restorative effects, Diona has a 12% chance to obtain double the product.'
    }
  ],

  durin: [
    {
      name: 'Corrupted Dragonclaw',
      type: 'Normal Attack',
      description: 'Performs up to 4 heavy claws and slashes.'
    },
    {
      name: 'Festering Miasma',
      type: 'Elemental Skill',
      description: 'Erupts with concentrated dark alchemy, dealing Anemo and Cryo DMG in an area and inflicting Corrupted Blood debuff.'
    },
    {
      name: 'Abyssal Cataclysm',
      type: 'Elemental Burst',
      description: 'Unleashes the full terrifying aura of the corrupted dragon, dealing colossal AoE Anemo DMG and creating a persistent vortex.'
    },
    {
      name: 'Draconic Resurgence',
      type: '1st Ascension Passive',
      description: 'When triggering Swirl with Pyro or Cryo, Durin regenerates 10 Energy.'
    },
    {
      name: 'Heart of the Defiled',
      type: '4th Ascension Passive',
      description: 'Festering Miasma deals 20% increased DMG to opponents afflicted with Corrupted Blood.'
    },
    {
      name: 'Dragonspine Catalyst',
      type: 'Utility Passive',
      description: 'Decreases sheer cold accumulation rate for all party members by 25% on Dragonspine.'
    }
  ],

  kaeya: [
    {
      name: 'Ceremonial Bladework',
      type: 'Normal Attack',
      description: 'Performs up to 5 rapid sword strikes.'
    },
    {
      name: 'Frostgnaw',
      type: 'Elemental Skill',
      description: 'Releases a frigid blast, dealing Cryo DMG to opponents in front of Kaeya.'
    },
    {
      name: 'Glacial Waltz',
      type: 'Elemental Burst',
      description: 'Summons 3 icicles that twirl around the active character, following them and dealing continuous Cryo DMG to enemies.'
    },
    {
      name: 'Cold-Blooded Strike',
      type: '1st Ascension Passive',
      description: "Each hit with Frostgnaw regenerates HP for Kaeya equal to 15% of his ATK."
    },
    {
      name: 'Heart of the Abyss',
      type: '4th Ascension Passive',
      description: 'Opponents Frozen by Frostgnaw will drop additional Elemental Particles.'
    },
    {
      name: 'Hidden Strength',
      type: 'Utility Passive',
      description: 'Decreases sprinting Stamina consumption for party members by 20%.'
    }
  ],

  lisa: [
    {
      name: 'Lightning Touch',
      type: 'Normal Attack',
      description: 'Performs up to 4 electrostatic strikes dealing Electro DMG.'
    },
    {
      name: 'Violet Arc',
      type: 'Elemental Skill',
      description: 'Releases homing lightning orbs to stack Conductive status; holding summons lightning from the heavens dealing colossal AoE Electro DMG.'
    },
    {
      name: 'Lightning Rose',
      type: 'Elemental Burst',
      description: 'Summons a Lightning Rose that unleashes powerful lightning bolts to knock back enemies and deal continuous AoE Electro DMG.'
    },
    {
      name: 'Induced Aftershock',
      type: '1st Ascension Passive',
      description: "Hits by Charged Attacks apply Violet Arc's Conductive status to opponents."
    },
    {
      name: 'Static Electricity Field',
      type: '4th Ascension Passive',
      description: 'Opponents hit by Lightning Rose have their DEF decreased by 15% for 10s.'
    },
    {
      name: 'General Pharmaceutics',
      type: 'Utility Passive',
      description: 'When Lisa crafts potions, she has a 20% chance to refund one count of one material used.'
    }
  ],

  lohen: [
    {
      name: 'Grand Falcon Strike',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive greatsword swings.'
    },
    {
      name: 'Zephyr Tempest',
      type: 'Elemental Skill',
      description: 'Charges forward with Anemo winds, carving a gale slash that knocks lightweight enemies airborne.'
    },
    {
      name: 'Sovereign Gale Vortex',
      type: 'Elemental Burst',
      description: 'Summons a mighty wind cyclone that sweeps across the field, vacuuming enemies and infusing with absorbed elements.'
    },
    {
      name: 'Knightly Momentum',
      type: '1st Ascension Passive',
      description: "Sprinting increases Lohen's Anemo DMG Bonus by 10% for 5s."
    },
    {
      name: "Zephyr's Blessing",
      type: '4th Ascension Passive',
      description: 'Using Sovereign Gale Vortex restores 15 Stamina to all party members.'
    },
    {
      name: 'Crest of the West Wind',
      type: 'Utility Passive',
      description: 'Decreases party gliding and sprinting Stamina consumption by 15%.'
    }
  ],

  mika: [
    {
      name: 'Spear of the Favonius Knight',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive strikes using a polearm and a crossbow.'
    },
    {
      name: 'Starfrost Swirl',
      type: 'Elemental Skill',
      description: 'Fires Flowfrost Flares or Rimestar Flares with a crossbow, dealing Cryo DMG and granting the Soulwind state which buffs active character ATK SPD.'
    },
    {
      name: 'Skyfeather Song',
      type: 'Elemental Burst',
      description: 'Recites Favonius knight prayers, instantly restoring HP to all party members based on Max HP and granting the Eagleplume healing state.'
    },
    {
      name: 'Suppressive Barrage',
      type: '1st Ascension Passive',
      description: 'Hitting opponents with Starfrost Swirl grants Detector stacks: each stack increases the active character\'s Physical DMG by 10% (max 3 stacks).'
    },
    {
      name: 'Topographical Mapping',
      type: '4th Ascension Passive',
      description: 'When an active character under Soulwind and Eagleplume scores a CRIT Hit, Mika gains 1 additional Detector stack.'
    },
    {
      name: 'Demarcation',
      type: 'Utility Passive',
      description: 'Displays the location of nearby resources unique to Mondstadt on the mini-map.'
    }
  ],

  noelle: [
    {
      name: 'Favonius Bladework - Maid',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive claymore strikes.'
    },
    {
      name: 'Breastplate',
      type: 'Elemental Skill',
      description: 'Summons protective stone armor dealing Geo DMG and absorbing damage based on Noelle\'s DEF; hits by Noelle can heal all party members.'
    },
    {
      name: 'Sweeping Time',
      type: 'Elemental Burst',
      description: 'Gathers the strength of stone onto her greatsword, granting colossal attack range, converting attacks to Geo, and boosting ATK based on DEF.'
    },
    {
      name: 'Devotion',
      type: '1st Ascension Passive',
      description: "When Noelle is in party but off-field and active character HP falls below 30%, creates a shield absorbing DMG equal to 400% of Noelle's DEF for 20s."
    },
    {
      name: 'Nice and Clean',
      type: '4th Ascension Passive',
      description: 'Every 4 Normal or Charged Attack hits decreases the CD of Breastplate by 1s.'
    },
    {
      name: "Maid's Knighthood",
      type: 'Utility Passive',
      description: 'When a Perfect Cooking is achieved on a DEF-boosting dish, Noelle has a 12% chance to obtain double the product.'
    }
  ],

  prune: [
    {
      name: 'Orchard Rapier',
      type: 'Normal Attack',
      description: 'Performs up to 4 swift fencing strikes.'
    },
    {
      name: 'Blossom Whirlwind',
      type: 'Elemental Skill',
      description: 'Dances forward with floral flourishes, leaving blooming petals that detonate for Dendro and Anemo DMG.'
    },
    {
      name: 'Petal Tempest Cascade',
      type: 'Elemental Burst',
      description: 'Unfurls a meadow of blooming flowers dealing continuous AoE Dendro DMG and boosting party Elemental Mastery.'
    },
    {
      name: 'Floral Vigour',
      type: '1st Ascension Passive',
      description: 'Normal attacks on enemies afflicted by Dendro reactions restore 1 Energy to Prune.'
    },
    {
      name: 'Vernal Bloom',
      type: '4th Ascension Passive',
      description: 'Petal Tempest Cascade increases party Elemental Mastery by 80 for 12s.'
    },
    {
      name: 'Botanical Harvest',
      type: 'Utility Passive',
      description: 'Displays the location of nearby resources unique to Mondstadt on the mini-map.'
    }
  ],

  razor: [
    {
      name: 'Steel Fang',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive claymore strikes.'
    },
    {
      name: 'Claw and Thunder',
      type: 'Elemental Skill',
      description: 'Swings the Thunder Wolf Claw to deal Electro DMG and gain Electro Sigils; holding summons a lightning storm dealing AoE Electro DMG.'
    },
    {
      name: 'Lightning Fang',
      type: 'Elemental Burst',
      description: 'Summons the Wolf Within to fight alongside Razor, granting massive Normal ATK SPD, Electro DMG coordination, and Electro RES.'
    },
    {
      name: 'Awakening',
      type: '1st Ascension Passive',
      description: "Decreases Claw and Thunder's CD by 18%; using Lightning Fang resets the CD of Claw and Thunder."
    },
    {
      name: 'Hunger',
      type: '4th Ascension Passive',
      description: "When Razor's Energy is below 50%, increases his Energy Recharge by 30%."
    },
    {
      name: 'Wolvensprint',
      type: 'Utility Passive',
      description: 'Decreases sprinting Stamina consumption for party members by 20%.'
    }
  ],

  rosaria: [
    {
      name: 'Spear of the Church',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive spear strikes.'
    },
    {
      name: 'Ravaging Confession',
      type: 'Elemental Skill',
      description: 'Shifts position behind an opponent, piercing and slashing them to deal Cryo DMG.'
    },
    {
      name: 'Rites of Termination',
      type: 'Elemental Burst',
      description: 'Strikes the ground to plant an Ice Lance, dealing continuous pulses of AoE Cryo DMG over 8s.'
    },
    {
      name: 'Regina Probationum',
      type: '1st Ascension Passive',
      description: "When Rosaria strikes an opponent from behind using Ravaging Confession, her CRIT Rate increases by 12% for 5s."
    },
    {
      name: 'Shadow Samaritana',
      type: '4th Ascension Passive',
      description: "Casting Rites of Termination increases CRIT Rate of all nearby party members by 15% of Rosaria's CRIT Rate (max 15%) for 10s."
    },
    {
      name: 'Night Walk',
      type: 'Utility Passive',
      description: 'At night (18:00 to 06:00), increases the Movement SPD of your party members by 10%.'
    }
  ],

  sucrose: [
    {
      name: 'Wind Spirit Creation',
      type: 'Normal Attack',
      description: 'Performs up to 4 attacks using Wind Spirits that deal Anemo DMG.'
    },
    {
      name: 'Astable Anemohypostasis Creation - 6308',
      type: 'Elemental Skill',
      description: 'Creates a small Wind Spirit that pulls opponents and objects in before launching them, dealing AoE Anemo DMG.'
    },
    {
      name: 'Forbidden Creation - Isomer 75 / Type II',
      type: 'Elemental Burst',
      description: 'Hurls a flask creating a Large Wind Spirit that pulls enemies and bursts 3 times, dealing AoE Anemo DMG and absorbing elements.'
    },
    {
      name: 'Catalyst Conversion',
      type: '1st Ascension Passive',
      description: 'When Sucrose triggers a Swirl reaction, all characters in the party with matching elemental type gain 50 Elemental Mastery for 8s.'
    },
    {
      name: 'Mollis Favonius',
      type: '4th Ascension Passive',
      description: 'When Astable Creation or Forbidden Creation hits an opponent, increases all party members\' Elemental Mastery by 20% of Sucrose\'s EM for 8s.'
    },
    {
      name: 'Astable Invention',
      type: 'Utility Passive',
      description: 'When Sucrose crafts Character and Weapon Enhancement Materials, she has a 10% chance to obtain double the product.'
    }
  ],

  varka: [
    {
      name: 'Titan Greatsword',
      type: 'Normal Attack',
      description: 'Performs up to 4 devastating sweeps with a legendary greatsword.'
    },
    {
      name: 'Boreas Howl',
      type: 'Elemental Skill',
      description: 'Channels the savage winds of Wolvendom, delivering an empowering spin slash that deflects projectile attacks and deals AoE Anemo DMG.'
    },
    {
      name: 'Wrath of the Grand Master',
      type: 'Elemental Burst',
      description: 'Leaps high and smashes the earth with the fury of the northern gale, creating a persistent vortex that shreds elemental resistance and buffs party ATK.'
    },
    {
      name: "Knight Commander's Vow",
      type: '1st Ascension Passive',
      description: "When HP is above 50%, Varka's Normal and Charged Attacks deal 25% increased Physical and Anemo DMG."
    },
    {
      name: 'Northern Frontier Bastion',
      type: '4th Ascension Passive',
      description: 'Boreas Howl grants party members 30% resistance to interruption and 20% DEF for 12s.'
    },
    {
      name: "Vanguard's Expedition",
      type: 'Utility Passive',
      description: 'Gains 25% more rewards when dispatched on a Mondstadt Expedition for 20 hours.'
    }
  ]
};

