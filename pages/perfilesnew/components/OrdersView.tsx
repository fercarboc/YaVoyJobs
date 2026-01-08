
import React from 'react';
import { ICONS } from '../constants';
import { OrderStatus } from '../types';

export const OrdersView: React.FC = () => {
  const orders = [
    { id: 'ORD-1029', date: '25 Feb 2024', client: 'Mario R.', total: 45.90, status: OrderStatus.NEW },
    { id: 'ORD-1028', date: '24 Feb 2024', client: 'Lucía B.', total: 120.00, status: OrderStatus.PREPARING },
    { id: 'ORD-1025', date: '22 Feb 2024', client: 'Alex G.', total: 32.50, status: OrderStatus.DELIVERED },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Pedidos</h2>
          <p className="text-gray-500 mt-1">Gestión de ventas y expediciones</p>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID Pedido</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fecha</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cliente</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Total</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Estado</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map(o => (
                <tr key={o.id} className="hover:bg-gray-50/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{o.id}</td>
                  <td className="px-6 py-4 text-xs text-gray-500">{o.date}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">{o.client}</td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">{o.total.toFixed(2)}€</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                      o.status === OrderStatus.NEW ? 'bg-blue-600 text-white' : 
                      o.status === OrderStatus.PREPARING ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      {o.status === OrderStatus.NEW ? 'Nuevo' : o.status === OrderStatus.PREPARING ? 'En curso' : 'Entregado'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 font-bold text-xs hover:underline flex items-center gap-1 justify-end ml-auto">
                      Gestionar {ICONS.Chevron}
                    </button>
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
