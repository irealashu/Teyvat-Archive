import React, { useState } from 'react';
import { Character, ElementType, WeaponCategory, RegionName, JOURNEY_REGION_ORDER } from '../types';
import { X, Save, Trash2, Sparkles, User } from 'lucide-react';
import { ImageInput } from './ImageInput';

interface CharacterEditModalProps {
  character?: Character | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (char: Character) => void;
  onDelete?: (id: string) => void;
}

const CHARACTER_TEMPLATES = [
  {
    name: '5★ Natlan Pyro DPS',
    desc: 'Nightsoul warrior with high CRIT & burst',
    data: {
      element: 'Pyro' as ElementType,
      weaponType: 'Claymore' as WeaponCategory,
      rarity: 5 as const,
      region: 'Natlan' as RegionName,
      title: 'Scion of the Blazing Peak',
      stats: { hpBase: 13800, atkBase: 345, defBase: 780, ascensionStat: 'CRIT DMG', ascensionStatValue: '38.4%' },
      build: {
        role: 'Main DPS' as const,
        bestWeapons: ['Fang of the Mountain King', 'Wolf\'s Gravestone', 'Earth Shaker'],
        bestArtifacts: ['Obsidian Codex', 'Crimson Witch of Flames'],
        mainStats: { sands: 'ATK% or EM', goblet: 'Pyro DMG Bonus', circlet: 'CRIT DMG or CRIT Rate' },
        subStats: ['CRIT DMG', 'CRIT Rate', 'ATK%', 'Elemental Mastery']
      },
      skills: [
        { name: 'Incandescent Cleave', type: 'Normal Attack' as const, description: 'Performs up to 4 consecutive heavy strikes infused with Saurian flame.' },
        { name: 'Nightsoul Awakening: Sunfire Dash', type: 'Elemental Skill' as const, description: 'Enters the Nightsoul\'s Blessing state, lunging forward with explosive Pyro AoE shockwaves.' },
        { name: 'Volcanic Cataclysm: Solar Wrath', type: 'Elemental Burst' as const, description: 'Summons the primeval fire of Natlan, dealing catastrophic AoE Nightsoul Pyro DMG.' }
      ],
      constellations: [
        { level: 1, name: 'Crest of the Sacred Flame', effect: 'Nightsoul Blessing duration extended by 4s; ATK increased by 25%.' },
        { level: 2, name: 'Ignition of the Ancient Name', effect: 'Attacks shred 30% enemy Pyro and Physical RES for 10s.' }
      ]
    }
  },
  {
    name: '5★ Fontaine Hydro Sub-DPS',
    desc: 'HP scaler with off-field hydro coordination',
    data: {
      element: 'Hydro' as ElementType,
      weaponType: 'Sword' as WeaponCategory,
      rarity: 5 as const,
      region: 'Fontaine' as RegionName,
      title: 'Maestro of the Opera',
      stats: { hpBase: 15400, atkBase: 240, defBase: 710, ascensionStat: 'CRIT Rate', ascensionStatValue: '19.2%' },
      build: {
        role: 'Sub-DPS' as const,
        bestWeapons: ['Splendor of Tranquil Waters', 'Fleuve Cendre Ferryman', 'Favonius Sword'],
        bestArtifacts: ['Golden Troupe', 'Marechaussee Hunter'],
        mainStats: { sands: 'HP%', goblet: 'Hydro DMG Bonus', circlet: 'CRIT Rate or CRIT DMG' },
        subStats: ['CRIT Rate', 'CRIT DMG', 'HP%', 'Energy Recharge']
      },
      skills: [
        { name: 'Cadenza of Waves', type: 'Normal Attack' as const, description: 'Performs rapid fencing strikes with aquatic flourishing.' },
        { name: 'Aquatic Orchestra', type: 'Elemental Skill' as const, description: 'Summons 3 aquatic orchestra members dealing persistent Hydro DMG based on Max HP.' },
        { name: 'Grand Finale Encore', type: 'Elemental Burst' as const, description: 'Grants party-wide DMG amplification based on fluctuations in team members\' HP.' }
      ],
      constellations: [
        { level: 1, name: 'First Movement: Overture', effect: 'Burst immediately grants 150 Fanfare points.' },
        { level: 2, name: 'Chorus of the Depths', effect: 'Fanfare generation speed is increased by 250%.' }
      ]
    }
  },
  {
    name: '5★ Nod Krai / Snezhnaya Cryo Carry',
    desc: 'Permafrost martialist with frost-cleave damage',
    data: {
      element: 'Cryo' as ElementType,
      weaponType: 'Polearm' as WeaponCategory,
      rarity: 5 as const,
      region: 'Nod Krai' as RegionName,
      title: 'Warden of the Pale Tundra',
      stats: { hpBase: 12900, atkBase: 348, defBase: 820, ascensionStat: 'CRIT DMG', ascensionStatValue: '38.4%' },
      build: {
        role: 'Main DPS' as const,
        bestWeapons: ['Staff of Homa', 'Primordial Jade Winged-Spear', 'The Catch'],
        bestArtifacts: ['Blizzard Strayer', 'Gladiator\'s Finale'],
        mainStats: { sands: 'ATK%', goblet: 'Cryo DMG Bonus', circlet: 'CRIT DMG' },
        subStats: ['CRIT DMG', 'CRIT Rate', 'ATK%', 'Energy Recharge']
      },
      skills: [
        { name: 'Frontier Spearmanship', type: 'Normal Attack' as const, description: 'Executes 5 rapid thrusts piercing multiple enemies with icy precision.' },
        { name: 'Pale Frost Surge', type: 'Elemental Skill' as const, description: 'Rushes forward leaving a trail of frozen permafrost needles that detonate for Cryo DMG.' },
        { name: 'Boreal Tempest: Whiteout', type: 'Elemental Burst' as const, description: 'Unleashes an all-encompassing sub-zero blizzard domain, freezing enemies solid.' }
      ],
      constellations: [
        { level: 1, name: 'Solitary Hunter\'s Vigil', effect: 'Cryo DMG increased by 30% against Frozen or Cryo-affected targets.' },
        { level: 2, name: 'Glacial Fracture', effect: 'Skill strikes ignore 35% of opponent DEF.' }
      ]
    }
  },
  {
    name: '4★ Dedicated Support / Shielder',
    desc: 'Defensive utility & team elemental buffs',
    data: {
      element: 'Geo' as ElementType,
      weaponType: 'Polearm' as WeaponCategory,
      rarity: 4 as const,
      region: 'Liyue' as RegionName,
      title: 'Steadfast Bastion',
      stats: { hpBase: 12100, atkBase: 195, defBase: 840, ascensionStat: 'DEF%', ascensionStatValue: '30.0%' },
      build: {
        role: 'Shielder' as const,
        bestWeapons: ['Favonius Lance', 'Black Tassel', 'Rightful Reward'],
        bestArtifacts: ['Tenacity of the Millelith', 'Noblesse Oblige'],
        mainStats: { sands: 'DEF% or HP%', goblet: 'DEF% or HP%', circlet: 'DEF% or Healing Bonus' },
        subStats: ['DEF%', 'HP%', 'Energy Recharge']
      },
      skills: [
        { name: 'Garrison Spear', type: 'Normal Attack' as const, description: 'Performs up to 4 spear strikes.' },
        { name: 'Adamantine Bulwark', type: 'Elemental Skill' as const, description: 'Deploys an impervious shield absorbing damage scaling with DEF/HP.' },
        { name: 'Resolute March', type: 'Elemental Burst' as const, description: 'Slams the earth to deal AoE Geo DMG and grants the party 20% ATK & DEF for 15s.' }
      ],
      constellations: [
        { level: 1, name: 'Unyielding Formation', effect: 'Shield absorption increased by 20%.' },
        { level: 2, name: 'Battlefield Resupply', effect: 'Burst regenerates 12 Energy for all party members.' }
      ]
    }
  }
];

const DEFAULT_EMPTY_CHARACTER: Character = {
  id: '',
  name: '',
  title: '',
  element: 'Pyro',
  weaponType: 'Sword',
  rarity: 5,
  region: 'Natlan',
  affiliation: '',
  birthday: '',
  constellationName: '',
  description: '',
  iconUrl: 'https://enka.network/ui/UI_AvatarIcon_Mualani.png',
  splashUrl: '',
  stats: {
    hpBase: 12500,
    atkBase: 310,
    defBase: 780,
    ascensionStat: 'CRIT Rate',
    ascensionStatValue: '19.2%',
  },
  skills: [
    { name: 'Normal Attack', type: 'Normal Attack', description: 'Performs consecutive weapon strikes.' },
    { name: 'Elemental Skill', type: 'Elemental Skill', description: 'Unleashes elemental strike.' },
    { name: 'Elemental Burst', type: 'Elemental Burst', description: 'Unleashes ultimate devastating elemental burst.' },
  ],
  constellations: [
    { level: 1, name: 'Constellation 1', effect: 'Increases skill potency or damage output.' },
    { level: 2, name: 'Constellation 2', effect: 'Grants secondary passive utility or team buff.' },
  ],
  build: {
    role: 'Main DPS',
    bestWeapons: ['Signature Weapon', 'Alternative 5-Star', 'Best 4-Star'],
    bestArtifacts: ['BiS 4-Piece Set', '2pc / 2pc Alternative'],
    mainStats: {
      sands: 'ATK% or Energy Recharge',
      goblet: 'Elemental DMG Bonus',
      circlet: 'CRIT Rate or CRIT DMG'
    },
    subStats: ['CRIT Rate', 'CRIT DMG', 'ATK%', 'Energy Recharge']
  }
};

export const CharacterEditModal: React.FC<CharacterEditModalProps> = ({
  character,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) => {
  if (!isOpen) return null;

  const isEditing = Boolean(character);
  const [formData, setFormData] = useState<Character>(
    character ? JSON.parse(JSON.stringify(character)) : {
      ...DEFAULT_EMPTY_CHARACTER,
      id: `char-${Date.now()}`
    }
  );

  const applyTemplate = (tmpl: typeof CHARACTER_TEMPLATES[0]) => {
    setFormData(prev => ({
      ...prev,
      title: tmpl.data.title,
      element: tmpl.data.element,
      weaponType: tmpl.data.weaponType,
      rarity: tmpl.data.rarity,
      region: tmpl.data.region,
      stats: { ...tmpl.data.stats },
      build: { ...tmpl.data.build },
      skills: [...tmpl.data.skills],
      constellations: [...tmpl.data.constellations]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter a valid character name');
      return;
    }
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="font-display font-bold text-lg text-amber-300">
                {isEditing ? `Update Character: ${character?.name}` : 'Add New Character to Archive'}
              </h3>
              <p className="text-xs text-slate-400">
                Live edit character attributes, combat details, and build advice anytime.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Starter Templates */}
        <div className="border-b border-slate-800/80 bg-slate-950/40 p-3 sm:p-4">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quick Starter Templates</span>
            <span className="text-[11px] text-slate-500 font-normal ml-1">(Pre-populates skills, kit & stats)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CHARACTER_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.name}
                type="button"
                onClick={() => applyTemplate(tmpl)}
                className="rounded-lg border border-slate-800 bg-slate-900/90 p-2 text-left hover:border-amber-500/50 hover:bg-amber-500/5 transition-all text-xs group"
              >
                <div className="font-semibold text-slate-200 group-hover:text-amber-300 truncate">
                  {tmpl.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">
                  {tmpl.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          {/* Basic Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
                placeholder="e.g. Mualani"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
                placeholder="e.g. Splish-Splash Wavechaser"
              />
            </div>
          </div>

          {/* Selectors Row: Element, Weapon, Rarity, Region */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Element</label>
              <select
                value={formData.element}
                onChange={(e) => setFormData({ ...formData, element: e.target.value as ElementType })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                {['Pyro', 'Hydro', 'Anemo', 'Electro', 'Dendro', 'Cryo', 'Geo'].map((el) => (
                  <option key={el} value={el}>{el}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Weapon Type</label>
              <select
                value={formData.weaponType}
                onChange={(e) => setFormData({ ...formData, weaponType: e.target.value as WeaponCategory })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                {['Sword', 'Claymore', 'Polearm', 'Bow', 'Catalyst'].map((w) => (
                  <option key={w} value={w}>{w}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Rarity</label>
              <select
                value={formData.rarity}
                onChange={(e) => setFormData({ ...formData, rarity: Number(e.target.value) as 4 | 5 })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value={5}>5-Star (Legendary)</option>
                <option value={4}>4-Star (Epic)</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 mb-1 font-medium">Nation / Region</label>
              <select
                value={formData.region}
                onChange={(e) => setFormData({ ...formData, region: e.target.value as RegionName })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                {JOURNEY_REGION_ORDER.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Affiliation, Birthday, Constellation Name */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Affiliation</label>
              <input
                type="text"
                value={formData.affiliation}
                onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
                placeholder="e.g. People of the Springs"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Birthday</label>
              <input
                type="text"
                value={formData.birthday || ''}
                onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
                placeholder="e.g. August 3"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1 font-medium">Constellation Name</label>
              <input
                type="text"
                value={formData.constellationName}
                onChange={(e) => setFormData({ ...formData, constellationName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
                placeholder="e.g. Phoca Neomonachus"
              />
            </div>
          </div>

          {/* Image Inputs: Avatar Icon + Splash Art */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ImageInput
              label="Avatar Icon (Profile / Card)"
              value={formData.iconUrl}
              onChange={(url) => setFormData({ ...formData, iconUrl: url })}
              aspectRatio="square"
              placeholder="https://... or upload avatar image"
              helperText="Displayed on cards, lists, and character avatar frames."
            />

            <ImageInput
              label="Full Splash Art (Illustration / Showcase)"
              value={formData.splashUrl || ''}
              onChange={(url) => setFormData({ ...formData, splashUrl: url })}
              aspectRatio="wide"
              placeholder="https://... or upload gacha splash illustration"
              helperText="Shown in full glory in character detail modal."
            />
          </div>

          {/* Lore / Description */}
          <div>
            <label className="block text-slate-400 mb-1 font-medium">Profile Description</label>
            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-slate-200 focus:outline-none focus:border-amber-400"
              placeholder="Character biography, personality, and lore background..."
            />
          </div>

          {/* Level 90 Stats Row */}
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <span className="text-amber-400 font-bold block">Base Stats (Level 90)</span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <div>
                <label className="block text-slate-500 text-[11px]">Base HP</label>
                <input
                  type="number"
                  value={formData.stats.hpBase}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, hpBase: Number(e.target.value) }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200"
                />
              </div>
              <div>
                <label className="block text-slate-500 text-[11px]">Base ATK</label>
                <input
                  type="number"
                  value={formData.stats.atkBase}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, atkBase: Number(e.target.value) }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200"
                />
              </div>
              <div>
                <label className="block text-slate-500 text-[11px]">Base DEF</label>
                <input
                  type="number"
                  value={formData.stats.defBase}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, defBase: Number(e.target.value) }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200"
                />
              </div>
              <div>
                <label className="block text-slate-500 text-[11px]">Ascension Stat</label>
                <select
                  value={
                    ['CRIT DMG', 'CRIT Rate', 'Energy Recharge', 'Elemental Mastery', 'ATK%', 'HP%', 'DEF%', 'Healing Bonus', 'Physical DMG Bonus', 'Pyro DMG Bonus', 'Hydro DMG Bonus', 'Cryo DMG Bonus', 'Electro DMG Bonus', 'Anemo DMG Bonus', 'Geo DMG Bonus', 'Dendro DMG Bonus'].includes(formData.stats.ascensionStat)
                      ? formData.stats.ascensionStat
                      : 'Custom'
                  }
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val !== 'Custom') {
                      setFormData({
                        ...formData,
                        stats: { ...formData.stats, ascensionStat: val }
                      });
                    }
                  }}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 focus:border-amber-400 focus:outline-none"
                >
                  <option value="CRIT DMG">CRIT DMG</option>
                  <option value="CRIT Rate">CRIT Rate</option>
                  <option value="Energy Recharge">Energy Recharge</option>
                  <option value="Elemental Mastery">Elemental Mastery</option>
                  <option value="ATK%">ATK%</option>
                  <option value="HP%">HP%</option>
                  <option value="DEF%">DEF%</option>
                  <option value="Healing Bonus">Healing Bonus</option>
                  <option value="Physical DMG Bonus">Physical DMG Bonus</option>
                  <option value="Pyro DMG Bonus">Pyro DMG Bonus</option>
                  <option value="Hydro DMG Bonus">Hydro DMG Bonus</option>
                  <option value="Cryo DMG Bonus">Cryo DMG Bonus</option>
                  <option value="Electro DMG Bonus">Electro DMG Bonus</option>
                  <option value="Anemo DMG Bonus">Anemo DMG Bonus</option>
                  <option value="Geo DMG Bonus">Geo DMG Bonus</option>
                  <option value="Dendro DMG Bonus">Dendro DMG Bonus</option>
                  <option value="Custom">+ Custom Stat...</option>
                </select>
                {!['CRIT DMG', 'CRIT Rate', 'Energy Recharge', 'Elemental Mastery', 'ATK%', 'HP%', 'DEF%', 'Healing Bonus', 'Physical DMG Bonus', 'Pyro DMG Bonus', 'Hydro DMG Bonus', 'Cryo DMG Bonus', 'Electro DMG Bonus', 'Anemo DMG Bonus', 'Geo DMG Bonus', 'Dendro DMG Bonus'].includes(formData.stats.ascensionStat) && (
                  <input
                    type="text"
                    value={formData.stats.ascensionStat}
                    onChange={(e) => setFormData({
                      ...formData,
                      stats: { ...formData.stats, ascensionStat: e.target.value }
                    })}
                    className="mt-1 w-full bg-slate-900 border border-slate-700 rounded p-1 text-slate-200 text-xs"
                    placeholder="Enter custom stat..."
                  />
                )}
              </div>
              <div>
                <label className="block text-slate-500 text-[11px]">Stat Value</label>
                <input
                  type="text"
                  value={formData.stats.ascensionStatValue}
                  onChange={(e) => setFormData({
                    ...formData,
                    stats: { ...formData.stats, ascensionStatValue: e.target.value }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200"
                  placeholder="e.g. 38.4%"
                />
              </div>
            </div>
          </div>

          {/* Build Advice */}
          <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-2">
            <span className="text-amber-400 font-bold block">Recommended Build Guide</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-500 text-[11px]">Role</label>
                <select
                  value={formData.build.role}
                  onChange={(e) => setFormData({
                    ...formData,
                    build: { ...formData.build, role: e.target.value as any }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200"
                >
                  <option value="Main DPS">Main DPS</option>
                  <option value="Sub-DPS">Sub-DPS</option>
                  <option value="Support">Support</option>
                  <option value="Healer">Healer</option>
                  <option value="Shielder">Shielder</option>
                  <option value="Buffer">Buffer</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-500 text-[11px]">Best Weapons (comma-separated)</label>
                <input
                  type="text"
                  value={formData.build.bestWeapons.join(', ')}
                  onChange={(e) => setFormData({
                    ...formData,
                    build: {
                      ...formData.build,
                      bestWeapons: e.target.value.split(',').map(s => s.trim()).filter(Boolean)
                    }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200"
                  placeholder="e.g. Signature Weapon, Mistsplitter..."
                />
              </div>
            </div>

            {/* Main Stats Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800/60">
              <div>
                <label className="block text-slate-500 text-[11px]">Sands of Eon</label>
                <select
                  value={formData.build.mainStats?.sands || 'ATK%'}
                  onChange={(e) => setFormData({
                    ...formData,
                    build: {
                      ...formData.build,
                      mainStats: {
                        ...(formData.build.mainStats || { goblet: 'Elemental DMG', circlet: 'CRIT' }),
                        sands: e.target.value
                      }
                    }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 text-xs"
                >
                  <option value="ATK%">ATK%</option>
                  <option value="Energy Recharge">Energy Recharge</option>
                  <option value="Elemental Mastery">Elemental Mastery</option>
                  <option value="HP%">HP%</option>
                  <option value="DEF%">DEF%</option>
                  <option value="ATK% or EM">ATK% or EM</option>
                  <option value="HP% or ER">HP% or ER</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 text-[11px]">Goblet of Eonothem</label>
                <select
                  value={formData.build.mainStats?.goblet || 'Elemental DMG Bonus'}
                  onChange={(e) => setFormData({
                    ...formData,
                    build: {
                      ...formData.build,
                      mainStats: {
                        ...(formData.build.mainStats || { sands: 'ATK%', circlet: 'CRIT' }),
                        goblet: e.target.value
                      }
                    }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 text-xs"
                >
                  <option value="Pyro DMG Bonus">Pyro DMG Bonus</option>
                  <option value="Hydro DMG Bonus">Hydro DMG Bonus</option>
                  <option value="Cryo DMG Bonus">Cryo DMG Bonus</option>
                  <option value="Electro DMG Bonus">Electro DMG Bonus</option>
                  <option value="Anemo DMG Bonus">Anemo DMG Bonus</option>
                  <option value="Geo DMG Bonus">Geo DMG Bonus</option>
                  <option value="Dendro DMG Bonus">Dendro DMG Bonus</option>
                  <option value="Physical DMG Bonus">Physical DMG Bonus</option>
                  <option value="ATK%">ATK%</option>
                  <option value="HP%">HP%</option>
                  <option value="DEF%">DEF%</option>
                  <option value="Elemental Mastery">Elemental Mastery</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-500 text-[11px]">Circlet of Logos</label>
                <select
                  value={formData.build.mainStats?.circlet || 'CRIT Rate or CRIT DMG'}
                  onChange={(e) => setFormData({
                    ...formData,
                    build: {
                      ...formData.build,
                      mainStats: {
                        ...(formData.build.mainStats || { sands: 'ATK%', goblet: 'Elemental DMG' }),
                        circlet: e.target.value
                      }
                    }
                  })}
                  className="w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-slate-200 text-xs"
                >
                  <option value="CRIT Rate or CRIT DMG">CRIT Rate or CRIT DMG</option>
                  <option value="CRIT Rate">CRIT Rate</option>
                  <option value="CRIT DMG">CRIT DMG</option>
                  <option value="Healing Bonus">Healing Bonus</option>
                  <option value="ATK%">ATK%</option>
                  <option value="HP%">HP%</option>
                  <option value="DEF%">DEF%</option>
                  <option value="Elemental Mastery">Elemental Mastery</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer Submit Buttons */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            {isEditing && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  if (confirm(`Are you sure you want to delete ${formData.name}?`)) {
                    onDelete(formData.id);
                    onClose();
                  }
                }}
                className="flex items-center gap-1 px-3 py-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </button>
            ) : <div />}

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg shadow transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Save to Archive</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
