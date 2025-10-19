import AboutPage from '@/pages/about'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <>
      <head>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about Muhamad Putra Satria, a passionate Software Engineer with expertise in React, TypeScript, and modern web development."
        />
        <meta
          name="keywords"
          content="About, Software Engineer, React Developer, TypeScript, Web Developer, Muhamad Putra Satria"
        />
        <meta property="og:title" content="About" />
        <meta
          property="og:description"
          content="Learn more about Muhamad Putra Satria, a passionate Software Engineer with expertise in React, TypeScript, and modern web development."
        />
        <meta property="og:type" content="profile" />
      </head>
      <AboutPage />
    </>
  )
}
