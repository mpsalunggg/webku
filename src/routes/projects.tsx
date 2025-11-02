import ProjectsPage from '@/pages/project'
import { ProjectsProvider } from '@/pages/project/context/ProjectFilterContext'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/utils/seo'

export const Route = createFileRoute('/projects')({
    head: () => ({
        meta: seo({
            title: 'Projects - Muhamad Putra Satria',
            description: 'Browse through my collection of web development projects. Featuring full-stack applications, frontend projects built with React, TypeScript, and modern web technologies.',
            keywords: 'Projects, Web Development, React Projects, TypeScript, Frontend Projects, Full Stack, Portfolio Projects, Open Source',
        }),
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <ProjectsProvider>
            <ProjectsPage />
        </ProjectsProvider>
    )
}
