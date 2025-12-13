/**
 * Portfolio Icon Mapping
 * Maps subsidiary slugs to their SVG icon source paths
 * Icons served from public/icons folder with outline variant as default
 */

export const portfolioIcons: Record<string, string> = {
  'trionfo-real-estate-group': '/icons/trionfo-real-estate/trionfo-real-estate-outline.svg',
  'hypnotic-lemons': '/icons/hypnotic-lemons/hypnotic-lemons-outline.svg',
  'obsidian-motors': '/icons/obsidian-motors/obsidian-motors-outline.svg',
  'terra-trionfo': '/icons/terra-trionfo/terra-trionfo-outline.svg',
  'trionfo-enterprise-development': '/icons/trionfo-enterprise-development/trionfo-enterprise-development-outline.svg',
  'trionfo-capital': '/icons/trionfo-capital/trionfo-capital-outline.svg',
};

/**
 * Get portfolio icon for a subsidiary by slug
 * Returns outline variant SVG path from public/icons folder
 */
export function getPortfolioIcon(slug: string): string {
  return portfolioIcons[slug] || '/icons/trionfo-enterprise-development/trionfo-enterprise-development-outline.svg';
}
