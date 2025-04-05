import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher';

import styles from './Header.module.css';

export const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.header}>
      <h2>header</h2>
      <nav>
        <NavLink to={'/'}>{t('header.links.home')}</NavLink>
        <NavLink to={'/catalog'}>{t('header.links.catalog')}</NavLink>
        <NavLink to={'/users'}>{t('header.links.users')}</NavLink>
        <NavLink to={'/category'}>{t('header.links.category')}</NavLink>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};
