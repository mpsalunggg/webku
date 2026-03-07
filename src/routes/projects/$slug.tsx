import { createFileRoute } from '@tanstack/react-router'
import { getDetailProject } from '@/pages/project/server'
import DetailProject from '@/pages/project/DetailProject'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/projects/$slug')({
  loader: async ({ params }) =>
    await getDetailProject({
      data: { slug: params.slug },
    }),
  staleTime: 0,
  gcTime: 0,
  head: ({ loaderData, params }) => {
    if (!loaderData) return {}

    return {
      meta: seo({
        title: `${loaderData.frontmatter.title} - Project`,
        description: loaderData.frontmatter.description,
        image: loaderData.frontmatter.image,
        keywords: loaderData.frontmatter.tech?.join(', '),
        type: 'article',
        path: `/projects/${params.slug}`,
      }),
    }
  },
  component: ProjectDetail,
})

function ProjectDetail() {
  const { slug, frontmatter } = Route.useLoaderData()
  return <DetailProject frontmatter={frontmatter} slug={slug} />
}
