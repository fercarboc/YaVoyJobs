import React from 'react';

const TITLE = `YaVoy - Publicar Anuncio`;
const BODY_HTML = `<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- TopNavBar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white/90 backdrop-blur-md px-4 py-3 md:px-10 dark:border-slate-800 dark:bg-slate-900/90">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
<span class="material-symbols-outlined text-[20px]">location_on</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-tight">YaVoy</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mis Anuncios</a>
<a class="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mensajes</a>
<a class="text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mi Perfil</a>
</div>
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-sm hover:bg-blue-600 transition-colors">
<span class="truncate">Publicar Anuncio</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700 cursor-pointer" data-alt="User profile picture placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSRFqeev3EHjr8b4iCJEApyb37KqC-nYUIeRc1QBsISxK6UEMZcAqiyozpFVAoS_msWcVjrn6WM-T1r8EolUiyWvJyT_rTxk-kw1DxiVsNKaHJ4nQdbECyCCODGjFS-6TBjYloUrecMH6Qn9ZtHIOYFmNAefV3YesiNJwL3Ia9YFFY_cWcfwLaaouE3TviGBTYsxfkBcxdplrp4a_oSTJhtXJA0CHZnZ6wvarc5BtdRZ1n2qSrtB1lpkG392kyDPK7RYJyoSYiNw");'>
</div>
</div>
<!-- Mobile Menu Icon -->
<button class="md:hidden text-slate-600 dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<!-- Main Content Layout -->
<main class="flex-1 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
<div class="w-full max-w-[960px] flex flex-col gap-6">
<!-- Breadcrumbs -->
<nav class="flex flex-wrap gap-2 text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary transition-colors" href="#">Inicio</a>
<span>/</span>
<a class="hover:text-primary transition-colors" href="#">Panel Anunciante</a>
<span>/</span>
<span class="text-slate-900 dark:text-slate-200 font-medium">Nuevo Anuncio</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col gap-2">
<h1 class="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Publicar nuevo anuncio</h1>
<p class="text-slate-500 dark:text-slate-400">Completa la información de tu inmueble paso a paso.</p>
</div>
<!-- Stepper / Progress Bar -->
<!-- Designed to look like a timeline/wizard -->
<div class="w-full py-4 overflow-x-auto">
<div class="flex items-center justify-between min-w-[600px] px-2">
<!-- Step 1: Completed -->
<div class="flex flex-col items-center gap-2 group cursor-pointer">
<div class="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<span class="text-xs font-semibold text-primary">Tipo</span>
</div>
<div class="flex-1 h-[2px] bg-primary mx-2"></div>
<!-- Step 2: Completed -->
<div class="flex flex-col items-center gap-2 group cursor-pointer">
<div class="flex items-center justify-center size-8 rounded-full bg-primary text-white font-bold text-sm">
<span class="material-symbols-outlined text-[16px]">check</span>
</div>
<span class="text-xs font-semibold text-primary">Datos</span>
</div>
<div class="flex-1 h-[2px] bg-primary mx-2"></div>
<!-- Step 3: Active -->
<div class="flex flex-col items-center gap-2 group cursor-pointer">
<div class="flex items-center justify-center size-8 rounded-full bg-white border-2 border-primary text-primary font-bold text-sm shadow-sm ring-4 ring-primary/10">
                                3
                            </div>
<span class="text-xs font-bold text-slate-900 dark:text-white">Características</span>
</div>
<div class="flex-1 h-[2px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
<!-- Step 4: Pending -->
<div class="flex flex-col items-center gap-2 group opacity-50">
<div class="flex items-center justify-center size-8 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-500 font-bold text-sm dark:bg-slate-800 dark:border-slate-600">
                                4
                            </div>
<span class="text-xs font-medium text-slate-500 dark:text-slate-400">Fotos</span>
</div>
<div class="flex-1 h-[2px] bg-slate-200 dark:bg-slate-700 mx-2"></div>
<!-- Step 5: Pending -->
<div class="flex flex-col items-center gap-2 group opacity-50">
<div class="flex items-center justify-center size-8 rounded-full bg-slate-100 border-2 border-slate-300 text-slate-500 font-bold text-sm dark:bg-slate-800 dark:border-slate-600">
                                5
                            </div>
<span class="text-xs font-medium text-slate-500 dark:text-slate-400">Legal</span>
</div>
</div>
</div>
<!-- Form Container -->
<div class="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
<!-- Simulating a long scroll form for the design output, properly sectioned -->
<form class="divide-y divide-slate-100 dark:divide-slate-700">
<!-- PASO 1: TIPO (Simulated as minimized/edit mode or expanded for demo) -->
<div class="p-6 md:p-8">
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="flex items-center justify-center size-6 rounded-full bg-slate-100 text-slate-600 text-xs dark:bg-slate-700 dark:text-slate-300">1</span>
                                    Tipo de anuncio
                                </h3>
<button class="text-primary text-sm font-medium hover:underline" type="button">Editar</button>
</div>
<!-- Grid Selection -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<!-- Active Selection -->
<label class="cursor-pointer relative group">
<input checked="" class="peer sr-only" name="type" type="radio"/>
<div class="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 border-primary bg-primary/5 text-primary transition-all shadow-sm">
<span class="material-symbols-outlined text-3xl">apartment</span>
<span class="text-sm font-bold">Alquiler Piso</span>
</div>
<div class="absolute top-2 right-2 text-primary opacity-100">
<span class="material-symbols-outlined text-sm">check_circle</span>
</div>
</label>
<label class="cursor-pointer relative group">
<input class="peer sr-only" name="type" type="radio"/>
<div class="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-primary/50 hover:bg-slate-50 transition-all dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary">
<span class="material-symbols-outlined text-3xl">home</span>
<span class="text-sm font-medium">Venta Piso</span>
</div>
</label>
<label class="cursor-pointer relative group">
<input class="peer sr-only" name="type" type="radio"/>
<div class="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-primary/50 hover:bg-slate-50 transition-all dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary">
<span class="material-symbols-outlined text-3xl">bed</span>
<span class="text-sm font-medium">Habitación</span>
</div>
</label>
<label class="cursor-pointer relative group">
<input class="peer sr-only" name="type" type="radio"/>
<div class="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-slate-200 bg-white text-slate-500 hover:border-primary/50 hover:bg-slate-50 transition-all dark:bg-slate-800 dark:border-slate-600 dark:text-slate-400 peer-checked:border-primary peer-checked:bg-primary/5 peer-checked:text-primary">
<span class="material-symbols-outlined text-3xl">storefront</span>
<span class="text-sm font-medium">Local</span>
</div>
</label>
</div>
</div>
<!-- PASO 2: DATOS -->
<div class="p-6 md:p-8 bg-slate-50/50 dark:bg-slate-800/50">
<div class="flex items-center justify-between mb-6">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="flex items-center justify-center size-6 rounded-full bg-slate-100 text-slate-600 text-xs dark:bg-slate-700 dark:text-slate-300">2</span>
                                    Datos principales
                                </h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<div class="col-span-1 md:col-span-2">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Título del anuncio</label>
<input class="w-full rounded-lg border-slate-300 bg-white px-3 py-2.5 text-slate-900 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-600 dark:text-white" placeholder="Ej: Piso luminoso en el centro de Madrid" type="text" value="Piso luminoso en zona céntrica"/>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Precio mensual</label>
<div class="relative">
<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span class="text-slate-500">€</span>
</div>
<input class="w-full rounded-lg border-slate-300 bg-white pl-8 pr-12 py-2.5 text-slate-900 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-600 dark:text-white" placeholder="0.00" type="number" value="1200"/>
<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
<span class="text-slate-500 text-sm">/mes</span>
</div>
</div>
</div>
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Zona / Barrio</label>
<div class="relative">
<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<span class="material-symbols-outlined text-slate-400 text-[20px]">map</span>
</div>
<input class="w-full rounded-lg border-slate-300 bg-white pl-10 px-3 py-2.5 text-slate-900 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-600 dark:text-white" placeholder="Buscar ubicación..." type="text" value="Chamberí, Madrid"/>
</div>
</div>
<div class="col-span-1 md:col-span-2">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Descripción</label>
<textarea class="w-full rounded-lg border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-600 dark:text-white" placeholder="Describe los detalles del inmueble..." rows="4">Espectacular piso reformado con acabados de lujo. Consta de salón comedor amplio, cocina equipada...</textarea>
<p class="mt-1 text-xs text-slate-400 text-right">0/3000 caracteres</p>
</div>
</div>
</div>
<!-- PASO 3: CARACTERÍSTICAS (Active highlight) -->
<div class="p-6 md:p-8 relative">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"></div> <!-- Active indicator -->
<div class="flex items-center justify-between mb-6">
<h3 class="text-lg font-bold text-primary dark:text-white flex items-center gap-2">
<span class="flex items-center justify-center size-6 rounded-full bg-primary text-white text-xs">3</span>
                                    Características
                                </h3>
<span class="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold uppercase tracking-wide">Editando</span>
</div>
<div class="space-y-8">
<!-- Numeric Inputs -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
<div>
<label class="block text-xs uppercase font-bold text-slate-500 mb-2">Superficie</label>
<div class="flex items-center">
<input class="w-full rounded-l-lg border-slate-300 py-2 text-center text-slate-900 focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-600 dark:text-white" type="number" value="85"/>
<span class="inline-flex items-center px-3 py-2 rounded-r-lg border border-l-0 border-slate-300 bg-slate-50 text-slate-500 text-sm dark:bg-slate-800 dark:border-slate-600">m²</span>
</div>
</div>
<div>
<label class="block text-xs uppercase font-bold text-slate-500 mb-2">Habitaciones</label>
<div class="flex items-center rounded-lg border border-slate-300 bg-white overflow-hidden dark:bg-slate-900 dark:border-slate-600">
<button class="px-3 py-2 hover:bg-slate-100 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800" type="button">-</button>
<input class="w-full border-none p-0 text-center focus:ring-0 dark:bg-slate-900 dark:text-white" readonly="" type="text" value="2"/>
<button class="px-3 py-2 hover:bg-slate-100 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800" type="button">+</button>
</div>
</div>
<div>
<label class="block text-xs uppercase font-bold text-slate-500 mb-2">Baños</label>
<div class="flex items-center rounded-lg border border-slate-300 bg-white overflow-hidden dark:bg-slate-900 dark:border-slate-600">
<button class="px-3 py-2 hover:bg-slate-100 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800" type="button">-</button>
<input class="w-full border-none p-0 text-center focus:ring-0 dark:bg-slate-900 dark:text-white" readonly="" type="text" value="1"/>
<button class="px-3 py-2 hover:bg-slate-100 text-slate-600 dark:text-slate-300 dark:hover:bg-slate-800" type="button">+</button>
</div>
</div>
<div>
<label class="block text-xs uppercase font-bold text-slate-500 mb-2">Planta</label>
<input class="w-full rounded-lg border-slate-300 py-2 text-center text-slate-900 focus:border-primary focus:ring-primary dark:bg-slate-900 dark:border-slate-600 dark:text-white" placeholder="Ej: 3" type="number"/>
</div>
</div>
<!-- Amenities Pills -->
<div>
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Extras y Equipamiento</label>
<div class="flex flex-wrap gap-3">
<!-- Active Pill -->
<button class="flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary text-sm font-medium transition-all shadow-sm" type="button">
<span class="material-symbols-outlined text-[18px]">check</span>
                                            Ascensor
                                        </button>
<!-- Inactive Pills -->
<button class="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" type="button">
<span class="material-symbols-outlined text-[18px] opacity-0 w-0 group-hover:w-auto group-hover:opacity-100 transition-all">add</span>
                                            Amueblado
                                        </button>
<button class="flex items-center gap-2 px-4 py-2 rounded-full border border-primary bg-primary/10 text-primary text-sm font-medium transition-all shadow-sm" type="button">
<span class="material-symbols-outlined text-[18px]">check</span>
                                            Aire Acondicionado
                                        </button>
<button class="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" type="button">
                                            Terraza
                                        </button>
<button class="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" type="button">
                                            Mascotas permitidas
                                        </button>
<button class="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-600 text-sm font-medium hover:border-slate-300 hover:bg-slate-50 transition-all dark:bg-slate-800 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700" type="button">
                                            Garaje
                                        </button>
</div>
</div>
</div>
</div>
<!-- PASO 4: FOTOS -->
<div class="p-6 md:p-8">
<div class="flex items-center justify-between mb-6">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="flex items-center justify-center size-6 rounded-full bg-slate-100 text-slate-600 text-xs dark:bg-slate-700 dark:text-slate-300">4</span>
                                    Imágenes
                                </h3>
</div>
<!-- Dropzone -->
<div class="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center hover:bg-slate-100 transition-colors dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 cursor-pointer">
<div class="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-100 text-primary mb-3">
<span class="material-symbols-outlined text-2xl">cloud_upload</span>
</div>
<p class="text-sm font-medium text-slate-900 dark:text-white">Haz clic para subir o arrastra las fotos aquí</p>
<p class="text-xs text-slate-500 mt-1">JPG, PNG hasta 5MB</p>
</div>
<!-- Image Grid Preview -->
<div class="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
<!-- Image 1 (Main) -->
<div class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200 ring-2 ring-primary ring-offset-2 dark:ring-offset-slate-800">
<div class="absolute top-2 left-2 z-10 rounded bg-primary px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider shadow-sm">Principal</div>
<img alt="Interior salón" class="h-full w-full object-cover" data-alt="Modern living room interior with natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDd8Aixwy_pAhUIvSX9CoGpZPIpW2XILRK9UoOf1GiyybiFQsoCu4LEEzk-hZuxm4zZv123KBO-kftpxj7ByviZy0GWkvGVLKrjRu6AYF_Czix-6C9VeBc3ehp_PeFXSBncm1E7E1SsrW1P-nL4K2O4XoO1MpO9hgYBczMt5JL6NJOXbJA84IoTtD3OZAn7GPM3tMQfFNhhIgQoFfQJXsuibwy7xYZzH2SUko5vBItuO4Ibtv-uH2FSYnPMGHtcbjE27MqmSh90g"/>
<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button class="p-1.5 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm" type="button"><span class="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
<!-- Image 2 -->
<div class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200">
<img alt="Cocina moderna" class="h-full w-full object-cover" data-alt="Modern kitchen with white cabinets" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-30ltAzhqseleZXTyh88TKxFVrUXb-i0pSzkr_82yk9qjDdRzBQloNqWxMRxFFZQ3sCuLWhU7Lhta9xsXaSqUllJfL5qgmUS5BnzYq6kTM0sicfqJ1-_pkbDGjRuEGdFApgGbA72i8xhrY2qFm7SOw92qFV3jZezTdGqcV71OvxcCFvy8PH_JwaYHUYaDlZZeG0bvbqqKY4_tWSPMAVtvnDlLyqmFMqngxlqR1Bqp11RrX9-gVyxpxil2QpWsZS8RT4yKHA0xdQ"/>
<div class="absolute top-2 right-2 p-1 bg-white/80 rounded cursor-move text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"><span class="material-symbols-outlined text-sm">drag_indicator</span></div>
<div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
<button class="p-1.5 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm" type="button"><span class="material-symbols-outlined text-sm">star</span></button>
<button class="p-1.5 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-sm" type="button"><span class="material-symbols-outlined text-sm">delete</span></button>
</div>
</div>
<!-- Image 3 -->
<div class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-200">
<img alt="Baño reformado" class="h-full w-full object-cover" data-alt="Clean renovated bathroom" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp2G6nwLk_oEkYTWEhJkH0qII7K3rYkK3ttTsFGBeEfIrjGxhnFDxnrKa2cbo5Hhn391p_Vsyt35fRGDBAfC_EXnHu3h_QkUbZ-6XhHlGG3Inc_XtDic-WlYAQ3xiZ9j6YCQwwX_0HjEkEBd-9juh1qPB51EowE3XYbRgy2v8Ak5DTq8Qgdg9AQkUpSRcb_PWKimCQBiE7GsT4xq9TUOHVD9QrY0X_LFn_aYvZ7LdE6dwTEoOhe6bmjqCdlSxfTKTZQ3T6QojoHQ"/>
<div class="absolute top-2 right-2 p-1 bg-white/80 rounded cursor-move text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity"><span class="material-symbols-outlined text-sm">drag_indicator</span></div>
</div>
</div>
</div>
<!-- PASO 5: LEGAL & ACTION -->
<div class="p-6 md:p-8 bg-slate-50/50 dark:bg-slate-800/50">
<div class="flex items-center justify-between mb-4">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="flex items-center justify-center size-6 rounded-full bg-slate-100 text-slate-600 text-xs dark:bg-slate-700 dark:text-slate-300">5</span>
                                    Confirmación
                                </h3>
</div>
<div class="rounded-lg bg-blue-50 border border-blue-100 p-4 mb-6 dark:bg-blue-900/20 dark:border-blue-800">
<label class="flex items-start gap-3 cursor-pointer">
<div class="flex items-center h-6">
<input class="size-5 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
</div>
<span class="text-sm text-slate-700 dark:text-slate-300 leading-snug select-none">
                                        Declaro que tengo derecho legítimo para anunciar este inmueble y entiendo que <strong class="text-slate-900 dark:text-white">YaVoy</strong> no intermedia en la operación, actuando únicamente como plataforma publicitaria.
                                    </span>
</label>
</div>
<!-- Action Buttons -->
<div class="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
<button class="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800" type="button">
                                    Guardar Borrador
                                </button>
<div class="flex w-full sm:w-auto gap-4">
<button class="flex-1 sm:flex-none px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800" type="button">
                                        Atrás
                                    </button>
<button class="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-2.5 rounded-lg bg-primary text-white font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-600 hover:shadow-blue-500/40 transition-all transform active:scale-95" type="button">
                                        Publicar Anuncio
                                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
</div>
</form>
</div>
<p class="text-center text-xs text-slate-400 pb-8">© 2024 YaVoy España. Todos los derechos reservados.</p>
</div>
</main>
</div>
<!-- Script for simple interactivity demonstration -->`;
const EXTRA_CSS = `/* Custom scrollbar for a cleaner look */
        ::-webkit-scrollbar {
            width: 8px;
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
        
        .step-active {
            @apply border-primary ring-1 ring-primary;
        }`;

export default function PanelAnuncianteCrearEditarAnuncio() {
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
