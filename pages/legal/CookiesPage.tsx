import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

const CookiesPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Política de Cookies</h1>
              <p className="text-slate-600 mt-2 text-sm">
                Información sobre cookies y tecnologías similares.
              </p>
            </div>
            <Link
              to="/"
              className="px-4 py-2 rounded-xl text-sm font-bold text-white shadow hover:opacity-95 transition"
              style={{ background: theme.colors.primary }}
            >
              Volver
            </Link>
          </div>

          <div className="mt-8 space-y-6 text-sm text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900">1. ¿Qué son las cookies?</h2>
              <p className="mt-2">
                Son pequeños archivos que se almacenan en tu dispositivo para permitir el funcionamiento del sitio,
                recordar preferencias o analizar el uso (según configuración y consentimiento).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">2. Tipos de cookies</h2>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li><b>Técnicas:</b> necesarias para el funcionamiento.</li>
                <li><b>Preferencias:</b> recuerdan configuraciones.</li>
                <li><b>Analíticas:</b> ayudan a mejorar el servicio.</li>
                <li><b>Marketing:</b> personalizan anuncios (si aplica y con consentimiento).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">3. Gestión</h2>
              <p className="mt-2">
                Puedes configurar tu navegador para bloquear o eliminar cookies. Algunas funciones podrían no funcionar correctamente.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">4. Cookies de terceros</h2>
              <p className="mt-2">
                Si se integran servicios externos (p. ej. analítica o pagos), pueden establecer cookies propias. Se informará en producción
                y se habilitará el consentimiento cuando proceda.
              </p>
            </section>

            <div className="pt-6 border-t border-gray-100 text-xs text-slate-500">
              Última actualización: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">
          Ver también: <Link to="/aviso-legal" className="font-bold hover:underline">Aviso Legal</Link> ·{' '}
          <Link to="/privacidad" className="font-bold hover:underline">Privacidad</Link> ·{' '}
          <Link to="/terminos" className="font-bold hover:underline">Términos</Link>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
