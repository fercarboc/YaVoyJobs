import React from 'react';

const TITLE = `YaVoy Admin - Verificaciones`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="bg-white dark:bg-[#1e293b] border-b border-[#e7edf3] dark:border-slate-700 sticky top-0 z-50">
<div class="px-6 md:px-10 py-3 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-8 bg-primary rounded-lg text-white">
<span class="material-symbols-outlined">security</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-tight dark:text-white">YaVoy Admin</h2>
</div>
<!-- Desktop Menu -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Dashboard</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Usuarios</a>
<a class="text-primary text-sm font-bold border-b-2 border-primary pb-0.5" href="#">Verificaciones</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Configuración</a>
</nav>
<div class="flex items-center gap-3">
<button class="flex items-center justify-center size-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button class="flex items-center justify-center size-9 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors">
<span class="material-symbols-outlined text-[20px]">settings</span>
</button>
<div class="size-9 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700 ml-2" data-alt="Admin profile picture showing a professional headshot" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwmlxhcGeTg6WWR-vPqtM9uwvnki7jm2p5r0lRP26ASLkkPoJBxTZPVR0qqxRfJwrqL_S_VPtljwh6H45rAdMd4aQXZOh6bVEr_VS6rMJNXGSP8Y3sSkm_rayVNrv-YmE2AdAx-gNa180fSeg-A7jvVysyuEO7jrcfjqUAavOWWNKPk3BUuXk5feaoUi6etWfoBfpjfNOMp8u7KD6YJbIVGm55C-GRZSPbXuZZgcf1X5OJXtA4hxYMJwLqYRmQSJ6sD1OaFqB7vA");'></div>
</div>
</div>
</header>
<!-- Main Layout -->
<main class="flex-1 px-6 md:px-10 py-8 max-w-[1600px] mx-auto w-full">
<!-- Page Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
<div>
<h1 class="text-3xl font-black text-[#0d141b] dark:text-white tracking-tight mb-2">Verificaciones de Identidad</h1>
<p class="text-[#4c739a] dark:text-slate-400">Gestione y valide las solicitudes de documentación de usuarios.</p>
</div>
<div class="flex gap-3">
<span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
<span class="size-2 rounded-full bg-orange-500 animate-pulse"></span>
                    12 Pendientes
                </span>
</div>
</div>
<!-- Split View Layout -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start h-full">
<!-- Left Column: The Queue (List) -->
<div class="lg:col-span-7 flex flex-col gap-6">
<!-- Filters/Tabs -->
<div class="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 p-1 shadow-sm overflow-x-auto">
<div class="flex min-w-max">
<button class="flex-1 px-4 py-2 text-sm font-bold text-primary bg-primary/10 rounded-lg transition-colors">Pendientes</button>
<button class="flex-1 px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Aprobadas</button>
<button class="flex-1 px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Rechazadas</button>
<button class="flex-1 px-4 py-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors">Todas</button>
</div>
</div>
<!-- Table Container -->
<div class="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Usuario</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Fecha</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Tipo</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Estado</th>
<th class="px-6 py-4 text-right text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Acción</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-700">
<!-- Active Row -->
<tr class="bg-blue-50/50 dark:bg-blue-900/10 group cursor-pointer transition-colors hover:bg-blue-50 dark:hover:bg-blue-900/20 relative">
<td class="px-6 py-4 relative">
<div class="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r"></div>
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-slate-200 flex-shrink-0 bg-cover bg-center" data-alt="Portrait of Juan Perez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnYL1Y3iw3YT9yToHcluZbc0Eb4eyTnDrxFdqCvdWNMpnBVTvmGKx6gBLgSZce9ykuWrKH9_dqwtQQ215SrH2zESRBtS2yHTjOvi3PnmlgMdYJ3Yv033CyVhBddBEBKqu2nlwHGSGKfXP08nt3PKpqIsSnjmXCDsl18oa2ffMtLG-u-gfTz7TMHPBKwnGdc99wPeqOjpRAxd3x-S9Vje4QiOJTIxRiI8MwIP9rWbEOXk0Wt7nC2Jb6ihuONabgEvD9Z4DCj8DRRg");'></div>
<div>
<p class="font-bold text-[#0d141b] dark:text-white text-sm">Juan Pérez</p>
<p class="text-xs text-slate-500 dark:text-slate-400">ID: 839201</p>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">12 Oct, 10:30</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
<span class="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-medium">
<span class="material-symbols-outlined text-[14px]">id_card</span> DNI
                                        </span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                                            Pendiente
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<span class="material-symbols-outlined text-primary text-[20px]">chevron_right</span>
</td>
</tr>
<!-- Other Rows -->
<tr class="bg-white dark:bg-[#1e293b] hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-slate-200 flex-shrink-0 bg-cover bg-center" data-alt="Portrait of Ana Garcia" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXVA9rQ_rpnA_uMqWv45MEVVOiXpFzQe6QcuaINr-5peuLhiu6t9N99QuMCBN4tNkCqLtOYuRbU3iTo4DWkUcs4W9TcyaaahxeCCkmnyedK-73VNwNbhlrwhavA3y_UfE0BzqSlzfAzbrdZ7yZkKaKDKjxcMFzzZ935r_zoRRb4b-TSGHl5n-npX58On6l8X5DJ_6-RxBNryjKkWr5yl2kYrDg-xbmYyGoukRtCBlKNNnhRbhx38P-N1wDto0PXXoX2xl6bc8YPA");'></div>
<div>
<p class="font-bold text-[#0d141b] dark:text-white text-sm">Ana García</p>
<p class="text-xs text-slate-500 dark:text-slate-400">ID: 772109</p>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">12 Oct, 09:15</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
<span class="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-medium">
<span class="material-symbols-outlined text-[14px]">public</span> Pasaporte
                                        </span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                                            Pendiente
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<span class="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
</td>
</tr>
<tr class="bg-white dark:bg-[#1e293b] hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm flex-shrink-0">CR</div>
<div>
<p class="font-bold text-[#0d141b] dark:text-white text-sm">Carlos Ruiz</p>
<p class="text-xs text-slate-500 dark:text-slate-400">ID: 993812</p>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">11 Oct, 18:45</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
<span class="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-medium">
<span class="material-symbols-outlined text-[14px]">badge</span> NIE
                                        </span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700 border border-amber-200">
                                            Pendiente
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<span class="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
</td>
</tr>
<tr class="bg-white dark:bg-[#1e293b] hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-slate-200 flex-shrink-0 bg-cover bg-center" data-alt="Portrait of Lucia Mendez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDV8Y--7_s2-kJHuH93mHbg405LpoiMk63c4SPjsl5v8dgd-S0paRqyvePxct_rlnFtbsDGCJnNxjicr02pperzIPpg8dNUqcue0KN3BSfgBHG1Bvb6Vlm5S5_srwdH6UDBjPm8FxYL41ftP-a4yUpGiEwBclQBCa-Wg5Hyissdrmunwdqy1lJq-25ae0cqufxOEQmJnnqCg1lBEeuRZ68HF02zxxC6w0H4TafqtkNJkU6-WBwZGEuMqn9IBIC09ENsQegCEdf4qg");'></div>
<div>
<p class="font-bold text-[#0d141b] dark:text-white text-sm">Lucía Méndez</p>
<p class="text-xs text-slate-500 dark:text-slate-400">ID: 221093</p>
</div>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">11 Oct, 14:20</td>
<td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
<span class="inline-flex items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-xs font-medium">
<span class="material-symbols-outlined text-[14px]">id_card</span> DNI
                                        </span>
</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200">
                                            Rechazada
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<span class="material-symbols-outlined text-slate-400 text-[20px]">chevron_right</span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination (Visual only) -->
<div class="px-6 py-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50 dark:bg-slate-800">
<span class="text-xs text-slate-500">Mostrando 1-12 de 48</span>
<div class="flex gap-2">
<button class="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 disabled:opacity-50" disabled="">
<span class="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button class="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500">
<span class="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<!-- Right Column: Detail View (Sticky Workbench) -->
<div class="lg:col-span-5 relative">
<div class="sticky top-24 flex flex-col gap-4">
<!-- Detail Card -->
<div class="bg-white dark:bg-[#1e293b] rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden flex flex-col">
<!-- Card Header -->
<div class="p-5 border-b border-slate-100 dark:border-slate-700 flex justify-between items-start">
<div>
<h3 class="text-lg font-bold text-[#0d141b] dark:text-white">Detalle de Solicitud</h3>
<div class="flex items-center gap-2 mt-1">
<p class="text-sm text-slate-500">Juan Pérez</p>
<span class="size-1 rounded-full bg-slate-300"></span>
<p class="text-sm text-slate-500">DNI (España)</p>
</div>
</div>
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined">open_in_new</span>
</button>
</div>
<!-- Image Viewer Workbench -->
<div class="p-5 flex flex-col gap-6">
<!-- Confidentiality Warning -->
<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900 rounded-lg p-3 flex gap-3 items-start">
<span class="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[20px] mt-0.5">lock</span>
<p class="text-xs text-blue-800 dark:text-blue-200 leading-normal">
<strong>Aviso de privacidad:</strong> La documentación mostrada es confidencial y de uso exclusivo para procesos de verificación. No comparta ni descargue estas imágenes sin autorización.
                                </p>
</div>
<div class="grid grid-cols-2 gap-4">
<!-- Selfie Column -->
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<p class="text-xs font-bold uppercase tracking-wide text-slate-500">Selfie</p>
<span class="material-symbols-outlined text-slate-400 text-[16px] cursor-pointer hover:text-primary">zoom_in</span>
</div>
<div class="aspect-[3/4] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 relative group">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Selfie of a young man with a neutral expression against a plain wall" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWfJZlDmUlCqqABtNbqkH_ppZ12cBm_ZpALaGPr8ScF6EXDSEWIJU67rsRCAYVdroJrxUyQwZH7ymxRCu9qJZxbBFP5y3ORo8_sWqDLFjfW0nbn4rRJAEM6sgUlubDDpB4yD9VaB5inQK01Fqj-pIkJ6bAIGl041EzzHxhIwCpr203idvBula3RLeL1lWwnwx_ihJ_-SNZ1H66o5EWa46iin39N94kn0IU_-3FRG8vnmdJ4g0oFRa0aYI4WbDhCLAhQPDhCNhuzw");'>
</div>
<!-- Watermark Overlay -->
<div class="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
<p class="text-white font-black text-xl -rotate-45 select-none">CONFIDENCIAL</p>
</div>
</div>
</div>
<!-- Document Column -->
<div class="flex flex-col gap-2">
<div class="flex justify-between items-center">
<p class="text-xs font-bold uppercase tracking-wide text-slate-500">Documento</p>
<span class="material-symbols-outlined text-slate-400 text-[16px] cursor-pointer hover:text-primary">zoom_in</span>
</div>
<div class="aspect-[3/4] flex flex-col gap-2">
<!-- Front -->
<div class="flex-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 relative group">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Close up of a generic ID card front side" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAIXydefFlvQkOoTMonDo6JwgBYKY6eyRER90Zk05BYNVNVv6uKUJsMLhZ1grM3BUdSU3FAFoeWy8_yXEZTUUTcmaOBYSqZ9seFfJ_WgKPsm08Jip0gzeuVoaPgg0l1PnISg63VP4QdX42eVQI3UkyfOoJkoppr_pGEHyRdvUcBSoxWwo9OmXA4SnTWbSnxc868ez6oV-0Pw74LWrRR_j4XA8t3Tse0LR1MogAuwTS-XEppb6L2_ouIBFHUFNKI3zjJnSbQfoPZ0A");'>
</div>
<div class="absolute bottom-1 right-1 bg-black/50 text-white text-[10px] px-1.5 rounded">Anverso</div>
</div>
<!-- Back -->
<div class="flex-1 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 relative group">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Close up of a generic ID card back side with barcode" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7gjVBU_8YJhq1_atfFe3Woi0J56YW-lO5q9qmJkTEBQLlMos4nYCbA75sKk-dt4xhouFuUcuwYPOOX-rOcTWLavakcJ9hQWQbSzKucxGegXaMHqFiLcpAxYtT1o004CXeAcnSzO0_lgzpU4ob8VKecFaF7pSnzNQbW9IbpjxeGDLYkdzmAUtvcFYS-d1Xexh_MaiG5V8Gt4ERcqqwkmWgmW659ZQy5nSKEh9OOl4NZzz3htzoYnxTHJ6fvVKzg6_5AT24QFsNXA");'>
</div>
<div class="absolute bottom-1 right-1 bg-black/50 text-white text-[10px] px-1.5 rounded">Reverso</div>
</div>
</div>
</div>
</div>
<!-- Metadata Grid -->
<div class="grid grid-cols-2 gap-4 text-sm border-t border-slate-100 dark:border-slate-700 pt-4">
<div>
<p class="text-xs text-slate-400">Nombre Completo</p>
<p class="font-medium dark:text-slate-200">Juan Pérez Álvarez</p>
</div>
<div>
<p class="text-xs text-slate-400">Fecha Nacimiento</p>
<p class="font-medium dark:text-slate-200">14 Mar 1988</p>
</div>
<div>
<p class="text-xs text-slate-400">Número Documento</p>
<p class="font-medium dark:text-slate-200">48291029K</p>
</div>
<div>
<p class="text-xs text-slate-400">Expiración</p>
<p class="font-medium dark:text-slate-200">12 Ago 2028</p>
</div>
</div>
</div>
<!-- Action Bar -->
<div class="p-5 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3">
<button class="w-full h-11 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold shadow-sm transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[20px]">check_circle</span>
                                Aprobar Verificación
                            </button>
<div class="flex gap-3">
<button class="flex-1 h-10 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 rounded-lg font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[18px]">autorenew</span>
                                    Pedir Nuevos Docs
                                </button>
<button class="flex-1 h-10 bg-white dark:bg-slate-700 border border-red-200 dark:border-red-900 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[18px]">cancel</span>
                                    Rechazar
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>`;
const EXTRA_CSS = ``;

export default function AdminVerificaciones() {
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
