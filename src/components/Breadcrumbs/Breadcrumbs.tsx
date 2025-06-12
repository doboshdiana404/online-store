import { FC } from 'react';

import Link from '@/ui/Link/Link';

import styles from './Breadcrumbs.module.css';
import { BreadCrumbsProps } from './types';

const Breadcrumbs: FC<BreadCrumbsProps> = ({
  crumbs,
  isActiveLast = false,
  variant,
}) => {
  return (
    <nav className={styles.crumbs}>
      <Link to="/" variant="icon">
        <svg className={styles.icon}>
          <use href="/sprite.svg#crumbs" />
        </svg>
      </Link>
      <ul>
        <li>
          <Link to="/" variant={variant}>
            Main /
          </Link>
        </li>
        {crumbs &&
          crumbs.map(({ link, name }, i) =>
            i !== crumbs.length - 1 ? (
              <Link key={link} to={link} variant={variant}>
                {name}
              </Link>
            ) : isActiveLast ? (
              <Link key={link} to={link} variant={variant}>
                {name}
              </Link>
            ) : (
              <li key={link} className={styles[variant]}>
                {name}
              </li>
            )
          )}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
