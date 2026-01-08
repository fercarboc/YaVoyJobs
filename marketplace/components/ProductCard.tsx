
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/marketplace.types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const hasOffer = !!product.offer_price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <Link to={`/marketplace/product/${product.id}`} className="block relative group">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.is_promoted && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
            Destacado
          </span>
        )}
        {hasOffer && (
          <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
            Oferta
          </span>
        )}
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs text-blue-600 font-semibold mb-1 uppercase">{product.category}</div>
        <Link to={`/marketplace/product/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 truncate">{product.name}</h3>
        </Link>
        
        <div className="flex items-center space-x-2 mb-3">
          {hasOffer ? (
            <>
              <span className="text-lg font-bold text-gray-900">{product.offer_price}€</span>
              <span className="text-sm text-gray-400 line-through">{product.price}€</span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">{product.price}€</span>
          )}
        </div>

        <button 
          onClick={handleAddToCart}
          className="mt-auto w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
