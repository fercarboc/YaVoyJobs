import React from 'react';

const TITLE = `Panel Colaborador - Mis Candidaturas - YaVoy`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col group/design-root">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-gray-800 bg-white dark:bg-gray-900 px-6 lg:px-10 py-3 shadow-sm">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="flex items-center gap-2">
<div class="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span class="material-symbols-outlined text-xl">rocket_launch</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
</div>
<div class="flex flex-1 justify-end gap-4 lg:gap-8 items-center">
<nav class="hidden md:flex items-center gap-6">
<a class="text-[#4c739a] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[20px]">search</span>
                        Buscar Tareas
                    </a>
<a class="text-primary dark:text-primary text-sm font-bold leading-normal flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[20px]">assignment</span>
                        Mis Candidaturas
                    </a>
<a class="text-[#4c739a] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium leading-normal flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[20px]">person</span>
                        Mi Perfil
                    </a>
</nav>
<div class="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
<button class="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
<span class="material-symbols-outlined text-gray-600 dark:text-gray-300">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-gray-900"></span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border-2 border-white dark:border-gray-800 shadow-sm cursor-pointer" data-alt="Portrait of the logged in user" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwg5k8AVCK4wyIwTasm9Q35WXK4wKlb-iDEDFrp2tyrWa9vOLglJ5fF6WKCuctMkjBejXcuKYdCz4BbnxOuaJvdlVuFg50wdf_8RBme1otbQi19GU8vVZ1KBp4Iqskk4k4l61RapIFFTDxN7TsC6nIAWG53UNFf2uvgXAI83yk26X2HqX3RbYtgzi_Q_UiE4SeJVC6yFE0UmtGraDyBFKJaisDFzASm2xKyHwltYIcChdPVoGvwZVfz5g3ppI_dFCBYuIKYJiktw");'></div>
</div>
</div>
</header>
<div class="layout-container flex h-full grow flex-col">
<div class="flex flex-1 justify-center py-8 px-4 md:px-8">
<div class="layout-content-container flex flex-col max-w-[1024px] flex-1 gap-6">
<!-- Page Heading -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div class="flex flex-col gap-2">
<h1 class="text-[#0d141b] dark:text-white tracking-tight text-3xl font-bold leading-tight">Mis Candidaturas</h1>
<p class="text-[#4c739a] dark:text-gray-400 text-sm font-normal leading-normal">
                                Gestiona el estado de tus postulaciones a tareas y comunícate con los anunciantes.
                            </p>
</div>
<button class="flex items-center gap-2 bg-white dark:bg-gray-800 border border-[#e7edf3] dark:border-gray-700 px-4 py-2 rounded-lg text-sm font-medium text-[#0d141b] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
<span class="material-symbols-outlined text-[18px]">filter_list</span>
                            Filtrar vista
                        </button>
</div>
<!-- Filter Chips -->
<div class="flex flex-wrap gap-2 py-2 overflow-x-auto pb-4 scrollbar-hide">
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-4 transition-all shadow-sm">
<span class="text-sm font-medium leading-normal">Todas</span>
<span class="flex items-center justify-center bg-white/20 rounded-full text-xs size-5">12</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-[#e7edf3] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 transition-all">
<span class="text-[#0d141b] dark:text-white text-sm font-medium leading-normal">Enviadas</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-[#e7edf3] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 transition-all">
<span class="text-[#0d141b] dark:text-white text-sm font-medium leading-normal">En conversación</span>
<span class="flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full text-xs size-5">3</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-[#e7edf3] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 transition-all">
<span class="text-[#0d141b] dark:text-white text-sm font-medium leading-normal">Aceptadas</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-[#e7edf3] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-4 transition-all">
<span class="text-[#0d141b] dark:text-white text-sm font-medium leading-normal">Finalizadas</span>
</button>
</div>
<!-- Table Section -->
<div class="w-full @container">
<div class="flex flex-col overflow-hidden rounded-xl border border-[#cfdbe7] dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
<div class="overflow-x-auto">
<table class="w-full min-w-[800px]">
<thead>
<tr class="bg-gray-50 dark:bg-gray-900 border-b border-[#cfdbe7] dark:border-gray-700">
<th class="px-6 py-4 text-left text-[#4c739a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Anuncio</th>
<th class="px-6 py-4 text-left text-[#4c739a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Anunciante</th>
<th class="px-6 py-4 text-left text-[#4c739a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Fecha</th>
<th class="px-6 py-4 text-left text-[#4c739a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Estado</th>
<th class="px-6 py-4 text-right text-[#4c739a] dark:text-gray-400 text-xs font-bold uppercase tracking-wider">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-[#cfdbe7] dark:divide-gray-700">
<!-- Row 1: En Conversación -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 shrink-0">
<span class="material-symbols-outlined">box</span>
</div>
<div>
<p class="text-[#0d141b] dark:text-white text-sm font-bold leading-normal group-hover:text-primary transition-colors cursor-pointer">Mudanza en Madrid Centro</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Transporte y Mudanzas</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6" data-alt="Juan Perez Avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBPfD3cqA73tQ7wI-mM9kNg731HRXkl33T-yxQ53bDiXxsiPB8DsEPG5c6cP5Hm8VdAvOzYReuUr-tXKx_1vhdvuSfakLnVcn2THNpeVc2XTqlH1jvTBiVBeCk6gnUYIrk8q942-Zn9p-7RMzrvHskvKQph5bblparD_-dOxqjwDm0nJp-r-MvWsfNSmZvgRHy6RHRuhJcUOsffa9RAmRhfeUGd3GaqVIgvdPmmMyWgbdzeFacj2ht6K7J7PbniMtuwXd_ofP5ZTQ");'></div>
<span class="text-[#0d141b] dark:text-gray-200 text-sm font-medium">Juan Pérez</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-[#4c739a] dark:text-gray-400 text-sm">
<span class="material-symbols-outlined text-base">calendar_today</span>
                                                    12 Oct 2023
                                                </div>
</td>
<td class="px-6 py-4">
<div class="inline-flex items-center gap-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 px-3 py-1 text-amber-800 dark:text-amber-200">
<span class="size-1.5 rounded-full bg-amber-500"></span>
<span class="text-xs font-semibold">En conversación</span>
</div>
</td>
<td class="px-6 py-4 text-right">
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-medium transition-colors shadow-sm w-[100px]">
<span class="material-symbols-outlined text-[18px]">chat</span>
                                                    Chat
                                                </button>
</td>
</tr>
<!-- Row 2: Enviada -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
<span class="material-symbols-outlined">cleaning_services</span>
</div>
<div>
<p class="text-[#0d141b] dark:text-white text-sm font-bold leading-normal group-hover:text-primary transition-colors cursor-pointer">Limpieza de oficina</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Limpieza</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-[10px] font-bold">ABC</div>
<span class="text-[#0d141b] dark:text-gray-200 text-sm font-medium">Empresa ABC</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-[#4c739a] dark:text-gray-400 text-sm">
<span class="material-symbols-outlined text-base">calendar_today</span>
                                                    10 Oct 2023
                                                </div>
</td>
<td class="px-6 py-4">
<div class="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 px-3 py-1 text-blue-700 dark:text-blue-300">
<span class="size-1.5 rounded-full bg-blue-500"></span>
<span class="text-xs font-semibold">Enviada</span>
</div>
</td>
<td class="px-6 py-4 text-right">
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 text-sm font-medium cursor-not-allowed w-[100px]" disabled="">
<span class="material-symbols-outlined text-[18px]">lock</span>
                                                    Chat
                                                </button>
</td>
</tr>
<!-- Row 3: Aceptada -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-700 dark:text-yellow-400 shrink-0">
<span class="material-symbols-outlined">handyman</span>
</div>
<div>
<p class="text-[#0d141b] dark:text-white text-sm font-bold leading-normal group-hover:text-primary transition-colors cursor-pointer">Montaje de muebles IKEA</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Manitas</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6" data-alt="Marta Lopez Avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBN4WeAedagxZvFLzWXMoTizhJlcO3-b05Xxby5oOK6TgfGfpXRfWWO2s1KQZjbOEPKPzlj4q5VsSAP0f5hqlNqtgYdxqGzPZ0nDrU6db-WXcyRQS9rbkUwOhqUNW1-2CNBqF-l2_q1HxrO4oOpgF-k9a1EsZ_gWICLFMWxTjM1tETMfihymRZpvvAYrZCIv2CltW0Xc1JPj1keFsRj0Pieeiawm4RQn5XsTYW8pARw1-cqE4Q-0Z_l7-gEZx8hEaAu6LfcWOl6Uw");'></div>
<span class="text-[#0d141b] dark:text-gray-200 text-sm font-medium">Marta Lopez</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-[#4c739a] dark:text-gray-400 text-sm">
<span class="material-symbols-outlined text-base">calendar_today</span>
                                                    05 Oct 2023
                                                </div>
</td>
<td class="px-6 py-4">
<div class="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-emerald-800 dark:text-emerald-200">
<span class="material-symbols-outlined text-[14px]">check_circle</span>
<span class="text-xs font-semibold">Aceptada</span>
</div>
</td>
<td class="px-6 py-4 text-right">
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-medium transition-colors shadow-sm w-[100px]">
<span class="material-symbols-outlined text-[18px]">chat</span>
                                                    Chat
                                                </button>
</td>
</tr>
<!-- Row 4: Rechazada -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-lg bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0">
<span class="material-symbols-outlined">pets</span>
</div>
<div>
<p class="text-[#0d141b] dark:text-white text-sm font-bold leading-normal group-hover:text-primary transition-colors cursor-pointer">Paseo de perros</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Cuidado de Mascotas</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6" data-alt="Carlos Ruiz Avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrs4IEnlIAkVHgMkdA1QLlztNaHOqdtpbozG6_g8lVhC9Klt7tQURDrfSrbLB-CQs2Qs4HTYPzDvZ5cTFD2fgFREudR8pQY8km6iG0bWjEdgU0DW5piAhFKYuM5ngkEEb52HFYCg4I4oJ5-o2vXD185Xfu_xki8gLdncONiGPr_HYTWhBqcwdA48qvpjeiIHeEd_0VVvM7MghEb1EENYnJkLnjTEhZN3IUn7eDJbF41_UXMBcNMRDKdziGfuLGcdN-vaGqZe6l-Q");'></div>
<span class="text-[#0d141b] dark:text-gray-200 text-sm font-medium">Carlos Ruiz</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-[#4c739a] dark:text-gray-400 text-sm">
<span class="material-symbols-outlined text-base">calendar_today</span>
                                                    01 Sep 2023
                                                </div>
</td>
<td class="px-6 py-4">
<div class="inline-flex items-center gap-1.5 rounded-full bg-red-100 dark:bg-red-900/30 px-3 py-1 text-red-800 dark:text-red-200">
<span class="material-symbols-outlined text-[14px]">cancel</span>
<span class="text-xs font-semibold">Rechazada</span>
</div>
</td>
<td class="px-6 py-4 text-right">
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 text-sm font-medium cursor-not-allowed w-[100px]" disabled="">
<span class="material-symbols-outlined text-[18px]">block</span>
                                                    Chat
                                                </button>
</td>
</tr>
<!-- Row 5: Cerrada -->
<tr class="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group border-b-0">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 shrink-0">
<span class="material-symbols-outlined">bolt</span>
</div>
<div>
<p class="text-[#0d141b] dark:text-white text-sm font-bold leading-normal group-hover:text-primary transition-colors cursor-pointer">Reparación eléctrica</p>
<p class="text-[#4c739a] dark:text-gray-400 text-xs">Mantenimiento</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-6" data-alt="Ana Garcia Avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDp4nZcxlID4xufQA8u-PAdUzS3oFqBgl6Z4anubweQPoqE4yXo1auHDJP0xsU5kHUFysuFYtLLoNg-qMblibHQuDlTDeAduApm7IBC6gJRgoKRLgpupuKOfPmoi295QZvBFyVcbWhDL3VS04HGnzp7IE-72y8oA8J8Kgll4gRRU7ZIa7tbVFNz1SrH4uCUBE55haZOR6DYAcObLK16QPFghGg5CmAi9m9wlLkPBanl1cWwwhcDbEOLGMYNyVprt9qh4gj_xLcjw");'></div>
<span class="text-[#0d141b] dark:text-gray-200 text-sm font-medium">Ana Garcia</span>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1 text-[#4c739a] dark:text-gray-400 text-sm">
<span class="material-symbols-outlined text-base">calendar_today</span>
                                                    20 Ago 2023
                                                </div>
</td>
<td class="px-6 py-4">
<div class="inline-flex items-center gap-1.5 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-gray-600 dark:text-gray-300">
<span class="size-1.5 rounded-full bg-gray-500"></span>
<span class="text-xs font-semibold">Cerrada</span>
</div>
</td>
<td class="px-6 py-4 text-right">
<button class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 text-sm font-medium cursor-not-allowed w-[100px]" disabled="">
<span class="material-symbols-outlined text-[18px]">lock</span>
                                                    Chat
                                                </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Pagination -->
<div class="flex items-center justify-center pt-4 pb-8">
<div class="flex items-center gap-2">
<a class="flex size-9 items-center justify-center rounded-lg border border-[#e7edf3] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" href="#">
<span class="material-symbols-outlined text-[#0d141b] dark:text-white text-lg">chevron_left</span>
</a>
<a class="flex size-9 items-center justify-center rounded-lg bg-primary text-white text-sm font-bold shadow-sm" href="#">1</a>
<a class="flex size-9 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-white text-sm font-medium transition-colors" href="#">2</a>
<a class="flex size-9 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-white text-sm font-medium transition-colors" href="#">3</a>
<span class="flex size-9 items-center justify-center text-gray-400">...</span>
<a class="flex size-9 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-[#0d141b] dark:text-white text-sm font-medium transition-colors" href="#">8</a>
<a class="flex size-9 items-center justify-center rounded-lg border border-[#e7edf3] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" href="#">
<span class="material-symbols-outlined text-[#0d141b] dark:text-white text-lg">chevron_right</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>`;
const EXTRA_CSS = ``;

export default function PanelColaboradorMisCandidaturas() {
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
