/**
 * Central Contact Configuration
 * Single source of truth for all contact information
 */

export const CORPORATE_EMAIL = 'dylan@trionfoholdings.com';
export const CORPORATE_MAILTO = `mailto:${CORPORATE_EMAIL}`;

export const HQ_ADDRESS = {
  street: '1 Marina Park Drive',
  city: 'Boston',
  state: 'MA',
  zip: '02210',
  country: 'United States',
};

export const HQ_ADDRESS_LINES = [
  HQ_ADDRESS.street,
  `${HQ_ADDRESS.city}, ${HQ_ADDRESS.state} ${HQ_ADDRESS.zip}`,
  HQ_ADDRESS.country,
];

/**
 * Inquiry type templates with prefilled subject lines
 */
export const INQUIRY_TYPES = {
  general: {
    label: 'General Corporate Inquiry',
    subject: 'Corporate Inquiry — Trionfo Holding Co., Inc.',
  },
  banking: {
    label: 'Banking & Financial Institution Inquiry',
    subject: 'Banking / Financial Institution Inquiry — Trionfo Holding Co., Inc.',
  },
  partnership: {
    label: 'Partnership / Acquisition Discussion',
    subject: 'Partnership / Acquisition Discussion — Trionfo Holding Co., Inc.',
  },
  legal: {
    label: 'Legal / Compliance Inquiry',
    subject: 'Legal / Compliance Inquiry — Trionfo Holding Co., Inc.',
  },
};

/**
 * Generate mailto link with optional subject and body
 */
export function getMailtoLink(
  inquiryType?: keyof typeof INQUIRY_TYPES,
  body?: string
): string {
  const inquiry = inquiryType ? INQUIRY_TYPES[inquiryType] : INQUIRY_TYPES.general;
  const subject = encodeURIComponent(inquiry.subject);
  const encodedBody = body ? encodeURIComponent(body) : '';

  if (encodedBody) {
    return `${CORPORATE_MAILTO}?subject=${subject}&body=${encodedBody}`;
  }

  return `${CORPORATE_MAILTO}?subject=${subject}`;
}
