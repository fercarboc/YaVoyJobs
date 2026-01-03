import React from 'react';

const TITLE = `Admin - Anuncios (Global) | YaVoy`;
const BODY_HTML = `<div class="relative flex min-h-screen w-full flex-col">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark px-6 py-3 shadow-sm">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="flex items-center gap-2">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined">rocket_launch</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy Admin</h2>
</div>
</div>
<nav class="hidden md:flex flex-1 justify-center gap-8">
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Dashboard</a>
<a class="text-primary font-bold text-sm leading-normal bg-primary/10 px-3 py-1 rounded-full" href="#">Anuncios</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Usuarios</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Reportes</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Configuración</a>
</nav>
<div class="flex items-center gap-4">
<button class="text-slate-500 hover:text-primary dark:text-slate-400">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-white dark:ring-slate-700" data-alt="Admin user profile picture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAB23oYf_f1tSghnjucIopf5Yg-KLqE5BsdApwcxCT89GNDv9herLjhBGUzrvaL1P49qrueRGTeeKWyPOGz_VL3R-kYMTnhrJPVa50VdpuSZC8rSYHJiBn65MXMogDh9M9N7FHkj881KJLKbdaYqH-Q-8T7RVpVhvv4K8sQ1Fk-N3TGXxxsENuC32efEF3AXcXRKxjq4WVWOEhX2fjrKOrusqVvagcCDTktZUIbAIx1FVnUe8-4XzB1EGo7fbHMvV6-VamoiMf7FA");'>
</div>
</div>
</header>
<!-- Main Content Layout -->
<div class="flex-1 flex flex-col w-full max-w-[1440px] mx-auto px-4 md:px-8 py-6">
<!-- Breadcrumbs -->
<div class="flex flex-wrap items-center gap-2 pb-4">
<a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm font-medium" href="#">Admin</a>
<span class="text-slate-400 text-sm font-medium">/</span>
<span class="text-slate-900 dark:text-slate-100 text-sm font-medium">Anuncios</span>
</div>
<!-- Page Heading & Meta -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div class="flex flex-col gap-2">
<h1 class="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Administración de Anuncios</h1>
<p class="text-slate-500 dark:text-slate-400 text-base font-normal max-w-2xl">Listado unificado global de anuncios para moderación y control de calidad.</p>
</div>
<div class="flex items-center gap-2">
<button class="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors shadow-sm shadow-primary/30">
<span class="material-symbols-outlined text-[20px]">add</span>
                        Crear Anuncio Manual
                    </button>
</div>
</div>
<!-- Disclaimer Banner -->
<div class="w-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-3 mb-6 flex items-start gap-3">
<span class="material-symbols-outlined text-blue-600 dark:text-blue-400 shrink-0">info</span>
<p class="text-blue-800 dark:text-blue-200 text-sm leading-relaxed pt-0.5">
<strong>Nota Importante:</strong> El administrador no es responsable de validar la veracidad de los precios ni las condiciones pactadas entre usuarios. Las acciones de moderación deben basarse en los Términos y Condiciones de YaVoy.
                </p>
<button class="ml-auto text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200">
<span class="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<!-- Filters & Actions Bar -->
<div class="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-4 mb-6">
<div class="flex flex-col lg:flex-row gap-4 justify-between">
<!-- Search -->
<div class="flex-1 min-w-[300px]">
<label class="relative block w-full">
<span class="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
<span class="material-symbols-outlined">search</span>
</span>
<input class="block w-full rounded-lg border-border-light dark:border-border-dark bg-slate-50 dark:bg-slate-800/50 py-2.5 pl-10 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm" placeholder="Buscar por ID, título o nombre de usuario..." type="text"/>
</label>
</div>
<!-- Filters Group -->
<div class="flex flex-wrap gap-3 items-center">
<!-- Type Filter -->
<div class="relative">
<select class="appearance-none h-10 w-full md:w-48 bg-slate-50 dark:bg-slate-800/50 border border-border-light dark:border-border-dark text-slate-700 dark:text-slate-300 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer">
<option disabled="" selected="" value="">Filtrar por Tipo</option>
<option value="all">Todos los tipos</option>
<option value="ayuda">Ayuda puntual</option>
<option value="servicio">Servicio recurrente</option>
<option value="empleo">Empleo</option>
<option value="inmobiliaria">Inmobiliaria</option>
<option value="marketplace">Marketplace</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span class="material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
<!-- Status Filter -->
<div class="relative">
<select class="appearance-none h-10 w-full md:w-40 bg-slate-50 dark:bg-slate-800/50 border border-border-light dark:border-border-dark text-slate-700 dark:text-slate-300 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary cursor-pointer">
<option disabled="" selected="" value="">Estado</option>
<option value="all">Todos</option>
<option value="active">Activo</option>
<option value="paused">Pausado</option>
<option value="closed">Cerrado</option>
<option value="reported">Denunciado</option>
</select>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span class="material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
<!-- Date Range (Visual only) -->
<button class="h-10 px-3 flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 border border-border-light dark:border-border-dark rounded-lg text-slate-600 dark:text-slate-400 text-sm hover:border-primary transition-colors">
<span class="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Fecha</span>
</button>
<div class="w-px h-8 bg-slate-200 dark:bg-slate-700 mx-1 hidden lg:block"></div>
<button class="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400 transition-colors">
                            Limpiar
                        </button>
</div>
</div>
</div>
<!-- Data Table Card -->
<div class="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden flex flex-col flex-1">
<div class="overflow-x-auto custom-scrollbar">
<table class="w-full text-left border-collapse">
<thead>
<tr class="border-b border-border-light dark:border-border-dark bg-slate-50/50 dark:bg-slate-800/30">
<th class="p-4 w-12">
<input class="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-700 dark:border-slate-600" type="checkbox"/>
</th>
<th class="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-20">ID</th>
<th class="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Detalles del Anuncio</th>
<th class="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-40">Usuario</th>
<th class="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32">Tipo</th>
<th class="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32">Estado</th>
<th class="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-32">Precio</th>
<th class="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-24 text-center">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-border-light dark:divide-border-dark text-sm">
<!-- Row 1: Reported Item (Critical) -->
<tr class="bg-red-50/50 dark:bg-red-900/10 hover:bg-red-100/50 dark:hover:bg-red-900/20 transition-colors group">
<td class="p-4 align-top">
<input class="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-700 dark:border-slate-600 mt-1" type="checkbox"/>
</td>
<td class="p-4 font-mono text-xs text-slate-500 align-top mt-1">#9821</td>
<td class="p-4 align-top">
<div class="flex flex-col gap-1">
<a class="font-bold text-slate-900 dark:text-white hover:text-primary hover:underline line-clamp-1" href="#">
                                            Venta de Iphone 14 Pro Max Barato Urgente
                                        </a>
<span class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">Solo envíos, no acepto pago en mano. Transferencia inmediata...</span>
<div class="flex items-center gap-1 mt-1 text-red-600 text-xs font-medium">
<span class="material-symbols-outlined text-[14px]">warning</span>
                                            Reportado por 3 usuarios: "Estafa probable"
                                        </div>
</div>
</td>
<td class="p-4 align-top">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover" data-alt="Avatar user 1" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBlWGL0YdTwKovdsljW2PCR7mS1q1SdS7k18Y8_8Njge3Ls0jBzwBo4VPCWVlJ9xrsSyafvQU0i2mm42xw_PTGE96qTiyi5BBPAMx8Dt2V70DrwKYAlJR6ZKEuUKElGitDwTx5gO3M9RB6bENNNOfffmsKiO9Zdu9vlmu1AOhE6Py5mIZVmTCg6xzug69dGG-RmN_3T5o38rk-Td17gcqSJKvMVQexW73NmUim02a--5VqAtC6yXZGAHcOLv5F57C0rWXZsFJ7f4Q");'></div>
<a class="text-primary hover:underline font-medium" href="#">CarlosM</a>
</div>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/40 px-2 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 ring-1 ring-inset ring-orange-600/20">
                                        Marketplace
                                    </span>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/40 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-300 ring-1 ring-inset ring-red-600/20">
                                        Denunciado
                                    </span>
</td>
<td class="p-4 align-top font-medium text-slate-700 dark:text-slate-300">
                                    500€
                                </td>
<td class="p-4 align-top text-center">
<div class="flex items-center justify-center gap-1 opacity-100 group-hover:opacity-100 transition-opacity">
<button class="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Ver Anuncio">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-1.5 text-red-500 hover:text-white hover:bg-red-500 rounded-md transition-colors" title="Forzar Cierre">
<span class="material-symbols-outlined text-[20px]">cancel</span>
</button>
</div>
</td>
</tr>
<!-- Row 2: Active Service -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
<td class="p-4 align-top">
<input class="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-700 dark:border-slate-600 mt-1" type="checkbox"/>
</td>
<td class="p-4 font-mono text-xs text-slate-500 align-top mt-1">#9820</td>
<td class="p-4 align-top">
<div class="flex flex-col gap-1">
<a class="font-bold text-slate-900 dark:text-white hover:text-primary hover:underline line-clamp-1" href="#">
                                            Paseo de perros zona Retiro / Goya
                                        </a>
<span class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">Disponibilidad de tardes. Tengo experiencia con razas grandes...</span>
</div>
</td>
<td class="p-4 align-top">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover" data-alt="Avatar user 2" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6e4V1EaJJWtZsqD0M5JZ2inmFN_vbAgSsUA8awL9M5sSsLg8x5L01vMKdWgZxrAuNz5HcxbTvmi_5KBZDUYTIIvOcw1w2jKdTTqfE7mK_59SGdO1dHTmtzjCO3-3uRe2HQ-RPIqDTGMxr6Gk8-bKgH2EQKCo6ECE7E8Pt962VtKg_egi2mPhi5Jd5rJw8K7k6SjnzYl_tz0bTXXCdoRKklym4yOBmUweDCfudEmxr0qhoXN_--z64LETfzobfRDw6liO2-bhyRQ");'></div>
<a class="text-primary hover:underline font-medium" href="#">Ana_Dogs</a>
</div>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/40 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300 ring-1 ring-inset ring-blue-700/10">
                                        Ayuda puntual
                                    </span>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/40 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                                        Activo
                                    </span>
</td>
<td class="p-4 align-top font-medium text-slate-700 dark:text-slate-300">
                                    10€/h
                                </td>
<td class="p-4 align-top text-center">
<div class="flex items-center justify-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<button class="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Ver Anuncio">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-1.5 text-slate-400 hover:text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-md transition-colors" title="Pausar">
<span class="material-symbols-outlined text-[20px]">pause_circle</span>
</button>
<button class="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-md transition-colors" title="Marcar como Revisado">
<span class="material-symbols-outlined text-[20px]">check_circle</span>
</button>
</div>
</td>
</tr>
<!-- Row 3: Paused Item -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
<td class="p-4 align-top">
<input class="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-700 dark:border-slate-600 mt-1" type="checkbox"/>
</td>
<td class="p-4 font-mono text-xs text-slate-500 align-top mt-1">#9819</td>
<td class="p-4 align-top">
<div class="flex flex-col gap-1">
<a class="font-bold text-slate-900 dark:text-white hover:text-primary hover:underline line-clamp-1" href="#">
                                            Profesor de Matemáticas ESO/Bachillerato
                                        </a>
<span class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">Clases particulares a domicilio o online. Primera clase gratis...</span>
</div>
</td>
<td class="p-4 align-top">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover" data-alt="Avatar user 3" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXXV9a6Q0DXeTfmXrQkpmqSrM2yfnFFRmI_w7MFLUWwexSQK9RPeqi45ejNFMbp-Hfy68TrMCrbaQBSza-OK8llWrLNed_zZPTzMQI7vZp_AxXN1zWzP7wGfrCNqdVlBMJE15IPv0M6CzAhTVzyc3diU_JgFAWAeSi52nAfpW8IG2CMbuOysi7hKVEDqZjF-WtsdJ9PmMmEV0HxRlOvuIk5ARhpO8DfYs2IiBQiXuTqERjuJdtIh-BNTsfTIk8mHX9L07qbikktg");'></div>
<a class="text-primary hover:underline font-medium" href="#">Javier_Profe</a>
</div>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-purple-100 dark:bg-purple-900/40 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 ring-1 ring-inset ring-purple-700/10">
                                        Servicio recurrente
                                    </span>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-amber-100 dark:bg-amber-900/40 px-2 py-1 text-xs font-medium text-amber-700 dark:text-amber-300 ring-1 ring-inset ring-amber-600/20">
                                        Pausado
                                    </span>
</td>
<td class="p-4 align-top font-medium text-slate-700 dark:text-slate-300">
                                    25€/h
                                </td>
<td class="p-4 align-top text-center">
<div class="flex items-center justify-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<button class="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Ver Anuncio">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-md transition-colors" title="Forzar Cierre">
<span class="material-symbols-outlined text-[20px]">cancel</span>
</button>
</div>
</td>
</tr>
<!-- Row 4: Real Estate -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
<td class="p-4 align-top">
<input class="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-700 dark:border-slate-600 mt-1" type="checkbox"/>
</td>
<td class="p-4 font-mono text-xs text-slate-500 align-top mt-1">#9815</td>
<td class="p-4 align-top">
<div class="flex flex-col gap-1">
<a class="font-bold text-slate-900 dark:text-white hover:text-primary hover:underline line-clamp-1" href="#">
                                            Habitación luminosa en Malasaña
                                        </a>
<span class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">Buscamos compañer@ de piso tranquilo. Gastos incluidos...</span>
</div>
</td>
<td class="p-4 align-top">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover" data-alt="Avatar user 4" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkWrYwjjerNztxXsDCwsQSdVjZsuBpsU2vLwY_cTpSU4im7QCr5aUl4VDQT15kzuZw9-P7RnwMqhlaFTJKwxtG128uHRDcptFBEwU8-qoJU66Bg9G38wmXgUrAoIDF415eqD7EKjg7rLg11JamU43Jp7wnP3cE8s53dvM31NfQjyRE-3d3Yx3sxYpuHqIkYFw-X3RjYXAX_v76LgEyIh8GfF1UjuXqrkj5iqSGatFNSoE-IZqg1XWmjVDwuAAZRd6LJaw2FtGrOQ");'></div>
<a class="text-primary hover:underline font-medium" href="#">LauraPisos</a>
</div>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-teal-100 dark:bg-teal-900/40 px-2 py-1 text-xs font-medium text-teal-700 dark:text-teal-300 ring-1 ring-inset ring-teal-700/10">
                                        Inmobiliaria
                                    </span>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/40 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-600/20">
                                        Activo
                                    </span>
</td>
<td class="p-4 align-top font-medium text-slate-700 dark:text-slate-300">
                                    450€/mes
                                </td>
<td class="p-4 align-top text-center">
<div class="flex items-center justify-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<button class="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Ver Anuncio">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-1.5 text-slate-400 hover:text-amber-500 hover:bg-amber-100 dark:hover:bg-amber-900/30 rounded-md transition-colors" title="Pausar">
<span class="material-symbols-outlined text-[20px]">pause_circle</span>
</button>
<button class="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-md transition-colors" title="Marcar como Revisado">
<span class="material-symbols-outlined text-[20px]">check_circle</span>
</button>
</div>
</td>
</tr>
<!-- Row 5: Closed Item -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group opacity-60">
<td class="p-4 align-top">
<input class="rounded border-slate-300 text-primary focus:ring-primary bg-white dark:bg-slate-700 dark:border-slate-600 mt-1" type="checkbox"/>
</td>
<td class="p-4 font-mono text-xs text-slate-500 align-top mt-1">#9788</td>
<td class="p-4 align-top">
<div class="flex flex-col gap-1">
<a class="font-bold text-slate-900 dark:text-white hover:text-primary hover:underline line-clamp-1" href="#">
                                            Vendo Sofá Chaise Longue
                                        </a>
<span class="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">Vendido fuera de la plataforma.</span>
</div>
</td>
<td class="p-4 align-top">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500 font-bold">MP</div>
<a class="text-primary hover:underline font-medium" href="#">MariaP</a>
</div>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/40 px-2 py-1 text-xs font-medium text-orange-700 dark:text-orange-300 ring-1 ring-inset ring-orange-600/20">
                                        Marketplace
                                    </span>
</td>
<td class="p-4 align-top">
<span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700/40 px-2 py-1 text-xs font-medium text-slate-600 dark:text-slate-400 ring-1 ring-inset ring-slate-500/10">
                                        Cerrado
                                    </span>
</td>
<td class="p-4 align-top font-medium text-slate-700 dark:text-slate-300">
                                    200€
                                </td>
<td class="p-4 align-top text-center">
<div class="flex items-center justify-center gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<button class="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors" title="Ver Anuncio">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination -->
<div class="flex items-center justify-between border-t border-border-light dark:border-border-dark bg-white dark:bg-card-dark px-4 py-3 sm:px-6 mt-auto">
<div class="flex flex-1 justify-between sm:hidden">
<a class="relative inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#">Anterior</a>
<a class="relative ml-3 inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50" href="#">Siguiente</a>
</div>
<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
<div>
<p class="text-sm text-slate-700 dark:text-slate-300">
                                Mostrando <span class="font-medium">1</span> a <span class="font-medium">10</span> de <span class="font-medium">97</span> resultados
                            </p>
</div>
<div>
<nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-sm">
<a class="relative inline-flex items-center rounded-l-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0" href="#">
<span class="sr-only">Previous</span>
<span class="material-symbols-outlined text-[20px]">chevron_left</span>
</a>
<a aria-current="page" class="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="#">1</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0" href="#">2</a>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0" href="#">3</a>
<span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-400 ring-1 ring-inset ring-slate-300 dark:ring-slate-600 focus:outline-offset-0">...</span>
<a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0" href="#">10</a>
<a class="relative inline-flex items-center rounded-r-md px-2 py-2 text-slate-400 ring-1 ring-inset ring-slate-300 dark:ring-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 focus:z-20 focus:outline-offset-0" href="#">
<span class="sr-only">Next</span>
<span class="material-symbols-outlined text-[20px]">chevron_right</span>
</a>
</nav>
</div>
</div>
</div>
</div>
<!-- Footer -->
<footer class="mt-8 text-center text-xs text-slate-400">
<p>© 2023 YaVoy Inc. Panel de Administración v2.4. Todos los derechos reservados.</p>
</footer>
</div>
</div>`;
const EXTRA_CSS = `/* Custom scrollbar for table if needed */
        .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
            width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 4px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #475569;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            vertical-align: middle;
        }
        .icon-filled {
            font-variation-settings: 'FILL' 1;
        }`;

export default function AdminAnunciosGlobal() {
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
