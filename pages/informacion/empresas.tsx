import React from "react";
import { Link } from "react-router-dom";

const GiftIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
        "rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg",
        ghost ? "opacity-90" : "hover:border-white/20",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-blue-100">
            {tag}
          </span>
          <span className="text-[11px] font-semibold text-emerald-300">{rate}</span>
        </div>

        <div className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-xs font-bold text-white">
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
            <span className="text-emerald-300">✔</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center gap-2 text-xs text-blue-100/80">
        <span className="rounded-full bg-white/10 px-2 py-1">Perfil</span>
        <span>con reputación y verificaciones</span>
      </div>
    </div>
  );
};

type PlanCardProps = {
  title: string;
  price: string;
  suffix: string;
  desc: string;
  note: string;
  highlight?: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({ title, price, suffix, desc, note, highlight }) => {
  return (
    <div
      className={[
        "rounded-2xl border p-5 shadow-xl",
        highlight ? "border-emerald-300/40 bg-white/10" : "border-white/10 bg-white/5",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-white font-extrabold">{title}</div>
        {highlight ? (
          <span className="rounded-full bg-emerald-300 px-3 py-1 text-[11px] font-bold text-slate-900">
            Recomendado
          </span>
        ) : null}
      </div>

      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-3xl font-black text-white">{price}</div>
        <div className="text-sm text-purple-100">{suffix}</div>
      </div>

      <div className="mt-2 text-sm text-purple-100/90">{desc}</div>

      <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white">
        {note}
      </div>

      <button
        className={[
          "mt-4 w-full rounded-xl py-2.5 text-sm font-bold transition",
          highlight ? "bg-emerald-300 text-slate-900 hover:bg-emerald-200" : "bg-white/10 text-white hover:bg-white/15",
        ].join(" ")}
      >
        Elegir {title}
      </button>
    </div>
  );
};

const InfoEmpresas: React.FC = () => {
  return (
    <div className="bg-[#0b1219] font-display text-white antialiased overflow-x-hidden">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        {/* HERO (sin header) */}
        <section className="w-full">
          <div className="max-w-[1200px] mx-auto px-4 md:px-10 w-full">
            <div className="grid lg:grid-cols-2 gap-8 items-stretch min-h-screen py-8 lg:py-10">
              {/* TEXTO */}
              <div className="flex flex-col justify-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-2xl bg-white/5 border border-white/10 grid place-items-center">
                    <span className="text-xl" aria-hidden="true">⚡</span>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-blue-200">YaVoy Empresas</div>
                    <div className="text-sm text-blue-100/80">Intermediación · Reputación · Registro</div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 text-left">
                  <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                    Contrata por barrio y acelera tus operaciones
                  </h1>

                  <p className="text-text-secondary text-lg font-normal leading-relaxed max-w-[640px]">
                    Publica una necesidad, recibe candidaturas, filtra por cercanía y reputación, chatea y cierra el servicio con pagos trazables.
                    <span className="text-gray-300"> El acuerdo del servicio se realiza directamente entre la empresa y el colaborador.</span>
                  </p>
                </div>

                {/* BOTONES (solo 1 para registro + secundario opcional) */}
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link
                    to="/register"
                    className="flex min-w-[220px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold"
                  >
                    <span className="truncate">Regístrate como empresa</span>
                  </Link>

                  <a
                    href="#empresas"
                    className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/5 border border-white/15 hover:bg-white/10 transition-colors text-white text-base font-bold"
                  >
                    <span className="truncate">Ver ejemplos</span>
                  </a>
                </div>
              </div>

              {/* IMAGEN (full height, sin recortar) */}
              <div className="relative rounded-2xl overflow-hidden border border-border-dark bg-card-dark shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                <div className="h-[420px] sm:h-[520px] lg:h-[calc(100vh-140px)] w-full flex items-center justify-center p-4">
                  <img
                    src="/assets/empresas.png"
                    alt="YaVoy Empresas"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
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

        {/* QUÉ ES */}
        <section className="py-16 md:py-24 bg-[#14181d]" id="que-es">
          <div className="max-w-[1200px] mx-auto px-4 w-full">
            <div className="flex flex-col gap-4 mb-12">
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight max-w-[720px]">
                Cómo funciona para empresas
              </h2>
              <p className="text-text-secondary text-lg max-w-[720px]">
                Publicación, selección, chat y cierre del servicio. Control y trazabilidad sin burocracia innecesaria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-6 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-2xl" aria-hidden="true">🛰️</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">Publica y recibe candidaturas</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Define tu necesidad (por horas o por servicio) y recibe candidatos por cercanía, disponibilidad y reputación.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-6 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-2xl" aria-hidden="true">💬</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">Chatea y acuerda condiciones</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Aclara alcance, precio, horario y punto de encuentro antes de cerrar. El acuerdo se realiza entre empresa y colaborador.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border border-border-dark bg-card-dark p-6 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="text-2xl" aria-hidden="true">🧾</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold">Pago trazable y registro</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Pagos y registro del servicio para control interno, incidencias y reputación. Todo queda documentado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOQUE EMPRESAS */}
        <section id="empresas" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
          <div className="mx-auto max-w-[1200px] px-4 md:px-10 py-14 space-y-10">
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Ejemplos</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Casos típicos en tu zona</h2>
              <p className="text-sm text-blue-100 max-w-[820px]">
                Ejemplos orientativos (por horas o por servicio). Tú defines condiciones y eliges candidato.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
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

            <div className="rounded-3xl bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-900 p-6 sm:p-8 shadow-2xl border border-white/10">
              <div className="flex items-center gap-3 text-white">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-white">
                  <GiftIcon />
                </div>
                <div>
                  <div className="text-2xl font-extrabold">Bonos de contratación</div>
                  <div className="text-sm text-purple-100">Ahorra si publicas con frecuencia</div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                <PlanCard title="Mensual" price="15€" suffix="/mes" desc="Ilimitado durante 30 días" note="Rentable desde 2 cierres/mes" />
                <PlanCard title="Semestral" price="75€" suffix="/6 meses" desc="Ilimitado durante 180 días" note="12,5€/mes (ahorro)" highlight />
                <PlanCard title="Anual" price="120€" suffix="/año" desc="Ilimitado durante 365 días" note="10€/mes (máximo ahorro)" />
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-purple-100">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white mb-2">¿Para quién es?</div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Comercios con picos de trabajo</li>
                    <li>Hostelería por temporadas</li>
                    <li>Logística y eventos</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-semibold text-white mb-2">Ventajas</div>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Coste fijo y previsible</li>
                    <li>Menos fricción para publicar</li>
                    <li>Mejor para uso recurrente</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-purple-100/90">
                Nota: YaVoy facilita la conexión y herramientas (chat, reputación, registro). Las condiciones del servicio se acuerdan entre empresa y colaborador.
              </div>
            </div>
          </div>
        </section>

        {/* LEGAL */}
        <section className="py-12 bg-amber-950/10 border-y border-amber-900/20" id="legal">
          <div className="max-w-[1000px] mx-auto px-4 w-full">
            <div className="flex flex-col md:flex-row gap-6 items-start p-6 rounded-xl border border-amber-700/30 bg-amber-950/20">
              <div className="shrink-0 text-amber-500">
                <span className="text-4xl" aria-hidden="true">⚠️</span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-white text-xl font-bold">Aviso legal</h3>

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
                    className="text-amber-500 text-sm font-bold underline decoration-amber-500/30 hover:decoration-amber-500 transition-all"
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
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Empieza hoy con tu primer servicio
            </h2>
            <p className="text-text-secondary text-lg max-w-[600px]">
              Publica en minutos, elige candidato por cercanía y reputación, y cierra con trazabilidad.
            </p>
            <Link
              to="/register"
              className="flex min-w-[240px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all text-white text-lg font-bold"
            >
              Regístrate como empresa
            </Link>
            <p className="text-xs text-text-secondary mt-4">Sin tarjeta requerida para registrarte.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InfoEmpresas;
