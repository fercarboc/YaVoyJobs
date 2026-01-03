import React from 'react';

const TITLE = `YaVoy - Inmobiliaria`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800">
<div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-16">
<!-- Logo -->
<div class="flex items-center gap-2">
<div class="w-8 h-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</span>
</div>
<!-- Desktop Menu -->
<div class="hidden md:flex items-center space-x-8">
<a class="text-primary font-semibold text-sm" href="#">Inmobiliaria</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors" href="#">Motor</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors" href="#">Empleo</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors" href="#">Formación</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors" href="#">Servicios</a>
</div>
<!-- Actions -->
<div class="flex items-center gap-3">
<button class="hidden sm:flex items-center justify-center px-4 h-9 text-sm font-medium text-primary bg-primary/10 rounded hover:bg-primary/20 transition-colors">
                        Iniciar sesión
                    </button>
<button class="flex items-center justify-center px-4 h-9 text-sm font-bold text-white bg-primary rounded hover:bg-primary-dark shadow-sm transition-colors">
<span class="material-symbols-outlined text-[18px] mr-1.5">add</span>
                        Publicar anuncio
                    </button>
</div>
</div>
</div>
</header>
<main class="flex-grow">
<!-- Hero Section -->
<section class="relative bg-surface-dark">
<div class="absolute inset-0 z-0">
<div class="w-full h-full bg-cover bg-center" data-alt="Modern apartment interior with large windows and sunlight" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-PXKJqGPUF3EzCBiXuEKjL34Yo0IimfNa_6eYP0wtLg5UoNinNH0D7lDhbmdrpp7GCUcbTeBH9KJ9rWI9P7qhsI-h1E5HAKeoruEnlYYrmPPzlN7qFDJuAuLp1Ont_v9WFHAEfvBqRGtGVo3cmuMFQuSbt1zDWhXvj3V491ulkRPjWthgrDCJBjZ-2PiIsOInqD0wwAc9WJRI3rNDX9rGX7ZWD5LpAYSjya-RhNdlgODZidt-Vn5NfvKbzGj5ZneAgy4rtDpXXg');"></div>
<div class="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
</div>
<div class="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
                    Encuentra tu próximo espacio
                </h1>
<p class="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
                    Miles de opciones de alquiler y venta en toda España. Conecta directamente con propietarios y agencias.
                </p>
<!-- Search Bar -->
<div class="bg-surface-light dark:bg-surface-dark p-2 rounded-xl shadow-xl max-w-3xl mx-auto flex flex-col sm:flex-row gap-2">
<div class="relative flex-grow group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400 group-focus-within:text-primary">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-3 border-none rounded-lg bg-transparent text-slate-900 dark:text-white placeholder-slate-500 focus:ring-0 sm:text-sm" placeholder="Buscar por ciudad, zona o referencia..." type="text"/>
</div>
<div class="h-px sm:h-auto sm:w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
<button class="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all shadow-md flex items-center justify-center gap-2">
                        Buscar
                    </button>
</div>
<!-- Quick Filters / Chips -->
<div class="mt-8 flex flex-wrap justify-center gap-3">
<button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                        Madrid
                    </button>
<button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                        Barcelona
                    </button>
<button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                        Valencia
                    </button>
<button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                        Alquiler &lt; 800€
                    </button>
<button class="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors">
                        Venta &lt; 200k€
                    </button>
</div>
</div>
</section>
<!-- Warning / Disclaimer Banner -->
<div class="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-200 dark:border-amber-800/30">
<div class="max-w-5xl mx-auto px-4 py-3 flex items-start sm:items-center gap-3">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-400 shrink-0">info</span>
<p class="text-sm text-amber-900 dark:text-amber-100 font-medium">
<span class="font-bold">Aviso importante:</span> YaVoy no es agencia inmobiliaria. Somos una plataforma de conexión entre usuarios. Verifica siempre la información antes de realizar cualquier pago.
                </p>
</div>
</div>
<div class="max-w-[1100px] mx-auto px-4 py-12 space-y-16">
<!-- Categories Grid -->
<section>
<div class="flex items-center justify-between mb-6">
<h2 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Explora por tipo de inmueble</h2>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<!-- Card 1 -->
<a class="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-sm hover:shadow-md transition-all" href="#">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Bright living room interior" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBXisijWmCcyq0KAP9ZyCZFNoI_fE4L-BO0Kg6tHCb7d3uEcHjSig7GSMuKzPEkdu860jL5XTZT_rhShH9MFJezc9t8CAXIJC-F5HPJ8GmfGeUX7m3vcBthHb7WwrmhhsWc6RTZBMO17WL6yZNJ27sQSl0Xd270Hf7De8kU8mdFZBXi68M7swIv4tfNEJ_Gd6qBY8B1_EGKtvoNVbhRNFEBwzYNkOvf5Bk4jVoXatmK1WXUl_m3zJngpsxjtu5td7u4e2sim9dZjQ');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-primary text-xl">key</span>
<h3 class="text-white font-bold text-lg">Alquiler</h3>
</div>
<p class="text-slate-300 text-sm">Pisos y casas listos para vivir</p>
</div>
</a>
<!-- Card 2 -->
<a class="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-sm hover:shadow-md transition-all" href="#">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Modern house exterior with garden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvAPtdVhV72llnma_swZMVBD1mGjca2hbrE91MdgFPp4ndQrKrIeh2kt8yFIqLuIZXpqZh0gL_hCWpHbzuh6tQngnozZuWMEvCVIVCtpYclavNiXKXItpKvNqlOVjYzJnTHHukoTHU40J6t-N7OWcg8mNcuHks2gWFQiqZ6H2nOsJDYHrWFl_bre9WutX94oripZVpM86TRCZYtnPD0uEQN4VEZsgq0xp1w6aOjy8hOw_0x8kIxv5ETFQ9vn94Ffyvf2n1sQG9Jg');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-emerald-400 text-xl">payments</span>
<h3 class="text-white font-bold text-lg">Venta</h3>
</div>
<p class="text-slate-300 text-sm">Invierte en tu propiedad</p>
</div>
</a>
<!-- Card 3 -->
<a class="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-sm hover:shadow-md transition-all" href="#">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Cozy bedroom with desk" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDusSTwt2_m6_v7a5A2SQ3a4pXeWMGBXHpi6EX36qJCOE5uYiB39UaFRjr2RMAe9Gccp4O_OYi57TrfuuFikDzRxWoBSyLZYSySNJaQ_xGf5JdAFbTXxuHzQaZp5RMIBIUaGTweiFsJIt6V6dFvgds9bRnMi0IxRhctj2SWC_wtqTdtS4VOa1E2X_x7KCbwKHQmDSlcRIGhLAf23eExyJLylESew34DCjGBs4tY3u3roPQ1F7S_g49pzttm0i7dhs6-Y7-HUlBJaA');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-amber-400 text-xl">bed</span>
<h3 class="text-white font-bold text-lg">Habitación</h3>
</div>
<p class="text-slate-300 text-sm">Pisos compartidos</p>
</div>
</a>
<!-- Card 4 -->
<a class="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-sm hover:shadow-md transition-all" href="#">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Empty office space with large windows" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC4qJkjl80pQdCoQ5rk5UT2BqQ-9XEGJ0KSM4XXHY5ktegLY18_J1r7_dLhph-kJII9CLkgNn3SYewQ7gY1NMWNqKNiFgY-9s7k4GaTlWR492taq0WFhOk147J73NzidK2PHeqJccGFqWJ6CvUg7aKNcaO6xZmN2BNj9fzQlAMV1xzxcZuiEBWaminXWAtjWO0l7ucE2_Zke_esXI2iBkQRL3Dxn2tVKuyHWWPM61Bl8J_h1CxXCteGSur5iLir8T6r8lMnXn78CQ');"></div>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div class="absolute bottom-0 left-0 p-5 w-full">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-purple-400 text-xl">storefront</span>
<h3 class="text-white font-bold text-lg">Local &amp; Oficinas</h3>
</div>
<p class="text-slate-300 text-sm">Espacios para negocios</p>
</div>
</a>
</div>
</section>
<!-- Advertiser Types Info -->
<section class="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="text-center max-w-2xl mx-auto mb-10">
<h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">¿Quién anuncia en YaVoy?</h2>
<p class="text-slate-600 dark:text-slate-400">Transparencia total sobre el origen de los anuncios para que elijas con confianza.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
<!-- Type 1 -->
<div class="flex flex-col items-center text-center p-4">
<div class="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-3xl">person</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Particular</h3>
<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Trato directo con el propietario. Sin comisiones de agencia, gestión personal y cercana.
                        </p>
</div>
<!-- Type 2 -->
<div class="flex flex-col items-center text-center p-4 relative">
<!-- Divider for desktop -->
<div class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-slate-200 dark:bg-slate-700"></div>
<div class="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-24 w-px bg-slate-200 dark:bg-slate-700"></div>
<div class="w-14 h-14 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-3xl">domain</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Empresa</h3>
<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Promotoras y fondos de inversión. Edificios completos, obra nueva y gestión profesionalizada.
                        </p>
</div>
<!-- Type 3 -->
<div class="flex flex-col items-center text-center p-4">
<div class="w-14 h-14 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4">
<span class="material-symbols-outlined text-3xl">real_estate_agent</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Agencia</h3>
<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Profesionales del sector. Asesoramiento legal, visitas organizadas y garantías adicionales.
                        </p>
</div>
</div>
</section>
<!-- Featured Listings Preview -->
<section>
<div class="flex items-center justify-between mb-6">
<h2 class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">Destacados recientemente</h2>
<a class="text-primary font-medium text-sm hover:underline flex items-center gap-1" href="#">
                        Ver todo
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Listing 1 -->
<div class="group bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-shadow">
<div class="relative aspect-video overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Modern apartment interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8MoEVHLw6tEfWMVj8uIxjsHvMhBlxOVHXhlPN1QcK2iQE5txyPwvRN58zRVBH7xiYfOo2YXc3PDOHU2oXSgTWtbdPMyiv1m3QwFfHGlJVVYUwFayUqGPueENi0JKC4rRuLgEQef41py5L6XKdPUk3Zlb1hZKsp2g9yoEasPNZnWmn0DLfvF7xWLDyu7VmBJGKwROctxTAMy9iWFVmy0z1gbYYpdCJ0k8Q_6Mu5AAN0r68V5IvcVZiLR-2ROB_uiao1tedaZVQkg"/>
<div class="absolute top-3 left-3 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-slate-900 dark:text-white uppercase tracking-wider">
                                Particular
                            </div>
<div class="absolute bottom-3 right-3 bg-black/50 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
<span class="material-symbols-outlined text-[14px]">photo_camera</span> 8
                            </div>
</div>
<div class="p-4">
<div class="flex justify-between items-start mb-2">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">1.200 €<span class="text-sm font-normal text-slate-500 dark:text-slate-400">/mes</span></h3>
<div class="flex gap-2">
<span class="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Alquiler</span>
</div>
</div>
<p class="text-slate-700 dark:text-slate-300 font-medium line-clamp-1 mb-1">Ático luminoso en Chamberí</p>
<div class="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-4">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                                Madrid, Chamberí
                            </div>
<div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">bed</span> 2 habs</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">bathtub</span> 1 baño</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">square_foot</span> 85 m²</span>
</div>
</div>
</div>
<!-- Listing 2 -->
<div class="group bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-shadow">
<div class="relative aspect-video overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Luxury house exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_ohkjwDSIIparcRDeQ4NfzdaVpSA2nMvKJ_J4UmGCRxloYO3Og5FjAgYvApTfGna2Vk9Ci2ITJNQsEEuO0gauQ9TPbxsNPPmy-YxZ2pSjayM9NNn-eP37VpvdnTbGmg9kCmlPcK4sbP02Pgyf11JGobqI6npZ5OupzpzG45mZof_VCxlOfRTcnViK_XlgRxu0z6y3jhpsrvwIpQrWkqcWqGh9LH3k_yPbyTctKZgPP8FdPEKnGS6Cf5318CbDDKobSyOS9IDSrw"/>
<div class="absolute top-3 left-3 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                                Agencia
                            </div>
</div>
<div class="p-4">
<div class="flex justify-between items-start mb-2">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">345.000 €</h3>
<div class="flex gap-2">
<span class="text-xs font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Venta</span>
</div>
</div>
<p class="text-slate-700 dark:text-slate-300 font-medium line-clamp-1 mb-1">Chalet adosado con jardín</p>
<div class="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-4">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                                Valencia, L'Eliana
                            </div>
<div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">bed</span> 4 habs</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">bathtub</span> 3 baños</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">square_foot</span> 180 m²</span>
</div>
</div>
</div>
<!-- Listing 3 -->
<div class="group bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-shadow hidden lg:block">
<div class="relative aspect-video overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Modern living room with view" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDegohc0SgoKltAlvwAD7fBccOAgHf5QUn1jIEvYLhFQO0IWiaBvQQP_JOtmHrCgfY3RX0C6ce73mz5sqrZw-Gwxusx9AU1M1lpPQIqEa7sB6PHAuoYMEphCV3z25I3IE4-99in7P8CH-JiMXgHHTeRZmS_ZwJHJQjvQgBam6NErg8BU2Oor6ng7K4csLcqiJbe4hts-FHAPQtUnTMl7NEL9-3VhadlTRDLyUoxjdVW6jYyV0OXkzmS_Ifg5cZ5dOT7QUohtWBSYA"/>
<div class="absolute top-3 left-3 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                                Empresa
                            </div>
</div>
<div class="p-4">
<div class="flex justify-between items-start mb-2">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">450 €<span class="text-sm font-normal text-slate-500 dark:text-slate-400">/mes</span></h3>
<div class="flex gap-2">
<span class="text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">Habitación</span>
</div>
</div>
<p class="text-slate-700 dark:text-slate-300 font-medium line-clamp-1 mb-1">Habitación en piso compartido reformado</p>
<div class="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mb-4">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                                Barcelona, Gràcia
                            </div>
<div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">group</span> 3 compis</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">wifi</span> Incluido</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">square_foot</span> 12 m²</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
<!-- Footer -->
<footer class="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 py-12 mt-auto">
<div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
<div>
<h4 class="font-bold text-slate-900 dark:text-white mb-4">YaVoy Inmobiliaria</h4>
<ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
<li><a class="hover:text-primary" href="#">Vender piso</a></li>
<li><a class="hover:text-primary" href="#">Alquilar piso</a></li>
<li><a class="hover:text-primary" href="#">Valoración de inmuebles</a></li>
<li><a class="hover:text-primary" href="#">Índice de precios</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-slate-900 dark:text-white mb-4">Profesionales</h4>
<ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
<li><a class="hover:text-primary" href="#">Para Agencias</a></li>
<li><a class="hover:text-primary" href="#">Publicidad</a></li>
<li><a class="hover:text-primary" href="#">Software inmobiliario</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-slate-900 dark:text-white mb-4">YaVoy</h4>
<ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
<li><a class="hover:text-primary" href="#">Quiénes somos</a></li>
<li><a class="hover:text-primary" href="#">Sala de prensa</a></li>
<li><a class="hover:text-primary" href="#">Trabaja con nosotros</a></li>
<li><a class="hover:text-primary" href="#">Ayuda</a></li>
</ul>
</div>
<div>
<h4 class="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
<ul class="space-y-2 text-sm text-slate-600 dark:text-slate-400">
<li><a class="hover:text-primary" href="#">Condiciones de uso</a></li>
<li><a class="hover:text-primary" href="#">Política de privacidad</a></li>
<li><a class="hover:text-primary" href="#">Cookies</a></li>
</ul>
</div>
</div>
<div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 dark:border-slate-800">
<p class="text-sm text-slate-500 dark:text-slate-500 mb-4 md:mb-0">© 2023 YaVoy España S.L.</p>
<div class="flex space-x-6">
<a class="text-slate-400 hover:text-slate-500" href="#">
<span class="sr-only">Facebook</span>
<svg class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</a>
<a class="text-slate-400 hover:text-slate-500" href="#">
<span class="sr-only">Twitter</span>
<svg class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
</div>
</div>
</div>
</footer>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`;

export default function Inmobiliaria() {
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
