import React from 'react';
import { Icons } from '../Icons';
import { Notification } from '../../types';

type Props = {
  open: boolean;
  onClose: () => void;
  notifications: Notification[];
  onMarkAsRead: (notificationId: string) => void;
};

export default function NotificationsDropdown({
  open,
  onClose,
  notifications,
  onMarkAsRead,
}: Props) {
  if (!open) return null;

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
      <div className="p-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
        <h3 className="font-bold text-slate-900">Notificaciones</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <Icons.X size={18} />
        </button>
      </div>

      {notifications.length > 0 ? (
        <div className="divide-y divide-gray-100">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              onClick={() => onMarkAsRead(notif.id)}
              className={`p-4 cursor-pointer transition ${
                notif.is_read ? 'bg-white hover:bg-gray-50' : 'bg-blue-50 hover:bg-blue-100'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <p
                  className={`font-medium text-sm ${
                    notif.is_read ? 'text-slate-700' : 'text-slate-900 font-bold'
                  }`}
                >
                  {notif.title}
                </p>
                {!notif.is_read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1" />}
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">{notif.message}</p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(notif.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-8 text-center text-gray-400 text-sm">No tienes notificaciones</div>
      )}
    </div>
  );
}
