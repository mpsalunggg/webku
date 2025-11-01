// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import { ThemeProvider } from '@/components/layout/ThemeProvider'
import MainLayout from '@/components/layout/MainLayout'

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
        title: 'TanStack Start Starter',
      },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <MainLayout>{children}</MainLayout>
          <TanStackRouterDevtools />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
