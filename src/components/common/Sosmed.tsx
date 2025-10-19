import { Button } from '@/components/ui/button'
import { Github, Linkedin } from 'lucide-react'

const Sosmed = () => {
  return (
    <div className="flex items-center gap-2">
      <Button
        className="cursor-pointer rounded-full bg-purple-600 text-white hover:bg-purple-500"
        size="icon"
      >
        <a href="https://github.com/mpsalunggg">
          <Github />
        </a>
      </Button>
      <Button
        className="cursor-pointer rounded-full bg-blue-500 text-white hover:bg-blue-400"
        size="icon"
      >
        <a href="https://www.linkedin.com/in/muhamadputrasatria/">
          <Linkedin />
        </a>
      </Button>
    </div>
  )
}
export default Sosmed
