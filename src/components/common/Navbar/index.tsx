'use client';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SquareMenu } from 'lucide-react';

import { Menu } from '@/constants/menu';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../ModeToggle';
import { Separator } from '@/components/ui/separator';

const Navbar: FC = () => {
  const path = usePathname();
  return (
    <header className="h-20 flex items-center sticky">
      <div className="container flex flex-col">
        <div className="flex items-center justify-between my-4">
          <div>
            <div className="flex items-end">
              <p className="font-extrabold md:text-3xl text-2xl text-blue-400">
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
                  'hover:text-blue-400 cursor-pointer hover:border-b hover:border-blue-400 duration-100',
                  item.path === path
                    ? 'border-b border-blue-400 text-blue-400'
                    : ''
                )}
              >
                {item.name}
              </Link>
            ))}
            <ModeToggle />
          </div>
        </div>
        <Separator orientation="horizontal" />
      </div>
    </header>
  );
};
export default Navbar;
