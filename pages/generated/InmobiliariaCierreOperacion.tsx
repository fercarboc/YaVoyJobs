import React from 'react';

const TITLE = `Inmobiliaria - Cierre Operación`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632] px-4 lg:px-10 py-3 sticky top-0 z-50">
<div class="flex items-center gap-8">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 text-primary">
<span class="material-symbols-outlined text-4xl">real_estate_agent</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="hidden lg:flex items-center gap-9">
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Comprar</a>
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Alquilar</a>
<a class="text-[#0d141b] dark:text-gray-200 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Vender</a>
<a class="text-primary text-sm font-medium leading-normal" href="#">Mis Anuncios</a>
</div>
</div>
<div class="flex flex-1 justify-end gap-4 lg:gap-8 items-center">
<label class="hidden md:flex flex-col min-w-40 h-10 max-w-64">
<div class="flex w-full flex-1 items-stretch rounded-lg h-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#22303c]">
<div class="text-[#4c739a] flex border-none items-center justify-center pl-3 rounded-l-lg border-r-0">
<span class="material-symbols-outlined text-[20px]">search</span>
</div>
<input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141b] dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent focus:border-none h-full placeholder:text-[#4c739a] px-3 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal" placeholder="Buscar..." value=""/>
</div>
</label>
<div class="flex items-center gap-3">
<button class="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors md:hidden">
<span class="material-symbols-outlined">menu</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-gray-100 dark:ring-gray-700" data-alt="User profile avatar image" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOouCnBtnt5SuHQmGDqREzgHuy-5jE1loaCViyP1GaR8rBpT0UfLAm6mbolkrS3vKb_AZW5CiZ-j55lRLQyGOJ4aUGPdlcZ5T-urgNfBGpcC6KeX5-oJqzh76Tp-zEnP1cEyccwXQJaGmP8ln6o45EZx48aMDkxyDoFy2pQ_pIGZBpQieRD0qecvgxJZBCAqmKkRMGIFDSJ0lkiQDlibHWjETfM8kJ4dISfY871l8BuCwbm1hH2MDZjuBYuD4R79wUEOyi29W0HA");'></div>
</div>
</div>
</header>
<div class="layout-container flex h-full grow flex-col">
<div class="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
<div class="layout-content-container flex flex-col max-w-[800px] flex-1 w-full">
<!-- Breadcrumbs -->
<div class="flex flex-wrap gap-2 pt-4 pb-2">
<a class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary text-sm font-medium leading-normal flex items-center gap-1 transition-colors" href="#">
<span class="material-symbols-outlined text-[16px]">arrow_back</span>
                        Volver a Mis Anuncios
                    </a>
</div>
<!-- PageHeading -->
<div class="flex flex-wrap justify-between gap-3 pt-4 pb-6">
<div class="flex flex-col gap-2">
<h1 class="text-[#0d141b] dark:text-white tracking-tight text-[28px] md:text-[32px] font-bold leading-tight">Cerrar Anuncio</h1>
<p class="text-[#4c739a] dark:text-gray-400 text-sm md:text-base font-normal leading-normal">Gestiona el cierre y la baja definitiva de tu publicación.</p>
</div>
</div>
<!-- Content Wrapper -->
<div class="flex flex-col gap-6">
<!-- Property Card -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm">
<div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<div class="w-full sm:w-32 h-32 sm:h-24 bg-center bg-no-repeat bg-cover rounded-lg shrink-0" data-alt="Modern apartment interior living room" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA2ro3Vl_pXvKP9HLDjWglQFQEuEG1zTxJFxOauezEaHWABeNeDqFyTAfiQnfDoqKOJZfeerAAxgBC_Zfn1ZZxO46WqHsFck67ZWgxI-PaximRRqJdvGswRLdMhxm04yx-rDTb_i5F6Cur3WjXecHcbm7VfeitrWNh55uh8zwKZrlhlJViWpOpa8lmjrRTFZfC9HG1ikxWmkZLFyHGrsaZjZmMiK29pF3RVNkx1NuYzgQzJct39H4EnmPsxx6hsBSqaCsQ7l27KQg");'></div>
<div class="flex flex-col gap-1 flex-1 w-full">
<div class="flex justify-between items-start w-full">
<p class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Piso en Calle Mayor, Madrid</p>
<span class="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-1 rounded font-medium">Activo</span>
</div>
<p class="text-[#4c739a] dark:text-gray-400 text-sm font-normal leading-normal">Ref: 12345MDR • Publicado hace 12 días</p>
<p class="text-[#0d141b] dark:text-gray-200 text-base font-semibold mt-1">1.200 €/mes</p>
</div>
</div>
</div>
<!-- Reason Selection -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
<h3 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight mb-4">¿Por qué deseas dar de baja este anuncio?</h3>
<div class="flex flex-col gap-3">
<label class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#22303c] cursor-pointer transition-colors group has-[:checked]:border-primary has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-primary/10">
<input class="w-5 h-5 text-primary border-gray-300 focus:ring-primary focus:ring-offset-0 dark:bg-gray-700 dark:border-gray-600" name="reason" type="radio"/>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white font-medium">He vendido el inmueble</span>
<span class="text-[#4c739a] dark:text-gray-400 text-sm">El inmueble ya tiene un nuevo propietario.</span>
</div>
</label>
<label class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#22303c] cursor-pointer transition-colors group has-[:checked]:border-primary has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-primary/10">
<input checked="" class="w-5 h-5 text-primary border-gray-300 focus:ring-primary focus:ring-offset-0 dark:bg-gray-700 dark:border-gray-600" name="reason" type="radio"/>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white font-medium">He alquilado el inmueble</span>
<span class="text-[#4c739a] dark:text-gray-400 text-sm">Ya he encontrado inquilino.</span>
</div>
</label>
<label class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#22303c] cursor-pointer transition-colors group has-[:checked]:border-primary has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-primary/10">
<input class="w-5 h-5 text-primary border-gray-300 focus:ring-primary focus:ring-offset-0 dark:bg-gray-700 dark:border-gray-600" name="reason" type="radio"/>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white font-medium">Lo retiro temporalmente</span>
<span class="text-[#4c739a] dark:text-gray-400 text-sm">Deseo pausar la búsqueda por ahora.</span>
</div>
</label>
<label class="flex items-center gap-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-[#22303c] cursor-pointer transition-colors group has-[:checked]:border-primary has-[:checked]:bg-blue-50 dark:has-[:checked]:bg-primary/10">
<input class="w-5 h-5 text-primary border-gray-300 focus:ring-primary focus:ring-offset-0 dark:bg-gray-700 dark:border-gray-600" name="reason" type="radio"/>
<div class="flex flex-col">
<span class="text-[#0d141b] dark:text-white font-medium">Otro motivo</span>
</div>
</label>
</div>
</div>
<!-- Info Alert -->
<div class="flex gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary rounded-r-lg">
<span class="material-symbols-outlined text-primary shrink-0">info</span>
<div class="flex flex-col gap-1">
<p class="text-[#0d141b] dark:text-white text-sm font-semibold">Información Importante</p>
<p class="text-[#0d141b] dark:text-gray-200 text-sm leading-relaxed">
                                No es necesario adjuntar documentación ni registrar contrato en la plataforma. 
                                <span class="font-bold">El cierre de la operación depende exclusivamente del anunciante.</span>
</p>
</div>
</div>
<!-- Action Buttons -->
<div class="flex flex-col-reverse sm:flex-row justify-end gap-4 mt-2">
<button class="px-6 py-3 rounded-lg text-[#4c739a] dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-[#22303c] transition-colors">
                            Cancelar
                        </button>
<button class="px-6 py-3 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 shadow-md transition-all flex items-center justify-center gap-2">
<span class="material-symbols-outlined text-[20px]">check_circle</span>
                            Confirmar Cierre
                        </button>
</div>
<!-- Helper Text -->
<p class="text-center text-xs text-[#4c739a] dark:text-gray-500 mt-2">
                        Podrás reactivar este anuncio desde tu área personal más tarde si lo necesitas.
                    </p>
</div>
</div>
</div>
</div>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`;

export default function InmobiliariaCierreOperacion() {
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
