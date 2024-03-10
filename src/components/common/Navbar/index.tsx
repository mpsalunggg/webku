'use client';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Menu } from '@/constants/menu';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../ModeToggle';
import Link from 'next/link';
import { SquareMenu } from 'lucide-react';

const Navbar: FC = () => {
  return (
    <header className="h-24 flex items-center sticky top-0">
      <div className="container flex items-center justify-between">
        <div>
          <div className="flex items-end">
            <p className="font-extrabold md:text-4xl text-3xl text-blue-400">
              Web
            </p>
            <p className="font-semibold text-md italic">Ku</p>
          </div>
        </div>
        <SquareMenu className="md:hidden" />
        <div className="md:flex items-center gap-8 italic hidden">
          {Menu.map(item => (
            <Link
              key={item.id}
              href={item.path}
              className={cn(
                'hover:text-blue-400 cursor-pointer hover:border-b hover:border-blue-400 duration-100'
              )}
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};
export default Navbar;
