'use client';

import React from 'react';

type IconName = 
  | 'trionfo-real-estate'
  | 'trionfo-capital'
  | 'hypnotic-lemons'
  | 'obsidian-motors'
  | 'terra-trionfo'
  | 'trionfo-enterprise-development';

type IconVariant = 'outline' | 'solid';

interface TrionfoIconProps {
  name: IconName;
  variant?: IconVariant;
  className?: string;
  title?: string;
}

/**
 * TrionfoIcon
 * Reusable SVG icon component for all subsidiary brands
 * Uses img tag for reliable rendering across all devices
 */
export default function TrionfoIcon({
  name,
  variant = 'outline',
  className = '',
  title,
}: TrionfoIconProps) {
  const iconPath = `/icons/${name}/${name}-${variant}.svg`;

  return (
    <img
      src={iconPath}
      alt={title || name}
      className={`inline-block ${className}`}
      role={title ? 'img' : undefined}
      title={title}
      loading="lazy"
      style={{
        color: 'currentColor',
      }}
    />
  );
}
