
import React from 'react';
import { useCart } from '../hooks/useCart';
import { Store, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { items, removeItem, updateQuantity, total } = useCart();

  // Agrupar items por proveedor
  const groupedItems = items.reduce((acc: any, item) => {
    const vendorId = item.product.vendor_id;
    if (!acc[vendorId]) acc[vendorId] = { 
      name: item.product.vendor?.company.brand_name || 'Tienda', 
      products: [] 
    };
    acc[vendorId].products.push(item);
    return acc;
  }, {});

  if (items.length === 0) {
    return (
    <div className="max-w-2xl mx-auto py-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
      <Link to="/marketplace" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700">
        Explorar Tienda
      </Link>
    </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      <div className="flex-grow space-y-8">
        <h1 className="text-3xl font-bold">Tu Cesta</h1>
        
        {Object.keys(groupedItems).map(vendorId => (
          <div key={vendorId} className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b flex items-center text-sm font-bold text-gray-500">
              <Store className="w-4 h-4 mr-2" /> 
              PRODUCTOS DE: <span className="text-blue-600 ml-1 uppercase">{groupedItems[vendorId].name}</span>
            </div>
            
            <div className="divide-y">
              {groupedItems[vendorId].products.map((item: any) => (
                <div key={item.product.id} className="p-6 flex items-center gap-6">
                  <img src={item.product.images[0]} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-grow">
                    <h3 className="font-bold">{item.product.name}</h3>
                    <p className="text-blue-600 font-bold">{item.product.price}€</p>
                  </div>
                  <div className="flex items-center border rounded-lg">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2">-</button>
                    <span className="px-4 font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2">+</button>
                  </div>
                  <button onClick={() => removeItem(item.product.id)} className="p-2 text-red-400 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-96 space-y-6">
        <div className="bg-white rounded-2xl border p-6 shadow-sm sticky top-24">
          <h2 className="text-xl font-bold mb-6">Resumen</h2>
          <div className="space-y-4 text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal ({items.length} productos)</span>
              <span className="font-bold text-gray-900">{total.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between">
              <span>Gastos de envío</span>
              <span className="text-green-600 font-bold">Calculado en checkout</span>
            </div>
            <div className="pt-4 border-t flex justify-between text-xl font-bold text-gray-900">
              <span>Total</span>
              <span className="text-blue-600">{total.toFixed(2)}€</span>
            </div>
          </div>
          <Link 
            to="/marketplace/checkout" 
            className="w-full mt-8 bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Pagar Ahora <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
