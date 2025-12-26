
import React, { useState } from 'react';
import { 
  User, Package, FileText, Settings, LogOut, ChevronRight, 
  ExternalLink, Download, MapPin, Building2, ShoppingCart, 
  RefreshCcw, AlertTriangle, CheckCircle, Info
} from 'lucide-react';
import { useApp } from '../AppContext';
import { UserRole, Order, OrderStatus } from '../types';

const ProfileView: React.FC = () => {
  const { currentUser, userRole, orders, logout, updateOrderStatus } = useApp();
  const [activeTab, setActiveTab] = useState<'orders' | 'settings' | 'billing'>('orders');
  const [showReturnModal, setShowReturnModal] = useState<string | null>(null);
  const [returnReason, setReturnReason] = useState('');

  const statusColors: Record<OrderStatus, string> = {
    'PENDING': 'bg-amber-100 text-amber-600',
    'PREPARING': 'bg-blue-100 text-blue-600',
    'SHIPPED': 'bg-purple-100 text-purple-600',
    'READY_PICKUP': 'bg-indigo-100 text-indigo-600',
    'DELIVERED': 'bg-green-100 text-green-600',
    'RETURN_REQUESTED': 'bg-orange-100 text-orange-600',
    'RETURNED': 'bg-slate-100 text-slate-600',
    'RETURN_REJECTED': 'bg-red-100 text-red-600',
    'REFUNDED': 'bg-teal-100 text-teal-600'
  };

  const statusLabels: Record<OrderStatus, string> = {
    'PENDING': 'Recibido',
    'PREPARING': 'En preparación',
    'SHIPPED': 'En reparto',
    'READY_PICKUP': 'Listo para recoger',
    'DELIVERED': 'Entregado',
    'RETURN_REQUESTED': 'Devolución Solicitada',
    'RETURNED': 'Devuelto',
    'RETURN_REJECTED': 'Devolución Rechazada',
    'REFUNDED': 'Abonado'
  };

  const handleRequestReturn = (orderId: string) => {
    updateOrderStatus(orderId, 'RETURN_REQUESTED', returnReason);
    setShowReturnModal(null);
    setReturnReason('');
    alert('Solicitud de devolución enviada al comercio.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 text-center">
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-black shadow-lg">
              {currentUser?.name.charAt(0)}
            </div>
            <h2 className="text-xl font-black text-slate-900">{currentUser?.name}</h2>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">{userRole}</p>
          </div>

          <div className="bg-white p-2 rounded-[2rem] shadow-xl border border-slate-100">
            <nav className="space-y-1">
              <button 
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl transition-all font-bold ${activeTab === 'orders' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Package className="w-5 h-5" />
                <span>Mis Pedidos</span>
              </button>
              <button 
                onClick={() => setActiveTab('billing')}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl transition-all font-bold ${activeTab === 'billing' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <FileText className="w-5 h-5" />
                <span>Facturación</span>
              </button>
              <button 
                onClick={() => setActiveTab('settings')}
                className={`w-full flex items-center space-x-3 p-4 rounded-2xl transition-all font-bold ${activeTab === 'settings' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Settings className="w-5 h-5" />
                <span>Ajustes</span>
              </button>
              <div className="border-t border-slate-100 my-2 mx-4" />
              <button 
                onClick={logout}
                className="w-full flex items-center space-x-3 p-4 rounded-2xl transition-all font-bold text-red-500 hover:bg-red-50"
              >
                <LogOut className="w-5 h-5" />
                <span>Cerrar Sesión</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {activeTab === 'orders' && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <h1 className="text-3xl font-black text-slate-900 mb-8">Historial de Pedidos</h1>
              {orders.length === 0 ? (
                <div className="bg-white p-20 rounded-[3rem] text-center border-2 border-dashed border-slate-200">
                  <Package className="w-16 h-16 text-slate-200 mx-auto mb-4" />
                  <p className="text-slate-500 font-bold">Aún no has realizado ningún pedido.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white p-6 rounded-[2rem] shadow-lg border border-slate-100 hover:border-indigo-200 transition-all group overflow-hidden">
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex items-center space-x-4">
                          <div className="bg-slate-50 p-4 rounded-2xl">
                             <ShoppingCart className="w-6 h-6 text-indigo-600" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-3 mb-1">
                              <span className="font-black text-slate-900">{order.id}</span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${statusColors[order.status]}`}>
                                {statusLabels[order.status]}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 font-medium">{order.date} • {order.items.length} productos</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-4">
                          <div className="text-right">
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Total</p>
                            <p className="text-xl font-black text-slate-900">{order.total.toFixed(2)}€</p>
                          </div>
                          <div className="flex space-x-2">
                             {order.status === 'DELIVERED' && (
                               <button 
                                 onClick={() => setShowReturnModal(order.id)}
                                 className="flex items-center space-x-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold hover:bg-orange-50 hover:text-orange-600 transition-all border border-slate-100"
                               >
                                 <RefreshCcw className="w-4 h-4" />
                                 <span>Devolver</span>
                               </button>
                             )}
                             <button className="bg-slate-900 text-white p-3 rounded-xl hover:bg-indigo-600 transition-all">
                               <ExternalLink className="w-5 h-5" />
                             </button>
                          </div>
                        </div>
                      </div>
                      
                      {order.status === 'REFUNDED' && (
                        <div className="mt-4 p-4 bg-teal-50 rounded-2xl border border-teal-100 flex items-center justify-between">
                           <div className="flex items-center text-teal-800">
                             <CheckCircle className="w-5 h-5 mr-3" />
                             <span className="text-sm font-bold">Devolución aceptada. Abono realizado.</span>
                           </div>
                           <button className="flex items-center space-x-2 text-teal-600 font-bold text-xs hover:underline">
                             <Download className="w-4 h-4" />
                             <span>Factura de Abono</span>
                           </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <h1 className="text-3xl font-black text-slate-900 mb-8">Facturación y Abonos</h1>
              
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3 mb-8">
                  <Building2 className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-xl font-bold text-slate-900">Perfil Fiscal</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Nombre / Razón Social</p>
                    <p className="bg-slate-50 p-4 rounded-2xl font-bold text-slate-800">{currentUser?.name}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">NIF / CIF</p>
                    <p className="bg-slate-50 p-4 rounded-2xl font-bold text-slate-800">{currentUser?.taxId || 'N/A'}</p>
                  </div>
                  <div className="md:col-span-2 space-y-1">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Dirección Fiscal</p>
                    <p className="bg-slate-50 p-4 rounded-2xl font-bold text-slate-800 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                      {currentUser?.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Secciones de Facturas Ordinarias y de Abono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                  <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Facturas</h3>
                    <Info className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="divide-y divide-slate-100">
                    {orders.filter(o => o.status !== 'REFUNDED').length > 0 ? orders.filter(o => o.status !== 'REFUNDED').map(order => (
                      <div key={order.id} className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm">{order.id.replace('ORD','FAC')}</p>
                            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">{order.date}</p>
                          </div>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-800 transition-colors"><Download className="w-5 h-5" /></button>
                      </div>
                    )) : (
                      <div className="p-12 text-center text-slate-400 text-xs font-bold">Sin facturas</div>
                    )}
                  </div>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
                  <div className="p-6 bg-teal-50 border-b border-teal-100 flex items-center justify-between">
                    <h3 className="font-bold text-teal-900">Facturas de Abono</h3>
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="divide-y divide-teal-50">
                    {orders.filter(o => o.status === 'REFUNDED').length > 0 ? orders.filter(o => o.status === 'REFUNDED').map(order => (
                      <div key={order.id} className="p-6 flex items-center justify-between hover:bg-teal-50/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-teal-100 text-teal-700 rounded-xl">
                            <RefreshCcw className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-teal-900 text-sm">{order.refundId}</p>
                            <p className="text-[10px] text-teal-500 uppercase font-bold tracking-tighter">Abono del {order.id}</p>
                          </div>
                        </div>
                        <button className="text-teal-600 hover:text-teal-800 transition-colors"><Download className="w-5 h-5" /></button>
                      </div>
                    )) : (
                      <div className="p-12 text-center text-slate-400 text-xs font-bold">Sin facturas rectificativas</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white p-12 rounded-[3rem] text-center border border-slate-100 shadow-xl">
               <Settings className="w-16 h-16 text-slate-100 mx-auto mb-4" />
               <p className="text-slate-500 font-bold">Ajustes del perfil próximamente.</p>
            </div>
          )}
        </div>
      </div>

      {/* Return Modal */}
      {showReturnModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
           <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in duration-300">
              <div className="p-8">
                 <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                       <RefreshCcw className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900">Solicitar Devolución</h2>
                 </div>
                 <p className="text-slate-500 mb-6">Indica el motivo por el cual deseas devolver el pedido <span className="font-bold text-slate-800">{showReturnModal}</span>. Un agente del comercio lo revisará.</p>
                 
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Motivo de la devolución</label>
                       <textarea 
                         value={returnReason}
                         onChange={(e) => setReturnReason(e.target.value)}
                         placeholder="Ej: El producto llegó defectuoso o no es lo que esperaba..."
                         className="w-full h-32 p-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none text-slate-800"
                       />
                    </div>
                    <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start text-amber-700">
                       <AlertTriangle className="w-5 h-5 mr-3 flex-shrink-0" />
                       <p className="text-xs font-medium">Una vez aceptada la devolución, se generará una factura de abono y se reembolsará el importe.</p>
                    </div>
                 </div>

                 <div className="flex gap-4 mt-8">
                    <button 
                      onClick={() => setShowReturnModal(null)}
                      className="flex-1 px-6 py-4 rounded-2xl font-bold text-slate-500 hover:bg-slate-50 transition-all"
                    >
                      Cancelar
                    </button>
                    <button 
                      onClick={() => handleRequestReturn(showReturnModal)}
                      disabled={!returnReason}
                      className="flex-1 bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Enviar Solicitud
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default ProfileView;
