import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { blogPosts } from '@/lib/data'
import { BlogCard } from '@/components/cards/blog-card'
import { AnimatedSection } from '@/components/ui/animated-section'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Stay updated with the latest construction industry news, project updates, tips, and insights from Pine Builders & Developers in Karachi. Expert advice from leading builders and developers.',
  keywords: [
    'construction blog Karachi',
    'builders blog',
    'construction tips',
    'real estate news Karachi',
  ],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog - Pine Builders & Developers in Karachi',
    description:
      'Latest construction industry news, project updates, and expert insights from leading builders and developers in Karachi.',
  },
}

export default function BlogPage() {
  const latestPosts = blogPosts

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-secondary pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <AnimatedSection>
              <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium tracking-wider text-primary">
                Our Blog
              </span>
              <h1 className="font-serif text-4xl font-bold text-secondary-foreground sm:text-5xl lg:text-6xl">
                Insights & Updates
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-secondary-foreground/80">
                Stay informed with the latest construction trends, project showcases, and expert advice from our team.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post, index) => (
                <AnimatedSection
                  key={post._id}
                  animation="fade-up"
                  delay={(index % 3) * 100}
                >
                  <BlogCard
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug.current}
                    imageSrc={post.imageSrc}
                    author={post.author}
                    category={post.category}
                    publishedAt={post.publishedAt}
                    readTime={post.readTime}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
