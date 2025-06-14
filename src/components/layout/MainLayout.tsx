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
        'relative transition-all min-h-screen px-4 flex flex-col lg:mx-96 md:mx-40 sm:mx-24 ',
        className
      )}
    >
      {children}
      <Background />
    </div>
  )
}
export default MainLayout
