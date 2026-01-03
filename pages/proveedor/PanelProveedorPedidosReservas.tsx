import React from 'react';

const TITLE = `Panel Proveedor - YaVoy`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Navigation -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-b-gray-800 px-10 py-3 bg-white dark:bg-[#1a2632]">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 text-primary">
<span class="material-symbols-outlined text-[32px]">local_shipping</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="hidden md:flex items-center gap-9">
<a class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Productos</a>
<a class="text-primary text-sm font-bold leading-normal" href="#">Pedidos</a>
<a class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Configuración</a>
</div>
<div class="flex gap-2">
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
<span class="truncate">Mi Perfil</span>
</button>
<button class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e7edf3] dark:bg-gray-700 text-[#0d141b] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
</div>
</div>
</header>
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
<!-- Page Heading & Controls -->
<div class="flex flex-col gap-6 p-4">
<div class="flex flex-wrap justify-between items-end gap-4">
<div class="flex flex-col gap-2">
<h1 class="text-[#0d141b] dark:text-white tracking-tight text-[32px] font-bold leading-tight">Pedidos y Reservas</h1>
<p class="text-[#4c739a] dark:text-gray-400 text-sm font-normal leading-normal">Gestiona tus solicitudes recibidas en tiempo real.</p>
</div>
<div class="flex gap-2 items-center">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-gray-400 text-[20px]">search</span>
<input class="pl-10 pr-4 h-10 rounded-lg border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-white focus:ring-primary focus:border-primary w-64" placeholder="Buscar por ID o cliente..." type="text"/>
</div>
<button class="flex items-center justify-center h-10 px-4 rounded-lg border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-gray-800 text-[#0d141b] dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700">
<span class="material-symbols-outlined text-[20px] mr-2">calendar_today</span>
                                Filtros
                            </button>
</div>
</div>
<!-- Filter Chips -->
<div class="flex gap-2 flex-wrap border-b border-[#e7edf3] dark:border-gray-700 pb-4">
<button class="flex h-8 items-center justify-center rounded-lg bg-[#0d141b] dark:bg-white px-4 hover:opacity-90 transition-opacity">
<p class="text-white dark:text-[#0d141b] text-sm font-medium leading-normal">Todos</p>
</button>
<button class="flex h-8 items-center justify-center rounded-lg bg-[#e7edf3] dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal">Pendientes <span class="ml-1 text-xs bg-orange-200 text-orange-800 px-1.5 rounded-full">3</span></p>
</button>
<button class="flex h-8 items-center justify-center rounded-lg bg-[#e7edf3] dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal">En Proceso</p>
</button>
<button class="flex h-8 items-center justify-center rounded-lg bg-[#e7edf3] dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal">Completados</p>
</button>
<button class="flex h-8 items-center justify-center rounded-lg bg-[#e7edf3] dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<p class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal">Cancelados</p>
</button>
</div>
</div>
<!-- Orders Table -->
<div class="px-4 py-2 @container">
<div class="flex overflow-hidden rounded-xl border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2632] shadow-sm">
<table class="flex-1 w-full text-left border-collapse">
<thead>
<tr class="bg-gray-50 dark:bg-gray-800/50 border-b border-[#cfdbe7] dark:border-gray-700">
<th class="px-6 py-4 text-[#4c739a] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider w-[120px]">ID Pedido</th>
<th class="px-6 py-4 text-[#4c739a] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider w-[200px]">Cliente</th>
<th class="px-6 py-4 text-[#4c739a] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">Producto(s)</th>
<th class="px-6 py-4 text-[#4c739a] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider w-[160px]">Fecha</th>
<th class="px-6 py-4 text-[#4c739a] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider w-[140px]">Estado</th>
<th class="px-6 py-4 text-[#4c739a] dark:text-gray-400 text-xs font-semibold uppercase tracking-wider w-[240px] text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-[#cfdbe7] dark:divide-gray-700">
<!-- Row 1: Pending -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
<td class="px-6 py-4 text-sm font-medium text-[#0d141b] dark:text-white">#ORD-3920</td>
<td class="px-6 py-4 text-sm text-[#0d141b] dark:text-gray-300">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xs">AG</div>
<span>Ana García</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-gray-200 font-medium">2x Paella Valenciana</span>
<span class="text-xs mt-0.5">1x Coca-Cola Zero</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
                                        Today, 14:30
                                    </td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-pending">
                                            Pendiente
                                        </span>
</td>
<td class="px-6 py-4">
<div class="flex justify-end gap-2">
<button class="flex items-center justify-center px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                                                Aceptar
                                            </button>
<button class="flex items-center justify-center px-3 py-1.5 border border-red-200 text-red-600 dark:text-red-400 dark:border-red-900 bg-transparent text-xs font-bold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                                Rechazar
                                            </button>
</div>
</td>
</tr>
<!-- Row 2: Pending (New) -->
<tr class="bg-blue-50/30 dark:bg-blue-900/10 border-l-4 border-l-primary hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-[#0d141b] dark:text-white">#ORD-3921</td>
<td class="px-6 py-4 text-sm text-[#0d141b] dark:text-gray-300">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">JP</div>
<span>Javier Pérez</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-gray-200 font-medium">1x Menú del Día</span>
<span class="text-xs mt-0.5 text-orange-500 italic">Nota: Sin gluten</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
                                        Today, 14:32
                                    </td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-pending animate-pulse">
                                            Nuevo
                                        </span>
</td>
<td class="px-6 py-4">
<div class="flex justify-end gap-2">
<button class="flex items-center justify-center px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                                                Aceptar
                                            </button>
<button class="flex items-center justify-center px-3 py-1.5 border border-red-200 text-red-600 dark:text-red-400 dark:border-red-900 bg-transparent text-xs font-bold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                                                Rechazar
                                            </button>
</div>
</td>
</tr>
<!-- Row 3: Accepted -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-[#0d141b] dark:text-white">#ORD-3918</td>
<td class="px-6 py-4 text-sm text-[#0d141b] dark:text-gray-300">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold text-xs">CR</div>
<span>Carlos Ruiz</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-gray-200 font-medium">1x Hamburguesa Gourmet</span>
<span class="text-xs mt-0.5">1x Patatas Bravas</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
                                        Today, 13:15
                                    </td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-accepted">
                                            Aceptado
                                        </span>
</td>
<td class="px-6 py-4">
<div class="flex justify-end gap-2">
<button class="flex items-center justify-center px-3 py-1.5 border border-primary text-primary dark:border-blue-500 dark:text-blue-400 bg-transparent text-xs font-bold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors w-full">
                                                Marcar Preparado
                                            </button>
</div>
</td>
</tr>
<!-- Row 4: Prepared -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-[#0d141b] dark:text-white">#ORD-3915</td>
<td class="px-6 py-4 text-sm text-[#0d141b] dark:text-gray-300">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xs">LM</div>
<span>Lucía Martín</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-gray-200 font-medium">3x Tapas Variadas</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
                                        Today, 12:45
                                    </td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-prepared">
                                            Preparado
                                        </span>
</td>
<td class="px-6 py-4">
<div class="flex justify-end gap-2">
<button class="flex items-center justify-center gap-1 px-3 py-1.5 bg-green-600 text-white text-xs font-bold rounded-lg hover:bg-green-700 transition-colors w-full">
<span class="material-symbols-outlined text-[14px]">check</span>
                                                Marcar Entregado
                                            </button>
</div>
</td>
</tr>
<!-- Row 5: Delivered -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors opacity-75">
<td class="px-6 py-4 text-sm font-medium text-[#0d141b] dark:text-white">#ORD-3890</td>
<td class="px-6 py-4 text-sm text-[#0d141b] dark:text-gray-300">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs">JB</div>
<span>Jorge B.</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-gray-200 font-medium">1x Bocadillo Jamón</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
                                        Yesterday, 20:00
                                    </td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-delivered">
                                            Entregado
                                        </span>
</td>
<td class="px-6 py-4">
<div class="flex justify-end gap-2">
<button class="flex items-center justify-center px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg hover:bg-gray-200 transition-colors">
                                                Ver Detalles
                                            </button>
</div>
</td>
</tr>
<!-- Row 6: Cancelled -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors opacity-60">
<td class="px-6 py-4 text-sm font-medium text-[#0d141b] dark:text-white">#ORD-3885</td>
<td class="px-6 py-4 text-sm text-[#0d141b] dark:text-gray-300">
<div class="flex items-center gap-3">
<div class="size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs">MS</div>
<span>Marta S.</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-gray-200 font-medium">2x Agua Mineral</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-[#4c739a] dark:text-gray-400">
                                        Yesterday, 19:30
                                    </td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium badge-cancelled">
                                            Cancelado
                                        </span>
</td>
<td class="px-6 py-4">
<div class="flex justify-end gap-2">
<button class="flex items-center justify-center px-3 py-1.5 text-gray-400 text-xs font-medium rounded-lg hover:text-gray-600 transition-colors">
                                                Ver Motivo
                                            </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Footer / Disclaimer -->
<div class="px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-xs text-[#4c739a] dark:text-gray-500 italic">
                        * Las condiciones de venta y entrega dependen del proveedor.
                    </p>
<!-- Pagination -->
<div class="flex items-center justify-center gap-1">
<button class="flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-gray-400 transition-colors">
<span class="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button class="text-xs font-bold flex size-8 items-center justify-center text-white bg-primary rounded-lg">1</button>
<button class="text-xs font-medium flex size-8 items-center justify-center text-[#0d141b] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">2</button>
<button class="text-xs font-medium flex size-8 items-center justify-center text-[#0d141b] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">3</button>
<span class="text-xs font-medium flex size-8 items-center justify-center text-[#0d141b] dark:text-gray-400">...</span>
<button class="flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-gray-400 transition-colors">
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>`;
const EXTRA_CSS = `/* Custom styles for status badges */
        .badge-pending { @apply bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300; }
        .badge-accepted { @apply bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300; }
        .badge-prepared { @apply bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300; }
        .badge-delivered { @apply bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300; }
        .badge-cancelled { @apply bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400; }`;

export default function PanelProveedorPedidosReservas() {
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
