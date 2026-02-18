import Link from 'next/link'
import { ArrowLeft, Construction } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
          <Construction className="h-12 w-12 text-primary" />
        </div>
        <h1 className="font-serif text-6xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The page you are looking for does not exist or has been moved.
          Let us help you get back on track.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
