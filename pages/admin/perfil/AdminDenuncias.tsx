import React from 'react';

const TITLE = `Admin - Denuncias | YaVoy`;
const BODY_HTML = `<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark border-b border-[#e7edf3] dark:border-gray-700 px-6 py-3 shadow-sm">
<div class="layout-container max-w-[1200px] mx-auto flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="size-8 text-primary flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">near_me</span>
</div>
<h2 class="text-xl font-bold leading-tight tracking-tight dark:text-white">YaVoy Admin</h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors text-gray-600 dark:text-gray-300" href="#">Dashboard</a>
<a class="text-sm font-medium hover:text-primary transition-colors text-gray-600 dark:text-gray-300" href="#">Usuarios</a>
<a class="text-sm font-medium hover:text-primary transition-colors text-gray-600 dark:text-gray-300" href="#">Anuncios</a>
<a class="text-sm font-bold text-primary" href="#">Denuncias</a>
<a class="text-sm font-medium hover:text-primary transition-colors text-gray-600 dark:text-gray-300" href="#">Configuración</a>
</nav>
<div class="flex items-center gap-4">
<button class="relative p-2 text-gray-500 hover:text-primary transition-colors dark:text-gray-400">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-surface-dark"></span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-gray-200 dark:border-gray-600" data-alt="Admin profile picture placeholder, generic avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDFj5YR9v7CU4DC0mF0L-yFEA3wKzaF5-Q1NKI0W1KxKMEyd-GHLFDlGOUZhjNYTWu_v_Ae8bI6xX-wtfOKKovTF2H0tC4-h6R9WSxf8Mert7UF5pMpHr13wKJrL7C-2FBNzewRVnf-rEOO8gYZnGcO9ESlDC9mFFZl-O3fykDD8ToLpVC0ryY5vNo2HvUryZsCf4hNmkisHZyUL08hgozyD75M-21V5Ggsf51pVIeEjhaIYhhTKiHcu88necf0DXscQBTZtS0_aQ");'>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 layout-container w-full max-w-[1200px] mx-auto px-4 py-8 md:px-6">
<!-- Breadcrumbs -->
<div class="flex items-center gap-2 mb-6 text-sm">
<a class="text-gray-500 hover:text-primary dark:text-gray-400" href="#">Admin</a>
<span class="material-symbols-outlined text-base text-gray-400">chevron_right</span>
<span class="font-medium text-gray-900 dark:text-white">Denuncias</span>
</div>
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div class="flex flex-col gap-1">
<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Gestión de Denuncias</h1>
<p class="text-gray-500 dark:text-gray-400">Revisa y gestiona los reportes de usuarios, anuncios y chats de la plataforma.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 px-4 py-2 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm">
<span class="material-symbols-outlined text-lg">download</span>
                    Exportar
                </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
<span class="material-symbols-outlined text-lg">add_task</span>
                    Nueva Regla
                </button>
</div>
</div>
<!-- Stats Cards -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<!-- Stat 1 -->
<div class="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32">
<div class="flex justify-between items-start">
<p class="text-sm font-medium text-gray-500 dark:text-gray-400">Total Pendientes</p>
<div class="p-1.5 bg-orange-50 dark:bg-orange-900/20 rounded-md">
<span class="material-symbols-outlined text-orange-600 dark:text-orange-400">pending_actions</span>
</div>
</div>
<div>
<p class="text-3xl font-bold text-gray-900 dark:text-white">32</p>
<p class="text-xs font-medium text-orange-600 dark:text-orange-400 mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">trending_up</span> +2 desde ayer
                    </p>
</div>
</div>
<!-- Stat 2 -->
<div class="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32">
<div class="flex justify-between items-start">
<p class="text-sm font-medium text-gray-500 dark:text-gray-400">Resueltas Hoy</p>
<div class="p-1.5 bg-green-50 dark:bg-green-900/20 rounded-md">
<span class="material-symbols-outlined text-green-600 dark:text-green-400">check_circle</span>
</div>
</div>
<div>
<p class="text-3xl font-bold text-gray-900 dark:text-white">12</p>
<p class="text-xs font-medium text-green-600 dark:text-green-400 mt-1 flex items-center gap-1">
<span class="material-symbols-outlined text-sm">trending_up</span> +15% vs semana pasada
                    </p>
</div>
</div>
<!-- Stat 3 -->
<div class="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32">
<div class="flex justify-between items-start">
<p class="text-sm font-medium text-gray-500 dark:text-gray-400">Gravedad Alta</p>
<div class="p-1.5 bg-red-50 dark:bg-red-900/20 rounded-md">
<span class="material-symbols-outlined text-red-600 dark:text-red-400">warning</span>
</div>
</div>
<div>
<p class="text-3xl font-bold text-gray-900 dark:text-white">5</p>
<p class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">Requieren atención inmediata</p>
</div>
</div>
<!-- Stat 4 -->
<div class="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32">
<div class="flex justify-between items-start">
<p class="text-sm font-medium text-gray-500 dark:text-gray-400">Bloqueos</p>
<div class="p-1.5 bg-gray-100 dark:bg-gray-800 rounded-md">
<span class="material-symbols-outlined text-gray-600 dark:text-gray-300">block</span>
</div>
</div>
<div>
<p class="text-3xl font-bold text-gray-900 dark:text-white">8</p>
<p class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1">En las últimas 24h</p>
</div>
</div>
</div>
<!-- Filters & Search Toolbar -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm mb-6 p-4">
<div class="flex flex-col lg:flex-row gap-4 justify-between items-center">
<!-- Search -->
<div class="relative w-full lg:max-w-md">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-gray-400">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-surface-dark placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm dark:text-white dark:placeholder-gray-400" placeholder="Buscar por ID, Usuario o Motivo..." type="text"/>
</div>
<!-- Filters -->
<div class="flex flex-wrap gap-3 w-full lg:w-auto justify-end">
<!-- Filter: Type -->
<div class="relative">
<select class="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2.5 pl-3 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm font-medium cursor-pointer">
<option>Todos los Tipos</option>
<option>Usuario</option>
<option>Anuncio</option>
<option>Chat</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
<span class="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
<!-- Filter: Status -->
<div class="relative">
<select class="appearance-none bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 py-2.5 pl-3 pr-10 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500 text-sm font-medium cursor-pointer">
<option>Estado: Todos</option>
<option>Pendiente</option>
<option>En Revisión</option>
<option>Resuelto</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
<span class="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
<!-- Button: Apply Filter (visual only) -->
<button class="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 transition-colors">
<span class="material-symbols-outlined align-middle">filter_list</span>
</button>
</div>
</div>
</div>
<!-- Data Table -->
<div class="bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-700 text-xs uppercase text-gray-500 dark:text-gray-400 font-semibold tracking-wider">
<th class="px-6 py-4 w-20">ID</th>
<th class="px-6 py-4 w-32">Fecha</th>
<th class="px-6 py-4">Tipo</th>
<th class="px-6 py-4">Motivo</th>
<th class="px-6 py-4">Reportado</th>
<th class="px-6 py-4">Estado</th>
<th class="px-6 py-4 text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-200 dark:divide-gray-700">
<!-- Row 1: High Priority -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">#9281</td>
<td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">12 Oct, 10:23</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
<span class="material-symbols-outlined text-sm icon-filled">chat</span>
</div>
<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Chat</span>
</div>
</td>
<td class="px-6 py-4">
<span class="text-sm font-medium text-gray-900 dark:text-white">Acoso Grave</span>
<div class="text-xs text-red-500 mt-0.5 font-medium">Prioridad Alta</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-6 bg-gray-200 dark:bg-gray-700 rounded-full bg-cover" data-alt="User avatar small" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAa5XgN1QmvF48dbZzorpHhf7uClHqa_MHLTZl3QP4Z0WkDX2YAtkcm1Cg1YliGruielxNVpDp6PubzQ3FobwSebRWQseo6wLTLdu9mpih0ouFRvbAP3MC78U6WxzrJp6qgkIJ1mdI_YOIEuXtz-B3xKbYBMJykzIPPqKE2xm0YkHsOKagfUYcq2JYuByhPupNrIDypjYv9ZfyriO3ab5kfIgdbystR9Snb3a6XES79BSFyURNwORSkgzOauPXJlF220DFBze5m9g");'></div>
<a class="text-sm text-primary hover:underline" href="#">@carlos_m</a>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
<span class="w-1.5 h-1.5 mr-1.5 bg-orange-500 rounded-full"></span>
                                    Pendiente
                                </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-1.5 text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" title="Revisar">
<span class="material-symbols-outlined">visibility</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-green-600 dark:text-gray-400 transition-colors" title="Resolver">
<span class="material-symbols-outlined">check_circle</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 transition-colors" title="Bloquear">
<span class="material-symbols-outlined">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 2: Ad Report -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">#9280</td>
<td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">12 Oct, 09:45</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
<span class="material-symbols-outlined text-sm icon-filled">campaign</span>
</div>
<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Anuncio</span>
</div>
</td>
<td class="px-6 py-4">
<span class="text-sm font-medium text-gray-900 dark:text-white">Posible Estafa</span>
<div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Contenido engañoso</div>
</td>
<td class="px-6 py-4">
<a class="text-sm text-primary hover:underline font-medium" href="#">"iPhone 15 Pro -..."</a>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                                    En Revisión
                                </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-1.5 text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" title="Revisar">
<span class="material-symbols-outlined">visibility</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-green-600 dark:text-gray-400 transition-colors" title="Resolver">
<span class="material-symbols-outlined">check_circle</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 transition-colors" title="Bloquear">
<span class="material-symbols-outlined">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 3: User Report - Resolved -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors opacity-75">
<td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">#9278</td>
<td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">11 Oct, 18:30</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
<span class="material-symbols-outlined text-sm icon-filled">person</span>
</div>
<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Usuario</span>
</div>
</td>
<td class="px-6 py-4">
<span class="text-sm font-medium text-gray-900 dark:text-white">Spam masivo</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-6 bg-gray-200 dark:bg-gray-700 rounded-full bg-cover" data-alt="User avatar small" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8rTWMbbROgmoaRPKmQ8vcmffQlsaBCZ17RJ_-2c3GnT1LdtHKyD7ShhI3sFpv7eGR7AkDcKwQcMrmVUvJa3wJo1G8xCb0jqlShR_KzpHhov10bdnXAjpvVD2WLPPMgH61l0w1ixJ44mXFnzvRhjZM_Sjk7pA5_oCnVKPvtikYlLe3VgiLsfbue2fMDCUD_ikNCiOe2-vgCJTFD-LKrQJu4ucv7mq2CrlCg4wOERlRDVsYSP9LMwkWtN1DiBaBoFKpCVGrklWqHA");'></div>
<a class="text-sm text-gray-600 dark:text-gray-400 hover:underline" href="#">@bot_promo2</a>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800">
                                    Resuelto
                                </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" title="Archivar">
<span class="material-symbols-outlined">archive</span>
</button>
</div>
</td>
</tr>
<!-- Row 4: Chat Report -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">#9275</td>
<td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">11 Oct, 14:12</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
<span class="material-symbols-outlined text-sm icon-filled">chat</span>
</div>
<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Chat</span>
</div>
</td>
<td class="px-6 py-4">
<span class="text-sm font-medium text-gray-900 dark:text-white">Lenguaje Ofensivo</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-6 bg-gray-200 dark:bg-gray-700 rounded-full bg-cover" data-alt="User avatar small" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-EuqO7U50KStD-GGX4O5QC2H6NwIgDwlq7hbkRzBuKk1Ibl_4Zjclv9RZspMjhCslx-w-6LlBXPJr9UIZWr1nrLkuUclB9w8PUwRCYpjy4Ov9gcuu9EovdX4E3PwTztcUBaKJlcMzTH192hbsk1lFmb6Am2tfKVsycx1Cc7CS15aYBWLGeo-dXw1kNK1gF15gr2zxNR10sgfg21VQ9obJ3CXBNYPEpae2emOjvopsMk-MyRQcGUgp5ZKZVxX0JuEm3xPlmgItWQ");'></div>
<a class="text-sm text-primary hover:underline" href="#">@juan_perez</a>
</div>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
<span class="w-1.5 h-1.5 mr-1.5 bg-orange-500 rounded-full"></span>
                                    Pendiente
                                </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-1.5 text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" title="Revisar">
<span class="material-symbols-outlined">visibility</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-green-600 dark:text-gray-400 transition-colors" title="Resolver">
<span class="material-symbols-outlined">check_circle</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 transition-colors" title="Bloquear">
<span class="material-symbols-outlined">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 5: Anuncio -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">#9272</td>
<td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">11 Oct, 12:00</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
<span class="material-symbols-outlined text-sm icon-filled">campaign</span>
</div>
<span class="text-sm font-medium text-gray-700 dark:text-gray-300">Anuncio</span>
</div>
</td>
<td class="px-6 py-4">
<span class="text-sm font-medium text-gray-900 dark:text-white">Foto no original</span>
</td>
<td class="px-6 py-4">
<a class="text-sm text-primary hover:underline font-medium" href="#">"PS5 Nueva..."</a>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
<span class="w-1.5 h-1.5 mr-1.5 bg-orange-500 rounded-full"></span>
                                    Pendiente
                                </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-1.5 text-gray-500 hover:text-primary dark:text-gray-400 transition-colors" title="Revisar">
<span class="material-symbols-outlined">visibility</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-green-600 dark:text-gray-400 transition-colors" title="Resolver">
<span class="material-symbols-outlined">check_circle</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-red-600 dark:text-gray-400 transition-colors" title="Bloquear">
<span class="material-symbols-outlined">block</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="bg-surface-light dark:bg-surface-dark px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
<span class="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
                    Mostrando <span class="font-semibold text-gray-900 dark:text-white">1</span> a <span class="font-semibold text-gray-900 dark:text-white">5</span> de <span class="font-semibold text-gray-900 dark:text-white">32</span> resultados
                </span>
<div class="inline-flex -space-x-px rounded-md shadow-sm">
<button class="relative inline-flex items-center rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20">
<span class="sr-only">Anterior</span>
<span class="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button aria-current="page" class="relative z-10 inline-flex items-center border border-primary bg-primary/10 px-4 py-2 text-sm font-medium text-primary focus:z-20">1</button>
<button class="relative inline-flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20">2</button>
<button class="relative inline-flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20">3</button>
<span class="relative inline-flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-400">...</span>
<button class="relative inline-flex items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20">8</button>
<button class="relative inline-flex items-center rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-surface-dark px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 focus:z-20">
<span class="sr-only">Siguiente</span>
<span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
            vertical-align: middle;
        }
        .icon-filled {
            font-variation-settings: 'FILL' 1;
        }`;

export default function AdminDenuncias() {
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
