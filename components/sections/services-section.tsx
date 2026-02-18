'use client'

import React from "react"

import { Home, Building2, Factory, Paintbrush } from 'lucide-react'
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

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="home-section bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection scale>
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="Comprehensive construction solutions tailored to your unique needs, delivered with precision and excellence."
          />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Building2
            return (
              <AnimatedSection
                key={service.title}
                animation="fade-up"
                delay={index * 80}
              >
                <div className="group rounded-xl border border-border/50 bg-card p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:rotate-0.5 hover:border-[#d4af34]/25 hover:shadow-lg hover:shadow-[#061228]/06">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#e6d39b]/10 to-[#e6d39b]/05 text-[#d4af34] transition-all duration-400 group-hover:from-[#d4af34] group-hover:to-[#b88f1f] group-hover:text-[#061228] icon-float">
                    <IconComponent className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 font-serif text-lg font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
        <div className="mt-16 space-y-12">
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Explore Our Premier Offerings with Pine Builders & Developers
            </h2>
            <h3 className="text-xl font-semibold text-[#d4af34]">
              Buy Shops, Showrooms, and Apartments in Karachi
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground max-w-4xl">
              Searching for top-tier commercial or residential real estate in Karachi? Roomi Builders & Developers offers an extensive range of prime properties, including shops, showrooms, luxury flats, and modern apartments, all designed to meet diverse investment needs and lifestyle preferences.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Discover Prime Business & Residential Locations
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground max-w-4xl">
              Our selection includes strategically located business spaces ideal for thriving enterprises and upscale residential properties perfect for contemporary living. With meticulously designed properties spread across Karachi, we ensure high value, convenience, and premium quality. Whether you're looking for a new business location or your dream home, Roomi Builders provides exceptional opportunities tailored to your needs.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Browse Our Listings for the Best Property Investment Opportunities
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground max-w-4xl">
              Find your ideal property in Karachi today by exploring our comprehensive listings. Experience firsthand the excellence of Roomi Builders & Developers, where every property is crafted to meet the highest standards of quality and design.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              Residential Plots & Commercial Plots for Sale
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground max-w-4xl">
              Invest in your future with Roomi Builders & Developers' prime residential and commercial plots for sale in Karachi. We offer opportunities in high-demand locations, including Malir Cantonment, providing promising returns and significant growth potential. Our plots are perfect for both investors and homebuyers looking to capitalize on Karachi's booming real estate market.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              High-Rise and Gated Community Apartments
            </h3>
            <p className="text-base leading-relaxed text-muted-foreground max-w-4xl">
              Experience urban living at its finest with our high-rise and gated community apartments in Karachi. Our properties offer amenities-rich living spaces designed for comfort and convenience, ideal for families and professionals. Enjoy modern features and secure environments that cater to a sophisticated lifestyle.
            </p>
          </div>

          <div className="space-y-4 border-t border-border/30 pt-8">
            <h3 className="text-2xl font-semibold text-foreground">
              Why Choose Roomi Builders & Developers?
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Construction Excellence</h4>
                <p className="text-base leading-relaxed text-muted-foreground">
                  We are committed to quality and craftsmanship, ensuring every project reflects superior building standards and meticulous attention to detail.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Master Builders</h4>
                <p className="text-base leading-relaxed text-muted-foreground">
                  With years of expertise, Roomi Builders is recognized as a leading name in Karachi's real estate industry. Our reputation for delivering exceptional results makes us the trusted choice for discerning clients.
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg font-semibold text-[#d4af34] pt-4 border-t border-border/30">
            Explore, Invest, and Thrive with Pine Builders & Developers – Your Gateway to Premier Real Estate in Karachi.
          </p>
        </div>
      </div>
    </section>
  )
}