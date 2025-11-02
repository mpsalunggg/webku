import Home from '@/pages/home'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/utils/seo'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: seo({
      title: 'Muhamad Putra Satria - Software Engineer',
      description: 'Frontend Developer passionate about exploring new technologies and sharing knowledge. Explore my portfolio featuring web development projects, work experience, and technical expertise.',
      keywords: 'Muhamad Putra Satria, Software Engineer, Frontend Developer, React Developer, Web Development, Portfolio, JavaScript, TypeScript, React, TanStack',
      type: 'website',
    }),
  }),
  component: App
})

function App() {
  return (
    <Home />
  )
}
