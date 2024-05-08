'use client';
import { createContext, ReactNode, useState, useContext } from 'react';

export interface SidebarContextProps {
  isOpen?: boolean | undefined;
  toggleSide?: () => void;
  toggleOpen?: () => void;
  toggleClose?: () => void;
}

export const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState<boolean | undefined>(undefined);

  const toggleOpen = () => {
    setIsOpen(true);
  };

  const toggleClose = () => {
    setIsOpen(false);
  };

  const toggleSide = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContext.Provider
      value={{ isOpen, toggleOpen, toggleClose, toggleSide }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext)!;
