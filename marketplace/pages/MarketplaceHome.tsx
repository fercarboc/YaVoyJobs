
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { marketplaceApi } from '../services/marketplace.api';
import { Product } from '../types/marketplace.types';
import ProductCard from '../components/ProductCard';
import { Search, Zap } from 'lucide-react';

const MarketplaceHome: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    marketplaceApi.getProducts({ promoted: true }).then(({ data }) => {
      setProducts(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Search */}
      <div className="bg-blue-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold text-white">Encuentra lo que necesitas hoy</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar productos, marcas o tiendas..."
              className="w-full py-4 pl-12 pr-4 rounded-2xl shadow-xl outline-none focus:ring-4 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Promoted Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Zap className="w-6 h-6 text-yellow-500 mr-2 fill-yellow-500" /> Destacados YaVoy
            </h2>
            <button className="text-blue-600 font-semibold hover:underline">Ver todos</button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading ? (
              [1,2,3,4].map(i => <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-2xl" />)
            ) : (
              products.map(p => <ProductCard key={p.id} product={p} />)
            )}
          </div>
        </section>

        {/* Categories grid */}
        <section className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-8">Comprar por categoría</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {['Electrónica', 'Hogar', 'Deporte', 'Moda', 'Salud', 'Mascotas'].map(cat => (
              <div key={cat} className="flex flex-col items-center p-4 border rounded-2xl hover:bg-blue-50 cursor-pointer transition-colors group">
                <div className="w-12 h-12 bg-gray-100 rounded-full mb-3 group-hover:bg-blue-100" />
                <span className="text-sm font-medium">{cat}</span>
              </div>
            ))}
          </div>
        </section>
        <div className="text-center">
          <Link
            to="/marketplace/info"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition"
          >
            Información sobre Marketplace / Vender en YaVoy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceHome;
