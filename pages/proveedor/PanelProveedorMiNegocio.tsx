import React from 'react';

const TITLE = `Panel Proveedor - Mi Negocio | YaVoy`;
const BODY_HTML = `<!-- Top Navigation -->
<div class="w-full bg-white dark:bg-slate-800 border-b border-[#e7edf3] dark:border-slate-700 sticky top-0 z-50">
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<header class="flex items-center justify-between whitespace-nowrap py-3">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<!-- Desktop Navigation -->
<div class="hidden md:flex flex-1 justify-end gap-8 items-center">
<div class="flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Inicio</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Pedidos</a>
<a class="text-primary text-sm font-bold leading-normal relative after:content-[''] after:absolute after:-bottom-[18px] after:left-0 after:w-full after:h-[2px] after:bg-primary" href="#">Mi Negocio</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Cuenta</a>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border border-slate-200 cursor-pointer" data-alt="User profile avatar showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmaaBBVLAEAL2L05ihbzF6I6IETNvhk9BBTc2Y71mprQefpwPVOEMjD2ePNfyLT7sKa61nSBrUGeCZmfWig_e59aROOt8Ms20GGNU6REwdXaMw08CsP0SCrnYgBqfE6WOr6TV7l-cOTjYAa4hJGwEvSUF_uYVb7F0OPMded1KVWHkkl2K91wvO65Ts_bY_eL1_8H7_x9SZkshdqwFxr7CvN93Lw9yL2u0d6x13UOKUcgT91ptYTXKeTdVhpqMkq79V4AtMLomOLg");'>
</div>
</div>
<!-- Mobile Menu Button (Placeholder) -->
<div class="md:hidden text-slate-900 dark:text-white">
<span class="material-symbols-outlined cursor-pointer">menu</span>
</div>
</header>
</div>
</div>
<!-- Main Content -->
<main class="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<!-- Breadcrumbs -->
<div class="flex flex-wrap gap-2 items-center mb-6 text-sm">
<a class="text-slate-500 hover:text-primary font-medium" href="#">Inicio</a>
<span class="text-slate-400">/</span>
<a class="text-slate-500 hover:text-primary font-medium" href="#">Panel Proveedor</a>
<span class="text-slate-400">/</span>
<span class="text-slate-900 dark:text-slate-100 font-medium">Mi Negocio</span>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Left Column: Business Profile (2/3 width) -->
<div class="lg:col-span-2 flex flex-col gap-6">
<!-- Business Info Card -->
<div class="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
<!-- Cover Image -->
<div class="h-48 w-full bg-cover bg-center relative" data-alt="Close up of delicious tapas dishes on a wooden table" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwk0xKkPW9NKJW1lH4XxNEHljG-trH-akvCwmElrffPANI2SmmHclha4yLjomx3Lw1IuhDfhEKUp3dHSE_bCPve4h61GxyKwc2OhitC7p072jM66w_lNABnec-8aEXuDfriI8dvIgyEhnDkHiRMRv0LQ64KGkZXNnio6Y1VHeIYopVK6wSauE_k8E2BldpoS1bfc7vLoZj5ZpAiObxgqKXEdxun5QoovQ_pxQleBeXv3cj34P5wfQYf1oXyV1N9ZGB8W5Upa75Vw");'>
<button class="absolute bottom-3 right-3 bg-black/50 hover:bg-black/70 text-white px-3 py-1.5 rounded text-xs font-medium backdrop-blur-sm flex items-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[16px]">photo_camera</span>
                            Cambiar portada
                        </button>
</div>
<div class="px-6 pb-6 relative">
<!-- Profile Avatar (Overlapping) -->
<div class="flex justify-between items-end -mt-12 mb-4">
<div class="relative">
<div class="bg-center bg-no-repeat bg-white dark:bg-slate-700 bg-cover rounded-lg h-24 w-24 border-4 border-white dark:border-slate-800 shadow-md" data-alt="Restaurant logo showing a stylized chef hat" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlhLkisfA3YpgLXnJ1TJorCpozD4JAB0J6b1mP2BEcgY47gZNXncwIS-pq99bRBRzD95YJ7GJTagGIwqF777Q_StbDWSJDlPUrCkCAjgCg_hxdqFKqcx2rR-IwkZCQdrBA5PixbH6G8L9b2v8DRqABkrRyeG47_FwsWNT6triaFUCwKZSVyTnWN_6Y5CuCIB3QOWPuDLfN7ZbYXhVtDoCowv6xc1uFaxrzHZoR5ZFooky9IRgIWteeu6n_gJZeTQeicNo7l4CyFQ");'></div>
</div>
<button class="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-[#e7edf3] hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-[#0d141b] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors gap-2">
<span class="material-symbols-outlined text-[18px]">edit</span>
<span class="truncate">Editar Perfil</span>
</button>
</div>
<!-- Business Details -->
<div class="flex flex-col gap-1">
<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
<h1 class="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Restaurante Casa Pepe</h1>
<!-- Badges -->
<div class="flex flex-wrap gap-2">
<div class="flex h-6 items-center justify-center gap-x-1.5 rounded-full bg-primary/10 pl-2 pr-3 border border-primary/20">
<span class="material-symbols-outlined text-primary text-[16px]">storefront</span>
<p class="text-primary text-xs font-semibold leading-normal">Proveedor local</p>
</div>
<div class="flex h-6 items-center justify-center gap-x-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 pl-2 pr-3 border border-emerald-200 dark:border-emerald-800">
<span class="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-[16px]">verified</span>
<p class="text-emerald-700 dark:text-emerald-400 text-xs font-semibold leading-normal">Verificado</p>
</div>
</div>
</div>
<p class="text-slate-500 dark:text-slate-400 text-base font-normal">Restaurante Español • Tapas • Bebidas</p>
<div class="flex items-center gap-1.5 mt-2 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<p class="text-sm font-medium">Calle Mayor 12, <span class="text-slate-900 dark:text-white font-semibold">Barrio de las Letras</span>, Madrid</p>
</div>
</div>
<!-- Mobile Edit Button -->
<button class="mt-6 w-full sm:hidden flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e7edf3] text-[#0d141b] text-sm font-bold leading-normal tracking-[0.015em]">
                            Editar Perfil
                        </button>
</div>
</div>
<!-- Description Section -->
<div class="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Sobre nosotros</h3>
</div>
<div class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed space-y-4">
<p>
                            Fundado en 1980, Casa Pepe se ha convertido en un referente del tapeo en el histórico Barrio de las Letras. Nos especializamos en cocina tradicional castellana con un toque moderno, utilizando siempre ingredientes de proximidad.
                        </p>
<p>
                            Nuestro local ofrece un ambiente acogedor ideal para cenas de grupo, eventos familiares o simplemente para disfrutar de una caña bien tirada después del trabajo. ¡Te esperamos con las mejores bravas de Madrid!
                        </p>
</div>
</div>
<!-- Photos Section -->
<div class="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-6">
<div class="flex justify-between items-center mb-4">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Fotos del local</h3>
<button class="text-primary text-sm font-bold hover:underline">Gestionar fotos</button>
</div>
<div class="grid grid-cols-2 md:grid-cols-4 gap-3">
<!-- Photo 1 -->
<div class="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group cursor-pointer">
<div class="bg-cover bg-center w-full h-full transition-transform duration-300 group-hover:scale-105" data-alt="Interior of the restaurant with wooden tables and warm lighting" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBMcXjFErFq5PfmQ0x01Lp82bQwWY7X2IqMRlBMC1xYxsMYsPpcLuT65ih3TwsytRC-2alUALl59rSpovOAeRHZqSPZQ6nVFGQ0ss8yWDhgrCjLm3SdthspM7TdPmCeoDEkeI4gQ9LvY0cQyc4xOX6x_HzaAkdr5E6RIrAz-iXMFXVwtAiEZuYXssLdB-pompCcxXZoKToEj5OZWF43dwdo5OjRcOgbvkJiM7FgfbMRdVAfmlJmd-2uQ5IelAMGbWox1BVKK61wNw");'></div>
</div>
<!-- Photo 2 -->
<div class="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group cursor-pointer">
<div class="bg-cover bg-center w-full h-full transition-transform duration-300 group-hover:scale-105" data-alt="Chef preparing a dish in the kitchen" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB20aEA166LXB6EnO5EOJjRkVGt8Zq2yXS-EXa7WnpGOGRWHkfBvI9iovouQZQc2kap95Cla8cdJ3UM-QJl3GCiSB_79gVWbNLP0XYq3CBuuplukzfoAhqVE7V4XmTpfDX6b6IkYkYRWekEdBIuzqaOJoBHkAjMjBPPGLYjv4264LX7Hz1kDHuuF41BckZuBG9Fe0jTdrty6KRUDMSHmYf2p0VmHmVs5WA1_rKHeRBkStOIkLB5oWnBDeYxfWS1oty5bgeuwLLNfw");'></div>
</div>
<!-- Photo 3 -->
<div class="aspect-square bg-slate-100 rounded-lg overflow-hidden relative group cursor-pointer">
<div class="bg-cover bg-center w-full h-full transition-transform duration-300 group-hover:scale-105" data-alt="Close up of a plate of spanish jamon iberico" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBQTNjREd8PZQoPERXHINixT_q58pyI25iKfLRjLXk0ssPsF9kqRdFcbtZgUmPpvRJ9aZKy6KDhLg5QtSTZ2K2j2TyhkMadYh2BlsHFzcXWlIv7pOvdeoxaQQGQWvBbUOOnXQ8su2lPep_JJ3pOeBf7VDzFFr_NmUxzk5vCO2Sef1iAgF9fpYvJdQv7uteTNkbilMIvWGdcA5UMH2wDfw1Uq9BSh3GDujbUNt76yaJrKd3KIH0xueJHo8axAOzmGV3JHG-BTVaJUA");'></div>
</div>
<!-- Add Photo Button -->
<button class="aspect-square bg-slate-50 dark:bg-slate-700/50 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-600 flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all">
<span class="material-symbols-outlined text-3xl">add_a_photo</span>
<span class="text-xs font-semibold">Añadir</span>
</button>
</div>
</div>
</div>
<!-- Right Column: Actions & Status (1/3 width) -->
<div class="lg:col-span-1 flex flex-col gap-6">
<!-- Verification Status Card -->
<div class="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
<div class="p-5 border-b border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800">
<div class="flex items-start gap-4">
<div class="bg-emerald-100 dark:bg-emerald-900/40 rounded-full p-2 shrink-0">
<span class="material-symbols-outlined text-emerald-600 dark:text-emerald-400">check_circle</span>
</div>
<div class="flex flex-col gap-1">
<p class="text-[#0d141b] dark:text-white text-base font-bold leading-tight">Cuenta Verificada</p>
<p class="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Tu negocio está verificado y es visible para los clientes en la plataforma.</p>
</div>
</div>
</div>
<div class="p-4 bg-slate-50 dark:bg-slate-800/50">
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-medium leading-normal transition-colors gap-2">
<span class="material-symbols-outlined text-[18px]">visibility</span>
<span class="truncate">Ver listado público</span>
</button>
</div>
</div>
<!-- Quick Actions / Support -->
<div class="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-5">
<h3 class="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Gestión</h3>
<div class="flex flex-col gap-2">
<a class="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group" href="#">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary">schedule</span>
<span class="text-slate-700 dark:text-slate-300 text-sm font-medium">Horarios de apertura</span>
</div>
<span class="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
</a>
<a class="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group" href="#">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary">menu_book</span>
<span class="text-slate-700 dark:text-slate-300 text-sm font-medium">Gestionar Menú</span>
</div>
<span class="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
</a>
<a class="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group" href="#">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-400 group-hover:text-primary">reviews</span>
<span class="text-slate-700 dark:text-slate-300 text-sm font-medium">Reseñas de clientes</span>
</div>
<span class="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
</a>
</div>
<div class="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
<a class="flex items-center justify-center gap-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 text-sm font-medium transition-colors" href="#">
<span class="material-symbols-outlined text-[18px]">help</span>
                            Ayuda y Soporte
                        </a>
</div>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = `body { font-family: 'Inter', sans-serif; }`;

export default function PanelProveedorMiNegocio() {
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
