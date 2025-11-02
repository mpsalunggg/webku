import { projects, type Project } from '@/constants/project'

interface ProjectView {
    slug: string
    views: number
}

export async function loadProjectsWithViews(): Promise<{ projects: Project[] }> {
    try {
        const response = await fetch('/api/views')

        if (!response.ok) {
            return { projects }
        }

        const result = await response.json()
        const viewsData: ProjectView[] = result.data || []

        const viewsMap = new Map(
            viewsData.map(view => [view.slug, view.views])
        )

        const projectsWithViews: Project[] = projects.map(project => ({
            ...project,
            views: viewsMap.get(project.slug) || 0,
        }))

        return { projects: projectsWithViews }
    } catch (error) {
        console.error('Something got error from get views projects ->', error)
        return { projects }
    }
}
