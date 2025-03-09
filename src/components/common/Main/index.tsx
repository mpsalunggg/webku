'use client';
import { SidebarProvider } from '@/context/sidebarContext';
import { cn } from '@/lib/utils';
import Navbar from '../Navbar';

const Main = ({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <SidebarProvider>
      <div
        className={cn(
          'transition-all min-h-screen px-4 flex flex-col lg:mx-96 md:mx-40 sm:mx-24 ',
          className
        )}
      >
        <Navbar />
        {children}
      </div>
    </SidebarProvider>
  );
};
export default Main;
