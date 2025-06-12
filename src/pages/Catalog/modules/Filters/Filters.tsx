import CheckboxFilters from '../CheckboxFilters/CheckboxFilters';
import Sort from '../Sort/Sort';

import styles from './Filters.module.css';

const Filters = () => {
  return (
    <aside className={styles.filter}>
      <Sort />
      <CheckboxFilters />
    </aside>
  );
};

export default Filters;
