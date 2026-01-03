import React from "react";

const TITLE = "YaVoy - Particulares";

type Example = {
  tag: string;
  tagClass: string;
  title: string;
  quote: string;
  details: { label: string; value: string }[];
  breakdown: { label: string; value: string; strong?: boolean }[];
  imageUrl: string;
  imageAlt: string;
};

const examples: Example[] = [
  {
    tag: "Mascotas",
    tagClass:
      "bg-orange-50 dark:bg-orange-900/50 text-orange-600 dark:text-orange-400",
    title: "Paseo de mascota (perro) — 45 min",
    quote:
      "“Estuve con una lesión y necesitaba sacar a Toby. En 12 minutos encontré a un vecino disponible.”",
    details: [
      { label: "Duración", value: "45 min" },
      { label: "Zona", value: "Barrio / cerca de casa" },
      { label: "Confirmación", value: "En el mismo día" },
    ],
    breakdown: [
      { label: "Abono por el servicio", value: "8,00 €" },
      { label: "Comisión YaVoy", value: "3,00 €" },
      { label: "Seguro opcional", value: "2,00 €" },
      { label: "Total abonado", value: "13,00 €", strong: true },
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-OF1MNw6vR7Xuz2fDnZeRdTVjUUNuQvcOQW84EG84gYuBnB_Qv8CCqo_waA6cSrY5rgLuRPxYeow7YujRQy9AyJKTCZfDpQJb13hNpPT5884qbK5etBDHvkWrYl650Dv8yg-h15z9vN6GNuPsPYlrLI2h_GbzCh9OqDOLxOy0L0Ss6L_JGPIitTCNKgcG8BNtzLMn25dgI5VHmusQgOo_QK2SacjUKX9nTl6GgMSXhvxqWTNozeIp2GACGom3OGKOZRkhnUxMPg",
    imageAlt: "Persona paseando un perro en un parque",
  },
  {
    tag: "Acompañamiento",
    tagClass: "bg-blue-50 dark:bg-blue-900/50 text-primary",
    title: "Acompañar a mi madre al médico — 1h 30m",
    quote:
      "“Yo trabajaba y necesitaba que alguien la acompañara al cardiólogo y la ayudara con el traslado.”",
    details: [
      { label: "Duración", value: "1h 30m" },
      { label: "Incluye", value: "Traslado + espera + acompañamiento" },
      { label: "Reserva", value: "Confirmación previa" },
    ],
    breakdown: [
      { label: "Abono por el servicio", value: "18,00 €" },
      { label: "Comisión YaVoy", value: "3,00 €" },
      { label: "Seguro opcional", value: "2,00 €" },
      { label: "Total abonado", value: "23,00 €", strong: true },
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAuAeSv5fBTHdNl9KJRAgtcyCMj0tjUGUvsLbfoKh9pL5lo9pXKYZRiv6fJNCo47OXH9Dh2VlImZhVtIj3N24bakQK4ho_LzWEyqZipoO-FawI7SP_U5FaUTQLXo3Cy6dWS7OFYMLUnsesAyoMxYYWjRwNVFUJ5oCTXeOH0g1GPxRMBIBoqrc7bm1q6L9cUGF3NCmV952Bp09cCL3DEaz7cWbcZvgLlMwWf6aytguI4iXsgY1pk79l7XfGeN5Klf6R0ei-eCIkVkQ",
    imageAlt: "Persona mayor acompañada por alguien joven en la calle",
  },
  {
    tag: "Mudanzas",
    tagClass:
      "bg-purple-50 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400",
    title: "Pequeños portes / mudanza ligera — 2h",
    quote:
      "“Solo necesitaba mover 6 cajas y una maleta. Un colaborador con furgoneta me ayudó rápido y a buen precio.”",
    details: [
      { label: "Duración", value: "2h" },
      { label: "Incluye", value: "Carga + traslado + descarga" },
      { label: "Vehículo", value: "Con furgoneta" },
    ],
    breakdown: [
      { label: "Abono por el servicio", value: "35,00 €" },
      { label: "Comisión YaVoy", value: "3,00 €" },
      { label: "Seguro opcional", value: "2,00 €" },
      { label: "Total abonado", value: "40,00 €", strong: true },
    ],
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGGwxS7A3GuvYmf_ItKAu_Cdpgpu2GD3VAOwP8XfkAh9cCuEVccvmPJSiVlALu5cX6n8Bu4XixGezjoxmghzV73N0lhV_UKYuqs4VkZLdl4FhYA0d2fBUStxRAm9xiuysvSyWb5tWNFClUMYOfJTH1MMnoCUCTR3hj_YOsxCEF8REGoa84la83CeHVwIhCNrxVY8NO5eNDtT-ydfSR3iT8aq3tpcYZrkpEATd1QLVLzvt4VLXxoU1H-eGIpT-PqbuCTP6XArqISA",
    imageAlt: "Personas moviendo cajas en una mudanza",
  },
];

export default function Particulares() {
  React.useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#101922] text-[#0d141b] dark:text-white">
      {/* HERO */}
      <main className="flex-grow">
        <section className="relative bg-slate-50 dark:bg-[#101922]">
          <div className="px-4 md:px-10 py-12 md:py-20 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex flex-col gap-6 md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 w-fit">
                  <span className="material-symbols-outlined text-[#137fec] text-sm">
                    verified
                  </span>
                  <span className="text-[#137fec] text-xs font-bold uppercase tracking-wide">
                    Para Particulares
                  </span>
                </div>

                <h1 className="text-[#0d141b] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">
                  El “boca a boca” del barrio, pero digital: encuentra ayuda fiable a un precio justo..
                </h1>

                <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                  Publica una necesidad, recibe candidaturas y confirma a un
                  colaborador. El abono se realiza por la plataforma para mayor
                  seguridad y trazabilidad.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">
                      1) Publica
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      Describe la tarea y el tiempo estimado.
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">
                      2) Elige
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      Revisa perfiles, verificación y reseñas.
                    </p>
                  </div>
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">
                      3) Abona
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      Pago por servicio + comisión + seguro opcional.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#137fec] text-white text-base font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20">
                    Solicitar Ayuda
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-12 px-6 bg-white dark:bg-slate-800 text-[#0d141b] dark:text-white border border-gray-200 dark:border-gray-700 text-base font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
                    Buscar Vivienda
                  </button>
                </div>

                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                  YaVoy es una plataforma de intermediación digital. La elección
                  del colaborador y los detalles del servicio dependen de las
                  partes.
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <div
                  className="w-full aspect-video md:aspect-[4/3] bg-center bg-cover rounded-2xl shadow-xl"
                  aria-label="Vecinos colaborando en una calle soleada"
                  role="img"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiZvP36O87QXjHpLiasx6qMkfpArYjsSMdSlDOUPjQmsoFcHYoTXtaUqkl_uDw4PCVXCXC_2z3sCLz4brZKsCepeHl8AvE6F3t8X2hHR4MhivikRogFtpsOkBSRMeizqJ07jrSrI5blllvkGVYh_PYLti2u7JoD3FkdA-06wy6gqbp9cKE3D_OJlDbvwlF4fYkqNii_SGeElWB6-BY4knZxDPqO08q9nJtBTAJ1Y_pXOgFP5Y93YME7-GB4iMQfNtJvzMYABwIZQ")',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* QUÉ PUEDES HACER */}
        <section className="py-16 bg-white dark:bg-[#15202b]">
          <div className="px-4 md:px-10 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 mb-10">
              <h2 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight">
                ¿Qué puedes hacer en YaVoy?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
                Publica una necesidad o explora lo que ofrece tu zona.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ayuda */}
              <div className="group flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-[#101922] hover:border-[#137fec]/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#137fec] mb-2">
                  <span className="material-symbols-outlined text-3xl">
                    volunteer_activism
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d141b] dark:text-white mb-2">
                    Solicitar Ayuda
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    Para tareas cotidianas <b>puntuales</b> (paseo de mascota,
                    acompañamiento, pequeños portes) o <b>recurrentes</b>{" "}
                    (apoyo semanal). El abono es por servicio confirmado.
                  </p>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-300 bg-white dark:bg-slate-800 p-3 rounded border border-gray-100 dark:border-gray-700">
                    <span className="material-symbols-outlined align-middle text-base mr-1">
                      info
                    </span>
                    Abonas por la plataforma: servicio + comisión YaVoy + seguro
                    opcional.
                  </div>
                </div>
              </div>

              {/* Vivienda */}
              <div className="group flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-[#101922] hover:border-[#137fec]/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-2">
                  <span className="material-symbols-outlined text-3xl">
                    real_estate_agent
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d141b] dark:text-white mb-2">
                    Vivienda
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    Encuentra piso o habitación y contacta con particulares o
                    agencias. YaVoy facilita la conexión.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-symbols-outlined text-green-500 mr-2 text-lg">
                        check_circle
                      </span>
                      Alquila una habitación libre
                    </li>
                    <li className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                      <span className="material-symbols-outlined text-green-500 mr-2 text-lg">
                        check_circle
                      </span>
                      Encuentra piso cerca de ti
                    </li>
                  </ul>
                </div>
              </div>

              {/* Comercio local */}
              <div className="group flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-slate-50 dark:bg-[#101922] hover:border-[#137fec]/50 transition-all duration-300 hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2">
                  <span className="material-symbols-outlined text-3xl">
                    storefront
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d141b] dark:text-white mb-2">
                    Comercio Local
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                    Descubre ofertas de tu barrio y compra a comercios cercanos.
                  </p>
                  <a
                    className="inline-flex items-center text-sm font-bold text-[#137fec] hover:underline"
                    href="#"
                  >
                    Ver tiendas cercanas{" "}
                    <span className="material-symbols-outlined text-sm ml-1">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EJEMPLOS REALES (con abono) */}
        <section className="py-16 bg-slate-50 dark:bg-[#101922]">
          <div className="px-4 md:px-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight mb-2">
                  Ejemplos reales con abono
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Tres casos típicos de colaboración y el total abonado en
                  plataforma.
                </p>
              </div>
              <button className="text-[#137fec] font-bold text-sm hover:underline">
                Ver todas las categorías
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {examples.map((ex) => (
                <div
                  key={ex.title}
                  className="bg-white dark:bg-[#1a2634] rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url("${ex.imageUrl}")` }}
                    role="img"
                    aria-label={ex.imageAlt}
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${ex.tagClass}`}
                      >
                        {ex.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#0d141b] dark:text-white mb-2">
                      {ex.title}
                    </h4>

                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      {ex.quote}
                    </p>

                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {ex.details.map((d) => (
                        <div
                          key={d.label}
                          className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-2"
                        >
                          <p className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400 font-semibold">
                            {d.label}
                          </p>
                          <p className="text-sm font-semibold mt-0.5">
                            {d.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-2">
                        Abono (ejemplo)
                      </p>
                      <div className="space-y-1">
                        {ex.breakdown.map((b) => (
                          <div
                            key={b.label}
                            className="flex items-center justify-between text-sm"
                          >
                            <span className="text-slate-600 dark:text-slate-300">
                              {b.label}
                            </span>
                            <span
                              className={
                                b.strong
                                  ? "font-black text-[#0d141b] dark:text-white"
                                  : "font-semibold text-[#0d141b] dark:text-white"
                              }
                            >
                              {b.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <p className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Importes orientativos. El abono final depende del
                        servicio acordado. YaVoy no supervisa la ejecución del
                        servicio: conecta a las partes.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CUÁNDO NO USAR */}
        <section className="py-12 bg-white dark:bg-[#15202b]">
          <div className="px-4 md:px-10 max-w-4xl mx-auto">
            <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-r-lg p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="shrink-0">
                  <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-3 text-red-600 dark:text-red-400 w-fit">
                    <span className="material-symbols-outlined text-3xl">
                      warning
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0d141b] dark:text-white mb-3">
                    Cuándo NO usar YaVoy
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    YaVoy es para colaboración vecinal y tareas cotidianas. Por
                    seguridad, evita solicitudes que requieran licencias
                    profesionales estrictas o impliquen riesgo.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-red-500 text-lg">
                        block
                      </span>
                      <span>Emergencias médicas o sanitarias.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-red-500 text-lg">
                        block
                      </span>
                      <span>Reformas estructurales o peligrosas.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-red-500 text-lg">
                        block
                      </span>
                      <span>Transporte de mercancías peligrosas.</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-red-500 text-lg">
                        block
                      </span>
                      <span>Servicios financieros o legales.</span>
                    </li>
                  </ul>

                  <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    Si el servicio se transforma en una relación de empleo o
                    requiere gestión laboral, usa el módulo <b>Empleo</b>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AVISO LEGAL */}
        <section className="bg-slate-100 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 md:px-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-slate-400 text-3xl">
                gavel
              </span>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-[#0d141b] dark:text-white text-sm">
                  Aviso de responsabilidad
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                  YaVoy actúa exclusivamente como intermediario tecnológico para
                  conectar usuarios. No somos empleadores ni responsables de la
                  calidad, seguridad o legalidad de los servicios prestados
                  entre particulares. Es responsabilidad de las partes verificar
                  identidad y acordar los términos finales.
                </p>
              </div>
            </div>
            <a className="whitespace-nowrap text-xs font-bold text-[#137fec] hover:underline" href="#">
              Leer Términos y Condiciones
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER (si lo tienes global en layout, quítalo de aquí) */}
      <footer className="bg-white dark:bg-[#101922] border-t border-slate-200 dark:border-gray-800 py-10">
        <div className="px-4 md:px-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[#0d141b] dark:text-white">
                <div className="flex items-center justify-center bg-[#137fec] rounded-lg w-6 h-6 text-white">
                  <span className="material-symbols-outlined text-sm">near_me</span>
                </div>
                <span className="text-lg font-bold">YaVoy</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
                Conectando barrios, simplificando vidas. Plataforma de intermediación digital.
              </p>
            </div>

            <div className="flex flex-wrap gap-12">
              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-[#0d141b] dark:text-white text-sm">
                  Plataforma
                </h5>
                <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec]" href="#">
                  Particulares
                </a>
                <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec]" href="#">
                  Comercios
                </a>
                <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec]" href="#">
                  Cómo funciona
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-[#0d141b] dark:text-white text-sm">Legal</h5>
                <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec]" href="#">
                  Aviso Legal
                </a>
                <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec]" href="#">
                  Política de Privacidad
                </a>
                <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec]" href="#">
                  Cookies
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="font-bold text-[#0d141b] dark:text-white text-sm">Contacto</h5>
                <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-[#137fec]" href="#">
                  Soporte
                </a>
                <div className="flex gap-4 mt-2">
                  <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div className="w-6 h-6 bg-slate-200 dark:bg-slate-700 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-100 dark:border-gray-800 text-center md:text-left">
            <p className="text-xs text-slate-400">
              © 2026 YaVoy España S.L. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
