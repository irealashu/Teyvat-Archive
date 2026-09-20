export const ALL_TALENTS = {
  // FONTAINE (13)
  furina: [
    {
      name: "Soloist's Solicitation",
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive strikes and switches between Ousia and Pneuma alignments via Charged Attacks.'
    },
    {
      name: 'Salon Solitaire',
      type: 'Elemental Skill',
      description: 'Invites Salon Members (Gentilhomme Usher, Surintendante Chevalmarin, Mademoiselle Crabaletta) to deal continuous Hydro DMG while draining party HP, or Singer of Many Waters to heal the active character.'
    },
    {
      name: 'Let the People Rejoice',
      type: 'Elemental Burst',
      description: 'Creates a stage of foam, granting party members Universal DMG Bonus and Incoming Healing Bonus based on Fanfare points accumulated via HP fluctuations.'
    },
    {
      name: 'Endless Waltz',
      type: '1st Ascension Passive',
      description: 'When the active character in your party receives healing, if the source of the healing is not Furina herself and the healing overflows, Furina will heal nearby party members by 2% of their Max HP once every 2s for 4s.'
    },
    {
      name: 'Unheard Confession',
      type: '4th Ascension Passive',
      description: "Every 1,000 points of Furina's Max HP buffs Salon Solitaire: Salon Members' DMG dealt increases by 0.7% (max 28%), and Singer of Many Waters' healing interval decreases by 0.4% (max 16%)."
    },
    {
      name: 'The Sea Is My Stage',
      type: 'Utility Passive',
      description: 'Xenochromatic Fontemer Aberrant ability CD is decreased by 30% underwater.'
    }
  ],

  neuvillette: [
    {
      name: 'As Water Seeks Equilibrium',
      type: 'Normal Attack',
      description: 'Performs up to 3 water strikes, or charges Equitable Judgment: a torrent of high-pressure water beams dealing continuous AoE Hydro DMG based on Max HP.'
    },
    {
      name: 'O Tears, I Shall Repay',
      type: 'Elemental Skill',
      description: 'Summons a Raging Waterfall dealing AoE Hydro DMG based on Max HP and generating 3 Sourcewater Droplets to instantly charge Equitable Judgment.'
    },
    {
      name: 'O Tides, I Have Returned',
      type: 'Elemental Burst',
      description: 'Discharges crushing waves dealing AoE Hydro DMG based on Max HP, followed by 2 smaller waterfalls that spawn 6 Sourcewater Droplets.'
    },
    {
      name: "Heir to the Ancient Sea's Authority",
      type: '1st Ascension Passive',
      description: 'When party members trigger Vaporize, Frozen, Electro-Charged, Bloom, Hydro Swirl, or Hydro Crystallize, Neuvillette gains stacks increasing Equitable Judgment DMG by up to 160%.'
    },
    {
      name: 'Discipline of the Supreme Arbitration',
      type: '4th Ascension Passive',
      description: "For each 1% of Neuvillette's current HP above 30% Max HP, he gains 0.6% Hydro DMG Bonus, up to a maximum of 30%."
    },
    {
      name: 'Gather Like the Tide',
      type: 'Utility Passive',
      description: 'Increases underwater sprint SPD for all party members by 15%.'
    }
  ],

  navia: [
    {
      name: 'Blunt Refusal',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive strikes using a claymore and folded Gunbrella.'
    },
    {
      name: 'Ceremonial Crystalshot',
      type: 'Elemental Skill',
      description: 'Opens her Gunbrella to fire Rosula Shrapnel dealing Geo DMG based on Crystal Shrapnel stacks gathered from Crystallize shards.'
    },
    {
      name: "As the Sunlit Sky's Singing Salute",
      type: 'Elemental Burst',
      description: 'Calls down a magnificent Rosula Dorata cannon salute dealing AoE Geo DMG over time and granting Crystal Shrapnel stacks every 2.4s.'
    },
    {
      name: 'Undisclosed Distribution Channels',
      type: '1st Ascension Passive',
      description: "For 4s after using Ceremonial Crystalshot, Navia's Normal, Charged, and Plunging Attacks are converted to Geo DMG and deal 40% increased DMG."
    },
    {
      name: 'Mutual Assistance Network',
      type: '4th Ascension Passive',
      description: 'For each Pyro, Electro, Cryo, or Hydro party member, Navia gains 20% increased ATK, stacking up to 2 times for 40% ATK.'
    },
    {
      name: 'Painstaking Transaction',
      type: 'Utility Passive',
      description: 'Gains 25% more rewards when dispatched on an Expedition in Fontaine for 20 hours.'
    }
  ],

  clorinde: [
    {
      name: 'Oath of Hunting Shadows',
      type: 'Normal Attack',
      description: 'Performs rapid fencing strikes; in Night Patrol state, Normal Attacks become piercing Swift Hunt pistolet shots that grant Bond of Life.'
    },
    {
      name: "Hunter's Vigil",
      type: 'Elemental Skill',
      description: 'Enters the Night Patrol state, alternating between piercing pistolet shots (Swift Hunt) and lunging blade thrusts (Impale the Night) to clear Bond of Life and self-heal.'
    },
    {
      name: 'Last Lightfall',
      type: 'Elemental Burst',
      description: 'Unleashes 5 rapid lunging strikes dealing AoE Electro DMG based on ATK and granting a 120% Bond of Life to fuel her next rotation.'
    },
    {
      name: "Dark-Shattering Flame",
      type: '1st Ascension Passive',
      description: "When nearby party members trigger Electro-related reactions, Clorinde's Normal Attack and Last Lightfall DMG increase by 20% of ATK, up to 1,800 per stack (max 3 stacks)."
    },
    {
      name: "Law's Sanctity",
      type: '4th Ascension Passive',
      description: 'When Bond of Life increases or decreases, Clorinde gains 10% CRIT Rate for 15s, stacking up to 2 times for 20% CRIT Rate.'
    },
    {
      name: 'Night-Watch Fees',
      type: 'Utility Passive',
      description: 'Displays the location of nearby resources unique to Fontaine on the mini-map.'
    }
  ],

  wriothesley: [
    {
      name: 'Forceful Fists of Frost',
      type: 'Normal Attack',
      description: 'Rhythmically pummels enemies with rapid Cryo punches using his mechanical boxing gauntlets.'
    },
    {
      name: 'Icefang Rush',
      type: 'Elemental Skill',
      description: 'Enters Chilling Penalty state, enhancing Normal Attack DMG when HP is above 50% while consuming HP with each hit.'
    },
    {
      name: 'Darkgold Wolfbite',
      type: 'Elemental Burst',
      description: 'Strikes forward with an icicle-charged uppercut that erupts into multiple AoE Cryo impacts with Ousia-aligned Surge.'
    },
    {
      name: 'There Shall Be a Plea for Justice',
      type: '1st Ascension Passive',
      description: 'When HP drops below 60%, gains Gracious Rebuke: next Charged Attack costs no Stamina, deals 50% increased DMG, and restores 30% Max HP.'
    },
    {
      name: 'There Shall Be a Reckoning for Sin',
      type: '4th Ascension Passive',
      description: "When Wriothesley's HP increases or decreases while in Chilling Penalty state, gains Prosecution Edict: grants 6% ATK per stack, up to 5 stacks (30% ATK)."
    },
    {
      name: "The Duke's Grace",
      type: 'Utility Passive',
      description: 'When crafting Weapon Ascension Materials, has a 10% chance to receive double the product.'
    }
  ],

  lyney: [
    {
      name: 'Card Force Translocation',
      type: 'Normal Attack',
      description: 'Performs up to 4 bow shots; Prop Arrow charges summon a Grin-Malkin Hat that taunts enemies and detonates with Pyrotechnic Strike while generating Prop Surplus.'
    },
    {
      name: 'Bewildering Lights',
      type: 'Elemental Skill',
      description: 'Fires fireworks that detonate active Grin-Malkin Hats for AoE Pyro DMG and clears Prop Surplus stacks to deal massive damage and restore HP.'
    },
    {
      name: 'Wondrous Trick: Miracle Parade',
      type: 'Elemental Burst',
      description: 'Transforms into a bouncing Grin-Malkin Cat dealing Pyro DMG to nearby enemies, then explodes into fireworks and summons a Grin-Malkin Hat.'
    },
    {
      name: 'Perilous Performance',
      type: '1st Ascension Passive',
      description: "If the Prop Arrow consumes Lyney's HP upon firing, the summoned Grin-Malkin Hat restores 3 Energy to Lyney and deals 80% increased DMG."
    },
    {
      name: 'Conclusive Ovation',
      type: '4th Ascension Passive',
      description: "Lyney's DMG against opponents affected by Pyro increases by 60%, plus an additional 20% for each additional Pyro party member, up to a total of 100%."
    },
    {
      name: 'Trivial Puree',
      type: 'Utility Passive',
      description: 'Displays the location of nearby resources unique to Fontaine on the mini-map.'
    }
  ],

  emilie: [
    {
      name: 'Shadow-Cleaning Spear',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive spear strikes infused with elegant perfumer movements.'
    },
    {
      name: 'Fragrance Extraction',
      type: 'Elemental Skill',
      description: 'Creates a Lumidouce Case that sprays Pneuma-aligned AoE Dendro DMG and levels up from Level 1 to Level 2 when nearby opponents take Burning DMG.'
    },
    {
      name: 'Aromatic Explication',
      type: 'Elemental Burst',
      description: 'Deploys a Level 3 Lumidouce Case that repeatedly bombards nearby enemies with fragrant Dendro dew drops, dealing immense AoE Dendro DMG.'
    },
    {
      name: 'Lingering Fragrance',
      type: '1st Ascension Passive',
      description: "Each time the Lumidouce Case collects 2 Scents, it releases Cleargreen Scent dealing AoE Dendro DMG equal to 600% of Emilie's ATK to enemies."
    },
    {
      name: 'Rectification',
      type: '4th Ascension Passive',
      description: "Increases Emilie's DMG against Burning enemies by 15% for every 1,000 ATK she possesses, up to a maximum of 36% DMG Bonus."
    },
    {
      name: 'Head Fragrance Capture',
      type: 'Utility Passive',
      description: 'When the Lumidouce Case created by Emilie is on the field, all party members gain 85% Pyro RES against Burning DMG.'
    }
  ],

  chevreuse: [
    {
      name: 'Line Bayonet Thrust EX',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive spear thrusts utilizing Fontaine Security and Surveillance bayonet techniques.'
    },
    {
      name: 'Short-Range Rapid Interdiction Fire',
      type: 'Elemental Skill',
      description: 'Shoulders her musket and fires at enemies; holding allows aiming, firing an Overcharged Ball that grants team-wide ATK buff and healing over time.'
    },
    {
      name: 'Ring of Bursting Grenades',
      type: 'Elemental Burst',
      description: 'Fires an explosive grenade that splits into secondary explosive shells dealing massive AoE Pyro DMG.'
    },
    {
      name: "Vanguard's Coordinated Tactics",
      type: '1st Ascension Passive',
      description: "When the party consists exclusively of Pyro and Electro characters, triggering Overloaded decreases opponents' Pyro and Electro RES by 40% for 6s."
    },
    {
      name: 'Vertical Force Coordination',
      type: '4th Ascension Passive',
      description: "After Chevreuse fires an Overcharged Ball, all nearby party members gain 1% ATK for every 1,000 Max HP Chevreuse possesses (max 40% ATK) for 30s."
    },
    {
      name: 'Double Quick-March',
      type: 'Utility Passive',
      description: 'Decreases sprinting Stamina consumption for party members by 20%.'
    }
  ],

  charlotte: [
    {
      name: 'Cool-Color Capture',
      type: 'Normal Attack',
      description: 'Aims Monsieur Verite to snap photos, dealing up to 3 instances of Cryo DMG.'
    },
    {
      name: 'Framing: Freezing Point Composition',
      type: 'Elemental Skill',
      description: 'Snaps photos in a viewfinder to mark enemies with Snappy Silhouette or Focused Impression, dealing continuous Cryo DMG over time.'
    },
    {
      name: 'Still Photo: Comprehensive Confirmation',
      type: 'Elemental Burst',
      description: "Creates a Newsflash Field that deals AoE Cryo DMG and restores HP to all party members based on Charlotte's ATK."
    },
    {
      name: 'Moment of Impact',
      type: '1st Ascension Passive',
      description: 'When Monsieur Verite hits marked enemies, Elemental Skill CD decreases by 2s, up to 4 times per 12s.'
    },
    {
      name: 'Diversified Investigation',
      type: '4th Ascension Passive',
      description: 'For each Fontaine character in party excluding herself, Charlotte gains 5% Healing Bonus; for each non-Fontaine character, gains 5% Cryo DMG Bonus.'
    },
    {
      name: 'First-Person Shutter',
      type: 'Utility Passive',
      description: 'When using the Special Analysis Zoom Lens gadget, Charlotte can take photos and move simultaneously.'
    }
  ],

  escoffier: [
    {
      name: 'Culinary Fencing',
      type: 'Normal Attack',
      description: 'Performs up to 4 rapid fencer thrusts and flourishes.'
    },
    {
      name: 'Gourmet Flambé',
      type: 'Elemental Skill',
      description: 'Throws seasoned gourmet pans dealing Pyro DMG and applying Sizzling Sear to enemies.'
    },
    {
      name: 'Grand Feast of Fontaine',
      type: 'Elemental Burst',
      description: 'Summons a banqueting table that continuously feeds the active character, providing sustained healing and 25% ATK bonus.'
    },
    {
      name: 'Secret Reduction',
      type: '1st Ascension Passive',
      description: 'When Gourmet Flambé triggers a Pyro-related reaction, party members gain 60 Elemental Mastery for 10s.'
    },
    {
      name: "Chef's Palette",
      type: '4th Ascension Passive',
      description: "Increases Escoffier's Pyro DMG Bonus by 0.5% for every 100 Max HP, up to a maximum of 25%."
    },
    {
      name: 'Kitchen Connoisseur',
      type: 'Utility Passive',
      description: 'When a Perfect Cooking is achieved on an ATK-boosting dish, has a 12% chance to obtain double the product.'
    }
  ],

  freminet: [
    {
      name: 'Flowing Eddies',
      type: 'Normal Attack',
      description: 'Performs up to 4 consecutive greatsword swings with underwater-diving precision.'
    },
    {
      name: 'Pressurized Floe',
      type: 'Elemental Skill',
      description: 'Enters Pers Time; Normal Attacks build Pressure levels from 0 to 4, culminating in either pure Cryo DMG (Level 0) or devastating Physical DMG (Level 4 Shattering Pressure).'
    },
    {
      name: "Shadowhunter's Ambush",
      type: 'Elemental Burst',
      description: 'Unleashes a wave of frost dealing AoE Cryo DMG, resets Pressurized Floe CD, and reduces Pers Time skill cooldown by 70%.'
    },
    {
      name: 'Saturation Deep Dive',
      type: '1st Ascension Passive',
      description: 'When using Pressurized Floe, if Pressure Level is less than 4, CD of Pressurized Floe is decreased by 1s.'
    },
    {
      name: 'Parallel Condensers',
      type: '4th Ascension Passive',
      description: 'When Freminet triggers Shatter on opponents, Pressurized Floe: Shattering Pressure DMG increases by 40% for 5s.'
    },
    {
      name: 'Deepwater Navigation',
      type: 'Utility Passive',
      description: 'Decreases aquatic Stamina consumption by 35% when diving underwater.'
    }
  ],

  lynette: [
    {
      name: 'Rapid Ritesword',
      type: 'Normal Attack',
      description: 'Performs up to 4 rapid sword strikes.'
    },
    {
      name: 'Enigmatic Feint',
      type: 'Elemental Skill',
      description: 'Dashes forward in high-speed Shadowskulk, marking an opponent with a Shadowsign and delivering an Enigma Thrust dealing Anemo DMG.'
    },
    {
      name: 'Bizarre Magic: Mending Monstrosity',
      type: 'Elemental Burst',
      description: 'Summons a giant Boggart Box that taunts enemies, fires Anemo shots, and absorbs elements to fire elemental Vivid Shots.'
    },
    {
      name: 'Sophisticated Synergy',
      type: '1st Ascension Passive',
      description: 'Within 10s of using Bizarre Magic, for each different Elemental Type in the party, party members gain 8%/12%/16%/20% increased ATK.'
    },
    {
      name: 'Props Well Rehearsed',
      type: '4th Ascension Passive',
      description: "After the Boggart Box triggers an Elemental Absorption, Lynette's Elemental Burst DMG increases by 15% until the box expires."
    },
    {
      name: 'Locus Detective',
      type: 'Utility Passive',
      description: 'Shows the location of nearby Recovery Orbs on the mini-map and increases underwater Stamina and HP recovery by 25%.'
    }
  ],

  sigewinne: [
    {
      name: 'Targeted Treatment',
      type: 'Normal Attack',
      description: 'Fires miniature sedative darts with a pneumatic toy gun.'
    },
    {
      name: 'Rebound Hydrotherapy',
      type: 'Elemental Skill',
      description: 'Blows a giant Bolstering Bubblebath that bounces between enemies, dealing Hydro DMG based on Max HP and healing party members except Sigewinne; upon popping, heals Sigewinne.'
    },
    {
      name: 'Super Saturated Syringing',
      type: 'Elemental Burst',
      description: 'Pulls out a custom syringe cannon to spray continuous high-pressure medicinal Hydro blasts dealing AoE Hydro DMG based on Max HP.'
    },
    {
      name: 'Requires Appropriate Rest',
      type: '1st Ascension Passive',
      description: "When using Rebound Hydrotherapy, Sigewinne grants Convalescence: party members' off-field Elemental Skill DMG increases based on Sigewinne's HP above 30,000 (up to 2,800 DMG per hit)."
    },
    {
      name: 'Detailed Diagnosis, Thorough Treatment',
      type: '4th Ascension Passive',
      description: "Sigewinne's Healing Bonus increases by 8% for every 1,000 points of Bond of Life on all party members, up to a max 30% Healing Bonus."
    },
    {
      name: 'Emergency Dose',
      type: 'Utility Passive',
      description: "When underwater, if active character's HP drops below 50%, continuously restores HP over 2.5s and decreases all Elemental and Physical RES by 10%."
    }
  ]
};

