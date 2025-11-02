import { createFileRoute } from '@tanstack/react-router'
import { prisma } from '@/lib/prisma'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/views')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        try {
          const url = new URL(request.url)
          const slug = url.searchParams.get('slug')

          if (!slug) {
            const allViews = await prisma.projectView.findMany({
              orderBy: {
                views: 'desc',
              },
            })

            return json({
              success: true,
              data: allViews,
            })
          }

          const view = await prisma.projectView.findUnique({
            where: { slug },
          })

          return json({
            success: true,
            data: view || { slug, views: 0 },
          })
        } catch (error) {
          console.error('Error fetching views:', error)
          return json(
            { error: 'Failed to fetch views' },
            { status: 500 }
          )
        }
      },
    }
  }
})
