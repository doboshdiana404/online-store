import { Outlet } from 'react-router-dom';

import styles from './Category.module.css';
import Navigate from './modules/Navigate/Navigate';

const Category = () => {
  return (
    <div className={styles.category}>
      <Navigate />
      <Outlet />
    </div>
  );
};

export default Category;
