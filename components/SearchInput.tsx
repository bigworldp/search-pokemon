import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaSearch } from 'react-icons/fa'; 

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
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg flex items-center">
      <label htmlFor="search" className="sr-only">Search Pokémon</label>
      <div className="flex w-full items-center border rounded-lg p-2 bg-gray-50">
        <input
          id="search"
          type="text"
          placeholder="Search Pokémon"
          value={query}
          onChange={handleChange}
          className="w-full p-2 text-lg rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search Pokémon"
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition duration-300"
          data-testid="search-button"
          aria-label="Search"
        >
          <FaSearch className="text-xl" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
