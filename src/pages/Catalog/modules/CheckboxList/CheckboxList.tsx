import { FC } from 'react';

import { useSearchParams } from 'react-router-dom';

import Checkbox from '@/ui/Checkbox/Checkbox';

import styles from './CheckboxList.module.css';
import { CheckboxListProps } from './types';

const CheckboxList: FC<CheckboxListProps> = ({ list, title, searchName }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get(searchName ?? '') || '';

  const handleChangeSearchParams = (id: string) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());
      params.set(searchName ?? '', id);
      params.set('page', '1');
      return params;
    });
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.list}>
        {list &&
          list.map(({ id, name }) => (
            <Checkbox
              key={id}
              defaultChecked={id === activeId}
              variant="primary"
              type="radio"
              name={title}
              onChange={() => handleChangeSearchParams(id)}
            >
              {name}
            </Checkbox>
          ))}
      </div>
    </div>
  );
};

export default CheckboxList;
