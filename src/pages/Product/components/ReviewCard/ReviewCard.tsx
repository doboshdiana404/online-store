import { FC } from 'react';

import { StarRating } from '@/ui/StarRating/StarRating';

import styles from './ReviewCard.module.css';
import { ReviewCardProps } from './types';

const ReviewCard: FC<ReviewCardProps> = ({
  data,
  description,
  image,
  name,
  rating,
}) => {
  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <StarRating rating={rating} />
        <p>{data}</p>
      </div>
      <div className={styles.main}>
        <img src={image} alt={`image for ${name}`} width={70} height={70} />
        <h3>{name}</h3>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ReviewCard;
