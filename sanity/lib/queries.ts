import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    location,
    year,
    category,
    description,
    featuredImage,
    featured
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    title,
    slug,
    location,
    year,
    category,
    featuredImage
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    location,
    year,
    category,
    description,
    featuredImage,
    gallery
  }
`

export const aboutQuery = groq`
  *[_type == "about"][0] {
    title,
    heroHeading,
    heroSubheading,
    heroImage,
    mission,
    vision,
    history,
    yearsExperience,
    projectsCompleted,
    happyClients,
    teamMembers,
    teamImage
  }
`

export const contactQuery = groq`
  *[_type == "contact"][0] {
    phone,
    email,
    address,
    officeHours,
    mapEmbed,
    socialLinks
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    logo,
    heroHeading,
    heroSubheading,
    heroImage,
    ctaText,
    services,
    footerText
  }
`

export const blogPostsQuery = groq`
  *[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author,
    category,
    publishedAt,
    readTime,
    featured
  }
`

export const featuredBlogPostsQuery = groq`
  *[_type == "blog" && featured == true] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author,
    category,
    publishedAt,
    readTime
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author,
    category,
    publishedAt,
    readTime,
    content,
    tags
  }
`

export const relatedBlogPostsQuery = groq`
  *[_type == "blog" && slug.current != $slug && category == $category] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt,
    readTime
  }
`
