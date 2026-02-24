import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Our Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  'Residential Construction',
  'Commercial Buildings',
  'Industrial Projects',
  'Renovation & Remodeling',
  'Interior Design',
  'Project Management',
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <span className="font-serif text-2xl font-bold text-primary">
                PINE BUILDERS
              </span>
              <span className="block text-xs uppercase tracking-[0.3em] text-secondary-foreground/80">
                &amp; Developers
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-secondary-foreground/80">
              Building excellence since 1995. We transform visions into reality
              with precision, quality, and unwavering commitment to our clients.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/pinebuilders/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/pinebuilderdeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center   justify-center rounded-full bg-secondary-foreground/10 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@pine.builders.and?_r=1&_t=ZS-940IeMG3NhQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.08A6 6 0 0 0 5 20a6 6 0 0 0 10.6-2.38a6.88 6.88 0 0 0 .46-2.07v-5.8a7.72 7.72 0 0 0 4.58 1.42V9.5a4.36 4.36 0 0 1-.36-.025z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@PINEBUILDERSDEVELOPERS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Twitter"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold text-primary">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-secondary-foreground/80">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 font-serif text-lg font-semibold text-primary">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                   LSA 1 To 12 Floor, Street-2, Row-1
                  <br />
                  Gulshan-e-Iqbal, Block-5, Scheme-24, Karachi.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <div className='flex flex-col'>
                <a
                  href="tel:+923138222808"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                   +92 (313) 822-2808 
                </a>
                  <a
                  href="tel:+92134962038"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                    +92 (213) 496-2038
                </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a
                  href="mailto:pinebuilder83@gmail.com"
                  className="text-sm text-secondary-foreground/80 transition-colors hover:text-primary"
                >
                  pinebuilder83@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}

{/* Bottom Bar */}
{/* Digital Partner Strip */}
{/* <div className="border-t border-secondary-foreground/10">
  <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 text-center">
    <p className="text-[11px] tracking-wide text-secondary-foreground/40">
      Digital Partner{" "}
      <Link
        href="https://syedmuhib.vercel.app/"
        target="_blank"
        className="transition-colors hover:text-primary"
      >
        Syed Muhib
      </Link>
    </p>
  </div>
</div> */}

{/* Bottom Bar */}
<div className="border-t border-secondary-foreground/10">
  <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
      
      {/* Left Side */}
      <div>
        <p className="text-sm text-secondary-foreground/60">
          &copy; {new Date().getFullYear()} Pine Builders & Developers. All rights reserved.
        </p>

        <p className="mt-1 text-xs tracking-wide text-secondary-foreground/40">
          Digital Partner{" "}
          <Link
            href="https://syedmuhib.vercel.app/"
            target="_blank"
            className="transition-colors text-primary"
          >
            Syed Muhib Farooq
          </Link>
        </p>
      </div>

      {/* Right Side */}
      <div className="flex justify-center gap-6 md:justify-end">
        <Link
          href="/privacy-policy"
          className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms-of-service"
          className="text-sm text-secondary-foreground/60 transition-colors hover:text-primary"
        >
          Terms of Service
        </Link>
      </div>

    </div>
  </div>
</div>
    </footer>
  )
}
