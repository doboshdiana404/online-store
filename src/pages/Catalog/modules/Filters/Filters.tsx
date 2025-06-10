import CheckboxList from '../CheckboxList/CheckboxList';
import SortSelect from '../SortSelect/SortSelect';

import styles from './Filters.module.css';

import { useGetAllCategoriesQuery } from '@/redux/services/category';

export const checkboxSugar = [
  { id: '1', name: 'With sugar' },
  { id: '2', name: 'Sugar-free' },
  { id: '3', name: 'Diabetic' },
];

export const checkboxFeatures = [
  { id: '1', name: 'Vegan' },
  { id: '2', name: 'Gluten-free' },
];

const Filters = () => {
  const { data: categories, isSuccess } = useGetAllCategoriesQuery(undefined);
  return (
    <aside className={styles.filter}>
      <SortSelect />
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
    </aside>
  );
};

export default Filters;
