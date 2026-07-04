import { MapPin } from 'lucide-react'
import type { GuestbookMessage } from '../server'

export type PostcardTheme = 'vintage' | 'minimal' | 'polaroid'

const THEMES: PostcardTheme[] = ['vintage', 'minimal', 'polaroid']

/** Deterministically pick a theme from the message id so a card always looks the same. */
export function themeForId(id: string): PostcardTheme {
  let sum = 0
  for (let i = 0; i < id.length; i++) sum = (sum + id.charCodeAt(i)) % 997
  return THEMES[sum % THEMES.length]
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function locationLabel(m: GuestbookMessage) {
  if (m.city && m.country) return `${m.city}, ${m.country}`
  if (m.country) return m.country
  if (m.city) return m.city
  return 'Somewhere on Earth'
}

interface PostcardProps {
  message: GuestbookMessage
  theme?: PostcardTheme
}

const Postcard = ({ message, theme }: PostcardProps) => {
  const resolved = theme ?? themeForId(message.id)
  const initial = message.name.charAt(0).toUpperCase()

  if (resolved === 'vintage') {
    return (
      <div className="relative w-full overflow-hidden rounded-md border border-amber-900/20 bg-[#f4ecd8] p-5 text-amber-950 shadow-lg">
        {/* postage stamp */}
        <div className="absolute top-3 right-3 flex h-14 w-12 flex-col items-center justify-center rounded-[2px] border-2 border-dashed border-amber-800/40 bg-amber-100/60 text-center">
          <span className="text-lg leading-none">✈️</span>
          <span className="mt-0.5 text-[7px] font-bold tracking-widest text-amber-800/70 uppercase">
            Air Mail
          </span>
        </div>
        {/* round postmark */}
        <div className="absolute top-4 right-16 flex h-11 w-11 rotate-[-12deg] items-center justify-center rounded-full border-2 border-rose-800/40 text-center text-[7px] font-semibold tracking-wider text-rose-800/50 uppercase">
          Posted
        </div>

        <p className="font-amatic text-3xl tracking-wide text-amber-900">
          Dear Putra,
        </p>
        <p className="mt-2 max-w-[75%] text-sm leading-relaxed break-words whitespace-pre-wrap">
          {message.message}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-amber-900/20 pt-3">
          <div>
            <p className="text-sm font-semibold">— {message.name}</p>
            <p className="flex items-center gap-1 text-[11px] text-amber-800/70">
              <MapPin className="h-3 w-3" /> {locationLabel(message)}
            </p>
          </div>
          <p className="text-[11px] text-amber-800/60">
            {formatDate(message.createdAt)}
          </p>
        </div>
      </div>
    )
  }

  if (resolved === 'polaroid') {
    return (
      <div className="w-full rounded-sm bg-white p-3 pb-5 shadow-xl">
        {/* "photo" area */}
        <div className="flex h-28 items-center justify-center rounded-sm bg-linear-to-br from-primary/80 via-primary/50 to-foreground/70">
          <span className="text-4xl font-bold text-white/90">{initial}</span>
        </div>
        <p className="font-amatic mt-3 text-center text-2xl leading-tight tracking-wide text-neutral-800">
          {message.message}
        </p>
        <div className="mt-2 flex items-center justify-between px-1 text-neutral-500">
          <span className="text-xs font-medium text-neutral-700">
            {message.name}
          </span>
          <span className="flex items-center gap-1 text-[10px]">
            <MapPin className="h-3 w-3" /> {locationLabel(message)}
          </span>
        </div>
      </div>
    )
  }

  // minimal (modern)
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-lg">
      <div className="mb-3 h-1 w-10 rounded-full bg-linear-to-r from-primary to-foreground" />
      <p className="text-sm leading-relaxed text-foreground break-words whitespace-pre-wrap">
        {message.message}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-foreground">
            {initial}
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{message.name}</p>
            <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <MapPin className="h-3 w-3" /> {locationLabel(message)}
            </p>
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground">
          {formatDate(message.createdAt)}
        </p>
      </div>
    </div>
  )
}

export default Postcard
