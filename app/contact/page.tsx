// removed 'use client' to allow metadata export
import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
// Removed useState; no client hooks in this file
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { contactData } from '@/lib/data'
import ContactForm from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Pine Builders & Developers in Karachi for a free consultation on your construction project. Leading builders and developers in Karachi, Pakistan. Get in touch today!',
  keywords: [
    'contact Pine Builders',
    'builders and developers contact',
    'construction consultation Karachi',
    'Pine Builders contact',
  ],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Pine Builders & Developers in Karachi',
    description:
      'Get in touch with leading builders and developers in Karachi for a free consultation on your construction project.',
  },
}
const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: contactData.phones,
    href: `tel:${contactData.phones[0].replace(/[^+\d]/g, '')}`,
    isList: true,
  },
  {
    icon: Mail,
    title: 'Email',
    content: contactData.email,
    href: `mailto:${contactData.email}`,
  },
  {
    icon: MapPin,
    title: 'Address',
    content: contactData.address,
    href: '#',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: contactData.officeHours,
    href: '#',
  },
]

import LazyMap from '@/components/contact/lazy-map'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wider text-primary">
                Get In Touch
              </span>
              <h1 className="font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl lg:text-6xl">
                Contact Us
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/80">
                Ready to start your next project? We would love to hear from you.
                Contact us for a free consultation and quote.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
       
       <AnimatedSection
                  key={item.title}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <a
                    href={item.href}
                    className="group block rounded-lg bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <div className="mt-2 text-sm text-muted-foreground space-y-1">
                      {Array.isArray(item.content) ? (
                        item.content.map((value) => (
                          <p key={value}>{value}</p>
                        ))
                      ) : (
                        <p>{item.content}</p>
                      )}
                    </div>

                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <AnimatedSection animation="slide-right">
                <div className="rounded-lg bg-card p-8 shadow-sm">
                  <h2 className="font-serif text-2xl font-semibold text-card-foreground">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    Fill out the form below and we will get back to you within 24
                    hours.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>

              {/* Map & Additional Info */}
              <AnimatedSection animation="slide-left">
                <div className="space-y-8">
{/* Lazy-load Google Map: show static image and button, load iframe after click */}
<LazyMap />

{/* Why Choose Us */}
                  <div className="rounded-lg bg-card p-8 shadow-sm">
                    <h3 className="font-serif text-xl font-semibold text-card-foreground">
                      Why Choose Pine Builders and Developers?
                    </h3>
                    <ul className="mt-6 space-y-4">
                      {[
                        'Over 25 years of industry experience',
                        'Free consultation and detailed quotes',
                        'Licensed and fully insured professionals',
                        'On-time project delivery guaranteed',
                        'Transparent communication throughout',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
