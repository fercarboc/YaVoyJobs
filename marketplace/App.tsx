
import React, { useState } from 'react';
import { AppProvider, useApp } from './AppContext';
import { UserRole, Product } from './types';
import Navbar from './components/Navbar';
import MarketplaceView from './views/MarketplaceView';
import ProductDetailView from './views/ProductDetailView';
import SellerDashboard from './views/SellerDashboard';
import LoginView from './views/LoginView';
import CartView from './views/CartView';
import ProfileView from './views/ProfileView';
import { User, ShieldCheck, ShoppingBag, Store, UserPlus } from 'lucide-react';

const AppContent: React.FC = () => {
  const { userRole, setUserRole, login, logout, isLoggedIn } = useApp();
  const [currentView, setCurrentView] = useState('marketplace');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleLoginSuccess = () => {
    setCurrentView('marketplace');
  };

  const renderView = () => {
    switch(currentView) {
      case 'login':
        return <LoginView onSuccess={handleLoginSuccess} onCancel={() => setCurrentView('marketplace')} />;
      case 'marketplace':
        return <MarketplaceView onProductSelect={handleProductSelect} />;
      case 'product-detail':
        return selectedProduct ? (
          <ProductDetailView product={selectedProduct} onBack={() => setCurrentView('marketplace')} />
        ) : <MarketplaceView onProductSelect={handleProductSelect} />;
      case 'cart':
        return <CartView 
          onContinueShopping={() => setCurrentView('marketplace')} 
          onOrderSuccess={() => setCurrentView('profile')} 
        />;
      case 'profile':
        if (!isLoggedIn) return <LoginView onSuccess={handleLoginSuccess} onCancel={() => setCurrentView('marketplace')} />;
        return <ProfileView />;
      case 'seller-dashboard':
        if (!isLoggedIn || userRole !== UserRole.SELLER) {
          return <LoginView onSuccess={handleLoginSuccess} onCancel={() => setCurrentView('marketplace')} />;
        }
        return <SellerDashboard />;
      default:
        return <MarketplaceView onProductSelect={handleProductSelect} />;
    }
  };

  // Helper for Debug Switcher
  const debugSwitch = (role: UserRole) => {
    if (role === UserRole.GUEST) {
      logout();
    } else {
      login(`demo_${role}`, role, `Demo ${role}`);
    }
    setCurrentView('marketplace');
  };

  return (
    <div className="min-h-screen pb-20">
      <Navbar onNavigate={(view) => setCurrentView(view)} />
      
      <main className="animate-in fade-in duration-500">
        {renderView()}
      </main>

      {/* Role Switcher - Floating for Demo Purposes */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-slate-900/95 backdrop-blur-sm text-white px-4 py-2 rounded-2xl shadow-2xl flex items-center space-x-1 border border-white/10 overflow-x-auto max-w-[95vw]">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mr-2 ml-1 hidden sm:inline">Debug:</span>
          <button 
            onClick={() => debugSwitch(UserRole.GUEST)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${userRole === UserRole.GUEST ? 'bg-indigo-600 text-white' : 'hover:bg-white/10'}`}
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span className="text-xs font-bold">Invitado</span>
          </button>
          <button 
            onClick={() => debugSwitch(UserRole.REGISTERED)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${userRole === UserRole.REGISTERED ? 'bg-indigo-600 text-white' : 'hover:bg-white/10'}`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="text-xs font-bold">Particular</span>
          </button>
          <button 
            onClick={() => debugSwitch(UserRole.HORECA)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${userRole === UserRole.HORECA ? 'bg-indigo-600 text-white' : 'hover:bg-white/10'}`}
          >
            <Store className="w-3.5 h-3.5" />
            <span className="text-xs font-bold">HORECA</span>
          </button>
          <button 
            onClick={() => debugSwitch(UserRole.SELLER)}
            className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${userRole === UserRole.SELLER ? 'bg-indigo-600 text-white' : 'hover:bg-white/10'}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="text-xs font-bold">Vendedor</span>
          </button>
        </div>
      </div>

      <footer className="mt-20 border-t border-slate-200 bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
           <div className="col-span-1 md:col-span-2">
              <span className="text-xl font-bold text-slate-900">YaVoy<span className="text-indigo-600">Jobs</span></span>
              <p className="mt-4 text-slate-500 max-w-sm">Reinventando el comercio hiperlocal. Conectamos comercios de barrio con vecinos y profesionales para crear una economía más circular y sostenible.</p>
           </div>
           <div>
              <h4 className="font-bold text-slate-900 mb-4">Marketplace</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-indigo-600">Alimentación</a></li>
                <li><a href="#" className="hover:text-indigo-600">Limpieza Pro</a></li>
                <li><a href="#" className="hover:text-indigo-600">Bebidas</a></li>
                <li><a href="#" className="hover:text-indigo-600">Barrios</a></li>
              </ul>
           </div>
           <div>
              <h4 className="font-bold text-slate-900 mb-4">Compañía</h4>
              <ul className="space-y-2 text-slate-500 text-sm">
                <li><a href="#" className="hover:text-indigo-600">Hazte vendedor</a></li>
                <li><a href="#" className="hover:text-indigo-600">YaVoyJobs Servicios</a></li>
                <li><a href="#" className="hover:text-indigo-600">Privacidad</a></li>
                <li><a href="#" className="hover:text-indigo-600">Contacto</a></li>
              </ul>
           </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400 font-medium">
           <p>© 2024 YaVoyJobs. Hecho con ❤️ para tu barrio.</p>
           <div className="flex space-x-4">
              <span>Condiciones HORECA</span>
              <span>Soporte 24/7</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => (
  <AppProvider>
    <AppContent />
  </AppProvider>
);

export default App;
