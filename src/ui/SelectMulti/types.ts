import { type Props } from 'react-select';

export type Option = {
  value: string;
  label: string;
};

export interface SelectProps<IsMulti extends boolean = true>
  extends Omit<Props<Option, IsMulti>, 'value' | 'options' | 'onChange'> {
  value: Option['value'][];
  options: Option[];
  onChange: (value: Option['value'][]) => void;
  error?: boolean;
  helperText?: string;
  style?: 'secondary';
}
