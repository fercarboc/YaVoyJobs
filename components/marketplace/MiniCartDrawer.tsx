import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import { Icons } from '../Icons';

interface MiniCartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const MiniCartDrawer: React.FC<MiniCartDrawerProps> = ({ open, onClose }) => {
  const { items, total, removeFromCart } = useCart();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 max-w-full bg-white shadow-2xl z-[9999] transition-transform duration-300 border-l border-gray-200 flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ minHeight: '100vh' }}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <h3 className="font-bold text-lg text-slate-900">Carrito</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-700"><Icons.X size={22} /></button>
      </div>
      <div className="flex-1 overflow-y-auto px-5 py-4">
        {items.length === 0 ? (
          <div className="text-gray-400 text-sm text-center py-12">El carrito está vacío.</div>
        ) : (
          <ul className="divide-y divide-gray-100">
            {items.map(item => (
              <li key={item.productId} className="flex items-center py-3 gap-3">
                {item.image_url && <img src={item.image_url} alt={item.name} className="w-12 h-12 object-cover rounded" />}
                <div className="flex-1">
                  <div className="font-semibold text-xs text-gray-800 line-clamp-1">{item.name}</div>
                  <div className="text-[11px] text-gray-500">{item.price.toFixed(2)}€ x {item.quantity}</div>
                </div>
                <button onClick={() => removeFromCart(item.productId)} className="text-red-400 hover:text-red-600 text-xs font-bold ml-2">✕</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="border-t px-5 py-4 bg-white">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-sm">Total:</span>
          <span className="text-blue-700 font-bold text-lg">{total.toFixed(2)}€</span>
        </div>
        <div className="flex gap-2">
          <Link to="/cart" className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded font-bold text-xs hover:bg-gray-200 text-center" onClick={onClose}>Ver carrito</Link>
          <Link to="/checkout" className="flex-1 bg-emerald-500 text-white px-3 py-2 rounded font-bold text-xs hover:bg-emerald-600 text-center" onClick={onClose}>Finalizar compra</Link>
        </div>
      </div>
    </div>
  );
};

export default MiniCartDrawer;
