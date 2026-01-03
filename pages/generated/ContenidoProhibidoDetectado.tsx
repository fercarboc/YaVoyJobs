import React from 'react';

const TITLE = `Contenido Prohibido Detectado - YaVoy`;
const BODY_HTML = `<!-- Top Navigation Bar -->
<header class="w-full bg-white dark:bg-[#1a2632] border-b border-[#e7edf3] dark:border-[#2a3b4d]">
<div class="max-w-7xl mx-auto px-4 lg:px-8">
<div class="flex items-center justify-between h-16">
<!-- Logo -->
<div class="flex items-center gap-3">
<div class="text-primary">
<svg class="size-8" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-xl font-bold tracking-tight text-[#0d141b] dark:text-white">YaVoy</h2>
</div>
<!-- Nav Links (Desktop) -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium text-[#0d141b] dark:text-gray-300 hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-sm font-medium text-[#0d141b] dark:text-gray-300 hover:text-primary transition-colors" href="#">Mis Envíos</a>
<a class="text-sm font-medium text-[#0d141b] dark:text-gray-300 hover:text-primary transition-colors" href="#">Ayuda</a>
<a class="text-sm font-medium text-[#0d141b] dark:text-gray-300 hover:text-primary transition-colors" href="#">Perfil</a>
</nav>
<!-- User Profile -->
<div class="flex items-center gap-4">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-[#2a3b4d] shadow-sm cursor-pointer" data-alt="User profile picture of a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAT4bPZe7gVqTJr1T8RTQqNNSs2yT8q-RgBp_GknRrh4z7rUOctgw6MGmygv5wXQk5fzdwCp3g3oCMkB5VQyj4HD1XEyODoZ6nEdPtrHSrj4L22FM7wz-BSL3RgFaXQAZn9qRG5up2rRQrUXZLL0VML73UW6bIRNcvBxdQU8RD3f621H1MifhmCG3thu-paWlx18AEqURs1MunpoHyz13EcAq3PcOYoHYpWYQEeWcgcE3KlbQ-BY2mwc6W4u2g2jsJYqMcuqt5jHw");'>
</div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow container mx-auto px-4 py-8 lg:py-12 max-w-5xl">
<!-- Header / Hero Alert -->
<div class="flex flex-col items-center text-center mb-10 gap-4">
<div class="size-16 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 mb-2">
<span class="material-symbols-outlined" style="font-size: 32px;">gpp_maybe</span>
</div>
<h1 class="text-3xl font-bold text-[#0d141b] dark:text-white tracking-tight">Contenido Oculto Preventivamente</h1>
<p class="text-[#4c739a] dark:text-gray-400 max-w-2xl text-lg leading-relaxed">
                Hemos detectado actividad en esta publicación que podría infringir nuestras Normas de la Comunidad. 
                Por seguridad, el contenido ha sido ocultado temporalmente mientras nuestro equipo realiza una verificación manual.
            </p>
</div>
<!-- Layout Grid: Content Details & Timeline -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
<!-- Left Column: The "Hidden" Content Card -->
<div class="lg:col-span-2 flex flex-col gap-6">
<!-- Content Card -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e7edf3] dark:border-[#2a3b4d] overflow-hidden">
<div class="p-6 border-b border-[#e7edf3] dark:border-[#2a3b4d] flex items-center justify-between">
<h3 class="font-bold text-lg">Detalles del Bloqueo</h3>
<span class="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-bold uppercase tracking-wider">
                            Acción Requerida
                        </span>
</div>
<div class="p-6 flex flex-col gap-6">
<!-- Reason & ID -->
<div class="flex flex-col gap-2">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-red-500 mt-0.5">report</span>
<div>
<p class="font-bold text-[#0d141b] dark:text-white text-base">Razón detectada: Posible venta de productos prohibidos</p>
<p class="text-sm text-[#4c739a] dark:text-gray-400 mt-1">
                                        El sistema ha identificado palabras clave o imágenes relacionadas con artículos restringidos en España.
                                    </p>
</div>
</div>
<div class="pl-9 mt-1">
<span class="inline-flex items-center gap-2 px-2 py-1 bg-[#f0f4f8] dark:bg-[#23303e] rounded text-xs font-mono text-[#4c739a] dark:text-gray-400">
                                    ID de referencia: #REQ-9928-SP
                                    <span class="material-symbols-outlined text-[14px] cursor-pointer hover:text-primary">content_copy</span>
</span>
</div>
</div>
<!-- The Blocked Visual -->
<div class="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 border border-[#e7edf3] dark:border-[#2a3b4d]">
<!-- The image behind (blurred) -->
<div class="absolute inset-0 bg-cover bg-center blur-md scale-105 opacity-50" data-alt="Blurred background representing the hidden prohibited content" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqeGaWyqRj-KbVjwBtzhTKTA37aVqxpAr6O0XKOyKhYirGFisXp2NCE8g2_6YDT511kzhRa3ZL5IKBLGM8Tp7tMCdRRh1wNWWWbijmhCQmKkcVM4Wvxc6Xta4zgD2VV-Xi3fKKdiVNsbom5RyknycMaRZ4I1RnM-UrMKhwBN7cDeWdqK6CksKOhTrwKV1c2jh54lJ-VaAnPUwAe0Z6wao4qrRNkwhzogPHQ0i9hnTpkN234V9QT48bwgrCX3TZvkRt2LOKvQio2A");'>
</div>
<!-- Overlay Content -->
<div class="absolute inset-0 flex flex-col items-center justify-center bg-white/40 dark:bg-black/40 p-4">
<div class="bg-white dark:bg-[#1a2632] p-4 rounded-full shadow-lg mb-4">
<span class="material-symbols-outlined text-4xl text-[#0d141b] dark:text-white">visibility_off</span>
</div>
<p class="font-bold text-[#0d141b] dark:text-white text-lg drop-shadow-md">Imagen Oculta</p>
<p class="text-sm font-medium text-[#0d141b] dark:text-gray-200 text-center max-w-xs mt-1 drop-shadow-md">
                                    Este contenido no es visible para otros usuarios.
                                </p>
</div>
</div>
<!-- Actions -->
<div class="flex flex-wrap gap-4 pt-2">
<button class="flex-1 bg-primary hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
<span>Contactar Soporte</span>
<span class="material-symbols-outlined text-sm">open_in_new</span>
</button>
<button class="flex-1 bg-[#e7edf3] dark:bg-[#2a3b4d] hover:bg-[#dbe4ed] dark:hover:bg-[#34465a] text-[#0d141b] dark:text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
                                Ver Normas de la Comunidad
                            </button>
</div>
</div>
</div>
</div>
<!-- Right Column: Timeline & Help -->
<div class="flex flex-col gap-6">
<!-- Timeline Card -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-[#e7edf3] dark:border-[#2a3b4d] p-6">
<h3 class="font-bold text-lg mb-6 text-[#0d141b] dark:text-white">Estado del Caso</h3>
<div class="grid grid-cols-[32px_1fr] gap-x-3">
<!-- Step 1: Done -->
<div class="flex flex-col items-center">
<div class="size-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
<span class="material-symbols-outlined text-lg">check_circle</span>
</div>
<div class="w-0.5 bg-green-200 dark:bg-green-800 h-full min-h-[40px]"></div>
</div>
<div class="pb-6 pt-1">
<p class="text-sm font-bold text-[#0d141b] dark:text-white">Detección Automática</p>
<p class="text-xs text-[#4c739a] dark:text-gray-400 mt-1">Completado - 10:42 AM</p>
</div>
<!-- Step 2: Active -->
<div class="flex flex-col items-center">
<div class="size-8 rounded-full bg-primary text-white flex items-center justify-center shadow-md z-10">
<span class="material-symbols-outlined text-lg">lock</span>
</div>
<div class="w-0.5 bg-[#e7edf3] dark:bg-[#2a3b4d] h-full min-h-[40px]"></div>
</div>
<div class="pb-6 pt-1">
<p class="text-sm font-bold text-primary">Bloqueo Preventivo</p>
<p class="text-xs text-[#4c739a] dark:text-gray-400 mt-1">Acción actual en curso</p>
</div>
<!-- Step 3: Pending -->
<div class="flex flex-col items-center">
<div class="size-8 rounded-full bg-[#f0f4f8] dark:bg-[#23303e] border border-[#e7edf3] dark:border-[#37495d] flex items-center justify-center text-gray-400">
<span class="material-symbols-outlined text-lg">gavel</span>
</div>
</div>
<div class="pt-1">
<p class="text-sm font-medium text-gray-400">Resolución del Admin</p>
<p class="text-xs text-gray-400 mt-1">Pendiente (&lt; 24h)</p>
</div>
</div>
</div>
<!-- Quick Help -->
<div class="bg-[#f8fafc] dark:bg-[#15202b] rounded-xl border border-[#e7edf3] dark:border-[#2a3b4d] p-5">
<h4 class="font-bold text-sm text-[#0d141b] dark:text-white mb-3">¿Crees que esto es un error?</h4>
<p class="text-sm text-[#4c739a] dark:text-gray-400 mb-4 leading-normal">
                        Si consideras que tu contenido cumple con todas nuestras normativas, puedes solicitar una apelación directa.
                    </p>
<a class="text-sm font-bold text-primary hover:underline flex items-center gap-1" href="#">
                        Iniciar apelación
                        <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Footer Policy Links -->
<div class="mt-12 border-t border-[#e7edf3] dark:border-[#2a3b4d] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-sm text-[#4c739a] dark:text-gray-500">© 2024 YaVoy España. Todos los derechos reservados.</p>
<div class="flex gap-6">
<a class="text-sm text-[#4c739a] dark:text-gray-400 hover:text-primary" href="#">Política de Privacidad</a>
<a class="text-sm text-[#4c739a] dark:text-gray-400 hover:text-primary" href="#">Términos de Uso</a>
<a class="text-sm text-[#4c739a] dark:text-gray-400 hover:text-primary" href="#">Normas de la Comunidad</a>
</div>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function ContenidoProhibidoDetectado() {
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
