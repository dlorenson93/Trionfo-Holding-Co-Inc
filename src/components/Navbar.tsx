'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CORPORATE_MAILTO } from '@/config/contact';

/**
 * Navigation Bar
 * Responsive header with mobile menu
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={closeMenu}>
            <span className="text-xs sm:text-sm md:text-base font-semibold text-trionfo-primary whitespace-nowrap">
              Trionfo Holding Co., Inc.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-trionfo-secondary hover:text-trionfo-primary focus:outline-none transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3 space-y-1 border-t border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/about"
              className="block px-4 py-3 text-base text-trionfo-secondary hover:text-trionfo-primary hover:bg-slate-50 rounded transition-colors font-medium"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="block px-4 py-3 text-base text-trionfo-secondary hover:text-trionfo-primary hover:bg-slate-50 rounded transition-colors font-medium"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <a
              href={CORPORATE_MAILTO}
              className="block px-4 py-3 text-base text-trionfo-secondary hover:text-trionfo-primary hover:bg-slate-50 rounded transition-colors font-medium"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
