import Home from '@/pages/home'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { getAllProjects } from '@/pages/project/server'
import { getAllWritings } from '@/pages/writing/server'

export const Route = createFileRoute('/')({
  head: () => {
    const { meta, links } = seo({
      title: 'Muhamad Putra Satria - Software Engineer',
      description:
        'Frontend Developer passionate about exploring new technologies and sharing knowledge. Explore my portfolio featuring web development projects, work experience, and technical expertise.',
      keywords:
        'Muhamad Putra Satria, Software Engineer, Frontend Developer, React Developer, Web Development, Portfolio, JavaScript, TypeScript, React, TanStack',
      type: 'website',
      path: '/',
    })
    return { meta, links }
  },
  loader: async () => {
    const [projects, writings] = await Promise.all([
      getAllProjects(),
      getAllWritings(),
    ])
    return { ...projects, ...writings }
  },
  staleTime: 0,
  gcTime: 0,
  component: App,
})

function App() {
  const { projects, writings } = Route.useLoaderData()
  return <Home projects={projects} writings={writings} />
}
