import React from 'react';

const TITLE = `YaVoy - Denunciar Usuario`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Header -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] px-10 py-3 shadow-sm">
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
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em] text-[#0d141b] dark:text-white">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-6 items-center">
<button class="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors">
<span class="material-symbols-outlined">help</span>
                    Ayuda
                </button>
<div class="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>
<div class="flex items-center gap-3">
<span class="text-sm font-medium hidden sm:block">María García</span>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-slate-100 dark:border-slate-700" data-alt="User profile picture showing a smiling woman" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAYSFAe7G3ptjnckW7toVBsreLhLezEqTj2zjj5IimbRKlpeH1UAJMwY1BZdtjlzUUSK5C0OLQWZvIbCd4cy59dZtRJ_7xicDohD3CF9nc54gEp574PDc9u61mh1rBs-X7ctMu3JZnabdFlnC0yMDIfv5VEtgbYMpSQx8hzwiXHshjI2Im8Xvn4U7TWP2y9wd0n46R61a0VuR4msl6C_EWxHsGaPrd0xkqSnhe6oub-kjxLs-dsvZvsQA0TGoJ7on0MPN11ITTVOQ");'>
</div>
</div>
</div>
</header>
<main class="layout-container flex grow flex-col py-8 px-4 sm:px-10 lg:px-40">
<div class="flex flex-col lg:flex-row gap-8 max-w-[1200px] mx-auto w-full">
<!-- Main Form Area -->
<div class="flex-1 bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8">
<!-- Breadcrumbs/Back -->
<div class="mb-6 flex items-center text-sm text-slate-500 dark:text-slate-400">
<button class="flex items-center gap-1 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">arrow_back</span>
                            Volver al chat
                        </button>
</div>
<!-- Header Section -->
<div class="flex flex-col gap-2 mb-8 border-b border-slate-100 dark:border-slate-700 pb-6">
<div class="flex items-start justify-between">
<h1 class="text-[#0d141b] dark:text-white text-2xl sm:text-3xl font-bold leading-tight tracking-tight">
                                Denunciar Usuario/Anuncio
                            </h1>
<span class="material-symbols-outlined text-red-500 text-3xl bg-red-50 dark:bg-red-900/20 p-2 rounded-full">report_problem</span>
</div>
<p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-2xl">
                            Tu seguridad es lo primero. Esta denuncia será anónima para el usuario reportado.
                        </p>
</div>
<!-- Warning Alert -->
<div class="mb-8 flex gap-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4 border border-blue-100 dark:border-blue-900/30">
<span class="material-symbols-outlined text-primary shrink-0">info</span>
<div class="flex flex-col gap-1">
<p class="font-bold text-sm text-primary">Información importante</p>
<p class="text-sm text-slate-700 dark:text-slate-300">
                                YaVoy revisa denuncias solo por seguridad y cumplimiento de normativas en España. El uso indebido de esta herramienta puede conllevar la suspensión de tu cuenta.
                            </p>
</div>
</div>
<!-- Form Content -->
<form class="flex flex-col gap-8" onsubmit="event.preventDefault();">
<!-- Radio List -->
<div class="flex flex-col gap-4">
<label class="text-base font-semibold text-[#0d141b] dark:text-white">¿Cuál es el motivo de la denuncia?</label>
<div class="grid gap-3">
<label class="group relative flex cursor-pointer items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-700 p-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 has-[:checked]:border-primary has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-900/10">
<div class="flex items-center h-5">
<input checked="" class="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-[#1a2632]" name="report-reason" type="radio"/>
</div>
<div class="flex flex-col">
<span class="font-medium text-[#0d141b] dark:text-white group-hover:text-primary transition-colors">Spam o publicidad no deseada</span>
<span class="text-sm text-slate-500 dark:text-slate-400 mt-1">El usuario envía mensajes promocionales repetitivos o enlaces sospechosos.</span>
</div>
</label>
<label class="group relative flex cursor-pointer items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-700 p-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 has-[:checked]:border-primary has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-900/10">
<div class="flex items-center h-5">
<input class="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-[#1a2632]" name="report-reason" type="radio"/>
</div>
<div class="flex flex-col">
<span class="font-medium text-[#0d141b] dark:text-white group-hover:text-primary transition-colors">Contenido fraudulento o estafa</span>
<span class="text-sm text-slate-500 dark:text-slate-400 mt-1">Intento de engaño, suplantación de identidad o solicitud de pagos externos.</span>
</div>
</label>
<label class="group relative flex cursor-pointer items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-700 p-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 has-[:checked]:border-primary has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-900/10">
<div class="flex items-center h-5">
<input class="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-[#1a2632]" name="report-reason" type="radio"/>
</div>
<div class="flex flex-col">
<span class="font-medium text-[#0d141b] dark:text-white group-hover:text-primary transition-colors">Comportamiento abusivo u ofensivo</span>
<span class="text-sm text-slate-500 dark:text-slate-400 mt-1">Insultos, amenazas, lenguaje de odio o acoso.</span>
</div>
</label>
<label class="group relative flex cursor-pointer items-start gap-4 rounded-lg border border-slate-200 dark:border-slate-700 p-4 transition-all hover:bg-slate-50 dark:hover:bg-slate-800/50 has-[:checked]:border-primary has-[:checked]:bg-blue-50/50 dark:has-[:checked]:bg-blue-900/10">
<div class="flex items-center h-5">
<input class="h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 dark:focus:ring-offset-[#1a2632]" name="report-reason" type="radio"/>
</div>
<div class="flex flex-col">
<span class="font-medium text-[#0d141b] dark:text-white group-hover:text-primary transition-colors">Otro motivo</span>
</div>
</label>
</div>
</div>
<!-- Text Area -->
<div class="flex flex-col gap-2">
<label class="text-base font-semibold text-[#0d141b] dark:text-white flex justify-between">
<span>Detalles adicionales (Opcional)</span>
<span class="text-sm font-normal text-slate-500">Máx. 500 caracteres</span>
</label>
<textarea class="w-full min-h-[140px] resize-none rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-[#15202b] p-4 text-base text-[#0d141b] dark:text-white placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Por favor, describe brevemente la situación para ayudarnos a entender el contexto..."></textarea>
</div>
<!-- Actions -->
<div class="flex flex-col-reverse sm:flex-row items-center justify-end gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
<button class="w-full sm:w-auto px-6 py-3 rounded-lg text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                                Cancelar
                            </button>
<button class="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary text-white font-medium shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-[#1a2632] transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[20px]">send</span>
                                Enviar Denuncia
                            </button>
</div>
</form>
</div>
<!-- Sidebar / Report Status Context -->
<div class="w-full lg:w-[360px] flex flex-col gap-6">
<!-- Context Card: Who is being reported -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Reportando a</h3>
<div class="flex items-center gap-4 mb-4">
<div class="size-14 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700" data-alt="Avatar of the user being reported" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCADMBhoPdtSaPJ3yZG0lMQeeqsnyoXuDA-ZgSL_vfRIGjdAso7Ybk8wz9EcGcFF26-xq5yKErvzA5HpSlgTDjsK8ZpiPCfdcBCnMzYrT_unBnJ1_5uXQP4h15S5GWTrZ9DBaWtX8sLOyVjHcJq9eHJLEV_fVzX9o5XRGxpx9YfLhG5596Q5w0I1faq-8BNTTpZathXRJf36h2rW74RngN3h0GlPHfnFPYfdbZQXTy23hoRIqOwRbp65rcRaVBhvs7KlecAEFcm7Q");'>
</div>
<div>
<p class="font-bold text-[#0d141b] dark:text-white text-lg">Javier M.</p>
<p class="text-sm text-slate-500">Miembro desde 2021</p>
</div>
</div>
<div class="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
<p class="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">Referencia:</p>
<p class="text-sm text-[#0d141b] dark:text-white truncate">Anuncio: "Clases de Guitarra - Madrid Centro"</p>
</div>
</div>
<!-- Status Explanation Card -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
<h3 class="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">Proceso de revisión</h3>
<div class="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700 space-y-6">
<div class="relative">
<div class="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-white dark:ring-[#1a2632]"></div>
<h4 class="font-semibold text-sm text-[#0d141b] dark:text-white">1. Recibida</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">El sistema registra tu reporte de forma segura.</p>
</div>
<div class="relative">
<div class="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-[#1a2632]"></div>
<h4 class="font-semibold text-sm text-slate-500 dark:text-slate-400">2. En revisión</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Nuestro equipo de confianza y seguridad evalúa el caso.</p>
</div>
<div class="relative">
<div class="absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-600 ring-4 ring-white dark:ring-[#1a2632]"></div>
<h4 class="font-semibold text-sm text-slate-500 dark:text-slate-400">3. Resolución</h4>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Se toman medidas si incumple normativas. Te notificaremos si es necesario.</p>
</div>
</div>
</div>
<!-- FAQ Mini -->
<div class="bg-transparent p-4">
<h4 class="font-medium text-sm text-[#0d141b] dark:text-white mb-2">¿Tienes dudas?</h4>
<a class="text-sm text-primary hover:underline flex items-center gap-1" href="#">
                            Leer política de comunidad
                            <span class="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function FlujoDeDenuncia() {
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
