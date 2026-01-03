import React from 'react';

const TITLE = `YaVoy Proveedores - Nuevo Producto`;
const BODY_HTML = `<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 shadow-sm">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h2 class="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">YaVoy Proveedores</h2>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<nav class="hidden md:flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Dashboard</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Pedidos</a>
<a class="text-primary text-sm font-medium leading-normal" href="#">Catálogo</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Finanzas</a>
</nav>
<div class="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
<div class="text-right hidden sm:block">
<p class="text-xs font-semibold text-slate-900 dark:text-white">ElectroMundo S.L.</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Proveedor Verificado</p>
</div>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-slate-100 dark:border-slate-800 shadow-sm" data-alt="Profile picture of a business representative" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA7fquixkHXUfpwjZFY2maAUEnYBUXkVdjWZpgqWYlZsaLu9EcIPzQbQfqZJSTlLISic7aJ47OYVPaBebPIRP7pqijPA4j54EKor13m8n1SGdNGSdiHdCp9ewnQh8GTKDPML3zgOGpVbG_Y3mqrhR9UIEA_Nr9Fmge9EIY9jP-gWrm_kEnHb43E8ovfXnsANn52JHixWfJ00zPD1gUbqZ2kQEe02xNhovoT0HPyZaWOiaGo1ah7tdrHc7ETGVqi8nlYetXiS_af1Q");'>
</div>
</div>
</div>
</header>
<!-- Main Content Layout -->
<main class="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
<!-- Breadcrumbs -->
<div class="flex flex-wrap gap-2 mb-6 text-sm">
<a class="text-slate-500 hover:text-primary transition-colors" href="#">Inicio</a>
<span class="text-slate-400">/</span>
<a class="text-slate-500 hover:text-primary transition-colors" href="#">Catálogo</a>
<span class="text-slate-400">/</span>
<span class="text-slate-900 dark:text-white font-medium">Nuevo Producto</span>
</div>
<!-- Heading -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div class="flex flex-col gap-1">
<h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Nuevo Producto</h1>
<p class="text-slate-500 dark:text-slate-400 text-base">Complete la información detallada para publicar su artículo en el marketplace.</p>
</div>
<div class="flex gap-3">
<button class="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Cancelar
                </button>
<button class="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-primary font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Guardar Borrador
                </button>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Sidebar: Progress Steps -->
<aside class="hidden lg:block lg:col-span-3 sticky top-24">
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 p-6">
<h3 class="text-xs uppercase tracking-wider text-slate-500 font-bold mb-6">Progreso</h3>
<div class="relative flex flex-col gap-0">
<!-- Step 1 (Completed) -->
<div class="flex gap-3 pb-8 relative">
<div class="flex flex-col items-center">
<div class="size-8 rounded-full bg-primary text-white flex items-center justify-center z-10">
<span class="material-symbols-outlined text-sm">check</span>
</div>
<div class="w-0.5 bg-primary h-full absolute top-8 left-4 -ml-[1px]"></div>
</div>
<div class="pt-1">
<p class="text-primary font-semibold text-sm">Info Básica</p>
<p class="text-slate-500 text-xs mt-0.5">Nombre y descripción</p>
</div>
</div>
<!-- Step 2 (Active) -->
<div class="flex gap-3 pb-8 relative">
<div class="flex flex-col items-center">
<div class="size-8 rounded-full bg-white border-2 border-primary text-primary flex items-center justify-center z-10 shadow-[0_0_0_4px_rgba(19,127,236,0.1)]">
<span class="font-bold text-sm">2</span>
</div>
<div class="w-0.5 bg-slate-200 dark:bg-slate-700 h-full absolute top-8 left-4 -ml-[1px]"></div>
</div>
<div class="pt-1">
<p class="text-slate-900 dark:text-white font-semibold text-sm">Precio y Stock</p>
<p class="text-slate-500 text-xs mt-0.5">Definir valores</p>
</div>
</div>
<!-- Step 3 (Pending) -->
<div class="flex gap-3 pb-8 relative">
<div class="flex flex-col items-center">
<div class="size-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center z-10">
<span class="font-medium text-sm">3</span>
</div>
<div class="w-0.5 bg-slate-200 dark:bg-slate-700 h-full absolute top-8 left-4 -ml-[1px]"></div>
</div>
<div class="pt-1">
<p class="text-slate-500 font-medium text-sm">Restricciones</p>
</div>
</div>
<!-- Step 4 (Pending) -->
<div class="flex gap-3 pb-8 relative">
<div class="flex flex-col items-center">
<div class="size-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center z-10">
<span class="font-medium text-sm">4</span>
</div>
<div class="w-0.5 bg-slate-200 dark:bg-slate-700 h-full absolute top-8 left-4 -ml-[1px]"></div>
</div>
<div class="pt-1">
<p class="text-slate-500 font-medium text-sm">Imágenes</p>
</div>
</div>
<!-- Step 5 (Pending) -->
<div class="flex gap-3 relative">
<div class="flex flex-col items-center">
<div class="size-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center z-10">
<span class="font-medium text-sm">5</span>
</div>
</div>
<div class="pt-1">
<p class="text-slate-500 font-medium text-sm">Confirmación</p>
</div>
</div>
</div>
</div>
</aside>
<!-- Main Form Area -->
<div class="col-span-1 lg:col-span-9 flex flex-col gap-6">
<!-- SECTION 1: Info Básica -->
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 flex justify-between items-center">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="bg-primary/10 text-primary text-xs px-2 py-1 rounded font-bold uppercase">Paso 1</span>
                            Información Básica
                        </h3>
<span class="material-symbols-outlined text-primary">check_circle</span>
</div>
<div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="md:col-span-2">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nombre del Producto <span class="text-red-500">*</span></label>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-3 shadow-sm transition-all" placeholder="Ej: Zapatillas Deportivas Running" type="text" value="Auriculares Bluetooth Pro XT-200"/>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Categoría <span class="text-red-500">*</span></label>
<div class="relative">
<select class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary pl-4 pr-10 py-3 shadow-sm appearance-none cursor-pointer">
<option>Electrónica</option>
<option>Hogar y Jardín</option>
<option>Moda</option>
<option>Deportes</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<span class="material-symbols-outlined">expand_more</span>
</div>
</div>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Código SKU (Opcional)</label>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-3 shadow-sm" placeholder="Ej: REF-001" type="text" value="XT200-BLK-WL"/>
</div>
<div class="md:col-span-2">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Descripción</label>
<textarea class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-3 shadow-sm" placeholder="Describa las características principales de su producto..." rows="4"></textarea>
<p class="text-xs text-slate-400 mt-1 text-right">0 / 500 caracteres</p>
</div>
</div>
</div>
<!-- SECTION 2: Precio y Stock -->
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg ring-1 ring-primary/20 border-l-4 border-l-primary overflow-hidden">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="bg-primary text-white text-xs px-2 py-1 rounded font-bold uppercase">Paso 2</span>
                            Precio y Disponibilidad
                        </h3>
</div>
<div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Precio de Venta <span class="text-red-500">*</span></label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="text-slate-500">€</span>
</div>
<input class="w-full pl-8 rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary py-3 shadow-sm" placeholder="0.00" type="number"/>
</div>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Stock Inicial <span class="text-red-500">*</span></label>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-primary focus:border-primary px-4 py-3 shadow-sm" placeholder="Cantidad" type="number"/>
</div>
<div class="flex items-center">
<div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 w-full flex items-center justify-between">
<div class="flex flex-col">
<span class="text-sm font-medium text-slate-900 dark:text-white">Bajo Pedido</span>
<span class="text-xs text-slate-500">Stock no inmediato</span>
</div>
<label class="flex items-center cursor-pointer relative" for="toggle-pedido">
<input class="sr-only peer" id="toggle-pedido" type="checkbox"/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</div>
<!-- SECTION 3: Restricciones -->
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 opacity-80 hover:opacity-100 transition-opacity">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded font-bold uppercase">Paso 3</span>
                            Restricciones Legales
                        </h3>
</div>
<div class="p-6 flex flex-col gap-4">
<div class="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
<div>
<h4 class="text-base font-medium text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-red-500">18_up_rating</span>
                                    Restricción de Edad (+18)
                                </h4>
<p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Active si el producto es alcohol, tabaco o contenido adulto.</p>
</div>
<label class="flex items-center cursor-pointer relative" for="toggle-18">
<input checked="" class="sr-only peer" id="toggle-18" type="checkbox"/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
<!-- Warning Alert -->
<div class="flex gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-lg border border-blue-100 dark:border-blue-800">
<span class="material-symbols-outlined shrink-0">info</span>
<div class="text-sm">
<span class="font-bold">Aviso Legal Automático:</span> Al activar esta opción, se mostrará un aviso en la ficha de producto y el repartidor solicitará el DNI en el momento de la entrega para verificar la mayoría de edad.
                            </div>
</div>
</div>
</div>
<!-- SECTION 4: Imágenes -->
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div class="p-6 border-b border-slate-100 dark:border-slate-800">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded font-bold uppercase">Paso 4</span>
                            Galería de Imágenes
                        </h3>
</div>
<div class="p-6">
<!-- Upload Area -->
<div class="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer mb-6">
<div class="bg-primary/10 text-primary p-3 rounded-full mb-3">
<span class="material-symbols-outlined text-2xl">cloud_upload</span>
</div>
<p class="text-slate-900 dark:text-white font-medium">Haga clic o arrastre imágenes aquí</p>
<p class="text-sm text-slate-500 mt-1">JPG, PNG o WEBP (Max. 5MB)</p>
</div>
<!-- Gallery Grid -->
<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
<!-- Image 1 -->
<div class="group relative aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Product thumbnail 1" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBLc-1C3j8qt7QJPXa0Ef4aQpG36OmPfQ9qczBEGTUfv7HWH1ECYdaF_Y8hBPW1oqk7OUb_jicwUjFk0z044klR-7N4TBpNwhqVX21EKTlS239J485rikgHo_y5zPsHm5waGI-LYof6DEf-ZKlElI3EvUc6G9SsQVAnm81pnZDijCEE_LkhNjWDEuNkwROuWF75EfQxbNls3DrdTPOkCpJXyC1wB8eb2Ws31wJhztcJhZWPfjNoOPl-fPJSIYkvP9_rHRh1g2w1vg");'></div>
<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button class="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-colors"><span class="material-symbols-outlined text-sm">visibility</span></button>
<button class="bg-red-500/80 hover:bg-red-500 text-white p-2 rounded-full backdrop-blur-sm transition-colors"><span class="material-symbols-outlined text-sm">delete</span></button>
</div>
<div class="absolute top-2 left-2 bg-white/90 dark:bg-black/80 px-2 py-0.5 rounded text-xs font-bold shadow-sm backdrop-blur-md">Principal</div>
</div>
<!-- Image 2 -->
<div class="group relative aspect-square rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100">
<div class="absolute inset-0 bg-cover bg-center" data-alt="Product thumbnail 2" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkWuIaHcc1It4XKNVq2hyTx5vFov7B0bV9GBvlH6-Q1h6T43i8Vc6ILsHdnOZA20rRvb4hb-WiTHKXcyFs1ahUwOzo7gkXq-POeFAoIRneiviX91facVaRx1dxP4S_PU30QNABYtoADH26McnpnzJnNBtfHLpc-529NjtMIEkdV2Gn3SNaTovIECFp-Mr1iFnSyTT9DVryIM8vsFPHox7GLsHhPgVaEhAj4DiJ8Yat9HZy5cIWEMvETOwl4wQvEFMe6XIAn4vEEw");'></div>
<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button class="bg-red-500/80 hover:bg-red-500 text-white p-2 rounded-full backdrop-blur-sm transition-colors"><span class="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
<!-- Placeholder -->
<div class="aspect-square rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-300">
<span class="material-symbols-outlined text-3xl">image</span>
</div>
</div>
</div>
</div>
<!-- SECTION 5: Confirmación -->
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
<div class="p-6">
<div class="flex gap-4 items-start">
<div class="relative flex items-start pt-1">
<input class="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700" id="legal-check" type="checkbox"/>
</div>
<label class="text-sm text-slate-700 dark:text-slate-300" for="legal-check">
<span class="font-bold block text-slate-900 dark:text-white mb-1">Declaración de Responsabilidad</span>
                                Declaro que soy responsable de la veracidad de la información de este producto y que cumplo con toda la normativa aplicable para su venta en España. Entiendo que YaVoy puede retirar el producto si incumple las políticas.
                            </label>
</div>
</div>
<div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 rounded-b-xl border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
<button class="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                            Atrás
                        </button>
<button class="px-6 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20 transition-all flex items-center gap-2">
<span>Guardar y Publicar</span>
<span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        /* Custom scrollbar for cleaner look */
        ::-webkit-scrollbar {
            width: 8px;
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
        
        /* Toggle Switch Custom Styles */
        .toggle-checkbox:checked {
            right: 0;
            border-color: #137fec;
        }
        .toggle-checkbox:checked + .toggle-label {
            background-color: #137fec;
        }`;

export default function PanelProveedorCrearEditarProducto() {
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
