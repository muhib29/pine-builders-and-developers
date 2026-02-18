'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedSection } from '@/components/ui/animated-section'

export function CTASection() {
  return (
    <section className="home-section relative overflow-hidden py-24 lg:py-32">
      {/* Background Image — subtle scale on load */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/services/commercial.webp"
          alt="Construction site"
          fill
          className="object-cover transition-transform duration-[12000ms] ease-[cubic-bezier(0.65,0,0.35,1)] hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(6,18,40,0.92) 0%, rgba(6,18,40,0.78) 100%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <AnimatedSection animation="slide-right" delay={0}>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af34]">
              Start Your Project
            </span>
            <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Ready to Build Your Dream Project?
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              Whether you are planning a new home, commercial development, or
              renovation project, our team of experts is ready to turn your
              vision into reality. Contact us today for a free consultation.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={100} className="lg:text-right">
            <div className="flex flex-col items-start gap-6 lg:items-end">
              <Button
                asChild
                size="lg"
                className="group cta-gradient text-[#061228] transition-all duration-300 hover:scale-[1.03] shadow-2xl"
              >
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4af34]/20 transition-colors duration-300 hover:bg-[#d4af34]/30">
                  <Phone className="h-5 w-5 text-[#d4af34]" />
                </div>
                <div>
                  <p className="text-sm text-white/60">
                    Call us directly
                  </p>
                  <a
                    href="tel:+923138222808"
                    className="text-lg font-semibold text-white transition-colors duration-300 hover:text-[#d4af34]"
                  >
                    +92 (313) 822-2808
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
