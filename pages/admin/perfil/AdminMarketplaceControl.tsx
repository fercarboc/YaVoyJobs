import React from 'react';

const TITLE = `YaVoy Admin - Panel Marketplace`;
const BODY_HTML = `<div class="relative flex min-h-screen flex-col overflow-x-hidden">
<!-- Top Navigation -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-[#1a2632] px-10 py-3 sticky top-0 z-50 shadow-sm">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H44V44H4V4Z" fill="none"></path> <!-- Bounding box -->
<path d="M24 4L4 44H44L24 4Z" fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4"></path>
</svg>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] dark:text-white">YaVoy Admin</h2>
</div>
<div class="flex items-center gap-1 md:gap-4 lg:gap-9 hidden md:flex">
<a class="text-sm font-medium leading-normal text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#">Dashboard</a>
<a class="text-sm font-bold leading-normal text-primary" href="#">Marketplace</a>
<a class="text-sm font-medium leading-normal text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#">Usuarios</a>
<a class="text-sm font-medium leading-normal text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary transition-colors" href="#">Configuración</a>
</div>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<div class="hidden lg:flex w-full max-w-[320px]">
<div class="relative w-full">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-slate-400">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-700 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary dark:text-white placeholder-slate-400" placeholder="Buscar..." type="text"/>
</div>
</div>
<div class="flex items-center gap-4">
<button class="text-slate-500 hover:text-primary dark:text-slate-400">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white shadow-sm" data-alt="Admin user profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNrfcUN0KU-ZNv9Yhx95nuXUCQlHRygNPzhATkwk5bF7fhUmMxAGBiq4UExH8Rpb-OC951qFtgaS2ICmacrbrWJ8fh-VEOmAEsIKHq_Vdo-DLXNXn7TffYn-2d_34asgDbJLX6ZBo5gBrPFVmboxeEoaefpT1WDbwPcjdrNDCCQaxWbQbal0AlxPPfzGat-EiEgRZqMq2eFJBqVCTxmqz0XpK2gB_3EXqWQ6-lv3m69e7mvXyS-FUqQSVPJSb9mXpqkkCsa4sZRg");'></div>
</div>
</div>
</header>
<main class="flex-1 flex justify-center py-8 px-4 sm:px-8">
<div class="w-full max-w-[1200px] flex flex-col gap-6">
<!-- Breadcrumbs -->
<nav class="flex text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary transition-colors" href="#">Dashboard</a>
<span class="mx-2">/</span>
<span class="text-slate-900 dark:text-slate-200 font-medium">Control Marketplace</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Panel de Control Marketplace</h1>
<p class="mt-2 text-slate-500 dark:text-slate-400 text-lg">Gestión centralizada de proveedores, productos y moderación.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
<span class="material-symbols-outlined text-sm">download</span>
                            Exportar Datos
                        </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
<span class="material-symbols-outlined text-sm">add</span>
                            Nuevo Proveedor
                        </button>
</div>
</div>
<!-- Metrics/Stats -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Stat 1 -->
<div class="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Proveedores activos</p>
<span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full dark:bg-green-900/30 dark:text-green-400">+5%</span>
</div>
<p class="text-3xl font-bold text-slate-900 dark:text-white mt-2">1,245</p>
<p class="text-xs text-slate-400 mt-1">vs. mes anterior</p>
</div>
<!-- Stat 2 -->
<div class="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Productos publicados</p>
<span class="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full dark:bg-green-900/30 dark:text-green-400">+12%</span>
</div>
<p class="text-3xl font-bold text-slate-900 dark:text-white mt-2">45,302</p>
<p class="text-xs text-slate-400 mt-1">vs. mes anterior</p>
</div>
<!-- Stat 3 -->
<div class="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-1">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Productos +18</p>
<span class="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-0.5 rounded-full dark:bg-orange-900/30 dark:text-orange-400">+2%</span>
</div>
<p class="text-3xl font-bold text-slate-900 dark:text-white mt-2">3,200</p>
<div class="flex items-center gap-1 mt-1 text-orange-600 dark:text-orange-400 text-xs font-medium">
<span class="material-symbols-outlined text-[16px]">warning</span>
                            Requieren supervisión
                        </div>
</div>
<!-- Stat 4 -->
<div class="bg-white dark:bg-[#1a2632] p-6 rounded-xl border border-red-200 dark:border-red-900/50 shadow-sm flex flex-col gap-1 relative overflow-hidden">
<div class="absolute right-0 top-0 p-4 opacity-10">
<span class="material-symbols-outlined text-6xl text-red-500">report</span>
</div>
<div class="flex justify-between items-start relative z-10">
<p class="text-red-600 dark:text-red-400 text-sm font-bold">Denuncias de productos</p>
<span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full dark:bg-red-900/30 dark:text-red-400">+15%</span>
</div>
<p class="text-3xl font-bold text-slate-900 dark:text-white mt-2 relative z-10">12</p>
<div class="flex items-center gap-1 mt-1 text-red-600 dark:text-red-400 text-xs font-medium relative z-10">
<span class="material-symbols-outlined text-[16px]">priority_high</span>
                            Acción requerida
                        </div>
</div>
</div>
<!-- Filters & Toolbar -->
<div class="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-[#1a2632] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="w-full md:w-1/2 lg:w-1/3">
<label class="relative block">
<span class="absolute inset-y-0 left-0 flex items-center pl-3">
<span class="material-symbols-outlined text-slate-400">search</span>
</span>
<input class="placeholder:text-slate-400 block w-full rounded-lg border-0 bg-slate-50 dark:bg-slate-700 py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary dark:text-white" name="search" placeholder="Buscar por proveedor, ID o categoría..." type="text"/>
</label>
</div>
<div class="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
<button class="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors whitespace-nowrap">
                            Todos
                        </button>
<button class="px-4 py-2 rounded-lg bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-primary hover:text-primary transition-colors whitespace-nowrap">
                            Pendientes
                        </button>
<button class="px-4 py-2 rounded-lg bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-red-500 hover:text-red-500 transition-colors whitespace-nowrap flex items-center gap-1">
<span class="size-2 rounded-full bg-red-500"></span>
                            Reportados
                        </button>
<button class="px-4 py-2 rounded-lg bg-white dark:bg-[#1a2632] border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium hover:border-orange-500 hover:text-orange-500 transition-colors whitespace-nowrap flex items-center gap-1">
<span class="size-2 rounded-full bg-orange-500"></span>
                            +18
                        </button>
</div>
</div>
<!-- Main Table -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
<th class="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 w-[35%]">Producto</th>
<th class="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 w-[15%]">Categoría</th>
<th class="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 w-[20%]">Proveedor</th>
<th class="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 w-[15%]">Estado</th>
<th class="p-4 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 w-[15%] text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<!-- Row 1: Active Product -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="size-12 rounded-lg bg-slate-200 bg-cover bg-center shrink-0 border border-slate-100 dark:border-slate-700" data-alt="Image of a Iberico Ham leg on a stand" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuARRyGhzO4HOVR1Te1tNpgg75ILnDCb1JgCAc3AsHXLmvtISeD3UQlk-FM-wNQPQX3OYE61Amy23bemEQ1qT6oVOg75C1DDGBuvF06y_kynqL-L3mHkKzWXrGGA1dJAr5pgTraG5XtXGOaIDD3AAfUZl3zQaltXuZH_-DLI_IeSyEFdCCBGJIDIY6RRU6j-5aFvAs7aJ2svbiCE7-8rV4g3X5Vtq1LD2yYIg3UYUVk3XsDHjQwga3WlyVZhYYa4-y4uZQnhM38oPw");'></div>
<div class="flex flex-col">
<span class="text-sm font-semibold text-slate-900 dark:text-white">Jamón Ibérico de Bellota</span>
<span class="text-xs text-slate-500 dark:text-slate-400">ID: #PROD-8921</span>
</div>
</div>
</td>
<td class="p-4">
<span class="text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">Alimentación</span>
</td>
<td class="p-4">
<div class="flex flex-col">
<a class="text-sm font-medium text-primary hover:underline" href="#">Charcutería Madrid</a>
<span class="text-xs text-slate-400">Verificado</span>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
<span class="size-1.5 rounded-full bg-green-500"></span>
                                            Activo
                                        </span>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Ocultar Producto">
<span class="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Solicitar Documentación">
<span class="material-symbols-outlined text-[20px]">assignment_add</span>
</button>
<button class="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Bloquear Proveedor">
<span class="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 2: Reported Product (Action needed) -->
<tr class="bg-red-50/50 dark:bg-red-900/10 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors group">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="size-12 rounded-lg bg-slate-200 bg-cover bg-center shrink-0 border border-red-100 dark:border-red-900" data-alt="Image of colorful fireworks packaging" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9iSV3tEL-rew1gTQii9jgJXODw8b17GtMPCSyKE17jI6weO-KBHOIfJmEM7lRWzHJiZocGUzZSXf-qnbmfpR4lB7n_6mWYORh3FNU746YnxSEftycZyS5pkdZyuzyW2uRTYlras-zYtubMmJOSvqVbkgOk0ltNzEEC1B8WLxMnqPQyVMY2brJmTE_iPApkXY7sg-K1TG6xG2D6ZTqTWkF_h15nWWFZPVIojXXP4_Q4kq0ke-wnoPCNRb03R4fY9EUpclTI2JCmA");'></div>
<div class="flex flex-col">
<span class="text-sm font-semibold text-slate-900 dark:text-white">Pack Fuegos Artificiales XL</span>
<span class="text-xs text-red-500 font-medium">Reportado: Material peligroso</span>
</div>
</div>
</td>
<td class="p-4">
<span class="text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">Fiestas y Eventos</span>
</td>
<td class="p-4">
<div class="flex flex-col">
<a class="text-sm font-medium text-primary hover:underline" href="#">Fiesta Total S.L.</a>
<span class="text-xs text-red-500 font-medium flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">warning</span>
                                                3 reportes previos
                                            </span>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-100 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/30 animate-pulse">
<span class="size-1.5 rounded-full bg-red-500"></span>
                                            Denunciado
                                        </span>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="px-3 py-1.5 bg-red-600 text-white text-xs font-medium rounded-md hover:bg-red-700 shadow-sm transition-colors">
                                                Revisar
                                            </button>
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Opciones">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</td>
</tr>
<!-- Row 3: +18 Product -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="size-12 rounded-lg bg-slate-200 bg-cover bg-center shrink-0 border border-slate-100 dark:border-slate-700 relative overflow-hidden group-hover:opacity-100 transition-all" data-alt="Blurred image representing adult content" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSUZ94aaH1UdUt-VB80Aae7CmhJS6ON5Xj9JHudiFtaxt9dOs2kEavIiV491tx4-UqZPuTC8NcP86-ZoNMPwn3IkQCr27jyZv-3iPx7XbNAhnaDD1i4g3m-hKRJrQueEqcNLT0mmmgRQm4FtWRQwoCK2My-ZyaewvnqKlxKWA9FOpiK5N5sX_8q4-F5OvEfhdANCT1MO2lPYlaafcMTdmkJCYQhNQiltM8l4T4Rye2Bvk3RiHjULr44vLITVhEPhNyZnGNIeKSNw");'>
<div class="absolute inset-0 backdrop-blur-[2px] bg-slate-900/20 flex items-center justify-center">
<span class="text-white text-[10px] font-bold border border-white px-1 rounded">18+</span>
</div>
</div>
<div class="flex flex-col">
<span class="text-sm font-semibold text-slate-900 dark:text-white">Juego de Cartas "Picante"</span>
<span class="text-xs text-slate-500 dark:text-slate-400">ID: #PROD-1022</span>
</div>
</div>
</td>
<td class="p-4">
<span class="text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">Ocio Adulto</span>
</td>
<td class="p-4">
<div class="flex flex-col">
<a class="text-sm font-medium text-primary hover:underline" href="#">Distribuidora Norte</a>
<span class="text-xs text-slate-400">Nuevo (2 semanas)</span>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-900/30">
<span class="material-symbols-outlined text-[14px]">18_up_rating</span>
                                            Restringido
                                        </span>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Verificar Edad">
<span class="material-symbols-outlined text-[20px]">verified_user</span>
</button>
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Solicitar Documentación">
<span class="material-symbols-outlined text-[20px]">assignment_add</span>
</button>
<button class="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Bloquear Proveedor">
<span class="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 4: Another Active Product -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
<td class="p-4">
<div class="flex items-center gap-3">
<div class="size-12 rounded-lg bg-slate-200 bg-cover bg-center shrink-0 border border-slate-100 dark:border-slate-700" data-alt="Image of a smart watch" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcB7bB7xP_KdBZCxivjoJfembI6koaO_6R_M0crBtmGy9JZwODGsE3_6jgsNLvWNeyT7DhSFuYVmfT0Rrdw9TpmWLG-II2hmUN1PMeDHVRGQbpQqVCnJdt43dClLh-L8ckRZKwhThTD_xQyL2opXHHbcaNsXwtfsef3QkVlcc05eo1tDwTf_HVIO3MJ72ArxDVnkN7LQo_NptusmZ_y9xTNU1dVcT2JdKb3yF2L1dqzRO0kvhwUIgjZSnd3k9Q5rErxIfGt9Ck-Q");'></div>
<div class="flex flex-col">
<span class="text-sm font-semibold text-slate-900 dark:text-white">Smart Watch Series 5</span>
<span class="text-xs text-slate-500 dark:text-slate-400">ID: #PROD-5501</span>
</div>
</div>
</td>
<td class="p-4">
<span class="text-sm text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-md">Electrónica</span>
</td>
<td class="p-4">
<div class="flex flex-col">
<a class="text-sm font-medium text-primary hover:underline" href="#">TechWorld ES</a>
<span class="text-xs text-slate-400">Premium Partner</span>
</div>
</td>
<td class="p-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/30">
<span class="size-1.5 rounded-full bg-green-500"></span>
                                            Activo
                                        </span>
</td>
<td class="p-4 text-right">
<div class="flex items-center justify-end gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Ocultar Producto">
<span class="material-symbols-outlined text-[20px]">visibility_off</span>
</button>
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors" title="Solicitar Documentación">
<span class="material-symbols-outlined text-[20px]">assignment_add</span>
</button>
<button class="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors" title="Bloquear Proveedor">
<span class="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="flex items-center justify-between px-4 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#1a2632]/50">
<div class="text-sm text-slate-500 dark:text-slate-400">
                            Mostrando <span class="font-medium">1-10</span> de <span class="font-medium">245</span> resultados
                        </div>
<div class="flex gap-1">
<button class="px-3 py-1 text-sm border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50">Anterior</button>
<button class="px-3 py-1 text-sm border border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700">Siguiente</button>
</div>
</div>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
            vertical-align: middle;
        }`;

export default function AdminMarketplaceControl() {
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
