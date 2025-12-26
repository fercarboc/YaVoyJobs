import React, { useState } from 'react';

const tabs = [
  { key: 'login', label: 'Entrar' },
  { key: 'register', label: 'Crear cuenta' },
  { key: 'guest', label: 'Invitado' },
];

const CheckoutGate: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register' | 'guest'>('login');
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (activeTab === 'login') {
      if (!form.email || !form.password) return 'Email y contraseña requeridos';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Email inválido';
      if (form.password.length < 8) return 'Contraseña mínimo 8 caracteres';
    }
    if (activeTab === 'register') {
      if (!form.name || !form.email || !form.password || !form.confirmPassword) return 'Todos los campos son requeridos';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Email inválido';
      if (form.password.length < 8) return 'Contraseña mínimo 8 caracteres';
      if (form.password !== form.confirmPassword) return 'Las contraseñas no coinciden';
    }
    if (activeTab === 'guest') {
      if (!form.email) return 'Email requerido';
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Email inválido';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const v = validate();
    if (v) return setError(v);
    setLoading(true);
    try {
      // Simulación de llamada a /api/marketplace/checkout/create-session
      const res = await fetch('/api/marketplace/checkout/create-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, mode: activeTab }),
      });
      if (!res.ok) throw new Error('Error en el checkout');
      // Aquí redirigirías o mostrarías éxito
      alert('Sesión de checkout creada (simulado)');
    } catch (err: any) {
      setError(err.message || 'Error en el checkout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white rounded-2xl shadow-xl border border-gray-100 p-0 overflow-hidden">
      <div className="flex items-center justify-between px-6 pt-5 pb-2 border-b">
        <h2 className="text-lg font-bold text-slate-900">Checkout</h2>
        <button
          type="submit"
          form="checkout-form"
          className="bg-emerald-500 text-white px-4 py-1.5 rounded-full font-bold text-xs shadow hover:bg-emerald-600 transition"
          style={{ minWidth: 110 }}
          disabled={loading}
        >
          {activeTab === 'guest' ? 'Confirmar' : 'Pagar'}
        </button>
      </div>
      <div className="flex border-b">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`flex-1 py-2 text-xs font-bold transition border-b-2 ${activeTab === tab.key ? 'border-emerald-500 text-emerald-700 bg-emerald-50' : 'border-transparent text-slate-500 bg-white hover:bg-gray-50'}`}
            onClick={() => setActiveTab(tab.key as any)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <form id="checkout-form" className="p-6 space-y-4" onSubmit={handleSubmit} autoComplete="off">
        {activeTab === 'register' && (
          <input
            name="name"
            type="text"
            className="w-full px-3 py-2 rounded border text-xs"
            placeholder="Nombre completo"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          name="email"
          type="email"
          className="w-full px-3 py-2 rounded border text-xs"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        {(activeTab === 'login' || activeTab === 'register') && (
          <input
            name="password"
            type="password"
            className="w-full px-3 py-2 rounded border text-xs"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            minLength={8}
            required
          />
        )}
        {activeTab === 'register' && (
          <input
            name="confirmPassword"
            type="password"
            className="w-full px-3 py-2 rounded border text-xs"
            placeholder="Repetir contraseña"
            value={form.confirmPassword}
            onChange={handleChange}
            minLength={8}
            required
          />
        )}
        {error && <div className="text-xs text-red-500 bg-red-50 rounded p-2">{error}</div>}
      </form>
    </div>
  );
};

export default CheckoutGate;
