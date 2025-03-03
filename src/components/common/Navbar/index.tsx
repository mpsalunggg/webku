'use client';
import { usePathname } from 'next/navigation';
import { FC, useMemo } from 'react';
import Link from 'next/link';

import { Menu } from '@/constants/menu';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../../display/ModeToggle';
import { Separator } from '@/components/ui/separator';
import MenuSide from '../MenuSide';

const Navbar: FC = () => {
  const path = usePathname();

  const renderedMenuItems = useMemo(() => {
    return Menu.map(item => (
      <Link
        key={item.id}
        href={item.path}
        prefetch={false}
        className={cn(
          'cursor-pointer hover:border-b duration-100',
          item.path === path ? 'border-b' : ''
        )}
      >
        {item.name}
      </Link>
    ));
  }, []);

  return (
    <header className="h-20 flex items-center sticky top-0 bg-background z-50">
      <div className="container flex flex-col">
        <div className="flex items-center justify-between my-4">
          <div className="flex items-end">
            <p className="font-extrabold md:text-3xl text-2xl">Web</p>
            <p className="font-semibold text-md italic">Ku</p>
          </div>
          <div className="xl:hidden">
            <MenuSide />
          </div>
          <div className="xl:flex items-center lg:gap-8 gap-2 italic hidden">
            {renderedMenuItems}
            <ModeToggle />
          </div>
        </div>
        <Separator orientation="horizontal" />
      </div>
    </header>
  );
};

export default Navbar;
