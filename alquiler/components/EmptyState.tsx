
import React from 'react';

interface Props {
  onClear: () => void;
}

const EmptyState: React.FC<Props> = ({ onClear }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
      <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">No hay resultados</h3>
      <p className="text-gray-500 mb-6 max-w-xs mx-auto">Prueba a cambiar los filtros o el área de búsqueda para encontrar lo que buscas.</p>
      <button 
        onClick={onClear}
        className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-gray-800 transition shadow-sm"
      >
        Quitar filtros
      </button>
    </div>
  );
};

export default EmptyState;
