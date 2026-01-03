import React from "react";

const YaVoyMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g clipPath="url(#clip0_6_330)">
      <path
        clipRule="evenodd"
        d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="clip0_6_330">
        <rect fill="white" height="48" width="48" />
      </clipPath>
    </defs>
  </svg>
);

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, subtitle }) => (
  <div className="flex gap-4 rounded-xl border border-[#cfdbe7] bg-slate-50 dark:bg-gray-800 dark:border-gray-700 p-6 items-center shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-center size-12 rounded-full bg-primary/10 text-primary shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-[#0d141b] dark:text-white text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
    </div>
  </div>
);

type StepProps = {
  icon: string;
  title: string;
  desc: string;
};

const Step: React.FC<StepProps> = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center gap-4 text-center relative z-10">
    <div className="size-24 rounded-full bg-white dark:bg-gray-800 border-4 border-primary/20 flex items-center justify-center shadow-sm">
      <span className="material-symbols-outlined text-primary text-4xl" aria-hidden="true">
        {icon}
      </span>
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-[#0d141b] dark:text-white text-xl font-bold">{title}</h3>
      <p className="text-[#4c739a] dark:text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function Empleo() {
  React.useEffect(() => {
    document.title = "Empleo - YaVoy";
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
    

      <main className="flex-1">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center px-4 py-12 lg:py-20 bg-white dark:bg-[#101922]">
          <div className="max-w-[1200px] w-full">
            <div className="@container">
              <div className="flex flex-col gap-8 lg:flex-row items-center">
                <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10">
                  <div className="flex flex-col gap-4 text-left">
                    <h1 className="text-[#0d141b] dark:text-white text-4xl font-black leading-[1.1] tracking-[-0.033em] lg:text-5xl xl:text-6xl">
                      Encuentra tu próximo <span className="text-primary">empleo estable</span>
                    </h1>

                    <h2 className="text-[#4c739a] dark:text-gray-300 text-lg font-normal leading-relaxed">
                      Contrata talento con garantías. Todo claro desde el principio: contrato, salario y jornada siempre visibles.
                    </h2>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-primary text-white text-base font-bold transition-all hover:scale-105 hover:shadow-lg shadow-primary/25">
                      Ver ofertas de empleo
                    </button>
                    <button className="flex h-12 px-6 items-center justify-center rounded-lg bg-white border border-gray-200 text-[#0d141b] text-base font-bold shadow-sm hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                      Publicar oferta
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                  <div
                    className="w-full aspect-[4/3] bg-center bg-cover bg-no-repeat rounded-2xl shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
                    aria-label="Oficina moderna con equipo trabajando"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMDZhjO5C9DDzDQaFYyHuIPhCypSX59hIxbxg8TiYVwLeFlRwxwyG1gwsTovsO7Jvrr4sPR4PrBebhOLCV1xBEVVG8qQLGmsKR4SOFNC9bcaw2iCcH624oJn0z-qRfJjGuYzgK4M0GMc_xe7edArMoRGCuUw0_zZlWBt6LDT5rSSJNiartMVbDnBffZlYQLGllfemSzd-8yax7YeKMjk5ls5XbbaM_Y6b1Cjmn9a4RSM_6tcK2PRj27nnuFGJ3DToq8PRkcROtog")',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details Grid (Transparency) */}
        <section className="py-10 bg-white dark:bg-[#1a2632] border-y border-gray-100 dark:border-gray-800">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#0d141b] dark:text-white">Transparencia Total</h2>
              <p className="text-[#4c739a] dark:text-gray-400">Sin sorpresas. Sabes lo que aceptas.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard
                icon={<span className="material-symbols-outlined text-3xl" aria-hidden="true">euro_symbol</span>}
                title="Salario Visible"
                subtitle="Rango salarial garantizado"
              />
              <FeatureCard
                icon={<span className="material-symbols-outlined text-3xl" aria-hidden="true">contract</span>}
                title="Tipo de Contrato"
                subtitle="Indefinido, temporal o fijo-discontinuo"
              />
              <FeatureCard
                icon={<span className="material-symbols-outlined text-3xl" aria-hidden="true">schedule</span>}
                title="Jornada Detallada"
                subtitle="Horarios y días claros"
              />
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-white dark:bg-[#101922]">
          <div className="max-w-[960px] mx-auto flex flex-col gap-10">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-[#0d141b] dark:text-white text-3xl font-black tracking-tight sm:text-4xl">
                Cómo funciona el proceso
              </h2>
              <p className="text-[#4c739a] dark:text-gray-300 text-lg max-w-[720px] mx-auto">
                Un flujo transparente y seguro diseñado para conectar empresas serias con candidatos cualificados.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector Line (Desktop only) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-gray-700 -z-0" />

              <Step
                icon="domain"
                title="1. Empresa publica"
                desc="La empresa detalla la oferta incluyendo condiciones y requisitos."
              />
              <Step
                icon="person_add"
                title="2. Candidato aplica"
                desc="El candidato revisa la oferta y se inscribe si encaja."
              />
              <Step
                icon="chat"
                title="3. Conexión directa"
                desc="Si hay match, se activa un chat privado para esa candidatura."
              />
            </div>
          </div>
        </section>

        {/* Chat Feature Section */}
        <section className="py-16 px-4 bg-white dark:bg-[#15202b]">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div
                  className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl"
                  aria-label="Chat en móvil"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBXhvOyR5KBFvOPEqUrDgHcIZqVWHQCWO3Vpc_ki8sidR-9wUzxnt54V02uVqSGAU8rp1YjyIqAVYIe52nC9zjOJTFnkJatUunjY_rwMfJ6pXnPHow9RAjSFeocs2KyOfeCsPlJd4CfM3cVZ0bTQLix40mY-nBxz5uzTLtCo1LIrwASOEb0ryUQ2uJTId0XVfdUUR-XG5UfQjRsxEhZh33C51VSsd34O4YiXh0-HmPIAoyoF5PEKl9Cbm2hgNhkZW8B7gByHFQrKA")',
                  }}
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-6 order-1 md:order-2">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-primary dark:bg-blue-900/30 dark:text-blue-300">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">forum</span>
                  Novedad
                </div>

                <h2 className="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black leading-tight">
                  Chat vinculado a la candidatura
                </h2>

                <p className="text-[#4c739a] dark:text-gray-300 text-lg leading-relaxed">
                  Olvídate de correos perdidos o llamadas a deshora. El chat está integrado dentro del proceso.
                </p>

                <ul className="flex flex-col gap-4 mt-2">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-[#0d141b] dark:text-gray-200">Comunicación centralizada en la plataforma.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-[#0d141b] dark:text-gray-200">Historial guardado.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-green-500 mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-[#0d141b] dark:text-gray-200">Notificaciones en tiempo real.</span>
                  </li>
                </ul>

                <button className="mt-4 flex w-fit h-12 px-6 items-center justify-center rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors">
                  Probar el chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-10 px-4">
          <div className="max-w-[960px] mx-auto">
            <div className="rounded-xl bg-orange-50 border border-orange-200 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center dark:bg-orange-900/20 dark:border-orange-800">
              <div className="size-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">info</span>
              </div>

              <div className="flex-1">
                <h3 className="text-orange-900 dark:text-orange-200 font-bold text-lg mb-1">Aviso Importante</h3>
                <p className="text-orange-800 dark:text-orange-300 text-sm leading-relaxed">
                  <strong>YaVoy no es empleador.</strong> YaVoy actúa como plataforma tecnológica de conexión entre empresas y candidatos.
                  La relación laboral, contrato y responsabilidades legales son exclusivas entre la empresa contratante y el trabajador.
                </p>
              </div>

              <a
                className="text-orange-700 hover:text-orange-900 font-semibold underline text-sm whitespace-nowrap dark:text-orange-300 dark:hover:text-orange-100"
                href="#"
              >
                Leer términos legales
              </a>
            </div>
          </div>
        </section>
      </main>

    
    </div>
  );
}
