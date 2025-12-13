import type { Metadata } from 'next';
import { getSubsidiaryBySlug, getAllSubsidiaries } from '@/data/portfolio';
import SubsidiaryDetail from '@/components/SubsidiaryDetail';
import CallToAction from '@/components/CallToAction';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getMailtoLink } from '@/config/contact';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);

  if (!subsidiary) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${subsidiary.name} | Trionfo Holding Co., Inc.`,
    description: subsidiary.description,
    openGraph: {
      title: subsidiary.name,
      description: subsidiary.description,
      url: `https://trionfoholdings.com/portfolio/${subsidiary.slug}`,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return getAllSubsidiaries().map((subsidiary: any) => ({
    slug: subsidiary.slug,
  }));
}

export default async function SubsidiaryPage({ params }: PageProps) {
  const { slug } = await params;
  const subsidiary = getSubsidiaryBySlug(slug);

  if (!subsidiary) {
    notFound();
  }

  const allSubsidiaries = getAllSubsidiaries();
  const currentIndex = allSubsidiaries.findIndex(
    (sub: any) => sub.slug === subsidiary.slug
  );
  const nextSubsidiary = allSubsidiaries[(currentIndex + 1) % allSubsidiaries.length];
  const prevSubsidiary = allSubsidiaries[
    (currentIndex - 1 + allSubsidiaries.length) % allSubsidiaries.length
  ];

  return (
    <main>
      {/* Breadcrumb */}
      <section className="py-4 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="text-sm text-trionfo-secondary hover:text-trionfo-primary transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </section>

      {/* Detail */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubsidiaryDetail subsidiary={subsidiary} />
        </div>
      </section>

      {/* Navigation to other subsidiaries */}
      <section className="py-16 bg-trionfo-bg border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Previous */}
            <Link
              href={`/portfolio/${prevSubsidiary.slug}`}
              className="block p-4 bg-white border border-slate-200 rounded-lg hover:shadow-lg hover:border-slate-300 transition-all"
            >
              <p className="text-xs text-trionfo-secondary/70 uppercase font-semibold mb-2">
                ← Previous
              </p>
              <p className="text-lg font-semibold text-trionfo-primary">
                {prevSubsidiary.name}
              </p>
            </Link>

            {/* Next */}
            <Link
              href={`/portfolio/${nextSubsidiary.slug}`}
              className="block p-4 bg-white border border-slate-200 rounded-lg hover:shadow-lg hover:border-slate-300 transition-all text-right md:text-left"
            >
              <p className="text-xs text-trionfo-secondary/70 uppercase font-semibold mb-2">
                Next →
              </p>
              <p className="text-lg font-semibold text-trionfo-primary">
                {nextSubsidiary.name}
              </p>
            </Link>
          </div>

          {/* CTA */}
          <CallToAction
            title="Interested in our portfolio?"
            description="Reach out to our corporate office for partnership, investment, or strategic inquiry opportunities."
            primaryCta={{
              label: 'Corporate Inquiries',
              href: getMailtoLink('partnership'),
            }}
            secondaryCta={{
              label: 'View Full Portfolio',
              href: '/portfolio',
            }}
          />
        </div>
      </section>
    </main>
  );
}
