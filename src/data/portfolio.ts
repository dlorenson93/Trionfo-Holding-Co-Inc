/**
 * Central Portfolio Data Model
 * Single source of truth for all Trionfo subsidiaries
 *
 * Logos are now referenced by logoId (from brand-manifest.json)
 * instead of hardcoded file paths
 */

export type SubsidiaryStatus = 'Active' | 'Development' | 'Pre-Launch' | 'Coming Soon';

export interface Subsidiary {
  name: string;
  slug: string;
  industry: string;
  status: SubsidiaryStatus;
  description: string;
  ownership: string;
  logoId: string; // Reference to brand-manifest.json entry
  website?: string;
}

export const subsidiaries: Subsidiary[] = [
  {
    name: 'Trionfo Real Estate Group LLC',
    slug: 'trionfo-real-estate-group',
    industry: 'Real Estate Development',
    status: 'Active',
    description:
      'Real estate development and property management across residential and commercial assets.',
    ownership: 'Wholly Owned Subsidiary of Trionfo Holding Co., Inc.',
    logoId: '',
  },
  {
    name: 'Hypnotic Lemons LLC',
    slug: 'hypnotic-lemons',
    industry: 'Consumer Products',
    status: 'Active',
    description:
      'Streetwear brand and consumer application developed in-house, providing direct-to-consumer access to both core product offerings and limited-release collections.',
    ownership: 'Wholly Owned Subsidiary of Trionfo Holding Co., Inc.',
    logoId: '',
  },
  {
    name: 'Obsidian Motors LLC',
    slug: 'obsidian-motors',
    industry: 'Automotive Services',
    status: 'Active',
    description:
      'Premium automotive services company focused on luxury vehicle access and experience-driven mobility offerings.',
    ownership: 'Wholly Owned Subsidiary of Trionfo Holding Co., Inc.',
    logoId: '',
  },
  {
    name: 'Terra Trionfo LLC',
    slug: 'terra-trionfo',
    industry: 'Food Systems & Marketplace',
    status: 'Active',
    description:
      'Food systems and marketplace development company focused on sustainability, responsible sourcing, and transparent producer-to-consumer supply chains.',
    ownership: 'Wholly Owned Subsidiary of Trionfo Holding Co., Inc.',
    logoId: '',
    website: 'https://terratrionfo.com',
  },
  {
    name: 'Trionfo Enterprise Development LLC',
    slug: 'trionfo-enterprise-development',
    industry: 'Business Services',
    status: 'Active',
    description:
      'Enterprise and business services supporting operational growth and strategic development.',
    ownership: 'Wholly Owned Subsidiary of Trionfo Holding Co., Inc.',
    logoId: '',
  },
  {
    name: 'Trionfo Capital LLC',
    slug: 'trionfo-capital',
    industry: 'Capital & Financial Services',
    status: 'Coming Soon',
    description:
      'Capital-focused entity under development to support strategic investment, financing initiatives, and internal capital structuring activities. Details to be announced.',
    ownership: 'Wholly Owned Subsidiary of Trionfo Holding Co., Inc.',
    logoId: '',
  },
];

/**
 * Get all subsidiaries
 */
export function getAllSubsidiaries(): Subsidiary[] {
  return subsidiaries;
}

/**
 * Get subsidiary by slug
 */
export function getSubsidiaryBySlug(slug: string): Subsidiary | undefined {
  return subsidiaries.find((sub) => sub.slug === slug);
}

/**
 * Get subsidiaries filtered by status
 */
export function getSubsidiariesByStatus(
  status: SubsidiaryStatus
): Subsidiary[] {
  return subsidiaries.filter((sub) => sub.status === status);
}

/**
 * Get unique industries
 */
export function getIndustries(): string[] {
  const industries = new Set(subsidiaries.map((sub) => sub.industry));
  return Array.from(industries).sort();
}
