// src/informacion/Empleo.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

/** ---------- ICONOS SVG (sin dependencias externas) ---------- */
const IconEuro = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M19 5.5c-1.35-1.2-3.23-2-5.6-2-3.56 0-6.3 2.03-7.46 5H4.5a1 1 0 0 0 0 2h1.02c-.03.33-.04.67-.04 1 0 .33.01.67.04 1H4.5a1 1 0 0 0 0 2h1.44c1.16 2.97 3.9 5 7.46 5 2.37 0 4.25-.8 5.6-2a1 1 0 1 0-1.33-1.5c-.95.85-2.34 1.5-4.27 1.5-2.4 0-4.28-1.18-5.25-3h5.35a1 1 0 0 0 0-2H7.57a8.1 8.1 0 0 1 0-2h5.93a1 1 0 0 0 0-2H8.15c.97-1.82 2.85-3 5.25-3 1.93 0 3.32.65 4.27 1.5A1 1 0 0 0 19 5.5Z"
      fill="currentColor"
    />
  </svg>
);

const IconDoc = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M7 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9.5a1 1 0 0 0-.293-.707l-5.5-5.5A1 1 0 0 0 13.5 3H7Z"
      fill="currentColor"
      opacity="0.92"
    />
    <path
      d="M14 3.2V8a2 2 0 0 0 2 2h4.8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.85"
    />
    <path
      d="M8 12h8M8 15h8M8 18h6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.9"
    />
  </svg>
);

const IconClock = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
      stroke="currentColor"
      strokeWidth="1.8"
      opacity="0.9"
    />
    <path
      d="M12 6v6l4 2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBuilding = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M4.5 20.5V6.5A3 3 0 0 1 7.5 3.5h5a3 3 0 0 1 3 3v14"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M16.5 10.5h2a1 1 0 0 1 1 1v9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M7.5 7.5h2M7.5 10.5h2M7.5 13.5h2M11.5 7.5h2M11.5 10.5h2M11.5 13.5h2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.85"
    />
    <path d="M3.5 20.5h17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
  </svg>
);

const IconPersonAdd = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M15 20.5a6.5 6.5 0 0 0-13 0"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M8.5 11.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M19 8.5v6M16 11.5h6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const IconChat = ({ className = "h-10 w-10" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path
      d="M7 18.5l-3 2v-4a8 8 0 0 1 8-8h1a8 8 0 0 1 8 8v.5a3 3 0 0 1-3 3H12a8 8 0 0 1-5-2Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      strokeLinecap="round"
    />
    <path
      d="M9 12.5h6M9 15.5h4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

/** ---------- UI ---------- */
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle }) => (
  <div className="flex gap-4 rounded-2xl border border-slate-800/60 bg-[#0f172a]/70 p-6 items-center shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center size-12 rounded-2xl bg-primary/15 text-primary shrink-0 ring-1 ring-primary/25">
      <div className="leading-none">{icon}</div>
    </div>
    <div>
      <h3 className="text-white text-lg font-extrabold">{title}</h3>
      <p className="text-sm text-slate-300">{subtitle}</p>
    </div>
  </div>
);

type StepProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const Step: React.FC<StepProps> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center gap-4 text-center relative z-10">
    <div className="size-24 rounded-full bg-[#0f172a] border-4 border-primary/25 flex items-center justify-center shadow-sm ring-1 ring-slate-800">
      <div className="text-primary">{icon}</div>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-white text-xl font-extrabold">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function Empleo() {
  const navigate = useNavigate();
  const { auth } = useAuth?.() || { auth: undefined as any };

  React.useEffect(() => {
    document.title = "Empleo - YaVoy";
    if (auth?.isAuthenticated) navigate("/panel", { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#0b1220] text-white">
      <main className="flex-1">
        {/* HERO */}
        <section className="px-4 py-12 lg:py-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-10 lg:flex-row items-center">
              <div className="flex flex-col gap-6 lg:w-1/2">
                <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] lg:text-5xl xl:text-6xl">
                  Encuentra tu próximo <span className="text-primary">empleo estable</span>
                </h1>

                <p className="text-slate-300 text-lg leading-relaxed">
                  Contrata talento con garantías. Todo claro desde el principio: contrato, salario y jornada siempre visibles.
                </p>

                {/* ✅ CAMBIO: solo un botón */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <button
                    onClick={() => scrollTo("como-funciona")}
                    className="flex h-12 px-6 items-center justify-center rounded-xl bg-primary text-white text-base font-extrabold hover:bg-primary/90 transition-colors shadow-primary/25 shadow-lg"
                  >
                    Cómo funciona
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div
                  className="w-full aspect-[4/3] bg-center bg-cover bg-no-repeat rounded-3xl shadow-2xl ring-1 ring-slate-800"
                  aria-label="Oficina moderna con equipo trabajando"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMDZhjO5C9DDzDQaFYyHuIPhCypSX59hIxbxg8TiYVwLeFlRwxwyG1gwsTovsO7Jvrr4sPR4PrBebhOLCV1xBEVVG8qQLGmsKR4SOFNC9bcaw2iCcH624oJn0z-qRfJjGuYzgK4M0GMc_xe7edArMoRGCuUw0_zZlWBt6LDT5rSSJNiartMVbDnBffZlYQLGllfemSzd-8yax7YeKMjk5ls5XbbaM_Y6b1Cjmn9a4RSM_6tcK2PRj27nnuFGJ3DToq8PRkcROtog")',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* TRANSPARENCIA */}
        <section className="py-12 border-y border-slate-800/60 bg-[#0b1220]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black">Transparencia Total</h2>
              <p className="text-slate-300">Sin sorpresas. Sabes lo que aceptas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard icon={<IconEuro />} title="Salario Visible" subtitle="Rango salarial garantizado" />
              <FeatureCard icon={<IconDoc />} title="Tipo de Contrato" subtitle="Indefinido, temporal o fijo-discontinuo" />
              <FeatureCard icon={<IconClock />} title="Jornada Detallada" subtitle="Horarios y días claros" />
            </div>
          </div>
        </section>

        {/* PROCESO */}
        <section id="como-funciona" className="py-16 px-4 bg-[#0b1220]">
          <div className="max-w-[960px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-4xl font-black tracking-tight">Cómo funciona el proceso</h2>
              <p className="text-slate-300 text-lg max-w-[720px] mx-auto">
                Un flujo transparente y seguro diseñado para conectar empresas serias con candidatos cualificados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-700/80 -z-0" />

              <Step icon={<IconBuilding />} title="1. Empresa publica" desc="La empresa detalla la oferta incluyendo condiciones y requisitos." />
              <Step icon={<IconPersonAdd />} title="2. Candidato aplica" desc="El candidato revisa la oferta y se inscribe si encaja." />
              <Step icon={<IconChat />} title="3. Conexión directa" desc="Si hay match, se activa un chat privado para esa candidatura." />
            </div>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="py-10 px-4">
          <div className="max-w-[960px] mx-auto">
            <div className="rounded-2xl bg-orange-900/20 border border-orange-800/60 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="size-12 rounded-2xl bg-orange-900/30 flex items-center justify-center shrink-0 text-orange-300 ring-1 ring-orange-800/60">
                <span className="text-2xl font-black">!</span>
              </div>

              <div className="flex-1">
                <h3 className="text-orange-200 font-extrabold text-lg mb-1">Aviso Importante</h3>
                <p className="text-orange-100/90 text-sm leading-relaxed">
                  <strong>YaVoy no es empleador.</strong> YaVoy actúa como plataforma tecnológica de conexión entre empresas y candidatos.
                  La relación laboral, contrato y responsabilidades legales son exclusivas entre la empresa contratante y el trabajador.
                </p>
              </div>

              <a className="text-orange-200 hover:text-white font-semibold underline text-sm whitespace-nowrap" href="#">
                Leer términos legales
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
