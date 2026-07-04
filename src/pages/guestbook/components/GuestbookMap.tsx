import { useEffect, useRef, useState } from 'react'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { Map as MlMap, Marker as MlMarker } from 'maplibre-gl'
import type { GuestbookMessage } from '../server'

// OpenFreeMap — free, no API key required. Swap for a MapTiler style URL if desired.
const MAP_STYLE = 'https://tiles.openfreemap.org/styles/positron'

interface GuestbookMapProps {
  messages: GuestbookMessage[]
  onSelect: (m: GuestbookMessage) => void
}

const GuestbookMap = ({ messages, onSelect }: GuestbookMapProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MlMap | null>(null)
  const markersRef = useRef<MlMarker[]>([])
  const onSelectRef = useRef(onSelect)
  onSelectRef.current = onSelect

  const [loaded, setLoaded] = useState(false)

  const located = messages.filter((m) => m.lat != null && m.lng != null)
  const locatedKey = located.map((m) => m.id).join(',')

  // Initialise the map once (client-only; maplibre-gl touches window/WebGL).
  useEffect(() => {
    let cancelled = false
    let map: MlMap | undefined

    ;(async () => {
      const maplibregl = (await import('maplibre-gl')).default
      if (cancelled || !containerRef.current) return

      map = new maplibregl.Map({
        container: containerRef.current,
        style: MAP_STYLE,
        // Default view focused on Indonesia (archipelago spans ~95°–141°E).
        center: [118, -2.5],
        zoom: 4,
        // Attribution hidden per request (note: OSM/ODbL normally requires it).
        attributionControl: false,
      })
      map.addControl(
        new maplibregl.NavigationControl({ showCompass: false }),
        'top-right',
      )
      map.on('load', () => {
        if (!cancelled) setLoaded(true)
      })
      mapRef.current = map
    })()

    return () => {
      cancelled = true
      markersRef.current.forEach((mk) => mk.remove())
      markersRef.current = []
      map?.remove()
      mapRef.current = null
    }
  }, [])

  // Sync markers whenever the located messages change (after the map is ready).
  useEffect(() => {
    if (!loaded) return
    let cancelled = false

    ;(async () => {
      const maplibregl = (await import('maplibre-gl')).default
      const map = mapRef.current
      if (!map || cancelled) return

      markersRef.current.forEach((mk) => mk.remove())
      markersRef.current = []

      located.forEach((m) => {
        const el = document.createElement('button')
        el.type = 'button'
        el.className = 'gb-marker'
        el.setAttribute('aria-label', `Message from ${m.name}`)
        el.innerHTML =
          '<span class="gb-marker-pulse"></span><span class="gb-marker-dot"></span>'
        el.addEventListener('click', (e) => {
          e.stopPropagation()
          onSelectRef.current(m)
          map.flyTo({ center: [m.lng as number, m.lat as number], zoom: 4.5 })
        })
        const marker = new maplibregl.Marker({ element: el })
          .setLngLat([m.lng as number, m.lat as number])
          .addTo(map)
        markersRef.current.push(marker)
      })
    })()

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded, locatedKey])

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-border">
      <div ref={containerRef} className="h-full w-full" />
      {loaded && located.length === 0 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
          <p className="bg-card/90 text-muted-foreground rounded-full border border-border px-4 py-1.5 text-xs backdrop-blur">
            Belum ada kartu pos berlokasi — kirim yang pertama! ✨
          </p>
        </div>
      )}
    </div>
  )
}

export default GuestbookMap
