import ClearFilters from '../../components/ClearFilters/ClearFilters';
import CheckboxFilters from '../CheckboxFilters/CheckboxFilters';
import Sort from '../Sort/Sort';

import styles from './Filters.module.css';

const Filters = () => {
  return (
    <aside className={styles.filter}>
      <div className={styles.wrapper}>
        <Sort />
        <CheckboxFilters />
      </div>
      <ClearFilters />
    </aside>
  );
};

export default Filters;
