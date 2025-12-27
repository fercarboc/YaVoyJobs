
import React, { useState, useEffect } from 'react';
// Fix: Import DISTRICTS from mock service and HousingFilters from types
import { DISTRICTS } from '../services/housing.mock';
import { HousingFilters as FiltersType } from '../types/housing.types';

interface Props {
  onApply: (filters: any) => void;
  onClear: () => void;
}

const HousingFilters: React.FC<Props> = ({ onApply, onClear }) => {
  const [filters, setFilters] = useState({
    district: '',
    neighborhood: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    stay: ''
  });

  const availableNeighborhoods = filters.district 
    ? (DISTRICTS as any)[filters.district] || [] 
    : [];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value,
      // Reset neighborhood if district changes
      ...(name === 'district' ? { neighborhood: '' } : {})
    }));
  };

  const handleClear = () => {
    const cleared = { district: '', neighborhood: '', type: '', minPrice: '', maxPrice: '', stay: '' };
    setFilters(cleared);
    onClear();
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 items-end">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Distrito</label>
          <select 
            name="district" 
            value={filters.district} 
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Todos</option>
            {Object.keys(DISTRICTS).map(d => <option key={d} value={d}>{d}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Barrio</label>
          <select 
            name="neighborhood" 
            value={filters.neighborhood} 
            onChange={handleChange}
            disabled={!filters.district}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <option value="">Todos</option>
            {availableNeighborhoods.map((n: string) => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Tipo</label>
          <select 
            name="type" 
            value={filters.type} 
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Cualquiera</option>
            <option value="Habitación">Habitación</option>
            <option value="Piso">Piso completo</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Min €</label>
            <input 
              type="number" 
              name="minPrice" 
              value={filters.minPrice} 
              onChange={handleChange}
              placeholder="0"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Max €</label>
            <input 
              type="number" 
              name="maxPrice" 
              value={filters.maxPrice} 
              onChange={handleChange}
              placeholder="2000"
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase mb-1.5">Estancia</label>
          <select 
            name="stay" 
            value={filters.stay} 
            onChange={handleChange}
            className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Cualquiera</option>
            <option value="corta">Corta estancia</option>
            <option value="mensual">Mensual</option>
          </select>
        </div>

        <div className="flex space-x-2">
          <button 
            onClick={() => onApply(filters)}
            className="flex-1 bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            Aplicar
          </button>
          <button 
            onClick={handleClear}
            className="px-3 py-2 bg-gray-100 text-gray-600 font-bold rounded-lg hover:bg-gray-200 transition"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default HousingFilters;
