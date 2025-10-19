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
      className={cn('cursor-pointer rounded-full', className)}
      onClick={() => changeThemes()}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
