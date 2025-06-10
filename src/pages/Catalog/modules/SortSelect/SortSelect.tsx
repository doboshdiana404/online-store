import { useMemo } from 'react';

import { useSearchParams } from 'react-router-dom';

import Select from '@/ui/Select/Select';

import { SORT_OPTIONS } from './data';

const SortSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedOption = useMemo(() => {
    const sortBy = searchParams.get('SortBy');
    const sortDirection = searchParams.get('SortDirection');
    return (
      SORT_OPTIONS.find(
        (option) =>
          option.sortBy === sortBy && option.sortDirection === sortDirection
      ) || SORT_OPTIONS[0]
    );
  }, [searchParams]);

  const handleChange = (label: string) => {
    const option = SORT_OPTIONS.find((opt) => opt.label === label);
    if (!option) return;

    const params = new URLSearchParams(searchParams.toString());
    if (option.sortBy) {
      params.set('SortBy', option.sortBy);
      params.set('SortDirection', option.sortDirection);
    } else {
      params.delete('SortBy');
      params.delete('SortDirection');
    }
    params.set('page', '1');
    setSearchParams(params);
  };

  return (
    <Select
      value={selectedOption.label}
      onChange={handleChange}
      options={SORT_OPTIONS.map((opt) => opt.label)}
      placeholder="Sort by ..."
      variant="sort"
    />
  );
};

export default SortSelect;
