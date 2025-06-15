import { useRef } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Sosmed from '@/components/common/Sosmed'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/button'
import Profile from '@/assets/image/profile.png'
import Menu from './components/Menu'
import { ArrowDown } from 'lucide-react'
import { useQuery } from '@apollo/client'
import { GET_USER_STATS } from '@/constants/query'

const Home = () => {
  const { data } = useQuery(GET_USER_STATS, {
    variables: { username: 'mpsalunggg' },
  })
  const me = useRef<HTMLDivElement | null>(null)

  return (
    <main>
      <section className="h-screen flex justify-center items-center md:gap-0 gap-8 py-8">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="font-extrabold lg:text-5xl text-4xl drop-shadow-lg">
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
          <p className="md:text-md text-sm font-light text-center">
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
              Explore <ArrowDown />
            </Button>
            <ThemeToggle />
            <Sosmed />
          </div>
        </div>
      </section>
      <section
        ref={me}
        className="w-full h-screen flex items-center justify-center flex-col gap-4"
      >
        <img src={Profile} alt="profile" className="w-40 rounded-full" />
        <p className="font-bold text-2xl">{data?.user?.name}</p>
        <p className="text-gray-500 w-2/3 text-center">
          With over{' '}
          <span className="font-bold text-primary">
            {data?.user?.totalCommit?.totalCommitContributions}
          </span>{' '}
          commits across{' '}
          <span className="font-bold text-primary">
            {data?.user?.totalRepositories?.totalCount}
          </span>{' '}
          repositories, I actively contribute to both personal and open-source
          projects to sharpen my skills and support the developer community.
        </p>
        <Menu />
      </section>
    </main>
  )
}
export default Home
