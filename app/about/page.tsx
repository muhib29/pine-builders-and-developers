import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Award, Users, CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { SectionHeader } from '@/components/sections/section-header'
import { AnimatedSection } from '@/components/ui/animated-section'
import { StatsSection } from '@/components/sections/stats-section'
import { Button } from '@/components/ui/button'
import { aboutData } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Pine Builders & Developers in Karachi - over 25 years of excellence in construction and real estate development. Leading builders and developers in Karachi, Pakistan.',
  keywords: [
    'Pine Builders & Developers in Karachi',
    'Builders and Developers in Karachi',
    'about Pine Builders',
    'construction company Karachi',
  ],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Pine Builders & Developers in Karachi',
    description:
      'Over 25 years of excellence in construction and real estate development. Leading builders and developers in Karachi, Pakistan.',
  },
}

const values = [
  {
    icon: Award,
    title: 'Quality Excellence',
    description:
      'We never compromise on quality. Every project reflects our commitment to superior craftsmanship and lasting results.',
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description:
      'Your vision is our mission. We work closely with clients to understand their needs and exceed their expectations.',
  },
  {
    icon: CheckCircle,
    title: 'Integrity First',
    description:
      'Honesty and transparency guide every interaction. We build relationships as strong as our structures.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/about-team.webp"
              alt="Our team"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90" />
          </div>
          <div className="mx-auto max-w-7xl px-4 pt-32 pb-20 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wider text-primary">
                Our Story
              </span>
              <h1 className="font-serif text-4xl font-bold leading-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
                <span className="text-balance">{aboutData.heroHeading}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80">
                {aboutData.heroSubheading}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* About Content */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              

              <AnimatedSection animation="slide-left">
                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                  Who We Are
                </span>
                <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
                  Building Excellence for Over 25 Years
                </h2>
                <p className="mt-6 leading-relaxed text-muted-foreground">
                  {aboutData.history}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    'Award-Winning Projects',
                    'Certified Professionals',
                    'Sustainable Practices',
                    'On-Time Delivery',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-right">
                <div className="relative">
                  <div className="relative h-[600px] w-full overflow-hidden rounded-lg bg-muted shadow-lg">
                    <Image
                      src="/images/services/ceo.png"
                      alt="CEO and Founder"
                      fill
                      className="object-contain p-6"
                      priority
                    />
                  </div>
                  {/* CEO Info Card */}
                  <div className="relative mt-8 rounded-lg bg-card p-6 text-center shadow-md">
                    <div className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 rotate-45 rounded-sm bg-card" />
                    <h3 className="font-serif text-2xl font-bold text-card-foreground">
                      CEO & Founder
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-primary">
                      Pine Builders & Developers
                    </p>
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg border-4 border-primary/20" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                label="Our Purpose"
                title="Mission & Vision"
                description="Guided by our core principles, we strive to set new standards in construction excellence."
              />
            </AnimatedSection>

            <div className="grid gap-8 lg:grid-cols-2">
              <AnimatedSection animation="fade-up" delay={0}>
                <div className="rounded-lg bg-card p-8 shadow-sm">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-card-foreground">
                    Our Mission
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {aboutData.mission}
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={100}>
                <div className="rounded-lg bg-card p-8 shadow-sm">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Eye className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-semibold text-card-foreground">
                    Our Vision
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {aboutData.vision}
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <SectionHeader
                label="What Drives Us"
                title="Our Core Values"
                description="The principles that define who we are and how we work."
              />
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => (
                <AnimatedSection
                  key={value.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="text-center">
                    <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                Let us help you bring your vision to life with our expertise and
                commitment to excellence.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
