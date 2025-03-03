import { ModeToggle } from '@/components/display/ModeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Typewriter } from 'nextjs-simple-typewriter';

const HomePage = () => {
  return (
    <main className="container h-screen flex md:flex-row flex-col-reverse md:items-center md:gap-0 gap-8">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold md:text-5xl text-4xl drop-shadow-lg">
          Hello i&apos;m Putra👋
        </h1>
        <div className="md:text-lg text-md font-light">
          <span>👨‍🎓 Fresh graduate | </span>
          <span className="italic font-semibold">
            <Typewriter
              words={['Frontend Dev', 'Software Engineer']}
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
          Interested in learning new technologies and love teaching. Take a peek
          at my{' '}
          <Link
            href="https://docs.google.com/document/d/1i2fMFkOsJ73j9fKfmkRWj0npFdLgD0wQobqZR9iL7Gg/edit"
            className="italic font-semibold underline cursor-pointer"
            target="_blank"
          >
            resume!
          </Link>
        </p>
        <div className="flex gap-2 items-center">
          <Button
            variant="default"
            className="w-24 rounded-full cursor-pointer"
          >
            Explore
          </Button>
          <ModeToggle />
        </div>
      </div>
    </main>
  );
};
export default HomePage;
