'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '@/components/ui/animated-section'

interface Stat {
  value: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { value: 28, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 350, suffix: '+', label: 'Happy Clients' },
  { value: 120, suffix: '+', label: 'Team Members' },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="home-section bg-[#061228] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              animation="fade-up"
              delay={index * 80}
            >
              <div className="text-center">
                <div className="mx-auto mb-4 w-24">
                  <div
                    className="radial-ring mx-auto"
                    style={{
                      // Visual ring fill using conic-gradient, mapped to value
                      ['--ring-fill' as any]: `rgba(212,175,52,0.95) ${Math.min(360, (stat.value / 500) * 360)}deg, rgba(255,255,255,0.06) 0deg`,
                    }}
                  />
                </div>
                <div className="font-serif text-4xl font-bold text-[#d4af34] lg:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-white/70">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
