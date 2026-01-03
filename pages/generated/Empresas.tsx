import React from "react";

const TITLE = "YaVoy - Empresas";

export default function Empresas() {
  React.useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#101922] text-[#0d141b] dark:text-white">
      <main className="flex-grow flex flex-col items-center w-full">

        {/* HERO */}
        <section className="w-full max-w-[1200px] px-4 md:px-10 py-12 md:py-20">
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
            <div className="flex flex-col gap-6 md:w-1/2 items-start">
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                Impulsa tu negocio en <span className="text-primary">Madrid</span> con YaVoy
              </h1>

              <h2 className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                La plataforma de intermediación para empresas en <strong>Madrid</strong>.
                Gestiona ayuda puntual, publica ofertas de empleo, alquila o traspasa locales
                y vende productos o stock, todo desde un único panel.
              </h2>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="h-12 px-6 bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition">
                  Registrar empresa gratis
                </button>
                <button className="h-12 px-6 bg-white dark:bg-[#2a3845] border border-slate-200 dark:border-slate-600 rounded-lg font-bold">
                  Ver cómo funciona
                </button>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                Sin costes de alta
                <span className="material-symbols-outlined text-green-500">check_circle</span>
                Verificación rápida
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div
                className="w-full aspect-[4/3] rounded-2xl bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAAf-58lNDfvGGNjahyV9Egpmgn6rzGDEqcGhtj6_-wnPwrwQ3umO0Wfb5UZmpVC73Y_sFc4L9gKPZEWKJrjRa9jJVVWAreGzt2sxSCGH-H80zbBVH8lWIDoCf7YZcx_WU_Yq6Wqugq1xgFzqKTmaJeEYNjh7UriT6xwWLsLqeaiWvzwp6yC0B-669Dfoga0g2hj95IcK1qQoxHjzI5-6h5XKMUeEUpCl8O2MqcN-h7FmwNDarXofJycIL9Taw1tEINtx1I95UWQ")',
                }}
              />
            </div>
          </div>
        </section>

        {/* QUÉ PUEDE HACER UNA EMPRESA */}
        <section className="w-full max-w-[1200px] px-4 md:px-10 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Todo lo que tu empresa puede hacer en YaVoy
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-center max-w-2xl mx-auto mb-10">
            Centraliza necesidades operativas y conecta con personas y empresas de tu entorno.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Ayuda puntual */}
            <div className="p-6 rounded-xl border bg-slate-50 dark:bg-[#1a2632]">
              <h3 className="font-bold text-lg mb-2">Ayuda puntual</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Solicita apoyo para tareas concretas: cargas, descargas, eventos,
                limpieza puntual o refuerzos temporales.
              </p>
              <p className="text-xs text-slate-500">
                Acuerdas el servicio y el precio directamente con el colaborador.
              </p>
            </div>

            {/* Empleo */}
            <div className="p-6 rounded-xl border bg-slate-50 dark:bg-[#1a2632]">
              <h3 className="font-bold text-lg mb-2">Ofertas de empleo</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Publica vacantes formales para tu empresa y gestiona candidaturas
                desde el módulo de empleo.
              </p>
              <p className="text-xs text-slate-500">
                Para relaciones laborales continuadas.
              </p>
            </div>

            {/* Locales */}
            <div className="p-6 rounded-xl border bg-slate-50 dark:bg-[#1a2632]">
              <h3 className="font-bold text-lg mb-2">Locales y oficinas</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Publica alquileres, traspasos o cesiones de locales y oficinas
                directamente a interesados.
              </p>
            </div>

            {/* Productos */}
            <div className="p-6 rounded-xl border bg-slate-50 dark:bg-[#1a2632]">
              <h3 className="font-bold text-lg mb-2">Venta de productos</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Vende stock, excedentes, maquinaria o productos directamente
                a empresas o particulares de tu zona.
              </p>
            </div>

          </div>
        </section>

        {/* BUENAS PRÁCTICAS */}
        <section className="w-full bg-white dark:bg-[#1a2632] py-16 border-y">
          <div className="max-w-[1000px] mx-auto px-4 md:px-10">
            <h2 className="text-2xl font-bold mb-6">Buenas prácticas</h2>

            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <li>
                • Describe con claridad la tarea, el tiempo estimado y el precio orientativo.
              </li>
              <li>
                • Usa el módulo de <strong>Empleo</strong> si el servicio implica relación laboral.
              </li>
              <li>
                • Verifica perfiles y mantén la comunicación dentro de YaVoy.
              </li>
              <li>
                • Cumple con la normativa laboral y fiscal aplicable a tu empresa.
              </li>
            </ul>
          </div>
        </section>

        {/* RESPONSABILIDAD */}
        <section className="w-full max-w-[1000px] px-4 md:px-10 py-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Límites y responsabilidades
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border bg-slate-50 dark:bg-[#1a2632]">
              <h3 className="font-bold mb-2">Rol de YaVoy</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                YaVoy actúa como plataforma de intermediación digital.
                No emplea, no contrata ni supervisa los servicios acordados
                entre empresas y colaboradores.
              </p>
            </div>

            <div className="p-6 rounded-xl border bg-slate-50 dark:bg-[#1a2632]">
              <h3 className="font-bold mb-2">Responsabilidad empresarial</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Las empresas son responsables del cumplimiento legal,
                fiscal y laboral derivado de sus acuerdos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="w-full bg-slate-900 text-white py-14">
          <div className="max-w-[800px] mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">
              Empezamos por Madrid
            </h2>
            <p className="text-slate-400 mb-6">
              Publica tu necesidad, recibe respuestas y gestiona todo desde YaVoy.
            </p>
            <button className="h-12 px-8 bg-primary rounded-lg font-bold hover:bg-blue-600">
              Crear cuenta de empresa
            </button>
          </div>
        </section>

      </main>

      <footer className="w-full border-t py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © 2026 YaVoy Madrid · Plataforma de intermediación digital
      </footer>
    </div>
  );
}
