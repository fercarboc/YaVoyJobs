
import React, { useState } from 'react';
import { Store, Lock, User, Eye, EyeOff, ChevronRight, AlertCircle } from 'lucide-react';
import { useApp } from '../AppContext';
import { UserRole } from '../types';

interface LoginViewProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onSuccess, onCancel }) => {
  const { login } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Mock validation logic
    setTimeout(() => {
      if (username === 'proveedordemo' && password === '123456') {
        login('proveedordemo', UserRole.SELLER, 'Distribuciones Demo');
        onSuccess();
      } else if (username === 'demo1' && password === '123456') {
        login('demo1', UserRole.REGISTERED, 'Usuario Demo');
        onSuccess();
      } else {
        setError('Credenciales incorrectas. Prueba con proveedordemo/123456 o demo1/123456');
        setLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="bg-white max-w-md w-full rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden">
        <div className="p-8 sm:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-2xl mb-4 shadow-lg">
              <Store className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-black text-slate-900">Bienvenido a YaVoyJobs</h1>
            <p className="text-slate-500 mt-2">Accede a tu cuenta de barrio</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-start text-red-600 text-sm">
                <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div className="space-y-4">
              <div className="relative">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-2 block">Usuario</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ej: proveedordemo"
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 font-medium"
                    required
                  />
                </div>
              </div>

              <div className="relative">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-2 block">Contraseña</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••"
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-slate-900 font-medium"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-3.5 text-slate-400 hover:text-indigo-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-xl flex items-center justify-center group ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Entrar ahora
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col space-y-4">
            <button
              onClick={onCancel}
              className="text-indigo-600 font-bold text-sm hover:underline text-center"
            >
              Entrar como invitado (sin cuenta)
            </button>
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Credenciales de prueba:</p>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div>
                  <p className="font-bold">Proveedor:</p>
                  <p>proveedordemo / 123456</p>
                </div>
                <div>
                  <p className="font-bold">Particular:</p>
                  <p>demo1 / 123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
