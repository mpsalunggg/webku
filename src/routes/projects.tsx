import { createFileRoute } from '@tanstack/react-router'
import ProjectsPage from '@/pages/projects'
import { ProjectsProvider } from '@/pages/projects/context/ProjectFilterContext'
import { ProjectViewsProvider } from '@/pages/projects/context/ProjectViewsContext'

export const Route = createFileRoute('/projects')({
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
