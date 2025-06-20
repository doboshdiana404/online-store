import { FC } from 'react';

import styles from './ProductDescription.module.css';
import { ProductDescriptionProps } from './types';

const ProductDescription: FC<ProductDescriptionProps> = ({
  title,
  descriptions,
  allergens,
  ingredients,
  weight,
}) => {
  return (
    <>
      <section className={styles.descriptions}>
        <h4>{title}</h4>
        {descriptions.map((text, index) => (
          <p key={index} className={styles.description}>
            {text}
          </p>
        ))}
      </section>
      <section className={styles.options}>
        <div className={styles.option}>
          <h4>Ingredients:</h4>
          <p>{ingredients}</p>
        </div>
        <div className={styles.option}>
          <h4>Allergens:</h4>
          <p>{allergens}</p>
        </div>
        <div className={styles.option}>
          <h4>Net Weight:</h4>
          <p>{weight}</p>
        </div>
      </section>
    </>
  );
};

export default ProductDescription;
