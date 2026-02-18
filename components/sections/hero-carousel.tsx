'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import AnimatedHeading from '@/components/ui/animated-heading'
import { HeroImage } from '@/components/ui/hero-image'

interface Slide {
  id: number
  image: string
  tagline: string
  heading: string
  subheading: string
  ctaText: string
  ctaLink: string
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/images/hero/hero-7.webp',
    tagline: 'Building the Future',
    heading: 'Pine Builders and Developers',
    subheading:
      'We design and construct iconic spaces that redefine skylines and set new standards of excellence.',
    ctaText: 'Discover Our Work',
    ctaLink: '/projects',
  },
  {
    id: 2,
    image: '/images/hero/hero-6.webp',
    tagline: 'Luxury Living',
    heading: 'Crafting Timeless Residences',
    subheading:
      'From concept to completion, we create bespoke homes that reflect elegance, comfort, and architectural brilliance.',
    ctaText: 'Explore Residences',
    ctaLink: '/projects',
  },
  {
    id: 9,
    image: '/images/hero/hero-9.webp',
    tagline: 'Precision & Scale',
    heading: 'Mastering Every Detail',
    subheading:
      'Delivering complex construction projects with unmatched precision, innovation, and structural integrity.',
    ctaText: 'View Capabilities',
    ctaLink: '/about',
  },
  {
    id: 6,
    image: '/images/hero/hero-2.webp',
    tagline: 'Commercial Excellence',
    heading: 'Spaces That Drive Success',
    subheading:
      'Modern commercial environments designed to empower businesses and inspire productivity.',
    ctaText: 'See Our Projects',
    ctaLink: '/projects',
  },
  {
    id: 4,
    image: '/images/hero/hero-4.webp',
    tagline: 'Innovation & Engineering',
    heading: 'Engineering the Extraordinary',
    subheading:
      'Combining advanced engineering with visionary design to build structures that stand the test of time.',
    ctaText: 'Learn About Us',
    ctaLink: '/about',
  },
  // {
  //   id: 5,
  //   image: '/images/hero/hero-5.webp',
  //   tagline: 'Community Development',
  //   heading: 'Creating Communities, Not Just Buildings',
  //   subheading:
  //     'Thoughtfully planned developments that enhance lifestyles and deliver lasting value for generations.',
  //   ctaText: 'Start Your Project',
  //   ctaLink: '/contact',
  // },
  // {
  //   id: 11,
  //   image: '/images/hero/hero-11.webp',
  //   tagline: 'Building the Future',
  //   heading: 'Where Vision Meets Excellence',
  //   subheading: 'Transforming skylines with architectural mastery and uncompromising quality since 1995.',
  //   ctaText: 'View Our Projects',
  //   ctaLink: '/projects',
  // },

  // {
  //   id: 3,
  //   image: '/images/hero/hero-8.webp',
  //   tagline: 'Commercial Excellence',
  //   heading: 'Spaces That Inspire',
  //   subheading: 'Creating world-class commercial environments that elevate businesses and communities.',
  //   ctaText: 'See Commercial Work',
  //   ctaLink: '/projects',
  // },
  
  // {
  //   id: 10,
  //   image: '/images/hero/hero-10.webp',
  //   tagline: 'Community Development',
  //   heading: 'Building Communities',
  //   subheading: 'Thoughtfully designed developments that create lasting value for generations.',
  //   ctaText: 'Start Your Project',
  //   ctaLink: '/contact',
  // },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isPaused, setIsPaused] = useState(false)

  const goToSlide = useCallback((index: number, dir?: 'left' | 'right') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir || (index > currentSlide ? 'right' : 'left'))
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 800)
  }, [currentSlide, isAnimating])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length, 'right')
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length, 'left')
  }, [currentSlide, goToSlide])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide, isPaused])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') prevSlide()
    if (e.key === 'ArrowRight') nextSlide()
  }, [prevSlide, nextSlide])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle animated background shapes */}
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <svg className="absolute right-8 top-12 w-72 opacity-30 float-anim-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#7b2ff7" stopOpacity="0.18"/>
              <stop offset="100%" stopColor="#d4af34" stopOpacity="0.12"/>
            </linearGradient>
          </defs>
          <path fill="url(#g1)" d="M43.6,-37.6C56.2,-30.7,68.7,-20.8,71.1,-8.7C73.5,3.4,65.9,17.6,56.2,27.6C46.5,37.6,34.7,43.3,22.5,46.1C10.3,48.9,-2.4,48.9,-14.7,46.2C-27,43.5,-39,38.1,-46.3,28.9C-53.6,19.7,-56.4,6.8,-54.5,-5.3C-52.7,-17.4,-46.2,-28.5,-36.6,-36.2C-27,-43.9,-13.5,-48.2,-0.6,-47.2C12.3,-46.2,24.6,-39.8,43.6,-37.6Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute left-12 bottom-10 w-60 opacity-24 float-anim-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#06b6d4" d="M36.6,-33.6C45.9,-23.9,51.1,-11.9,51.1,0.2C51.1,12.2,45.9,24.4,36.6,33.9C27.3,43.4,13.7,50.1,0.3,49.7C-13.1,49.3,-26.1,41.9,-36.4,31.1C-46.8,20.4,-54.5,6.2,-53.6,-8.4C-52.6,-22.9,-43.8,-37.9,-32.3,-46.2C-20.9,-54.6,-10.4,-56.3,1.9,-58.5C14.1,-60.7,28.2,-63.4,36.6,-33.6Z" transform="translate(100 100)" />
        </svg>
      </div>
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-[opacity,transform] duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
            index === currentSlide
              ? 'z-20 opacity-100'
              : 'z-10 opacity-0 pointer-events-none',
            isAnimating && index === currentSlide && direction === 'right' && 'animate-slide-in-right',
            isAnimating && index === currentSlide && direction === 'left' && 'animate-slide-in-left'
          )}
        >
          {/* Background Image — responsive srcset, only load current + next slide for LCP */}
          <div
            className={cn(
              'absolute inset-0 overflow-hidden transition-transform duration-[10000ms] ease-[cubic-bezier(0.65,0,0.35,1)]',
              index === currentSlide && 'scale-[1.06]'
            )}
          >
            {(index === currentSlide ||
              index === (currentSlide + 1) % slides.length ||
              index === (currentSlide - 1 + slides.length) % slides.length) && (
              <HeroImage
                src={slide.image || '/placeholder.svg'}
                alt={slide.heading}
                priority={index === 0}
              />
            )}
          </div>

          {/* Gradient overlay: deep blue #061228 — keeps theme, improves readability */}
          <div
            className="absolute inset-0 z-[5]"
            style={{
              background: 'linear-gradient(135deg, rgba(6,18,40,0.75) 0%, rgba(6,18,40,0.4) 50%, transparent 100%), linear-gradient(to top, rgba(6,18,40,0.6) 0%, transparent 50%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex h-full items-end">
            <div className="w-full px-4 sm:px-6 lg:px-12 pb-12">
              <div className="max-w-2xl rounded-2xl p-6 sm:p-8">
                {/* Tagline — minimal */}
                <div
                  className={cn(
                    'overflow-hidden',
                    index === currentSlide ? 'animate-hero-reveal' : 'opacity-0'
                  )}
                  style={{ animationDelay: '120ms' }}
                >
                  <span className="inline-block text-sm font-medium uppercase tracking-[0.2em] text-[#d4af34]">
                    {slide.tagline}
                  </span>
                </div>

                {/* Heading */}
                {index === 0 ? (
                  <h1
                    className={cn(
                      'font-serif font-bold leading-tight tracking-tight text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl hero-text-shadow mt-2',
                      index === currentSlide ? 'animate-hero-reveal-up' : 'opacity-0'
                    )}
                    style={{ animationDelay: '260ms' }}
                  >
                    <span className="text-balance"><AnimatedHeading text={slide.heading} /></span>
                  </h1>
                ) : (
                  <h2
                    className={cn(
                      'font-serif font-bold leading-tight tracking-tight text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl hero-text-shadow mt-2',
                      index === currentSlide ? 'animate-hero-reveal-up' : 'opacity-0'
                    )}
                    style={{ animationDelay: '260ms' }}
                  >
                    <span className="text-balance"><AnimatedHeading text={slide.heading} /></span>
                  </h2>
                )}

                {/* Subheading */}
                <p
                  className={cn(
                    'mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl hero-text-shadow',
                    index === currentSlide ? 'animate-hero-reveal-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: '420ms' }}
                >
                  {slide.subheading}
                </p>

                {/* CTA Buttons */}
                <div
                  className={cn(
                    'mt-10 flex flex-wrap gap-4',
                    index === currentSlide ? 'animate-hero-reveal-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: '580ms' }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="group h-14 bg-[#d4af34] px-8 text-base font-semibold text-[#061228] shadow-lg transition-all duration-300 hover:bg-[#c4a02a] hover:shadow-xl hover:scale-[1.02]"
                  >
                    <Link href={slide.ctaLink}>
                      {slide.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  {/* <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 border-2 border-secondary-foreground/30 bg-transparent px-8 text-base font-semibold text-secondary-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary"
                  >
                    <Link href="/contact">Get Free Consultation</Link>
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows — minimal, smooth hover */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="group absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-[#061228]/60 p-3 backdrop-blur-md transition-all duration-300 hover:border-[#d4af34] hover:bg-[#d4af34] hover:text-[#061228] disabled:opacity-50 sm:left-8 sm:p-4"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-white transition-colors group-hover:text-[#061228] sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="group absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/20 bg-[#061228]/60 p-3 backdrop-blur-md transition-all duration-300 hover:border-[#d4af34] hover:bg-[#d4af34] hover:text-[#061228] disabled:opacity-50 sm:right-8 sm:p-4"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-white transition-colors group-hover:text-[#061228] sm:h-6 sm:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 sm:bottom-12">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className="group relative h-2.5 overflow-hidden rounded-full transition-all duration-300 disabled:opacity-50"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={cn(
                'h-full rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
                index === currentSlide
                  ? 'w-10 bg-[#d4af34]'
                  : 'w-2.5 bg-white/40 group-hover:bg-white/60'
              )}
            />
            {index === currentSlide && (
              <div
                className="absolute inset-0 rounded-full bg-[#d4af34]/60"
                style={{ animation: 'progress 6s linear' }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-4 z-30 hidden items-center gap-2 font-mono text-sm text-white/70 sm:bottom-12 sm:right-8 sm:flex">
        <span className="text-2xl font-bold text-[#d4af34]">
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        <span className="text-white/50">/</span>
        <span>{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-4 z-30 hidden flex-col items-center gap-2 sm:bottom-12 sm:left-8 sm:flex">
        <div className="scroll-indicator text-white/80">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="wheel">
            <div className="dot" />
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-8 left-4 z-30 hidden flex-col items-center gap-2 sm:bottom-12 sm:left-8 sm:flex">
        <span className="text-xs font-medium uppercase tracking-widest text-secondary-foreground/60">
          Scroll
        </span>
        <div className="flex h-12 w-6 items-start justify-center rounded-full border border-secondary-foreground/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-primary" />
        </div>
      </div> */}

      {/* Bottom fade into page — deep blue */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[6] h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(6,18,40,0.85), transparent)' }}
      />
    </section>
  )
}