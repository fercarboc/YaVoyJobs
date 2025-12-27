import React, { useMemo, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import type { AuthState } from "@/types";
import { UserRole } from "@/types";
import { supabase } from "@/services/supabase";

type LoginProps = {
  auth: AuthState;
  onLoginSuccess?: () => void;
};

const Login: React.FC<LoginProps> = ({ auth, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ destino según rol (memo para no recalcular)
  const redirectTo = useMemo(() => {
    if (!auth.user) return null;
    switch (auth.user.role) {
      case UserRole.ADMIN:
        return "/admin";
      case UserRole.HELPER:
        return "/worker";
      case UserRole.AGENCY:
        return "/agency";
      default:
        return "/panel";
    }
  }, [auth.user]);

  /* =====================================================
     🔁 SI YA ESTÁ LOGADO → REDIRIGIR AL DASHBOARD
  ===================================================== */
  if (!auth.loading && auth.isAuthenticated && auth.user && redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  /* =====================================================
     🔐 LOGIN
  ===================================================== */
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log("[LOGIN] intentando login con Supabase:", email);

      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) throw authError;

      console.log("[LOGIN] login OK. userId:", data.user?.id);

      // ❗ NO navegamos aquí: App.tsx detecta sesión y hace fetchProfile
      onLoginSuccess?.();
    } catch (err: any) {
      console.error("[LOGIN ERROR]", err);
      setError(err?.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  /* =====================================================
     🧱 UI
  ===================================================== */
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Bienvenido a YaVoy</h2>
          <p className="text-slate-500">Accede a tu cuenta</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="tu@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 outline-none"
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-brand-600 text-white rounded-lg font-bold hover:bg-brand-700 transition disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Entrar"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-brand-600 font-bold hover:underline">
            Regístrate gratis
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
