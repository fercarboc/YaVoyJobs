import { useState, useEffect, ReactNode } from 'react';
import { Modal } from './common/Modal';
import { Button } from './common/Button';
import { Icons } from './Icons';
import { User, UserRole } from '../types';
import { supabase } from '../services/supabase';
import { Perfil } from './Perfil';
import { ChatPanel } from './ChatPanel';
import { WalletPanel } from './WalletPanel';
import { UserAvatar } from './common/Avatar';

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
  const [activeTab, setActiveTab] = useState<'panel' | 'chat' | 'perfil' | 'wallet'>('panel');

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
      setUnreadCount((data || []).filter((n) => !n.is_read).length);
    } catch (err) {
      console.error('Error fetching notifications:', err);
    }
  };

  const markAllAsRead = async () => {
    try {
      const unreadIds = notifications.filter((n) => !n.is_read).map((n) => n.id);
      if (unreadIds.length === 0) return;

      const { error } = await supabase
        .from('VoyNotifications')
        .update({ is_read: true })
        .in('id', unreadIds);

      if (error) throw error;

      setNotifications(notifications.map((n) => ({ ...n, is_read: true })));
      setUnreadCount(0);
    } catch (err) {
      console.error('Error marking notifications as read:', err);
    }
  };

  const handleNotificationsToggle = () => {
    const newState = !showNotifications;
    setShowNotifications(newState);
    if (newState) markAllAsRead();
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    onClose();
    window.location.href = '/';
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case UserRole.HELPER:
      case 'HELPER':
        return 'Trabajador';
      case UserRole.COMPANY:
      case 'COMPANY':
        return 'Empresa';
      case UserRole.PARTICULAR:
      case 'PARTICULAR':
        return 'Particular';
      case UserRole.ADMIN:
      case 'ADMIN':
        return 'Admin';
      default:
        return role;
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title={undefined}
      width={1180}
      minWidth={1180}
      maxWidth={1180}
      height="90vh"
      minHeight="90vh"
      maxHeight="90vh"
      padding={0}
    >
      <div className="flex flex-col h-full max-h-[92vh] bg-white rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="flex flex-col border-b border-slate-200 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <UserAvatar user={user} size={48} />
              <div>
                <p className="text-sm opacity-80">Panel de {getRoleLabel(user.role)}</p>
                <p className="text-lg font-bold leading-tight">{user.full_name || user.email}</p>
                <p className="text-xs opacity-80">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Button
                  onClick={handleNotificationsToggle}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    padding: '8px 10px',
                    borderRadius: 12,
                    boxShadow: 'none',
                  }}
                >
                  <Icons.Bell size={18} className="text-white" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </Button>
                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                      <h3 className="font-bold text-slate-900">Notificaciones</h3>
                      <button
                        className="text-xs text-brand-600 hover:underline"
                        onClick={markAllAsRead}
                      >
                        Marcar leídas
                      </button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-slate-400">
                          <Icons.MessageCircle size={40} className="mx-auto mb-2 opacity-50" />
                          <p>No tienes notificaciones</p>
                        </div>
                      ) : (
                        notifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`p-4 border-b border-gray-100 hover:bg-gray-50 ${
                              !notif.is_read ? 'bg-blue-50/60' : ''
                            }`}
                          >
                            <p className="text-sm text-slate-800">{notif.message}</p>
                            <p className="text-xs text-slate-400 mt-1">
                              {new Date(notif.created_at).toLocaleString('es-ES')}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <Button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    padding: '8px 10px',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    boxShadow: 'none',
                  }}
                >
                  <UserAvatar user={user} size={32} />
                  <Icons.ChevronDown size={16} className="text-white" />
                </Button>
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
                      className="w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                    >
                      <Icons.LogOut size={16} />
                      Cerrar sesión
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-white/90 hover:text-white rounded-full p-2"
                aria-label="Cerrar"
              >
                <Icons.X size={20} />
              </button>
            </div>
          </div>
          {/* Tabs: Panel, Chat, Perfil, Wallet */}
          <div className="flex gap-2 px-6 pt-2 pb-1">
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold transition-colors ${activeTab === 'panel' ? 'bg-white text-brand-600' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
              onClick={() => setActiveTab('panel')}
            >
              Panel
            </button>
            {(user.role === UserRole.COMPANY || user.role === UserRole.HELPER) && (
              <button
                className={`px-4 py-2 rounded-t-lg font-semibold transition-colors ${activeTab === 'chat' ? 'bg-white text-brand-600' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
                onClick={() => setActiveTab('chat')}
              >
                Chat
              </button>
            )}
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold transition-colors ${activeTab === 'perfil' ? 'bg-white text-brand-600' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
              onClick={() => setActiveTab('perfil')}
            >
              Perfil
            </button>
            <button
              className={`px-4 py-2 rounded-t-lg font-semibold transition-colors ${activeTab === 'wallet' ? 'bg-white text-brand-600' : 'bg-transparent text-white/80 hover:bg-white/10'}`}
              onClick={() => setActiveTab('wallet')}
            >
              Wallet
            </button>
          </div>
        </div>
        {/* Body: full width, tabs content */}
            <main className="flex-1 overflow-y-auto p-6 bg-white">
              {activeTab === 'panel' && dashboardContent}
              {activeTab === 'chat' && <ChatPanel />}
              {activeTab === 'perfil' && <Perfil user={user} />}
              {activeTab === 'wallet' && <WalletPanel />}
        </main>
      </div>
    </Modal>
  );
};
