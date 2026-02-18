'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLineVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'mb-14 md:mb-20',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      {label && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af34]">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        <span className="text-balance">{title}</span>
      </h2>
      {/* Animated golden accent line */}
      <div
        className={cn(
          'mt-4 h-px overflow-hidden',
          align === 'center' && 'mx-auto',
          align === 'left' && 'mr-auto'
        )}
        style={{ width: align === 'center' ? 80 : 64 }}
      >
        <span
          className={cn(
            'block h-full bg-[#d4af34] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
            align === 'left' ? 'origin-left' : 'origin-center',
            lineVisible ? 'scale-x-100' : 'scale-x-0'
          )}
        />
      </div>
      {description && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed text-muted-foreground max-w-2xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
