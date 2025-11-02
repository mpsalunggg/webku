import { Fragment } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import ContactBento from './components/ContactBento'
import { AnimatedLines } from '@/components/common/Background'
import { GET_USER_STATS } from '@/constants/query'
import { useQuery } from '@apollo/client/react'

interface GitHubStats {
    user: {
        name: string
        avatarUrl: string
        totalRepositories: { totalCount: number }
        totalFollowers: { totalCount: number }
        totalCommit: { totalCommitContributions: number }
        totalPullRequest: { totalPullRequestContributions: number }
    }
}

const Home = () => {
    const { data } = useQuery<GitHubStats>(GET_USER_STATS, {
        variables: { username: 'mpsalunggg' },
    })

    return (
        <Fragment>
            <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
                <AnimatedLines variant="hero" className="opacity-60" />

                <div className="relative z-10 mx-auto max-w-4xl text-center">
                    <div className="animate-fade-in-up">
                        <p className="text-muted-foreground mb-6 font-mono text-sm">
                            Hello i&apos;m Putra👋
                        </p>
                        <h1 className="mb-8 text-4xl leading-tight font-light text-balance md:text-6xl lg:text-7xl">
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
                            {/* <span className="italic font-normal">aspiring</span> fullstack developer */}
                        </h1>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
                            Passionate about exploring new technologies and sharing knowledge.
                        </p>
                    </div>
                </div>

                <AnimatedLines variant="floating" className="opacity-40" />
            </section>
            <section id="contact" className="flex flex-col justify-center px-6">
                <div className="mx-auto w-full max-w-6xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-6 text-3xl font-light md:text-4xl">
                            Let's create something <span className="italic">beautiful</span>{' '}
                            together
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            I'm always interested in discussing new projects and
                            opportunities.
                        </p>
                    </div>

                    <ContactBento githubStats={data?.user} username="mpsalunggg" />

                    <div className="border-border mt-16 border-t py-16">
                        <div className="text-center">
                            <p className="text-muted-foreground text-xs">© 2025 Mps</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Home