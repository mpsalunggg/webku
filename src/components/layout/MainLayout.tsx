import { cn } from '@/lib/utils'
import React from 'react'
import Navbar from '../common/Navbar'
// import Background from './Background'

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
        'relative font-dm-sans transition-all min-h-screen flex flex-col overflow-hidden',
        'max-w-6xl mx-auto',
        className
      )}
    >
      <Navbar />
      {/* <Background /> */}
      {children}
    </div>
  )
}
export default MainLayout
