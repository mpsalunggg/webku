'use client';
import { SidebarProvider } from '@/context/sidebarContext';
import { cn } from '@/lib/utils';

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
          'transition-all min-h-screen flex flex-col lg:mx-96 md:mx-40 sm:mx-24 ',
          className
        )}
      >
        {children}
      </div>
    </SidebarProvider>
  );
};
export default Main;
