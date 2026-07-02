import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mb-8">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a city..."
          className="w-full py-3 pl-12 pr-4 text-white bg-white/20 backdrop-blur-md rounded-xl border border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
          aria-label="Search city"
        />
        <FiSearch className="absolute left-4 text-white/80 text-xl" />
        <button
          type="submit"
          className="absolute right-2 px-4 py-1.5 bg-white/30 hover:bg-white/40 rounded-lg text-white font-medium transition-colors duration-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}
