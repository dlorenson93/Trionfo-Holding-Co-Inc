import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal & Disclosures | Trionfo Holding Co., Inc.',
  description: 'Legal information and important disclosures regarding Trionfo Holding Co., Inc. and its subsidiary operations.',
  openGraph: {
    title: 'Legal & Disclosures | Trionfo Holding Co., Inc.',
    description: 'Legal disclaimers and informational disclosures',
    url: 'https://trionfoholdings.com/legal',
    type: 'website',
  },
};

export default function LegalPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-trionfo-primary tracking-tight">
            Legal & Disclosures
          </h1>
          <p className="text-lg text-trionfo-secondary/70 mt-4">
            Important information about Trionfo Holding Co., Inc.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Disclaimer */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-trionfo-primary mb-6">
              General Disclaimer
            </h2>
            <div className="space-y-4 text-trionfo-secondary leading-relaxed">
              <p>
                This website contains general informational content about Trionfo Holding Co., Inc. and its subsidiary companies. The information presented is provided for informational purposes only and should not be construed as professional advice of any kind.
              </p>
              <p>
                While we strive to ensure the accuracy and completeness of information on this site, Trionfo Holding Co., Inc. makes no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, completeness, or timeliness of any information contained herein.
              </p>
            </div>
          </div>

          {/* No Investment Advice */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-trionfo-primary mb-6">
              No Investment Advice
            </h2>
            <div className="space-y-4 text-trionfo-secondary leading-relaxed">
              <p>
                Nothing on this website constitutes investment advice, recommendation, offer, or solicitation to buy or sell any security, investment product, or financial instrument. Trionfo Holding Co., Inc. does not provide investment advisory services.
              </p>
              <p>
                Any information about subsidiary companies or their operations should not be relied upon as a basis for any investment decision. Persons interested in any investment opportunities should conduct their own independent due diligence and consult with qualified financial, legal, and tax advisors.
              </p>
            </div>
          </div>

          {/* Not a Solicitation */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-trionfo-primary mb-6">
              Not a Solicitation
            </h2>
            <div className="space-y-4 text-trionfo-secondary leading-relaxed">
              <p>
                This website does not constitute an offer to sell or a solicitation to buy any investment securities or products. No securities are offered or will be sold under this website without a separate definitive agreement.
              </p>
              <p>
                Trionfo Holding Co., Inc. complies with applicable securities laws and regulations. Any inquiries regarding potential business relationships, partnerships, or investments should be directed to our corporate office through official channels.
              </p>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-trionfo-primary mb-6">
              Intellectual Property
            </h2>
            <div className="space-y-4 text-trionfo-secondary leading-relaxed">
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Trionfo Holding Co., Inc. or its content suppliers and is protected by United States and international copyright laws.
              </p>
              <p>
                The trademarks, service marks, and logos displayed on this website are registered or unregistered trademarks of Trionfo Holding Co., Inc. or third parties. Nothing on this website should be construed as granting any license or right to use any trademark without the express written consent of Trionfo Holding Co., Inc. or the applicable third party.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-trionfo-primary mb-6">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-trionfo-secondary leading-relaxed">
              <p>
                To the maximum extent permitted by law, Trionfo Holding Co., Inc. and its officers, directors, employees, and agents shall not be liable for any damages arising from the use of, or inability to use, this website or its content, including but not limited to direct, indirect, incidental, consequential, or punitive damages.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-trionfo-primary mb-6">
              Governing Law
            </h2>
            <div className="space-y-4 text-trionfo-secondary leading-relaxed">
              <p>
                This website and all content thereon are governed by the laws of the Commonwealth of Massachusetts, without regard to its conflict of law principles.
              </p>
            </div>
          </div>

          {/* Updates and Amendments */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-trionfo-primary mb-6">
              Changes to Terms
            </h2>
            <div className="space-y-4 text-trionfo-secondary leading-relaxed">
              <p>
                Trionfo Holding Co., Inc. reserves the right to modify or update any information on this website at any time without prior notice. Please review this page periodically for updates.
              </p>
            </div>
          </div>

          {/* Questions */}
          <div className="bg-trionfo-primary/3 rounded-lg p-8 border border-trionfo-primary/10">
            <h3 className="text-lg font-semibold text-trionfo-primary mb-4">
              Questions?
            </h3>
            <p className="text-trionfo-secondary mb-4">
              If you have questions about this legal notice or our terms, please contact us through our corporate inquiry channel.
            </p>
            <a
              href="mailto:dylan@trionfoholdings.com"
              className="inline-block bg-trionfo-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-trionfo-primary/90 hover:shadow-lg transition-all duration-300"
            >
              Corporate Inquiries
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
