import { type FC } from 'react';

import clsx from 'clsx';

import styles from './BannerIcons.module.css';

export interface BannerIconProps {
  img: number;
  width: number;
  height: number;
  alt?: string;
  className?: string;
}
const BannerIcon: FC<BannerIconProps> = ({ className, img, ...props }) => {
  const iconCN = clsx(styles.icon, styles[`icon_${img}`], className);
  return (
    <img className={iconCN} src={`/banner/icons/icon_${img}.svg`} {...props} />
  );
};

export default BannerIcon;
