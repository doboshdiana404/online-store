import { ReactNode } from 'react';

export interface LinkProps {
  to: string;
  children: ReactNode;
  icon?: string;
  variant:
    | 'header'
    | 'primary'
    | 'footer'
    | 'icon'
    | 'crumbs_dark'
    | 'crumbs_light';
}
