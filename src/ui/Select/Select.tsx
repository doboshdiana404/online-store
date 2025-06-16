import clsx from 'clsx';
import { default as ReactSelect, DropdownIndicatorProps } from 'react-select';

import styles from './Select.module.css';
import { type SelectProps, Option } from './types';

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  const clName = clsx(styles.indicator, {
    [styles['opened']]: props.selectProps.menuIsOpen,
  });
  return (
    <div className={clName}>
      <img src="/controls.svg" alt="" width={24} height={24} />
    </div>
  );
};

const optionClName = (focused: boolean) => {
  return clsx(styles.option, {
    [styles['option_focused']]: focused,
  });
};

const Select = ({
  value,
  options,
  onChange,
  error,
  helperText,
  variant,
  ...props
}: SelectProps) => {
  const selectValue = value ? { value, label: value } : undefined;

  const selectOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  const containerClName = clsx(styles.container, {
    [styles['container-error']]: error,
    [styles[variant]]: variant,
  });
  return (
    <div className={styles.wrapper}>
      <ReactSelect
        isSearchable={false}
        unstyled
        value={selectValue}
        options={selectOptions}
        onChange={(newValue) => newValue && onChange(newValue.value)}
        controlShouldRenderValue
        blurInputOnSelect
        components={{ DropdownIndicator, IndicatorSeparator: null }}
        classNames={{
          container: () => containerClName,
          control: () => styles.control,
          menu: () => styles.menu,
          indicatorSeparator: () => styles.separator,
          menuList: () => styles['menu-list'],
          option: (state) => optionClName(state.isFocused),
        }}
        {...props}
      />
      {helperText && <p className={styles.message}>{helperText}</p>}
    </div>
  );
};

export default Select;
