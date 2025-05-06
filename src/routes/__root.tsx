import MainLayout from '@/components/layout/MainLayout'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { Fragment } from 'react/jsx-runtime'

export const Route = createRootRoute({
  component: () => (
    <Fragment>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <TanStackRouterDevtools />
    </Fragment>
  ),
})
