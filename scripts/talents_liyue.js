export const LIYUE_TALENTS = {
  zhongli: [
    {
      name: 'Rain of Stone',
      type: 'Normal Attack',
      description: 'Performs up to 6 rapid spear strikes, kicking the spear forward in a spinning flurry.'
    },
    {
      name: 'Dominus Lapidis',
      type: 'Elemental Skill',
      description: 'Commands the earth to create a Stone Stele that resonates with other Geo constructs. Holding summons the impenetrable Jade Shield and causes Geo AoE DMG.'
    },
    {
      name: 'Planet Befall',
      type: 'Elemental Burst',
      description: 'Brings a falling meteor down upon the earth, dealing massive AoE Geo DMG and applying Petrification to opponents.'
    },
    {
      name: 'Resonant Waves',
      type: '1st Ascension Passive',
      description: 'When the Jade Shield takes DMG, it Fortifies: Fortified characters gain 5% Shield Strength, stacking up to 5 times (25% Shield Strength).'
    },
    {
      name: 'Dominance of Earth',
      type: '4th Ascension Passive',
      description: "Zhongli deals bonus DMG based on his Max HP: Normal/Charged/Plunge +1.39% Max HP; Stone Stele/Resonance +1.9% Max HP; Planet Befall +33% Max HP."
    },
    {
      name: 'Arcanum of Archaic',
      type: 'Utility Passive',
      description: 'Refunds 15% of the ores used when crafting Polearm-type weapons.'
    }
  ],

  'hu-tao': [
    {
      name: 'Secret Spear of Wangsheng',
      type: 'Normal Attack',
      description: 'Performs up to 6 rapid spear strikes.'
    },
    {
      name: 'Guide to Afterlife',
      type: 'Elemental Skill',
      description: "Consumes 30% current HP to enter Paramita Papilio state: converts ATK based on Max HP, infuses attacks with Pyro, and applies Blood Blossom."
    },
    {
      name: 'Spirit Soother',
      type: 'Elemental Burst',
      description: 'Commands a blazing spirit to attack, dealing large AoE Pyro DMG and regenerating Hu Tao\'s HP (increased if HP is ≤50%).'
    },
    {
      name: 'Flutter By',
      type: '1st Ascension Passive',
      description: 'When a Paramita Papilio state activated by Guide to Afterlife ends, all allies in the party (excluding Hu Tao) have their CRIT Rate increased by 12% for 8s.'
    },
    {
      name: 'Sanguine Rouge',
      type: '4th Ascension Passive',
      description: "When Hu Tao's HP is equal to or less than 50%, her Pyro DMG Bonus is increased by 33%."
    },
    {
      name: 'The More the Merrier',
      type: 'Utility Passive',
      description: 'When Hu Tao cooks a dish perfectly, she has an 18% chance to receive an additional "Suspicious" dish of the same type.'
    }
  ],

  yelan: [
    {
      name: 'Stealthy Bowshot',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive bow shots; entering Breakthrough state allows a rapid Breakthrough Barb charged shot dealing AoE Hydro DMG based on Max HP.'
    },
    {
      name: 'Lingering Lifeline',
      type: 'Elemental Skill',
      description: 'Fires off a Lifeline that trails behind her as she dashes rapidly, entangling and marking opponents to explode for Hydro DMG based on Max HP.'
    },
    {
      name: 'Depth-Clarion Dice',
      type: 'Elemental Burst',
      description: 'Deals AoE Hydro DMG and initiates an Exquisite Throw dice that coordinates with active character Normal Attacks and Lifeline explosions.'
    },
    {
      name: 'Turn Control',
      type: '1st Ascension Passive',
      description: "When the party has 1/2/3/4 Elemental Types, Yelan's Max HP is increased by 6%/12%/18%/30%."
    },
    {
      name: 'Adapt With Ease',
      type: '4th Ascension Passive',
      description: 'So long as an Exquisite Throw is in play, your own active character deals 1% more DMG. This increases by a further 3.5% DMG every second (max 50%).'
    },
    {
      name: 'Necessary Calculation',
      type: 'Utility Passive',
      description: 'Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.'
    }
  ],

  xiao: [
    {
      name: 'Whirlwind Thrust',
      type: 'Normal Attack',
      description: 'Performs up to 6 rapid spear strikes.'
    },
    {
      name: 'Lemniscatic Wind Cycling',
      type: 'Elemental Skill',
      description: 'Xiao lunges forward, dealing Anemo DMG to opponents in his path; can be unleashed in mid-air with 2 charges.'
    },
    {
      name: 'Bane of All Evil',
      type: 'Elemental Burst',
      description: 'Dons the Yaksha Mask, drastically increasing jumping ability, attack AoE, and attack DMG, converting attacks to Anemo while draining HP.'
    },
    {
      name: 'Conqueror of Evil: Tamer of Demons',
      type: '1st Ascension Passive',
      description: "While under the effects of Bane of All Evil, all DMG dealt by Xiao increases by 5%. DMG increases by a further 5% for every 3s the ability persists (max 25%)."
    },
    {
      name: 'Dissolution Eon: Heaven Fall',
      type: '4th Ascension Passive',
      description: 'Using Lemniscatic Wind Cycling increases the DMG of subsequent uses of Lemniscatic Wind Cycling by 15% for 7s (max 3 stacks).'
    },
    {
      name: 'Transcension: Gravity Defier',
      type: 'Utility Passive',
      description: 'Decreases climbing Stamina consumption for party members by 20%.'
    }
  ],

  ganyu: [
    {
      name: 'Liutian Archery',
      type: 'Normal Attack',
      description: 'Performs up to 6 consecutive bow shots; Charge Level 2 fires Frostflake Arrows that bloom on hit to deal colossal AoE Cryo DMG.'
    },
    {
      name: 'Trail of the Qilin',
      type: 'Elemental Skill',
      description: 'Leaves an Ice Lotus behind as Ganyu dashes backward, taunting enemies and blooming with AoE Cryo DMG when cast and destroyed.'
    },
    {
      name: 'Celestial Shower',
      type: 'Elemental Burst',
      description: 'Coalesces a sacred Cryo Sacred Cryo Pearl to continuously rain down ice shards over a massive zone, dealing sustained AoE Cryo DMG.'
    },
    {
      name: 'Undivided Heart',
      type: '1st Ascension Passive',
      description: 'After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their resulting bloom effects is increased by 20% for 5s.'
    },
    {
      name: 'Harmony between Heaven and Earth',
      type: '4th Ascension Passive',
      description: 'Celestial Shower grants a 20% Cryo DMG Bonus to active party members within its AoE.'
    },
    {
      name: 'Preserved for the Hunt',
      type: 'Utility Passive',
      description: 'Refunds 15% of the ores used when crafting Bow-type weapons.'
    }
  ],

  xianyun: [
    {
      name: 'Word of Wind and Flower',
      type: 'Normal Attack',
      description: 'Performs up to 4 swirling wind strikes that deal Anemo DMG.'
    },
    {
      name: 'White Clouds at Dawn',
      type: 'Elemental Skill',
      description: 'Enters Cloud Transfiguration state, executing up to 3 Skyladder leaps into the air and culminating in an explosive Driftcloud Wave plunge.'
    },
    {
      name: 'Stars Gather at Dusk',
      type: 'Elemental Burst',
      description: 'Summons Starwicker bamboo bird automaton, healing the entire party and granting Adeptal Assistance which boosts jump heights and empowers Plunging Attacks.'
    },
    {
      name: 'Galefeather Pursuit',
      type: '1st Ascension Passive',
      description: 'Each opponent hit by Driftcloud Wave grants party members 4%/6%/8%/10% increased CRIT Rate on Plunging Attacks for 20s.'
    },
    {
      name: 'Adept Breath',
      type: '4th Ascension Passive',
      description: "When Starwicker has Adeptal Assistance stacks, active character's Plunging Attack shockwave DMG is increased by 200% of Xianyun's ATK (max 9,000 bonus DMG)."
    },
    {
      name: 'Aldermaster Form',
      type: 'Utility Passive',
      description: 'Decreases gliding Stamina consumption for party members by 20%.'
    }
  ],

  shenhe: [
    {
      name: 'Dawnstar Piercer',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive spear strikes.'
    },
    {
      name: 'Spring Spirit Summoning',
      type: 'Elemental Skill',
      description: 'Commands a Talisman Spirit to grant the Icy Quill buff to all nearby party members, enhancing Cryo DMG dealt based on Shenhe\'s ATK.'
    },
    {
      name: "Divine Maiden's Deliverance",
      type: 'Elemental Burst',
      description: 'Unleashes the Talisman Spirit to roam freely, decreasing Cryo and Physical RES of opponents while dealing continuous AoE Cryo DMG.'
    },
    {
      name: 'Deific Embrace',
      type: '1st Ascension Passive',
      description: "An active character within the field created by Divine Maiden's Deliverance gains 15% Cryo DMG Bonus."
    },
    {
      name: 'Spirit Communion Seal',
      type: '4th Ascension Passive',
      description: 'Tapping Spring Spirit Summoning grants 15% Elemental Skill and Burst DMG; holding grants 15% Normal, Charged, and Plunging Attack DMG for 15s.'
    },
    {
      name: 'Precise Composure',
      type: 'Utility Passive',
      description: 'Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.'
    }
  ],

  xingqiu: [
    {
      name: 'Guhua Style',
      type: 'Normal Attack',
      description: 'Performs up to 5 rapid sword strikes.'
    },
    {
      name: 'Fatal Rainscreen',
      type: 'Elemental Skill',
      description: 'Performs twin sword strikes dealing Hydro DMG and creating orbiting Rain Swords that reduce damage taken, provide interruption resistance, and apply Wet.'
    },
    {
      name: 'Raincutter',
      type: 'Elemental Burst',
      description: 'Initiates Rainbow Twinblade stance, summoning max Rain Swords and coordinating continuous cascading sword rain attacks with active character Normal Attacks.'
    },
    {
      name: 'Hydropathic',
      type: '1st Ascension Passive',
      description: "When a Rain Sword is shattered or expires, the active character's HP is regenerated by 6% of Xingqiu's Max HP."
    },
    {
      name: 'Bladesidhe',
      type: '4th Ascension Passive',
      description: 'Xingqiu gains a 20% Hydro DMG Bonus.'
    },
    {
      name: 'Flash of Genius',
      type: 'Utility Passive',
      description: 'When Xingqiu crafts Character Talent Materials, he has a 25% chance to refund a portion of the crafting materials used.'
    }
  ],

  xiangling: [
    {
      name: 'Dough-Fu',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive spear strikes.'
    },
    {
      name: 'Guoba Attack',
      type: 'Elemental Skill',
      description: 'Summons Guoba the panda, who continuously breathes fiery breath dealing AoE Pyro DMG.'
    },
    {
      name: 'Pyronado',
      type: 'Elemental Burst',
      description: 'Summons a Pyronado that twirls rapidly around the active character, dealing continuous AoE Pyro DMG with no ICD.'
    },
    {
      name: 'Crossfire',
      type: '1st Ascension Passive',
      description: 'Increases the flame range of Guoba by 20%.'
    },
    {
      name: 'Beware the Angry Fire!',
      type: '4th Ascension Passive',
      description: 'When Guoba Attack ends, Guoba leaves a chili pepper on the spot; picking it up increases ATK by 10% for 10s.'
    },
    {
      name: 'Chef de Cuisine',
      type: 'Utility Passive',
      description: 'When a Perfect Cooking is achieved on an ATK-boosting dish, Xiangling has a 12% chance to receive double the product.'
    }
  ],

  baizhu: [
    {
      name: 'The Classics of Acupuncture',
      type: 'Normal Attack',
      description: 'Performs up to 4 attacks that deal Dendro DMG to opponents in front of him.'
    },
    {
      name: 'Universal Diagnosis',
      type: 'Elemental Skill',
      description: 'Controls a Gossamer Sprite that darts around nearby enemies dealing Dendro DMG and returns to heal all party members based on Max HP.'
    },
    {
      name: 'Holistic Revivification',
      type: 'Elemental Burst',
      description: 'Enters Pulsing Clarity state, generating a Seamless Shield every 2.5s that heals the active character and fires Spiritveins dealing Dendro DMG.'
    },
    {
      name: 'Five Fortunes Forever',
      type: '1st Ascension Passive',
      description: "Baizhu gains different buffs based on active character HP: <50% HP grants Baizhu 20% Healing Bonus; ≥50% HP grants Baizhu 25% Dendro DMG Bonus."
    },
    {
      name: 'All Things Are of the Earth',
      type: '4th Ascension Passive',
      description: 'Characters healed by Seamless Shield gain up to 100% Bloom/Burgeon/Hyperbloom DMG and 40% Aggravate/Spread DMG based on Baizhu\'s Max HP (up to 50,000 HP).'
    },
    {
      name: 'Herbal Nourishment',
      type: 'Utility Passive',
      description: 'When Baizhu is in the party, interacting with certain harvestable items heals active party members for 2.5% of Baizhu\'s Max HP.'
    }
  ],

  beidou: [
    {
      name: 'Oceanborne',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive claymore strikes.'
    },
    {
      name: 'Tidecaller',
      type: 'Elemental Skill',
      description: 'Accumulates power into a claymore; holding raises a shield absorbing damage and counters with a thunderous slash scaling with damage absorbed.'
    },
    {
      name: 'Stormbreaker',
      type: 'Elemental Burst',
      description: 'Creates a Thunderbeast\'s Targe around the character, granting damage reduction and causing lightning to discharge and arc between opponents upon Normal/Charged Attacks.'
    },
    {
      name: 'Retribution',
      type: '1st Ascension Passive',
      description: 'Counterattacking with Tidecaller at the precise moment of getting hit grants the maximum DMG Bonus.'
    },
    {
      name: 'Lightning Storm',
      type: '4th Ascension Passive',
      description: 'Unleashing Tidecaller with maximum DMG Bonus increases Normal and Charged Attack DMG and ATK SPD by 15% for 10s.'
    },
    {
      name: 'Conqueror of Tides',
      type: 'Utility Passive',
      description: 'Decreases swimming Stamina consumption for party members by 20%.'
    }
  ],

  chongyun: [
    {
      name: 'Demonbane',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive claymore strikes.'
    },
    {
      name: "Spirit Blade: Chonghua's Layered Frost",
      type: 'Elemental Skill',
      description: 'Strikes the ground to cause a frost explosion, creating a field that infuses Sword, Claymore, and Polearm attacks with Cryo.'
    },
    {
      name: 'Spirit Blade: Cloud-Parting Star',
      type: 'Elemental Burst',
      description: 'Summons 3 giant spirit blades that crash into the earth in succession, dealing massive AoE Cryo DMG and launching opponents.'
    },
    {
      name: 'Steady Breathing',
      type: '1st Ascension Passive',
      description: 'Sword, Claymore, and Polearm-wielding characters within the frost field created by Chonghua\'s Layered Frost gain 8% Normal ATK SPD.'
    },
    {
      name: 'Rimechaser Blade',
      type: '4th Ascension Passive',
      description: 'When the Chonghua\'s Layered Frost field expires, a spirit blade summons to deal 100% Skill DMG as Cryo and reduce enemy Cryo RES by 10% for 8s.'
    },
    {
      name: 'Gallant Journey',
      type: 'Utility Passive',
      description: 'Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.'
    }
  ],

  gaming: [
    {
      name: 'Stellar Rend',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive strikes using Northern lion-dance kung fu.'
    },
    {
      name: 'Bestial Ascent',
      type: 'Elemental Skill',
      description: 'Pounces forward using Wushou arts, leaping high into the air on collision to unleash a devastating Chani Ascent Plunging Attack dealing Pyro DMG.'
    },
    {
      name: "Suanni's Gilded Dance",
      type: 'Elemental Burst',
      description: 'Enters Wushou Stance, applying Pyro to himself and summoning the companion Man Chai; Man Chai smashes into enemies, dealing AoE Pyro DMG and resetting Bestial Ascent CD.'
    },
    {
      name: 'Dance of Amity',
      type: '1st Ascension Passive',
      description: 'After landing a Chani Ascent Plunging Attack, Gaming recovers 1.5% of his Max HP every 0.2s for 0.8s.'
    },
    {
      name: 'Air of Prosperity',
      type: '4th Ascension Passive',
      description: 'When Gaming has less than 50% HP, he gains 20% incoming healing bonus; when HP is ≥50%, Chani Ascent Plunge deals 20% more DMG.'
    },
    {
      name: 'Striding Beast',
      type: 'Utility Passive',
      description: 'Increases party members\' Movement SPD by 10% during the day (06:00 to 18:00).'
    }
  ],

  keqing: [
    {
      name: 'Yunlai Swordsmanship',
      type: 'Normal Attack',
      description: 'Performs up to 5 rapid sword strikes; rapid charged attacks deliver double high-speed slashes.'
    },
    {
      name: 'Stellar Restoration',
      type: 'Elemental Skill',
      description: 'Hurls a Lightning Stiletto that pierces opponents dealing Electro DMG; recasting blinks Keqing to the stiletto with a slashing strike.'
    },
    {
      name: 'Starward Sword',
      type: 'Elemental Burst',
      description: 'Unleashes the power of lightning, moving in the speed of light to slash all opponents within a huge AoE and delivering a devastating final blow.'
    },
    {
      name: 'Thundering Penance',
      type: '1st Ascension Passive',
      description: 'After recasting Stellar Restoration while a Lightning Stiletto is present, Keqing\'s weapon gains Electro Infusion for 5s.'
    },
    {
      name: 'Aristocratic Dignity',
      type: '4th Ascension Passive',
      description: "When casting Starward Sword, Keqing's CRIT Rate and Energy Recharge are increased by 15% for 8s."
    },
    {
      name: "Land's Overseer",
      type: 'Utility Passive',
      description: 'Gains 25% more rewards when dispatched on a Liyue Expedition for 20 hours.'
    }
  ],

  'lan-yan': [
    {
      name: "Swallow's Plumage",
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive swift sword slashes.'
    },
    {
      name: 'Feathery Gale',
      type: 'Elemental Skill',
      description: 'Summons swirling feather winds that gather nearby lightweight enemies and deal AoE Anemo DMG.'
    },
    {
      name: 'Piercing Zephyr Gale',
      type: 'Elemental Burst',
      description: 'Unleashes a tempest of razor-sharp wind blades dealing continuous Anemo DMG and shredding enemy elemental resistances.'
    },
    {
      name: 'Tailwind Guidance',
      type: '1st Ascension Passive',
      description: 'Triggering Swirl increases party Movement SPD by 15% and ATK by 10% for 10s.'
    },
    {
      name: 'Plumed Harmony',
      type: '4th Ascension Passive',
      description: "Increases Lan Yan's Anemo DMG Bonus by 15% when stamina is above 50%."
    },
    {
      name: "Courier's Stride",
      type: 'Utility Passive',
      description: 'Decreases sprinting Stamina consumption for party members by 20%.'
    }
  ],

  ningguang: [
    {
      name: 'Sparkling Scatter',
      type: 'Normal Attack',
      description: 'Shoots gem projectiles dealing Geo DMG and accumulating Star Jades; Charged Attack fires a giant gem and all collected Star Jades.'
    },
    {
      name: 'Jade Screen',
      type: 'Elemental Skill',
      description: 'Constructs a grand Jade Screen made of gold and jade that blocks enemy projectiles and deals AoE Geo DMG.'
    },
    {
      name: 'Starshatter',
      type: 'Elemental Burst',
      description: 'Gathers a great number of gems and fires them all at once to home in on nearby enemies; if Jade Screen is nearby, fires additional gem projectiles.'
    },
    {
      name: 'Backup Plan',
      type: '1st Ascension Passive',
      description: "When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina."
    },
    {
      name: 'Strategic Reserve',
      type: '4th Ascension Passive',
      description: 'A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.'
    },
    {
      name: 'Trove of Marvelous Treasures',
      type: 'Utility Passive',
      description: 'Displays the location of nearby ore veins (Iron, White Iron, Crystal, Starsilver, etc.) on the mini-map.'
    }
  ],

  qiqi: [
    {
      name: 'Ancient Sword Art',
      type: 'Normal Attack',
      description: 'Performs up to 5 rapid sword strikes.'
    },
    {
      name: 'Adeptus Art: Herald of Frost',
      type: 'Elemental Skill',
      description: 'Summons the Herald of Frost, dealing Cryo DMG and swirling around the active character, periodically healing and attacking.'
    },
    {
      name: 'Adeptus Art: Preserver of Fortune',
      type: 'Elemental Burst',
      description: 'Releases the adeptus energy imprisoned within her body, marking nearby enemies with a Fortune-Preserving Talisman that heals allies when hitting marked foes.'
    },
    {
      name: 'Life-Prolonging Methods',
      type: '1st Ascension Passive',
      description: 'When a character under the effect of Herald of Frost triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.'
    },
    {
      name: 'A Glimpse into Arcanum',
      type: '4th Ascension Passive',
      description: "When Qiqi hits opponents with Normal and Charged Attacks, she has a 50% chance to apply a Fortune-Preserving Talisman for 6s (30s CD)."
    },
    {
      name: 'Former Life Memories',
      type: 'Utility Passive',
      description: 'Displays the location of nearby resources unique to Liyue on the mini-map.'
    }
  ],

  xinyan: [
    {
      name: 'Dance on Fire',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive claymore strikes.'
    },
    {
      name: 'Sweeping Fervor',
      type: 'Elemental Skill',
      description: 'Brandishes her rock \'n\' roll instrument, dealing Pyro DMG and generating a shield based on the number of enemies hit (Level 3 Rave pulses Pyro AoE).'
    },
    {
      name: 'Riff Revolution',
      type: 'Elemental Burst',
      description: 'Strums furiously, causing sound waves that deal physical DMG and erupting the ground with searing Pyro explosions.'
    },
    {
      name: '"The Show Goes On, Even Without An Audience..."',
      type: '1st Ascension Passive',
      description: "Decreases the number of opponents Sweeping Fervor must hit to trigger each shield level."
    },
    {
      name: '"...Now That\'s Rock \'N\' Roll!"',
      type: '4th Ascension Passive',
      description: 'Characters shielded by Sweeping Fervor deal 15% increased Physical DMG.'
    },
    {
      name: 'A Rad Recipe',
      type: 'Utility Passive',
      description: 'When a Perfect Cooking is achieved on a DEF-boosting dish, Xinyan has a 12% chance to receive double the product.'
    }
  ],

  yanfei: [
    {
      name: 'Seal of Approval',
      type: 'Normal Attack',
      description: 'Shoots fireballs dealing Pyro DMG and granting Scarlet Seals; consuming seals empowers Charged Attacks to drop a giant flaming seal.'
    },
    {
      name: 'Signed Edict',
      type: 'Elemental Skill',
      description: 'Summons blistering flames that deal AoE Pyro DMG; hitting an opponent grants Yanfei the maximum number of Scarlet Seals.'
    },
    {
      name: 'Done Deal',
      type: 'Elemental Burst',
      description: 'Triggers a spray of intense flames dealing AoE Pyro DMG, granting maximum Scarlet Seals and applying Brilliance to periodically grant seals.'
    },
    {
      name: 'Proviso',
      type: '1st Ascension Passive',
      description: 'When Yanfei consumes Scarlet Seals by using a Charged Attack, each Scarlet Seal increases her Pyro DMG Bonus by 5% for 6s.'
    },
    {
      name: 'Blazing Eye',
      type: '4th Ascension Passive',
      description: "When Yanfei's Charged Attack deals a CRIT Hit, she deals an additional instance of AoE Pyro DMG equal to 80% of her ATK."
    },
    {
      name: 'Encyclopedic Expertise',
      type: 'Utility Passive',
      description: 'Displays the location of nearby resources unique to Liyue on the mini-map.'
    }
  ],

  yaoyao: [
    {
      name: "Toss 'N' Turn Spear",
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive spear strikes.'
    },
    {
      name: 'Raphanus Sky Cluster',
      type: 'Elemental Skill',
      description: 'Calls upon Yuegui: Throwing Mode, who continuously tosses White Jade Radishes that explode to heal allies and deal Dendro DMG to enemies.'
    },
    {
      name: 'Moonjade Descent',
      type: 'Elemental Burst',
      description: 'Unleashes the full adeptal might of Yuegui, entering the Adeptal Legacy state which summons up to 3 Yuegui jumpers while running and jumping.'
    },
    {
      name: 'Starscatter',
      type: '1st Ascension Passive',
      description: 'While in Adeptal Legacy state, Yaoyao continuously throws White Jade Radishes when sprinting, jumping, or running.'
    },
    {
      name: "In Others' Shoes",
      type: '4th Ascension Passive',
      description: "When White Jade Radishes explode, active characters in AoE recover HP equal to 0.8% of Yaoyao's Max HP every 1s for 5s."
    },
    {
      name: 'Tiptoe Stealth',
      type: 'Utility Passive',
      description: 'When Yaoyao is in the party, your characters will not startle Crystalflies and certain other small wild animals.'
    }
  ],

  'yun-jin': [
    {
      name: 'Cloud-Grazing Strike',
      type: 'Normal Attack',
      description: 'Performs up to 5 consecutive spear strikes with theatrical flair.'
    },
    {
      name: 'Opening Flourish',
      type: 'Elemental Skill',
      description: 'Takes the Cloud-Grazing stance to form a shield; holding charges power up to Level 2 to deal Geo DMG upon release.'
    },
    {
      name: "Cliffbreaker's Banner",
      type: 'Elemental Burst',
      description: 'Deals AoE Geo DMG and grants all nearby party members the Flying Cloud Flag Formation: enhances Normal Attack DMG based on Yun Jin\'s DEF.'
    },
    {
      name: 'True to Oneself',
      type: '1st Ascension Passive',
      description: 'Using Opening Flourish at the precise moment when Yun Jin is attacked will unleash its Level 2 Charged Form immediately.'
    },
    {
      name: 'Breaking Conventional Norms',
      type: '4th Ascension Passive',
      description: "Flying Cloud Flag Formation Normal Attack DMG bonus is further increased by 2.5%/5%/7.5%/11.5% of Yun Jin's DEF based on 1/2/3/4 different Elemental Types in party."
    },
    {
      name: 'Light Nourishment',
      type: 'Utility Passive',
      description: 'When a Perfect Cooking is achieved on an exploration-type dish, Yun Jin has a 12% chance to obtain double the product.'
    }
  ],

  zibai: [
    {
      name: 'Jade Carving Thrust',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive heavy claymore swings.'
    },
    {
      name: 'Resonant Tremor',
      type: 'Elemental Skill',
      description: 'Slams the earth to create resonating Geo pillars that pulse with tectonic energy, absorbing damage and dealing AoE Geo DMG.'
    },
    {
      name: 'Celestial Terra Surge',
      type: 'Elemental Burst',
      description: 'Calls upon ancestral jade power, shattering the surrounding terrain to deal massive Geo DMG and boosting party DEF.'
    },
    {
      name: 'Earthen Resilience',
      type: '1st Ascension Passive',
      description: 'Characters shielded by Geo constructs gain 15% DEF and 10% Geo DMG Bonus.'
    },
    {
      name: 'Mountain Weaver',
      type: '4th Ascension Passive',
      description: "Triggering Crystallize increases Zibai's ATK by 20% of his DEF for 12s."
    },
    {
      name: "Stonemason's Eye",
      type: 'Utility Passive',
      description: 'Refunds 15% of the ores used when crafting Claymore-type weapons.'
    }
  ]
};

