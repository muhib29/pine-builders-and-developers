import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
// import { ProjectCard } from '@/components/cards/project-card'
import { AnimatedSection } from '@/components/ui/animated-section'
import { projects } from '@/lib/data'
import ProjectsList from '@/components/projects/projects-list'

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore Pine Builders & Developers projects in Karachi - residential, commercial, and industrial developments. View our portfolio of completed construction projects by leading builders and developers in Karachi.',
  keywords: [
    'Pine Builders & Developers projects',
    'construction projects Karachi',
    'builders and developers projects',
    'residential projects Karachi',
    'commercial projects Karachi',
  ],
  alternates: { canonical: '/projects' },
  openGraph: {
    title: 'Pine Builders & Developers Projects in Karachi',
    description:
      'Explore our portfolio of completed construction projects including residential, commercial, and industrial developments in Karachi.',
  },
}

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wider text-primary">
                Our Portfolio
              </span>
              <h1 className="font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl lg:text-6xl">
                Featured Projects
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/80">
                Discover our diverse portfolio of construction excellence, from
                luxury residences to landmark commercial developments.
              </p>
            </AnimatedSection>
          </div>
        </section>

        <ProjectsList projects={projects} />
      </main>
      <Footer />
    </>
  )
}
