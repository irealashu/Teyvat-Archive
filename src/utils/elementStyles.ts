import { ElementType, Rarity, WeaponCategory } from '../types';

export const ELEMENT_COLORS: Record<ElementType, {
  name: string;
  bg: string;
  text: string;
  border: string;
  badge: string;
  gradient: string;
  glow: string;
  accent: string;
}> = {
  Pyro: {
    name: 'Pyro',
    bg: 'bg-red-950/40',
    text: 'text-red-400',
    border: 'border-red-500/30',
    badge: 'bg-red-500/20 text-red-300 border-red-500/40',
    gradient: 'from-orange-600/30 via-red-600/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(239,68,68,0.25)]',
    accent: '#ef4444',
  },
  Hydro: {
    name: 'Hydro',
    bg: 'bg-sky-950/40',
    text: 'text-sky-400',
    border: 'border-sky-500/30',
    badge: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    gradient: 'from-blue-600/30 via-sky-600/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(14,165,233,0.25)]',
    accent: '#0ea5e9',
  },
  Anemo: {
    name: 'Anemo',
    bg: 'bg-teal-950/40',
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    badge: 'bg-teal-500/20 text-teal-300 border-teal-500/40',
    gradient: 'from-teal-600/30 via-emerald-600/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(20,184,166,0.25)]',
    accent: '#14b8a6',
  },
  Electro: {
    name: 'Electro',
    bg: 'bg-purple-950/40',
    text: 'text-purple-400',
    border: 'border-purple-500/30',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    gradient: 'from-purple-600/30 via-indigo-600/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(168,85,247,0.25)]',
    accent: '#a855f7',
  },
  Dendro: {
    name: 'Dendro',
    bg: 'bg-lime-950/40',
    text: 'text-lime-400',
    border: 'border-lime-500/30',
    badge: 'bg-lime-500/20 text-lime-300 border-lime-500/40',
    gradient: 'from-emerald-600/30 via-lime-600/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(132,204,22,0.25)]',
    accent: '#84cc16',
  },
  Cryo: {
    name: 'Cryo',
    bg: 'bg-cyan-950/40',
    text: 'text-cyan-300',
    border: 'border-cyan-400/30',
    badge: 'bg-cyan-500/20 text-cyan-200 border-cyan-400/40',
    gradient: 'from-cyan-600/30 via-blue-500/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(6,182,212,0.25)]',
    accent: '#06b6d4',
  },
  Geo: {
    name: 'Geo',
    bg: 'bg-amber-950/40',
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    gradient: 'from-amber-600/30 via-yellow-600/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(245,158,11,0.25)]',
    accent: '#f59e0b',
  },
  Adaptive: {
    name: 'Adaptive',
    bg: 'bg-indigo-950/40',
    text: 'text-amber-300',
    border: 'border-amber-400/30',
    badge: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
    gradient: 'from-amber-600/30 via-indigo-600/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(245,158,11,0.25)]',
    accent: '#f59e0b',
  },
  None: {
    name: 'Unaligned',
    bg: 'bg-slate-900/60',
    text: 'text-slate-300',
    border: 'border-slate-700/50',
    badge: 'bg-slate-800 text-slate-300 border-slate-700',
    gradient: 'from-slate-700/30 via-slate-800/20 to-transparent',
    glow: 'shadow-[0_0_15px_rgba(148,163,184,0.25)]',
    accent: '#94a3b8',
  },
};

export const RARITY_STYLES: Record<Rarity, {
  stars: string;
  badge: string;
  cardBorder: string;
  bgGrad: string;
  label: string;
}> = {
  5: {
    stars: '★★★★★',
    badge: 'bg-amber-500/20 text-amber-300 border-amber-500/50',
    cardBorder: 'border-amber-500/30 hover:border-amber-400/60',
    bgGrad: 'bg-gradient-to-b from-amber-500/15 via-slate-900/90 to-slate-950',
    label: '5-Star Legendary',
  },
  4: {
    stars: '★★★★',
    badge: 'bg-purple-500/20 text-purple-300 border-purple-500/50',
    cardBorder: 'border-purple-500/30 hover:border-purple-400/60',
    bgGrad: 'bg-gradient-to-b from-purple-500/15 via-slate-900/90 to-slate-950',
    label: '4-Star Epic',
  },
  3: {
    stars: '★★★',
    badge: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
    cardBorder: 'border-blue-500/30 hover:border-blue-400/60',
    bgGrad: 'bg-gradient-to-b from-blue-500/15 via-slate-900/90 to-slate-950',
    label: '3-Star Rare',
  },
  2: {
    stars: '★★',
    badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50',
    cardBorder: 'border-emerald-500/30 hover:border-emerald-400/60',
    bgGrad: 'bg-gradient-to-b from-emerald-500/15 via-slate-900/90 to-slate-950',
    label: '2-Star Uncommon',
  },
  1: {
    stars: '★',
    badge: 'bg-slate-500/20 text-slate-300 border-slate-500/50',
    cardBorder: 'border-slate-600/30 hover:border-slate-500/60',
    bgGrad: 'bg-gradient-to-b from-slate-600/15 via-slate-900/90 to-slate-950',
    label: '1-Star Common',
  },
};

export const WEAPON_ICONS_LABEL: Record<WeaponCategory, string> = {
  Sword: 'Sword',
  Claymore: 'Claymore',
  Polearm: 'Polearm',
  Bow: 'Bow',
  Catalyst: 'Catalyst',
};
