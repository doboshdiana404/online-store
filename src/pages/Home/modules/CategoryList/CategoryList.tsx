import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { CATEGORY_LIST } from '../../data';

import styles from './CategoryList.module.css';

const CategoryList = () => {
  return (
    <div className={styles.list}>
      {CATEGORY_LIST.map((category) => (
        <CategoryCard key={category.id} {...category} />
      ))}
    </div>
  );
};

export default CategoryList;
