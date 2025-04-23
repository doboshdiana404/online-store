import { FC, useId } from 'react';

import clsx from 'clsx';

import styles from './TextArea.module.css';
import { TextAreaProps } from './types';

const TextArea: FC<TextAreaProps> = ({
  errorMessage,
  placeholder,
  ...props
}) => {
  const id = useId();

  const inputClassName = clsx(styles.input, {
    [styles['input-error']]: errorMessage,
  });
  return (
    <div className={styles['input-box']}>
      <label htmlFor={id}>
        {placeholder}
        <textarea {...props} id={id} className={inputClassName} />
      </label>
      {!!errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default TextArea;
