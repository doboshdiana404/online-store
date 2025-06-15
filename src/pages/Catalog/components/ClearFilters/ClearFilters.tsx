import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

const ClearFilters = () => {
  const [, setSearchParams] = useSearchParams();

  const handleClearFilters = useCallback(() => {
    setSearchParams(new URLSearchParams());
    //   setSearchParams((prev) => {
    //     const params = new URLSearchParams(prev.toString());
    //     params.delete('page');
    //     params.delete('CategoryId');
    //     params.delete('SortDirection');
    //     params.delete('SortBy');
    //     return params;
    //   });
  }, [setSearchParams]);
  return (
    <Button
      variant={Variant.ClearFilter}
      onClick={handleClearFilters}
      text="Clear filters"
    />
  );
};

export default ClearFilters;
