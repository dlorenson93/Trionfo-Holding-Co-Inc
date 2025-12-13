import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Trionfo Holding Co., Inc.',
    template: '%s | Trionfo Holding Co., Inc.',
  },
  description:
    'Trionfo Holding Co., Inc. is a professional holding company owning and operating multiple subsidiary businesses across diverse industries. Established in Massachusetts, headquartered in Boston.',
  keywords: [
    'holding company',
    'subsidiary',
    'parent company',
    'corporate',
    'portfolio',
    'Trionfo',
  ],
  metadataBase: new URL('https://trionfoholdings.com'),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://trionfoholdings.com',
    title: 'Trionfo Holding Co., Inc.',
    description:
      'Professional holding company with diverse subsidiary portfolio',
    siteName: 'Trionfo Holding Co., Inc.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trionfo Holding Co., Inc.',
    description: 'Professional holding company with diverse subsidiary portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    name: 'Trionfo Holding Co., Inc.',
    url: 'https://trionfoholdings.com',
    description: 'A professional holding company owning and operating multiple subsidiary businesses across diverse industries.',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Corporate Inquiry',
      email: 'dylan@trionfoholdings.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1 Marina Park Drive',
      addressLocality: 'Boston',
      addressRegion: 'MA',
      postalCode: '02210',
      addressCountry: 'US',
    },
    sameAs: [
      'https://www.linkedin.com/company/trionfo-holding',
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' font-weight='bold' fill='%230f172a'>T</text></svg>" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-trionfo-bg text-trionfo-secondary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
