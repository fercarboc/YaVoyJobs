
import React, { useState } from 'react';
import { ICONS } from '../constants';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  doc: string;
  address: string;
  totalOrders: number;
  totalSpent: number;
  status: 'activo' | 'bloqueado';
}

export const ClientsView: React.FC = () => {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const clients: Client[] = [
    { id: '1', name: 'Mario Rodríguez', email: 'mario.r@gmail.com', phone: '+34 612 345 678', doc: '12345678X', address: 'Calle Mayor 15, 2ºA, Madrid', totalOrders: 12, totalSpent: 452.90, status: 'activo' },
    { id: '2', name: 'Lucía Bécquer', email: 'lucia.b@outlook.es', phone: '+34 654 987 321', doc: '87654321Y', address: 'Av. Diagonal 450, Barcelona', totalOrders: 5, totalSpent: 180.00, status: 'activo' },
    { id: '3', name: 'Constructores del Norte SL', email: 'compras@cdnorte.es', phone: '+34 944 123 456', doc: 'B-12345678', address: 'Polígono Ind. Malpica, Nave 4, Zaragoza', totalOrders: 45, totalSpent: 3420.50, status: 'activo' },
  ];

  if (selectedClient) {
    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 duration-300 pb-12">
        <button onClick={() => setSelectedClient(null)} className="text-sm font-bold text-gray-400 flex items-center gap-1 hover:text-gray-900 transition-colors">
          {ICONS.Chevron} Volver al listado
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column: Data */}
          <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-8">
            <div className="flex flex-col items-center text-center">
               <div className="w-24 h-24 rounded-[2rem] bg-blue-100 flex items-center justify-center text-blue-600 text-3xl font-black mb-4">
                  {selectedClient.name.charAt(0)}
               </div>
               <h3 className="text-2xl font-black text-gray-900">{selectedClient.name}</h3>
               <p className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full uppercase mt-1">Cliente Verificado</p>
            </div>

            <div className="space-y-6">
               <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Información de Contacto</label>
                  <p className="text-sm font-bold text-gray-900">{selectedClient.email}</p>
                  <p className="text-sm text-gray-500">{selectedClient.phone}</p>
               </div>
               <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Documento de Identidad</label>
                  <p className="text-sm font-bold text-gray-900">{selectedClient.doc}</p>
               </div>
               <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Dirección de Envío</label>
                  <p className="text-sm text-gray-600 leading-relaxed">{selectedClient.address}</p>
               </div>
               <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Notas Internas</label>
                  <textarea className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3 text-sm focus:ring-1 focus:ring-blue-600/20 outline-none resize-none" rows={4} placeholder="Escribe notas sobre este cliente..."></textarea>
               </div>
            </div>

            <button className="w-full bg-red-50 text-red-600 py-3 rounded-xl font-bold text-xs hover:bg-red-100 transition-colors border border-red-100">Abrir Incidencia / Devolución</button>
          </div>

          {/* Right Column: Order History */}
          <div className="lg:col-span-2 space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Pedidos Totales</p>
                   <p className="text-3xl font-black text-gray-900">{selectedClient.totalOrders}</p>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100">
                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Inversión Total</p>
                   <p className="text-3xl font-black text-blue-600">{selectedClient.totalSpent.toFixed(2)}€</p>
                </div>
             </div>

             <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-gray-50">
                   <h4 className="font-bold text-gray-900">Historial de Pedidos</h4>
                </div>
                <div className="overflow-x-auto">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="bg-gray-50/50">
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">ID Pedido</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fecha</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Importe</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Estado</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acción</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                         {[
                            { id: '#ORD-1029', date: '25 Feb 2024', amount: '45,90 €', status: 'Entregado' },
                            { id: '#ORD-1022', date: '18 Feb 2024', amount: '12,50 €', status: 'En tránsito' },
                            { id: '#ORD-1015', date: '10 Feb 2024', amount: '89,90 €', status: 'Incidencia' },
                         ].map(order => (
                            <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                               <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.id}</td>
                               <td className="px-6 py-4 text-xs text-gray-500">{order.date}</td>
                               <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.amount}</td>
                               <td className="px-6 py-4 text-center">
                                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase ${
                                     order.status === 'Entregado' ? 'bg-emerald-50 text-emerald-600' : 
                                     order.status === 'Incidencia' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                                  }`}>
                                     {order.status}
                                  </span>
                               </td>
                               <td className="px-6 py-4 text-right">
                                  <button className="text-blue-600 font-bold text-xs hover:underline">Ver pedido</button>
                               </td>
                            </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
             </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Directorio de Clientes</h2>
          <p className="text-gray-500 mt-1">Gestiona tu base de datos de compradores y clientes recurrentes</p>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cliente</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Documento</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Pedidos</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">Gasto Total</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Estado</th>
                <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {clients.map(c => (
                <tr key={c.id} className="hover:bg-gray-50/30 transition-colors cursor-pointer" onClick={() => setSelectedClient(c)}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-black text-xs">
                          {c.name.charAt(0)}
                       </div>
                       <div className="flex flex-col min-w-0">
                          <span className="font-bold text-gray-900 text-sm truncate">{c.name}</span>
                          <span className="text-[10px] text-gray-400 truncate">{c.email}</span>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-gray-500 font-medium uppercase tracking-tighter">{c.doc}</td>
                  <td className="px-6 py-4 text-center font-bold text-gray-900 text-sm">{c.totalOrders}</td>
                  <td className="px-6 py-4 text-center font-black text-blue-600 text-sm">{c.totalSpent.toFixed(2)}€</td>
                  <td className="px-6 py-4 text-right">
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${c.status === 'activo' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-blue-600 font-bold text-xs hover:underline flex items-center gap-1 justify-end ml-auto">
                      Ficha {ICONS.Chevron}
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
