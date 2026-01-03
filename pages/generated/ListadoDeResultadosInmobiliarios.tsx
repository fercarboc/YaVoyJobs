import React from 'react';

const TITLE = `YaVoy - Listado de Inmuebles`;
const BODY_HTML = `<!-- Navbar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div class="flex items-center gap-2">
<div class="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
<span class="material-symbols-outlined text-2xl">location_on</span>
</div>
<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</span>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Alquiler</a>
<a class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Compra</a>
<a class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Blog</a>
</nav>
<div class="flex items-center gap-4">
<button class="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300">
<span class="material-symbols-outlined">person</span>
<span>Acceder</span>
</button>
<button class="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                    Publicar anuncio
                </button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
<!-- Header Section -->
<div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
<a class="hover:underline" href="#">Madrid</a>
<span class="material-symbols-outlined text-[10px]">arrow_forward_ios</span>
<span>Alquiler</span>
</div>
<h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                    Viviendas en alquiler en Madrid
                </h1>
<p class="mt-2 text-slate-500 dark:text-slate-400">
                    145 resultados encontrados
                </p>
</div>
</div>
<!-- Filters & Sorting -->
<div class="mb-8 flex flex-col gap-4 overflow-x-auto pb-2 sm:flex-row sm:items-center sm:pb-0">
<div class="flex items-center gap-2 pr-4 sm:border-r sm:border-slate-200 dark:sm:border-slate-700">
<span class="material-symbols-outlined text-slate-400">tune</span>
<span class="whitespace-nowrap font-medium text-sm text-slate-700 dark:text-slate-300">Filtros</span>
</div>
<div class="flex gap-2">
<button class="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Más recientes
                </button>
<button class="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Precio más bajo
                </button>
<button class="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Precio más alto
                </button>
<button class="group inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary shadow-sm hover:bg-primary/10 transition-colors">
<span class="material-symbols-outlined text-base filled-icon">verified</span>
                    Verificados primero
                </button>
</div>
</div>
<!-- Property Grid -->
<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
<!-- Card 1 -->
<article class="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
<!-- Image Container -->
<div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Modern apartment interior with white walls and plant" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5YO8szbU1tBH5cflJbpryv2Vp06N2dVoE2F-l1cjrmOBxY-PuTczr70SzXQtl8kHflu-EPIqI2B4dV_0Xc-M3PaScqYJrljEP0juxyw5KZWaTpHuvq2WiwY6oz_i5isYPgTvtWjjwgcdvCBFdWUm9zXw2bm5cAmSLE7oCG37y5h5K-du2mVmzRRitS7mOyPyxtzixxdJz8BMZwBZYKZ7g5BpmMs6HzgA9OjYmAapFjfEEKFLXZlY7U30CtgGo216D2AwpYb4FUw');">
</div>
<!-- Badges Overlay -->
<div class="absolute left-3 top-3 flex gap-2">
<span class="inline-flex items-center gap-1 rounded bg-primary/90 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
<span class="material-symbols-outlined text-[14px] filled-icon">verified</span>
                            VERIFICADO
                        </span>
</div>
<!-- Favorite Button -->
<button class="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-slate-600 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
<!-- Type Badge (Bottom Left of Image) -->
<div class="absolute bottom-3 left-3">
<span class="rounded bg-slate-900/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                             Piso completo
                         </span>
</div>
</div>
<!-- Content -->
<div class="flex flex-1 flex-col p-4">
<div class="mb-1 flex items-start justify-between">
<h3 class="text-xl font-bold text-primary dark:text-blue-400">1.200 €<span class="text-sm font-normal text-slate-500 dark:text-slate-400">/mes</span></h3>
</div>
<h2 class="mb-2 line-clamp-1 text-base font-semibold text-slate-900 dark:text-white">Piso luminoso en Chamberí</h2>
<div class="mb-3 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="truncate">Calle de Santa Engracia, Madrid</span>
</div>
<div class="mb-4 flex flex-wrap gap-3 border-t border-slate-100 dark:border-slate-700 pt-3 text-sm text-slate-600 dark:text-slate-300">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">bed</span>
<span>3 habs</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">square_foot</span>
<span>85 m²</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">stairs</span>
<span>2ª ext</span>
</div>
</div>
<div class="mt-auto flex flex-col gap-3">
<div class="flex items-center justify-between">
<span class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                                Agencia
                            </span>
<span class="text-xs text-slate-400">Hace 2 horas</span>
</div>
<div class="grid grid-cols-2 gap-2">
<button class="flex items-center justify-center rounded-lg border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-3 py-2 text-sm font-semibold transition-colors hover:bg-primary/5">
                                Ver detalle
                            </button>
<button class="flex items-center justify-center rounded-lg bg-primary text-white px-3 py-2 text-sm font-bold shadow-sm hover:bg-primary-dark transition-colors">
                                Contactar
                            </button>
</div>
</div>
</div>
</article>
<!-- Card 2 -->
<article class="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
<div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Cozy bedroom with warm lighting and wooden floor" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFmWmZQwp64jDGWAoYmk8CO7G_XfWixmTdLkQEUhajhBTbhP0WCgdESickajUCKqJD3ZY_fgC-Rx18Fu5CXpTlcOjdkrFczUW6fr4F3rag6bio0ujg1BOhhhntwKJQZXOxmsy0xkHTuiLcBjUbhZXHsvCpbylL1__ar_ahVI69flBQUGICPt5MPGWjDt_QsSbMToIsUc3VbpUtENgA9H9TK0PWR5BDvwmPcoQFysQgN2nV91wN-a3NHGLpl9b2XBPKGZxXHp5aLQ');">
</div>
<button class="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-slate-600 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
<div class="absolute bottom-3 left-3">
<span class="rounded bg-slate-900/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                             Habitación
                         </span>
</div>
</div>
<div class="flex flex-1 flex-col p-4">
<div class="mb-1 flex items-start justify-between">
<h3 class="text-xl font-bold text-primary dark:text-blue-400">450 €<span class="text-sm font-normal text-slate-500 dark:text-slate-400">/mes</span></h3>
</div>
<h2 class="mb-2 line-clamp-1 text-base font-semibold text-slate-900 dark:text-white">Habitación en Malasaña</h2>
<div class="mb-3 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="truncate">Calle del Pez, Madrid</span>
</div>
<div class="mb-4 flex flex-wrap gap-3 border-t border-slate-100 dark:border-slate-700 pt-3 text-sm text-slate-600 dark:text-slate-300">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">person</span>
<span>Compañeros</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">square_foot</span>
<span>12 m²</span>
</div>
</div>
<div class="mt-auto flex flex-col gap-3">
<div class="flex items-center justify-between">
<span class="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 uppercase tracking-wide">
                                Particular
                            </span>
<span class="text-xs text-slate-400">Ayer</span>
</div>
<div class="grid grid-cols-2 gap-2">
<button class="flex items-center justify-center rounded-lg border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-3 py-2 text-sm font-semibold transition-colors hover:bg-primary/5">
                                Ver detalle
                            </button>
<button class="flex items-center justify-center rounded-lg bg-primary text-white px-3 py-2 text-sm font-bold shadow-sm hover:bg-primary-dark transition-colors">
                                Contactar
                            </button>
</div>
</div>
</div>
</article>
<!-- Card 3 -->
<article class="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
<div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Modern office space with large windows and desks" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZwmFjkdQYx9VR8ETQdztJ0OD1e_oMJRdMVBDrB82GdJWgO3TcNciGHjM1W8lxKCiK3Bsp_6WFSCdOBpMiNlaOYdQ8DAxdTzCyIYDU9mJSGDCMwBt9quLPjehLdlMSY3pLLrISq2fgH_VwOBAbqumOqtXU_DoBezokb9gKR6xL-hPOIR7WWilGYnjMJuXsIsJ2ZfcHr5BRgFVoH2lpr59QZfyIlXWo1sjWyo1SJO6nLyDUNwtbPKSziINaQpqOXXF6ThMtB7i_qQ');">
</div>
<div class="absolute left-3 top-3 flex gap-2">
<span class="inline-flex items-center gap-1 rounded bg-primary/90 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
<span class="material-symbols-outlined text-[14px] filled-icon">verified</span>
                            VERIFICADO
                        </span>
</div>
<button class="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-slate-600 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
<div class="absolute bottom-3 left-3">
<span class="rounded bg-slate-900/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                             Local / Oficina
                         </span>
</div>
</div>
<div class="flex flex-1 flex-col p-4">
<div class="mb-1 flex items-start justify-between">
<h3 class="text-xl font-bold text-primary dark:text-blue-400">2.100 €<span class="text-sm font-normal text-slate-500 dark:text-slate-400">/mes</span></h3>
</div>
<h2 class="mb-2 line-clamp-1 text-base font-semibold text-slate-900 dark:text-white">Oficina moderna en Salamanca</h2>
<div class="mb-3 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="truncate">Calle de Serrano, Madrid</span>
</div>
<div class="mb-4 flex flex-wrap gap-3 border-t border-slate-100 dark:border-slate-700 pt-3 text-sm text-slate-600 dark:text-slate-300">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">meeting_room</span>
<span>3 despachos</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">square_foot</span>
<span>120 m²</span>
</div>
</div>
<div class="mt-auto flex flex-col gap-3">
<div class="flex items-center justify-between">
<span class="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-700 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 uppercase tracking-wide">
                                Agencia
                            </span>
<span class="text-xs text-slate-400">Hoy</span>
</div>
<div class="grid grid-cols-2 gap-2">
<button class="flex items-center justify-center rounded-lg border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-3 py-2 text-sm font-semibold transition-colors hover:bg-primary/5">
                                Ver detalle
                            </button>
<button class="flex items-center justify-center rounded-lg bg-primary text-white px-3 py-2 text-sm font-bold shadow-sm hover:bg-primary-dark transition-colors">
                                Contactar
                            </button>
</div>
</div>
</div>
</article>
<!-- Card 4 -->
<article class="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
<div class="relative aspect-[4/3] w-full overflow-hidden bg-slate-200">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Bright modern living room with balcony access" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-haEO291UjbP5mmIff0JbFU-2VCeonIbgc9bkPw7B8KQ0fsbk4dmEPWD7LuP7gMMXRFit_oZmQZFhWSWNavKMKh8A55XdPOIfbRY3aiFpiHMBux44L3GHwDvKN-WAu-gTPZQGXee_8wxerM4x3myWzE_Iji-Xu-j1jC5jB0Tjdj3P-T1ysWE-U-ME4IhYAFN91mAFQ_dvrLdrmF9NooIGIM_Fz9BG9WUBiD09loseUnEqq4kD2AlGQeCR75NZxW6UlpWSXGJf_A');">
</div>
<div class="absolute left-3 top-3 flex gap-2">
<span class="inline-flex items-center gap-1 rounded bg-primary/90 px-2 py-1 text-xs font-bold text-white backdrop-blur-sm">
<span class="material-symbols-outlined text-[14px] filled-icon">verified</span>
                            VERIFICADO
                        </span>
</div>
<button class="absolute right-3 top-3 rounded-full bg-white/80 p-1.5 text-slate-600 backdrop-blur-sm hover:bg-white hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
<div class="absolute bottom-3 left-3">
<span class="rounded bg-slate-900/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                             Piso completo
                         </span>
</div>
</div>
<div class="flex flex-1 flex-col p-4">
<div class="mb-1 flex items-start justify-between">
<h3 class="text-xl font-bold text-primary dark:text-blue-400">950 €<span class="text-sm font-normal text-slate-500 dark:text-slate-400">/mes</span></h3>
</div>
<h2 class="mb-2 line-clamp-1 text-base font-semibold text-slate-900 dark:text-white">Loft reformado en La Latina</h2>
<div class="mb-3 flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span class="truncate">Plaza de la Paja, Madrid</span>
</div>
<div class="mb-4 flex flex-wrap gap-3 border-t border-slate-100 dark:border-slate-700 pt-3 text-sm text-slate-600 dark:text-slate-300">
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">bed</span>
<span>1 hab</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">square_foot</span>
<span>50 m²</span>
</div>
<div class="flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">elevator</span>
<span>Ascensor</span>
</div>
</div>
<div class="mt-auto flex flex-col gap-3">
<div class="flex items-center justify-between">
<span class="inline-flex items-center rounded-md bg-green-100 dark:bg-green-900/30 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400 uppercase tracking-wide">
                                Particular
                            </span>
<span class="text-xs text-slate-400">Hace 3 días</span>
</div>
<div class="grid grid-cols-2 gap-2">
<button class="flex items-center justify-center rounded-lg border border-primary text-primary dark:border-blue-400 dark:text-blue-400 px-3 py-2 text-sm font-semibold transition-colors hover:bg-primary/5">
                                Ver detalle
                            </button>
<button class="flex items-center justify-center rounded-lg bg-primary text-white px-3 py-2 text-sm font-bold shadow-sm hover:bg-primary-dark transition-colors">
                                Contactar
                            </button>
</div>
</div>
</div>
</article>
</div>
<!-- Pagination -->
<div class="mt-12 flex justify-center">
<nav aria-label="Pagination" class="flex items-center gap-2">
<a class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" href="#">
<span class="material-symbols-outlined">chevron_left</span>
</a>
<a aria-current="page" class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white" href="#">
                    1
                </a>
<a class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
                    2
                </a>
<a class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
                    3
                </a>
<span class="flex h-10 w-10 items-center justify-center text-slate-400">...</span>
<a class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
                    12
                </a>
<a class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 p-2 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined">chevron_right</span>
</a>
</nav>
</div>
</main>
<footer class="mt-auto border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8">
<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
<p class="text-sm text-slate-500 dark:text-slate-400">© 2024 YaVoy Inmobiliaria. Todos los derechos reservados.</p>
</div>
</footer>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .filled-icon {
            font-variation-settings: 'FILL' 1;
        }`;

export default function ListadoDeResultadosInmobiliarios() {
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
