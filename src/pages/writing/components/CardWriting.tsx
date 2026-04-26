import { ArrowUpRight, Calendar, Clock, Eye } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { WritingFrontmatter } from '@/lib/mdx'

interface CardWritingProps {
  writing: WritingFrontmatter
  isLast?: boolean
}

const CardWriting = ({ writing, isLast }: CardWritingProps) => {
  return (
    <Link
      to="/writing/$slug"
      params={{ slug: writing.slug }}
      className="group block"
    >
      <article
        className="border-border relative flex flex-col gap-6 border-b py-10 sm:flex-row sm:items-stretch sm:gap-10 sm:py-12"
        style={isLast ? { borderBottomWidth: 0 } : undefined}
      >
        <div className="bg-muted relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-lg sm:aspect-auto sm:h-auto sm:w-44 md:w-52">
          <img
            src={writing.image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
            <Badge variant="secondary" className="font-normal">
              {writing.category}
            </Badge>
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {writing.readingTime}
            </span>
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
              <Calendar className="h-3.5 w-3.5" aria-hidden />
              <time dateTime={writing.date}>
                {new Date(writing.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </span>
            {writing.views !== undefined && (
              <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                <Eye className="h-3.5 w-3.5" aria-hidden />
                {writing.views} views
              </span>
            )}
          </div>

          <div className="flex items-start justify-between gap-4">
            <h2 className="text-foreground group-hover:text-primary text-xl font-medium leading-snug transition-colors sm:text-2xl">
              {writing.title}
            </h2>
            <span
              className="text-muted-foreground mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-transparent transition-all group-hover:border-border group-hover:bg-muted/60"
              aria-hidden
            >
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          <p className="text-muted-foreground mt-3 line-clamp-2 max-w-2xl text-sm leading-relaxed sm:text-base">
            {writing.description}
          </p>
        </div>
      </article>
    </Link>
  )
}

export default CardWriting
