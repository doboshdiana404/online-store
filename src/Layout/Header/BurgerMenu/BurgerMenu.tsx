import { useEffect, useState } from 'react';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

import Menu from '../Menu/Menu';

import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  return (
    <div className={styles.burger}>
      <Button
        variant={Variant.Burger}
        onClick={openMenu}
        icon={<img src="/burger/burger.svg" width={25} height={15} />}
      />
      <Menu isOpen={isOpen} closeMenu={closeMenu} />
      {isOpen && <div onClick={closeMenu} className={styles.overflow} />}
    </div>
  );
};

export default BurgerMenu;
