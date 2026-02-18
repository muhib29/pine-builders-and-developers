'use client'

import { cn } from '@/lib/utils'

interface HeroImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/**
 * Hero image using native <img>. Ensures main images always load reliably.
 */
export function HeroImage({ src, alt, className, priority }: HeroImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      className={cn('absolute inset-0 size-full object-cover', className)}
    />
  )
}
