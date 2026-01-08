
import React from 'react';
import { Job, UserRole, JobType } from '../types';
import { ICONS } from '../constants';

interface JobCardProps {
  job: Job;
  role: UserRole;
  onView: (id: string) => void;
  onApply?: (id: string) => void;
  onManage?: (id: string) => void;
}

export const JobCard: React.FC<JobCardProps> = ({ job, role, onView, onApply, onManage }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-blue-200 hover:shadow-md transition-all group cursor-pointer" onClick={() => onView(job.id)}>
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          {job.type === JobType.MICRO ? (
            <span className="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider">
              {ICONS.Micro} Micro
            </span>
          ) : (
            <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              Anuncio
            </span>
          )}
          <span className="text-xs text-gray-400">• hace 2h</span>
        </div>
        <span className="text-lg font-bold text-gray-900">{job.budget}€</span>
      </div>

      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{job.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
        {job.description}
      </p>

      <div className="flex flex-wrap gap-y-2 gap-x-4 mb-5 border-t border-gray-50 pt-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="text-gray-400">{ICONS.Location}</span>
          {job.location}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="text-gray-400">{ICONS.Clock}</span>
          {job.estimatedDuration}
        </div>
      </div>

      <div className="flex items-center justify-between">
        {role === UserRole.WORKER ? (
          <button 
            onClick={(e) => { e.stopPropagation(); onApply?.(job.id); }}
            className="w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm"
          >
            Postularme
          </button>
        ) : (
          <div className="flex items-center justify-between w-full">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img src={`https://picsum.photos/50/50?random=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-[10px] font-bold text-blue-600">
                +{job.candidateCount || 0}
              </div>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); onManage?.(job.id); }}
              className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-1"
            >
              Gestionar {ICONS.Chevron}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
