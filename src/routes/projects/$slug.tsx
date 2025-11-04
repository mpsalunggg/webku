import { createFileRoute } from '@tanstack/react-router'
import { getDetailProject } from '@/pages/project/server'
import DetailProject from '@/pages/project/DetailProject'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/projects/$slug')({
  loader: async ({ params }) =>
    getDetailProject({
      data: { slug: params.slug },
    }),
  head: ({ loaderData }) => {
    if (!loaderData) return {}

    return {
      meta: seo({
        title: `${loaderData.frontmatter.title} - Project`,
        description: loaderData.frontmatter.description,
        image: loaderData.frontmatter.image,
        keywords: loaderData.frontmatter.tech?.join(', '),
      }),
    }
  },
  component: ProjectDetail,
})

function ProjectDetail() {
  const { slug, frontmatter } = Route.useLoaderData()
  return <DetailProject frontmatter={frontmatter} slug={slug} />
}
