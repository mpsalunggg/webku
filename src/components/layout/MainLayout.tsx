import { cn } from '@/lib/utils'
import React from 'react'
import Navbar from '../common/Navbar'

const MainLayout = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
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
  )
}
export default MainLayout
