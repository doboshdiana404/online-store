import { type FC } from 'react';

import clsx from 'clsx';

import styles from './PaginationButton.module.css';
import { PaginationButtonProps } from './types';

const PaginationButton: FC<PaginationButtonProps> = ({
  pageNumber,
  variant,
  arrow,
  ...props
}) => {
  const buttonCN = clsx(styles.btn, {
    [styles.number]: variant === 'number' || variant === 'active',
    [styles.arrow]: variant === 'arrow',
    [styles.active]: variant === 'active',
  });
  return (
    <button type="button" className={buttonCN} {...props}>
      {pageNumber && pageNumber}
      {arrow && arrow}
    </button>
  );
};

export default PaginationButton;
