import type { Metadata } from 'next'
import dynamicImport from 'next/dynamic'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
// import { HeroCarousel } from '@/components/sections/hero-carousel'
const HeroCarousel = dynamicImport(() => import('../components/sections/hero-carousel').then(mod => ({ default: mod.HeroCarousel })), {
  ssr: true,
});
import { siteSettings, projects, blogPosts } from '@/lib/data'
export const dynamic = 'force-static'
// import dynamicImport from 'next/dynamic'
// Lazy load below-the-fold sections for better initial page load performance
const ServicesSection = dynamicImport(() => import('@/components/sections/services-section').then(mod => ({ default: mod.ServicesSection })), {
  ssr: true, // Keep SSR for SEO, but lazy load the JS bundle
})

const StatsSection = dynamicImport(() => import('@/components/sections/stats-section').then(mod => ({ default: mod.StatsSection })), {
  ssr: true,
})

const FeaturedProjects = dynamicImport(() => import('@/components/sections/featured-projects').then(mod => ({ default: mod.FeaturedProjects })), {
  ssr: true,
})

const TestimonialsSection = dynamicImport(() => import('@/components/sections/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })), {
  ssr: true,
})

const FeaturedPosts = dynamicImport(() => import('@/components/sections/featured-posts').then(mod => ({ default: mod.FeaturedPosts })), {
  ssr: true,
})

const CTASection = dynamicImport(() => import('@/components/sections/cta-section').then(mod => ({ default: mod.CTASection })), {
  ssr: true,
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
    : 'https://pinebuildersdeveloper.com'

export const metadata: Metadata = {
  title: 'Pine Builders & Developers in Karachi | Builders and Developers',
  description:
    'Pine Builders & Developers in Karachi - Leading builders and developers offering residential, commercial, and industrial construction services. Trusted construction company in Karachi since 1995.',
  keywords: [
    'Pine Builders & Developers in Karachi',
    'Builders and Developers in Karachi',
    'Pine Builders and Developers',
    'Pine Builders Karachi',
    'construction company Karachi',
    'builders Karachi',
    'developers Karachi',
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Pine Builders & Developers in Karachi | Builders and Developers',
    description:
      'Leading builders and developers in Karachi offering residential, commercial, and industrial construction services since 1995.',
    url: siteUrl,
    images: [
      {
        url: '/images/hero/hero-7.webp',
        width: 1200,
        height: 630,
        alt: 'Pine Builders & Developers in Karachi',
      },
    ],
  },
}




export default function HomePage() {
  return (
    <>
      <Navbar />
      <main data-page="home" className="min-h-screen">
        <HeroCarousel />
        <ServicesSection services={siteSettings.services} />
        <StatsSection />
        <FeaturedProjects projects={projects} />
        <TestimonialsSection />
        <FeaturedPosts posts={blogPosts} />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
