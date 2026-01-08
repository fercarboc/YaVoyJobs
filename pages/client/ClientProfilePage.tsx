import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import VerificationUploader from '@/components/VerificationUploader';
import AvatarFromSelfieCard from '@/components/AvatarFromSelfieCard';

const ClientProfilePage: React.FC = () => {
  const { auth } = useAuth();
  const [fullName, setFullName] = useState(auth.user?.full_name || '');
  const [city, setCity] = useState(auth.user?.city || '');
  const isParticular = auth.user?.role === 'PARTICULAR';

  return (
    <div className="space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">Perfil</h1>
          <p className="text-sm text-slate-600 mt-1">
            Aquí luego conectamos "Editar Perfil" con Supabase (ya lo tienes en tu Layout).
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="rounded-2xl border border-gray-100 p-4">
          <div className="text-sm font-extrabold text-slate-900">Datos básicos</div>

          <div className="mt-4 grid gap-3">
            <label className="grid gap-1">
              <span className="text-xs font-bold text-slate-600">Nombre completo</span>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>

            <label className="grid gap-1">
              <span className="text-xs font-bold text-slate-600">Ciudad</span>
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="px-3 py-2 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-blue-200"
              />
            </label>

            <div className="pt-2 flex gap-2">
              <button
                className="px-4 py-2 rounded-xl text-sm font-extrabold text-white shadow hover:opacity-95 transition"
                style={{ background: '#0ea5e9' }}
                onClick={() => alert('Luego conectamos update real')}
              >
                Guardar cambios
              </button>
              <button
                className="px-4 py-2 rounded-xl text-sm font-extrabold border border-gray-200 hover:bg-gray-50 transition"
                onClick={() => {
                  setFullName(auth.user?.full_name || '');
                  setCity(auth.user?.city || '');
                }}
              >
                Cancelar
              </button>
            </div>

            <div className="text-xs text-slate-500">
              Email: <span className="font-bold">{auth.user?.email}</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-100 p-4">
          <div className="text-sm font-extrabold text-slate-900">Seguridad</div>
          <div className="text-sm text-slate-600 mt-2">
            La contraseña ya la gestionas en tu Layout ("Cambiar Contraseña").
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 p-4 space-y-3">
        <VerificationUploader
          defaultVerificationType={auth.user?.role === 'COMPANY' ? 'company' : 'particular'}
          showTypeSelector={false}
        />
        {isParticular && <AvatarFromSelfieCard />}
      </div>

    </div>
  );
};

export default ClientProfilePage;
