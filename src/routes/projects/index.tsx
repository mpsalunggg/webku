import ProjectsPage from '@/pages/project'
import { ProjectsProvider } from '@/pages/project/context/ProjectFilterContext'
import { getAllProjects } from '@/pages/project/server'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/projects/')({
  head: () => {
    const { meta, links } = seo({
      title: 'Projects - Muhamad Putra Satria',
      description:
        'Browse through my collection of web development projects. Featuring full-stack applications, frontend projects built with React, TypeScript, and modern web technologies.',
      keywords:
        'Projects, Web Development, React Projects, TypeScript, Frontend Projects, Full Stack, Portfolio Projects, Open Source',
      path: '/projects',
    })
    return { meta, links }
  },
  loader: async () => await getAllProjects(),
  staleTime: 0,
  gcTime: 0,
  component: RouteComponent,
})

function RouteComponent() {
  const { projects: projectsWithViews } = Route.useLoaderData()

  return (
    <ProjectsProvider initialProjects={projectsWithViews}>
      <ProjectsPage />
    </ProjectsProvider>
  )
}
