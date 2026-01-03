import React from 'react';

const TITLE = `Consulta Inmobiliaria - YaVoy`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-10 py-3 relative z-50">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">real_estate_agent</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="hidden lg:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-6">
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Alquiler</a>
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Venta</a>
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Compartir</a>
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Blog</a>
</div>
<div class="flex gap-2">
<button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
<span class="truncate">Publicar anuncio</span>
</button>
<button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-[#e7edf3] dark:bg-slate-800 text-[#0d141b] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span class="truncate">Iniciar sesión</span>
</button>
</div>
</div>
<button class="lg:hidden p-2 text-slate-900 dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<!-- Sticky Search Bar -->
<div class="sticky top-0 z-40 w-full bg-white dark:bg-slate-900 border-b border-[#e7edf3] dark:border-slate-800 shadow-sm py-3 px-4 lg:px-10">
<form class="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-3 items-center">
<div class="grid grid-cols-2 lg:grid-cols-5 gap-3 w-full lg:w-auto flex-1">
<!-- Ciudad -->
<div class="relative w-full">
<select class="custom-select w-full h-11 pl-4 pr-10 bg-slate-50 dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
<option disabled="" selected="" value="">Ciudad</option>
<option value="madrid">Madrid</option>
<option value="barcelona">Barcelona</option>
<option value="valencia">Valencia</option>
</select>
</div>
<!-- Distrito -->
<div class="relative w-full">
<select class="custom-select w-full h-11 pl-4 pr-10 bg-slate-50 dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
<option disabled="" selected="" value="">Distrito</option>
<option value="centro">Centro</option>
<option value="chamberi">Chamberí</option>
<option value="salamanca">Salamanca</option>
</select>
</div>
<!-- Barrio -->
<div class="relative w-full">
<select class="custom-select w-full h-11 pl-4 pr-10 bg-slate-50 dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
<option disabled="" selected="" value="">Barrio / Zona</option>
<option value="sol">Sol</option>
<option value="malasana">Malasaña</option>
<option value="lavapies">Lavapiés</option>
</select>
</div>
<!-- Tipo de Anuncio -->
<div class="relative w-full">
<select class="custom-select w-full h-11 pl-4 pr-10 bg-slate-50 dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
<option value="alquiler">Piso en alquiler</option>
<option value="venta">Piso en venta</option>
<option value="habitacion">Habitación</option>
<option value="local">Local</option>
</select>
</div>
<!-- Tipo de Anunciante -->
<div class="relative w-full col-span-2 lg:col-span-1">
<select class="custom-select w-full h-11 pl-4 pr-10 bg-slate-50 dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
<option selected="" value="">Todos los anunciantes</option>
<option value="particular">Particular</option>
<option value="empresa">Empresa</option>
<option value="agencia">Agencia</option>
</select>
</div>
</div>
<!-- Search Button -->
<button class="w-full lg:w-auto min-w-[120px] h-11 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg px-6 flex items-center justify-center gap-2 transition-colors shadow-sm" type="submit">
<span class="material-symbols-outlined text-[20px]">search</span>
<span>Buscar</span>
</button>
</form>
</div>
<!-- Main Content Layout -->
<div class="flex-1 max-w-[1400px] w-full mx-auto p-4 lg:p-6 lg:px-10">
<div class="flex flex-col lg:flex-row gap-8">
<!-- Sidebar Filters -->
<aside class="w-full lg:w-[280px] shrink-0 space-y-6">
<!-- Filters Header -->
<div class="flex items-center justify-between pb-2 border-b border-[#e7edf3] dark:border-slate-700">
<h3 class="font-bold text-slate-900 dark:text-white text-lg">Filtros</h3>
<button class="text-sm text-primary font-medium hover:underline">Borrar todo</button>
</div>
<!-- Price Range -->
<div class="space-y-3">
<p class="text-sm font-medium text-slate-900 dark:text-slate-200">Precio (€)</p>
<div class="flex items-center gap-2">
<input class="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary outline-none" placeholder="Min" type="number"/>
<span class="text-slate-400">-</span>
<input class="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary outline-none" placeholder="Max" type="number"/>
</div>
</div>
<!-- Rooms -->
<div class="space-y-3">
<p class="text-sm font-medium text-slate-900 dark:text-slate-200">Habitaciones</p>
<div class="flex gap-2">
<button class="flex-1 h-9 border border-[#cfdbe7] dark:border-slate-700 rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors bg-white dark:bg-slate-800">1</button>
<button class="flex-1 h-9 border border-[#cfdbe7] dark:border-slate-700 rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors bg-white dark:bg-slate-800">2</button>
<button class="flex-1 h-9 border border-[#cfdbe7] dark:border-slate-700 rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors bg-white dark:bg-slate-800">3</button>
<button class="flex-1 h-9 border border-[#cfdbe7] dark:border-slate-700 rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors bg-white dark:bg-slate-800">4+</button>
</div>
</div>
<!-- Surface -->
<div class="space-y-3">
<p class="text-sm font-medium text-slate-900 dark:text-slate-200">Superficie (m²)</p>
<div class="flex items-center gap-2">
<input class="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary outline-none" placeholder="Min" type="number"/>
<span class="text-slate-400">-</span>
<input class="w-full h-10 px-3 bg-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm focus:ring-primary focus:border-primary outline-none" placeholder="Max" type="number"/>
</div>
</div>
<!-- Features (Checkboxes) -->
<div class="space-y-3">
<p class="text-sm font-medium text-slate-900 dark:text-slate-200">Características</p>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="size-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<span class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200">Amueblado</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="size-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<span class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200">Ascensor</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="size-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
<span class="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200">Mascotas admitidas</span>
</label>
</div>
<!-- Duration (Only for rooms) -->
<div class="space-y-3">
<p class="text-sm font-medium text-slate-900 dark:text-slate-200">Duración estancia</p>
<div class="relative w-full">
<select class="custom-select w-full h-10 pl-3 pr-8 bg-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
<option value="indiferente">Indiferente</option>
<option value="larga">Larga estancia (+6 meses)</option>
<option value="media">Media estancia (1-6 meses)</option>
<option value="corta">Corta estancia</option>
</select>
</div>
</div>
<!-- Verified Toggle -->
<div class="py-4 border-t border-b border-[#e7edf3] dark:border-slate-700">
<label class="flex items-center justify-between cursor-pointer">
<span class="text-sm font-medium text-slate-900 dark:text-slate-200">Solo anunciantes verificados</span>
<div class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</div>
</label>
</div>
<!-- Publication Date -->
<div class="space-y-3">
<p class="text-sm font-medium text-slate-900 dark:text-slate-200">Fecha de publicación</p>
<div class="relative w-full">
<select class="custom-select w-full h-10 pl-3 pr-8 bg-white dark:bg-slate-800 border border-[#cfdbe7] dark:border-slate-700 rounded-lg text-sm text-[#0d141b] dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
<option value="any">Cualquier fecha</option>
<option value="24h">Últimas 24 horas</option>
<option value="48h">Últimas 48 horas</option>
<option value="week">Última semana</option>
</select>
</div>
</div>
</aside>
<!-- Results Column -->
<main class="flex-1 flex flex-col gap-6">
<!-- Legal Disclaimer Banner -->
<div class="flex items-start gap-3 p-4 bg-blue-50 dark:bg-slate-800/50 border border-blue-100 dark:border-slate-700 rounded-lg">
<span class="material-symbols-outlined text-primary mt-0.5 text-xl">info</span>
<p class="text-sm text-slate-700 dark:text-slate-300 leading-snug">
<strong>Aviso legal:</strong> YaVoy es una plataforma de intermediación digital. No actúa como agencia inmobiliaria ni participa en la contratación.
                    </p>
</div>
<!-- Results Header -->
<div class="flex items-center justify-between">
<h1 class="text-xl font-bold text-[#0d141b] dark:text-white">142 Pisos en alquiler en Madrid</h1>
<div class="flex items-center gap-2">
<span class="text-sm text-slate-500 dark:text-slate-400">Ordenar por:</span>
<select class="bg-transparent text-sm font-medium text-[#0d141b] dark:text-white border-none focus:ring-0 cursor-pointer pr-8">
<option>Relevancia</option>
<option>Precio: menor a mayor</option>
<option>Precio: mayor a menor</option>
<option>Más recientes</option>
</select>
</div>
</div>
<!-- Result Card 1 -->
<article class="flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-[#e7edf3] dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
<div class="relative md:w-72 h-48 md:h-auto shrink-0 overflow-hidden">
<img alt="Interior de apartamento moderno" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern apartment interior with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwWEuvQX9AUq7OG6wABna94qslegIvBTU2JsLIYrPp1te429bCE3LYjJm8bIqRYVkbVzHUyz_WOmJBBQi4GOWpbmAlyKA_WUllWOCoDqlxPoSpxP50lYCjj05I0h1j93ZP3E9KAR_cl0OkluFYbgnN0e10aCE-jXnCrRm5-K682TFMY4FvQu2AeDqwFMq3q1W8xIJHYk4Bg5L-z0Ruu-z6aMTkC1qdzKaX-IHiAflDHanHvdxA9Ri3UG9jDYyKsPNbNN_Pz2wHrQ"/>
<div class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-slate-900 shadow-sm">
                            Destacado
                        </div>
<button class="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-start mb-2">
<h2 class="text-lg font-bold text-[#0d141b] dark:text-white truncate pr-4">Ático luminoso en Chamberí</h2>
<span class="text-xl font-bold text-primary whitespace-nowrap">1.250 €/mes</span>
</div>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                            C/ Trafalgar, Madrid
                        </p>
<div class="flex items-center gap-4 text-sm text-slate-700 dark:text-slate-300 mb-4">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">bed</span>
<span>2 hab.</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">bathtub</span>
<span>1 baño</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">square_foot</span>
<span>85 m²</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">elevator</span>
<span>Ascensor</span>
</div>
</div>
<div class="mt-auto flex items-center justify-between pt-4 border-t border-[#e7edf3] dark:border-slate-800">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span class="material-symbols-outlined text-[14px]">verified</span>
</div>
<span class="text-xs font-medium text-slate-600 dark:text-slate-400">Agencia Verificada</span>
</div>
<span class="text-xs text-slate-400">Hace 2 horas</span>
</div>
</div>
</article>
<!-- Result Card 2 -->
<article class="flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-[#e7edf3] dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
<div class="relative md:w-72 h-48 md:h-auto shrink-0 overflow-hidden">
<img alt="Habitación luminosa" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Cozy bedroom with plant decorations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdP53xl9pPH9v5wZKut4OsFBdxb3N_7FL9t0d-l4lQUNSH56SUzOA0vGYG5AZYsSRDsKBFrlivwsC7_A8VwUyKdRCDPgqC1YIYDeHGbznnxv0-nH0qd0TubwDD_G7oIeq9fuFytPA83v2JpnGvmzV2PcybTEIwHaUPrtW1wdQdVaXk2Xu2ZlxJKswTXMJJrEDsdKYPkmnXQAIqDQ6appziGSH4_nC5y24SRs91d8hkwS5GJw5ZYiIqEDoNyuwjhJ5kQ6jmNTJuPw"/>
<button class="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-start mb-2">
<h2 class="text-lg font-bold text-[#0d141b] dark:text-white truncate pr-4">Piso reformado en Malasaña</h2>
<span class="text-xl font-bold text-primary whitespace-nowrap">980 €/mes</span>
</div>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                            C/ del Pez, Madrid
                        </p>
<div class="flex items-center gap-4 text-sm text-slate-700 dark:text-slate-300 mb-4">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">bed</span>
<span>1 hab.</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">bathtub</span>
<span>1 baño</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">square_foot</span>
<span>55 m²</span>
</div>
</div>
<div class="mt-auto flex items-center justify-between pt-4 border-t border-[#e7edf3] dark:border-slate-800">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500">
<span class="material-symbols-outlined text-[14px]">person</span>
</div>
<span class="text-xs font-medium text-slate-600 dark:text-slate-400">Particular</span>
</div>
<span class="text-xs text-slate-400">Ayer</span>
</div>
</div>
</article>
<!-- Result Card 3 -->
<article class="flex flex-col md:flex-row bg-white dark:bg-slate-900 border border-[#e7edf3] dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-md transition-shadow group cursor-pointer">
<div class="relative md:w-72 h-48 md:h-auto shrink-0 overflow-hidden">
<img alt="Salón amplio y moderno" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern living room with grey sofa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj9KfVB_oQ4Qxkmi2dIYcbBtVR1cE_6i10t6J0tClZRfJ1yLQ1jjUvviR06F_MLI_re6FlhxVC_u_-yeRWb9r0d9OyQWN-jzVBkpT77exdq2UmuBsZvDLh8OVn1XWr8cxPtPTMU_HA6UD94k4Doh2vU71rXNlVcUS0qmQMA5DdC3pv6VGvMp3ZdQ6KMjJfGGyikQnit1RtfDjutlRwQ7tBQU4A5pq8q05O8w3OnB0Dd9LQwmUMn1DjDThMo6JvKccneON7zIwBNQ"/>
<button class="absolute top-3 right-3 p-1.5 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="flex flex-col flex-1 p-5">
<div class="flex justify-between items-start mb-2">
<h2 class="text-lg font-bold text-[#0d141b] dark:text-white truncate pr-4">Apartamento exterior con terraza</h2>
<span class="text-xl font-bold text-primary whitespace-nowrap">1.500 €/mes</span>
</div>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                            Paseo de la Castellana, Madrid
                        </p>
<div class="flex items-center gap-4 text-sm text-slate-700 dark:text-slate-300 mb-4">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">bed</span>
<span>3 hab.</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">bathtub</span>
<span>2 baños</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">square_foot</span>
<span>110 m²</span>
</div>
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[18px] text-slate-400">deck</span>
<span>Terraza</span>
</div>
</div>
<div class="mt-auto flex items-center justify-between pt-4 border-t border-[#e7edf3] dark:border-slate-800">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span class="material-symbols-outlined text-[14px]">verified</span>
</div>
<span class="text-xs font-medium text-slate-600 dark:text-slate-400">YaVoy Premium</span>
</div>
<span class="text-xs text-slate-400">Hace 3 días</span>
</div>
</div>
</article>
<div class="flex justify-center pt-8 pb-12">
<button class="px-6 py-2 border border-[#cfdbe7] dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors font-medium">
                        Cargar más resultados
                    </button>
</div>
</main>
</div>
</div>`;
const EXTRA_CSS = `/* Custom scrollbar for sidebar if needed */
.scrollbar-hide::-webkit-scrollbar {
    display: none
    }
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none
    }
/* Custom Select arrow based on provided component */
.custom-select {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuDu4nWHo_gzRV09EIoR7rL61HDp0Nnc2bYjjEbrfJffGDuhaKF3OVYk3cwScpNHjH338hAuwml4S2keeA6RMlB4Z88_FI5P7e-Sylxf1brszIa5gCjkse1ms-sutAMg6XNBsfznYARsfEj_4vXWTUv62aXhGB9eFk39Z3g3PKZXFP-xEWtDPs2tVeBYaEpx1CgPbZF4mmYYAJIXPUGg6JCeCBXgdjSVJHdyWCeh8iEzjacSc9eMHecAhAMFtQZhnXJzWv9Izwo-TQ);
    background-position: right 1rem center;
    background-repeat: no-repeat;
    background-size: 1.25rem;
    appearance: none
    }`;

export default function ConsultaInmobiliariaBuscador() {
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
