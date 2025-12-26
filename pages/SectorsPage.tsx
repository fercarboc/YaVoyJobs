import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '../components/Icons';
import { theme } from '../theme';

const SECTORS = [
  { title: 'Hogar y reparaciones', desc: 'Montaje, bricolaje, pequeñas reformas, electricidad.' },
  { title: 'Limpieza', desc: 'Limpieza puntual, fin de obra, plancha, cristales.' },
  { title: 'Recados y logística', desc: 'Compras, entregas, mudanzas pequeñas, porte.' },
  { title: 'Cuidado y asistencia', desc: 'Acompañamiento, ayuda a mayores, canguro.' },
  { title: 'Tecnología', desc: 'Soporte, wifi, instalación, ordenadores, móviles.' },
  { title: 'Restauración', desc: 'Ayudantes, extras, eventos, reparto local.' },
  { title: 'Comercio y tienda', desc: 'Reposición, inventario, atención al cliente.' },
  { title: 'Otros', desc: 'Tareas personalizadas por barrio.' },
];

const SectorsPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Sectores</h1>
            <p className="text-slate-600 mt-2">
              Selecciona el sector al publicar un anuncio o al buscar trabajos.
            </p>
          </div>

          <Link
            to="/register"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-white shadow hover:opacity-95 transition"
            style={{ background: theme.colors.primary }}
          >
            Crear cuenta <Icons.ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SECTORS.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-2 text-slate-900 font-bold">
                <Icons.Check size={18} />
                {s.title}
              </div>
              <p className="text-sm text-slate-600 mt-2">{s.desc}</p>
              <div className="mt-4">
                <Link
                  to="/register"
                  className="text-sm font-bold hover:underline inline-flex items-center gap-2"
                  style={{ color: theme.colors.primary }}
                >
                  Publicar en este sector <Icons.ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <Icons.Info size={18} />
            Nota
          </div>
          <p className="text-sm text-slate-600 mt-2">
            Esto es UI base. Cuando quieras, conectamos estos sectores a tu tabla real en Supabase (VoySectors/VoyMicrotasks)
            y los cargamos dinámicamente.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectorsPage;
