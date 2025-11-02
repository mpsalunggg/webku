import { createFileRoute } from '@tanstack/react-router'
import ProjectsPage from '@/pages/projects'
import { ProjectsProvider } from '@/pages/projects/context/ProjectFilterContext'
import { ProjectViewsProvider } from '@/pages/projects/context/ProjectViewsContext'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      {
        title: 'Projects',
      },
      {
        name: 'description',
        content:
          'Browse through my collection of web development projects. Showcasing expertise in React, TypeScript, and modern web technologies.',
      },
      {
        name: 'keywords',
        content:
          'Projects, Web Development, React Projects, TypeScript, Portfolio Projects, Muhamad Putra Satria',
      },
      {
        property: 'og:title',
        content: 'Projects',
      },
      {
        property: 'og:description',
        content:
          'Browse through my collection of web development projects. Showcasing expertise in React, TypeScript, and modern web technologies.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
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
