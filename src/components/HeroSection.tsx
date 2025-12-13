'use client';

import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctas?: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
}

/**
 * Hero Section
 * Establishing legitimacy immediately
 */
export default function HeroSection({
  title,
  subtitle,
  ctas = [],
}: HeroSectionProps) {
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-trionfo-primary mb-6 leading-tight tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-xl sm:text-2xl text-trionfo-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTAs */}
          {ctas.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {ctas.map((cta, idx) => (
                <a
                  key={idx}
                  href={cta.href}
                  className={`inline-flex px-8 py-4 rounded-lg text-base font-semibold transition-all duration-300 ${
                    cta.primary
                      ? 'bg-trionfo-primary text-white hover:shadow-xl hover:scale-105'
                      : 'border-2 border-trionfo-primary text-trionfo-primary bg-white hover:bg-trionfo-primary hover:text-white hover:shadow-lg'
                  }`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
