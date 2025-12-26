import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

const PrivacidadPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900">Política de Privacidad</h1>
              <p className="text-slate-600 mt-2 text-sm">
                Cómo tratamos tus datos personales y tus derechos.
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
              <h2 className="text-lg font-bold text-slate-900">1. Responsable del tratamiento</h2>
              <p className="mt-2">
                Responsable: <b>YaVoy</b>. Datos completos (razón social, NIF/CIF, domicilio y contacto) se incorporarán
                en producción.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">2. Datos que podemos tratar</h2>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Datos de cuenta: nombre, email, teléfono, ciudad, rol de usuario.</li>
                <li>Datos de uso: actividad en la plataforma (anuncios, candidaturas, chats, compras).</li>
                <li>Datos técnicos: IP, dispositivo, navegador, logs (según configuración).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">3. Finalidades</h2>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Crear y gestionar tu cuenta.</li>
                <li>Publicación y gestión de anuncios, candidaturas y comunicaciones.</li>
                <li>Gestión de pedidos/ventas del marketplace.</li>
                <li>Prevención de fraude y seguridad.</li>
                <li>Atención al cliente y soporte.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">4. Base jurídica</h2>
              <ul className="mt-2 list-disc pl-6 space-y-2">
                <li>Ejecución de contrato (prestación del servicio).</li>
                <li>Cumplimiento legal (facturación, obligaciones aplicables).</li>
                <li>Interés legítimo (seguridad, mejora del servicio).</li>
                <li>Consentimiento (si aplica: comunicaciones comerciales, cookies no técnicas).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">5. Conservación</h2>
              <p className="mt-2">
                Conservaremos los datos durante el tiempo necesario para la finalidad del tratamiento y para cumplir obligaciones legales.
                Algunos datos pueden conservarse bloqueados para atender responsabilidades.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">6. Destinatarios</h2>
              <p className="mt-2">
                Podemos utilizar proveedores tecnológicos (por ejemplo, hosting, autenticación, pasarela de pagos) que actúan como
                encargados del tratamiento. No vendemos datos personales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">7. Derechos</h2>
              <p className="mt-2">
                Puedes ejercer acceso, rectificación, supresión, oposición, limitación y portabilidad, así como retirar el consentimiento
                cuando corresponda. Podrás solicitarlo mediante el canal de soporte indicado en la Plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900">8. Seguridad</h2>
              <p className="mt-2">
                Aplicamos medidas razonables de seguridad. Aun así, ningún sistema es 100% infalible. Si detectas un problema,
                notifícalo al soporte.
              </p>
            </section>

            <div className="pt-6 border-t border-gray-100 text-xs text-slate-500">
              Última actualización: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-slate-500">
          Ver también: <Link to="/aviso-legal" className="font-bold hover:underline">Aviso Legal</Link> ·{' '}
          <Link to="/cookies" className="font-bold hover:underline">Cookies</Link> ·{' '}
          <Link to="/terminos" className="font-bold hover:underline">Términos</Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacidadPage;
