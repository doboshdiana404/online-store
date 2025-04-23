import { type FC } from 'react';

import clsx from 'clsx';
import { useSearchParams } from 'react-router-dom';

import styles from './CategoryItem.module.css';

import { Category } from '@/redux/services/category';

const CategoryItem: FC<Category> = ({ id, name }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryId = searchParams.get('CategoryId') || '';
  const isActive = categoryId === id;

  const handleSetCategory = () => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev.toString());
      params.set('CategoryId', id);
      params.set('page', '1');
      return params;
    });
  };
  const classNames = clsx(styles.category, { [styles.active]: isActive });
  return (
    <button onClick={handleSetCategory} className={classNames}>
      {name}
    </button>
  );
};

export default CategoryItem;
