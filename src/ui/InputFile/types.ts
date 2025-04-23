import { InputProps } from '../Input/types';

export interface InputFileProps extends InputProps {
  onReset?: () => void;
  onClean?: () => void;
  baseImages?: string;
  isShowImage?: boolean;
}
