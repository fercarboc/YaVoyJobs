import React from 'react';

const TITLE = `YaVoy - Panel Colaborador`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-16">
<!-- Logo & Brand -->
<div class="flex items-center gap-3">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined text-[20px]">bolt</span>
</div>
<h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
<!-- Navigation Links -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-primary font-semibold text-sm leading-6 border-b-2 border-primary py-5" href="#">Agenda</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium text-sm leading-6 transition-colors" href="#">Perfil</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary font-medium text-sm leading-6 transition-colors" href="#">Ingresos</a>
</nav>
<!-- Actions -->
<div class="flex items-center gap-4">
<button class="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-1.5 right-1.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
</button>
<button class="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 transition-colors">
<div class="size-8 rounded-full bg-slate-200 overflow-hidden" data-alt="User profile picture placeholder">
<span class="material-symbols-outlined w-full h-full flex items-center justify-center text-slate-400">person</span>
</div>
</button>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<!-- Page Header & Alert -->
<div class="mb-8 space-y-4">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 class="text-3xl font-bold text-slate-900 dark:text-white">Mi Agenda</h1>
<p class="text-secondary dark:text-slate-400 mt-1">Gestiona tus servicios confirmados y propuestas pendientes.</p>
</div>
<div class="flex gap-2">
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-[18px]">tune</span>
                        Filtros
                    </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow-sm hover:bg-primary-dark transition-colors shadow-blue-500/20">
<span class="material-symbols-outlined text-[18px]">add</span>
                        Bloquear horario
                    </button>
</div>
</div>
<!-- Disclaimer Alert -->
<div class="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg">
<span class="material-symbols-outlined text-blue-600 dark:text-blue-400 mt-0.5">info</span>
<p class="text-sm text-blue-800 dark:text-blue-200">
<strong>Importante:</strong> La coordinación se realiza directamente entre las partes. Asegúrate de contactar al cliente antes de dirigirte al servicio.
                </p>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Sidebar: Calendar & Filters -->
<aside class="lg:col-span-4 xl:col-span-3 space-y-6">
<!-- Mini Calendar Card -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div class="p-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-between">
<button class="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<span class="font-bold text-slate-900 dark:text-white">Septiembre 2023</span>
<button class="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div class="p-4">
<div class="grid grid-cols-7 text-center mb-2">
<span class="text-xs font-semibold text-slate-400">L</span>
<span class="text-xs font-semibold text-slate-400">M</span>
<span class="text-xs font-semibold text-slate-400">X</span>
<span class="text-xs font-semibold text-slate-400">J</span>
<span class="text-xs font-semibold text-slate-400">V</span>
<span class="text-xs font-semibold text-slate-400">S</span>
<span class="text-xs font-semibold text-slate-400">D</span>
</div>
<div class="grid grid-cols-7 gap-1 text-sm">
<!-- Empty days -->
<span class="h-8"></span><span class="h-8"></span><span class="h-8"></span><span class="h-8"></span>
<!-- Days -->
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">1</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">2</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">3</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">4</button>
<!-- Confirmed Day (Has dot) -->
<button class="h-8 w-8 mx-auto flex flex-col items-center justify-center rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 font-medium">
                                5
                                <span class="size-1 rounded-full bg-primary mt-0.5"></span>
</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">6</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">7</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">8</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">9</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">10</button>
<!-- Selected Day -->
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full bg-primary text-white font-bold shadow-md shadow-blue-500/30">12</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">13</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">14</button>
<button class="h-8 w-8 mx-auto flex flex-col items-center justify-center rounded-full text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 font-medium">
                                15
                                <span class="size-1 rounded-full bg-orange-400 mt-0.5"></span>
</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">16</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">17</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">18</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">19</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">20</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">21</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">22</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">23</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">24</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">25</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">26</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">27</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">28</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">29</button>
<button class="h-8 w-8 mx-auto flex items-center justify-center rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700">30</button>
</div>
</div>
</div>
<!-- Legend / Status Filters -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-5">
<h3 class="font-bold text-slate-900 dark:text-white mb-3 text-sm">Estado de servicios</h3>
<div class="space-y-3">
<label class="flex items-center gap-3 cursor-pointer group">
<input checked="" class="rounded border-slate-300 text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
<div class="flex items-center gap-2 flex-1">
<span class="size-2.5 rounded-full bg-primary"></span>
<span class="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Confirmados</span>
</div>
<span class="text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">2</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input checked="" class="rounded border-slate-300 text-orange-400 focus:ring-orange-400 h-4 w-4" type="checkbox"/>
<div class="flex items-center gap-2 flex-1">
<span class="size-2.5 rounded-full bg-orange-400"></span>
<span class="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Propuestas pendientes</span>
</div>
<span class="text-xs font-semibold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">1</span>
</label>
</div>
</div>
<!-- Helper Widget -->
<div class="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-md p-5 text-white">
<div class="flex items-start justify-between">
<div>
<p class="font-bold text-lg mb-1">¡Consejo!</p>
<p class="text-sm text-indigo-100 leading-relaxed">Mantén tu disponibilidad actualizada para recibir más propuestas relevantes esta semana.</p>
</div>
<span class="material-symbols-outlined text-indigo-200">lightbulb</span>
</div>
</div>
</aside>
<!-- Main Agenda Timeline -->
<section class="lg:col-span-8 xl:col-span-9">
<div class="flex items-center justify-between mb-6">
<h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        Martes, 12 de Septiembre
                        <span class="text-xs font-normal text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded ml-2">Hoy</span>
</h2>
<span class="text-sm text-slate-500 dark:text-slate-400">3 eventos</span>
</div>
<div class="space-y-4 relative before:absolute before:left-4 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:z-0">
<!-- Event Card 1: Confirmed -->
<div class="relative z-10 pl-12 group">
<!-- Timeline Dot -->
<div class="absolute left-[11px] top-6 size-3 rounded-full border-2 border-white dark:border-slate-900 bg-primary shadow-sm"></div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 p-5 relative overflow-hidden">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
<div class="flex flex-col sm:flex-row gap-5">
<!-- Time -->
<div class="flex flex-col min-w-[80px]">
<span class="text-lg font-bold text-slate-900 dark:text-white">09:00</span>
<span class="text-sm text-slate-500">11:30</span>
</div>
<!-- Content -->
<div class="flex-1 space-y-3">
<div class="flex items-start justify-between gap-4">
<div>
<h3 class="text-base font-bold text-slate-900 dark:text-white mb-1">Limpieza a fondo - Residencial</h3>
<div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span>Calle Mayor 12, 3ºA, Madrid</span>
</div>
</div>
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-primary dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                                            Confirmado
                                        </span>
</div>
<!-- Client & Actions -->
<div class="pt-3 border-t border-slate-100 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs">MG</div>
<div class="flex flex-col">
<span class="text-sm font-medium text-slate-900 dark:text-white">María González</span>
<span class="text-xs text-slate-500">Cliente recurrente</span>
</div>
</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Ver detalles</button>
<button class="px-3 py-1.5 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-lg transition-colors flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">chat</span>
                                                Contactar
                                            </button>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Event Card 2: Pending Proposal -->
<div class="relative z-10 pl-12 group">
<!-- Timeline Dot -->
<div class="absolute left-[11px] top-6 size-3 rounded-full border-2 border-white dark:border-slate-900 bg-orange-400 shadow-sm"></div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-orange-200 dark:border-orange-900/50 shadow-sm p-5 relative overflow-hidden bg-orange-50/30 dark:bg-orange-900/10">
<!-- Dashed border effect for pending -->
<div class="absolute left-0 top-0 bottom-0 w-1 bg-orange-400"></div>
<div class="flex flex-col sm:flex-row gap-5">
<!-- Time -->
<div class="flex flex-col min-w-[80px]">
<span class="text-lg font-bold text-slate-900 dark:text-white">13:00</span>
<span class="text-sm text-slate-500">~ 2h</span>
</div>
<!-- Content -->
<div class="flex-1 space-y-3">
<div class="flex items-start justify-between gap-4">
<div>
<h3 class="text-base font-bold text-slate-900 dark:text-white mb-1">Montaje de Muebles IKEA</h3>
<div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span>Av. de América 45, Madrid</span>
</div>
</div>
<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                                            Pendiente
                                        </span>
</div>
<div class="flex items-center gap-4 text-sm">
<span class="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
<span class="material-symbols-outlined text-[16px]">payments</span>
                                            45,00 € est.
                                        </span>
</div>
<!-- Actions for Pending -->
<div class="pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
<span class="material-symbols-outlined text-[18px]">person</span>
</div>
<div class="flex flex-col">
<span class="text-sm font-medium text-slate-900 dark:text-white">Javier R.</span>
<span class="text-xs text-slate-500">Nuevo cliente</span>
</div>
</div>
<div class="flex gap-2">
<button class="px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                                Rechazar
                                            </button>
<button class="px-4 py-1.5 text-sm font-medium text-white bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 rounded-lg transition-colors shadow-sm">
                                                Aceptar propuesta
                                            </button>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Event Card 3: Confirmed -->
<div class="relative z-10 pl-12 group">
<!-- Timeline Dot -->
<div class="absolute left-[11px] top-6 size-3 rounded-full border-2 border-white dark:border-slate-900 bg-primary shadow-sm"></div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 p-5 relative overflow-hidden opacity-60 grayscale hover:grayscale-0 hover:opacity-100">
<!-- Helper text for past event style -->
<div class="absolute right-4 top-4 text-xs font-semibold text-slate-400 uppercase tracking-wide">Finalizado</div>
<div class="absolute left-0 top-0 bottom-0 w-1 bg-slate-300 dark:bg-slate-600"></div>
<div class="flex flex-col sm:flex-row gap-5">
<div class="flex flex-col min-w-[80px]">
<span class="text-lg font-bold text-slate-900 dark:text-white line-through decoration-slate-400">16:30</span>
<span class="text-sm text-slate-500">18:00</span>
</div>
<div class="flex-1 space-y-3">
<div class="flex items-start justify-between gap-4">
<div>
<h3 class="text-base font-bold text-slate-900 dark:text-white mb-1">Reparación Eléctrica</h3>
<div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[16px]">location_on</span>
<span>Paseo de la Castellana 100</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Empty State for Next Day -->
<div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
<h2 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Miércoles, 13 de Septiembre</h2>
<div class="bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center">
<div class="bg-white dark:bg-slate-800 p-3 rounded-full mb-3 shadow-sm">
<span class="material-symbols-outlined text-slate-400 text-3xl">event_busy</span>
</div>
<h3 class="text-base font-semibold text-slate-900 dark:text-white">Sin servicios programados</h3>
<p class="text-sm text-slate-500 dark:text-slate-400 max-w-xs mt-1">No tienes nada en la agenda para este día. ¡Es un buen momento para revisar nuevas propuestas!</p>
</div>
</div>
</section>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function PanelColaboradorAgenda() {
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
