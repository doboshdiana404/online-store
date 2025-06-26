import { FC } from 'react';

import s from './VolumeButton.module.css';

type VolumeButtonProps = {
  type: 'increase' | 'decrease';
  onClick: () => void;
};

const VolumeButton: FC<VolumeButtonProps> = ({ type, onClick }) => (
  <button onClick={onClick} className={s.btn}>
    <svg className={s.icon}>
      <use
        href={`/sprite.svg#icon-${type === 'increase' ? 'plus' : 'minus'}`}
      />
    </svg>
  </button>
);

export default VolumeButton;
