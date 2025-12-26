import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../services/supabase';
import { Icons } from '../components/Icons';
import { COMPANY_SECTORS } from '../types';

const Register = () => {
  const [activeTab, setActiveTab] = useState<'PARTICULAR' | 'COMPANY' | 'HELPER'>('PARTICULAR');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    cif: '',
    companySector: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailConfirmationPending, setEmailConfirmationPending] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState('');

  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Email y contraseña son obligatorios');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      setLoading(true);

      const role =
        activeTab === 'HELPER' ? 'HELPER' : activeTab === 'COMPANY' ? 'COMPANY' : 'PARTICULAR';

      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
            role,
          },
        },
      });

      if (authError) throw authError;

      const authUserId = authData?.user?.id;
      if (!authUserId) {
        setEmailConfirmationPending(true);
        setRegisteredEmail(formData.email);
        return;
      }

      // Crear perfil en VoyUsers
      const { error: profileError } = await supabase.from('VoyUsers').insert([
        {
          auth_user_id: authUserId,
          full_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          role,
          cif: activeTab === 'COMPANY' ? formData.cif : null,
          company_sector: activeTab === 'COMPANY' ? formData.companySector : null,
        },
      ]);

      if (profileError) throw profileError;

      setEmailConfirmationPending(true);
      setRegisteredEmail(formData.email);
    } catch (err: any) {
      setError(err.message || 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Crear cuenta</h2>
          <p className="text-slate-500">Elige tu tipo de cuenta</p>
        </div>

        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab('PARTICULAR')}
            className={`py-3 rounded-xl font-bold text-sm transition ${
              activeTab === 'PARTICULAR'
                ? 'bg-brand-600 text-white shadow'
                : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
            }`}
          >
            Particular
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('COMPANY')}
            className={`py-3 rounded-xl font-bold text-sm transition ${
              activeTab === 'COMPANY'
                ? 'bg-brand-600 text-white shadow'
                : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
            }`}
          >
            Empresa
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('HELPER')}
            className={`py-3 rounded-xl font-bold text-sm transition ${
              activeTab === 'HELPER'
                ? 'bg-brand-600 text-white shadow'
                : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
            }`}
          >
            Ayudante
          </button>
        </div>

        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">{error}</div>}

        {!emailConfirmationPending ? (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Nombre</label>
              <input
                value={formData.name}
                onChange={e => handleChange('name', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input
                  value={formData.email}
                  onChange={e => handleChange('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Teléfono</label>
                <input
                  value={formData.phone}
                  onChange={e => handleChange('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="600 000 000"
                />
              </div>
            </div>

            {activeTab === 'COMPANY' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">CIF</label>
                  <input
                    value={formData.cif}
                    onChange={e => handleChange('cif', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                    placeholder="B12345678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Sector</label>
                  <select
                    value={formData.companySector}
                    onChange={e => handleChange('companySector', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none bg-white"
                  >
                    <option value="">Selecciona…</option>
                    {COMPANY_SECTORS?.map((s: any) => (
                      <option key={String(s?.value ?? s)} value={String(s?.value ?? s)}>
                        {String(s?.label ?? s)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={e => handleChange('password', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={e => handleChange('confirmPassword', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 transition shadow-md disabled:opacity-50"
            >
              {loading ? 'Creando cuenta…' : 'Crear cuenta'}
            </button>

            <button
              type="button"
              onClick={() => navigate('/login')}
              className="w-full py-3 bg-gray-100 text-slate-800 rounded-lg font-bold hover:bg-gray-200 transition"
            >
              Ya tengo cuenta
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Icons.CheckCircle size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Confirma tu email</h3>
            <p className="text-slate-600 mt-2">
              Te hemos enviado un correo a <span className="font-bold">{registeredEmail}</span>.
            </p>
            <p className="text-xs text-slate-500 mt-4">
              ¿No recibiste el email? Revisa spam o inténtalo de nuevo más tarde.
            </p>

            <div className="mt-6">
              <button
                onClick={() => navigate('/login')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold bg-brand-600 text-white hover:bg-brand-700 transition"
              >
                Ir a login
                <Icons.ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
