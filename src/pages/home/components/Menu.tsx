import { Button } from '@/components/ui/button'
import { MENU } from '@/constants/menu'
import { useNavigate } from '@tanstack/react-router'

const Menu = () => {
  const navigate = useNavigate()
  return (
    <div className="flex max-w-full gap-2">
      {MENU.map((menu) => (
        <Button
          key={menu.id}
          variant="outline"
          className="w-auto shadow-md xl:w-28"
          onClick={() =>
            navigate({
              to: menu.path,
            })
          }
        >
          <menu.icon className="h-5 w-5" />
          {menu.title}
        </Button>
      ))}
    </div>
  )
}
export default Menu
