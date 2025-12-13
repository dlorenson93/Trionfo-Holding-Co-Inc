import { MetadataRoute } from 'next';
import { getAllSubsidiaries } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const subsidiaries = getAllSubsidiaries();
  const baseUrl = 'https://trionfoholdings.com';
  const lastModified = new Date();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
  ];

  // Dynamic subsidiary pages
  const subsidiaryPages = subsidiaries.map((sub) => ({
    url: `${baseUrl}/portfolio/${sub.slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...subsidiaryPages];
}
