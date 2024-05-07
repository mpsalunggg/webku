'use client';
import { ModeToggle } from '@/components/display/ModeToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from '@/constants/menu';
import { useSidebar } from '@/context/sidebarContext';
import Link from 'next/link';

const MenuSide = () => {
  const { toggleClose, isOpen } = useSidebar();
  return (
    <Sheet open={isOpen} onOpenChange={toggleClose} modal={true}>
      <SheetTrigger asChild></SheetTrigger>
      <SheetContent side="top" className="w-full">
        <div className="flex flex-col items-center lg:gap-8 gap-2 italic">
          {Menu.map(item => (
            <Link
              key={item.id}
              href={item.path}
              onClick={toggleClose}
              className={
                'hover:text-blue-400 cursor-pointer hover:border-b hover:border-blue-400 duration-100'
              }
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MenuSide;
