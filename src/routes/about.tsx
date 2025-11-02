import AboutPage from '@/pages/about'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/utils/seo'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: seo({
      title: 'About',
      description:
        'Learn more about Muhamad Putra Satria, a passionate Software Engineer with expertise in React, TypeScript, and modern web development.',
      keywords:
        'About, Software Engineer, React Developer, TypeScript, Web Developer, Muhamad Putra Satria',
      type: 'profile',
    }),
  }),
  component: About,
})

function About() {
  return <AboutPage />
}
