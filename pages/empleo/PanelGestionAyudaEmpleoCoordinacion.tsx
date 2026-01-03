import React from 'react';

const TITLE = `Panel Gestión Ayuda/Empleo - Coordinación | YaVoy`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div class="flex h-16 items-center justify-between px-4 md:px-10 max-w-7xl mx-auto w-full">
<div class="flex items-center gap-4">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-3xl">handshake</span>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">YaVoy</h2>
</div>
</div>
<!-- Desktop Nav -->
<nav class="hidden md:flex flex-1 justify-end gap-8 items-center">
<div class="flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Inicio</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Panel</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Mensajes</a>
<a class="text-slate-900 dark:text-white font-semibold text-sm transition-colors" href="#">Perfil</a>
</div>
<div class="h-8 w-8 bg-center bg-no-repeat bg-cover rounded-full ring-2 ring-slate-100 dark:ring-slate-700" data-alt="User profile avatar showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmrcbB8NclyWJM2HnMZEop2NR8gGt_ZkgldV4NE_xutFtedBYUhcVKAHjlsSkHsZt931tYuxvYO28QsSGVVzbEwWcRLUFBWVgXZU7ilxMtN4W2gFdb5Tqkpnwfmi38ctx6Jjpms52o3rf-l2b8JxvDOYoYR7ooe8UcXV2zLQh_ARLpiNoFvOjJsu7N1YC43gd9Ry1zuovRQyVKHrvys83rmT7C-vy9mVHp62KHaQmLcPoR2Tc7LLpduh3PdkFFtji_54zgCB5XnQ");'>
</div>
</nav>
<!-- Mobile Menu Icon -->
<button class="md:hidden p-2 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main class="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-8">
<!-- Disclaimer Banner (MetaText modified) -->
<div class="mb-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 flex items-start gap-3 shadow-sm">
<span class="material-symbols-outlined text-primary mt-0.5">info</span>
<p class="text-slate-700 dark:text-blue-100 text-sm font-medium leading-relaxed">
                    La coordinación se realiza directamente entre las partes. YaVoy no organiza el servicio.
                </p>
</div>
<!-- Page Layout: Grid -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Left Column: Actions & Details (8 cols) -->
<div class="lg:col-span-8 flex flex-col gap-6">
<!-- Page Heading -->
<div class="flex flex-col gap-2">
<h1 class="text-slate-900 dark:text-white text-3xl md:text-4xl font-black tracking-tight">Coordinación del Servicio</h1>
<p class="text-slate-500 dark:text-slate-400 text-lg">Gestiona la fecha y confirma los detalles con María García.</p>
</div>
<!-- Action Card: Proposal Management -->
<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
<div class="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center flex-wrap gap-4">
<div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Propuesta Actual</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Enviada por María hace 2 horas</p>
</div>
<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
<span class="material-symbols-outlined text-[18px]">pending</span>
                                Pendiente de confirmación
                            </span>
</div>
<div class="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
<!-- Date Display -->
<div class="flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-6 min-w-[200px] text-center">
<span class="text-sm font-medium text-slate-500 uppercase tracking-wider">Fecha Propuesta</span>
<span class="text-4xl font-black text-primary mt-2">24</span>
<span class="text-xl font-bold text-slate-800 dark:text-slate-200">Octubre</span>
<span class="text-base text-slate-500 mt-1">Lunes, 10:00 AM</span>
</div>
<!-- Controls -->
<div class="flex-1 flex flex-col gap-4 w-full">
<p class="text-slate-600 dark:text-slate-300">
                                    María ha propuesto esta fecha para el servicio "Clases de Matemáticas". ¿Te va bien este horario?
                                </p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
<button class="flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg">
<span class="material-symbols-outlined">check_circle</span>
                                        Confirmar Fecha
                                    </button>
<button class="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium py-3 px-4 rounded-lg transition-all">
<span class="material-symbols-outlined">edit_calendar</span>
                                        Proponer cambio
                                    </button>
</div>
<button class="text-sm text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 font-medium text-left mt-2 flex items-center gap-1 w-fit">
<span class="material-symbols-outlined text-lg">cancel</span>
                                    Rechazar y cancelar servicio
                                </button>
</div>
</div>
</div>
<!-- Chat / Activity Log -->
<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Historial de Actividad</h3>
<div class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-700 before:to-transparent">
<!-- Log Item 1 -->
<div class="relative flex items-start group">
<div class="absolute left-0 top-1 ml-5 -translate-x-1/2 rounded-full bg-slate-200 dark:bg-slate-700 p-1 group-hover:bg-primary transition-colors">
<div class="h-2 w-2 rounded-full bg-white dark:bg-slate-900"></div>
</div>
<div class="ml-12 w-full">
<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
<p class="text-sm font-medium text-slate-900 dark:text-white">Nueva propuesta recibida</p>
<time class="text-xs text-slate-500">Hoy, 09:30 AM</time>
</div>
<p class="mt-1 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                                        María propuso: <strong>24 Octubre, 10:00 AM</strong>.
                                    </p>
</div>
</div>
<!-- Log Item 2 -->
<div class="relative flex items-start group">
<div class="absolute left-0 top-1 ml-5 -translate-x-1/2 rounded-full bg-slate-200 dark:bg-slate-700 p-1">
<div class="h-2 w-2 rounded-full bg-white dark:bg-slate-900"></div>
</div>
<div class="ml-12 w-full">
<div class="flex flex-col sm:flex-row sm:justify-between sm:items-center">
<p class="text-sm font-medium text-slate-900 dark:text-white">Solicitud de servicio creada</p>
<time class="text-xs text-slate-500">Ayer, 18:45 PM</time>
</div>
<p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        Has iniciado una solicitud para el anuncio "Clases de Matemáticas".
                                    </p>
</div>
</div>
</div>
<!-- Chat Input Area -->
<div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
<label class="sr-only" for="message">Enviar mensaje</label>
<div class="relative">
<input class="block w-full rounded-lg border-slate-300 dark:border-slate-600 dark:bg-slate-900 dark:text-white pl-4 pr-12 py-3 shadow-sm focus:border-primary focus:ring-primary sm:text-sm" id="message" placeholder="Escribe un mensaje a María..." type="text"/>
<button class="absolute inset-y-0 right-0 flex items-center pr-3 text-primary hover:text-blue-700" type="button">
<span class="material-symbols-outlined">send</span>
</button>
</div>
</div>
</div>
</div>
<!-- Right Column: Summary & Status (4 cols) -->
<div class="lg:col-span-4 flex flex-col gap-6">
<!-- Service Summary Card -->
<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
<div class="h-32 w-full bg-cover bg-center" data-alt="Abstract education pattern background" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDMUUOnm77mNSIIhePB_jSILAEZI6xWGmb6eyP-1qvazw-ecMu8aBJa05Z__IziPpiGMiFQ0w_xG_ZeA8xJSseskq9YNdFgloYCHjFOR3zFY0C1YjSb-DdCH5srt-4QPGsliXENu_od1k3FsG_rJraxKPfEVKI0Gb8ykenMB0dFoZNQFfG2Sjzpw-hN3YlBeAc3jKTaXUAYtrkRWmADPgfaDRD1NoCJyKJejjT9UQUUyLIebHRLIZRvEVZyhK_FDNX0p8jOsmM1nw");'>
<div class="h-full w-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<span class="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded border border-white/30">Educación</span>
</div>
</div>
<div class="p-5">
<h3 class="font-bold text-lg text-slate-900 dark:text-white mb-1">Clases de Matemáticas - Nivel ESO</h3>
<p class="text-slate-500 dark:text-slate-400 text-sm mb-4">Anuncio #83921</p>
<div class="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
<div class="h-10 w-10 rounded-full bg-cover bg-center" data-alt="Portrait of Maria Garcia" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-o1nhbg9srdSpvPC4cnL4aRaSikUMHWvzwNrHY-oxGviMJ2pdGwpDydZqmPiyOrzZyPmi4M7xORE1VB0n0cNB5XJyPztpHC7scbRPgzJX0YoZYbJNP7epd6UWXwwXkPOhOCwMiPtrEDru6hr442GjG0mplBSan4MiS3MyK9JikwbQvKSMSxOu1HYVgSTCHpPtteZxE2Q-rWZnLR_gWEQ-TkOLnX2uaiwdf9O0QZoP83HWl_49AidoO8hC8-OF-jlTMBA2ve6Mqw");'></div>
<div>
<p class="text-sm font-semibold text-slate-900 dark:text-white">María García</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Profesora Certificada</p>
</div>
<button class="ml-auto text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">chat</span>
</button>
</div>
</div>
</div>
<!-- Status Timeline (Reusing Logic but improved visually) -->
<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
<h3 class="text-base font-bold text-slate-900 dark:text-white mb-6">Estado del Servicio</h3>
<div class="relative pl-2">
<!-- Step 1: Active -->
<div class="flex gap-4 pb-8 group">
<div class="flex flex-col items-center">
<div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 shadow-lg shadow-blue-500/30">
<span class="material-symbols-outlined text-white text-sm font-bold">event</span>
</div>
<div class="w-0.5 bg-slate-200 dark:bg-slate-600 h-full -mb-4 mt-2"></div>
</div>
<div class="pt-1">
<p class="text-sm font-bold text-primary">Propuesto</p>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Acordando fecha y hora</p>
</div>
</div>
<!-- Step 2: Pending -->
<div class="flex gap-4 pb-8 opacity-50">
<div class="flex flex-col items-center">
<div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center z-10">
<span class="material-symbols-outlined text-slate-400 text-sm">check_circle</span>
</div>
<div class="w-0.5 bg-slate-200 dark:bg-slate-600 h-full -mb-4 mt-2"></div>
</div>
<div class="pt-1">
<p class="text-sm font-medium text-slate-600 dark:text-slate-300">Confirmado</p>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Servicio aceptado por ambas partes</p>
</div>
</div>
<!-- Step 3: Future -->
<div class="flex gap-4 opacity-50">
<div class="flex flex-col items-center">
<div class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 flex items-center justify-center z-10">
<span class="material-symbols-outlined text-slate-400 text-sm">flag</span>
</div>
</div>
<div class="pt-1">
<p class="text-sm font-medium text-slate-600 dark:text-slate-300">Finalizado</p>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Servicio completado</p>
</div>
</div>
</div>
</div>
<!-- Help Box -->
<div class="bg-indigo-50 dark:bg-indigo-900/10 rounded-xl p-5 border border-indigo-100 dark:border-indigo-900/30">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-indigo-600 dark:text-indigo-400">support_agent</span>
<div>
<h4 class="text-sm font-bold text-indigo-900 dark:text-indigo-200">¿Necesitas ayuda?</h4>
<p class="text-xs text-indigo-700 dark:text-indigo-300 mt-1 leading-relaxed">
                                    Si tienes problemas con la coordinación, consulta nuestro centro de ayuda o contacta con soporte.
                                </p>
<a class="text-xs font-bold text-indigo-600 dark:text-indigo-400 mt-2 block hover:underline" href="#">Ir al Centro de Ayuda →</a>
</div>
</div>
</div>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = `body { font-family: 'Inter', sans-serif; }`;

export default function PanelGestionAyudaEmpleoCoordinacion() {
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
