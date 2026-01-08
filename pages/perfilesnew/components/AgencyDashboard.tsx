
import React from 'react';
import { ICONS } from '../constants';
import { AdStatus, RealEstateOperation, User } from '../types';
import { ProfileMiniCard } from './common/ProfileMiniCard';

interface AgencyDashboardProps {
  planName: string;
  daysLeft: number;
  onManage: () => void;
  user: User;
  onViewProfile: () => void;
}

export const AgencyDashboard: React.FC<AgencyDashboardProps> = ({ 
  planName, 
  daysLeft, 
  onManage,
  user,
  onViewProfile
}) => {
  const stats = [
    { label: 'Anuncios activos', value: '14', icon: ICONS.RealEstate, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Leads / Interesados', value: '38', icon: ICONS.Trending, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Mensajes sin leer', value: '5', icon: ICONS.Messages, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Plan activo', value: planName, sub: `${daysLeft} días restantes`, icon: ICONS.Plans, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  const recentAds = [
    { id: '1', title: 'Piso reformado Chamberí', location: 'Madrid', price: 1550, status: AdStatus.AVAILABLE, operation: RealEstateOperation.RENT },
    { id: '2', title: 'Local comercial Gran Vía', location: 'Madrid', price: 240000, status: AdStatus.RESERVED, operation: RealEstateOperation.SALE },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Panel de Agencia</h2>
          <p className="text-gray-500 mt-1">Control de activos inmobiliarios y clientes potenciales</p>
        </div>
        <button onClick={onManage} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
          {ICONS.RealEstate} Gestionar Cartera
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-gray-900">{stat.value}</p>
            {stat.sub && <p className="text-xs text-indigo-600 font-semibold mt-1">{stat.sub}</p>}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Actividad de inmuebles</h3>
            <div className="space-y-4">
               {recentAds.map(ad => (
                 <div key={ad.id} className="flex items-center justify-between p-4 rounded-2xl border border-gray-50">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                          {/* // FIX: Property 'Building' does not exist on ICONS, using 'RealEstate' which holds the Building icon */}
                          {ICONS.RealEstate}
                       </div>
                       <div>
                          <p className="font-bold text-sm text-gray-900">{ad.title}</p>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">{ad.location} • {ad.price}€</p>
                       </div>
                    </div>
                    <span className="text-[9px] font-black text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded-full">Activo</span>
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
          <div className="bg-indigo-600 text-white p-8 rounded-[2.5rem] shadow-xl">
             <h4 className="font-bold mb-2">Resumen de Leads</h4>
             <p className="text-indigo-100 text-xs leading-relaxed">Has recibido 12 nuevas solicitudes de información en las últimas 24 horas.</p>
             <button onClick={onManage} className="w-full mt-6 bg-white/10 py-3 rounded-xl text-xs font-bold hover:bg-white/20 transition-all border border-white/10">Ver todos</button>
          </div>
        </div>
      </div>
    </div>
  );
};
