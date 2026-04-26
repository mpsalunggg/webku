import { createFileRoute } from '@tanstack/react-router'
import WritingPage from '@/pages/writing'
import { getAllWritings } from '@/pages/writing/server'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/writing/')({
  loader: async () => await getAllWritings(),
  head: () => {
    const { meta, links } = seo({
      title: 'Writing - Muhamad Putra Satria',
      description:
        'Articles and writings by Muhamad Putra Satria on web development, software engineering, and technology. Sharing knowledge and insights from hands-on experience.',
      keywords:
        'Writing, Articles, Web Development, Frontend, React, TypeScript, Software Engineering, Muhamad Putra Satria',
      path: '/writing',
    })
    return { meta, links }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { writings } = Route.useLoaderData()
  return <WritingPage writings={writings} />
}
