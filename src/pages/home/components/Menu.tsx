import { Button } from '@/components/ui/button'
import { MENU } from '@/constants/menu'
import { useNavigate } from '@tanstack/react-router'

const Menu = () => {
  const navigate = useNavigate()
  return (
    <div className="flex gap-2 max-w-full">
      {MENU.map((menu) => (
        <Button
          key={menu.id}
          variant="outline"
          className="w-auto xl:w-28 shadow-md"
          onClick={() =>
            navigate({
              to: menu.path,
            })
          }
        >
          <menu.icon className="w-5 h-5" />
          {menu.title}
        </Button>
      ))}
    </div>
  )
}
export default Menu
