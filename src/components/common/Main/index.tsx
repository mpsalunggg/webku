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
    <div className={cn('min-h-screen flex flex-col md:mx-96', className)}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Main;
