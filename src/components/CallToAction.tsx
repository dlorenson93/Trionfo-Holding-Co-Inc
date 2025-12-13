'use client';

import React from 'react';

interface CallToActionProps {
  title: string;
  description?: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

/**
 * Call To Action
 * Standalone CTA section
 */
export default function CallToAction({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CallToActionProps) {
  return (
    <section className="py-16 bg-white rounded-lg border border-slate-200">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-trionfo-primary mb-4 tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-trionfo-secondary mb-8">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={primaryCta.href}
            className="inline-block bg-trionfo-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {primaryCta.label}
          </a>
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-block bg-white text-trionfo-primary border-2 border-trionfo-primary px-8 py-4 rounded-lg font-semibold hover:bg-trionfo-primary hover:text-white transition-all duration-300"
            >
              {secondaryCta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
