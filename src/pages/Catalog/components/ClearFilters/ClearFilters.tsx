import { useCallback } from 'react';

import { useSearchParams } from 'react-router-dom';

import { Button } from '@/ui/Button/Button';
import { Variant } from '@/ui/Button/constants';

const ClearFilters = () => {
  const [, setSearchParams] = useSearchParams();

  const handleClearFilters = useCallback(() => {
    setSearchParams(new URLSearchParams());
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
