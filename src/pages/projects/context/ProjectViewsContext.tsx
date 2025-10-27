import { getAllProjectViews } from '@/pages/projects/projectsServices'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

interface ProjectViewsMap {
  [slug: string]: number
}

interface ProjectViewsContextType {
  viewsMap: ProjectViewsMap
  isLoading: boolean
  updateViews: (slug: string, newViews: number) => void
  refetch: () => Promise<void>
}

const ProjectViewsContext = createContext<ProjectViewsContextType | undefined>(
  undefined
)

export function ProjectViewsProvider({ children }: { children: ReactNode }) {
  const [viewsMap, setViewsMap] = useState<ProjectViewsMap>({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchAllViews = async () => {
    try {
      setIsLoading(true)
      const allViews = await getAllProjectViews()

      const map: ProjectViewsMap = {}
      allViews.forEach((item) => {
        map[item.slug] = item.views
      })

      setViewsMap(map)
    } catch (error) {
      console.error('Error fetching all project views:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchAllViews()
  }, [])

  const updateViews = (slug: string, newViews: number) => {
    setViewsMap((prev) => ({
      ...prev,
      [slug]: newViews,
    }))
  }

  const refetch = async () => {
    await fetchAllViews()
  }

  return (
    <ProjectViewsContext.Provider
      value={{ viewsMap, isLoading, updateViews, refetch }}
    >
      {children}
    </ProjectViewsContext.Provider>
  )
}

export const useProjectViewsContext = () => {
  const context = useContext(ProjectViewsContext)
  if (context === undefined) {
    throw new Error(
      'useProjectViewsContext must be used within a ProjectViewsProvider'
    )
  }
  return context
}
