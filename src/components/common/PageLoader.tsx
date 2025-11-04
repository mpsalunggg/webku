import { useRouterState } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export function PageLoader() {
  const router = useRouterState()
  const [isLoading, setIsLoading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (router.status === 'pending') {
      setIsLoading(true)
      setIsComplete(false)
    } else if (isLoading) {
      setIsComplete(true)
      const timeout = setTimeout(() => {
        setIsLoading(false)
        setIsComplete(false)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [router.status, isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-primary/20">
        <div
          className={`h-full bg-primary origin-left transition-transform duration-300 ${
            isComplete
              ? 'scale-x-100'
              : 'animate-loading-bar'
          }`}
        />
      </div>
    </div>
  )
}
