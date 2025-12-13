'use client';

import React, { useState } from 'react';
import type { Subsidiary } from '@/data/portfolio';
import SubsidiaryCard from './SubsidiaryCard';
import { getIndustries } from '@/data/portfolio';

interface PortfolioGridProps {
  subsidiaries: Subsidiary[];
  filterable?: boolean;
}

/**
 * Portfolio Grid
 * Display subsidiaries with optional filtering by industry
 */
export default function PortfolioGrid({
  subsidiaries,
  filterable = true,
}: PortfolioGridProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const industries = getIndustries();

  const filtered = selectedIndustry
    ? subsidiaries.filter((sub) => sub.industry === selectedIndustry)
    : subsidiaries;

  return (
    <div>
      {/* Filter Buttons */}
      {filterable && (
        <div className="mb-12 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedIndustry(null)}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              selectedIndustry === null
                ? 'bg-trionfo-primary text-white shadow-md'
                : 'border-2 border-trionfo-primary text-trionfo-primary bg-white hover:bg-trionfo-primary hover:text-white hover:shadow-md'
            }`}
          >
            All Industries
          </button>
          {industries.map((industry: string) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                selectedIndustry === industry
                  ? 'bg-trionfo-primary text-white shadow-md'
                  : 'border-2 border-trionfo-primary text-trionfo-primary bg-white hover:bg-trionfo-primary hover:text-white hover:shadow-md'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((subsidiary) => (
          <SubsidiaryCard
            key={subsidiary.slug}
            subsidiary={subsidiary}
          />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-trionfo-secondary">
            No subsidiaries found in this category.
          </p>
        </div>
      )}
    </div>
  );
}
