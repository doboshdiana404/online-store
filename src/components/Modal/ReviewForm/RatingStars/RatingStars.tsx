import { useState } from 'react';

import styles from './RatingStars.module.css';

interface RatingStarsProps {
  onRatingChange: (rating: number) => void;
}

export const RatingStars = ({ onRatingChange }: RatingStarsProps) => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
    onRatingChange(rating);
  };

  const handleStarHover = (rating: number) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starNumber = index + 1;
      const isActive =
        (hoveredRating !== null && starNumber <= hoveredRating) ||
        (hoveredRating === null &&
          selectedRating !== null &&
          starNumber <= selectedRating);

      return (
        <img
          key={index}
          src={
            isActive ? '/product/star_select.svg' : '/product/star_default.svg'
          }
          width={32}
          height={32}
          onClick={() => handleStarClick(starNumber)}
          onMouseEnter={() => handleStarHover(starNumber)}
          style={{ cursor: 'pointer' }}
        />
      );
    });
  };

  return (
    <div className={styles.stars} onMouseLeave={handleMouseLeave}>
      {renderStars()}
    </div>
  );
};
