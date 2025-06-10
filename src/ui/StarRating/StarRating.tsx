import { FC } from 'react';

import styles from './StarRating.module.css';
type Props = {
  rating: number;
};

export const StarRating: FC<Props> = ({ rating }) => {
  const rounded = Math.round(rating);

  return (
    <div className={styles.starts}>
      {Array.from({ length: 5 }, (_, i) =>
        i < rounded ? (
          <img src="/product/star_select.svg" key={i} width={20} height={20} />
        ) : (
          <img src="/product/star_default.svg" key={i} width={20} height={20} />
        )
      )}
    </div>
  );
};
