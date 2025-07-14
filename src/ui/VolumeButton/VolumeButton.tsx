import { FC } from 'react';

import { VolumeButtonProps } from './types';
import styles from './VolumeButton.module.css';

const VolumeButton: FC<VolumeButtonProps> = ({ typeIcon, ...props }) => {
  return (
    <button {...props} className={styles.volume}>
      <svg className={styles.icon}>
        <use href={`/sprite.svg#${typeIcon}`} />
      </svg>
    </button>
  );
};

export default VolumeButton;
