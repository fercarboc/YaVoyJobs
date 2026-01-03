import React from 'react';

const TITLE = `Cuenta Bloqueada - YaVoy`;
const BODY_HTML = `<!-- Minimal Header: Branding Only (No Navigation) -->
<header class="flex items-center justify-center w-full border-b border-solid border-[#e7edf3] dark:border-gray-800 bg-white dark:bg-[#151f2b] px-10 py-4 shadow-sm z-10">
<div class="flex items-center gap-2 text-[#0d141b] dark:text-white">
<div class="w-8 h-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">rocket_launch</span>
</div>
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
</header>
<!-- Main Content Area -->
<main class="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
<!-- Center Card -->
<div class="w-full max-w-[520px] bg-white dark:bg-[#1a2632] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden flex flex-col relative group/card">
<!-- Hero Image / Visual Status -->
<div class="relative h-48 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
<!-- Abstract pattern background -->
<div class="absolute inset-0 bg-gradient-to-br from-red-500/10 to-primary/5 dark:from-red-900/40 dark:to-primary/20"></div>
<div class="absolute inset-0 flex items-center justify-center" data-alt="Abstract security lock pattern background indicating blocked access" style="background-image: radial-gradient(#e5e7eb 1px, transparent 1px); background-size: 20px 20px; opacity: 0.5;">
</div>
<!-- Floating Lock Icon -->
<div class="absolute inset-0 flex items-center justify-center">
<div class="bg-white dark:bg-[#1a2632] p-4 rounded-full shadow-lg border border-red-100 dark:border-red-900/30 animate-pulse">
<span class="material-symbols-outlined text-6xl text-red-500">lock_person</span>
</div>
</div>
</div>
<!-- Content Body -->
<div class="px-8 pt-8 pb-10 flex flex-col items-center text-center">
<h1 class="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-tight mb-3">
                    Cuenta Bloqueada
                </h1>
<p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
                    Tu acceso a <strong>YaVoy</strong> ha sido suspendido por un administrador. Como resultado, se han cerrado todas tus sesiones activas y se han deshabilitado tus funciones de chat y publicaciones.
                </p>
<!-- Disclaimer Box (MetaText styled) -->
<div class="w-full bg-primary/5 dark:bg-primary/10 border border-primary/20 dark:border-primary/20 rounded-lg p-4 mb-8 text-left flex gap-3 items-start">
<span class="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">info</span>
<div class="flex flex-col gap-1">
<span class="text-xs font-bold text-primary uppercase tracking-wide">Aviso Importante</span>
<p class="text-[#4c739a] dark:text-blue-200 text-sm font-medium leading-snug">
                            El bloqueo impide el uso de la plataforma, no afecta a acuerdos privados que hayas realizado previamente.
                        </p>
</div>
</div>
<!-- Action Buttons -->
<div class="flex flex-col w-full gap-3 sm:gap-4">
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-primary/30">
<span class="material-symbols-outlined text-[20px] mr-2">support_agent</span>
<span class="truncate">Contactar Soporte</span>
</button>
<button class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent hover:bg-gray-100 dark:hover:bg-white/5 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold leading-normal tracking-[0.015em] transition-all">
<span class="material-symbols-outlined text-[20px] mr-2">logout</span>
<span class="truncate">Cerrar Sesión</span>
</button>
</div>
<!-- Help Link -->
<div class="mt-6">
<a class="text-xs text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary underline decoration-dotted transition-colors" href="#">
                        ¿Crees que se trata de un error?
                    </a>
</div>
</div>
<!-- Bottom decorative bar -->
<div class="h-1.5 w-full bg-gradient-to-r from-red-500 via-orange-400 to-primary"></div>
</div>
</main>
<!-- Simple Footer -->
<footer class="py-6 text-center">
<p class="text-xs text-gray-400 dark:text-gray-600">
            © 2024 YaVoy España. Todos los derechos reservados.
        </p>
</footer>`;
const EXTRA_CSS = `/* Custom scrollbar for webkit */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }
        .dark ::-webkit-scrollbar-thumb {
            background-color: #334155;
        }`;

export default function UsuarioBloqueado() {
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
