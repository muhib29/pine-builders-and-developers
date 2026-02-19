"use client"

import React from "react"

// Always show the interactive map, with iOS/mobile fixes
export default function LazyMap() {
  return (
    <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden bg-secondary flex items-center justify-center">
      <iframe
        src="https://www.google.com/maps?q=LSA-1%20to%20LSA-12%2C%20Street-2%2C%20Row-1%2C%20Gulshan-e-Iqbal%2C%20Karachi&output=embed"
        className="w-full h-full border-0"
        loading="eager"
        title="Office Location"
        style={{
          width: '100%',
          height: '100%',
          minHeight: 200,
          willChange: 'transform',
          WebkitOverflowScrolling: 'touch',
          background: '#e5e7eb',
        }}
        allowFullScreen
      />
    </div>
  )
}
