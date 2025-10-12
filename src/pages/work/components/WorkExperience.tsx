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

export const WorkExperience = () => {
  const activeIndex = workExperiences.findIndex((exp) =>
    exp.period.toLowerCase().includes('present')
  )
  const defaultValue = activeIndex !== -1 ? activeIndex + 1 : workExperiences.length

  return (
    <div className="relative">
      <div
        className="absolute -top-6 left-0 w-24 h-px gradient-line"
        style={{ animationDelay: '0.5s' }}
      ></div>
      <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
        Work Experience
      </h3>
      <Timeline defaultValue={defaultValue}>
        {workExperiences.map((experience, index) => {
          const isPresent = experience.period.toLowerCase().includes('present')
          return (
            <TimelineItem key={`${experience.company}-${index}`} step={index + 1}>
              <TimelineHeader>
                <TimelineDate className="text-sm font-mono">
                  {experience.period}
                </TimelineDate>
                <TimelineTitle className="font-medium text-base">
                  {experience.position}
                </TimelineTitle>
              </TimelineHeader>
              <TimelineContent className="space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-foreground font-medium">
                    {experience.company}
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-sm">
                    {experience.location}
                  </span>
                  <Badge variant="outline" className="text-xs">
                    {experience.type}
                  </Badge>
                </div>
                <ul className="space-y-1.5 mt-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
                      • {responsibility}
                    </li>
                  ))}
                </ul>
              </TimelineContent>
              <TimelineIndicator
                className={
                  isPresent
                    ? 'border-2 !border-primary bg-primary'
                    : 'border-1 !border-gray-400'
                }
              />
              <TimelineSeparator className="border-1" />
            </TimelineItem>
          )
        })}
      </Timeline>
    </div>
  )
}
