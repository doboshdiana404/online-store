import { ReactNode } from 'react';

export interface SlidingPanelProps {
  options: (closeMenu: () => void, isOpen: boolean) => ReactNode;
  control: (openMenu: () => void, isOpen: boolean) => ReactNode;
}
