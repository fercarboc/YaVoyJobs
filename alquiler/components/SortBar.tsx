
import React from 'react';
import { HousingSortOption } from '../types/housing.types';

interface Props {
  total: number;
  value: HousingSortOption;
  onChange: (sort: HousingSortOption) => void;
}

const SortBar: React.FC<Props> = ({ total, value, onChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-2 sm:space-y-0">
      <p className="text-sm text-gray-500">
        Mostrando <span className="font-bold text-gray-900">{total}</span> resultados
      </p>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500 whitespace-nowrap">Ordenar por:</span>
        <select 
          value={value} 
          onChange={(e) => onChange(e.target.value as HousingSortOption)}
          className="bg-transparent border-none text-sm font-bold text-gray-900 focus:ring-0 cursor-pointer"
        >
          <option value="recent">Más recientes</option>
          <option value="price_asc">Precio más bajo</option>
          <option value="price_desc">Precio más alto</option>
        </select>
      </div>
    </div>
  );
};

export default SortBar;
