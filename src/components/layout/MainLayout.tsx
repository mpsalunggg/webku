import { cn } from '@/lib/utils'
import React from 'react'
import Background from './Background'

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
        'relative font-dm-sans transition-all min-h-screen px-4 flex flex-col overflow-hidden',
        'lg:px-96 md:px-40 sm:px-24',
        className
      )}
    >
      {/* <Background /> */}
      {children}
    </div>
  )
}
export default MainLayout
