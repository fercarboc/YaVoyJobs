import React, { useEffect, useState } from 'react';
import { listProductsWithMyPrice } from '../services/marketplace/productsService';
import { Product } from '../types/marketplace';

const MarketplaceHome: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await listProductsWithMyPrice({});
      setProducts(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <ul>
        {products.map(p => (
          <li key={p.id} className="border-b py-3 flex justify-between items-center">
            <div>
              <strong>{p.name}</strong> <span className="text-sm text-gray-500">({p.category_id})</span>
              <div className="text-xs text-gray-600">{p.description}</div>
            </div>
            <div className="text-lg font-semibold text-emerald-700">
              {p.prices && p.prices.length > 0 ? `${p.prices[0].price} €` : 'Sin precio'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketplaceHome;
