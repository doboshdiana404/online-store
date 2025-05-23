import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import Link from '@/ui/Link/Link';

import { HEADER_LINKS } from './data';
import styles from './Header.module.css';
import HeaderActions from './HeaderActions/HeaderActions';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <NavLink className={styles.logo} to="/">
            Chocoza Boutique
          </NavLink>
          <nav>
            {HEADER_LINKS.map(({ id, text, to }) => (
              <Link key={id} variant="header" to={to}>
                {t(`header.links.${text}`)}
              </Link>
            ))}
          </nav>
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};
