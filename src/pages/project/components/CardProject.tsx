import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ProjectFrontmatter } from "@/lib/mdx";

interface CardProjectProps {
  project: ProjectFrontmatter;
  isEven: boolean;
}

const CardProject = ({ project, isEven }: CardProjectProps) => {
  const views = project.views ?? 0;

  return (
    <TooltipProvider delayDuration={300}>
      <div className="group relative overflow-hidden rounded-2xl transition-all">
        <Link
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className={`block relative aspect-video w-full overflow-hidden ${
            isEven ? "" : "md:block"
          }`}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 absolute"
            />
          )}
        </Link>

        <div className="p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-2">
            {project.category}
          </p>

          <Link
            to="/projects/$slug"
            params={{ slug: project.slug }}
            className="group/title inline-block"
          >
            <h3 className="font-amatic text-4xl font-bold tracking-wide text-foreground transition-colors group-hover/title:text-primary">
              {project.title}
            </h3>
          </Link>

          <p className="text-muted-foreground mt-3 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider"
              >
                {tech}
              </Badge>
            ))}
            {project.tech.length > 3 && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-pointer rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground">
                    +{project.tech.length - 3}
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(3).map((tech, index) => (
                      <Badge
                        key={index}
                        className="rounded-full px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </TooltipContent>
              </Tooltip>
            )}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex h-6 w-6 items-center justify-center rounded-sm border border-border transition-colors"
                  aria-label="View code"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground flex h-6 w-6 border rounded-sm items-center justify-center transition-colors"
                  aria-label="View demo"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <div className="text-muted-foreground font-mono flex items-center gap-1.5 text-[11px]">
              <Eye className="h-3 w-3" aria-hidden />
              <span>{views.toLocaleString()} VIEW</span>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default CardProject;
