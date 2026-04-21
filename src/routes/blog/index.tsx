import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/blog/')({
  head: () => {
    const { meta, links } = seo({
      title: 'Blog - Muhamad Putra Satria',
      description:
        'Read articles and blog posts by Muhamad Putra Satria about web development, frontend engineering, and software engineering insights.',
      keywords:
        'Blog, Articles, Web Development, Frontend, React, TypeScript, Software Engineering, Muhamad Putra Satria',
      path: '/blog',
    })
    return { meta, links }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/"!</div>
}
