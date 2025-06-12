import CheckboxList from '../CheckboxList/CheckboxList';

import styles from './CheckboxFilters.module.css';
import { checkboxFeatures, checkboxSugar } from './data';

import { useGetAllCategoriesQuery } from '@/redux/services/category';

const CheckboxFilters = () => {
  const { data: categories, isSuccess } = useGetAllCategoriesQuery(undefined);

  return (
    <>
      {isSuccess && (
        <div className={styles.wrapper}>
          <CheckboxList
            title="Product category"
            list={categories}
            searchName="CategoryId"
          />
          <CheckboxList title="Sugar content" list={checkboxSugar} />
          <CheckboxList title="Features" list={checkboxFeatures} />
        </div>
      )}
    </>
  );
};

export default CheckboxFilters;
