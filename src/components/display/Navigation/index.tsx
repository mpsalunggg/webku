'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MenuType } from '@/types';

interface NavigationProps {
  tabs: MenuType[];
  defaultPath?: string;
  className?: string;
}

const Navigation = ({
  tabs,
  defaultPath = '/',
  className
}: NavigationProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const activeTab = React.useMemo(() => {
    const tab = tabs.find((tab: MenuType) => pathname === tab.path);
    return tab?.path || defaultPath;
  }, [pathname, tabs, defaultPath]);

  const handleTabChange = (value: string) => {
    router.push(value);
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className={cn('w-full', className)}
    >
      <TabsList className="w-full">
        {tabs.map(tab => (
          <TabsTrigger
            key={tab.id}
            value={tab.path}
            className="px-4 py-2 cursor-pointer"
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default Navigation;
