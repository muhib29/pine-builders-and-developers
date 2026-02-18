'use client'

import { getPictureSourceProps } from '@/lib/image-helper'
import { cn } from '@/lib/utils'

interface HeroImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

/**
 * Responsive hero image using native <picture> with AVIF/WebP srcset.
 * Uses pre-generated responsive variants when available (run npm run images:responsive).
 * Falls back to original if variants don't exist.
 */
export function HeroImage({ src, alt, className, priority }: HeroImageProps) {
  const { avif, webp } = getPictureSourceProps(src)
  const sizes = '100vw'

  return (
    <picture className={cn('absolute inset-0 block size-full', className)}>
      <source srcSet={avif.srcSet} type={avif.type} sizes={sizes} />
      <source srcSet={webp.srcSet} type={webp.type} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="absolute inset-0 size-full object-cover"
      />
    </picture>
  )
}
