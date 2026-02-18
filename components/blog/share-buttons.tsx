'use client'

import { useState } from 'react'
import { Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface ShareButtonsProps {
  title: string
}

export default function ShareButtons({ title }: ShareButtonsProps) {
  const { toast } = useToast()

  const handleShare = (platform: string) => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    let shareUrl = ''

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        break
      case 'copy':
        if (navigator.clipboard) {
          navigator.clipboard.writeText(url)
          toast({
            title: 'Success',
            description: 'Link copied to clipboard!',
          })
        }
        return
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => handleShare('facebook')}
        className="flex items-center gap-3 rounded-lg border border-border p-3 text-foreground transition-all hover:border-primary hover:text-primary"
      >
        <Facebook className="h-5 w-5" />
        <span className="text-sm">Facebook</span>
      </button>
      <button
        type="button"
        onClick={() => handleShare('twitter')}
        className="flex items-center gap-3 rounded-lg border border-border p-3 text-foreground transition-all hover:border-primary hover:text-primary"
      >
        <Twitter className="h-5 w-5" />
        <span className="text-sm">Twitter</span>
      </button>
      <button
        type="button"
        onClick={() => handleShare('linkedin')}
        className="flex items-center gap-3 rounded-lg border border-border p-3 text-foreground transition-all hover:border-primary hover:text-primary"
      >
        <Linkedin className="h-5 w-5" />
        <span className="text-sm">LinkedIn</span>
      </button>
      <button
        type="button"
        onClick={() => handleShare('copy')}
        className="flex items-center gap-3 rounded-lg border border-border p-3 text-foreground transition-all hover:border-primary hover:text-primary"
      >
        <Share2 className="h-5 w-5" />
        <span className="text-sm">Copy Link</span>
      </button>
    </div>
  )
}
