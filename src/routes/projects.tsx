import ProjectsPage from '@/pages/project'
import { ProjectsProvider } from '@/pages/project/context/ProjectFilterContext'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <ProjectsProvider>
            <ProjectsPage />
        </ProjectsProvider>
    )
}
