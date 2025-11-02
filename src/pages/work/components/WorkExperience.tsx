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

export const WorkExperience = () => {
    const activeIndex = workExperiences.findIndex((exp) =>
        exp.period.toLowerCase().includes('present')
    )
    const defaultValue =
        activeIndex !== -1 ? activeIndex + 1 : workExperiences.length

    return (
        <div className="relative">
            <div
                className="gradient-line absolute -top-6 left-0 h-px w-24"
                style={{ animationDelay: '0.5s' }}
            ></div>
            <h3 className="text-muted-foreground mb-6 font-mono text-sm tracking-wider uppercase">
                Work Experience
            </h3>
            <Timeline defaultValue={defaultValue}>
                {workExperiences.map((experience, index) => {
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
                                        className="text-foreground font-medium underline hover:text-blue-600"
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
                                        : 'border border-gray-200')
                                }
                            />
                            <TimelineSeparator className="border dark:border-gray-200 border-gray-200" />
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </div>
    )
}