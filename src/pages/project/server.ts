import { createServerFn } from '@tanstack/react-start'
import { notFound } from '@tanstack/react-router'
import { prisma } from '@/lib/prisma'
import { getAllProjectFrontmatter, type ProjectFrontmatter } from '@/lib/mdx'

export const getAllProjects = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const allProjects = await getAllProjectFrontmatter()
      const viewsData = await prisma.projectView.findMany({
        orderBy: { views: 'desc' },
      })

      const viewsMap = new Map(viewsData.map((view) => [view.slug, view.views]))

      const projectsWithViews: ProjectFrontmatter[] = allProjects.map(
        (project) => ({
          ...project,
          views: viewsMap.get(project.slug) || 0,
        })
      )

      return { projects: projectsWithViews }
    } catch (error) {
      console.error('Error loading projects with views:', error)
      return { projects: [] }
    }
  }
)

export const getDetailProject = createServerFn({ method: 'GET' })
  .inputValidator((data: { slug: string }) => data)
  .handler(async ({ data }) => {
    const project = await getAllProjectFrontmatter().then((projects) =>
      projects.find((p) => p.slug === data.slug)
    )

    if (!project) {
      throw notFound()
    }

    return { slug: data.slug, frontmatter: { ...project } }
  })
