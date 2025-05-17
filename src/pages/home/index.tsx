import Sosmed from '@/components/common/Sosmed'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { Typewriter } from 'react-simple-typewriter'

const Home = () => {
  return (
    <main className="h-screen flex justify-center items-center md:gap-0 gap-8 py-8">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="font-bold md:text-5xl text-4xl drop-shadow-lg">
          Hello i&apos;m <span className='text-yellow-500'>Putra</span>👋
        </h1>
        <div className="md:text-md text-sm font-light">
          <span>👨‍💻 Software Engineer | </span>
          <span className="italic font-semibold">
            <Typewriter
              words={['Frontend Engineer']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>
        <p className="md:text-md text-sm font-light">
          Interested in learning new technologies and love teaching. Take a peek
          at my{' '}
          <a
            href="https://docs.google.com/document/d/15emkkk3uECevTU2SMT8q4aD8fpdu9tF-E33ha0YTrgA/edit?tab=t.0"
            className="italic font-semibold underline cursor-pointer"
            target="_blank"
          >
            resume!
          </a>
        </p>
        <div className="flex gap-2 items-center">
          <Button
            variant="default"
            className="w-24 rounded-full cursor-pointer"
          >
            <Link to="/me">Explore</Link>
          </Button>
          <ThemeToggle />
          <Sosmed />
        </div>
      </div>
    </main>
  )
}
export default Home
