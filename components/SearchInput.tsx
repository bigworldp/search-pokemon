import React, { useState } from 'react';
import { useRouter } from 'next/router';

const SearchInput: React.FC = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push({
        pathname: '/',
        query: { name: query },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={query}
        onChange={handleChange}
        data-testid="search-input"
      />
      <button type="submit" data-testid="search-button">Search</button>
    </form>
  );
};

export default SearchInput;
