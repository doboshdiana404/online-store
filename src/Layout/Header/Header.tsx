import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
export const Header = () => {
  return (
    <header className={styles.header}>
      <h2>header</h2>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/catalog'}>Catalog</NavLink>
        <NavLink to={'/users'}>Users</NavLink>
      </nav>
    </header>
  );
};
