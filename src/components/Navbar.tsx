'use client';

import React from 'react';
import Link from 'next/link';
import { CORPORATE_MAILTO } from '@/config/contact';
import Logo from './Logo';

/**
 * Navigation Bar
 * Parent company logo, minimal navigation links
 */
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="h-8">
              <span className="text-lg font-semibold text-trionfo-primary">
                Trionfo Holding Co., Inc.
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link
              href="/about"
              className="text-sm text-trionfo-secondary hover:text-trionfo-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-sm text-trionfo-secondary hover:text-trionfo-primary transition-colors"
            >
              Portfolio
            </Link>
            <a
              href={CORPORATE_MAILTO}
              className="text-sm text-trionfo-secondary hover:text-trionfo-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
