import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';
import SlidingPanel from '@/components/SlidingPanel/SlidingPanel';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';
import Link from '@/ui/Link/Link';

import { HEADER_LINKS } from './data';
import styles from './Header.module.css';
import HeaderActions from './HeaderActions/HeaderActions';
import Menu from './Menu/Menu';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <SlidingPanel
            control={(openMenu) => (
              <Button
                variant={Variant.Burger}
                onClick={openMenu}
                icon={<img src="/burger/burger.svg" width={25} height={15} />}
              />
            )}
            options={(closeMenu, isOpen) => (
              <Menu isOpen={isOpen} closeMenu={closeMenu} />
            )}
          />
          <NavLink className={styles.logo} to="/">
            Chocoza Boutique
          </NavLink>
          <nav className={styles.nav}>
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
