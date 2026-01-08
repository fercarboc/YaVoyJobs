
import React, { useState } from 'react';
import { ICONS, mockParticularJobs } from '../../constants';
import { JobStatus, Job } from '../../types';

export const MyAdsView: React.FC<{ onViewCandidates: (id: string) => void }> = ({ onViewCandidates }) => {
  const [activeTab, setActiveTab] = useState<'ACTIVOS' | 'TERMINADOS' | 'BORRADORES'>('ACTIVOS');
  const [jobs, setJobs] = useState<Job[]>(mockParticularJobs);

  const filteredJobs = jobs.filter(job => {
    if (activeTab === 'ACTIVOS') return job.status === JobStatus.OPEN || job.status === JobStatus.IN_PROGRESS;
    if (activeTab === 'TERMINADOS') return job.status === JobStatus.COMPLETED || job.status === JobStatus.CLOSED;
    if (activeTab === 'BORRADORES') return job.status === JobStatus.DRAFT;
    return false;
  });

  const getStatusBadge = (status: JobStatus) => {
    switch (status) {
      case JobStatus.OPEN: return <span className="bg-blue-50 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Publicado</span>;
      case JobStatus.IN_PROGRESS: return <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">En curso</span>;
      case JobStatus.COMPLETED: return <span className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Finalizado</span>;
      case JobStatus.DRAFT: return <span className="bg-amber-50 text-amber-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Borrador</span>;
      default: return null;
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este anuncio?')) {
      setJobs(jobs.filter(j => j.id !== id));
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Mis anuncios</h2>
          <p className="text-sm text-gray-500">Gestiona tus ofertas de microempleo y colaboraciones</p>
        </div>
      </div>

      <div className="flex p-1 bg-gray-100 rounded-xl w-fit">
        {['ACTIVOS', 'TERMINADOS', 'BORRADORES'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${activeTab === tab ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
          >
            {tab.charAt(0) + tab.slice(1).toLowerCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
              {/* Decorative side bar */}
              <div className={`absolute top-0 left-0 bottom-0 w-1 ${
                job.status === JobStatus.OPEN ? 'bg-blue-500' : 
                job.status === JobStatus.IN_PROGRESS ? 'bg-emerald-500' : 
                'bg-gray-300'
              }`} />

              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap items-center gap-2">
                  {getStatusBadge(job.status)}
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{job.category}</span>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-gray-900">{job.budget}€</p>
                </div>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-6 line-clamp-2 leading-relaxed">{job.description}</p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
                <span className="flex items-center gap-1.5">{ICONS.Location} {job.location}</span>
                <span className="flex items-center gap-1.5 text-blue-600">{ICONS.Users} {job.candidateCount} postulantes</span>
              </div>

              <div className="flex gap-3 pt-6 border-t border-gray-50">
                <button 
                  onClick={() => onViewCandidates(job.id)}
                  className="flex-[2] bg-blue-600 text-white py-3 rounded-xl text-xs font-bold shadow-lg shadow-blue-600/10 hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
                >
                  {ICONS.Eye} Ver candidatos
                </button>
                <button className="flex-1 bg-gray-50 text-gray-600 py-3 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors">
                  Editar
                </button>
                <button 
                  onClick={() => handleDelete(job.id)}
                  className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors"
                >
                  {ICONS.Alert}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-16 text-center bg-white rounded-[2.5rem] border-2 border-gray-100 border-dashed">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300">
              {ICONS.Jobs}
            </div>
            <h3 className="text-gray-400 font-bold text-lg">No hay anuncios aquí</h3>
            <p className="text-gray-400 text-sm mt-1">Empieza publicando tu primer microtrabajo</p>
          </div>
        )}
      </div>
    </div>
  );
};
