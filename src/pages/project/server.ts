import { projects, type Project } from '@/constants/project'
import { createServerFn } from '@tanstack/react-start'
import { prisma } from '@/lib/prisma'

export const loadProjectsWithViews = createServerFn().handler(async () => {
  try {
    const viewsData = await prisma.projectView.findMany({
      orderBy: { views: 'desc' },
    })

    const viewsMap = new Map(viewsData.map((view) => [view.slug, view.views]))

    const projectsWithViews: Project[] = projects.map((project) => ({
      ...project,
      views: viewsMap.get(project.slug) || 0,
    }))

    return { projects: projectsWithViews }
  } catch (error) {
    console.error('Error loading projects with views:', error)
    return { projects }
  }
})
