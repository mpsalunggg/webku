import { Fragment } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { useQuery } from '@apollo/client'
import { GET_USER_STATS } from '@/constants/query'
import { AnimatedLines } from '@/components/common/Background'
import ContactBento from '@/pages/home/components/ContactBento'

const Home = () => {
  const { data } = useQuery(GET_USER_STATS, {
    variables: { username: 'mpsalunggg' },
  })

  return (
    <Fragment>
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <AnimatedLines variant="hero" className="opacity-60" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <p className="text-sm text-muted-foreground mb-6 font-mono">
              Hello i&apos;m Putra👋
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-balance mb-8">
              I'm a{' '}
              <Typewriter
                words={['Frontend Developer', 'Basketball Player']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
              <br />
              <span className="italic font-normal">aspiring</span> fullstack developer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about exploring new technologies and sharing knowledge.
            </p>
          </div>
        </div>

        <AnimatedLines variant="floating" className="opacity-40" />
      </section>
      <section id="contact" className="flex flex-col justify-center px-6">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Let's create something <span className="italic">beautiful</span>{' '}
              together
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm always interested in discussing new projects and
              opportunities.
            </p>
          </div>

          <ContactBento githubStats={data?.user} username="mpsalunggg" />

          <div className="mt-16 py-16 border-t border-border">
            <div className="text-center">
              <p className="text-xs text-muted-foreground">© 2025 Mps</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
export default Home
