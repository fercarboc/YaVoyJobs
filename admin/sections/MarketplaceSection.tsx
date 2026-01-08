
import React, { useState, useEffect } from 'react';
import { marketplaceApi } from '../../marketplace/services/marketplace.api';
import { MarketVendor, VendorPayment, MarketIncident } from '../../marketplace/types/marketplace.types';
import { BarChart3, Users2, ShoppingCart, ShieldAlert, Settings, Plus, DollarSign, MessageSquare, Search } from 'lucide-react';

const MarketplaceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'vendors' | 'payments' | 'incidents'>('vendors');
  const [vendors, setVendors] = useState<MarketVendor[]>([]);
  const [payments, setPayments] = useState<VendorPayment[]>([]);
  const [incidents, setIncidents] = useState<MarketIncident[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      const [vRes, pRes, iRes] = await Promise.all([
        marketplaceApi.getAllVendors(),
        marketplaceApi.getVendorPayments(),
        marketplaceApi.getIncidents()
      ]);
      setVendors(vRes.data || []);
      setPayments(pRes.data || []);
      setIncidents(iRes.data || []);
      setLoading(false);
    };
    fetchAdminData();
  }, []);

  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Marketplace Global</h1>
          <p className="text-gray-500">Métricas globales y gestión de la red de proveedores.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold flex items-center shadow-xl shadow-blue-100 transition-all active:scale-95">
          <Plus className="w-5 h-5 mr-2" /> Añadir Proveedor
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="GMV Total" value="84.250€" icon={ShoppingCart} color="text-blue-600" />
        <StatCard title="Comisiones Acum." value="8.425€" icon={BarChart3} color="text-green-600" />
        <StatCard title="Vendors Activos" value={vendors.length} icon={Users2} color="text-purple-600" />
        <StatCard title="Incidencias Abiertas" value={incidents.filter(i => i.status !== 'resolved').length} icon={ShieldAlert} color="text-red-600" />
      </div>

      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden flex flex-col">
        <div className="border-b px-6 flex items-center justify-between">
          <div className="flex">
            <TabButton active={activeTab === 'vendors'} onClick={() => setActiveTab('vendors')} label="Proveedores" icon={Users2} />
            <TabButton active={activeTab === 'payments'} onClick={() => setActiveTab('payments')} label="Pagos y Cuotas" icon={DollarSign} />
            <TabButton active={activeTab === 'incidents'} onClick={() => setActiveTab('incidents')} label="Centro Incidencias" icon={MessageSquare} />
          </div>
          <div className="relative py-4">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
             <input type="text" placeholder="Buscar..." className="pl-10 pr-4 py-2 bg-gray-50 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500 w-64" />
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'vendors' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-[10px] uppercase font-bold text-gray-400 tracking-widest border-b">
                  <tr>
                    <th className="px-4 py-4">Empresa / Tienda</th>
                    <th className="px-4 py-4">Modelo</th>
                    <th className="px-4 py-4">Saldo Acumulado</th>
                    <th className="px-4 py-4">Estado Suscr.</th>
                    <th className="px-4 py-4 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {vendors.map(v => (
                    <tr key={v.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 font-bold text-gray-900">{v.business_name}</td>
                      <td className="px-4 py-4 text-gray-500">{v.monetization_mode}</td>
                      <td className="px-4 py-4 font-mono font-bold">{v.balance}€</td>
                      <td className="px-4 py-4">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${v.subscription_status === 'active' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                          {v.subscription_status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button className="text-blue-600 font-bold hover:underline">Gestionar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="text-[10px] uppercase font-bold text-gray-400 tracking-widest border-b">
                  <tr>
                    <th className="px-4 py-4">Fecha</th>
                    <th className="px-4 py-4">Proveedor</th>
                    <th className="px-4 py-4">Concepto</th>
                    <th className="px-4 py-4">Cantidad</th>
                    <th className="px-4 py-4">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {payments.map(p => (
                    <tr key={p.id}>
                      <td className="px-4 py-4 text-gray-500">{new Date(p.date).toLocaleDateString()}</td>
                      <td className="px-4 py-4 font-bold">{p.vendor_id}</td>
                      <td className="px-4 py-4 text-gray-500 italic">{p.concept}</td>
                      <td className="px-4 py-4 font-bold text-green-600">{p.amount}€</td>
                      <td className="px-4 py-4 uppercase text-[10px] font-bold text-green-600">{p.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'incidents' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {incidents.map(inc => (
                <div key={inc.id} className="p-5 border rounded-3xl bg-white shadow-sm hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`px-2 py-1 rounded-lg text-[10px] font-bold uppercase ${
                      inc.severity === 'high' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                    }`}>
                      {inc.severity}
                    </span>
                    <span className="text-[10px] text-gray-400">{new Date(inc.created_at).toLocaleDateString()}</span>
                  </div>
                  <h4 className="font-bold mb-2">{inc.title}</h4>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-3">{inc.description}</p>
                  <div className="pt-4 border-t flex justify-between items-center">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Estado: {inc.status}</span>
                    <button className="text-blue-600 font-bold text-sm hover:underline">Resolver</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm transition-all hover:shadow-lg">
    <div className={`p-3 rounded-2xl bg-opacity-10 w-fit mb-4 ${color.replace('text', 'bg')}`}>
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{title}</p>
    <h3 className="text-2xl font-black mt-1 text-gray-900">{value}</h3>
  </div>
);

const TabButton = ({ active, onClick, label, icon: Icon }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-5 text-sm font-bold transition-all border-b-2 ${
      active ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-400 hover:text-gray-600'
    }`}
  >
    <Icon className="w-4 h-4" /> {label}
  </button>
);

export default MarketplaceSection;
