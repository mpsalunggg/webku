import { cn } from '@/lib/utils'
import React from 'react'
import Navbar from '../common/Navbar'
import { ThemeProvider } from './ThemeProvider'

const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div
        className={cn(
          'font-dm-sans relative flex min-h-screen flex-col transition-all',
          'mx-auto max-w-6xl',
          className
        )}
      >
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  )
}
export default MainLayout
