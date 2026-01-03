import React from 'react';

const TITLE = `YaVoy - Solicitud de Información`;
const BODY_HTML = `<div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full bg-surface-light dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 shadow-sm">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex h-16 items-center justify-between">
<!-- Logo & Brand -->
<div class="flex items-center gap-4">
<a class="flex items-center gap-2 group" href="#">
<div class="size-8 text-primary">
<svg class="w-full h-full transition-transform group-hover:scale-110" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</span>
</a>
</div>
<!-- Desktop Navigation -->
<nav class="hidden md:flex flex-1 justify-center gap-8 ml-8">
<a class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Alquiler</a>
<a class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Venta</a>
<a class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Compartir</a>
<a class="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Blog</a>
</nav>
<!-- User Actions -->
<div class="hidden md:flex items-center gap-3">
<button class="h-9 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold transition-colors">
                            Iniciar sesión
                        </button>
<button class="h-9 px-4 rounded-lg bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-500/20 transition-all">
                            Publicar anuncio
                        </button>
</div>
<!-- Mobile Menu Button -->
<div class="md:hidden">
<button class="text-slate-500 hover:text-slate-700 dark:text-slate-400">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</div>
</header>
<!-- Main Layout -->
<main class="flex-1 w-full py-8 md:py-12 px-4 sm:px-6">
<div class="max-w-3xl mx-auto">
<!-- Back Link -->
<a class="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-primary mb-6 transition-colors" href="#">
<span class="material-symbols-outlined text-[18px]">arrow_back</span>
                    Volver al anuncio
                </a>
<!-- Card Container -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
<!-- Header Section -->
<div class="px-6 py-6 sm:px-10 sm:py-8 border-b border-slate-100 dark:border-slate-800">
<div class="flex flex-col gap-2">
<h1 class="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                                Solicitud de Información
                            </h1>
<p class="text-slate-500 dark:text-slate-400 text-base">
                                Contacta directamente con el anunciante del inmueble. Rellena el formulario para mostrar tu interés.
                            </p>
</div>
</div>
<!-- Form Section -->
<form class="px-6 py-6 sm:px-10 sm:py-8 space-y-8">
<!-- Property Summary (Context) -->
<div class="flex gap-4 p-4 rounded-lg bg-background-light dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
<div class="h-16 w-20 rounded-md bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 relative" data-alt="Thumbnail of the apartment interior with bright window">
<!-- Abstract gradient placeholder for apartment image -->
<div class="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700"></div>
</div>
<div class="flex flex-col justify-center">
<h3 class="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">Ático luminoso en Calle Gran Vía</h3>
<p class="text-slate-500 dark:text-slate-400 text-xs mt-1">Ref: 29384 • 1.200 €/mes</p>
</div>
</div>
<!-- Message Field -->
<div class="space-y-3">
<label class="block text-sm font-semibold text-slate-900 dark:text-white" for="message">
                                Tu mensaje
                            </label>
<textarea class="w-full min-h-[140px] p-4 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none shadow-sm transition-all text-base" id="message" placeholder="Escribe aquí tu consulta...">Hola, estoy interesado en tu piso y me gustaría concertar una visita. ¿Podría indicarme qué disponibilidad tiene? Muchas gracias.</textarea>
<div class="flex justify-end">
<span class="text-xs font-medium text-slate-400">Te sugerimos presentarte brevemente</span>
</div>
</div>
<!-- Optional Details Divider -->
<div class="relative py-2">
<div aria-hidden="true" class="absolute inset-0 flex items-center">
<div class="w-full border-t border-slate-200 dark:border-slate-700"></div>
</div>
<div class="relative flex justify-start">
<span class="bg-surface-light dark:bg-surface-dark pr-3 text-lg font-bold text-slate-900 dark:text-white">
                                    Detalles opcionales
                                </span>
</div>
</div>
<!-- Grid Inputs -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Date Input -->
<div class="space-y-2">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Fecha estimada de entrada
                                </label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400 group-focus-within:text-primary">calendar_today</span>
</div>
<input class="block w-full pl-10 pr-3 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm sm:text-sm" type="date"/>
</div>
</div>
<!-- Duration Select -->
<div class="space-y-2">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Duración prevista
                                </label>
<div class="relative group">
<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400 group-focus-within:text-primary">schedule</span>
</div>
<select class="block w-full pl-10 pr-10 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm sm:text-sm appearance-none cursor-pointer">
<option disabled="" selected="" value="">Seleccionar duración...</option>
<option>1 a 3 meses</option>
<option>3 a 6 meses</option>
<option>6 a 12 meses</option>
<option>Más de 1 año</option>
<option>Indefinido</option>
</select>
<div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-slate-400">expand_more</span>
</div>
</div>
</div>
</div>
<!-- Profile Chips -->
<div class="space-y-3">
<label class="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                Perfil básico
                            </label>
<div class="flex flex-wrap gap-3">
<!-- Option 1 -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="profile" type="radio" value="student"/>
<div class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all group-hover:border-slate-400 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 dark:peer-focus:ring-offset-slate-900">
                                        Estudiante
                                    </div>
</label>
<!-- Option 2 -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="profile" type="radio" value="worker"/>
<div class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all group-hover:border-slate-400 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 dark:peer-focus:ring-offset-slate-900">
                                        Trabajador
                                    </div>
</label>
<!-- Option 3 -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="profile" type="radio" value="couple"/>
<div class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all group-hover:border-slate-400 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 dark:peer-focus:ring-offset-slate-900">
                                        Pareja
                                    </div>
</label>
<!-- Option 4 -->
<label class="relative cursor-pointer group">
<input class="peer sr-only" name="profile" type="radio" value="family"/>
<div class="px-4 py-2 rounded-full border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium transition-all group-hover:border-slate-400 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2 dark:peer-focus:ring-offset-slate-900">
                                        Familia
                                    </div>
</label>
</div>
</div>
<!-- Legal Checkbox (Critical) -->
<div class="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/20">
<label class="flex items-start gap-3 cursor-pointer">
<div class="relative flex items-center pt-0.5">
<input class="peer size-5 cursor-pointer appearance-none rounded border border-orange-300 dark:border-orange-700 bg-white dark:bg-slate-800 transition-all checked:border-primary checked:bg-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900" required="" type="checkbox"/>
<span class="material-symbols-outlined absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] text-white opacity-0 peer-checked:opacity-100 pointer-events-none">check</span>
</div>
<span class="text-sm text-slate-700 dark:text-slate-300 leading-tight select-none">
                                    Entiendo que <strong class="font-bold text-slate-900 dark:text-white">YaVoy</strong> no intermedia en la operación y que el contacto es directo con el anunciante.
                                </span>
</label>
</div>
<!-- Action Buttons -->
<div class="flex flex-col-reverse sm:flex-row gap-4 pt-2">
<button class="w-full sm:w-1/3 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">
                                Cancelar
                            </button>
<button class="w-full sm:w-2/3 py-3 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30 transition-all transform active:scale-[0.98] flex justify-center items-center gap-2" type="submit">
<span>Enviar solicitud</span>
<span class="material-symbols-outlined text-[20px]">send</span>
</button>
</div>
</form>
</div>
<!-- Footer Trust Signal -->
<div class="mt-8 text-center">
<p class="flex justify-center items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
<span class="material-symbols-outlined text-[16px]">lock</span>
                        Tus datos se enviarán de forma segura. YaVoy respeta tu privacidad.
                    </p>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = `/* Custom scrollbar for textareas */
        textarea::-webkit-scrollbar {
            width: 8px;
        }
        textarea::-webkit-scrollbar-track {
            background: transparent;
        }
        textarea::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 4px;
        }`;

export default function SolicitudDeInformacion() {
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
