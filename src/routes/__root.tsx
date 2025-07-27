import { ThemeProvider } from '@/components/layout/ThemeProvider'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Fragment } from 'react/jsx-runtime'

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </Fragment>
  ),
})
