
import React, { useState, useEffect } from 'react';
import { marketplaceApi } from '../services/marketplace.api';
import { Product } from '../types/marketplace.types';
import ProductCard from '../components/ProductCard';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';

const MarketplaceSearch: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await marketplaceApi.getProducts({ search: searchTerm, category: selectedCategory });
      setProducts(response.data || []);
      setLoading(false);
    };
    fetchProducts();
  }, [searchTerm, selectedCategory]);

  const categories = ['Todas', 'Electrónica', 'Deportes', 'Hogar', 'Moda', 'Salud'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filtros */}
        <aside className="w-full md:w-64 space-y-8 flex-shrink-0">
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center">
              <Filter className="w-5 h-5 mr-2" /> Filtros
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === cat 
                          ? 'bg-blue-600 text-white' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <label className="block text-sm font-medium text-gray-700 mb-2">Rango de Precio</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="number" placeholder="Min" className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="number" placeholder="Max" className="w-full px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-grow">
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-2.5 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <SlidersHorizontal className="w-4 h-4" />
              <span>Ordenar por:</span>
              <button className="font-medium text-gray-900 flex items-center">
                Relevancia <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-gray-100 animate-pulse h-80 rounded-xl"></div>
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No encontramos productos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MarketplaceSearch;
