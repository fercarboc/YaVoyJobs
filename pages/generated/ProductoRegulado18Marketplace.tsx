import React from 'react';

const TITLE = `YaVoy Proveedores - Gestión de Producto +18`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark sticky top-0 z-50">
<div class="px-6 lg:px-10 py-3 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="size-8 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h2 class="text-lg font-bold tracking-tight">YaVoy Proveedores</h2>
</div>
<div class="flex items-center gap-8">
<nav class="hidden md:flex items-center gap-6">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-sm font-medium text-primary" href="#">Catálogo</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Pedidos</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Cuenta</a>
</nav>
<div class="flex items-center gap-4">
<button class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-border-light dark:border-border-dark cursor-pointer" data-alt="Supplier profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKK0Q6-lLe5sbj_R25JRNnzP68fs1kRmMtcUsUJqgXfcy2DZYFFDSe6HKJ97HTGuifowFcC_SCEMxQ1kX1y9Neii5qjQin4GUDXwsHFWNj-jyKj_OtRjTKm3COhENjVZRD230AePKQDkxzYJDAhv35lVllym5mE6QMzHBjnd4lq9yZdNLX1G_7h1GSZGbDgRxrMccS-EBd1b4KNI6-Ehl0KrSHYP4KKUYWEfVWmhAted0hZkJpT__8dOTwLITk-Uynpbn2prl-bg");'>
</div>
</div>
</div>
</div>
</header>
<main class="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-10 py-8">
<!-- Breadcrumbs -->
<div class="mb-6 flex flex-wrap gap-2 text-sm">
<a class="text-text-sec-light dark:text-text-sec-dark hover:text-primary transition-colors" href="#">Inicio</a>
<span class="text-text-sec-light dark:text-text-sec-dark">/</span>
<a class="text-text-sec-light dark:text-text-sec-dark hover:text-primary transition-colors" href="#">Catálogo</a>
<span class="text-text-sec-light dark:text-text-sec-dark">/</span>
<span class="font-medium">Editar Producto</span>
</div>
<!-- Page Heading -->
<div class="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
<div class="flex flex-col gap-2">
<h1 class="text-3xl md:text-4xl font-black tracking-tight">Vino Tinto Reserva Especial</h1>
<div class="flex items-center gap-3">
<span class="text-text-sec-light dark:text-text-sec-dark text-base font-medium">SKU: #PRD-99283-ES</span>
<span class="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800">
                        Restringido +18
                    </span>
</div>
</div>
<div class="flex gap-3">
<button class="h-10 px-4 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-main-light dark:text-text-main-dark text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    Descartar cambios
                </button>
<button class="h-10 px-6 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[20px]">save</span>
                    Guardar cambios
                </button>
</div>
</div>
<!-- Main Content Grid -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Left Column: Product Form -->
<div class="lg:col-span-2 flex flex-col gap-6">
<!-- Status Notification (ActionPanel) -->
<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
<div class="flex gap-4">
<div class="mt-1 text-primary shrink-0">
<span class="material-symbols-outlined">verified_user</span>
</div>
<div class="flex flex-col gap-1">
<h3 class="text-base font-bold text-gray-900 dark:text-gray-100">Producto marcado como +18</h3>
<p class="text-sm text-gray-600 dark:text-gray-300">
                                Se ha enviado un aviso automático confirmando esta clasificación. Este producto solo será visible para usuarios verificados como mayores de edad.
                            </p>
</div>
</div>
<a class="text-sm font-bold text-primary whitespace-nowrap hover:underline flex items-center gap-1" href="#">
                        Ver política
                        <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<!-- Product Details Card -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
<h3 class="text-lg font-bold mb-6 flex items-center gap-2">
<span class="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark">edit_note</span>
                        Información General
                    </h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<label class="flex flex-col gap-2">
<span class="text-sm font-medium">Nombre del Producto</span>
<input class="h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="text" value="Vino Tinto Reserva Especial 750ml"/>
</label>
<label class="flex flex-col gap-2">
<span class="text-sm font-medium">Categoría</span>
<div class="relative">
<select class="w-full h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary appearance-none transition-all">
<option>Vinos y Licores</option>
<option>Bebidas</option>
<option>Gourmet</option>
</select>
<span class="material-symbols-outlined absolute right-4 top-3 pointer-events-none text-text-sec-light">expand_more</span>
</div>
</label>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
<label class="flex flex-col gap-2">
<span class="text-sm font-medium">Precio (EUR)</span>
<input class="h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="number" value="24.99"/>
</label>
<label class="flex flex-col gap-2">
<span class="text-sm font-medium">Stock</span>
<input class="h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="number" value="150"/>
</label>
<label class="flex flex-col gap-2">
<span class="text-sm font-medium">Código de Barras (EAN)</span>
<input class="h-12 px-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" type="text" value="8412345678901"/>
</label>
</div>
<label class="flex flex-col gap-2">
<span class="text-sm font-medium">Descripción</span>
<textarea class="h-32 p-4 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none transition-all">Vino tinto gran reserva con denominación de origen. Envejecido 24 meses en barrica de roble francés. Notas de frutos rojos, vainilla y especias.</textarea>
</label>
</div>
<!-- Classification Toggle -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
<h3 class="text-lg font-bold mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-text-sec-light dark:text-text-sec-dark">policy</span>
                        Clasificación de Contenido
                    </h3>
<div class="flex items-start justify-between gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30">
<div class="flex flex-col gap-1">
<span class="font-bold text-gray-900 dark:text-gray-100">Contenido para adultos (+18)</span>
<span class="text-sm text-gray-600 dark:text-gray-400">Activa esta opción si el producto contiene alcohol, tabaco o contenido explícito.</span>
</div>
<div class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" disabled="" type="checkbox"/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary opacity-60 cursor-not-allowed"></div>
</div>
</div>
</div>
</div>
<!-- Right Column: Preview & Legal -->
<div class="lg:col-span-1 flex flex-col gap-6">
<!-- Preview Card -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm flex flex-col">
<h3 class="text-sm font-bold text-text-sec-light dark:text-text-sec-dark uppercase tracking-wider mb-4">Vista Previa</h3>
<div class="relative group w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 mb-4">
<!-- Product Image -->
<div class="w-full h-full bg-cover bg-center" data-alt="Red wine bottle on a table" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYpLb0UyEBUKxq5MXbJYq6U7W3E4vuo3F8sgeIfCvgKWh82SnoPjb5OzBytofQKEqKhftR-f35OjcLdHEpaWLtd_eLWfqyQxWEi7TSHocG6GkU3bNvK4l6gl8O9SGOfHoYGey2r4Z7IK0iLwK2gRQkteT3suDw23sT5GncHQSo9jj2eyq8YcJeSWCfVi-t3jCI6wgMP4FFYV5vcRzJan_tXM8d1LqykPHo6Eh8GgEUsKIeWtHhzsb-F6qKND0h-D0pIcvOL79vUA");'>
</div>
<!-- +18 Badge overlay -->
<div class="absolute top-3 right-3 bg-red-600 text-white text-xs font-black px-2 py-1 rounded shadow-sm border border-red-700 z-10 flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">18_up_rating</span>
                            ADULTOS
                         </div>
<!-- Hover overlay simulation -->
<div class="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<button class="bg-white/90 text-text-main-light px-4 py-2 rounded-full text-sm font-bold shadow-lg">Ver detalles</button>
</div>
</div>
<div class="flex flex-col gap-1">
<h4 class="font-bold text-text-main-light dark:text-text-main-dark">Vino Tinto Reserva Esp...</h4>
<p class="text-sm text-text-sec-light dark:text-text-sec-dark">Vinos y Licores</p>
<p class="font-bold text-lg mt-1">24.99 €</p>
</div>
</div>
<!-- Legal Responsibility Card -->
<div class="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-xl p-6 shadow-sm">
<div class="flex items-center gap-2 mb-3 text-amber-700 dark:text-amber-500">
<span class="material-symbols-outlined">gavel</span>
<h3 class="font-bold text-sm uppercase tracking-wide">Responsabilidad Legal</h3>
</div>
<p class="text-sm text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
                        Como proveedor en <strong>YaVoy</strong>, certificas que este producto cumple con la normativa vigente en España respecto a la venta de artículos para adultos. 
                    </p>
<p class="text-sm text-gray-800 dark:text-gray-300 mb-6 leading-relaxed">
                        Es tu responsabilidad asegurar el etiquetado correcto y la veracidad de la información proporcionada. La plataforma se reserva el derecho de retirar productos que incumplan estas normas.
                    </p>
<div class="flex items-start gap-3 p-3 bg-white dark:bg-slate-800 rounded border border-amber-100 dark:border-amber-900/30">
<input class="mt-1 rounded border-gray-300 text-primary focus:ring-primary" id="legal-check" type="checkbox"/>
<label class="text-xs font-medium text-gray-600 dark:text-gray-400 cursor-pointer select-none" for="legal-check">
                            Entiendo y acepto la responsabilidad sobre la venta de este producto regulado.
                        </label>
</div>
</div>
<!-- Helper Links -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark p-6 shadow-sm">
<h3 class="text-sm font-bold text-text-main-light dark:text-text-main-dark mb-4">Recursos de Ayuda</h3>
<ul class="flex flex-col gap-3">
<li>
<a class="text-sm text-text-sec-light dark:text-text-sec-dark hover:text-primary flex items-center justify-between group" href="#">
<span>Guía de productos prohibidos</span>
<span class="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</a>
</li>
<li>
<a class="text-sm text-text-sec-light dark:text-text-sec-dark hover:text-primary flex items-center justify-between group" href="#">
<span>Normativa Española de Consumo</span>
<span class="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
</a>
</li>
</ul>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function ProductoRegulado18Marketplace() {
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
