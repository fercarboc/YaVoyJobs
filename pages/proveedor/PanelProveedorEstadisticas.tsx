import React from 'react';

const TITLE = `Panel Proveedor - Estadísticas`;
const BODY_HTML = `<!-- Top Navigation Bar -->
<header class="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
<div class="max-w-[1200px] mx-auto px-4 md:px-8">
<div class="flex items-center justify-between h-16">
<!-- Logo -->
<div class="flex items-center gap-2">
<div class="size-8 rounded bg-primary flex items-center justify-center text-white">
<span class="material-symbols-outlined text-[20px]">local_shipping</span>
</div>
<h2 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
<!-- Navigation Links -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Pedidos</a>
<a class="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Productos</a>
<a class="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Configuración</a>
</nav>
<!-- User Profile -->
<div class="flex items-center gap-4">
<button class="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border border-slate-200 dark:border-slate-600 cursor-pointer" data-alt="Supplier profile picture placeholder showing a generic avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJrWGWJfJ3tzRrm7OLsKFFhTMcOPX_6M5j-i9YxD-gcJeOGEi6o6yoJxIqWFg0bG6KcR5BahSzsuO8hBldD_dG-SPGD9_7ly0HKVXwzrAvsZkeMPZI6t1DQc-tlK6h-Io3urxhPOYiZJnHJBntLfIajWfbYX7K7bzCBPDk6TY9LmDBxwn9D5lVBGOJLlYPIxVz-tL4ASvK3sTuw744Bh549DDVG46szjIjUzoThNH-N_KMRX5J4y5_xQTynm9zcyQZCXvabCSarg");'>
</div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-8 py-8">
<!-- Page Heading -->
<div class="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Estadísticas</h1>
<p class="text-slate-500 dark:text-slate-400 text-base">Resumen de actividad - Últimos 30 días</p>
</div>
<div class="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
<span class="material-symbols-outlined text-slate-400 text-[20px]">calendar_today</span>
<span class="text-sm font-medium text-slate-700 dark:text-slate-300">Oct 15 - Nov 15</span>
</div>
</div>
<!-- KPI Stats Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<!-- Card 1: Visitas -->
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 group hover:border-primary/50 transition-colors">
<div class="flex items-center justify-between">
<div class="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary">
<span class="material-symbols-outlined">visibility</span>
</div>
<span class="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
<span class="material-symbols-outlined text-[16px] mr-1">arrow_upward</span> 12%
                    </span>
</div>
<div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Visitas al perfil</p>
<p class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">1.240</p>
</div>
</div>
<!-- Card 2: Pedidos -->
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 group hover:border-primary/50 transition-colors">
<div class="flex items-center justify-between">
<div class="p-2 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
<span class="material-symbols-outlined">shopping_bag</span>
</div>
<span class="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
<span class="material-symbols-outlined text-[16px] mr-1">arrow_upward</span> 5%
                    </span>
</div>
<div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Pedidos recibidos</p>
<p class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">85</p>
</div>
</div>
<!-- Card 3: Ingresos -->
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 group hover:border-primary/50 transition-colors">
<div class="flex items-center justify-between">
<div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
<span class="material-symbols-outlined">trending_up</span>
</div>
<span class="flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
<span class="material-symbols-outlined text-[16px] mr-1">arrow_upward</span> 8%
                    </span>
</div>
<div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">Ingresos estimados</p>
<p class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">2.450 €</p>
</div>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- Main Chart Section -->
<div class="lg:col-span-2 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Evolución de visitas</h3>
<p class="text-slate-500 dark:text-slate-400 text-sm">Visualización diaria</p>
</div>
<div class="mt-2 sm:mt-0 px-3 py-1 bg-primary/10 rounded-full">
<span class="text-primary text-sm font-medium">Total: 1.240</span>
</div>
</div>
<div class="relative w-full h-[250px] sm:h-[300px] flex flex-col justify-end">
<!-- SVG Chart -->
<svg class="w-full h-full text-primary" fill="none" preserveaspectratio="none" viewbox="0 0 478 150" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="chartGradient" x1="239" x2="239" y1="0" y2="150">
<stop stop-color="currentColor" stop-opacity="0.1"></stop>
<stop offset="1" stop-color="currentColor" stop-opacity="0"></stop>
</lineargradient>
</defs>
<!-- Area Fill -->
<path d="M3 109C21.1538 109 21.1538 21 39.3077 21C57.4615 21 57.4615 41 75.6154 41C93.7692 41 93.7692 93 111.923 93C130.077 93 130.077 33 148.231 33C166.385 33 166.385 101 184.538 101C202.692 101 202.692 61 220.846 61C239 61 239 45 257.154 45C275.308 45 275.308 121 293.462 121C311.615 121 311.615 149 329.769 149C347.923 149 347.923 1 366.077 1C384.231 1 384.231 81 402.385 81C420.538 81 420.538 129 438.692 129C456.846 129 456.846 25 475 25V150H3V109Z" fill="url(#chartGradient)"></path>
<!-- Line Stroke -->
<path d="M3 109C21.1538 109 21.1538 21 39.3077 21C57.4615 21 57.4615 41 75.6154 41C93.7692 41 93.7692 93 111.923 93C130.077 93 130.077 33 148.231 33C166.385 33 166.385 101 184.538 101C202.692 101 202.692 61 220.846 61C239 61 239 45 257.154 45C275.308 45 275.308 121 293.462 121C311.615 121 311.615 149 329.769 149C347.923 149 347.923 1 366.077 1C384.231 1 384.231 81 402.385 81C420.538 81 420.538 129 438.692 129C456.846 129 456.846 25 475 25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
</svg>
<!-- Labels -->
<div class="flex justify-between mt-4 px-2 border-t border-slate-100 dark:border-slate-700 pt-3">
<span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Sem 1</span>
<span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Sem 2</span>
<span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Sem 3</span>
<span class="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Sem 4</span>
</div>
</div>
</div>
<!-- Top Products List -->
<div class="lg:col-span-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
<div class="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Productos más vistos</h3>
<a class="text-sm font-medium text-primary hover:text-blue-600" href="#">Ver todo</a>
</div>
<div class="p-4 flex flex-col gap-1">
<!-- Product Item 1 -->
<div class="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
<div class="flex items-center gap-4">
<div class="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0 relative">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Blue sports running shoe side view" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaijom51RKS_AP18VdYf04qBkxA5CEDteu-vWHugg1d8az7Kin9y72NjR865vP34Qe9orKjAKaFmGzUSn1Ljr2g2Rg_Mc4whVlw3QD0DfBd4iORlAi-dEuXp9lMRbEi3ZYY1ZawnSDuRqxohkmc9SgMMxp7qKbDGXsAQHEWWdkR1PqjoF5FiJIOWUU7kVuPy1hssCMpUgcvcshZ4o0hGYqqsaEdABzVIbviYl3-ElFU04f_OwPNjuoJd57n4X82WllX1LUOeASVg');"></div>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white">Zapato Deportivo</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Ref: KD-992</p>
</div>
</div>
<div class="flex flex-col items-end">
<span class="text-sm font-bold text-slate-900 dark:text-white">450</span>
<span class="text-[10px] uppercase font-bold text-slate-400">Vistas</span>
</div>
</div>
<!-- Product Item 2 -->
<div class="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
<div class="flex items-center gap-4">
<div class="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0 relative">
<div class="absolute inset-0 bg-cover bg-center" data-alt="White basic cotton t-shirt folded" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJZwlCkAr6jblPXzKWnYchXUwkQmhcKK25jfMaDWvADl5_9ZvnYSQJso4Beo1wa9rIkJuh9Lbc9mMQH2lUEsIvguaqmz_agUOHiLQwXolOUJ78aBFgOlFMu01YC0lMOzr0Pne85a8_QhKqxw_qiEL6lJW9lf8O16Io0HCQUQE57xgIOEMvUSOHntOkRV_lVarSvbhJ4D8EqGMPMVojyePqCUcY6vo8QXLBB5NulDmzZGpwDaDNh-l_RURC6iDtKvSIXNZfbxchaA');"></div>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white">Camiseta Básica</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Ref: BA-104</p>
</div>
</div>
<div class="flex flex-col items-end">
<span class="text-sm font-bold text-slate-900 dark:text-white">320</span>
<span class="text-[10px] uppercase font-bold text-slate-400">Vistas</span>
</div>
</div>
<!-- Product Item 3 -->
<div class="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer">
<div class="flex items-center gap-4">
<div class="size-12 rounded-lg bg-slate-100 dark:bg-slate-700 overflow-hidden flex-shrink-0 relative">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Blue denim jeans texture" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZ8qUjr4aLsOmaw3wdC5HSwB9jbVSJih-0O9iserFCB4IeODO1vSOQ3oYHY3ouu-8r32HvlKJ8g2VRedB2zLTCA00jsr1--nwcGCMJ3Mr6PxmA8B3hCj3qYrhImwlUIFV2wdtDYjlkYLR_4h7EXlz2azJY5l6q23LT14x1-2y0vM4HJzVDbhuV20UoHGjiKylhKNFEqXSseH4ZLEtRSEJFoKLpTDRvdGSBwwXmwVVdRdmPa77p-ewkkcM194DD4LRE-kij80NGIA');"></div>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white">Pantalón Vaquero</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Ref: JN-550</p>
</div>
</div>
<div class="flex flex-col items-end">
<span class="text-sm font-bold text-slate-900 dark:text-white">210</span>
<span class="text-[10px] uppercase font-bold text-slate-400">Vistas</span>
</div>
</div>
</div>
<div class="p-4 mt-auto border-t border-slate-100 dark:border-slate-700">
<button class="w-full py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[18px]">add_circle</span>
                        Añadir nuevo producto
                     </button>
</div>
</div>
</div>
<!-- Disclaimer -->
<div class="mt-8 flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-lg text-blue-800 dark:text-blue-200 text-sm">
<span class="material-symbols-outlined text-[20px] mt-0.5">info</span>
<p><span class="font-bold">Nota:</span> Estos datos son orientativos y se actualizan automáticamente cada 24 horas. Los ingresos finales pueden variar dependiendo de las devoluciones y cancelaciones.</p>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function PanelProveedorEstadisticas() {
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
