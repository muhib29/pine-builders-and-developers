'use client'


import React from "react"
import { Home, Building2, Factory, Paintbrush, CheckCircle } from 'lucide-react'
import { SectionHeader } from './section-header'
import { AnimatedSection } from '@/components/ui/animated-section'

interface Service {
  title: string
  description: string
  icon: string
}

interface ServicesSectionProps {
  services: Service[]
}

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  building: Building2,
  factory: Factory,
  paintbrush: Paintbrush,
}

const highlights = [
  'Over 25 years of industry experience',
  'Free consultation and detailed quotes',
  'Licensed and fully insured professionals',
  'On-time project delivery guaranteed',
  'Transparent communication throughout',
]

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#f8fafc] via-[#f3f4f6] to-[#fffbe6] py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{background: 'radial-gradient(circle at 80% 20%, #d4af34 0%, transparent 60%)'}} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <AnimatedSection scale>
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="Comprehensive construction solutions tailored to your unique needs, delivered with precision and excellence."
          />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Building2
            return (
              <AnimatedSection
                key={service.title}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="group rounded-2xl border border-[#f3e7c1] bg-white p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#d4af34] flex flex-col items-center text-center">
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#fffbe6] to-[#f3e7c1] text-[#d4af34] shadow group-hover:from-[#d4af34] group-hover:to-[#b88f1f] group-hover:text-white transition-all">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-bold text-[#061228] tracking-tight">
                    {service.title}
                  </h3>
                  <div className="w-10 h-1 bg-[#d4af34] rounded-full mb-3 mx-auto opacity-60" />
                  <p className="text-base leading-relaxed text-[#6b7280]">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          <AnimatedSection animation="slide-right">
            <div className="rounded-2xl bg-white/90 p-10 shadow-lg border border-[#f3e7c1] flex flex-col justify-center h-full">
              <h2 className="font-serif text-3xl font-bold text-[#061228] mb-4">
                Why Choose Pine Builders & Developers?
              </h2>
              <ul className="space-y-4 mb-6">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg text-[#6b7280]">
                    <CheckCircle className="h-5 w-5 text-[#d4af34] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-[#444]">
                We are committed to quality and craftsmanship, ensuring every project reflects superior building standards and meticulous attention to detail. With years of expertise, Pine Builders is recognized as a leading name in Karachi's real estate industry. Our reputation for delivering exceptional results makes us the trusted choice for discerning clients.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="slide-left">
            <div className="rounded-2xl bg-gradient-to-br from-[#fffbe6] to-[#f3e7c1] p-10 shadow-lg border border-[#f3e7c1] flex flex-col justify-center h-full">
              <h3 className="text-2xl font-semibold text-[#d4af34] mb-2">
                Explore Our Premier Offerings
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-[#6b7280] text-base">
                <li>Buy Shops, Showrooms, and Apartments in Karachi</li>
                <li>Discover Prime Business & Residential Locations</li>
                <li>Residential & Commercial Plots for Sale</li>
                <li>High-Rise and Gated Community Apartments</li>
              </ul>
              <p className="mt-6 text-base text-[#444]">
                Searching for top-tier commercial or residential real estate in Karachi? Pine Builders & Developers offers an extensive range of prime properties, including shops, showrooms, luxury flats, and modern apartments, all designed to meet diverse investment needs and lifestyle preferences. Find your ideal property today and experience firsthand the excellence of Pine Builders & Developers.
              </p>
              <a href="/projects" className="mt-8 inline-block px-8 py-3 rounded-full bg-[#d4af34] text-white font-semibold shadow hover:bg-[#b88f1f] transition-all text-lg">Browse Our Listings</a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}