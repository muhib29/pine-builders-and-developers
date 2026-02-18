'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import Image from 'next/image'
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
        isScrolled
          ? 'bg-[#061228]/98 backdrop-blur-md shadow-lg shadow-black/10'
          : 'bg-[#061228]/70 backdrop-blur-sm'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-90">
            <div className="mt-7 -ml-5 items-center">
              <Image className="top-10" src="/images/logo12.webp" alt="Pine Builders and Developers Logo" width={280} height={110} />
            </div>
          </Link>

          {/* Desktop Navigation — underline animation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative py-1 text-sm font-medium uppercase tracking-wider text-white/90 transition-colors duration-300 hover:text-[#d4af34]',
                  pathname === link.href && 'text-[#d4af34]'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 h-0.5 bg-[#d4af34] transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                  aria-hidden
                />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="tel:+923138222808"
              className="flex items-center gap-2 text-sm text-white/90 transition-colors duration-300 hover:text-[#d4af34]"
            >
              <Phone className="h-4 w-4 text-[#d4af34]" />
              <span>+92 (313) 822-2808</span>
            </a>
            <Button
              asChild
              className="bg-[#d4af34] text-[#061228] transition-all duration-300 hover:bg-[#c4a02a] hover:scale-[1.02]"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-secondary-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu — smooth expand */}
      <div
        className={cn(
          'overflow-hidden transition-[max-height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden',
          isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <div className="bg-[#061228]/98 backdrop-blur-md px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'block py-3 text-base font-medium uppercase tracking-wider transition-colors duration-300',
                pathname === link.href ? 'text-[#d4af34]' : 'text-white/90 hover:text-[#d4af34]'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 border-t border-white/10 pt-4">
            <a
              href="tel:+923138222808"
              className="mb-4 flex items-center gap-2 text-sm text-white/90 transition-colors hover:text-[#d4af34]"
            >
              <Phone className="h-4 w-4 text-[#d4af34]" />
              <span>+92 (313) 822-2808</span>
            </a>
            <Button asChild className="w-full bg-[#d4af34] text-[#061228] hover:bg-[#c4a02a] transition-colors duration-300">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
