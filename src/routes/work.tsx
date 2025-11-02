import WorkPage from '@/pages/work'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/work')({
  head: () => ({
    meta: [
      {
        title: 'Work & Activities',
      },
      {
        name: 'description',
        content:
          'Explore the portfolio of Muhamad Putra Satria. View professional projects, work experience, and contributions in web development.',
      },
      {
        name: 'keywords',
        content:
          'Portfolio, Projects, Work Experience, Web Development, Activities, Muhamad Putra Satria',
      },
      {
        property: 'og:title',
        content: 'Work & Activities',
      },
      {
        property: 'og:description',
        content:
          'Explore the portfolio of Muhamad Putra Satria. View professional projects, work experience, and contributions in web development.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
    ],
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <WorkPage />
}
