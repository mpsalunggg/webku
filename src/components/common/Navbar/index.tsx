'use client';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Menu, PathMenu } from '@/constants/menu';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../ModeToggle';

const Navbar: FC = () => {
  const path = usePathname();
  return (
    <header className="h-24 flex items-center sticky top-0">
      <div className="container flex items-center justify-between">
        <div>
          <div className="flex items-end">
            <p className="font-extrabold text-4xl text-blue-400">Web</p>
            <p className="font-semibold text-md italic">Ku</p>
          </div>
        </div>
        <div className="flex items-center gap-8 italic">
          {Menu.map(item => (
            <p
              key={item.id}
              className={cn(
                'hover:text-blue-400 cursor-pointer hover:border-b hover:border-blue-400 duration-100'
              )}
            >
              {item.name}
            </p>
          ))}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
