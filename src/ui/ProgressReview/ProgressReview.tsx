import { FC } from 'react';

import styles from './ProgressReview.module.css';

type ProgressReviewProps = {
  rating: number;
  countReviews: number;
};

const ProgressReview: FC<ProgressReviewProps> = ({ rating, countReviews }) => {
  return (
    <div className={styles.progressReview}>
      <div className={styles.rating}>
        <span>{rating}</span>
        <img src="/product/star_select.svg" width={20} height={20} />
      </div>
      <progress value={rating} max={5} />
      <span>{countReviews}</span>
    </div>
  );
};

export default ProgressReview;
