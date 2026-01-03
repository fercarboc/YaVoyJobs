import React from 'react';

const TITLE = `Panel Gestión - Mis Anuncios | YaVoy`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-700 px-4 sm:px-10 py-3 shadow-sm">
<div class="max-w-7xl mx-auto flex items-center justify-between">
<!-- Logo Section -->
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-xl font-bold tracking-tight">YaVoy</h2>
</div>
<!-- Desktop Menu -->
<div class="hidden md:flex flex-1 justify-end gap-8 items-center">
<nav class="flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-300 hover:text-primary font-medium text-sm transition-colors" href="#">Inicio</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary font-medium text-sm transition-colors" href="#">Buscar Ayuda</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary font-medium text-sm transition-colors" href="#">Buscar Empleo</a>
<a class="text-primary font-semibold text-sm" href="#">Mis Anuncios</a>
</nav>
<div class="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-6">
<button class="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">notifications</button>
<button class="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">mail</button>
<button class="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-sm transition-colors flex items-center gap-2">
<span class="material-symbols-outlined" style="font-size: 18px;">add</span>
<span class="truncate">Publicar Anuncio</span>
</button>
<div class="size-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-600 shadow-sm cursor-pointer" data-alt="User profile picture showing a smiling man" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOU6X55DfYZgVRQgWFtNl4PsMrDaeDPdjmqsv_2AAcv2-OX_WdkzGz22o5f0EbmLdittLTbXe_8KW2FbgmyVyOAEwo1npDCZRAcrtX-qhvjWmA9tn5qNxq1LECRDnGw7yV1HIJQ2wCGCfPNfBiO3fFj9ZFpHDQOK9_dHnIUEe8wlpQgIz7JkkEm4iNAxHTkzRSbxg-0N916HggdTkBK3HRJ0gYHFBxRdNJUrsnkm0g22ptIZ_KxiFId4e2mEfVSBengjZ5i8Z3sA");'>
</div>
</div>
</div>
<!-- Mobile Menu Toggle -->
<div class="md:hidden">
<button class="material-symbols-outlined text-slate-700 dark:text-slate-200">menu</button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-10 py-8">
<!-- Page Heading & Actions -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div class="flex flex-col gap-1">
<h1 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Mis Anuncios Publicados</h1>
<p class="text-slate-500 dark:text-slate-400 text-sm">Gestiona tus ofertas de ayuda y empleo desde un solo lugar.</p>
</div>
<div class="flex gap-3">
<!-- Example of sorting dropdown trigger -->
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined" style="font-size: 18px;">sort</span>
<span>Más recientes</span>
</button>
</div>
</div>
<!-- Filters / Tabs -->
<div class="flex flex-wrap gap-2 mb-6 border-b border-slate-200 dark:border-slate-700 pb-1">
<button class="px-4 py-2 text-sm font-semibold text-primary border-b-2 border-primary bg-primary/5 rounded-t-lg transition-colors">
                Todos (12)
            </button>
<button class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                Activos (3)
            </button>
<button class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                Pausados (1)
            </button>
<button class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
                Cerrados (8)
            </button>
</div>
<!-- Ads List -->
<div class="flex flex-col gap-4">
<!-- Card 1: Active Help -->
<div class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
<div class="p-5 flex flex-col md:flex-row gap-6">
<!-- Icon / Type Visual -->
<div class="shrink-0">
<div class="size-16 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
<span class="material-symbols-outlined" style="font-size: 32px;">cleaning_services</span>
</div>
</div>
<!-- Main Content -->
<div class="flex-1 flex flex-col justify-center gap-2">
<div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
<span class="text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 px-2 py-0.5 rounded">Ayuda Puntual</span>
<span class="text-purple-600 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded flex items-center gap-1">
<span class="material-symbols-outlined" style="font-size: 14px;">person</span> Particular
                            </span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight">Limpieza de garaje y organización de cajas</h3>
<div class="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-500 dark:text-slate-400 mt-1">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">calendar_today</span>
<span>24 Oct • 4 horas est.</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">payments</span>
<span class="font-medium text-slate-700 dark:text-slate-200">50€ Total</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">visibility</span>
<span>12 vistas • 2 candidatos</span>
</div>
</div>
</div>
<!-- Status & Actions -->
<div class="flex flex-row md:flex-col justify-between items-end gap-4 md:border-l md:border-slate-100 md:dark:border-slate-700 md:pl-6 min-w-[140px]">
<div class="w-full flex md:justify-end">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
<span class="size-2 rounded-full bg-emerald-500"></span> Activo
                            </span>
</div>
<div class="flex items-center gap-2 w-full justify-end">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors tooltip-trigger" title="Editar">
<span class="material-symbols-outlined">edit</span>
</button>
<button class="p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors" title="Pausar">
<span class="material-symbols-outlined">pause_circle</span>
</button>
<button class="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Más opciones">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
</div>
<!-- Card 2: Paused Recurring Help -->
<div class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
<div class="p-5 flex flex-col md:flex-row gap-6">
<div class="shrink-0">
<div class="size-16 rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
<span class="material-symbols-outlined" style="font-size: 32px;">elderly</span>
</div>
</div>
<div class="flex-1 flex flex-col justify-center gap-2">
<div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
<span class="text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-300 px-2 py-0.5 rounded">Servicio Recurrente</span>
<span class="text-purple-600 bg-purple-50 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5 rounded flex items-center gap-1">
<span class="material-symbols-outlined" style="font-size: 14px;">person</span> Particular
                            </span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight">Cuidado de persona mayor (fines de semana)</h3>
<div class="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-500 dark:text-slate-400 mt-1">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">event_repeat</span>
<span>Sábados y Domingos</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">payments</span>
<span class="font-medium text-slate-700 dark:text-slate-200">12€ / hora</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">visibility</span>
<span>45 vistas • 0 candidatos</span>
</div>
</div>
</div>
<div class="flex flex-row md:flex-col justify-between items-end gap-4 md:border-l md:border-slate-100 md:dark:border-slate-700 md:pl-6 min-w-[140px]">
<div class="w-full flex md:justify-end">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
<span class="size-2 rounded-full bg-amber-500"></span> Pausado
                            </span>
</div>
<div class="flex items-center gap-2 w-full justify-end">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Editar">
<span class="material-symbols-outlined">edit</span>
</button>
<button class="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-lg transition-colors" title="Reanudar">
<span class="material-symbols-outlined">play_circle</span>
</button>
<button class="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Más opciones">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
</div>
<!-- Card 3: Active Job (Company) -->
<div class="bg-white dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow">
<div class="p-5 flex flex-col md:flex-row gap-6">
<div class="shrink-0">
<div class="size-16 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-500 relative">
<!-- Company Logo placeholder -->
<div class="absolute inset-0 bg-cover bg-center rounded-xl opacity-90" data-alt="Logotipo de tienda de ropa" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCITjEvQ8448q_Q-GhsfSS1lzCdO6RR4vFG2XmW7eZdgdUgCZVSTgr1cf4WQPykerFRnGKmapv_ZuDUW3lUOgqQa8v_L2YxVLGHUz1uOJCQaD5pGQ6ZuXgHvRNiVX_iACyLb3uVHeWnhGcvDh3keMCcREyIj56K1m7V2NhdpUVDXI-FYvxS7Ml4IHYGa0vem3Iw8vR-5EFS21u6gbNJqr3n-g-G50xAL71hO5VFK9T6Vi0m44J0nK5o3UJGZ6zpQ7Leq_qMLAlwwg');"></div>
</div>
</div>
<div class="flex-1 flex flex-col justify-center gap-2">
<div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
<span class="text-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 dark:text-indigo-300 px-2 py-0.5 rounded">Empleo</span>
<span class="text-pink-600 bg-pink-50 dark:bg-pink-900/30 dark:text-pink-300 px-2 py-0.5 rounded flex items-center gap-1">
<span class="material-symbols-outlined" style="font-size: 14px;">business</span> Empresa
                            </span>
<span class="text-teal-600 dark:text-teal-400 flex items-center gap-0.5 normal-case ml-1" title="Verificado">
<span class="material-symbols-outlined filled" style="font-size: 16px;">verified</span>
<span class="text-[10px] font-bold">Verificado</span>
</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white leading-tight">Dependiente/a tienda de ropa (Media Jornada)</h3>
<div class="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-500 dark:text-slate-400 mt-1">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">schedule</span>
<span>Contrato Indefinido • Turno Tarde</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">payments</span>
<span class="font-medium text-slate-700 dark:text-slate-200">Salario según convenio</span>
</div>
<div class="flex items-center gap-1.5 text-primary">
<span class="material-symbols-outlined" style="font-size: 18px;">group</span>
<span class="font-medium">18 candidatos nuevos</span>
</div>
</div>
</div>
<div class="flex flex-row md:flex-col justify-between items-end gap-4 md:border-l md:border-slate-100 md:dark:border-slate-700 md:pl-6 min-w-[140px]">
<div class="w-full flex md:justify-end">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
<span class="size-2 rounded-full bg-emerald-500"></span> Activo
                            </span>
</div>
<div class="flex items-center gap-2 w-full justify-end">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Gestionar Candidatos">
<span class="material-symbols-outlined">description</span>
</button>
<button class="p-2 text-slate-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors" title="Pausar">
<span class="material-symbols-outlined">pause_circle</span>
</button>
<button class="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Más opciones">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
</div>
<!-- Card 4: Closed Help -->
<div class="bg-slate-50 dark:bg-slate-900/50 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
<div class="p-5 flex flex-col md:flex-row gap-6 opacity-75 hover:opacity-100 transition-opacity">
<div class="shrink-0">
<div class="size-16 rounded-xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined" style="font-size: 32px;">check_box</span>
</div>
</div>
<div class="flex-1 flex flex-col justify-center gap-2">
<div class="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
<span class="text-slate-500 bg-slate-200 dark:bg-slate-800 dark:text-slate-400 px-2 py-0.5 rounded">Ayuda Puntual</span>
<span class="text-slate-500 bg-slate-200 dark:bg-slate-800 dark:text-slate-400 px-2 py-0.5 rounded flex items-center gap-1">
<span class="material-symbols-outlined" style="font-size: 14px;">person</span> Particular
                            </span>
</div>
<h3 class="text-lg font-bold text-slate-700 dark:text-slate-300 leading-tight line-through decoration-slate-400">Mudanza de habitación pequeña</h3>
<div class="flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-400 mt-1">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">event</span>
<span>15 Sep</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined" style="font-size: 18px;">payments</span>
<span>30€ Total</span>
</div>
</div>
</div>
<div class="flex flex-row md:flex-col justify-between items-end gap-4 md:border-l md:border-slate-200 md:dark:border-slate-700 md:pl-6 min-w-[140px]">
<div class="w-full flex md:justify-end">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                Cerrado
                            </span>
</div>
<div class="flex items-center gap-2 w-full justify-end">
<button class="p-2 text-slate-400 hover:text-primary hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors" title="Ver detalle">
<span class="material-symbols-outlined">visibility</span>
</button>
<!-- Conditional Delete: Enabled because it's closed and presumably no active candidates -->
<button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Eliminar definitivamente">
<span class="material-symbols-outlined">delete</span>
</button>
</div>
</div>
</div>
</div>
</div>
<!-- Pagination / Load More -->
<div class="mt-8 flex justify-center">
<button class="text-sm font-medium text-slate-500 hover:text-primary transition-colors flex items-center gap-1">
<span>Cargar más anuncios</span>
<span class="material-symbols-outlined" style="font-size: 18px;">expand_more</span>
</button>
</div>
</main>
<!-- Simple Footer -->
<footer class="bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 mt-auto py-8">
<div class="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-sm text-slate-500 dark:text-slate-400">© 2024 YaVoy España. Todos los derechos reservados.</p>
<div class="flex gap-6">
<a class="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Ayuda</a>
<a class="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Privacidad</a>
<a class="text-sm text-slate-500 hover:text-primary transition-colors" href="#">Términos</a>
</div>
</div>
</footer>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-size: 20px; 
        }
        .material-symbols-outlined.filled {
            font-variation-settings: 'FILL' 1;
        }`;

export default function PanelGestionAyudaEmpleoMisAnuncios() {
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
