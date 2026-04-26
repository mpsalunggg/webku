import { lazy, Suspense, useEffect, useState } from 'react'
import { ArrowLeft, Calendar, Clock, Eye } from 'lucide-react'
import { MDXProvider } from '@mdx-js/react'
import { Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { mdxComponents } from '@/components/common/MDXComponents'
import { AnimatedLines } from '@/components/common/Background'
import TableOfContents, { type Heading } from '@/components/common/TableOfContents'
import { WritingFrontmatter } from '@/lib/mdx'

interface DetailWritingProps {
  frontmatter: WritingFrontmatter
  slug: string
}

const DetailWriting = ({ frontmatter, slug }: DetailWritingProps) => {
  const [headings, setHeadings] = useState<Heading[]>([])

  const MDXComponent = lazy(() =>
    import(`../../content/writings/${slug}.mdx`).then((module) => ({
      default: module.default,
    }))
  )

  useEffect(() => {
    const extractHeadings = () => {
      const article = document.querySelector('article')
      if (!article) return

      const elements = article.querySelectorAll('h1, h2')
      const extracted: Heading[] = Array.from(elements)
        .filter((el) => el.id)
        .map((el) => ({
          id: el.id,
          text: el.textContent?.replace(/\s*#\s*$/, '').trim() ?? '',
          level: parseInt(el.tagName.replace('H', ''), 10),
        }))
      setHeadings(extracted)
    }

    const timeout = setTimeout(extractHeadings, 300)
    return () => clearTimeout(timeout)
  }, [slug])

  return (
    <main className="bg-background min-h-screen">
      <div className="pt-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-0 py-12">
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/writing"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Writing
            </Link>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Eye className="h-4 w-4" />
              <span>{frontmatter.views ?? 0} views</span>
            </div>
          </div>

          <div className="flex gap-12">
            <article className="min-w-0 flex-1">
              <header className="mb-12">
                <img
                  src={frontmatter.image}
                  alt={frontmatter.title}
                  className="mb-8 aspect-video w-full rounded-xl object-cover"
                />

                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <Badge variant="secondary">{frontmatter.category}</Badge>
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{frontmatter.readingTime}</span>
                  </div>
                  <div className="text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={frontmatter.date}>
                      {new Date(frontmatter.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                </div>

                <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                  {frontmatter.title}
                </h1>

                <p className="text-muted-foreground text-xl">
                  {frontmatter.description}
                </p>
              </header>

              <AnimatedLines variant="section" className="-mt-8" />

              <div className="prose prose-slate dark:prose-invert max-w-none mb-96">
                <MDXProvider components={mdxComponents}>
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center py-12">
                        <div className="text-muted-foreground">Loading...</div>
                      </div>
                    }
                  >
                    <MDXComponent />
                  </Suspense>
                </MDXProvider>
              </div>
            </article>

            <aside className="hidden w-64 shrink-0 xl:block">
              <TableOfContents headings={headings} />
            </aside>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DetailWriting
