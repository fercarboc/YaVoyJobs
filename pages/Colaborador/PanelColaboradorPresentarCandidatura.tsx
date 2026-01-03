import React from 'react';

const TITLE = `YaVoy - Presentar Candidatura`;
const BODY_HTML = `<!-- Navigation Bar -->
<header class="bg-white dark:bg-[#1A2633] border-b border-[#e7edf3] dark:border-slate-800 sticky top-0 z-50">
<div class="max-w-[1200px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between whitespace-nowrap">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[32px]">rocket_launch</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<nav class="flex items-center gap-9">
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Mis Tareas</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Perfil</a>
<a class="text-[#0d141b] dark:text-slate-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Notificaciones</a>
</nav>
<div class="flex gap-2">
<button class="flex items-center justify-center overflow-hidden rounded-lg size-10 bg-[#e7edf3] dark:bg-slate-700 text-[#0d141b] dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-600">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button class="flex items-center justify-center overflow-hidden rounded-lg size-10 bg-[#e7edf3] dark:bg-slate-700 text-[#0d141b] dark:text-white transition-colors hover:bg-slate-200 dark:hover:bg-slate-600">
<span class="material-symbols-outlined text-[20px]">person</span>
</button>
</div>
</div>
<!-- Mobile Menu Button (Visible on small screens) -->
<button class="md:hidden flex items-center justify-center size-10 text-[#0d141b] dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 flex flex-col items-center py-10 px-4 md:px-0">
<div class="w-full max-w-[960px] flex flex-col gap-6">
<!-- Page Heading -->
<div class="flex flex-col gap-2 px-4 md:px-0 text-center md:text-left">
<h1 class="text-[#0d141b] dark:text-white tracking-tight text-[32px] font-bold leading-tight">Presentar Candidatura</h1>
<p class="text-[#4c739a] dark:text-slate-400 text-base font-normal leading-normal">Estás a un paso de ayudar. Revisa los detalles y envía tu propuesta.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<!-- Left Column: Task Summary Card -->
<div class="lg:col-span-5 order-2 lg:order-1">
<div class="rounded-xl bg-white dark:bg-[#1A2633] p-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-transparent dark:border-slate-700">
<div class="flex flex-col gap-4">
<!-- Image -->
<div class="w-full h-48 bg-gray-200 dark:bg-slate-700 rounded-lg bg-cover bg-center relative overflow-hidden" data-alt="Modern living room with moving boxes" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcNCqcR2NQ6viEB3IPtRB54rs7cM-6xwwlz1pLmIXxXN_F1g9NVfNbyk7HqZ2ZmHEZ7Y3nfKMehywMA3lB6deqjjkl7lOPTogOdpo91NBIVQzcRHG3yr_4b_fmU9cvp445-3PlHCO0Bh_dHSijYNW5X6z6cCc-LTUqiVaR0P4-85-k0vaEij_vh_pk6v0z5XEIDM_Rhor3trkAt0GOr8t-Z90Ku9e9zs6c9dqsGkTNNIlE0fCkHwJkkO1mrig7k8GVAhM3OBTmAw');">
<div class="absolute top-2 right-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-[#0d141b] dark:text-white shadow-sm">
                                    MUDANZAS
                                 </div>
</div>
<!-- Details -->
<div class="flex flex-col gap-3">
<div>
<h3 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Ayuda con mudanza en Madrid</h3>
<div class="flex items-center gap-1 mt-1 text-[#4c739a] dark:text-slate-400 text-sm">
<span class="material-symbols-outlined text-[16px] filled">location_on</span>
<span>Calle Mayor, Madrid</span>
</div>
</div>
<div class="flex items-center justify-between border-t border-[#e7edf3] dark:border-slate-700 pt-3">
<div class="flex flex-col">
<span class="text-xs font-medium text-[#4c739a] dark:text-slate-400 uppercase tracking-wider">Presupuesto</span>
<span class="text-xl font-bold text-primary">40€</span>
</div>
<button class="text-sm font-medium text-primary hover:text-blue-700 transition-colors flex items-center gap-1">
                                        Ver anuncio completo
                                        <span class="material-symbols-outlined text-[16px]">open_in_new</span>
</button>
</div>
</div>
</div>
</div>
</div>
<!-- Right Column: Application Form -->
<div class="lg:col-span-7 order-1 lg:order-2">
<form class="rounded-xl bg-white dark:bg-[#1A2633] p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-transparent dark:border-slate-700 flex flex-col gap-6">
<!-- Availability Input -->
<div class="flex flex-col gap-2">
<label class="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal" for="availability">
                                Disponibilidad <span class="text-red-500">*</span>
</label>
<div class="relative">
<span class="absolute left-4 top-4 text-[#4c739a] dark:text-slate-500 material-symbols-outlined">calendar_today</span>
<input class="form-input flex w-full min-w-0 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdbe7] dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:border-primary h-14 placeholder:text-[#4c739a] dark:placeholder:text-slate-500 pl-12 pr-4 text-base font-normal leading-normal transition-all" id="availability" placeholder="¿Cuándo puedes realizar esta tarea? (ej. Mañana tarde)" type="text" value=""/>
</div>
</div>
<!-- Experience Input -->
<div class="flex flex-col gap-2">
<label class="text-[#0d141b] dark:text-slate-200 text-base font-medium leading-normal" for="experience">
                                Experiencia previa <span class="text-[#4c739a] font-normal text-sm ml-1">(Opcional)</span>
</label>
<textarea class="form-textarea flex w-full min-w-0 resize-none rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfdbe7] dark:border-slate-600 bg-slate-50 dark:bg-slate-800 focus:border-primary min-h-[140px] placeholder:text-[#4c739a] dark:placeholder:text-slate-500 p-4 text-base font-normal leading-normal transition-all" id="experience" placeholder="He realizado 5 mudanzas este año y cuento con furgoneta propia..."></textarea>
</div>
<!-- Info Alert -->
<div class="flex items-start gap-3 rounded-lg bg-blue-50 dark:bg-primary/10 p-4 border border-blue-100 dark:border-primary/20">
<div class="text-primary mt-0.5">
<span class="material-symbols-outlined">chat</span>
</div>
<div class="flex flex-col gap-1">
<p class="text-[#0d141b] dark:text-slate-200 text-sm font-bold">Comunicación directa</p>
<p class="text-[#4c739a] dark:text-slate-400 text-sm font-normal leading-relaxed">
                                    Al enviar tu candidatura, se habilitará automáticamente un chat privado con el anunciante para ultimar los detalles.
                                </p>
</div>
</div>
<!-- Actions -->
<div class="flex flex-col md:flex-row items-center gap-4 pt-2">
<button class="cursor-pointer w-full flex-1 h-12 bg-primary hover:bg-blue-600 text-white rounded-lg font-bold text-base leading-normal tracking-[0.015em] shadow-sm transition-all flex items-center justify-center gap-2 group" type="button">
<span>Enviar candidatura</span>
<span class="material-symbols-outlined group-hover:translate-x-1 transition-transform text-[20px]">send</span>
</button>
<a class="text-[#4c739a] hover:text-[#0d141b] dark:text-slate-400 dark:hover:text-white text-sm font-medium transition-colors py-2 px-4" href="#">
                                Cancelar y volver
                            </a>
</div>
</form>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function PanelColaboradorPresentarCandidatura() {
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
