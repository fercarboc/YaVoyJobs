
import React from 'react';
import { User } from '../../types';
import { ICONS } from '../../constants';

interface ProfileMiniCardProps {
  user: User;
  onViewProfile: () => void;
  planName: string;
}

export const ProfileMiniCard: React.FC<ProfileMiniCardProps> = ({ user, onViewProfile, planName }) => {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between group">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm"
          />
          {user.isVerified && (
            <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-sm scale-75">
              {ICONS.Verified}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-gray-900 leading-tight">{user.name}</h4>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-widest">
              {planName}
            </span>
          </div>
        </div>
      </div>
      <button 
        onClick={onViewProfile}
        className="p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
        title="Ver Perfil Completo"
      >
        {ICONS.Chevron}
      </button>
    </div>
  );
};
