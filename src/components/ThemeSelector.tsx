import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Check, ChevronDown } from 'lucide-react';
import { ThemeMode } from '../types';
import { AVAILABLE_THEMES, ThemeDefinition } from '../utils/theme';

interface ThemeSelectorProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({
  currentTheme,
  onThemeChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const active = AVAILABLE_THEMES.find(t => t.id === currentTheme) || AVAILABLE_THEMES[1]; // default Evernight

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = currentTheme === 'whitenight' ? 'evernight' : 'whitenight';
    onThemeChange(nextTheme);
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <div className="flex items-center rounded-lg border border-slate-700 bg-slate-900/90 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={toggleTheme}
          title={`Switch to ${currentTheme === 'whitenight' ? 'Evernight (Dark)' : 'Whitenight (Light)'}`}
          className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:border-amber-500/50 hover:bg-slate-800 transition-all"
        >
          {currentTheme === 'whitenight' ? (
            <Sun className="w-3.5 h-3.5 text-amber-500" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-indigo-400" />
          )}
          <span className="hidden sm:inline font-medium">{active.name}</span>
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          title="Choose Theme"
          className="px-1.5 py-1.5 border-l border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
        >
          <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-56 rounded-xl border border-slate-700 bg-slate-900/95 backdrop-blur-md shadow-2xl p-1.5 z-50 text-xs animate-in fade-in zoom-in-95 duration-100">
          <div className="px-2.5 py-1.5 text-[11px] font-semibold text-slate-400 border-b border-slate-800 flex items-center justify-between">
            <span>Theme Cycle</span>
            <span className="text-[10px] text-amber-400 font-mono">2 Themes</span>
          </div>

          <div className="py-1 space-y-1">
            {AVAILABLE_THEMES.map((theme: ThemeDefinition) => {
              const isSelected = theme.id === currentTheme;
              const Icon = theme.id === 'whitenight' ? Sun : Moon;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => {
                    onThemeChange(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-left transition-colors ${
                    isSelected
                      ? 'bg-amber-500/15 text-amber-300 font-semibold border border-amber-500/30'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 flex-shrink-0 ${theme.id === 'whitenight' ? 'text-amber-500' : 'text-indigo-400'}`} />
                    <div>
                      <div className="leading-tight flex items-center gap-1.5">
                        <span>{theme.name}</span>
                        <span className="text-[10px] text-slate-400">({theme.badge.split(' ')[1]})</span>
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight">
                        {theme.subtitle}
                      </div>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
