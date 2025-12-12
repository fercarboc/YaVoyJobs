import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Icons } from './Icons';
import { UserRole, AuthState, Notification } from '../types';
import { supabase } from '../services/supabase';

interface LayoutProps {
  children: React.ReactNode;
  auth: AuthState;
  onLogout: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, auth, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' });
  const [editForm, setEditForm] = useState({ full_name: auth.user?.full_name || '', phone: '', city: auth.user?.city || '' });
  const location = useLocation();
  const navigate = useNavigate();

  const isLanding = location.pathname === '/';

  useEffect(() => {
    if (auth.isAuthenticated && auth.user) {
      fetchNotifications();
      
      // Refresh notifications every 10 seconds
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

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: passwordForm.newPassword
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
          city: editForm.city
        })
        .eq('id', auth.user.id);

      if (error) throw error;
      alert('Perfil actualizado exitosamente');
      setIsEditProfileOpen(false);
      // Opcionalmente, recargamos la página o actualizamos el estado del auth
      window.location.reload();
    } catch (err: any) {
      alert('Error al actualizar perfil: ' + err.message);
    }
  };

  const getDashboardLink = () => {
    if (!auth.user) return '/';

    switch (auth.user.role) {
      case UserRole.ADMIN: return '/admin';
      case UserRole.HELPER: return '/worker';
      default: return '/client';
    }
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className={`sticky top-0 z-50 transition-colors duration-300 ${isLanding && !isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white shadow-md'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
              <img src="/YaVoy.ico" alt="YaVoy Logo" className="h-10 w-10 mr-2 object-contain" />
              <span className="font-bold text-2xl text-slate-800 tracking-tight">YaVoy</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center">
              <button onClick={() => handleScrollTo('como-funciona')} className="text-slate-600 hover:text-brand-600 font-medium transition text-sm">Cómo funciona</button>
              <button onClick={() => handleScrollTo('servicios')} className="text-slate-600 hover:text-brand-600 font-medium transition text-sm">Soy Particular</button>
              <button onClick={() => handleScrollTo('opiniones')} className="text-slate-600 hover:text-brand-600 font-medium transition text-sm">Opiniones</button>
              <button onClick={() => handleScrollTo('empresas')} className="text-slate-600 hover:text-brand-600 font-medium transition text-sm">Soy Empresa</button>
              <button onClick={() => handleScrollTo('donde')} className="text-slate-600 hover:text-brand-600 font-medium transition text-sm">Dónde Ayudamos</button>
              <button onClick={() => handleScrollTo('contacto')} className="text-slate-600 hover:text-brand-600 font-medium transition text-sm">Contacto</button>
              
              <div className="h-6 w-px bg-slate-200 mx-2"></div>

              {auth.isAuthenticated ? (
                <>
                  <Link to={getDashboardLink()} className="text-slate-600 hover:text-brand-600 font-medium transition text-sm">
                    Mi Panel
                  </Link>
                  <div className="relative">
                    <button 
                      onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                      className="text-slate-600 hover:text-brand-600 p-2 transition relative"
                    >
                      <Icons.MessageCircle size={20} />
                      {unreadCount > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                          {unreadCount > 9 ? '9+' : unreadCount}
                        </span>
                      )}
                    </button>

                    {/* Notifications Dropdown */}
                    {isNotificationsOpen && (
                      <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                        <div className="p-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
                          <h3 className="font-bold text-slate-900">Notificaciones</h3>
                          <button onClick={() => setIsNotificationsOpen(false)} className="text-gray-400 hover:text-gray-600">
                            <Icons.X size={18} />
                          </button>
                        </div>

                        {notifications.length > 0 ? (
                          <div className="divide-y divide-gray-100">
                            {notifications.map(notif => (
                              <div 
                                key={notif.id}
                                onClick={() => markAsRead(notif.id)}
                                className={`p-4 cursor-pointer transition ${
                                  notif.is_read ? 'bg-white hover:bg-gray-50' : 'bg-blue-50 hover:bg-blue-100'
                                }`}
                              >
                                <div className="flex justify-between items-start mb-1">
                                  <p className={`font-medium text-sm ${notif.is_read ? 'text-slate-700' : 'text-slate-900 font-bold'}`}>
                                    {notif.title}
                                  </p>
                                  {!notif.is_read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>}
                                </div>
                                <p className="text-xs text-gray-600 line-clamp-2">{notif.message}</p>
                                <p className="text-xs text-gray-400 mt-2">
                                  {new Date(notif.created_at).toLocaleDateString()}
                                </p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="p-8 text-center text-gray-400 text-sm">
                            No tienes notificaciones
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* User Profile Button */}
                  <div className="relative">
                    <button 
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="flex items-center space-x-2 pl-2 border-l border-gray-200 hover:bg-gray-50 rounded-lg px-2 py-1 transition"
                    >
                      <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm">
                        {auth.user.full_name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <span className="text-slate-700 font-medium text-sm">{auth.user.full_name}</span>
                      <Icons.ChevronDown size={16} className={`text-slate-600 transition ${isProfileOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                        <div className="p-4 border-b border-gray-100">
                          <p className="font-bold text-slate-900 text-sm">{auth.user.full_name}</p>
                          <p className="text-xs text-gray-500">{auth.user.email}</p>
                        </div>
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
                          <Icons.LogIn size={16} className="mr-2" />
                          Cerrar Sesión
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-slate-600 hover:text-brand-600 font-medium transition text-sm">Entrar</Link>
                  <Link to="/register" className="bg-brand-500 text-white px-5 py-2 rounded-full font-bold shadow-lg hover:bg-brand-600 hover:shadow-brand-500/30 transition transform hover:-translate-y-0.5 text-sm">
                    Registrarse
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-brand-600 p-2">
                {isMenuOpen ? <Icons.X size={24} /> : <Icons.Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg h-screen overflow-y-auto">
              <button onClick={() => handleScrollTo('como-funciona')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Cómo funciona</button>
              <button onClick={() => handleScrollTo('servicios')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Soy Particular</button>
              <button onClick={() => handleScrollTo('opiniones')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Opiniones</button>
              <button onClick={() => handleScrollTo('empresas')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Soy Empresa</button>
              <button onClick={() => handleScrollTo('donde')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Dónde Ayudamos</button>
              <button onClick={() => handleScrollTo('contacto')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Contacto</button>
              <Link to="/download" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Descargar App</Link>
              <div className="border-t border-gray-100 my-2"></div>
              {auth.isAuthenticated ? (
                <>
                  <div className="px-3 py-3 border-b border-gray-100 bg-brand-50">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold">
                        {auth.user.full_name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{auth.user.full_name}</p>
                        <p className="text-xs text-slate-500">{auth.user.email}</p>
                      </div>
                    </div>
                  </div>
                  <Link to={getDashboardLink()} onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Mi Panel</Link>
                  <button 
                    onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                    className="w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg flex justify-between items-center"
                  >
                    Notificaciones
                    {unreadCount > 0 && <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-0.5">{unreadCount}</span>}
                  </button>
                  <button onClick={() => { onLogout(); setIsMenuOpen(false); }} className="w-full text-left px-3 py-3 text-red-600 font-medium hover:bg-red-50 rounded-lg">Cerrar Sesión</button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-slate-600 font-medium hover:bg-brand-50 rounded-lg">Iniciar Sesión</Link>
                  <Link to="/register" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-brand-600 font-bold bg-brand-50 rounded-lg">Registrarse</Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center text-white font-bold text-xl mb-4">
               <img src="/YaVoy.ico" alt="Logo" className="h-8 w-8 mr-2 object-contain" /> YaVoy
            </div>
            <p className="text-sm">Conectando vecinos, resolviendo problemas, haciendo comunidad.</p>
            <div className="mt-4 flex space-x-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-500 transition cursor-pointer"><Icons.Smartphone size={16}/></div>
                <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-brand-500 transition cursor-pointer"><Icons.MessageCircle size={16}/></div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register" className="hover:text-white transition">Soy Ayudante</Link></li>
              <li><Link to="/register" className="hover:text-white transition">Soy Empresa</Link></li>
              <li><Link to="/register" className="hover:text-white transition">Soy Particular</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/aviso-legal" className="hover:text-white transition">Aviso Legal</Link></li>
              <li><Link to="/privacidad" className="hover:text-white transition">Política de Privacidad</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition">Política de Cookies</Link></li>
              <li><Link to="/terminos" className="hover:text-white transition">Términos de uso</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Descarga</h4>
            <div className="flex flex-col space-y-2">
              <div className="w-36 h-10 bg-slate-800 rounded flex items-center justify-center cursor-pointer hover:bg-slate-700 transition text-xs font-bold text-white">
                <span className="mr-2 text-lg"></span> App Store
              </div>
              <div className="w-36 h-10 bg-slate-800 rounded flex items-center justify-center cursor-pointer hover:bg-slate-700 transition text-xs font-bold text-white">
                <span className="mr-2 text-lg">▶</span> Google Play
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} YaVoy App. Todos los derechos reservados.
        </div>
      </footer>

      {/* Edit Profile Modal */}
      {isEditProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-slate-800">Editar Perfil</h2>
              <button onClick={() => setIsEditProfileOpen(false)}><Icons.X className="text-gray-400 hover:text-gray-600 cursor-pointer" size={24}/></button>
            </div>

            <form onSubmit={handleEditProfile} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                <input 
                  type="text"
                  value={editForm.full_name}
                  onChange={(e) => setEditForm({...editForm, full_name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Ciudad</label>
                <input 
                  type="text"
                  value={editForm.city}
                  onChange={(e) => setEditForm({...editForm, city: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-slate-900 outline-none focus:ring-2 focus:ring-brand-500"
                  placeholder="Madrid"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsEditProfileOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2 bg-brand-500 text-white rounded-lg font-bold hover:bg-brand-600 transition"
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Change Password Modal */}
      {isChangePasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-slate-800">Cambiar Contraseña</h2>
              <button onClick={() => setIsChangePasswordOpen(false)}><Icons.X className="text-gray-400 hover:text-gray-600 cursor-pointer" size={24}/></button>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nueva Contraseña</label>
                <input 
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
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
                  onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
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
                  className="flex-1 px-4 py-2 bg-brand-500 text-white rounded-lg font-bold hover:bg-brand-600 transition"
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