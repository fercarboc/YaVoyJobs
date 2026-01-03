import React from 'react';

const TITLE = `YaVoy - Panel Colaborador`;
const BODY_HTML = `<!-- Header -->
<header class="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-16">
<!-- Logo -->
<div class="flex items-center gap-2">
<div class="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
<span class="material-symbols-outlined">rocket_launch</span>
</div>
<h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
<!-- Navigation -->
<nav class="hidden md:flex gap-8">
<a class="text-primary font-bold text-sm leading-normal border-b-2 border-primary py-5" href="#">Explorar</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal py-5 transition-colors" href="#">Mis Candidaturas</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal py-5 transition-colors" href="#">Mensajes</a>
</nav>
<!-- Actions -->
<div class="flex items-center gap-4">
<button class="flex items-center justify-center size-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative">
<span class="material-symbols-outlined text-[20px]">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-800"></span>
</button>
<div class="flex items-center gap-3 pl-2 border-l border-slate-200 dark:border-slate-700">
<div class="text-right hidden sm:block">
<p class="text-sm font-bold text-slate-900 dark:text-white">Alex M.</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Colaborador</p>
</div>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-slate-100 dark:ring-slate-800" data-alt="User profile picture showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCcmPNdmWPntZTPFG3LGlNd3U3PFsx20DCyhs0_G78BUZPOCOH44IZtte0QzVuNhihGQyT0ql5f5C58rIKfiOzaTlBxjMHA-TVPhfJH-pv-d3uwcqqo-zdrbYIvk5hYz6Aa1IiufKlUv0fHMOrh9Q0W1qeUzgmyKDbNIpUir1mu3BnwiwnX9N-H1M7QjjbKxku0MYw8x09_CRcQLDx5nAxkqpS8NDmCCM2HnPCnhKxP6bHapkjKs1cZiPWEIrSrPCOXRnJeyAQoJQ");'></div>
</div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
<div class="flex flex-col lg:flex-row gap-8">
<!-- Filters Sidebar -->
<aside class="w-full lg:w-80 flex-shrink-0">
<div class="sticky top-24 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
<span class="material-symbols-outlined text-primary">filter_list</span>
                            Filtros
                        </h3>
<button class="text-sm text-slate-500 hover:text-primary font-medium">Limpiar</button>
</div>
<div class="p-5 space-y-6">
<!-- Location Filter -->
<div class="space-y-3">
<label class="text-sm font-bold text-slate-900 dark:text-white">Zona</label>
<div class="relative">
<input class="w-full h-11 pl-10 pr-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Ciudad, Distrito o Barrio"/>
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">location_on</span>
</div>
</div>
<!-- Type Filter -->
<div class="space-y-3">
<label class="text-sm font-bold text-slate-900 dark:text-white">Tipo de servicio</label>
<div class="space-y-2">
<label class="flex items-center gap-3 cursor-pointer group">
<input checked="" class="custom-checkbox size-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-offset-0 focus:ring-0 cursor-pointer bg-slate-50 dark:bg-slate-800 checked:bg-primary checked:border-primary transition-all" type="checkbox"/>
<span class="text-slate-600 dark:text-slate-300 text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Ayuda puntual</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="custom-checkbox size-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-offset-0 focus:ring-0 cursor-pointer bg-slate-50 dark:bg-slate-800 checked:bg-primary checked:border-primary transition-all" type="checkbox"/>
<span class="text-slate-600 dark:text-slate-300 text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Servicio recurrente</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="custom-checkbox size-5 rounded border-slate-300 dark:border-slate-600 text-primary focus:ring-offset-0 focus:ring-0 cursor-pointer bg-slate-50 dark:bg-slate-800 checked:bg-primary checked:border-primary transition-all" type="checkbox"/>
<span class="text-slate-600 dark:text-slate-300 text-sm group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Empleo</span>
</label>
</div>
</div>
<!-- Date Filter -->
<div class="space-y-3">
<label class="text-sm font-bold text-slate-900 dark:text-white">Fecha y Disponibilidad</label>
<div class="relative">
<input class="w-full h-11 pl-10 pr-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" onblur="(this.type='text')" onfocus="(this.type='date')" placeholder="Seleccionar fechas" type="text"/>
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">calendar_today</span>
</div>
</div>
<!-- Price Filter -->
<div class="space-y-3">
<label class="text-sm font-bold text-slate-900 dark:text-white">Presupuesto (€)</label>
<div class="flex items-center gap-2">
<div class="relative flex-1">
<input class="w-full h-10 pl-8 pr-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Min" type="number"/>
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">€</span>
</div>
<span class="text-slate-400">-</span>
<div class="relative flex-1">
<input class="w-full h-10 pl-8 pr-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Max" type="number"/>
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">€</span>
</div>
</div>
</div>
<hr class="border-slate-200 dark:border-slate-800"/>
<!-- Verification Toggle -->
<div class="flex items-center justify-between">
<span class="text-sm font-medium text-slate-700 dark:text-slate-200">Solo verificados</span>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
</aside>
<!-- Results Column -->
<div class="flex-1 flex flex-col gap-6">
<!-- Results Header -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h1 class="text-2xl font-bold text-slate-900 dark:text-white">124 Anuncios disponibles</h1>
<div class="flex items-center gap-2">
<span class="text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">Ordenar por:</span>
<div class="relative">
<select class="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-medium rounded-lg pl-3 pr-8 py-2 focus:ring-2 focus:ring-primary/20 focus:border-primary cursor-pointer">
<option>Más recientes</option>
<option>Precio: Mayor a menor</option>
<option>Precio: Menor a mayor</option>
</select>
<span class="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-[18px]">expand_more</span>
</div>
</div>
</div>
<!-- Cards Grid -->
<div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
<!-- Card 1 -->
<div class="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col">
<div class="flex justify-between items-start mb-3">
<div class="flex gap-2">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 uppercase tracking-wide">
                                    Ayuda puntual
                                </span>
</div>
<div class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800/30">
<span class="material-symbols-outlined text-[16px]">verified</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Verificado</span>
</div>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            Montaje de 3 muebles IKEA (armario y cajoneras) en salón
                        </h3>
<div class="flex flex-col gap-2 mb-4">
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Madrid, Chamberí</span>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">schedule</span>
<span>15 Oct, 10:00h • 2h estimadas</span>
</div>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Presupuesto total</span>
<span class="text-2xl font-bold text-slate-900 dark:text-white">45€</span>
</div>
<button class="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2">
                                Candidatarme
                                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
<!-- Card 2 -->
<div class="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col">
<div class="flex justify-between items-start mb-3">
<div class="flex gap-2">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 uppercase tracking-wide">
                                    Recurrente
                                </span>
</div>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            Limpieza semanal de piso (3 habitaciones + 2 baños)
                        </h3>
<div class="flex flex-col gap-2 mb-4">
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Barcelona, Gràcia</span>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">event_repeat</span>
<span>Cada Jueves • 4 horas/sem</span>
</div>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Precio por hora</span>
<span class="text-2xl font-bold text-slate-900 dark:text-white">12€<span class="text-sm font-medium text-slate-400">/h</span></span>
</div>
<button class="bg-primary/10 hover:bg-primary hover:text-white text-primary text-sm font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2 border border-primary/20">
                                Candidatarme
                            </button>
</div>
</div>
<!-- Card 3 -->
<div class="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col">
<div class="flex justify-between items-start mb-3">
<div class="flex gap-2">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 uppercase tracking-wide">
                                    Empleo
                                </span>
</div>
<div class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800/30">
<span class="material-symbols-outlined text-[16px]">verified</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Verificado</span>
</div>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            Cuidadora de ancianos interna (Fines de semana)
                        </h3>
<div class="flex flex-col gap-2 mb-4">
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Valencia, Centro</span>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">work_history</span>
<span>Incorporación inmediata • Indefinido</span>
</div>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Salario mensual</span>
<span class="text-2xl font-bold text-slate-900 dark:text-white">600€</span>
</div>
<button class="bg-primary/10 hover:bg-primary hover:text-white text-primary text-sm font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2 border border-primary/20">
                                Candidatarme
                            </button>
</div>
</div>
<!-- Card 4 -->
<div class="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col">
<div class="flex justify-between items-start mb-3">
<div class="flex gap-2">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 uppercase tracking-wide">
                                    Ayuda puntual
                                </span>
</div>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            Ayuda con mudanza: Cargar cajas al camión
                        </h3>
<div class="flex flex-col gap-2 mb-4">
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Sevilla, Triana</span>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">schedule</span>
<span>18 Oct, 09:00h • 3h estimadas</span>
</div>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Presupuesto total</span>
<span class="text-2xl font-bold text-slate-900 dark:text-white">50€</span>
</div>
<button class="bg-primary/10 hover:bg-primary hover:text-white text-primary text-sm font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2 border border-primary/20">
                                Candidatarme
                            </button>
</div>
</div>
<!-- Card 5 -->
<div class="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col">
<div class="flex justify-between items-start mb-3">
<div class="flex gap-2">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 uppercase tracking-wide">
                                    Recurrente
                                </span>
</div>
<div class="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-full border border-emerald-100 dark:border-emerald-800/30">
<span class="material-symbols-outlined text-[16px]">verified</span>
<span class="text-[10px] font-bold uppercase tracking-wider">Verificado</span>
</div>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            Profesor particular de Matemáticas (ESO)
                        </h3>
<div class="flex flex-col gap-2 mb-4">
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Madrid, Retiro</span>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">event_repeat</span>
<span>Lunes y Miércoles • 17:30h</span>
</div>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Precio por hora</span>
<span class="text-2xl font-bold text-slate-900 dark:text-white">20€<span class="text-sm font-medium text-slate-400">/h</span></span>
</div>
<button class="bg-primary/10 hover:bg-primary hover:text-white text-primary text-sm font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2 border border-primary/20">
                                Candidatarme
                            </button>
</div>
</div>
<!-- Card 6 -->
<div class="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col">
<div class="flex justify-between items-start mb-3">
<div class="flex gap-2">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 uppercase tracking-wide">
                                    Ayuda puntual
                                </span>
</div>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            Pasear perro raza pequeña (Bichón Maltés)
                        </h3>
<div class="flex flex-col gap-2 mb-4">
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Sevilla, Centro</span>
</div>
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[18px]">schedule</span>
<span>Solo hoy • 1 hora</span>
</div>
</div>
<div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<div class="flex flex-col">
<span class="text-xs text-slate-500 dark:text-slate-400 font-medium">Presupuesto total</span>
<span class="text-2xl font-bold text-slate-900 dark:text-white">10€</span>
</div>
<button class="bg-primary/10 hover:bg-primary hover:text-white text-primary text-sm font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2 border border-primary/20">
                                Candidatarme
                            </button>
</div>
</div>
</div>
<!-- Pagination -->
<div class="flex justify-center mt-8">
<nav aria-label="Pagination" class="flex items-center gap-2">
<button class="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium">1</button>
<button class="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium">2</button>
<button class="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium">3</button>
<span class="text-slate-400 px-2">...</span>
<button class="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</nav>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = `/* Custom checkbox style from snippet */
.custom-checkbox:checked {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuCBD1fGeAdJKkqbGKBdP0dcXftiqQ4QXXb_bNa8BWrZl-jFPh-rpL8SaeGjeKIacZSunaseaiw4lFSNHRD_Q0X0WdkHnujc1Oj37LY89BlV6Eb8MwGlQoPxXwIk8JE_e8jThmPCBdzjgThe5IMZgjRJqidpi2EkZerRMACOW4FdIzBHQ9dJx0dCHgPlWaCojIA0_oFhZoY3mW61VMqR55MRBbeVQzWO-AJOCx3iBFHvqK1I_yPV0lVcd9FGXZH2IzvT-p8bQ3CB8Q)
    }`;

export default function PanelColaboradorExplorarAnuncios() {
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
