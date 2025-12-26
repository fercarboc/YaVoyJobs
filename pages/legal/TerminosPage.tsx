import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

const TerminosPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Términos y Condiciones</h1>
              <p className="text-slate-600 mt-2 text-sm">
                Reglas de uso, cuentas, marketplace y trabajos.
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
              <h2 className="text-lg font-bold text-slate-900">1. Registro y cuenta</h2>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Debes proporcionar información veraz y mantenerla actualizada.</li>
                <li>Eres responsable del uso de tu cuenta y credenciales.</li>
                <li>Podemos suspender cuentas ante fraude, abuso o incumplimientos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">2. Publicación de anuncios</h2>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>El anunciante define condiciones, precio y alcance del anuncio.</li>
                <li>No se permiten anuncios ilegales, discriminatorios o peligrosos.</li>
                <li>La plataforma puede moderar o retirar contenidos que incumplan.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">3. Prestación del servicio</h2>
              <p className="mt-2">
                La contratación efectiva y la ejecución del trabajo se realiza entre las partes.
                YaVoy facilita herramientas (búsqueda, chat, reputación, soporte).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">4. Marketplace</h2>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Las compras se realizan según disponibilidad, precio y condiciones del vendedor.</li>
                <li>Gestión de envíos/recogidas según el modelo definido en la plataforma.</li>
                <li>Las devoluciones/incidencias se tramitan según la política aplicable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">5. Pagos, comisiones y facturación</h2>
              <p className="mt-2">
                Los pagos podrán gestionarse mediante pasarelas (por ejemplo Stripe) y las comisiones se aplicarán según planes o tarifas
                visibles en la plataforma. La facturación se emitirá según normativa aplicable.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">6. Reputación y valoraciones</h2>
              <p className="mt-2">
                Las valoraciones deben ser veraces y relacionadas con la experiencia real. Se podrán moderar valoraciones abusivas
                o fraudulentas.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">7. Limitación de responsabilidad</h2>
              <p className="mt-2">
                YaVoy no garantiza disponibilidad ininterrumpida ni se responsabiliza de daños derivados de terceros, sin perjuicio de
                las obligaciones legales aplicables y de los mecanismos de soporte ofrecidos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">8. Modificaciones</h2>
              <p className="mt-2">
                Podemos actualizar estos términos para mejorar el servicio o adaptarnos a cambios legales. Publicaremos la versión vigente.
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
          <Link to="/cookies" className="font-bold hover:underline">Cookies</Link>
        </div>
      </div>
    </div>
  );
};

export default TerminosPage;
