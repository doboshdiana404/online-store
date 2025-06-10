import { ComponentPropsWithoutRef } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage?: string;
  type: 'checkbox' | 'radio';
  variant: 'primary' | 'secondary' | 'green';
}
