import { useRef } from 'react';

import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const defaultValue = searchParams.get('SearchQuery') || '';

  const handleSearch = () => {
    const value = inputRef.current?.value || '';
    setSearchParams((prev) => {
      prev.set('SearchQuery', value);
      prev.set('page', '1');
      return prev;
    });
  };

  return (
    <div>
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input"
        type="text"
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder="Enter at least 3 characters..."
      />
      <button onClick={handleSearch} type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
