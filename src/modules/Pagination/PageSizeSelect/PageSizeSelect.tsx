import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

const options = [8, 12, 16]; // Варіанти кількості товарів

const PageSizeSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSize = Number(searchParams.get('size')) || options[0]; // Початкове значення з "size"
  const [selectedSize, setSelectedSize] = useState(initialSize);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(event.target.value);
    setSelectedSize(newValue);
    setSearchParams((prev) => {
      prev.set('size', String(newValue));
      prev.set('page', '1');
      return prev;
    });
  };

  return (
    <div>
      <label htmlFor="page-size-select">Кількість товарів на сторінці:</label>
      <select
        id="page-size-select"
        value={selectedSize}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PageSizeSelect;
