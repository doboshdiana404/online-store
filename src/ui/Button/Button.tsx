import type { FC } from 'react';

import clsx from 'clsx';

import styles from './Button.module.css';
import { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  variant,
  text,
  disabled,
  onClick,
  icon,
  size,
  className,
  ...props
}) => {
  const buttonClassName = clsx(
    styles.button,
    className,
    styles[`button--${variant}`],
    styles[`button--${variant}--${size}`],
    {
      [styles['button--disabled']]: disabled,
    }
  );
  return (
    <button
      {...props}
      className={buttonClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && <>{icon}</>}
      {text && <>{text}</>}
    </button>
  );
};
