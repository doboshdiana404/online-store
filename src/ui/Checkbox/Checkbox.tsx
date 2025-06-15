import { FC, useId } from 'react';

import clsx from 'clsx';

import styles from './Checkbox.module.css';
import { InputProps } from './types';

const Checkbox: FC<InputProps> = ({
  label,
  errorMessage,
  variant,
  type,
  children,
  ...rest
}) => {
  const id = useId();
  const checkboxClassNames = clsx(styles['checkbox-container'], {
    [styles[variant]]: variant,
  });
  return (
    <div className={checkboxClassNames}>
      <input {...rest} id={id} type={type} className={styles.input} />
      <label htmlFor={id} className={styles.label}>
        {label}
        {children && children}
      </label>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default Checkbox;
