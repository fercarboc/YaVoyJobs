import React from "react";

type Pillar = {
  title: string;
  items: { title: string; text: string; icon: string }[];
};

type Example = {
  title: string;
  badge: string;
  price: string;
  commission: string;
  total: string;
  why: string[];
  warning: string;
  warningNote: string;
  icon: string;
};

const pillars: { yes: Pillar; no: Pillar } = {
  yes: {
    title: "Lo que SÍ somos",
    items: [
      { title: "Intermediación digital pura", text: "Facilitamos el contacto entre particulares. No somos tu jefe ni contratamos empleados.", icon: "🛰️" },
      { title: "Pago por uso real", text: "Pagas solo por el servicio realizado. Sin cuotas mensuales ocultas.", icon: "💳" },
      { title: "Seguro incluido", text: "Cobertura de responsabilidad civil en cada servicio contratado a través de la plataforma.", icon: "🛡️" },
      { title: "Libertad de elección", text: "Tú eliges al profesional, acuerdas horario y negocias las condiciones directamente.", icon: "🤝" },
    ],
  },
  no: {
    title: "Lo que NO somos",
    items: [
      { title: "Empresa de cuidados sanitarios", text: "No ofrecemos servicios médicos, enfermería ni cuidados especializados de salud.", icon: "⛔" },
      { title: "Agencia de colocación", text: "No gestionamos relaciones laborales a largo plazo ni actuamos como empleador.", icon: "🚫" },
      { title: "Gestoría laboral", text: "Las obligaciones fiscales y laborales recurrentes son responsabilidad de las partes.", icon: "📑" },
      { title: "Servicios regulados", text: "No sustituimos a profesionales certificados (electricistas colegiados, mudanzas profesionales, etc.).", icon: "⚡" },
    ],
  },
};

const examples: Example[] = [
  {
    icon: "👵",
    title: "Acompañamiento Persona Mayor",
    badge: "Puntual 4h",
    price: "40,00 €",
    commission: "6,00 €",
    total: "46,00 €",
    why: [
      "Más económico para servicios puntuales que agencias tradicionales (media ~70€).",
      "Flexibilidad total de horarios sin permanencia.",
      "Perfiles verificados por la comunidad.",
    ],
    warning: "Si la persona requiere medicación, curas o movilizaciones complejas.",
    warningNote: "Para necesidades médicas, contacta siempre con servicios de salud o empresas sanitarias certificadas.",
  },
  {
    icon: "🐕",
    title: "Paseo de Mascotas",
    badge: "1 Hora",
    price: "10,00 €",
    commission: "2,50 €",
    total: "12,50 €",
    why: [
      "Trato directo con paseador vecino, confianza de proximidad.",
      "Ideal para días sueltos o emergencias laborales.",
      "Seguro que cubre daños a terceros durante el paseo.",
    ],
    warning: "PPP sin bozal/licencia o animales con conducta complicada.",
    warningNote: "Para adiestramiento o casos complejos, busca un etólogo certificado.",
  },
  {
    icon: "📦",
    title: "Ayuda en Mudanza",
    badge: "Pack 3h",
    price: "45,00 €",
    commission: "9,00 €",
    total: "54,00 €",
    why: [
      "Perfecto para mover cajas o montar muebles sencillos (tipo IKEA).",
      "Ahorro frente a empresas de mudanza para tareas pequeñas.",
    ],
    warning: "Mudanzas integrales, objetos de alto valor o necesidad de grúa elevadora.",
    warningNote: "Para logística compleja y mercancía valiosa, contrata una empresa certificada.",
  },
];

const legales = [
  { label: "Condiciones de uso", icon: "📄" },
  { label: "Aviso legal de intermediación", icon: "⚖️" },
  { label: "Política de seguros", icon: "🛡️" },
  { label: "Protección de datos", icon: "🔒" },
  { label: "Límites del servicio", icon: "📏" },
];

export default function ParticularesInfoPage() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-[#111418] text-white min-h-screen">
      {/* Hero */}
      <section className="relative px-4 py-12 lg:py-20 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-10 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#283039] bg-white/5 px-3 py-1 text-sm text-blue-400 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
              Plataforma de intermediación digital para Particulares
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Ayuda cercana, clara y <span className="text-blue-400">flexible</span> para tu día a día
            </h1>
            <p className="text-lg text-gray-300 sm:text-xl max-w-2xl mx-auto lg:mx-0">
              Conectamos personas para servicios puntuales y recurrentes. Sin sorpresas, con seguro incluido y total libertad de elección.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => scrollTo("examples")}
                className="flex h-12 items-center justify-center rounded-lg bg-blue-500 px-6 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition"
              >
                Ejemplos reales
              </button>
              <button
                type="button"
                onClick={() => scrollTo("how-it-works")}
                className="flex h-12 items-center justify-center rounded-lg border border-[#283039] bg-white/5 px-6 text-base font-bold text-white hover:bg-white/10 transition"
              >
                Qué es YaVoy
              </button>
              <button
                type="button"
                onClick={() => scrollTo("legal")}
                className="flex h-12 items-center justify-center rounded-lg bg-blue-500 px-6 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition"
              >
                Zona Legal
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-2xl border border-[#283039] shadow-2xl">
              <img
                src="/assets/flayer.png"
                alt="YaVoy App Interface"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111418]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Qué es / no es */}
      <section id="how-it-works" className="border-t border-[#283039] bg-[#111418] px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold">Qué ES YaVoy y qué NO ES</h2>
            <p className="mt-3 text-lg text-[#9dabb9]">Transparencia total desde el primer momento. Tú eliges, tú decides.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {[pillars.yes, pillars.no].map((pillar) => (
              <div
                key={pillar.title}
                className={`flex flex-col rounded-xl border p-8 ${
                  pillar.title.includes("SÍ")
                    ? "border-blue-500/20 bg-[#1c2127] shadow-lg shadow-blue-500/10"
                    : "border-[#283039] bg-[#1c2127]/70"
                }`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-full ${
                      pillar.title.includes("SÍ") ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    {pillar.title.includes("SÍ") ? "✔️" : "⛔"}
                  </div>
                  <h3 className="text-xl font-bold">{pillar.title}</h3>
                </div>
                <ul className="flex flex-col gap-5">
                  {pillar.items.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="text-lg mt-1">{item.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-[#9dabb9]">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ejemplos */}
      <section id="examples" className="bg-[#111418] px-4 py-16 border-t border-[#283039]">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="space-y-2">
            <span className="font-bold text-blue-400 uppercase tracking-wider text-sm">Transparencia en precios</span>
            <h2 className="text-3xl sm:text-4xl font-bold">Ejemplos Reales y Comparativas</h2>
            <p className="text-lg text-[#9dabb9] max-w-3xl">
              Desglosamos los costes para que entiendas exactamente qué pagas y cuándo es mejor buscar otra opción.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {examples.map((ex) => (
              <div key={ex.title} className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/5 text-blue-300">{ex.icon}</div>
                  <h3 className="text-2xl font-bold">{ex.title}</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-[#283039] bg-[#1c2127] p-6 hover:border-blue-500/40 transition">
                    <div className="mb-4 flex items-center justify-between border-b border-[#283039] pb-4">
                      <h4 className="font-bold">Servicio en YaVoy</h4>
                      <span className="rounded bg-green-500/10 px-2 py-1 text-xs font-bold text-green-400">{ex.badge}</span>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Profesional (neto)</span>
                        <span className="font-medium text-white">{ex.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Comisión YaVoy</span>
                        <span className="font-medium text-white">{ex.commission}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 flex items-center gap-1">
                          Seguro RC <span className="text-blue-400 text-xs">info</span>
                        </span>
                        <span className="font-medium text-blue-400">Incluido</span>
                      </div>
                      <div className="mt-4 flex justify-between border-t border-[#283039] pt-3">
                        <span className="text-base font-bold text-white">Total Cliente</span>
                        <span className="text-xl font-bold text-blue-400">{ex.total}</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-[#283039] bg-[#1c2127] p-6">
                    <h4 className="mb-4 font-bold border-b border-[#283039] pb-4 text-white">¿Por qué YaVoy?</h4>
                    <ul className="space-y-4 text-sm">
                      {ex.why.map((w) => (
                        <li key={w} className="flex gap-2 text-gray-300">
                          <span className="text-green-400">✔</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-6 text-sm text-gray-200">
                    <div className="mb-4 flex items-center gap-2 border-b border-red-900/30 pb-4 text-red-400">
                      <span>⚠️</span>
                      <h4 className="font-bold">Cuándo NO usar YaVoy</h4>
                    </div>
                    <p className="mb-4">{ex.warning}</p>
                    <div className="rounded bg-white/5 p-3 text-xs text-gray-400">{ex.warningNote}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zona legal */}
      <section id="legal" className="bg-[#1c2127] border-t border-[#283039] px-4 py-16 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#283039] text-white text-2xl">⚖️</div>
          <div>
            <h2 className="text-3xl font-bold">Zona Legal Destacada</h2>
            <p className="mt-2 text-[#9dabb9]">La transparencia es nuestra base. Recomendamos leer esta información antes de publicar un servicio.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {legales.map((item) => (
              <a
                key={item.label}
                href="#"
                className="flex items-center gap-2 rounded-lg border border-[#283039] bg-[#111418] px-4 py-2 text-sm text-gray-300 hover:border-blue-500 hover:text-white transition"
              >
                <span>{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-gray-500 max-w-2xl mx-auto">
            YaVoy actúa exclusivamente como prestador de servicios de la sociedad de la información, facilitando el contacto entre usuarios. No interviene en la relación contractual que se establece entre las partes.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-[#111418] to-[#111418]" />
        <div className="relative z-10 mx-auto max-w-4xl rounded-2xl border border-[#283039] bg-white/5 p-8 text-center backdrop-blur-md sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-black">¿Listo para empezar?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-200">
            Comprueba si YaVoy es la mejor opción para tu necesidad actual. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <button className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-white text-[#111418] px-6 text-base font-bold hover:bg-gray-100 transition">
              Explorar servicios
            </button>
            <button className="flex h-12 min-w-[160px] items-center justify-center rounded-lg bg-blue-500 px-6 text-base font-bold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition">
              Crear cuenta gratis
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#283039] bg-[#111418] py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} YaVoy. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
