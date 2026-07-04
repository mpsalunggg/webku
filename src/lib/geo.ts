export interface GeoLocation {
  lat: number
  lng: number
  city: string | null
  country: string | null
}

function isPrivateOrLocal(ip: string): boolean {
  if (!ip) return true
  if (ip === '::1' || ip.startsWith('127.') || ip === 'localhost') return true
  // strip IPv6-mapped IPv4 prefix
  const v4 = ip.startsWith('::ffff:') ? ip.slice(7) : ip
  return (
    v4.startsWith('10.') ||
    v4.startsWith('192.168.') ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(v4) ||
    v4.startsWith('169.254.') ||
    v4.startsWith('fc') ||
    v4.startsWith('fd')
  )
}

/**
 * Resolve an approximate (city-level) location from an IP address using the
 * free, key-less ipwho.is API. Returns null for local/private IPs or on any
 * failure — callers should treat a null location as "unknown".
 */
export async function geolocateIP(
  ip: string | null | undefined,
): Promise<GeoLocation | null> {
  if (!ip || isPrivateOrLocal(ip)) return null

  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)
    const res = await fetch(
      `https://ipwho.is/${encodeURIComponent(ip)}?fields=success,latitude,longitude,city,country`,
      { signal: controller.signal },
    )
    clearTimeout(timeout)

    if (!res.ok) return null
    const data = (await res.json()) as {
      success?: boolean
      latitude?: number
      longitude?: number
      city?: string
      country?: string
    }

    if (
      !data.success ||
      typeof data.latitude !== 'number' ||
      typeof data.longitude !== 'number'
    ) {
      return null
    }

    return {
      lat: data.latitude,
      lng: data.longitude,
      city: data.city ?? null,
      country: data.country ?? null,
    }
  } catch {
    return null
  }
}
