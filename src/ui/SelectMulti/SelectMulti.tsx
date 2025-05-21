import clsx from 'clsx';
import { default as ReactSelect, DropdownIndicatorProps } from 'react-select';

import { ClearIndicator } from './components/ClearIndicator';
import { MultiValueRemove } from './components/MultiValueRemove';
import styles from './Select.module.css';
import { SelectProps, Option } from './types';

const DropdownIndicator = (props: DropdownIndicatorProps<Option>) => {
  const clName = clsx(styles.indicator, {
    [styles['indicator_opened']]: props.selectProps.menuIsOpen,
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

const SelectMulti = ({
  value,
  options,
  onChange,
  error,
  helperText,
  style,
  ...props
}: SelectProps) => {
  const containerClName = clsx(styles.container, {
    [styles['container-error']]: error,
    [styles.secondary]: style,
  });
  return (
    <div className={styles.wrapper}>
      <ReactSelect
        isSearchable={false}
        unstyled
        value={value.map((val) => ({ label: val, value: val }))}
        options={options}
        onChange={(newValue) =>
          newValue && onChange(newValue.map((option) => option.value))
        }
        controlShouldRenderValue
        blurInputOnSelect
        components={{
          DropdownIndicator,
          IndicatorSeparator: null,
          MultiValueRemove,
          ClearIndicator,
        }}
        classNames={{
          container: () => containerClName,
          control: () => styles.control,
          menu: () => styles.menu,
          indicatorSeparator: () => styles.separator,
          menuList: () => styles['menu-list'],
          option: (state) => optionClName(state.isFocused),
          multiValue: () => styles.multi,
          multiValueRemove: () => styles['multi-remove'],
          valueContainer: () => styles['value-container'],
        }}
        {...props}
      />
      {helperText && <p className={styles.message}>{helperText}</p>}
    </div>
  );
};

export default SelectMulti;
