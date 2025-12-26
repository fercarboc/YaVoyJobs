
import React, { useState } from 'react';
import { ChevronLeft, Star, ShoppingCart, Truck, Package, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { Product, UserRole } from '../types';
import { useApp } from '../AppContext';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
}

const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product, onBack }) => {
  const { userRole, addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [deliveryType, setDeliveryType] = useState<'shipping' | 'pickup'>(
    product.deliveryOptions.shipping ? 'shipping' : 'pickup'
  );
  const [activeImage, setActiveImage] = useState(0);

  const getPrice = () => {
    switch(userRole) {
      case UserRole.REGISTERED: return product.prices.registered;
      case UserRole.HORECA: return product.prices.horeca;
      default: return product.prices.guest;
    }
  };

  const currentPrice = getPrice();
  const isGuest = userRole === UserRole.GUEST;

  const handleAddToCart = () => {
    addToCart(product, quantity, deliveryType);
    alert('Añadido al carrito con éxito');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-500 hover:text-indigo-600 mb-8 font-medium transition-colors"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Volver al marketplace
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
        {/* Left: Gallery */}
        <div className="space-y-4">
          <div className="aspect-square rounded-3xl overflow-hidden bg-slate-50 border border-slate-100">
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex gap-4">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-indigo-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-2">
               <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full uppercase tracking-wider">{product.category}</span>
               <span className="text-xs font-medium text-slate-400">•</span>
               <span className="text-xs font-bold text-slate-500">{product.commerce}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">{product.name}</h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-slate-400 font-medium">(12 reseñas de vecinos)</span>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl mb-8 border border-slate-100">
            <div className="flex items-baseline space-x-3 mb-1">
              <span className="text-4xl font-black text-slate-900">{currentPrice.toFixed(2)}€</span>
              <span className="text-sm text-slate-400 font-medium">IVA incluido</span>
            </div>
            
            {isGuest && (
              <div className="mt-4 p-3 bg-indigo-600 rounded-xl flex items-center shadow-lg transform -rotate-1">
                <Info className="w-5 h-5 text-indigo-200 mr-3 flex-shrink-0" />
                <p className="text-white text-sm font-medium">
                  <span className="font-bold underline">¡Regístrate gratis!</span> y paga solo <span className="text-lg font-black text-white">{product.prices.registered.toFixed(2)}€</span> por este producto.
                </p>
              </div>
            )}

            {userRole === UserRole.HORECA && (
              <div className="mt-4 p-3 bg-green-50 rounded-xl flex items-center border border-green-200">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-3" />
                <p className="text-green-800 text-sm font-bold uppercase tracking-tight">Precio Profesional HORECA Activo</p>
              </div>
            )}
          </div>

          {/* Configuration */}
          <div className="space-y-6 mb-10">
            <div>
              <h3 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider flex items-center">
                Modo de entrega
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {product.deliveryOptions.shipping && (
                  <button 
                    onClick={() => setDeliveryType('shipping')}
                    className={`flex items-center justify-center p-4 rounded-2xl border-2 transition-all ${deliveryType === 'shipping' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                  >
                    <Truck className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <p className="text-sm font-bold">Envío a domicilio</p>
                      <p className="text-xs opacity-70">Desde {product.deliveryOptions.shippingCost.toFixed(2)}€</p>
                    </div>
                  </button>
                )}
                {product.deliveryOptions.pickup && (
                  <button 
                    onClick={() => setDeliveryType('pickup')}
                    className={`flex items-center justify-center p-4 rounded-2xl border-2 transition-all ${deliveryType === 'pickup' ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
                  >
                    <Package className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <p className="text-sm font-bold">Recogida local</p>
                      <p className="text-xs opacity-70">Gratis</p>
                    </div>
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div>
                <h3 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">Cantidad</h3>
                <div className="flex items-center border-2 border-slate-200 rounded-2xl px-2 py-1">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-indigo-600 text-2xl font-bold">-</button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-indigo-600 text-2xl font-bold">+</button>
                </div>
              </div>
              <div className="flex-1 pt-8">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center group"
                >
                  <ShoppingCart className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Añadir al carrito
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Info */}
          <div className="border-t border-slate-100 pt-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Sobre este producto</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center text-sm text-slate-500">
                  <div className="w-2 h-2 rounded-full bg-indigo-400 mr-3" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
