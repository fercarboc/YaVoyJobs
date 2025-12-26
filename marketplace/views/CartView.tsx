
import React, { useState } from 'react';
import { ShoppingCart, Trash2, Truck, Package, ChevronRight, CreditCard, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';
import { useApp } from '../AppContext';
import { UserRole, Order } from '../types';

interface CartViewProps {
  onContinueShopping: () => void;
  onOrderSuccess: () => void;
}

const CartView: React.FC<CartViewProps> = ({ onContinueShopping, onOrderSuccess }) => {
  const { cart, removeFromCart, updateCartQuantity, userRole, currentUser, addOrder, clearCart, isLoggedIn } = useApp();
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [address, setAddress] = useState(currentUser?.address || '');

  const getPrice = (product: any) => {
    if (userRole === UserRole.HORECA) return product.prices.horeca;
    if (userRole === UserRole.REGISTERED) return product.prices.registered;
    return product.prices.guest;
  };

  const subtotal = cart.reduce((acc, item) => acc + (getPrice(item.product) * item.quantity), 0);
  
  // Calcular envío: agrupamos por comercio para aplicar umbrales de envío gratis
  const shippingTotal = cart.reduce((acc, item) => {
    if (item.deliveryType === 'pickup') return acc;
    const prod = item.product;
    const commerceSubtotal = cart
      .filter(i => i.product.commerce === prod.commerce)
      .reduce((a, b) => a + (getPrice(b.product) * b.quantity), 0);
    
    if (prod.deliveryOptions.freeFrom && commerceSubtotal >= prod.deliveryOptions.freeFrom) return acc;
    return acc + prod.deliveryOptions.shippingCost;
  }, 0);

  const total = subtotal + shippingTotal;

  const handleCompleteOrder = () => {
    const newOrder: Order = {
      id: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }),
      customer: {
        name: currentUser?.name || 'Invitado',
        email: currentUser?.username || 'invitado@mail.com',
        role: userRole
      },
      items: [...cart],
      total: total,
      status: 'PENDING',
      deliveryAddress: cart.some(i => i.deliveryType === 'shipping') ? address : undefined
    };

    addOrder(newOrder);
    setStep('success');
    clearCart();
    setTimeout(onOrderSuccess, 3000);
  };

  if (cart.length === 0 && step !== 'success') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
          <ShoppingCart className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-black text-slate-900 mb-2">Tu carrito está vacío</h2>
        <p className="text-slate-500 mb-8">Parece que aún no has añadido nada de los comercios de tu barrio.</p>
        <button 
          onClick={onContinueShopping}
          className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg"
        >
          Explorar el mercado
        </button>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">¡Pedido confirmado!</h2>
        <p className="text-slate-500 mb-8">Gracias por apoyar al comercio local. Recibirás un email con los detalles en unos instantes.</p>
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 mb-8 text-left">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tu número de pedido</p>
          <p className="text-xl font-black text-indigo-600">#ORD-4921</p>
        </div>
        <button 
          onClick={onContinueShopping}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-xl"
        >
          Volver a la tienda
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black text-slate-900">
          {step === 'cart' ? 'Tu Carrito' : 'Finalizar Compra'}
        </h1>
        {step === 'checkout' && (
          <button onClick={() => setStep('cart')} className="flex items-center text-slate-500 font-bold hover:text-indigo-600">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al carrito
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Cart Items or Checkout Form */}
        <div className="lg:col-span-2 space-y-6">
          {step === 'cart' ? (
            <div className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
              <div className="divide-y divide-slate-100">
                {cart.map((item) => (
                  <div key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-6 hover:bg-slate-50 transition-colors">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100 border border-slate-200">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{item.product.commerce}</p>
                          <h3 className="text-lg font-bold text-slate-900">{item.product.name}</h3>
                        </div>
                        <button onClick={() => removeFromCart(item.product.id)} className="text-slate-300 hover:text-red-500 p-1">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mt-4">
                        <div className="flex items-center border border-slate-200 rounded-xl px-2">
                          <button onClick={() => updateCartQuantity(item.product.id, item.quantity - 1)} className="p-2 text-slate-400 hover:text-indigo-600 font-bold">-</button>
                          <span className="w-8 text-center font-bold text-slate-800">{item.quantity}</span>
                          <button onClick={() => updateCartQuantity(item.product.id, item.quantity + 1)} className="p-2 text-slate-400 hover:text-indigo-600 font-bold">+</button>
                        </div>
                        <div className="flex items-center text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                          {item.deliveryType === 'shipping' ? <Truck className="w-4 h-4 mr-2 text-indigo-500" /> : <Package className="w-4 h-4 mr-2 text-amber-500" />}
                          {item.deliveryType === 'shipping' ? 'Envío a domicilio' : 'Recogida en tienda'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex flex-col justify-end">
                      <p className="text-xl font-black text-slate-900">{(getPrice(item.product) * item.quantity).toFixed(2)}€</p>
                      <p className="text-xs text-slate-400">({getPrice(item.product).toFixed(2)}€ / ud)</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Address Section */}
              {cart.some(i => i.deliveryType === 'shipping') && (
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-indigo-100 p-2 rounded-xl text-indigo-600">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">Dirección de Envío</h2>
                  </div>
                  <input 
                    type="text" 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Calle, número, piso, código postal..."
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                  />
                </div>
              )}

              {/* Payment Section */}
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-green-100 p-2 rounded-xl text-green-600">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Método de Pago</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="border-2 border-indigo-600 bg-indigo-50 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-slate-800 rounded mr-3" />
                      <span className="font-bold text-indigo-900">Tarjeta Bancaria</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-indigo-600" />
                  </button>
                  <button className="border-2 border-slate-100 p-4 rounded-2xl flex items-center grayscale opacity-50 cursor-not-allowed">
                    <div className="w-10 h-6 bg-blue-500 rounded mr-3" />
                    <span className="font-bold text-slate-400">PayPal (Próximamente)</span>
                  </button>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Nº Tarjeta</label>
                    <input type="text" placeholder="4242 4242 4242 4242" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl" disabled />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Exp.</label>
                      <input type="text" placeholder="MM/AA" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl" disabled />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">CVC</label>
                      <input type="text" placeholder="123" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl" disabled />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl sticky top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-3" />
              Resumen
            </h2>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="font-bold text-white">{subtotal.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Gastos de envío</span>
                <span className="font-bold text-white">{shippingTotal === 0 ? 'GRATIS' : `${shippingTotal.toFixed(2)}€`}</span>
              </div>
              <div className="flex justify-between text-slate-400 border-t border-white/10 pt-4">
                <span>Total (IVA inc.)</span>
                <span className="text-3xl font-black text-white">{total.toFixed(2)}€</span>
              </div>
            </div>

            {step === 'cart' ? (
              <button 
                onClick={() => setStep('checkout')}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center group"
              >
                Tramitar pedido
                <ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button 
                onClick={handleCompleteOrder}
                className="w-full bg-green-500 hover:bg-green-400 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center"
              >
                Pagar {total.toFixed(2)}€
              </button>
            )}

            {!isLoggedIn && step === 'cart' && (
              <div className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-xs text-slate-400 text-center">
                  Estás comprando como <span className="text-white font-bold">Invitado</span>. Registrate para guardar tus facturas y direcciones.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
