import React from 'react';

const TITLE = `YaVoy - Aviso Relación Laboral`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="w-full bg-white dark:bg-[#1a2632] border-b border-[#e7edf3] dark:border-slate-700 sticky top-0 z-50">
<div class="max-w-[1200px] mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white cursor-pointer">
<div class="size-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">rocket_launch</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<button class="flex items-center justify-center rounded-lg h-9 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-colors">
<span class="material-symbols-outlined text-lg mr-2">help</span>
<span>Ayuda</span>
</button>
</div>
</header>
<!-- Main Layout -->
<main class="flex-grow flex justify-center py-8 px-4">
<div class="w-full max-w-2xl flex flex-col gap-6">
<!-- Warning Card -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
<!-- Warning Header Banner -->
<div class="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-800/30 p-6 flex flex-col md:flex-row gap-4 items-start">
<div class="size-10 min-w-10 rounded-full bg-amber-100 dark:bg-amber-800/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
<span class="material-symbols-outlined text-2xl">warning</span>
</div>
<div class="flex-1">
<h1 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight mb-2">Aviso importante</h1>
<p class="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                            El servicio que estás publicando tiene características que podrían interpretarse como una <strong>relación laboral</strong>. YaVoy es una plataforma de servicios puntuales, no de empleo formal.
                        </p>
</div>
</div>
<!-- Detection Details Box -->
<div class="px-6 py-6">
<div class="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-100 dark:border-slate-700">
<div class="grid grid-cols-[auto_1fr] gap-x-4 items-center">
<span class="material-symbols-outlined text-slate-400 dark:text-slate-500">search_check</span>
<div class="flex flex-col gap-1">
<p class="text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider font-semibold">Hemos detectado:</p>
<p class="text-[#0d141b] dark:text-slate-200 text-sm font-medium">Horario fijo, Pago por hora, Lenguaje laboral recurrente</p>
</div>
</div>
</div>
</div>
<!-- Explanation & Choice -->
<div class="px-6 pb-2">
<p class="text-[#0d141b] dark:text-slate-200 text-base font-normal leading-relaxed mb-6">
                        Para continuar, debes asegurarte de que tu publicación cumpla con nuestras normas o trasladarla a la sección de empleo si buscas una contratación formal.
                    </p>
</div>
<!-- Checkbox (Mandatory) -->
<div class="px-6 py-4 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-100 dark:border-slate-700">
<label class="flex gap-x-3 items-start group cursor-pointer">
<div class="relative flex items-center mt-0.5">
<input class="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 checked:bg-primary checked:border-primary focus:ring-2 focus:ring-primary/20 transition-all" id="legal-check" type="checkbox"/>
<span class="material-symbols-outlined absolute pointer-events-none opacity-0 peer-checked:opacity-100 text-white text-base left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">check</span>
</div>
<span class="text-slate-700 dark:text-slate-300 text-sm font-medium leading-snug select-none group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            Declaro que entiendo que YaVoy no actúa como empleador y que la responsabilidad legal recae únicamente en mí como contratante.
                        </span>
</label>
</div>
<!-- Action Buttons -->
<div class="p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-slate-100 dark:border-slate-700">
<button class="text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 text-sm font-semibold px-4 py-2 rounded-lg transition-colors order-3 sm:order-1">
                        Cancelar publicación
                    </button>
<div class="flex flex-col sm:flex-row gap-3 order-1 sm:order-2 w-full sm:w-auto">
<button class="flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 bg-white dark:bg-transparent hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-sm transition-all focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700">
<span class="material-symbols-outlined text-[18px]">work</span>
                            Publicar en Empleo
                        </button>
<button class="flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all shadow-sm hover:shadow focus:ring-4 focus:ring-primary/20">
<span class="material-symbols-outlined text-[18px]">update</span>
                            Convertir a Servicio Recurrente
                        </button>
</div>
</div>
</div>
<!-- Contextual Help Link -->
<div class="text-center">
<a class="inline-flex items-center gap-1 text-primary hover:text-primary-dark text-sm font-medium transition-colors" href="#">
<span class="material-symbols-outlined text-[16px]">info</span>
                    ¿Cuál es la diferencia entre Ayuda y Empleo?
                </a>
</div>
</div>
</main>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`;

export default function AvisoRelacionLaboralAyuda() {
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
