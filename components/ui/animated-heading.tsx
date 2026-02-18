"use client"

import React, { useEffect, useState } from 'react'

type Props = {
  text: string
  delay?: number
  className?: string
}

export default function AnimatedHeading({ text, delay = 60, className = '' }: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60)
    return () => clearTimeout(t)
  }, [])

  return (
    <span className={`typewrap ${className}`} aria-hidden={!mounted}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          className="typechar"
          style={{ transitionDelay: `${mounted ? i * delay : 0}ms` }}
        >
          {ch}
        </span>
      ))}
    </span>
  )
}
