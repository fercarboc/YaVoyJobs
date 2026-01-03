import React from 'react';

const TITLE = `Panel Colaborador - Servicios Confirmados`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-b-gray-700 bg-white dark:bg-[#1a2634] px-4 md:px-10 py-3 shadow-sm">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="flex items-center gap-2 cursor-pointer">
<div class="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span class="material-symbols-outlined">handshake</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
</div>
<!-- Desktop Menu -->
<div class="hidden md:flex flex-1 justify-end gap-8">
<nav class="flex items-center gap-6">
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Panel</a>
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Buscar Tareas</a>
<a class="text-primary text-sm font-bold leading-normal" href="#">Mis Servicios</a>
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Perfil</a>
</nav>
<div class="flex items-center gap-4">
<button class="flex h-9 items-center justify-center rounded-lg px-4 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-sm">
<span class="truncate">Ir a modo Cliente</span>
</button>
<div class="relative group cursor-pointer">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-transparent hover:ring-primary/20 transition-all" data-alt="User profile picture of a smiling man" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuByPdd9FMLCK979-noFsvneu6LRGfnpN5Apor3NKrNh_CJwNjbYEISWGT5GMFgG6zXdafIs4-2_Th_jbpCKvAYmMvrb-aHeAsxN-KRMNqsQ8a53xelBfSE5fsOTavCqQ6CE6Bycbab8ezqJY-cbNCLcUQaYRTtQthoRDXO2mN5aBR2d459Vf-p9FYxCzI1xJBpA54J7XA6fDW9q6qxBHB7ENRGy2A4PFnWrJz-kbXYGGSpHdLBH6OEjaSK7fftO_wPG8CJQCRINCA");'>
</div>
<div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
</div>
</div>
<!-- Mobile Menu Icon -->
<div class="md:hidden flex items-center text-[#0d141b] dark:text-white">
<span class="material-symbols-outlined cursor-pointer">menu</span>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 px-4 md:px-10 py-8 flex justify-center">
<div class="flex flex-col max-w-[1200px] w-full gap-6">
<!-- Breadcrumbs -->
<nav aria-label="Breadcrumb">
<ol class="flex flex-wrap gap-2 items-center">
<li>
<a class="text-[#4c739a] hover:text-primary transition-colors text-sm font-medium" href="#">Inicio</a>
</li>
<span class="text-[#4c739a] text-sm">/</span>
<li>
<a class="text-[#4c739a] hover:text-primary transition-colors text-sm font-medium" href="#">Panel</a>
</li>
<span class="text-[#4c739a] text-sm">/</span>
<li>
<span aria-current="page" class="text-[#0d141b] dark:text-white text-sm font-medium">Servicios Confirmados</span>
</li>
</ol>
</nav>
<!-- Page Header -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#e7edf3] dark:border-gray-700 pb-6">
<div class="flex flex-col gap-2">
<h1 class="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                            Servicios Confirmados
                        </h1>
<p class="text-[#4c739a] dark:text-gray-400 text-base font-normal max-w-2xl">
                            Gestiona tus trabajos aceptados. Aquí puedes ver los detalles del cliente, la ubicación y marcar las tareas como finalizadas una vez completadas.
                        </p>
</div>
<div class="flex gap-2">
<button class="flex items-center gap-2 h-10 px-4 rounded-lg bg-white dark:bg-[#1a2634] border border-[#cfdbe7] dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-[#0d141b] dark:text-white text-sm font-medium shadow-sm">
<span class="material-symbols-outlined text-[20px]">calendar_month</span>
<span>Ver Calendario</span>
</button>
</div>
</div>
<!-- Filters & Search -->
<div class="flex flex-col md:flex-row justify-between gap-4 items-center bg-white dark:bg-[#1a2634] p-2 rounded-xl shadow-sm border border-[#e7edf3] dark:border-gray-700">
<div class="flex gap-2 overflow-x-auto w-full md:w-auto p-2 md:p-0 no-scrollbar">
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] dark:bg-gray-700 px-4 hover:bg-[#dbe4ef] transition-colors group">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">Todos</span>
<span class="bg-white dark:bg-gray-600 px-1.5 rounded text-xs font-bold text-[#4c739a] dark:text-gray-300">12</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent px-4 hover:bg-[#f0f4f8] dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-[#cfdbe7] dark:hover:border-gray-600">
<span class="text-[#4c739a] dark:text-gray-400 text-sm font-medium">Pendiente</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary text-white px-4 shadow-sm">
<span class="text-sm font-bold">Confirmado</span>
<span class="bg-white/20 px-1.5 rounded text-xs font-bold text-white">4</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent px-4 hover:bg-[#f0f4f8] dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-[#cfdbe7] dark:hover:border-gray-600">
<span class="text-[#4c739a] dark:text-gray-400 text-sm font-medium">Finalizado</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-transparent px-4 hover:bg-[#f0f4f8] dark:hover:bg-gray-800 transition-colors border border-transparent hover:border-[#cfdbe7] dark:hover:border-gray-600">
<span class="text-[#4c739a] dark:text-gray-400 text-sm font-medium">Cancelado</span>
</button>
</div>
<div class="relative w-full md:w-64 px-2 md:px-0 md:mr-2">
<span class="material-symbols-outlined absolute left-4 md:left-2 top-1/2 -translate-y-1/2 text-[#93adc8] text-[20px]">search</span>
<input class="w-full h-9 pl-9 pr-4 rounded-lg bg-[#f6f7f8] dark:bg-gray-800 border-none text-sm text-[#0d141b] dark:text-white placeholder-[#93adc8] focus:ring-2 focus:ring-primary/50" placeholder="Buscar por cliente o servicio..." type="text"/>
</div>
</div>
<!-- Services Table -->
<div class="overflow-hidden rounded-xl border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-[#1a2634] shadow-sm">
<div class="overflow-x-auto">
<table class="w-full min-w-[800px]">
<thead class="bg-[#f8fafc] dark:bg-[#15202b] border-b border-[#e7edf3] dark:border-gray-700">
<tr>
<th class="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-gray-400 uppercase tracking-wider">Servicio / Anuncio</th>
<th class="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-gray-400 uppercase tracking-wider">Anunciante</th>
<th class="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-gray-400 uppercase tracking-wider">Fecha y Hora</th>
<th class="px-6 py-4 text-left text-xs font-semibold text-[#4c739a] dark:text-gray-400 uppercase tracking-wider">Estado</th>
<th class="px-6 py-4 text-right text-xs font-semibold text-[#4c739a] dark:text-gray-400 uppercase tracking-wider">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-[#e7edf3] dark:divide-gray-700">
<!-- Row 1: Confirmed -->
<tr class="hover:bg-gray-50 dark:hover:bg-[#1f2d3b] transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="flex shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 size-10">
<span class="material-symbols-outlined">cleaning_services</span>
</div>
<div class="flex flex-col">
<p class="text-[#0d141b] dark:text-white text-sm font-semibold">Limpieza general de piso</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Hogar y Limpieza</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-gray-200" data-alt="Portrait of Ana Garcia" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOZicvXYapjzrB13PWV-5ry-g8WGHliWfpi5PO0q6qci_d3eNKshVuCFaSrn75X5bfjoxa8EXBWeJWoPO_S8G6PmsvCb5vZmTkdEpOWRCwdOHYnXNyP3uiwrWyhmIj5xSWvRtjAKrYUSdBvJQC2nqtzw3PZhZvHf-a5CFjNBeJyOMYSvowTPOeAn5X-Zyu0sdFipVE-P0RvhXXVXIo6_deCmXLdwHr58WwjbAIfeAOss1Blt7uReXWtmWxHZsArOIr2Sx3nwPAbg");'></div>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">Ana García</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">star</span> 4.8
                                                </span>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">18 Oct 2023</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs">10:00 - 14:00</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
<span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                                            Confirmado
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
<button class="flex items-center justify-center h-8 px-3 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-colors shadow-sm gap-1">
<span class="material-symbols-outlined text-[16px]">check</span>
<span class="hidden lg:inline">Realizado</span>
</button>
<button class="flex items-center justify-center h-8 w-8 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="flex items-center justify-center h-8 w-8 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors" title="Más opciones">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
<!-- Row 2: Pending -->
<tr class="hover:bg-gray-50 dark:hover:bg-[#1f2d3b] transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="flex shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 size-10">
<span class="material-symbols-outlined">construction</span>
</div>
<div class="flex flex-col">
<p class="text-[#0d141b] dark:text-white text-sm font-semibold">Montaje de muebles IKEA</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Bricolaje</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-gray-200" data-alt="Portrait of Pedro Lopez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcsy-Hy4yVw3Vt5bIfe16SmypSnsTZ3_RSJmmFXOtSbkyUBGXq_7kTOOQvyDPPSE2b_UbI5RkGBr6YE5azn1g_zt31PunmhrXZu2RVRPvODNAyq2SyVtGYI0XM6G_BZkg4toTmlIuraZC33KzGk_VN5f-bNfTtHYF0c4Ev63FO70pb2mRRqZ-gz7e5MAYdg3i6WoQwdhaPq19ZMn1truk04NCmET4eKoXsSKq-yWg0nxqbVJulGkm1PpjCgP9md7JMzVB7Nf45uA");'></div>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">Pedro López</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">star</span> 5.0
                                                </span>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">20 Oct 2023</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs">16:30 - 18:00</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-orange-50 dark:bg-orange-900/20 px-2.5 py-1 text-xs font-semibold text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
<span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                            Pendiente
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
<button class="flex items-center justify-center h-8 px-3 rounded-lg bg-white border border-[#cfdbe7] hover:bg-gray-50 text-[#0d141b] text-xs font-medium transition-colors gap-1">
<span class="material-symbols-outlined text-[16px]">chat</span>
<span class="hidden lg:inline">Contactar</span>
</button>
<button class="flex items-center justify-center h-8 w-8 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</td>
</tr>
<!-- Row 3: Finished -->
<tr class="hover:bg-gray-50 dark:hover:bg-[#1f2d3b] transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="flex shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400 size-10">
<span class="material-symbols-outlined">pets</span>
</div>
<div class="flex flex-col">
<p class="text-[#0d141b] dark:text-white text-sm font-semibold">Paseo de perros (1h)</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Mascotas</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-gray-200" data-alt="Portrait of Lucia Gil" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBm22KmjqVvxwI6fsm8cDrHncnQ-4KEJrMu0qYWETKBrshL1zACL6TWtD8oogMJuJCeHpnzdxd6vKuIXYExWyhJtlJ7tvSenhUMa7QKtO84HxvA3_GdtorpwaQTA1JkNlPwkDQO4tUR8ycvenT_MKusvuzd9nwkP22UlMD1T12HiAhIl9ZoexWMwTlylu91XEgXjI_O8-jdZ08YBDtim0be51Sp_jjiFrjQYEFn-_IvW7kRQefNH8ngVAmngZrqI4Go0Oor1Aoyvw");'></div>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">Lucía Gil</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">star</span> 4.5
                                                </span>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">15 Oct 2023</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs">09:00 - 10:00</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-900/20 px-2.5 py-1 text-xs font-semibold text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800">
<span class="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                                            Finalizado
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
<button class="flex items-center justify-center h-8 px-3 rounded-lg bg-white border border-[#cfdbe7] hover:bg-gray-50 text-[#0d141b] text-xs font-medium transition-colors gap-1">
<span class="material-symbols-outlined text-[16px]">receipt_long</span>
<span class="hidden lg:inline">Ver Recibo</span>
</button>
<button class="flex items-center justify-center h-8 w-8 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</td>
</tr>
<!-- Row 4: Confirmed -->
<tr class="hover:bg-gray-50 dark:hover:bg-[#1f2d3b] transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="flex shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 size-10">
<span class="material-symbols-outlined">school</span>
</div>
<div class="flex flex-col">
<p class="text-[#0d141b] dark:text-white text-sm font-semibold">Clases de Matemáticas</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Educación</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-gray-200" data-alt="Portrait of Carlos Ruiz" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjur4pgJDwpbYa1I35Z7K0Qb32IRCCq-c0XumZIV7O6ySWv6wBRJ0FkHU4s2911Etmqk-x12-WuyZ4p-L5gGQvM2rO9dJ1o1q7YmlfITM3LYWuiaBpdMTSnrrDcNK7BrLOR_6CC9AOwDXSAcUz-LKLTmR7wwWRFP0ItkdsKatHy61eunTgh398Qw1lf4JTVU0BDtsO5jC6CEISTmGpcdzZHm3jVC2f6fQ59ojlp7cpEMHFx5jfIW1e9zudKm_pHkAzr8KhBuc5YA");'></div>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">Carlos Ruiz</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">star</span> 4.9
                                                </span>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium">22 Oct 2023</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs">17:00 - 18:30</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
<span class="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400"></span>
                                            Confirmado
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
<button class="flex items-center justify-center h-8 px-3 rounded-lg bg-primary hover:bg-primary-dark text-white text-xs font-bold transition-colors shadow-sm gap-1">
<span class="material-symbols-outlined text-[16px]">check</span>
<span class="hidden lg:inline">Realizado</span>
</button>
<button class="flex items-center justify-center h-8 w-8 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="flex items-center justify-center h-8 w-8 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors" title="Más opciones">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
<!-- Row 5: Canceled -->
<tr class="hover:bg-gray-50 dark:hover:bg-[#1f2d3b] transition-colors group opacity-75">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="flex shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 size-10">
<span class="material-symbols-outlined">plumbing</span>
</div>
<div class="flex flex-col">
<p class="text-[#0d141b] dark:text-white text-sm font-semibold text-gray-500">Reparación de grifo</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Fontanería</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-8 border border-gray-200 grayscale" data-alt="Portrait of Marta Sanz" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVw1MVB4vyoC8FXRYB9I6Za1bMTeMAZ6VANjo4Pn8XAwjMyvtz-maov0XZev2Zkkf1O9Ca7ou9QXzlmSK97bcde4nN1c34yHFmR1oqRO4IfjbaNOa_9wARTzqqFWmovO-kj_Bu5mRQLn1N2_sw-knaaf2nk_igvBUE1IUzmqfV1rG6bvy1Ug7cNi-ut1qTKd8WObe-MqDOEs7Iy4cHIdfkbfciW8S9SJlzkz54rLbiWwVLiV8RPAz4eGCcceWJPMlspslHRJ5c1A");'></div>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium text-gray-500">Marta Sanz</span>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white text-sm font-medium text-gray-500">12 Oct 2023</span>
<span class="text-[#4c739a] dark:text-gray-400 text-xs">11:00</span>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-red-50 dark:bg-red-900/20 px-2.5 py-1 text-xs font-semibold text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
<span class="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                            Cancelado
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
<button class="flex items-center justify-center h-8 w-8 rounded-lg text-[#4c739a] hover:bg-[#e7edf3] dark:hover:bg-gray-700 transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="flex items-center justify-between border-t border-[#e7edf3] dark:border-gray-700 bg-[#f8fafc] dark:bg-[#15202b] px-6 py-3">
<p class="text-xs text-[#4c739a] dark:text-gray-400">Mostrando 1-5 de 24 servicios</p>
<div class="flex gap-2">
<button class="flex items-center justify-center rounded-lg border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-[#1a2634] px-3 py-1 text-xs font-medium text-[#0d141b] dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50" disabled="">
                                Anterior
                            </button>
<button class="flex items-center justify-center rounded-lg border border-[#cfdbe7] dark:border-gray-600 bg-white dark:bg-[#1a2634] px-3 py-1 text-xs font-medium text-[#0d141b] dark:text-white shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700">
                                Siguiente
                            </button>
</div>
</div>
</div>
<!-- Footer Hint -->
<div class="flex justify-center mt-4">
<p class="text-xs text-[#93adc8] text-center max-w-md">
                        ¿Necesitas ayuda con algún servicio? <a class="text-primary hover:underline font-medium" href="#">Contacta con soporte</a>
</p>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function PanelColaboradorServiciosConfirmados() {
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
