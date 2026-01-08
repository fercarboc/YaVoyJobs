
import React from 'react';
import { User } from '../../types';
import { ICONS } from '../../constants';
import { ProfileMiniCard } from '../common/ProfileMiniCard';

interface WorkerDashboardProps {
  user: User;
  onViewProfile: () => void;
  onSearchJobs: () => void;
}

export const WorkerDashboard: React.FC<WorkerDashboardProps> = ({ user, onViewProfile, onSearchJobs }) => {
  const stats = [
    { label: 'Ganado este mes', value: '452€', icon: ICONS.Payments, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Trabajos hechos', value: '24', icon: ICONS.Check, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Valoración media', value: '4.9', icon: ICONS.Star, color: 'text-amber-500', bg: 'bg-amber-50' },
    { label: 'Candidaturas', value: '8', icon: ICONS.Users, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">Panel de Colaborador</h2>
          <p className="text-gray-500 mt-1">Gestiona tu actividad y nuevas oportunidades</p>
        </div>
        <button onClick={onSearchJobs} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
          {ICONS.Search} Buscar microempleos
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
            <h3 className="text-xl font-bold text-gray-900 mb-6">Próximos servicios</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-blue-600">{ICONS.Clock}</div>
                   <div>
                      <p className="font-bold text-gray-900 text-sm">Montaje Estantería</p>
                      <p className="text-xs text-blue-600 font-bold">Mañana, 10:30h</p>
                   </div>
                </div>
                <button className="text-[10px] font-black uppercase text-blue-600">Ver chat</button>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <ProfileMiniCard user={user} onViewProfile={onViewProfile} planName="Colaborador PRO" />
          <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl">
             <h4 className="font-bold mb-2">Consejo YaVoy</h4>
             <p className="text-gray-400 text-xs leading-relaxed">Completa 5 microempleos con 5 estrellas este mes para obtener el badge "Top Rated".</p>
          </div>
        </div>
      </div>
    </div>
  );
};
