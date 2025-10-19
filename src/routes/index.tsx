import Home from '@/pages/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <head>
        <title>Muhamad Putra Satria - Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer specializing in React, TypeScript, and modern web technologies. Building innovative web applications and user experiences."
        />
        <meta
          name="keywords"
          content="Software Engineer, React Developer, TypeScript, Web Development, Portfolio, Muhamad Putra Satria"
        />
        <meta
          property="og:title"
          content="Muhamad Putra Satria - Software Engineer"
        />
        <meta
          property="og:description"
          content="Software Engineer specializing in React, TypeScript, and modern web technologies. Building innovative web applications and user experiences."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Muhamad Putra Satria - Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Software Engineer specializing in React, TypeScript, and modern web technologies. Building innovative web applications and user experiences."
        />
      </head>
      <Home />
    </>
  )
}
