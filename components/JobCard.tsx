import React from 'react';
import { useUserById } from './common/useUserById';
import { UserAvatar } from './common/Avatar';

interface JobCardProps {
  job: {
    id: string;
    title: string;
    description: string;
    creator_user_id: string;
    // ...otros campos
  };
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { user: creator, loading } = useUserById(job.creator_user_id);

  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 border mb-4">
      <UserAvatar user={creator || { full_name: '?', email: '' }} size={48} />
      <div className="flex-1">
        <div className="font-bold text-lg">{job.title}</div>
        <div className="text-slate-600 text-sm mb-1">{job.description}</div>
        {loading && <span className="text-xs text-slate-400">Cargando usuario...</span>}
      </div>
    </div>
  );
};
