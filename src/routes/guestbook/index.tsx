import { createFileRoute } from '@tanstack/react-router'
import GuestbookPage from '@/pages/guestbook'
import { getGuestbookMessages } from '@/pages/guestbook/server'
import { seo } from '@/lib/seo'

export const Route = createFileRoute('/guestbook/')({
  loader: async () => await getGuestbookMessages(),
  head: () => {
    const { meta, links } = seo({
      title: 'Guestbook - Muhamad Putra Satria',
      description:
        'Leave a postcard on the map — messages from visitors around the world, pinned to where they were sent from.',
      keywords:
        'Guestbook, Postcards, Map, Messages, Muhamad Putra Satria, Portfolio',
      path: '/guestbook',
    })
    return { meta, links }
  },
  staleTime: 0,
  gcTime: 0,
  component: RouteComponent,
})

function RouteComponent() {
  const { messages } = Route.useLoaderData()
  return <GuestbookPage initialMessages={messages} />
}
