import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '../layout/ThemeProvider'

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [systemDark, setSystemDark] = useState(false)

    // Only the OS preference needs an effect. Reading the `dark` class off
    // <html> instead would be stale on click: child effects run before parent
    // ones, so this would fire before ThemeProvider rewrote the class.
    useEffect(() => {
        const query = window.matchMedia('(prefers-color-scheme: dark)')
        setSystemDark(query.matches)

        const onChange = (event: MediaQueryListEvent) =>
            setSystemDark(event.matches)
        query.addEventListener('change', onChange)
        return () => query.removeEventListener('change', onChange)
    }, [])

    // Derived synchronously from `theme`, so a click is reflected immediately.
    const isDark = theme === 'dark' || (theme === 'system' && systemDark)

    return (
        <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            {isDark ? <Sun /> : <Moon />}
        </Button>
    )
}
