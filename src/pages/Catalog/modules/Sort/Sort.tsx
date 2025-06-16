import { useSearchParams } from 'react-router-dom';

import SlidingPanel from '@/components/SlidingPanel/SlidingPanel';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

import MobileFilters from '../MobileFilters/MobileFilters';
import SortSelect from '../SortSelect/SortSelect';

import styles from './Sort.module.css';

const Sort = () => {
  const [searchParams] = useSearchParams();
  const isActive = !!searchParams.get('CategoryId') || '';
  return (
    <div className={styles.sort}>
      <SlidingPanel
        control={(openMenu) => (
          <Button
            onClick={openMenu}
            variant={isActive ? Variant.FilterActive : Variant.Filter}
            icon={
              <div className={styles.btn}>
                <svg className={styles.icon}>
                  <use href="/sprite.svg#filter" />
                </svg>
                <p>Filter</p>
              </div>
            }
          />
        )}
        options={(closeMenu) => <MobileFilters onClose={closeMenu} />}
      />
      <SortSelect />
    </div>
  );
};

export default Sort;
