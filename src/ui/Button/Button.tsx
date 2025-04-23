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
  ...props
}) => {
  const buttonClassName = clsx(styles.button, styles[`button--${variant}`], {
    [styles['button--disabled']]: disabled,
  });
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
