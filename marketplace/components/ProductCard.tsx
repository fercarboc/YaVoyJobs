
import React from 'react';
import { MapPin, Tag, Truck, Package } from 'lucide-react';
import { Product, UserRole } from '../types';
import { useApp } from '../AppContext';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { userRole } = useApp();

  const getPrice = () => {
    switch(userRole) {
      case UserRole.REGISTERED: return product.prices.registered;
      case UserRole.HORECA: return product.prices.horeca;
      default: return product.prices.guest;
    }
  };

  const currentPrice = getPrice();
  const hasOffer = product.offer && userRole !== UserRole.HORECA; // HORECA usually has fixed net prices

  return (
    <div 
      className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-indigo-200 transition-all cursor-pointer flex flex-col h-full"
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-slate-100">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {hasOffer && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center shadow-md">
            <Tag className="w-3 h-3 mr-1" />
            OFERTA
          </div>
        )}
        <div className="absolute bottom-2 left-2 flex space-x-1">
          {product.deliveryOptions.shipping && <div className="bg-white/90 p-1.5 rounded-lg shadow-sm"><Truck className="w-3.5 h-3.5 text-slate-600" /></div>}
          {product.deliveryOptions.pickup && <div className="bg-white/90 p-1.5 rounded-lg shadow-sm"><Package className="w-3.5 h-3.5 text-slate-600" /></div>}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
            {product.category}
          </span>
          <div className="flex items-center text-slate-400 text-xs">
            <MapPin className="w-3 h-3 mr-1" />
            {product.neighborhood}
          </div>
        </div>

        <h3 className="text-sm font-semibold text-slate-800 line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-xs text-slate-500 mb-4 line-clamp-1">{product.commerce}</p>

        <div className="mt-auto flex items-end justify-between">
          <div>
            <span className="text-xs text-slate-400 font-medium">Desde</span>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-bold text-slate-900">{currentPrice.toFixed(2)}€</span>
              {userRole === UserRole.GUEST && (
                <span className="text-[10px] text-green-600 font-semibold bg-green-50 px-1.5 py-0.5 rounded">
                  -{((1 - product.prices.registered / product.prices.guest) * 100).toFixed(0)}% reg
                </span>
              )}
            </div>
          </div>
          
          <button className="bg-slate-900 text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ShoppingCart: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);

export default ProductCard;
