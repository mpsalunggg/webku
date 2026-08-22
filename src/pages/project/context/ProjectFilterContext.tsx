import { ProjectFrontmatter } from '@/lib/mdx'
import {
    ReactNode,
    useContext,
    useEffect,
    useState,
    createContext,
} from 'react'

type ProjectsContextType = {
    searchQuery: string
    selectedCategory: string
    filteredProjects: ProjectFrontmatter[]
    handleSearch: (query: string) => void
    handleCategoryChange: (category: string) => void
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(
    undefined
)

export const ProjectsProvider = ({
    children,
    initialProjects
}: {
    children: ReactNode
    initialProjects: ProjectFrontmatter[]
}) => {
    const [state, setState] = useState({
        searchQuery: '',
        selectedCategory: 'All Projects',
        filteredProjects: initialProjects,
    })

    useEffect(() => {
        let filtered = initialProjects

        if (state.searchQuery) {
            filtered = filtered.filter(
                (project) =>
                    project.title
                        .toLowerCase()
                        .includes(state.searchQuery.toLowerCase()) ||
                    project.description
                        .toLowerCase()
                        .includes(state.searchQuery.toLowerCase())
            )
        }

        if (state.selectedCategory !== 'All Projects') {
            filtered = filtered.filter(
                (project) => project.category === state.selectedCategory
            )
        }

        setState((prev) => ({ ...prev, filteredProjects: filtered }))
    }, [state.searchQuery, state.selectedCategory, initialProjects])

    const handleSearch = (query: string) => {
        setState((prev) => ({ ...prev, searchQuery: query }))
    }

    const handleCategoryChange = (category: string) => {
        setState((prev) => ({ ...prev, selectedCategory: category }))
    }

    const value = {
        searchQuery: state.searchQuery,
        selectedCategory: state.selectedCategory,
        filteredProjects: state.filteredProjects,
        handleSearch,
        handleCategoryChange,
    }

    return (
        <ProjectsContext.Provider value={value}>
            {children}
        </ProjectsContext.Provider>
    )
}

export const useProjectsContext = () => {
    const context = useContext(ProjectsContext)
    if (!context) {
        throw new Error('useProjectsContext must be used within ProjectsProvider')
    }
    return context
}