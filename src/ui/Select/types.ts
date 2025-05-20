import { type Props } from 'react-select';

export type Option = {
  value: string;
  label: string;
};

export interface SelectProps
  extends Omit<Props<Option, false>, 'value' | 'options' | 'onChange'> {
  value: Option['value'];
  options: Option['value'][];
  onChange: (value: Option['value']) => void;
  error?: boolean;
  helperText?: string;
  style?: 'secondary';
}
