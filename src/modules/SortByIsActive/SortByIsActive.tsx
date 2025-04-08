import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

const sortOptions = [
  { sortDirection: '', label: 'No Sorting' },
  { sortDirection: 'true', label: 'Active' },
  { sortDirection: 'false', label: 'Inactive' },
];

const SortByIsActive = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialIsActive = searchParams.get('IsActive') || '';

  const [selectedOption, setSelectedOption] = useState(
    sortOptions.find((option) => option.sortDirection === initialIsActive) ||
      sortOptions[0]
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const newOption = sortOptions.find(
      (option) => option.sortDirection === selectedValue
    );

    if (newOption) {
      setSelectedOption(newOption);
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev.toString());
        if (newOption.sortDirection) {
          params.set('IsActive', newOption.sortDirection);
        } else {
          params.delete('IsActive');
        }
        params.set('page', '1');
        return params;
      });
    }
  };

  return (
    <div>
      <label htmlFor="is-active-select">Filter By Status:</label>
      <select
        id="is-active-select"
        value={selectedOption.sortDirection}
        onChange={handleChange}
      >
        {sortOptions.map((option) => (
          <option key={option.sortDirection} value={option.sortDirection}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortByIsActive;
