'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right'
  delay?: number
  threshold?: number
  /** Slight scale-up on reveal for a more premium feel */
  scale?: boolean
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.06,
  scale = false,
}: AnimatedSectionProps) {
  const baseTransition = {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  }

  const initial = (() => {
    switch (animation) {
      case 'fade-in':
        return { opacity: 0, scale: scale ? 0.98 : 1 }
      case 'slide-left':
        return { opacity: 0, x: -24 }
      case 'slide-right':
        return { opacity: 0, x: 24 }
      case 'fade-up':
      default:
        return { opacity: 0, y: 18, scale: scale ? 0.98 : 1 }
    }
  })()

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ ...baseTransition, delay: delay / 1000 }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  )
}
