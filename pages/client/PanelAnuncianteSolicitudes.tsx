import React from 'react';

const TITLE = `Panel Anunciante - Solicitudes | YaVoy`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="sticky top-0 z-50 bg-white dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800">
<div class="px-6 lg:px-10 h-16 flex items-center justify-between max-w-[1440px] mx-auto w-full">
<div class="flex items-center gap-4">
<a class="flex items-center gap-2 group" href="#">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</span>
</a>
</div>
<nav class="hidden md:flex items-center gap-8 ml-10">
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Inicio</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Mis Anuncios</a>
<a class="text-primary font-bold text-sm leading-normal border-b-2 border-primary pb-0.5" href="#">Solicitudes</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Mi Perfil</a>
</nav>
<div class="flex items-center gap-3 ml-auto">
<button class="relative flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
<span class="material-symbols-outlined !text-[24px]">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1a2632]"></span>
</button>
<div class="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
<button class="flex items-center gap-2 pl-2">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-slate-100 dark:ring-slate-700" data-alt="User profile avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmb6J8NeGJdvrBIb89vZow8VL848yZVmfAgN_L-Kmr4awW_TsUXPx7m9wC_gIPUqPFUiy4W8pCR2oSdsyB8E8HUgsh7QezK8Uk8bWTH0GhxFKAiaDgUwSeO0HjjCdzRroMdn8nXgSVeGfn4_dco0CmurK6I59iRQK30-NP-Fe8-gQ4d3D0n6sbkIUWNMHz8ZS0RUa8llB7uZ8cy9N-rB22ZWey1ah1iTzXRwX5mmGhEF8JddvHWUeECd09eo3KsP3rSPq1FBAYIg");'></div>
<span class="material-symbols-outlined text-slate-400 !text-[20px]">expand_more</span>
</button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
<div class="w-full max-w-6xl flex flex-col gap-6">
<!-- Breadcrumbs -->
<nav class="flex text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary transition-colors" href="#">Inicio</a>
<span class="mx-2">/</span>
<a class="hover:text-primary transition-colors" href="#">Panel Anunciante</a>
<span class="mx-2">/</span>
<span class="text-slate-900 dark:text-slate-200 font-medium">Solicitudes</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
<div class="flex flex-col gap-2">
<h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Solicitudes recibidas</h1>
<p class="text-slate-500 dark:text-slate-400 max-w-2xl text-base">
                        Gestiona los mensajes de tus clientes potenciales. <span class="text-primary font-medium">Responder a una solicitud habilita el chat</span> con ese usuario.
                    </p>
</div>
<button class="hidden md:flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm">
<span class="material-symbols-outlined !text-[20px]">download</span>
                    Exportar datos
                </button>
</div>
<!-- Filters & Search -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 p-4 flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
<!-- Tabs/Chips -->
<div class="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto no-scrollbar">
<button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium whitespace-nowrap shadow-sm shadow-primary/30">
                        Todas
                    </button>
<button class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2">
                        Pendientes
                        <span class="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-200 text-xs px-1.5 py-0.5 rounded-full">3</span>
</button>
<button class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
                        Respondidas
                    </button>
<button class="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
                        Archivadas
                    </button>
</div>
<!-- Search -->
<div class="relative w-full lg:max-w-md group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400 group-focus-within:text-primary transition-colors !text-[20px]">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm" placeholder="Buscar por usuario o referencia de anuncio..." type="text"/>
</div>
</div>
<!-- Requests List -->
<div class="flex flex-col gap-4">
<!-- Card 1: Pending -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-l-4 border-slate-200 dark:border-slate-800 border-l-orange-500 p-5 shadow-sm hover:shadow-md transition-shadow relative group">
<div class="flex flex-col lg:flex-row gap-6">
<!-- User Info -->
<div class="flex items-start gap-4 min-w-[200px]">
<div class="relative">
<div class="w-12 h-12 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of a smiling woman" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKT1JoZRikknHeXLaSTJmIaLgJJkw-Pb6V47HK_PIXozpVywsoKhByHWmlxCSABdqgKk9koAxV9lTyxf7WYIRYiiIkguKBuPltgXXeXmJLDRV4h2-2yx7BY4rZymcgJELgndPhDHP0jP_re9JfAzMhegn_APgB7cF5RCWJRy8euTDBtOzJ6t8ojU4Og5IZ_Y4k01Y_XqDy87N91Gd1Zd6aWU2rr_fX8Wmu1nfzZQ0OnCPUE8JhtOCaEVW_02XS6JMFUgB-ESApWA')"></div>
<div class="absolute -bottom-1 -right-1 bg-white dark:bg-[#1a2632] rounded-full p-0.5">
<span class="material-symbols-outlined text-primary !text-[18px]" title="Usuario Verificado">verified</span>
</div>
</div>
<div>
<h3 class="font-bold text-slate-900 dark:text-white text-base">María González</h3>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Usuario verificado</p>
<div class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold border border-orange-200 dark:border-orange-800/50">
<span class="size-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                    Pendiente
                                </div>
</div>
</div>
<!-- Ad Context -->
<div class="flex-1 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700 pt-4 lg:pt-0 lg:pl-6">
<div class="flex gap-4">
<div class="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0 border border-slate-200 dark:border-slate-700" data-alt="Modern apartment interior living room" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBeK_863IdK1mylSUkp6qqgonJTSE0lo2jwYWXXc0nyL75z-6i7tZ2-w7R2g2qByb45CbgzZHvhncm3zuJrB7GSFIC6dQzWc8YvsvwgJY2Yuk4-lxMCwx-IWlcoeY2cgM_VGwtwpQ5_8x7sOVH1OfypS6jI7yhiZx3zTblT_ftszhZmEmR3bZgfnafCGLPS6umt_pWDIptU2VMRREQnLrgbq9ELzTOmb1H8BNHaIj_qzi_h3JQPni6S1yGJ2OTFCkuSSVgdb6Qp1g')"></div>
<div class="flex flex-col justify-between py-1">
<div>
<p class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Referencia: #A-2938</p>
<a class="text-base font-semibold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors line-clamp-1" href="#">
                                            Ático luminoso en Barrio de Salamanca, Madrid
                                        </a>
<p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">Calle de Claudio Coello, 14, 28001 Madrid</p>
</div>
<div class="flex items-center gap-2 text-xs text-slate-400 mt-2">
<span class="material-symbols-outlined !text-[14px]">schedule</span>
<span>Recibido hace 2 horas</span>
</div>
</div>
</div>
<!-- Message Preview -->
<div class="mt-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 text-sm text-slate-600 dark:text-slate-300 relative">
<span class="material-symbols-outlined absolute top-3 left-3 text-slate-300 dark:text-slate-600 !text-[18px]">format_quote</span>
<p class="pl-6 line-clamp-2">Hola, estoy muy interesada en este piso. ¿Sería posible concertar una visita para este jueves por la tarde? Gracias.</p>
</div>
</div>
<!-- Actions -->
<div class="flex lg:flex-col items-center lg:justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700 lg:pl-6 min-w-[160px]">
<button class="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-blue-500/20">
<span class="material-symbols-outlined !text-[18px]">chat</span>
                                Responder
                            </button>
<button class="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors">
                                Ver mensaje
                            </button>
<button class="lg:absolute lg:top-3 lg:right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-auto lg:ml-0" title="Más opciones">
<span class="material-symbols-outlined !text-[20px]">more_vert</span>
</button>
</div>
</div>
</div>
<!-- Card 2: Pending -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-l-4 border-slate-200 dark:border-slate-800 border-l-orange-500 p-5 shadow-sm hover:shadow-md transition-shadow relative group">
<div class="flex flex-col lg:flex-row gap-6">
<!-- User Info -->
<div class="flex items-start gap-4 min-w-[200px]">
<div class="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400">
<span class="material-symbols-outlined !text-[24px]">person</span>
</div>
<div>
<h3 class="font-bold text-slate-900 dark:text-white text-base">Roberto Diaz</h3>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Usuario registrado</p>
<div class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold border border-orange-200 dark:border-orange-800/50">
<span class="size-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                                    Pendiente
                                </div>
</div>
</div>
<!-- Ad Context -->
<div class="flex-1 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700 pt-4 lg:pt-0 lg:pl-6">
<div class="flex gap-4">
<div class="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0 border border-slate-200 dark:border-slate-700" data-alt="Suburban house exterior with garden" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAugGeMTY1t9PDvdfCEyrt8l5KIrQYnnbdgvqKb2cPHuLxCSxk0Ls-CQQFrTmvPQtiEB4D-QSo7IOsTG2owTs2s0_njqAtVf_KW7xpU9Z4IcPB3H46Rv3GamBfk6aZ54SHr0bDheqqhqXdc2rm1BFJqQhqU9G_dKP558Ivcgy-WStpSYT0BiyTRT8OWoYM7OFpHUmAmj1u47z_oXgDXDoJ5-rWt-ATvY6hkmpG7u-Nd4vtX5sQQUF4yft9LD9HtNNl5upBMIwFzcg')"></div>
<div class="flex flex-col justify-between py-1">
<div>
<p class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Referencia: #H-5501</p>
<a class="text-base font-semibold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors line-clamp-1" href="#">
                                            Chalet adosado en Pozuelo
                                        </a>
<p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">Av. de Europa, 22, 28224 Pozuelo de Alarcón</p>
</div>
<div class="flex items-center gap-2 text-xs text-slate-400 mt-2">
<span class="material-symbols-outlined !text-[14px]">schedule</span>
<span>Recibido ayer, 18:45</span>
</div>
</div>
</div>
<!-- No message preview for concise view if desired, but consistent here -->
<div class="mt-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg p-3 text-sm text-slate-600 dark:text-slate-300 relative">
<span class="material-symbols-outlined absolute top-3 left-3 text-slate-300 dark:text-slate-600 !text-[18px]">format_quote</span>
<p class="pl-6 line-clamp-2">Buenas tardes, me gustaría saber si el precio es negociable y si admiten mascotas.</p>
</div>
</div>
<!-- Actions -->
<div class="flex lg:flex-col items-center lg:justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700 lg:pl-6 min-w-[160px]">
<button class="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-blue-500/20">
<span class="material-symbols-outlined !text-[18px]">chat</span>
                                Responder
                            </button>
<button class="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors">
                                Ver mensaje
                            </button>
<button class="lg:absolute lg:top-3 lg:right-3 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-auto lg:ml-0" title="Más opciones">
<span class="material-symbols-outlined !text-[20px]">more_vert</span>
</button>
</div>
</div>
</div>
<!-- Card 3: Replied -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-l-4 border-slate-200 dark:border-slate-800 border-l-green-500 p-5 shadow-sm opacity-90 hover:opacity-100 transition-opacity">
<div class="flex flex-col lg:flex-row gap-6">
<!-- User Info -->
<div class="flex items-start gap-4 min-w-[200px]">
<div class="relative">
<div class="w-12 h-12 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Portrait of a serious man with glasses" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDw16kAT_KV68PGNDJQf_QSgD_ngpxLGSOyLjXnkYA7CAk4bZYURm4jxw9-Z2S3iQ4bpfaU3Q2iPQFXMYPD0Z8QefJ69yMYidzDS7LmN6MvveV4zJ-D0vd2gQn7e2wXN4_7R0CthNOJyWvb2UdO1FhYcmTOtuBhrzaI-oTR6JXmpwhbQ_vab48UiEXO8tttA6FP3zdP_JZMEYRrLsN1DTnfK2RC1T2LHkVWKPyT9hNfFwmcxmS4n0jS_-XiFGSTqQhV1fEYJoPvJA')"></div>
</div>
<div>
<h3 class="font-bold text-slate-900 dark:text-white text-base">Carlos Ruiz</h3>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Usuario registrado</p>
<div class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-semibold border border-green-200 dark:border-green-800/50">
<span class="material-symbols-outlined !text-[14px]">check</span>
                                    Respondida
                                </div>
</div>
</div>
<!-- Ad Context -->
<div class="flex-1 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700 pt-4 lg:pt-0 lg:pl-6">
<div class="flex gap-4">
<div class="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0 border border-slate-200 dark:border-slate-700" data-alt="Modern office space with large windows" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCAwqqaORSJ05w-qXTOkfCcAHN4AEIjssoz5gXGKNtOQawebTPaY-Q7sc0cEOZj3HIK7ZAaJ5C_ai5qH6fTaN_U2SyAJdVPQ_KUMARsbwg9DDBJFU1Lihd-7Kejd8f367t5KPMzOmu7IgK7lrYa-qYesR3_Th3ffV_W9CBCMFtPAB-71UQR51v4OlB1pnpvmz0wJ8p7aOy6en0Mm7zung65YiiACzyEpTrJ8F6HhjQHzKUr_O7d42n4sciTol5-DO1U4SxExGkfEQ')"></div>
<div class="flex flex-col justify-between py-1">
<div>
<p class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Referencia: #O-1022</p>
<a class="text-base font-semibold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors line-clamp-1" href="#">
                                            Oficina céntrica 200m2
                                        </a>
<p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">Paseo de la Castellana, 89, 28046 Madrid</p>
</div>
<div class="flex items-center gap-2 text-xs text-slate-400 mt-2">
<span class="material-symbols-outlined !text-[14px]">reply</span>
<span>Respondido el 12 Oct</span>
</div>
</div>
</div>
</div>
<!-- Actions -->
<div class="flex lg:flex-col items-center lg:justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-100 dark:border-slate-700 lg:pl-6 min-w-[160px]">
<button class="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-white rounded-lg text-sm font-semibold transition-colors">
<span class="material-symbols-outlined !text-[18px]">forum</span>
                                Ir al chat
                            </button>
<button class="lg:hidden p-2 ml-auto text-slate-400">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
</div>
<!-- Card 4: Archived -->
<div class="bg-slate-50 dark:bg-[#1a2632]/50 rounded-xl border border-l-4 border-slate-200 dark:border-slate-800 border-l-slate-400 p-5 shadow-none opacity-75 hover:opacity-100 transition-opacity">
<div class="flex flex-col lg:flex-row gap-6">
<!-- User Info -->
<div class="flex items-start gap-4 min-w-[200px] grayscale">
<div class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 font-bold text-lg">
                                AL
                            </div>
<div>
<h3 class="font-bold text-slate-700 dark:text-slate-300 text-base">Ana López</h3>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Usuario registrado</p>
<div class="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs font-semibold">
<span class="material-symbols-outlined !text-[14px]">archive</span>
                                    Archivada
                                </div>
</div>
</div>
<!-- Ad Context -->
<div class="flex-1 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 pt-4 lg:pt-0 lg:pl-6">
<div class="flex gap-4 grayscale">
<div class="w-20 h-20 rounded-lg bg-cover bg-center flex-shrink-0 opacity-80" data-alt="Empty loft apartment" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCIT2Z52wkgj0Bvxq1QHnWg46TihM35J2N2gM78eQYhVN-1rHVxE4ufNdJRACzdWJQPrhjmpqc3UX_EeCLBoatZuiSE4JkZGHOwhha3-hITagGo2Pvh4TZTN-OePLpwIrwYj3bUT9KJzJM0Vz9CPIWvBP9KJy2mAx8iKEpan9ooKum4bgub4DgjmDXLEMLyWXGeH0cI_maQVaK53J2XEDmdAQFKoh4EjDJCTN-Eak10RM_KP75-ieVpwr3Tm4FxyigZklAO5pUwZg')"></div>
<div class="flex flex-col justify-between py-1">
<div>
<p class="text-xs font-medium text-slate-400 uppercase tracking-wide mb-1">Referencia: #L-9901</p>
<span class="text-base font-semibold text-slate-700 dark:text-slate-300 line-clamp-1">
                                            Loft industrial en Malasaña
                                        </span>
<p class="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">Calle del Pez, 5, 28004 Madrid</p>
</div>
<div class="flex items-center gap-2 text-xs text-slate-400 mt-2">
<span>Archivado el 10 Oct</span>
</div>
</div>
</div>
</div>
<!-- Actions -->
<div class="flex lg:flex-col items-center lg:justify-center gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:pl-6 min-w-[160px]">
<button class="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-transparent border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-400 rounded-lg text-sm font-medium transition-colors">
<span class="material-symbols-outlined !text-[18px]">unarchive</span>
                                Desarchivar
                            </button>
</div>
</div>
</div>
</div>
<!-- Pagination -->
<div class="flex justify-center mt-6">
<nav class="flex items-center gap-2">
<button class="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 disabled:opacity-50">
<span class="material-symbols-outlined !text-[20px]">chevron_left</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-medium text-sm">1</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors">2</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium text-sm transition-colors">3</button>
<span class="text-slate-400 px-2">...</span>
<button class="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500">
<span class="material-symbols-outlined !text-[20px]">chevron_right</span>
</button>
</nav>
</div>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function PanelAnuncianteSolicitudes() {
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
