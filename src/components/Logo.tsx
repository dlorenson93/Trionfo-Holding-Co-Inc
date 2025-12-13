'use client';

import React, { useMemo } from 'react';
import brandManifest from '@/data/brand-manifest.json';

interface LogoProps {
  /** Logo ID (kebab-case, must exist in brand-manifest.json) */
  id: string;
  /** Alt text (defaults to manifest entry or generated from id) */
  alt?: string;
  /** Container height (e.g., 'h-7', 'h-12') */
  className?: string;
  /** Maximum width constraint */
  maxWidth?: number;
  /** Show fallback text if image missing */
  showFallback?: boolean;
}

/**
 * Logo Component
 *
 * Renders logos from brand-manifest.json with consistent styling,
 * automatic fallback to text wordmark, and no image distortion.
 *
 * Usage:
 * <Logo id="hypnotic-lemons" className="h-12" />
 * <Logo id="terra-trionfo" alt="Terra Trionfo Seal" className="h-16" />
 */
export default function Logo({
  id,
  alt,
  className = 'h-12',
  maxWidth = 400,
  showFallback = true,
}: LogoProps) {
  // Find asset in manifest
  const asset = useMemo(() => {
    return (brandManifest.assets as any[]).find((a: any) => a.id === id);
  }, [id]);

  if (!asset) {
    // Logo not found in manifest
    if (showFallback) {
      return (
        <div className={`${className} flex items-center justify-center bg-slate-100 rounded text-xs font-semibold text-slate-500 px-2`}>
          {id.replace(/-/g, ' ')}
        </div>
      );
    }
    return null;
  }

  const altText = alt || asset.alt || id;

  return (
    <picture>
      {/* SVG version (preferred for scalability) */}
      {asset.format === 'SVG' && (
        <source srcSet={asset.src} type="image/svg+xml" />
      )}

      {/* Raster image fallback */}
      <img
        src={asset.src}
        alt={altText}
        className={`${className} object-contain`}
        style={{
          maxWidth: `${maxWidth}px`,
          height: 'auto',
        }}
        loading="lazy"
      />
    </picture>
  );
}

/**
 * Logo Container Wrapper
 *
 * Provides consistent padding and alignment for logo placement
 * Use this when you need fixed dimensions with guaranteed alignment
 */
interface LogoContainerProps {
  children: React.ReactNode;
  /** Height of container (default: h-12) */
  height?: string;
  /** Padding around logo (default: p-2) */
  padding?: string;
  /** Background color (default: bg-white) */
  bgColor?: string;
  /** Border styling (optional) */
  border?: boolean;
}

export function LogoContainer({
  children,
  height = 'h-12',
  padding = 'p-2',
  bgColor = 'bg-white',
  border = false,
}: LogoContainerProps) {
  return (
    <div
      className={`${height} ${padding} ${bgColor} ${border ? 'border border-slate-200' : ''} rounded flex items-center justify-center`}
      style={{
        minWidth: '100%',
      }}
    >
      {children}
    </div>
  );
}
