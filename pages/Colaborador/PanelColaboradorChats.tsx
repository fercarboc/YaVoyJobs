import React from 'react';

const TITLE = `Panel Colaborador - Chats | YaVoy`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="flex-none bg-white dark:bg-[#1e293b] border-b border-slate-200 dark:border-slate-700 z-20">
<div class="px-6 lg:px-10 py-3 flex items-center justify-between">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 text-primary">
<svg class="fill-current w-full h-full" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-xl font-bold tracking-tight">YaVoy</h2>
</div>
<nav class="hidden md:flex flex-1 justify-end gap-8 items-center">
<div class="flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Inicio</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Buscar trabajo</a>
<a class="text-primary font-semibold text-sm leading-normal" href="#">Mis candidaturas</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Ganancias</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Perfil</a>
</div>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-600" data-alt="User profile picture showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDie71hU0K8QR0y5YhS-62zmho7EqPVeOp4aU19kiNCif9S90arxuHd0oZKTEBCgdgFBs1QMDYoeNI5yHff2D5K0jtKz0Oc8cw9Ykzo_mDxT9YoCcQIboRMUsy8CRX9qfRu7Pv-0-axDkpDSqpzF8KA7fKC1iRk3QgQU6WHoB9Gtf927M-lmDla72xZq5C9uthaBz3TvwycH3OZcNxvPjPfmbQK8r2QkQKuOsZFsAqk4JQSAgaucF3iVNcsN8ur78_Qr-mXQd-Z6Q");'></div>
</nav>
<!-- Mobile Menu Icon -->
<button class="md:hidden text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<!-- Main Content Area -->
<main class="flex-1 flex overflow-hidden w-full max-w-[1440px] mx-auto p-4 md:p-6 gap-6">
<!-- Sidebar: Chat List -->
<aside class="flex flex-col w-full md:w-[320px] lg:w-[380px] bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden shrink-0">
<!-- Sidebar Header -->
<div class="p-4 border-b border-slate-100 dark:border-slate-700">
<h1 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Mis Conversaciones</h1>
<!-- Search Bar -->
<div class="relative">
<input class="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-slate-900 dark:text-white placeholder-slate-400" placeholder="Buscar por usuario o anuncio..." type="text"/>
<div class="absolute left-3 top-2.5 text-slate-400">
<span class="material-symbols-outlined text-[20px]">search</span>
</div>
</div>
</div>
<!-- Chat List Items -->
<div class="flex-1 overflow-y-auto custom-scrollbar">
<!-- Active Item -->
<div class="flex items-center gap-3 p-4 bg-blue-50/50 dark:bg-primary/10 border-l-4 border-primary cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-600" data-alt="Portrait of Marta G" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCiIy6WY1BiVbJ6baQcj_HD323FQ2I_xz2Go5feiR4ELsbJuw30M59AbzSy21G5h7hqjhjtjAKSbererfnAY0Jmp25JtXePgUg-mActV_ZuUrTOqmgPZTuZxCg2azkCwoRzbUOMhkD5qXzO1M7wdMhbuH29vjPlEKXO7aM_llxpjd_SFvMfz-6bF5iL0GmZ612WAFxL2lnD3a2-SZpxuWG7P-uuwvwZgZnppr6eYM3f6ZtqcE9l8T2g2HpmT5sFM3iODtuK4WsYng");'></div>
<div class="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white dark:border-[#1e293b]"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-0.5">
<h3 class="text-sm font-semibold text-slate-900 dark:text-white truncate pr-2">Limpieza a fondo Madrid</h3>
<span class="text-xs text-primary font-medium whitespace-nowrap">10:30 AM</span>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate font-medium">Marta G.</p>
<p class="text-sm text-slate-600 dark:text-slate-300 truncate mt-0.5">¿Podrías venir a las 10?</p>
</div>
</div>
<!-- Inactive Item 1 -->
<div class="flex items-center gap-3 p-4 border-l-4 border-transparent cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-600" data-alt="Portrait of Juan P" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSWlojVUew17v9PeFhwzvBk6vxBZvkwm1KeTdwA9PGVMy-QIOG5-WRiC9nUv7DcqmkSNwQoJPP6Z80a4kIBKP26HtIzo9YxykUOzFepulT8k8tuN4R9ivblkylnSF7KIfUklmCgJJ_4Fgjh12-FqHhyJOkQyoHGg-YSNBKPgGS_i5OmlfYehEl43Tv0h0ws7iiEKQ9pqHV1pehbHhQjCXjW1VCX_LHjH3XQ5NIeRFx-thLDyW7_DS33Hb9BZDc_htdr-Kc1fnnIg");'></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-0.5">
<h3 class="text-sm font-semibold text-slate-900 dark:text-white truncate pr-2">Cuidado de mayores</h3>
<span class="text-xs text-slate-400 whitespace-nowrap">Ayer</span>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate">Juan P.</p>
<p class="text-sm text-slate-500 dark:text-slate-400 truncate mt-0.5">Perfecto, nos vemos el lunes.</p>
</div>
</div>
<!-- Inactive Item 2 -->
<div class="flex items-center gap-3 p-4 border-l-4 border-transparent cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-lg">LC</div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-0.5">
<h3 class="text-sm font-semibold text-slate-900 dark:text-white truncate pr-2">Paseo de perros - Retiro</h3>
<span class="text-xs text-slate-400 whitespace-nowrap">Lun</span>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 truncate">Laura C.</p>
<p class="text-sm text-slate-500 dark:text-slate-400 truncate mt-0.5">Hola, ¿tienes experiencia con...</p>
</div>
</div>
</div>
</aside>
<!-- Main Chat Area -->
<section class="flex-1 hidden md:flex flex-col bg-white dark:bg-[#1e293b] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden relative">
<!-- Chat Header -->
<div class="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1e293b] z-10">
<div class="flex items-center gap-4">
<div class="size-10 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-600" data-alt="Portrait of Marta G" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAeXt5F2rFzkyvk4oSH4-lK8Ntsxu8cN2rsfmP4D07M-_WkPx6gGM6-hTGiPsFhAFbDEsH5TbWTapnXLPE9KkPPrwBQI7rAMO1uDpnmbJ7CHUSvfwBy5mytB2hrnD0ByLW1RQ8cW9YKqRYD2-d0iTgXtGnaCYrL6_bEYdr0IPTqBScuVPaeuAxIO93_-eXRLzJ1UQcDgtVWUb7jzjW8-tZNbjsZBHIUaxsg_wgnFeX-bwcp_dmOr5tEGs7sGM4t8uE7IW7HhJi4uw");'></div>
<div>
<h2 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            Limpieza a fondo Madrid Centro
                            <span class="bg-blue-100 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide dark:bg-primary/20">Candidatura Activa</span>
</h2>
<div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
<span class="font-medium text-slate-700 dark:text-slate-300">Marta G.</span>
<span>•</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">location_on</span> Madrid, Centro</span>
<span>•</span>
<a class="text-primary hover:underline" href="#">Ver anuncio completo</a>
</div>
</div>
</div>
<button class="text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center gap-1 text-sm font-medium px-3 py-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
<span class="material-symbols-outlined text-[18px]">block</span>
<span class="hidden lg:inline">Cerrar conversación</span>
</button>
</div>
<!-- Warning Banners -->
<div class="flex flex-col border-b border-slate-100 dark:border-slate-800">
<div class="bg-blue-50 dark:bg-primary/10 px-6 py-2 flex items-start gap-3 text-xs text-blue-800 dark:text-blue-200">
<span class="material-symbols-outlined text-[16px] mt-0.5 shrink-0">info</span>
<p><strong>Contexto:</strong> Este chat solo existe para esta candidatura. Si el anuncio se cierra, el chat se archivará.</p>
</div>
<div class="bg-orange-50 dark:bg-orange-900/20 px-6 py-2 flex items-start gap-3 text-xs text-orange-800 dark:text-orange-200">
<span class="material-symbols-outlined text-[16px] mt-0.5 shrink-0">shield</span>
<p><strong>Seguridad:</strong> No compartas datos sensibles (DNI, cuenta bancaria) sin verificar la identidad del empleador. Gestiona todo dentro de YaVoy.</p>
</div>
</div>
<!-- Messages Stream -->
<div class="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 dark:bg-[#101922]">
<!-- Date Separator -->
<div class="flex justify-center">
<span class="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Hoy</span>
</div>
<!-- Message Received -->
<div class="flex gap-4 max-w-[80%]">
<div class="size-8 rounded-full bg-cover bg-center shrink-0 self-end mb-1" data-alt="Portrait of Marta G" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA67nDR-jjZD2xuipmN6f3RyGxOWQQpyDhkSxRTlKdQTNTUhSKbu38k51j3kUEwgq2ADaiY9bNKoYzxqzY6FIhPu6Qbk1eSe9y977O29A4oKlMCtTO3aS_EKjWnRYKPAGtdz4o3vm0xc1HmF4HR3Dm2bHg_Dh5SojWkY7EGvirRANy-g2MBOR7l9vVdhbWCAi1Ac_pKI5oKv8K1ynC5CBQI6lig7nN1sw9zda0ERgLx30xU6qo9tRgSPKuTY6--BTUvHXrR7-594A");'></div>
<div class="flex flex-col gap-1">
<div class="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 text-sm leading-relaxed">
<p>Hola, he visto tu perfil y me encantan las valoraciones que tienes. ¿Estarías disponible para una limpieza general este sábado?</p>
</div>
<span class="text-[11px] text-slate-400 pl-1">09:15 AM</span>
</div>
</div>
<!-- Message Sent -->
<div class="flex gap-4 max-w-[80%] ml-auto justify-end">
<div class="flex flex-col gap-1 items-end">
<div class="bg-primary text-white p-3 rounded-2xl rounded-br-none shadow-md text-sm leading-relaxed">
<p>¡Hola Marta! Gracias por contactar. Sí, tengo disponibilidad el sábado por la mañana.</p>
</div>
<div class="flex items-center gap-1 text-[11px] text-slate-400 pr-1">
<span>09:20 AM</span>
<span class="material-symbols-outlined text-[14px] text-primary">done_all</span>
</div>
</div>
</div>
<!-- Message Received -->
<div class="flex gap-4 max-w-[80%]">
<div class="size-8 rounded-full bg-cover bg-center shrink-0 self-end mb-1" data-alt="Portrait of Marta G" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBCyHLskpOvSju8al8RPw9d9BAMuOM3RH5acABErzGIJmqdGhAd-8PuVymKazH9PudtO89l5u_qxzWNd1UKooZFj4L8-3XG1ifIigyhOb00M5KXXShhgOSlyzwtygT5u7_4Oet8X7lx7No4aVlthOuakIcrf9c3nfnHftOtXUji01F8A2SZ0QVuf0DZDoBp0go4twe6IkgqjN52tOqqPJMHLX0FyYJTSgdbcQ5zXt6_-u0y4HqWR1BqCeNoCfzooTZ6X0EscIggdg");'></div>
<div class="flex flex-col gap-1">
<div class="bg-white dark:bg-slate-700 p-3 rounded-2xl rounded-bl-none shadow-sm border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-100 text-sm leading-relaxed">
<p>Genial. Serían unas 4 horas aproximadamente. ¿Podrías venir a las 10?</p>
</div>
<span class="text-[11px] text-slate-400 pl-1">10:30 AM</span>
</div>
</div>
</div>
<!-- Action Footer -->
<div class="p-4 bg-white dark:bg-[#1e293b] border-t border-slate-200 dark:border-slate-700">
<!-- Helper Action Bar -->
<div class="flex justify-between items-center mb-3">
<p class="text-xs text-slate-500 italic">Responde para acordar los detalles finales.</p>
<button class="bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-2 px-4 rounded-lg shadow-sm transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">check_circle</span>
                        Confirmar disponibilidad
                    </button>
</div>
<!-- Input Area -->
<div class="flex items-end gap-2 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-600 p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
<button class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 shrink-0">
<span class="material-symbols-outlined">add_circle</span>
</button>
<textarea class="flex-1 bg-transparent border-none focus:ring-0 p-2 text-slate-900 dark:text-white placeholder-slate-400 resize-none max-h-32 text-sm" placeholder="Escribe un mensaje..." rows="1"></textarea>
<button class="p-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors shadow-sm shrink-0">
<span class="material-symbols-outlined">send</span>
</button>
</div>
</div>
</section>
<!-- Empty State (Mobile Only placeholder, in real app this would handle responsiveness) -->
<div class="md:hidden flex-1 flex items-center justify-center p-8 bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 text-center">
<div>
<div class="bg-blue-50 dark:bg-slate-800 size-16 rounded-full flex items-center justify-center mx-auto mb-4">
<span class="material-symbols-outlined text-3xl text-primary">chat</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Selecciona un chat</h3>
<p class="text-sm text-slate-500">Elige una conversación del menú para ver los detalles.</p>
</div>
</div>
</main>
<!-- Style for custom scrollbar within the app if needed -->
<style>
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #475569;
        }
    </style>`;
const EXTRA_CSS = `.custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #475569;
        }`;

export default function PanelColaboradorChats() {
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
