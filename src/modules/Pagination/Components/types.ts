import { type ReactNode } from 'react';

export interface PaginationButtonProps {
  onClick?: () => void;
  pageNumber?: string | number;
  disabled?: boolean;
  variant: 'arrow' | 'number' | 'active';
  arrow?: ReactNode;
}
