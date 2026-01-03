import React from 'react';

const TITLE = `Panel Proveedor - YaVoy`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-slate-700 bg-surface-light dark:bg-surface-dark px-10 py-3 shadow-sm">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 text-primary">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-black leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="hidden lg:flex flex-1 justify-end gap-8">
<nav class="flex items-center gap-9">
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-bold leading-normal hover:text-primary transition-colors" href="#">Panel</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Productos</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Pedidos</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Mensajes</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Ajustes</a>
</nav>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em]">
<span class="truncate">Mi Perfil</span>
</button>
</div>
<!-- Mobile Menu Icon (Visual Only) -->
<button class="lg:hidden text-[#0d141b] dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<!-- Main Layout Container -->
<main class="layout-container flex h-full grow flex-col">
<div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-8">
<div class="layout-content-container flex flex-col w-full max-w-[1200px] flex-1 gap-6">
<!-- Page Heading -->
<div class="flex flex-wrap justify-between gap-3 px-4">
<div class="flex min-w-72 flex-col gap-2">
<h1 class="text-[#0d141b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Panel Proveedor</h1>
<p class="text-[#4c739a] dark:text-slate-400 text-base font-normal leading-normal">Bienvenido de nuevo, ElectroHogar S.L. Aquí tienes el resumen de tu actividad.</p>
</div>
<div class="flex items-center gap-2">
<span class="text-sm text-[#4c739a] dark:text-slate-400">Última actualización: Hoy, 10:30 AM</span>
</div>
</div>
<!-- Alert Banner (Based on SingleMessage) -->
<div class="mx-4 flex flex-col md:flex-row gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary rounded-r-lg items-start md:items-center shadow-sm">
<div class="flex items-center justify-center rounded-full size-10 bg-white dark:bg-slate-800 text-primary shadow-sm shrink-0">
<span class="material-symbols-outlined">notifications_active</span>
</div>
<div class="flex flex-1 flex-col justify-center">
<p class="text-[#0d141b] dark:text-white text-base font-bold leading-tight mb-1">Aviso del Sistema</p>
<p class="text-[#0d141b] dark:text-slate-300 text-sm font-normal leading-normal">Recuerda mantener precios y disponibilidad actualizados para mejorar tu posicionamiento.</p>
</div>
<button class="text-primary text-sm font-bold hover:underline whitespace-nowrap px-2">
                            Actualizar ahora
                        </button>
</div>
<!-- Stats Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
<!-- Stat 1 -->
<div class="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-[#cfdbe7] dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1">
<div class="flex justify-between items-start">
<p class="text-[#0d141b] dark:text-slate-300 text-base font-medium leading-normal">Productos activos</p>
<span class="material-symbols-outlined text-primary/80">inventory_2</span>
</div>
<div class="flex items-baseline gap-2 mt-2">
<p class="text-[#0d141b] dark:text-white tracking-tight text-3xl font-black leading-tight">24</p>
<p class="text-[#078838] bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-xs font-bold leading-normal">+2%</p>
</div>
<p class="text-[#4c739a] dark:text-slate-500 text-sm mt-1">En catálogo</p>
</div>
<!-- Stat 2 -->
<div class="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-[#cfdbe7] dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1">
<div class="flex justify-between items-start">
<p class="text-[#0d141b] dark:text-slate-300 text-base font-medium leading-normal">Pedidos pendientes</p>
<span class="material-symbols-outlined text-orange-500">pending_actions</span>
</div>
<div class="flex items-baseline gap-2 mt-2">
<p class="text-[#0d141b] dark:text-white tracking-tight text-3xl font-black leading-tight">5</p>
<p class="text-orange-600 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded-full text-xs font-bold leading-normal">Atención</p>
</div>
<p class="text-[#4c739a] dark:text-slate-500 text-sm mt-1">Requieren confirmación</p>
</div>
<!-- Stat 3 -->
<div class="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-[#cfdbe7] dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1">
<div class="flex justify-between items-start">
<p class="text-[#0d141b] dark:text-slate-300 text-base font-medium leading-normal">Mensajes nuevos</p>
<span class="material-symbols-outlined text-primary/80">chat</span>
</div>
<div class="flex items-baseline gap-2 mt-2">
<p class="text-[#0d141b] dark:text-white tracking-tight text-3xl font-black leading-tight">3</p>
<p class="text-[#078838] bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-xs font-bold leading-normal">Nuevos</p>
</div>
<p class="text-[#4c739a] dark:text-slate-500 text-sm mt-1">Sin leer</p>
</div>
<!-- Stat 4 -->
<div class="flex flex-col gap-2 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-[#cfdbe7] dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1">
<div class="flex justify-between items-start">
<p class="text-[#0d141b] dark:text-slate-300 text-base font-medium leading-normal">Visitas perfil</p>
<span class="material-symbols-outlined text-primary/80">visibility</span>
</div>
<div class="flex items-baseline gap-2 mt-2">
<p class="text-[#0d141b] dark:text-white tracking-tight text-3xl font-black leading-tight">152</p>
<p class="text-[#078838] bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full text-xs font-bold leading-normal">+12%</p>
</div>
<p class="text-[#4c739a] dark:text-slate-500 text-sm mt-1">Últimos 7 días</p>
</div>
</div>
<!-- Split Section: Featured Products & Recent Messages -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 mt-4">
<!-- Featured Products (Takes up 2/3) -->
<div class="lg:col-span-2 flex flex-col gap-4">
<div class="flex items-center justify-between">
<h2 class="text-[#0d141b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Productos Destacados</h2>
<a class="text-primary text-sm font-medium hover:underline" href="#">Ver todos</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Product Card 1 -->
<div class="group flex flex-col overflow-hidden rounded-xl border border-[#cfdbe7] dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-all">
<div class="h-40 w-full bg-cover bg-center" data-alt="Modern polaroid camera with flash on a colorful background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBv5U4K3sxsoWFJ7CnIoIWJB4ARGovWL6AlezfO49tqJWzZVfC7DBMSh69VndzwsvuNPqW29bldzst6Sjbz4EOv65s0FpAV57XDX_oRd3XwcAE4WTLLjJ3rF-MZrC0G259LTFZnia0_ZKkQk9fBCpLgVr0SCfb2L9WosM3WlS8P1NT5icHc3qowVr0nLojzaBBbEIRb1RCBRypPzKpFsh_UMUuov96YfwrBqWgTGQSu-vZBQMTd24a3uvvugEjKAfdf4LZf4Y8TcA');"></div>
<div class="flex flex-col p-4 gap-2">
<div class="flex justify-between items-start">
<h3 class="text-base font-bold text-[#0d141b] dark:text-white group-hover:text-primary transition-colors">Cámara Instantánea X200</h3>
<span class="rounded bg-green-100 dark:bg-green-900/40 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400">Activo</span>
</div>
<p class="text-sm text-[#4c739a] dark:text-slate-400">Electrónica • Stock: 15</p>
<div class="mt-2 flex items-center justify-between">
<span class="text-lg font-bold text-[#0d141b] dark:text-white">129,99 €</span>
<button class="text-sm font-medium text-primary hover:text-blue-700 dark:hover:text-blue-400">Editar</button>
</div>
</div>
</div>
<!-- Product Card 2 -->
<div class="group flex flex-col overflow-hidden rounded-xl border border-[#cfdbe7] dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-all">
<div class="h-40 w-full bg-cover bg-center" data-alt="High quality headphones product shot with simple background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDLkq7zzXxpICXa8Gd5MBdXikWhx-rgtzEpO2pQb8pyffW63_nnNQOHUjFYS3yA6Ko1gtYlymDr0jDwgYDn3Uh1HeVwOX7wBQFUbgFp9ctoMdcXRmhFc9Q9Qe5iPk5Mx-zkRxKs3kypLENyO8jEcqQ-p82as5aw0PXDKnkRuthjMp73NQUbA762Rxf1tV1QnLW1eT0gPBZZPxVyLrj4u2krJewkRPQJOUZrlVLC6ctwvvPM2tb6EZ2657mf_7TuDmCFP-SgukiGig');"></div>
<div class="flex flex-col p-4 gap-2">
<div class="flex justify-between items-start">
<h3 class="text-base font-bold text-[#0d141b] dark:text-white group-hover:text-primary transition-colors">Auriculares Studio Pro</h3>
<span class="rounded bg-green-100 dark:bg-green-900/40 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400">Activo</span>
</div>
<p class="text-sm text-[#4c739a] dark:text-slate-400">Audio • Stock: 8</p>
<div class="mt-2 flex items-center justify-between">
<span class="text-lg font-bold text-[#0d141b] dark:text-white">89,50 €</span>
<button class="text-sm font-medium text-primary hover:text-blue-700 dark:hover:text-blue-400">Editar</button>
</div>
</div>
</div>
</div>
</div>
<!-- Sidebar Section: Recent Messages/Actions (Takes up 1/3) -->
<div class="flex flex-col gap-4">
<h2 class="text-[#0d141b] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">Actividad Reciente</h2>
<div class="flex flex-col rounded-xl border border-[#cfdbe7] dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm divide-y divide-[#cfdbe7] dark:divide-slate-700">
<!-- Message Item -->
<div class="flex gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0" data-alt="Profile picture of a customer named Maria" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCWnShsinht8cPeMDyieCZwqxq4thexHrx2CU5eGpavKyb9pLBqCe9ej10hZM7ziuuJjBCE2kRH_6bo22C_RqmzMwRmpRNnBMn-du8-N-Ber_uVBpNsoSHN4Q5o-whqVfSC-53TM-QxaOTWbWniA0MI545pzqiooI4Bw7WKJS_3c5dAFWsdKZzLy7jnejWlZnlt4NFq1azEHo6QD_Za23EnS8ZvtG_457YVpvEu3RiAaeY97rjYARjRY1lTE84XCBjZO8k1-tSQEQ");'></div>
<div class="flex flex-1 flex-col">
<div class="flex justify-between items-center mb-1">
<p class="text-[#0d141b] dark:text-white text-sm font-bold">María G.</p>
<p class="text-[#4c739a] dark:text-slate-500 text-xs">2min</p>
</div>
<p class="text-[#4c739a] dark:text-slate-400 text-sm line-clamp-2">¿Tienen disponibilidad para el próximo martes?</p>
</div>
</div>
<!-- Message Item -->
<div class="flex gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 shrink-0" data-alt="Profile picture of a customer named Carlos" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7c7SwR71OOSey1StCD4qxbyiS1Sx49b24xpAwB1hz4AUbi_gpbz_iFKKLV1GNCgzoZs0EVqJS1S9rCTgyoCnOvpJ43Flij2QaZfbmwp3ShUYuePan88kyFlFSplkJ3D16U_b0AmbL6V2Py6a5f4da3NrIpairIIo5ch-vIt0_88a2XuLlQLH3Ck6Mlb306TMn4oOEKMenflMYkqVcPBdWNKRd4sRdviWlf2aaGggbWTXHLMS2PQmIMfZhFBWc6l6bn-8nVDsszQ");'></div>
<div class="flex flex-1 flex-col">
<div class="flex justify-between items-center mb-1">
<p class="text-[#0d141b] dark:text-white text-sm font-bold">Carlos R.</p>
<p class="text-[#4c739a] dark:text-slate-500 text-xs">1h</p>
</div>
<p class="text-[#4c739a] dark:text-slate-400 text-sm line-clamp-2">Hola, necesito factura del último pedido #9921.</p>
</div>
</div>
<!-- Action Button inside card -->
<div class="p-3">
<button class="w-full flex items-center justify-center gap-2 rounded-lg py-2 text-sm font-medium text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                                        Ver todos los mensajes
                                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
<!-- Quick Action Card -->
<div class="rounded-xl bg-gradient-to-br from-primary to-blue-600 p-5 text-white shadow-md">
<div class="mb-4 flex items-center gap-3">
<div class="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
<span class="material-symbols-outlined text-white">add_circle</span>
</div>
<p class="font-bold text-lg">Nuevo Producto</p>
</div>
<p class="mb-4 text-sm text-blue-100">Añade nuevos artículos a tu catálogo para aumentar tus ventas.</p>
<button class="w-full rounded-lg bg-white py-2 text-sm font-bold text-primary hover:bg-blue-50 transition-colors">
                                    Crear producto
                                </button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function PanelProveedorResumen() {
  React.useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <div className="min-h-screen">
      {EXTRA_CSS && (
        <style dangerouslySetInnerHTML={{ __html: EXTRA_CSS }} />
      )}
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </div>
  );
}
