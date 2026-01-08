
import React from 'react';
import { User } from '../../types';
import { ICONS, mockParticularJobs, mockParticularStats } from '../../constants';
import { ProfileMiniCard } from '../common/ProfileMiniCard';

interface ClientDashboardProps {
  user: User;
  onViewProfile: () => void;
  onCreateAd: () => void;
  onViewAds: () => void;
  onViewCandidates: (id: string) => void;
  onViewMessages: () => void;
}

export const ClientDashboard: React.FC<ClientDashboardProps> = ({ 
  user, 
  onViewProfile, 
  onCreateAd, 
  onViewAds, 
  onViewCandidates,
  onViewMessages
}) => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">¡Hola, {user.name.split(' ')[0]}!</h2>
          <p className="text-gray-500 mt-1">Este es el resumen de tu actividad como Particular.</p>
        </div>
        <button onClick={onCreateAd} className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-all flex items-center gap-2">
          {ICONS.Add} Publicar anuncio
        </button>
      </div>

      {/* KPI Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            {ICONS.Jobs}
          </div>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Anuncios activos</p>
          <p className="text-2xl font-black text-gray-900">{mockParticularStats.activeAds}</p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
            {ICONS.Users}
          </div>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Candidatos mes</p>
          <p className="text-2xl font-black text-gray-900">{mockParticularStats.candidatesThisMonth}</p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
            {ICONS.Plans}
          </div>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Plan actual</p>
          <p className="text-sm font-black text-gray-900 truncate">{mockParticularStats.currentPlan}</p>
        </div>
        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
            {ICONS.Payments}
          </div>
          <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Gasto estimado</p>
          <p className="text-2xl font-black text-gray-900">{mockParticularStats.estimatedSpent.toFixed(2)}€</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Actividad reciente</h3>
              <button onClick={onViewAds} className="text-xs font-bold text-blue-600 hover:underline">Ver todo</button>
            </div>
            <div className="space-y-4">
              {mockParticularJobs.slice(0, 2).map(job => (
                <div key={job.id} className="flex items-center gap-4 p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-colors">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${job.id}`} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 truncate">{job.title}</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">{job.category} • {job.candidateCount} postulantes</p>
                  </div>
                  <button onClick={() => onViewCandidates(job.id)} className="text-blue-600 p-2">{ICONS.Chevron}</button>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button onClick={onViewAds} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3 hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">{ICONS.List}</div>
                <span className="text-xs font-bold text-gray-700">Gestionar anuncios</span>
             </button>
             <button onClick={onViewMessages} className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-3 hover:border-blue-200 transition-all">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">{ICONS.Messages}</div>
                <span className="text-xs font-bold text-gray-700">Mensajes activos</span>
             </button>
          </div>
        </div>

        <div className="space-y-6">
          <ProfileMiniCard 
            user={user} 
            onViewProfile={onViewProfile}
            planName={mockParticularStats.currentPlan}
          />

          <div className="bg-gray-900 text-white p-8 rounded-[2.5rem] shadow-xl relative overflow-hidden">
             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                   <div className="text-amber-500">{ICONS.Verified}</div>
                   <h4 className="font-bold text-sm uppercase tracking-widest">Estado</h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">Tu perfil está verificado. Esto te ayuda a atraer mejores profesionales.</p>
                <button onClick={onViewProfile} className="w-full bg-white/10 py-3 rounded-xl text-xs font-bold hover:bg-white/20 transition-all">Ver Seguridad</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
