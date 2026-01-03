import React from 'react';

const TITLE = `Panel Anunciante - Estadísticas | YaVoy`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-10 py-3 transition-colors duration-200">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<!-- Logo SVG -->
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_330)">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</g>
<defs>
<clippath id="clip0_6_330"><rect fill="white" height="48" width="48"></rect></clippath>
</defs>
</svg>
</div>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<nav class="hidden md:flex items-center gap-9">
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Mis Anuncios</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Perfil</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Ayuda</a>
</nav>
<div class="flex items-center gap-4">
<button class="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-bold leading-normal tracking-[0.015em] border border-transparent">
<span class="truncate">Cerrar sesión</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700 shadow-sm" data-alt="User profile avatar showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAQO_BKbpTxdZzkuTGZYuWGwkYU9oXIdE5eeQVHhomqtxGwxS7fmuXLsEPaHL3biHBosrwNEZwGnFCXZQZCM4Yrs9xUYMDBCUPfknjWdqR3TZ_RnhFzG8sHwPUB7g0wxEOplX0M1N-4O_Q9PrvUocWMsHZCjgMo6gLbXeuodqCvoR-HXAlw-3FI5fnIvHdu1c9EekFfauHM9MvrcGv0lStPa7_b5OLMIddc5BmqywARxuoDDin8WwQP8JFvQ-qbAaZHK-r5zWKCPQ");'></div>
</div>
</div>
</header>
<main class="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
<!-- PageHeading & Filters -->
<div class="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
<a class="hover:text-primary" href="#">Mis Anuncios</a>
<span class="material-symbols-outlined text-base">chevron_right</span>
<span>Estadísticas</span>
</div>
<h1 class="text-slate-900 dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Estadísticas de tu anuncio</h1>
<div class="flex items-center gap-2 mt-1">
<span class="material-symbols-outlined text-primary text-xl">location_on</span>
<p class="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">Piso en Calle Alcalá, Madrid (Ref: #12345)</p>
</div>
</div>
<div class="flex items-end gap-3 min-w-[280px]">
<label class="flex flex-col flex-1">
<span class="text-slate-700 dark:text-slate-300 text-xs font-semibold uppercase tracking-wider pb-2">Rango de fechas</span>
<div class="relative">
<select class="appearance-none w-full bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 pr-10 shadow-sm transition-shadow">
<option selected="">Últimos 30 días</option>
<option value="7">Últimos 7 días</option>
<option value="90">Últimos 3 meses</option>
<option value="year">Este año</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
<span class="material-symbols-outlined">calendar_month</span>
</div>
</div>
</label>
<button aria-label="Download Report" class="h-[46px] w-[46px] flex items-center justify-center bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors shadow-sm">
<span class="material-symbols-outlined">download</span>
</button>
</div>
</div>
<!-- KPI Stats Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<!-- Visits -->
<div class="group relative flex flex-col gap-1 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-center justify-between mb-2">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Visitas al anuncio</p>
<div class="p-2 bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined">visibility</span>
</div>
</div>
<div class="flex items-baseline gap-3">
<p class="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">1,240</p>
<span class="inline-flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded text-xs font-medium">
<span class="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                        +12%
                    </span>
</div>
<p class="text-slate-400 dark:text-slate-500 text-xs mt-2">vs. periodo anterior</p>
</div>
<!-- Requests -->
<div class="group relative flex flex-col gap-1 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-center justify-between mb-2">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Solicitudes recibidas</p>
<div class="p-2 bg-purple-500/10 rounded-lg text-purple-600 dark:text-purple-400">
<span class="material-symbols-outlined">mail</span>
</div>
</div>
<div class="flex items-baseline gap-3">
<p class="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">45</p>
<span class="inline-flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded text-xs font-medium">
<span class="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                        +5%
                    </span>
</div>
<p class="text-slate-400 dark:text-slate-500 text-xs mt-2">vs. periodo anterior</p>
</div>
<!-- Chats -->
<div class="group relative flex flex-col gap-1 rounded-xl p-6 bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-center justify-between mb-2">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Chats iniciados</p>
<div class="p-2 bg-orange-500/10 rounded-lg text-orange-600 dark:text-orange-400">
<span class="material-symbols-outlined">chat</span>
</div>
</div>
<div class="flex items-baseline gap-3">
<p class="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">12</p>
<span class="inline-flex items-center text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-xs font-medium">
<span class="material-symbols-outlined text-sm mr-0.5">remove</span>
                        0%
                    </span>
</div>
<p class="text-slate-400 dark:text-slate-500 text-xs mt-2">vs. periodo anterior</p>
</div>
</div>
<!-- Charts Section -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- Main Chart: Visits Trend -->
<div class="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col">
<div class="flex items-center justify-between mb-6">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Evolución de Visitas</h3>
<div class="flex gap-2">
<button class="text-xs font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700">Diario</button>
<button class="text-xs font-medium px-3 py-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">Semanal</button>
</div>
</div>
<!-- Simulated Line Chart -->
<div class="relative w-full h-64 flex items-end gap-1 sm:gap-2 px-2 pb-6">
<!-- Grid Lines -->
<div class="absolute inset-0 flex flex-col justify-between pointer-events-none pb-6">
<div class="border-b border-dashed border-slate-200 dark:border-slate-700 w-full h-0"></div>
<div class="border-b border-dashed border-slate-200 dark:border-slate-700 w-full h-0"></div>
<div class="border-b border-dashed border-slate-200 dark:border-slate-700 w-full h-0"></div>
<div class="border-b border-slate-200 dark:border-slate-700 w-full h-0"></div>
</div>
<!-- SVG Line -->
<svg class="absolute inset-0 w-full h-[calc(100%-1.5rem)] pointer-events-none overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="gradientArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#137fec" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#137fec" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path class="text-primary" d="M0,200 Q40,150 80,180 T160,120 T240,160 T320,100 T400,130 T480,80 T560,110 T640,60 T720,90 T800,40 T880,70 L880,250 L0,250 Z" fill="url(#gradientArea)"></path>
<path d="M0,200 Q40,150 80,180 T160,120 T240,160 T320,100 T400,130 T480,80 T560,110 T640,60 T720,90 T800,40 T880,70" fill="none" stroke="#137fec" stroke-linecap="round" stroke-width="3" vector-effect="non-scaling-stroke"></path>
</svg>
<!-- X Axis Labels (Simulated) -->
<div class="absolute bottom-0 w-full flex justify-between text-xs text-slate-400 font-medium px-1">
<span>01 Nov</span>
<span>05 Nov</span>
<span>10 Nov</span>
<span>15 Nov</span>
<span>20 Nov</span>
<span>25 Nov</span>
<span>30 Nov</span>
</div>
</div>
</div>
<!-- Secondary Charts Column -->
<div class="flex flex-col gap-6">
<!-- Bar Chart: Requests Sources -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex-1">
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Origen de Solicitudes</h3>
<div class="flex items-end justify-around h-40 gap-4">
<div class="group flex flex-col items-center gap-2 w-12">
<div class="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative h-32 overflow-hidden flex items-end">
<div class="w-full bg-purple-500 hover:bg-purple-400 transition-all duration-500 h-[75%]"></div>
</div>
<span class="text-xs font-medium text-slate-500">Email</span>
</div>
<div class="group flex flex-col items-center gap-2 w-12">
<div class="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative h-32 overflow-hidden flex items-end">
<div class="w-full bg-blue-500 hover:bg-blue-400 transition-all duration-500 h-[45%]"></div>
</div>
<span class="text-xs font-medium text-slate-500">Teléfono</span>
</div>
<div class="group flex flex-col items-center gap-2 w-12">
<div class="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative h-32 overflow-hidden flex items-end">
<div class="w-full bg-orange-500 hover:bg-orange-400 transition-all duration-500 h-[30%]"></div>
</div>
<span class="text-xs font-medium text-slate-500">Chat</span>
</div>
</div>
</div>
<!-- Simple List: Recent Activity -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex-1">
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Última Actividad</h3>
<a class="text-xs text-primary font-medium hover:underline" href="#">Ver todo</a>
</div>
<div class="flex flex-col gap-3">
<div class="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer">
<div class="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
<span class="material-symbols-outlined text-sm">mail</span>
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium text-slate-900 dark:text-white truncate">Juan Pérez</p>
<p class="text-xs text-slate-500 truncate">Solicitó información</p>
</div>
<span class="text-xs text-slate-400">2h</span>
</div>
<div class="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer">
<div class="size-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
<span class="material-symbols-outlined text-sm">call</span>
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium text-slate-900 dark:text-white truncate">María García</p>
<p class="text-xs text-slate-500 truncate">Vio tu teléfono</p>
</div>
<span class="text-xs text-slate-400">5h</span>
</div>
<div class="flex items-center gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg transition-colors cursor-pointer">
<div class="size-8 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
<span class="material-symbols-outlined text-sm">chat</span>
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium text-slate-900 dark:text-white truncate">Usuario Anónimo</p>
<p class="text-xs text-slate-500 truncate">Nuevo chat iniciado</p>
</div>
<span class="text-xs text-slate-400">1d</span>
</div>
</div>
</div>
</div>
</div>
<!-- MetaText / Disclaimer -->
<div class="w-full flex justify-center py-6">
<div class="flex items-start gap-2 max-w-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
<span class="material-symbols-outlined text-blue-500 text-lg mt-0.5">info</span>
<p class="text-blue-800 dark:text-blue-200 text-sm font-normal leading-normal">Estadísticas orientativas. Los datos se actualizan cada 24 horas y pueden diferir ligeramente del tiempo real. No garantizan resultados de venta o alquiler.</p>
</div>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function PanelAnuncianteEstadisticas() {
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
