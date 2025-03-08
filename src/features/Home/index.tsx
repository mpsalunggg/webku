import { ModeToggle } from '@/components/display/ModeToggle';
import Sosmed from '@/components/display/Sosmed';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Typewriter } from 'nextjs-simple-typewriter';

const HomePage = () => {
  return (
    <main className="container h-screen flex items-center md:gap-0 gap-8 p-4">
      <div className="flex flex-col gap-3">
        <h1 className="font-bold md:text-5xl text-4xl drop-shadow-lg">
          Hello i&apos;m Putra👋
        </h1>
        <div className="md:text-lg text-md font-light">
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
        <p className="md:text-lg text-md font-light">
          Interested in learning new technologies and love teaching. Take a peek
          at my{' '}
          <Link
            href="https://docs.google.com/document/d/15emkkk3uECevTU2SMT8q4aD8fpdu9tF-E33ha0YTrgA/edit?tab=t.0"
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
          <Sosmed />
        </div>
      </div>
    </main>
  );
};
export default HomePage;
