import React from 'react';

const TITLE = `YaVoy Admin - Supervisión de Chats`;
const BODY_HTML = `<!-- Top Navigation -->
<nav class="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark">
<div class="px-6 md:px-10 py-3 flex items-center justify-between">
<div class="flex items-center gap-4 text-text-main-light dark:text-text-main-dark">
<div class="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
<span class="material-symbols-outlined text-2xl">local_shipping</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy Admin</h2>
</div>
<div class="flex items-center gap-8">
<div class="hidden md:flex items-center gap-6">
<a class="text-text-sec-light dark:text-text-sec-dark hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Usuarios</a>
<a class="text-text-sec-light dark:text-text-sec-dark hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Pedidos</a>
<a class="text-primary text-sm font-bold border-b-2 border-primary py-4" href="#">Chats (Supervisión)</a>
<a class="text-text-sec-light dark:text-text-sec-dark hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Configuración</a>
</div>
<button class="flex items-center justify-center size-10 rounded-full bg-background-light dark:bg-border-dark hover:bg-border-light dark:hover:bg-gray-700 transition-colors text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</nav>
<!-- Main Content -->
<main class="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-8">
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div class="flex flex-col gap-2">
<h1 class="text-text-main-light dark:text-text-main-dark text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Supervisión de Chats</h1>
<p class="text-text-sec-light dark:text-text-sec-dark text-base">Gestión y monitorización de conversaciones entre usuarios y repartidores.</p>
</div>
<div class="flex gap-2">
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg text-text-main-light dark:text-text-main-dark font-medium text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
<span class="material-symbols-outlined text-lg">download</span>
                    Exportar Informe
                </button>
</div>
</div>
<!-- Privacy Alert Banner -->
<div class="mb-8 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 flex items-start gap-3">
<span class="material-symbols-outlined text-yellow-600 dark:text-yellow-400 mt-0.5">lock</span>
<div>
<h3 class="text-sm font-bold text-yellow-800 dark:text-yellow-200">Aviso de Privacidad</h3>
<p class="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                    El contenido del chat solo debe ser revisado por motivos justificados de seguridad o en caso de recepción de una denuncia. Todas las acciones de visualización quedan registradas.
                </p>
</div>
</div>
<!-- Controls Container -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden">
<!-- Tabs & Filters Header -->
<div class="border-b border-border-light dark:border-border-dark">
<!-- Tabs -->
<div class="flex px-6 pt-2">
<button class="relative px-4 py-3 text-primary border-b-2 border-primary font-bold text-sm transition-colors">
                        Chats Activos
                        <span class="absolute top-3 -right-2 flex h-2 w-2">
<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
</button>
<button class="px-4 py-3 text-text-sec-light dark:text-text-sec-dark border-b-2 border-transparent hover:text-text-main-light dark:hover:text-text-main-dark font-medium text-sm transition-colors">
                        Chats Cerrados
                    </button>
</div>
</div>
<!-- Toolbar -->
<div class="p-4 flex flex-col md:flex-row gap-4 items-center justify-between bg-gray-50/50 dark:bg-gray-900/20">
<div class="flex flex-1 w-full gap-4">
<!-- Search -->
<div class="relative flex-1 max-w-md">
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-text-sec-light dark:text-text-sec-dark material-symbols-outlined">search</span>
<input class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Buscar por ID pedido, usuario o repartidor..." type="text"/>
</div>
<!-- Date Filter -->
<div class="relative w-40 hidden sm:block">
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-text-sec-light dark:text-text-sec-dark material-symbols-outlined text-[20px]">calendar_today</span>
<input class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Fecha" type="text"/>
</div>
</div>
<!-- Toggle Filter -->
<div class="flex items-center gap-3 w-full md:w-auto">
<label class="flex items-center gap-2 cursor-pointer select-none px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-border-light dark:hover:border-border-dark">
<input checked="" class="form-checkbox rounded text-primary border-gray-300 focus:ring-primary size-4" type="checkbox"/>
<span class="text-sm font-medium text-text-main-light dark:text-text-main-dark">Solo Denunciados</span>
</label>
<div class="h-6 w-px bg-border-light dark:bg-border-dark mx-1 hidden md:block"></div>
<button class="flex items-center gap-1 text-text-sec-light dark:text-text-sec-dark hover:text-primary text-sm font-medium">
<span class="material-symbols-outlined text-[20px]">filter_list</span>
                        Filtros
                    </button>
</div>
</div>
<!-- Table -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-gray-50 dark:bg-gray-800 border-y border-border-light dark:border-border-dark">
<th class="px-6 py-3 text-xs font-semibold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider w-32">Fecha/Hora</th>
<th class="px-6 py-3 text-xs font-semibold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider w-32">ID Pedido</th>
<th class="px-6 py-3 text-xs font-semibold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider">Participantes</th>
<th class="px-6 py-3 text-xs font-semibold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider w-40">Estado</th>
<th class="px-6 py-3 text-xs font-semibold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-border-light dark:divide-border-dark bg-surface-light dark:bg-surface-dark">
<!-- Row 1: Reported (Critical) -->
<tr class="group hover:bg-red-50/30 dark:hover:bg-red-900/10 transition-colors">
<td class="px-6 py-4 whitespace-nowrap">
<div class="text-sm font-medium text-text-main-light dark:text-text-main-dark">12 Oct</div>
<div class="text-xs text-text-sec-light dark:text-text-sec-dark">10:42 AM</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<a class="text-sm font-bold text-primary hover:underline" href="#">#9921</a>
</td>
<td class="px-6 py-4">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2 text-sm text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined text-[18px] text-text-sec-light">person</span>
<span class="font-medium">Juan Pérez</span>
<span class="text-xs text-text-sec-light px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Cliente</span>
</div>
<div class="flex items-center gap-2 text-sm text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined text-[18px] text-text-sec-light">two_wheeler</span>
<span>Luis R.</span>
<span class="text-xs text-text-sec-light px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Repartidor</span>
</div>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
<span class="material-symbols-outlined text-[16px]">report</span>
                                    DENUNCIADO
                                </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<div class="flex items-center justify-end gap-2">
<button class="flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded shadow-sm hover:bg-primary-hover transition-colors" title="Ver Chat">
<span class="material-symbols-outlined text-[18px]">visibility</span>
                                        Ver Chat
                                    </button>
<div class="h-6 w-px bg-border-light dark:bg-border-dark mx-1"></div>
<button class="p-1.5 text-text-sec-light hover:text-red-600 dark:hover:text-red-400 rounded transition-colors" title="Bloquear Usuarios">
<span class="material-symbols-outlined">block</span>
</button>
<button class="p-1.5 text-text-sec-light hover:text-orange-600 dark:hover:text-orange-400 rounded transition-colors" title="Cerrar por Abuso">
<span class="material-symbols-outlined">gavel</span>
</button>
</div>
</td>
</tr>
<!-- Row 2: Reported (Warning) -->
<tr class="group hover:bg-red-50/30 dark:hover:bg-red-900/10 transition-colors">
<td class="px-6 py-4 whitespace-nowrap">
<div class="text-sm font-medium text-text-main-light dark:text-text-main-dark">12 Oct</div>
<div class="text-xs text-text-sec-light dark:text-text-sec-dark">09:15 AM</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<a class="text-sm font-bold text-primary hover:underline" href="#">#9844</a>
</td>
<td class="px-6 py-4">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2 text-sm text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined text-[18px] text-text-sec-light">person</span>
<span class="font-medium">Maria Garcia</span>
<span class="text-xs text-text-sec-light px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Cliente</span>
</div>
<div class="flex items-center gap-2 text-sm text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined text-[18px] text-text-sec-light">two_wheeler</span>
<span>Ana B.</span>
<span class="text-xs text-text-sec-light px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Repartidor</span>
</div>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300">
<span class="material-symbols-outlined text-[16px]">warning</span>
                                    SUSPECTO
                                </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<div class="flex items-center justify-end gap-2">
<button class="flex items-center gap-1 px-3 py-1.5 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 text-text-main-light dark:text-text-main-dark text-xs font-bold rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" title="Ver Chat">
<span class="material-symbols-outlined text-[18px]">visibility</span>
                                        Ver Chat
                                    </button>
<div class="h-6 w-px bg-border-light dark:bg-border-dark mx-1"></div>
<button class="p-1.5 text-text-sec-light hover:text-red-600 dark:hover:text-red-400 rounded transition-colors" title="Bloquear Usuarios">
<span class="material-symbols-outlined">block</span>
</button>
<button class="p-1.5 text-text-sec-light hover:text-orange-600 dark:hover:text-orange-400 rounded transition-colors" title="Cerrar por Abuso">
<span class="material-symbols-outlined">gavel</span>
</button>
</div>
</td>
</tr>
<!-- Row 3: Active (Normal) -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors opacity-60 hover:opacity-100">
<td class="px-6 py-4 whitespace-nowrap">
<div class="text-sm font-medium text-text-main-light dark:text-text-main-dark">12 Oct</div>
<div class="text-xs text-text-sec-light dark:text-text-sec-dark">10:05 AM</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<a class="text-sm font-bold text-primary hover:underline" href="#">#9918</a>
</td>
<td class="px-6 py-4">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2 text-sm text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined text-[18px] text-text-sec-light">person</span>
<span class="font-medium">Carlos D.</span>
<span class="text-xs text-text-sec-light px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Cliente</span>
</div>
<div class="flex items-center gap-2 text-sm text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined text-[18px] text-text-sec-light">two_wheeler</span>
<span>Pedro S.</span>
<span class="text-xs text-text-sec-light px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Repartidor</span>
</div>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
<span class="material-symbols-outlined text-[16px]">check_circle</span>
                                    ACTIVO
                                </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<div class="flex items-center justify-end gap-2">
<!-- Disabled View Button -->
<button class="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 text-xs font-bold rounded cursor-not-allowed border border-transparent" disabled="" title="Sin incidencias">
<span class="material-symbols-outlined text-[18px]">visibility_off</span>
                                        Privado
                                    </button>
<div class="h-6 w-px bg-border-light dark:bg-border-dark mx-1"></div>
<button class="p-1.5 text-text-sec-light hover:text-red-600 dark:hover:text-red-400 rounded transition-colors" title="Bloquear Usuarios">
<span class="material-symbols-outlined">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 4: Active (Normal) -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors opacity-60 hover:opacity-100">
<td class="px-6 py-4 whitespace-nowrap">
<div class="text-sm font-medium text-text-main-light dark:text-text-main-dark">12 Oct</div>
<div class="text-xs text-text-sec-light dark:text-text-sec-dark">09:55 AM</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<a class="text-sm font-bold text-primary hover:underline" href="#">#9915</a>
</td>
<td class="px-6 py-4">
<div class="flex flex-col gap-1">
<div class="flex items-center gap-2 text-sm text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined text-[18px] text-text-sec-light">person</span>
<span class="font-medium">Lucía M.</span>
<span class="text-xs text-text-sec-light px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Cliente</span>
</div>
<div class="flex items-center gap-2 text-sm text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined text-[18px] text-text-sec-light">two_wheeler</span>
<span>Jorge P.</span>
<span class="text-xs text-text-sec-light px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">Repartidor</span>
</div>
</div>
</td>
<td class="px-6 py-4 whitespace-nowrap">
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
<span class="material-symbols-outlined text-[16px]">check_circle</span>
                                    ACTIVO
                                </span>
</td>
<td class="px-6 py-4 whitespace-nowrap text-right">
<div class="flex items-center justify-end gap-2">
<button class="flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 text-xs font-bold rounded cursor-not-allowed border border-transparent" disabled="" title="Sin incidencias">
<span class="material-symbols-outlined text-[18px]">visibility_off</span>
                                        Privado
                                    </button>
<div class="h-6 w-px bg-border-light dark:bg-border-dark mx-1"></div>
<button class="p-1.5 text-text-sec-light hover:text-red-600 dark:hover:text-red-400 rounded transition-colors" title="Bloquear Usuarios">
<span class="material-symbols-outlined">block</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="px-6 py-4 border-t border-border-light dark:border-border-dark bg-gray-50 dark:bg-surface-dark flex items-center justify-between">
<p class="text-sm text-text-sec-light dark:text-text-sec-dark">
                    Mostrando <span class="font-bold text-text-main-light dark:text-text-main-dark">1</span> a <span class="font-bold text-text-main-light dark:text-text-main-dark">4</span> de <span class="font-bold text-text-main-light dark:text-text-main-dark">54</span> chats
                </p>
<div class="flex gap-2">
<button class="px-3 py-1 rounded border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-text-sec-light dark:text-text-sec-dark text-sm hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50" disabled="">Anterior</button>
<button class="px-3 py-1 rounded border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark text-text-main-light dark:text-text-main-dark text-sm hover:bg-gray-100 dark:hover:bg-gray-800">Siguiente</button>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function AdminChatsSupervision() {
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
