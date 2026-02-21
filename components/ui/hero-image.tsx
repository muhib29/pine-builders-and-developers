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
 * - No blur placeholder on LCP image (avoids decode delay on mobile)
 * - Aggressive mobile sizes for smaller initial payload
 */
export function HeroImage({ src, alt, className, priority }: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      priority={priority}
      className={cn('absolute inset-0 size-full object-cover', className)}
      quality={priority ? 85 : 75}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      placeholder="empty"
    />
  )
}
