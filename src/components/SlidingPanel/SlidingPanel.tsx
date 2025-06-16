import { FC, useEffect, useState } from 'react';

import clsx from 'clsx';

import styles from './SlidingPanel.module.css';
import { SlidingPanelProps } from './types';

const SlidingPanel: FC<SlidingPanelProps> = ({ control, options }) => {
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);
  const optionsCN = clsx(styles.options, {
    [styles.open]: isOpen,
    [styles.close]: !isOpen,
  });
  return (
    <div className={styles.wrapper}>
      {control(openMenu, isOpen)}
      {<div className={optionsCN}>{options(closeMenu, isOpen)}</div>}
      {isOpen && <div onClick={closeMenu} className={styles.overflow} />}
    </div>
  );
};

export default SlidingPanel;
