'use client'

import { useState, useEffect, useCallback } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
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
export const HeroCarousel: React.FC = () => {

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

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [isPaused, setIsPaused] = useState(false)
  // Defer loading prev/next slide images on mobile until after LCP
  const [deferNonLcpImages, setDeferNonLcpImages] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  // Custom hook for media query
  const isMobile = useIsMobile()
  // Show 3 slides on mobile, 5 on larger screens
  const filteredSlides = isMobile ? slides.slice(0, 3) : slides.slice(0, 5)

  const goToSlide = useCallback((index: number, dir?: 'left' | 'right') => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(dir || (index > currentSlide ? 'right' : 'left'))
    setCurrentSlide(index)
    setTimeout(() => setIsAnimating(false), 800)
  }, [currentSlide, isAnimating])

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % filteredSlides.length, 'right')
  }, [currentSlide, goToSlide, filteredSlides.length])

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + filteredSlides.length) % filteredSlides.length, 'left')
  }, [currentSlide, goToSlide, filteredSlides.length])

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

  useEffect(() => {
    // Reset slide index if filteredSlides changes
    setCurrentSlide(0)
  }, [filteredSlides.length])

  useEffect(() => {
    setHasMounted(true)
  }, [])

  // On mobile: allow prev/next images to load only after LCP window (~2.5s)
  useEffect(() => {
    const t = setTimeout(() => setDeferNonLcpImages(false), 2500)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative h-[70vh] min-h-[400px] w-full overflow-hidden md:h-[80vh] lg:h-screen"
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
      {filteredSlides.map((slide, index) => (
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
            {(
              index === currentSlide ||
              (hasMounted &&
                (!isMobile || !deferNonLcpImages) &&
                (index === (currentSlide + 1) % filteredSlides.length ||
                  index === (currentSlide - 1 + filteredSlides.length) % filteredSlides.length))
            ) && (
              <HeroImage
                src={slide.image || '/placeholder.svg'}
                alt={slide.heading}
                priority={index === 0}
                className="w-full h-full"
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

          {/* Content — left bottom */}
          <div className="relative z-10 flex h-full items-end justify-start">
          <div className="w-full max-w-2xl pl-6 pr-4 pb-12 sm:pl-12 sm:pr-12 md:px-6 lg:px-12 sm:pb-12">

              <div className="rounded-2xl p-4 text-left sm:p-6 md:p-8 md:max-w-2xl">
                {/* Tagline */}
                <div
                  className={cn(
                    'overflow-hidden',
                    index === currentSlide ? 'animate-hero-reveal' : 'opacity-0'
                  )}
                  style={{ animationDelay: '120ms' }}
                >
                  <span className="inline-block text-xs font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#d4af34] md:text-sm">
                    {slide.tagline}
                  </span>
                </div>

                {/* Heading */}
                {index === 0 ? (
                  <h1
                    className={cn(
                      'font-serif font-bold leading-tight tracking-tight text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hero-text-shadow mt-1.5 sm:mt-2',
                      index === currentSlide ? 'animate-hero-reveal-up' : 'opacity-0'
                    )}
                    style={{ animationDelay: '260ms' }}
                  >
                    <span className="text-balance"><AnimatedHeading text={slide.heading} /></span>
                  </h1>
                ) : (
                  <h2
                    className={cn(
                      'font-serif font-bold leading-tight tracking-tight text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hero-text-shadow mt-1.5 sm:mt-2',
                      index === currentSlide ? 'animate-hero-reveal-up' : 'opacity-0'
                    )}
                    style={{ animationDelay: '260ms' }}
                  >
                    <span className="text-balance"><AnimatedHeading text={slide.heading} /></span>
                  </h2>
                )}

                {/* Subheading — hidden on mobile, shown from md */}
                <p
                  className={cn(
                    'hidden mt-4 max-w-xl text-base leading-relaxed text-white/85 md:block sm:mt-6 sm:text-lg md:text-xl hero-text-shadow',
                    index === currentSlide ? 'animate-hero-reveal-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: '420ms' }}
                >
                  {slide.subheading}
                </p>

                {/* CTA — small on mobile */}
                <div
                  className={cn(
                    'mt-4 flex flex-wrap gap-2 sm:mt-6 md:mt-10 md:gap-4',
                    index === currentSlide ? 'animate-hero-reveal-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: '580ms' }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="group h-8 bg-[#d4af34] px-3.5 text-xs font-semibold text-[#061228] shadow-lg transition-all duration-300 hover:bg-[#c4a02a] hover:shadow-xl hover:scale-[1.02] sm:h-10 sm:px-4 sm:text-sm md:h-14 md:px-8 md:text-base"
                  >
                    <Link href={slide.ctaLink}>
                      {slide.ctaText}
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 sm:ml-1.5 sm:h-4 sm:w-4 md:ml-2 md:h-5 md:w-5" />
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

      {/* Navigation Arrows — compact on mobile, larger on desktop */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="group absolute left-2 top-1/2 z-30 flex -translate-y-1/2 rounded-full border border-white/20 bg-[#061228]/60 p-2 backdrop-blur-md transition-all duration-300 hover:border-[#d4af34] hover:bg-[#d4af34] hover:text-[#061228] disabled:opacity-50 sm:left-4 sm:p-2.5 md:left-8 md:p-4"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 text-white transition-colors group-hover:text-[#061228] sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="group absolute right-2 top-1/2 z-30 flex -translate-y-1/2 rounded-full border border-white/20 bg-[#061228]/60 p-2 backdrop-blur-md transition-all duration-300 hover:border-[#d4af34] hover:bg-[#d4af34] hover:text-[#061228] disabled:opacity-50 sm:right-4 sm:p-2.5 md:right-8 md:p-4"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 text-white transition-colors group-hover:text-[#061228] sm:h-5 sm:w-5 md:h-6 md:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8  left-1/2 z-30 flex -translate-x-1/2 items-center gap-3 sm:bottom-12">
        {filteredSlides.map((_, index) => (
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
        <span>{String(filteredSlides.length).padStart(2, '0')}</span>
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