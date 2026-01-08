// src/informacion/inmobiliarias.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import sealquila from "@/public/assets/sealquila.png";

const InmobiliariasInfo: React.FC = () => {
  const navigate = useNavigate();

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Fondo oscuro + brillo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#070c14] via-[#0b1220] to-[#0b1220]" />
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-24 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            {/* Texto */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white ring-1 ring-white/15">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                MÓDULO INMOBILIARIA · YAVOY
              </div>

              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Publica inmuebles, gestiona visitas y convierte interesados en inquilinos.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                YaVoy te da visibilidad local, leads cualificados y una{" "}
                <span className="font-semibold text-white">agenda de visitas integrada</span> para que tu
                agencia trabaje más rápido y con menos fricción.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId("planes")}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                >
                  Ver planes
                </button>

                <button
                  type="button"
                  onClick={() => scrollToId("beneficios")}
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                >
                  Estar en YaVoy
                </button>

                <button
                  type="button"
                  onClick={() => scrollToId("como-funciona")}
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                >
                  Cómo funciona
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/15 ring-1 ring-blue-500/20">
                      {/* icon: target */}
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-blue-200"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 22a10 10 0 1 0-10-10" />
                        <path d="M12 18a6 6 0 1 0-6-6" />
                        <path d="M12 14a2 2 0 1 0-2-2" />
                        <path d="M22 22l-6-6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Enfoque</p>
                      <p className="mt-1 text-sm font-semibold text-white">Local + conversión</p>
                      <p className="mt-1 text-sm text-white/70">Interesados de tu zona con seguimiento y control.</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 ring-1 ring-cyan-400/20">
                      {/* icon: calendar */}
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-cyan-100"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M8 2v3M16 2v3" />
                        <path d="M3 8h18" />
                        <path d="M5 5h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                        <path d="M7 12h5M7 16h9" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Gestión</p>
                      <p className="mt-1 text-sm font-semibold text-white">Agenda de visitas</p>
                      <p className="mt-1 text-sm text-white/70">Calendario mensual + lista, con panel de detalle.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen (más grande y sin recorte) */}
            <div className="relative">
              <div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 shadow-2xl">
                <div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/0 p-3 ring-1 ring-white/10">
                  <img
                    src={sealquila}
                    alt="YaVoy Inmobiliarias"
                    className="w-full rounded-xl object-contain h-[380px] md:h-[540px] lg:h-[620px]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* glow */}
              <div className="pointer-events-none absolute -right-10 -top-12 hidden h-48 w-48 rounded-full bg-blue-600/15 blur-[80px] lg:block" />
              <div className="pointer-events-none absolute -left-10 -bottom-12 hidden h-48 w-48 rounded-full bg-cyan-500/10 blur-[80px] lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <h2 className="text-2xl font-bold md:text-3xl">Por qué estar en YaVoy</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
          No es solo “subir anuncios”. Es un sistema para captar interesados, programar visitas y hacer seguimiento con
          trazabilidad.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Leads más cualificados",
              desc: "Interesados locales, con perfil y contacto. Reduce llamadas perdidas y visitas improductivas.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              ),
            },
            {
              title: "Agenda de visitas integrada",
              desc: "Calendario mensual con visitas por día, estados (programada/confirmada/cancelada) y panel de detalle.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2v3M16 2v3" />
                  <path d="M3 8h18" />
                  <path d="M5 5h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
                  <path d="M7 12h5M7 16h9" />
                </svg>
              ),
            },
            {
              title: "Gestión profesional",
              desc: "Tus inmuebles, tus interesados, tu seguimiento. YaVoy organiza el flujo para acelerar cierres.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 3 3 6-6" />
                </svg>
              ),
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:bg-white/10 transition">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 text-white/90">
                  {b.icon}
                </div>
                <div>
                  <p className="text-base font-semibold">{b.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Cómo funciona</h2>
              <p className="mt-2 text-sm text-white/70 md:text-base">
                Publica, recibe interesados, agenda visitas y gestiona el proceso de principio a fin.
              </p>
            </div>
            <div className="text-sm text-white/60">Enfoque: simple, rápido, medible</div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { step: "1", title: "Publica inmuebles", desc: "Alquiler / venta (piso, local, habitación)." },
              { step: "2", title: "Recibe interesados", desc: "Contactos y solicitudes en tiempo real." },
              { step: "3", title: "Programa visitas", desc: "Agenda mensual + vista lista con estados." },
              { step: "4", title: "Cierra y gestiona", desc: "Seguimiento y control del pipeline." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl bg-[#0b1220] p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 ring-1 ring-blue-500/20 text-sm font-extrabold text-white">
                    {s.step}
                  </div>
                  <p className="font-semibold">{s.title}</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#0b1220] p-5 ring-1 ring-white/10">
              <p className="font-semibold">Agenda de visitas (incluida)</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Calendario mensual con “pills” por visita, colores por estado y panel derecho de detalle
                (ver/editar/cancelar/marcar realizada).
              </p>
            </div>
            <div className="rounded-2xl bg-[#0b1220] p-5 ring-1 ring-white/10">
              <p className="font-semibold">Visibilidad y confianza</p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Perfil profesional, documentación y reputación. Más confianza = más conversiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <h2 className="text-2xl font-bold md:text-3xl">Planes para Inmobiliarias</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
          Planes orientados a volumen de anuncios activos y uso continuo. Renovables.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Agencia50 */}
          <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/60">Agencia</p>
                <h3 className="mt-2 text-2xl font-extrabold">Agencia50</h3>
                <p className="mt-2 text-sm text-white/70">Hasta 50 anuncios activos</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-extrabold">29,90€</p>
                <p className="text-xs text-white/60">/ mes</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Piso, local y habitación (alquiler o venta)",
                "Agenda de visitas incluida",
                "Gestión de interesados y pipeline",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={goRegister}
                className="rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-[#0b1220] hover:bg-emerald-300"
              >
                Contratar Agencia50
              </button>

              <button
                type="button"
                onClick={() => scrollToId("demo")}
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Solicitar demo (10 días)
              </button>
            </div>
          </div>

          {/* Agencia100 */}
          <div className="rounded-3xl bg-white/5 p-7 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-white/60">Agencia</p>
                <h3 className="mt-2 text-2xl font-extrabold">Agencia100</h3>
                <p className="mt-2 text-sm text-white/70">Hasta 100 anuncios activos</p>
              </div>
              <div className="text-right">
                <p className="text-4xl font-extrabold">59,90€</p>
                <p className="text-xs text-white/60">/ mes</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Piso, local y habitación (alquiler o venta)",
                "Agenda de visitas + gestión avanzada",
                "Mayor capacidad de publicación y rotación",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={goRegister}
                className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Contratar Agencia100
              </button>

              <button
                type="button"
                onClick={() => scrollToId("demo")}
                className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Solicitar demo (10 días)
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-white/5 p-5 text-sm text-white/70 ring-1 ring-white/10">
          <p className="font-semibold text-white">Modalidades</p>
          <p className="mt-1">
            Mensual / semestral (10% descuento) / anual (17% descuento) mostrando el coste efectivo mensual.
          </p>
        </div>
      </section>

      {/* DEMO FORM */}
      <section id="demo" className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Solicitar demo (10 días)</h2>
              <p className="mt-2 max-w-2xl text-sm text-white/70 md:text-base">
                Déjanos tus datos y te activamos un usuario demo para probar publicación, interesados y agenda de visitas.
              </p>
            </div>
            <div className="text-sm text-white/60">Respuesta rápida</div>
          </div>

          <form
            className="mt-8 grid gap-4 md:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              // Aquí conectarás con tu endpoint (email/n8n/CRM)
              alert("Solicitud enviada. Te contactamos para activar tu demo de 10 días.");
            }}
          >
            <div className="md:col-span-1">
              <label className="text-xs font-semibold text-white/70">Nombre y apellidos</label>
              <input
                required
                className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="Ej. Ana García"
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-xs font-semibold text-white/70">Inmobiliaria / Empresa</label>
              <input
                required
                className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="Ej. Remax Centro"
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-xs font-semibold text-white/70">Email</label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="correo@empresa.com"
              />
            </div>

            <div className="md:col-span-1">
              <label className="text-xs font-semibold text-white/70">Teléfono</label>
              <input
                className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="+34 600 000 000"
              />
            </div>

            <div className="md:col-span-2">
              <label className="text-xs font-semibold text-white/70">Mensaje (opcional)</label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                placeholder="Cuéntanos cuántos inmuebles publicas al mes, zonas, etc."
              />
            </div>

            <div className="md:col-span-2 flex flex-wrap gap-3 pt-2">
              <button
                type="submit"
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Solicitar demo
              </button>
              <button
                type="button"
                onClick={goRegister}
                className="rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
              >
                Ir a registro
              </button>
            </div>

            <div className="md:col-span-2 rounded-2xl bg-white/5 p-4 text-sm text-white/70 ring-1 ring-white/10">
              Te creamos un usuario demo de <span className="font-semibold text-white">10 días</span> con acceso al módulo
              Inmobiliaria.
            </div>
          </form>
        </div>
      </section>

      {/* CONTACTO (formulario tipo landing) */}
      <section id="contacto" className="border-t border-white/10 bg-[#070c14]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Contacto</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
                ¿Quieres una demo guiada o hablar con nosotros antes de contratar? Escríbenos y te respondemos rápido.
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/70">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12.86.32 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.58-1.12a2 2 0 0 1 2.11-.45c.8.25 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>Atención rápida (email / teléfono)</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16v16H4z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </span>
                  <span>Te ayudamos a activar tu demo de 10 días</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId("demo")}
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Solicitar demo
                </button>
                <button
                  type="button"
                  onClick={goRegister}
                  className="rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
                >
                  Registrarse
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
              <h4 className="text-lg font-bold">Escríbenos</h4>
              <p className="mt-2 text-sm text-white/70">Cuéntanos qué necesitas y te contactamos.</p>

              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Mensaje enviado. Te contactamos en breve.");
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-white/70">Nombre</label>
                    <input
                      required
                      className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-white/70">Teléfono</label>
                    <input
                      className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/70">Email</label>
                  <input
                    required
                    type="email"
                    className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="correo@empresa.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-white/70">Mensaje</label>
                  <textarea
                    required
                    rows={5}
                    className="mt-2 w-full rounded-xl bg-[#0b1220] px-4 py-3 text-sm text-white ring-1 ring-white/10 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    placeholder="Quiero info sobre el módulo inmobiliaria / planes / demo..."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#0b1220] hover:bg-emerald-300"
                >
                  Enviar
                </button>

                <p className="text-xs text-white/50">
                  Al enviar aceptas que usemos tus datos para responder a tu solicitud (sin spam).
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InmobiliariasInfo;
