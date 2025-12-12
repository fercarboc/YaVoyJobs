import { useState, useEffect, ReactNode } from 'react';
import { Icons } from './Icons';
import { User } from '../types';
import { supabase } from '../services/supabase';

interface DashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  dashboardContent: ReactNode;
}

export const DashboardModal = ({ isOpen, onClose, user, dashboardContent }: DashboardModalProps) => {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    if (isOpen && user) {
      fetchNotifications();
    }
  }, [isOpen, user]);

  const fetchNotifications = async () => {
    try {
      const { data, error } = await supabase
        .from('VoyNotifications')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);
      
      if (error) throw error;
      setNotifications(data || []);
      setUnreadCount((data || []).filter(n => !n.is_read).length);
    } catch (err) {
      console.error('Error fetching notifications:', err);
    }
  };

  const markAllAsRead = async () => {
    try {
      const unreadIds = notifications.filter(n => !n.is_read).map(n => n.id);
      
      if (unreadIds.length === 0) return;

      const { error } = await supabase
        .from('VoyNotifications')
        .update({ is_read: true })
        .in('id', unreadIds);
      
      if (error) throw error;
      
      // Actualizar el estado local
      setNotifications(notifications.map(n => ({ ...n, is_read: true })));
      setUnreadCount(0);
    } catch (err) {
      console.error('Error marking notifications as read:', err);
    }
  };

  const handleNotificationsToggle = () => {
    const newState = !showNotifications;
    setShowNotifications(newState);
    
    // Si se está abriendo el dropdown, marcar todas como leídas
    if (newState) {
      markAllAsRead();
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onClose();
    window.location.href = '/';
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'WORKER': return 'Trabajador';
      case 'COMPANY': return 'Empresa';
      case 'PARTICULAR': return 'Particular';
      default: return role;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-[95vw] max-h-[95vh] shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-brand-600 font-black text-xl">Y</span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Panel de {getRoleLabel(user.role)}</h2>
              <p className="text-white/80 text-sm">{user.email}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={handleNotificationsToggle}
                className="relative p-2 hover:bg-white/10 rounded-lg transition"
              >
                <Icons.MessageCircle size={20} className="text-white" />
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </button>

              {showNotifications && (
                <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                  <div className="p-4 border-b border-gray-100">
                    <h3 className="font-bold text-slate-900">Notificaciones</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center text-slate-400">
                        <Icons.MessageCircle size={48} className="mx-auto mb-3 opacity-50" />
                        <p>No tienes notificaciones</p>
                      </div>
                    ) : (
                      notifications.map(notif => (
                        <div key={notif.id} className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${!notif.is_read ? 'bg-blue-50' : ''}`}>
                          <p className="text-sm text-slate-700">{notif.message}</p>
                          <p className="text-xs text-slate-400 mt-1">{new Date(notif.created_at).toLocaleDateString('es-ES')}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-brand-600 font-bold text-sm">
                    {user.email?.[0].toUpperCase()}
                  </span>
                </div>
                <Icons.ChevronDown size={16} className="text-white" />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 top-12 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                  <div className="p-4 border-b border-gray-100">
                    <p className="font-semibold text-slate-900">{user.full_name || user.email}</p>
                    <p className="text-sm text-slate-500">{user.email}</p>
                    <div className="mt-2 inline-block px-3 py-1 bg-brand-100 text-brand-700 text-xs font-bold rounded-full">
                      {getRoleLabel(user.role)}
                    </div>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 transition flex items-center gap-2"
                  >
                    <Icons.LogIn size={16} />
                    Cerrar Sesión
                  </button>
                </div>
              )}
            </div>

            {/* Close Button */}
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              <Icons.X size={24} className="text-white" />
            </button>
          </div>
        </div>

        {/* Modal Content - Scrollable Dashboard */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {dashboardContent}
        </div>
      </div>
    </div>
  );
};
