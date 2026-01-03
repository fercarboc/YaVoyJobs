import React from 'react';

const TITLE = `Panel Gestión Candidaturas - YaVoy`;
const BODY_HTML = `<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- TopNavBar -->
<header class="sticky top-0 z-50 flex w-full flex-col border-b border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark px-4 md:px-10 py-3 shadow-sm">
<div class="flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-8 rounded bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">handshake</span>
</div>
<h2 class="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
<!-- Desktop Nav -->
<nav class="hidden md:flex flex-1 justify-end items-center gap-8">
<div class="flex items-center gap-6">
<a class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Ayuda</a>
<a class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Empleo</a>
<a class="text-sm font-medium text-primary dark:text-blue-400" href="#">Mis Anuncios</a>
<a class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Mensajes</a>
</div>
<div class="h-8 w-[1px] bg-slate-200 dark:bg-slate-700"></div>
<button class="flex items-center gap-2 group">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-9 border-2 border-slate-100 dark:border-slate-700 group-hover:border-primary transition-colors" data-alt="User profile picture placeholder with a gentle gradient" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmOQfr1r7ZuvJH02tU_knlRepFytIrDRFNqvjmuW9P4v3RloB3mQ-WUpNwaurppKKa1uPrOd8sqEwCNBpCDzZ4TrzBShIpIbYHkPtupMEXTf9W4gz32RL6h1UbF6EHU_Lij4sp23-TClCWQGqMrQSV1GaWDQvoFbkvO8qwPVL8aMRqKYKxUu7-De9D6ws3VhUZXmnckIcIPs4dwLwj0-nNl27zWYXuFX5giPn-I4M-B14Yal4fH82R1laA4z9wa7tDwWJTxAWnSA");'>
</div>
<span class="material-symbols-outlined text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">expand_more</span>
</button>
</nav>
<!-- Mobile Menu Icon -->
<button class="md:hidden text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<!-- Main Content Layout -->
<main class="flex-1 flex justify-center py-6 px-4 md:px-8 lg:px-40">
<div class="flex flex-col w-full max-w-[1024px] gap-6">
<!-- Breadcrumbs -->
<nav class="flex flex-wrap items-center gap-2 text-sm">
<a class="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 font-medium" href="#">Inicio</a>
<span class="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
<a class="text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-blue-400 font-medium" href="#">Mis Anuncios</a>
<span class="material-symbols-outlined text-[16px] text-slate-400">chevron_right</span>
<span class="text-slate-900 dark:text-white font-medium">Candidaturas</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div class="flex flex-col gap-2">
<h1 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Limpieza de Hogar (Madrid)</h1>
<p class="text-slate-500 dark:text-slate-400 text-sm">Ref. #4592 · Publicado hace 2 días</p>
</div>
<div class="flex gap-2">
<button class="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-[20px]">visibility</span>
                        Ver Anuncio
                    </button>
</div>
</div>
<!-- ActionPanel / Info Banner -->
<div class="w-full">
<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl border border-blue-100 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-800/50 p-5">
<div class="flex gap-4">
<div class="flex-shrink-0 size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
<span class="material-symbols-outlined">info</span>
</div>
<div class="flex flex-col gap-1">
<p class="text-slate-900 dark:text-white text-base font-bold">Nota Importante</p>
<p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                El chat se habilita únicamente tras una candidatura válida. Revisa los perfiles antes de contactar.
                            </p>
</div>
</div>
</div>
</div>
<!-- Filters & Chips -->
<div class="flex flex-col gap-4">
<div class="flex items-center justify-between">
<h3 class="text-lg font-semibold text-slate-900 dark:text-white">Candidatos (4)</h3>
<div class="flex items-center gap-2">
<span class="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">Ordenar por:</span>
<select class="bg-transparent text-sm font-medium text-slate-700 dark:text-slate-300 border-none focus:ring-0 cursor-pointer p-0 pr-8">
<option>Más recientes</option>
<option>Calificación</option>
</select>
</div>
</div>
<div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-900 dark:bg-white px-4 transition-colors">
<p class="text-white dark:text-slate-900 text-sm font-medium">Todas</p>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<p class="text-slate-700 dark:text-slate-300 text-sm font-medium">Recibida</p>
<span class="flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-[10px] font-bold h-5 w-5 rounded-full">2</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<p class="text-slate-700 dark:text-slate-300 text-sm font-medium">En conversación</p>
<span class="flex items-center justify-center bg-blue-100 dark:bg-blue-900 text-primary text-[10px] font-bold h-5 w-5 rounded-full">1</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<p class="text-slate-700 dark:text-slate-300 text-sm font-medium">Aceptada</p>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 px-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<p class="text-slate-700 dark:text-slate-300 text-sm font-medium">Rechazada</p>
</button>
</div>
</div>
<!-- Candidate List -->
<div class="flex flex-col gap-4">
<!-- Card 1: Recibida -->
<article class="group relative flex flex-col md:flex-row gap-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-5 shadow-sm hover:shadow-md transition-shadow">
<!-- Avatar & Name -->
<div class="flex md:w-[250px] shrink-0 gap-4">
<div class="relative">
<div class="size-14 rounded-full bg-center bg-cover bg-no-repeat" data-alt="Portrait of a female candidate named Maria" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYeC59vcUzr4JjLjXc9HioN-padKhBHNgADTb79stA-tsh30dX5HZNkKQeEsWiqVnXtPZfKdSxJrOMACUr7qU0ddcM0n4JMb5jx7kUCaa84P0Cc0KaopRbnl-kbQMd-7kiilm9otyNlI9yYFiR6o2jKmCugTgbcqVfZ9yfWX96Ygj6c38o9TOMKbtvMkMiI-BwzX76-3NxxOD-D1jxqWASpbRZRkqVp4k8GfMqsDn7CbLcYyiBs75fla-V1ML12JRxX8ZGB1Ub7w");'>
</div>
<div class="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark">
<span class="material-symbols-outlined text-primary text-[18px]" title="Verificado">verified</span>
</div>
</div>
<div class="flex flex-col justify-center">
<h3 class="text-base font-bold text-slate-900 dark:text-white">María García</h3>
<div class="flex items-center gap-1 text-yellow-500">
<span class="material-symbols-outlined text-[16px] fill-current">star</span>
<span class="text-sm font-medium text-slate-700 dark:text-slate-300">4.8</span>
<span class="text-xs text-slate-400">(24 resenas)</span>
</div>
</div>
</div>
<!-- Message Preview -->
<div class="flex flex-1 flex-col gap-2 border-l-0 md:border-l border-slate-100 dark:border-slate-700 md:pl-5">
<div class="flex justify-between items-start">
<span class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-300">
                                Recibida
                            </span>
<span class="text-xs text-slate-400">Hoy, 10:30</span>
</div>
<p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                            Hola, me interesa mucho su oferta de limpieza. Tengo 5 años de experiencia trabajando en hogares y puedo aportar referencias comprobables. Disponibilidad inmediata para...
                        </p>
</div>
<!-- Actions -->
<div class="flex flex-row md:flex-col justify-end gap-2 md:w-[180px] shrink-0 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700 pt-4 md:pt-0 md:pl-5">
<button class="w-full flex-1 md:flex-none justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-600 transition-colors">
                            Ver Perfil
                        </button>
<div class="flex gap-2">
<button class="flex h-10 w-full items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed" disabled="" title="Abrir Chat (Deshabilitado)">
<span class="material-symbols-outlined text-[20px]">chat</span>
</button>
<button class="flex h-10 w-full items-center justify-center rounded-lg border border-red-200 bg-white text-red-500 hover:bg-red-50 dark:border-red-900/30 dark:bg-surface-dark dark:hover:bg-red-900/20 transition-colors" title="Rechazar">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
</div>
</article>
<!-- Card 2: En conversación -->
<article class="group relative flex flex-col md:flex-row gap-5 rounded-xl border border-primary/30 bg-blue-50/20 dark:bg-blue-900/5 p-5 shadow-sm hover:shadow-md transition-shadow">
<div class="flex md:w-[250px] shrink-0 gap-4">
<div class="relative">
<div class="size-14 rounded-full bg-center bg-cover bg-no-repeat" data-alt="Portrait of a male candidate named Alejandro" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDk_yCAlEAvM4SBeKi5ehN4tsFSeSOi0CK6Gm3wYarvAQjC_Ee9vrho_xc4GRQQNuw5krJC4y3tZaPFLy1FLuN1PNW7lMvu5rvqWk_HMcBSVjYYbpdtFsQlzTmSkNGRoLYSE35hYdWzd3SjA8QsrZhmTBKVs2pr3ScpS5bx_mKPGDaPIwNIc9NQoo7McSy4CBfXYR2MgI-jEycTLcm2vmqYzUfT1juBX12m7T3VwaKGFuzfYz1rFMwOqHb4wPwCS9bXFu_gc5gB9w");'>
</div>
<div class="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark">
<span class="material-symbols-outlined text-primary text-[18px]">verified</span>
</div>
</div>
<div class="flex flex-col justify-center">
<h3 class="text-base font-bold text-slate-900 dark:text-white">Alejandro Ruiz</h3>
<div class="flex items-center gap-1 text-yellow-500">
<span class="material-symbols-outlined text-[16px] fill-current">star</span>
<span class="text-sm font-medium text-slate-700 dark:text-slate-300">5.0</span>
<span class="text-xs text-slate-400">(12 resenas)</span>
</div>
</div>
</div>
<div class="flex flex-1 flex-col gap-2 border-l-0 md:border-l border-slate-100 dark:border-slate-700 md:pl-5">
<div class="flex justify-between items-start">
<span class="inline-flex items-center rounded-md bg-blue-100 dark:bg-blue-900/40 px-2.5 py-0.5 text-xs font-medium text-primary dark:text-blue-300">
                                En conversación
                            </span>
<span class="text-xs text-slate-400">Ayer, 18:45</span>
</div>
<div class="flex flex-col gap-1">
<p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-1 italic">
                                "Sí, perfecto. Puedo llevar mis propios productos de limpieza si es necesario..."
                            </p>
<span class="text-xs text-primary font-medium flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">reply</span>
                                Respondiste hace 2 horas
                            </span>
</div>
</div>
<div class="flex flex-row md:flex-col justify-end gap-2 md:w-[180px] shrink-0 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700 pt-4 md:pt-0 md:pl-5">
<button class="w-full flex-1 md:flex-none justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Ver Perfil
                        </button>
<div class="flex gap-2">
<button class="flex h-10 w-full items-center justify-center rounded-lg bg-primary text-white shadow hover:bg-blue-600 transition-colors" title="Abrir Chat">
<span class="material-symbols-outlined text-[20px]">chat</span>
</button>
<button class="flex h-10 w-full items-center justify-center rounded-lg border border-green-200 bg-green-50 text-green-600 hover:bg-green-100 dark:border-green-900/30 dark:bg-green-900/10 dark:text-green-400 dark:hover:bg-green-900/20 transition-colors" title="Aceptar Candidatura">
<span class="material-symbols-outlined text-[20px]">check</span>
</button>
</div>
</div>
</article>
<!-- Card 3: Aceptada -->
<article class="group relative flex flex-col md:flex-row gap-5 rounded-xl border border-green-200 dark:border-green-900/30 bg-green-50/30 dark:bg-green-900/5 p-5 shadow-sm opacity-90 hover:opacity-100 transition-opacity">
<div class="flex md:w-[250px] shrink-0 gap-4">
<div class="relative">
<div class="size-14 rounded-full bg-center bg-cover bg-no-repeat grayscale" data-alt="Portrait of a female candidate named Elena" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC7JXy5gCZYLn_hirpaUcBNBbFGxi2p4R8N7vHc1UqH_EK3JXB8Ex7hiIpM6EybZSB7ZUkRRvqR2YL8nZzaVKrXixQIwSASGKcxX0O8o1Sq2-Cc2OCBoREtqG5brBAgS-kOstEqa_mcLbGWleWazw7nu-PhIF2yGMLP9pqfrlt6q3X93gvAzUTeo0CnNvGb9hWNjRu3n81a2C9JPoOsZuKpQQhY5vTYJYqG2LUj0HfACiE21Us6hwLchUmvRO_1WMeY25q-ipPmUw");'>
</div>
</div>
<div class="flex flex-col justify-center">
<h3 class="text-base font-bold text-slate-900 dark:text-white">Elena Vargas</h3>
<div class="flex items-center gap-1 text-slate-400">
<span class="material-symbols-outlined text-[16px]">star</span>
<span class="text-sm font-medium">Nueva</span>
</div>
</div>
</div>
<div class="flex flex-1 flex-col gap-2 border-l-0 md:border-l border-green-100 dark:border-green-900/20 md:pl-5">
<div class="flex justify-between items-start">
<span class="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/40 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-300">
                                Aceptada
                            </span>
<span class="text-xs text-slate-400">12 Oct</span>
</div>
<p class="text-sm text-slate-600 dark:text-slate-300">
                            ¡Gracias por aceptarme! ¿Cuándo podría empezar?
                        </p>
</div>
<div class="flex flex-row md:flex-col justify-end gap-2 md:w-[180px] shrink-0 border-t md:border-t-0 md:border-l border-green-100 dark:border-green-900/20 pt-4 md:pt-0 md:pl-5">
<button class="w-full flex-1 md:flex-none justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                            Ver Perfil
                        </button>
<div class="flex gap-2">
<button class="flex h-10 w-full items-center justify-center rounded-lg bg-primary text-white shadow hover:bg-blue-600 transition-colors" title="Abrir Chat">
<span class="material-symbols-outlined text-[20px]">chat</span>
</button>
<button class="flex h-10 w-full items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 hover:bg-slate-50 hover:text-slate-600 dark:border-slate-700 dark:bg-surface-dark dark:hover:bg-slate-800 transition-colors" title="Archivar">
<span class="material-symbols-outlined text-[20px]">archive</span>
</button>
</div>
</div>
</article>
<!-- Card 4: Rechazada (Example of varied state) -->
<article class="group relative flex flex-col md:flex-row gap-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 p-5 opacity-60 hover:opacity-80 transition-opacity">
<div class="flex md:w-[250px] shrink-0 gap-4">
<div class="relative">
<div class="size-14 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined text-3xl">person</span>
</div>
</div>
<div class="flex flex-col justify-center">
<h3 class="text-base font-bold text-slate-700 dark:text-slate-300">Usuario #9281</h3>
<span class="text-xs text-slate-400">Sin valoraciones</span>
</div>
</div>
<div class="flex flex-1 flex-col gap-2 border-l-0 md:border-l border-slate-100 dark:border-slate-800 md:pl-5">
<div class="flex justify-between items-start">
<span class="inline-flex items-center rounded-md bg-slate-200 dark:bg-slate-700 px-2.5 py-0.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                                Rechazada
                            </span>
<span class="text-xs text-slate-400">10 Oct</span>
</div>
<p class="text-sm text-slate-500 italic">
                            Candidatura rechazada automáticamente por no cumplir requisitos.
                        </p>
</div>
<div class="flex flex-row md:flex-col justify-end gap-2 md:w-[180px] shrink-0 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 pt-4 md:pt-0 md:pl-5">
<button class="w-full flex-1 md:flex-none justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-400 cursor-not-allowed">
                            Ver Perfil
                        </button>
<button class="w-full flex h-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors" title="Desarchivar">
<span class="material-symbols-outlined text-[20px]">unarchive</span>
</button>
</div>
</article>
</div>
<!-- Pagination -->
<div class="flex items-center justify-center py-6">
<nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">
<a class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-slate-700 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-sm">chevron_left</span>
</a>
<a aria-current="page" class="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#">1</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:text-gray-300 dark:ring-slate-700 dark:hover:bg-slate-800" href="#">2</a>
<a class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 dark:ring-slate-700 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined text-sm">chevron_right</span>
</a>
</nav>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function PanelGestionAyudaEmpleoCandidaturas() {
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
