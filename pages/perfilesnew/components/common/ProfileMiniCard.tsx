
import React from 'react';
import { User } from '../../types';
import { ICONS } from '../../constants';

interface ProfileMiniCardProps {
  user: User;
  onViewProfile: () => void;
  planName?: string;
}

export const ProfileMiniCard: React.FC<ProfileMiniCardProps> = ({ user, onViewProfile, planName }) => {
  return (
    <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between group hover:border-blue-100 transition-all">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img 
            src={user.avatar} 
            alt={user.name} 
            className="w-12 h-12 rounded-2xl object-cover border-2 border-white shadow-sm"
          />
          {user.isVerified && (
            <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full shadow-sm scale-75">
              {ICONS.Verified}
            </div>
          )}
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-gray-900 leading-tight truncate">{user.name}</h4>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-widest truncate">
              {planName || user.role}
            </span>
          </div>
        </div>
      </div>
      <button 
        onClick={onViewProfile}
        className="p-2.5 text-gray-300 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
      >
        {ICONS.Chevron}
      </button>
    </div>
  );
};
