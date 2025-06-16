import { FC } from 'react';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import styles from './Link.module.css';
import { LinkProps } from './types';

const Link: FC<LinkProps> = ({ children, variant, ...props }) => {
  const isExternalLink = props.to.startsWith('http');
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, styles[`link--${variant}`], {
      [`${styles[`link--${variant}_active`]}`]: isActive,
    });
  return (
    <>
      {isExternalLink ? (
        <a
          href={props.to}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <NavLink className={linkClass} {...props}>
          {children}
        </NavLink>
      )}
    </>
  );
};

export default Link;
