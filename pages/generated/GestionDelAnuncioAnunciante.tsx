import React from 'react';

const TITLE = `Gestión del Anuncio - YaVoy`;
const BODY_HTML = `<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-16">
<!-- Logo -->
<div class="flex items-center gap-2 cursor-pointer">
<div class="text-primary size-8 flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">real_estate_agent</span>
</div>
<h1 class="text-slate-900 dark:text-white text-xl font-bold tracking-tight">YaVoy</h1>
</div>
<!-- Desktop Navigation -->
<div class="hidden md:flex items-center gap-8">
<nav class="flex gap-6">
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Comprar</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Alquilar</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors" href="#">Vender</a>
<a class="text-sm font-medium text-primary font-semibold" href="#">Mis Anuncios</a>
</nav>
<!-- Right Actions -->
<div class="flex items-center gap-4">
<button class="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-slate-200 dark:border-slate-700 cursor-pointer" data-alt="User profile picture showing a smiling professional" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIQUyqdWkUi6j34inKINzCkOxL65a56lNCVrZajY-ztYHU4RLCsxLLi6x8T-bh1oefqEdfSK7NKKakxF-glDmgSIACQOqc2uBvkUvbmlzd94qHxz4mVrcW0P_6SUzIE5QT86amKL7j33Azo4NuWdNyhFVtbIeAeuht79UiVXlielOyIeveQHqd9_p6RCMeoJt089uisRrsXvHZRyjYSacg73DXopzywnTZOztzJbZncoHx2bFWeNyellNKPZnALNPC9iKbATCpKA");'></div>
</div>
</div>
<!-- Mobile menu button (visual only) -->
<div class="md:hidden flex items-center">
<button class="text-slate-600 dark:text-slate-300 hover:text-primary">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<!-- Breadcrumbs -->
<nav aria-label="Breadcrumb" class="flex mb-6">
<ol class="inline-flex items-center space-x-1 md:space-x-3">
<li class="inline-flex items-center">
<a class="inline-flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary" href="#">
                        Inicio
                    </a>
</li>
<li>
<div class="flex items-center">
<span class="material-symbols-outlined text-slate-400 text-sm mx-1">chevron_right</span>
<a class="ml-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary md:ml-2" href="#">Mis Anuncios</a>
</div>
</li>
<li aria-current="page">
<div class="flex items-center">
<span class="material-symbols-outlined text-slate-400 text-sm mx-1">chevron_right</span>
<span class="ml-1 text-sm font-medium text-slate-900 dark:text-white md:ml-2">Gestión de Anuncio</span>
</div>
</li>
</ol>
</nav>
<!-- Page Heading & Status -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-3">
<h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Calle Gran Vía, 28</h2>
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">
<span class="size-2 rounded-full bg-green-500 animate-pulse"></span>
                        Publicado
                    </span>
</div>
<p class="text-slate-500 dark:text-slate-400 text-lg flex items-center gap-2">
<span class="material-symbols-outlined text-base">tag</span>
                    Ref ID: 839201 
                    <span class="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    Madrid, España
                </p>
</div>
<div class="flex gap-3">
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-surface-dark border border-slate-300 dark:border-slate-600 rounded-lg shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-100 dark:focus:ring-slate-700">
<span class="material-symbols-outlined text-[20px]">visibility</span>
                    Ver anuncio público
                </button>
</div>
</div>
<!-- Top Section Grid: Property Details & Stats -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
<!-- Property Summary Card -->
<div class="lg:col-span-2 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col sm:flex-row">
<div class="w-full sm:w-64 h-48 sm:h-auto bg-cover bg-center shrink-0 relative group" data-alt="Modern living room interior with bright natural light and minimal furniture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_0QYA5P6eeRmq6gQ-3ZdOIK_1MnVRWN-zzsPJ2UvCJ8v0yRgJ2edNZ5Ctca6Mf8m_4JcSD1Jd76r_-4WCePLF7YaxkMEf8gaJFj_nmzBGYqehqw_CS_uicaC8WQe0ns5o3R8dS_VQx2tzyb0JoiLr4xutGSM8R6R2U0oyyWTwitXIWY1PeywA63p6y5A2L5A6XAaEH2gGFAA6aUEz1-NfWzyrynA2crpRpFgPEi9d29__CmmScmxLTx48EhFWyHyXyiwHxBNwCg");'>
<div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
</div>
<div class="p-6 flex flex-col justify-between flex-1">
<div class="space-y-4">
<div class="flex justify-between items-start">
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Piso luminoso en Centro</h3>
<p class="text-primary font-bold text-2xl">1.200 €<span class="text-sm font-normal text-slate-500 dark:text-slate-400 ml-1">/mes</span></p>
</div>
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">edit</span>
</button>
</div>
<div class="flex gap-4 text-sm text-slate-600 dark:text-slate-300">
<div class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">
<span class="material-symbols-outlined text-lg">bed</span>
                                3 hab
                            </div>
<div class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">
<span class="material-symbols-outlined text-lg">shower</span>
                                2 baños
                            </div>
<div class="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 rounded-lg">
<span class="material-symbols-outlined text-lg">square_foot</span>
                                90 m²
                            </div>
</div>
</div>
<div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
<span>Última actualización: hace 2 horas</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> Expira en 28 días</span>
</div>
</div>
</div>
<!-- Mini Stats Column -->
<div class="lg:col-span-1 flex flex-col gap-4">
<!-- Visits -->
<div class="flex-1 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 flex items-center justify-between">
<div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Visitas totales</p>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-bold text-slate-900 dark:text-white">1,245</span>
<span class="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded flex items-center">
<span class="material-symbols-outlined text-sm">trending_up</span> 12%
                            </span>
</div>
</div>
<div class="size-12 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center">
<span class="material-symbols-outlined">visibility</span>
</div>
</div>
<!-- Contacts -->
<div class="flex-1 bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 flex items-center justify-between">
<div>
<p class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Contactos recibidos</p>
<div class="flex items-baseline gap-2">
<span class="text-3xl font-bold text-slate-900 dark:text-white">43</span>
<span class="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-1.5 py-0.5 rounded flex items-center">
<span class="material-symbols-outlined text-sm">trending_up</span> 5%
                            </span>
</div>
</div>
<div class="size-12 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
<span class="material-symbols-outlined">mail</span>
</div>
</div>
</div>
</div>
<!-- Role-Based Info Banner -->
<div class="mb-8 p-4 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-900/20 flex gap-4 items-start">
<div class="text-primary mt-0.5">
<span class="material-symbols-outlined">info</span>
</div>
<div>
<h4 class="text-sm font-bold text-blue-900 dark:text-blue-100">Información para Anunciantes</h4>
<p class="text-sm text-blue-800 dark:text-blue-200 mt-1 leading-relaxed">
                    Si eres <span class="font-semibold">AGENCIA</span>, recuerda que cerrar el anuncio aquí no detiene la sincronización con tu CRM.
                    Si eres <span class="font-semibold">PARTICULAR</span>, tienes control total: puedes pausar el anuncio si recibes muchas llamadas o cerrarlo definitivamente cuando encuentres inquilino.
                </p>
</div>
<button class="ml-auto text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
<span class="material-symbols-outlined text-sm">close</span>
</button>
</div>
<!-- Management Actions Grid -->
<h3 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">settings_suggest</span>
            Acciones de Gestión
        </h3>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Edit Card -->
<div class="group bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200 flex flex-col h-full">
<div class="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
<span class="material-symbols-outlined">edit_square</span>
</div>
<h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">Editar Anuncio</h4>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Actualiza las fotos, cambia el precio o mejora la descripción para atraer más visitas.</p>
<button class="w-full py-2.5 px-4 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-blue-600 active:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    Modificar datos
                </button>
</div>
<!-- Pause Card -->
<div class="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="size-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 flex items-center justify-center">
<span class="material-symbols-outlined">pause_circle</span>
</div>
<!-- Toggle Switch -->
<div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 dark:border-slate-600" id="toggle-pause" name="toggle" type="checkbox"/>
<label class="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 dark:bg-slate-700 cursor-pointer" for="toggle-pause"></label>
</div>
</div>
<h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">Pausar Anuncio</h4>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">Oculta temporalmente el anuncio de los resultados de búsqueda. Ideal para vacaciones o reformas.</p>
<p class="text-xs font-medium text-orange-600 dark:text-orange-400 mt-auto pt-2">
                    Actualmente: <span class="font-bold">Visible</span>
</p>
</div>
<!-- Unavailable Card -->
<div class="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col h-full">
<div class="flex justify-between items-start mb-4">
<div class="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center">
<span class="material-symbols-outlined">event_busy</span>
</div>
<!-- Toggle Switch -->
<div class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-300 dark:border-slate-600" id="toggle-avail" name="toggle" type="checkbox"/>
<label class="toggle-label block overflow-hidden h-6 rounded-full bg-slate-300 dark:bg-slate-700 cursor-pointer" for="toggle-avail"></label>
</div>
</div>
<h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">No Disponible</h4>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-grow">Márcalo como no disponible si estás negociando pero aún no has cerrado el trato.</p>
<p class="text-xs font-medium text-slate-500 mt-auto pt-2">
                    Estado: <span class="font-bold">Disponible</span>
</p>
</div>
<!-- Close Card -->
<div class="group bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:border-red-200 dark:hover:border-red-900/50 transition-all duration-200 flex flex-col h-full">
<div class="size-10 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
<span class="material-symbols-outlined">archive</span>
</div>
<h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">Cerrar Anuncio</h4>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">¿Ya lo has alquilado o vendido? Archiva el anuncio permanentemente para dejar de recibir contactos.</p>
<button class="w-full py-2.5 px-4 bg-white dark:bg-transparent border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 text-sm font-semibold rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center gap-2">
                    Marcar como Alquilado/Vendido
                </button>
</div>
</div>
</main>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom toggle switch */
        .toggle-checkbox:checked {
            right: 0;
            border-color: #137fec;
        }
        .toggle-checkbox:checked + .toggle-label {
            background-color: #137fec;
        }`;

export default function GestionDelAnuncioAnunciante() {
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
