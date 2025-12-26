
import React, { useState, useMemo } from 'react';
// Fix: Add missing 'Search' icon to the imports from lucide-react
import { Filter, SlidersHorizontal, ChevronDown, Search } from 'lucide-react';
import { MOCK_PRODUCTS, NEIGHBORHOODS, CATEGORIES } from '../data/mockData';
import { Product, UserRole } from '../types';
import ProductCard from '../components/ProductCard';
import { useApp } from '../AppContext';

interface MarketplaceViewProps {
  onProductSelect: (product: Product) => void;
}

const MarketplaceView: React.FC<MarketplaceViewProps> = ({ onProductSelect }) => {
  const { userRole } = useApp();
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchNeighbor = selectedNeighborhood === 'all' || p.neighborhood === selectedNeighborhood;
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchNeighbor && matchCategory;
    });
  }, [selectedNeighborhood, selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      {/* Hero / Promo Section */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-8 mb-10 shadow-lg">
        <div className="max-w-xl relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4">Lo mejor de tu barrio, <br/>en la puerta de tu casa.</h1>
          <p className="text-indigo-100 mb-6 text-lg">Apoya al comercio local. Precios exclusivos para vecinos registrados y profesionales HORECA.</p>
          {userRole === UserRole.GUEST && (
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all transform hover:-translate-y-0.5">
              Registrarme ahora
            </button>
          )}
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden md:block">
           <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="currentColor">
              <path d="M0 0 L100 0 L100 100 Z" />
           </svg>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters - Sidebar Desktop */}
        <aside className="hidden lg:block w-64 space-y-8">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center">
              <Filter className="w-4 h-4 mr-2 text-indigo-600" />
              Barrios
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => setSelectedNeighborhood('all')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${selectedNeighborhood === 'all' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                Todos los barrios
              </button>
              {NEIGHBORHOODS.map(n => (
                <button 
                  key={n.id}
                  onClick={() => setSelectedNeighborhood(n.name)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${selectedNeighborhood === n.name ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {n.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4 flex items-center">
              <SlidersHorizontal className="w-4 h-4 mr-2 text-indigo-600" />
              Categorías
            </h3>
            <div className="space-y-2">
              <button 
                onClick={() => setSelectedCategory('all')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${selectedCategory === 'all' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                Todas las categorías
              </button>
              {CATEGORIES.map(c => (
                <button 
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${selectedCategory === c ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Grid */}
        <div className="flex-1">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              {filteredProducts.length} productos en {selectedNeighborhood === 'all' ? 'tu zona' : selectedNeighborhood}
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center space-x-2 text-sm font-semibold text-slate-600 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200">
                  <span>Ordenar por: <span className="text-indigo-600">{sortBy === 'featured' ? 'Destacados' : 'Precio'}</span></span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={onProductSelect} 
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
              <div className="mx-auto w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">No encontramos resultados</h3>
              <p className="text-slate-500">Prueba ajustando los filtros o cambiando de barrio.</p>
              <button 
                onClick={() => { setSelectedNeighborhood('all'); setSelectedCategory('all'); }}
                className="mt-6 text-indigo-600 font-bold hover:underline"
              >
                Limpiar todos los filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceView;
