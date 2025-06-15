import { FC } from 'react';

import ClearFilters from '../../components/ClearFilters/ClearFilters';
import CheckboxFilters from '../CheckboxFilters/CheckboxFilters';

import styles from './MobileFilters.module.css';
import { MobileFiltersProps } from './types';

const MobileFilters: FC<MobileFiltersProps> = ({ onClose }) => {
  return (
    <div className={styles['mobile-filters']}>
      <div className={styles.scrolling}>
        <CheckboxFilters />
      </div>
      <ClearFilters />
      <button onClick={onClose} type="button" className={styles.close}>
        Close
      </button>
    </div>
  );
};

export default MobileFilters;
