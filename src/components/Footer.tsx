'use client';

import React from 'react';
import Link from 'next/link';
import { HQ_ADDRESS_LINES, CORPORATE_MAILTO } from '@/config/contact';

/**
 * Footer
 * Professional footer with company info, address, and corporate inquiry CTA
 * Clean design: no email addresses displayed, single clear action button
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Left: Company Identity */}
          <div>
            <h3 className="text-sm font-semibold text-trionfo-primary mb-6 tracking-wide uppercase">
              Trionfo Holding Co., Inc.
            </h3>
            <div className="space-y-5">
              <p className="text-xs font-medium text-trionfo-secondary/70 uppercase tracking-wide">
                Status
              </p>
              <p className="text-sm text-trionfo-secondary leading-relaxed">
                Privately Held
              </p>
            </div>
          </div>

          {/* Center: Physical Address */}
          <div>
            <h3 className="text-sm font-semibold text-trionfo-primary mb-6 tracking-wide uppercase">
              Headquarters
            </h3>
            <address className="text-sm text-trionfo-secondary/80 not-italic leading-relaxed space-y-1">
              {HQ_ADDRESS_LINES.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </address>
          </div>

          {/* Right: Primary CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-trionfo-primary mb-6 tracking-wide uppercase">
                Get in Touch
              </h3>
              <p className="text-sm text-trionfo-secondary/80 mb-6 leading-relaxed max-w-xs">
                For corporate inquiries, partnerships, or investor relations.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 w-full md:w-fit">
              <a
                href={CORPORATE_MAILTO}
                className="inline-flex items-center justify-center bg-trionfo-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-trionfo-primary/90 hover:shadow-lg transition-all duration-300 w-full md:w-fit"
              >
                Corporate Inquiries
              </a>
              {/* Twitter / X Link */}
              <a
                href="https://twitter.com/TrionfoHoldings"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-trionfo-secondary/60 hover:text-trionfo-primary transition-colors duration-200"
                aria-label="Trionfo Holding Co., Inc. on Twitter"
                title="Follow Trionfo on Twitter"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.308l7.732-8.835L2.882 2.25h6.6l4.888 6.469L18.244 2.25zM17.41 20.452h1.414L6.777 3.75H5.209L17.41 20.452z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Quick Navigation */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm order-2 md:order-1">
            <Link
              href="/"
              className="text-trionfo-secondary/70 hover:text-trionfo-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-trionfo-secondary/70 hover:text-trionfo-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-trionfo-secondary/70 hover:text-trionfo-primary transition-colors duration-200"
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className="text-trionfo-secondary/70 hover:text-trionfo-primary transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/legal"
              className="text-trionfo-secondary/70 hover:text-trionfo-primary transition-colors duration-200"
            >
              Legal
            </Link>
          </nav>

          {/* Legal */}
          <div className="text-xs text-trionfo-secondary/60 space-y-2 order-3 md:order-2">
            <p>© {currentYear} Trionfo Holding Co., Inc. All rights reserved.</p>
            <p className="max-w-md">
              Information provided is for general informational purposes and is subject to change without notice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
