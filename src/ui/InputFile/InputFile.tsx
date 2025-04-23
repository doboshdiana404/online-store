import { ChangeEvent, FC, useEffect, useId, useState } from 'react';

import clsx from 'clsx';

import styles from './InputFile.module.css';
import { InputFileProps } from './types';

const InputFile: FC<InputFileProps> = ({
  baseImages,
  onClean,
  onReset,
  onChange,
  isShowImage,
  placeholder,
  errorMessage,
  ...props
}) => {
  const [imagePreview, setImagePreview] = useState<string | undefined>(
    baseImages
  );
  const id = useId();

  const handleCancelImage = () => {
    onClean?.();
    onReset?.();
    setImagePreview(undefined);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      if (onChange) {
        onChange(event);
      }
    } else {
      handleCancelImage();
    }
  };
  useEffect(() => {
    if (isShowImage) {
      setImagePreview(undefined);
    }
  }, [isShowImage]);
  return (
    <div className={styles['input-box']}>
      {!imagePreview ? (
        <>
          <label htmlFor={id}>
            {placeholder}
            <input
              id={id}
              type="file"
              accept="image/webp"
              {...props}
              onChange={handleImageChange}
              className={clsx(styles.input, {
                [styles['input-error']]: errorMessage,
              })}
            />
          </label>
        </>
      ) : (
        <div className={styles['image-preview']}>
          <button
            type="button"
            onClick={handleCancelImage}
            className={styles.btn}
          ></button>
          <img src={imagePreview} alt="Preview" height={100} width={100} />
        </div>
      )}
      {!!errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default InputFile;
