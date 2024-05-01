'use client';
import { createContext, ReactNode, useState, useContext } from 'react';

export interface SidebarContextProps {
  isOpen?: boolean;
  toggleSidebar?: () => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext)!;
