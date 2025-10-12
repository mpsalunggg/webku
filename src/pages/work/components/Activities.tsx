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
import { activities } from '@/constants/work'

export const Activities = () => {
  return (
    <div className="relative">
      <div
        className="absolute -top-6 left-0 w-24 h-px gradient-line"
        style={{ animationDelay: '0.75s' }}
      ></div>
      <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
        Activities
      </h3>
      <Timeline defaultValue={activities.length}>
        {activities.map((activity, index) => (
          <TimelineItem
            key={`${activity.organization}-${index}`}
            step={index + 1}
          >
            <TimelineHeader>
              <TimelineDate className="text-sm font-mono">
                {activity.period}
              </TimelineDate>
              <TimelineTitle className="font-medium text-base">
                {activity.role}
              </TimelineTitle>
            </TimelineHeader>
            <TimelineContent className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href={activity.link_company}
                  target="_blank"
                  className="text-foreground hover:text-blue-600 underline font-medium"
                >
                  {activity.organization}
                </a>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground text-sm">
                  {activity.location}
                </span>
              </div>
              <ul className="space-y-1.5 mt-3">
                {activity.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground">
                    • {responsibility}
                  </li>
                ))}
              </ul>
            </TimelineContent>
            <TimelineIndicator className="border-1 !border-gray-400" />
            <TimelineSeparator className="border-1" />
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}
