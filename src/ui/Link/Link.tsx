import { FC, ReactNode } from 'react';

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import styles from './Link.module.css';

export interface LinkProps {
  to: string;
  children: ReactNode;
  icon?: string;
  variant: 'header' | 'primary' | 'footer' | 'icon';
}

const Link: FC<LinkProps> = ({ children, variant, ...props }) => {
  const isExternalLink = props.to.startsWith('http');
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    clsx(styles.link, styles[`link--${variant}`], {
      [`${styles[`link--${variant}_active`]}`]: isActive,
    });
  return (
    <>
      {isExternalLink ? (
        <a href={props.to} target="_blank" rel="noopener noreferrer">
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
