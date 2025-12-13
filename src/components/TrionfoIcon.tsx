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
 * Loads SVG files from public/icons folder with dynamic color inheritance
 * 
 * Usage:
 * <TrionfoIcon name="trionfo-capital" variant="outline" className="h-5 w-5" />
 * <TrionfoIcon name="hypnotic-lemons" variant="solid" title="Hypnotic Lemons LLC" />
 * <TrionfoIcon name="terra-trionfo" className="h-6 w-6 text-trionfo-accent" />
 */
export default function TrionfoIcon({
  name,
  variant = 'outline',
  className = '',
  title,
}: TrionfoIconProps) {
  const [svg, setSvg] = React.useState<string>('');

  React.useEffect(() => {
    // Build the path to the SVG file
    const path = `/icons/${name}/${name}-${variant}.svg`;
    
    // Fetch the SVG file
    fetch(path)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load: ${path}`);
        return res.text();
      })
      .then((content) => setSvg(content))
      .catch((err) => {
        console.warn(`TrionfoIcon: ${err.message}`);
        setSvg('');
      });
  }, [name, variant]);

  // Wrapper span for styling and accessibility
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={!title}
      title={title}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
