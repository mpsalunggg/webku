import { createServerFn } from '@tanstack/react-start'
import { getRequestIP, getRequestHeaders } from '@tanstack/react-start/server'
import { prisma } from '@/lib/prisma'
import { geolocateIP } from '@/lib/geo'

export interface GuestbookMessage {
  id: string
  name: string
  message: string
  lat: number | null
  lng: number | null
  city: string | null
  country: string | null
  createdAt: string
}

const MAX_NAME = 40
const MAX_MESSAGE = 280

function serialize(m: {
  id: string
  name: string
  message: string
  lat: number | null
  lng: number | null
  city: string | null
  country: string | null
  createdAt: Date
}): GuestbookMessage {
  return {
    id: m.id,
    name: m.name,
    message: m.message,
    lat: m.lat,
    lng: m.lng,
    city: m.city,
    country: m.country,
    createdAt: m.createdAt.toISOString(),
  }
}

export const getGuestbookMessages = createServerFn({ method: 'GET' }).handler(
  async () => {
    try {
      const messages = await prisma.guestbookMessage.findMany({
        orderBy: { createdAt: 'desc' },
        take: 200,
      })
      return { messages: messages.map(serialize) }
    } catch (error) {
      console.error('Error loading guestbook messages:', error)
      return { messages: [] as GuestbookMessage[] }
    }
  },
)

/** Best-effort client IP from the request, honouring reverse-proxy headers. */
function resolveClientIP(): string | null {
  try {
    const ip = getRequestIP({ xForwardedFor: true })
    if (ip) return ip
  } catch {
    // fall through to header parsing
  }
  try {
    const headers = getRequestHeaders()
    const fwd = headers['x-forwarded-for']
    if (typeof fwd === 'string' && fwd.length > 0) {
      return fwd.split(',')[0].trim()
    }
  } catch {
    // ignore
  }
  return null
}

export const addGuestbookMessage = createServerFn({ method: 'POST' })
  .inputValidator((data: { name: string; message: string }) => {
    const name = data.name?.trim() ?? ''
    const message = data.message?.trim() ?? ''

    if (!name) throw new Error('Name is required')
    if (!message) throw new Error('Message is required')
    if (name.length > MAX_NAME)
      throw new Error(`Name must be at most ${MAX_NAME} characters`)
    if (message.length > MAX_MESSAGE)
      throw new Error(`Message must be at most ${MAX_MESSAGE} characters`)

    return {
      name: name.slice(0, MAX_NAME),
      message: message.slice(0, MAX_MESSAGE),
    }
  })
  .handler(async ({ data }) => {
    const geo = await geolocateIP(resolveClientIP())

    const created = await prisma.guestbookMessage.create({
      data: {
        name: data.name,
        message: data.message,
        lat: geo?.lat ?? null,
        lng: geo?.lng ?? null,
        city: geo?.city ?? null,
        country: geo?.country ?? null,
      },
    })

    return { message: serialize(created) }
  })
