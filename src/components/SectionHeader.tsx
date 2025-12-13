'use client';

import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  centered?: boolean;
}

/**
 * Section Header
 * Consistent section introduction
 */
export default function SectionHeader({
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-8 ${centered ? 'text-center' : ''}`}
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-trionfo-primary mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-trionfo-secondary ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
}
