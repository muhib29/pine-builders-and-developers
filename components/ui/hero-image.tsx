'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HeroImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/**
 * Hero image using Next.js <Image> for LCP and responsive optimization.
 */
export function HeroImage({ src, alt, className, priority }: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
      priority={priority}
      className={cn('absolute inset-0 size-full object-cover', className)}
      quality={85}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      placeholder="blur"
      blurDataURL="/images/hero/hero-7.webp"
    />
  )
}
