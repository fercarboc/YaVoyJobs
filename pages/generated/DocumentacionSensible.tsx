import React from 'react';

const TITLE = `YaVoy - Verificación de Documentación`;
const BODY_HTML = `<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Header -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-slate-800 bg-white dark:bg-[#1a2632] px-10 py-3 sticky top-0 z-50">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-8 hidden md:flex">
<div class="flex items-center gap-9">
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Servicios</a>
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Sobre nosotros</a>
<a class="text-[#0d141b] dark:text-slate-300 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Contacto</a>
</div>
<button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 transition-colors">
<span class="truncate">Mi Cuenta</span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-slate-200 dark:border-slate-700" data-alt="Avatar de usuario con fondo abstracto" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCu7AR_SmN58l5YOAI0x9KY_hpwEPJlN-XthCkLshJFEyYrnmfYn9BuSsWa3NcYH27iUzMqj5QY7TbMxoN2qg-CV-G8kes8ZNPyuR8W-UF-oIp917H3xhwyNRy90vmrNVwNTIp_TNI8B52biKwF4-R_i7gdEr63rLBMwqV167_Rsd2b3hm6KAaocilm6YAW-d0AK6zfYvQtDQ3yUtLOuJsjvavtb1b3NfajjBxcKDfNzx-uUicJjc0EDZOLm1u3z1d1zIi9_pvIXg");'></div>
</div>
<!-- Mobile Menu Icon -->
<button class="md:hidden text-[#0d141b] dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 md:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1 w-full">
<!-- Breadcrumbs -->
<div class="flex flex-wrap gap-2 px-4 py-2">
<a class="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal hover:underline" href="#">Mi Perfil</a>
<span class="text-[#4c739a] dark:text-slate-400 text-sm font-medium leading-normal">/</span>
<span class="text-[#0d141b] dark:text-white text-sm font-medium leading-normal">Verificación</span>
</div>
<!-- Page Heading -->
<div class="flex flex-wrap justify-between gap-3 px-4 pt-4 pb-6">
<div class="flex min-w-72 flex-col gap-3">
<h1 class="text-[#0d141b] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Verificación de Documentación</h1>
<p class="text-[#4c739a] dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">Sube los documentos necesarios para validar tu identidad en la plataforma. Este paso es necesario para garantizar la seguridad de todos los usuarios.</p>
</div>
</div>
<!-- Privacy Notice (Critical Flow Exception) -->
<div class="px-4 pb-8">
<div class="flex gap-4 p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl items-start">
<div class="flex-shrink-0 text-primary pt-0.5">
<span class="material-symbols-outlined filled">lock</span>
</div>
<div class="flex flex-1 flex-col gap-1">
<p class="text-[#0d141b] dark:text-blue-100 text-base font-bold leading-tight">Privacidad y Seguridad</p>
<p class="text-[#0d141b] dark:text-slate-300 text-sm md:text-base font-normal leading-normal">
                                    La documentación es opcional y no será visible públicamente. Solo el equipo de administración de YaVoy tiene acceso para fines de verificación.
                                </p>
</div>
</div>
</div>
<!-- Main Content Card -->
<div class="mx-4 bg-white dark:bg-[#1a2632] rounded-2xl border border-[#e7edf3] dark:border-slate-800 shadow-sm overflow-hidden mb-10">
<!-- Section Header: DNI/NIE -->
<div class="px-6 pt-6 pb-2">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-400">badge</span>
<h2 class="text-[#0d141b] dark:text-white text-[20px] font-bold leading-tight tracking-[-0.015em]">Documento de Identidad (DNI/NIE)</h2>
</div>
<p class="text-slate-500 dark:text-slate-400 text-sm mt-1 pl-9">Necesitamos una copia legible de ambas caras de tu documento.</p>
</div>
<!-- Upload Area: Front -->
<div class="p-6 grid gap-6 md:grid-cols-2">
<!-- Front Side -->
<div class="flex flex-col gap-3">
<label class="text-sm font-semibold text-[#0d141b] dark:text-slate-200">Cara Frontal</label>
<div class="group relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:border-primary dark:hover:border-primary transition-all cursor-pointer">
<div class="flex flex-col items-center justify-center pt-5 pb-6">
<div class="mb-3 p-3 rounded-full bg-white dark:bg-slate-700 shadow-sm group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-2xl">cloud_upload</span>
</div>
<p class="mb-1 text-sm text-slate-500 dark:text-slate-400"><span class="font-semibold text-primary">Haz clic para subir</span> o arrastra</p>
<p class="text-xs text-slate-400 dark:text-slate-500">SVG, PNG, JPG (MAX. 5MB)</p>
</div>
<input class="hidden" type="file"/>
</div>
</div>
<!-- Back Side -->
<div class="flex flex-col gap-3">
<label class="text-sm font-semibold text-[#0d141b] dark:text-slate-200">Cara Trasera</label>
<div class="group relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 hover:border-primary dark:hover:border-primary transition-all cursor-pointer">
<div class="flex flex-col items-center justify-center pt-5 pb-6">
<div class="mb-3 p-3 rounded-full bg-white dark:bg-slate-700 shadow-sm group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined text-primary text-2xl">cloud_upload</span>
</div>
<p class="mb-1 text-sm text-slate-500 dark:text-slate-400"><span class="font-semibold text-primary">Haz clic para subir</span> o arrastra</p>
<p class="text-xs text-slate-400 dark:text-slate-500">SVG, PNG, JPG (MAX. 5MB)</p>
</div>
<input class="hidden" type="file"/>
</div>
</div>
</div>
<!-- Divider -->
<div class="h-px bg-[#e7edf3] dark:bg-slate-800 mx-6"></div>
<!-- Additional File Type: Driver's License (Optional example) -->
<div class="px-6 pt-6 pb-2">
<div class="flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-slate-400">directions_car</span>
<div>
<h2 class="text-[#0d141b] dark:text-white text-[18px] font-bold leading-tight tracking-[-0.015em]">Permiso de Conducir</h2>
<p class="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Opcional para verificación de conductor.</p>
</div>
</div>
<button class="text-primary text-sm font-medium hover:underline flex items-center gap-1">
<span class="material-symbols-outlined text-lg">add</span> Añadir
                                </button>
</div>
</div>
<div class="p-6 pb-8">
<!-- Example of an uploaded file state -->
<div class="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
<div class="flex items-center gap-3">
<div class="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-2 rounded">
<span class="material-symbols-outlined text-xl">picture_as_pdf</span>
</div>
<div class="flex flex-col">
<span class="text-sm font-medium text-[#0d141b] dark:text-white">permiso_conducir_frente.pdf</span>
<span class="text-xs text-slate-500">2.4 MB • Completado</span>
</div>
</div>
<button class="text-slate-400 hover:text-red-500 transition-colors p-2">
<span class="material-symbols-outlined">delete</span>
</button>
</div>
</div>
<!-- Action Footer -->
<div class="bg-[#fcfdfd] dark:bg-[#15202b] px-6 py-4 border-t border-[#e7edf3] dark:border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-3">
<button class="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-600 text-[#0d141b] dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Cancelar
                            </button>
<button class="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 shadow-sm shadow-blue-500/20 transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-sm">check_circle</span>
                                Enviar para Revisión
                            </button>
</div>
</div>
<!-- Secure footer hint -->
<div class="flex items-center justify-center gap-2 mb-10 text-slate-400 dark:text-slate-500 text-xs">
<span class="material-symbols-outlined text-sm">lock</span>
<span>Tus datos están protegidos con encriptación SSL de 256 bits.</span>
</div>
</div>
</div>
</div>
</div>`;
const EXTRA_CSS = ``;

export default function DocumentacionSensible() {
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
