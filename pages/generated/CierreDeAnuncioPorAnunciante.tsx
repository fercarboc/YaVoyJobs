import React from 'react';

const TITLE = `Cerrar Anuncio - YaVoy`;
const BODY_HTML = `<!-- TopNavBar -->
<div class="relative flex w-full flex-col bg-white dark:bg-[#1A2633] border-b border-slate-200 dark:border-slate-800 transition-colors">
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1">
<header class="flex items-center justify-between whitespace-nowrap py-3">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">home_app_logo</span>
</div>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-4 md:gap-8">
<div class="hidden md:flex items-center gap-6 lg:gap-9">
<a class="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Mis Anuncios</a>
<a class="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Mensajes</a>
<a class="text-slate-900 dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Favoritos</a>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-slate-100 dark:ring-slate-700" data-alt="User profile picture showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtUkhSl6rpyPz0jifdUtXl4RpkrQKSW2z2WHhO_MLm7OrUGxN6I7dvTAH5HlYxTXt9WRDIuRejq0afff0B_mbQX97QsJIdXjvI7zQsFZJDHxdghqB2sBw00GwMIAOF5RU2ybjfdvhWwNwhUrUwVcRCQbSKASoo0uXrIKo67MNmGSrr41c7mpZZaC6bg7lGJkmAOEjwZKWlJNH6yLlP1_blGXH5-4RNNEkeJE_o6mqlMOvt1u90g7_uctEcD8bLNshWXnIyYCWj_w");'></div>
</div>
</header>
</div>
</div>
</div>
</div>
<!-- Main Content -->
<main class="flex-1 flex justify-center py-8 px-4 md:px-10 lg:px-40">
<div class="max-w-[800px] w-full flex flex-col gap-6">
<!-- Breadcrumb / Back Link -->
<a class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors w-fit" href="#">
<span class="material-symbols-outlined text-[18px]">arrow_back</span>
                Volver a Mis Anuncios
            </a>
<!-- Card Container -->
<div class="bg-white dark:bg-[#1A2633] rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<!-- PageHeading Section -->
<div class="p-6 md:p-8 border-b border-slate-100 dark:border-slate-700/50">
<div class="flex flex-col md:flex-row justify-between gap-6 items-start md:items-center">
<div class="flex flex-col gap-2">
<h1 class="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Cerrar Anuncio</h1>
<div class="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-base">
<span class="material-symbols-outlined text-[20px]">apartment</span>
<p>Ref: 98234</p>
</div>
</div>
<!-- Ad Preview Mini Card -->
<div class="flex gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 max-w-sm">
<div class="w-16 h-16 rounded-lg bg-cover bg-center shrink-0" data-alt="Interior of a bright apartment living room with modern furniture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-beGVgG_-ZHLXiAbrjAIHEfXci4I26MnQN8wUHVJ9QXdqLRL-aO1Gt13h0VitDkO65oTQMq3Vo_SbUCm7Np-kmB1JHTyY1APEhTREZovAVWtwa6Y76xsSC0I12NJqVegWAAeR0A35cZWBwV5E8jfJYuognLlZbalMNvlds5YyiRRhOGu08_JWwIJkVnxZH8hf6zLBGRPw5FfSvGeOo2q60hSKFR8Ped3T1rva3xa1g7QEt86t_cUpjHFAb36T5Yc89NCKAc0unQ");'></div>
<div class="flex flex-col justify-center">
<p class="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">Piso luminoso en Calle Mayor</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Madrid, Centro</p>
<span class="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded text-[10px] font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 w-fit">
<span class="size-1.5 rounded-full bg-green-500"></span>
                                    Activo
                                </span>
</div>
</div>
</div>
</div>
<!-- Form Content -->
<div class="p-6 md:p-8 flex flex-col gap-8">
<!-- Reason Section -->
<section>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight mb-4 flex items-center gap-2">
<span class="flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-sm">1</span>
                            ¿Por qué quieres cerrar este anuncio?
                        </h2>
<div class="grid gap-3">
<label class="group relative flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
<input checked="" class="mt-0.5 size-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary/20 checked:border-primary checked:bg-primary" name="reason" type="radio"/>
<div class="flex grow flex-col">
<p class="text-slate-900 dark:text-white text-base font-semibold group-has-[:checked]:text-primary">¡Lo he alquilado a través de YaVoy!</p>
<p class="text-slate-500 dark:text-slate-400 text-sm mt-1">¡Genial! Nos alegra haberte ayudado.</p>
</div>
<span class="material-symbols-outlined text-primary opacity-0 group-has-[:checked]:opacity-100 transition-opacity">celebration</span>
</label>
<label class="group relative flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
<input class="mt-0.5 size-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary/20 checked:border-primary checked:bg-primary" name="reason" type="radio"/>
<div class="flex grow flex-col">
<p class="text-slate-900 dark:text-white text-base font-semibold group-has-[:checked]:text-primary">Lo he alquilado por otro medio</p>
</div>
</label>
<label class="group relative flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
<input class="mt-0.5 size-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary/20 checked:border-primary checked:bg-primary" name="reason" type="radio"/>
<div class="flex grow flex-col">
<p class="text-slate-900 dark:text-white text-base font-semibold group-has-[:checked]:text-primary">Ya no está disponible temporalmente</p>
</div>
</label>
<label class="group relative flex items-start gap-4 rounded-xl border border-slate-200 dark:border-slate-700 p-4 cursor-pointer hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5 dark:has-[:checked]:bg-primary/10">
<input class="mt-0.5 size-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary/20 checked:border-primary checked:bg-primary" name="reason" type="radio"/>
<div class="flex grow flex-col">
<p class="text-slate-900 dark:text-white text-base font-semibold group-has-[:checked]:text-primary">Lo he retirado definitivamente</p>
</div>
</label>
</div>
</section>
<!-- Consequences Section -->
<section class="bg-blue-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-blue-100 dark:border-slate-700">
<h3 class="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-4 flex items-center gap-2">
<span class="flex items-center justify-center size-6 rounded-full bg-primary/10 text-primary text-sm">2</span>
                            Consecuencias del cierre
                        </h3>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<!-- Impact Item 1 -->
<div class="flex flex-col gap-2 p-3">
<div class="size-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-red-500 shadow-sm">
<span class="material-symbols-outlined">block</span>
</div>
<h4 class="text-sm font-bold text-slate-900 dark:text-white">Sin nuevas candidaturas</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 leading-normal">Se bloqueará la recepción de nuevos interesados en tu anuncio.</p>
</div>
<!-- Impact Item 2 -->
<div class="flex flex-col gap-2 p-3">
<div class="size-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-orange-500 shadow-sm">
<span class="material-symbols-outlined">chat</span>
</div>
<h4 class="text-sm font-bold text-slate-900 dark:text-white">Cierre de chats</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 leading-normal">Las conversaciones activas pasarán a estado "Archivado".</p>
</div>
<!-- Impact Item 3 -->
<div class="flex flex-col gap-2 p-3">
<div class="size-10 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-primary shadow-sm">
<span class="material-symbols-outlined">campaign</span>
</div>
<h4 class="text-sm font-bold text-slate-900 dark:text-white">Aviso automático</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 leading-normal">Enviaremos una notificación a los candidatos informando que ya no está disponible.</p>
</div>
</div>
</section>
<!-- Feedback/Warning Note -->
<div class="flex items-start gap-3 px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-slate-400 mt-0.5">info</span>
<p>Podrás reactivar este anuncio en el futuro si vuelve a estar disponible desde tu panel de gestión.</p>
</div>
<!-- Actions Footer -->
<div class="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-2 border-t border-slate-100 dark:border-slate-700/50">
<button class="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200">
                            Cancelar
                        </button>
<button class="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20 transition-all transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                            Confirmar Cierre
                        </button>
</div>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function CierreDeAnuncioPorAnunciante() {
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
