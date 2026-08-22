import type { ReactNode } from 'react'
import { Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow: string
  /** ReactNode so a title can carry inline emphasis, e.g. Let's <em>Connect</em>. */
  title: ReactNode
  description?: string
  /** Omit to render a heading with no read-more link. */
  to?: string
  linkLabel?: string
  className?: string
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  to,
  linkLabel = 'Read more',
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn('mb-10', className)}>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-muted-foreground font-mono text-[10px] tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
          <h2 className="font-amatic mt-2 text-4xl font-bold tracking-wide md:text-5xl">
            {title}
          </h2>
        </div>

        {to && (
          <Link
            to={to}
            className="group text-muted-foreground hover:text-foreground shrink-0 pb-1 transition-colors"
          >
            <span className="font-amatic flex items-center gap-1 text-2xl tracking-wide">
              {linkLabel}
              <ArrowUpRight className="text-muted-foreground/40 group-hover:text-foreground h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        )}
      </div>

      {description && (
        <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed font-light text-pretty">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
