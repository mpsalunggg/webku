import AboutPage from '@/pages/about'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <html>
      <head>
        <title>About</title>
        <meta
          name="description"
          content="Learn more about Muhamad Putra Satria, a passionate Full Stack Developer with expertise in React, TypeScript, and modern web development."
        />
        <meta
          name="keywords"
          content="About, Full Stack Developer, React Developer, TypeScript, Web Developer, Muhamad Putra Satria"
        />
        <meta property="og:title" content="About - Muhamad Putra Satria" />
        <meta
          property="og:description"
          content="Learn more about Muhamad Putra Satria, a passionate Full Stack Developer with expertise in React, TypeScript, and modern web development."
        />
        <meta property="og:type" content="profile" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About - Muhamad Putra Satria" />
        <meta
          name="twitter:description"
          content="Learn more about Muhamad Putra Satria, a passionate Full Stack Developer with expertise in React, TypeScript, and modern web development."
        />
      </head>
      <body>
        <AboutPage />
      </body>
    </html>
  )
}
