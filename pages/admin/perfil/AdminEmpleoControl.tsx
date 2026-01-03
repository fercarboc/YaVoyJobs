import React from 'react';

const TITLE = `YaVoy Admin - Panel de Empleo`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-10 py-3 sticky top-0 z-50">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">admin_panel_settings</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy Admin</h2>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<div class="hidden md:flex items-center gap-9">
<a class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Inicio</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Usuarios</a>
<a class="text-primary text-sm font-bold leading-normal" href="#">Empleo</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Configuración</a>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" data-alt="User profile avatar showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAN_4zj9_2Ap4Qm9fIJn_vjNIu44ntGAx7KTWm91IByxSImLD7CWKjGG5sXWa1lyxdTo4UV2Gg0xp1XmGOwKZjYD5pnueEKDv9K2fIQ_FOmhzUOzXRJq8u7umP3kST3rxoY_czIDE8nwjnJz5PCtAJwIogfP6AIOk1N5uE06OgChoj8OfNKHVON0D1UdqU_MKZed4qljOJv9nBHIFVyCLWtwoKg7sQUHSv4uFyy7-FEKAKTCet7N4IbIRikjHQSRvVuVDsM6VJhA");'></div>
</div>
</header>
<!-- Main Content Container -->
<main class="flex-1 flex justify-center py-8 px-4 md:px-10">
<div class="flex flex-col w-full max-w-[1200px] gap-6">
<!-- Page Heading -->
<div class="flex flex-col gap-2">
<h1 class="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">
                    Panel de Control: Empleo
                </h1>
<p class="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal">
                    Gestión de ofertas publicadas, moderación de contenido y herramientas administrativas.
                </p>
</div>
<!-- KPI Stats -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div class="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
<div class="flex items-center gap-2 text-primary mb-1">
<span class="material-symbols-outlined">work</span>
<p class="text-sm font-medium leading-normal">Ofertas Publicadas</p>
</div>
<p class="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">1,240</p>
<p class="text-slate-400 text-xs">+12% vs mes anterior</p>
</div>
<div class="flex flex-col gap-2 rounded-xl p-6 border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 shadow-sm relative overflow-hidden">
<div class="absolute right-0 top-0 p-4 opacity-10">
<span class="material-symbols-outlined text-8xl text-red-600">gpp_bad</span>
</div>
<div class="flex items-center gap-2 text-red-600 mb-1 z-10">
<span class="material-symbols-outlined">report_problem</span>
<p class="text-sm font-medium leading-normal">Ofertas Denunciadas</p>
</div>
<p class="text-red-700 dark:text-red-400 tracking-tight text-3xl font-bold leading-tight z-10">15</p>
<p class="text-red-600/70 dark:text-red-400/70 text-xs z-10">Requieren atención inmediata</p>
</div>
<div class="flex flex-col gap-2 rounded-xl p-6 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm">
<div class="flex items-center gap-2 text-orange-500 mb-1">
<span class="material-symbols-outlined">pending_actions</span>
<p class="text-sm font-medium leading-normal">Correcciones Pendientes</p>
</div>
<p class="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight">8</p>
<p class="text-slate-400 text-xs">Solicitudes enviadas a empresas</p>
</div>
</div>
<!-- Controls & Filters -->
<div class="flex flex-col md:flex-row justify-between gap-4 items-center bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
<!-- Search -->
<div class="w-full md:w-1/3 relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm" placeholder="Buscar por ID, título o empresa..." type="text"/>
</div>
<!-- Chips -->
<div class="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
<button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium whitespace-nowrap shadow-sm hover:bg-blue-600 transition-colors">
                        Todas
                    </button>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 text-sm font-medium whitespace-nowrap transition-colors">
                        Reportadas <span class="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 text-xs px-1.5 py-0.5 rounded-full">15</span>
</button>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 text-sm font-medium whitespace-nowrap transition-colors">
                        Activas
                    </button>
<button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 text-sm font-medium whitespace-nowrap transition-colors">
                        Suspendidas
                    </button>
</div>
</div>
<!-- Content Grid: Table & Help -->
<div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
<!-- Main Table (Takes up 3 columns) -->
<div class="lg:col-span-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div class="p-5 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
<h3 class="font-bold text-lg text-slate-900 dark:text-white">Gestión de Ofertas</h3>
<button class="text-sm text-primary font-medium hover:underline">Exportar CSV</button>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
<th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Oferta / ID</th>
<th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Empresa</th>
<th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Publicado</th>
<th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Estado</th>
<th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-700">
<!-- Row 1: Reported -->
<tr class="bg-red-50/50 dark:bg-red-900/10 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-slate-900 dark:text-white">Reponedor Turno Noche</span>
<span class="text-xs text-slate-500">ID: #84920</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Logística Veloz S.L.</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">12 Oct 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
<span class="size-1.5 rounded-full bg-red-600"></span>
                                            Denunciada
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors tooltip" title="Solicitar corrección">
<span class="material-symbols-outlined text-[20px]">edit_note</span>
</button>
<button class="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors tooltip" title="Retirar oferta ilegal">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 2: Active -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-slate-900 dark:text-white">Senior Java Developer</span>
<span class="text-xs text-slate-500">ID: #84918</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">TechCorp Solutions</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">11 Oct 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
<span class="size-1.5 rounded-full bg-emerald-600"></span>
                                            Activa
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
<span class="material-symbols-outlined text-[20px]">edit_note</span>
</button>
<button class="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-600 rounded-lg transition-colors">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 3: Pending Correction -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-slate-900 dark:text-white">Ayudante de Cocina</span>
<span class="text-xs text-slate-500">ID: #84899</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Restaurante El Puerto</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">10 Oct 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
<span class="size-1.5 rounded-full bg-orange-500"></span>
                                            Corrección
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-2 text-slate-300 cursor-not-allowed rounded-lg" disabled="">
<span class="material-symbols-outlined text-[20px]">hourglass_empty</span>
</button>
<button class="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-600 rounded-lg transition-colors">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 4: Active -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="font-medium text-slate-900 dark:text-white">Dependiente Tienda Moda</span>
<span class="text-xs text-slate-500">ID: #84850</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Modas Ana S.L.</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">09 Oct 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
<span class="size-1.5 rounded-full bg-emerald-600"></span>
                                            Activa
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-2 text-primary hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
<span class="material-symbols-outlined text-[20px]">edit_note</span>
</button>
<button class="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-red-600 rounded-lg transition-colors">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div class="p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center">
<span class="text-sm text-slate-500">Mostrando 1-4 de 1,240</span>
<div class="flex gap-1">
<button class="px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 disabled:opacity-50">Ant</button>
<button class="px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600">Sig</button>
</div>
</div>
</div>
<!-- Help Module (Sidebar) -->
<div class="lg:col-span-1 flex flex-col gap-6">
<!-- Help Card -->
<div class="bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-800/50 rounded-xl border border-blue-100 dark:border-slate-700 p-6 shadow-sm">
<div class="flex items-center gap-2 text-primary mb-4">
<span class="material-symbols-outlined">live_help</span>
<h3 class="font-bold text-lg">Módulo de Ayuda</h3>
</div>
<p class="text-sm text-slate-600 dark:text-slate-400 mb-6">
                            ¿Necesitas asistencia con la moderación de ofertas? Aquí tienes recursos útiles.
                        </p>
<div class="flex flex-col gap-3">
<a class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-primary hover:text-primary transition-all group" href="#">
<span class="text-sm font-medium">Guía de moderación</span>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary text-[20px]">arrow_forward</span>
</a>
<a class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-primary hover:text-primary transition-all group" href="#">
<span class="text-sm font-medium">Reportar incidencia</span>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary text-[20px]">bug_report</span>
</a>
<a class="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-primary hover:text-primary transition-all group" href="#">
<span class="text-sm font-medium">Contactar SuperAdmin</span>
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary text-[20px]">mail</span>
</a>
</div>
</div>
<!-- Quick Tip Card -->
<div class="bg-amber-50 dark:bg-amber-900/10 rounded-xl border border-amber-100 dark:border-amber-900/30 p-5">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-amber-600 mt-0.5">lightbulb</span>
<div>
<h4 class="font-bold text-sm text-amber-800 dark:text-amber-200 mb-1">Consejo Pro</h4>
<p class="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                                    Antes de retirar una oferta por lenguaje inapropiado, intenta usar "Solicitar corrección" para educar a la empresa.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`;

export default function AdminEmpleoControl() {
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
