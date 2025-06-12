import React from 'react';

import s from './CustomRadio.module.css';

type CustomRadioProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
}) => {
  return (
    <label className={s.customRadio}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className={s.icon}>
        {checked ? (
          <img src="/burger/check.svg" width={18} height={17} />
        ) : (
          <img src="/burger/Ellipse.svg" width={19} height={18} />
        )}
      </span>
      <span>{label}</span>
    </label>
  );
};

export default CustomRadio;
