
import React from 'react';
import { ICONS } from '../constants';
import { User } from '../types';
import { ProfileMiniCard } from './common/ProfileMiniCard';

interface ProviderDashboardProps {
  user: User;
  onViewProfile: () => void;
  planName: string;
  daysLeft: number;
}

export const ProviderDashboard: React.FC<ProviderDashboardProps> = ({ 
  user, 
  onViewProfile, 
  planName, 
  daysLeft 
}) => {
  const stats = [
    { label: 'Productos activos', value: '42', icon: ICONS.Catalog, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Pedidos del mes', value: '156', icon: ICONS.Orders, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Mensajes sin leer', value: '12', icon: ICONS.Messages, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Plan activo', value: planName, sub: `${daysLeft} días restantes`, icon: ICONS.Plans, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Panel de Proveedor</h2>
          <p className="text-gray-500 mt-1">Gestión de catálogo y pedidos de marketplace</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            {stat.sub && <p className="text-xs text-indigo-600 font-semibold mt-1">{stat.sub}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Actividad reciente</h3>
              <button className="text-sm font-bold text-blue-600 hover:underline">Ver reporte</button>
            </div>
            <div className="space-y-6">
               {[
                 { title: 'Nuevo pedido #ORD-1029', time: 'hace 5 min', desc: 'Cliente: Mario R. • 45,90 €', icon: ICONS.Orders, iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
                 { title: 'Stock bajo: Pintura Blanca 5L', time: 'hace 2h', desc: 'Quedan solo 2 unidades.', icon: ICONS.Package, iconBg: 'bg-amber-50', iconColor: 'text-amber-600' },
                 { title: 'Mensaje de Lucía B.', time: 'hace 4h', desc: 'Consulta sobre envío.', icon: ICONS.Messages, iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 group cursor-pointer">
                   <div className={`w-12 h-12 ${item.iconBg} ${item.iconColor} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                   </div>
                   <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                        <p className="text-[9px] text-gray-400 font-bold uppercase">{item.time}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
           <ProfileMiniCard 
             user={user} 
             onViewProfile={onViewProfile} 
             planName={planName} 
           />
           <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-xl shadow-blue-600/20">
              <div className="relative z-10">
                <span className="bg-white/20 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">Sugerencia</span>
                <h4 className="text-2xl font-black mb-2">Impulsa ventas</h4>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">Hemos detectado alta demanda en tus kits de herramientas.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold text-sm shadow-xl hover:scale-105 transition-transform">Crear Campaña</button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};
