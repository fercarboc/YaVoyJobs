
import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { useAuth } from "../hooks/useAuth";


const LoginRequired: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();
  const redirect = searchParams.get('redirect') || '/alquiler';

  const handleLogin = () => {
    login(); // Simulate login success
    alert("Iniciando sesión... (Simulado)");
    navigate(redirect);
  };

  const handleRegister = () => {
    alert("Abriendo registro... (Simulado)");
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl max-w-md w-full text-center">
        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
           <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
        </div>
        <h1 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">Acceso restringido</h1>
        <p className="text-gray-500 mb-8">Para contactar con los anunciantes y guardar tus favoritos, necesitas iniciar sesión o registrarte.</p>
        
        <div className="space-y-3">
          <button 
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-3.5 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100"
          >
            Iniciar sesión
          </button>
          <button 
            onClick={handleRegister}
            className="w-full bg-white border border-gray-200 text-gray-700 py-3.5 rounded-xl font-bold hover:bg-gray-50 transition"
          >
            Registrarse ahora
          </button>
        </div>

        <button 
          onClick={() => navigate('/alquiler')}
          className="mt-8 text-sm text-gray-400 font-semibold hover:text-gray-600 transition"
        >
          Volver al listado
        </button>
        
        {redirect && (
          <p className="mt-4 text-[10px] text-gray-300 italic">Redirecting to: {redirect}</p>
        )}
      </div>
    </div>
  );
};

export default LoginRequired;
