export const seo = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
}: {
  title: string
  description?: string
  image?: string
  keywords?: string
  type?: 'website' | 'profile'
}) => {
  const tags = [
    { title },
    ...(description ? [{ name: 'description' as const, content: description }] : []),
    ...(keywords ? [{ name: 'keywords' as const, content: keywords }] : []),
    { property: 'og:type' as const, content: type },
    { property: 'og:title' as const, content: title },
    ...(description ? [{ property: 'og:description' as const, content: description }] : []),
    ...(description ? [{ name: 'twitter:title' as const, content: title }] : []),
    ...(description ? [{ name: 'twitter:description' as const, content: description }] : []),
    ...(image
      ? [
          { name: 'twitter:image' as const, content: image },
          { name: 'twitter:card' as const, content: 'summary_large_image' as const },
          { property: 'og:image' as const, content: image },
        ]
      : [{ name: 'twitter:card' as const, content: 'summary_large_image' as const }]),
  ]
  return tags
}
