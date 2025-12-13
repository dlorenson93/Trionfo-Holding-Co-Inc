'use client';

import React from 'react';
import { CORPORATE_EMAIL, CORPORATE_MAILTO } from '@/config/contact';

interface EmailLinkProps {
  label?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * EmailLink Component
 * Reusable clickable email link with consistent styling
 */
export default function EmailLink({
  label,
  href = CORPORATE_MAILTO,
  className = 'text-trionfo-secondary hover:text-trionfo-primary break-all transition-colors',
  children,
}: EmailLinkProps) {
  // Use children if provided, otherwise use label, default to email
  const displayText = children || label || CORPORATE_EMAIL;

  return (
    <a href={href} className={className}>
      {displayText}
    </a>
  );
}
