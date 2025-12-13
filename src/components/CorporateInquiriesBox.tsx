'use client';

import React from 'react';
import { getMailtoLink } from '@/config/contact';

interface CorporateInquiriesBoxProps {
  subsidiaryName?: string;
}

/**
 * Corporate Inquiries Box
 * Standardized inquiry component for all subsidiary detail pages
 * Routes to corporate email with contextual subject
 */
export default function CorporateInquiriesBox({
  subsidiaryName,
}: CorporateInquiriesBoxProps) {
  const mailtoLink = getMailtoLink('partnership');

  return (
    <div className="bg-trionfo-primary/3 rounded-lg p-6 border border-trionfo-primary/10">
      <h3 className="text-sm font-semibold text-trionfo-primary mb-3 tracking-wide uppercase">
        Corporate Inquiries
      </h3>
      <p className="text-trionfo-secondary text-sm mb-4 leading-relaxed">
        {subsidiaryName
          ? `For inquiries related to ${subsidiaryName} or partnership opportunities, please contact our corporate office.`
          : 'For partnership opportunities or corporate inquiries, please reach out to our office.'}
      </p>
      <a
        href={mailtoLink}
        className="inline-block bg-trionfo-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        Corporate Inquiries
      </a>
    </div>
  );
}
