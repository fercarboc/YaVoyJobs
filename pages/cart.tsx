import React from 'react';
import { useCart } from '@/components/marketplace/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, total, clearCart } = useCart();

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6 text-blue-800">Carrito</h1>
      {items.length === 0 ? (
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-400 text-sm">
          El carrito está vacío.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow border p-6">
          <ul className="divide-y divide-gray-100 mb-6">
            {items.map(item => (
              <li key={item.productId} className="flex items-center py-4 gap-4">
                {item.image_url && <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded" />}
                <div className="flex-1">
                  <div className="font-semibold text-sm text-gray-800">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.price.toFixed(2)}€</div>
                </div>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={e => updateQuantity(item.productId, Number(e.target.value))}
                  className="w-14 px-2 py-1 border rounded text-xs"
                  style={{ fontSize: 13 }}
                />
                <button onClick={() => removeFromCart(item.productId)} className="ml-2 text-red-500 text-xs font-bold hover:underline">Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-lg">Total:</span>
            <span className="text-blue-700 font-bold text-xl">{total.toFixed(2)}€</span>
          </div>
          <div className="flex gap-3">
            <button onClick={clearCart} className="bg-gray-100 text-gray-600 px-4 py-2 rounded font-bold text-xs hover:bg-gray-200">Vaciar carrito</button>
            <a href="/checkout" className="bg-emerald-500 text-white px-6 py-2 rounded font-bold text-xs hover:bg-emerald-600 ml-auto">Finalizar compra</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
