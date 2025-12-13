import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import PortfolioGrid from '@/components/PortfolioGrid';
import { getAllSubsidiaries } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio | Trionfo Holding Co., Inc.',
  description:
    'View our complete portfolio of subsidiary businesses across multiple industries.',
  openGraph: {
    title: 'Portfolio | Trionfo Holding Co., Inc.',
    description: 'Diverse portfolio of owned and operated subsidiary businesses',
    url: 'https://trionfoholdings.com/portfolio',
    type: 'website',
  },
};

export default function PortfolioPage() {
  const subsidiaries = getAllSubsidiaries();

  return (
    <main>
      {/* Page Header */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-trionfo-primary tracking-tight">
            Portfolio
          </h1>
        </div>
      </section>

      {/* Portfolio Introduction */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-trionfo-accent to-transparent opacity-40"></div>
            <span className="text-xs uppercase tracking-widest text-trionfo-accent font-semibold">Subsidiaries</span>
          </div>

          <SectionHeader
            title="Our Subsidiary Businesses"
            description="The following companies are owned and operated by Trionfo Holding Co., Inc. Each subsidiary maintains operational autonomy while benefiting from parent company oversight, capital access, and strategic guidance."
            centered={false}
          />

          <div className="mt-12">
            <PortfolioGrid subsidiaries={subsidiaries} filterable={true} />
          </div>
        </div>
      </section>

      {/* Ownership Statement */}
      <section className="py-16 bg-trionfo-bg border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-b border-slate-200 py-6">
            <p className="text-sm text-trionfo-secondary/80">
              All companies listed above are wholly owned subsidiaries of Trionfo
              Holding Co., Inc. Each operates independently within their respective
              industries while maintaining governance alignment with parent company
              standards and objectives.
            </p>
            <p className="text-xs text-trionfo-secondary/60 whitespace-nowrap">
              Last updated: December 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
