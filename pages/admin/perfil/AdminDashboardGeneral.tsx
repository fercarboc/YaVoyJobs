import React from 'react';

const TITLE = `YaVoy Admin - Dashboard General`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 shadow-sm">
<div class="mx-auto max-w-7xl flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-3xl">rocket_launch</span>
<h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy Admin</h2>
</div>
<!-- Desktop Nav Links -->
<nav class="hidden md:flex items-center gap-1 ml-8">
<a class="px-3 py-2 text-sm font-medium text-primary bg-primary/10 rounded-lg" href="#">Dashboard</a>
<a class="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">Usuarios</a>
<a class="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">Anuncios</a>
<a class="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">Moderación</a>
<a class="px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">Pagos</a>
</nav>
</div>
<div class="flex items-center gap-4">
<button class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900"></span>
</button>
<div class="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
<div class="flex items-center gap-3 cursor-pointer group">
<div class="text-right hidden sm:block">
<p class="text-sm font-bold text-slate-900 dark:text-white leading-none">Admin Profile</p>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Super Admin</p>
</div>
<div class="h-10 w-10 rounded-full bg-slate-200 bg-center bg-cover border-2 border-white dark:border-slate-800 shadow-sm" data-alt="Profile picture of the admin user" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUL3zapzRhKMXSB1T5zFlQS2t0jdK_XhGoS1Y1X_Khy2kix5Ev6Yh5qAS_06AykZtdqzvTJ-58WDFKsG3u8KO5imcrL7EGdOnMxqgi0Q74vZUsPgZ21T89YGuI8mNsCDMdIlxPgFXT32PfAPrElYGb3a-u2OtpPG9bdgr_CFh4Dt7E3YPMvPqIU_1cxGhoK1aCin8-s56d061GzHu8DHb4nIQdo-xutg3hjo9UX4XjBw15OoKRp-zqmYFZwTal4UsZ0CVdrJGs0Q');"></div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
<!-- Page Heading -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Dashboard General</h1>
<p class="text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1 text-sm font-medium">
<span class="material-symbols-outlined text-base">calendar_today</span>
                    Viernes, 24 de Noviembre, 2023
                </p>
</div>
<button class="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:text-primary border border-slate-200 dark:border-slate-700 hover:border-primary/50 px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-all hover:shadow-md active:scale-95">
<span class="material-symbols-outlined text-lg">refresh</span>
                Actualizar Datos
            </button>
</div>
<!-- KPI Grid 1: Main Metrics -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<!-- Total Users -->
<div class="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
<div class="flex justify-between items-start mb-4">
<div class="bg-blue-50 dark:bg-blue-900/20 p-2.5 rounded-lg text-primary">
<span class="material-symbols-outlined">group</span>
</div>
<span class="inline-flex items-center gap-1 rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
<span class="material-symbols-outlined text-sm">trending_up</span>
                        +5.2%
                    </span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Usuarios Totales</p>
<h3 class="text-2xl font-black text-slate-900 dark:text-white mt-1">12.450</h3>
<div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
<span>60% Candidatos</span>
<span>40% Empresas</span>
</div>
</div>
<!-- Active Ads -->
<div class="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
<div class="flex justify-between items-start mb-4">
<div class="bg-purple-50 dark:bg-purple-900/20 p-2.5 rounded-lg text-purple-600 dark:text-purple-400">
<span class="material-symbols-outlined">campaign</span>
</div>
<span class="inline-flex items-center gap-1 rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
<span class="material-symbols-outlined text-sm">trending_up</span>
                        +1.8%
                    </span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Anuncios Activos</p>
<h3 class="text-2xl font-black text-slate-900 dark:text-white mt-1">850</h3>
<div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
<span>Empleo: 420</span>
<span>Servicios: 430</span>
</div>
</div>
<!-- Open Chats -->
<div class="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
<div class="flex justify-between items-start mb-4">
<div class="bg-orange-50 dark:bg-orange-900/20 p-2.5 rounded-lg text-orange-600 dark:text-orange-400">
<span class="material-symbols-outlined">forum</span>
</div>
<span class="inline-flex items-center gap-1 rounded-full bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
<span class="material-symbols-outlined text-sm">trending_up</span>
                        +12%
                    </span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Chats Abiertos</p>
<h3 class="text-2xl font-black text-slate-900 dark:text-white mt-1">3.210</h3>
<div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined text-sm mr-1">schedule</span>
<span>Avg. respuesta: 15 min</span>
</div>
</div>
<!-- Active Applications -->
<div class="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow group">
<div class="flex justify-between items-start mb-4">
<div class="bg-cyan-50 dark:bg-cyan-900/20 p-2.5 rounded-lg text-cyan-600 dark:text-cyan-400">
<span class="material-symbols-outlined">work</span>
</div>
<span class="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-semibold text-slate-600 dark:text-slate-400">
<span class="material-symbols-outlined text-sm">remove</span>
                        0%
                    </span>
</div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Candidaturas Activas</p>
<h3 class="text-2xl font-black text-slate-900 dark:text-white mt-1">145</h3>
<div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs text-slate-500 dark:text-slate-400">
<span class="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
<span>12 nuevas hoy</span>
</div>
</div>
</div>
<!-- Action Required Section -->
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Atención Requerida</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
<!-- Pending Reports -->
<div class="bg-red-50 dark:bg-red-900/10 rounded-xl p-5 border border-red-100 dark:border-red-900/30 flex items-center justify-between shadow-sm cursor-pointer hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors">
<div class="flex items-center gap-4">
<div class="bg-white dark:bg-slate-900 p-3 rounded-full text-red-600 shadow-sm">
<span class="material-symbols-outlined">gavel</span>
</div>
<div>
<p class="text-red-800 dark:text-red-200 font-bold text-lg">5 Denuncias Pendientes</p>
<p class="text-red-600 dark:text-red-300 text-sm">Alta prioridad, revisar lo antes posible.</p>
</div>
</div>
<span class="material-symbols-outlined text-red-400">arrow_forward_ios</span>
</div>
<!-- Pending Verifications -->
<div class="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-5 border border-amber-100 dark:border-amber-900/30 flex items-center justify-between shadow-sm cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/20 transition-colors">
<div class="flex items-center gap-4">
<div class="bg-white dark:bg-slate-900 p-3 rounded-full text-amber-600 shadow-sm">
<span class="material-symbols-outlined">verified_user</span>
</div>
<div>
<p class="text-amber-800 dark:text-amber-200 font-bold text-lg">12 Verificaciones Pendientes</p>
<p class="text-amber-600 dark:text-amber-300 text-sm">Usuarios esperando validación de identidad.</p>
</div>
</div>
<span class="material-symbols-outlined text-amber-400">arrow_forward_ios</span>
</div>
</div>
<!-- Charts Section -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
<!-- Weekly Growth Chart -->
<div class="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<div class="flex items-center justify-between mb-6">
<div>
<h3 class="text-base font-bold text-slate-900 dark:text-white">Crecimiento Semanal</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Nuevos registros vs Anuncios</p>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-xs">
<span class="w-3 h-3 rounded-full bg-primary"></span>
<span class="text-slate-600 dark:text-slate-300">Registros</span>
</div>
<div class="flex items-center gap-2 text-xs">
<span class="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></span>
<span class="text-slate-600 dark:text-slate-300">Anuncios</span>
</div>
<select class="bg-slate-50 dark:bg-slate-800 border-none text-xs font-semibold text-slate-600 dark:text-slate-300 rounded-lg py-1 px-3 focus:ring-0 cursor-pointer">
<option>Últimos 7 días</option>
<option>Último mes</option>
</select>
</div>
</div>
<div class="relative h-64 w-full">
<!-- Grid Lines -->
<div class="absolute inset-0 flex flex-col justify-between text-xs text-slate-400">
<div class="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
<div class="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
<div class="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
<div class="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
<div class="border-b border-slate-100 dark:border-slate-800 w-full h-0"></div>
</div>
<!-- SVG Chart -->
<svg class="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">
<!-- Path 2 (Ads - Secondary) -->
<path d="M0 45 Q 10 40, 16 38 T 32 35 T 48 30 T 64 32 T 80 25 T 100 28" fill="none" stroke="#cbd5e1" stroke-linecap="round" stroke-width="1.5" vector-effect="non-scaling-stroke"></path>
<!-- Path 1 (Registrations - Primary) -->
<defs>
<lineargradient id="gradientPrimary" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#137fec" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#137fec" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 35 Q 10 30, 16 25 T 32 15 T 48 20 T 64 10 T 80 15 T 100 5 L 100 50 L 0 50 Z" fill="url(#gradientPrimary)" stroke="none"></path>
<path class="chart-path" d="M0 35 Q 10 30, 16 25 T 32 15 T 48 20 T 64 10 T 80 15 T 100 5" fill="none" stroke="#137fec" stroke-linecap="round" stroke-width="2" vector-effect="non-scaling-stroke"></path>
<!-- Dots -->
<circle cx="16" cy="25" fill="#137fec" r="1.5" stroke="white" stroke-width="0.5"></circle>
<circle cx="32" cy="15" fill="#137fec" r="1.5" stroke="white" stroke-width="0.5"></circle>
<circle cx="48" cy="20" fill="#137fec" r="1.5" stroke="white" stroke-width="0.5"></circle>
<circle cx="64" cy="10" fill="#137fec" r="1.5" stroke="white" stroke-width="0.5"></circle>
<circle cx="80" cy="15" fill="#137fec" r="1.5" stroke="white" stroke-width="0.5"></circle>
<!-- Tooltip Mockup -->
<g transform="translate(64, 5)">
<rect fill="#101922" height="8" rx="2" width="16" x="-8" y="-5"></rect>
<text fill="white" font-family="sans-serif" font-size="3" font-weight="bold" text-anchor="middle" x="0" y="0">+45</text>
</g>
</svg>
</div>
<div class="flex justify-between mt-2 text-xs font-medium text-slate-400 px-1">
<span>Lun</span>
<span>Mar</span>
<span>Mié</span>
<span>Jue</span>
<span>Vie</span>
<span>Sáb</span>
<span>Dom</span>
</div>
</div>
<!-- Activity by Module -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col">
<div class="mb-6">
<h3 class="text-base font-bold text-slate-900 dark:text-white">Actividad por Módulo</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Interacciones del último mes</p>
</div>
<div class="flex-1 flex flex-col justify-center gap-6">
<!-- Item 1 -->
<div>
<div class="flex justify-between text-sm font-medium mb-2">
<span class="text-slate-700 dark:text-slate-200">Empleo</span>
<span class="text-slate-900 dark:text-white font-bold">45%</span>
</div>
<div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
<div class="bg-primary h-2.5 rounded-full" style="width: 45%"></div>
</div>
</div>
<!-- Item 2 -->
<div>
<div class="flex justify-between text-sm font-medium mb-2">
<span class="text-slate-700 dark:text-slate-200">Servicios</span>
<span class="text-slate-900 dark:text-white font-bold">30%</span>
</div>
<div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
<div class="bg-purple-500 h-2.5 rounded-full" style="width: 30%"></div>
</div>
</div>
<!-- Item 3 -->
<div>
<div class="flex justify-between text-sm font-medium mb-2">
<span class="text-slate-700 dark:text-slate-200">Transporte</span>
<span class="text-slate-900 dark:text-white font-bold">15%</span>
</div>
<div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
<div class="bg-orange-400 h-2.5 rounded-full" style="width: 15%"></div>
</div>
</div>
<!-- Item 4 -->
<div>
<div class="flex justify-between text-sm font-medium mb-2">
<span class="text-slate-700 dark:text-slate-200">Hogar</span>
<span class="text-slate-900 dark:text-white font-bold">10%</span>
</div>
<div class="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
<div class="bg-teal-400 h-2.5 rounded-full" style="width: 10%"></div>
</div>
</div>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        /* Custom scrollbar for better admin experience */
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
        }
        .chart-path {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: dash 2s ease-out forwards;
        }
        @keyframes dash {
            to {
                stroke-dashoffset: 0;
            }
        }`;

export default function AdminDashboardGeneral() {
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
