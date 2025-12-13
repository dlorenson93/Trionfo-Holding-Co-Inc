import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import { CORPORATE_EMAIL, CORPORATE_MAILTO, HQ_ADDRESS_LINES } from '@/config/contact';

export const metadata: Metadata = {
  title: 'About | Trionfo Holding Co., Inc.',
  description:
    'Trionfo Holding Co., Inc. is a privately held parent holding company focused on strategic ownership, capital allocation, and long-term value creation.',
  openGraph: {
    title: 'About Trionfo Holding Co., Inc.',
    description: 'Privately held holding company — mission, governance, and oversight philosophy',
    url: 'https://trionfoholdings.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-trionfo-primary tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Mission and Purpose */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Divider */}
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px flex-grow bg-gradient-to-r from-transparent via-trionfo-accent to-transparent opacity-30"></div>
          </div>

          <SectionHeader
            title="Mission & Purpose"
            centered={true}
          />
          <p className="text-lg text-trionfo-secondary leading-relaxed mb-6">
            Trionfo Holding Co., Inc. exists to build, own, and steward a diversified portfolio of operating businesses. Our mission is to create sustainable, long-term value through strategic ownership, disciplined capital allocation, and operational excellence.
          </p>
          <p className="text-lg text-trionfo-secondary leading-relaxed">
            We believe thoughtful, patient ownership enables businesses to grow responsibly and achieve their full potential over extended time horizons.
          </p>
        </div>
      </section>

      {/* Role of Holding Company */}
      <section className="py-16 sm:py-24 bg-trionfo-bg border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Role of the Parent Holding Company"
            centered={true}
          />
          <div className="space-y-6">
            <div className="border-l-2 border-trionfo-accent pl-4">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Strategic Ownership
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                As the parent holding company, we provide strategic direction and long-term capital while enabling each subsidiary to operate independently within its respective industry.
              </p>
            </div>
            <div className="border-l-2 border-trionfo-accent pl-4">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Capital Allocation
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                We allocate capital across the portfolio to support growth initiatives, operational improvements, and innovation aligned with long-term corporate objectives.
              </p>
            </div>
            <div className="border-l-2 border-trionfo-accent pl-4">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Risk Management
              </h3>
              <p className="text-trionfo-secondary leading-relaxed">
                Through portfolio diversification and active governance, we manage risk while pursuing durable value creation and financial stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Oversight */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Governance & Oversight Philosophy"
            centered={true}
          />
          <p className="text-lg text-trionfo-secondary leading-relaxed mb-8">
            Our governance framework balances active stewardship with operational flexibility. We maintain rigorous oversight while respecting the expertise of subsidiary leadership through:
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="text-trionfo-accent font-semibold flex-shrink-0 mt-1">●</span>
              <div>
                <h4 className="font-semibold text-trionfo-primary mb-1">
                  Regular Financial Review
                </h4>
                <p className="text-trionfo-secondary">
                  Comprehensive quarterly and annual reviews of subsidiary performance against defined strategic and financial objectives.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-trionfo-accent font-semibold flex-shrink-0 mt-1">●</span>
              <div>
                <h4 className="font-semibold text-trionfo-primary mb-1">
                  Strategic Alignment
                </h4>
                <p className="text-trionfo-secondary">
                  Ongoing evaluation to ensure subsidiary operations remain aligned with corporate strategy and long-term value creation goals.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-trionfo-accent font-semibold flex-shrink-0 mt-1">●</span>
              <div>
                <h4 className="font-semibold text-trionfo-primary mb-1">
                  Compliance & Standards
                </h4>
                <p className="text-trionfo-secondary">
                  Consistent adherence to legal, regulatory, and ethical standards across all operating entities.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-trionfo-accent font-semibold flex-shrink-0 mt-1">●</span>
              <div>
                <h4 className="font-semibold text-trionfo-primary mb-1">
                  Operational Support
                </h4>
                <p className="text-trionfo-secondary">
                  Provision of shared services, strategic guidance, and capital support when appropriate to enable subsidiary growth and execution.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-trionfo-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Core Values"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Integrity
              </h3>
              <p className="text-trionfo-secondary">
                We conduct all business with honesty, transparency, and a commitment to the highest ethical standards.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Stewardship
              </h3>
              <p className="text-trionfo-secondary">
                We view our role as stewards of capital and guardians of long-term value creation.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Excellence
              </h3>
              <p className="text-trionfo-secondary">
                We maintain high standards of operational performance and pursue continuous improvement across the portfolio.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200 hover:border-slate-300 transition-colors">
              <h3 className="text-lg font-semibold text-trionfo-primary mb-3">
                Autonomy
              </h3>
              <p className="text-trionfo-secondary">
                We respect subsidiary leadership expertise and preserve operational independence within clearly defined governance frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Information */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Corporate Information"
            centered={true}
          />
          <div className="text-center">
            <p className="text-lg font-semibold text-trionfo-primary mb-1">Trionfo Holding Co., Inc.</p>
            <p className="text-trionfo-secondary mb-4">Privately Held</p>
            <div className="text-trionfo-secondary/80 space-y-1">
              {HQ_ADDRESS_LINES.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Inquiries */}
      <section className="py-20 sm:py-32 bg-trionfo-bg border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Corporate Inquiries"
            centered={true}
          />
          <p className="text-lg text-trionfo-secondary leading-relaxed mb-8 text-center">
            All corporate inquiries should be directed to:
          </p>
          <div className="text-center">
            <a
              href={CORPORATE_MAILTO}
              className="inline-block bg-trionfo-primary text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Corporate Inquiries
            </a>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-trionfo-secondary/70 mb-2">
                Information provided is for general informational purposes and is subject to change without notice.
              </p>
              <p className="text-sm text-trionfo-secondary/70">
                © 2025 Trionfo Holding Co., Inc. All rights reserved.
              </p>
            </div>
            <p className="text-xs text-trionfo-secondary/60 whitespace-nowrap">
              Last updated: December 2025
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
