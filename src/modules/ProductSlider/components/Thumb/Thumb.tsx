import React, { FC } from 'react';

import clsx from 'clsx';

import Image from '@/components/Image/Image';

import styles from '../../ProductSlider.module.css';
type PropType = {
  selected: boolean;
  image: string;
  onClick: () => void;
};

export const Thumb: FC<PropType> = ({ image, onClick, selected }) => {
  const thumbCN = clsx(styles['embla-thumbs__slide'], {
    [styles['embla-thumbs__slide--selected']]: selected,
  });
  return (
    <div className={thumbCN}>
      <button
        onClick={onClick}
        type="button"
        className={styles['embla-thumbs__slide__number']}
      >
        <Image id={image} alt="image for product" />
      </button>
    </div>
  );
};
