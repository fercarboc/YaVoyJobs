
import React, { useEffect, useState } from 'react';
import { marketplaceApi } from '../services/marketplace.api';
import { Product, SubOrder, MarketIncident } from '../types/marketplace.types';
import { BarChart, DollarSign, Package, AlertCircle, Plus, ChevronRight, Clock, ShieldAlert } from 'lucide-react';
import ProductModal from '../components/ProductModal';

type VendorDashboardProps = {
  vendorId?: string;
};

const VendorDashboard: React.FC<VendorDashboardProps> = ({ vendorId }) => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [lowStockProducts, setLowStockProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<SubOrder[]>([]);
  const [incidents, setIncidents] = useState<MarketIncident[]>([]);
  const [loading, setLoading] = useState(true);
  const resolvedVendorId = vendorId || 'v1';

  useEffect(() => {
    const fetchData = async () => {
      const [prodRes, ordersRes, incRes] = await Promise.all([
        marketplaceApi.getProducts({ vendorId: resolvedVendorId }),
        marketplaceApi.getVendorOrders(resolvedVendorId),
        marketplaceApi.getIncidents(resolvedVendorId)
      ]);
      
      setProducts(prodRes.data || []);
      setLowStockProducts((prodRes.data || []).filter(p => p.stock < 5));
      setOrders(ordersRes.data || []);
      setIncidents(incRes.data || []);
      setLoading(false);
    };
    fetchData();
  }, [resolvedVendorId]);

  const handleSaveProduct = async (productData: Partial<Product>) => {
    const { error } = await marketplaceApi.createProduct({ ...productData, vendor_id: resolvedVendorId });
    if (!error) window.location.reload();
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tech Store SL</h1>
          <p className="text-gray-500">Resumen operativo y gestión de catálogo.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsProductModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center shadow-lg shadow-blue-100 transition-all active:scale-95"
          >
            <Plus className="w-5 h-5 mr-2" /> Nuevo Producto
          </button>
        </div>
      </div>

      {/* Alertas Críticas */}
      {(lowStockProducts.length > 0 || incidents.filter(i => i.status === 'open').length > 0) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lowStockProducts.length > 0 && (
            <div className="bg-orange-50 border border-orange-100 p-4 rounded-2xl flex items-center gap-4 animate-pulse">
              <div className="p-2 bg-orange-200 rounded-lg text-orange-700"><AlertCircle className="w-5 h-5" /></div>
              <div>
                <p className="font-bold text-orange-900 text-sm">Stock bajo en {lowStockProducts.length} productos</p>
                <p className="text-xs text-orange-700">Actualiza el inventario para no perder ventas.</p>
              </div>
            </div>
          )}
          {incidents.filter(i => i.status === 'open').length > 0 && (
            <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-4">
              <div className="p-2 bg-red-200 rounded-lg text-red-700"><ShieldAlert className="w-5 h-5" /></div>
              <div>
                <p className="font-bold text-red-900 text-sm">{incidents.filter(i => i.status === 'open').length} Incidencias abiertas</p>
                <p className="text-xs text-red-700">Requieren tu atención inmediata.</p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Ventas Mes" value="2.840€" icon={BarChart} color="blue" />
        <StatCard title="Pedidos Pend." value={orders.filter(o => o.status === 'pending').length} icon={Clock} color="orange" />
        <StatCard title="Saldo Disponible" value="1.245€" icon={DollarSign} color="green" />
        <StatCard title="Total Productos" value={products.length} icon={Package} color="purple" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Lista de Pedidos */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Pedidos Recientes</h3>
            <button className="text-blue-600 text-sm font-bold hover:underline">Ver todos los pedidos</button>
          </div>
          <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                <tr>
                  <th className="px-6 py-4">ID / Cliente</th>
                  <th className="px-6 py-4">Artículos</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Estado</th>
                  <th className="px-6 py-4 text-right">Acción</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {orders.map(order => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-gray-900">#{order.order_id.slice(-6)}</p>
                      <p className="text-xs text-gray-500">{order.order?.customer_name || 'Anónimo'}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {order.items?.[0]?.product_name} {order.items && order.items.length > 1 ? `(+${order.items.length - 1})` : ''}
                    </td>
                    <td className="px-6 py-4 font-bold">{order.subtotal}€</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        order.status === 'pending' ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sidebar: Low Stock & Incidents */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" /> Stock Crítico
            </h3>
            <div className="space-y-4">
              {lowStockProducts.map(p => (
                <div key={p.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <img src={p.images[0]} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="text-sm font-bold truncate w-32">{p.name}</p>
                      <p className="text-[10px] text-red-500 font-bold">Quedan: {p.stock}</p>
                    </div>
                  </div>
                  <button className="text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Reponer</button>
                </div>
              ))}
              {lowStockProducts.length === 0 && <p className="text-sm text-gray-400 text-center py-4">Inventario saludable</p>}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border shadow-sm">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-red-500" /> Incidencias Activas
            </h3>
            <div className="space-y-3">
              {incidents.map(inc => (
                <div key={inc.id} className="p-3 bg-red-50 border border-red-100 rounded-xl text-xs">
                  <p className="font-bold text-red-900">{inc.title}</p>
                  <p className="text-red-700 mt-1 line-clamp-2">{inc.description}</p>
                </div>
              ))}
              {incidents.length === 0 && <p className="text-sm text-gray-400 text-center py-4">Sin incidencias</p>}
            </div>
          </div>
        </div>
      </div>

      <ProductModal 
        isOpen={isProductModalOpen} 
        onClose={() => setIsProductModalOpen(false)} 
        onSave={handleSaveProduct} 
      />
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, color }: any) => {
  const colors: any = {
    blue: 'bg-blue-50 text-blue-600',
    orange: 'bg-orange-50 text-orange-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
  };
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
      <div className={`p-3 rounded-xl w-fit mb-4 ${colors[color]}`}>
        <Icon className="w-6 h-6" />
      </div>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{title}</p>
      <h3 className="text-2xl font-black mt-1 text-gray-900">{value}</h3>
    </div>
  );
};

export default VendorDashboard;
