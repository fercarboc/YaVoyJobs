import React from 'react';

const TITLE = `YaVoy Marketplace`;
const BODY_HTML = `<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] bg-white dark:bg-[#1a2632] dark:border-b-[#2a3845] px-4 md:px-10 py-3 shadow-sm">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4C12.95 4 4 12.95 4 24H24V4Z" fill="currentColor"></path>
<path d="M24 44C35.05 44 44 35.05 44 24H24V44Z" fill="currentColor"></path>
<path d="M4 24C4 35.05 12.95 44 24 44V24H4Z" fill="currentColor" fill-opacity="0.5"></path>
<path d="M44 24C44 12.95 35.05 4 24 4V24H44Z" fill="currentColor" fill-opacity="0.5"></path>
</svg>
</div>
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<nav class="hidden md:flex items-center gap-9">
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Inicio</a>
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Servicios</a>
<a class="text-primary text-sm font-bold leading-normal transition-colors" href="#">Marketplace</a>
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Contacto</a>
</nav>
</div>
<div class="flex items-center gap-4">
<div class="hidden sm:flex relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
<input class="h-10 rounded-full bg-slate-100 dark:bg-slate-800 border-none pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary w-48 lg:w-64 transition-all" placeholder="Buscar..." type="text"/>
</div>
<button class="bg-gray-100 dark:bg-slate-800 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors relative">
<span class="material-symbols-outlined text-gray-600 dark:text-gray-300">shopping_cart</span>
<span class="absolute top-0 right-0 size-2.5 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-slate-800 shadow-sm cursor-pointer" data-alt="User profile placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzUrYAmu2uHb2PVAxiUIRQ8omy31cWw4mLUd4kH4WRX5uSiAjQxaltzDlk0JE5GPi8pOprsOkz7BLhP9r2RDRc-7w6Qp4ELWYGTLW6b5x9c83-ARkizPoaysbOHOmufGlkIYxJVssJqwKlJ-JM8cZrKvZ1JwQdt1mbrzBaFWI-at4yFCtg2UHQ3qfmy-wKruUXNOf1HTq22yqlZxiTNSH2pk83mPPus21nzCAzGiMVzHrmrGHpsWwWmsJT_D8d723CJgSzFksqwQ");'></div>
</div>
</header>
<!-- Hero Section -->
<div class="w-full bg-white dark:bg-[#1a2632]">
<div class="layout-content-container flex flex-col max-w-[1200px] mx-auto">
<div class="@container">
<div class="flex flex-col-reverse gap-6 px-4 py-10 md:py-16 @[864px]:flex-row @[864px]:items-center">
<div class="flex flex-col gap-6 flex-1 @[864px]:pr-10">
<div class="flex flex-col gap-3 text-left">
<span class="text-primary font-bold tracking-wider uppercase text-xs">Tu barrio online</span>
<h1 class="text-[#0d141b] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                                    El Mercado de YaVoy
                                </h1>
<h2 class="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed">
                                    Conectamos vecinos con productores locales. Compra lo mejor de tu barrio o haz crecer tu negocio con nuestra plataforma.
                                </h2>
</div>
<div class="flex flex-wrap gap-3 mt-2">
<button class="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold shadow-lg shadow-blue-500/30">
<span class="material-symbols-outlined mr-2">shopping_bag</span>
<span>Quiero Comprar</span>
</button>
<button class="flex items-center justify-center rounded-lg h-12 px-6 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-[#0d141b] dark:text-white text-base font-bold">
<span class="material-symbols-outlined mr-2">storefront</span>
<span>Quiero Vender</span>
</button>
</div>
</div>
<div class="w-full flex-1 aspect-video rounded-xl overflow-hidden shadow-2xl relative group">
<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<div class="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105" data-alt="Collage of fresh vegetables and local products in a market" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAW2Ri0giP5cszBJI4mghJ4o9zGTHY_SDKmfhqu8NjFHrnbxpAMHNtbvLIEaOC06D6mdhGWBpTCM8ObQDzi2mfhXiCnzR6UJI7_s8PRcQtgl269T7TX8d-mXY-GIsi5YRx5QdAMkkI75h2-oZ1SYL5QstzJnjbSrXDZllS3tBCJP0SnREgy01Z2FoHr1RUlYYAXmEGsvGcQ1JEISDJc3IJEz7Wqyucu8qHGa0FyUhd02967UK9ULyH9IDyW4Cx25PUGWGU9RV6k6Q");'></div>
<div class="absolute bottom-4 left-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold flex items-center gap-1">
<span class="material-symbols-outlined text-primary text-sm">location_on</span>
<span data-location="Madrid, España">Madrid, España</span>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Warning & Info Banner -->
<div class="w-full bg-amber-50 dark:bg-amber-900/20 border-y border-amber-100 dark:border-amber-800/30">
<div class="max-w-[1200px] mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-amber-900 dark:text-amber-100">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-400">verified_user</span>
<span>Pagos 100% Seguros</span>
</div>
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-400">local_shipping</span>
<span>Envío local en &lt; 2h</span>
</div>
<div class="flex items-center gap-2 font-medium">
<span class="material-symbols-outlined text-red-500">18_up_rating</span>
<span>Venta de alcohol prohibida a menores</span>
</div>
</div>
</div>
<!-- Controls Section: Search, Filters, Toggle -->
<div class="sticky top-[73px] z-40 bg-white/95 dark:bg-[#1a2632]/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-700">
<div class="max-w-[1200px] mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 items-center justify-between">
<!-- Category Chips -->
<div class="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide mask-fade">
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 text-sm font-medium transition-transform hover:scale-105">
                        Todo
                    </button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-4 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-[18px]">bakery_dining</span>
                        Alimentación
                    </button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-4 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-[18px]">medication</span>
                        Farmacia
                    </button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-4 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-[18px]">wine_bar</span>
                        Bebidas (+18)
                    </button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 px-4 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-[18px]">card_giftcard</span>
                        Regalos
                    </button>
</div>
<!-- Toggle Delivery/Pickup -->
<div class="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex shrink-0">
<label class="cursor-pointer px-4 py-1.5 rounded-md text-sm font-medium transition-all has-[:checked]:bg-white dark:has-[:checked]:bg-slate-600 has-[:checked]:text-primary has-[:checked]:shadow-sm text-slate-500 dark:text-slate-400">
<input checked="" class="hidden" name="delivery_type" type="radio"/>
<span>A domicilio</span>
</label>
<label class="cursor-pointer px-4 py-1.5 rounded-md text-sm font-medium transition-all has-[:checked]:bg-white dark:has-[:checked]:bg-slate-600 has-[:checked]:text-primary has-[:checked]:shadow-sm text-slate-500 dark:text-slate-400">
<input class="hidden" name="delivery_type" type="radio"/>
<span>Recogida</span>
</label>
</div>
</div>
</div>
<!-- Main Marketplace Content -->
<main class="max-w-[1200px] mx-auto px-4 py-8 w-full flex-grow">
<div class="flex items-end justify-between mb-6">
<h2 class="text-2xl font-bold text-[#0d141b] dark:text-white">Productos Destacados</h2>
<div class="flex gap-2">
<button class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined">filter_list</span>
</button>
<button class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400">
<span class="material-symbols-outlined">sort</span>
</button>
</div>
</div>
<!-- Products Grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
<!-- Product Card 1 -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
<div class="relative aspect-[4/3] overflow-hidden">
<div class="absolute top-2 left-2 z-10 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Orgánico</div>
<div class="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110" data-alt="Fresh sourdough bread on a wooden table" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiT4aquRo7d5fRd0Z8uH1bv-l7VqCYTzx1jbhlmVuSeXAy28RHo1t5erh4uQR7oXDx-UcZRf9tFWhCWRPXCwpdY7IZPKRmJMF1EZ6lL5gfsh51-LNS49mJ1gdVxTYyVnSnrGhYRa2cNvuJR3caumAo7YoG2j9JTeUaqnif-2Vras4z0IwIN_RJF2hyKDrgo-W9h2iYdIrmgWrRVplsEhYFRRy7Zj-spXmfcvm3NAYMzvPB0seqPlMrFyJ7IhfpshmXo3tQAqMdUQ");'></div>
<button class="absolute bottom-2 right-2 size-8 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="p-4 flex flex-col flex-grow">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-slate-400 text-[16px]">store</span>
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Panadería La Artesana</span>
</div>
<h3 class="text-base font-bold text-[#0d141b] dark:text-white mb-1 line-clamp-2">Pan de Masa Madre (800g)</h3>
<div class="mt-auto flex items-end justify-between">
<div>
<span class="text-lg font-black text-primary">3,50 €</span>
</div>
<button class="size-8 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
</div>
</div>
<!-- Product Card 2 -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
<div class="relative aspect-[4/3] overflow-hidden">
<div class="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110" data-alt="Selection of gourmet cheeses on a board" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrjhzqCJohDm7IlV4iPmw7DnYQePfQ59fubCADc1DW-hjGqafiZ6RRCRt2p4m3A1L4i9Tf6p2WYST7eZYglySK5anEjKkdplqfh-AsvKrMKtzBieeBpu0EPgsMo24sD7862BcYPNq29NTtHKnSQVebbJMmV4b2XYrB2chPfpRsmCyXANNKhMZqnhYpJGq8JAi8UmYt7NqgvbC2LSPKXsXrNzQsGcnJA0-WutwxNwDr8uP5-Oy64hZePGkd9HO1cJg1tnPZytJouw");'></div>
<button class="absolute bottom-2 right-2 size-8 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="p-4 flex flex-col flex-grow">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-slate-400 text-[16px]">store</span>
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Ultramarinos Pepe</span>
</div>
<h3 class="text-base font-bold text-[#0d141b] dark:text-white mb-1 line-clamp-2">Queso Manchego Curado</h3>
<div class="mt-auto flex items-end justify-between">
<div>
<span class="text-lg font-black text-primary">12,90 €</span>
<span class="text-xs text-slate-400">/ kg</span>
</div>
<button class="size-8 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
</div>
</div>
<!-- Product Card 3 (+18) -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl border border-red-100 dark:border-red-900/30 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col relative">
<div class="relative aspect-[4/3] overflow-hidden">
<div class="absolute top-2 left-2 z-10 bg-black/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide flex items-center gap-1">
<span class="material-symbols-outlined text-[12px] text-red-500">18_up_rating</span>
                            +18
                        </div>
<div class="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110" data-alt="Red wine bottle with glass" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAn5nA8UJlPIp3duH3nkixoaXUMEoBtkavuJ6WJ0MQ37tPFuYlCZGtq_YoxigeL9e1l51SGgH9sfIetDRsJtpxK1LdlpRMLNd7N9BodNODN2KnrLEYki3xR1CXhP4SsZme9_dQgCs1nnDsSETrdw9Gr0MX8-pIcVW-oZ7iAVENOpDuVAeVggAfJkh9o5Nv6zxUvIdJIti8hRfBu55S_45XtOQuPrsOTL62AWI7uKGT4uoEKLXHmXnd26Od4cusdgLm-mJg5MFnmeg");'></div>
</div>
<div class="p-4 flex flex-col flex-grow">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-slate-400 text-[16px]">store</span>
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Bodega Central</span>
</div>
<h3 class="text-base font-bold text-[#0d141b] dark:text-white mb-1 line-clamp-2">Vino Tinto Rioja Reserva</h3>
<div class="mt-auto flex items-end justify-between">
<div>
<span class="text-lg font-black text-primary">18,50 €</span>
</div>
<button class="size-8 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors" onclick="alert('Confirma que eres mayor de 18 años para añadir este producto.')">
<span class="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
</div>
</div>
<!-- Product Card 4 -->
<div class="group bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
<div class="relative aspect-[4/3] overflow-hidden">
<div class="absolute top-2 left-2 z-10 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Oferta</div>
<div class="w-full h-full bg-center bg-cover bg-no-repeat transition-transform duration-500 group-hover:scale-110" data-alt="Fresh oranges in a basket" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSzbQuBHvMK1aGIfo7phxU9kE09P_L-cbKFarG80cle5BdwSV7qNSvl8s-wKW08rh12vWP7N-IqpABCBWPL8Y82NR3zb8602yJom9CgL4lM3l9nNwY_EpStE_A_Q6OuDdkCGOq9UfL16ILe5ui0gzgSf3zj14mzA_pfdt7Ga9VAo0OWRpS4t5fmN6InbCB5efUEQxWZToPGLpHd-OW8Jhtp_wNc_GG-6gsl0YdDiOoa0c-lv_iC5HsWzNzmgUltau68R7F9yK4ww");'></div>
<button class="absolute bottom-2 right-2 size-8 rounded-full bg-white dark:bg-slate-800 shadow-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
<span class="material-symbols-outlined text-[20px]">favorite</span>
</button>
</div>
<div class="p-4 flex flex-col flex-grow">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-slate-400 text-[16px]">store</span>
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium truncate">Frutería El Huerta</span>
</div>
<h3 class="text-base font-bold text-[#0d141b] dark:text-white mb-1 line-clamp-2">Naranjas de Valencia (Malla 3kg)</h3>
<div class="mt-auto flex items-end justify-between">
<div>
<span class="text-lg font-black text-primary">4,99 €</span>
<span class="text-xs line-through text-slate-400 ml-1">6,50 €</span>
</div>
<button class="size-8 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors">
<span class="material-symbols-outlined text-[20px]">add</span>
</button>
</div>
</div>
</div>
</div>
<!-- Pagination -->
<div class="flex justify-center mt-12">
<nav class="flex items-center gap-2">
<button class="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-lg shadow-blue-500/20">1</button>
<button class="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
<button class="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
<span class="text-slate-400 px-2">...</span>
<button class="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</nav>
</div>
</main>
<!-- Vendor CTA Section -->
<section class="bg-[#101922] text-white py-16 px-4">
<div class="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center">
<div class="flex-1 space-y-6">
<div class="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-wider">
                        Para Negocios Locales
                    </div>
<h2 class="text-3xl md:text-4xl font-black leading-tight">¿Tienes una tienda? <br/>Digitaliza tu barrio.</h2>
<p class="text-slate-400 text-lg">Únete a YaVoy Marketplace. Gestiona tu catálogo, recibe pedidos online y aumenta tus ventas sin complicaciones técnicas.</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div class="flex items-start gap-3">
<div class="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary">store</span>
</div>
<div>
<h4 class="font-bold text-white">Catálogo Digital</h4>
<p class="text-sm text-slate-400">Sube tus productos fácilmente.</p>
</div>
</div>
<div class="flex items-start gap-3">
<div class="size-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<span class="material-symbols-outlined text-primary">schedule</span>
</div>
<div>
<h4 class="font-bold text-white">Reservas y Recogida</h4>
<p class="text-sm text-slate-400">Gestiona horarios de entrega.</p>
</div>
</div>
</div>
<button class="mt-4 bg-white text-[#101922] hover:bg-slate-200 font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center gap-2">
                        Registrar mi Negocio
                        <span class="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div class="flex-1 w-full max-w-md">
<div class="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm relative overflow-hidden">
<!-- Decorative bg elements -->
<div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
<div class="relative z-10 space-y-4">
<div class="flex justify-between items-center mb-6">
<h3 class="font-bold text-lg">Panel de Proveedor</h3>
<div class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
<!-- Mock Dashboard Item -->
<div class="bg-[#1a2632] p-4 rounded-xl border border-white/10 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="p-2 bg-blue-500/20 rounded-lg text-blue-400">
<span class="material-symbols-outlined">shopping_bag</span>
</div>
<div>
<div class="text-sm font-bold">Nuevo Pedido #2093</div>
<div class="text-xs text-slate-400">Hace 5 min • 2 artículos</div>
</div>
</div>
<button class="text-xs bg-primary hover:bg-primary-dark px-3 py-1.5 rounded-md font-medium transition-colors">Ver</button>
</div>
<!-- Mock Dashboard Item 2 -->
<div class="bg-[#1a2632] p-4 rounded-xl border border-white/10 flex items-center justify-between opacity-70">
<div class="flex items-center gap-3">
<div class="p-2 bg-purple-500/20 rounded-lg text-purple-400">
<span class="material-symbols-outlined">inventory_2</span>
</div>
<div>
<div class="text-sm font-bold">Stock Bajo: Leche</div>
<div class="text-xs text-slate-400">Quedan 3 unidades</div>
</div>
</div>
<button class="text-xs border border-white/20 hover:bg-white/5 px-3 py-1.5 rounded-md font-medium transition-colors">Reponer</button>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Legal Disclaimer / Footer -->
<footer class="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-10 pb-6">
<div class="max-w-[1200px] mx-auto px-4">
<!-- Intermediary Disclaimer -->
<div class="bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 p-4 rounded-lg mb-8 text-xs text-slate-500 dark:text-slate-400 text-justify">
<strong>AVISO LEGAL:</strong> YaVoy actúa exclusivamente como plataforma de intermediación tecnológica entre los Usuarios y los Proveedores locales. YaVoy no es el vendedor de los productos ofrecidos en el Marketplace, ni se hace responsable de la calidad, estado, legalidad o seguridad de los mismos. La responsabilidad sobre los productos, incluyendo aquellos regulados o sujetos a restricciones de edad (+18 años para alcohol y tabaco), recae única y exclusivamente sobre el Comercio o Proveedor que realiza la venta. Al utilizar este servicio, el Usuario declara ser mayor de edad en caso de adquirir productos restringidos.
                </div>
<div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<div class="flex items-center gap-2">
<div class="size-6 text-slate-400">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M24 4C12.95 4 4 12.95 4 24H24V4Z" fill="currentColor"></path>
<path d="M24 44C35.05 44 44 35.05 44 24H24V44Z" fill="currentColor"></path>
<path d="M4 24C4 35.05 12.95 44 24 44V24H4Z" fill="currentColor" fill-opacity="0.5"></path>
<path d="M44 24C44 12.95 35.05 4 24 4V24H44Z" fill="currentColor" fill-opacity="0.5"></path>
</svg>
</div>
<span class="font-bold">YaVoy España © 2023</span>
</div>
<div class="flex gap-6">
<a class="hover:text-primary transition-colors" href="#">Términos de Uso</a>
<a class="hover:text-primary transition-colors" href="#">Política de Privacidad</a>
<a class="hover:text-primary transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>
</div>`;
const EXTRA_CSS = `body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }`;

export default function Marketplace() {
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
