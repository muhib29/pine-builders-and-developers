"use client"

import React from "react"

// Always show the interactive map, with iOS/mobile fixes
export default function LazyMap() {
  return (
    <div
      className="relative aspect-video overflow-hidden rounded-lg bg-secondary flex items-center justify-center"
      style={{ minHeight: 320 }}
    >
      <iframe
        src="https://www.google.com/maps?q=LSA-1%20to%20LSA-12%2C%20Street-2%2C%20Row-1%2C%20Gulshan-e-Iqbal%2C%20Karachi&output=embed"
        className="absolute inset-0 h-full w-full border-0"
        loading="eager"
        title="Office Location"
        style={{
          minHeight: 320,
          width: '100%',
          height: '100%',
          willChange: 'transform',
          WebkitOverflowScrolling: 'touch',
          background: '#e5e7eb', // fallback bg
        }}
        allowFullScreen
      />
      <div className="absolute bottom-0 left-0 z-10 h-32 w-full pointer-events-none" />
    </div>
  )
}
