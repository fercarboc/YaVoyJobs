import React from 'react';

const TITLE = `YaVoy - Panel de Gestión`;
const BODY_HTML = `<div class="flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Navbar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-4 md:px-10 py-3">
<div class="flex items-center justify-between max-w-[1400px] mx-auto">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 text-primary">
<span class="material-symbols-outlined !text-[32px]">rocket_launch</span>
</div>
<h2 class="text-xl font-bold leading-tight tracking-tight">YaVoy</h2>
</div>
<div class="hidden lg:flex items-center gap-9">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Buscar Ayuda</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Buscar Empleo</a>
<a class="text-sm font-medium text-primary" href="#">Mis Anuncios</a>
</div>
<div class="flex items-center gap-3">
<button class="hidden md:flex items-center justify-center rounded-lg h-10 px-5 bg-primary hover:bg-primary-dark transition-colors text-white text-sm font-bold shadow-sm">
<span class="truncate">Publicar Anuncio</span>
</button>
<button class="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined !text-[20px]">notifications</span>
</button>
<button class="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined !text-[20px]">chat_bubble</span>
</button>
<div class="ml-2 h-10 w-10 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm cursor-pointer" data-alt="User profile picture of a smiling man" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkQTk8bqBz9u75m_qkqrCmnnixxmy1wlBxmkIXOEQh_HsCKyt42dh3VDvBzULEsoa9mD1_BVd0m78wWrno5Q1aKuq998tOsjs9pC3__7d2EWLb6Su-bJDEAn6ajSv08f39Q6nPESLbS9-N4KamRsb4_QbfWctWJ2La1IXaToiYtgPF9R5M0wrNtiSj9JxCFAj5sCJshLDgMG6j2scbtzh5K9TjsxYSkcZWAQjI8--a79FxVUBcznxp8MZYsxmGhRMBTwHVs7iQug');"></div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-10 py-8">
<!-- Page Heading & Welcome -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 class="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">Panel de Gestión</h1>
<p class="text-slate-500 dark:text-slate-400">Bienvenido de nuevo, Carlos. Aquí tienes un resumen de tu actividad.</p>
</div>
<div class="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    Último acceso: Hoy, 09:41
                </div>
</div>
<!-- Important Alert Banner -->
<div class="mb-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 flex items-start gap-3 shadow-sm">
<span class="material-symbols-outlined text-primary mt-0.5">info</span>
<div class="flex-1">
<p class="text-slate-900 dark:text-slate-100 font-semibold text-sm mb-1">Recordatorio del Sistema</p>
<p class="text-slate-600 dark:text-slate-300 text-sm">
                        Recuerda cerrar el anuncio cuando el servicio haya finalizado para evitar recibir nuevas solicitudes innecesarias. Mantener tus anuncios actualizados mejora tu reputación.
                    </p>
</div>
<button class="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300">
<span class="material-symbols-outlined !text-[20px]">close</span>
</button>
</div>
<!-- Stats Overview Row -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<!-- Stat 1 -->
<div class="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
<div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined !text-[64px] text-primary">campaign</span>
</div>
<div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Anuncios Activos</p>
<p class="text-4xl font-bold text-slate-900 dark:text-white mt-2">3</p>
</div>
<div class="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400">
<span class="material-symbols-outlined !text-[16px]">trending_up</span>
<span>+1 esta semana</span>
</div>
</div>
<!-- Stat 2 -->
<div class="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
<div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined !text-[64px] text-orange-500">group_add</span>
</div>
<div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Candidaturas Pendientes</p>
<p class="text-4xl font-bold text-slate-900 dark:text-white mt-2">5</p>
</div>
<div class="flex items-center gap-1 text-xs font-medium text-orange-600 dark:text-orange-400">
<span class="material-symbols-outlined !text-[16px]">priority_high</span>
<span>2 requieren revisión urgente</span>
</div>
</div>
<!-- Stat 3 -->
<div class="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
<div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined !text-[64px] text-purple-500">forum</span>
</div>
<div>
<p class="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase tracking-wide">Chats No Leídos</p>
<p class="text-4xl font-bold text-slate-900 dark:text-white mt-2">2</p>
</div>
<div class="flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-slate-400">
<span>Último mensaje hace 15 min</span>
</div>
</div>
</div>
<!-- Dashboard Grid Layout -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
<!-- Left Column (2/3 width) -->
<div class="lg:col-span-2 flex flex-col gap-6">
<!-- Anuncios Activos Card -->
<div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div class="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800">
<h3 class="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">list_alt</span>
                                Mis Anuncios Activos
                            </h3>
<a class="text-sm text-primary hover:text-primary-dark font-medium" href="#">Ver todos</a>
</div>
<div class="divide-y divide-slate-100 dark:divide-slate-700">
<!-- Item 1 -->
<div class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
<div class="flex items-start gap-4">
<div class="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary flex-shrink-0">
<span class="material-symbols-outlined">cleaning_services</span>
</div>
<div>
<p class="font-semibold text-slate-900 dark:text-white">Limpieza General Hogar</p>
<div class="flex flex-wrap gap-2 mt-1">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                Recurrente
                                            </span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                Activo
                                            </span>
<span class="text-xs text-slate-500 dark:text-slate-400 flex items-center">
<span class="material-symbols-outlined !text-[14px] mr-1">location_on</span> Madrid
                                            </span>
</div>
</div>
</div>
<div class="flex items-center gap-2">
<div class="text-right mr-2 hidden sm:block">
<p class="text-xs text-slate-500 dark:text-slate-400">Visitas</p>
<p class="text-sm font-bold text-slate-900 dark:text-white">124</p>
</div>
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">edit</span>
</button>
</div>
</div>
<!-- Item 2 -->
<div class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
<div class="flex items-start gap-4">
<div class="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 flex-shrink-0">
<span class="material-symbols-outlined">school</span>
</div>
<div>
<p class="font-semibold text-slate-900 dark:text-white">Clases Particulares Matemáticas</p>
<div class="flex flex-wrap gap-2 mt-1">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                                                Empleo
                                            </span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                Activo
                                            </span>
<span class="text-xs text-slate-500 dark:text-slate-400 flex items-center">
<span class="material-symbols-outlined !text-[14px] mr-1">location_on</span> Online
                                            </span>
</div>
</div>
</div>
<div class="flex items-center gap-2">
<div class="text-right mr-2 hidden sm:block">
<p class="text-xs text-slate-500 dark:text-slate-400">Visitas</p>
<p class="text-sm font-bold text-slate-900 dark:text-white">45</p>
</div>
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">edit</span>
</button>
</div>
</div>
<!-- Item 3 -->
<div class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
<div class="flex items-start gap-4">
<div class="h-12 w-12 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 flex-shrink-0">
<span class="material-symbols-outlined">yard</span>
</div>
<div>
<p class="font-semibold text-slate-900 dark:text-white">Jardinería y Poda</p>
<div class="flex flex-wrap gap-2 mt-1">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                                                Ayuda puntual
                                            </span>
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                Activo
                                            </span>
<span class="text-xs text-slate-500 dark:text-slate-400 flex items-center">
<span class="material-symbols-outlined !text-[14px] mr-1">location_on</span> Pozuelo
                                            </span>
</div>
</div>
</div>
<div class="flex items-center gap-2">
<div class="text-right mr-2 hidden sm:block">
<p class="text-xs text-slate-500 dark:text-slate-400">Visitas</p>
<p class="text-sm font-bold text-slate-900 dark:text-white">89</p>
</div>
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">edit</span>
</button>
</div>
</div>
</div>
</div>
<!-- Servicios en Curso Card -->
<div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div class="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800">
<h3 class="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">engineering</span>
                                Servicios en Curso
                            </h3>
</div>
<div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Active Service 1 -->
<div class="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-800/50">
<div class="flex justify-between items-start mb-3">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-600 text-white">
                                        En progreso
                                    </span>
<span class="text-xs text-slate-500 dark:text-slate-400">Inicio: 12 Oct</span>
</div>
<h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Paseo de perros diario</h4>
<p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Proveedor: Laura G.</p>
<div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
<div class="bg-primary h-2 rounded-full" style="width: 60%"></div>
</div>
<div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
<span>Progreso semanal</span>
<span>60%</span>
</div>
</div>
<!-- Active Service 2 -->
<div class="border border-slate-200 dark:border-slate-700 rounded-lg p-4 bg-slate-50 dark:bg-slate-800/50">
<div class="flex justify-between items-start mb-3">
<span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-blue-600 text-white">
                                        En progreso
                                    </span>
<span class="text-xs text-slate-500 dark:text-slate-400">Entrega: Mañana</span>
</div>
<h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Traducción Documentos</h4>
<p class="text-sm text-slate-600 dark:text-slate-300 mb-4">Proveedor: Pedro M.</p>
<div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
<div class="bg-primary h-2 rounded-full" style="width: 85%"></div>
</div>
<div class="flex justify-between text-xs text-slate-500 dark:text-slate-400">
<span>Estado revisión</span>
<span>85%</span>
</div>
</div>
</div>
</div>
</div>
<!-- Right Column (1/3 width) -->
<div class="flex flex-col gap-6">
<!-- Candidaturas Pendientes -->
<div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div class="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800">
<h3 class="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-orange-500">person_add</span>
                                Candidatos
                            </h3>
<span class="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-xs font-bold px-2 py-1 rounded-full">5 Nuevos</span>
</div>
<div class="p-4 flex flex-col gap-4">
<!-- Candidate 1 -->
<div class="flex gap-3 items-start">
<div class="h-10 w-10 rounded-full bg-cover bg-center flex-shrink-0" data-alt="Portrait of candidate Juan" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMVteee5VmtTU7vxhshLFmZ1cEbhAqd7UZTggIj2x_CNeltwxEfASxGAVyxDAByKXtUBEVVxNWTHFqB2XL0y-fy11T5ND_MqxSr17K9xMzkTla_UkeCf89l8gpfIDN0D2t5tLkxfzsVvjkE_UN-lVFCr1tJJx2bno9WGhh4Nv_HmEoGwW6u1AXX6m5zTkDOJJS6EMHgBIR--OYd_3p15lwhb4SRYToFj36E_rGWu1wBZqAWejBdUm4AbnXmHb9fiM5ZBN4G6IhYw');"></div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-start">
<p class="font-semibold text-sm text-slate-900 dark:text-white truncate">Juan Pérez</p>
<span class="text-[10px] text-slate-400">1h</span>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate mb-2">Aplicó a: Jardinería</p>
<div class="flex gap-2">
<button class="flex-1 bg-primary hover:bg-primary-dark text-white text-xs font-bold py-1.5 rounded transition-colors">Ver Perfil</button>
<button class="px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 text-xs font-bold py-1.5 rounded transition-colors">
<span class="material-symbols-outlined !text-[16px]">close</span>
</button>
</div>
</div>
</div>
<hr class="border-slate-100 dark:border-slate-700"/>
<!-- Candidate 2 -->
<div class="flex gap-3 items-start">
<div class="h-10 w-10 rounded-full bg-cover bg-center flex-shrink-0" data-alt="Portrait of candidate Maria" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3pzXc4-PdFmzVEGbcR3m58hpK5nEYdySyUM9J7H3HnH1kApVEatMJKWeR8kwT8pWbt7J2kujv2gTUBFFTxWecU5Gjh86YLvalgPb2VZU4PIzQB3I_vkoZYlxxWOD0Pcpvwmd0S6AbvBbgX_A49NlD3B5IG6yrY-HvuBxnqx7gVJrsVuJY1MwWivrG0BZTVaIMMNMKQclOZNJsxYtedhJRyOalHvd342ghcy9lRLwgj7tas484tsU3Qcm_qd3dmZ1CwMzzm27rOA');"></div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-start">
<p class="font-semibold text-sm text-slate-900 dark:text-white truncate">María Garcia</p>
<span class="text-[10px] text-slate-400">3h</span>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate mb-2">Aplicó a: Clases Matemáticas</p>
<div class="flex gap-2">
<button class="flex-1 bg-primary hover:bg-primary-dark text-white text-xs font-bold py-1.5 rounded transition-colors">Ver Perfil</button>
<button class="px-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 text-xs font-bold py-1.5 rounded transition-colors">
<span class="material-symbols-outlined !text-[16px]">close</span>
</button>
</div>
</div>
</div>
<a class="block text-center text-xs text-primary font-medium mt-1 hover:underline" href="#">Ver todos los candidatos</a>
</div>
</div>
<!-- Chats Abiertos -->
<div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div class="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800">
<h3 class="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">chat</span>
                                Chats
                            </h3>
</div>
<div class="divide-y divide-slate-100 dark:divide-slate-700">
<a class="flex gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors" href="#">
<div class="relative">
<div class="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of chatter Antonio" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBsbt91dDtIdAZoATzmv53OBhjLAuR4F3t_2WQ7hrRiTl1NxSD8nmV86XjEXdQdId0-WZ3EgWI52LCBbHESXnLIRmCab3_0O69uKWHR7oCP8Lv1Wodz1wmcAt2fxB67l_uGRAmeogHW_YKp9PM3kigJ5VUlHK97pUcLUtsCGjXLCQtcoTHfJPSqWyNiPtxLC3TEOBZiUO0p8dplzMHqPrHT4c3ZMo1aHl5eHxt7Zt7c1RSh9ZU1n3grR8ViAyzRGfKINYRr3YZNmw');"></div>
<span class="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white dark:ring-slate-800"></span>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-1">
<p class="text-sm font-semibold text-slate-900 dark:text-white">Antonio R.</p>
<p class="text-xs text-slate-400">10:45</p>
</div>
<p class="text-xs text-slate-600 dark:text-slate-300 truncate font-medium">¿A qué hora debo llegar mañana?</p>
</div>
</a>
<a class="flex gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors" href="#">
<div class="relative">
<div class="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of chatter Sara" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcs27raNacVt2q3l64ADrx_2a0-cpU6NEA9H0l0MX4-rjk6nmpabPgKhIm-WBfHsisxTfqGz-9SCrWy3sR1J7o1EYvZA9wsmWDhQiMlzQ69qk2HN2BKov9yz11OftKr04J-GDAX5eVk_92tcA0gpbV2lTftMCeFyV9msq03dZK-hTmBpZtx8N1Un6mwImNaZcKN_RVRA6u4qhjy0YcBo_pbD0btG0MqhPEjVP89Jxa53Jxtp9sH9TK7ox_M9jJPGsOpumZabfT2A');"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-1">
<p class="text-sm font-semibold text-slate-900 dark:text-white">Sara L.</p>
<p class="text-xs text-slate-400">Ayer</p>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate">Gracias por la oportunidad.</p>
</div>
</a>
</div>
</div>
<!-- Servicios Cerrados (Brief) -->
<div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div class="px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800">
<h3 class="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-slate-400">history</span>
                                Historial
                            </h3>
</div>
<div class="p-4">
<div class="flex items-center justify-between text-sm mb-2">
<span class="text-slate-600 dark:text-slate-300">Pintura Salón</span>
<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">Finalizado</span>
</div>
<div class="flex items-center justify-between text-sm">
<span class="text-slate-600 dark:text-slate-300">Mudanza Local</span>
<span class="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">Finalizado</span>
</div>
<a class="block text-center text-xs text-slate-400 hover:text-slate-600 font-medium mt-4" href="#">Ver historial completo</a>
</div>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 mt-auto py-8">
<div class="max-w-[1400px] mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-sm text-slate-500 dark:text-slate-400">© 2023 YaVoy España. Todos los derechos reservados.</p>
<div class="flex gap-6">
<a class="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white" href="#">Ayuda</a>
<a class="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white" href="#">Privacidad</a>
<a class="text-sm text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white" href="#">Términos</a>
</div>
</div>
</footer>
</div>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            font-size: 24px; 
            vertical-align: middle;
        }
        body {
            font-family: 'Inter', sans-serif;
        }`;

export default function PanelGestionAyudaEmpleoResumen() {
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
