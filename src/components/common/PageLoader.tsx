import { useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export function PageLoader() {
  const router = useRouterState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (router.status === 'pending') {
      setIsLoading(true)
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false)
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [router.status])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-primary/20">
        <div className="h-full bg-primary animate-loading-bar origin-left" />
      </div>
    </div>
  )
}
