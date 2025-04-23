import { useState } from 'react';

import { useSearchParams } from 'react-router-dom';

const sortOptions = [
  { sortBy: '', sortDirection: '', label: 'No Sorting' },
  { sortBy: 'Price', sortDirection: 'Asc', label: 'Price Ascending' },
  { sortBy: 'Price', sortDirection: 'Desc', label: 'Price Descending' },
  { sortBy: 'Rating', sortDirection: 'Asc', label: 'Rating Ascending' },
  { sortBy: 'Rating', sortDirection: 'Desc', label: 'Rating Descending' },
];

const SortSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialSortBy = searchParams.get('SortBy') || '';
  const initialSortDirection = searchParams.get('SortDirection') || '';

  const [selectedOption, setSelectedOption] = useState(
    sortOptions.find(
      (option) =>
        option.sortBy === initialSortBy &&
        option.sortDirection === initialSortDirection
    ) || sortOptions[0]
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const [sortBy, sortDirection] = selectedValue.split('&');
    const newOption = sortOptions.find(
      (option) =>
        option.sortBy === sortBy && option.sortDirection === sortDirection
    );

    if (newOption) {
      setSelectedOption(newOption);
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev.toString());
        if (newOption.sortBy) {
          params.set('SortBy', newOption.sortBy);
          params.set('SortDirection', newOption.sortDirection);
        } else {
          params.delete('SortBy');
          params.delete('SortDirection');
        }
        params.set('page', '1');
        return params;
      });
    }
  };

  return (
    <div>
      <label htmlFor="sort-select">Sort By:</label>
      <select
        id="sort-select"
        value={`${selectedOption.sortBy}&${selectedOption.sortDirection}`}
        onChange={handleChange}
      >
        {sortOptions.map((option) => (
          <option
            key={`${option.sortBy}&${option.sortDirection}`}
            value={`${option.sortBy}&${option.sortDirection}`}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;
