import { cn } from '@/lib/utils'
import React from 'react'

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
        'transition-all min-h-screen px-4 flex flex-col lg:mx-96 md:mx-40 sm:mx-24 ',
        className
      )}
    >
      {children}
    </div>
  )
}
export default MainLayout
