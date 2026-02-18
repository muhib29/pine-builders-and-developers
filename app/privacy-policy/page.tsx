import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AnimatedSection } from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Pine Builders and Developers privacy policy - how we collect and use information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section (matches Contact page style) */}
        <section className="bg-secondary pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wider text-primary">
                Legal
              </span>
              <h1 className="font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/80">
                A short summary of how we collect, use, and protect your information.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-lg bg-card p-8 shadow-sm">
              <div className="prose mt-1 dark:prose-invert prose-a:text-primary">
                <p>
                  <strong>Effective Date:</strong> February 4, 2026
                </p>

                <h3>Information We Collect</h3>
                <p>
                  We collect information you provide directly (for example: name,
                  email, phone number, and address) when you contact us or use
                  our services. We also collect non-personal data (such as browser
                  type, operating system, and IP address) to help improve our
                  website and services.
                </p>

                <h3>How We Use Information</h3>
                <p>
                  We use your personal information to respond to requests,
                  provide services, send important updates, and improve our
                  offerings. Non-personal data is used for analytics and site
                  performance.
                </p>

                <h3>Cookies & Tracking</h3>
                <p>
                  We use cookies and similar technologies to enhance your
                  experience and collect usage data. You can disable cookies in
                  your browser, but some features may not work as intended.
                </p>

                <h3>Data Security</h3>
                <p>
                  We take reasonable measures to protect your information, but
                  no online method is completely secure. We cannot guarantee
                  absolute security of data transmitted to or from our site.
                </p>

                <h3>Sharing & Third Parties</h3>
                <p>
                  We do not sell your personal information. We may share data
                  with trusted service providers who help operate our website or
                  provide services, and when required by law.
                </p>

                <h3>Children's Privacy</h3>
                <p>
                  Our services are not directed to children under 13, and we do
                  not knowingly collect their personal information.
                </p>

                <h3>Changes to This Policy</h3>
                <p>
                  We may update this policy occasionally. Any changes are
                  effective when posted on this page.
                </p>

                <h3>Contact Us</h3>
                <p>
                  If you have questions about this policy, please visit our{' '}
                  <Link href="/contact">Contact</Link> page or email us at{' '}
                  <a href="mailto:pinebuilder83@gmail.com">pinebuilder83@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
