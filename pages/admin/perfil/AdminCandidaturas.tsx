import React from 'react';

const TITLE = `Admin - Candidaturas | YaVoy`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800">
<div class="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
<!-- Logo & Brand -->
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-slate-900 dark:text-white">
<div class="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
<span class="material-symbols-outlined text-[20px]">local_shipping</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-tight">YaVoy Admin</h2>
</div>
</div>
<!-- Navigation Links -->
<nav class="hidden md:flex flex-1 items-center justify-center gap-1">
<a class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">Dashboard</a>
<a class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">Usuarios</a>
<a class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">Anuncios</a>
<a class="bg-primary/10 rounded-lg px-3 py-2 text-sm font-bold text-primary dark:bg-primary/20" href="#">Candidaturas</a>
<a class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">Pagos</a>
<a class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">Configuración</a>
</nav>
<!-- User Actions -->
<div class="flex items-center gap-4">
<button class="hidden lg:flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined text-[16px]">visibility</span>
<span>Ver Sitio</span>
</button>
<div class="relative group cursor-pointer">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-slate-100 dark:ring-slate-700" data-alt="Admin user profile picture showing a professional headshot" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAu28PJAvvNvfyANt-1GaS1atygX83ZfmyNxCNb0GuT4Xu3P2zL0XmpdzKe90x6hNX9PTAuIIqzNGZK_K0l30PW5MldgkEl2jU73Tj_4RR4LoDkCfRbcZswNPfpeci48xOf9tjaETIa3_Dve2gBdmszR4aiCJ5biYs3k3usLBdHbNSktZAc5jMgvN6kVoGiRbiI45Pg55xCZKugoiKUIHJfq-YOrBkIh6kRIfZH9ZstUM9hGQT23wIMk1nGDmUWXZ6cBQZliymQlA");'></div>
<!-- Simple dropdown indicator -->
<div class="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white dark:border-slate-900"></div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 w-full bg-background-light dark:bg-background-dark">
<div class="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-8 sm:px-6 lg:px-8">
<!-- Breadcrumbs -->
<nav aria-label="Breadcrumb" class="flex mb-6">
<ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
<li class="inline-flex items-center">
<a class="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white" href="#">
<span class="material-symbols-outlined mr-1 text-[18px]">home</span>
              Inicio
            </a>
</li>
<li>
<div class="flex items-center">
<span class="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
<a class="ms-1 text-sm font-medium text-slate-500 hover:text-primary md:ms-2 dark:text-slate-400 dark:hover:text-white" href="#">Admin</a>
</div>
</li>
<li aria-current="page">
<div class="flex items-center">
<span class="material-symbols-outlined text-slate-400 text-[18px]">chevron_right</span>
<span class="ms-1 text-sm font-medium text-slate-900 md:ms-2 dark:text-white">Candidaturas</span>
</div>
</li>
</ol>
</nav>
<!-- Page Heading -->
<div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">Gestión de Candidaturas</h1>
<p class="mt-2 text-base text-slate-600 dark:text-slate-400">Supervisa y modera las solicitudes de empleo en tiempo real.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-700 transition-all">
<span class="material-symbols-outlined text-[20px]">file_download</span>
            Exportar CSV
          </button>
</div>
</div>
<!-- Filters & Search -->
<div class="mb-6 grid gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800 lg:grid-cols-4 lg:p-5">
<div class="lg:col-span-2">
<div class="relative">
<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span class="material-symbols-outlined text-slate-400 text-[20px]">search</span>
</div>
<input class="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700 dark:placeholder:text-slate-500" placeholder="Buscar por candidato, email o anuncio..." type="text"/>
</div>
</div>
<div>
<select class="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700">
<option disabled="" selected="" value="">Filtrar por estado</option>
<option value="all">Todos los estados</option>
<option value="pending">Pendiente</option>
<option value="accepted">Aceptada</option>
<option value="rejected">Rechazada</option>
<option value="suspicious">Sospechosa</option>
</select>
</div>
<div>
<select class="block w-full rounded-lg border-0 py-2.5 pl-3 pr-10 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 dark:bg-slate-800 dark:text-white dark:ring-slate-700">
<option disabled="" selected="" value="">Fecha de solicitud</option>
<option value="today">Hoy</option>
<option value="yesterday">Ayer</option>
<option value="last_7_days">Últimos 7 días</option>
<option value="last_30_days">Últimos 30 días</option>
</select>
</div>
</div>
<!-- Data Table -->
<div class="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800">
<div class="overflow-x-auto">
<table class="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
<thead class="bg-slate-50 dark:bg-slate-800/50">
<tr>
<th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" scope="col">Usuario / Candidato</th>
<th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" scope="col">Anuncio</th>
<th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" scope="col">Fecha</th>
<th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" scope="col">Estado</th>
<th class="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400" scope="col">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900">
<!-- Row 1: Pendiente -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="whitespace-nowrap px-6 py-4">
<div class="flex items-center">
<div class="h-10 w-10 flex-shrink-0">
<div class="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of Juan Perez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6NHHtNZdeqP-G3FvKQlXqI2QLi24AFW8PQZMA8eGUgATa0Hf3LnRGpSJrbI2I3Wl2UPOTlgvJMibTjAv1BCsn2HrGWWX14Uu1c-4exZJ8gEn7-If-ixj3ZxzaZUkaqVcbZTpewFsJzc1TEAkehzm0qH1Pm3nDU16pfSeE40t2X5bEFzBZQ8fv5LN1gYpbD-GJ6fOAA-ZR8L9Ye32mIpACSDOAj0wxM-rUvYcfD4bJNWKpVeKw3lP2Ge2C2fVRz7yjI6BqkxtwMw");'></div>
</div>
<div class="ml-4">
<div class="text-sm font-semibold text-slate-900 dark:text-white">Juan Pérez</div>
<div class="text-sm text-slate-500 dark:text-slate-400">juan.perez@email.com</div>
</div>
</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<div class="text-sm font-medium text-slate-900 dark:text-white">Repartidor en Madrid</div>
<div class="text-xs text-slate-500 dark:text-slate-400">Logística Express</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="text-sm text-slate-600 dark:text-slate-400">12 Oct 2023</span>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="inline-flex items-center rounded-full bg-yellow-50 px-2.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-900/30 dark:text-yellow-200 dark:ring-yellow-500/30">
                    Pendiente
                  </span>
</td>
<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
<div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-1 text-slate-400 hover:text-primary transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-1 text-slate-400 hover:text-orange-500 transition-colors" title="Marcar como sospechosa">
<span class="material-symbols-outlined text-[20px]">flag</span>
</button>
<button class="p-1 text-slate-400 hover:text-red-600 transition-colors" title="Bloquear usuario">
<span class="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 2: Aceptada -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="whitespace-nowrap px-6 py-4">
<div class="flex items-center">
<div class="h-10 w-10 flex-shrink-0">
<div class="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of Ana Gomez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYyp5DczaiiLvdVGMYn10t_PKaeD_Vq18RUA46ntYDMEjRxWHvDXNXdmUZxqdQREKGaULIC1y1a9Zuvw0C3_Pg7Kz-VHKAFoJLQhLH4ubMOT5SJOSfJEUfEf7awlND5CLiEYfh5mNfms0Lfx3HFhC5MvGEY1pWb7iL5b0Ui68YkjakNo8SYC-enlqMB30b6TQQSKZCTO8YHBOkWDfJENxHYgvEUgo0BeeC4sVv6CKXLauNQ_3H73izwu-yz5QeQc_extdAwkfCUw");'></div>
</div>
<div class="ml-4">
<div class="text-sm font-semibold text-slate-900 dark:text-white">Ana Gómez</div>
<div class="text-sm text-slate-500 dark:text-slate-400">ana.gomez@email.com</div>
</div>
</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<div class="text-sm font-medium text-slate-900 dark:text-white">Conductor VTC</div>
<div class="text-xs text-slate-500 dark:text-slate-400">Transportes ES</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="text-sm text-slate-600 dark:text-slate-400">11 Oct 2023</span>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/30 dark:text-green-300 dark:ring-green-500/30">
                    Aceptada
                  </span>
</td>
<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
<div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-1 text-slate-400 hover:text-primary transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-1 text-slate-400 hover:text-orange-500 transition-colors" title="Marcar como sospechosa">
<span class="material-symbols-outlined text-[20px]">flag</span>
</button>
<button class="p-1 text-slate-400 hover:text-red-600 transition-colors" title="Bloquear usuario">
<span class="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 3: Sospechosa -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors bg-orange-50/50 dark:bg-orange-900/10">
<td class="whitespace-nowrap px-6 py-4">
<div class="flex items-center">
<div class="h-10 w-10 flex-shrink-0">
<div class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-bold dark:bg-slate-700 dark:text-slate-300">
                        CR
                      </div>
</div>
<div class="ml-4">
<div class="text-sm font-semibold text-slate-900 dark:text-white">Carlos Ruiz</div>
<div class="text-sm text-slate-500 dark:text-slate-400">carlos.ruiz@email.com</div>
</div>
</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<div class="text-sm font-medium text-slate-900 dark:text-white">Mozo de Almacén</div>
<div class="text-xs text-slate-500 dark:text-slate-400">Almacenes Centrales</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="text-sm text-slate-600 dark:text-slate-400">10 Oct 2023</span>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/20 dark:bg-orange-900/30 dark:text-orange-200 dark:ring-orange-500/30">
                    Sospechosa
                  </span>
</td>
<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
<div class="flex items-center justify-end gap-2 opacity-100 transition-opacity">
<button class="rounded bg-white px-2 py-1 text-xs font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:bg-slate-700 dark:text-slate-200 dark:ring-slate-600 dark:hover:bg-slate-600">Revisar</button>
<div class="h-4 w-px bg-slate-300 dark:bg-slate-600 mx-1"></div>
<button class="p-1 text-slate-400 hover:text-red-600 transition-colors" title="Bloquear usuario">
<span class="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 4: Rechazada -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="whitespace-nowrap px-6 py-4">
<div class="flex items-center">
<div class="h-10 w-10 flex-shrink-0">
<div class="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of Lucia Martin" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6MMMfRKUqsGRGsM35ZXWuMR8sOokCF_MMx0U7hHzC-JTYOaygAMnHkLYdOzZUPAsR3zH6JQiUtsOCbwvMWRY0fXJ_H6LcCz6K8iaEdcI8UUMXHx336eO8VOXhSNc1KM3ZkZUgyQYe5xqOR0ojjzVErrUTyR99sMJFnpV5pJE1HZMC3FkM7wT4UKMB4oVbzQB_k4IPCMLVC1L4zGVHbf4CC42MCPZcyxd9Itfnyqol4MnQ4eR8jBpjPGTEBuTtl32nIvk9gCHKew");'></div>
</div>
<div class="ml-4">
<div class="text-sm font-semibold text-slate-900 dark:text-white">Lucía Martín</div>
<div class="text-sm text-slate-500 dark:text-slate-400">lucia.martin@email.com</div>
</div>
</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<div class="text-sm font-medium text-slate-900 dark:text-white">Dependienta</div>
<div class="text-xs text-slate-500 dark:text-slate-400">Tienda Moda</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="text-sm text-slate-600 dark:text-slate-400">09 Oct 2023</span>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 dark:bg-red-900/30 dark:text-red-300 dark:ring-red-500/30">
                    Rechazada
                  </span>
</td>
<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
<div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-1 text-slate-400 hover:text-primary transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-1 text-slate-400 hover:text-orange-500 transition-colors" title="Marcar como sospechosa">
<span class="material-symbols-outlined text-[20px]">flag</span>
</button>
<button class="p-1 text-slate-400 hover:text-red-600 transition-colors" title="Bloquear usuario">
<span class="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</td>
</tr>
<!-- Row 5: Pendiente -->
<tr class="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="whitespace-nowrap px-6 py-4">
<div class="flex items-center">
<div class="h-10 w-10 flex-shrink-0">
<div class="h-10 w-10 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of Pedro Sanchez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJB2-qjkT5kdoiJdvolkDy7d9hYVAMu6byV_HXiGTClzyKUDpMUCgpH12XM4nnzd4qcxgAEIqINXtc9vYqUhwjzGTObXJAnY0dLviNsv9_D8llTkm9oaQSMw22_8WK2119AGtDg4v7smuIN_mSh1jHbciXEqRlxDLnfe4NmhY20zJeyrgH_YdI5wWP1E2I_phjIEmME-EEnIlQSos2A3M6m5lWoUWqTKkky8ip1e9au3gH3YRhmUEMsho1f-NUY20eY46Ms7YPBQ");'></div>
</div>
<div class="ml-4">
<div class="text-sm font-semibold text-slate-900 dark:text-white">Pedro Sanchez</div>
<div class="text-sm text-slate-500 dark:text-slate-400">pedro.s@email.com</div>
</div>
</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<div class="text-sm font-medium text-slate-900 dark:text-white">Repartidor Moto</div>
<div class="text-xs text-slate-500 dark:text-slate-400">FastFood Inc</div>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="text-sm text-slate-600 dark:text-slate-400">08 Oct 2023</span>
</td>
<td class="whitespace-nowrap px-6 py-4">
<span class="inline-flex items-center rounded-full bg-yellow-50 px-2.5 py-0.5 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 dark:bg-yellow-900/30 dark:text-yellow-200 dark:ring-yellow-500/30">
                    Pendiente
                  </span>
</td>
<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
<div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-1 text-slate-400 hover:text-primary transition-colors" title="Ver detalles">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-1 text-slate-400 hover:text-orange-500 transition-colors" title="Marcar como sospechosa">
<span class="material-symbols-outlined text-[20px]">flag</span>
</button>
<button class="p-1 text-slate-400 hover:text-red-600 transition-colors" title="Bloquear usuario">
<span class="material-symbols-outlined text-[20px]">block</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 sm:px-6 dark:border-slate-800 dark:bg-slate-900">
<div class="flex flex-1 justify-between sm:hidden">
<a class="relative inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" href="#">Anterior</a>
<a class="relative ml-3 inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" href="#">Siguiente</a>
</div>
<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
<div>
<p class="text-sm text-slate-700 dark:text-slate-300">
                Mostrando <span class="font-medium">1</span> a <span class="font-medium">5</span> de <span class="font-medium">28</span> resultados
              </p>
</div>
<div>
<nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">
<a class="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 dark:ring-slate-700 dark:hover:bg-slate-800" href="#">
<span class="sr-only">Previous</span>
<span class="material-symbols-outlined text-[20px]">chevron_left</span>
</a>
<a aria-current="page" class="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href="#">1</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800" href="#">2</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-800" href="#">3</a>
<span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-inset ring-slate-300 focus:outline-offset-0 dark:text-slate-400 dark:ring-slate-700">...</span>
<a class="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 focus:z-20 focus:outline-offset-0 dark:ring-slate-700 dark:hover:bg-slate-800" href="#">
<span class="sr-only">Next</span>
<span class="material-symbols-outlined text-[20px]">chevron_right</span>
</a>
</nav>
</div>
</div>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = `body {
      font-family: 'Inter', sans-serif;
    }
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    /* Custom Scrollbar for better aesthetics */
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
    }`;

export default function AdminCandidaturas() {
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
