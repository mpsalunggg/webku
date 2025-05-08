import Me from '@/pages/me'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Me />
}
