import { ReactNode } from 'react';

import { Variant } from './constants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant;
  text?: string;
  icon?: ReactNode;
  link?: string;
}
