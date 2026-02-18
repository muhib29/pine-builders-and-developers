import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, MapPin, Calendar, Tag, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug.current === slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
    : 'https://pinebuildersdeveloper.com'

  return {
    title: `${project.title} | Pine Builders & Developers Project`,
    description: `${project.description} Built by Pine Builders & Developers in Karachi. ${project.category} project completed in ${project.year}.`,
    keywords: [
      project.title,
      'Pine Builders & Developers',
      'construction project Karachi',
      project.category,
      'builders and developers',
    ],
    alternates: { canonical: `/projects/${project.slug.current}` },
    openGraph: {
      title: `${project.title} | Pine Builders & Developers`,
      description: `${project.description} Built by leading builders and developers in Karachi.`,
      url: `${baseUrl}/projects/${project.slug.current}`,
      images: [{ url: project.imageSrc, alt: project.title, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Pine Builders & Developers`,
      description: project.description,
    },
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug.current,
  }))
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug.current === slug)

  if (!project) {
    notFound()
  }

  const projectIndex = projects.findIndex((p) => p._id === project._id)
  const prevProject = projects[projectIndex - 1]
  const nextProject = projects[projectIndex + 1]

  // Create gallery: prefer `project.gallery` (if defined), otherwise
  // fall back to using this project's image plus other project images.
  const galleryImages = (project.gallery && project.gallery.length)
    ? project.gallery.slice(0, 4)
    : [
        project.imageSrc,
        projects[(projectIndex + 1) % projects.length].imageSrc,
        projects[(projectIndex + 2) % projects.length].imageSrc,
        projects[(projectIndex + 3) % projects.length].imageSrc,
      ].filter(Boolean)

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
    : 'https://pinebuildersdeveloper.com'

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${baseUrl}/projects`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${baseUrl}/projects/${project.slug.current}`,
      },
    ],
  }

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main>
        {/* Hero — aspect-[4/3] on mobile for full visibility; tall min-h on laptop for impact */}
        <section className="relative overflow-hidden">
          <div className="relative w-full aspect-[4/3] min-h-[260px] sm:min-h-[320px] md:aspect-auto md:min-h-[55vh] lg:min-h-[65vh]">
            <Image
              src={project.imageSrc || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover mt-5 md:mt-18"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Link
                href="/projects"
                className="-mb-16 inline-flex items-center gap-2 text-sm text-secondary-foreground/80 transition-colors hover:text-primary md:mb-6 mb-0"
              >
                <ArrowLeft className="h-4 w-4 " />
                Back to Projects
              </Link>
              <div className=" flex-wrap items-center gap-4 text-sm text-secondary-foreground/80  md:flex hidden">
                {project.category && (
                  <span className="flex items-center gap-1.5">
                    <Tag className="h-4 w-4 text-primary" />
                    {project.category}
                  </span>
                )}
                {project.location && (
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    {project.location}
                  </span>
                )}
                {project.year && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-primary" />
                    {project.year}
                  </span>
                )}
              </div>
              <h1 className="mt-4 font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
            </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-3">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <AnimatedSection>
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    Project Overview
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    This project exemplifies our commitment to excellence in
                    construction. From the initial planning stages through to
                    completion, our team worked diligently to ensure every detail
                    met the highest standards of quality and craftsmanship. The
                    result is a structure that not only meets functional
                    requirements but also contributes positively to its
                    surrounding environment.
                  </p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    Our experienced team of architects, engineers, and
                    construction professionals collaborated closely with the
                    client throughout the project, ensuring their vision was
                    realized while incorporating sustainable building practices
                    and cutting-edge construction techniques.
                  </p>
                </AnimatedSection>
              </div>

              {/* Project Info Sidebar */}
              <div>
                <AnimatedSection animation="slide-left">
                  <div className="rounded-lg bg-muted p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      Project Details
                    </h3>
                    <dl className="mt-6 space-y-4">
                      <div className="border-b border-border pb-4">
                        <dt className="text-sm text-muted-foreground">
                          Project Type
                        </dt>
                        <dd className="mt-1 font-medium text-foreground">
                          {project.category}
                        </dd>
                      </div>
                      <div className="border-b border-border pb-4">
                        <dt className="text-sm text-muted-foreground">
                          Location
                        </dt>
                        <dd className="mt-1 font-medium text-foreground">
                          {project.location}
                        </dd>
                      </div>
                      <div className="border-b border-border pb-4">
                        <dt className="text-sm text-muted-foreground">
                          Year Completed
                        </dt>
                        <dd className="mt-1 font-medium text-foreground">
                          {project.year}
                        </dd>
                      </div>
                      <div className="border-b border-border pb-4">
                        <dt className="text-sm text-muted-foreground">
                          Duration
                        </dt>
                        <dd className="mt-1 font-medium text-foreground">
                          As per development schedule
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-muted-foreground">
                          Status
                        </dt>
                        <dd className="mt-1 font-medium text-primary">
                          {project.status}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="mb-10 font-serif text-2xl font-semibold text-foreground">
                Project Gallery
              </h2>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="group relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-secondary/0 transition-colors group-hover:bg-secondary/30" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              {prevProject ? (
                <Button
                  asChild
                  variant="outline"
                  className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href={`/projects/${prevProject.slug.current}`}>
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    {prevProject.title}
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {nextProject ? (
                <Button
                  asChild
                  variant="outline"
                  className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href={`/projects/${nextProject.slug.current}`}>
                    {nextProject.title}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary py-16">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="font-serif text-3xl font-bold text-secondary-foreground">
                Interested in a Similar Project?
              </h2>
              <p className="mt-4 text-secondary-foreground/80">
                Contact us today to discuss how we can bring your vision to life.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 group bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
