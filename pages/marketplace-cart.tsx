import React from 'react';
import CartPlaceholder from '../components/marketplace/CartPlaceholder';

const MarketplaceCart: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4 text-blue-800">Carrito</h2>
      <CartPlaceholder />
    </div>
  );
};

export default MarketplaceCart;
