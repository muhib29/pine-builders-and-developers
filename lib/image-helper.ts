/**
 * Image optimization helper for responsive images with srcset
 * Generates srcset for images >=150KB using pre-generated AVIF/WebP variants
 */

export interface ImageSrcSet {
  src: string;
  srcSet: string;
  sizes: string;
}

export interface ImageVariants {
  w480?: { avif: string; webp: string };
  w800?: { avif: string; webp: string };
  w1200?: { avif: string; webp: string };
  w1600?: { avif: string; webp: string };
}

const RESPONSIVE_WIDTHS = [480, 800, 1200, 1600];
const DEFAULT_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw';

/**
 * Generate srcset string for an image
 * @param basePath - Original image path (e.g. "/images/hero/hero-1.webp")
 * @param ext - File extension (will be stripped)
 * @returns Object with src, srcSet, and sizes attributes
 */
export function getResponsiveSrcSet(basePath: string, sizes?: string): ImageSrcSet {
  const ext = basePath.match(/\.[^/\\.]+$/)?.[0] || '';
  const base = basePath.replace(ext, '');

  // Build srcset with available variants (AVIF > WebP)
  const srcsetItems = RESPONSIVE_WIDTHS.map(w => {
    // Priority: AVIF .avif, WebP .webp, original
    const avif = `${base}-w${w}.avif`;
    const webp = `${base}-w${w}.webp`;
    return `${avif} ${w}w`;
  });

  // Add original fallback
  srcsetItems.push(`${basePath} 2000w`);

  return {
    src: basePath, // Fallback for browsers without srcset support
    srcSet: srcsetItems.join(', '),
    sizes: sizes || DEFAULT_SIZES,
  };
}

/**
 * Get optimized image props for Next.js Image component with srcset
 * @param src - Original image source
 * @param alt - Alt text
 * @param sizes - CSS media sizes (optional)
 * @returns Props object for <picture> or <img>
 */
export function getOptimizedImageProps(
  src: string,
  alt: string,
  sizes?: string
) {
  const { src: fallback, srcSet, sizes: computedSizes } = getResponsiveSrcSet(src, sizes);

  return {
    src: fallback,
    srcSet,
    sizes: computedSizes,
    alt,
  };
}

/**
 * Build a <picture> element's source tags for AVIF and WebP
 * @param basePath - Original image path
 * @returns Array of source elements JSX
 */
export function getPictureSourceProps(basePath: string) {
  const ext = basePath.match(/\.[^/\\.]+$/)?.[0] || '';
  const base = basePath.replace(ext, '');

  // AVIF sources (best compression)
  const avifSrcSet = RESPONSIVE_WIDTHS
    .map(w => `${base}-w${w}.avif ${w}w`)
    .join(', ');

  // WebP sources (good compression)
  const webpSrcSet = RESPONSIVE_WIDTHS
    .map(w => `${base}-w${w}.webp ${w}w`)
    .join(', ');

  return {
    avif: { srcSet: avifSrcSet, type: 'image/avif' },
    webp: { srcSet: webpSrcSet, type: 'image/webp' },
  };
}
