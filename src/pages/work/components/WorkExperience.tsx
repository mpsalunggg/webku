import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from '@/components/ui/timeline'
import { Badge } from '@/components/ui/badge'
import { workExperiences } from '@/constants/work'
import { cn } from '@/lib/utils'

interface WorkExperienceProps {
    /** Show only the N most recent roles. Omit for the full history. */
    limit?: number
    showHeading?: boolean
}

export const WorkExperience = ({
    limit,
    showHeading = true,
}: WorkExperienceProps) => {
    const experiences = limit ? workExperiences.slice(0, limit) : workExperiences
    const activeIndex = experiences.findIndex((exp) =>
        exp.period.toLowerCase().includes('present')
    )
    const defaultValue = activeIndex !== -1 ? activeIndex + 1 : experiences.length

    return (
        <div>
            {showHeading && (
                <h3 className="text-muted-foreground mb-6 font-mono text-sm tracking-wider uppercase">
                    Work Experience
                </h3>
            )}
            <Timeline defaultValue={defaultValue}>
                {experiences.map((experience, index) => {
                    const isPresent = experience.period.toLowerCase().includes('present')
                    return (
                        <TimelineItem
                            key={`${experience.company}-${index}`}
                            step={index + 1}
                        >
                            <TimelineHeader>
                                <TimelineDate className="font-mono text-sm">
                                    {experience.period}
                                </TimelineDate>
                                <TimelineTitle className="text-base font-medium">
                                    {experience.position}
                                </TimelineTitle>
                            </TimelineHeader>
                            <TimelineContent className="space-y-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <a
                                        href={experience.link_company}
                                        target="_blank"
                                        className="text-foreground font-medium underline hover:text-primary"
                                    >
                                        {experience.company}
                                    </a>
                                    <span className="text-muted-foreground">•</span>
                                    <span className="text-muted-foreground text-sm">
                                        {experience.location}
                                    </span>
                                    <Badge variant="outline" className="text-xs">
                                        {experience.type}
                                    </Badge>
                                </div>
                                <ul className="mt-3 space-y-1.5">
                                    {experience.responsibilities.map((responsibility, idx) => (
                                        <li key={idx} className="text-muted-foreground text-sm">
                                            • {responsibility}
                                        </li>
                                    ))}
                                </ul>
                                {experience.stack && experience.stack.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {experience.stack.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="text-xs font-normal"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </TimelineContent>
                            <TimelineIndicator
                                className={cn(
                                    isPresent
                                        ? 'bg-primary'
                                        : 'border border-border')
                                }
                            />
                            <TimelineSeparator className="border-border" />
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </div>
    )
}