import { useState } from 'react';

import styles from './SelectProduct.module.css';

const SelectProduct = () => {
  const [select, setSelect] = useState(false);

  const handleToggleSelect = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setSelect(!select);
  };
  return (
    <button className={styles.select} onClick={handleToggleSelect}>
      {select ? (
        <img src="/product/heart_select.svg" width={17} height={15} />
      ) : (
        <img src="/product/heart_default.svg" width={17} height={15} />
      )}
    </button>
  );
};

export default SelectProduct;
