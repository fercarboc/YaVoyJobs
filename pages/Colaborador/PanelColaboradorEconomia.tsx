import React from 'react';

const TITLE = `Panel Colaborador - Economía | YaVoy`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Header / Navigation -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-b-gray-800 bg-white dark:bg-[#1A2633] px-4 md:px-10 py-3 sticky top-0 z-50">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span class="material-symbols-outlined text-xl">local_shipping</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Inicio</a>
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Perfil</a>
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mensajes</a>
<a class="text-primary text-sm font-bold leading-normal relative after:content-[''] after:absolute after:-bottom-5 after:left-0 after:w-full after:h-0.5 after:bg-primary" href="#">Economía</a>
</div>
<div class="flex items-center gap-4">
<button class="relative text-[#0d141b] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full transition-colors">
<span class="material-symbols-outlined text-xl">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-[#1A2633]"></span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-[#1A2633] shadow-sm cursor-pointer" data-alt="Portrait of a user" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxiOcdZbinzaY3J_7LNAiGFZaW_FVySzahQGQNVNEDA3gEdiiM7LKag1MvuKlowFnP6DsDCwLM7gD5Fa7BOV2VyYHll9b4lkfyaCWaf8NNFotbyMyI8qLV3ciMJlyFpajOHzkHvVrwAjBztwgF-XRfSmX0cdvYbEhS6AATtKiHwUbCm7-flnI2cuytlTJfwtn6G9Q8han5vhL4E1Uvob-yQTgHI8hAdC4gfAj7SPRHwSRBihAOkKeWOndo0tyigrBQGz0rNLMS3A");'></div>
</div>
</div>
<!-- Mobile Menu Icon -->
<button class="md:hidden p-2 text-[#0d141b] dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<!-- Main Content Layout -->
<main class="flex-1 flex justify-center py-8 px-4 md:px-6 lg:px-8">
<div class="flex flex-col w-full max-w-[1024px] gap-6">
<!-- Breadcrumbs -->
<div class="flex flex-wrap items-center gap-2 text-sm text-[#4c739a] dark:text-gray-400">
<a class="hover:underline hover:text-primary transition-colors" href="#">Inicio</a>
<span class="material-symbols-outlined text-xs">chevron_right</span>
<a class="hover:underline hover:text-primary transition-colors" href="#">Panel Colaborador</a>
<span class="material-symbols-outlined text-xs">chevron_right</span>
<span class="text-[#0d141b] dark:text-white font-medium">Economía</span>
</div>
<!-- Page Heading & Actions -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div class="flex flex-col gap-2">
<h1 class="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Resumen Financiero</h1>
<p class="text-[#4c739a] dark:text-gray-400 text-base font-normal">Consulta tus ingresos, incentivos e historial de servicios.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1A2633] border border-[#cfdbe7] dark:border-gray-700 rounded-lg text-sm font-medium text-[#0d141b] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
<span class="material-symbols-outlined text-[20px]">calendar_today</span>
                            Este mes
                        </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/30">
<span class="material-symbols-outlined text-[20px]">download</span>
                            Descargar Informe
                        </button>
</div>
</div>
<!-- Alert Banner -->
<div class="flex items-start gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-[#0d141b] dark:text-gray-200">
<span class="material-symbols-outlined text-primary shrink-0">info</span>
<div>
<span class="font-bold text-primary block mb-1">Nota Legal</span>
<p>Los importes reflejan acuerdos entre usuarios. YaVoy no actúa como empleador, sino como plataforma de intermediación.</p>
</div>
</div>
<!-- KPI Stats Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<!-- Total Earnings -->
<div class="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-[#1A2633] border border-[#cfdbe7] dark:border-gray-700 shadow-sm relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-6xl text-primary">account_balance_wallet</span>
</div>
<div class="flex items-center gap-2">
<div class="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
<span class="material-symbols-outlined">payments</span>
</div>
<p class="text-[#4c739a] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Ingresos Totales</p>
</div>
<div>
<p class="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold">12.450 €</p>
<div class="flex items-center gap-1 mt-2 text-sm">
<span class="text-[#078838] bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded font-medium flex items-center">
<span class="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                                    +12%
                                </span>
<span class="text-[#4c739a] dark:text-gray-500 ml-1">vs año anterior</span>
</div>
</div>
</div>
<!-- Monthly Earnings -->
<div class="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-[#1A2633] border border-[#cfdbe7] dark:border-gray-700 shadow-sm relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-6xl text-primary">calendar_month</span>
</div>
<div class="flex items-center gap-2">
<div class="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-primary">
<span class="material-symbols-outlined">date_range</span>
</div>
<p class="text-[#4c739a] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Ingresos del Mes</p>
</div>
<div>
<p class="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold">850 €</p>
<div class="flex items-center gap-1 mt-2 text-sm">
<span class="text-[#078838] bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded font-medium flex items-center">
<span class="material-symbols-outlined text-sm mr-0.5">trending_up</span>
                                    +5%
                                </span>
<span class="text-[#4c739a] dark:text-gray-500 ml-1">vs mes anterior</span>
</div>
</div>
<!-- Mini Chart Visual -->
<div class="h-10 mt-2 w-full flex items-end gap-1">
<div class="w-full bg-primary/10 h-[40%] rounded-sm"></div>
<div class="w-full bg-primary/20 h-[60%] rounded-sm"></div>
<div class="w-full bg-primary/10 h-[50%] rounded-sm"></div>
<div class="w-full bg-primary/30 h-[75%] rounded-sm"></div>
<div class="w-full bg-primary h-[90%] rounded-sm"></div>
</div>
</div>
<!-- Incentives -->
<div class="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-[#1A2633] border border-[#cfdbe7] dark:border-gray-700 shadow-sm relative overflow-hidden group">
<div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-6xl text-yellow-500">stars</span>
</div>
<div class="flex items-center gap-2">
<div class="p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg text-yellow-600 dark:text-yellow-400">
<span class="material-symbols-outlined">grade</span>
</div>
<p class="text-[#4c739a] dark:text-gray-400 text-sm font-medium uppercase tracking-wider">Incentivos</p>
</div>
<div>
<p class="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold">50 €</p>
<div class="flex items-center gap-1 mt-2 text-sm">
<span class="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-medium flex items-center">
<span class="material-symbols-outlined text-sm mr-0.5">remove</span>
                                    0%
                                </span>
<span class="text-[#4c739a] dark:text-gray-500 ml-1">sin cambios</span>
</div>
</div>
<p class="mt-2 text-xs text-[#4c739a] dark:text-gray-400 italic">Próximo objetivo: 5 mudanzas más</p>
</div>
</div>
<!-- Content Grid: Chart & Recent Activity -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- Chart Section -->
<div class="lg:col-span-2 flex flex-col bg-white dark:bg-[#1A2633] rounded-xl border border-[#cfdbe7] dark:border-gray-700 shadow-sm overflow-hidden">
<div class="px-6 py-4 border-b border-[#cfdbe7] dark:border-gray-700 flex justify-between items-center">
<h3 class="text-[#0d141b] dark:text-white text-lg font-bold">Tendencia de Ingresos</h3>
<select class="bg-gray-50 dark:bg-gray-800 border-none text-sm rounded-md px-2 py-1 text-gray-600 dark:text-gray-300 focus:ring-0">
<option>Últimos 6 meses</option>
<option>Este año</option>
</select>
</div>
<div class="p-6 flex-1 flex flex-col justify-between">
<div class="flex items-baseline gap-2 mb-6">
<p class="text-3xl font-bold text-[#0d141b] dark:text-white">850 €</p>
<p class="text-sm text-gray-500">promedio mensual</p>
</div>
<!-- Chart SVG -->
<div class="relative h-48 w-full">
<svg class="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 400 150">
<!-- Grid lines -->
<line stroke="#e5e7eb" stroke-dasharray="4 4" x1="0" x2="400" y1="0" y2="0"></line>
<line stroke="#e5e7eb" stroke-dasharray="4 4" x1="0" x2="400" y1="50" y2="50"></line>
<line stroke="#e5e7eb" stroke-dasharray="4 4" x1="0" x2="400" y1="100" y2="100"></line>
<line stroke="#e5e7eb" stroke-dasharray="4 4" x1="0" x2="400" y1="150" y2="150"></line>
<!-- Area Gradient -->
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#137fec" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#137fec" stop-opacity="0"></stop>
</lineargradient>
</defs>
<!-- Chart Path -->
<path d="M0,120 Q50,130 100,80 T200,60 T300,90 T400,20 V150 H0 Z" fill="url(#chartGradient)"></path>
<path d="M0,120 Q50,130 100,80 T200,60 T300,90 T400,20" fill="none" stroke="#137fec" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
<!-- Points -->
<circle cx="0" cy="120" fill="white" r="4" stroke="#137fec" stroke-width="2"></circle>
<circle cx="100" cy="80" fill="white" r="4" stroke="#137fec" stroke-width="2"></circle>
<circle cx="200" cy="60" fill="white" r="4" stroke="#137fec" stroke-width="2"></circle>
<circle cx="300" cy="90" fill="white" r="4" stroke="#137fec" stroke-width="2"></circle>
<circle cx="400" cy="20" fill="#137fec" r="6" stroke="white" stroke-width="2"></circle>
</svg>
</div>
<div class="flex justify-between mt-4 text-xs text-gray-500 font-medium uppercase tracking-wider">
<span>Jun</span>
<span>Jul</span>
<span>Ago</span>
<span>Sep</span>
<span>Oct</span>
</div>
</div>
</div>
<!-- Side Panel: Quick Help or Goal -->
<div class="flex flex-col gap-4">
<div class="bg-gradient-to-br from-[#0d141b] to-[#1A2633] rounded-xl p-6 text-white shadow-lg flex flex-col justify-between h-full relative overflow-hidden">
<!-- Decor -->
<div class="absolute -right-10 -bottom-10 w-40 h-40 bg-primary rounded-full opacity-20 blur-3xl"></div>
<div>
<h3 class="text-lg font-bold mb-2">Meta Mensual</h3>
<p class="text-gray-300 text-sm mb-6">Estás al 85% de tu objetivo de ingresos para este mes. ¡Un empujón más!</p>
<div class="w-full bg-gray-700/50 rounded-full h-2 mb-2">
<div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
</div>
<div class="flex justify-between text-xs text-gray-400">
<span>Actual: 850€</span>
<span>Meta: 1000€</span>
</div>
</div>
<button class="mt-6 w-full py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
<span class="material-symbols-outlined text-sm">rocket_launch</span>
                                Ver Servicios Disponibles
                            </button>
</div>
</div>
</div>
<!-- Transaction History Table -->
<div class="flex flex-col bg-white dark:bg-[#1A2633] rounded-xl border border-[#cfdbe7] dark:border-gray-700 shadow-sm overflow-hidden">
<div class="px-6 py-5 border-b border-[#cfdbe7] dark:border-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 class="text-[#0d141b] dark:text-white text-lg font-bold">Historial de Servicios</h3>
<div class="flex items-center gap-2">
<div class="relative">
<span class="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg">search</span>
<input class="pl-9 pr-4 py-2 border border-[#cfdbe7] dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm focus:ring-primary focus:border-primary dark:text-white w-full sm:w-auto" placeholder="Buscar cliente..." type="text"/>
</div>
<button class="p-2 border border-[#cfdbe7] dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
<span class="material-symbols-outlined text-lg">filter_list</span>
</button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-gray-50 dark:bg-gray-800/50 text-[#4c739a] dark:text-gray-400 text-xs uppercase tracking-wider font-semibold">
<th class="px-6 py-4">Fecha</th>
<th class="px-6 py-4">Servicio</th>
<th class="px-6 py-4">Cliente</th>
<th class="px-6 py-4">Estado</th>
<th class="px-6 py-4 text-right">Importe</th>
<th class="px-6 py-4 text-center">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-[#cfdbe7] dark:divide-gray-700 text-sm">
<!-- Row 1 -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 whitespace-nowrap text-[#0d141b] dark:text-gray-200">14 Oct, 2023</td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-primary shrink-0">
<span class="material-symbols-outlined text-sm">cleaning_services</span>
</div>
<span class="font-medium text-[#0d141b] dark:text-white">Limpieza General</span>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap text-[#4c739a] dark:text-gray-400">Maria González</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
<span class="size-1.5 rounded-full bg-green-500"></span>
                                            Pagado
                                        </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right font-bold text-[#0d141b] dark:text-white">45,00 €</td>
<td class="px-6 py-4 whitespace-nowrap text-center">
<button class="text-gray-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 whitespace-nowrap text-[#0d141b] dark:text-gray-200">12 Oct, 2023</td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-orange-600 shrink-0">
<span class="material-symbols-outlined text-sm">local_shipping</span>
</div>
<span class="font-medium text-[#0d141b] dark:text-white">Mudanza pequeña</span>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap text-[#4c739a] dark:text-gray-400">Carlos Ruiz</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400">
<span class="size-1.5 rounded-full bg-yellow-500"></span>
                                            Pendiente
                                        </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right font-bold text-[#0d141b] dark:text-white">120,50 €</td>
<td class="px-6 py-4 whitespace-nowrap text-center">
<button class="text-gray-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 whitespace-nowrap text-[#0d141b] dark:text-gray-200">09 Oct, 2023</td>
<td class="px-6 py-4 whitespace-nowrap">
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center text-purple-600 shrink-0">
<span class="material-symbols-outlined text-sm">build</span>
</div>
<span class="font-medium text-[#0d141b] dark:text-white">Montaje Muebles</span>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap text-[#4c739a] dark:text-gray-400">Ana Belén</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
<span class="size-1.5 rounded-full bg-green-500"></span>
                                            Pagado
                                        </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right font-bold text-[#0d141b] dark:text-white">65,00 €</td>
<td class="px-6 py-4 whitespace-nowrap text-center">
<button class="text-gray-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="px-6 py-4 border-t border-[#cfdbe7] dark:border-gray-700 bg-gray-50 dark:bg-gray-800/30 flex justify-center">
<button class="text-sm font-medium text-primary hover:text-primary/80 transition-colors">Ver todo el historial</button>
</div>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function PanelColaboradorEconomia() {
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
