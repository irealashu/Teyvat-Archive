import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon, BookOpen } from 'lucide-react';

interface GenshinTextRendererProps {
  text: string;
  fallbackIconUrl?: string;
  className?: string;
}

interface ImageBlockProps {
  imageName: string;
  fallbackIconUrl?: string;
}

function ImageBlock({ imageName, fallbackIconUrl }: ImageBlockProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Clean human-readable title from tag name e.g. "UI_ReadPic_MoonNightBox" -> "Moon Night Box"
  const displayName = imageName
    .replace(/^UI_ReadPic_/i, '')
    .replace(/^UI_Read_/i, '')
    .replace(/^UI_ItemIcon_/i, '')
    .replace(/_/g, ' ')
    .trim();

  const imageUrl = `https://gi.yatta.moe/assets/UI/${imageName}.png`;

  return (
    <div className="my-6 flex flex-col items-center justify-center p-4 rounded-2xl border border-amber-500/30 bg-slate-900/80 shadow-xl backdrop-blur-sm max-w-lg mx-auto">
      {!hasError ? (
        <div className="relative w-full flex flex-col items-center">
          {!isLoaded && (
            <div className="h-44 w-full flex items-center justify-center bg-slate-950/60 rounded-xl animate-pulse border border-slate-800">
              <ImageIcon className="w-8 h-8 text-amber-400/50 animate-bounce" />
            </div>
          )}
          <img
            src={imageUrl}
            alt={displayName}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`max-h-72 object-contain rounded-xl border border-slate-800 shadow-md transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0 h-0'
            }`}
          />
          {isLoaded && (
            <div className="mt-2 text-center">
              <span className="text-[11px] font-mono tracking-widest text-amber-300/80 uppercase flex items-center justify-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Illustration: {displayName}
              </span>
            </div>
          )}
        </div>
      ) : (
        /* Fallback Plate for unhosted/internal Genshin read images */
        <div className="w-full flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-slate-950/90 border border-amber-500/20 text-center sm:text-left">
          <div className="relative flex-shrink-0 w-16 h-16 rounded-xl bg-slate-900 border border-slate-800 p-2 flex items-center justify-center shadow">
            {fallbackIconUrl ? (
              <img
                src={fallbackIconUrl}
                alt={displayName}
                className="w-12 h-12 object-contain filter drop-shadow"
              />
            ) : (
              <BookOpen className="w-8 h-8 text-amber-400" />
            )}
            <div className="absolute -top-1 -right-1 bg-amber-500 rounded-full p-0.5">
              <Sparkles className="w-3 h-3 text-slate-950" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <span>✦ Archive Plate: {displayName} ✦</span>
            </div>
            <p className="text-[11px] text-slate-400 font-sans">
              Special illuminated artifact plate preserved in Teyvat literature.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function adjustColorForLightTheme(hex: string): string {
  if (!hex || !hex.startsWith('#')) return hex;
  const isLightTheme = typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'whitenight';
  if (!isLightTheme) return hex;

  let cleanHex = hex.substring(1);
  if (cleanHex.length === 3) {
    cleanHex = cleanHex.split('').map((c) => c + c).join('');
  }
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 0;

  // Calculate relative luminance (Y)
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

  // If the color is too bright for a white background, scale down (darken)
  if (luminance > 120) {
    const factor = 0.45; // scale down by 55%
    const newR = Math.round(r * factor);
    const newG = Math.round(g * factor);
    const newB = Math.round(b * factor);
    
    const hexR = newR.toString(16).padStart(2, '0');
    const hexG = newG.toString(16).padStart(2, '0');
    const hexB = newB.toString(16).padStart(2, '0');
    return `#${hexR}${hexG}${hexB}`;
  }
  return hex;
}

/**
 * Parses inline Genshin text colors <color=#HEX>text</color>
 */
function parseColorTags(input: string): React.ReactNode[] {
  // Regex matches <color=#HEX>content</color> or <color=red>content</color>
  const parts: React.ReactNode[] = [];
  const colorRegex = /<color=(#[a-fA-F0-9]{3,8}|[a-zA-Z]+)>(.*?)<\/color>/gs;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = colorRegex.exec(input)) !== null) {
    if (match.index > lastIndex) {
      parts.push(input.substring(lastIndex, match.index));
    }

    const color = match[1];
    const content = match[2];

    const adjustedColor = color.startsWith('#') ? adjustColorForLightTheme(color) : undefined;

    parts.push(
      <span
        key={`color-${match.index}`}
        style={{ color: adjustedColor }}
        className={!color.startsWith('#') ? 'text-amber-700 font-semibold dark:text-amber-300' : 'font-semibold'}
      >
        {parseColorTags(content)}
      </span>
    );

    lastIndex = colorRegex.lastIndex;
  }

  if (lastIndex < input.length) {
    parts.push(input.substring(lastIndex));
  }

  return parts;
}

export const GenshinTextRenderer: React.FC<GenshinTextRendererProps> = ({
  text,
  fallbackIconUrl,
  className = '',
}) => {
  if (!text) return null;

  // 1. Normalize placeholders
  let cleaned = text
    .replace(/\r\n/g, '\n')
    .replace(/\\n/g, '\n')
    .replace(/\{NICKNAME\}/g, 'Traveler')
    .replace(/\{PLAYERAVATAR[^\}]*\}/g, 'Traveler')
    .replace(/\{M#[^\}]*\}/g, 'Traveler')
    .replace(/\{F#[^\}]*\}/g, 'Traveler')
    .replace(/\{LINK#[^\}]*\}/g, '')
    .replace(/\{RUBY#[^\}]*\}/g, '');

  // 2. Split by <image name=.../> tags
  // Matches <image name=UI_ReadPic_MoonNightBox/> or <image name="UI_ReadPic_MoonNightBox" />
  const imageTagRegex = /<image\s+name=["']?([a-zA-Z0-9_]+)["']?\s*\/?>/gi;

  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  let blockIdx = 0;

  while ((match = imageTagRegex.exec(cleaned)) !== null) {
    // Add text before image
    if (match.index > lastIndex) {
      const textChunk = cleaned.substring(lastIndex, match.index);
      elements.push(
        renderTextParagraphs(textChunk, `text-${blockIdx++}`)
      );
    }

    // Add ImageBlock
    const imageName = match[1];
    elements.push(
      <ImageBlock
        key={`img-${match.index}-${blockIdx++}`}
        imageName={imageName}
        fallbackIconUrl={fallbackIconUrl}
      />
    );

    lastIndex = imageTagRegex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < cleaned.length) {
    const textChunk = cleaned.substring(lastIndex);
    elements.push(
      renderTextParagraphs(textChunk, `text-${blockIdx++}`)
    );
  }

  return <div className={`space-y-4 font-serif ${className}`}>{elements}</div>;
};

function renderTextParagraphs(textChunk: string, keyPrefix: string): React.ReactNode {
  const paragraphs = textChunk
    .split('\n')
    .filter((p) => p.trim().length > 0);

  return (
    <React.Fragment key={keyPrefix}>
      {paragraphs.map((para, idx) => {
        // Strip any remaining stray unparsed tags
        const sanitized = para.replace(/<i[^>]*>/gi, '').replace(/<\/i>/gi, '');
        return (
          <p key={`${keyPrefix}-p-${idx}`} className="leading-7 tracking-wide text-slate-200">
            {parseColorTags(sanitized)}
          </p>
        );
      })}
    </React.Fragment>
  );
}
