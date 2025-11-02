import WorkPage from '@/pages/work'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/utils/seo'

export const Route = createFileRoute('/work')({
  head: () => ({
    meta: seo({
      title: 'Work & Activities',
      description:
        'Explore the portfolio of Muhamad Putra Satria. View professional projects, work experience, and contributions in web development.',
      keywords:
        'Portfolio, Projects, Work Experience, Web Development, Activities, Muhamad Putra Satria',
    }),
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return <WorkPage />
}
