// src/pages/Landing.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type District = "Usera" | "Arganzuela" | "Carabanchel" | "Chamberi (fase 2)" | "Otros (fase 3)";

type Sector = {
  id: string;
  title: string;
  desc: string;
  bullets: string[];
};

type PersonaCard = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  image: string;
  bullets: string[];
  cta: { label: string; to: string };
};

const HERO_IMAGE = "/assets/landing/barrio-usera.jpg"; // foto de barrio (Usera)
const CITY_IMAGE = "/assets/landing/hero-ciudad.jpg"; // usar la segunda imagen con movil en la calle
const APP_IMAGE = "/assets/landing/hero-app.jpg"; // usar la tercera imagen horizontal
const APP_SCREEN = "/assets/landing/portadapp.png"; // pantalla app para el mockup del movil

// NUEVO: imágenes para perfiles (pon 3 fotos en estas rutas)
const PROFILE_WORKER = "/assets/landing/profile-worker.jpg";
const PROFILE_COMPANY = "/assets/landing/profile-company.jpg";
const PROFILE_PERSON = "/assets/landing/profile-person.jpg";

export default function Landing() {
  const sectors: Sector[] = useMemo(
    () => [
      { id: "hogar", title: "Hogar", desc: "Montaje, pequenas reparaciones, limpieza puntual.", bullets: ["Montaje de muebles", "Pintura y arreglos", "Limpiezas y mudanzas"] },
      { id: "recados", title: "Recados y Ayuda a Mayores", desc: "Compras, entregas, ayuda a mayores.", bullets: ["Compras y recados", "Acompañamientos a Mayores", "Entregas en el barrio"] },
      { id: "tecnologia", title: "Tecnologia", desc: "Instalacion, soporte, wifi, impresoras.", bullets: ["Soporte PC/movil", "Wi-Fi y routers", "Impresoras y TV"] },
      { id: "mascotas", title: "Mascotas", desc: "Paseos, cuidados y pequenas gestiones.", bullets: ["Paseos", "Cuidados puntuales", "Ir al veterinario"] },
      { id: "oficios", title: "Oficios", desc: "Profesionales de confianza para el dia a dia.", bullets: ["Electricista", "Fontanero", "Cerrajero"] },
      { id: "negocio", title: "Negocio", desc: "Apoyo a comercios y autonomos del barrio.", bullets: ["Reparto local", "Montajes ligeros", "Ayuda en eventos"] },
    ],
    []
  );

  // MODIFICADO: personas con imagen + bullets + CTA
  const personas: PersonaCard[] = useMemo(
    () => [
      {
        title: "Trabajador",
        subtitle: "Gana dinero cerca de ti. Cobro protegido y reputación.",
        icon: <BadgeIcon />,
        image: PROFILE_WORKER,
        bullets: ["Te apuntas a trabajos cercanos", "Chat y acuerdo de precio", "Cobras al confirmar el cliente + valoración"],
        cta: { label: "Quiero trabajar", to: "/register" },
      },
      {
        title: "Empresa / Autónomo",
        subtitle: "Encuentra ayuda rápida. Pago seguro, factura y control.",
        icon: <CaseIcon />,
        image: PROFILE_COMPANY,
        bullets: ["Publicas por horas o servicio", "Filtras candidatos y chateas", "Pago retenido + factura + historial"],
        cta: { label: "Soy empresa", to: "/register" },
      },
      {
        title: "Particular",
        subtitle: "Soluciona tareas fácil. Pagas solo si se completa.",
        icon: <CheckIcon />,
        image: PROFILE_PERSON,
        bullets: ["Publicas una tarea en 1 minuto", "Recibes candidatos verificados", "Confirmas y se libera el pago"],
        cta: { label: "Necesito ayuda", to: "/register" },
      },
    ],
    []
  );

  const trustBadges = useMemo(
    () => [
      { title: "Pagos seguros", icon: <LockIcon /> },
      { title: "Seguro incluido", icon: <ShieldIcon /> },
      { title: "Top valoraciones", icon: <StarIcon /> },
    ],
    []
  );

  const [selectedDistrict, setSelectedDistrict] = useState<District>("Usera");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <TopNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <SafeImage src={HERO_IMAGE} alt="Barrio de Usera" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/45 to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-8 pt-8 lg:flex-row lg:items-start lg:pb-12 lg:pt-3">
          <div className="flex-1 space-y-6 text-white">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Trabajos y servicios locales</p>
              <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Trabajos y servicios del barrio, al momento
              </h1>
              <p className="max-w-xl text-base text-blue-50 sm:text-lg">
                Publica una tarea y recibe vecinos verificados. O trabaja cuando quieras con pagos seguros y seguro
                incluido. Tambien puedes comprar en el marketplace local.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-800 shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Registrarse gratis
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Ya tengo cuenta
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:max-w-xl">
              {personas.map((persona) => (
                <div
                  key={persona.title}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm shadow-lg shadow-blue-950/20 backdrop-blur"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-blue-700">
                    {persona.icon}
                  </span>
                  <div>
                    <div className="font-semibold text-white">{persona.title}</div>
                    <div className="text-xs text-blue-100">{persona.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto w-full max-w-md rounded-[32px] border border-white/15 bg-white/5 p-6 shadow-2xl shadow-slate-900/30 backdrop-blur">
              <div className="relative mx-auto aspect-[9/19] w-72 rounded-[32px] border border-slate-200 bg-slate-900 shadow-xl shadow-slate-900/40">
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                <div className="absolute inset-[10px] overflow-hidden rounded-[24px] bg-black/80">
                  <SafeImage src={APP_SCREEN} alt="App YaVoyJobs" className="h-full w-full object-cover" />
                </div>
                <div className="absolute inset-x-14 -bottom-5 flex h-10 items-center justify-center rounded-full bg-white text-xs font-semibold text-slate-800 shadow-lg shadow-slate-900/30">
                  Pagos seguros · Seguro incluido
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-2 max-w-6xl px-4 pb-6">
          <div className="grid gap-3 rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur sm:grid-cols-3">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">
                  {badge.icon}
                </span>
                <div className="text-sm font-semibold text-slate-800">{badge.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA (MODIFICADO) */}
      <section id="como-funciona" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-600">Proceso real</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Cómo funciona YaVoyJobs</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600">
                Publicas → eliges → pagas con protección → se hace el trabajo → confirmas → se libera el pago.
                La plataforma retiene el importe y solo se suelta al finalizar.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/create-job"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Publicar tarea
              </Link>
              <Link
                to="/jobs"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                Ver trabajos
              </Link>
            </div>
          </div>

          {/* Stepper principal */}
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            <FlowStep
              step="1"
              title="Publica"
              desc="Describe la tarea, zona, fecha y presupuesto. (Particular o Empresa)"
              bullets={["Por horas o precio fijo", "Barrio y disponibilidad", "Opcional: urgencia y requisitos"]}
              icon={<ListIcon />}
            />
            <FlowStep
              step="2"
              title="Candidatos + Chat"
              desc="Recibes candidatos cercanos. Comparas reputación, precio y chateas."
              bullets={["Filtros por disponibilidad", "Chat para acordar detalles", "Perfil verificado + valoraciones"]}
              icon={<UsersIcon />}
            />
            <FlowStep
              step="3"
              title="Pago protegido"
              desc="Pagas comisión + seguro + importe del trabajo. El dinero queda retenido."
              bullets={["Cobro seguro tipo ‘reserva’", "Retención hasta finalizar", "Transparencia de costes"]}
              icon={<LockIcon />}
            />
            <FlowStep
              step="4"
              title="Finaliza + Libera"
              desc="El cliente confirma. Se libera el pago al trabajador y ambos se valoran."
              bullets={["Confirmación de finalización", "Pago al trabajador (Stripe)", "Factura + histórico + reputación"]}
              icon={<StarIcon />}
            />
          </div>

          {/* Qué ve cada rol */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <RoleHow
              title="Particular"
              icon={<UserIcon />}
              bullets={[
                "Publicas una tarea en 1 minuto",
                "Eliges candidato por precio y valoraciones",
                "Pagas con protección y confirmas al terminar",
              ]}
            />
            <RoleHow
              title="Empresa / Autónomo"
              icon={<BuildingIcon />}
              bullets={[
                "Publicas por horas o servicio (con factura)",
                "Filtras y gestionas varios candidatos",
                "Histórico, facturas y control del gasto",
              ]}
            />
            <RoleHow
              title="Trabajador"
              icon={<WrenchIcon />}
              bullets={[
                "Te apuntas a tareas cercanas",
                "Acordáis detalles por chat",
                "Cobras cuando el cliente confirma + subes reputación",
              ]}
            />
          </div>

          {/* Nota de confianza */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50/60 p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-3xl">
                <div className="text-sm font-extrabold text-slate-900">Transparente y antifraude</div>
                <p className="mt-1 text-sm text-slate-600">
                  El pago queda retenido hasta que el cliente confirma la finalización. Si hay incidencia, se abre un
                  ticket y el soporte revisa el caso antes de liberar el importe.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                  <ShieldIcon /> Seguro incluido
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                  <LockIcon /> Pago retenido
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFILES DESTACADOS (MODIFICADO) */}
      <section id="servicios" className="bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600">Perfiles</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Para todos los vecinos</h2>
            <p className="text-sm text-slate-600">
              Tres roles, una sola plataforma: anuncios, chat, pagos protegidos, seguro e historial.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {personas.map((p) => (
              <PersonaShowcaseCard key={p.title} persona={p} />
            ))}
          </div>

          <div className="mt-10 grid gap-6 rounded-3xl bg-white p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-3">
            <MiniCard title="Hogar" desc="Montaje, pintura, arreglos y limpiezas puntuales." />
            <MiniCard title="Recados y acompañamientos" desc="Compras, entregas y apoyo a mayores." />
            <MiniCard title="Tecnología" desc="Wi-Fi, soporte PC/móvil, televisores e impresoras." />
            <MiniCard title="Mascotas" desc="Paseos, cuidados y pequeñas gestiones." />
            <MiniCard title="Oficios" desc="Electricista, fontanero, cerrajero y más." />
            <MiniCard title="Negocio y eventos" desc="Repartos de barrio, montajes y apoyo en tienda." />
          </div>
        </div>
      </section>

      {/* HERO CIUDAD */}
      <section id="empresas" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-600">Empresas y autonomos</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Contrata por barrio y acelera tus operaciones
              </h2>
              <p className="text-sm text-slate-600">
                Publica ofertas por horas o por servicio, filtra candidatos, chatea y cierra con pagos seguros. Todo
                queda registrado con factura y reputacion.
              </p>

              <div className="grid gap-3">
                <FeatureCard title="Gestion simple" desc="Publicas, filtras candidatos, chateas y cierras." icon={<ListIcon />} />
                <FeatureCard title="Marketplace local" desc="Vende productos con recogida o entrega en tu zona." icon={<StoreIcon />} />
                <FeatureCard title="Atencion prioritaria" desc="Soporte cercano y verificacion para empresas." icon={<SparklesIcon />} />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/register"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Soy empresa
                </Link>
                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Ir al marketplace
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
              <SafeImage src={CITY_IMAGE} alt="Ciudad con app YaVoyJobs" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section id="sectores" className="bg-slate-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-600">Sectores fuertes</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Servicios mas demandados</h2>
              <p className="mt-2 text-sm text-slate-600">Ajusta segun tu catalogo real cuando quieras.</p>
            </div>
            <Link to="/jobs" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
              Ver anuncios →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <SectorCard key={s.id} sector={s} />
            ))}
          </div>
        </div>
      </section>

      {/* BARRIOS */}
      <section id="barrios" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600">Cobertura</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Empezamos por distritos</h2>
            <p className="text-sm text-slate-600">Crecemos con control y densidad de oferta y demanda.</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {(["Usera", "Arganzuela", "Carabanchel", "Chamberi (fase 2)", "Otros (fase 3)"] as District[]).map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDistrict(d)}
                className={[
                  "rounded-full px-4 py-2 text-sm border transition",
                  d === selectedDistrict
                    ? "bg-blue-50 border-blue-200 text-blue-700 shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50",
                ].join(" ")}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <MiniCard
              title={`Foco actual: ${selectedDistrict}`}
              desc="Priorizamos rapidez de respuesta y verificacion de perfiles."
              highlight
            />
            <MiniCard title="Criterio de expansion" desc="Arrancamos donde hay demanda real y comercios activos." />
            <MiniCard title="Marketplace por zona" desc="Recogidas y entregas optimizadas por cercania." />
          </div>
        </div>
      </section>

      {/* HERO APP DESCARGAS */}
      <section id="incentivos" className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100">Activa tu cuenta</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Incentivos de lanzamiento por perfil</h2>
              <p className="text-sm text-blue-100">
                Disenados para activar la comunidad rapido y generar reputacion desde el primer dia.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <MiniCard title="Trabajadores" desc="Incentivo de alta + bonus por referidos." light />
                <MiniCard title="Particulares" desc="Primer anuncio promocionado o descuento." light />
                <MiniCard title="Empresas" desc="Prueba inicial y descuento por primera contratacion." light />
                <MiniCard title="Marketplace" desc="Visibilidad local y ayuda con logistica de barrio." light />
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/create-job"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-800 shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Publicar tarea gratis
                </Link>
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Descargar app
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-blue-200/30 bg-white shadow-2xl shadow-blue-950/20">
              <SafeImage src={APP_IMAGE} alt="Aplicacion YaVoyJobs" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-3">
                <StoreBadge label="Google Play" />
                <StoreBadge label="App Store" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-600">Contacto</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Hablemos</h2>
            <p className="text-sm text-slate-600">Escribenos para colaboraciones, soporte o prensa.</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm">
              <div className="text-sm font-extrabold text-slate-900">YaVoyJobs</div>
              <div className="mt-1 text-sm text-slate-600">Soporte y alianzas</div>

              <div className="mt-6 grid gap-3 text-sm text-slate-700">
                <ContactItem icon={<MailIcon />} label="soporte@yavoyjobs.com" />
                <ContactItem icon={<PhoneIcon />} label="+34 600 000 000" />
                <ContactItem icon={<PinIcon />} label="Madrid • Por barrios" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:soporte@yavoyjobs.com"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
                >
                  Contactar
                </a>
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  Descargar app
                </Link>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ------------------------ CONTACT FORM ------------------------ */

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 650));
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 2500);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-sm font-extrabold text-slate-900">Escribenos</div>
      <div className="mt-1 text-sm text-slate-600">Te respondemos lo antes posible.</div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nombre" value={form.name} onChange={onChange("name")} placeholder="Tu nombre" />
          <Field label="Email" value={form.email} onChange={onChange("email")} placeholder="tucorreo@..." type="email" />
        </div>

        <Field label="Asunto" value={form.subject} onChange={onChange("subject")} placeholder="Colaboracion / soporte" />

        <div>
          <label className="text-xs font-semibold text-slate-700">Mensaje</label>
          <textarea
            value={form.message}
            onChange={onChange("message")}
            placeholder="Cuentanos en que podemos ayudarte..."
            className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-300"
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : status === "sent" ? "Enviado" : "Enviar mensaje"}
        </button>

        <div className="text-xs text-slate-500">Al enviar aceptas que te contactemos para responder tu solicitud.</div>
      </div>
    </form>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-slate-700">{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type ?? "text"}
        required
        className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-300"
      />
    </div>
  );
}

/* ------------------------ UI blocks ------------------------ */

function TopNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-800">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <LightningIcon />
          </span>
          YaVoyJobs • Beta activa en Madrid (Usera, Arganzuela, Carabanchel)
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-700">
            <ShieldIcon /> Pagos seguros
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
            <CheckIcon /> Seguro incluido
          </span>
          <Link to="/download" className="font-semibold text-blue-700 hover:text-blue-800">
            Descargar app →
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureCard(props: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-blue-700">{props.icon}</div>
        <div>
          <div className="text-sm font-bold text-slate-900">{props.title}</div>
          <div className="text-xs text-slate-600">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}

function HowCard(props: { title: string; bullets: string[]; icon: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700">{props.icon}</div>
        <div className="text-base font-extrabold text-slate-900">{props.title}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {props.bullets.map((b, idx) => (
          <li key={`${props.title}-${idx}`} className="flex gap-2">
            <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------ NUEVOS COMPONENTES ------------------------ */

function FlowStep(props: {
  step: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700">{props.icon}</div>
          <div>
            <div className="text-xs font-extrabold text-blue-700">Paso {props.step}</div>
            <div className="text-base font-extrabold text-slate-900">{props.title}</div>
          </div>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">YaVoyFlow</div>
      </div>

      <p className="mt-3 text-sm text-slate-600">{props.desc}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {props.bullets.map((b, idx) => (
          <li key={`${props.title}-${idx}`} className="flex gap-2">
            <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoleHow(props: { title: string; bullets: string[]; icon: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-700">{props.icon}</div>
        <div className="text-base font-extrabold text-slate-900">{props.title}</div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {props.bullets.map((b, idx) => (
          <li key={`${props.title}-how-${idx}`} className="flex gap-2">
            <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PersonaShowcaseCard({ persona }: { persona: PersonaCard }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-40 w-full">
        <SafeImage src={persona.image} alt={persona.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-blue-700 shadow-sm">
            {persona.icon}
          </span>
          <div className="text-white">
            <div className="text-sm font-extrabold">{persona.title}</div>
            <div className="text-xs text-blue-50">{persona.subtitle}</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <ul className="space-y-2 text-sm text-slate-600">
          {persona.bullets.map((b, idx) => (
            <li key={`${persona.title}-bullet-${idx}`} className="flex gap-2">
              <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-600" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            to={persona.cta.to}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700"
          >
            {persona.cta.label}
          </Link>

          {/* Anchor para bajar a "Cómo funciona" sin depender de rutas */}
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
          >
            Ver el flujo
          </a>
        </div>
      </div>
    </div>
  );
}

/* ------------------------ UI blocks (resto) ------------------------ */

function MiniCard(props: {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  accent?: boolean;
  highlight?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-6 shadow-sm",
        props.highlight
          ? "border-blue-100 bg-blue-50"
          : props.light
          ? "border-white/30 bg-white/10 text-white"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <div className="flex items-start gap-3">
        {props.icon && (
          <span
            className={[
              "grid h-10 w-10 place-items-center rounded-full",
              props.light ? "bg-white/20 text-white" : "bg-blue-50 text-blue-700",
            ].join(" ")}
          >
            {props.icon}
          </span>
        )}
        <div>
          <div className={"text-base font-extrabold " + (props.light ? "text-white" : "text-slate-900")}>{props.title}</div>
          <p className={"mt-2 text-sm " + (props.light ? "text-blue-50" : "text-slate-600")}>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

function SectorCard({ sector }: { sector: Sector }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="text-base font-extrabold text-slate-900">{sector.title}</div>
      <p className="mt-2 text-sm text-slate-600">{sector.desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {sector.bullets.map((b) => (
          <li key={`${sector.id}-${b}`} className="flex gap-2">
            <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-600" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-sm font-semibold text-blue-600">Ver servicios →</div>
    </div>
  );
}

function ContactItem(props: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-2xl bg-blue-50 text-blue-700">{props.icon}</span>
      <span>{props.label}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-blue-600" />
              <div className="text-sm font-extrabold text-slate-900">YaVoyJobs</div>
            </div>
            <div className="mt-2 text-sm text-slate-600">Conectando barrios, solucionando problemas.</div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <Link to="/aviso-legal" className="hover:text-slate-900">
              Aviso legal
            </Link>
            <Link to="/privacidad" className="hover:text-slate-900">
              Privacidad
            </Link>
            <Link to="/cookies" className="hover:text-slate-900">
              Cookies
            </Link>
            <Link to="/terminos" className="hover:text-slate-900">
              Terminos
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} YaVoy. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}

function SafeImage(props: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={props.className}
      onError={(e) => {
        if (e.currentTarget.src.includes("yavoy.png")) return;
        e.currentTarget.src = "/yavoy.png";
      }}
    />
  );
}

function AvatarDot() {
  return <span className="h-8 w-8 rounded-full border-2 border-blue-200 bg-white/60 shadow shadow-blue-900/20" />;
}

function StoreBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-blue-800 shadow-md shadow-blue-900/20">
      <StoreIcon />
      {label}
    </div>
  );
}

/* ------------------------ icons (sin librerias) ------------------------ */

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function StarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2l2.9 6 6.6.6-5 4.3 1.5 6.5L12 16.9 6 19.4l1.5-6.5-5-4.3 6.6-.6L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M16 11c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 11c1.7 0 3-1.3 3-3S9.7 5 8 5 5 6.3 5 8s1.3 3 3 3z" stroke="currentColor" strokeWidth="2" />
      <path d="M2 20c0-3 3-5 6-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 15c3 0 6 2 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M5 20c0-3.9 3-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 20V6l8-4 8 4v14H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 10V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function WrenchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 4.6l-4.2 4.2a4 4 0 01-4.6 5l-1.9 1.9a2 2 0 11-2.8-2.8l1.9-1.9a4 4 0 015-4.6L19.4 3A3 3 0 0121 4.6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="16.5" r="1.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M6.6 3.8L8.4 3a1 1 0 011.3.5l1.5 3a1 1 0 01-.3 1.2l-1.7 1.4a12.5 12.5 0 005.7 5.7l1.4-1.7a1 1 0 011.2-.3l3 1.5a1 1 0 01.5 1.3l-.8 1.8a1.5 1.5 0 01-1.5.9c-8.1-.8-14-6.7-14.8-14.8a1.5 1.5 0 01.9-1.5z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l2.4 2.4L17 5l-.4 2.6L19 10l-2.6.4L15 13l-3-1-3 1-1.4-2.6L5 10l2.4-2.4L7 5l2.6.4L12 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function CaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="7" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M9 7V6a2 2 0 012-2h2a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function ListIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M8 6h12M8 12h12M8 18h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="4" cy="6" r="1" fill="currentColor" />
      <circle cx="4" cy="12" r="1" fill="currentColor" />
      <circle cx="4" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}
function StoreIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16l-1 12H5L4 6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 10h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 3h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function SparklesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 16l.8 2.2L9 19l-2.2.8L6 22l-.8-2.2L3 19l2.2-.8L6 16z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M18 14l.7 1.8L20 16l-1.3.2L18 18l-.7-1.8L16 16l1.3-.2L18 14z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}
function LightningIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="10" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 10V7a4 4 0 118 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}
