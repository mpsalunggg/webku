import Home from '@/pages/home'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/utils/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: 'Muhamad Putra Satria - Software Engineer',
      description:
        'Software Engineer specializing in React, TypeScript, and modern web technologies. Building innovative web applications and user experiences.',
      keywords:
        'Software Engineer, React Developer, TypeScript, Web Development, Portfolio, Muhamad Putra Satria',
    }),
  }),
  component: Index,
})

function Index() {
  return <Home />
}
