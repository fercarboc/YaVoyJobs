
import React from 'react';
import { User } from '../../types';
import { ICONS } from '../../constants';
import { ProfileMiniCard } from '../common/ProfileMiniCard';

interface CompanyDashboardProps {
  user: User;
  onViewProfile: () => void;
  onCreateAd: () => void;
}

export const CompanyDashboard: React.FC<CompanyDashboardProps> = ({ user, onViewProfile, onCreateAd }) => {
  const stats = [
    { label: 'Anuncios publicados', value: '5', icon: ICONS.Jobs, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Candidatos totales', value: '42', icon: ICONS.Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Presupuesto mes', value: '350€', icon: ICONS.Payments, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'Plan activo', value: 'Empresa Básico', icon: ICONS.Plans, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Panel Corporativo</h2>
          <p className="text-gray-500 mt-1">Gestión de recursos y colaboraciones externas</p>
        </div>
        <button onClick={onCreateAd} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
          {ICONS.Add} Nuevo anuncio
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
            <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
              {stat.icon}
            </div>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-2xl font-black text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
           <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Últimas candidaturas</h3>
              <div className="space-y-4">
                 {[1, 2].map(i => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-gray-50">
                       <div className="flex items-center gap-3">
                          <img src={`https://picsum.photos/50/50?random=${i+20}`} className="w-10 h-10 rounded-xl" />
                          <div>
                             <p className="font-bold text-sm text-gray-900">Candidato #{i+100}</p>
                             <p className="text-[10px] text-gray-400 font-bold uppercase">Anuncio: Reparto urgente</p>
                          </div>
                       </div>
                       <button className="text-blue-600 text-xs font-bold">Ver perfil</button>
                    </div>
                 ))}
              </div>
           </div>
        </div>
        <div className="space-y-6">
           <ProfileMiniCard user={user} onViewProfile={onViewProfile} planName="Cuenta Empresa" />
           <div className="bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl shadow-blue-600/10">
              <h4 className="font-bold mb-2">Facturación</h4>
              <p className="text-blue-100 text-xs leading-relaxed">Tu próxima factura se emitirá el día 1 de cada mes. Recuerda revisar tus datos fiscales.</p>
           </div>
        </div>
      </div>
    </div>
  );
};
