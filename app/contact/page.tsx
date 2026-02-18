import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { contactData } from '@/lib/data'

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
                  <form className="mt-8 space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-background"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (234) 567-890"
                        className="bg-background"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select project type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="renovation">Renovation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        className="bg-background resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </AnimatedSection>

              {/* Map & Additional Info */}
              <AnimatedSection animation="slide-left">
                <div className="space-y-8">
                  {/* Map Placeholder */}
                  <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary">
                    {/* Google Map */}
                    <iframe
                      src="https://www.google.com/maps?q=LSA-1%20to%20LSA-12%2C%20Street-2%2C%20Row-1%2C%20Gulshan-e-Iqbal%2C%20Karachi&output=embed"
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                      title="Office Location"
                    />
                    <div className="absolute bottom-0 left-0 z-10 h-32 w-full pointer-events-none" />

                    {/* Professional Address Card */}
                    <div className="absolute z-20 bottom-4 left-4 bg-black/70 rounded-lg p-4 max-w-xs shadow-xl">
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-1 h-6 w-6 text-white" />
                        <div>
                          <p className="font-semibold text-white">
                            LSA-1 to LSA-12, 1st–12th Floor
                          </p>
                          <p className="text-white/90 text-sm">
                            Street-2, Row-1, Gulshan-e-Iqbal, Block-5
                          </p>
                          <p className="text-white/90 text-sm">
                            Scheme-24, Karachi, Pakistan
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

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
