import { Typewriter } from 'nextjs-simple-typewriter';

const HomePage = () => {
  return (
    <main className="container h-full flex md:flex-row flex-col-reverse md:items-center justify-center md:gap-0 gap-8 mb-12">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold md:text-5xl text-4xl text-blue-400 drop-shadow-lg">
          Hello i&apos;m Putra👋
        </h1>
        <div className="md:text-lg text-md font-light">
          <span>👨‍🎓 I&apos;m a fresh graduate | </span>
          <span className="italic font-semibold">
            <Typewriter
              words={['Frontend Dev', 'Software Engineer', 'Basketball Player']}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>
        <p className="md:text-lg text-md font-light">
          Interested in learning new technologies and a dedicated basketball
          fan. Take a peek at my{' '}
          <span className="italic font-semibold text-blue-400 underline cursor-pointer">
            resume!
          </span>
        </p>
      </div>
      {/* <Avatar className="md:w-96 md:h-96 w-52 h-52 border-4 dark:border-white border-blue-400 shadow-lg">
          <AvatarImage src="/profile.svg" />
        </Avatar> */}
    </main>
  );
};
export default HomePage;
