import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import Navbar from '@/components/common/Navbar'
import { PageLoader } from '@/components/common/PageLoader'
import { ApolloProvider } from '@apollo/client/react'
import { apolloClient } from '@/lib/apollo-client'
import { TanStackRouterDevtools } from 'node_modules/@tanstack/react-router-devtools/dist/esm/TanStackRouterDevtools'

function RootDocument({ children }: { children: React.ReactNode }) {
  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhamad Putra Satria',
    jobTitle: 'Software Engineer',
    description:
      'Frontend Developer passionate about exploring new technologies and sharing knowledge',
    url: 'https://putrasatria.site',
    sameAs: [
      'https://github.com/mpsalunggg',
      'https://linkedin.com/in/muhamadputrasatria',
    ],
    knowsAbout: [
      'React',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Frontend Development',
    ],
  }

  const websiteStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Muhamad Putra Satria Portfolio',
    url: 'https://putrasatria.site',
    description:
      'Frontend Developer passionate about exploring new technologies',
    author: {
      '@type': 'Person',
      name: 'Muhamad Putra Satria',
    },
  }

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <ApolloProvider client={apolloClient}>
            <PageLoader />
            <Navbar />
            {children}
            {import.meta.env.DEV && <TanStackRouterDevtools />}
          </ApolloProvider>
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="text-muted-foreground mb-8 text-xl">Page not found</p>
        <a
          href="/"
          className="rounded-md bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
        >
          Go back home
        </a>
      </div>
    </div>
  )
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Muhamad Putra Satria - Software Engineer Portfolio',
      },
      {
        name: 'theme-color',
        content: '#000000',
      },
      // Uncomment and add your verification codes when ready
      // {
      //   name: 'google-site-verification',
      //   content: 'YOUR_GOOGLE_VERIFICATION_CODE',
      // },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})
