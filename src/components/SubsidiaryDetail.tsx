'use client';

import React from 'react';
import type { Subsidiary } from '@/data/portfolio';
import SubsidiaryHeader from '@/components/SubsidiaryHeader';
import MetadataPanel from '@/components/MetadataPanel';
import CorporateInquiriesBox from '@/components/CorporateInquiriesBox';
import Logo from '@/components/Logo';

interface SubsidiaryDetailProps {
  subsidiary: Subsidiary;
}

/**
 * Subsidiary Detail
 * Institutional detail view for individual subsidiary
 * Governed by Trionfo Holding Co., Inc. brand system
 */
export default function SubsidiaryDetail({
  subsidiary,
}: SubsidiaryDetailProps) {
  return (
    <article>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Left Column: Header + Metadata */}
        <div className="lg:col-span-1">
          {/* Header with Icon */}
          <SubsidiaryHeader subsidiary={subsidiary} />

          {/* Logo (Secondary) - If available */}
          {subsidiary.logoId && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-xs text-trionfo-secondary/70 uppercase font-semibold mb-4 tracking-wide">
                Brand Identity
              </p>
              <div className="bg-trionfo-bg rounded-lg p-4 flex items-center justify-center h-40 border border-slate-200">
                <Logo
                  id={subsidiary.logoId}
                  alt={subsidiary.name}
                  className="h-24"
                  maxWidth={200}
                  showFallback={false}
                />
              </div>
            </div>
          )}

          {/* Metadata Panel */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <MetadataPanel
              status={subsidiary.status}
              industry={subsidiary.industry}
            />
          </div>

          {/* Website Link */}
          {subsidiary.website && (
            <div className="mt-8">
              <p className="text-xs text-trionfo-secondary/70 uppercase font-semibold mb-2 tracking-wide">
                Website
              </p>
              <a
                href={subsidiary.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-trionfo-secondary hover:text-trionfo-primary break-all text-sm transition-colors"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>

        {/* Right Column: Content */}
        <div className="lg:col-span-3">
          {/* Overview Section */}
          <section className="mb-12">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-grow bg-gradient-to-r from-trionfo-primary/20 to-transparent"></div>
              <h2 className="text-lg font-semibold text-trionfo-primary tracking-tight">
                Overview
              </h2>
            </div>
            <p className="text-trionfo-secondary leading-relaxed text-base">
              {subsidiary.description}
            </p>
          </section>

          {/* Ownership Section */}
          <section className="mb-12 py-8 bg-trionfo-primary/3 rounded-lg px-6 border border-trionfo-primary/10">
            <h2 className="text-lg font-semibold text-trionfo-primary mb-4 tracking-tight">
              Ownership Structure
            </h2>
            <p className="text-trionfo-secondary leading-relaxed">
              {subsidiary.ownership}
            </p>
          </section>

          {/* Corporate Inquiries Section */}
          <section>
            <CorporateInquiriesBox subsidiaryName={subsidiary.name} />
          </section>
        </div>
      </div>
    </article>
  );
}
