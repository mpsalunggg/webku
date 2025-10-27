# Usage Examples - Project Views Tracking

## 1. Display Views Count in Project Card

```tsx
import { useProjectViews } from '@/hooks/useProjectViews'
import { Eye } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  // ... other props
}

export function ProjectCard({ title, description }: ProjectCardProps) {
  // Create slug from title
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

  // Get views without incrementing
  const { views, isLoading } = useProjectViews(slug, false)

  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {/* Views display */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Eye className="h-4 w-4" />
        <span>
          {isLoading ? '...' : `${views.toLocaleString()} views`}
        </span>
      </div>
    </div>
  )
}
```

## 2. Increment Views on Project Detail Page

```tsx
import { useProjectViews } from '@/hooks/useProjectViews'
import { useParams } from '@tanstack/react-router'

export function ProjectDetailPage() {
  const { slug } = useParams({ from: '/projects/$slug' })

  // Automatically increment views when page loads
  const { views, isLoading } = useProjectViews(slug, true)

  return (
    <div className="project-detail">
      <h1>Project Details</h1>

      <div className="stats">
        <span>Views: {isLoading ? 'Loading...' : views}</span>
      </div>

      {/* Rest of your project detail content */}
    </div>
  )
}
```

## 3. Show Most Viewed Projects

```tsx
import { useEffect, useState } from 'react'
import { getAllProjectViews } from '@/lib/projectViews'
import { projects } from '@/constants/projects'

interface ProjectWithViews {
  title: string
  slug: string
  views: number
}

export function MostViewedProjects() {
  const [topProjects, setTopProjects] = useState<ProjectWithViews[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchTopProjects() {
      try {
        const allViews = await getAllProjectViews()

        // Combine views data with project data
        const projectsWithViews = allViews
          .slice(0, 5) // Top 5
          .map((view) => {
            const project = projects.find((p) => {
              const slug = p.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '')
              return slug === view.slug
            })

            return {
              title: project?.title || view.slug,
              slug: view.slug,
              views: view.views,
            }
          })

        setTopProjects(projectsWithViews)
      } catch (error) {
        console.error('Error fetching top projects:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTopProjects()
  }, [])

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="most-viewed">
      <h2>Most Viewed Projects</h2>
      <ul>
        {topProjects.map((project) => (
          <li key={project.slug}>
            <span>{project.title}</span>
            <span className="views">{project.views} views</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

## 4. Add Slug to Project Interface (Optional)

Update your project interface to include slug:

```typescript
// src/constants/projects.ts
export interface Project {
  title: string
  description: string
  tech: string[]
  image?: string
  github?: string
  demo?: string
  featured?: boolean
  category: string
  slug?: string // Add this
}

// Helper function to generate slug
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Add slug to each project
export const projects: Project[] = [
  {
    title: 'Hammercode Web',
    slug: createSlug('Hammercode Web'), // 'hammercode-web'
    // ... rest of project data
  },
  // ...
]
```

## 5. Server-Side Rendering (if using Next.js later)

```tsx
// For SSR/SSG in Next.js
import { getProjectViews } from '@/lib/projectViews'

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const views = await getProjectViews(params.slug)

  return {
    props: {
      slug: params.slug,
      initialViews: views,
    },
  }
}

export default function ProjectPage({ slug, initialViews }: { slug: string; initialViews: number }) {
  // Use initialViews from server, then hydrate on client
  return (
    <div>
      <p>Views: {initialViews}</p>
    </div>
  )
}
```

## 6. Batch Update Multiple Projects

```typescript
// src/lib/projectViews.ts (add this function)
export async function batchUpdateViews(slugs: string[]) {
  try {
    const promises = slugs.map((slug) => incrementProjectViews(slug))
    const results = await Promise.all(promises)
    return results
  } catch (error) {
    console.error('Error batch updating views:', error)
    return []
  }
}
```

## Tips

1. **Debounce**: Add debouncing if you want to prevent multiple increments
2. **Caching**: Consider caching views data in localStorage for better UX
3. **Real-time**: Use Supabase Realtime to show live view counts
4. **Analytics**: Combine with actual analytics tools (Google Analytics, Plausible, etc.)
5. **Rate Limiting**: Consider adding rate limiting to prevent view manipulation
