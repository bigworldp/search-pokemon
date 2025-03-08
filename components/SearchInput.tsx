// import { useRouter } from "next/router";
// import { useState } from "react";

// export default function SearchInput() {
//   const router = useRouter();
//   const [search, setSearch] = useState(router.query.name || "");

//   const handleSearch = (event: React.FormEvent) => {
//     event.preventDefault();
//     if (!search) return;

//     // Update URL query param (without page reload)
//     router.push({
//       pathname: "/",
//       query: { name: search },
//     });
//   };

//   return (
//     <form onSubmit={handleSearch} className="flex gap-2 p-4">
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         placeholder="Search Pokémon..."
//         className="border rounded px-4 py-2 w-full"
//       />
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//         Search
//       </button>
//     </form>
//   );
// }

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
