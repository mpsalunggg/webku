import { MapPin } from 'lucide-react'
import type { GuestbookMessage } from '../server'

export type PostcardTheme = 'gradient' | 'wave' | 'dot'

export const POSTCARD_THEMES: { key: PostcardTheme; label: string }[] = [
  { key: 'gradient', label: 'Gradient' },
  { key: 'wave', label: 'Wave' },
  { key: 'dot', label: 'Dot' },
]

export function normalizeTheme(theme: string | null | undefined): PostcardTheme {
  return theme === 'wave' || theme === 'dot' ? theme : 'gradient'
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

/** Small preview tile used by the theme picker in the form. */
export function PostcardThemeSwatch({ theme }: { theme: PostcardTheme }) {
  if (theme === 'gradient') {
    return (
      <div className="h-full w-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500" />
    )
  }
  if (theme === 'wave') {
    return (
      <div className="relative h-full w-full bg-sky-50">
        <svg
          className="absolute inset-x-0 bottom-0"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
        >
          <path d="M0,20 Q25,5 50,20 T100,20 V40 H0 Z" className="fill-sky-400" />
          <path
            d="M0,28 Q25,14 50,28 T100,28 V40 H0 Z"
            className="fill-cyan-500/70"
          />
        </svg>
      </div>
    )
  }
  return (
    <div
      className="h-full w-full bg-white"
      style={{
        backgroundImage:
          'radial-gradient(currentColor 1.2px, transparent 1.2px)',
        backgroundSize: '7px 7px',
        color: 'rgb(99 102 241 / 0.5)',
      }}
    />
  )
}

interface PostcardProps {
  message: GuestbookMessage
  theme?: PostcardTheme
  /** Fixed height + clamped message, for uniform cards in a list/grid. */
  compact?: boolean
}

const Postcard = ({ message, theme, compact = false }: PostcardProps) => {
  const resolved = theme ?? normalizeTheme(message.theme)

  const body = (
    <div className="flex h-full flex-col">
      <p
        className={`text-[15px] leading-relaxed break-words whitespace-pre-wrap ${
          compact ? 'line-clamp-4 flex-1' : ''
        }`}
      >
        {message.message}
      </p>
      <div className="mt-5 flex items-end justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm leading-tight font-semibold">
            {message.name}
          </p>
          <p className="flex items-center gap-1 text-[11px] opacity-70">
            <MapPin className="h-3 w-3 shrink-0" /> {locationLabel(message)}
          </p>
        </div>
        <p className="shrink-0 text-[11px] opacity-60">
          {formatDate(message.createdAt)}
        </p>
      </div>
    </div>
  )

  const sizing = compact ? 'h-60' : ''

  if (resolved === 'gradient') {
    return (
      <div
        className={`relative flex w-full flex-col overflow-hidden rounded-2xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-6 text-white shadow-xl ${sizing}`}
      >
        <div className="pointer-events-none absolute -top-10 -right-8 h-36 w-36 rounded-full bg-white/20 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
        <div className="relative flex flex-1 flex-col">{body}</div>
      </div>
    )
  }

  if (resolved === 'wave') {
    return (
      <div
        className={`relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card pt-6 pr-6 pb-16 pl-6 text-foreground shadow-xl ${sizing}`}
      >
        <div className="relative flex flex-1 flex-col">{body}</div>
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 w-full"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
        >
          <path
            d="M0,40 Q100,10 200,40 T400,40 V80 H0 Z"
            className="fill-sky-400/40"
          />
          <path
            d="M0,55 Q100,25 200,55 T400,55 V80 H0 Z"
            className="fill-cyan-500/50"
          />
        </svg>
      </div>
    )
  }

  // dot
  return (
    <div
      className={`relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 text-foreground shadow-xl ${sizing}`}
    >
      <div
        className="pointer-events-none absolute inset-0 text-indigo-500/25 dark:text-indigo-400/20"
        style={{
          backgroundImage:
            'radial-gradient(currentColor 1.4px, transparent 1.4px)',
          backgroundSize: '14px 14px',
        }}
      />
      <div className="relative flex flex-1 flex-col">{body}</div>
    </div>
  )
}

export default Postcard
