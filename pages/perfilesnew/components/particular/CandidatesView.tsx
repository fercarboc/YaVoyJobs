
import React, { useState } from 'react';
import { ICONS, mockParticularJobs, mockCandidatesByJobId } from '../../constants';
import { JobStatus, Job, Candidate, UserRole } from '../../types';
import { applicationsService } from '../../../../services/applications.service';

interface CandidatesViewProps {
  initialJobId?: string;
  role: UserRole;
}

export const CandidatesView: React.FC<CandidatesViewProps> = ({ initialJobId, role }) => {
  const [jobs, setJobs] = useState<Job[]>(mockParticularJobs);
  const [candidatesData, setCandidatesData] = useState<Record<string, Candidate[]>>(mockCandidatesByJobId);
  const [selectedJobId, setSelectedJobId] = useState(initialJobId || mockParticularJobs[0]?.id);
  const [isProcessing, setIsProcessing] = useState<string | null>(null);

  const selectedJob = jobs.find(j => j.id === selectedJobId);
  const currentCandidates = candidatesData[selectedJobId] || [];

  const handleAccept = async (candidateId: string) => {
    if (!selectedJobId || !selectedJob) return;
    
    // Validación previa de seguridad
    if (selectedJob.status !== JobStatus.OPEN) {
      alert("Este anuncio ya no acepta candidatos.");
      return;
    }

    setIsProcessing(candidateId);
    
    try {
      // Llamada al servicio que simula el RPC atómico
      const success = await applicationsService.acceptApplication(candidateId, selectedJobId);
      
      if (success) {
        // Actualizamos estado local del Anuncio
        setJobs(prevJobs => prevJobs.map(j => 
          j.id === selectedJobId ? { ...j, status: JobStatus.IN_PROGRESS } : j
        ));

        // Actualizamos estado local de todas las candidaturas del anuncio (Atómico)
        setCandidatesData(prev => ({
          ...prev,
          [selectedJobId]: prev[selectedJobId].map(c => 
            c.id === candidateId 
              ? { ...c, status: 'ACCEPTED' as const } 
              : { ...c, status: 'REJECTED' as const }
          )
        }));
      }
    } catch (error) {
      console.error("Error RPC:", error);
      alert("Error al procesar la aceptación. El anuncio puede haber cambiado de estado.");
    } finally {
      setIsProcessing(null);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-500">
      {/* Sidebar: Lista de anuncios con postulantes */}
      <div className="lg:col-span-1 space-y-6">
        <h3 className="text-xl font-bold text-gray-900 px-1">Gestión de Candidatos</h3>
        <div className="bg-white rounded-[2rem] border border-gray-100 p-4 shadow-sm space-y-2 overflow-y-auto max-h-[700px]">
          {jobs.filter(j => j.status === JobStatus.OPEN || j.status === JobStatus.IN_PROGRESS).map(job => (
            <button
              key={job.id}
              onClick={() => setSelectedJobId(job.id)}
              className={`w-full text-left p-5 rounded-2xl border transition-all ${
                selectedJobId === job.id 
                ? 'border-blue-600 bg-blue-50/50 shadow-md' 
                : 'border-transparent hover:bg-gray-50'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${
                  job.status === JobStatus.OPEN ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'
                }`}>
                  {job.status === JobStatus.OPEN ? 'Recibiendo' : 'Contratado'}
                </span>
                <span className="text-xs font-bold text-gray-900">{job.budget}€</span>
              </div>
              <h4 className="font-bold text-sm text-gray-900 truncate leading-tight">{job.title}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase mt-2 flex items-center gap-1">
                {ICONS.Users} {candidatesData[job.id]?.length || 0} postulantes
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content: Candidatos del anuncio seleccionado */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm min-h-[500px]">
          {selectedJob ? (
            <>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8 border-b border-gray-50 pb-8">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 leading-tight">{selectedJob.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs font-bold text-gray-500 flex items-center gap-1">{ICONS.Location} {selectedJob.location}</span>
                    <span className="text-xs font-black text-blue-600 uppercase">{selectedJob.budget}€ ofrecidos</span>
                  </div>
                </div>
                {selectedJob.status === JobStatus.IN_PROGRESS && (
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center gap-3 animate-in slide-in-from-top-2">
                    <div className="bg-emerald-500 text-white p-1 rounded-full">{ICONS.Check}</div>
                    <div>
                       <p className="text-xs font-bold text-emerald-900">Anuncio Contratado</p>
                       <p className="text-[10px] text-emerald-600 font-medium">Ya hay un colaborador en marcha</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                {currentCandidates.length > 0 ? (
                  currentCandidates.map(candidate => (
                    <div 
                      key={candidate.id} 
                      className={`p-6 rounded-[2.5rem] border transition-all ${
                        candidate.status === 'ACCEPTED' ? 'border-emerald-200 bg-emerald-50/40 ring-2 ring-emerald-500/10' : 
                        candidate.status === 'REJECTED' ? 'opacity-40 grayscale bg-gray-50 border-gray-100' :
                        'border-gray-50 bg-gray-50/30 hover:bg-white hover:border-blue-100'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                          <div className="relative">
                            <img src={candidate.avatar} className="w-16 h-16 rounded-[1.5rem] object-cover shadow-sm" alt={candidate.name} />
                            {candidate.status === 'ACCEPTED' && (
                              <div className="absolute -top-2 -right-2 bg-emerald-500 text-white p-1 rounded-full border-2 border-white shadow-sm scale-75 animate-bounce">
                                {ICONS.Check}
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg leading-none mb-1.5">{candidate.name}</h4>
                            <div className="flex items-center gap-4">
                              <span className="text-amber-500 font-bold text-xs flex items-center gap-1">★ {candidate.rating}</span>
                              <span className="text-gray-400 text-[10px] font-black uppercase tracking-wider">{candidate.completedJobs} servicios</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {candidate.status === 'ACCEPTED' ? (
                            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-xs font-bold shadow-lg shadow-blue-600/20 flex items-center gap-2 hover:scale-105 transition-transform">
                              {ICONS.Messages} Contactar ahora
                            </button>
                          ) : candidate.status === 'REJECTED' ? (
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-4 py-2 border border-gray-100 rounded-xl">No seleccionado</span>
                          ) : (
                            <>
                              <button 
                                onClick={() => handleAccept(candidate.id)}
                                disabled={!!isProcessing || selectedJob.status !== JobStatus.OPEN}
                                className={`px-6 py-3 rounded-xl text-xs font-bold shadow-lg transition-all flex items-center gap-2 ${
                                  isProcessing === candidate.id 
                                    ? 'bg-gray-200 text-gray-400 cursor-wait' 
                                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20'
                                }`}
                              >
                                {isProcessing === candidate.id ? (
                                  <>
                                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Contratando...
                                  </>
                                ) : (
                                  <>Contratar</>
                                )}
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-200">
                      {ICONS.Users}
                    </div>
                    <p className="text-gray-400 font-bold">No hay candidatos para este anuncio</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="py-32 text-center">
              <p className="text-gray-400 font-medium">Selecciona un anuncio activo para gestionar sus postulantes</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
