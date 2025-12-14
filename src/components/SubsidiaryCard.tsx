'use client';

import React from 'react';
import Link from 'next/link';
import type { Subsidiary } from '@/data/portfolio';
import TrionfoIcon from './TrionfoIcon';

interface SubsidiaryCardProps {
  subsidiary: Subsidiary;
}

/**
 * Subsidiary Card
 * 
 * Institutional portfolio card with SVG icon mark.
 * Uses TrionfoIcon component for cohesive visual system.
 */
export default function SubsidiaryCard({
  subsidiary,
}: SubsidiaryCardProps) {
  const statusColors: Record<string, string> = {
    Active: 'bg-yellow-50 text-trionfo-accent border-yellow-200',
    Development: 'bg-blue-50 text-blue-700 border-blue-200',
    'Pre-Launch': 'bg-amber-50 text-amber-700 border-amber-200',
    'Coming Soon': 'bg-slate-100 text-slate-600 border-slate-300',
  };

  // Map slug to icon name
  const iconName = subsidiary.slug === 'trionfo-real-estate-group' 
    ? 'trionfo-real-estate' 
    : (subsidiary.slug as any);

  return (
    <Link href={`/portfolio/${subsidiary.slug}`}>
      <div className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-xl hover:border-trionfo-accent/50 transition-all duration-300 h-full flex flex-col group cursor-pointer">
        {/* Icon Container - SVG institutional mark */}
        <div className="mb-6 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-trionfo-primary">
          <TrionfoIcon
            name={iconName}
            variant="outline"
            className="h-10 w-10"
            title={subsidiary.name}
          />
        </div>

        {/* Company Name */}
        <h3 className="text-lg font-semibold text-trionfo-primary mb-1 tracking-tight group-hover:text-trionfo-accent transition-colors duration-300">
          {subsidiary.name}
        </h3>

        {/* Industry Descriptor */}
        <p className="text-sm text-trionfo-secondary font-medium mb-3">
          {subsidiary.industry}
        </p>

        {/* Status Badge */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded text-xs font-semibold border ${
              statusColors[subsidiary.status]
            }`}
          >
            {subsidiary.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-trionfo-secondary mb-4 flex-grow leading-relaxed">
          {subsidiary.description}
        </p>

        {/* Website Link - Conditional */}
        {subsidiary.website && (
          <div className="mb-4 pb-4 border-t border-slate-100">
            <a
              href={subsidiary.website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-trionfo-secondary hover:text-trionfo-primary transition-colors duration-300 inline-flex items-center gap-2 py-2 px-0 hover:pl-1"
            >
              <span>Visit Website</span>
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}

        {/* Ownership - Footer */}
        <div className="text-xs text-trionfo-secondary/70 border-t border-slate-200 pt-3 mt-4">
          {subsidiary.ownership}
        </div>
      </div>
    </Link>
  );
}
