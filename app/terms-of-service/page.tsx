import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AnimatedSection } from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Pine Builders and Developers terms of service — rules and guidelines for using our site and services.',
  alternates: { canonical: '/terms-of-service' },
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wider text-primary">
                Legal
              </span>
              <h1 className="font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl lg:text-6xl">
                Terms of Service
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/80">
                Short and clear terms describing how to use our website and services.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl rounded-lg bg-card p-8 shadow-sm">
              <div className="prose mt-1 dark:prose-invert prose-a:text-primary">
                <p>
                  <strong>Effective Date:</strong> February 4, 2026
                </p>

                <h3>Acceptance of Terms</h3>
                <p>
                  By using our website or services you agree to these Terms of
                  Service. If you do not agree, please do not use our site.
                </p>

                <h3>Use of Services</h3>
                <p>
                  You agree to use our site lawfully and not to post content that
                  is unlawful, harmful, or infringes on others' rights.
                </p>

                <h3>Intellectual Property</h3>
                <p>
                  All content on this site, including text, images, and logos,
                  is owned by or licensed to Roomi Builders and may not be used
                  without permission.
                </p>

                <h3>Limitation of Liability</h3>
                <p>
                  To the fullest extent permitted by law, Roomi Builders is not
                  liable for any indirect, incidental, or consequential damages
                  arising from the use of our services or site.
                </p>

                <h3>Governing Law</h3>
                <p>
                  These terms are governed by the laws of the jurisdiction where
                  Roomi Builders operates.
                </p>

                <h3>Changes to Terms</h3>
                <p>
                  We may update these terms from time to time. Changes are
                  effective when posted on this page.
                </p>

                <h3>Contact</h3>
                <p>
                  If you have questions about these Terms, please visit our{' '}
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
