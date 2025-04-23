import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('SearchQuery') || '');

  useEffect(() => {
    setQuery(searchParams.get('SearchQuery') || '');
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev.toString());
      newParams.set('SearchQuery', query);
      newParams.set('page', '1');
      return newParams;
    });
  };

  return (
    <div>
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter at least 3 characters..."
      />
      <button onClick={handleSearch} type="button">
        Search
      </button>
    </div>
  );
};

export default Search;
