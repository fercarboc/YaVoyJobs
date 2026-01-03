import React from 'react';

const TITLE = `YaVoy - Concertar Visita`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-[#1a2634] px-10 py-3 shrink-0">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_330)">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</g>
<defs>
<clippath id="clip0_6_330"><rect fill="white" height="48" width="48"></rect></clippath>
</defs>
</svg>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] dark:text-white">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="hidden lg:flex items-center gap-9">
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors dark:text-slate-300" href="#">Comprar</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors dark:text-slate-300" href="#">Alquilar</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors dark:text-slate-300" href="#">Vender</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors dark:text-slate-300" href="#">Hipotecas</a>
<a class="text-sm font-medium leading-normal hover:text-primary transition-colors dark:text-slate-300" href="#">Blog</a>
</div>
<div class="flex gap-2">
<button class="flex items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7edf3] dark:bg-slate-700 text-[#0d141b] dark:text-white w-10 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="flex items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7edf3] dark:bg-slate-700 text-[#0d141b] dark:text-white w-10 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined">chat_bubble</span>
</button>
<button class="flex items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e7edf3] dark:bg-slate-700 text-[#0d141b] dark:text-white w-10 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined">account_circle</span>
</button>
</div>
</div>
</header>
<!-- Main Layout: Chat + Sidebar -->
<div class="flex flex-1 overflow-hidden">
<!-- Left Column: Chat Conversation -->
<main class="flex-1 flex flex-col relative bg-white dark:bg-[#111a22] border-r border-[#e7edf3] dark:border-slate-800">
<!-- Chat Header -->
<div class="flex items-center justify-between px-6 py-4 border-b border-[#e7edf3] dark:border-slate-800 shrink-0">
<div class="flex items-center gap-4">
<div class="h-12 w-12 rounded-lg bg-cover bg-center" data-alt="Thumbnail of a modern apartment interior" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwyQqGWT_dv7lu8upd5g_G9DKJz1DMO8dwG5x3ALGmrvXVeV0Cm_8VdkwZEyq3L1ZLJY8rsMiTuV_X8u4Zo4ocWxkvFgfex-8dZtSgrD6arvrprHJ9m37FhYJMQ8rgLnprrw1qdDC2IyCGOiiyRhBoA-cHzAR1rfEMn-LlMEm4zvXqHtCwPanDtJg_FVqdKK-yXnNY8Ul9MXgqT8DquD2CSNkDUvZv8qHqKIYnjQUVPrlAiDEgJECQxOXCvxOubChHiw6oz1TS2w");'></div>
<div>
<h2 class="text-lg font-bold leading-tight dark:text-white">Piso en Calle Mayor, Madrid</h2>
<div class="flex items-center gap-2 mt-0.5">
<span class="block w-2 h-2 rounded-full bg-green-500"></span>
<span class="text-sm text-slate-500 dark:text-slate-400">Propietario conectado</span>
</div>
</div>
</div>
<div class="flex items-center gap-2">
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span class="material-symbols-outlined">favorite</span>
</button>
<button class="p-2 text-slate-500 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<!-- Messages Area -->
<div class="flex-1 overflow-y-auto p-6 space-y-6 chat-scroll bg-background-light dark:bg-[#0d141b]">
<!-- Date Divider -->
<div class="flex justify-center">
<span class="bg-slate-200 dark:bg-slate-800 text-xs font-medium px-3 py-1 rounded-full text-slate-600 dark:text-slate-400">Hoy</span>
</div>
<!-- Message Received -->
<div class="flex gap-3 max-w-[80%]">
<div class="w-8 h-8 rounded-full bg-cover bg-center shrink-0" data-alt="Portrait of the property owner" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuARV69Rfql3VMd94fFnFaUGkXEIvr78iJCtqVjyjoGZkbZprN9CrQjYiCWp_R7Es_3G8ivSJeu6ATD7YdThIBcJZ-jj_kf_irXvN2VzFVesEjNDSckGqNlQSIPNXNQqaxdiFqna_a8p2TWCQ3F8D4_FXg39dSyx_a9_K7smV7SXknfKzwKecd8FlWcJrNkOIeZaEmG1GOYcoEMAodPnk7nkJ_SNuCqZ2v8fZvic_1qs_ZqayZEeZSCONfGhkO4_VS1UngadvMWvUA");'></div>
<div class="flex flex-col gap-1">
<div class="bg-white dark:bg-slate-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p class="text-sm leading-relaxed">¡Hola! He visto que has mostrado interés en el piso de Calle Mayor. ¿Tienes alguna pregunta en particular?</p>
</div>
<span class="text-xs text-slate-400 ml-1">10:23 AM</span>
</div>
</div>
<!-- Message Sent -->
<div class="flex gap-3 max-w-[80%] ml-auto flex-row-reverse">
<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 text-xs font-bold">YO</div>
<div class="flex flex-col gap-1 items-end">
<div class="bg-primary text-white p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl shadow-sm">
<p class="text-sm leading-relaxed">Hola, sí. Me encanta la zona y las fotos se ven estupendas. Me gustaría poder verlo en persona si es posible.</p>
</div>
<span class="text-xs text-slate-400 mr-1">10:25 AM</span>
</div>
</div>
<!-- Message Received -->
<div class="flex gap-3 max-w-[80%]">
<div class="w-8 h-8 rounded-full bg-cover bg-center shrink-0" data-alt="Portrait of the property owner" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQLqleB0Zokq9RkEmnK-CV5uxWs1aRHv6dEULTwFvyw4w_LRk4v6_wUsQZAkL-uEFqN1pWgjwFLIIsUsgVAp_FBC7qcblm6tCHhWfG6PCKQVJSgC1sR_TA3tsWl_6wRZUtMlUTTKoEFy4jThfIx3qC00RoyDKrzEQOHH_z0_ZnDkHHbGTLbO4tPaDyx7XYbiFs7DZ5O9swUWc1hSrB7gqgwkXIBgRfSDeJ9mwt33JBohFJ2z1F8NmoN5HLYOnaqN8LkCtWOCinaw");'></div>
<div class="flex flex-col gap-1">
<div class="bg-white dark:bg-slate-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl shadow-sm border border-slate-100 dark:border-slate-700">
<p class="text-sm leading-relaxed">Claro, estoy disponible esta semana por las tardes. Por favor, propón una fecha que te venga bien.</p>
</div>
<span class="text-xs text-slate-400 ml-1">10:26 AM</span>
</div>
</div>
</div>
<!-- Composer Area -->
<div class="p-4 bg-white dark:bg-[#1a2634] border-t border-[#e7edf3] dark:border-slate-800 shrink-0">
<!-- Action Bar above composer -->
<div class="flex justify-end mb-3">
<button class="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-lg text-sm font-bold transition-colors">
<span class="material-symbols-outlined text-[20px]">calendar_month</span>
                        Proponer visita
                    </button>
</div>
<div class="flex items-center gap-3">
<div class="flex-1 flex items-center bg-[#e7edf3] dark:bg-slate-700 rounded-lg overflow-hidden transition-all focus-within:ring-2 focus-within:ring-primary/50">
<input class="w-full bg-transparent border-none text-sm px-4 py-3 placeholder:text-slate-500 focus:ring-0 text-[#0d141b] dark:text-white" placeholder="Escribe un mensaje..."/>
<div class="flex items-center pr-2 gap-1">
<button class="p-2 text-slate-500 hover:text-primary rounded-full hover:bg-black/5 dark:hover:bg-white/10">
<span class="material-symbols-outlined text-[20px]">attach_file</span>
</button>
<button class="p-2 text-slate-500 hover:text-primary rounded-full hover:bg-black/5 dark:hover:bg-white/10">
<span class="material-symbols-outlined text-[20px]">image</span>
</button>
</div>
</div>
<button class="bg-primary hover:bg-blue-600 text-white p-3 rounded-lg flex items-center justify-center transition-colors shadow-md shadow-blue-500/20">
<span class="material-symbols-outlined">send</span>
</button>
</div>
</div>
</main>
<!-- Right Column: Scheduling Panel (Visible State) -->
<aside class="w-[400px] bg-white dark:bg-[#1a2634] border-l border-[#e7edf3] dark:border-slate-800 flex flex-col shadow-xl z-10 shrink-0">
<div class="p-5 border-b border-[#e7edf3] dark:border-slate-800 flex items-center justify-between">
<h3 class="font-bold text-lg dark:text-white">Concertar Visita</h3>
<button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<div class="flex-1 overflow-y-auto p-5 space-y-6">
<!-- Calendar Section -->
<div class="space-y-3">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">event</span>
                        Selecciona un día
                    </label>
<div class="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
<div class="flex items-center justify-between mb-4">
<button class="text-slate-400 hover:text-primary"><span class="material-symbols-outlined">chevron_left</span></button>
<span class="font-bold text-sm">Octubre 2023</span>
<button class="text-slate-400 hover:text-primary"><span class="material-symbols-outlined">chevron_right</span></button>
</div>
<div class="grid grid-cols-7 gap-1 text-center text-xs text-slate-400 mb-2">
<div>L</div><div>M</div><div>X</div><div>J</div><div>V</div><div>S</div><div>D</div>
</div>
<div class="grid grid-cols-7 gap-1 text-center text-sm">
<div class="p-2 text-slate-300">28</div>
<div class="p-2 text-slate-300">29</div>
<div class="p-2 text-slate-300">30</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer">1</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer">2</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer font-medium text-red-400">3</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer font-medium text-red-400">4</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer">5</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer">6</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer">7</div>
<div class="p-2 bg-primary text-white rounded-lg cursor-pointer font-bold shadow-md shadow-blue-500/30">8</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer">9</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer font-medium text-red-400">10</div>
<div class="p-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg cursor-pointer font-medium text-red-400">11</div>
</div>
</div>
</div>
<!-- Time Section -->
<div class="space-y-3">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[18px]">schedule</span>
                        Selecciona una hora
                    </label>
<div class="flex flex-wrap gap-2">
<button class="px-4 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all bg-white dark:bg-slate-800">09:00</button>
<button class="px-4 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all bg-white dark:bg-slate-800">09:30</button>
<button class="px-4 py-2 text-sm bg-primary text-white border border-primary rounded-lg shadow-md shadow-blue-500/20 font-medium">10:00</button>
<button class="px-4 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all bg-white dark:bg-slate-800">10:30</button>
<button class="px-4 py-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:text-primary transition-all bg-white dark:bg-slate-800">11:00</button>
</div>
</div>
<!-- Preview Section -->
<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-lg p-4">
<span class="text-xs uppercase tracking-wider font-bold text-blue-800 dark:text-blue-300 mb-1 block">Vista Previa del Mensaje</span>
<p class="text-sm text-blue-900 dark:text-blue-100 italic">
                        "Hola, me gustaría visitar el inmueble el día <span class="font-semibold">Martes 8 de Octubre</span> a las <span class="font-semibold">10:00</span>."
                    </p>
</div>
</div>
<!-- Footer / Disclaimer -->
<div class="p-5 border-t border-[#e7edf3] dark:border-slate-800 bg-slate-50 dark:bg-[#151f28]">
<div class="flex items-start gap-2 mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 rounded-lg">
<span class="material-symbols-outlined text-yellow-600 text-[18px] shrink-0 mt-0.5">info</span>
<p class="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                        La visita se acuerda directamente entre las partes. YaVoy no participa en la gestión.
                    </p>
</div>
<div class="flex flex-col gap-3">
<button class="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[20px]">send</span>
                        Enviar Propuesta
                    </button>
<button class="w-full text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-medium text-sm py-2">
                        Cancelar
                    </button>
</div>
</div>
</aside>
</div>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom scrollbar for chat area */
        .chat-scroll::-webkit-scrollbar {
            width: 6px;
        }
        .chat-scroll::-webkit-scrollbar-track {
            background: transparent;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }`;

export default function ConcertarVisitaDesdeChat() {
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
