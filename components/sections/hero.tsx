'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroProps {
  heading: string
  subheading?: string
  ctaText?: string
  ctaLink?: string
  showScrollIndicator?: boolean
  overlay?: 'dark' | 'gradient' | 'none'
  size?: 'full' | 'large' | 'medium'
  imageSrc?: string
}

export function Hero({
  heading,
  subheading,
  ctaText = 'Explore Our Work',
  ctaLink = '/projects',
  showScrollIndicator = true,
  overlay = 'gradient',
  size = 'full',
  imageSrc = '/images/hero-construction.webp',
}: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY
        const parallaxSpeed = 0.5
        heroRef.current.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className={cn(
        'relative flex w-full items-center justify-center overflow-hidden',
        size === 'full' && 'min-h-screen',
        size === 'large' && 'min-h-[80vh]',
        size === 'medium' && 'min-h-[60vh]'
      )}
    >
      {/* Background Image with Parallax */}
      <div ref={heroRef} className="absolute inset-0 -z-10">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt="Construction site"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlay */}
      {overlay !== 'none' && (
        <div
          className={cn(
            'absolute inset-0 -z-10',
            overlay === 'dark' && 'bg-secondary/70',
            overlay === 'gradient' &&
              'bg-gradient-to-b from-secondary/80 via-secondary/60 to-secondary/90'
          )}
        />
      )}

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 pt-20 text-center sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wider text-primary">
            Building Excellence Since 1995
          </span>
          <h1 className="mx-auto max-w-4xl font-serif text-4xl font-bold leading-tight tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-balance">{heading}</span>
          </h1>
          {subheading && (
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground/80 sm:text-xl">
              {subheading}
            </p>
          )}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group bg-primary px-8 text-primary-foreground hover:bg-primary/90"
            >
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary-foreground/30 bg-transparent text-secondary-foreground hover:bg-secondary-foreground/10"
            >
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      )}
    </section>
  )
}
