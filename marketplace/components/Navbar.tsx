
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, MapPin, Store, LayoutDashboard, LogOut, LogIn } from 'lucide-react';
import { useApp } from '../AppContext';
import { UserRole } from '../types';

const Navbar: React.FC<{ onNavigate: (view: string) => void }> = ({ onNavigate }) => {
  const { userRole, cart, isLoggedIn, logout, currentUser } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Brand */}
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('marketplace')}>
            <div className="bg-indigo-600 p-1.5 rounded-lg mr-2">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">YaVoy<span className="text-indigo-600">Jobs</span></span>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Busca productos, comercios o barrios..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Nav Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button onClick={() => onNavigate('marketplace')} className="p-2 text-slate-600 hover:text-indigo-600 transition-colors hidden sm:block font-medium">
              Mercado
            </button>
            
            {userRole === UserRole.SELLER && (
              <button onClick={() => onNavigate('seller-dashboard')} className="flex items-center space-x-1 p-2 text-indigo-600 font-bold hover:bg-indigo-50 rounded-lg transition-all">
                <LayoutDashboard className="w-5 h-5" />
                <span className="hidden sm:inline">Panel</span>
              </button>
            )}

            <button onClick={() => onNavigate('cart')} className="relative p-2 text-slate-600 hover:text-indigo-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="h-6 w-px bg-slate-200 mx-2 hidden md:block" />

            {isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <button onClick={() => onNavigate('profile')} className="flex items-center space-x-2 p-1.5 text-slate-700 hover:bg-slate-50 rounded-xl transition-all">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-xs font-black truncate max-w-[100px] leading-none">{currentUser?.name}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{userRole}</p>
                  </div>
                </button>
                <button onClick={logout} className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Cerrar Sesión">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => onNavigate('login')}
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700 shadow-md transition-all active:scale-95"
              >
                <LogIn className="w-4 h-4" />
                <span className="hidden sm:inline">Entrar</span>
              </button>
            )}

            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="relative">
            <input 
              type="text" 
              placeholder="¿Qué buscas hoy?" 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => { onNavigate('marketplace'); setIsMobileMenuOpen(false); }} className="flex items-center justify-center space-x-2 p-3 bg-slate-50 rounded-xl font-bold text-slate-700">
              <Store className="w-4 h-4" />
              <span>Mercado</span>
            </button>
            {isLoggedIn ? (
              <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="flex items-center justify-center space-x-2 p-3 bg-red-50 rounded-xl font-bold text-red-600">
                <LogOut className="w-4 h-4" />
                <span>Salir</span>
              </button>
            ) : (
              <button onClick={() => { onNavigate('login'); setIsMobileMenuOpen(false); }} className="flex items-center justify-center space-x-2 p-3 bg-indigo-600 rounded-xl font-bold text-white">
                <LogIn className="w-4 h-4" />
                <span>Entrar</span>
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
