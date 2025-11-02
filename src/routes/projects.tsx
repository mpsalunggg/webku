import ProjectsPage from '@/pages/project'
import { ProjectsProvider } from '@/pages/project/context/ProjectFilterContext'
import { loadProjectsWithViews } from '@/pages/project/service'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/projects')({
    head: () => ({
        meta: seo({
            title: 'Projects - Muhamad Putra Satria',
            description: 'Browse through my collection of web development projects. Featuring full-stack applications, frontend projects built with React, TypeScript, and modern web technologies.',
            keywords: 'Projects, Web Development, React Projects, TypeScript, Frontend Projects, Full Stack, Portfolio Projects, Open Source',
        }),
    }),
    loader: loadProjectsWithViews,
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
