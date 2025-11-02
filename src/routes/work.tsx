import WorkPage from '@/pages/work'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/work')({
    head: () => ({
        meta: seo({
            title: 'Work & Activities - Muhamad Putra Satria',
            description: 'Explore my professional journey as a Software Engineer. Discover my work experience, activities, and contributions across various organizations and projects in web development.',
            keywords: 'Work Experience, Activities, Career, Professional Experience, Software Engineer, Frontend Developer, Tech Career, Portfolio',
        }),
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return <WorkPage />
}
