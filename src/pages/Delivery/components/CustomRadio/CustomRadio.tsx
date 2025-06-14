import React from 'react';

import s from './CustomRadio.module.css';

type CustomRadioProps = {
  label: React.ReactNode;
  name: string;
  value?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkedIcon: string;
  type?: 'radio' | 'checkbox';
};

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  name,
  value,
  checked,
  onChange,
  checkedIcon,
  type = 'radio',
}) => {
  return (
    <label className={s.customRadio}>
      <input
        type={type}
        name={name}
        {...(type === 'radio' && value ? { value } : {})}
        checked={checked}
        onChange={onChange}
      />
      <span className={s.icon}>
        {checked ? (
          <img src={checkedIcon} width={18} height={17} alt="Checked" />
        ) : (
          <img
            src="/burger/Ellipse.svg"
            width={19}
            height={18}
            alt="Unchecked"
          />
        )}
      </span>
      <span>{label}</span>
    </label>
  );
};

export default CustomRadio;
