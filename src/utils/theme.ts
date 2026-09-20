import { ThemeMode } from '../types';

export interface ThemeDefinition {
  id: ThemeMode;
  name: string;
  subtitle: string;
  accentColor: string;
  badge: string;
}

export const AVAILABLE_THEMES: ThemeDefinition[] = [
  {
    id: 'whitenight',
    name: 'Whitenight',
    subtitle: 'Light',
    accentColor: '#f59e0b',
    badge: '☀️ Light'
  },
  {
    id: 'evernight',
    name: 'Evernight',
    subtitle: 'Dark',
    accentColor: '#6366f1',
    badge: '🌙 Dark'
  }
];

const THEME_STORAGE_KEY = 'teyvat_archive_theme';

export function getSavedTheme(): ThemeMode {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'whitenight' || saved === 'archon-light') {
      return 'whitenight';
    }
    if (saved === 'evernight' || saved === 'celestial' || saved === 'fontaine' || saved === 'natlan' || saved === 'sumeru') {
      return 'evernight';
    }
    if (saved && AVAILABLE_THEMES.some(t => t.id === saved)) {
      return saved as ThemeMode;
    }
  } catch (e) {
    console.error('Error reading theme from localStorage', e);
  }
  return 'evernight';
}

export function applyTheme(theme: ThemeMode): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    // Toggle light/dark classes
    if (theme === 'whitenight') {
      root.classList.add('light-theme');
      root.classList.remove('dark-theme');
    } else {
      root.classList.add('dark-theme');
      root.classList.remove('light-theme');
    }
  } catch (e) {
    console.error('Error saving theme', e);
  }
}
