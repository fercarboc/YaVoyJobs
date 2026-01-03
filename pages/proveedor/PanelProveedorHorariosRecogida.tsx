import React from 'react';

const TITLE = `Panel Proveedor - Horarios/Recogida - YaVoy`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50">
<div class="px-6 lg:px-12 flex items-center justify-between h-16">
<div class="flex items-center gap-4">
<div class="text-primary size-8 flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h2 class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Inicio</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Pedidos</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Productos</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Finanzas</a>
<a class="text-primary text-sm font-medium border-b-2 border-primary pb-0.5" href="#">Configuración</a>
</nav>
<div class="flex items-center gap-4">
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border border-slate-300 dark:border-slate-600" data-alt="User profile picture placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwM9mD92dG1ae6lK7u9xKzPm7A_9RaVN355ZRns-2aNbLaVTX7j-jmwfKy-qR87YJ7zz1-haMG7P_v0mf5OSdROa0_yGXmUatWC6hbuzU_SWqMK7DFRJrNmVxCW43DttNFHkzMAxuE_kCct7lRD8sFzDZFhhzZHqkwSrvrox0WcY-hfLIiG608gleV47kXNJR6ZajS_Iz6n8GyuQyZo2WluAaqSugSojxv7yZjg_1c_Lbz6U6SWxa_dXD-JuIUQ0nnKnff6UJ7UA");'></div>
</div>
</div>
</header>
<!-- Main Content Layout -->
<div class="flex-1 flex justify-center py-8 px-4 sm:px-6 lg:px-12">
<div class="w-full max-w-[1024px] flex flex-col gap-8">
<!-- Breadcrumbs -->
<nav class="flex text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary" href="#">Inicio</a>
<span class="mx-2">/</span>
<a class="hover:text-primary" href="#">Configuración</a>
<span class="mx-2">/</span>
<span class="text-slate-800 dark:text-slate-200 font-medium">Horarios</span>
</nav>
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Configuración de Horarios</h1>
<p class="text-slate-500 dark:text-slate-400 max-w-2xl">
                        Gestiona la disponibilidad de tu comercio y define los horarios de recogida para los transportistas.
                    </p>
</div>
<div class="flex gap-3">
<button class="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        Cancelar
                    </button>
<button class="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-600 transition-colors shadow-sm shadow-blue-500/30">
                        Guardar Cambios
                    </button>
</div>
</div>
<!-- Content Grid -->
<div class="grid grid-cols-1 gap-8">
<!-- Section: Horario del Comercio -->
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">storefront</span>
<h2 class="text-lg font-bold text-slate-900 dark:text-white">Horario del Comercio</h2>
</div>
<button class="text-sm text-primary hover:text-blue-700 font-medium">Copiar Lunes a todo</button>
</div>
<div class="p-6 overflow-x-auto">
<table class="w-full min-w-[600px]">
<thead>
<tr class="text-left text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-slate-700">
<th class="pb-3 pl-2 w-32">Día</th>
<th class="pb-3 w-40">Hora Apertura</th>
<th class="pb-3 w-40">Hora Cierre</th>
<th class="pb-3 w-32 text-center">Estado</th>
<th class="pb-3 w-20"></th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
<!-- Lunes -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="py-4 pl-2 font-medium text-slate-700 dark:text-slate-300">Lunes</td>
<td class="py-4 pr-4">
<div class="relative">
<input class="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" type="time" value="09:00"/>
</div>
</td>
<td class="py-4 pr-4">
<div class="relative">
<input class="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" type="time" value="20:00"/>
</div>
</td>
<td class="py-4 text-center">
<span class="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Abierto</span>
</td>
<td class="py-4 text-right">
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/40 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</td>
</tr>
<!-- Martes -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="py-4 pl-2 font-medium text-slate-700 dark:text-slate-300">Martes</td>
<td class="py-4 pr-4">
<input class="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" type="time" value="09:00"/>
</td>
<td class="py-4 pr-4">
<input class="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" type="time" value="20:00"/>
</td>
<td class="py-4 text-center">
<span class="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Abierto</span>
</td>
<td class="py-4 text-right">
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
<!-- Miércoles -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="py-4 pl-2 font-medium text-slate-700 dark:text-slate-300">Miércoles</td>
<td class="py-4 pr-4">
<input class="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" type="time" value="09:00"/>
</td>
<td class="py-4 pr-4">
<input class="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" type="time" value="20:00"/>
</td>
<td class="py-4 text-center">
<span class="inline-flex items-center rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 ring-1 ring-inset ring-green-600/20">Abierto</span>
</td>
<td class="py-4 text-right">
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
<!-- Domingo (Closed Example) -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="py-4 pl-2 font-medium text-slate-700 dark:text-slate-300">Domingo</td>
<td class="py-4 pr-4">
<input class="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed sm:text-sm" disabled="" type="time"/>
</td>
<td class="py-4 pr-4">
<input class="block w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed sm:text-sm" disabled="" type="time"/>
</td>
<td class="py-4 text-center">
<span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-500/10">Cerrado</span>
</td>
<td class="py-4 text-right">
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</td>
</tr>
</tbody>
</table>
<div class="mt-4 flex justify-center">
<button class="text-sm text-slate-500 hover:text-primary flex items-center gap-1">
<span class="material-symbols-outlined text-lg">expand_more</span> Ver resto de la semana
                           </button>
</div>
</div>
</section>
<!-- Section: Horario de Recogida + Info -->
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">local_shipping</span>
<h2 class="text-lg font-bold text-slate-900 dark:text-white">Horario de Recogida</h2>
</div>
</div>
<div class="p-6">
<!-- Info Alert -->
<div class="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-100 dark:border-blue-800 mb-6 flex gap-3 items-start">
<span class="material-symbols-outlined text-primary shrink-0 mt-0.5">info</span>
<div>
<h3 class="text-sm font-semibold text-primary dark:text-blue-300">Coordinación Importante</h3>
<p class="text-sm text-blue-800 dark:text-blue-200 mt-1">
                                     La recogida se coordina directamente con el proveedor. Por favor, asegúrese de que haya alguien disponible durante las franjas horarias seleccionadas.
                                 </p>
</div>
</div>
<!-- Same structure as above for Pickup Hours, simplified view -->
<div class="space-y-4">
<div class="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50/50 dark:bg-slate-800/30">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-400">calendar_month</span>
<span class="text-sm font-medium text-slate-700 dark:text-slate-300">Usar el mismo horario que el comercio</span>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<!-- Overwrite options (hidden or dimmed if checkbox is active, represented visually here as active but simplified) -->
<div class="opacity-50 pointer-events-none grid gap-4">
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Franja Matutina</label>
<div class="flex items-center gap-2">
<input class="block w-full rounded-lg border-slate-300 bg-white text-slate-900 sm:text-sm" type="time" value="09:00"/>
<span class="text-slate-400">-</span>
<input class="block w-full rounded-lg border-slate-300 bg-white text-slate-900 sm:text-sm" type="time" value="13:30"/>
</div>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Franja Vespertina</label>
<div class="flex items-center gap-2">
<input class="block w-full rounded-lg border-slate-300 bg-white text-slate-900 sm:text-sm" type="time" value="16:00"/>
<span class="text-slate-400">-</span>
<input class="block w-full rounded-lg border-slate-300 bg-white text-slate-900 sm:text-sm" type="time" value="19:00"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Section: Observaciones -->
<section class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">notes</span>
<h2 class="text-lg font-bold text-slate-900 dark:text-white">Observaciones de Recogida</h2>
</div>
</div>
<div class="p-6">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2" for="notes">Instrucciones especiales para el transportista</label>
<textarea class="block w-full rounded-xl border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm placeholder:text-slate-400" id="notes" placeholder="Ej: Llamar al timbre trasero, preguntar por Juan en recepción, la entrada de mercancías está en la calle lateral..." rows="4"></textarea>
<p class="mt-2 text-xs text-slate-500 dark:text-slate-400 text-right">0/500 caracteres</p>
</div>
</section>
</div>
<!-- Sticky Mobile Action Bar (Visible only on small screens) -->
<div class="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 md:hidden z-40 flex gap-3 shadow-lg">
<button class="flex-1 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg">
                    Cancelar
                </button>
<button class="flex-1 px-4 py-3 text-sm font-medium text-white bg-primary rounded-lg shadow-md shadow-blue-500/20">
                    Guardar
                </button>
</div>
<!-- Footer Spacer -->
<div class="h-16 md:h-0"></div>
</div>
</div>`;
const EXTRA_CSS = `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');`;

export default function PanelProveedorHorariosRecogida() {
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
