import React from 'react';

const TITLE = `YaVoy - Crear Anuncio`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 px-6 py-3 lg:px-10">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span class="material-symbols-outlined">handshake</span>
</div>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-8 hidden md:flex">
<div class="flex items-center gap-9">
<a class="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Inicio</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Buscar Ayuda</a>
<a class="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Buscar Empleo</a>
<a class="text-slate-900 dark:text-white text-sm font-bold leading-normal border-b-2 border-primary pb-1" href="#">Gestión</a>
</div>
<div class="flex gap-3">
<button class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors">
<span class="material-symbols-outlined text-[20px]">notifications</span>
</button>
<button class="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-primary text-white hover:bg-primary-dark transition-colors">
<span class="material-symbols-outlined text-[20px]">person</span>
</button>
</div>
</div>
<!-- Mobile Menu Icon -->
<button class="md:hidden flex items-center justify-center text-slate-900 dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<!-- Main Content -->
<main class="flex-1 w-full max-w-[1024px] mx-auto p-4 md:p-8 lg:p-10 flex flex-col gap-8">
<!-- Breadcrumbs -->
<nav class="flex flex-wrap gap-2 text-sm">
<a class="text-slate-500 hover:text-primary transition-colors font-medium" href="#">Inicio</a>
<span class="text-slate-400">/</span>
<a class="text-slate-500 hover:text-primary transition-colors font-medium" href="#">Gestión</a>
<span class="text-slate-400">/</span>
<span class="text-slate-900 dark:text-white font-medium">Crear Anuncio</span>
</nav>
<!-- Page Heading -->
<div class="flex flex-col gap-2">
<h1 class="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Crear nuevo anuncio</h1>
<p class="text-slate-500 dark:text-slate-400 text-lg">Configura los detalles de tu solicitud de ayuda o oferta de empleo.</p>
</div>
<!-- Progress Steps -->
<div class="w-full bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
<div class="relative flex items-center justify-between w-full">
<!-- Line -->
<div class="absolute left-0 top-1/2 w-full h-1 bg-slate-100 dark:bg-slate-700 -z-10 rounded-full"></div>
<div class="absolute left-0 top-1/2 w-1/2 h-1 bg-primary -z-0 rounded-full"></div>
<!-- Step 1 -->
<div class="flex flex-col items-center gap-2 bg-white dark:bg-slate-800 px-2">
<div class="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg ring-4 ring-white dark:ring-slate-800">
<span class="material-symbols-outlined text-sm">check</span>
</div>
<span class="text-xs font-bold text-primary uppercase tracking-wider">Tipo</span>
</div>
<!-- Step 2 -->
<div class="flex flex-col items-center gap-2 bg-white dark:bg-slate-800 px-2">
<div class="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg ring-4 ring-white dark:ring-slate-800">2</div>
<span class="text-xs font-bold text-primary uppercase tracking-wider">Detalles</span>
</div>
<!-- Step 3 -->
<div class="flex flex-col items-center gap-2 bg-white dark:bg-slate-800 px-2">
<div class="size-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center font-bold text-sm shadow-sm ring-4 ring-white dark:ring-slate-800">3</div>
<span class="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Legal</span>
</div>
</div>
</div>
<!-- Wizard Content -->
<form class="flex flex-col gap-8" onsubmit="event.preventDefault();">
<!-- Step 1: Selection (Visualizing as already selected for flow) -->
<section class="space-y-4">
<div class="flex items-center gap-2">
<span class="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs font-bold uppercase">Paso 1</span>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Selecciona el tipo de anuncio</h3>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<!-- Option 1: Ayuda Puntual (Active) -->
<label class="relative flex flex-col gap-3 p-5 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer shadow-sm hover:shadow-md transition-all">
<div class="flex justify-between items-start">
<div class="size-10 rounded-lg bg-primary text-white flex items-center justify-center">
<span class="material-symbols-outlined">volunteer_activism</span>
</div>
<input checked="" class="size-5 text-primary focus:ring-primary border-slate-300" name="ad_type" type="radio" value="ayuda"/>
</div>
<div>
<span class="block font-bold text-slate-900 dark:text-white">Ayuda Puntual</span>
<span class="text-sm text-slate-600 dark:text-slate-300 mt-1 block">Para tareas específicas de un día o corta duración.</span>
</div>
</label>
<!-- Option 2: Servicio Recurrente -->
<label class="relative flex flex-col gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-all opacity-60 hover:opacity-100">
<div class="flex justify-between items-start">
<div class="size-10 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center">
<span class="material-symbols-outlined">event_repeat</span>
</div>
<input class="size-5 text-primary focus:ring-primary border-slate-300" name="ad_type" type="radio" value="recurrente"/>
</div>
<div>
<span class="block font-bold text-slate-900 dark:text-white">Servicio Recurrente</span>
<span class="text-sm text-slate-500 dark:text-slate-400 mt-1 block">Limpieza semanal, cuidados continuos, etc.</span>
</div>
</label>
<!-- Option 3: Empleo -->
<label class="relative flex flex-col gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 cursor-pointer hover:border-slate-300 dark:hover:border-slate-600 transition-all opacity-60 hover:opacity-100">
<div class="flex justify-between items-start">
<div class="size-10 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 flex items-center justify-center">
<span class="material-symbols-outlined">work</span>
</div>
<input class="size-5 text-primary focus:ring-primary border-slate-300" name="ad_type" type="radio" value="empleo"/>
</div>
<div>
<span class="block font-bold text-slate-900 dark:text-white">Empleo</span>
<span class="text-sm text-slate-500 dark:text-slate-400 mt-1 block">Contratación laboral formal con nómina.</span>
</div>
</label>
</div>
</section>
<!-- Step 2: Details (Conditional - showing AYUDA PUNTUAL flow) -->
<section class="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
<div class="flex items-center gap-2">
<span class="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs font-bold uppercase">Paso 2</span>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Detalles del servicio (Ayuda)</h3>
</div>
<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 md:p-8 space-y-8 shadow-sm">
<!-- Description -->
<div class="space-y-3">
<label class="block text-sm font-semibold text-slate-700 dark:text-slate-200" for="description">
                            ¿En qué necesitas ayuda? <span class="text-red-500">*</span>
</label>
<div class="relative">
<textarea class="w-full rounded-lg border-slate-300 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 text-slate-900 dark:text-white p-4 focus:ring-primary focus:border-primary resize-none" id="description" placeholder="Describe la tarea detalladamente. Ej: Necesito ayuda para montar dos armarios de IKEA modelo PAX..." rows="4"></textarea>
<span class="absolute bottom-3 right-3 text-xs text-slate-400">0/500</span>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<!-- Date & Time -->
<div class="space-y-3">
<label class="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                Fecha y Hora <span class="text-red-500">*</span>
</label>
<div class="flex gap-4">
<div class="relative flex-1">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400">calendar_today</span>
</div>
<input class="w-full pl-10 rounded-lg border-slate-300 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 text-slate-900 dark:text-white py-2.5 focus:ring-primary focus:border-primary" placeholder="DD/MM/AAAA" type="text"/>
</div>
<div class="relative w-1/3">
<select class="w-full rounded-lg border-slate-300 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 text-slate-900 dark:text-white py-2.5 focus:ring-primary focus:border-primary">
<option>09:00</option>
<option>10:00</option>
<option>11:00</option>
</select>
</div>
</div>
</div>
<!-- Duration -->
<div class="space-y-3">
<label class="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                                Duración Estimada <span class="text-red-500">*</span>
</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400">schedule</span>
</div>
<select class="w-full pl-10 rounded-lg border-slate-300 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 text-slate-900 dark:text-white py-2.5 focus:ring-primary focus:border-primary appearance-none">
<option disabled="" selected="" value="">Selecciona duración...</option>
<option value="1">1 hora</option>
<option value="2">2 horas</option>
<option value="3">3 horas</option>
<option value="4">4 horas (Media jornada)</option>
</select>
<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400">expand_more</span>
</div>
</div>
</div>
</div>
<!-- Price Section (Crucial Constraint) -->
<div class="p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30">
<div class="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
<div class="space-y-1 max-w-lg">
<label class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                    Precio Total Ofrecido 
                                    <span class="material-symbols-outlined text-slate-400 text-sm cursor-help" title="El precio debe ser por la tarea completa">help</span>
</label>
<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Indica cuánto pagarás por el servicio completo. <span class="font-bold text-primary">No publiques tarifas por hora</span> para evitar confusiones laborales.
                                </p>
</div>
<div class="w-full md:w-48 relative">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-500">euro</span>
</div>
<input class="w-full pl-10 pr-12 rounded-lg border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-700 text-slate-900 dark:text-white py-3 font-bold text-lg focus:ring-primary focus:border-primary text-right" placeholder="0" type="number"/>
<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span class="text-slate-400 text-sm font-medium">Total</span>
</div>
</div>
</div>
</div>
<!-- Photos Upload (Optional Visual) -->
<div class="space-y-3">
<label class="block text-sm font-semibold text-slate-700 dark:text-slate-200">
                            Fotos de referencia (Opcional)
                        </label>
<div class="flex gap-3">
<button class="size-20 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-primary hover:bg-primary/5 flex flex-col items-center justify-center text-slate-400 transition-colors" type="button">
<span class="material-symbols-outlined">add_a_photo</span>
</button>
</div>
</div>
</div>
</section>
<!-- Step 3: Confirmation & Legal -->
<section class="space-y-4">
<div class="flex items-center gap-2">
<span class="bg-primary/10 text-primary rounded px-2 py-0.5 text-xs font-bold uppercase">Paso 3</span>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Confirmación Legal</h3>
</div>
<div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 shadow-sm">
<div class="flex gap-4 items-start p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 text-amber-900 dark:text-amber-100 border border-amber-100 dark:border-amber-800/30 mb-6">
<span class="material-symbols-filled shrink-0 text-amber-500 mt-0.5">warning</span>
<div class="text-sm leading-relaxed">
<p class="font-bold mb-1">Aviso de Responsabilidad</p>
                            YaVoy actúa exclusivamente como intermediario tecnológico. La relación final se establece entre el solicitante y el ayudante. Asegúrate de cumplir con la normativa vigente en caso de contratación laboral.
                        </div>
</div>
<label class="flex items-start gap-3 cursor-pointer group">
<div class="relative flex items-center pt-0.5">
<input class="peer size-5 cursor-pointer appearance-none rounded border border-slate-300 bg-slate-50 checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:border-slate-600 dark:bg-slate-700" type="checkbox"/>
<span class="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 peer-checked:opacity-100 font-bold">check</span>
</div>
<span class="text-sm text-slate-700 dark:text-slate-300 select-none group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                            Entiendo que YaVoy es una plataforma de intermediación y que la responsabilidad del acuerdo recae en las partes, eximiendo a la plataforma de obligaciones laborales.
                        </span>
</label>
</div>
</section>
<!-- Action Bar -->
<div class="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800 mt-4">
<button class="px-6 py-2.5 rounded-lg text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-2" type="button">
<span class="material-symbols-outlined text-sm">arrow_back</span>
                    Atrás
                </button>
<div class="flex gap-3">
<button class="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">
                        Guardar Borrador
                    </button>
<button class="px-8 py-2.5 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark shadow-lg shadow-primary/30 transition-all flex items-center gap-2" type="submit">
                        Publicar Anuncio
                        <span class="material-symbols-outlined text-sm">send</span>
</button>
</div>
</div>
</form>
</main>`;
const EXTRA_CSS = `body { font-family: 'Inter', sans-serif; }
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .material-symbols-filled { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        
        /* Custom scrollbar for textareas */
        textarea::-webkit-scrollbar { width: 8px; }
        textarea::-webkit-scrollbar-track { background: transparent; }
        textarea::-webkit-scrollbar-thumb { background-color: #cbd5e1; border-radius: 20px; }`;

export default function PanelGestionAyudaEmpleoCrearEditar() {
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
