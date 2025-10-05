import { AnimatedLines } from '@/components/common/Background'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Badge } from '@/components/ui/badge'
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
import { iconMap, skills, achievements } from '@/constants/about'

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-20">
        <section className="py-24 px-6 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <AnimatedLines className="opacity-30" />
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl font-light mb-6">About</h1>
              <p className="text-lg text-muted-foreground">
                Understanding the person behind the work
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-16 mb-24">
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <div className="w-full max-w-sm mx-auto lg:mx-0 aspect-square rounded-3xl overflow-hidden bg-muted mb-8 relative">
                    <div className="absolute inset-0 rounded-3xl">
                      <div className="absolute top-0 left-0 w-full h-px gradient-line"></div>
                      <div
                        className="absolute bottom-0 right-0 w-full h-px gradient-line"
                        style={{ animationDelay: '1s' }}
                      ></div>
                    </div>
                    <img
                      src="/profile.webp"
                      alt="Muhamad Putra Satria - Portfolio"
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>

                  <div className="text-center lg:text-left space-y-2">
                    <h2 className="text-2xl font-light">
                      Muhamad Putra Satria
                    </h2>
                    <p className="text-muted-foreground">Frontend Engineer</p>
                    <p className="text-sm text-muted-foreground">
                      Palu, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-12">
                <div className="relative">
                  <div className="absolute -top-6 left-0 w-24 h-px gradient-line"></div>
                  <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
                    Summary
                  </h3>
                  <div className="space-y-6 text-foreground leading-relaxed text-lg">
                    <p>
                      <strong>Frontend Engineer</strong> with <em>2+ years</em>{' '}
                      of specialized experience in building{' '}
                      <strong>responsive, user interfaces</strong>. Skilled at
                      translating design concepts into{' '}
                      <strong>seamless user experiences</strong>, while
                      leveraging full-stack knowledge to optimize application
                      functionality.
                    </p>
                    <p>
                      Collaborated closely with cross-functional teams to
                      deliver scalable solutions and improve development
                      processes. Passionate about exploring new technologies and
                      sharing knowledge with the developer community.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="absolute -top-6 left-0 w-24 h-px gradient-line"
                    style={{ animationDelay: '0.5s' }}
                  ></div>
                  <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
                    Recognition
                  </h3>
                  <Timeline defaultValue={achievements.length}>
                    {achievements.map((achievement, index) => (
                      <TimelineItem key={achievement.title} step={index + 1}>
                        <TimelineHeader>
                          <TimelineDate className="text-sm font-mono">
                            {achievement.year}
                          </TimelineDate>
                          <TimelineTitle className="font-medium text-base">
                            {achievement.tooltip ? (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <span>
                                    {achievement.title}
                                  </span>
                                </TooltipTrigger>
                                <TooltipContent
                                  side="top"
                                  className="max-w-[300px]"
                                >
                                  <p>{achievement.tooltip}</p>
                                </TooltipContent>
                              </Tooltip>
                            ) : (
                              achievement.title
                            )}
                          </TimelineTitle>
                        </TimelineHeader>
                        <TimelineContent className="text-sm">
                          {achievement.organization}
                        </TimelineContent>
                        <TimelineIndicator className='border-1 !border-gray-400' />
                        <TimelineSeparator className='border-1'/>
                      </TimelineItem>
                    ))}
                  </Timeline>
                </div>

                <div className="relative">
                  <h3 className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-wider">
                    Education
                  </h3>
                  <div className="p-6 rounded-lg bg-muted/30">
                    <h4 className="font-medium mb-2">
                      Bachelor's Degree in Computer Science
                    </h4>
                    <p className="text-muted-foreground mb-1">
                      Tadulako University
                    </p>
                    <p className="text-sm text-muted-foreground">
                      08/2020 - 03/2024 • Cumlaude • GPA: 3.95/4.00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-12 relative">
              <h3 className="text-sm font-mono text-muted-foreground mb-12 uppercase text-center">
                Skills & Expertise
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <div className="flex items-center gap-2 mb-6">
                      <h4 className="font-medium text-lg">
                        {skillGroup.category}
                      </h4>
                      {skillGroup.isLearning && (
                        <Badge variant="outline" className="text-xs">
                          Learning
                        </Badge>
                      )}
                    </div>
                    <ul className="space-y-3">
                      {skillGroup.items.map((skill) => {
                        const icon = iconMap[skill.icon]
                        return (
                          <li
                            key={skill.name}
                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                          >
                            {icon && (
                              <svg
                                role="img"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform"
                                fill="currentColor"
                                dangerouslySetInnerHTML={{ __html: icon.svg }}
                              />
                            )}
                            <span>{skill.name}</span>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutPage
