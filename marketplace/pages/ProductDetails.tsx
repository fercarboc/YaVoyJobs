
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { marketplaceApi } from '../services/marketplace.api';
import { Product } from '../types/marketplace.types';
import { useCart } from '../hooks/useCart';
import { ShoppingCart, Truck, Store, Minus, Plus, ShieldCheck, ChevronRight } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    marketplaceApi.getProductById(id).then(({ data, error }) => {
      if (error) {
        console.error("Error fetching product detail", error);
      }
      if (data) setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <div className="max-w-7xl mx-auto p-12 text-center animate-pulse text-gray-400">Cargando producto...</div>;
  if (!product) return <div className="max-w-7xl mx-auto p-12 text-center">Producto no encontrado.</div>;

  const discount = product.offer_price ? Math.round(((product.price - product.offer_price) / product.price) * 100) : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleBuyNow = () => {
    addItem(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <nav className="mb-8 flex items-center text-sm text-gray-500">
        <Link to="/marketplace" className="hover:text-blue-600 transition-colors">Inicio</Link> 
        <ChevronRight className="w-4 h-4 mx-1" />
        <Link to="/marketplace/search" className="hover:text-blue-600 transition-colors">{product.category}</Link> 
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-gray-900 font-medium truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Galería de Imágenes */}
        <div className="space-y-4">
          <div className="aspect-square rounded-2xl overflow-hidden border bg-white shadow-sm">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, i) => (
                <button key={i} className={`aspect-square rounded-lg border-2 overflow-hidden ${i === 0 ? 'border-blue-600' : 'border-transparent'}`}>
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Información del Producto */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-wider">{product.category}</span>
              {product.is_promoted && <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-[10px] font-bold rounded uppercase tracking-wider">Destacado</span>}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 leading-tight">{product.name}</h1>
            <div className="flex items-center text-yellow-400">
              {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-lg">★</span>)}
              <span className="text-gray-400 text-sm ml-2">(24 valoraciones)</span>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-4xl font-bold text-blue-600">{product.offer_price || product.price}€</span>
              {product.offer_price && (
                <>
                  <span className="text-lg text-gray-400 line-through">{product.price}€</span>
                  <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">-{discount}%</span>
                </>
              )}
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center bg-gray-50 border rounded-xl p-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:text-blue-600 transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-bold w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:text-blue-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-gray-500">{product.stock} unidades disponibles</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={handleAddToCart}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-blue-100 active:scale-95"
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Añadir
              </button>
              <button 
                onClick={handleBuyNow}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 rounded-xl transition-all active:scale-95"
              >
                Comprar ahora
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg">Descripción</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{product.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <div className="p-2 bg-gray-100 rounded-lg"><Truck className="w-5 h-5" /></div>
              <span>Envío gratis en compras superiores a 50€</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <div className="p-2 bg-gray-100 rounded-lg"><ShieldCheck className="w-5 h-5" /></div>
              <span>Garantía oficial YaVoy</span>
            </div>
          </div>

          {/* Card del Proveedor */}
          <div className="p-4 border rounded-2xl flex items-center justify-between bg-white hover:border-blue-200 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Vendido por</p>
                <p className="font-bold text-gray-900">{product.vendor?.company.brand_name || 'Tech Store SL'}</p>
              </div>
            </div>
            <Link to="/marketplace/search" className="text-blue-600 text-sm font-bold hover:underline">Visitar tienda</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
