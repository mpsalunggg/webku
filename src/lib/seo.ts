const SITE_URL = 'https://putrasatria.site'
const DEFAULT_IMAGE = '/og-image.png'

export const seo = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  path = '',
}: {
  title: string
  description?: string
  image?: string
  keywords?: string
  type?: 'website' | 'profile' | 'article'
  path?: string
}) => {
  const fullUrl = `${SITE_URL}${path}`
  const fullImageUrl = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}${DEFAULT_IMAGE}`

  const meta = [
    { title },
    ...(description ? [{ name: 'description' as const, content: description }] : []),
    ...(keywords ? [{ name: 'keywords' as const, content: keywords }] : []),
    { name: 'author' as const, content: 'Muhamad Putra Satria' },
    { name: 'robots' as const, content: 'index, follow' },
    { property: 'og:type' as const, content: type },
    { property: 'og:title' as const, content: title },
    { property: 'og:site_name' as const, content: 'Muhamad Putra Satria' },
    { property: 'og:url' as const, content: fullUrl },
    { property: 'og:locale' as const, content: 'en_US' },
    ...(description
      ? [{ property: 'og:description' as const, content: description }]
      : []),
    { property: 'og:image' as const, content: fullImageUrl },
    { property: 'og:image:width' as const, content: '1200' },
    { property: 'og:image:height' as const, content: '630' },
    { property: 'og:image:alt' as const, content: title },
    { name: 'twitter:card' as const, content: 'summary_large_image' as const },
    { name: 'twitter:site' as const, content: '@putrasatria' },
    { name: 'twitter:creator' as const, content: '@putrasatria' },
    { name: 'twitter:title' as const, content: title },
    ...(description
      ? [{ name: 'twitter:description' as const, content: description }]
      : []),
    { name: 'twitter:image' as const, content: fullImageUrl },
    { name: 'twitter:image:alt' as const, content: title },
  ]

  const links = [{ rel: 'canonical' as const, href: fullUrl }]

  return { meta, links }
}

export const structuredData = ({
  type,
  data,
}: {
  type: 'Person' | 'WebPage' | 'Article' | 'BreadcrumbList'
  data: Record<string, any>
}) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return JSON.stringify(baseData)
}
