import { FiClock, FiX } from 'react-icons/fi';

export default function RecentSearches({ history, onSelect, onRemove, onClear }) {
  if (!history || history.length === 0) return null;

  return (
    <div className="max-w-md mx-auto mt-4 text-white">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-medium flex items-center gap-1">
          <FiClock /> Recent Searches
        </h4>
        <button
          onClick={onClear}
          className="text-xs underline opacity-80 hover:opacity-100"
        >
          Clear all
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {history.map((city) => (
          <div
            key={city}
            className="flex items-center bg-white/20 rounded-full pl-3 pr-1 py-1 text-sm"
          >
            <button
              onClick={() => onSelect(city)}
              className="hover:underline mr-1"
            >
              {city}
            </button>
            <button
              onClick={() => onRemove(city)}
              className="p-1 hover:bg-white/30 rounded-full"
              aria-label={`Remove ${city}`}
            >
              <FiX size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}