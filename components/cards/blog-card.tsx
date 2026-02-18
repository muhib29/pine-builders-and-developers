'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  imageSrc: string
  author: {
    name: string
    role: string
  }
  category: string
  publishedAt: string
  readTime: number
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  slug,
  imageSrc,
  author,
  category,
  publishedAt,
  readTime,
  featured = false,
}: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-card">
        <Link href={`/blog/${slug}`} className="block">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={70}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent md:bg-gradient-to-r" />
              <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                {category}
              </span>
            </div>
            <div className="flex flex-col justify-center p-6 md:py-8 md:pr-8 md:pl-0">
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {readTime} 
                </span>
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                {title}
              </h3>
              <p className="mb-6 line-clamp-3 text-muted-foreground">
                {excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-muted" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {author.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{author.role}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Read More <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    )
  }

  return (
    <article className="group overflow-hidden rounded-xl bg-card transition-all duration-300 hover:shadow-lg">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={70}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            {category}
          </span>
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime} min read
            </span>
          </div>
          <h3 className="mb-2 line-clamp-2 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {/* <div className="h-8 w-8 rounded-full bg-muted" /> */}
              {/* <Image
                src={author.image || "/placeholder.svg"}
                alt={author.name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              /> */}
              <span className="text-sm font-medium text-foreground">
                {author.name}
              </span>
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
              Read <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
