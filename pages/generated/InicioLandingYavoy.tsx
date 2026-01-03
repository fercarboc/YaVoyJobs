import React from 'react';

const TITLE = `Inicio (Landing) - YaVoy`;
const BODY_HTML = `<!-- Header -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div class="flex items-center gap-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-3xl">location_on</span>
<h2 class="text-xl font-black tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Inmobiliaria</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Empleo</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Marketplace</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Ayuda</a>
</nav>
<div class="flex items-center gap-4">
<a class="hidden sm:block text-sm font-medium hover:text-primary transition-colors" href="#">Iniciar sesión</a>
<button class="flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-hover shadow-sm shadow-primary/30">
<span class="truncate">Publicar anuncio</span>
</button>
</div>
</div>
</header>
<!-- Hero Section -->
<section class="relative">
<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
<div class="relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
<!-- Background Image -->
<div class="absolute inset-0">
<img alt="Group of friends talking and laughing outdoors in a city in Spain" class="h-full w-full object-cover opacity-60" data-alt="Group of friends talking and laughing outdoors in a city in Spain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqpr5SS2JH6n79p7K7TZwD0SmU-0PQfL-xAs0PGbhxLOrZN2EN5Xl7zGXCt8QrcsojMy2409TU2dmZcJyIMjmSoQF4c6hg6nmWJ5RGiRPGlJ4I5WHRSghceSJm0oRKex-L1zIfXMX_M1BztFMcRKKexmZejCpzxV643c1fSToqshVZWbp9lTwmRhVgmSmAwhaG-Mw_sgl_jLgKZC1oqdltx2w0C3wWTCPVgZ2lvSaCfU61xv5cdaDac-mcKqi6XWTRTvpf4BF1SQ"/>
<div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div class="relative px-6 py-16 sm:px-12 sm:py-24 lg:py-32 flex flex-col items-center text-center">
<h1 class="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl">
                        Conecta con lo que necesitas en España
                    </h1>
<p class="mt-6 max-w-2xl text-lg text-slate-200 sm:text-xl">
                        La plataforma segura para ayuda, vivienda, empleo y compra-venta. Todo en un solo lugar, verificado y cerca de ti.
                    </p>
<div class="mt-10 flex flex-wrap justify-center gap-4">
<button class="flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary-hover hover:-translate-y-0.5 transition-all">
                            Buscar
                        </button>
<button class="flex h-12 min-w-[140px] items-center justify-center rounded-lg bg-white/10 px-6 text-base font-bold text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                            Publicar anuncio gratis
                        </button>
</div>
</div>
</div>
</div>
</section>
<!-- Categories / Modules Grid -->
<section class="py-12 bg-white dark:bg-slate-900/50">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div class="text-center mb-12">
<h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Explora nuestros servicios</h2>
<p class="mt-4 text-lg text-slate-600 dark:text-slate-400">Cuatro formas de conectar con tu comunidad</p>
</div>
<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
<!-- Card: Ayuda -->
<div class="group relative flex flex-col overflow-hidden rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
<div class="aspect-video w-full overflow-hidden bg-slate-200">
<div class="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Close up of two people shaking hands in a helpful gesture" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmDy_J1EmbZ_p2J49oeMMdKSTgYRch32Rw4hcoS6biciOzaAGEsxm9_CqUvwRK_xgiOjZSUeZSakIXwg2JYMPzKtIfVctxdPowWi8fyCWtODfPHzBlWg6Y0xJ7Nh8rCOlrkodh7BUlhxK8XR_OvHKKQgILEh2suxmCX9WHfqZdtnwHY_wYqpOAu2YV0vylZgcJ3Q4Ts82RYttbD_PDzDcDR3RmRQ6qqwsFG4oGUn-pWJX9f7k5LCb7WZ_Q4F-rx933P0ghQsjp2A');">
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary">
<span class="material-symbols-outlined">volunteer_activism</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Ayuda</h3>
<p class="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">Encuentra profesionales o voluntarios para tareas diarias y asistencia.</p>
<a class="mt-6 inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover" href="#">
                            Ver Ayuda <span class="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
</a>
</div>
</div>
<!-- Card: Inmobiliaria -->
<div class="group relative flex flex-col overflow-hidden rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
<div class="aspect-video w-full overflow-hidden bg-slate-200">
<div class="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Modern living room interior with bright windows and furniture" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAKo2kWmpNaEMSK3H4NOEqrqtoqlUhYQUwNxX3xkeS7_ewhT1hLnBDKY4Hxe-KD2y7UhCEuRewlapW6i67etQrMpL54dBKYU5m5QlsWeZisV0JrqzS_LaOB5bc7Yy0Xpjq9CH1CwnQcWwVQiwzUwgxD2Rq-J0w4YfaRYyX85zdeG8wLUMjRQwzGm2RFtpB2-HsMMh6SWHQi3y9mtg7SL6W3DIb_IPDvQF9y1hs7mOW6vnMQuWBzv5gUlglg7eFiTDT7EYfdsGtXw');">
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400">
<span class="material-symbols-outlined">apartment</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Inmobiliaria</h3>
<p class="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">Alquiler y venta de pisos, habitaciones y locales comerciales.</p>
<a class="mt-6 inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover" href="#">
                            Ver Inmobiliaria <span class="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
</a>
</div>
</div>
<!-- Card: Empleo -->
<div class="group relative flex flex-col overflow-hidden rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
<div class="aspect-video w-full overflow-hidden bg-slate-200">
<div class="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Person working on a laptop with documents on a wooden desk" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKrM8x7JCfQIwqY0OjbAbnaWfOMvXcXmaU3n6UDCVKfTPhYuuvS9zDGcqNZAhyAXC1qjlRg1fmikd8k5QIfyPEv1KA-gvs8p2YekaPoYZI9gEyqoKWTHrK0n_XfXAShhpdSd1EbUP7KpUuT5It73mRiA_HRH-DnK81NRxo9UFZyZia8kMBqXnmRWodKDlq807YbmEUFhaRXMD2dglaVJxnlck4OC-NsFEx_0W10tc2hhhzdsOqN9iCP1hQ_ndFhxBz82YMW1AFAw');">
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400">
<span class="material-symbols-outlined">work</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Empleo</h3>
<p class="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">Ofertas de trabajo cerca de ti y oportunidades profesionales.</p>
<a class="mt-6 inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover" href="#">
                            Ver Empleo <span class="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
</a>
</div>
</div>
<!-- Card: Marketplace -->
<div class="group relative flex flex-col overflow-hidden rounded-xl bg-background-light dark:bg-background-dark border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
<div class="aspect-video w-full overflow-hidden bg-slate-200">
<div class="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Various vintage items including a camera and shoes on a table" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCn9sHQCe_an2rQ12zbTdlUrQGRZ8HZLMzvNfwgN9ukSdKBLJR2a2kfeToYsVxawLkrsf-EosyLkEMn5PjG-jSZ5RB7c6bOhXJTm6adJ7qNm-IYsy2yU0JXW8BbLyuyYL3WAmdewN6eMzkeFX0kxA1KGU_F6U_wgdLaPZOnVExSB4kbwwzZuqLLvYTWFKLnTZ2Sd2imtTwkmPT9S2Wh17XnF57udorj8xEYEXiMDUP66718CSXxRU80ZoSkEgs7Q0KzWmquLkUPnQ');">
</div>
</div>
<div class="flex flex-1 flex-col p-6">
<div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
<span class="material-symbols-outlined">storefront</span>
</div>
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Marketplace</h3>
<p class="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">Compra y vende artículos de segunda mano de forma rápida.</p>
<a class="mt-6 inline-flex items-center text-sm font-bold text-primary hover:text-primary-hover" href="#">
                            Ver Marketplace <span class="material-symbols-outlined ml-1 text-lg">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
<!-- How it Works (Stepper) -->
<section class="py-16 md:py-24">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div class="text-center mb-16">
<span class="text-primary font-bold tracking-wider uppercase text-sm">Proceso simple</span>
<h2 class="mt-2 text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">Cómo funciona YaVoy</h2>
</div>
<div class="relative grid grid-cols-1 gap-12 md:grid-cols-4">
<!-- Connector Line (Desktop) -->
<div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700 -z-10" style="left: 12.5%; width: 75%;"></div>
<!-- Step 1 -->
<div class="flex flex-col items-center text-center">
<div class="flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 text-primary shadow-lg">
<span class="material-symbols-outlined text-4xl">person_add</span>
</div>
<h3 class="mt-6 text-lg font-bold text-slate-900 dark:text-white">1. Regístrate</h3>
<p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Crea tu cuenta gratis en menos de 2 minutos.</p>
</div>
<!-- Step 2 -->
<div class="flex flex-col items-center text-center">
<div class="flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 text-primary shadow-lg">
<span class="material-symbols-outlined text-4xl">category</span>
</div>
<h3 class="mt-6 text-lg font-bold text-slate-900 dark:text-white">2. Elige categoría</h3>
<p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Selecciona si buscas casa, trabajo o ayuda.</p>
</div>
<!-- Step 3 -->
<div class="flex flex-col items-center text-center">
<div class="flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 text-primary shadow-lg">
<span class="material-symbols-outlined text-4xl">search</span>
</div>
<h3 class="mt-6 text-lg font-bold text-slate-900 dark:text-white">3. Publica o busca</h3>
<p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Sube tu anuncio o explora las ofertas.</p>
</div>
<!-- Step 4 -->
<div class="flex flex-col items-center text-center">
<div class="flex h-24 w-24 items-center justify-center rounded-full bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 text-primary shadow-lg">
<span class="material-symbols-outlined text-4xl">verified_user</span>
</div>
<h3 class="mt-6 text-lg font-bold text-slate-900 dark:text-white">4. Contacta seguro</h3>
<p class="mt-2 text-sm text-slate-600 dark:text-slate-400">Usa nuestro chat seguro para cerrar el trato.</p>
</div>
</div>
</div>
</section>
<!-- Trust & Security -->
<section class="bg-primary py-16 text-white relative overflow-hidden">
<!-- Abstract Pattern Background -->
<div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px;"></div>
<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
<div>
<h2 class="text-3xl font-black tracking-tight sm:text-4xl">Tu seguridad es nuestra prioridad</h2>
<p class="mt-4 text-lg text-blue-100">En YaVoy trabajamos cada día para garantizar que tus interacciones sean seguras, transparentes y libres de spam.</p>
<div class="mt-8 space-y-4">
<div class="flex items-start gap-4">
<span class="material-symbols-outlined rounded-lg bg-white/20 p-2 text-2xl">verified</span>
<div>
<h4 class="font-bold">Perfiles Verificados</h4>
<p class="text-sm text-blue-100">Revisamos la identidad de los anunciantes para evitar fraudes.</p>
</div>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined rounded-lg bg-white/20 p-2 text-2xl">lock</span>
<div>
<h4 class="font-bold">Datos Protegidos</h4>
<p class="text-sm text-blue-100">Tus datos personales nunca se comparten sin tu consentimiento.</p>
</div>
</div>
<div class="flex items-start gap-4">
<span class="material-symbols-outlined rounded-lg bg-white/20 p-2 text-2xl">reviews</span>
<div>
<h4 class="font-bold">Sistema de Valoraciones</h4>
<p class="text-sm text-blue-100">Conoce la reputación de otros usuarios antes de contactar.</p>
</div>
</div>
</div>
</div>
<div class="flex justify-center lg:justify-end">
<div class="bg-white text-slate-900 p-8 rounded-2xl shadow-2xl max-w-md w-full">
<div class="flex items-center gap-3 mb-4">
<span class="material-symbols-outlined text-green-500 text-4xl">security</span>
<h3 class="text-xl font-bold">Garantía YaVoy</h3>
</div>
<p class="text-slate-600 mb-6">Si algo no sale como esperabas, nuestro equipo de soporte en España está disponible para ayudarte a resolver cualquier incidencia.</p>
<button class="w-full py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                            Ver centro de seguridad
                        </button>
</div>
</div>
</div>
</div>
</section>
<!-- "What is NOT YaVoy" -->
<section class="py-16 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800">
<div class="mx-auto max-w-4xl px-4 sm:px-6 text-center">
<h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8">Qué NO es YaVoy</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div class="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 flex gap-4 items-start shadow-sm">
<span class="material-symbols-outlined text-red-500 shrink-0">cancel</span>
<div>
<h4 class="font-bold text-slate-900 dark:text-white">No somos una agencia</h4>
<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">YaVoy es una plataforma de contacto directo entre particulares y profesionales. No contratamos personal ni gestionamos alquileres directamente.</p>
</div>
</div>
<div class="bg-white dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800 flex gap-4 items-start shadow-sm">
<span class="material-symbols-outlined text-red-500 shrink-0">cancel</span>
<div>
<h4 class="font-bold text-slate-900 dark:text-white">No somos intermediarios financieros</h4>
<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">No procesamos nóminas ni préstamos. Los pagos por servicios o productos se acuerdan entre las partes.</p>
</div>
</div>
</div>
</div>
</section>
<!-- Footer -->
<footer class="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div class="grid grid-cols-1 gap-8 md:grid-cols-4 lg:gap-12">
<div class="col-span-1 md:col-span-1">
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-primary text-2xl">location_on</span>
<h3 class="text-xl font-bold text-white">YaVoy</h3>
</div>
<p class="text-sm text-slate-400 mb-6">Conectando personas en toda España de forma segura y sencilla.</p>
<div class="flex gap-4">
<a class="text-slate-400 hover:text-white transition-colors" href="#">
<!-- Social icon placeholder -->
<span class="sr-only">Facebook</span>
<svg class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg>
</a>
<a class="text-slate-400 hover:text-white transition-colors" href="#">
<span class="sr-only">Twitter</span>
<svg class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
<a class="text-slate-400 hover:text-white transition-colors" href="#">
<span class="sr-only">Instagram</span>
<svg class="h-6 w-6" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.416 4.48c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
<div>
<h4 class="text-white font-bold mb-4">YaVoy</h4>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-primary transition-colors" href="#">Quiénes somos</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Cómo funciona</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Prensa</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Trabaja con nosotros</a></li>
</ul>
</div>
<div>
<h4 class="text-white font-bold mb-4">Servicios</h4>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-primary transition-colors" href="#">Inmobiliaria</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Empleo</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Marketplace</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Ayuda y Voluntariado</a></li>
</ul>
</div>
<div>
<h4 class="text-white font-bold mb-4">Soporte</h4>
<ul class="space-y-2 text-sm">
<li><a class="hover:text-primary transition-colors" href="#">Centro de Ayuda</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Reglas de publicación</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Consejos de seguridad</a></li>
<li><a class="hover:text-primary transition-colors" href="#">Contactar</a></li>
</ul>
</div>
</div>
<div class="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2023 YaVoy España S.L. Todos los derechos reservados.</p>
<div class="flex gap-6">
<a class="hover:text-white transition-colors" href="#">Privacidad</a>
<a class="hover:text-white transition-colors" href="#">Cookies</a>
<a class="hover:text-white transition-colors" href="#">Términos y condiciones</a>
</div>
</div>
</div>
</footer>`;
const EXTRA_CSS = ``;

export default function InicioLandingYavoy() {
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
