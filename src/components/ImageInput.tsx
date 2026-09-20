import React, { useState, useRef } from 'react';
import { Link, UploadCloud, X, Image as ImageIcon, Check } from 'lucide-react';

interface ImageInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  helperText?: string;
  aspectRatio?: 'square' | 'wide' | 'banner' | 'portrait';
  id?: string;
}

export const ImageInput: React.FC<ImageInputProps> = ({
  label,
  value,
  onChange,
  placeholder = 'https://... or upload a local image file',
  helperText,
  aspectRatio = 'square',
  id,
}) => {
  const [mode, setMode] = useState<'url' | 'upload'>('url');
  const [dragActive, setDragActive] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [fileMeta, setFileMeta] = useState<{ name: string; size: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const inputElementId = id || `img-input-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WebP, SVG, GIF).');
      return;
    }

    // Limit warning if file is huge (> 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File is larger than 5MB. For better archive performance, consider using a smaller image or a web URL.');
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPreviewError(false);
        setFileMeta({
          name: file.name,
          size: `${(file.size / 1024).toFixed(1)} KB`,
        });
        onChange(result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const isUploadedDataUrl = value && value.startsWith('data:');

  return (
    <div className="space-y-1.5" id={inputElementId}>
      {/* Header with Mode Switcher */}
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
          <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
          {label}
        </label>
        <div className="flex items-center rounded-lg bg-slate-900/90 p-0.5 border border-slate-800 text-[11px]">
          <button
            type="button"
            onClick={() => setMode('url')}
            className={`px-2 py-0.5 rounded-md font-medium transition-all flex items-center gap-1 ${
              mode === 'url'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Link className="w-3 h-3" />
            Image URL
          </button>
          <button
            type="button"
            onClick={() => setMode('upload')}
            className={`px-2 py-0.5 rounded-md font-medium transition-all flex items-center gap-1 ${
              mode === 'upload'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <UploadCloud className="w-3 h-3" />
            Upload File
          </button>
        </div>
      </div>

      {/* Input Mode: URL */}
      {mode === 'url' && (
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              value={value}
              onChange={(e) => {
                setPreviewError(false);
                setFileMeta(null);
                onChange(e.target.value);
              }}
              placeholder={placeholder}
              className="w-full rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
            {value && (
              <button
                type="button"
                onClick={() => {
                  onChange('');
                  setFileMeta(null);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-200"
                title="Clear image"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Input Mode: Upload */}
      {mode === 'upload' && (
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/svg+xml,image/gif"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFile(e.target.files[0]);
              }
            }}
          />
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer rounded-lg border-2 border-dashed p-4 text-center transition-all ${
              dragActive
                ? 'border-amber-400 bg-amber-500/10'
                : 'border-slate-700 hover:border-slate-500 bg-slate-900/50'
            }`}
          >
            <UploadCloud className="mx-auto h-6 w-6 text-slate-400 mb-1" />
            <p className="text-xs text-slate-200 font-medium">
              Click to select image or drag & drop file here
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Supports PNG, JPG, WebP, SVG, GIF (Converts to archive data)
            </p>
          </div>
        </div>
      )}

      {/* Image Preview Card */}
      {value && (
        <div className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/90 p-2 text-xs">
          <div
            className={`relative overflow-hidden rounded bg-slate-950 border border-slate-800 flex-shrink-0 flex items-center justify-center ${
              aspectRatio === 'square'
                ? 'w-12 h-12'
                : aspectRatio === 'portrait'
                ? 'w-12 h-16'
                : aspectRatio === 'wide'
                ? 'w-20 h-12'
                : 'w-24 h-12'
            }`}
          >
            {!previewError ? (
              <img
                src={value}
                alt="Preview"
                referrerPolicy="no-referrer"
                onError={() => setPreviewError(true)}
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="text-[10px] text-rose-400 text-center px-1">Invalid Image</span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 text-slate-200 font-medium truncate text-xs">
              <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span className="truncate">
                {fileMeta
                  ? fileMeta.name
                  : isUploadedDataUrl
                  ? 'Uploaded Image File (Base64)'
                  : 'Web Image URL Linked'}
              </span>
            </div>
            <div className="text-[11px] text-slate-500 truncate mt-0.5">
              {fileMeta
                ? `Size: ${fileMeta.size}`
                : isUploadedDataUrl
                ? 'Embedded in Archive'
                : value}
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              onChange('');
              setFileMeta(null);
            }}
            className="rounded p-1 text-slate-400 hover:bg-slate-800 hover:text-rose-400 transition-colors"
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {helperText && !value && (
        <p className="text-[11px] text-slate-500">{helperText}</p>
      )}
    </div>
  );
};
