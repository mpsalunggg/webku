import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { ProjectFrontmatter } from '@/lib/mdx'

interface CardProjectProps {
  project: ProjectFrontmatter
  isEven: boolean
}

const CardProject = ({ project, isEven }: CardProjectProps) => {
  const views = project.views ?? 0

  return (
    <div
      key={project.slug}
      className={`group border-border flex flex-col gap-6 border-b pb-6 transition-all last:border-b-0 md:flex-row ${
        isEven ? '' : 'md:flex-row-reverse'
      }`}
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="aspect-video h-full w-full object-cover transition-all duration-500 group-hover:scale-105 md:w-64"
      >
        {project.image && <img src={project.image} alt={project.title} />}
      </Link>

      <div className="flex flex-1 flex-col">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="group/title"
        >
          <h3 className="group-hover/title:text-primary mb-2 text-2xl font-semibold transition-colors">
            {project.title}
          </h3>
        </Link>

        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-2">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="flex underline items-center gap-2 rounded-lg py-2 hover:text-blue-600 text-sm"
            >
              <span>Read More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-muted hover:text-foreground border-border text-muted-foreground flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                aria-label="View code"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-muted hover:text-foreground border-border text-muted-foreground flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                aria-label="View demo"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="text-muted-foreground flex items-center gap-1.5 text-sm">
              <Eye className="h-4 w-4" />
              <span>{views.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardProject
