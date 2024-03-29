import Main from '@/components/common/Main';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Typewriter } from 'nextjs-simple-typewriter';

export default function Home() {
  return (
    <Main className="justify-between">
      <main className="container h-full flex md:flex-row flex-col-reverse md:items-center justify-between md:gap-0 gap-8 md:mb-0 mb-12">
        <div className="flex flex-col gap-3 items-start">
          <h1 className="font-bold md:text-6xl text-4xl text-blue-400 drop-shadow-lg">
            Hello i&apos;m Putra👋
          </h1>
          <div className="md:text-xl text-md font-light">
            <span>👨‍🎓 I&apos;m a fresh graduate | </span>
            <span className="italic font-semibold">
              <Typewriter
                words={[
                  'Frontend Dev',
                  'Software Engineer',
                  'Basketball Player'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>
          <p className="md:text-xl text-md font-light">
            Interested in learning new technologies and a dedicated basketball
            fan. Take a peek at my{' '}
            <span className="italic font-semibold text-blue-400 underline cursor-pointer">
              resume!
            </span>
          </p>
        </div>
        <Avatar className="md:w-96 md:h-96 w-52 h-52 border-4 dark:border-white border-blue-400 shadow-lg">
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </main>
    </Main>
  );
}
