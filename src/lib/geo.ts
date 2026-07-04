/**
 * Turn precise coordinates (e.g. from the browser Geolocation API) into a
 * city/country label using the free, key-less BigDataCloud reverse geocoder.
 * Returns null on failure — the coordinates are still usable without a label.
 */
export async function reverseGeocode(
  lat: number,
  lng: number,
): Promise<{ city: string | null; country: string | null } | null> {
  try {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 3000)
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`,
      { signal: controller.signal },
    )
    clearTimeout(timeout)

    if (!res.ok) return null
    const data = (await res.json()) as {
      city?: string
      locality?: string
      countryName?: string
    }

    return {
      city: data.city || data.locality || null,
      country: data.countryName ?? null,
    }
  } catch {
    return null
  }
}
