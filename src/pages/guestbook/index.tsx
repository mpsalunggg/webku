import { useEffect, useState } from 'react'
import { AnimatedLines } from '@/components/common/Background'
import BottomDrawer from '@/components/common/BottomDrawer'
import { type GuestbookMessage } from './server'
import GuestbookMap from './components/GuestbookMap'
import Postcard from './components/Postcard'

interface GuestbookPageProps {
  initialMessages: GuestbookMessage[]
}

const GuestbookPage = ({ initialMessages }: GuestbookPageProps) => {
  const [active, setActive] = useState<GuestbookMessage | null>(null)
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // maplibre-gl is client-only (WebGL) — never render it during SSR.
  useEffect(() => setMounted(true), [])

  function openPostcard(m: GuestbookMessage) {
    setActive(m)
    setOpen(true)
  }

  const locatedCount = initialMessages.filter(
    (m) => m.lat != null && m.lng != null,
  ).length

  return (
    <main className="bg-background min-h-screen">
      <div className="pt-20">
        <section className="relative px-6 py-12">
          <div className="absolute -top-12 left-1/2 w-full max-w-4xl -translate-x-1/2 transform">
            <AnimatedLines className="opacity-30" />
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <p className="font-amatic text-2xl tracking-[0.2em] text-muted-foreground">
                Guestbook
              </p>
              <h1 className="font-amatic text-6xl font-bold tracking-wide text-foreground md:text-7xl">
                Postcards from around the world
              </h1>
              <p className="text-muted-foreground mt-2 text-base font-light">
                Tinggalkan kartu pos untukku — pesanmu muncul di peta sesuai
                lokasi pengirim. {initialMessages.length} pesan · {locatedCount}{' '}
                di peta. Klik pin untuk membuka kartunya, atau tekan tombol pensil.
              </p>
            </div>

            {/* Map */}
            {mounted ? (
              <GuestbookMap messages={initialMessages} onSelect={openPostcard} />
            ) : (
              <div className="bg-muted/30 h-[420px] w-full animate-pulse rounded-2xl border border-border" />
            )}
          </div>
        </section>
      </div>

      {/* View a pinned postcard */}
      <BottomDrawer
        open={open}
        onClose={() => setOpen(false)}
        title={
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Postcard
          </span>
        }
      >
        {active && <Postcard message={active} />}
      </BottomDrawer>
    </main>
  )
}

export default GuestbookPage
