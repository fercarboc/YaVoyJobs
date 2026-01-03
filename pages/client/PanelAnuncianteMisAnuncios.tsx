import React from 'react';

const TITLE = `YaVoy - Mis Anuncios`;
const BODY_HTML = `<!-- TopNavBar -->
<div class="relative flex w-full flex-col bg-white dark:bg-[#1a2632] shadow-sm z-20">
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-slate-700 px-4 lg:px-10 py-3">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<!-- Desktop Navigation -->
<div class="hidden lg:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Ayuda</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Blog</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Mi Perfil</a>
</div>
<div class="flex gap-3 items-center">
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-md shadow-blue-500/20">
<span class="truncate">Publicar Anuncio</span>
</button>
<button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-[#e7edf3] dark:bg-slate-700 text-[#0d141b] dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full h-10 w-10 border-2 border-white dark:border-slate-600 shadow-sm cursor-pointer relative" data-alt="User profile picture showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgsIHuhCEpVjsp7bCfSB9YKiV7EaVdFQ_DS6CxPABUwCnYbWai9kdNRG3O4R1dMcHIXHUH5yz3ZVoT9t9zKAE99Ct7kH8wUQASMhkLnXFDX1W5xk4DF5Ne5RKjgCF-nRuiXALQXiiPCphGcFB-0beD8ftlG1Lvgm3v_etCGinzEx92Sa-bo-ltrVCO-JlkAgCYy72-8vypYkMPDaNaEd7G5S49-OPac42ZsaZBsasDAxf9zQpaj_sDMMgSat-NVt3eD6llM9fb9Q");'>
<div class="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-slate-800"></div>
</div>
</div>
</div>
<!-- Mobile Menu Toggle -->
<div class="lg:hidden flex items-center">
<button class="text-[#0d141b] dark:text-white p-2">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
</div>
<!-- Main Layout -->
<div class="flex-grow flex justify-center py-6 px-4 md:px-8">
<div class="flex flex-col w-full max-w-[1100px] gap-6">
<!-- Page Heading & Actions -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2">
<div class="flex flex-col gap-1">
<h1 class="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Mis Anuncios</h1>
<p class="text-slate-500 dark:text-slate-400 text-base font-normal">Gestiona tus propiedades, revisa estadísticas y actualiza estados.</p>
</div>
<button class="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 text-sm font-bold shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-[20px]">add_home</span>
<span>Nueva Propiedad</span>
</button>
</div>
<!-- Tabs & Search Container -->
<div class="flex flex-col gap-0 bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
<!-- Tabs -->
<div class="border-b border-slate-100 dark:border-slate-700 px-6 pt-2">
<div class="flex gap-8 overflow-x-auto">
<a class="flex items-center gap-2 border-b-[3px] border-primary text-primary pb-3 pt-2 whitespace-nowrap" href="#">
<span class="text-sm font-bold">Todos</span>
<span class="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-bold">12</span>
</a>
<a class="flex items-center gap-2 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-3 pt-2 whitespace-nowrap transition-colors" href="#">
<span class="text-sm font-bold">Activos</span>
<span class="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full text-xs font-bold">5</span>
</a>
<a class="flex items-center gap-2 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-3 pt-2 whitespace-nowrap transition-colors" href="#">
<span class="text-sm font-bold">Pausados</span>
<span class="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full text-xs font-bold">2</span>
</a>
<a class="flex items-center gap-2 border-b-[3px] border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 pb-3 pt-2 whitespace-nowrap transition-colors" href="#">
<span class="text-sm font-bold">Finalizados</span>
<span class="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2 py-0.5 rounded-full text-xs font-bold">5</span>
</a>
</div>
</div>
<!-- Search Bar -->
<div class="p-4 bg-slate-50 dark:bg-[#1e2a38]">
<div class="relative w-full max-w-lg">
<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
<span class="material-symbols-outlined">search</span>
</div>
<input class="block w-full p-2.5 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-white dark:bg-[#1a2632] dark:border-slate-600 dark:placeholder-slate-400 dark:text-white focus:ring-primary focus:border-primary" placeholder="Buscar por referencia, calle o zona..." type="text"/>
</div>
</div>
</div>
<!-- Ad List -->
<div class="flex flex-col gap-4">
<!-- Card 1: Active -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all flex flex-col md:flex-row gap-5">
<!-- Image -->
<div class="relative w-full md:w-64 h-48 md:h-auto shrink-0 rounded-lg overflow-hidden">
<div class="bg-center bg-no-repeat bg-cover w-full h-full transition-transform duration-500 group-hover:scale-105" data-alt="Modern bright living room with wooden floors" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQU1XrUYzbrik-gtR-o0ZeVsA32Op_FxX43_GQVp3cG-BOAPUu6AaW4m24lx5rnfpzIDNLfSwVAdtRfPjQPXUg1LFBUWZJorDptBBVIrySPLXFxrSV8xAEFdj9ZtUhmjYmAhZ-3RKEyXChyHa6gkbRwtxgqtmtlvSK4nrQNLaQuooYOojH-FRN6Qn0h3dNncrIzZoLRAal4GInXjXC1axYJp2YdGsG7LnfojtHOcf5r08tC_JfvkwVm9Uo-16S5ekTbMEfPyQtPQ");'></div>
<div class="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">Piso</div>
</div>
<!-- Content -->
<div class="flex flex-col flex-1 min-w-0">
<!-- Header -->
<div class="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white truncate leading-tight">Piso en Calle de Alcalá, Madrid</h3>
<p class="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                                    Zona: Goya, Salamanca
                                </p>
</div>
<div class="text-xl font-bold text-primary whitespace-nowrap">1.200 €<span class="text-sm font-medium text-slate-500 dark:text-slate-400">/mes</span></div>
</div>
<!-- Details -->
<div class="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 mb-3">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">square_foot</span> 85m²</span>
<span class="w-1 h-1 bg-slate-300 rounded-full"></span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bed</span> 3 hab</span>
<span class="w-1 h-1 bg-slate-300 rounded-full"></span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bathtub</span> 2 baños</span>
</div>
<!-- Badges -->
<div class="flex flex-wrap items-center gap-2 mb-auto">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                                Agencia
                            </span>
<span class="inline-flex items-center gap-1 text-xs font-bold text-primary dark:text-primary">
<span class="material-symbols-outlined filled text-[16px]">verified</span>
                                Verificado
                            </span>
</div>
<!-- Footer / Actions -->
<div class="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
<!-- Status -->
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
<span class="w-2 h-2 rounded-full bg-green-500"></span>
                                Activo
                            </div>
<!-- Toolbar -->
<div class="flex items-center gap-1">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Ver anuncio">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Editar">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-2 text-slate-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-full transition-colors" title="Pausar">
<span class="material-symbols-outlined text-[20px]">pause</span>
</button>
<div class="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
<button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors" disabled="" title="Eliminar (No disponible con solicitudes activas)">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</div>
</div>
<!-- Card 2: Paused -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all flex flex-col md:flex-row gap-5">
<!-- Image -->
<div class="relative w-full md:w-64 h-48 md:h-auto shrink-0 rounded-lg overflow-hidden opacity-90">
<div class="bg-center bg-no-repeat bg-cover w-full h-full transition-transform duration-500 group-hover:scale-105" data-alt="Compact modern bedroom with desk" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUrEtRuPVC6zdjTl-zpteC3J_JU99GrwCugUJ37KoTTvW6PM8C886qu9vy9UhhtJze1mLY6FGQOR2r_hoPH3YvMjohJclbQZaGxvW71Dzr1CGYW4ubVRRJc5Mi1jhXCYNtYV_r8oo2b83WhqIKGWirfKE_-AQJavSo9PNzSZgffe9BZcgOC8kEhDxgku7ILNhCL0XI_E78_D6Y_EVdTVsoPR-9Kp5WK2RBEP-UaZALsjoo-Jji8ZSGEPvAdSV-h6ZeCKLvNRm4iw");'></div>
<div class="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">Habitación</div>
</div>
<!-- Content -->
<div class="flex flex-col flex-1 min-w-0">
<div class="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
<div>
<h3 class="text-lg font-bold text-slate-700 dark:text-slate-300 truncate leading-tight">Habitación en Malasaña, Centro</h3>
<p class="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                                    Zona: Universidad, Centro
                                </p>
</div>
<div class="text-xl font-bold text-slate-700 dark:text-slate-300 whitespace-nowrap">450 €<span class="text-sm font-medium text-slate-400">/mes</span></div>
</div>
<div class="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">square_foot</span> 12m²</span>
<span class="w-1 h-1 bg-slate-300 rounded-full"></span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">group</span> Comp. (3)</span>
</div>
<div class="flex flex-wrap items-center gap-2 mb-auto">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-100 dark:border-purple-800">
                                Particular
                            </span>
</div>
<div class="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
<!-- Status -->
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
<span class="material-symbols-outlined text-[16px]">pause_circle</span>
                                Pausado
                            </div>
<div class="flex items-center gap-1">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Ver anuncio">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Editar">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-full transition-colors" title="Reactivar">
<span class="material-symbols-outlined text-[20px]">play_arrow</span>
</button>
<div class="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
<button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors" title="Eliminar">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</div>
</div>
<!-- Card 3: Closed -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all flex flex-col md:flex-row gap-5 opacity-75 hover:opacity-100">
<!-- Image -->
<div class="relative w-full md:w-64 h-48 md:h-auto shrink-0 rounded-lg overflow-hidden grayscale">
<div class="bg-center bg-no-repeat bg-cover w-full h-full transition-transform duration-500 group-hover:scale-105" data-alt="Commercial space with large windows" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCY8FFVgpDtqUeBVZbUTTda9j4FAFCaEOVfbXJJ8y5rUZZVr3MetZdo2cDfzoXgOGJidRX3ffiJYnopSVLd6oiXaIk1lA5gzP99rwhH9aIzuH7xxM76XaMpwAGJrhc9RUFpWqjj2EQ40gZCJNAd9oFg8v5hTH7UUZNY6jJ6JtbaP58wx20G-gn9yopPYor-dE_ZxnvBHQIhG6Vl6RBVPwzRaFK6ebtEE0AULpMVT6k8rr4OrPsE7bhNJV_fXvg94LW5tnw1FZx1Q");'></div>
<div class="absolute top-2 left-2 bg-slate-800 text-white text-xs font-bold px-2 py-1 rounded">Local</div>
</div>
<!-- Content -->
<div class="flex flex-col flex-1 min-w-0">
<div class="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
<div>
<h3 class="text-lg font-bold text-slate-600 dark:text-slate-400 truncate leading-tight line-through decoration-slate-400">Local comercial en Vallecas</h3>
<p class="text-slate-500 dark:text-slate-500 text-sm mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                                    Zona: Numancia, Puente de Vallecas
                                </p>
</div>
<div class="text-xl font-bold text-slate-500 dark:text-slate-500 whitespace-nowrap">800 €<span class="text-sm font-medium">/mes</span></div>
</div>
<div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-500 mb-3">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">square_foot</span> 110m²</span>
<span class="w-1 h-1 bg-slate-300 rounded-full"></span>
<span class="flex items-center gap-1">Pie de calle</span>
</div>
<div class="flex flex-wrap items-center gap-2 mb-auto">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                                Empresa
                            </span>
</div>
<div class="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
<!-- Status -->
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
<span class="material-symbols-outlined text-[16px]">lock</span>
                                Cerrado - Alquilado
                            </div>
<div class="flex items-center gap-1">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Ver Historial">
<span class="material-symbols-outlined text-[20px]">history</span>
</button>
<div class="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
<button class="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors" title="Archivar Definitivamente">
<span class="material-symbols-outlined text-[20px]">archive</span>
</button>
</div>
</div>
</div>
</div>
<!-- Card 4: Active -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all flex flex-col md:flex-row gap-5">
<!-- Image -->
<div class="relative w-full md:w-64 h-48 md:h-auto shrink-0 rounded-lg overflow-hidden">
<div class="bg-center bg-no-repeat bg-cover w-full h-full transition-transform duration-500 group-hover:scale-105" data-alt="Modern house exterior with garden" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPujtgUWiraAXSWhCUQUorE4v3kdrHwenK-nrARwZ1sm3Py40A3znngCMDp0JM39lNz10ebeBlffwJnXzxT2F2HVd389JtNYZJl-HO_Zja6uaNiKR5AY5XNkohjBtUY0vnPDDZQgT79evYMD8a4rjU8YqDb0A8oSAqUwLhUQDUqKcks5H6jLoh3s0DHddwDEoa7ZLHL2RxsGPEQfaEhUkVg9xg0jYkl3kvnFz_QqV5U-OfsmGYYnvonWqSKRMB4x58X1BVKzaXQA");'></div>
<div class="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded">Chalet</div>
</div>
<!-- Content -->
<div class="flex flex-col flex-1 min-w-0">
<div class="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white truncate leading-tight">Chalet Adosado en Aravaca</h3>
<p class="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                                    Zona: Moncloa - Aravaca
                                </p>
</div>
<div class="text-xl font-bold text-primary whitespace-nowrap">2.500 €<span class="text-sm font-medium text-slate-500 dark:text-slate-400">/mes</span></div>
</div>
<div class="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 mb-3">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">square_foot</span> 210m²</span>
<span class="w-1 h-1 bg-slate-300 rounded-full"></span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bed</span> 4 hab</span>
<span class="w-1 h-1 bg-slate-300 rounded-full"></span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">pool</span> Piscina</span>
</div>
<div class="flex flex-wrap items-center gap-2 mb-auto">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-100 dark:border-blue-800">
                                Agencia
                            </span>
<span class="inline-flex items-center gap-1 text-xs font-bold text-primary dark:text-primary">
<span class="material-symbols-outlined filled text-[16px]">verified</span>
                                Verificado
                            </span>
</div>
<div class="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
<!-- Status -->
<div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
<span class="w-2 h-2 rounded-full bg-green-500"></span>
                                Activo
                            </div>
<div class="flex items-center gap-1">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Ver anuncio">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors" title="Editar">
<span class="material-symbols-outlined text-[20px]">edit</span>
</button>
<button class="p-2 text-slate-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-full transition-colors" title="Pausar">
<span class="material-symbols-outlined text-[20px]">pause</span>
</button>
<div class="w-px h-4 bg-slate-300 dark:bg-slate-600 mx-1"></div>
<button class="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors" title="Eliminar">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
</div>
</div>
</div>
<!-- Pagination -->
<div class="flex justify-between items-center py-4 border-t border-slate-200 dark:border-slate-700 mt-2">
<span class="text-sm text-slate-500 dark:text-slate-400">Mostrando <span class="font-bold text-slate-900 dark:text-white">1-4</span> de <span class="font-bold text-slate-900 dark:text-white">12</span> resultados</span>
<div class="flex gap-2">
<button class="px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-not-allowed opacity-50" disabled="">Anterior</button>
<button class="px-3 py-1 text-sm border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">Siguiente</button>
</div>
</div>
</div>
</div>
<!-- Footer -->
<footer class="bg-white dark:bg-[#1a2632] border-t border-slate-200 dark:border-slate-700 py-8 mt-auto">
<div class="max-w-[1100px] mx-auto px-4 md:px-8 text-center text-sm text-slate-500 dark:text-slate-400">
<p>© 2024 YaVoy Inmobiliaria. Todos los derechos reservados.</p>
<div class="flex justify-center gap-6 mt-4">
<a class="hover:text-primary transition-colors" href="#">Privacidad</a>
<a class="hover:text-primary transition-colors" href="#">Términos</a>
<a class="hover:text-primary transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.filled {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`;

export default function PanelAnuncianteMisAnuncios() {
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
