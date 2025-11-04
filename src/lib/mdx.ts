export interface ProjectFrontmatter {
  title: string
  description: string
  image?: string
  tech: string[]
  github?: string
  demo?: string
  date: string
  category: string
  slug: string
  views?: number
}

const mdxModules = import.meta.glob<{
  default: any
  frontmatter: ProjectFrontmatter
}>('/src/content/projects/*.mdx', { eager: false })

export const getMDXProject = async (slug: string) => {
  const modulePath = `/src/content/projects/${slug}.mdx`
  const moduleLoader = mdxModules[modulePath]

  if (!moduleLoader) {
    return null
  }

  try {
    const module = await moduleLoader()
    return {
      Content: module.default,
      frontmatter: module.frontmatter,
    }
  } catch (error) {
    return null
  }
}

export const getAllProjectFrontmatter = async (): Promise<
  ProjectFrontmatter[]
> => {
  const allProjects = await Promise.all(
    Object.entries(mdxModules).map(async ([path, loader]) => {
      try {
        const module = await loader()
        return module.frontmatter
      } catch (error) {
        console.error(`[MDX] Error loading frontmatter from ${path}`, error)
        return null
      }
    })
  )

  return allProjects
    .filter(
      (frontmatter): frontmatter is ProjectFrontmatter => frontmatter !== null
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllProjectSlugs(): string[] {
  return Object.keys(mdxModules)
    .map((path) => {
      const match = path.match(/\/([^/]+)\.mdx$/)
      return match ? match[1] : ''
    })
    .filter(Boolean)
}
