import React from 'react';

const TITLE = `Panel Anunciante - Perfil | YaVoy`;
const BODY_HTML = `<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-md">
<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div class="flex items-center gap-2">
<div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
<span class="material-symbols-outlined text-xl">real_estate_agent</span>
</div>
<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</span>
</div>
<nav class="hidden md:flex flex-1 justify-end gap-8 items-center">
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Mis Anuncios</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Mensajes</a>
<a class="text-sm font-bold text-primary" href="#">Perfil</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Ayuda</a>
<div class="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
<a class="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">logout</span>
<span>Cerrar Sesión</span>
</a>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-slate-200 dark:border-slate-700 shadow-sm" data-alt="User profile avatar placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3mFfc_JpQett2lzNcrK_j7-BB4hujzZHYBTstbqs7LwXEfDmZUxRbL5XkKWtVHKqfzNP8tyvd22AUAoUB6H5AIFqe-4KJNCiYESWRj902cm4DkWh9DB9AXNFuG32Vo-NGOgrmMfPOSbHtgk3m3B1ACpxtGgdoIT5Xq1tx5nPPs-PsfDJuKh7kGIgt7a9ypSD-7vKusUg1Eb5vy8MVf3Fy1TRt7kmlvaQLgIZx2gDgGw7c5bWUTfmvgZegcK9pnrojgJpJ-TCP-w");'></div>
</nav>
<!-- Mobile Menu Icon (Placeholder) -->
<button class="md:hidden p-2 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow container mx-auto px-4 py-8 max-w-5xl">
<!-- Page Heading -->
<div class="mb-8">
<h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Perfil del Anunciante</h1>
<p class="text-slate-500 dark:text-slate-400">Gestiona tu identidad y verifica tu cuenta para generar mayor confianza en los compradores.</p>
</div>
<!-- Main Card Container -->
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mb-8">
<!-- Profile Header Section -->
<div class="p-6 md:p-8 border-b border-slate-100 dark:border-slate-800">
<div class="flex flex-col md:flex-row gap-6 md:items-start justify-between">
<div class="flex gap-5 items-start">
<div class="relative group">
<div class="bg-center bg-no-repeat bg-cover rounded-full h-24 w-24 md:h-28 md:w-28 border-4 border-slate-50 dark:border-slate-800 shadow-md" data-alt="Real estate agency logo placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBmrP1Aoff97fMID0gwBcNXrs3C-vHRGwN8edCpAlr-g1QwLqrw2YIXtjDalrz2HnR4BUdMGPjG1nuTKM7oaeZG1Xob2AWLpilbGorGAeDeBst1d_SZZcgsoc9pLOwC95d84ayxjx4kIYVX4AhEE5vKmTyUAb0Lp5ujUKsQfUHa_y__sIqsLAbwMHN9tbZ0WetNZ2L-s2j8PVbwyiEyi0_1ofAhhIb_VPqMUAplF0xsFWlk98b6AHNZFRKzKgrMYa1Q6oQqmibLw");'></div>
<button class="absolute bottom-1 right-1 bg-white dark:bg-slate-700 p-1.5 rounded-full border border-slate-200 dark:border-slate-600 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-sm text-slate-600 dark:text-slate-300">edit</span>
</button>
</div>
<div class="flex flex-col pt-2">
<h2 class="text-2xl font-bold text-slate-900 dark:text-white leading-tight">Inmobiliaria Los Pinos S.L.</h2>
<div class="flex flex-wrap items-center gap-2 mt-2">
<span class="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                                    Agencia
                                </span>
<span class="inline-flex items-center gap-1 rounded-full bg-amber-50 dark:bg-amber-900/30 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:text-amber-300 ring-1 ring-inset ring-amber-600/20">
<span class="material-symbols-outlined text-[14px] filled">gpp_maybe</span> No Verificado
                                </span>
</div>
</div>
</div>
<div class="flex flex-col w-full md:w-auto gap-3 pt-2">
<button class="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 text-white px-5 py-2.5 text-sm font-semibold shadow-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-full md:w-auto">
<span class="material-symbols-outlined text-[20px]">verified_user</span>
                            Solicitar verificación
                        </button>
<p class="text-xs text-slate-400 dark:text-slate-500 text-center max-w-[200px] mx-auto md:mx-0">
                            Verifica tu identidad para destacar tus anuncios.
                        </p>
</div>
</div>
</div>
<!-- Description List / Contact Info -->
<div class="px-6 py-4 md:px-8">
<div class="flex items-center gap-2 mb-6 mt-2">
<span class="material-symbols-outlined text-primary">contact_page</span>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Datos de Contacto</h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
<!-- Item 1 -->
<div class="flex flex-col border-b border-slate-100 dark:border-slate-800 pb-4 md:border-none md:pb-0">
<dt class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Tipo de Anunciante</dt>
<dd class="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-[20px]">business_center</span>
                            Agencia Inmobiliaria
                        </dd>
</div>
<!-- Item 2 -->
<div class="flex flex-col border-b border-slate-100 dark:border-slate-800 pb-4 md:border-none md:pb-0">
<dt class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Email de Contacto</dt>
<dd class="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-[20px]">mail</span>
                            contacto@***.com
                        </dd>
</div>
<!-- Item 3 -->
<div class="flex flex-col border-b border-slate-100 dark:border-slate-800 pb-4 md:border-none md:pb-0">
<dt class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Teléfono</dt>
<dd class="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-[20px]">phone</span>
                            +34 6** *** 789
                        </dd>
</div>
<!-- Item 4 -->
<div class="flex flex-col">
<dt class="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Ubicación</dt>
<dd class="text-base font-semibold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400 text-[20px]">location_on</span>
                            Madrid, España
                        </dd>
</div>
</div>
</div>
<div class="h-6"></div> <!-- Spacer inside card -->
</div>
<!-- Legal Disclaimer Section -->
<div class="rounded-xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 p-6">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-slate-500">info</span>
<h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Información Legal Importante</h3>
</div>
<ul class="space-y-3">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-slate-400 text-[18px] mt-0.5">gavel</span>
<span class="text-sm text-slate-600 dark:text-slate-300">YaVoy no es agencia inmobiliaria. Actuamos únicamente como plataforma de publicación.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-slate-400 text-[18px] mt-0.5">handshake</span>
<span class="text-sm text-slate-600 dark:text-slate-300">El cierre de la operación depende exclusivamente del anunciante y del interesado.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-slate-400 text-[18px] mt-0.5">assignment_late</span>
<span class="text-sm text-slate-600 dark:text-slate-300">La información publicada es responsabilidad del anunciante. YaVoy no verifica la exactitud de los datos introducidos.</span>
</li>
</ul>
</div>
</main>
<!-- Simple Footer -->
<footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-8 mt-auto">
<div class="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500 dark:text-slate-400">
<p>© 2023 YaVoy España. Todos los derechos reservados.</p>
</div>
</footer>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`;

export default function PanelAnunciantePerfil() {
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
