import { useState } from 'react'
import { Pencil, Send } from 'lucide-react'
import { useRouter } from '@tanstack/react-router'
import {
  addGuestbookMessage,
  type GuestbookMessage,
} from '@/pages/guestbook/server'
import Postcard from '@/pages/guestbook/components/Postcard'
import BottomDrawer from './BottomDrawer'

const MAX_MESSAGE = 280

/**
 * Floating "write a postcard" button, mounted globally in the root layout so
 * it is available on every page. Submitting opens the sent postcard as a
 * drawer and invalidates router loaders so the guestbook map refreshes.
 */
export function GuestbookFab() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formOpen, setFormOpen] = useState(false)
  const [sent, setSent] = useState<GuestbookMessage | null>(null)
  const [sentOpen, setSentOpen] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const trimmedName = name.trim()
    const trimmedMessage = message.trim()
    if (!trimmedName || !trimmedMessage) {
      setError('Isi nama dan pesan dulu ya.')
      return
    }

    setSubmitting(true)
    try {
      const res = await addGuestbookMessage({
        data: { name: trimmedName, message: trimmedMessage },
      })
      setFormOpen(false)
      setSent(res.message)
      setSentOpen(true)
      setName('')
      setMessage('')
      // refresh any active loader (e.g. the guestbook map) with the new data
      router.invalidate()
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Gagal mengirim pesan. Coba lagi.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setError(null)
          setFormOpen(true)
        }}
        aria-label="Tulis kartu pos"
        className="group fixed top-1/2 right-5 z-40 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Pencil className="h-5 w-5" />
        <span className="pointer-events-none absolute right-16 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-medium whitespace-nowrap text-foreground opacity-0 shadow-md transition-opacity group-hover:opacity-100">
          Tulis kartu pos
        </span>
      </button>

      {/* Write-a-postcard form drawer */}
      <BottomDrawer
        open={formOpen}
        onClose={() => setFormOpen(false)}
        title={
          <span className="font-amatic text-3xl tracking-wide text-foreground">
            Tulis kartu pos
          </span>
        }
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama kamu"
            maxLength={40}
            className="mb-3 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
          />
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tulis pesan…"
              maxLength={MAX_MESSAGE}
              rows={3}
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50"
            />
            <span className="text-muted-foreground/50 pointer-events-none absolute right-3 bottom-2.5 text-[10px]">
              {message.length}/{MAX_MESSAGE}
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-destructive text-xs">{error}</p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-4 w-4" />
              {submitting ? 'Mengirim…' : 'Kirim kartu pos'}
            </button>
          </div>
        </form>
      </BottomDrawer>

      {/* Sent postcard drawer */}
      <BottomDrawer
        open={sentOpen}
        onClose={() => setSentOpen(false)}
        title={
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Kartu pos terkirim ✨
          </span>
        }
      >
        {sent && <Postcard message={sent} />}
      </BottomDrawer>
    </>
  )
}

export default GuestbookFab
