'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  slug: string
  location?: string
  year?: string
  category?: string
  imageSrc: string
  className?: string
}

export function ProjectCard({
  title,
  slug,
  location,
  year,
  category,
  imageSrc,
  className,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className={cn('group block', className)}>
      <article className="relative overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#d4af34]/20 hover:shadow-md hover:shadow-[#061228]/06">
        {/* Golden accent line — reveals on hover */}
        <span className="absolute bottom-0 left-0 z-10 h-0.5 w-0 bg-[#d4af34] transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={70}
          />
          <div className="absolute inset-0 bg-[#061228]/0 transition-colors duration-500 group-hover:bg-[#061228]/50" />
          
          {category && (
            <span className="absolute left-4 top-4 rounded-full bg-[#d4af34] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#061228]">
              {category}
            </span>
          )}

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-400 group-hover:opacity-100 group-hover:backdrop-blur-sm">
            <div className="flex flex-col items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d4af34] text-[#061228] transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-6 w-6" />
              </span>
              <div className="text-center text-sm text-white/90 px-4">
                <div className="font-semibold">{title}</div>
                <div className="text-xs text-white/70 mt-1">View project details</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-serif text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-[#061228]">
            {title}
          </h3>
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {location && (
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-[#d4af34]" />
                {location}
              </span>
            )}
            {year && (
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4 text-[#d4af34]" />
                {year}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}
