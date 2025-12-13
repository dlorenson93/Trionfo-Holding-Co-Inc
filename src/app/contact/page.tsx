import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import EmailLink from '@/components/EmailLink';
import { INQUIRY_TYPES, getMailtoLink, HQ_ADDRESS_LINES, CORPORATE_MAILTO } from '@/config/contact';

export const metadata: Metadata = {
  title: 'Contact | Trionfo Holding Co., Inc.',
  description:
    'Contact Trionfo Holding Co., Inc. for corporate inquiries, partnerships, and investor relations.',
  openGraph: {
    title: 'Contact | Trionfo Holding Co., Inc.',
    description: 'Corporate contact information and inquiry form',
    url: 'https://trionfoholdings.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase mb-3">
                Email
              </h3>
              <EmailLink
                href={CORPORATE_MAILTO}
                className="text-lg text-slate-900 hover:text-slate-600 font-medium transition-colors"
              />
            </div>

            {/* Address */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase mb-3">
                Headquarters
              </h3>
              <address className="text-slate-600 not-italic space-y-1">
                {HQ_ADDRESS_LINES.map((line, idx) => (
                  <div key={idx} className="text-sm">
                    {line}
                  </div>
                ))}
              </address>
            </div>

            {/* Inquiry Types */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase mb-3">
                Inquiry Types
              </h3>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• General Corporate</li>
                <li>• Banking & Financial</li>
                <li>• Partnerships</li>
                <li>• Legal & Compliance</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 my-12" />

          {/* Inquiry Options */}
          <div className="max-w-3xl">
            <SectionHeader
              title="Get in Touch"
              description="Select your inquiry type below. This will compose an email with the appropriate subject line."
              centered={false}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(INQUIRY_TYPES).map(([key, inquiry]) => (
                <a
                  key={key}
                  href={getMailtoLink(key as keyof typeof INQUIRY_TYPES)}
                  className="block p-6 bg-white border border-slate-200 rounded-lg hover:shadow-lg hover:border-slate-300 transition-all"
                >
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    {inquiry.label}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Opens your default email client
                  </p>
                </a>
              ))}
            </div>

            {/* Direct Email Option */}
            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <h3 className="text-sm font-semibold text-slate-900 mb-2">
                Or send a general inquiry directly
              </h3>
              <p className="text-slate-600 mb-4">
                Click below to open your email client and compose a message to our
                corporate office:
              </p>
              <EmailLink
                href={CORPORATE_MAILTO}
                className="inline-block bg-trionfo-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Compose Email
              </EmailLink>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Note */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-slate-600 text-center">
            Your information will be handled in accordance with our privacy and
            data protection standards.
          </p>
        </div>
      </section>
    </main>
  );
}
