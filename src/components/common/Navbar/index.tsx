'use client';
import { usePathname } from 'next/navigation';
import { FC, useMemo } from 'react';
import Link from 'next/link';

import { Menu } from '@/constants/menu';
import { cn } from '@/lib/utils';
import { ModeToggle } from '../../display/ModeToggle';
import { Separator } from '@/components/ui/separator';
import MenuSide from '../MenuSide';
import Navigation from '@/components/display/Navigation';

const Navbar: FC = () => {
  const path = usePathname();

  return (
    <header className="h-20 flex items-center fixed top-0 left-0 right-0 z-50 px-4 lg:mx-96 md:mx-40 sm:mx-24">
      <Navigation tabs={Menu} defaultPath="/" className="mb-8" />
    </header>
  );
};

export default Navbar;
