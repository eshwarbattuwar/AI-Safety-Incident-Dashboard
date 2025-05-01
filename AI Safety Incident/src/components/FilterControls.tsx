import React from 'react';
import { FilterType, SortOrder } from '../types/incident';
import { ArrowUpNarrowWide, ArrowDownNarrowWide } from 'lucide-react';

interface FilterControlsProps {
  currentFilter: FilterType;
  setFilter: (filter: FilterType) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  currentFilter,
  setFilter,
  sortOrder,
  setSortOrder
}) => {
  const filters: FilterType[] = ['All', 'Low', 'Medium', 'High'];

  const getFilterButtonClass = (filter: FilterType): string => {
    const baseClasses = "px-3 py-1.5 rounded-md text-sm font-medium transition-colors";
    return filter === currentFilter
      ? `${baseClasses} bg-blue-600 text-white`
      : `${baseClasses} bg-gray-100 text-gray-700 hover:bg-gray-200`;
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-between mb-4">
      <div className="flex flex-wrap gap-2">
        <span className="text-sm font-medium text-gray-700 self-center">Filter by severity:</span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setFilter(filter)}
            className={getFilterButtonClass(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Sort by date:</span>
        <button
          onClick={() => setSortOrder('newest')}
          className={`p-2 rounded-md transition-colors ${
            sortOrder === 'newest'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          title="Newest First"
        >
          <ArrowDownNarrowWide size={16} />
        </button>
        <button
          onClick={() => setSortOrder('oldest')}
          className={`p-2 rounded-md transition-colors ${
            sortOrder === 'oldest'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          title="Oldest First"
        >
          <ArrowUpNarrowWide size={16} />
        </button>
      </div>
    </div>
  );
};

export default FilterControls;