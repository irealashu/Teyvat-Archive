import { ArtifactSet } from '../types';

export const INITIAL_ARTIFACTS: ArtifactSet[] = [
  {
    id: 'obsidian-codex',
    name: 'Obsidian Codex',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15037_4.png',
    twoPieceBonus: 'While the equipping character is in Nightsoul\'s Blessing and is on the field, their DMG dealt is increased by 15%.',
    fourPieceBonus: 'After the equipping character consumes 1 Nightsoul point while on the field, CRIT Rate increases by 40% for 6s. This effect can trigger once every 1s.',
    pieces: {
      flower: { name: 'Reckoning of the Xenoceros', description: 'A fossil flower carved of pitch-black volcanic glass.' },
      feather: { name: 'Root of the Spirit-Mantle', description: 'A pinion feather saturated with ancient Saurian animus.' },
      sands: { name: 'Myths of the Night Realm', description: 'A sundial indicating the mysterious flow of ancestral phlogiston.' },
      goblet: { name: 'Precursor\'s Sun-Gilded Vessel', description: 'A ceremonial chalice used to toast the champions of the stadium.' },
      circlet: { name: 'Crown of the Sacred Lord', description: 'A warrior\'s crown bearing the mark of supreme primal trial.' }
    },
    domainOrSource: 'Sanctum of Rainbow Spirits (Natlan)',
    recommendedCharacters: ['Mualani', 'Kinich', 'Chasca', 'Mavuika']
  },
  {
    id: 'scroll-of-the-hero-of-cinder-city',
    name: 'Scroll of the Hero of Cinder City',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15038_4.png',
    twoPieceBonus: 'When a nearby party member triggers a "Nightsoul Burst," the equipping character regenerates 6 Elemental Energy.',
    fourPieceBonus: 'After the equipping character triggers an Elemental Reaction related to their Elemental Type, all nearby party members gain a 12% Elemental DMG Bonus for the elemental types involved in that reaction for 15s. If in Nightsoul\'s Blessing, this bonus is increased by an additional 28% (total 40% DMG bonus).',
    pieces: {
      flower: { name: 'Beast Tamer\'s Talisman', description: 'An ancient protective talisman shaped like a Saurian footprint.' },
      feather: { name: 'Mountain Ranger\'s Marker', description: 'A bright feather used to mark secret trails through canyons.' },
      sands: { name: 'Mystic\'s Gold Dial', description: 'An ancient astrolabe recording cyclical seasons of fire.' },
      goblet: { name: 'Wanderer\'s Water Pitcher', description: 'A flask containing water drawn from sacred springs.' },
      circlet: { name: 'Demon-Conquering Mask', description: 'A ceremonial mask worn in memory of heroes who fought the Abyss.' }
    },
    domainOrSource: 'Sanctum of Rainbow Spirits (Natlan)',
    recommendedCharacters: ['Xilonen', 'Kachina', 'Ororon', 'Citlali']
  },
  {
    id: 'marechaussee-hunter',
    name: 'Marechaussee Hunter',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15031_4.png',
    twoPieceBonus: 'Normal and Charged Attack DMG +15%.',
    fourPieceBonus: 'When current HP increases or decreases, CRIT Rate is increased by 12% for 5s. Max 3 stacks (total 36% CRIT Rate).',
    pieces: {
      flower: { name: 'Hunter\'s Brooch', description: 'An insignia bestowed upon decorated special security marshals.' },
      feather: { name: 'Masterpiece\'s Overture', description: 'A quill used by the chief detective when signing warrants.' },
      sands: { name: 'Moment of Judgment', description: 'A mechanical pocket watch calibrated to standard court time.' },
      goblet: { name: 'Forgotten Vessel', description: 'A silver cup once filled with celebration wine.' },
      circlet: { name: 'Veteran\'s Visage', description: 'A half-face mask worn during stealth investigations in the sewers.' }
    },
    domainOrSource: 'Denouement of Sin (Fontaine)',
    recommendedCharacters: ['Neuvillette', 'Wriothesley', 'Lyney', 'Furina-assisted carries']
  },
  {
    id: 'golden-troupe',
    name: 'Golden Troupe',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15032_4.png',
    twoPieceBonus: 'Increases Elemental Skill DMG by 20%.',
    fourPieceBonus: 'Increases Elemental Skill DMG by 25%. Additionally, when not on the field, Elemental Skill DMG is further increased by 25% (total 70% Skill DMG bonus). This effect clears 2s after taking the field.',
    pieces: {
      flower: { name: 'Golden Song\'s Variation', description: 'A golden mechanical blossom that plays an aria when wound.' },
      feather: { name: 'Golden Bird\'s Shed Feather', description: 'A clockwork feather made of gold leaf.' },
      sands: { name: 'Golden Era\'s Prelude', description: 'An hourglass filled with shimmering golden sand from the former dynasty.' },
      goblet: { name: 'Golden Night\'s Whimsical Drop', description: 'A goblet filled with liqueur that never spills.' },
      circlet: { name: 'Golden Troupe\'s Reward', description: 'A theatrical mask painted with an enigmatic golden smile.' }
    },
    domainOrSource: 'Denouement of Sin (Fontaine)',
    recommendedCharacters: ['Furina', 'Fischl', 'Yae Miko', 'Albedo', 'Chiori']
  },
  {
    id: 'fragment-of-harmonic-whimsy',
    name: 'Fragment of Harmonic Whimsy',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15035_4.png',
    twoPieceBonus: 'ATK +18%.',
    fourPieceBonus: 'When the value of a Bond of Life increases or decreases, this character deals 18% increased DMG for 6s. Max 3 stacks (total 54% DMG bonus).',
    pieces: {
      flower: { name: 'Harmonious Symphony', description: 'A brass gear blossom humming with clockwork harmony.' },
      feather: { name: 'Faded Feather of the Conductor', description: 'A black quill feather touched by an ancient tragedy.' },
      sands: { name: 'Clock of the Sunken Court', description: 'A pocket watch recording the drowned hours of Remuria.' },
      goblet: { name: 'Chalcedony Goblet', description: 'A chalice made from petrified seawater and coral.' },
      circlet: { name: 'Crown of Remurian Sages', description: 'A diadem once worn by musicians playing the symphony of fate.' }
    },
    domainOrSource: 'Faded Theater (Fontaine)',
    recommendedCharacters: ['Arlecchino', 'Clorinde']
  },
  {
    id: 'unfinished-reverie',
    name: 'Unfinished Reverie',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15036_4.png',
    twoPieceBonus: 'ATK +18%.',
    fourPieceBonus: 'After leaving combat for 3s, DMG dealt is increased by 50%. In combat, if no Burning opponents are nearby for more than 6s, this DMG Bonus will decrease by 10% per second until it reaches 0%. When a Burning opponent exists, it increases by 10% until it reaches 50%.',
    pieces: {
      flower: { name: 'Ephemeral Blossom', description: 'A dried flower soaked in delicate perfumes.' },
      feather: { name: 'Plume of the Fragrant Trail', description: 'A fragrant bird feather left at a crime scene.' },
      sands: { name: 'Hourglass of the Scent Master', description: 'An hourglass marking the gradual evaporation of essences.' },
      goblet: { name: 'Perfumer\'s Flagon', description: 'A crystal vial containing the pure extract of truth.' },
      circlet: { name: 'Veil of the Crime Scene', description: 'A black lace veil worn while cleaning up after disasters.' }
    },
    domainOrSource: 'Faded Theater (Fontaine)',
    recommendedCharacters: ['Emilie', 'Kinich']
  },
  {
    id: 'nighttime-whispers-in-the-echoing-woods',
    name: 'Nighttime Whispers in the Echoing Woods',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15033_4.png',
    twoPieceBonus: 'ATK +18%.',
    fourPieceBonus: 'After using an Elemental Skill, gain a 20% Geo DMG Bonus for 10s. While under a shield granted by the Crystallize reaction, the above effect is increased by 150% (total 50% Geo DMG bonus).',
    pieces: {
      flower: { name: 'Selfless Floral Brooch', description: 'A rose corsage pinned to the lapel of a Spina di Rosula uniform.' },
      feather: { name: 'Honest Quill', description: 'A fountain pen filled with indigo ink used for maritime contracts.' },
      sands: { name: 'Faithful Pocket Watch', description: 'A golden pocket watch with an etched crest of yellow roses.' },
      goblet: { name: 'Magnanimous Wine Goblet', description: 'A crystal goblet raised to honor fallen friends.' },
      circlet: { name: 'Compassionate Top Hat', description: 'A fashionable broad-brimmed lady\'s hat decorated with ribbons.' }
    },
    domainOrSource: 'Waterfall Wen (Fontaine)',
    recommendedCharacters: ['Navia', 'Ningguang']
  },
  {
    id: 'emblem-of-severed-fate',
    name: 'Emblem of Severed Fate',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15020_4.png',
    twoPieceBonus: 'Energy Recharge +20%.',
    fourPieceBonus: 'Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.',
    pieces: {
      flower: { name: 'Magnificent Tsuba', description: 'An ornate sword guard decorated with the crest of a fallen clan.' },
      feather: { name: 'Sundered Feather', description: 'A crow feather stained with the blood of a great duel.' },
      sands: { name: 'Storm Cage', description: 'A miniature seal cage that houses trapped lightning.' },
      goblet: { name: 'Scarlet Vessel', description: 'A lacquered sake cup favored by generals on the eve of battle.' },
      circlet: { name: 'Ornate Kabuto', description: 'A fierce samurai helmet with an imposing crest of thunder.' }
    },
    domainOrSource: 'Momiji-Dyed Court (Inazuma)',
    recommendedCharacters: ['Raiden Shogun', 'Xiangling', 'Xingqiu', 'Yelan', 'Beidou']
  },
  {
    id: 'shimenawas-reminiscence',
    name: 'Shimenawa\'s Reminiscence',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15019_4.png',
    twoPieceBonus: 'ATK +18%.',
    fourPieceBonus: 'When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s.',
    pieces: {
      flower: { name: 'Entangling Bloom', description: 'A sacred flower tied with purified ritual hemp.' },
      feather: { name: 'Shaft of Remembrance', description: 'An arrow feather blessed at the Grand Narukami Shrine.' },
      sands: { name: 'Morning Dew\'s Moment', description: 'A sacred chime used during early morning shrine prayers.' },
      goblet: { name: 'Hopeful Heart', description: 'A wine cup passed down from the legendary Kitsune Saiguu.' },
      circlet: { name: 'Capricious Visage', description: 'A fox mask representing playful deception and devotion.' }
    },
    domainOrSource: 'Momiji-Dyed Court (Inazuma)',
    recommendedCharacters: ['Yoimiya', 'Hu Tao', 'Ganyu (Melt)']
  },
  {
    id: 'husk-of-opulent-dreams',
    name: 'Husk of Opulent Dreams',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15021_4.png',
    twoPieceBonus: 'DEF +30%.',
    fourPieceBonus: 'Obtains Curiosity stacks: on-field Geo hits grant 1 stack (every 0.3s); off-field grants 1 stack every 3s. Each stack grants 6% DEF and 6% Geo DMG Bonus (max 4 stacks: 24% DEF and 24% Geo DMG).',
    pieces: {
      flower: { name: 'Bloom Feather', description: 'A golden feather made from the divine wood of an ancient puppet.' },
      feather: { name: 'Plume of Luxury', description: 'A black pinion left behind after shedding artificial tears.' },
      sands: { name: 'Song of Life', description: 'A clock recording the wanderings of an abandoned creation.' },
      goblet: { name: 'Calabash of Awakening', description: 'A gilded gourd flask containing bitter medicine and sweet memories.' },
      circlet: { name: 'Skeletal Hat', description: 'A conical traveler\'s hat hung with silken black veils.' }
    },
    domainOrSource: 'Slumbering Court (Inazuma)',
    recommendedCharacters: ['Arataki Itto', 'Albedo', 'Chiori', 'Noelle']
  },
  {
    id: 'ocean-hued-clam',
    name: 'Ocean-Hued Clam',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15022_4.png',
    twoPieceBonus: 'Healing Bonus +15%.',
    fourPieceBonus: 'When healing party members, a Sea-Dyed Foam appears for 3s, accumulating incoming healing (including overheal). It explodes dealing 90% of accumulated healing as Physical DMG (up to 27,000 DMG).',
    pieces: {
      flower: { name: 'Sea-Dyed Blossom', description: 'A pearlescent clam that blossoms like a lotus underwater.' },
      feather: { name: 'Deep Palace\'s Plume', description: 'A vibrant coral feather found in the deep trenches of Enkanomiya.' },
      sands: { name: 'Cowry of Parting', description: 'A sacred cowry shell used to divine ocean currents.' },
      goblet: { name: 'Pearl Cage', description: 'A luminescent pearl cradled in deep-sea mother-of-pearl.' },
      circlet: { name: 'Crown of Watatsumi', description: 'A ceremonial headdress worn by the Sangonomiya priestesses.' }
    },
    domainOrSource: 'Slumbering Court (Inazuma)',
    recommendedCharacters: ['Sangonomiya Kokomi', 'Qiqi', 'Baizhu', 'Barbara']
  },
  {
    id: 'deepwood-memories',
    name: 'Deepwood Memories',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15025_4.png',
    twoPieceBonus: 'Dendro DMG Bonus +15%.',
    fourPieceBonus: 'After Elemental Skills or Bursts hit opponents, the targets\' Dendro RES is decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field.',
    pieces: {
      flower: { name: 'Labyrinth Wayfarer', description: 'A crystal flower preserving the fresh dew of an ancient rainforest.' },
      feather: { name: 'Scholar of Vines', description: 'A bookmark woven from hardy vines found in the Avidya forest.' },
      sands: { name: 'A Time of Insight', description: 'A sundial carved from petrified bark of the Irminsul tree.' },
      goblet: { name: 'Lamp of the Lost', description: 'An ancient oil lamp that burns with emerald fire.' },
      circlet: { name: 'Laurel Coronet', description: 'A crown woven by the Aranara to honor the First Sage.' }
    },
    domainOrSource: 'Spire of Solitary Enlightenment (Sumeru)',
    recommendedCharacters: ['Nahida', 'Alhaitham', 'Tighnari', 'Collei']
  },
  {
    id: 'gilded-dreams',
    name: 'Gilded Dreams',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15026_4.png',
    twoPieceBonus: 'Elemental Mastery +80.',
    fourPieceBonus: 'Within 8s of triggering an Elemental Reaction, the character receives buffs based on party member elements: ATK increased by 14% for each member of the same element, and Elemental Mastery increased by 50 for each member of different elements (max 3 counts).',
    pieces: {
      flower: { name: 'Dreaming Steelbloom', description: 'A mechanical flower made from gold and obsidian.' },
      feather: { name: 'Feather of Judgment', description: 'A balance feather used in ancient desert weighing rituals.' },
      sands: { name: 'The Sunken Sands of Time', description: 'An hourglass containing glowing crimson sand from King Deshret\'s mausoleum.' },
      goblet: { name: 'Honeyed Final Feast', description: 'A golden chalice etched with scenes of forgotten desert banquets.' },
      circlet: { name: 'Shadow of the Sand King', description: 'A pharaoh\'s headdress inlaid with lazurite and rubies.' }
    },
    domainOrSource: 'Spire of Solitary Enlightenment (Sumeru)',
    recommendedCharacters: ['Alhaitham', 'Cyno', 'Nahida', 'Yae Miko', 'Kuki Shinobu']
  },
  {
    id: 'desert-pavilion-chronicle',
    name: 'Desert Pavilion Chronicle',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15027_4.png',
    twoPieceBonus: 'Anemo DMG Bonus +15%.',
    fourPieceBonus: 'When Charged Attacks hit opponents, the equipping character\'s Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s.',
    pieces: {
      flower: { name: 'The First Days of the City of Kings', description: 'A blue ceramic flower that blossomed in the royal court of Ay-Khanoum.' },
      feather: { name: 'End of the Golden Realm', description: 'A falcon feather that once carried imperial decrees.' },
      sands: { name: 'Defender of the Enchanting Dream', description: 'An hourglass recording the collapse of ancient oasis towers.' },
      goblet: { name: 'Vessel of the Dancers', description: 'A perfume vessel passed down through generations of dancers.' },
      circlet: { name: 'Legacy of the Desert Highborn', description: 'A jeweled mask worn during desert masquerades.' }
    },
    domainOrSource: 'City of Gold (Sumeru)',
    recommendedCharacters: ['Wanderer', 'Xiao', 'Shikanoin Heizou']
  },
  {
    id: 'viridescent-venerer',
    name: 'Viridescent Venerer',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15002_4.png',
    twoPieceBonus: 'Anemo DMG Bonus +15%.',
    fourPieceBonus: 'Increases Swirl DMG by 60%. Decreases opponent\'s Elemental RES to the element infused in the Swirl by 40% for 10s.',
    pieces: {
      flower: { name: 'In Remembrance of Viridescent Fields', description: 'A wild flower that never wilts, preserved by gentle breezes.' },
      feather: { name: 'Viridescent Arrow Feather', description: 'An arrow feather gathered from an ancient hunting bird.' },
      sands: { name: 'Viridescent Venerer\'s Determination', description: 'A pocket watch pointing eternally toward the northern forest.' },
      goblet: { name: 'Viridescent Venerer\'s Vessel', description: 'A canteen carried by the hunter throughout her journeys.' },
      circlet: { name: 'Viridescent Venerer\'s Diadem', description: 'A hunter\'s cap adorned with a single proud feather.' }
    },
    domainOrSource: 'Valley of Remembrance (Mondstadt)',
    recommendedCharacters: ['Kaedehara Kazuha', 'Venti', 'Sucrose', 'Jean', 'Xianyun']
  },
  {
    id: 'blizzard-strayer',
    name: 'Blizzard Strayer',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15015_4.png',
    twoPieceBonus: 'Cryo DMG Bonus +15%.',
    fourPieceBonus: 'When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20% (total 40% CRIT Rate).',
    pieces: {
      flower: { name: 'Snowswept Memory', description: 'A flower sculpted from permafrost, cold to the touch.' },
      feather: { name: 'Icebreaker\'s Resolve', description: 'A feather plucked from an eagle soaring over snowcapped peaks.' },
      sands: { name: 'Frozen Homeland\'s Demise', description: 'An hourglass filled with crushed glacial ice.' },
      goblet: { name: 'Frost-Weaved Dignity', description: 'A goblet carved from pure rime crystal.' },
      circlet: { name: 'Broken Rime\'s Echo', description: 'A crown worn by the ancient priests of Sal Vindagnyr.' }
    },
    domainOrSource: 'Peak of Vindagnyr (Dragonspine)',
    recommendedCharacters: ['Kamisato Ayaka', 'Ganyu (Freeze)', 'Wriothesley', 'Rosaria']
  },
  {
    id: 'heart-of-depth',
    name: 'Heart of Depth',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15016_4.png',
    twoPieceBonus: 'Hydro DMG Bonus +15%.',
    fourPieceBonus: 'After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.',
    pieces: {
      flower: { name: 'Gilded Corsage', description: 'A corsage salvaged from a shipwreck deep on the ocean floor.' },
      feather: { name: 'Gust of Nostalgia', description: 'A seabird feather that guided weary sailors through typhoons.' },
      sands: { name: 'Copper Compass', description: 'A navigational compass pointing toward distant stormy shores.' },
      goblet: { name: 'Goblet of Thracian Wine', description: 'A rum flagon cherished by legendary privateer captains.' },
      circlet: { name: 'Wine-Stained Tricorne', description: 'A pirate captain\'s hat soaked in salt spray and tavern rum.' }
    },
    domainOrSource: 'Peak of Vindagnyr (Dragonspine)',
    recommendedCharacters: ['Tartaglia', 'Kamisato Ayato', 'Mualani']
  },
  {
    id: 'crimson-witch-of-flames',
    name: 'Crimson Witch of Flames',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15006_4.png',
    twoPieceBonus: 'Pyro DMG Bonus +15%.',
    fourPieceBonus: 'Increases Overloaded, Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skills increases the 2-Piece Set Bonus by 50% of its starting value for 10s (max 3 stacks: total 37.5% Pyro DMG).',
    pieces: {
      flower: { name: 'Witch\'s Flower of Blaze', description: 'A flower touched by the witch that burns perpetually without ash.' },
      feather: { name: 'Witch\'s Ever-Burning Plume', description: 'A feather singed by the flames of wrath and grief.' },
      sands: { name: 'Witch\'s End Time', description: 'An hourglass marking the final moments before everything burnt.' },
      goblet: { name: 'Witch\'s Heart Flames', description: 'A vessel containing liquid flame born of pure passion.' },
      circlet: { name: 'Witch\'s Scorching Hat', description: 'A pointed wizard\'s hat worn by Signora during her youth.' }
    },
    domainOrSource: 'Hidden Palace of Zhou Formula (Liyue)',
    recommendedCharacters: ['Hu Tao', 'Diluc', 'Xiangling', 'Klee', 'Yoimiya']
  },
  {
    id: 'noblesse-oblige',
    name: 'Noblesse Oblige',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15007_4.png',
    twoPieceBonus: 'Elemental Burst DMG +20%.',
    fourPieceBonus: 'Using an Elemental Burst increases all party members\' ATK by 20% for 12s. This effect cannot stack.',
    pieces: {
      flower: { name: 'Royal Flora', description: 'A satin flower worn by ancient aristocracy during royal galas.' },
      feather: { name: 'Royal Plume', description: 'A falcon feather dyed royal blue, pinned to ceremonial robes.' },
      sands: { name: 'Royal Pocket Watch', description: 'A gold pocket watch bearing the insignia of the founding nobility.' },
      goblet: { name: 'Royal Silver Urn', description: 'A silver wine decanter passed between generations of rulers.' },
      circlet: { name: 'Royal Masque', description: 'A silver masquerade mask worn by nobles during court balls.' }
    },
    domainOrSource: 'Clear Pool and Mountain Cavern (Liyue)',
    recommendedCharacters: ['Bennett', 'Mona', 'Zhongli (Support)', 'Xingqiu', 'Diona']
  },
  {
    id: 'tenacity-of-the-millelith',
    name: 'Tenacity of the Millelith',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15017_4.png',
    twoPieceBonus: 'HP +20%.',
    fourPieceBonus: 'When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can trigger even if the character is not on the field.',
    pieces: {
      flower: { name: 'Flower of Accolades', description: 'A golden glazed lily awarded to brave Millelith soldiers.' },
      feather: { name: 'Ceremonial War-Plume', description: 'A hawk feather mounted on the crest of a vanguard\'s helmet.' },
      sands: { name: 'Orichalceous Time-Dial', description: 'A bronze sundial used to coordinate military maneuvers in the Chasm.' },
      goblet: { name: 'Noble\'s Pledging Vessel', description: 'A ceremonial chalice used for swearing oaths of unyielding loyalty.' },
      circlet: { name: 'General\'s Ancient Helm', description: 'A sturdy iron helmet that withstood the onslaught of abyssal hordes.' }
    },
    domainOrSource: 'Ridge Watch (Mondstadt/Liyue border)',
    recommendedCharacters: ['Zhongli', 'Kuki Shinobu', 'Layla', 'Dehya', 'Kokomi (Tenacity)']
  },
  {
    id: 'pale-flame',
    name: 'Pale Flame',
    maxRarity: 5,
    iconUrl: 'https://enka.network/ui/UI_RelicIcon_15018_4.png',
    twoPieceBonus: 'Physical DMG Bonus +25%.',
    fourPieceBonus: 'When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can trigger once every 0.3s. Once 2 stacks are reached, the 2-Piece Set effect is increased by 100% (total 50% Physical DMG Bonus).',
    pieces: {
      flower: { name: 'Stainless Bloom', description: 'A pristine pale flower crafted from cold frost-forged steel.' },
      feather: { name: 'Wise Doctor\'s Pinion', description: 'A raven feather plucked by the second Harbinger Dottore.' },
      sands: { name: 'Moment of Cessation', description: 'A pocket watch belonging to Pantalone, frozen at a bitter hour.' },
      goblet: { name: 'Surpassing Cup', description: 'A gilded chalice representing Scaramouche\'s divine lineage.' },
      circlet: { name: 'Mocking Mask', description: 'The half-mask of Pierro the Jester, laughing at fate\'s absurdity.' }
    },
    domainOrSource: 'Ridge Watch (Mondstadt/Liyue border)',
    recommendedCharacters: ['Eula', 'Razor', 'Physical Fischl']
  }
];
