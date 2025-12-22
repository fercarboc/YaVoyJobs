import React from 'react';
import { useUserById } from './common/useUserById';
import { UserAvatar } from './common/Avatar';

interface CandidateCardProps {
  candidate: {
    helper_user_id: string;
    message?: string;
    // ...otros campos
  };
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const { user, loading } = useUserById(candidate.helper_user_id);

  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 border mb-2">
      <UserAvatar user={user || { full_name: '?', email: '' }} size={40} />
      <div className="flex-1">
        <div className="font-bold text-base">{user?.full_name || 'Candidato'}</div>
        {candidate.message && <div className="text-slate-600 text-sm">{candidate.message}</div>}
        {loading && <span className="text-xs text-slate-400">Cargando candidato...</span>}
      </div>
    </div>
  );
};
