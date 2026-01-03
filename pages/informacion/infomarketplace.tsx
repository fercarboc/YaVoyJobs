// src/pages/infomarketplace.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import marketplaceHero from "@/public/assets/market.png";


/**
 * InfoMarketplace (YaVoy) — versión React + Tailwind
 * - One-page con scroll vertical
 * - Menú sticky con anchors
 * - Modo oscuro por clase "dark" (se deja activo por defecto en el contenedor)
 *
 * Nota: He sustituido el CDN de Material Symbols por SVGs inline
 * para que funcione sin dependencias externas.
 */

type IconName =
  | "storefront"
  | "menu"
  | "visibility"
  | "verified_user"
  | "dashboard"
  | "sell"
  | "shopping_cart"
  | "payments"
  | "percent"
  | "receipt_long"
  | "currency_exchange"
  | "inventory_2"
  | "schedule_send"
  | "support_agent"
  | "handshake"
  | "gavel"
  | "policy"
  | "arrow_forward";

function Icon({
  name,
  className = "",
  title,
}: {
  name: IconName;
  className?: string;
  title?: string;
}) {
  // SVGs simples (estilo “outlined”). Puedes cambiarlos por lucide-react si ya lo usas.
  const common = "fill-none stroke-current stroke-2";
  switch (name) {
    case "storefront":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M3 9l1-5h16l1 5" />
          <path className={common} d="M4 9v10h16V9" />
          <path className={common} d="M9 19v-6h6v6" />
          <path className={common} d="M7 9c0 1.7 1.3 3 3 3s3-1.3 3-3" />
          <path className={common} d="M11 9c0 1.7 1.3 3 3 3s3-1.3 3-3" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M4 7h16" />
          <path className={common} d="M4 12h16" />
          <path className={common} d="M4 17h16" />
        </svg>
      );
    case "visibility":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle className={common} cx="12" cy="12" r="3" />
        </svg>
      );
    case "verified_user":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z" />
          <path className={common} d="M8 12l2.5 2.5L16 9" />
        </svg>
      );
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M4 13h7V4H4v9Z" />
          <path className={common} d="M13 20h7V11h-7v9Z" />
          <path className={common} d="M13 9h7V4h-7v5Z" />
          <path className={common} d="M4 20h7v-5H4v5Z" />
        </svg>
      );
    case "sell":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M20 10l-8-8H4v8l8 8 8-8Z" />
          <circle className={common} cx="7.5" cy="7.5" r="1.5" />
        </svg>
      );
    case "shopping_cart":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M6 6h15l-2 9H8L6 6Z" />
          <path className={common} d="M6 6 5 3H2" />
          <circle className={common} cx="9" cy="20" r="1" />
          <circle className={common} cx="18" cy="20" r="1" />
        </svg>
      );
    case "payments":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M3 7h18v10H3V7Z" />
          <path className={common} d="M3 10h18" />
          <path className={common} d="M7 14h4" />
        </svg>
      );
    case "percent":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M19 5 5 19" />
          <circle className={common} cx="7" cy="7" r="2" />
          <circle className={common} cx="17" cy="17" r="2" />
        </svg>
      );
    case "receipt_long":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M6 2h12v20l-2-1-2 1-2-1-2 1-2-1-2 1V2Z" />
          <path className={common} d="M9 7h6" />
          <path className={common} d="M9 11h6" />
          <path className={common} d="M9 15h4" />
        </svg>
      );
    case "currency_exchange":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M7 7h6a3 3 0 0 1 0 6H7V7Z" />
          <path className={common} d="M7 10h6" />
          <path className={common} d="M16 16h5l-2 2" />
          <path className={common} d="M21 16l-2-2" />
        </svg>
      );
    case "inventory_2":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M3 7h18v14H3V7Z" />
          <path className={common} d="M7 7V3h10v4" />
          <path className={common} d="M8 12h8" />
        </svg>
      );
    case "schedule_send":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M12 7v5l3 2" />
          <circle className={common} cx="12" cy="12" r="7" />
          <path className={common} d="M22 5l-6 6" />
        </svg>
      );
    case "support_agent":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M4 12a8 8 0 0 1 16 0" />
          <path className={common} d="M4 12v3a2 2 0 0 0 2 2h2v-6H6a2 2 0 0 0-2 2Z" />
          <path className={common} d="M20 12v3a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2Z" />
          <path className={common} d="M12 17v2" />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M8 12l2-2a2 2 0 0 1 3 0l1 1" />
          <path className={common} d="M2 12l5-5 4 4-5 5-4-4Z" />
          <path className={common} d="M22 12l-5-5-4 4 5 5 4-4Z" />
          <path className={common} d="M9 13l2 2a2 2 0 0 0 3 0l1-1" />
        </svg>
      );
    case "gavel":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M14 4l6 6" />
          <path className={common} d="M11 7l6 6" />
          <path className={common} d="M2 20l7-7" />
          <path className={common} d="M3 21h8" />
        </svg>
      );
    case "policy":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Z" />
          <path className={common} d="M9 12h6" />
          <path className={common} d="M9 15h4" />
        </svg>
      );
    case "arrow_forward":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-label={title ?? name} role="img">
          <path className={common} d="M5 12h12" />
          <path className={common} d="M13 6l6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function InfoMarketplace() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Si tu app ya maneja dark mode globalmente, puedes quitar esta parte.
  // Aquí añadimos "dark" al <html> en runtime para que imite tu HTML.
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("dark");
    return () => {
      // Si no quieres quitarlo al salir, comenta estas líneas
      // html.classList.remove("dark");
    };
  }, []);

  const heroBgUrl = useMemo(
    () =>
      `https://lh3.googleusercontent.com/aida-public/AB6AXuAYMDt6pTEc51GLU7ESy4rDjnFhvVkxQbKsU53yDByiKtVuIJQQi7VuuXs7q7j1vzcKL51EGAnr_aSClOyMNre3VC1yt3yALWHp82Q_RcGp2OEKaLlRWymiXw3YI5MrBYIJiT4m259L_9l_i9se2WEwPk9NvUDm7U8-UbUPJtpp-I95lW-nI9HY7XzWh-VrSxgaxSaDUFl6413I0yBCfnPhh0TesNhjVpVrbhCD5mx5JoPebVZ701M0G35qv-VL5DAXYSLBRbtKnHE`,
    []
  );

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] text-slate-900 dark:text-white overflow-x-hidden font-sans">
      <div className="relative flex min-h-screen w-full flex-col">
      
        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center w-full">
          {/* Hero */}
          <section className="w-full px-4 py-12 md:py-20 max-w-7xl mx-auto">
            <div className="@container">
              <div className="flex flex-col gap-8 md:gap-12 md:flex-row items-center">
                <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                    Bienvenido a <span className="text-[#2b8cee]">MarketPlace</span> <span className="text-white">YaVoy</span>
                    </h1>

                    <h2 className="text-slate-200 text-lg font-normal leading-relaxed">
                    Vende tus productos y servicios, gana visibilidad en tu zona y conecta con clientes verificados.
                    Publica en minutos, cobra con seguridad y gestiona todo desde un único panel.
                    </h2>


                  <div className="flex gap-4 pt-2 flex-wrap">
                    <button
                      className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#2b8cee] hover:bg-[#2b8cee]/90 transition-all text-white text-base font-bold shadow-lg shadow-[#2b8cee]/25"
                      onClick={() => {
                        const el = document.getElementById("que-es2");
                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      Explorar Marketplace
                    </button>

                    <button
                      className="flex items-center justify-center rounded-lg h-12 px-6 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all text-slate-900 dark:text-white text-base font-medium"
                      onClick={() => {
                        const el = document.getElementById("como-funciona2");
                        el?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      Ver Tutoriales
                    </button>
                  </div>
                </div>

              <div className="w-full md:w-1/2">
                <img
                  src={marketplaceHero}
                  alt="MarketPlace YaVoyJobs"
                  className="w-full h-96 md:h-[520px] object-contain rounded-2xl shadow-2xl bg-white/10 p-3"
                  loading="lazy"
                />
              </div>

              </div>
            </div>
          </section>

          {/* Qué es */}
          <section className="w-full px-4 py-16 bg-white dark:bg-[#15202b]" id="que-es2">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
              <div className="flex flex-col gap-4 max-w-3xl">
                <span className="text-[#2b8cee] font-bold uppercase tracking-wider text-sm">Visión General</span>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
                  Qué es el Marketplace YaVoy
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                  Somos el intermediario de confianza que conecta compradores y vendedores, garantizando seguridad en los pagos y
                  máxima exposición para tus productos dentro de un ecosistema verificado.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#192633] p-6 transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-[#2b8cee]/10 flex items-center justify-center text-[#2b8cee]">
                    <Icon name="visibility" className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Visibilidad Premium</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Destaca tus productos ante una audiencia cualificada de usuarios registrados.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#192633] p-6 transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-[#2b8cee]/10 flex items-center justify-center text-[#2b8cee]">
                    <Icon name="verified_user" className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pagos Seguros</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Transacciones protegidas con tecnología de encriptación y dispersión automática.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#192633] p-6 transition-transform hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-lg bg-[#2b8cee]/10 flex items-center justify-center text-[#2b8cee]">
                    <Icon name="dashboard" className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Gestión Centralizada</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Panel de control intuitivo para seguir todos tus movimientos y métricas en tiempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cómo funciona */}
          <section className="w-full px-4 py-16 max-w-7xl mx-auto" id="como-funciona2">
            <div className="flex flex-col gap-10">
              <div className="border-b border-slate-200 dark:border-[#233648] pb-4">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight text-slate-900 dark:text-white">
                  Cómo Comprar y Vender
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Guía rápida para operar en el marketplace</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                {/* Vendedores */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#2b8cee]">
                      <Icon name="sell" className="w-8 h-8" />
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Para Vendedores</h3>
                  </div>

                  <Step color="primary" number={1} title="Registro y Verificación">
                    Completa tu perfil de vendedor con datos fiscales verificados para activar tu cuenta.
                  </Step>
                  <Step color="primary" number={2} title="Publicación de Catálogo">
                    Sube tus productos con fotos claras, descripciones detalladas y precios competitivos.
                  </Step>
                  <Step color="primary" number={3} title="Gestión de Ventas" last>
                    Recibe notificaciones instantáneas, prepara los pedidos y gestiona los envíos desde el panel.
                  </Step>
                </div>

                {/* Compradores */}
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-emerald-500">
                      <Icon name="shopping_cart" className="w-8 h-8" />
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Para Compradores</h3>
                  </div>

                  <Step color="emerald" number={1} title="Exploración Inteligente">
                    Encuentra servicios y productos complementarios utilizando nuestros filtros avanzados.
                  </Step>
                  <Step color="emerald" number={2} title="Pago Centralizado">
                    Realiza el pago seguro a través de nuestra pasarela integrada. Retenemos el pago hasta el envío.
                  </Step>
                  <Step color="emerald" number={3} title="Recepción y Calificación" last>
                    Confirma la recepción del producto y califica al vendedor para ayudar a la comunidad.
                  </Step>
                </div>
              </div>
            </div>
          </section>

          {/* Pagos */}
          <section
            className="w-full px-4 py-16 bg-slate-100 dark:bg-[#15202b] border-y border-slate-200 dark:border-[#233648]"
            id="pagos"
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Pagos y Devoluciones</h2>
                <p className="text-slate-600 dark:text-slate-400">Transparencia total en tus finanzas. Sin letras pequeñas.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <InfoCard
                  icon={<Icon name="payments" className="w-10 h-10" />}
                  title="Dispersión Semanal"
                  text="Los fondos se transfieren automáticamente a tu cuenta bancaria registrada cada martes."
                />
                <InfoCard
                  icon={<Icon name="percent" className="w-10 h-10" />}
                  title="Comisiones Claras"
                  text="Solo cobramos una pequeña comisión por transacción exitosa. El registro es gratuito."
                />
                <InfoCard
                  icon={<Icon name="receipt_long" className="w-10 h-10" />}
                  title="Facturación Auto"
                  text="Generamos automáticamente las facturas de comisiones para facilitar tu contabilidad."
                />
                <InfoCard
                  icon={<Icon name="currency_exchange" className="w-10 h-10" />}
                  title="Reembolsos"
                  text="Sistema integrado de disputas. Los reembolsos aprobados se procesan en 24-48 horas."
                />
              </div>
            </div>
          </section>

          {/* Responsabilidad del Vendedor */}
          <section className="w-full px-4 py-16 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1">
                <span className="text-[#2b8cee] font-bold uppercase tracking-wider text-xs mb-2 block">
                  Compromiso de Calidad
                </span>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Responsabilidades del Vendedor</h2>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                  Mantener la confianza en el marketplace es tarea de todos. Al vender en YaVoy, te comprometes a los siguientes
                  estándares de calidad.
                </p>

                <div className="flex flex-col gap-4">
                  <Bullet
                    icon={<Icon name="inventory_2" className="w-5 h-5" />}
                    title="Veracidad del Producto"
                    text="El producto enviado debe coincidir exactamente con la descripción y las fotografías publicadas."
                  />
                  <Bullet
                    icon={<Icon name="schedule_send" className="w-5 h-5" />}
                    title="Tiempos de Envío"
                    text="Los pedidos deben despacharse dentro de las 48 horas hábiles siguientes a la confirmación de pago."
                  />
                  <Bullet
                    icon={<Icon name="support_agent" className="w-5 h-5" />}
                    title="Atención al Cliente"
                    text="Responder a las consultas y reclamos de los compradores en un plazo máximo de 24 horas."
                  />
                </div>
              </div>

              <div className="w-full lg:w-[400px] bg-slate-100 dark:bg-[#15202b] rounded-2xl p-6 lg:p-8 flex flex-col gap-6 items-center text-center">
                <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-[#233648] flex items-center justify-center">
                  <span className="text-slate-400 dark:text-slate-500">
                    <Icon name="handshake" className="w-10 h-10" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">¿Necesitas ayuda?</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Nuestro equipo de soporte está disponible para resolver dudas sobre tus obligaciones.
                  </p>
                </div>

                <button
                  className="w-full py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-[#233648] transition-colors"
                  onClick={() => navigate("/soporte")}
                >
                  Contactar Soporte
                </button>
              </div>
            </div>
          </section>

          {/* Zona Legal */}
          <section className="w-full px-4 py-12 max-w-7xl mx-auto mb-12" id="legal">
            <div className="relative overflow-hidden rounded-2xl border-l-4 border-[#2b8cee] bg-slate-50 dark:bg-[#131d27] p-8 md:p-12">
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="text-[#2b8cee]">
                    <Icon name="gavel" className="w-8 h-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Zona Legal</h2>
                </div>

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                  El uso de YaVoy implica la aceptación de nuestros Términos y Condiciones. Como intermediario, YaVoy no es
                  propietario de los bienes ofrecidos ni interviene en la fijación de precios. Cualquier disputa legal sobre la
                  calidad o seguridad de los productos recae sobre el Vendedor original.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2b8cee] hover:underline"
                    to="/legal/terminos"
                  >
                    Leer Términos de Servicio <Icon name="arrow_forward" className="w-4 h-4" />
                  </Link>

                  <Link
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2b8cee] hover:underline"
                    to="/legal/privacidad"
                  >
                    Política de Privacidad <Icon name="arrow_forward" className="w-4 h-4" />
                  </Link>

                  <Link
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2b8cee] hover:underline"
                    to="/legal/contrato-vendedor"
                  >
                    Contrato de Vendedor <Icon name="arrow_forward" className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="absolute -right-10 -bottom-10 opacity-5 dark:opacity-10 text-slate-900 dark:text-white pointer-events-none">
                <Icon name="policy" className="w-[200px] h-[200px]" />
              </div>
            </div>
          </section>

          {/* CTA final */}
          <section className="w-full bg-[#2b8cee]/10 border-t border-[#2b8cee]/20 py-20 px-4">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                ¿Listo para expandir tu negocio?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
                Únete a miles de vendedores que ya confían en YaVoy para gestionar sus cobros y alcanzar nuevos clientes.
              </p>
              <button
                className="flex items-center justify-center rounded-lg h-14 px-8 bg-[#2b8cee] hover:bg-[#2b8cee]/90 transition-all text-white text-lg font-bold shadow-xl shadow-[#2b8cee]/30 transform hover:scale-105"
                onClick={() => navigate("/marketplace/vender")}
              >
                Empezar a Vender Ahora
              </button>
              <p className="text-sm text-slate-500 dark:text-slate-500">No se requiere tarjeta de crédito para registrarse.</p>
            </div>
          </section>
        </main>

       
      </div>
    </div>
  );
}

/* =========================
   Subcomponentes
========================= */

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white dark:bg-[#192633] p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
      <div className="text-[#2b8cee] mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-400">{text}</p>
    </div>
  );
}

function Bullet({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-[#192633] border border-slate-100 dark:border-slate-700">
      <span className="text-[#2b8cee] mt-1">{icon}</span>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{text}</p>
      </div>
    </div>
  );
}

function Step({
  color,
  number,
  title,
  children,
  last = false,
}: {
  color: "primary" | "emerald";
  number: number;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  const dotClass =
    color === "primary" ? "bg-[#2b8cee] text-white" : "bg-emerald-500 text-white";
  const lineClass =
    color === "primary"
      ? "bg-slate-200 dark:bg-slate-700"
      : "bg-slate-200 dark:bg-slate-700";

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={cx("w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm", dotClass)}>
          {number}
        </div>
        {!last && <div className={cx("w-0.5 h-full my-2", lineClass)} />}
      </div>

      <div className={cx("flex flex-col", !last && "pb-8")}>
        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{children}</p>
      </div>
    </div>
  );
}
