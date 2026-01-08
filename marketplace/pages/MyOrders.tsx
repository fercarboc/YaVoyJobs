import React, { useEffect, useState } from 'react';
import { marketplaceApi } from '../services/marketplace.api';

type MyOrdersProps = {
  buyerId: string;
};

const MyOrders: React.FC<MyOrdersProps> = ({ buyerId }) => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!buyerId) return;
    setLoading(true);
    marketplaceApi
      .getOrdersForBuyer(buyerId)
      .then(({ data, error }) => {
        if (error) setError(error.message);
        setOrders(data || []);
      })
      .catch((err) => setError(err.message || "No se pudieron cargar tus pedidos"))
      .finally(() => setLoading(false));
  }, [buyerId]);

  if (!buyerId) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <p className="text-sm text-gray-500">Necesitas iniciar sesión para ver tu historial de pedidos.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold">Mis Pedidos</h1>
      {loading ? (
        <div className="text-sm text-gray-500">Cargando pedidos...</div>
      ) : error ? (
        <div className="text-sm text-red-500">{error}</div>
      ) : orders.length === 0 ? (
        <div className="bg-white rounded-3xl border border-dashed border-gray-200 p-8 text-center text-gray-500">
          No hay pedidos registrados todavía. Explora el marketplace y haz tu primera compra.
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white border rounded-3xl shadow-sm p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <p className="text-sm text-gray-400">Pedido #{order.id}</p>
                  <p className="text-lg font-bold text-gray-900">Total {order.total?.toFixed ? order.total.toFixed(2) : order.total}?</p>
                </div>
                <div className="text-xs uppercase tracking-widest font-semibold">
                  <span
                    className={`px-3 py-1 rounded-full ${
                      order.status === "pending"
                        ? "bg-orange-100 text-orange-600"
                        : order.status === "delivered"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600 space-y-2">
                {order.sub_orders?.map((subOrder: any) => (
                  <div key={subOrder.id} className="flex justify-between">
                    <span className="font-semibold text-gray-900">{subOrder.vendor_id}</span>
                    <span>{subOrder.subtotal?.toFixed ? subOrder.subtotal.toFixed(2) : subOrder.subtotal}?</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
