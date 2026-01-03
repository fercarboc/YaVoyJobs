import React from 'react';

const TITLE = `YaVoy Admin - Inmobiliaria Control`;
const BODY_HTML = `<div class="relative flex min-h-screen flex-col">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2634] px-6 py-3 shadow-sm">
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-3xl">real_estate_agent</span>
<h2 class="text-xl font-black tracking-tight text-slate-900 dark:text-white">YaVoy <span class="text-primary font-medium">Admin</span></h2>
</div>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Usuarios</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Finanzas</a>
<a class="text-sm font-bold text-primary" href="#">Inmobiliaria</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Configuración</a>
</nav>
<div class="flex items-center gap-4">
<button class="relative p-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-[#1a2634]"></span>
</button>
<div class="h-9 w-9 overflow-hidden rounded-full bg-slate-200 ring-2 ring-offset-2 ring-slate-100 dark:ring-slate-800">
<div class="h-full w-full bg-cover bg-center" data-alt="Admin user profile picture with a professional gradient background" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlCZ6g96_EMhCvnrAm4NlS73I-Z6yPAZDboBPh7ZFI5eCFOHU83FOG8mNnExF5GkztoD1kVmwtKe0ldEzazYaIsDim7i0fhqnT5KLrmjK06ea7wDCRuTBZsLzqVaNsHE8ZfY-t3qK8d4Hp1E7aAkdG168qxtuTvVyQKeGB9twcIjsq5mG-f0-tSt852ds8vNQYRa4x-spLZ6u2qKFYRh_NDFB12fXwKU8LBnQn-kP_1gTmxpryCy0VpPWDveyWkC7Pc0wgcFL88w");'></div>
</div>
</div>
</header>
<main class="flex-1 px-4 py-8 md:px-8 lg:px-12 xl:px-40">
<div class="mx-auto max-w-[1200px] space-y-8">
<!-- Breadcrumbs -->
<nav class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary transition-colors" href="#">Admin</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Inmobiliaria</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="font-medium text-slate-900 dark:text-white">Control</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div>
<h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">Control Inmobiliaria</h1>
<p class="mt-2 text-base text-slate-600 dark:text-slate-400">Gestión de métricas de rendimiento y moderación de contenido de alto riesgo.</p>
</div>
<div class="flex items-center gap-2 rounded-lg bg-white dark:bg-[#1a2634] p-1 shadow-sm border border-slate-200 dark:border-slate-700">
<button class="rounded-md bg-slate-100 dark:bg-slate-700 px-3 py-1.5 text-sm font-medium text-slate-900 dark:text-white shadow-sm">Hoy</button>
<button class="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">Semana</button>
<button class="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">Mes</button>
</div>
</div>
<!-- Stats Grid -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
<!-- Stat Card 1 -->
<div class="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1a2634] p-6 shadow-sm">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Total Anuncios</p>
<span class="material-symbols-outlined text-slate-400">home_work</span>
</div>
<div class="mt-4 flex items-end gap-3">
<p class="text-3xl font-bold text-slate-900 dark:text-white">12,450</p>
<span class="mb-1 inline-flex items-center text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-0.5 rounded-full">
<span class="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
                                +1.2%
                            </span>
</div>
</div>
<!-- Stat Card 2 -->
<div class="flex flex-col rounded-xl border border-orange-200 dark:border-orange-900/30 bg-orange-50/30 dark:bg-orange-900/10 p-6 shadow-sm">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-orange-800 dark:text-orange-400">Posible Fraude</p>
<span class="material-symbols-outlined text-orange-500">warning</span>
</div>
<div class="mt-4 flex items-end gap-3">
<p class="text-3xl font-bold text-slate-900 dark:text-white">34</p>
<span class="mb-1 inline-flex items-center text-xs font-medium text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 px-2 py-0.5 rounded-full">
<span class="material-symbols-outlined text-[14px] mr-0.5">trending_up</span>
                                +5.0%
                            </span>
</div>
<p class="mt-2 text-xs text-orange-700 dark:text-orange-400/80">Requiere revisión manual urgente</p>
</div>
<!-- Stat Card 3 -->
<div class="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1a2634] p-6 shadow-sm">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Reportados</p>
<span class="material-symbols-outlined text-slate-400">report</span>
</div>
<div class="mt-4 flex items-end gap-3">
<p class="text-3xl font-bold text-slate-900 dark:text-white">12</p>
<span class="mb-1 inline-flex items-center text-xs font-medium text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400 px-2 py-0.5 rounded-full">
<span class="material-symbols-outlined text-[14px] mr-0.5">trending_down</span>
                                -2.0%
                            </span>
</div>
</div>
</div>
<!-- Charts Section -->
<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
<!-- Chart 1: Distribution -->
<div class="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1a2634] p-6 shadow-sm">
<div class="mb-6">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Anuncios por Tipo</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Distribución de categorías este mes</p>
</div>
<div class="flex-1 flex flex-col justify-center gap-6">
<div class="space-y-4">
<!-- Bar 1 -->
<div class="group">
<div class="flex items-center justify-between text-sm mb-1">
<span class="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
<span class="size-2 rounded-full bg-primary"></span>
                                            Alquiler
                                        </span>
<span class="font-bold text-slate-900 dark:text-white">65%</span>
</div>
<div class="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
<div class="h-full rounded-full bg-primary transition-all duration-500" style="width: 65%"></div>
</div>
</div>
<!-- Bar 2 -->
<div class="group">
<div class="flex items-center justify-between text-sm mb-1">
<span class="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
<span class="size-2 rounded-full bg-emerald-500"></span>
                                            Venta
                                        </span>
<span class="font-bold text-slate-900 dark:text-white">25%</span>
</div>
<div class="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
<div class="h-full rounded-full bg-emerald-500 transition-all duration-500" style="width: 25%"></div>
</div>
</div>
<!-- Bar 3 -->
<div class="group">
<div class="flex items-center justify-between text-sm mb-1">
<span class="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
<span class="size-2 rounded-full bg-amber-500"></span>
                                            Vacacional
                                        </span>
<span class="font-bold text-slate-900 dark:text-white">10%</span>
</div>
<div class="h-3 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
<div class="h-full rounded-full bg-amber-500 transition-all duration-500" style="width: 10%"></div>
</div>
</div>
</div>
</div>
</div>
<!-- Chart 2: Comparative -->
<div class="flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1a2634] p-6 shadow-sm">
<div class="mb-6 flex justify-between items-start">
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Particulares vs Agencias</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Volumen de nuevos anuncios</p>
</div>
<button class="text-primary hover:text-primary/80">
<span class="material-symbols-outlined">more_horiz</span>
</button>
</div>
<div class="flex h-[180px] items-end justify-center gap-12 sm:gap-16 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800">
<!-- Column 1 -->
<div class="flex flex-col items-center gap-2 group cursor-pointer w-20">
<div class="relative w-full rounded-t-lg bg-primary/20 dark:bg-primary/20 group-hover:bg-primary/30 transition-colors" style="height: 120px;">
<div class="absolute bottom-0 w-full rounded-t-lg bg-primary group-hover:bg-primary/90 transition-colors" style="height: 70%;"></div>
</div>
<span class="text-xs font-semibold text-slate-600 dark:text-slate-400">Particulares</span>
</div>
<!-- Column 2 -->
<div class="flex flex-col items-center gap-2 group cursor-pointer w-20">
<div class="relative w-full rounded-t-lg bg-indigo-50 dark:bg-indigo-900/20 group-hover:bg-indigo-100 transition-colors" style="height: 160px;">
<div class="absolute bottom-0 w-full rounded-t-lg bg-indigo-500 group-hover:bg-indigo-600 transition-colors" style="height: 85%;"></div>
</div>
<span class="text-xs font-semibold text-slate-600 dark:text-slate-400">Agencias</span>
</div>
</div>
<div class="flex justify-center gap-8 mt-4">
<div class="flex items-center gap-2 text-xs text-slate-500">
<span class="size-2 rounded-full bg-primary"></span>
                                Total
                            </div>
<div class="flex items-center gap-2 text-xs text-slate-500">
<span class="size-2 rounded-full bg-primary/30"></span>
                                Objetivo
                            </div>
</div>
</div>
</div>
<!-- Risk Management Table -->
<div class="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1a2634] shadow-sm overflow-hidden">
<div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-orange-500">gpp_maybe</span>
                                Anuncios duplicados o sospechosos
                            </h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Acciones requeridas para mantener la calidad de la plataforma.</p>
</div>
<div class="flex items-center gap-2">
<span class="flex h-6 items-center justify-center rounded bg-orange-100 dark:bg-orange-900/30 px-2 text-xs font-bold text-orange-700 dark:text-orange-400">34 Pendientes</span>
<button class="flex items-center gap-1 rounded-md border border-slate-300 dark:border-slate-600 px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
<span class="material-symbols-outlined text-[18px]">filter_list</span>
                                Filtrar
                            </button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left text-sm text-slate-600 dark:text-slate-400">
<thead class="bg-slate-50 dark:bg-slate-800/50 text-xs uppercase text-slate-500 dark:text-slate-400">
<tr>
<th class="px-6 py-3 font-semibold">Anuncio</th>
<th class="px-6 py-3 font-semibold">Usuario</th>
<th class="px-6 py-3 font-semibold">Riesgo Detectado</th>
<th class="px-6 py-3 font-semibold text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-700">
<!-- Row 1 -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 flex-shrink-0 rounded bg-slate-200 bg-cover bg-center" data-alt="Thumbnail of a modern apartment listing" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVqboQNC6CRL0NEjX4Rs2_b4Vno69aVh3Zgpk65zUSwBUlFR3PlSXJxYH4aZjwDirrbtV1Fr8NvgeP7SuAWcbFbHoJYjpqESZ9ET4jd2vhEDvAlJjfVwxueRvOHXKdBl4PL113T8dhet92TM76E8E0lWtWd3H7ZLifote51Phwb6pxYHr4oNb_2P3Zda-dBhd3BZt6doV6h5QWTjVBm9h3f94u5wUQIqUIO-yXHLnkcvX8ByFMQoIDLGxIHzND8fNkJHWwKB-OMA");'></div>
<div>
<div class="font-medium text-slate-900 dark:text-white">Ático en Gran Vía, 28013</div>
<div class="text-xs text-slate-500">ID: #992831 • Hace 2h</div>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-[18px]">person</span>
<span>Juan Perez (Nuevo)</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/20 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-600/10">
                                            Precio sospechoso (-40%)
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex justify-end gap-2">
<button class="inline-flex items-center gap-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-transparent px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" title="Solicitar aclaración">
<span class="material-symbols-outlined text-[16px]">help</span>
<span class="hidden xl:inline">Aclarar</span>
</button>
<button class="inline-flex items-center gap-1 rounded bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors" title="Pausar anuncio">
<span class="material-symbols-outlined text-[16px]">pause_circle</span>
<span class="hidden xl:inline">Pausar</span>
</button>
<button class="inline-flex items-center gap-1 rounded bg-red-50 dark:bg-red-900/30 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors" title="Bloquear anunciante">
<span class="material-symbols-outlined text-[16px]">block</span>
<span class="hidden xl:inline">Bloquear</span>
</button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 flex-shrink-0 rounded bg-slate-200 bg-cover bg-center" data-alt="Thumbnail of a cozy house with garden" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIswHwlUwBDG1iPSPJhyklFjg-btUkT3y_Kez5bJwrRmLUNI1J3fFoJWylXMvGvSp9-ouhWgF5mhsBywuAfFdyNzn3fiYwT9WLzDakX63N1F8xGN1yhWRgrSlOrzo-3hBefJQfgQNBdaac0OjEt25fbzVjFywQ15a3GzE6KPCVYCrO1Bo9rodrBnfKd7sN8wKvylZF0oPv08QeWJ2TVVDk0wEeZY1FJYQZ6v-yutZv0kEm3EdX_LmYLPs7JL5Tt266AV6rLBk9Ow");'></div>
<div>
<div class="font-medium text-slate-900 dark:text-white">Chalet independiente</div>
<div class="text-xs text-slate-500">ID: #992110 • Hace 5h</div>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-[18px]">business</span>
<span>InmoFast SL</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center rounded-full bg-orange-50 dark:bg-orange-900/20 px-2 py-1 text-xs font-medium text-orange-700 dark:text-orange-400 ring-1 ring-inset ring-orange-600/10">
                                            Imágenes duplicadas
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex justify-end gap-2">
<button class="inline-flex items-center gap-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-transparent px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" title="Solicitar aclaración">
<span class="material-symbols-outlined text-[16px]">help</span>
<span class="hidden xl:inline">Aclarar</span>
</button>
<button class="inline-flex items-center gap-1 rounded bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors" title="Pausar anuncio">
<span class="material-symbols-outlined text-[16px]">pause_circle</span>
<span class="hidden xl:inline">Pausar</span>
</button>
<button class="inline-flex items-center gap-1 rounded bg-red-50 dark:bg-red-900/30 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors" title="Bloquear anunciante">
<span class="material-symbols-outlined text-[16px]">block</span>
<span class="hidden xl:inline">Bloquear</span>
</button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="h-10 w-10 flex-shrink-0 rounded bg-slate-200 bg-cover bg-center" data-alt="Thumbnail of a luxury studio listing" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCP8QRC6EV2rOHcnjZzFeZkH-hjiWl593YFgGozJRZwCZr-J3CIb5HlVBKOsbW_HV4xj8aLS2ynWM9NxXE1RNB1SsQ3kiWo5O0EMqbPFFTMFSiW2RYbGP7aPtApIRWCs4OTdSsPXA31tdA3v5S7yhMfyxa_5Grdfic_O_CRwPs2m5Op3YqDrMbe4_PkTkQrZs6pazNueEVMQrU2dKDBF2ExFG90EG36yE3XnxuiavhyU8jEp7OVOdx4fOLK3Q26v3y7eHwhQEfbyg");'></div>
<div>
<div class="font-medium text-slate-900 dark:text-white">Estudio centro Madrid</div>
<div class="text-xs text-slate-500">ID: #991002 • Ayer</div>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-[18px]">person</span>
<span>Maria Lopez</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center rounded-full bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 text-xs font-medium text-yellow-700 dark:text-yellow-400 ring-1 ring-inset ring-yellow-600/10">
                                            Reportado x3 usuarios
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex justify-end gap-2">
<button class="inline-flex items-center gap-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-transparent px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" title="Solicitar aclaración">
<span class="material-symbols-outlined text-[16px]">help</span>
<span class="hidden xl:inline">Aclarar</span>
</button>
<button class="inline-flex items-center gap-1 rounded bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors" title="Pausar anuncio">
<span class="material-symbols-outlined text-[16px]">pause_circle</span>
<span class="hidden xl:inline">Pausar</span>
</button>
<button class="inline-flex items-center gap-1 rounded bg-red-50 dark:bg-red-900/30 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors" title="Bloquear anunciante">
<span class="material-symbols-outlined text-[16px]">block</span>
<span class="hidden xl:inline">Bloquear</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div class="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 px-6 py-3">
<div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
<span>Mostrando 3 de 34 alertas</span>
<div class="flex gap-2">
<button class="hover:text-primary disabled:opacity-50" disabled="">Anterior</button>
<button class="hover:text-primary">Siguiente</button>
</div>
</div>
</div>
</div>
<!-- Disclaimer Footer -->
<div class="mt-8 flex justify-center pb-8">
<div class="flex max-w-2xl items-center gap-3 rounded-lg border border-amber-200 bg-amber-50 dark:border-amber-900/30 dark:bg-amber-900/10 px-4 py-3 text-center">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-500">info</span>
<p class="text-sm text-amber-800 dark:text-amber-200/80 font-medium">
                            YaVoy no verifica la disponibilidad ni la legalidad del inmueble. 
                            <span class="font-normal opacity-80">La responsabilidad final recae sobre el anunciante según los T&amp;C.</span>
</p>
</div>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function AdminInmobiliariaControl() {
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
