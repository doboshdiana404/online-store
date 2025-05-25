import { FC } from 'react';

import clsx from 'clsx';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';
import Link from '@/ui/Link/Link';

import { MENU_LIST } from './data';
import styles from './Menu.module.css';

import { FOOTER_ICONS } from '@/Layout/Footer/data';

export interface MenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const Menu: FC<MenuProps> = ({ closeMenu, isOpen }) => {
  const menuCN = clsx(styles.menu, {
    [styles.open]: isOpen,
    [styles.close]: !isOpen,
  });
  return (
    <div className={menuCN}>
      <Button
        className={styles.close}
        variant={Variant.Burger}
        onClick={closeMenu}
        icon={<img src="/burger/close.svg" width={33} height={33} />}
      />
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {MENU_LIST.map(({ id, text, to, icon }) => (
            <li key={id} className={styles.item}>
              <Link to={to} variant="footer">
                <img src={icon} width={19} height={19} />
                <p>{text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.icons}>
          {FOOTER_ICONS.map(({ icon, id, to }) => (
            <li key={id}>
              <Link variant="icon" to={to}>
                <svg className={styles.icon}>
                  <use href={`/sprite.svg#${icon}`} />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
