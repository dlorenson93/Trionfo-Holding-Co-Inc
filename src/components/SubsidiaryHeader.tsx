'use client';

import React from 'react';
import type { Subsidiary } from '@/data/portfolio';
import TrionfoIcon from './TrionfoIcon';
import Logo from './Logo';

interface SubsidiaryHeaderProps {
  subsidiary: Subsidiary;
}

/**
 * Subsidiary Header
 * Standardized header for detail pages with SVG icon and subsidiary line
 * Primary identifier uses the institutional icon system
 * Optional logo display
 */
export default function SubsidiaryHeader({
  subsidiary,
}: SubsidiaryHeaderProps) {
  // Map slug to icon name
  const iconName = subsidiary.slug === 'trionfo-real-estate-group'
    ? 'trionfo-real-estate'
    : (subsidiary.slug as any);

  return (
    <div className="mb-8">
      {/* Icon Container */}
      <div className="mb-6 h-24 w-24 flex items-center justify-center bg-trionfo-bg rounded-lg p-4 border border-slate-200 text-trionfo-primary">
        <TrionfoIcon
          name={iconName}
          variant="outline"
          className="h-16 w-16"
          title={subsidiary.name}
        />
      </div>

      {/* Company Name and Subtitle */}
      <h1 className="text-4xl sm:text-5xl font-semibold text-trionfo-primary mb-2 tracking-tight">
        {subsidiary.name}
      </h1>
      <p className="text-sm text-trionfo-secondary/70">
        A wholly owned subsidiary of Trionfo Holding Co., Inc.
      </p>
    </div>
  );
}
