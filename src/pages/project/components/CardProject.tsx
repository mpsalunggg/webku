import { Badge } from '@/components/ui/badge'
import { Project } from '@/constants/project'
import { ExternalLink, Github, Eye } from 'lucide-react'

interface CardProjectProps {
    project: Project
    isEven: boolean
}

const CardProject = ({ project, isEven }: CardProjectProps) => {
    const views = project.views ?? 0

    return (
        <div
            key={project.title}
            className={`group border-border flex flex-col gap-6 border-b pb-6 transition-all last:border-b-0 md:flex-row ${isEven ? '' : 'md:flex-row-reverse'
                }`}
        >
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video h-full w-full object-cover transition-all duration-500 group-hover:scale-105 md:w-64"
                />
            )}

            <div className="flex flex-1 flex-col">
                <h3 className="group-hover:text-primary mb-2 text-2xl font-semibold transition-colors">
                    {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-2">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:bg-muted hover:text-foreground border-border text-muted-foreground flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
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
                                className="hover:bg-primary/20 hover:text-foreground border-primary/50 bg-primary/10 text-muted-foreground flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
                                aria-label="View demo"
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