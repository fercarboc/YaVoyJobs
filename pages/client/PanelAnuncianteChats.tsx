import React from 'react';

const TITLE = `Panel Anunciante - Chats | YaVoy`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="flex-none flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 px-6 py-3 z-20">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span class="material-symbols-outlined">home_work</span>
</div>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<nav class="hidden md:flex items-center gap-6">
<a class="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mis Anuncios</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Estadísticas</a>
<a class="text-primary text-sm font-bold leading-normal relative" href="#">
                    Mensajes
                    <span class="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">2</span>
</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mi Cuenta</a>
</nav>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-slate-100 dark:border-slate-700 shadow-sm" data-alt="Profile picture of a real estate agent" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAe2zVxjHVeYmtTsKPrGsBCkd2PmtpeJhrCJPFWSZ0-NeAmEpxIipLftqeMkf6VA3TBiJMQE2BaCp88RMNeJsrgRE93n1PN0iRZy_niKx0-SHJreMr6df8ucvlMq-23DOB7G369q85-S8s6Wp7yViN-mzR1ms-02XMJll1dTqt7qsBZ_dLYe3eSx3QuGdKW1mE_cMkiWhTWC5D7TCV9VypHz8q7pmnpnobz12XhYjYO5TrmAJTtK_qmpFzaXCcEYHcq2TWcF5eS9g");'></div>
</div>
</header>
<div class="flex flex-1 overflow-hidden">
<!-- Main Layout Container -->
<div class="flex flex-col w-full max-w-[1440px] mx-auto p-4 md:p-6 gap-4 h-full">
<!-- Breadcrumbs & Heading Section (Compact) -->
<div class="flex flex-col flex-none gap-2">
<div class="flex flex-wrap gap-2 items-center text-sm">
<a class="text-slate-500 hover:text-primary font-medium" href="#">Panel Anunciante</a>
<span class="material-symbols-outlined text-slate-400 text-base">chevron_right</span>
<span class="text-slate-900 dark:text-white font-medium">Chats</span>
</div>
<h1 class="text-2xl font-bold text-slate-900 dark:text-white">Gestión de Chats</h1>
</div>
<!-- Chat Interface Card -->
<div class="flex flex-1 bg-white dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden min-h-0">
<!-- LEFT SIDEBAR: Chat List -->
<aside class="w-full md:w-[380px] flex flex-col border-r border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850 z-10">
<!-- Search & Filters -->
<div class="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-col gap-3">
<!-- SearchBar -->
<div class="relative w-full group">
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined group-focus-within:text-primary transition-colors">search</span>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 text-slate-700 dark:text-slate-200 placeholder:text-slate-400 outline-none transition-all" placeholder="Buscar por usuario o referencia..." type="text"/>
</div>
<!-- Chips -->
<div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
<button class="flex items-center justify-center px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium transition-colors">
                                Todos
                            </button>
<button class="flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium transition-colors">
                                Abiertos
                            </button>
<button class="flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium transition-colors">
                                Cerrados
                            </button>
</div>
</div>
<!-- Conversation List -->
<div class="flex-1 overflow-y-auto">
<!-- Chat Item 1 (Active) -->
<div class="flex gap-3 p-4 border-l-4 border-primary bg-primary/5 cursor-pointer hover:bg-primary/10 transition-colors">
<div class="relative flex-shrink-0">
<div class="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Laura, a potential buyer" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBcvY_2IKKO9-TWGaxcZy56GxopmmG89biRfX8wH0KzCPeS83h8_eKxVeSkn4rtS_FDZ3PD1YVWq-CChmjz_Sbu0nUjWnpNZLYfXt_j9CPE05dFPDPyuiv3hcC41u99jIBQsRCdPDhaBPHNhFHB6YITI5fSQR9dCUQtymKVKR5q3Aaz86Bb9wTcQkJsblZ0_yj5w3a87Il4un3Gk2amxNIkHvt9pbsGcsj3y6Fa4q_kgD2auzEjet3KDDBQ_FV-c5VQeF97dOKB5g');"></div>
<div class="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-slate-850 rounded-full"></div>
</div>
<div class="flex flex-col flex-1 min-w-0 gap-1">
<div class="flex justify-between items-start">
<span class="font-semibold text-slate-900 dark:text-white truncate">Laura Martínez</span>
<span class="text-xs text-slate-500 whitespace-nowrap">10:45</span>
</div>
<span class="text-xs text-primary font-medium truncate">Ref: Ático en C/Alcalá</span>
<p class="text-sm text-slate-600 dark:text-slate-300 truncate">Me parece bien, ¿confirmamos la hora?</p>
</div>
</div>
<!-- Chat Item 2 -->
<div class="flex gap-3 p-4 border-l-4 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors border-b border-slate-50 dark:border-slate-800">
<div class="relative flex-shrink-0">
<div class="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Carlos, a potential buyer" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmvefLExTUuPC45E8K8ITHIpf72gcS7Tc5iWy_7AxfxP0cS5jRC_yTq1pokawZ78n53nPdx9gHrf5iIXaB6zR6U3GqaGILjeHXMYsQPv1nqqmkQ2oTlqB6poU4mbubgK4xnzLiF3LSm4USWObgsgFa7By9kNo62nyDB8myExHVDbcLQO0UCvdXrHQHat3TisQUYcJz4OnIojKV6fQXZQrw6wJ1bTDjotda3P0EYuF5hyLDEHPiHRHOTVFoI-FUau5aH8MLnPKC3Q');"></div>
</div>
<div class="flex flex-col flex-1 min-w-0 gap-1">
<div class="flex justify-between items-start">
<span class="font-semibold text-slate-900 dark:text-white truncate">Carlos Ruíz</span>
<span class="text-xs text-slate-500 whitespace-nowrap">Ayer</span>
</div>
<span class="text-xs text-slate-500 font-medium truncate">Ref: Loft Industrial Centro</span>
<p class="text-sm text-slate-500 dark:text-slate-400 truncate">Gracias por la información.</p>
</div>
</div>
<!-- Chat Item 3 (Closed) -->
<div class="flex gap-3 p-4 border-l-4 border-transparent hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors opacity-70">
<div class="relative flex-shrink-0">
<div class="size-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500">
<span class="material-symbols-outlined">person</span>
</div>
</div>
<div class="flex flex-col flex-1 min-w-0 gap-1">
<div class="flex justify-between items-start">
<span class="font-semibold text-slate-900 dark:text-white truncate">Usuario #4921</span>
<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 uppercase">Cerrado</span>
</div>
<span class="text-xs text-slate-500 font-medium truncate">Ref: Local Comercial</span>
<p class="text-sm text-slate-500 dark:text-slate-400 truncate">Chat finalizado por el anunciante.</p>
</div>
</div>
</div>
</aside>
<!-- RIGHT MAIN AREA: Active Chat -->
<main class="hidden md:flex flex-col flex-1 bg-slate-50/50 dark:bg-background-dark relative">
<!-- Chat Header -->
<div class="flex items-center justify-between px-6 py-4 bg-white dark:bg-slate-850 border-b border-slate-200 dark:border-slate-700 shadow-sm z-10">
<div class="flex items-center gap-4">
<div class="flex flex-col">
<h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    Laura Martínez
                                    <span class="w-2 h-2 rounded-full bg-green-500" title="Online"></span>
</h3>
<div class="flex items-center gap-2 text-sm text-slate-500">
<span class="material-symbols-outlined text-[16px]">apartment</span>
<span>Interesada en: <strong>Ático reformado en C/Alcalá</strong> (450.000€)</span>
</div>
</div>
</div>
<div class="flex items-center gap-3">
<button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined text-[18px]">cancel_presentation</span>
                                Cerrar chat
                            </button>
<button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm shadow-primary/30">
<span class="material-symbols-outlined text-[18px]">calendar_month</span>
                                Proponer visita
                            </button>
<button class="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
<span class="material-symbols-outlined">more_vert</span>
</button>
</div>
</div>
<!-- Safety Warning Banner -->
<div class="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-900/30 px-6 py-3 flex items-start gap-3">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-500 mt-0.5">shield</span>
<div>
<p class="text-sm text-amber-800 dark:text-amber-200 font-medium">No compartas datos sensibles sin verificar.</p>
<p class="text-xs text-amber-700 dark:text-amber-300/80">Por tu seguridad, nunca envíes fotos de tarjetas de crédito, contraseñas o documentación oficial hasta verificar la identidad del interesado.</p>
</div>
</div>
<!-- Messages Area -->
<div class="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
<!-- Date Divider -->
<div class="flex justify-center">
<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs px-3 py-1 rounded-full">Hoy</span>
</div>
<!-- Message Received -->
<div class="flex gap-4 max-w-[80%]">
<div class="size-8 rounded-full bg-cover bg-center mt-1 flex-shrink-0" data-alt="Portrait of Laura" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFdh0nHgifwlZRdavoQGPfamjBT7FQhR09L7LgGi0F3AqbcZNNKDDxStTgxxeuAicIo5_nA385LFb6-TCuKkyOXegqj9wXTkZ9aEt6GcmrXVWDgfLzzhDXXCXwsBfF8rAtPbR5HvjbYpO22BY9dM_uE9JH671M0IhmBANn-IfhJOu3acRvDwghPSoecjsfebr0FP8EOUBHRx_7XcFJfv4cOrZdegY8ozG7b-6SFJtshuzX3wh0aKaw1epA6dDuoe5yjHo_aYa3aQ');"></div>
<div class="flex flex-col gap-1">
<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-800 dark:text-slate-200 text-sm leading-relaxed border border-slate-100 dark:border-slate-700">
<p>Hola, he visto las fotos del ático y me encanta la terraza. ¿Sigue disponible para visitar esta semana?</p>
</div>
<span class="text-[11px] text-slate-400 ml-1">09:30</span>
</div>
</div>
<!-- Message Sent -->
<div class="flex gap-4 max-w-[80%] self-end flex-row-reverse">
<div class="size-8 rounded-full bg-cover bg-center mt-1 flex-shrink-0" data-alt="Profile picture of agent" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD63k3Ud57kpPjnuH4gaeX06gnfd-pYpaHIY0qZfX1AbyvxWUV8bbsovu27llsAJ3nz7IJVaqbHsc2-66iLkML2GAW0FO7ig0AfAYNYBK_RXZhb71WvFeuDpYYTAJ42Cl9BLwyNldOPvRstPccFIMM1fcaDhEHcP-c3T8JkaBfiFppbuiXmIaQpHXhRSoKmymR3Q001SDfGckyqFkvgYbEy8pEiNusCP4ruUcgBzynN-ajFkZNcBpR0XSksz4qaK6YeZUUG8urPBQ');"></div>
<div class="flex flex-col gap-1 items-end">
<div class="bg-primary p-4 rounded-2xl rounded-tr-none shadow-sm text-white text-sm leading-relaxed">
<p>¡Hola Laura! Sí, sigue disponible. Es un piso fantástico. Tengo un hueco mañana por la tarde, ¿te vendría bien sobre las 17:30?</p>
</div>
<span class="text-[11px] text-slate-400 mr-1 flex items-center gap-1">
                                    09:42 
                                    <span class="material-symbols-outlined text-[14px]">done_all</span>
</span>
</div>
</div>
<!-- Message Received with Action -->
<div class="flex gap-4 max-w-[80%]">
<div class="size-8 rounded-full bg-cover bg-center mt-1 flex-shrink-0" data-alt="Portrait of Laura" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDTs55pmqG8GfwkAjvL4lQiXZCfXqXBHC7uEurZe1-NFrq2nrB7sO-iuP1vfZ801iwMWx-Aw5lLPs4oal1x74R_A9TXVoahxIR65Rpqv3r4at7wqFYvAqzB-w3ksptg0G5F4Pr-dkKLQkRbq1KnA7y9BE-e_Gg7OAUc08hC46MsywvUcmPDoR-mO0vuPxMx_JywGw3Mq1z4WWgP_NjbSfMAFes1NPPvPPYpE-0WK-r0nkIlC7r1u2SUxbKgGxRdLKDV3aAnTnaoJQ');"></div>
<div class="flex flex-col gap-1">
<div class="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none shadow-sm text-slate-800 dark:text-slate-200 text-sm leading-relaxed border border-slate-100 dark:border-slate-700">
<p>Las 17:30 está bien, pero salgo de trabajar a las 18:00. ¿Podría ser a las 18:30 para llegar con tiempo?</p>
</div>
<span class="text-[11px] text-slate-400 ml-1">10:45</span>
</div>
</div>
<!-- Message Sent (Proposal) -->
<div class="flex gap-4 max-w-[80%] self-end flex-row-reverse">
<div class="size-8 rounded-full bg-cover bg-center mt-1 flex-shrink-0" data-alt="Profile picture of agent" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYIfhNoqHJ7hov_9rEiMqQDaB-fTMvPZ5DzBJ-Cw0nqeDtcjZ-TnAvxKNsFLsjB0fGle__f-1eB4QysX1s6MKAFSHj2T5cmoS8HxULJOnKbIAfpRCS_OGDLY51x_eQmF7bCl8VXC9E_-TWdbXGT_nSqIHdpqqk16r7_D0cdY83G4hElkGRgcwbTxOWl_C2jX9U31ESmigFiYh4LEccq5qmge29LofwthRkVp70-GoQLlzzZyJsrLr_3wAGFAd0Pc5Bt-hMH271jg');"></div>
<div class="flex flex-col gap-1 items-end">
<div class="bg-primary/10 border border-primary/20 p-4 rounded-2xl rounded-tr-none shadow-sm w-full max-w-md">
<div class="flex items-center gap-3 mb-2">
<div class="bg-primary/20 p-2 rounded-lg text-primary">
<span class="material-symbols-outlined">event</span>
</div>
<div>
<p class="text-slate-900 dark:text-white font-bold text-sm">Propuesta de Visita</p>
<p class="text-slate-500 dark:text-slate-400 text-xs">Mañana, 18:30h</p>
</div>
</div>
<p class="text-slate-700 dark:text-slate-300 text-sm mb-3">He enviado una solicitud formal para esa hora. Por favor confírmala para reservar el hueco.</p>
<button class="w-full py-2 bg-primary text-white text-xs font-semibold rounded hover:bg-primary/90 transition">Ver detalle</button>
</div>
<span class="text-[11px] text-slate-400 mr-1 flex items-center gap-1">
                                    10:48 
                                    <span class="material-symbols-outlined text-[14px]">done_all</span>
</span>
</div>
</div>
</div>
<!-- Input Area -->
<div class="p-4 bg-white dark:bg-slate-850 border-t border-slate-200 dark:border-slate-700 z-10">
<div class="flex items-end gap-3 bg-slate-50 dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
<button class="p-2 text-slate-400 hover:text-primary transition-colors flex-shrink-0" title="Adjuntar documento o imagen">
<span class="material-symbols-outlined">attach_file</span>
</button>
<textarea class="w-full bg-transparent border-none text-slate-800 dark:text-slate-100 text-sm resize-none focus:ring-0 max-h-32 py-2.5 placeholder:text-slate-400" placeholder="Escribe un mensaje..." rows="1" style="min-height: 44px;"></textarea>
<button class="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-sm flex-shrink-0">
<span class="material-symbols-outlined text-[20px] flex">send</span>
</button>
</div>
<div class="flex justify-center mt-3">
<p class="text-[10px] text-slate-400 flex items-center gap-1">
<span class="material-symbols-outlined text-[12px]">info</span>
                                YaVoy no participa en el acuerdo ni en las transacciones económicas.
                            </p>
</div>
</div>
</main>
</div>
</div>
</div>`;
const EXTRA_CSS = ``;

export default function PanelAnuncianteChats() {
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
