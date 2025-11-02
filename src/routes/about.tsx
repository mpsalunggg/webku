import AboutPage from '@/pages/about'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      {
        title: 'About',
      },
      {
        name: 'description',
        content:
          'Learn more about Muhamad Putra Satria, a passionate Software Engineer with expertise in React, TypeScript, and modern web development.',
      },
      {
        name: 'keywords',
        content:
          'About, Software Engineer, React Developer, TypeScript, Web Developer, Muhamad Putra Satria',
      },
      {
        property: 'og:title',
        content: 'About',
      },
      {
        property: 'og:description',
        content:
          'Learn more about Muhamad Putra Satria, a passionate Software Engineer with expertise in React, TypeScript, and modern web development.',
      },
      {
        property: 'og:type',
        content: 'profile',
      },
    ],
  }),
  component: About,
})

function About() {
  return <AboutPage />
}
