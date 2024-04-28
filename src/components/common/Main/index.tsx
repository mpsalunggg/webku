import { cn } from '@/lib/utils';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Main = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'transition-all min-h-screen flex flex-col lg:mx-80 md:mx-40 sm:mx-24 ',
        className
      )}
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Main;
