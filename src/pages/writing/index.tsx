import { AnimatedLines } from '@/components/common/Background'
import CardWriting from './components/CardWriting'
import { WritingFrontmatter } from '@/lib/mdx'

interface WritingPageProps {
  writings: WritingFrontmatter[]
}

const WritingPage = ({ writings }: WritingPageProps) => {
  return (
    <main className="bg-background min-h-screen">
      <div className="pt-20">
        <section className="relative px-6 py-12">
          <div className="absolute -top-12 left-1/2 w-full max-w-4xl -translate-x-1/2 transform">
            <AnimatedLines className="opacity-30" />
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <h1 className="mb-4 text-4xl font-light md:text-5xl">Writing</h1>
              <p className="text-muted-foreground text-lg">
                Thoughts on web development, engineering, and technology
              </p>
            </div>

            {writings.length > 0 ? (
              <div className="border-t border-border">
                {writings.map((writing, index) => (
                  <CardWriting
                    key={writing.slug}
                    writing={writing}
                    isLast={index === writings.length - 1}
                  />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                No articles yet. Check back soon!
              </p>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default WritingPage