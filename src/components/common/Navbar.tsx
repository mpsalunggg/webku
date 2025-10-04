import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from '@tanstack/react-router'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="font-mono text-sm font-medium hover:text-muted-foreground transition-colors"
          >
            Mps
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/about"
              className={`text-sm transition-colors ${
                pathname === '/about'
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" asChild className="text-xs">
              <a
                href="https://docs.google.com/document/d/15emkkk3uECevTU2SMT8q4aD8fpdu9tF-E33ha0YTrgA/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                My CV
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
