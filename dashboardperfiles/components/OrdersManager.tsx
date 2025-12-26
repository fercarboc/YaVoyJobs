
import React from 'react';
import { Package, Truck, Store, CornerUpLeft, Clock, CheckCircle } from 'lucide-react';

export const OrdersManager: React.FC = () => {
  const orders = [
    { id: '10293', date: 'Hoy, 12:40', client: 'Restaurante El Faro', total: 450.50, status: 'Preparación', type: 'Entrega' },
    { id: '10292', date: 'Ayer, 18:20', client: 'Marta García', total: 24.90, status: 'Pendiente', type: 'Recogida' },
    { id: '10291', date: 'Ayer, 09:15', client: 'Suministros Madrid', total: 1240.00, status: 'Enviado', type: 'Entrega' },
    { id: '10285', date: '22 Oct, 11:30', client: 'Hotel Ritz', total: 89.00, status: 'Devuelto', type: 'Devolución' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Pedidos Recibidos', value: '45', icon: <Package />, color: 'blue' },
          { label: 'En Preparación', value: '8', icon: <Clock />, color: 'amber' },
          { label: 'En Reparto', value: '12', icon: <Truck />, color: 'indigo' },
          { label: 'Devoluciones', value: '1', icon: <CornerUpLeft />, color: 'red' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-${stat.color}-50 text-${stat.color}-600`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
              <h4 className="text-2xl font-bold">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white">
          <h3 className="font-bold text-gray-900">Historial de Pedidos</h3>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-xs font-bold bg-gray-100 text-gray-700 rounded-lg">Todos</button>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-500 rounded-lg hover:bg-gray-50">En curso</button>
            <button className="px-3 py-1.5 text-xs font-medium text-gray-500 rounded-lg hover:bg-gray-50">Completados</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">ID / Fecha</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Cliente</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Tipo</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Estado</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-gray-900">#{order.id}</p>
                    <p className="text-xs text-gray-400">{order.date}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-sm text-gray-700">{order.client}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {order.type === 'Entrega' ? <Truck size={14}/> : order.type === 'Recogida' ? <Store size={14}/> : <CornerUpLeft size={14}/>}
                      {order.type}
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">€{order.total.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      order.status === 'Enviado' ? 'bg-indigo-50 text-indigo-700' :
                      order.status === 'Preparación' ? 'bg-amber-50 text-amber-700' :
                      order.status === 'Pendiente' ? 'bg-blue-50 text-blue-700' :
                      'bg-red-50 text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm font-bold text-blue-600 hover:underline">Ver detalle</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
