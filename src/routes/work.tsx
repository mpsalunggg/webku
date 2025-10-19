import WorkPage from '@/pages/work'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <head>
        <title>Work & Activities</title>
        <meta
          name="description"
          content="Explore the portfolio of Muhamad Putra Satria. View professional projects, work experience, and contributions in web development."
        />
        <meta
          name="keywords"
          content="Portfolio, Projects, Work Experience, Web Development, Activities, Muhamad Putra Satria"
        />
        <meta
          property="og:title"
          content="Work & Activities - Muhamad Putra Satria"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Muhamad Putra Satria. View professional projects, work experience, and contributions in web development."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Work & Activities - Muhamad Putra Satria"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Muhamad Putra Satria. View professional projects, work experience, and contributions in web development."
        />
      </head>
      <WorkPage />
    </>
  )
}
