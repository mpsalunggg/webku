import { Link, useLocation } from '@tanstack/react-router'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ to, children, className, onClick }: NavLinkProps) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'text-sm transition-colors',
        isActive
          ? 'text-foreground font-medium'
          : 'text-muted-foreground hover:text-foreground',
        className
      )}
      target="_self"
    >
      {children}
    </Link>
  )
}
