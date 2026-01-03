import React from 'react';

const TITLE = `Panel Gestión Ayuda/Empleo - Chats | YaVoy`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="bg-surface-light dark:bg-surface-dark border-b border-border-light dark:border-border-dark px-6 py-3 shrink-0 z-20">
<div class="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
<!-- Logo & Search -->
<div class="flex items-center gap-8">
<a class="flex items-center gap-3 text-text-main dark:text-white group" href="#">
<div class="size-8 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<span class="text-xl font-bold tracking-tight">YaVoy</span>
</a>
<div class="hidden md:flex relative group w-64">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
<span class="material-symbols-outlined text-[20px]">search</span>
</div>
<input class="block w-full pl-10 pr-3 py-2 border-none rounded-lg bg-background-light dark:bg-background-dark text-sm placeholder-text-secondary focus:ring-2 focus:ring-primary/20 text-text-main dark:text-white transition-shadow" placeholder="Buscar servicios..." type="text"/>
</div>
</div>
<!-- Navigation Links -->
<div class="flex items-center gap-6">
<nav class="hidden lg:flex items-center gap-6">
<a class="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-sm font-medium text-text-secondary hover:text-primary transition-colors" href="#">Mis Anuncios</a>
<a class="text-sm font-medium text-primary" href="#">Mensajes</a>
</nav>
<div class="flex items-center gap-4 border-l border-border-light dark:border-border-dark pl-6">
<button class="relative p-2 text-text-secondary hover:text-primary transition-colors rounded-full hover:bg-background-light dark:hover:bg-background-dark">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-surface-light dark:border-surface-dark"></span>
</button>
<div class="size-9 rounded-full bg-gray-200 bg-cover bg-center cursor-pointer ring-2 ring-transparent hover:ring-primary/20 transition-all" data-alt="User profile picture placeholder" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxH-m-oiPj2yrJPyFvGzZnU5_22bH4Qq8Su-fDdiJ-_jSO3dhvHdsR8UalBWRFcSdYtTD7F_3_jcxS2j00pR5zAuGx2BRioFbxQ6OXeTR0eBJUE4HIs3Do7atKqGcT70XYUbIVPFkXeqgEVyLuz-oWlPhzrXmsN2-Z9QQNlPT5lstL7i6tFgRtAPCJ7xxPGZfqHbpIayVAx8BWRx0WdB7VwVE5suloQej9QL73RVyYwZvJ9wQ_ivN-CU8D_Qk01lsOzoD82Z2y2w');">
</div>
</div>
</div>
</div>
</header>
<!-- Main Layout -->
<main class="flex-1 flex overflow-hidden max-w-[1400px] mx-auto w-full pt-4 pb-4 px-4 gap-4 h-[calc(100vh-65px)]">
<!-- Sidebar: Chat List -->
<aside class="w-full md:w-[380px] flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden shrink-0">
<!-- Sidebar Header -->
<div class="p-4 border-b border-border-light dark:border-border-dark space-y-4">
<div class="flex items-center justify-between">
<h2 class="text-xl font-bold text-text-main dark:text-white">Mensajes</h2>
<button class="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Nuevo mensaje">
<span class="material-symbols-outlined">edit_square</span>
</button>
</div>
<!-- Search Bar -->
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-text-secondary text-[20px]">search</span>
<input class="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg text-sm text-text-main dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Buscar por nombre o anuncio..." type="text"/>
</div>
</div>
<!-- Chat List Scrollable Area -->
<div class="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar">
<!-- Active Chat Item -->
<div class="flex gap-3 p-4 bg-primary/5 border-l-4 border-primary cursor-pointer hover:bg-primary/10 transition-colors">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Juan Perez" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFCL3x37fUPqHPEfeVwnoiq0RE47eO_KE87Xk9AvS-g1aTXX0P5H6NlJ0QrAgCdvhmuF_EcDO1SvJGi4y_yRvgmfPRZRyyk-ntP_d6gF0QEwshUkrB21PPl0F8W8LXbd2Gb0BD-o9s_vhiF6ON8rLRvxVKEorEMry1_i1aYbNwGl4N8tMygvD3s53wIM08cetEz7g8xZSnah_SSZF1dhSyHi4jiJMtl7uRvuEeNQjOq8PTs0bMN4aJsvFtyN8g5KSMvjGbGGcvNg');"></div>
<div class="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-surface-light rounded-full"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-0.5">
<h3 class="font-semibold text-text-main dark:text-white truncate">Juan Pérez</h3>
<span class="text-xs font-medium text-primary whitespace-nowrap">10 min</span>
</div>
<p class="text-xs font-medium text-primary mb-1 truncate bg-primary/10 w-fit px-1.5 py-0.5 rounded">Ayuda Mudanza</p>
<p class="text-sm text-text-secondary truncate">Hola, tengo una furgoneta disponible para el martes...</p>
</div>
</div>
<!-- Regular Chat Item -->
<div class="flex gap-3 p-4 hover:bg-background-light dark:hover:bg-background-dark/50 cursor-pointer border-l-4 border-transparent transition-colors group">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Maria Garcia" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuApjQDch2UwSJwpDIB190qZEZVnnGvQLpOpjWqNQ9Xythn04l7hnKFvdd0wLGn2jMawAitqIV7Bji7rT5Ic9h3P1jOqpoj5QL3vLJcVAjF8sSEfEYWnJGzhTJw-PLIf2JBCllmBds0PrDaxxRSwrt64aOY4TuEJLZwo8rGbhKREyenYzNPsb23RDyq3zLoq3zcIQlnu85CzcbZKjDfw3keOThRFOeGDnfmNUhG8ZUIQs1vSO_lq3HfVEBiyG-Y1xY1hac577NwFjg');"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-0.5">
<h3 class="font-semibold text-text-main dark:text-white truncate group-hover:text-primary transition-colors">María García</h3>
<span class="text-xs text-text-secondary whitespace-nowrap">Ayer</span>
</div>
<p class="text-xs font-medium text-text-secondary mb-1 truncate bg-background-light dark:bg-background-dark w-fit px-1.5 py-0.5 rounded">Clases de Inglés</p>
<p class="text-sm text-text-secondary truncate">¿Cuál sería el horario preferido?</p>
</div>
</div>
<!-- Regular Chat Item -->
<div class="flex gap-3 p-4 hover:bg-background-light dark:hover:bg-background-dark/50 cursor-pointer border-l-4 border-transparent transition-colors group">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-blue-100 flex items-center justify-center text-primary font-bold text-xl">
                            CP
                        </div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-0.5">
<h3 class="font-semibold text-text-main dark:text-white truncate group-hover:text-primary transition-colors">Carlos Pinturas</h3>
<span class="text-xs text-text-secondary whitespace-nowrap">2 días</span>
</div>
<p class="text-xs font-medium text-text-secondary mb-1 truncate bg-background-light dark:bg-background-dark w-fit px-1.5 py-0.5 rounded">Pintar Salón</p>
<p class="text-sm text-text-secondary truncate">Gracias, le enviaré el presupuesto.</p>
</div>
</div>
</div>
</aside>
<!-- Main Chat Area -->
<section class="flex-1 flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-border-light dark:border-border-dark overflow-hidden relative">
<!-- Chat Header -->
<div class="flex items-center justify-between px-6 py-4 border-b border-border-light dark:border-border-dark bg-surface-light/80 dark:bg-surface-dark/80 backdrop-blur-sm z-10">
<div class="flex items-center gap-4">
<div class="size-10 rounded-full bg-cover bg-center shrink-0" data-alt="Portrait of Juan Perez small" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAHFoHa5n31Uil8xK7BPkZk7LEMByIAnQunH7AmV0C_neBt3JRgTjilKA-4iiCiOnhp9tVQ0LE0D7zahY1a5BGWHbA3OnK1NLN4S09sCx4-LPNzk5qCLWkdkV3Ce0XKyzN1Sapm_geE2OCfbWpuAKdh0oflDDUpilxWJUJVEw0c9YZribp-57F_2x2ualWgVu7IQU1a5zFBdAZqyVZFPJZonzkgjtO4MXIoJHgfi1CjB1vuMz_sKef5JcDZ3PVet6calxhXcNZYrw');"></div>
<div>
<div class="flex items-center gap-2">
<h2 class="font-bold text-text-main dark:text-white text-lg">Juan Pérez</h2>
<span class="flex size-2 bg-green-500 rounded-full" title="Online"></span>
</div>
<div class="flex items-center gap-2 text-sm text-text-secondary">
<span>Candidatura para:</span>
<a class="font-medium text-primary hover:underline flex items-center gap-1" href="#">
                                Ayuda Mudanza Centro
                                <span class="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
</div>
<!-- Header Actions -->
<div class="flex items-center gap-2">
<button class="p-2 text-text-secondary hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-1 group" title="Cerrar Chat y archivar candidatura">
<span class="material-symbols-outlined text-[20px]">archive</span>
<span class="hidden xl:inline text-sm font-medium">Cerrar chat</span>
</button>
<button class="p-2 text-text-secondary hover:text-text-main hover:bg-background-light dark:hover:bg-background-dark rounded-lg transition-colors md:hidden">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<!-- Safety Banner -->
<div class="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-900/30 px-6 py-2 flex items-start sm:items-center gap-3">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-400 shrink-0 text-[20px]">shield</span>
<p class="text-xs text-amber-800 dark:text-amber-200 font-medium leading-tight">
<span class="font-bold">Aviso de seguridad:</span> Este chat existe solo para gestionar esta candidatura. No compartas datos sensibles bancarios ni contraseñas sin verificar la identidad.
                </p>
</div>
<!-- Chat Messages Area -->
<div class="flex-1 overflow-y-auto p-6 space-y-6 bg-[#f8f9fc] dark:bg-[#151e27]">
<!-- System Date Separator -->
<div class="flex justify-center">
<span class="text-xs font-medium text-text-secondary bg-black/5 dark:bg-white/5 px-3 py-1 rounded-full">Hoy, 12 Octubre</span>
</div>
<!-- System Notification -->
<div class="flex justify-center w-full">
<div class="bg-primary/10 dark:bg-primary/5 border border-primary/20 rounded-lg p-3 max-w-md text-center">
<p class="text-sm text-text-main dark:text-white">
<span class="font-semibold text-primary">Juan Pérez</span> se ha postulado a tu anuncio "Ayuda Mudanza Centro".
                        </p>
</div>
</div>
<!-- Message Received -->
<div class="flex gap-3 group">
<div class="size-8 rounded-full bg-cover bg-center shrink-0 mt-1 self-end" data-alt="Portrait of Juan Perez" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIUoSXCUj6ll6hh-AaYSfZCC8yMgVz7BdhUurm2jnX3VrNKZ_U8lTxti20h9mHt2cCjCJa8keFbCDx48xmsctKtaYUeUbM8zCoOQ_tI9i9DXfV9I3tBtO9VDfgbmv6sbZgnuPIq-UeHsE6SHXyRXhK1Q3Vm1No3NnIH1cLySIaOPT0QCS8SIBm029rqgSpWRJqJpGCa1cY-H_A5nLh3o1uQaBLLly9f5G9A378ELXxIubT1OIHleIvCNbmLsYwgdAjMHk_OLIBXQ');"></div>
<div class="max-w-[80%] lg:max-w-[65%]">
<div class="bg-white dark:bg-[#253041] p-3.5 rounded-2xl rounded-bl-none shadow-sm border border-border-light dark:border-border-dark text-text-main dark:text-white">
<p class="text-sm leading-relaxed">Hola! He visto tu anuncio y estoy muy interesado. Tengo experiencia en mudanzas y dispongo de furgoneta propia.</p>
</div>
<span class="text-[11px] text-text-secondary ml-1 mt-1 block">10:42 AM</span>
</div>
</div>
<!-- Message Sent -->
<div class="flex gap-3 justify-end group">
<div class="max-w-[80%] lg:max-w-[65%]">
<div class="bg-primary text-white p-3.5 rounded-2xl rounded-br-none shadow-sm shadow-primary/20">
<p class="text-sm leading-relaxed">¡Hola Juan! Gracias por escribir. Eso suena perfecto, justo lo que necesitamos.</p>
</div>
<div class="flex justify-end items-center gap-1 mt-1">
<span class="text-[11px] text-text-secondary">10:45 AM</span>
<span class="material-symbols-outlined text-[14px] text-primary">done_all</span>
</div>
</div>
</div>
<!-- Message Sent -->
<div class="flex gap-3 justify-end group">
<div class="max-w-[80%] lg:max-w-[65%]">
<div class="bg-primary text-white p-3.5 rounded-2xl rounded-br-none shadow-sm shadow-primary/20">
<p class="text-sm leading-relaxed">¿Tendrías disponibilidad para este martes por la mañana? Serían unas 3 horas aproximadamente.</p>
</div>
<div class="flex justify-end items-center gap-1 mt-1">
<span class="text-[11px] text-text-secondary">10:46 AM</span>
<span class="material-symbols-outlined text-[14px] text-text-secondary">done</span>
</div>
</div>
</div>
<!-- Message Received -->
<div class="flex gap-3 group">
<div class="size-8 rounded-full bg-cover bg-center shrink-0 mt-1 self-end" data-alt="Portrait of Juan Perez" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwToXjMcFt8DaSioXnNgfkcbkxp1GGjoTT3T8YpsBIas8yoFwsbfazzHop7yyo85NEPtu1FPgXeBBU2AVtpX6wlOawqPVs_O6Zbrq9i1L9sKFp5c95hNt8goTn9GQGr45mG7LdWsxAGCbbRi2Rprbg-p7adK_63yx6k7WVMuURyaoDtFvDzIMHkTO_U2uyASwRO6ZUlJTBR91PHu2uXjSgGeHif5aoeWL8D13qT4-hvsQ_kweYZyYIxdwH3K6sChT3HdcJa7YsOQ');"></div>
<div class="max-w-[80%] lg:max-w-[65%]">
<div class="bg-white dark:bg-[#253041] p-3.5 rounded-2xl rounded-bl-none shadow-sm border border-border-light dark:border-border-dark text-text-main dark:text-white">
<p class="text-sm leading-relaxed">Sí, el martes tengo la mañana libre. ¿Sobre qué hora sería?</p>
</div>
<span class="text-[11px] text-text-secondary ml-1 mt-1 block">10:50 AM</span>
</div>
</div>
</div>
<!-- Chat Toolbar (Fixed Actions) -->
<div class="px-6 py-3 bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark flex flex-wrap gap-3">
<button class="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary dark:text-blue-300 rounded-lg text-sm font-medium transition-colors">
<span class="material-symbols-outlined text-[18px]">calendar_month</span>
                    Coordinar fechas
                </button>
<button class="flex items-center gap-2 px-4 py-2 bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-800 text-text-main dark:text-white rounded-lg text-sm font-medium transition-colors">
<span class="material-symbols-outlined text-[18px]">info</span>
                    Solicitar más información
                </button>
</div>
<!-- Input Area -->
<div class="p-4 bg-surface-light dark:bg-surface-dark">
<div class="flex items-end gap-3 bg-background-light dark:bg-background-dark p-2 rounded-xl border border-border-light dark:border-border-dark focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<button class="p-2 text-text-secondary hover:text-primary transition-colors rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 shrink-0" title="Adjuntar archivo">
<span class="material-symbols-outlined">attach_file</span>
</button>
<textarea class="flex-1 bg-transparent border-none focus:ring-0 text-text-main dark:text-white placeholder-text-secondary resize-none py-2 max-h-32 text-sm" placeholder="Escribe un mensaje..." rows="1"></textarea>
<button class="p-2 text-primary hover:text-primary-dark transition-colors shrink-0" title="Enviar">
<span class="material-symbols-outlined text-[24px]">send</span>
</button>
</div>
</div>
</section>
</main>
<style>
        /* Custom scrollbar for better UX within fixed containers */
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(156, 163, 175, 0.3);
            border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(156, 163, 175, 0.5);
        }
    </style>`;
const EXTRA_CSS = `/* Custom scrollbar for better UX within fixed containers */
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(156, 163, 175, 0.3);
            border-radius: 20px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: rgba(156, 163, 175, 0.5);
        }`;

export default function PanelGestionAyudaEmpleoChats() {
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
