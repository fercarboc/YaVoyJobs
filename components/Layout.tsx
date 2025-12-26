import React, { useState, useEffect } from 'react';
import { theme } from '../theme';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Icons } from './Icons';
import { UserRole, AuthState, Notification } from '../types';
import { supabase } from '../services/supabase';
import { Modal } from './common/Modal';
import { Input } from './common/Input';
import { Button } from './common/Button';
import { UserAvatar } from './common/Avatar';
import MiniCartButton from './marketplace/MiniCartButton';
import MiniCartDrawer from './marketplace/MiniCartDrawer';

interface LayoutProps {
  children: React.ReactNode;
  auth: AuthState;
  onLogout: () => void;
  onOpenDashboard?: () => void; // si lo usas en App.tsx, lo respetamos
}

export const Layout: React.FC<LayoutProps> = ({ children, auth, onLogout, onOpenDashboard }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [miniCartOpen, setMiniCartOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [editForm, setEditForm] = useState({
    full_name: auth.user?.full_name || '',
    phone: '',
    city: auth.user?.city || '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setMiniCartOpen(true);
    window.addEventListener('openMiniCart', handler);
    return () => window.removeEventListener('openMiniCart', handler);
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      fetchNotifications();
      const interval = setInterval(() => fetchNotifications(), 10000);
      return () => clearInterval(interval);
    }
  }, [auth.isAuthenticated, auth.user?.id]);

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
      setUnreadCount((data || []).filter((n: any) => !n.is_read).length);
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

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: passwordForm.newPassword,
      });

      if (error) throw error;
      alert('Contraseña actualizada exitosamente');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setIsChangePasswordOpen(false);
    } catch (err: any) {
      alert('Error al cambiar contraseña: ' + err.message);
    }
  };

  const handleEditProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.user?.id) return;

    try {
      const { error } = await supabase
        .from('VoyUsers')
        .update({
          full_name: editForm.full_name,
          city: editForm.city,
        })
        .eq('id', auth.user.id);

      if (error) throw error;
      alert('Perfil actualizado exitosamente');
      setIsEditProfileOpen(false);
      window.location.reload();
    } catch (err: any) {
      alert('Error al actualizar perfil: ' + err.message);
    }
  };

  const getDashboardLink = () => {
    if (!auth.user) return '/';
    switch (auth.user.role) {
      case UserRole.ADMIN:
        return '/admin';
      default:
        return '/panel';
    }
  };

 const goToDashboard = () => {
  const to = getDashboardLink();

  // Solo usar onOpenDashboard si estás en la landing
  if (onOpenDashboard && location.pathname === "/") {
    onOpenDashboard();
    return;
  }

  navigate(to);
};



  const handleScrollTo = (id: string) => {
    setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: theme.colors.background,
        fontFamily: theme.font.family,
        color: theme.colors.text,
      }}
    >
      <nav className="sticky top-0 z-50 shadow-lg" style={{ background: theme.colors.primary }}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center h-16 gap-4">
            {/* Logo */}
            <div className="flex-none">
              <button
                type="button"
                className="flex items-center cursor-pointer"
                onClick={() => navigate('/')}
              >
                <img src="/yavoy.png" alt="YaVoy Logo" className="h-10 w-auto object-contain" />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-start items-center space-x-3 min-w-0">
              <button
                onClick={() => handleScrollTo('como-funciona')}
                className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
              >
                Cómo funciona
              </button>
              <button
  onClick={() => handleScrollTo('sectores')}
  className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
>
  Sectores
</button>
              <button
                onClick={() => handleScrollTo('servicios')}
                className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
              >
                Particulares
              </button>
              <button
                onClick={() => handleScrollTo('empresas')}
                className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
              >
                Empresas
              </button>
              <button
                onClick={() => handleScrollTo('opiniones')}
                className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
              >
                Opiniones
              </button>
              <button
                onClick={() => handleScrollTo('barrios')}
                className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
              >
                Barrios
              </button>
              <button
                onClick={() => handleScrollTo('incentivos')}
                className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
              >
                Incentivos
              </button>
              <button
                onClick={() => handleScrollTo('contacto')}
                className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
              >
                Contacto
              </button>

              {/* Marketplace pill + badge */}
              <Link
                to="/marketplace"
                className="flex items-center gap-1 text-slate-900 bg-yellow-300 hover:bg-yellow-400 hover:text-slate-950 font-semibold rounded-full px-3 py-1 text-[12px] transition-all border border-yellow-400 shadow-sm relative group whitespace-nowrap"
              >
                Market
                <span className="ml-1 px-2 py-0.5 rounded-full bg-yellow-400 text-yellow-900 text-[10px] font-bold leading-tight shadow-sm border border-yellow-300 group-hover:bg-yellow-500 group-hover:text-yellow-950 transition">
                  Ofertas
                </span>
              </Link>
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-2 flex-none">
              {!auth.isAuthenticated && (
                <>
                  <Link
                    to="/login"
                    className="bg-blue-700 text-white px-4 py-1 rounded-full font-bold shadow-md hover:bg-blue-800 transition text-xs"
                  >
                    Entrar
                  </Link>
                  <Link
                    to="/register"
                    className="bg-green-500 text-white px-4 py-1 rounded-full font-bold shadow-lg hover:bg-green-600 transition text-xs"
                  >
                    Registrarse
                  </Link>
                </>
              )}

              {auth.isAuthenticated && (
                <>
                  {/* 🔔 Notificaciones */}
                  <div className="relative">
                    <button
                      onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                      className="text-white hover:text-blue-100 p-2 transition relative"
                      title="Notificaciones"
                    >
                      <Icons.MessageCircle size={20} />
                      {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {unreadCount > 9 ? '9+' : unreadCount}
                        </span>
                      )}
                    </button>

                    {isNotificationsOpen && (
                      <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                        <div className="p-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
                          <h3 className="font-bold text-slate-900">Notificaciones</h3>
                          <button
                            onClick={() => setIsNotificationsOpen(false)}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            <Icons.X size={18} />
                          </button>
                        </div>

                        {notifications.length > 0 ? (
                          <div className="divide-y divide-gray-100">
                            {notifications.map((notif: any) => (
                              <div
                                key={notif.id}
                                onClick={() => markAsRead(notif.id)}
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
                    )}
                  </div>

                  {/* 👤 Perfil */}
                  <div className="relative">
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center space-x-2 pl-2 border-l border-white/30 hover:bg-white/10 rounded-lg px-2 py-1 transition"
                      title="Perfil"
                    >
                      <UserAvatar user={auth.user} size={32} />
                      <span className="text-white font-medium text-xs">{auth.user.full_name}</span>
                      <Icons.ChevronDown
                        size={16}
                        className={`text-white transition ${isProfileOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {isProfileOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                        <div className="p-4 border-b border-gray-100">
                          <p className="font-bold text-slate-900 text-sm">{auth.user.full_name}</p>
                          <p className="text-xs text-gray-500">{auth.user.email}</p>
                        </div>

                        {/* ✅ Mi Panel (aquí, no en el header) */}
                        <button
                          onClick={() => {
                            setIsProfileOpen(false);
                            goToDashboard();
                          }}
                          className="w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 transition flex items-center"
                        >
                          <Icons.Tool size={16} className="mr-2 text-brand-500" />

                          Mi Panel
                        </button>

                        <button
                          onClick={() => {
                            setIsEditProfileOpen(true);
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 transition flex items-center"
                        >
                          <Icons.Edit3 size={16} className="mr-2 text-brand-500" />
                          Editar Perfil
                        </button>

                        <button
                          onClick={() => {
                            setIsChangePasswordOpen(true);
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-slate-700 hover:bg-gray-50 transition flex items-center border-b border-gray-100"
                        >
                          <Icons.Shield size={16} className="mr-2 text-brand-500" />
                          Cambiar Contraseña
                        </button>

                        <button
                          onClick={() => {
                            onLogout();
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50 transition flex items-center"
                        >
                          <Icons.LogOut size={16} className="mr-2" />
                          Cerrar Sesión
                        </button>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* 🛒 Mini carrito */}
              <button
                onClick={() => setMiniCartOpen(true)}
                className="rounded-full hover:bg-white/10 p-1 transition"
                title="Ver carrito"
              >
                <MiniCartButton />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-blue-100 p-2">
                {isMenuOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg h-screen overflow-y-auto">
              <button
                onClick={() => handleScrollTo('como-funciona')}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
              >
                Cómo funciona
              </button>

             <button
  onClick={() => handleScrollTo('sectores')}
  className="text-white hover:text-blue-100 font-medium transition text-xs px-2 py-1 whitespace-nowrap"
>
  Sectores
</button>

              <button
                onClick={() => handleScrollTo('servicios')}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
              >
                Soy Particular
              </button>

              <button
                onClick={() => handleScrollTo('opiniones')}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
              >
                Opiniones
              </button>

              <button
                onClick={() => handleScrollTo('empresas')}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
              >
                Soy Empresa
              </button>

              <button
                onClick={() => handleScrollTo('barrios')}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
              >
                Dónde Ayudamos
              </button>

              <button
                onClick={() => handleScrollTo('incentivos')}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
              >
                Incentivos
              </button>

              <button
                onClick={() => handleScrollTo('contacto')}
                className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
              >
                Contacto
              </button>

              <div className="border-t border-gray-100 my-2" />

              {auth.isAuthenticated ? (
                <>
                  <div className="px-3 py-3 border-b border-gray-100 bg-brand-50">
                    <div className="flex items-center space-x-2">
                      <UserAvatar user={auth.user} size={40} />
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{auth.user.full_name}</p>
                        <p className="text-xs text-slate-500">{auth.user.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* ✅ Mi Panel (móvil) */}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      goToDashboard();
                    }}
                    className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
                  >
                    Mi Panel
                  </button>

                  <button
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    className="w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg flex justify-between items-center"
                  >
                    Notificaciones
                    {unreadCount > 0 && (
                      <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                        {unreadCount}
                      </span>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      onLogout();
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-3 text-red-600 font-medium hover:bg-red-50 rounded-lg"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-3 py-3 text-white font-bold bg-green-500 hover:bg-green-600 rounded-lg transition"
                  >
                    Registrarse
                  </Link>

                  <Link
                    to="/marketplace"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-3 text-slate-600 font-medium hover:bg-yellow-100 rounded-lg group"
                  >
                    <span>Market</span>
                    <span className="ml-1 px-2 py-0.5 rounded-full bg-yellow-400 text-yellow-900 text-[11px] font-bold leading-tight shadow-sm border border-yellow-300 group-hover:bg-yellow-500 group-hover:text-yellow-950 transition">
                      Ofertas
                    </span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
        <MiniCartDrawer open={miniCartOpen} onClose={() => setMiniCartOpen(false)} />
      </main>

      <footer className="py-8" style={{ background: '#0B2E4E', color: 'rgba(255,255,255,0.75)' }}>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center text-white font-bold text-xl mb-3">
              <img src="/YaVoy.ico" alt="Logo" className="h-8 w-8 mr-2 object-contain" />
              YaVoy
            </div>
            <p className="text-sm text-white/70">Conectando vecinos, resolviendo problemas, haciendo comunidad.</p>

            <div className="mt-3 flex space-x-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/15 transition cursor-pointer">
                <Icons.Smartphone size={16} />
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/15 transition cursor-pointer">
                <Icons.MessageCircle size={16} />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Plataforma</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link to="/register" className="hover:text-white transition">Soy Ayudante</Link></li>
              <li><Link to="/register" className="hover:text-white transition">Soy Empresa</Link></li>
              <li><Link to="/register" className="hover:text-white transition">Soy Particular</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Legal</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link to="/aviso-legal" className="hover:text-white transition">Aviso Legal</Link></li>
              <li><Link to="/privacidad" className="hover:text-white transition">Privacidad</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition">Cookies</Link></li>
              <li><Link to="/terminos" className="hover:text-white transition">Términos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Descarga</h4>
            <div className="flex flex-col space-y-2">
              <div className="w-36 h-10 bg-white/10 rounded flex items-center justify-center cursor-pointer hover:bg-white/15 transition text-xs font-bold text-white">
                <span className="mr-2 text-lg"></span> App Store
              </div>
              <div className="w-36 h-10 bg-white/10 rounded flex items-center justify-center cursor-pointer hover:bg-white/15 transition text-xs font-bold text-white">
                <span className="mr-2 text-lg">▶</span> Google Play
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-w-7xl mx-auto px-4 mt-6 pt-5 border-t text-center text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.55)' }}
        >
          © {new Date().getFullYear()} YaVoy. Todos los derechos reservados.
        </div>
      </footer>

      {/* Edit Profile Modal */}
      {isEditProfileOpen && (
        <Modal open={isEditProfileOpen} onClose={() => setIsEditProfileOpen(false)} title="Editar Perfil">
          <form onSubmit={handleEditProfile}>
            <Input
              label="Nombre Completo"
              type="text"
              value={editForm.full_name}
              onChange={(e) => setEditForm({ ...editForm, full_name: e.target.value })}
              required
            />
            <Input
              label="Ciudad"
              type="text"
              value={editForm.city}
              onChange={(e) => setEditForm({ ...editForm, city: e.target.value })}
              placeholder="Madrid"
              required
            />
            <div style={{ display: 'flex', gap: 12, paddingTop: 16 }}>
              <Button type="button" variant="secondary" style={{ flex: 1 }} onClick={() => setIsEditProfileOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit" style={{ flex: 1 }}>
                Guardar Cambios
              </Button>
            </div>
          </form>
        </Modal>
      )}

      {/* Change Password Modal */}
      {isChangePasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-slate-800">Cambiar Contraseña</h2>
              <button onClick={() => setIsChangePasswordOpen(false)}>
                <Icons.X className="text-gray-400 hover:text-gray-600 cursor-pointer" size={24} />
              </button>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nueva Contraseña</label>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar Nueva Contraseña</label>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              <p className="text-xs text-gray-500">La contraseña debe tener al menos 6 caracteres.</p>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsChangePasswordOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-lg font-bold transition"
                  style={{ background: theme.colors.primary, color: theme.colors.surface }}
                >
                  Cambiar Contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
