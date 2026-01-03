import React from 'react';

const TITLE = `YaVoy Admin - Gestión de Usuarios`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-gray-800 bg-white dark:bg-[#1A2633] px-10 py-3 sticky top-0 z-50">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 text-primary flex items-center justify-center">
<!-- Logo Icon -->
<span class="material-symbols-outlined text-3xl">local_taxi</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy Admin</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<nav class="hidden md:flex items-center gap-9">
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal" href="#">Dashboard</a>
<a class="text-primary text-sm font-bold leading-normal border-b-2 border-primary pb-0.5" href="#">Usuarios</a>
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal" href="#">Pagos</a>
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal" href="#">Configuración</a>
</nav>
<div class="flex items-center gap-4">
<button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-[#e7edf3] dark:bg-gray-700 text-[#0d141b] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-gray-600 shadow-sm cursor-pointer" data-alt="Admin user profile picture showing a smiling professional" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdT1FH_8Dz6I6ZFjNk4wuhL1SSTKveMiSj4EZ7J34Qgc2X83QeZB9KdTqQS3CcILFlpyXdBM-uGAc2N5gJMIi22_yVEGmWYy3uEsXBS7o06l60nT6M6jp4MzrX1mLdAQUftGucl8GxIR4Hdh2cwhn6jKFrB-RhoAKv0uZw3Jo1bJDFn_OwPF2AecZhKOQhICKqIQ2fNLNkDTkRrxcSIRuxptYGgvbBFTDTphwaHjKyqxEG8NKwrLoP8L1z6QKBivzjaWeIlUNsWw");'></div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 px-4 sm:px-10 py-8 max-w-[1440px] mx-auto w-full">
<!-- Page Heading -->
<div class="flex flex-wrap justify-between items-center gap-4 mb-6">
<div>
<h1 class="text-[#0d141b] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Gestión de Usuarios</h1>
<p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Administra cuentas, permisos y estados de los usuarios de la plataforma.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-gray-800 border border-[#e7edf3] dark:border-gray-700 text-[#0d141b] dark:text-white text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
<span class="material-symbols-outlined text-[20px]">file_download</span>
<span class="hidden sm:inline">Exportar CSV</span>
</button>
<button class="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors">
<span class="material-symbols-outlined text-[20px]">add</span>
<span>Nuevo Usuario</span>
</button>
</div>
</div>
<!-- Warning Alert (Custom component based on context) -->
<div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 mb-8 rounded-r-lg shadow-sm flex items-start gap-3">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-500 mt-0.5">warning</span>
<div>
<p class="font-bold text-amber-800 dark:text-amber-200 text-sm">Aviso Importante</p>
<p class="text-amber-700 dark:text-amber-300 text-sm mt-0.5">El bloqueo impide el uso de la plataforma, no cancela acuerdos privados.</p>
</div>
</div>
<!-- Filters Section -->
<div class="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-[#e7edf3] dark:border-gray-800 p-5 mb-6">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
<!-- Search Bar -->
<div class="lg:col-span-1">
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Buscar</label>
<div class="relative flex items-center w-full rounded-lg h-10 bg-[#f6f8fa] dark:bg-gray-700 overflow-hidden border border-transparent focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
<div class="pl-3 pr-2 text-gray-400">
<span class="material-symbols-outlined text-[20px]">search</span>
</div>
<input class="w-full bg-transparent border-none text-sm text-[#0d141b] dark:text-white placeholder:text-gray-400 focus:ring-0 px-0 h-full" placeholder="Nombre, email o ID..."/>
</div>
</div>
<!-- Select: Tipo de Usuario -->
<div class="lg:col-span-1">
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Tipo de usuario</label>
<div class="relative">
<select class="appearance-none w-full h-10 pl-3 pr-10 rounded-lg bg-[#f6f8fa] dark:bg-gray-700 border-none text-sm text-[#0d141b] dark:text-white focus:ring-1 focus:ring-primary cursor-pointer">
<option value="all">Todos</option>
<option value="driver">Conductor</option>
<option value="passenger">Pasajero</option>
<option value="admin">Administrador</option>
</select>
<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
<span class="material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
</div>
<!-- Select: Estado -->
<div class="lg:col-span-1">
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Estado</label>
<div class="relative">
<select class="appearance-none w-full h-10 pl-3 pr-10 rounded-lg bg-[#f6f8fa] dark:bg-gray-700 border-none text-sm text-[#0d141b] dark:text-white focus:ring-1 focus:ring-primary cursor-pointer">
<option value="all">Todos</option>
<option value="active">Activo</option>
<option value="blocked">Bloqueado</option>
<option value="pending">Pendiente</option>
</select>
<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
<span class="material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
</div>
<!-- Select: Verificación -->
<div class="lg:col-span-1">
<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Verificación</label>
<div class="relative">
<select class="appearance-none w-full h-10 pl-3 pr-10 rounded-lg bg-[#f6f8fa] dark:bg-gray-700 border-none text-sm text-[#0d141b] dark:text-white focus:ring-1 focus:ring-primary cursor-pointer">
<option value="all">Todos</option>
<option value="verified">Verificado</option>
<option value="unverified">No verificado</option>
</select>
<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
<span class="material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
</div>
</div>
<!-- Filters Footer -->
<div class="flex justify-end mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
<button class="text-sm font-medium text-gray-500 hover:text-primary transition-colors mr-4">Limpiar filtros</button>
<button class="bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm font-bold transition-colors">Aplicar Filtros</button>
</div>
</div>
<!-- Data Table Card -->
<div class="bg-white dark:bg-[#1A2633] rounded-xl shadow-sm border border-[#e7edf3] dark:border-gray-800 overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
<th class="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Usuario</th>
<th class="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Tipo</th>
<th class="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Estado</th>
<th class="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">Verificación</th>
<th class="px-6 py-4 font-semibold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-100 dark:divide-gray-700">
<!-- Row 1 -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center bg-no-repeat" data-alt="Profile picture of Carlos Mendez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB9IPl20iMhGyOIxoD-Gb-1xyoEfHeLHucV6GT0VyMvJjlgT1vv8tJqt3HY4KNfF_1-nfmPHRYC2Gy-djGq0Y2WtEIV5Jcc09gLrLP_Ounrl9Fpx4kg_7dFqm44byHTCax-XkChMnyUeaeA_eVS7eiqXecduDgNTF06DpMvTUYy1ixPSw9spgcP2TjfGIBFK4TIZoI3E0bN7D0SmfslYc-FeLPR29DO6qHv21bVju1mwmDxLYfs_78ftl86dhjlNIu4ArFGLzjpJw");'></div>
<div>
<p class="font-semibold text-sm text-[#0d141b] dark:text-white">Carlos Méndez</p>
<p class="text-xs text-gray-500 dark:text-gray-400">carlos.m@example.com</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
<span class="material-symbols-outlined text-[14px]">drive_eta</span>
                                    Conductor
                                </span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800">
<span class="size-1.5 rounded-full bg-emerald-500"></span>
                                    Activo
                                </span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-sm">
<span class="material-symbols-outlined text-[18px]">verified</span>
                                    Verificado
                                </div>
</td>
<td class="px-6 py-4 text-right">
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<!-- Row 2 -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center bg-no-repeat bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-sm">
                                        MR
                                    </div>
<div>
<p class="font-semibold text-sm text-[#0d141b] dark:text-white">María Rodríguez</p>
<p class="text-xs text-gray-500 dark:text-gray-400">maria.rodriguez@example.com</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
<span class="material-symbols-outlined text-[14px]">person</span>
                                    Pasajero
                                </span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300 border border-rose-100 dark:border-rose-800">
<span class="size-1.5 rounded-full bg-rose-500"></span>
                                    Bloqueado
                                </span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 font-medium text-sm">
<span class="material-symbols-outlined text-[18px]">gpp_maybe</span>
                                    No verificado
                                </div>
</td>
<td class="px-6 py-4 text-right">
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<!-- Row 3 -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center bg-no-repeat" data-alt="Profile picture of Sofia Lopez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw8VZt-b0NgVJs1F5eJ5P2X4vHox6Bt0EZrkJI7l6sc-wOAZo99WkqYxr5_VU8Quyv4VuQ9FNNqXRnK4KAIXN9FZaP6nmOMIC6KfmKDHbMftdLfdR61oHSe7MownWX5vThXQ-ZwHi-zHzbWALP9j4QCowQuFVlZuCGN8THGb_9vqAhUX1iSi2UZnTpcXgDaSVw5y74AbhzyyQcepPtrXN1ou9hRVbun7phvHp6rCi4WfgYsUgypFZ9eHVUQUhhHbAZ6ItOdHXtpg");'></div>
<div>
<p class="font-semibold text-sm text-[#0d141b] dark:text-white">Sofía López</p>
<p class="text-xs text-gray-500 dark:text-gray-400">sofia.l@yavoy.com</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
<span class="material-symbols-outlined text-[14px]">admin_panel_settings</span>
                                    Admin
                                </span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-100 dark:border-orange-800">
<span class="size-1.5 rounded-full bg-orange-500"></span>
                                    Pendiente
                                </span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium text-sm">
<span class="material-symbols-outlined text-[18px]">verified</span>
                                    Verificado
                                </div>
</td>
<td class="px-6 py-4 text-right">
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</td>
</tr>
<!-- Row 4 -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-cover bg-center bg-no-repeat" data-alt="Profile picture of Luis Torres" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0meyUwRrHilLO9EzOq202SjDKGE1CpcyfT5iwP1cualuiIAHH72wcQbVPyX4mPEDty8wKVR1b4gSnxYbPc1n230LFGEGKD-ykW_NbgeFuM5m7Oj5oJCbGcptUqoyyRg7Y3Af-UHCQyKRrCowH1u4MlwZ4k9jt1--yT5RCCfa-sMPeXhr8YLfyV98OfrongqLKPxLRa9uCbOzPXD-5hwp3iAAsU4WwhIQBlH05qX-MVsPtAzcfeoRJRZGLc95aIRmNFscjabYzew");'></div>
<div>
<p class="font-semibold text-sm text-[#0d141b] dark:text-white">Luis Torres</p>
<p class="text-xs text-gray-500 dark:text-gray-400">luis.t@example.com</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
<span class="material-symbols-outlined text-[14px]">drive_eta</span>
                                    Conductor
                                </span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800">
<span class="size-1.5 rounded-full bg-emerald-500"></span>
                                    Activo
                                </span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5 text-gray-400 dark:text-gray-500 font-medium text-sm">
<span class="material-symbols-outlined text-[18px]">gpp_maybe</span>
                                    No verificado
                                </div>
</td>
<td class="px-6 py-4 text-right">
<div class="relative inline-block text-left group/menu">
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
<!-- Context Menu Simulation (Visible on hover for demo) -->
<div class="hidden group-hover/menu:block absolute right-0 mt-0 w-56 origin-top-right rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
<div class="py-1" role="none">
<a class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700" href="#">
<span class="material-symbols-outlined text-[18px]">visibility</span> Ver perfil
                                            </a>
<a class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700" href="#">
<span class="material-symbols-outlined text-[18px]">history</span> Ver historial
                                            </a>
<a class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700" href="#">
<span class="material-symbols-outlined text-[18px]">timer_pause</span> Suspender
                                            </a>
<a class="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700" href="#">
<span class="material-symbols-outlined text-[18px]">logout</span> Forzar cierre sesión
                                            </a>
<a class="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 border-t border-gray-100 dark:border-gray-700 mt-1" href="#">
<span class="material-symbols-outlined text-[18px]">block</span> Bloquear usuario
                                            </a>
</div>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1A2633] px-4 py-3 sm:px-6">
<div class="flex flex-1 justify-between sm:hidden">
<a class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" href="#">Anterior</a>
<a class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" href="#">Siguiente</a>
</div>
<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
<div>
<p class="text-sm text-gray-700 dark:text-gray-300">
                            Mostrando <span class="font-medium">1</span> a <span class="font-medium">10</span> de <span class="font-medium">97</span> resultados
                        </p>
</div>
<div>
<nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">
<a class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0" href="#">
<span class="sr-only">Anterior</span>
<span class="material-symbols-outlined text-[20px]">chevron_left</span>
</a>
<a aria-current="page" class="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#">1</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0" href="#">2</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0" href="#">3</a>
<span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:outline-offset-0">...</span>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-gray-300 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0" href="#">10</a>
<a class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-20 focus:outline-offset-0" href="#">
<span class="sr-only">Siguiente</span>
<span class="material-symbols-outlined text-[20px]">chevron_right</span>
</a>
</nav>
</div>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = `/* Custom scrollbar for better aesthetics */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
        .dark ::-webkit-scrollbar-thumb {
            background: #334155;
        }`;

export default function AdminUsuarios() {
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
