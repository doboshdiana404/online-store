import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

import Link from '@/ui/Link/Link';

import BurgerMenu from './BurgerMenu/BurgerMenu';
import { HEADER_LINKS } from './data';
import styles from './Header.module.css';
import HeaderActions from './HeaderActions/HeaderActions';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <BurgerMenu />
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
          <div className={styles.mobile}>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
