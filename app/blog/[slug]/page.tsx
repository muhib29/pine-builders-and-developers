import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
} from 'lucide-react'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { blogPosts } from '@/lib/data'
import { AnimatedSection } from '@/components/ui/animated-section'
import { BlogCard } from '@/components/cards/blog-card'
import ShareButtons from '@/components/blog/share-buttons'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug.current === slug)

  if (!post) {
    return {
      title: 'Post Not Found | Pine Builders and Developers',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? `https://${process.env.NEXT_PUBLIC_SITE_URL.replace(/^https?:\/\//, '')}`
    : 'https://pinebuildersdeveloper.com'

  return {
    title: `${post.title} | Pine Builders & Developers Blog`,
    description: `${post.excerpt} Read more construction insights from Pine Builders & Developers in Karachi.`,
    keywords: [
      post.category,
      'construction blog',
      'Pine Builders',
      'builders and developers',
      ...(post.tags || []),
    ],
    alternates: { canonical: `/blog/${post.slug.current}` },
    openGraph: {
      title: `${post.title} | Pine Builders & Developers`,
      description: post.excerpt,
      url: `${baseUrl}/blog/${post.slug.current}`,
      images: [{ url: post.imageSrc, alt: post.title, width: 1200, height: 630 }],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug.current === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p._id !== post._id)
    .slice(0, 3)

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

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
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `${baseUrl}/blog/${post.slug.current}`,
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
      <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <Image
          src={post.imageSrc || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <Link
                href="/blog"
                className="mb-6 mr-4 inline-flex items-center gap-2 text-sm text-secondary-foreground/70 transition-colors hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4 " />
                Back to Blog
              </Link>
              <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                {post.category}
              </span>
              <h1 className="mb-6 font-serif text-3xl font-bold text-secondary-foreground md:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3 -ml-5">
                  <Image
                    src={post.author.image || "/placeholder.svg"}
                    alt={post.author.name}
                    width={28}
                    height={48}
                    className="h-12 w-52 mt-4  rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-secondary-foreground">
                      {post.author.name}
                    </p>
                    <p className="text-sm text-secondary-foreground/70">
                      {post.author.role}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-secondary-foreground/70">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formattedDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime} min read
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_200px]">
            {/* Main Content */}
            <AnimatedSection animation="fade-up">
              <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
                {post.content?.map((block, index) => {
                  if (block.type === 'paragraph') {
                    return (
                      <p key={index} className="mb-6 leading-relaxed">
                        {block.text}
                      </p>
                    )
                  }
                  if (block.type === 'heading') {
                    return (
                      <h2
                        key={index}
                        className="mb-4 mt-10 font-serif text-2xl font-bold text-foreground"
                      >
                        {block.text}
                      </h2>
                    )
                  }
                  return null
                })}

                {/* Additional mock content for fuller blog post */}
                <h2 className="mb-4 mt-10 font-serif text-2xl font-bold text-foreground">
                  Looking Ahead
                </h2>
                <p className="mb-6 leading-relaxed">
                  As we continue to push the boundaries of what is possible in
                  construction, our commitment to quality and innovation remains
                  unchanged. Every project we undertake is an opportunity to
                  demonstrate our expertise and dedication to excellence.
                </p>
                <p className="mb-6 leading-relaxed">
                  We believe that the future of construction lies in embracing
                  new technologies while honoring the time-tested principles of
                  craftsmanship that have guided our industry for generations.
                  This balance between innovation and tradition is what sets
                  Pine Builders and Developers apart.
                </p>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 border-t border-border pt-8">
                    <div className="flex flex-wrap items-center gap-3">
                      <Tag className="h-5 w-5 text-muted-foreground" />
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-4 py-1 text-sm text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </AnimatedSection>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="mb-8">
                    <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      Share Article
                    </h4>
                    <ShareButtons title={post.title} />
                  </div>
                </AnimatedSection>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Author Box */}
      <section className="border-y border-border bg-muted/30 py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                width={96}
                height={96}
                className="h-24 -ml-8 w-54 shrink-0 rounded-full object-cover"
              />
              <div>
                <h3 className="mb-1 font-serif text-xl font-bold text-foreground">
                  {post.author.name}
                </h3>
                <p className="mb-3 text-sm text-primary">{post.author.role}</p>
                <p className="text-muted-foreground">
                  With years of experience in the construction industry,{' '}
                  {post.author.name.split(' ')[0]} brings valuable insights and
                  expertise to every article. Follow along for more industry
                  updates and professional tips.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <h2 className="mb-10 font-serif text-3xl font-bold text-foreground">
                Related Articles
              </h2>
            </AnimatedSection>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <AnimatedSection
                  key={relatedPost._id}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <BlogCard
                    title={relatedPost.title}
                    excerpt={relatedPost.excerpt}
                    slug={relatedPost.slug.current}
                    imageSrc={relatedPost.imageSrc}
                    author={relatedPost.author}
                    category={relatedPost.category}
                    publishedAt={relatedPost.publishedAt}
                    readTime={relatedPost.readTime}
                  />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="mb-4 font-serif text-3xl font-bold text-secondary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 text-secondary-foreground/70">
              Contact us today to discuss how we can bring your construction
              vision to life with our expert team and proven track record.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
