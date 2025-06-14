import { useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Sosmed from '@/components/common/Sosmed'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/button'

const Home = () => {
  const me = useRef<HTMLDivElement | null>(null)
  return (
    <main>
      <section className="h-screen flex justify-center items-center md:gap-0 gap-8 py-8">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="font-bold md:text-5xl text-4xl drop-shadow-lg">
            Hello i&apos;m <span className="text-yellow-500">Putra</span>👋
          </h1>
          <div className="md:text-md text-sm font-light">
            <span>👨‍💻 Software Engineer | </span>
            <span className="italic font-semibold">
              <Typewriter
                words={['Frontend Engineer', 'Basketball Player']}
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
            Interested in learning new technologies and love teaching. Take a
            peek at my{' '}
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
              onClick={() => {
                me.current?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              Explore
            </Button>
            <ThemeToggle />
            <Sosmed />
          </div>
        </div>
      </section>
      <section ref={me} className="h-screen">

      </section>
    </main>
  )
}
export default Home
