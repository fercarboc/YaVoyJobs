import React from 'react';

const TITLE = `Panel Proveedor - YaVoy`;
const BODY_HTML = `<div class="flex h-screen w-full">
<!-- Sidebar Navigation (Desktop) -->
<aside class="hidden w-64 flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 lg:flex">
<div class="flex h-16 items-center border-b border-slate-200 dark:border-slate-800 px-6">
<div class="flex items-center gap-2 text-primary">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
<h2 class="text-xl font-black tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
</div>
<div class="flex flex-1 flex-col justify-between overflow-y-auto p-4">
<nav class="space-y-1">
<div class="mb-6 flex items-center gap-3 px-3 py-2">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="Portrait of a business owner looking professional" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCQmsUaoyN3ifLIazhV1QDN7FCrSTwK_Va1vHk2rEb-D4G3k13kRhFyn0nyxPDFbKIbKHrxh10sczKrGfqUCRtPuOgQsbFmt99U_0LUEfGV_u9GrAUCeRG1IL5l5VBbuJND7UajpLWxcCnY3lRBLdJ6kL9d7HU6gcQMkJeSqQ2GnvVPPaoG-1OWqRrIAUb9j9N0zDFNy8xxgL6BhVRDjmm9rjij4RlItPrzDfXJ-ofd1cczMT37Yerrxpqbqw6NfBb9Tx9U-BIOrA");'></div>
<div>
<p class="text-sm font-bold leading-none text-slate-900 dark:text-white">ElectroHogar S.L.</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Panel Proveedor</p>
</div>
</div>
<a class="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">home</span>
<span class="text-sm font-medium">Inicio</span>
</a>
<a class="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">inventory_2</span>
<span class="text-sm font-medium">Pedidos</span>
</a>
<a class="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2 text-primary dark:text-blue-400" href="#">
<span class="material-symbols-outlined fill">description</span>
<span class="text-sm font-bold">Documentación</span>
</a>
<a class="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="#">
<span class="material-symbols-outlined">person</span>
<span class="text-sm font-medium">Perfil</span>
</a>
</nav>
<div class="rounded-lg bg-slate-50 dark:bg-slate-800/50 p-4">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-slate-400">help</span>
<div>
<p class="text-xs font-semibold text-slate-900 dark:text-white">¿Necesitas ayuda?</p>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Contacta con soporte proveedores.</p>
</div>
</div>
</div>
</div>
</aside>
<!-- Main Content Area -->
<div class="flex h-full flex-1 flex-col overflow-hidden relative bg-background-light dark:bg-background-dark">
<!-- Top Navbar (Mobile/Desktop content) -->
<header class="flex h-16 flex-shrink-0 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 lg:px-8">
<div class="flex items-center gap-4 lg:hidden">
<button class="text-slate-500">
<span class="material-symbols-outlined">menu</span>
</button>
<span class="font-bold text-slate-900 dark:text-white">YaVoy</span>
</div>
<!-- Spacer for desktop alignment -->
<div class="hidden lg:block"></div>
<div class="flex items-center gap-4">
<button class="flex size-10 items-center justify-center rounded-full bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors relative">
<span class="material-symbols-outlined" style="font-size: 20px;">notifications</span>
<span class="absolute top-2 right-2 size-2 rounded-full bg-red-500 border-2 border-white dark:border-slate-800"></span>
</button>
<div class="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
<button class="flex items-center gap-2">
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" data-alt="User avatar thumbnail" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbocSYI13jVjTyhcypI5b21WK-LHaFQUgjqYiWV6fyHGnXnSMrTBHS9mt2rhU-Y8t5iGZUAFSwjBjXvsL6yF9ZRNnwjfkRctf1jaBcx1GR6BbzilTMXX71BWm5oYXpcblO4fdGP5ilZ6DWya1VbGXnbMswFSSIKIoLT8Ckbo9kOOiZ67GFIKOKmMrMa4HaMASc6O4FyMDe6pzqZT7pm_deha-AzEih-VuB4-DmRJIUHqCdfOMfdL2i3UBQLXcUFgfNzWqk_oFUDw");'></div>
<span class="material-symbols-outlined text-slate-400">expand_more</span>
</button>
</div>
</header>
<!-- Scrollable Page Content -->
<main class="flex-1 overflow-y-auto p-4 lg:p-10">
<div class="mx-auto max-w-5xl flex flex-col gap-8 pb-10">
<!-- Page Heading -->
<div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
<div>
<h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">Documentación y Verificación</h1>
<p class="mt-2 text-slate-500 dark:text-slate-400">Gestione la documentación legal de su negocio para operar en el marketplace.</p>
</div>
<div class="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 dark:border-red-900/30 dark:bg-red-900/20">
<span class="material-symbols-outlined text-[18px] text-red-600 dark:text-red-400">gpp_bad</span>
<span class="text-sm font-bold text-red-700 dark:text-red-300">No verificado</span>
</div>
</div>
<!-- Privacy Notice Banner -->
<div class="rounded-xl border border-blue-100 bg-blue-50/50 p-4 dark:border-blue-900/30 dark:bg-blue-900/10">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-0.5">lock</span>
<div>
<h3 class="font-bold text-slate-900 dark:text-white">Privacidad de Documentos</h3>
<p class="text-sm text-slate-600 dark:text-slate-300 mt-1">La documentación no es pública y se usa solo para verificación interna por parte del equipo de cumplimiento de YaVoy.</p>
</div>
</div>
</div>
<!-- Upload Cards Grid -->
<div class="grid gap-6 lg:grid-cols-1">
<!-- Card 1: CIF/NIF -->
<div class="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800 md:flex-row">
<div class="flex flex-1 flex-col justify-between p-6">
<div>
<div class="flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Identificación Fiscal (CIF/NIF)</h3>
<span class="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">Requerido</span>
</div>
<p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Suba una copia legible de su Tarjeta de Identificación Fiscal. Formato PDF o JPG. Máx 5MB.</p>
</div>
<div class="mt-6 flex flex-wrap items-center gap-4">
<button class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-[20px]">upload_file</span>
                                        Subir archivo
                                    </button>
<span class="text-xs text-slate-400">No se ha seleccionado ningún archivo</span>
</div>
</div>
<div class="relative min-h-[160px] w-full bg-slate-100 dark:bg-slate-700 md:w-64 md:min-h-full">
<div class="absolute inset-0 bg-cover bg-center opacity-80" data-alt="Abstract document illustration representing tax forms" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6zJ7kbJ71RZ7b9VJ9ktJ9el92Umbef9f_BZkekdnl8DJEQaecrT6HMnONOwPHPlB4A_t51b8orqXmCNlziENXGUlQ2V9THptS4Mt4Z6wkpkuclBBumZ5L1_gYo1SQjBcahd-lgzc0mDu-H7ObO31jxlOjC-h2fR8IXCXaeQ5AofttZGfweJ96Ev99-Jc44tV2xEdhcnv8nNFWiYUCg9Idhfp0-tOTTrogmkl2PI343usqhGZ1pNWeS4gSs0BDhl78IL5pyIvlMg");'></div>
<div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent dark:from-slate-800 md:bg-gradient-to-l"></div>
</div>
</div>
<!-- Card 2: Escrituras -->
<div class="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-slate-700 dark:bg-slate-800 md:flex-row">
<div class="flex flex-1 flex-col justify-between p-6">
<div>
<div class="flex items-center justify-between">
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Escrituras de la Empresa</h3>
<span class="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 dark:bg-slate-700 dark:text-slate-400">Opcional</span>
</div>
<p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Documento notarial de constitución de la sociedad. Necesario para obtener la insignia de "Proveedor Verificado Plus".</p>
</div>
<div class="mt-6 flex flex-wrap items-center gap-4">
<button class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-bold text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600 transition-colors">
<span class="material-symbols-outlined text-[20px]">upload_file</span>
                                        Subir archivo
                                    </button>
<span class="text-xs text-slate-400">No se ha seleccionado ningún archivo</span>
</div>
</div>
<div class="relative min-h-[160px] w-full bg-slate-100 dark:bg-slate-700 md:w-64 md:min-h-full">
<div class="absolute inset-0 bg-cover bg-center opacity-80" data-alt="Abstract legal document background pattern" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwK8z7IHnpvdKftuL6Xi4UnjupAfU-HIGSARbNbrSjeN7kPzTgjpq_FXySGx5tzCGRDxr8fdfQl1hfEUJGzr9B9U_iT3fEpLm7ipOJUHf8iUmd6gh4imSg4xGvHE3F5A_fAhuMS9EK8Qims4Npz8ussMSQ7lbZXXcjpN8_rPZZmzIy-w6CNvFDsmcKrVyb5Cjh6kF2q4SU8i353QWcbWgqmxcDDwBP3c5Ik8wky4_5JPjT2jTeJ_ZINFik1CMTiWBHI2woDZs4Lw");'></div>
<div class="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent dark:from-slate-800 md:bg-gradient-to-l"></div>
</div>
</div>
</div>
<!-- Action Area -->
<div class="flex flex-col items-center justify-center gap-4 py-6">
<button class="flex w-full max-w-sm items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
<span class="material-symbols-outlined">send</span>
                            Solicitar Verificación
                        </button>
<p class="text-xs text-slate-400 text-center max-w-md">Al hacer clic, sus documentos serán enviados a nuestro equipo de revisión legal. El proceso suele tardar entre 24-48 horas.</p>
</div>
<hr class="border-slate-200 dark:border-slate-800"/>
<!-- Legal Disclaimer Footer Module -->
<div class="rounded-xl bg-slate-100 p-6 dark:bg-slate-800/50">
<div class="flex items-center gap-2 mb-4 text-slate-400">
<span class="material-symbols-outlined text-sm">info</span>
<p class="text-xs font-bold uppercase tracking-wider">Aviso Legal Importante</p>
</div>
<div class="grid gap-6 md:grid-cols-3">
<div class="flex flex-col gap-2">
<span class="material-symbols-outlined text-slate-400">hub</span>
<p class="text-xs font-medium text-slate-700 dark:text-slate-300">YaVoy actúa como plataforma de intermediación digital.</p>
<p class="text-[10px] text-slate-500 leading-relaxed">Proveemos la tecnología para conectar vendedores y compradores, sin ser parte del contrato de compraventa.</p>
</div>
<div class="flex flex-col gap-2">
<span class="material-symbols-outlined text-slate-400">handshake</span>
<p class="text-xs font-medium text-slate-700 dark:text-slate-300">La venta se realiza directamente entre proveedor y cliente.</p>
<p class="text-[10px] text-slate-500 leading-relaxed">Usted es el vendedor registrado y quien emite la factura final al consumidor.</p>
</div>
<div class="flex flex-col gap-2">
<span class="material-symbols-outlined text-slate-400">gavel</span>
<p class="text-xs font-medium text-slate-700 dark:text-slate-300">El proveedor es responsable del producto y cumplimiento legal.</p>
<p class="text-[10px] text-slate-500 leading-relaxed">Incluyendo garantías, devoluciones y conformidad con la normativa de consumo vigente.</p>
</div>
</div>
</div>
</div>
</main>
</div>
</div>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`;

export default function PanelProveedorDocVerificacion() {
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
