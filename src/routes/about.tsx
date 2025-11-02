import AboutPage from '@/pages/about'
import { createFileRoute } from '@tanstack/react-router'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/about')({
    head: () => ({
        meta: seo({
            title: 'About - Muhamad Putra Satria',
            description: 'Learn more about Muhamad Putra Satria, a passionate Frontend Developer specializing in React and modern web technologies. Discover my journey, skills, and what drives my passion for software engineering.',
            keywords: 'About, Software Engineer, Frontend Developer, React Developer, Web Developer, Biography, Skills, Experience, Muhamad Putra Satria',
            type: 'profile',
        }),
    }),
    component: RouteComponent,
})

function RouteComponent() {
    return <AboutPage />
}
