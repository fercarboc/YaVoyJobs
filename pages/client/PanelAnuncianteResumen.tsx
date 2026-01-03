import React from 'react';

const TITLE = `Panel Anunciante - Resumen | YaVoy`;
const BODY_HTML = `<div class="min-h-screen flex flex-col">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm">
<div class="px-4 md:px-8 lg:px-12 h-16 flex items-center justify-between max-w-[1440px] mx-auto w-full">
<!-- Logo & Brand -->
<div class="flex items-center gap-3">
<div class="flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">real_estate_agent</span>
</div>
<h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</h1>
</div>
<!-- Desktop Navigation -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium text-slate-900 hover:text-primary dark:text-slate-100 dark:hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-sm font-medium text-slate-900 hover:text-primary dark:text-slate-100 dark:hover:text-primary transition-colors" href="#">Mis Anuncios</a>
<a class="text-sm font-medium text-slate-900 hover:text-primary dark:text-slate-100 dark:hover:text-primary transition-colors" href="#">Mensajes</a>
<a class="text-sm font-medium text-slate-900 hover:text-primary dark:text-slate-100 dark:hover:text-primary transition-colors" href="#">Ayuda</a>
</nav>
<!-- Actions & Profile -->
<div class="flex items-center gap-4">
<button class="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
<span class="material-symbols-outlined text-[20px] mr-2">add</span>
<span>Publicar Anuncio</span>
</button>
<div class="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-1 hidden sm:block"></div>
<div class="flex items-center gap-3 cursor-pointer group">
<div class="text-right hidden sm:block">
<p class="text-sm font-bold leading-none text-slate-900 dark:text-white group-hover:text-primary transition-colors">Juan Pérez</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Agencia Central</p>
</div>
<div class="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border-2 border-transparent group-hover:border-primary transition-all" data-alt="User profile avatar of a smiling man" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTghsb9ZCnRQwKhu-hWHH0pXw_SOie9MynePKkWdExrw70i0f7MQgm0gTFpES2Tm-93-MsAPvIf0vD5irhCKzdFAAvOeclAIpstQ8pPtKCNl0lSqaRD3atMPZQ8rkFneGIuklh3-6JB5s4rSF9PprLuLzyHVhMDKjw3T3DTTijy8-LYgeENNYw7DO3bV9SBc8eIqWfZlY-2KTCr7v1z4p9EWyvxvyqrb9PdAC3GOvXM0V-b9oXHxXKWc2kfuMV0j8KsehYU-1jkQ');">
</div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-8">
<!-- Breadcrumbs -->
<nav class="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-6">
<a class="hover:text-primary transition-colors" href="#">Inicio</a>
<span class="mx-2">/</span>
<span class="text-slate-900 dark:text-slate-200 font-medium">Panel de Control</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h2 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-2">Resumen de tu actividad</h2>
<p class="text-slate-500 dark:text-slate-400 text-lg">Bienvenido de nuevo a tu panel de gestión inmobiliaria.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center justify-center h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined text-[20px] mr-2">refresh</span>
                        Actualizar
                    </button>
</div>
</div>
<!-- Notification Alert -->
<div class="mb-8 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 flex gap-4 items-start shadow-sm">
<div class="bg-blue-100 dark:bg-blue-800 rounded-full p-2 text-primary dark:text-blue-300 shrink-0">
<span class="material-symbols-outlined">info</span>
</div>
<div class="flex-1">
<h4 class="text-sm font-bold text-slate-900 dark:text-white mb-1">Aviso importante del sistema</h4>
<p class="text-sm text-slate-600 dark:text-slate-300">Recuerda cerrar el anuncio cuando ya no esté disponible para evitar contactos innecesarios y mantener la calidad de tus leads.</p>
</div>
<button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
<span class="material-symbols-outlined text-sm">close</span>
</button>
</div>
<!-- Stats Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Card 1: Active Ads -->
<div class="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all hover:border-primary/50">
<div class="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-primary">apartment</span>
</div>
<div class="relative z-10 flex flex-col h-full justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<div class="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
<span class="material-symbols-outlined">check_circle</span>
</div>
<h3 class="font-semibold text-slate-500 dark:text-slate-400">Anuncios activos</h3>
</div>
<p class="text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">3</p>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
<a class="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-400" href="#">
                                Gestionar anuncios
                                <span class="material-symbols-outlined text-base ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Card 2: Pending Requests -->
<div class="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all hover:border-primary/50">
<div class="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-orange-500">group_add</span>
</div>
<div class="relative z-10 flex flex-col h-full justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<div class="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400">
<span class="material-symbols-outlined">notifications_active</span>
</div>
<h3 class="font-semibold text-slate-500 dark:text-slate-400">Solicitudes pendientes</h3>
</div>
<p class="text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">12</p>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
<a class="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-400" href="#">
                                Revisar solicitudes
                                <span class="material-symbols-outlined text-base ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Card 3: Open Chats -->
<div class="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all hover:border-primary/50">
<div class="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-blue-500">forum</span>
</div>
<div class="relative z-10 flex flex-col h-full justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<div class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
<span class="material-symbols-outlined">chat</span>
</div>
<h3 class="font-semibold text-slate-500 dark:text-slate-400">Chats abiertos</h3>
</div>
<p class="text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">5</p>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
<a class="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-400" href="#">
                                Ver mensajes
                                <span class="material-symbols-outlined text-base ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Card 4: Scheduled Visits -->
<div class="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all hover:border-primary/50">
<div class="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-purple-500">event_available</span>
</div>
<div class="relative z-10 flex flex-col h-full justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<div class="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
<span class="material-symbols-outlined">calendar_month</span>
</div>
<h3 class="font-semibold text-slate-500 dark:text-slate-400">Visitas programadas</h3>
</div>
<p class="text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">2</p>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
<a class="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-400" href="#">
                                Ver agenda
                                <span class="material-symbols-outlined text-base ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Card 5: Paused Ads -->
<div class="group relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all hover:border-primary/50">
<div class="absolute right-0 top-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<span class="material-symbols-outlined text-8xl text-slate-400">pause_presentation</span>
</div>
<div class="relative z-10 flex flex-col h-full justify-between">
<div>
<div class="flex items-center gap-2 mb-2">
<div class="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">pause_circle</span>
</div>
<h3 class="font-semibold text-slate-500 dark:text-slate-400">Anuncios pausados</h3>
</div>
<p class="text-4xl font-black text-slate-900 dark:text-white tracking-tight mt-2">8</p>
</div>
<div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
<a class="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-400" href="#">
                                Reactivar anuncios
                                <span class="material-symbols-outlined text-base ml-1">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Promo / CTA Card -->
<div class="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-600 p-6 shadow-sm text-white flex flex-col justify-center items-center text-center">
<div class="mb-4 bg-white/20 p-3 rounded-full backdrop-blur-sm">
<span class="material-symbols-outlined text-3xl">campaign</span>
</div>
<h3 class="text-lg font-bold mb-2">¿Tienes una nueva propiedad?</h3>
<p class="text-blue-100 text-sm mb-4">Aumenta tu alcance publicando hoy mismo.</p>
<button class="w-full py-2 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-sm">
                        Crear nuevo anuncio
                    </button>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function PanelAnuncianteResumen() {
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
