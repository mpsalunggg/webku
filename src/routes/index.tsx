import Home from '@/pages/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Muhamad Putra Satria - Software Engineer',
      },
      {
        name: 'description',
        content:
          'Software Engineer specializing in React, TypeScript, and modern web technologies. Building innovative web applications and user experiences.',
      },
      {
        name: 'keywords',
        content:
          'Software Engineer, React Developer, TypeScript, Web Development, Portfolio, Muhamad Putra Satria',
      },
      {
        property: 'og:title',
        content: 'Muhamad Putra Satria - Software Engineer',
      },
      {
        property: 'og:description',
        content:
          'Software Engineer specializing in React, TypeScript, and modern web technologies. Building innovative web applications and user experiences.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  }),
  component: Index,
})

function Index() {
  return <Home />
}
