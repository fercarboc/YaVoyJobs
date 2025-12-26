
import React, { useState } from 'react';
import { 
  LayoutDashboard, Package, ShoppingBag, TrendingUp, Plus, Edit, 
  Trash, Check, X, Truck, Clock, RefreshCcw, AlertCircle, FileText 
} from 'lucide-react';
import { useApp } from '../AppContext';
import { MOCK_PRODUCTS } from '../data/mockData';
import { OrderStatus, Order } from '../types';

const SellerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stats' | 'products' | 'orders' | 'returns'>('stats');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-900">Panel de Comercio</h1>
          <p className="text-slate-500">Distribuciones J. Pérez • Barrio de Chamberí</p>
        </div>
        <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
          <button 
            onClick={() => setActiveTab('stats')}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'stats' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Ventas
          </button>
          <button 
            onClick={() => setActiveTab('products')}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'products' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <Package className="w-4 h-4 mr-2" />
            Productos
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'orders' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Pedidos
          </button>
          <button 
            onClick={() => setActiveTab('returns')}
            className={`flex items-center px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'returns' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Devoluciones
          </button>
        </div>
      </div>

      {activeTab === 'stats' && <StatsView />}
      {activeTab === 'products' && <ProductsListView />}
      {activeTab === 'orders' && <OrdersListView />}
      {activeTab === 'returns' && <ReturnsListView />}
    </div>
  );
};

const StatsView = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-500">
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest">Ventas del Mes</h3>
        <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded">+12%</span>
      </div>
      <p className="text-4xl font-black text-slate-900">4.850,00€</p>
      <div className="mt-4 flex items-center text-xs text-slate-400">
        <Clock className="w-3 h-3 mr-1" />
        Actualizado hace 5 min
      </div>
    </div>
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest">Pedidos Hoy</h3>
        <span className="text-indigo-600 font-bold text-xs bg-indigo-50 px-2 py-1 rounded">+3</span>
      </div>
      <p className="text-4xl font-black text-slate-900">24</p>
      <div className="mt-4 flex items-center text-xs text-slate-400">
        <Clock className="w-3 h-3 mr-1" />
        Actualizado hoy
      </div>
    </div>
    <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-500 font-bold text-xs uppercase tracking-widest">Comisión Plataforma</h3>
      </div>
      <p className="text-4xl font-black text-slate-900">388,00€</p>
      <div className="mt-4 flex items-center text-xs text-slate-400">
        8% fijo por venta
      </div>
    </div>
    
    <div className="md:col-span-3 bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm h-64 flex items-center justify-center">
       <div className="text-center">
         <TrendingUp className="w-12 h-12 text-slate-100 mx-auto mb-4" />
         <p className="text-slate-400 font-bold">Resumen gráfico de actividad</p>
       </div>
    </div>
  </div>
);

const ProductsListView = () => (
  <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold text-slate-900">Mis Productos</h2>
      <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold flex items-center shadow-lg hover:bg-indigo-700 transition-all">
        <Plus className="w-5 h-5 mr-2" />
        Nuevo Producto
      </button>
    </div>
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-widest">
            <th className="px-6 py-4">Producto</th>
            <th className="px-6 py-4">Stock</th>
            <th className="px-6 py-4">Precios (PVP/Reg/HORECA)</th>
            <th className="px-6 py-4">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {MOCK_PRODUCTS.slice(0, 5).map(p => (
            <tr key={p.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <img src={p.images[0]} className="w-10 h-10 rounded-lg object-cover mr-3 border border-slate-200" alt="" />
                  <div>
                    <p className="font-bold text-slate-900">{p.name}</p>
                    <p className="text-xs text-slate-400">{p.category}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${p.stock < 20 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  {p.stock} uds
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex space-x-2 text-xs font-bold">
                  <span className="text-slate-700">{p.prices.guest}€</span>
                  <span className="text-indigo-600">{p.prices.registered}€</span>
                  <span className="text-green-600">{p.prices.horeca}€</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex space-x-2">
                  <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors"><Edit className="w-4 h-4" /></button>
                  <button className="p-2 text-slate-400 hover:text-red-500 transition-colors"><Trash className="w-4 h-4" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const OrdersListView = () => {
  const [orders, setOrders] = useState([
    { id: 'ORD-1024', customer: 'Juan Pérez', date: 'Hoy, 10:20', total: 45.99, status: 'PENDING' as OrderStatus, itemsCount: 2 },
    { id: 'ORD-1025', customer: 'Restaurante El Faro (HORECA)', date: 'Hoy, 09:15', total: 184.20, status: 'PREPARING' as OrderStatus, itemsCount: 12 },
    { id: 'ORD-1026', customer: 'María García', date: 'Ayer, 18:45', total: 22.50, status: 'READY_PICKUP' as OrderStatus, itemsCount: 1 },
  ]);

  const statusMap = {
    PENDING: { label: 'Pendiente', color: 'bg-amber-50 text-amber-600 border-amber-200' },
    PREPARING: { label: 'Preparando', color: 'bg-blue-50 text-blue-600 border-blue-200' },
    READY_PICKUP: { label: 'Listo para Recogida', color: 'bg-indigo-50 text-indigo-600 border-indigo-200' },
    SHIPPED: { label: 'Enviado', color: 'bg-purple-50 text-purple-600 border-purple-200' },
    DELIVERED: { label: 'Entregado', color: 'bg-green-50 text-green-600 border-green-200' },
    RETURN_REQUESTED: { label: 'Devolución Solicitada', color: 'bg-orange-50 text-orange-600 border-orange-200' },
    RETURNED: { label: 'Devuelto', color: 'bg-slate-50 text-slate-600 border-slate-200' },
    RETURN_REJECTED: { label: 'Devolución Rechazada', color: 'bg-red-50 text-red-600 border-red-200' },
    REFUNDED: { label: 'Abonado', color: 'bg-teal-50 text-teal-600 border-teal-200' },
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
       <h2 className="text-xl font-bold text-slate-900">Gestión de Pedidos</h2>
       <div className="grid grid-cols-1 gap-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-indigo-100 transition-all">
               <div className="flex items-center space-x-6">
                  <div className="bg-slate-50 p-4 rounded-2xl flex items-center justify-center text-indigo-600">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="font-black text-slate-900">{order.id}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusMap[order.status].color}`}>
                        {statusMap[order.status].label}
                      </span>
                    </div>
                    <p className="text-sm font-bold text-slate-800">{order.customer}</p>
                    <p className="text-xs text-slate-400">{order.date} • {order.itemsCount} productos</p>
                  </div>
               </div>

               <div className="flex items-center justify-between md:justify-end flex-1 gap-8">
                  <div className="text-right">
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Total</p>
                    <p className="text-xl font-black text-slate-900">{order.total.toFixed(2)}€</p>
                  </div>
                  <div className="flex space-x-2">
                     {order.status === 'PENDING' && (
                       <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700 transition-all">
                         <Check className="w-4 h-4" />
                         <span>Aceptar</span>
                       </button>
                     )}
                     <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-slate-100 transition-all">
                       <Plus className="w-4 h-4" />
                     </button>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </div>
  );
};

const ReturnsListView = () => {
  const { orders, updateOrderStatus } = useApp();
  const returnRequests = orders.filter(o => o.status === 'RETURN_REQUESTED');

  const handleApproveReturn = (orderId: string) => {
    updateOrderStatus(orderId, 'REFUNDED');
    alert('Devolución aprobada. Factura de abono generada automáticamente.');
  };

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
       <div className="flex items-center justify-between">
         <h2 className="text-xl font-bold text-slate-900">Solicitudes de Devolución</h2>
         <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">{returnRequests.length} pendientes</span>
       </div>
       
       <div className="grid grid-cols-1 gap-6">
          {returnRequests.length > 0 ? returnRequests.map(order => (
            <div key={order.id} className="bg-white rounded-[2rem] border-2 border-orange-100 shadow-sm overflow-hidden">
               <div className="p-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                     <div className="flex items-center space-x-3 mb-4">
                        <span className="bg-orange-500 text-white p-2 rounded-xl"><RefreshCcw className="w-5 h-5" /></span>
                        <div>
                          <h3 className="font-black text-slate-900">Solicitud {order.id.replace('ORD','DEV')}</h3>
                          <p className="text-xs text-slate-400">Cliente: {order.customer.name}</p>
                        </div>
                     </div>
                     <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-4">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Motivo del cliente:</p>
                        <p className="text-sm text-slate-700 italic">"{order.returnReason}"</p>
                     </div>
                     <div className="flex items-center space-x-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <span>{order.items.length} productos</span>
                        <span>•</span>
                        <span className="text-indigo-600">Importe a abonar: {order.total.toFixed(2)}€</span>
                     </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                     <button 
                       onClick={() => updateOrderStatus(order.id, 'RETURN_REJECTED')}
                       className="px-6 py-3 rounded-xl border border-red-100 text-red-500 font-bold text-sm hover:bg-red-50 transition-all"
                     >
                       Rechazar
                     </button>
                     <button 
                       onClick={() => handleApproveReturn(order.id)}
                       className="px-6 py-3 rounded-xl bg-teal-600 text-white font-bold text-sm hover:bg-teal-700 shadow-lg transition-all flex items-center justify-center space-x-2"
                     >
                       <Check className="w-4 h-4" />
                       <span>Aceptar y Abonar</span>
                     </button>
                  </div>
               </div>
            </div>
          )) : (
            <div className="bg-white p-16 rounded-[2.5rem] text-center border-2 border-dashed border-slate-100">
               <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCcw className="w-8 h-8 text-slate-200" />
               </div>
               <p className="text-slate-400 font-bold">No hay devoluciones pendientes de revisión.</p>
            </div>
          )}
       </div>
    </div>
  );
};

export default SellerDashboard;
