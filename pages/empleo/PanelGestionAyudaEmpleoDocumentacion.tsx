import React from 'react';

const TITLE = `Panel Gestión Ayuda/Empleo - Documentación | YaVoy`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 shadow-sm md:px-10">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="flex items-center justify-center rounded-lg bg-primary p-2 text-white">
<span class="material-symbols-outlined">handshake</span>
</div>
<h2 class="text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<nav class="hidden flex-1 justify-end gap-8 md:flex">
<div class="flex items-center gap-6">
<a class="text-sm font-medium leading-normal text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">Inicio</a>
<a class="text-sm font-medium leading-normal text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">Buscar Ayuda</a>
<a class="text-sm font-medium leading-normal text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">Publicar Anuncio</a>
<a class="text-sm font-bold leading-normal text-primary" href="#">Gestión</a>
<a class="text-sm font-medium leading-normal text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary" href="#">Ayuda</a>
</div>
<div class="flex items-center gap-3 border-l border-slate-200 dark:border-slate-700 pl-6">
<div class="flex flex-col items-end">
<span class="text-xs font-semibold">Laura M.</span>
<span class="text-[10px] text-slate-500 dark:text-slate-400">Verificado</span>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="User profile picture showing a smiling woman" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDt8aFuSEVJJwMSErnSWmgs0_0bRNhCGAhnp5zY8FpaUtj02d-i6BQm6Ot8krdi0d9ak-WPZZdzDVfMiZJmM0V9Dg5LA31xTVZjm2rCAzOwZ9WJjD9wdB2-JiEj8ysS9rds7gXTOUSNzr8Aeg6aHY9qGNyJqynwoY-34BLsOEju-tOS9p5_pux13shWUC-xhS7g7aCATmoMMfdvqIQquv-uShFj0-lvngIhAA4gKA3reWsCRkb7e48rDj0g8OiIGzifq_TTHAJY5A");'>
</div>
</div>
</nav>
<!-- Mobile Menu Button -->
<button class="md:hidden p-2 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<div class="layout-container flex h-full grow flex-col">
<div class="flex flex-1 justify-center py-8 px-4 md:px-10 lg:px-40">
<div class="layout-content-container flex flex-col max-w-[1024px] flex-1 gap-6">
<!-- Breadcrumbs -->
<nav class="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary transition-colors" href="#">Inicio</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<a class="hover:text-primary transition-colors" href="#">Panel de Gestión</a>
<span class="material-symbols-outlined text-[16px]">chevron_right</span>
<span class="font-semibold text-slate-900 dark:text-white">Documentación</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col gap-2">
<h1 class="text-3xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white md:text-4xl">
                            Gestión de Documentación
                        </h1>
<p class="text-base font-normal leading-normal text-slate-600 dark:text-slate-400 max-w-2xl">
                            Intercambio voluntario de certificados y documentos identificativos para aumentar la confianza en tus candidaturas o solicitudes.
                        </p>
</div>
<!-- MetaText / Disclaimer -->
<div class="flex items-start gap-3 rounded-lg border-l-4 border-primary bg-primary/10 p-4 dark:bg-primary/20">
<span class="material-symbols-outlined text-primary shrink-0">info</span>
<div class="flex flex-col gap-1">
<p class="text-sm font-bold text-slate-900 dark:text-white">Aviso de Privacidad</p>
<p class="text-sm text-slate-700 dark:text-slate-300">
                                YaVoy no valida la autenticidad ni conserva documentación más allá de lo estrictamente necesario para la gestión del servicio. 
                                Todos los archivos se eliminan automáticamente tras finalizar el acuerdo o pasados 30 días.
                            </p>
</div>
</div>
<!-- Stats Overview -->
<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
<div class="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Estado de Cuenta</p>
<span class="material-symbols-outlined text-yellow-500">pending</span>
</div>
<p class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Pendiente</p>
<div class="w-full bg-slate-100 rounded-full h-1.5 dark:bg-slate-800 mt-2">
<div class="bg-yellow-500 h-1.5 rounded-full" style="width: 45%"></div>
</div>
</div>
<div class="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Archivos Subidos</p>
<span class="material-symbols-outlined text-primary">folder</span>
</div>
<p class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">2 <span class="text-sm font-normal text-slate-400">/ 5 máx</span></p>
</div>
<div class="flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
<div class="flex items-center justify-between">
<p class="text-sm font-medium text-slate-500 dark:text-slate-400">Verificación Identidad</p>
<span class="material-symbols-outlined text-slate-400">shield</span>
</div>
<p class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">No iniciada</p>
</div>
</div>
<!-- Layout: Upload Zone & File List -->
<div class="mt-4 grid grid-cols-1 gap-8 lg:grid-cols-3">
<!-- Left Column: Upload Zone -->
<div class="lg:col-span-1">
<h3 class="mb-4 text-lg font-bold text-slate-900 dark:text-white">Subir nuevo documento</h3>
<div class="group relative flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center transition-all hover:border-primary hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-900/50 dark:hover:border-primary dark:hover:bg-slate-800">
<div class="rounded-full bg-white p-4 shadow-sm ring-1 ring-slate-100 dark:bg-slate-800 dark:ring-slate-700">
<span class="material-symbols-outlined text-4xl text-primary">cloud_upload</span>
</div>
<div class="flex flex-col gap-1">
<p class="text-sm font-semibold text-slate-900 dark:text-white">Haz clic o arrastra archivos aquí</p>
<p class="text-xs text-slate-500 dark:text-slate-400">PDF, JPG o PNG (Máx 5MB)</p>
</div>
<button class="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900">
                                    Seleccionar Archivo
                                </button>
</div>
<!-- Security Badge -->
<div class="mt-6 flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
<span class="material-symbols-outlined text-green-600">lock</span>
<div>
<p class="text-xs font-bold text-slate-900 dark:text-white">Transferencia Segura</p>
<p class="text-[10px] text-slate-500 dark:text-slate-400">Encriptación SSL de 256-bit</p>
</div>
</div>
</div>
<!-- Right Column: Document List -->
<div class="flex flex-col lg:col-span-2">
<div class="mb-4 flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Documentos actuales</h3>
<button class="text-sm font-medium text-primary hover:underline">Historial</button>
</div>
<div class="flex flex-col gap-3">
<!-- Document Item 1 -->
<div class="flex flex-col items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center">
<div class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-red-900/20">
<span class="material-symbols-outlined">picture_as_pdf</span>
</div>
<div class="flex flex-1 flex-col gap-1">
<p class="text-sm font-bold text-slate-900 dark:text-white">Curriculum_Vitae_2023.pdf</p>
<div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
<span>2.4 MB</span>
<span>•</span>
<span>Subido el 15 oct 2023</span>
</div>
</div>
<div class="flex items-center gap-2">
<span class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
<span class="mr-1 h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                            Verificado
                                        </span>
</div>
<div class="flex gap-2 self-end sm:self-auto">
<button class="rounded p-2 text-slate-400 hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800" title="Ver documento">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="rounded p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20" title="Eliminar documento">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
<!-- Document Item 2 -->
<div class="flex flex-col items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center">
<div class="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-900/20">
<span class="material-symbols-outlined">image</span>
</div>
<div class="flex flex-1 flex-col gap-1">
<p class="text-sm font-bold text-slate-900 dark:text-white">DNI_Anverso.jpg</p>
<div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
<span>1.8 MB</span>
<span>•</span>
<span>Subido hace 2 horas</span>
</div>
</div>
<div class="flex items-center gap-2">
<span class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
<span class="mr-1 h-1.5 w-1.5 rounded-full bg-yellow-600 animate-pulse"></span>
                                            En Revisión
                                        </span>
</div>
<div class="flex gap-2 self-end sm:self-auto">
<button class="rounded p-2 text-slate-400 hover:bg-slate-100 hover:text-primary dark:hover:bg-slate-800" title="Ver documento">
<span class="material-symbols-outlined text-[20px]">visibility</span>
</button>
<button class="rounded p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20" title="Eliminar documento">
<span class="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>
<!-- Empty Slot Placeholder -->
<div class="flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
<p class="text-sm text-slate-400 dark:text-slate-500">Espacio disponible para más documentos</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`;
const EXTRA_CSS = ``;

export default function PanelGestionAyudaEmpleoDocumentacion() {
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
