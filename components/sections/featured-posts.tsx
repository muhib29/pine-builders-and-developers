'use client'

import React from 'react'
import { BlogCard } from '@/components/cards/blog-card'
import { AnimatedSection } from '@/components/ui/animated-section'
import { SectionHeader } from './section-header'

type Props = {
  posts: any[]
}

export function FeaturedPosts({ posts }: Props) {
  const featured = posts.filter((p) => p.featured).slice(0, 3)

  if (featured.length === 0) return null

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection scale>
          <SectionHeader
            label="Insights"
            title="Latest From Our Blog"
            description="Read our latest articles on construction trends, project updates, and expert advice."
          />
        </AnimatedSection>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((post, i) => (
            <AnimatedSection key={post._id} animation="fade-up" delay={(i % 3) * 100}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug.current}
                imageSrc={post.imageSrc}
                author={post.author}
                category={post.category}
                publishedAt={post.publishedAt}
                readTime={post.readTime}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
