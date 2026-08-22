import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface Heading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: Heading[]
}

/**
 * Fixed tick rail on the right edge of the viewport, vertically centred.
 * At rest it is ~40px wide so it never eats into the reading column; labels
 * slide out leftward on hover or keyboard focus.
 */
const TableOfContents = ({ headings }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>('')
  // Set on click: pins the active id to the clicked heading while the smooth
  // scroll is in flight, so the scroll listener cannot sweep through the
  // headings it passes on the way there.
  const lockRef = useRef<{ id: string; expires: number } | null>(null)

  useEffect(() => {
    if (headings.length === 0) return

    // Clears the fixed navbar; matches the click handler's offset below.
    const OFFSET = 96
    let frame = 0

    // Computed from scroll position over ALL headings rather than reacting to
    // IntersectionObserver events. The observer only reports headings whose
    // intersection state *changed*, so the active id was never refreshed
    // between crossings, on load, at the page bottom, or after a jump.
    const compute = () => {
      frame = 0

      const lock = lockRef.current
      if (lock) {
        const target = document.getElementById(lock.id)
        const arrived =
          target && Math.abs(target.getBoundingClientRect().top - OFFSET) <= 4
        // Release on arrival, or on the deadline so a target that can never
        // reach the offset line (last heading, page bottoms out) cannot pin
        // the rail forever.
        if (arrived || Date.now() > lock.expires) lockRef.current = null
        setActiveId(lock.id)
        return
      }

      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 2

      if (atBottom) {
        setActiveId(headings[headings.length - 1].id)
        return
      }

      // Headings come from querySelectorAll, so they are in document order.
      let current = headings[0].id
      for (const { id } of headings) {
        const element = document.getElementById(id)
        if (!element) continue
        if (element.getBoundingClientRect().top <= OFFSET) current = id
        else break
      }
      setActiveId(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(compute)
    }

    const releaseLock = () => {
      lockRef.current = null
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('wheel', releaseLock, { passive: true })
    window.addEventListener('touchstart', releaseLock, { passive: true })

    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('wheel', releaseLock)
      window.removeEventListener('touchstart', releaseLock)
    }
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav
      aria-label="Table of contents"
      className="group fixed top-1/2 right-6 z-30 hidden -translate-y-1/2 rounded-xl p-3 transition-colors duration-200 hover:bg-background/90 hover:backdrop-blur-sm focus-within:bg-background/90 focus-within:backdrop-blur-sm xl:block"
    >
      <ul className="space-y-2.5">
        {headings.map((heading) => {
          const isActive = activeId === heading.id
          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                aria-current={isActive ? 'location' : undefined}
                className="flex items-center justify-end gap-3"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(heading.id)
                  if (element) {
                    const offset = 96
                    const top =
                      element.getBoundingClientRect().top +
                      window.scrollY -
                      offset
                    lockRef.current = {
                      id: heading.id,
                      expires: Date.now() + 1000,
                    }
                    window.scrollTo({ top, behavior: 'smooth' })
                    setActiveId(heading.id)
                  }
                }}
              >
                <span
                  className={cn(
                    'max-w-[180px] translate-x-1 truncate text-xs opacity-0 transition-all duration-200',
                    'group-hover:translate-x-0 group-hover:opacity-100',
                    'group-focus-within:translate-x-0 group-focus-within:opacity-100',
                    isActive ? 'text-foreground' : 'text-muted-foreground',
                  )}
                >
                  {heading.text}
                </span>
                <span
                  className={cn(
                    'h-px shrink-0 transition-all duration-200',
                    isActive ? 'bg-primary w-8' : 'bg-foreground/25 w-4',
                  )}
                />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default TableOfContents
