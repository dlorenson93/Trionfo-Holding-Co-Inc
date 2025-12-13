import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import SectionHeader from '@/components/SectionHeader';
import PortfolioGrid from '@/components/PortfolioGrid';
import CallToAction from '@/components/CallToAction';
import { getAllSubsidiaries } from '@/data/portfolio';
import { getMailtoLink } from '@/config/contact';

export const metadata: Metadata = {
  title: 'Trionfo Holding Co., Inc. | Parent Company',
  description:
    'Trionfo Holding Co., Inc. is a parent holding company owning and operating multiple subsidiary businesses across diverse industries.',
  openGraph: {
    title: 'Trionfo Holding Co., Inc.',
    description:
      'Parent holding company with multiple subsidiary operations',
    url: 'https://trionfoholdings.com',
    type: 'website',
  },
};

export default function Home() {
  const subsidiaries = getAllSubsidiaries();

  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title="Trionfo Holding Co., Inc."
        subtitle="A privately held parent company owning and overseeing a diversified portfolio of operating businesses."
        ctas={[
          { label: 'View Portfolio', href: '/portfolio', primary: true },
          { label: 'Corporate Inquiries', href: getMailtoLink('general') },
        ]}
      />

      {/* Company Overview */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-trionfo-accent to-transparent opacity-40"></div>
            <span className="text-xs uppercase tracking-widest text-trionfo-accent font-semibold">Company Overview</span>
          </div>

          <SectionHeader
            title="Company Overview"
            description="An established platform for long-term ownership and value creation."
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Incorporation */}
            <div className="bg-trionfo-bg rounded-lg p-8 border border-slate-200 hover:border-trionfo-accent/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="text-sm font-semibold text-trionfo-primary uppercase mb-4 tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-trionfo-accent"></span>
                Incorporation
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                Incorporated in Massachusetts, organized as a parent holding company
              </p>
            </div>

            {/* Headquarters */}
            <div className="bg-trionfo-bg rounded-lg p-8 border border-slate-200 hover:border-trionfo-accent/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="text-sm font-semibold text-trionfo-primary uppercase mb-4 tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-trionfo-accent"></span>
                Headquarters
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                1 Marina Park Drive, Boston, MA 02210, United States
              </p>
            </div>

            {/* Role */}
            <div className="bg-trionfo-bg rounded-lg p-8 border border-slate-200 hover:border-trionfo-accent/30 hover:shadow-md transition-all duration-300 group">
              <h3 className="text-sm font-semibold text-trionfo-primary uppercase mb-4 tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-trionfo-accent"></span>
                Role
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                Strategic ownership, governance, and operational oversight across subsidiary businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-20 sm:py-32 bg-trionfo-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-trionfo-accent to-transparent opacity-40"></div>
            <span className="text-xs uppercase tracking-widest text-trionfo-accent font-semibold">Portfolio</span>
          </div>

          <SectionHeader
            title="Subsidiary Portfolio"
            description="The following companies are owned and operated by Trionfo Holding Co., Inc."
            centered={false}
          />

          <div className="mt-12">
            <PortfolioGrid subsidiaries={subsidiaries} filterable={false} />
          </div>
        </div>
      </section>

      {/* Operating Philosophy */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-trionfo-accent to-transparent opacity-40"></div>
            <span className="text-xs uppercase tracking-widest text-trionfo-accent font-semibold">Philosophy</span>
          </div>

          <SectionHeader
            title="Operating Philosophy"
            description="Our approach to value creation and operational excellence"
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Long-term Ownership */}
            <div className="border-l-4 border-trionfo-accent pl-6">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Long-term Ownership
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                Patient capital and strategic ownership of subsidiary businesses, enabling sustained value creation.
              </p>
            </div>

            {/* Disciplined Capital Allocation */}
            <div className="border-l-4 border-trionfo-accent pl-6">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Disciplined Capital Allocation
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                Strategic investment decisions with rigorous analysis and consideration of risk and return.
              </p>
            </div>

            {/* Operational Oversight */}
            <div className="border-l-4 border-trionfo-accent pl-6">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Operational Oversight
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                Active governance with operational autonomy, supporting subsidiary management and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-trionfo-bg border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CallToAction
            title="Corporate Inquiries"
            description="For partnerships, acquisitions, or investor relations inquiries, please reach out to our corporate office."
            primaryCta={{
              label: 'Corporate Inquiries',
              href: getMailtoLink('general'),
            }}
            secondaryCta={{
              label: 'View Portfolio',
              href: '/portfolio',
            }}
          />
        </div>
      </section>
    </main>
  );
}
