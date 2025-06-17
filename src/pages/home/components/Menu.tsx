import { Button } from '@/components/ui/button'
import { Notebook, SquareChartGantt, User } from 'lucide-react'
const Menu = () => {
  return (
    <div className="flex gap-2 max-w-full">
      <Button variant="outline" className="w-auto lg:w-28 shadow-md">
        <User />
        About
      </Button>
      <Button variant="outline" className="w-auto lg:w-28 shadow-md">
        <SquareChartGantt />
        Project
      </Button>
      <Button variant="outline" className="w-auto lg:w-28 shadow-md">
        <Notebook />
        Blog
      </Button>
    </div>
  )
}
export default Menu
