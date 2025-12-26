import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { Icons } from '../Icons';

const MiniCartButton: React.FC = () => {
  const { items } = useCart();
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <Link to="/cart" className="relative flex items-center group ml-2">
      <Icons.ShoppingCart size={22} className="text-white group-hover:text-yellow-300 transition" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-white">
          {count}
        </span>
      )}
    </Link>
  );
};

export default MiniCartButton;
