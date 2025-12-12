import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icons } from './Icons';
import { AuthState, Notification } from '../types';
import { supabase } from '../services/supabase';

interface DashboardLayoutProps {
  children: React.ReactNode;
  auth: AuthState;
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, auth, onLogout }) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      fetchNotifications();
      
      const interval = setInterval(() => {
        fetchNotifications();
      }, 10000);
      
      return () => clearInterval(interval);
    }
  }, [auth.user?.id]);

  const fetchNotifications = async () => {
    if (!auth.user?.id) return;
    try {
      const { data, error } = await supabase
        .from('VoyNotifications')
        .select('*')
        .eq('user_id', auth.user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setNotifications(data || []);
      setUnreadCount((data || []).filter(n => !n.is_read).length);
    } catch (err) {
      console.error('Error fetching notifications:', err);
    }
  };

  const markAsRead = async (notificationId: string) => {
    try {
      const { error } = await supabase
        .from('VoyNotifications')
        .update({ is_read: true })
        .eq('id', notificationId);
      
      if (error) throw error;
      await fetchNotifications();
    } catch (err) {
      console.error('Error marking notification as read:', err);
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'WORKER': return 'Trabajador';
      case 'COMPANY': return 'Empresa';
      case 'PARTICULAR': return 'Particular';
      default: return role;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Dashboard Header - No Public Menu */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="bg-brand-500 w-10 h-10 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Y</span>
              </div>
              <span className="text-xl font-bold text-slate-900">YaVoy</span>
            </div>

            {/* Right Side - Notifications & Profile */}
            <div className="flex items-center gap-4">
              {/* Role Badge */}
              <div className="hidden sm:flex items-center gap-2 bg-brand-50 text-brand-700 px-3 py-1.5 rounded-full text-sm font-medium">
                {auth.user?.role === 'WORKER' && <Icons.User size={14} />}
                {auth.user?.role === 'COMPANY' && <Icons.Building size={14} />}
                {auth.user?.role === 'PARTICULAR' && <Icons.Heart size={14} />}
                {getRoleLabel(auth.user?.role || '')}
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsNotificationsOpen(!isNotificationsOpen);
                    setIsProfileOpen(false);
                  }}
                  className="relative p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <Icons.MessageCircle size={20} className="text-slate-600" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                {isNotificationsOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-gray-100">
                      <h3 className="font-semibold text-slate-900">Notificaciones</h3>
                    </div>
                    {notifications.length === 0 ? (
                      <div className="p-4 text-center text-gray-500 text-sm">
                        No tienes notificaciones
                      </div>
                    ) : (
                      <div className="divide-y divide-gray-100">
                        {notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`p-4 hover:bg-gray-50 cursor-pointer transition ${
                              !notif.is_read ? 'bg-blue-50' : ''
                            }`}
                            onClick={() => markAsRead(notif.id)}
                          >
                            <h4 className="font-medium text-sm text-slate-900">{notif.title}</h4>
                            <p className="text-xs text-slate-600 mt-1">{notif.message}</p>
                            <p className="text-xs text-slate-400 mt-2">
                              {new Date(notif.created_at).toLocaleDateString('es-ES')}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="relative">
                <button
                  onClick={() => {
                    setIsProfileOpen(!isProfileOpen);
                    setIsNotificationsOpen(false);
                  }}
                  className="flex items-center gap-2 hover:bg-gray-100 rounded-full p-1.5 pr-3 transition"
                >
                  <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center text-white font-bold">
                    {auth.user?.full_name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <Icons.ChevronDown size={16} className="text-slate-600" />
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200">
                    <div className="p-4 border-b border-gray-100">
                      <p className="font-semibold text-slate-900">{auth.user?.full_name}</p>
                      <p className="text-sm text-slate-500">{auth.user?.email}</p>
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => {
                          onLogout();
                          setIsProfileOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition flex items-center gap-2"
                      >
                        <Icons.LogIn size={16} />
                        Cerrar Sesión
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
};
