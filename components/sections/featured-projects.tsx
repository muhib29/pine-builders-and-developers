'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from './section-header'
import { ProjectCard } from '@/components/cards/project-card'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Button } from '@/components/ui/button'

interface Project {
  _id: string
  title: string
  slug: { current: string }
  location?: string
  year?: string
  category?: string
  imageSrc: string
}

interface FeaturedProjectsProps {
  projects: Project[]
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects.filter((p) => p).slice(0, 6)

  return (
    <section className="home-section py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection scale>
          <SectionHeader
            label="Our Portfolio"
            title="Featured Projects"
            description="Explore our latest achievements in construction excellence, from luxury residences to landmark commercial developments."
          />
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <AnimatedSection
              key={project._id}
              animation="fade-up"
              delay={index * 80}
            >
              <ProjectCard
                title={project.title}
                slug={project.slug.current}
                location={project.location}
                year={project.year}
                category={project.category}
                imageSrc={project.imageSrc}
              />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-14 text-center" animation="fade-up" delay={200}>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group border-2 border-[#d4af34] bg-transparent text-[#061228] transition-all duration-300 hover:bg-[#d4af34] hover:text-[#061228]"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  )
}
