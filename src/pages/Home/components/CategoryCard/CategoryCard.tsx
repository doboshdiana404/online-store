import { FC } from 'react';

import { Link } from 'react-router-dom';

import { Category } from '../../data';

import styles from './CategoryCard.module.css';

const CategoryCard: FC<Category> = ({ id, img, name }) => {
  return (
    <Link to={`catalog?CategoryId=${id}`} className={styles.card}>
      <div>
        <img
          src={img}
          alt={`image for ${name} category`}
          width={173}
          height={173}
        />
      </div>
      <h3>{name}</h3>
    </Link>
  );
};

export default CategoryCard;
