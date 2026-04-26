import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting)
        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top
              ? prev
              : curr,
          )
          setActiveId(topEntry.target.id)
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0,
      },
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav className="sticky top-24 space-y-1" aria-label="Table of contents">
      <p className="text-foreground mb-3 text-sm font-semibold uppercase tracking-wider">
        On this page
      </p>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                'block py-1 text-sm transition-colors duration-150 leading-snug',
                heading.level === 2 && 'pl-0',
                // heading.level === 3 && 'pl-3',
                // heading.level === 4 && 'pl-6',
                activeId === heading.id
                  ? 'text-foreground font-medium border-l-2 border-primary pl-2'
                  : 'text-muted-foreground hover:text-foreground',
              )}
              onClick={(e) => {
                e.preventDefault()
                const element = document.getElementById(heading.id)
                if (element) {
                  const offset = 96
                  const top =
                    element.getBoundingClientRect().top +
                    window.scrollY -
                    offset
                  window.scrollTo({ top, behavior: 'smooth' })
                  setActiveId(heading.id)
                }
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents
