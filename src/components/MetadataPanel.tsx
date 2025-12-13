'use client';

import React from 'react';
import type { SubsidiaryStatus } from '@/data/portfolio';

interface MetadataPanelProps {
  status: SubsidiaryStatus;
  industry: string;
}

/**
 * Metadata Panel
 * Unified display of Status and Industry
 * Grouped for scanability and visual consistency
 */
export default function MetadataPanel({
  status,
  industry,
}: MetadataPanelProps) {
  const statusColors: Record<SubsidiaryStatus, string> = {
    Active: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Development: 'bg-blue-50 text-blue-700 border-blue-200',
    'Pre-Launch': 'bg-amber-50 text-amber-700 border-amber-200',
    'Coming Soon': 'bg-slate-100 text-slate-600 border-slate-300',
  };

  return (
    <div className="space-y-6">
      {/* Status */}
      <div>
        <p className="text-xs text-trionfo-secondary/70 uppercase font-semibold mb-2 tracking-wide">
          Status
        </p>
        <span
          className={`inline-block px-3 py-1 rounded text-xs font-semibold border ${
            statusColors[status]
          }`}
        >
          {status}
        </span>
      </div>

      {/* Industry */}
      <div>
        <p className="text-xs text-trionfo-secondary/70 uppercase font-semibold mb-2 tracking-wide">
          Industry
        </p>
        <p className="text-trionfo-secondary font-medium text-sm">
          {industry}
        </p>
      </div>
    </div>
  );
}
