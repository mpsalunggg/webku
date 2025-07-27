import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '../layout/ThemeProvider'
import { cn } from '@/lib/utils'
export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme()

  const changeThemes = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      variant="default"
      size="icon"
      className={cn('rounded-full cursor-pointer', className)}
      onClick={() => changeThemes()}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
