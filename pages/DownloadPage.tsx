import React from 'react';
import { Icons } from '../components/Icons';
import { theme } from '../theme';

const DownloadPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl p-8">
          <h1 className="text-3xl font-extrabold text-slate-900">Descargar YaVoy</h1>
          <p className="text-slate-600 mt-2">
            Próximamente en iOS y Android. Mientras tanto puedes usar la versión web.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition font-bold text-slate-800"
            >
              <span className="text-2xl"></span>
              App Store (próximamente)
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-gray-100 hover:bg-gray-200 transition font-bold text-slate-800"
            >
              <span className="text-2xl">▶</span>
              Google Play (próximamente)
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                style={{ background: theme.colors.primary }}
              >
                <Icons.Globe size={18} />
              </div>
              <div>
                <div className="font-bold text-slate-900">Versión web</div>
                <p className="text-sm text-slate-600 mt-1">
                  Puedes usar YaVoy desde el navegador en móvil o PC.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-slate-500">
            Cuando publiques las apps, aquí conectamos los enlaces reales y/o QR.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
