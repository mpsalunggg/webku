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
import { activities } from '@/constants/work'

export const Activities = () => {
    return (
        <div>
            <h3 className="text-muted-foreground mb-6 font-mono text-sm tracking-wider uppercase">
                Activities
            </h3>
            <Timeline defaultValue={activities.length}>
                {activities.map((activity, index) => (
                    <TimelineItem
                        key={`${activity.organization}-${index}`}
                        step={index + 1}
                    >
                        <TimelineHeader>
                            <TimelineDate className="font-mono text-sm">
                                {activity.period}
                            </TimelineDate>
                            <TimelineTitle className="text-base font-medium">
                                {activity.role}
                            </TimelineTitle>
                        </TimelineHeader>
                        <TimelineContent className="space-y-2">
                            <div className="flex flex-wrap items-center gap-2">
                                <a
                                    href={activity.link_company}
                                    target="_blank"
                                    className="text-foreground font-medium underline hover:text-primary"
                                >
                                    {activity.organization}
                                </a>
                                <span className="text-muted-foreground">•</span>
                                <span className="text-muted-foreground text-sm">
                                    {activity.location}
                                </span>
                            </div>
                            <ul className="mt-3 space-y-1.5">
                                {activity.responsibilities.map((responsibility, idx) => (
                                    <li key={idx} className="text-muted-foreground text-sm">
                                        • {responsibility}
                                    </li>
                                ))}
                            </ul>
                            {activity.stack && activity.stack.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-1.5">
                                    {activity.stack.map((tech) => (
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
                        <TimelineIndicator className="border-border" />
                        <TimelineSeparator className="border-border" />
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}