import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, MapPin, User, AlertTriangle } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { marketplaceApi } from '../services/marketplace.api';
import type { AuthState } from '../../types';

type CheckoutProps = {
  auth: AuthState;
};

const Checkout: React.FC<CheckoutProps> = ({ auth }) => {
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [guestCheckout, setGuestCheckout] = useState(!auth.isAuthenticated);

  useEffect(() => {
    if (auth.user) {
      setFormData((prev) => ({
        ...prev,
        email: auth.user.email ?? prev.email,
        name: auth.user.full_name ?? prev.name,
        address: auth.user.address ?? prev.address,
        city: auth.user.city ?? prev.city,
        postalCode: auth.user.postal_code ?? prev.postalCode,
      }));
      setGuestCheckout(false);
    } else {
      setGuestCheckout(true);
    }
  }, [auth.user]);

  const vendorGroups = useMemo(() => {
    return items.reduce<Record<string, typeof items>>((acc, item) => {
      const vendorId = item.product.vendor_id || 'Tienda YaVoy';
      if (!acc[vendorId]) {
        acc[vendorId] = [];
      }
      acc[vendorId].push(item);
      return acc;
    }, {});
  }, [items]);

  const payloadItems = useMemo(
    () =>
      items.map((item) => ({
        productId: item.product.id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.offer_price || item.product.price,
        vendorId: item.product.vendor_id,
      })),
    [items]
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!items.length) return;
    setIsProcessing(true);
    setError(null);

    const payload = {
      buyerId: guestCheckout ? undefined : auth.user?.id,
      guestInfo: guestCheckout
        ? {
            name: formData.name,
            email: formData.email,
          }
        : undefined,
      shipping: {
        address: formData.address,
        city: formData.city,
        postalCode: formData.postalCode,
      },
      items: payloadItems,
      total,
    };

    const { error: placeError } = await marketplaceApi.placeOrder(payload);
    if (placeError) {
      setError(placeError.message);
      setIsProcessing(false);
      return;
    }

    clearCart();
    navigate('/marketplace/success');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500">Checkout / Carrito ({items.reduce((sum, item) => sum + item.quantity, 0)} productos)</p>
        <h1 className="text-3xl font-bold text-gray-900">Finaliza tu pedido</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {error && (
            <div className="rounded-2xl bg-red-50 border border-red-100 text-red-600 px-4 py-3 text-sm flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              {error}
            </div>
          )}

          <div className="rounded-3xl border border-gray-100 bg-white p-6 space-y-6 shadow-sm">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
                <User className="w-4 h-4 text-gray-400" />
                Método de contacto
              </div>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    checked={!guestCheckout}
                    disabled={!auth.isAuthenticated}
                    onChange={() => setGuestCheckout(false)}
                  />
                  Usar mi cuenta
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    checked={guestCheckout}
                    onChange={() => setGuestCheckout(true)}
                  />
                  Seguir como invitado
                </label>
              </div>
            </div>

            {guestCheckout && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 text-amber-700 px-4 py-3 text-sm">
                Como invitado no tendrás panel de pedidos. Te enviaremos el seguimiento por email.
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
                  <input
                    value={formData.email}
                    onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                    className="w-full border rounded-2xl px-4 py-2 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none"
                    required
                    type="email"
                    disabled={!guestCheckout && !auth.isAuthenticated}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Nombre completo</label>
                  <input
                    value={formData.name}
                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                    className="w-full border rounded-2xl px-4 py-2 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none"
                    required
                    type="text"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1">Dirección</label>
                  <input
                    value={formData.address}
                    onChange={(event) => setFormData({ ...formData, address: event.target.value })}
                    className="w-full border rounded-2xl px-4 py-2 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Ciudad</label>
                    <input
                      value={formData.city}
                      onChange={(event) => setFormData({ ...formData, city: event.target.value })}
                      className="w-full border rounded-2xl px-4 py-2 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1">Código postal</label>
                    <input
                      value={formData.postalCode}
                      onChange={(event) => setFormData({ ...formData, postalCode: event.target.value })}
                      className="w-full border rounded-2xl px-4 py-2 text-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4 text-sm text-gray-500 flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-blue-500" />
                Pagos seguros gestionados por YaVoy. Los métodos se solicitarán en el siguiente paso.
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 rounded-2xl font-bold text-white transition ${
                  isProcessing ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isProcessing ? 'Procesando pedido...' : `Pagar ${total.toFixed(2)}?`}
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm space-y-6">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gray-500">
              <Truck className="w-4 h-4 text-gray-400" />
              Resumen del carrito
            </div>
            <div className="space-y-4">
              {Object.entries(vendorGroups).map(([vendorId, vendorItems]) => (
                <div key={vendorId} className="border rounded-2xl border-dashed border-slate-200 px-4 py-3">
                  <div className="text-xs font-semibold uppercase text-gray-500 mb-2">{vendorId}</div>
                  {vendorItems.map((item) => (
                    <div key={item.product.id} className="flex items-center justify-between text-sm text-gray-600">
                      <span>
                        {item.product.name} x {item.quantity}
                      </span>
                      <span className="font-bold text-gray-900">
                        {(item.product.offer_price || item.product.price).toFixed(2)}?
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Items</span>
                <span>{items.length}</span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Envío estimado</span>
                <span>Calculado en siguiente paso</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 mt-2">
                <span>Total</span>
                <span>{total.toFixed(2)}?</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm space-y-3 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              Entregas multi-vendedor con seguimiento individual.
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Asegúrate de verificar tus datos antes de confirmar.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
