import { createFileRoute } from '@tanstack/react-router'
import ProjectsPage from '@/pages/projects'
import { ProjectsProvider } from '@/pages/projects/projectsContext'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ProjectsProvider>
        <ProjectsPage />
      </ProjectsProvider>
    </>
  )
  }
