'use client'

import * as React from 'react'
import { Star, Quote } from 'lucide-react'
import { SectionHeader } from './section-header'
import { AnimatedSection } from '@/components/ui/animated-section'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel'

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Director, AR Developers',
    content:
      'Working with Pine Builders was a smooth and professional experience. Their team maintained clear communication throughout the project and delivered quality work as committed.',
    rating: 5,
  },
  {
    name: 'Usman Khalid',
    role: 'Business Owner',
    content:
      'We entrusted Pine Builders with our commercial project, and they handled everything efficiently. Their dedication to timelines and construction standards truly impressed us.',
    rating: 5,
  },
  {
    name: 'Fatima Siddiqui',
    role: 'Homeowner',
    content:
      'Building our home was an important milestone for our family. Pine Builders ensured the entire process was organized and transparent, giving us confidence at every stage.',
    rating: 5,
  },
  {
    name: 'Bilal Hussain',
    role: 'Investor',
    content:
      'Their professionalism and structured approach made the investment process straightforward. I appreciate their commitment to maintaining quality and keeping clients informed.',
    rating: 5,
  },
  {
    name: 'Hassan Iqbal',
    role: 'Project Consultant',
    content:
      'Pine Builders demonstrated strong project management and technical capability. The coordination and execution met our expectations and reflected their industry experience.',
    rating: 5,
  },
];


export function TestimonialsSection() {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const autoplayRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    if (!api) return

    const play = () => {
      if (autoplayRef.current) return
      autoplayRef.current = window.setInterval(() => api?.scrollNext(), 3000)
    }

    const stop = () => {
      if (autoplayRef.current) {
        window.clearInterval(autoplayRef.current)
        autoplayRef.current = null
      }
    }

    play()
    api.on && api.on('pointerDown', stop)
    api.on && api.on('settle', play)

    return () => {
      stop()
      api.off && api.off('pointerDown', stop)
      api.off && api.off('settle', play)
    }
  }, [api])

  return (
    <section className="home-section bg-muted/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection scale>
          <SectionHeader
            label="Testimonials"
            title="What Our Clients Say"
            description="Hear from the people who have trusted us with their most important projects."
          />
        </AnimatedSection>
        <Carousel opts={{ loop: true }} setApi={setApi} className="mt-8">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={testimonial.name}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <AnimatedSection animation="fade-up" delay={index * 80}>
                  <div className="group relative rounded-xl border border-border/50 bg-card p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-[#d4af34]/20 hover:shadow-md hover:shadow-[#061228]/05">
                    <Quote className="absolute right-6 top-6 h-10 w-10 text-[#d4af34]/10" />
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#d4af34] text-[#d4af34]"
                        />
                      ))}
                    </div>
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      {`"${testimonial.content}"`}
                    </p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
