import React from 'react';
import { useUserById } from './common/useUserById';
import { UserAvatar } from './common/Avatar';

interface ChatMessage {
  id: string;
  sender_id: string;
  body: string;
  created_at: string;
}

interface ChatMessageItemProps {
  message: ChatMessage;
}

export const ChatMessageItem: React.FC<ChatMessageItemProps> = ({ message }) => {
  const { user, loading } = useUserById(message.sender_id);

  return (
    <div className="flex items-start gap-3 mb-2">
      <UserAvatar user={user || { full_name: '?', email: '' }} size={36} />
      <div>
        <div className="font-semibold text-sm">{user?.full_name || 'Usuario'}</div>
        <div className="bg-slate-100 rounded-lg px-3 py-2 text-sm max-w-xs">{message.body}</div>
        <div className="text-xs text-slate-400 mt-1">{new Date(message.created_at).toLocaleString()}</div>
        {loading && <span className="text-xs text-slate-400">Cargando usuario...</span>}
      </div>
    </div>
  );
};
