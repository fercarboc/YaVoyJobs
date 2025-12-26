import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../components/marketplace/CartContext';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url?: string;
}

const mockProducts: Product[] = [
  { id: '1', name: 'Producto 1', description: 'Descripción breve del producto 1', price: 12.99, image_url: '/mock1.jpg' },
  { id: '2', name: 'Producto 2', description: 'Descripción breve del producto 2', price: 8.5, image_url: '/mock2.jpg' },
  { id: '3', name: 'Producto 3', description: 'Descripción breve del producto 3', price: 15.0, image_url: '/mock3.jpg' },
];

const Marketplace: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  const handleAdd = (product: Product) => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image_url: product.image_url,
    });
    // Abrir drawer global
    const evt = new CustomEvent('openMiniCart');
    window.dispatchEvent(evt);
  };

  useEffect(() => {
    const handler = () => setDrawerOpen(true);
    window.addEventListener('openMiniCart', handler);
    return () => window.removeEventListener('openMiniCart', handler);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Marketplace</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl shadow border p-4 flex flex-col">
            <img src={product.image_url} alt={product.name} className="h-40 w-full object-cover rounded mb-3" />
            <h2 className="font-semibold text-base text-gray-800 mb-1">{product.name}</h2>
            <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between mt-auto gap-2">
              <span className="text-blue-700 font-bold text-lg">{product.price.toFixed(2)}€</span>
              <button
                className="text-xs px-3 py-1 rounded bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition"
                onClick={() => handleAdd(product)}
              >Añadir</button>
              <Link to={`/marketplace/product/${product.id}`} className="text-xs px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 transition">Ver</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
