'use client';
import { createContext, ReactNode, useState, useContext } from 'react';

export interface SidebarContextProps {
  isOpen?: boolean;
  toggleOpen?: () => void;
  toggleClose?: () => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(true);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleOpen, toggleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext)!;
