import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

const AvisoLegalPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Aviso Legal</h1>
              <p className="text-slate-600 mt-2 text-sm">
                Información legal y condiciones de uso del sitio web YaVoy.
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
              <h2 className="text-lg font-bold text-slate-900">1. Titularidad del sitio</h2>
              <p className="mt-2">
                Este sitio web (en adelante, “la Plataforma”) es operado por <b>YaVoy</b>.
                Los datos del titular (razón social, NIF/CIF, domicilio, email) se completarán
                en la versión final de producción.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">2. Objeto</h2>
              <p className="mt-2">
                La Plataforma facilita el contacto entre usuarios para la publicación, búsqueda y gestión
                de anuncios de servicios por barrios, así como el acceso a un marketplace local.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">3. Condiciones de uso</h2>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>
                  El usuario se compromete a hacer un uso lícito, diligente y correcto de la Plataforma.
                </li>
                <li>
                  Queda prohibido introducir contenidos falsos, ilícitos, difamatorios o que vulneren derechos de terceros.
                </li>
                <li>
                  El titular podrá suspender cuentas o anuncios que incumplan las normas o generen riesgo para terceros.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">4. Propiedad intelectual</h2>
              <p className="mt-2">
                Todos los contenidos (marcas, textos, diseños, logos, código y elementos gráficos) pertenecen a YaVoy
                o a terceros que han autorizado su uso. Queda prohibida su reproducción sin autorización.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">5. Responsabilidad</h2>
              <p className="mt-2">
                La Plataforma actúa como intermediaria tecnológica. La ejecución de trabajos/servicios o la compra-venta
                en el marketplace se realiza bajo la responsabilidad de las partes intervinientes, sin perjuicio de los
                mecanismos de soporte y resolución de incidencias que YaVoy pueda ofrecer.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">6. Enlaces</h2>
              <p className="mt-2">
                Este sitio puede contener enlaces a terceros. YaVoy no se responsabiliza de contenidos externos.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">7. Legislación aplicable</h2>
              <p className="mt-2">
                Salvo disposición en contrario, se aplicará la normativa española.
              </p>
            </section>

            <div className="pt-6 border-t border-gray-100 text-xs text-slate-500">
              Última actualización: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">
          También puedes consultar: <Link to="/privacidad" className="font-bold hover:underline">Privacidad</Link> ·{' '}
          <Link to="/cookies" className="font-bold hover:underline">Cookies</Link> ·{' '}
          <Link to="/terminos" className="font-bold hover:underline">Términos</Link>
        </div>
      </div>
    </div>
  );
};

export default AvisoLegalPage;
