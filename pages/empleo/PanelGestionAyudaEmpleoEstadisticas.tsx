import React from 'react';

const TITLE = `YaVoy - Panel de Estadísticas`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-4 md:px-10 py-3 shadow-sm">
<div class="flex items-center gap-4">
<div class="size-8 flex items-center justify-center rounded bg-primary/10 text-primary">
<span class="material-symbols-outlined text-primary">handshake</span>
</div>
<h2 class="text-text-main-light dark:text-text-main-dark text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<!-- Desktop Menu -->
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-6 lg:gap-9">
<a class="text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Inicio</a>
<a class="text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Buscar Ayuda</a>
<a class="text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Buscar Empleo</a>
<a class="text-text-main-light dark:text-text-main-dark hover:text-primary transition-colors text-sm font-medium leading-normal" href="#">Sobre Nosotros</a>
</div>
<div class="flex gap-3">
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm">
<span class="truncate">Publicar Anuncio</span>
</button>
<button class="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
<!-- Mobile Menu Toggle -->
<button class="md:hidden flex items-center justify-center h-10 w-10 rounded-lg text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<!-- Main Content Wrapper -->
<main class="layout-container flex h-full grow flex-col px-4 md:px-10 py-6 md:py-10">
<div class="flex flex-1 justify-center">
<div class="layout-content-container flex flex-col w-full max-w-[1024px] gap-6">
<!-- Breadcrumbs -->
<nav class="flex flex-wrap gap-2 px-1">
<a class="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary text-sm font-medium leading-normal flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[18px]">dashboard</span>
                            Panel de Gestión
                        </a>
<span class="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium leading-normal">/</span>
<span class="text-text-main-light dark:text-text-main-dark text-sm font-medium leading-normal">Estadísticas</span>
</nav>
<!-- Page Heading & Actions -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200 dark:border-slate-800">
<div class="flex min-w-72 flex-col gap-2">
<h1 class="text-text-main-light dark:text-white tracking-tight text-3xl font-bold leading-tight">Estadísticas de tus Anuncios</h1>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-base font-normal leading-normal">Consulta el rendimiento de tus ofertas de ayuda y empleo en tiempo real.</p>
</div>
<!-- Filter Dropdown -->
<div class="flex items-center gap-3">
<span class="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hidden sm:block">Periodo:</span>
<div class="relative">
<select class="appearance-none bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 text-text-main-light dark:text-text-main-dark text-sm rounded-lg focus:ring-primary focus:border-primary block w-48 p-2.5 pr-8 cursor-pointer shadow-sm">
<option>Últimos 30 días</option>
<option>Esta semana</option>
<option>Este mes</option>
<option>Año actual</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary-light dark:text-text-secondary-dark">
<span class="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
<button class="flex items-center justify-center p-2.5 bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-text-secondary-light dark:text-text-secondary-dark">
<span class="material-symbols-outlined text-[20px]">download</span>
</button>
</div>
</div>
<!-- KPI Stats Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Card 1 -->
<div class="flex flex-col justify-between gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-6 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 duration-300">
<div class="flex items-center justify-between">
<div class="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
<span class="material-symbols-outlined text-primary text-2xl">description</span>
</div>
<span class="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-2 py-1 rounded-full">
<span class="material-symbols-outlined text-sm">trending_up</span> +15%
                                </span>
</div>
<div>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Candidaturas recibidas</p>
<p class="text-text-main-light dark:text-white text-3xl font-bold tracking-tight mt-1">24</p>
</div>
</div>
<!-- Card 2 -->
<div class="flex flex-col justify-between gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-6 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 duration-300">
<div class="flex items-center justify-between">
<div class="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
<span class="material-symbols-outlined text-indigo-500 text-2xl">schedule</span>
</div>
<!-- Neutral indicator -->
<span class="flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 px-2 py-1 rounded-full">
<span class="material-symbols-outlined text-sm">remove</span> 0%
                                </span>
</div>
<div>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Tiempo medio respuesta</p>
<p class="text-text-main-light dark:text-white text-3xl font-bold tracking-tight mt-1">2h 15m</p>
</div>
</div>
<!-- Card 3 -->
<div class="flex flex-col justify-between gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-6 border border-slate-200 dark:border-slate-700 shadow-sm transition-transform hover:-translate-y-1 duration-300">
<div class="flex items-center justify-between">
<div class="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
<span class="material-symbols-outlined text-purple-500 text-2xl">check_circle</span>
</div>
<span class="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 px-2 py-1 rounded-full">
<span class="material-symbols-outlined text-sm">trending_up</span> +5%
                                </span>
</div>
<div>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-sm font-medium">Servicios cerrados</p>
<p class="text-text-main-light dark:text-white text-3xl font-bold tracking-tight mt-1">12</p>
</div>
</div>
</div>
<!-- Main Chart Section -->
<div class="flex flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-6 border border-slate-200 dark:border-slate-700 shadow-sm mt-2">
<div class="flex items-center justify-between mb-4">
<div>
<h3 class="text-text-main-light dark:text-white text-lg font-bold">Evolución de candidaturas</h3>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-sm">Visitas vs. Candidaturas aplicadas</p>
</div>
<div class="flex gap-4 text-xs font-medium">
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-primary"></span>
<span class="text-text-secondary-light dark:text-text-secondary-dark">Candidaturas</span>
</div>
<div class="flex items-center gap-2">
<span class="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-600"></span>
<span class="text-text-secondary-light dark:text-text-secondary-dark">Visitas</span>
</div>
</div>
</div>
<!-- CSS-only Bar Chart Visualization -->
<div class="relative h-64 w-full flex items-end justify-between gap-2 md:gap-4 pt-10 pb-2 border-b border-slate-200 dark:border-slate-700">
<!-- Background Grid Lines (Absolute) -->
<div class="absolute inset-0 flex flex-col justify-between pointer-events-none pb-2">
<div class="w-full h-px bg-slate-100 dark:bg-slate-800"></div>
<div class="w-full h-px bg-slate-100 dark:bg-slate-800"></div>
<div class="w-full h-px bg-slate-100 dark:bg-slate-800"></div>
<div class="w-full h-px bg-slate-100 dark:bg-slate-800"></div>
<div class="w-full h-px bg-transparent"></div> <!-- Bottom spacer -->
</div>
<!-- Bar Group 1 -->
<div class="relative z-10 flex flex-col items-center flex-1 gap-1 h-full justify-end group cursor-pointer">
<div class="flex items-end gap-1 h-[40%] w-full justify-center">
<div class="w-2 md:w-4 bg-slate-200 dark:bg-slate-600 rounded-t-sm h-[80%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div class="w-2 md:w-4 bg-primary rounded-t-sm h-[45%] opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<span class="text-[10px] md:text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">01 Mar</span>
</div>
<!-- Bar Group 2 -->
<div class="relative z-10 flex flex-col items-center flex-1 gap-1 h-full justify-end group cursor-pointer">
<div class="flex items-end gap-1 h-[65%] w-full justify-center">
<div class="w-2 md:w-4 bg-slate-200 dark:bg-slate-600 rounded-t-sm h-[60%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div class="w-2 md:w-4 bg-primary rounded-t-sm h-[30%] opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<span class="text-[10px] md:text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">05 Mar</span>
</div>
<!-- Bar Group 3 -->
<div class="relative z-10 flex flex-col items-center flex-1 gap-1 h-full justify-end group cursor-pointer">
<div class="flex items-end gap-1 h-[50%] w-full justify-center">
<div class="w-2 md:w-4 bg-slate-200 dark:bg-slate-600 rounded-t-sm h-[90%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div class="w-2 md:w-4 bg-primary rounded-t-sm h-[50%] opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<span class="text-[10px] md:text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">10 Mar</span>
</div>
<!-- Bar Group 4 -->
<div class="relative z-10 flex flex-col items-center flex-1 gap-1 h-full justify-end group cursor-pointer">
<div class="flex items-end gap-1 h-[80%] w-full justify-center">
<div class="w-2 md:w-4 bg-slate-200 dark:bg-slate-600 rounded-t-sm h-[70%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div class="w-2 md:w-4 bg-primary rounded-t-sm h-[40%] opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<span class="text-[10px] md:text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">15 Mar</span>
</div>
<!-- Bar Group 5 (Peak) -->
<div class="relative z-10 flex flex-col items-center flex-1 gap-1 h-full justify-end group cursor-pointer">
<div class="flex items-end gap-1 h-[90%] w-full justify-center">
<div class="w-2 md:w-4 bg-slate-200 dark:bg-slate-600 rounded-t-sm h-[100%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div class="w-2 md:w-4 bg-primary rounded-t-sm h-[85%] opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<span class="text-[10px] md:text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">20 Mar</span>
</div>
<!-- Bar Group 6 -->
<div class="relative z-10 flex flex-col items-center flex-1 gap-1 h-full justify-end group cursor-pointer">
<div class="flex items-end gap-1 h-[60%] w-full justify-center">
<div class="w-2 md:w-4 bg-slate-200 dark:bg-slate-600 rounded-t-sm h-[50%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div class="w-2 md:w-4 bg-primary rounded-t-sm h-[25%] opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<span class="text-[10px] md:text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">25 Mar</span>
</div>
<!-- Bar Group 7 -->
<div class="relative z-10 flex flex-col items-center flex-1 gap-1 h-full justify-end group cursor-pointer">
<div class="flex items-end gap-1 h-[75%] w-full justify-center">
<div class="w-2 md:w-4 bg-slate-200 dark:bg-slate-600 rounded-t-sm h-[80%] opacity-80 group-hover:opacity-100 transition-opacity"></div>
<div class="w-2 md:w-4 bg-primary rounded-t-sm h-[60%] opacity-90 group-hover:opacity-100 transition-opacity"></div>
</div>
<span class="text-[10px] md:text-xs text-text-secondary-light dark:text-text-secondary-dark font-medium">30 Mar</span>
</div>
</div>
</div>
<!-- Disclaimer & Info -->
<div class="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-lg">
<span class="material-symbols-outlined text-primary text-xl mt-0.5">info</span>
<div>
<p class="text-sm font-semibold text-text-main-light dark:text-white">Datos orientativos</p>
<p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
                                Las cifras mostradas son una aproximación basada en la actividad de tus anuncios. Los datos pueden tardar hasta 24 horas en actualizarse completamente en el sistema.
                            </p>
</div>
</div>
<!-- Quick Actions Footer -->
<div class="flex flex-col sm:flex-row gap-4 mt-4 items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
<span class="text-sm text-text-secondary-light dark:text-text-secondary-dark">¿Necesitas mejorar estos números?</span>
<div class="flex gap-3 w-full sm:w-auto">
<button class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-text-main-light dark:text-text-main-dark text-sm font-semibold">
<span class="material-symbols-outlined text-[18px]">rocket_launch</span>
                                Promocionar Anuncios
                            </button>
<button class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-text-main-light dark:text-text-main-dark text-sm font-semibold">
<span class="material-symbols-outlined text-[18px]">help</span>
                                Centro de Ayuda
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom scrollbar for better look */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }`;

export default function PanelGestionAyudaEmpleoEstadisticas() {
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
