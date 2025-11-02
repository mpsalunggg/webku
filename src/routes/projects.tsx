import { createFileRoute } from '@tanstack/react-router'
import ProjectsPage from '@/pages/projects'
import { ProjectsProvider } from '@/pages/projects/context/ProjectFilterContext'
import { ProjectViewsProvider } from '@/pages/projects/context/ProjectViewsContext'
import { seo } from '@/utils/seo'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: seo({
      title: 'Projects',
      description:
        'Browse through my collection of web development projects. Showcasing expertise in React, TypeScript, and modern web technologies.',
      keywords:
        'Projects, Web Development, React Projects, TypeScript, Portfolio Projects, Muhamad Putra Satria',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <ProjectViewsProvider>
      <ProjectsProvider>
        <ProjectsPage />
      </ProjectsProvider>
    </ProjectViewsProvider>
  )
}
