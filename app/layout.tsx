import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'
import WhatsAppFAB from '../components/ui/whatsapp-fab'
import { contactData } from '@/lib/data'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
  : 'https://pinebuildersdeveloper.com'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'RealEstateAgent', 'ConstructionCompany'],
  name: 'Pine Builders and Developers',
  alternateName: [
    'Pine Builders & Developers',
    'Pine Builders',
    'Pine Developers',
    'Pine Builders Karachi',
    'Builders and Developers Karachi',
    'Builders and Developers in Karachi',
  ],
  url: siteUrl,
  logo: `${siteUrl}/images/logo12.webp`,
  description: 'Leading construction and real estate company in Karachi, Pakistan. Building excellence in residential, commercial, and industrial projects since 1995.',
  foundingDate: '1995',
  address: {
    '@type': 'PostalAddress',
    streetAddress: contactData.address,
    addressLocality: 'Karachi',
    addressRegion: 'Sindh',
    postalCode: '75300',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '24.8607',
    longitude: '67.0011',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '18:00',
  },
  areaServed: {
    '@type': 'City',
    name: 'Karachi',
    containedIn: {
      '@type': 'Country',
      name: 'Pakistan',
    },
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: contactData.phones[0],
      email: contactData.email,
      contactType: 'customer service',
      areaServed: ['PK', 'Karachi'],
      availableLanguage: ['English', 'Urdu'],
    },
    {
      '@type': 'ContactPoint',
      telephone: contactData.phones[1] || contactData.phones[0],
      contactType: 'sales',
      areaServed: ['PK', 'Karachi'],
      availableLanguage: ['English', 'Urdu'],
    },
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
  sameAs: Object.values(contactData.socialLinks).filter(Boolean),
}

const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Pine Builders and Developers',
  alternateName: ['Pine Builders', 'Pine Developers', 'Pine Builders & Developers'],
  url: siteUrl,
  description: 'Construction and real estate company in Karachi, Pakistan. Residential, commercial, industrial projects since 1995.',
  publisher: { '@type': 'Organization', name: 'Pine Builders and Developers' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteUrl}/blog?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Pine Builders and Developers | Building Excellence Since 1995',
    template: '%s | Pine Builders and Developers',
  },
  description:
    'Pine Builders & Developers in Karachi - Leading construction and real estate company delivering exceptional quality in residential, commercial, and industrial projects. Builders and Developers in Karachi since 1995.',
  keywords: [
    'Pine Builders and Developers',
    'Pine Builders & Developers',
    'Pine Builders',
    'Pine Developers',
    'Builders and Developers',
    'Builders and Developers in Karachi',
    'Pine Builders & Developers in Karachi',
    'Pine Builders and Developers Karachi',
    'construction Karachi',
    'real estate Karachi',
    'construction company Karachi',
    'builders Karachi',
    'developers Karachi',
    'building',
    'residential',
    'commercial',
    'industrial',
    'development',
    'Karachi',
    'Pakistan',
  ],
  authors: [{ name: 'Pine Builders and Developers' }],
  creator: 'Pine Builders and Developers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Pine Builders and Developers',
    title: 'Pine Builders and Developers | Building Excellence Since 1995',
    description:
      'Pine Builders & Developers in Karachi - Leading construction and real estate company delivering exceptional quality in residential, commercial, and industrial projects.',
    url: siteUrl,
    images: [
      {
        url: '/images/hero/hero-7.webp',
        width: 1200,
        height: 630,
        alt: 'Pine Builders and Developers - Building Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pine Builders and Developers | Building Excellence Since 1995',
    description:
      'Pine Builders & Developers in Karachi - Leading construction and real estate company delivering exceptional quality in residential, commercial, and industrial projects.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/icon1.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/manifest.json',
  category: 'construction',
}

export const viewport: Viewport = {
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload all hero images for LCP and carousel transitions */}
        <link rel="preload" as="image" href="/images/hero/hero-7.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero/hero-6.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero/hero-9.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero/hero-2.webp" type="image/webp" />
        {/* Inline critical CSS for navbar and hero section */}
        <style>
          {`
            .navbar {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              z-index: 50;
              background: var(--background, #fff);
              box-shadow: 0 2px 8px rgba(0,0,0,0.04);
              transition: background 0.3s;
            }
            .hero {
              min-height: 60vh;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              overflow: hidden;
              background: var(--secondary, #061228);
              color: var(--primary-foreground, #fff);
            }
            .hero-heading {
              font-size: 2.5rem;
              font-weight: 700;
              margin-bottom: 1rem;
            }
            .hero-subheading {
              font-size: 1.25rem;
              font-weight: 400;
              margin-bottom: 2rem;
            }
            .hero-cta {
              display: inline-block;
              padding: 0.75rem 2rem;
              background: var(--golden, #d4af34);
              color: var(--primary-foreground, #fff);
              border-radius: 0.5rem;
              font-weight: 600;
              text-decoration: none;
              transition: background 0.2s;
            }
            .hero-cta:hover {
              background: #bfa23a;
            }
          `}
        </style>
        <link rel="preload" as="image" href="/images/hero/hero-4.webp" type="image/webp" />
      </head>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {children}
        <WhatsAppFAB />
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
