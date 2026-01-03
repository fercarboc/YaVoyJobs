import React from 'react';

const TITLE = `YaVoy - Panel Proveedor - Catálogo Productos`;
const BODY_HTML = `<div class="flex h-screen w-full flex-col overflow-hidden">
<!-- TopNavBar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-[#2a3441] bg-white dark:bg-[#1a2632] px-6 lg:px-10 py-3 shrink-0 z-20">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 flex items-center justify-center rounded bg-primary/10 text-primary">
<span class="material-symbols-outlined text-2xl">local_shipping</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy <span class="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-1">Proveedor</span></h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Pedidos</a>
<a class="text-primary text-sm font-bold leading-normal" href="#">Catálogo</a>
<a class="text-[#0d141b] dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Perfil</a>
</div>
<button class="flex items-center justify-center rounded-lg size-10 bg-[#e7edf3] dark:bg-[#2a3441] text-[#0d141b] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-white dark:border-gray-700 shadow-sm" data-alt="Profile picture of a business owner" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA8vCCqIepMUyuv2mhYvNqlOc3dLYGZVnepO_SipzsqVXYBElvzLuHNwVCrqGgoAXpl34iQ30Q3v8bfvZy2UTJ-UxNVXQQ_BlReuWi4RStT--rZp5CKd146E7s1ODjaYpjtDvQeI8mI6jp4gvqNPlg304fbR3btVrfN2DM7MQjTPwccHoIqkOXtdUTohOnuBhml-4-7XI5rJd0LCa4TEE9j7pcsuUCRUTMZpZ79Vhc6HaI7d-fWicLE8PcCdoqhuCvzvZZnNFLuvg");'></div>
</div>
</header>
<!-- Main Content Area -->
<div class="flex-1 overflow-y-auto overflow-x-hidden">
<div class="container mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 py-6 md:py-8 flex flex-col gap-6">
<!-- Breadcrumbs -->
<nav aria-label="Breadcrumb" class="flex">
<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
<li class="inline-flex items-center">
<a class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white" href="#">
<span class="material-symbols-outlined text-[18px] mr-1">dashboard</span>
                                Dashboard
                            </a>
</li>
<li>
<div class="flex items-center">
<span class="material-symbols-outlined text-gray-400 text-sm mx-1">chevron_right</span>
<span class="text-sm font-medium text-gray-900 dark:text-white">Catálogo de Productos</span>
</div>
</li>
</ol>
</nav>
<!-- Page Heading & Main Action -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 dark:border-gray-800 pb-6">
<div class="flex flex-col gap-2">
<h1 class="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Mis Productos</h1>
<p class="text-gray-500 dark:text-gray-400 text-base font-normal">Gestiona tu inventario, precios y disponibilidad en tiempo real.</p>
</div>
<button class="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30 transition-all transform active:scale-95">
<span class="material-symbols-outlined">add</span>
<span class="text-sm font-bold tracking-wide">Añadir Producto</span>
</button>
</div>
<!-- Filters & Search Bar -->
<div class="bg-white dark:bg-[#1a2632] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col xl:flex-row gap-4 items-center justify-between">
<!-- Search -->
<div class="relative w-full xl:w-96 group">
<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
<span class="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
</div>
<input class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-[#101922] dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary transition-all" placeholder="Buscar por nombre, SKU o referencia..." required="" type="text"/>
</div>
<!-- Filter Chips -->
<div class="flex items-center gap-2 overflow-x-auto w-full xl:w-auto pb-2 xl:pb-0 scrollbar-hide">
<span class="text-xs font-semibold uppercase text-gray-400 mr-2 whitespace-nowrap">Filtrar por estado:</span>
<button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium transition-colors whitespace-nowrap">
                            Todos
                        </button>
<button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 text-sm font-medium transition-colors whitespace-nowrap">
<span class="size-2 rounded-full bg-green-500"></span> Activo
                        </button>
<button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 text-sm font-medium transition-colors whitespace-nowrap">
<span class="size-2 rounded-full bg-amber-500"></span> Pausado
                        </button>
<button class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-transparent hover:border-gray-300 dark:hover:border-gray-600 text-sm font-medium transition-colors whitespace-nowrap">
<span class="size-2 rounded-full bg-red-500"></span> Sin stock
                        </button>
</div>
</div>
<!-- Product Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
<!-- Card 1: Active -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
<div class="absolute top-3 left-3 z-10">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border border-green-200 dark:border-green-800">
                                    Activo
                                </span>
</div>
<div class="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="bg-white/90 dark:bg-black/70 backdrop-blur rounded-full p-1.5 hover:text-primary transition-colors text-gray-700 dark:text-gray-200">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
<img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" data-alt="Headphones product shot on light background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8Ih1yGDdeTFuaoAzZRtAiBaox2iPUZRoaEl8uHGieIzBqdBH4wO0-g19Voy7m7Ss6W7kdbObc_AUrS1YsQyS2sTWjAxgaKlCJy4VbU00QpE4vIvqv8ljSd9wrlUjOIh0eicGALE55WAibMiKP8OZqvSWR-Dr4B47KMSEM8-97m0ufI6vo9yV8fU3_zWtKZDrXrAwLcMYaMA_DWy_hGwvMjaCHgJVeJmZGeJRbyQjKIDpiQuWMyYMVhP4upoduAEH_VUU--cWuOA"/>
</div>
<div class="p-4 flex flex-col flex-1">
<div class="text-xs font-medium text-gray-500 mb-1">Electrónica</div>
<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Auriculares Bluetooth Sony WH-1000XM4</h3>
<div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
<span class="text-xl font-bold text-primary">279,00 €</span>
<div class="text-xs text-gray-500">Stock: 45 u.</div>
</div>
<!-- Quick Actions Overlay on Mobile/Hover -->
<div class="flex gap-2 mt-4 pt-2">
<button class="flex-1 py-1.5 text-xs font-semibold rounded bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-colors">Editar</button>
<button class="size-8 flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors" title="Pausar">
<span class="material-symbols-outlined text-[18px]">pause</span>
</button>
</div>
</div>
</div>
<!-- Card 2: Paused -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
<div class="absolute top-3 left-3 z-10">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                                    Pausado
                                </span>
</div>
<div class="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="bg-white/90 dark:bg-black/70 backdrop-blur rounded-full p-1.5 hover:text-primary transition-colors text-gray-700 dark:text-gray-200">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
<img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale-[0.5]" data-alt="Red sport sneaker product shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz5gWjCM8dieQ2hs0pfzbD0Nyo3vMKQkaqilGY_iHd5Gm3Ci7-7GPj8H68MyadXKsPOhfV_XCRY_6CNlkxe3KIWnl43ffjHWWS-7u3H4ZAhgJ5g3v3vXcW2nQap6pcLy5HBR42wfEVEvHgKmWG9ucdyUJ8-Sq1smN5TSEGA2XLtg_8G-deyF925YfpkFJKNbO0gHCa3Qu0mdxTyt8t-y9YY_puCHj8oAyrG33H58fhH0kphVuZRo4Fi1h2B1Xw-JJk52jw9t0ohg"/>
</div>
<div class="p-4 flex flex-col flex-1">
<div class="text-xs font-medium text-gray-500 mb-1">Calzado Deportivo</div>
<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Zapatillas Nike Air Max Red</h3>
<div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
<span class="text-xl font-bold text-gray-400">120,50 €</span>
<div class="text-xs text-gray-500">Stock: 12 u.</div>
</div>
<div class="flex gap-2 mt-4 pt-2">
<button class="flex-1 py-1.5 text-xs font-semibold rounded bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-colors">Editar</button>
<button class="size-8 flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-green-600 hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors" title="Activar">
<span class="material-symbols-outlined text-[18px]">play_arrow</span>
</button>
</div>
</div>
</div>
<!-- Card 3: Out of Stock -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col opacity-90">
<div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
<div class="absolute top-3 left-3 z-10">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border border-red-200 dark:border-red-800">
                                    Sin stock
                                </span>
</div>
<div class="absolute inset-0 bg-white/30 dark:bg-black/30 z-[5]"></div>
<div class="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="bg-white/90 dark:bg-black/70 backdrop-blur rounded-full p-1.5 hover:text-primary transition-colors text-gray-700 dark:text-gray-200">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
<img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" data-alt="Minimalist camera on a desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGf8G6mrA-KujOr44n9OlOTpSuhhtNAId2X1mp2l1Kesa0WYOLi6GQONpXeymWo_eggaFY6pGN9onJ1GN3u--mOAwIXYBsEOA_KrIdDU6UfrDhouw5UId958Et-hjCrzXPdkasPfMUSqNRLHPLHRICOFehJ_L7kcLjdB4nUjLEDq0FCwODUwdn18MQw1f4zo4hw8ze4xBfbmEUHr7tvRqD7pS2iXBSDbxKaoOKuYff_zN_ejpX-d3r15tsfASuXtUzpzBJ6pkqPg"/>
</div>
<div class="p-4 flex flex-col flex-1">
<div class="text-xs font-medium text-gray-500 mb-1">Fotografía</div>
<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Cámara Polaroid Instantánea</h3>
<div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
<span class="text-xl font-bold text-gray-400">99,99 €</span>
<div class="text-xs text-red-500 font-bold">Stock: 0 u.</div>
</div>
<div class="flex gap-2 mt-4 pt-2">
<button class="flex-1 py-1.5 text-xs font-semibold rounded bg-primary/10 text-primary hover:bg-primary/20 border border-primary/20 transition-colors">Reponer Stock</button>
</div>
</div>
</div>
<!-- Card 4: Active -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
<div class="absolute top-3 left-3 z-10">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border border-green-200 dark:border-green-800">
                                    Activo
                                </span>
</div>
<div class="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="bg-white/90 dark:bg-black/70 backdrop-blur rounded-full p-1.5 hover:text-primary transition-colors text-gray-700 dark:text-gray-200">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
<img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" data-alt="White smartwatch on wrist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgFExxk5nPcA42X_YeIy8qBj4GeI2kCcatvKokUFQ9QhZ-tMK9fNLELV1l46tB-O_ae75lzlAd4m858E6-FW99PXOzcPFR6sGjdpjQKiIY8l-Ww37MaqpZkaw3igNdZoN843PaodZHfQ3BJstXvAwOzsuvkPxo0DTv9eDRwahOFaeXBpYE1ND67s9rOgg75LBJMjM7eaSRvg02wn7F71dVC0u6Cw6hM8ttEUklOlWJOtwCJaKGSTwachvC-8yP8wH7b5NnSxv9Qw"/>
</div>
<div class="p-4 flex flex-col flex-1">
<div class="text-xs font-medium text-gray-500 mb-1">Accesorios</div>
<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Smartwatch FitPro v2 - Blanco</h3>
<div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
<span class="text-xl font-bold text-primary">150,00 €</span>
<div class="text-xs text-gray-500">Stock: 80 u.</div>
</div>
<div class="flex gap-2 mt-4 pt-2">
<button class="flex-1 py-1.5 text-xs font-semibold rounded bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-colors">Editar</button>
<button class="size-8 flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors" title="Pausar">
<span class="material-symbols-outlined text-[18px]">pause</span>
</button>
</div>
</div>
</div>
<!-- Card 5: Active -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div class="relative aspect-[4/3] overflow-hidden bg-gray-100">
<div class="absolute top-3 left-3 z-10">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border border-green-200 dark:border-green-800">
                                    Activo
                                </span>
</div>
<div class="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="bg-white/90 dark:bg-black/70 backdrop-blur rounded-full p-1.5 hover:text-primary transition-colors text-gray-700 dark:text-gray-200">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
<img class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" data-alt="Minimalist desk lamp" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAhfTUnUSZBNbLIHcS1kxtj6qeLGTdqHHJ7jC2GVUgGSSGdl5mp6qQV06OkgwjhTI92YEHLeUqDqv0ojI2CpphIZNa-Z8IFOSFrXP6yz_evLMpxrfE2Y1ULvamkkxNP_WJJg10CFNEXw4X430LHN_7kKv2DlQJuXsfd0cLaMrJp40CL2CntXA1fZGFUSBm4ge0Dg2_EljN5ctWqQawyV5bZd0PUGJdiEald_ZlXNiw9s-LWp5NI8EIAqlOXmPuwzjEMNyRBjEfCw"/>
</div>
<div class="p-4 flex flex-col flex-1">
<div class="text-xs font-medium text-gray-500 mb-1">Hogar</div>
<h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">Lámpara LED Escritorio Minimalista</h3>
<div class="mt-auto flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
<span class="text-xl font-bold text-primary">35,90 €</span>
<div class="text-xs text-gray-500">Stock: 200 u.</div>
</div>
<div class="flex gap-2 mt-4 pt-2">
<button class="flex-1 py-1.5 text-xs font-semibold rounded bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-colors">Editar</button>
<button class="size-8 flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 text-gray-500 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors" title="Pausar">
<span class="material-symbols-outlined text-[18px]">pause</span>
</button>
</div>
</div>
</div>
<!-- Card 6: Add New Placeholder -->
<button class="group flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-[#1a2632]/50 hover:bg-white hover:border-primary dark:hover:border-primary dark:hover:bg-[#1a2632] transition-all duration-300 min-h-[360px] cursor-pointer">
<div class="size-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-3xl">add</span>
</div>
<h3 class="text-lg font-bold text-gray-900 dark:text-white">Añadir Nuevo Producto</h3>
<p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center px-6">Sube imágenes, define precios y publica en segundos.</p>
</button>
</div>
<!-- Pagination -->
<div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-6">
<p class="text-sm text-gray-600 dark:text-gray-400">
                        Mostrando <span class="font-bold text-gray-900 dark:text-white">1-5</span> de <span class="font-bold text-gray-900 dark:text-white">45</span> productos
                    </p>
<div class="flex gap-2">
<button class="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-[#1a2632] border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed">
                            Anterior
                        </button>
<button class="flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-500 bg-white dark:bg-[#1a2632] border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-white">
                            Siguiente
                        </button>
</div>
</div>
</div>
</div>
</div>`;
const EXTRA_CSS = ``;

export default function PanelProveedorCatalogoProductos() {
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
