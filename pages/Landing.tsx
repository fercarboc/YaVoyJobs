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

      {/* COMO FUNCIONA (OSCURA) */}
      <section id="como-funciona" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Proceso real</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Como funciona YaVoyJobs</h2>
              <p className="mt-2 max-w-2xl text-sm text-blue-100">
                Publicas - eliges - pagas con proteccion - se hace el trabajo - confirmas - se libera el pago. El
                dinero queda retenido hasta finalizar.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/create-job"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Publicar tarea
              </Link>
              <Link
                to="/jobs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10"
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
              variant="dark"
            />
            <FlowStep
              step="2"
              title="Candidatos + Chat"
              desc="Recibes candidatos cercanos. Comparas reputacion, precio y chateas."
              bullets={["Filtros por disponibilidad", "Chat para acordar detalles", "Perfil verificado + valoraciones"]}
              icon={<UsersIcon />}
              variant="dark"
            />
            <FlowStep
              step="3"
              title="Pago protegido"
              desc="Pagas comision + seguro + importe del trabajo. El dinero queda retenido."
              bullets={["Cobro seguro tipo 'reserva'", "Retencion hasta finalizar", "Transparencia de costes"]}
              icon={<LockIcon />}
              variant="dark"
            />
            <FlowStep
              step="4"
              title="Finaliza + Libera"
              desc="El cliente confirma. Se libera el pago al trabajador y ambos se valoran."
              bullets={["Confirmacion de finalizacion", "Pago al trabajador (Stripe)", "Factura + historico + reputacion"]}
              icon={<StarIcon />}
              variant="dark"
            />
          </div>

          {/* Que ve cada rol */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <RoleHow
              title="Particular"
              icon={<UserIcon />}
              bullets={[
                "Publicas una tarea en 1 minuto",
                "Eliges candidato por precio y valoraciones",
                "Pagas con proteccion y confirmas al terminar",
              ]}
              variant="dark"
            />
            <RoleHow
              title="Empresa / Autonomo"
              icon={<BuildingIcon />}
              bullets={[
                "Publicas por horas o servicio (con factura)",
                "Filtras y gestionas varios candidatos",
                "Historico, facturas y control del gasto",
              ]}
              variant="dark"
            />
            <RoleHow
              title="Trabajador"
              icon={<WrenchIcon />}
              bullets={[
                "Te apuntas a tareas cercanas",
                "Acordais detalles por chat",
                "Cobras cuando el cliente confirma + subes reputacion",
              ]}
              variant="dark"
            />
          </div>

          {/* Nota de confianza */}
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg shadow-slate-900/20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-3xl">
                <div className="text-sm font-extrabold text-white">Transparente y antifraude</div>
                <p className="mt-1 text-sm text-blue-100">
                  El pago queda retenido hasta que el cliente confirma la finalizacion. Si hay incidencia, se abre un
                  ticket y el soporte revisa el caso antes de liberar el importe.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-sm">
                  <ShieldIcon /> Seguro incluido
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-sm">
                  <LockIcon /> Pago retenido
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFILES DESTACADOS (OSCURA) */}
      <section id="servicios" className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Perfiles</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Para todos los vecinos</h2>
            <p className="text-sm text-blue-100">
              Tres roles, una sola plataforma: anuncios, chat, pagos protegidos, seguro e historial.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {personas.map((p) => (
              <PersonaShowcaseCard key={p.title} persona={p} dark />
            ))}
          </div>

          <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg sm:grid-cols-2 lg:grid-cols-3">
            <MiniCard title="Hogar" desc="Montaje, pintura, arreglos y limpiezas puntuales." light />
            <MiniCard title="Recados y acompanamientos" desc="Compras, entregas y apoyo a mayores." light />
            <MiniCard title="Tecnologia" desc="Wi-Fi, soporte PC/movil, televisores e impresoras." light />
            <MiniCard title="Mascotas" desc="Paseos, cuidados y pequenas gestiones." light />
            <MiniCard title="Oficios" desc="Electricista, fontanero, cerrajero y mas." light />
            <MiniCard title="Negocio y eventos" desc="Repartos de barrio, montajes y apoyo en tienda." light />
          </div>
        </div>
      </section>

      {/* EMPRESAS: ejemplos + bonos en oscuro */}
      <section id="empresas" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Empresas y comercios</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Contrata por barrio y acelera tus operaciones</h2>
            <p className="text-sm text-blue-100">
              Publica ofertas por horas o por servicio, filtra candidatos, chatea y cierra con pagos seguros. Todo queda registrado con factura y reputacion.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Soy empresa
              </Link>
              <Link
                to="/marketplace"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Ir al marketplace
              </Link>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <JobExample
              tag="Hosteleria"
              rate="12€ / hora"
              title="Camarero de Refuerzo"
              desc="Turno viernes y sabados noche. Zona Legazpi."
              bullets={["Alta en Seguridad Social", "10 horas/semana", "Turnos flexibles"]}
              avatar="BR"
            />
            <JobExample
              tag="Logistica"
              rate="650€ / mes"
              title="Repartidor 1/2 jornada"
              desc="Reparto a pie/bici en barrio Arganzuela."
              bullets={["Contrato indefinido", "Lunes a viernes", "Horario mananas"]}
              avatar="PL"
            />
            <JobExample
              tag="Admin"
              rate="15€ / hora"
              title="Auxiliar Administrativo"
              desc="Apoyo puntual para cierre de trimestre."
              bullets={["Trabajo por horas", "Presencial 3 dias", "Perfil verificado"]}
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
                <div className="text-2xl font-extrabold">Bonos de Contratacion</div>
                <div className="text-sm text-purple-100">Ahorra dinero con nuestros planes mensuales</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              <PlanCard title="Mensual" price="15€" suffix="/mes" desc="Contrataciones ilimitadas durante 30 dias" note="0€ por contratacion" />
              <PlanCard
                title="Semestral"
                price="75€"
                suffix="/6 meses"
                desc="Contrataciones ilimitadas durante 180 dias"
                note="Ahorras 15€ (12.5€/mes)"
                highlight
              />
              <PlanCard title="Anual" price="120€" suffix="/año" desc="Contrataciones ilimitadas durante 365 dias" note="Ahorras 60€ (10€/mes)" />
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 text-sm text-purple-100">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-semibold text-white mb-2">Por que un bono?</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>1 contratacion = 15€ de comision</li>
                  <li>2 contrataciones = 30€</li>
                  <li>5 contrataciones = 75€</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="font-semibold text-white mb-2">Con bono mensual (15€)</div>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Contrataciones ilimitadas sin comision</li>
                  <li>Rentable desde la 2a contratacion</li>
                  <li>Ideal si contratas regularmente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES (OSCURA) */}
      <section id="sectores" className="bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Sectores fuertes</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Servicios mas demandados</h2>
              <p className="mt-2 text-sm text-blue-100">Ajusta segun tu catalogo real cuando quieras.</p>
            </div>
            <Link to="/jobs" className="text-sm font-semibold text-blue-200 hover:text-white">
              Ver anuncios →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <SectorCard key={s.id} sector={s} variant="dark" />
            ))}
          </div>
        </div>
      </section>

      {/* BARRIOS (oscuro) */}
      <section id="barrios" className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Cobertura</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Empezamos por distritos</h2>
            <p className="text-sm text-blue-100">Crecemos con control y densidad de oferta y demanda.</p>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {(["Usera", "Arganzuela", "Carabanchel", "Chamberi (fase 2)", "Otros (fase 3)"] as District[]).map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDistrict(d)}
                className={[
                  "rounded-full px-4 py-2 text-sm border transition",
                  d === selectedDistrict
                    ? "bg-white/15 border-white/30 text-white shadow-sm"
                    : "bg-white/5 border-white/15 text-blue-100 hover:bg-white/10",
                ].join(" ")}
              >
                {d}
              </button>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <MiniCard
              title={`Foco actual: ${selectedDistrict}`}
              desc="Priorizamos rapidez de respuesta y verificacion de perfiles."
              light
            />
            <MiniCard title="Criterio de expansion" desc="Arrancamos donde hay demanda real y comercios activos." light />
            <MiniCard title="Marketplace por zona" desc="Recogidas y entregas optimizadas por cercania." light />
          </div>
        </div>
      </section>

      {/* INCENTIVOS (mockup dark) */}
      <section id="incentivos" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 space-y-12">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Para trabajadores</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                Tu meta es simple:<br />5 trabajos = <span className="text-emerald-300">25€ Extra</span>
              </h2>
              <p className="text-sm text-blue-100">
                Recompensamos tu arranque en la plataforma. Completa tus primeros 5 encargos con valoración positiva y el bono es tuyo.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-slate-900/30">
                  <span className="text-3xl font-black text-slate-600 w-8 text-center">1</span>
                  <div>
                    <p className="font-semibold text-white">Regístrate y verifica perfil</p>
                    <p className="text-xs text-blue-100">Validación rápida en tu zona</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-slate-900/30">
                  <span className="text-3xl font-black text-slate-600 w-8 text-center">5</span>
                  <div>
                    <p className="font-semibold text-white">Completa 5 microtrabajos</p>
                    <p className="text-xs text-blue-100">Jardinería, limpieza, recados...</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-r from-blue-900/60 to-blue-800/20 border border-blue-400/30 shadow-lg shadow-blue-900/40">
                  <span className="text-4xl font-black text-emerald-300 w-12 text-center">25€</span>
                  <div>
                    <p className="font-bold text-white text-lg">Bono desbloqueado</p>
                    <p className="text-xs text-blue-100">Ingreso directo a tu cuenta</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/create-job"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Publicar tarea gratis
                </Link>
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Descargar app
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl shadow-slate-950/30">
              <SafeImage src={APP_IMAGE} alt="Aplicacion YaVoyJobs" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex flex-wrap gap-3">
                <StoreBadge label="Google Play" />
                <StoreBadge label="App Store" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Oportunidades para todos</p>
              <p className="text-sm text-blue-100">Tanto si buscas ayuda puntual como si ofreces empleo local</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="group relative rounded-3xl bg-white/5 border border-white/10 p-6 shadow-xl shadow-slate-900/40">
                <div className="absolute top-4 right-4 text-slate-600 group-hover:text-purple-300 transition-colors">↗</div>
                <div className="flex flex-col gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-300 grid place-items-center text-lg font-bold">👤</div>
                  <div>
                    <div className="text-xl font-extrabold text-white">Particulares</div>
                    <p className="mt-2 text-sm text-blue-100">
                      ¿Necesitas una mano en casa? Te regalamos hasta 20€ de descuento en tu primer servicio contratado.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-3xl font-black text-white leading-tight">Gratis</div>
                    <div className="text-xs uppercase tracking-wide text-purple-300">Tu primera tarea (hasta 20€)</div>
                  </div>
                </div>
              </div>
              <div className="group relative rounded-3xl bg-white/5 border border-white/10 p-6 shadow-xl shadow-slate-900/40">
                <div className="absolute top-4 right-4 text-slate-600 group-hover:text-emerald-300 transition-colors">↗</div>
                <div className="flex flex-col gap-4 text-left">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-300 grid place-items-center text-lg font-bold">🏪</div>
                  <div>
                    <div className="text-xl font-extrabold text-white">Empresas</div>
                    <p className="mt-2 text-sm text-blue-100">
                      Encuentra talento en el barrio sin costes. Publica ofertas ilimitadas gratis durante tu primer mes de prueba.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-3xl font-black text-white leading-tight">30 Días</div>
                    <div className="text-xs uppercase tracking-wide text-emerald-300">Publicación gratuita</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 text-sm text-blue-100">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-white">100% Local</div>
              <p className="text-blue-100 mt-1">Priorizamos conexiones en tu código postal para cero desplazamientos.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-white">Totalmente Seguro</div>
              <p className="text-blue-100 mt-1">El dinero se custodia hasta finalizar el trabajo. Sin sorpresas.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="font-semibold text-white">Rápido y Directo</div>
              <p className="text-blue-100 mt-1">Sin esperas ni burocracia. Acuerda, trabaja y cobra.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center space-y-4 shadow-lg shadow-slate-900/30">
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-rose-500/20 text-rose-200 text-xs font-semibold">
              Oferta limitada
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Quedan pocas plazas</h3>
            <p className="text-sm text-blue-100">
              El incentivo de 25€ está limitado a los primeros registros. ¡Asegura tu bono antes de que se agote!
            </p>
            <div className="mx-auto max-w-xl text-left">
              <div className="flex justify-between text-xs text-blue-100 mb-1">
                <span>Plazas asignadas</span>
                <span className="font-semibold text-white">84%</span>
              </div>
              <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-[84%] bg-gradient-to-r from-blue-500 to-emerald-400" />
              </div>
              <div className="text-[11px] text-blue-200 mt-1">* Basado en registros de esta semana.</div>
            </div>
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Registrarme Ya
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACTO (oscuro) */}
      <section id="contacto" className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-blue-200">Contacto</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Hablemos</h2>
            <p className="text-sm text-blue-100">Escribenos para colaboraciones, soporte o prensa.</p>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-lg shadow-slate-900/25">
              <div className="text-sm font-extrabold text-white">YaVoyJobs</div>
              <div className="mt-1 text-sm text-blue-100">Soporte y alianzas</div>

              <div className="mt-6 grid gap-3 text-sm text-blue-100">
                <ContactItem icon={<MailIcon />} label="soporte@yavoyjobs.com" variant="dark" />
                <ContactItem icon={<PhoneIcon />} label="+34 600 000 000" variant="dark" />
                <ContactItem icon={<PinIcon />} label="Madrid • Por barrios" variant="dark" />
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:soporte@yavoyjobs.com"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-900/30 transition hover:-translate-y-0.5 hover:bg-emerald-300"
                >
                  Contactar
                </a>
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Descargar app
                </Link>
              </div>
            </div>

            <ContactForm variant="dark" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ------------------------ CONTACT FORM ------------------------ */

function ContactForm({ variant = "light" }: { variant?: "light" | "dark" }) {
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

  const isDark = variant === "dark";

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-3xl border p-6 shadow-sm ${
        isDark ? "border-white/15 bg-white/5 text-white shadow-lg shadow-slate-900/25" : "border-slate-200 bg-white"
      }`}
    >
      <div className={`text-sm font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>Escribenos</div>
      <div className={`mt-1 text-sm ${isDark ? "text-blue-100" : "text-slate-600"}`}>Te respondemos lo antes posible.</div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Nombre" value={form.name} onChange={onChange("name")} placeholder="Tu nombre" variant={variant} />
          <Field label="Email" value={form.email} onChange={onChange("email")} placeholder="tucorreo@..." type="email" variant={variant} />
        </div>

        <Field label="Asunto" value={form.subject} onChange={onChange("subject")} placeholder="Colaboracion / soporte" variant={variant} />

        <div>
          <label className={`text-xs font-semibold ${isDark ? "text-blue-100" : "text-slate-700"}`}>Mensaje</label>
          <textarea
            value={form.message}
            onChange={onChange("message")}
            placeholder="Cuentanos en que podemos ayudarte..."
            className={`mt-1 w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:border-blue-300 ${
              isDark ? "border-white/20 bg-white/10 text-white placeholder:text-blue-200" : "border-slate-200 bg-white text-slate-900"
            }`}
            rows={5}
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 disabled:opacity-60 ${
            isDark
              ? "bg-emerald-400 text-slate-900 shadow-lg shadow-emerald-900/30 hover:bg-emerald-300"
              : "bg-blue-600 text-white shadow-md shadow-blue-200 hover:bg-blue-700"
          }`}
        >
          {status === "sending" ? "Enviando..." : status === "sent" ? "Enviado" : "Enviar mensaje"}
        </button>

        <div className={`text-xs ${isDark ? "text-blue-100" : "text-slate-500"}`}>
          Al enviar aceptas que te contactemos para responder tu solicitud.
        </div>
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
  variant?: "light" | "dark";
}) {
  const isDark = props.variant === "dark";
  return (
    <div>
      <label className={`text-xs font-semibold ${isDark ? "text-blue-100" : "text-slate-700"}`}>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        type={props.type ?? "text"}
        required
        className={`mt-1 w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:border-blue-300 ${
          isDark ? "border-white/20 bg-white/10 text-white placeholder:text-blue-200" : "border-slate-200 bg-white text-slate-900"
        }`}
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
  variant?: "light" | "dark";
}) {
  const isDark = props.variant === "dark";
  const container = isDark
    ? "border-white/10 bg-white/5 text-white shadow-lg shadow-slate-900/25"
    : "border-slate-200 bg-white text-slate-900 shadow-sm";
  const chip = isDark ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700";
  const bullet = isDark ? "bg-emerald-300" : "bg-blue-600";
  const muted = isDark ? "text-blue-100" : "text-slate-600";

  return (
    <div className={`rounded-3xl border p-6 ${container}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`grid h-10 w-10 place-items-center rounded-2xl ${isDark ? "bg-white/10 text-white" : "bg-blue-50 text-blue-700"}`}>{props.icon}</div>
          <div>
            <div className={`text-xs font-extrabold ${isDark ? "text-blue-100" : "text-blue-700"}`}>Paso {props.step}</div>
            <div className="text-base font-extrabold">{props.title}</div>
          </div>
        </div>
        <div className={`rounded-full px-3 py-1 text-xs font-semibold ${chip}`}>YaVoyFlow</div>
      </div>

      <p className={`mt-3 text-sm ${muted}`}>{props.desc}</p>

      <ul className={`mt-4 space-y-2 text-sm ${muted}`}>
        {props.bullets.map((b, idx) => (
          <li key={`${props.title}-${idx}`} className="flex gap-2">
            <span className={`mt-[7px] h-2 w-2 rounded-full ${bullet}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoleHow(props: { title: string; bullets: string[]; icon: React.ReactNode; variant?: "light" | "dark" }) {
  const isDark = props.variant === "dark";
  const container = isDark
    ? "border-white/10 bg-white/5 text-white shadow-lg shadow-slate-900/25"
    : "border-slate-200 bg-white text-slate-900 shadow-sm";
  const bullet = isDark ? "bg-emerald-300" : "bg-blue-600";
  const muted = isDark ? "text-blue-100" : "text-slate-600";

  return (
    <div className={`rounded-3xl border p-6 ${container}`}>
      <div className="flex items-center gap-3">
        <div className={`grid h-10 w-10 place-items-center rounded-2xl ${isDark ? "bg-white/10 text-white" : "bg-blue-50 text-blue-700"}`}>{props.icon}</div>
        <div className="text-base font-extrabold">{props.title}</div>
      </div>
      <ul className={`mt-4 space-y-2 text-sm ${muted}`}>
        {props.bullets.map((b, idx) => (
          <li key={`${props.title}-how-${idx}`} className="flex gap-2">
            <span className={`mt-[7px] h-2 w-2 rounded-full ${bullet}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PersonaShowcaseCard({ persona, dark }: { persona: PersonaCard; dark?: boolean }) {
  const border = dark ? "border-white/10 bg-white/5 text-white" : "border-slate-200 bg-white text-slate-900";
  const bullet = dark ? "bg-emerald-300" : "bg-blue-600";
  const muted = dark ? "text-blue-100" : "text-slate-600";

  return (
    <div className={`overflow-hidden rounded-3xl border shadow-sm ${border}`}>
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
        <ul className={`space-y-2 text-sm ${muted}`}>
          {persona.bullets.map((b, idx) => (
            <li key={`${persona.title}-bullet-${idx}`} className="flex gap-2">
              <span className={`mt-[7px] h-2 w-2 rounded-full ${bullet}`} />
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

          <a
            href="#como-funciona"
            className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 ${
              dark
                ? "border-white/20 bg-white/5 text-white shadow-sm hover:bg-white/10"
                : "border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50"
            }`}
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

function SectorCard({ sector, variant }: { sector: Sector; variant?: "light" | "dark" }) {
  const isDark = variant === "dark";
  const bullet = isDark ? "bg-emerald-300" : "bg-blue-600";
  const muted = isDark ? "text-blue-100" : "text-slate-600";

  return (
    <div
      className={`rounded-3xl border p-6 ${
        isDark ? "border-white/10 bg-white/5 text-white shadow-lg shadow-slate-900/25" : "border-slate-200 bg-white text-slate-900 shadow-sm"
      }`}
    >
      <div className="text-base font-extrabold">{sector.title}</div>
      <p className={`mt-2 text-sm ${muted}`}>{sector.desc}</p>
      <ul className={`mt-4 space-y-2 text-sm ${muted}`}>
        {sector.bullets.map((b) => (
          <li key={`${sector.id}-${b}`} className="flex gap-2">
            <span className={`mt-[7px] h-2 w-2 rounded-full ${bullet}`} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className={`mt-4 text-sm font-semibold ${isDark ? "text-emerald-200" : "text-blue-600"}`}>Ver servicios →</div>
    </div>
  );
}

function JobExample(props: {
  tag: string;
  rate: string;
  title: string;
  desc: string;
  bullets: string[];
  avatar: string;
  ghost?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border p-5 shadow-lg backdrop-blur",
        props.ghost ? "border-white/10 bg-white/5" : "border-white/15 bg-white/8",
      ].join(" ")}
    >
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-blue-200">
        <span className="inline-flex rounded-full bg-blue-500/20 px-3 py-1 text-blue-100">{props.tag}</span>
        <span className="text-white">{props.rate}</span>
      </div>
      <div className="mt-3 text-lg font-extrabold text-white">{props.title}</div>
      <p className="mt-1 text-sm text-blue-100">{props.desc}</p>
      <ul className="mt-4 space-y-2 text-sm text-blue-100">
        {props.bullets.map((b, idx) => (
          <li key={`${props.title}-${idx}`} className="flex items-start gap-2">
            <span className="mt-[6px] h-2 w-2 rounded-full bg-emerald-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex items-center gap-2 text-sm text-blue-200">
        <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/10 text-white">{props.avatar}</span>
        <span>Perfil verificado</span>
      </div>
    </div>
  );
}

function PlanCard(props: { title: string; price: string; suffix: string; desc: string; note: string; highlight?: boolean }) {
  const base = "rounded-2xl border p-5 text-white";
  const tone = props.highlight ? "border-purple-200/50 bg-white/10 shadow-xl" : "border-white/15 bg-white/5";
  return (
    <div className={[base, tone].join(" ")}>
      <div className="text-sm font-semibold text-purple-100">{props.title}</div>
      <div className="mt-2 flex items-baseline gap-1">
        <div className="text-3xl font-extrabold">{props.price}</div>
        <div className="text-sm text-purple-100">{props.suffix}</div>
      </div>
      <p className="mt-3 text-sm text-purple-50">{props.desc}</p>
      <div className="mt-4 text-xs font-semibold text-emerald-200">{props.note}</div>
    </div>
  );
}

function ContactItem(props: { icon: React.ReactNode; label: string; variant?: "light" | "dark" }) {
  const isDark = props.variant === "dark";
  return (
    <div className="flex items-center gap-2">
      <span
        className={`grid h-9 w-9 place-items-center rounded-2xl ${isDark ? "bg-white/10 text-white" : "bg-blue-50 text-blue-700"}`}
      >
        {props.icon}
      </span>
      <span className={isDark ? "text-blue-100" : ""}>{props.label}</span>
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
function GiftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M20 7H4v13h16V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 11h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7v13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 7c-2.8 0-4-.8-4-2s1.6-2 3.2-1.5C12.3 3.8 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 7c2.8 0 4-.8 4-2s-1.6-2-3.2-1.5C11.7 3.8 12 7 12 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
