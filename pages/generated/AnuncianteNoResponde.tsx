import React from 'react';

const TITLE = `YaVoy - Anunciante No Responde`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
<div class="layout-container flex h-full grow flex-col">
<!-- TopNavBar -->
<div class="flex justify-center w-full bg-white dark:bg-[#1a2632] border-b border-[#e7edf3] dark:border-[#2a3845]">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-10">
<header class="flex items-center justify-between whitespace-nowrap py-3">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 text-primary">
<span class="material-symbols-outlined !text-[32px]">check_box</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="hidden md:flex items-center gap-9">
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Mis Candidaturas</a>
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Mensajes</a>
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Perfil</a>
</div>
</div>
<div class="flex flex-1 justify-end gap-8">
<label class="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full">
<div class="text-[#4c739a] flex border-none bg-[#e7edf3] dark:bg-[#2a3845] items-center justify-center pl-4 rounded-l-lg border-r-0">
<span class="material-symbols-outlined text-[24px]">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] dark:bg-[#2a3845] focus:border-none h-full placeholder:text-[#4c739a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal" placeholder="Buscar..." value=""/>
</div>
</label>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-white dark:ring-[#1a2632]" data-alt="User profile avatar showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBb_BJDurXWdcNcMvbgaGfMxF8y0IAC5dwMe2kNGoT_EVC-O9Yau-Fly0wGEY0XCPGZLRUhtNrf1rjNz5fgFRmc5hekEarWvCBen67i2_E-i7j7hCA0jiAh1CxXJyAuXRi0rr1ShTbUYWQM2M7ag7mSZoTN-4OQtuqxlYKlr87XXmYSHm-wGYMhK_wLOEOXzbSR5YLBncpgWzJKOnarmGi8bSsKAwbAst6dGhlGQMqvWOYp3vPzvZyjMlWVdvbMF1Xzxkps1nzSvQ");'></div>
</div>
</header>
</div>
</div>
<!-- Main Content -->
<div class="flex flex-1 justify-center py-5 px-4 md:px-0">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1 gap-6">
<!-- Page Heading & Status Alert -->
<div class="flex flex-wrap justify-between gap-3 p-4 pb-0">
<div class="flex w-full flex-col gap-3">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-orange-500 text-4xl">warning</span>
<h1 class="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Candidatura en espera</h1>
</div>
<p class="text-[#4c739a] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                                El anunciante aún no ha respondido. Han pasado <span class="font-bold text-[#0d141b] dark:text-white">48 horas</span> desde tu solicitud. Sabemos que la espera es difícil, por eso te ofrecemos algunas opciones para gestionar tu candidatura.
                            </p>
</div>
</div>
<!-- Job Card Summary -->
<div class="px-4">
<div class="flex flex-col md:flex-row items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-[#1a2632] p-4 shadow-sm border border-[#e7edf3] dark:border-[#2a3845]">
<div class="flex flex-[2_2_0px] flex-col justify-center gap-4">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-2">
<span class="bg-blue-100 text-primary text-xs px-2 py-1 rounded font-bold uppercase tracking-wide">Tiempo completo</span>
<span class="text-[#4c739a] text-xs">ID: #84930</span>
</div>
<h3 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight">Paseador de perros - Turno de tarde</h3>
<div class="flex items-center gap-2 text-[#4c739a] dark:text-gray-400 text-sm font-normal leading-normal">
<span class="material-symbols-outlined text-[18px]">location_on</span>
<span>Madrid Centro</span>
<span>•</span>
<span>Publicado hace 3 días</span>
</div>
<div class="flex items-center gap-2 mt-1">
<div class="flex -space-x-2">
<img alt="Advertiser avatar" class="w-8 h-8 rounded-full border-2 border-white dark:border-[#1a2632]" data-alt="Advertiser profile picture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi7EYCScmYtBJsc0Yj_3MNaEpwFa3Ov6ZOSAHetF64eF1rROWIRPvyHO1SDaHgM-8whrooCo52u6bXPaTpz3V2l5GEVciH-eRxL6ToLFICSa0ySdi5ZQuMaymJ-ggY7IXoDF0E68tlIka3hv500ojqfjK-gAtmuZZ-6qK_sZ8mwkflXJ4ciegKtm6HYJauAeFBNBzW_QjGlL2GIm7ZPvU5CNpKGR_zq15vYjB6M1U9lNwvkUEuVPXK_Avoc1np_dpo6PzeIG3yRg"/>
</div>
<span class="text-sm font-medium text-[#0d141b] dark:text-gray-200">Publicado por Mario G.</span>
</div>
</div>
</div>
<div class="w-full md:w-1/3 bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1" data-alt="Happy dog running in a park on a sunny day" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAflz3_rfLKKS9Ee-ex6Kf9MYvUZHZHYicBvoILyDjBU1ue3_GyvogCFZPpVF-W9cZhZefIFUdnyYPV6yXg4vqLcajzljlQU_P8LPll__Rw8g1daA2pCLlo5J4V1B4DI02YcepDvf5kNE0Z5-ja738QB0ODHAGrcsFLop0HFUzALHb_rEQ2AwBsT6jCNcJlm6ctQ6l8pkJza4xOj6pFZHQaezmr86HYDgfI1HbjPUD-kaizNY9XDEWCSKQBZapVtI-vphsBP8DqOw");'></div>
</div>
</div>
<!-- Timeline -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl mx-4 p-6 border border-[#e7edf3] dark:border-[#2a3845] shadow-sm">
<h3 class="text-[#0d141b] dark:text-white text-lg font-bold mb-6">Estado del proceso</h3>
<div class="grid grid-cols-[40px_1fr] gap-x-2">
<!-- Step 1: Done -->
<div class="flex flex-col items-center gap-1 pt-1">
<div class="rounded-full bg-green-100 p-1 flex items-center justify-center">
<span class="material-symbols-outlined text-green-600 text-[20px]">check</span>
</div>
<div class="w-[2px] bg-green-500 h-full min-h-[40px]"></div>
</div>
<div class="flex flex-1 flex-col pt-1 pb-6">
<p class="text-[#0d141b] dark:text-white text-base font-bold leading-normal">Solicitud enviada</p>
<p class="text-[#4c739a] text-sm">Hace 2 días • 10:30 AM</p>
</div>
<!-- Step 2: Done -->
<div class="flex flex-col items-center gap-1">
<div class="w-[2px] bg-green-500 h-4"></div>
<div class="rounded-full bg-green-100 p-1 flex items-center justify-center">
<span class="material-symbols-outlined text-green-600 text-[20px]">check</span>
</div>
<div class="w-[2px] bg-green-500 h-full min-h-[40px] grow"></div>
</div>
<div class="flex flex-1 flex-col pt-0 pb-6">
<p class="text-[#0d141b] dark:text-white text-base font-bold leading-normal">Recibida por el anunciante</p>
<p class="text-[#4c739a] text-sm">Hace 2 días • 10:35 AM</p>
</div>
<!-- Step 3: Current (Waiting) -->
<div class="flex flex-col items-center gap-1 pb-3">
<div class="w-[2px] bg-green-500 h-4"></div>
<div class="rounded-full bg-orange-100 p-1 flex items-center justify-center animate-pulse">
<span class="material-symbols-outlined text-orange-600 text-[20px]">timer</span>
</div>
<div class="w-[2px] bg-[#e7edf3] dark:bg-[#2a3845] h-full grow border-l border-dashed border-gray-300"></div>
</div>
<div class="flex flex-1 flex-col pt-0 pb-6">
<p class="text-orange-600 dark:text-orange-400 text-base font-bold leading-normal">Esperando respuesta</p>
<p class="text-[#4c739a] text-sm">Actualmente en proceso de revisión. El tiempo medio de respuesta es de 24h.</p>
</div>
<!-- Step 4: Future -->
<div class="flex flex-col items-center gap-1">
<div class="w-[2px] bg-[#e7edf3] dark:bg-[#2a3845] h-4 border-l border-dashed border-gray-300"></div>
<div class="rounded-full bg-gray-100 dark:bg-gray-700 p-1 flex items-center justify-center">
<span class="material-symbols-outlined text-gray-400 text-[20px]">chat</span>
</div>
</div>
<div class="flex flex-1 flex-col pt-0 pb-0">
<p class="text-gray-400 dark:text-gray-500 text-base font-medium leading-normal">Entrevista / Chat</p>
</div>
</div>
</div>
<!-- Action Panel -->
<div class="px-4 pb-10">
<h2 class="text-[#0d141b] dark:text-white tracking-tight text-[22px] font-bold leading-tight text-left pb-4 pt-2">Opciones disponibles</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Reminder Card -->
<div class="flex flex-col p-5 bg-white dark:bg-[#1a2632] rounded-xl border border-[#e7edf3] dark:border-[#2a3845] shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-start gap-4 mb-4">
<div class="bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg text-primary">
<span class="material-symbols-outlined text-[28px]">notifications_active</span>
</div>
<div>
<h3 class="font-bold text-lg dark:text-white">Enviar recordatorio</h3>
<p class="text-[#4c739a] text-sm mt-1">Envía una notificación amistosa al anunciante para mostrar tu interés continuo.</p>
</div>
</div>
<button class="mt-auto w-full flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
<span>Enviar aviso ahora</span>
<span class="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
<!-- Withdraw Card -->
<div class="flex flex-col p-5 bg-white dark:bg-[#1a2632] rounded-xl border border-[#e7edf3] dark:border-[#2a3845] shadow-sm hover:shadow-md transition-shadow">
<div class="flex items-start gap-4 mb-4">
<div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-red-500">
<span class="material-symbols-outlined text-[28px]">cancel</span>
</div>
<div>
<h3 class="font-bold text-lg dark:text-white">Cerrar candidatura</h3>
<p class="text-[#4c739a] text-sm mt-1">Puedes retirar tu solicitud si ya no estás interesado. <span class="text-green-600 font-medium">Sin penalización.</span></p>
</div>
</div>
<button class="mt-auto w-full flex items-center justify-center gap-2 bg-white dark:bg-[#1a2632] border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#23303d] font-medium py-2.5 px-4 rounded-lg transition-colors">
<span>Retirar solicitud</span>
</button>
</div>
</div>
<!-- Feedback Section -->
<div class="mt-6 bg-[#f8fafc] dark:bg-[#131d26] rounded-xl p-6 border border-dashed border-[#cbd5e1] dark:border-[#2a3845] flex flex-col md:flex-row items-center justify-between gap-4">
<div class="flex items-center gap-4">
<div class="hidden md:block text-[#4c739a]">
<span class="material-symbols-outlined text-[32px]">rate_review</span>
</div>
<div>
<p class="text-sm font-bold text-[#0d141b] dark:text-white">¿Cómo va el proceso?</p>
<p class="text-xs text-[#4c739a]">Valora la agilidad de este proceso hasta ahora (opcional)</p>
</div>
</div>
<div class="flex items-center gap-1">
<button class="p-1 text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined fill-current">star</span></button>
<button class="p-1 text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined fill-current">star</span></button>
<button class="p-1 text-gray-300 hover:text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined">star</span></button>
<button class="p-1 text-gray-300 hover:text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined">star</span></button>
<button class="p-1 text-gray-300 hover:text-yellow-400 hover:scale-110 transition-transform"><span class="material-symbols-outlined">star</span></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', "Noto Sans", sans-serif;
        }`;

export default function AnuncianteNoResponde() {
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
