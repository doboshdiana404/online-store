import { FC, useId } from 'react';

import clsx from 'clsx';

import styles from './Input.module.css';
import { InputProps } from './types';

const Input: FC<InputProps> = ({ errorMessage, placeholder, ...props }) => {
  const id = useId();

  const inputClassName = clsx(styles.input, {
    [styles['input-error']]: errorMessage,
  });
  return (
    <div className={styles['input-box']}>
      <label htmlFor={id}>
        {placeholder}
        <input {...props} id={id} className={inputClassName} />
      </label>
      {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default Input;
