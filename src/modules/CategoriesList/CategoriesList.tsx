import styles from './CategoriesList.module.css';
import CategoryItem from './Components/CategoryItem/CategoryItem';

import { useGetAllCategoriesQuery } from '@/redux/services/category';

const CategoriesList = () => {
  const {
    data: categories,
    isSuccess,
    isLoading,
    isFetching,
  } = useGetAllCategoriesQuery(undefined);

  return (
    <section className={styles['categories-list']}>
      <h3>All category</h3>
      {isSuccess && (
        <div className={styles.list}>
          {categories.map((category) => (
            <CategoryItem key={category.id} {...category} />
          ))}
        </div>
      )}
      {isLoading || (isFetching && <p>Loading...</p>)}
    </section>
  );
};

export default CategoriesList;
