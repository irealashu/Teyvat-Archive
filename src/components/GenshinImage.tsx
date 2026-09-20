import { useState } from 'react';
import { ElementType, WeaponCategory } from '../types';
import { ELEMENT_COLORS } from '../utils/elementStyles';
import { Shield, Sparkles, Sword } from 'lucide-react';

interface GenshinImageProps {
  src: string;
  alt: string;
  className?: string;
  element?: ElementType;
  weaponType?: WeaponCategory;
  fallbackText?: string;
}

export function GenshinImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  element,
  fallbackText,
}: GenshinImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const elemConfig = element ? ELEMENT_COLORS[element] : null;

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center relative overflow-hidden select-none ${
          elemConfig ? elemConfig.bg : 'bg-slate-800'
        } ${className}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
        <div className="z-10 flex flex-col items-center p-2 text-center">
          {element ? (
            <span className={`text-xl font-bold font-display ${elemConfig?.text}`}>
              {element}
            </span>
          ) : (
            <Sparkles className="w-6 h-6 text-amber-400 mb-1 opacity-80" />
          )}
          <span className="text-xs font-medium text-slate-300 line-clamp-1 max-w-[90%] mt-1">
            {fallbackText || alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-900/60 ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 animate-pulse">
          <div className="w-5 h-5 border-2 border-amber-400/40 border-t-amber-400 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
