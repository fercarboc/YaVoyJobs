import React from 'react';

const TITLE = `Panel Anunciante - Documentación | YaVoy`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark bg-white dark:bg-surface-dark px-10 py-3 shadow-sm">
<div class="flex items-center gap-4 text-text-main dark:text-white">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-text-main dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-8 items-center">
<nav class="hidden md:flex items-center gap-9">
<a class="text-text-main dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-text-main dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Buscar piso</a>
<a class="text-text-main dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Publicar anuncio</a>
<a class="text-text-main dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Ayuda</a>
</nav>
<div class="flex items-center gap-4">
<button class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary hover:bg-primary-dark text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm">
<span class="truncate">Mi Cuenta</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-gray-700 shadow-sm" data-alt="User profile avatar showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoKnXVO4psKYiC81EOf4oB30a_x_ur35yb_jHk6IdVcCjm_Voni2ec3vOHiEgDJwelWB5X9t-JM332elJzNzd-vQCeWPplRSD9HiGGkoTCdO3oaHfVQEGpxyjaMPQBpQlLwPjpapDG5ZP8fsfnKuvhpLXY_ghju9kWFyRTffhHSxsM1_LnVH43Eb4a8P-qlBHYeh5sG3kMaurQV4pVWf3GeS2n4qnAFOu0aHEGjMpEAoQP2vdmivqhWb4_h9g1yRmTuANtANm6HA");'></div>
</div>
</div>
</header>
<main class="flex-1 flex justify-center py-8 px-4 sm:px-10 lg:px-20">
<div class="layout-content-container flex flex-col max-w-[1200px] flex-1 gap-6">
<!-- Breadcrumbs -->
<nav class="flex flex-wrap gap-2 text-sm">
<a class="text-text-secondary dark:text-gray-400 font-medium hover:text-primary transition-colors" href="#">Inicio</a>
<span class="text-text-secondary dark:text-gray-500">/</span>
<a class="text-text-secondary dark:text-gray-400 font-medium hover:text-primary transition-colors" href="#">Panel</a>
<span class="text-text-secondary dark:text-gray-500">/</span>
<span class="text-text-main dark:text-white font-semibold">Documentación</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div class="flex flex-col gap-2">
<h1 class="text-text-main dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Gestión de Documentos</h1>
<p class="text-text-secondary dark:text-gray-400 text-base md:text-lg">Repositorio seguro para el intercambio de documentos con inquilinos interesados.</p>
</div>
</div>
<!-- Disclaimer Banner -->
<div class="flex items-start gap-4 rounded-lg border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700/50 p-4 shadow-sm">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-500 mt-0.5">warning</span>
<div class="flex flex-col gap-1">
<h3 class="text-amber-900 dark:text-amber-100 text-sm font-bold">Aviso Importante</h3>
<p class="text-amber-800 dark:text-amber-200/80 text-sm">
                            YaVoy no revisa ni valida la documentación compartida. El intercambio y verificación de la veracidad es responsabilidad exclusiva de los usuarios.
                        </p>
</div>
</div>
<!-- Action Toolbar -->
<div class="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-surface-dark p-4 rounded-xl border border-border-light dark:border-border-dark shadow-sm">
<div class="flex w-full md:w-auto gap-3 flex-1">
<!-- Search -->
<div class="relative flex-1 md:max-w-xs">
<span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 material-symbols-outlined text-[20px]">search</span>
<input class="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400" placeholder="Buscar por nombre..." type="text"/>
</div>
<!-- Filter Dropdown -->
<div class="relative hidden sm:block">
<select class="appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-main dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer">
<option>Todos los documentos</option>
<option>DNI / Pasaporte</option>
<option>Solvencia Económica</option>
</select>
<span class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none material-symbols-outlined text-[20px]">expand_more</span>
</div>
</div>
<button class="w-full md:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md transition-all hover:shadow-lg active:scale-95">
<span class="material-symbols-outlined text-[20px]">add_link</span>
<span>Solicitar documentación</span>
</button>
</div>
<!-- Document Table -->
<div class="overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-surface-dark shadow-sm">
<div class="overflow-x-auto">
<table class="w-full text-left text-sm">
<thead class="bg-gray-50 dark:bg-gray-800/50 text-text-secondary dark:text-gray-400 border-b border-border-light dark:border-border-dark">
<tr>
<th class="px-6 py-4 font-semibold">Usuario Interesado</th>
<th class="px-6 py-4 font-semibold">Tipo de Documento</th>
<th class="px-6 py-4 font-semibold">Recibido</th>
<th class="px-6 py-4 font-semibold">Estado</th>
<th class="px-6 py-4 font-semibold text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-border-light dark:divide-border-dark">
<!-- Row 1 -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-9 rounded-full bg-cover bg-center" data-alt="Portrait of Juan Perez" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuACrJd7JFsm9S4viITYfbIqFZ5L-sJKzZ3yEBn4zNtDwWsDkBVaI4oPVhQdK9oYhn4-EAIs1zSJV8jtFRp_pbsbC4NP4SxCkMle_XRFvl1Cqvb607UpdQt9GkekSfOF_J13t5UTEIXuwcetVtPN9AaQcv9ClvCMGbEOPcroaeh1YEqcJVgl8qtSpc8BP1qrah3MPPrlOqsePPC2D-MWEeR7XX1b7Lk7GYJLXDFkY7w0cJ0jvCL8iNrSKAQqshCkBlWlW723ibsmMg');"></div>
<div class="flex flex-col">
<span class="font-medium text-text-main dark:text-white">Juan Pérez</span>
<span class="text-xs text-text-secondary dark:text-gray-500">Ref: Piso Centro #2401</span>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-blue-500">badge</span>
<span class="text-text-main dark:text-gray-200">DNI / NIE</span>
</div>
</td>
<td class="px-6 py-4 text-text-secondary dark:text-gray-400">Hace 2 horas</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 px-2.5 py-1 text-xs font-semibold text-amber-700 dark:text-amber-400">
<span class="size-1.5 rounded-full bg-amber-500"></span>
                                            Pendiente
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors rounded-lg hover:bg-primary/10" title="Ver documento">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors rounded-lg hover:bg-primary/10" title="Descargar">
<span class="material-symbols-outlined text-[20px]">download</span>
</button>
<button class="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20" title="Eliminar">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-9 rounded-full bg-cover bg-center" data-alt="Portrait of Maria Garcia" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2lGAOBQg3V2Sv7mtdz1KXORkkBftdspoNggHBXuhVXq-DnuXuhk7V22dX3z__ZVuYtORZUhuOUBi0B1cIxYZr-K9-L7dxtfmjyrozpEm_pOSXM-hQ-tziwL8N5PBe5P6SWxYL6IMl3tpl7Bintl1XoTAd8vmVw8gq1EC1AIV3AjovXHpE2K2JqltqL2BJTSyouhq-nd8S1kvhpaGHAR0NvD_WmSev5Mq5ahDtLtBfZg1LGYemn1OHTAx5I3RJKFFUneLzxNzwmQ');"></div>
<div class="flex flex-col">
<span class="font-medium text-text-main dark:text-white">María García</span>
<span class="text-xs text-text-secondary dark:text-gray-500">Ref: Loft Ático #3002</span>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-green-600">payments</span>
<span class="text-text-main dark:text-gray-200">Justificante Solvencia</span>
</div>
</td>
<td class="px-6 py-4 text-text-secondary dark:text-gray-400">Ayer, 18:30</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
<span class="size-1.5 rounded-full bg-green-500"></span>
                                            Revisado
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors rounded-lg hover:bg-primary/10" title="Ver documento">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors rounded-lg hover:bg-primary/10" title="Descargar">
<span class="material-symbols-outlined text-[20px]">download</span>
</button>
<button class="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20" title="Eliminar">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="group hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold text-xs">
                                                CR
                                            </div>
<div class="flex flex-col">
<span class="font-medium text-text-main dark:text-white">Carlos Rodriguez</span>
<span class="text-xs text-text-secondary dark:text-gray-500">Ref: Piso Centro #2401</span>
</div>
</div>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-blue-500">badge</span>
<span class="text-text-main dark:text-gray-200">DNI / NIE</span>
</div>
</td>
<td class="px-6 py-4 text-text-secondary dark:text-gray-400">12 Oct 2023</td>
<td class="px-6 py-4">
<span class="inline-flex items-center gap-1.5 rounded-full bg-green-100 dark:bg-green-900/30 px-2.5 py-1 text-xs font-semibold text-green-700 dark:text-green-400">
<span class="size-1.5 rounded-full bg-green-500"></span>
                                            Revisado
                                        </span>
</td>
<td class="px-6 py-4 text-right">
<div class="flex items-center justify-end gap-2">
<button class="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors rounded-lg hover:bg-primary/10" title="Ver documento">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="p-2 text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors rounded-lg hover:bg-primary/10" title="Descargar">
<span class="material-symbols-outlined text-[20px]">download</span>
</button>
<button class="p-2 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20" title="Eliminar">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Pagination / Footer of table -->
<div class="flex items-center justify-between px-6 py-4 border-t border-border-light dark:border-border-dark bg-gray-50/50 dark:bg-surface-dark">
<span class="text-sm text-text-secondary dark:text-gray-400">Mostrando 3 de 3 documentos</span>
<div class="flex gap-2">
<button class="px-3 py-1.5 rounded border border-border-light dark:border-border-dark text-sm font-medium text-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50" disabled="">Anterior</button>
<button class="px-3 py-1.5 rounded border border-border-light dark:border-border-dark text-sm font-medium text-text-secondary dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50" disabled="">Siguiente</button>
</div>
</div>
</div>
<!-- Footer / GDPR Note -->
<div class="mt-4 flex flex-col items-center gap-2 text-center text-xs text-text-secondary dark:text-gray-500">
<div class="flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px]">lock</span>
<span>Toda la información está encriptada y segura.</span>
</div>
<p class="max-w-2xl">
                        De conformidad con el Reglamento General de Protección de Datos (RGPD), asegúrate de tratar la documentación descargada con la máxima confidencialidad y eliminarla cuando ya no sea necesaria para la finalidad del alquiler.
                    </p>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function PanelAnuncianteDocumentacion() {
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
