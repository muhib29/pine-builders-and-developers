import type { SanityImageSource } from '@sanity/image-url'

export interface Project {
  _id: string
  title: string
  slug: {
    current: string
  }
  location: string
  year: string
  category: string
  description: string
  featuredImage: SanityImageSource
  gallery?: SanityImageSource[]
  featured?: boolean
}

export interface About {
  title: string
  heroHeading: string
  heroSubheading: string
  heroImage: SanityImageSource
  mission: string
  vision: string
  history: string
  yearsExperience: number
  projectsCompleted: number
  happyClients: number
  teamMembers: number
  teamImage: SanityImageSource
}

export interface Contact {
  phone: string
  email: string
  address: string
  officeHours: string
  mapEmbed: string
  socialLinks: {
    facebook?: string
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

export interface Service {
  title: string
  description: string
  icon: string
}

export interface SiteSettings {
  siteName: string
  tagline: string
  logo: SanityImageSource
  heroHeading: string
  heroSubheading: string
  heroImage: SanityImageSource
  ctaText: string
  services: Service[]
  footerText: string
}
