// src/informacion/infoempresas.tsx
import React from "react";
import { Link } from "react-router-dom";

/** ---------------- ICONOS SVG (sin dependencias externas) ---------------- */
const GiftIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 12v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M2 7h20v5H2V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 22V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path
      d="M12 7c-2.2 0-4-1.3-4-3s1.8-3 4-1c2.2-2 4-1 4 1s-1.8 3-4 3Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const BoltIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
  </svg>
);

const RadarIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2a10 10 0 1 0 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 12l8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 12a3 3 0 1 0 0.001 0Z" stroke="currentColor" strokeWidth="2" />
    <path d="M12 5a7 7 0 0 1 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
  </svg>
);

const ChatIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M4 5.5A3.5 3.5 0 0 1 7.5 2h9A3.5 3.5 0 0 1 20 5.5v7A3.5 3.5 0 0 1 16.5 16H9l-4 4v-4.5A3.5 3.5 0 0 1 4 12.5v-7Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M8 8h8M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
  </svg>
);

const ReceiptIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M7 2h10a2 2 0 0 1 2 2v18l-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1V4a2 2 0 0 1 2-2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path d="M8 7h8M8 11h8M8 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
  </svg>
);

const WarningIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2 22 20H2L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <path d="M12 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

/** ---------------- COMPONENTES ---------------- */
type JobExampleProps = {
  tag: string;
  rate: string;
  title: string;
  desc: string;
  bullets: string[];
  avatar: string;
  ghost?: boolean;
};

const JobExample: React.FC<JobExampleProps> = ({ tag, rate, title, desc, bullets, avatar, ghost }) => {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur",
        "hover:border-white/20 hover:bg-white/[0.07] transition",
        ghost ? "opacity-90" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-blue-100">
            {tag}
          </span>
          <span className="text-[11px] font-semibold text-emerald-300">{rate}</span>
        </div>

        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-extrabold text-white ring-1 ring-white/15">
          {avatar}
        </div>
      </div>

      <div className="mt-3">
        <div className="text-base font-extrabold text-white">{title}</div>
        <div className="mt-1 text-sm text-blue-100/80">{desc}</div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
        {bullets.map((b) => (
          <li key={b} className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/20">
              <span className="text-xs">✓</span>
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-2 text-xs text-blue-100/80">
        <span className="rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/10">Perfil</span>
        <span>con reputación y verificaciones</span>
      </div>
    </div>
  );
};

const InfoEmpresas: React.FC = () => {
  const smoothScrollTo = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Planes (según vuestra tabla de precios)
  const empresaMensual = 19.9;
  const descSemestral = 0.10; // 10%
  const descAnual = 0.17; // 17%

  const semestralTotal = +(empresaMensual * 6 * (1 - descSemestral)).toFixed(2);
  const semestralEfectivo = +(semestralTotal / 6).toFixed(2);

  const anualTotal = +(empresaMensual * 12 * (1 - descAnual)).toFixed(2);
  const anualEfectivo = +(anualTotal / 12).toFixed(2);

  return (
    <div className="bg-[#0b1219] font-display text-white antialiased overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* HERO */}
        <section className="w-full">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10 w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch min-h-screen py-8 lg:py-10">
              {/* TEXTO */}
              <div className="flex flex-col justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center text-blue-200">
                    <BoltIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-blue-200">YaVoy Empresas</div>
                    <div className="text-sm text-blue-100/80">Intermediación · Reputación · Registro</div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-left">
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight">
                    Contrata por barrio y acelera tus operaciones
                  </h1>

                  <p className="text-text-secondary text-lg font-normal leading-relaxed max-w-[640px] text-slate-300">
                    Publica una necesidad, recibe candidaturas, filtra por cercanía y reputación, chatea y cierra el servicio con pagos trazables.
                    <span className="text-gray-300">
                      {" "}
                      El acuerdo del servicio se realiza directamente entre la empresa y el colaborador.
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-2">
                  <Link
                    to="/register"
                    className="flex min-w-[220px] items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-extrabold shadow-lg shadow-primary/20"
                  >
                    Regístrate como empresa
                  </Link>

                  <button
                    type="button"
                    onClick={() => smoothScrollTo("#empresas")}
                    className="flex min-w-[180px] items-center justify-center rounded-xl h-12 px-6 bg-white/5 border border-white/15 hover:bg-white/10 transition-colors text-white text-base font-extrabold"
                  >
                    Ver ejemplos
                  </button>
                </div>
              </div>

              {/* IMAGEN */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="h-[420px] sm:h-[520px] lg:h-[calc(100vh-140px)] w-full flex items-center justify-center p-4">
                  <img src="/assets/empresas.png" alt="YaVoy Empresas" className="w-full h-full object-contain" loading="lazy" />
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <div className="rounded-xl border border-white/10 bg-black/30 backdrop-blur px-3 py-2 text-xs text-blue-100/80">
                    Publica · Filtra · Chat · Pago trazable · Reputación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA */}
        <section className="py-16 md:py-24 bg-[#14181d]" id="que-es">
          <div className="max-w-[1200px] mx-auto px-4 w-full">
            <div className="flex flex-col gap-4 mb-12">
              <h2 className="text-white text-3xl md:text-4xl font-black leading-tight max-w-[720px]">
                Cómo funciona para empresas
              </h2>
              <p className="text-slate-300 text-lg max-w-[720px]">
                Publicación, selección, chat y cierre del servicio. Control y trazabilidad sin burocracia innecesaria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary/40 hover:bg-white/[0.07] transition group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/25 group-hover:bg-primary group-hover:text-white transition-colors">
                  <RadarIcon />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-extrabold">Publica y recibe candidaturas</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Define tu necesidad (por horas o por servicio) y recibe candidatos por cercanía, disponibilidad y reputación.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary/40 hover:bg-white/[0.07] transition group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/25 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ChatIcon />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-extrabold">Chatea y acuerda condiciones</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Aclara alcance, precio, horario y punto de encuentro antes de cerrar. El acuerdo se realiza entre empresa y colaborador.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-primary/40 hover:bg-white/[0.07] transition group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/25 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ReceiptIcon />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-extrabold">Pago trazable y registro</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Pagos y registro del servicio para control interno, incidencias y reputación. Todo queda documentado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EJEMPLOS + PLANES */}
        <section id="empresas" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
          <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-14 space-y-10">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Ejemplos</p>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">Casos típicos en tu zona</h2>
              <p className="text-sm text-blue-100 max-w-[820px]">
                Ejemplos orientativos (por horas o por servicio). Tú defines condiciones y eliges candidato.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-extrabold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Regístrate como empresa
                </Link>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              <JobExample
                tag="Hostelería"
                rate="12€ / hora"
                title="Refuerzo en sala"
                desc="Turno viernes y sábado noche. Zona Legazpi."
                bullets={["Cercanía y disponibilidad", "Chat y condiciones antes de cerrar", "Pago trazable"]}
                avatar="BR"
              />
              <JobExample
                tag="Logística"
                rate="Servicio puntual"
                title="Carga y descarga"
                desc="Apoyo 3 horas. Zona Arganzuela."
                bullets={["Servicio por tarea", "Candidaturas por barrio", "Registro del servicio"]}
                avatar="PL"
              />
              <JobExample
                tag="Admin"
                rate="15€ / hora"
                title="Apoyo administrativo"
                desc="Ayuda puntual para cierre de mes."
                bullets={["Por horas o por tarea", "Acuerdo directo entre partes", "Reputación y valoraciones"]}
                avatar="G"
                ghost
              />
            </div>

            {/* ✅ PLANES (reemplaza “Bonos de contratación”) */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-900/60 via-slate-900 to-indigo-950 p-6 sm:p-8 shadow-2xl border border-white/10">
              <div className="flex items-center gap-3 text-white">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white ring-1 ring-white/15">
                  <GiftIcon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-black">Planes para Empresas</div>
                  <div className="text-sm text-blue-100">Elige pago por anuncio o suscripción con descuentos</div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {/* Pago por anuncio */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-white font-extrabold">Pago por anuncio</div>
                      <div className="mt-1 text-sm text-blue-100/90">
                        Ideal si publicas de forma puntual.
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-white">3€</div>
                      <div className="text-xs text-blue-100/80">por anuncio publicado</div>
                    </div>
                  </div>

                  <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
                    {["Publica una oferta cuando lo necesites", "Sin cuota fija", "Pagas solo si publicas"].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-400/20">
                          <span className="text-xs">✓</span>
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5">
                    <Link
                      to="/register"
                      className="inline-flex w-full items-center justify-center rounded-xl py-2.5 text-sm font-extrabold bg-white/10 text-white hover:bg-white/15 transition"
                    >
                      Registrarme
                    </Link>
                  </div>
                </div>

                {/* Empresa Básico */}
                <div className="rounded-2xl border border-emerald-300/30 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-white font-extrabold">Plan Empresa Básico</div>
                      <div className="mt-1 text-sm text-blue-100/90">
                        Anuncios ilimitados mientras dure la suscripción.
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-300 px-3 py-1 text-[11px] font-extrabold text-slate-900">
                      Recomendado
                    </span>
                  </div>

                  {/* Modalidades */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="text-xs font-extrabold uppercase tracking-wide text-blue-100/80">Modalidad</div>
                      <div className="mt-1 text-lg font-black text-white">Mensual</div>
                      <div className="mt-2 text-xs text-blue-100/70">1 mes</div>

                      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
                        <div className="text-xs text-blue-100/70">Total periodo</div>
                        <div className="text-lg font-black text-white">{empresaMensual.toFixed(2)}€</div>
                        <div className="mt-2 text-xs text-blue-100/70">Coste efectivo</div>
                        <div className="text-sm font-extrabold text-emerald-200">{empresaMensual.toFixed(2)}€ / mes</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-300/25 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-blue-100/80">Modalidad</div>
                        <span className="rounded-full bg-emerald-300/90 px-2 py-0.5 text-[10px] font-black text-slate-900">
                          -10%
                        </span>
                      </div>
                      <div className="mt-1 text-lg font-black text-white">Semestral</div>
                      <div className="mt-2 text-xs text-blue-100/70">6 meses</div>

                      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
                        <div className="text-xs text-blue-100/70">Total periodo</div>
                        <div className="text-lg font-black text-white">{semestralTotal.toFixed(2)}€</div>
                        <div className="mt-2 text-xs text-blue-100/70">Coste efectivo</div>
                        <div className="text-sm font-extrabold text-emerald-200">{semestralEfectivo.toFixed(2)}€ / mes</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-300/25 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-2">
                        <div className="text-xs font-extrabold uppercase tracking-wide text-blue-100/80">Modalidad</div>
                        <span className="rounded-full bg-emerald-300/90 px-2 py-0.5 text-[10px] font-black text-slate-900">
                          -17%
                        </span>
                      </div>
                      <div className="mt-1 text-lg font-black text-white">Anual</div>
                      <div className="mt-2 text-xs text-blue-100/70">12 meses</div>

                      <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-3">
                        <div className="text-xs text-blue-100/70">Total periodo</div>
                        <div className="text-lg font-black text-white">{anualTotal.toFixed(2)}€</div>
                        <div className="mt-2 text-xs text-blue-100/70">Coste efectivo</div>
                        <div className="text-sm font-extrabold text-emerald-200">{anualEfectivo.toFixed(2)}€ / mes</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 text-sm text-blue-100/90">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-extrabold text-white mb-2">Incluye</div>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Anuncios ilimitados</li>
                        <li>Candidaturas y chat</li>
                        <li>Reputación y trazabilidad</li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="font-extrabold text-white mb-2">Descuentos</div>
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Semestral: 10% descuento</li>
                        <li>Anual: 17% descuento</li>
                        <li>Mostramos coste efectivo mensual</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Link
                      to="/register"
                      className="inline-flex w-full items-center justify-center rounded-xl py-2.5 text-sm font-extrabold bg-emerald-300 text-slate-900 hover:bg-emerald-200 transition"
                    >
                      Registrarme y contratar
                    </Link>
                    <div className="mt-2 text-[12px] text-blue-100/70">
                      Nota: YaVoy facilita la conexión (chat, reputación, registro). Las condiciones del servicio se acuerdan entre empresa y colaborador.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /PLANES */}
          </div>
        </section>

        {/* LEGAL */}
        <section className="py-12 bg-amber-950/10 border-y border-amber-900/20" id="legal">
          <div className="max-w-[1000px] mx-auto px-4 w-full">
            <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-2xl border border-amber-700/30 bg-amber-950/20">
              <div className="shrink-0 text-amber-400">
                <WarningIcon className="h-10 w-10" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-xl font-black">Aviso legal</h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  YaVoy es una <strong>plataforma tecnológica de intermediación</strong> que facilita el contacto, herramientas de comunicación
                  y registro del proceso. <strong>No presta el servicio material</strong> ni actúa como empleador o ETT.
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  El servicio se acuerda <strong>directamente entre la empresa y el colaborador/candidato</strong>.
                  Si la forma de prestación pudiera generar obligaciones (laborales, fiscales o sectoriales),
                  estas corresponderán a las partes que acuerdan el servicio.
                </p>

                <div className="mt-2">
                  <Link
                    className="text-amber-300 text-sm font-extrabold underline decoration-amber-500/30 hover:decoration-amber-300 transition-all"
                    to="/legal"
                  >
                    Ver términos completos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 flex justify-center bg-[#111418]">
          <div className="flex flex-col items-center text-center gap-8 max-w-[800px]">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Empieza hoy con tu primer servicio</h2>
            <p className="text-slate-300 text-lg max-w-[600px]">
              Publica en minutos, elige candidato por cercanía y reputación, y cierra con trazabilidad.
            </p>
            <Link
              to="/register"
              className="flex min-w-[240px] items-center justify-center rounded-xl h-14 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all text-white text-lg font-extrabold"
            >
              Regístrate como empresa
            </Link>
            <p className="text-xs text-slate-400 mt-4">Sin tarjeta requerida para registrarte.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoEmpresas;
