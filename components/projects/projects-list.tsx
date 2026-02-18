"use client"
import React, { useMemo, useState } from 'react'
import { AnimatedSection } from '@/components/ui/animated-section'
import { ProjectCard } from '@/components/cards/project-card'

type Props = {
  projects: any[]
}

const categories = ['All', 'Residential', 'Commercial']

export default function ProjectsList({ projects }: Props) {
  const [active, setActive] = useState('All')

  const filtered = useMemo(() => {
    if (active === 'All') return projects
    return projects.filter((p) => p.category === active)
  }, [active, projects])

  return (
    <>
      <section className="border-b border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => {
              const isActive = category === active
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors hover:bg-muted ${
                    isActive ? 'bg-primary text-primary-foreground' : ''
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <AnimatedSection
                key={project._id}
                animation="fade-up"
                delay={(index % 3) * 100}
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
        </div>
      </section>
    </>
  )
}
