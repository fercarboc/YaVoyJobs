import React from 'react';

const TITLE = `Panel Colaborador - Perfil y Verificación - YaVoy`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50">
<div class="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
<div class="flex items-center justify-between h-16">
<!-- Logo -->
<div class="flex items-center gap-2">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</span>
</div>
<!-- Desktop Nav -->
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-sm font-medium text-primary" href="#">Panel</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary transition-colors" href="#">Trabajos</a>
</nav>
<!-- User Profile -->
<div class="flex items-center gap-4">
<button class="p-2 text-slate-500 hover:text-primary rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<span class="material-symbols-outlined">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-9 border border-slate-200 dark:border-slate-700" data-alt="User avatar placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNMiK_jyAYb9TyTVpQY4hM_bFNP1DeAFQPj7B1yX_7pNrI-WWcD_NNcD1qms_iSKEE6GLJ6vvBND8552qYgI5CpC0Pf9IOnP2nq3uyY0Q-V3g4tyjM1fAZn2zDXFpt_nln05Z1oVvsZdFbvn4a0ibxeD23x__xTVklfyNqEk6bpwzTgwzaWioKh8Bb-_Ajab4HEh5ukAnDfXZY-BjGgd8ae3pPNlDY5QG2jWwyTDkKDFSkco2IARpfFgvuRHpqFRplLqcYcGtsHw");'>
</div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow py-8 px-4 sm:px-6 lg:px-8">
<div class="max-w-5xl mx-auto space-y-8">
<!-- Page Heading -->
<div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Perfil y Verificación</h1>
<p class="text-slate-500 dark:text-slate-400 mt-1">Gestiona tu identidad y credenciales de confianza para empezar a recibir trabajos.</p>
</div>
<div class="flex items-center gap-2 px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-800">
<span class="material-symbols-outlined text-[18px]">pending</span>
<span>Pendiente de verificación</span>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Left Column: Profile & Personal Info -->
<div class="lg:col-span-2 space-y-6">
<!-- Basic Profile Card -->
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
<div class="p-6">
<h2 class="text-lg font-bold mb-6 text-slate-900 dark:text-white">Datos del Colaborador</h2>
<!-- Avatar Section -->
<div class="flex flex-col sm:flex-row gap-6 items-start mb-8">
<div class="relative group">
<div class="size-24 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-800 shadow-md" data-alt="Close up profile photo of a person smiling" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6MQkzLw364ITudncf6eWCUhqYpaUQsS3y3faM_AzfvQl9vi6vJs6OiPUNpHIJoPhT7RAGBsrDCwd-M0WRdTHpLP5RXxwPM_NNLUvYH5tTMt0b8GsGyJoVzMK81KVs3SGufAMxvzAVQF5gno1IQI--vU8NnQn7bpquRHHRwDJ15sRGusEtUya1EsGEpBQ50YDY9TOwQlL6WEBe5SgBtmP2CQuxoKvAo4oM-KmnBfvmemUVOaz1jb859TOF270TWpEcCaWrSDTH4A");'>
</div>
<button class="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg hover:bg-primary-dark transition-colors border-2 border-white dark:border-slate-900">
<span class="material-symbols-outlined text-[16px]">edit</span>
</button>
</div>
<div class="flex-1">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Juan Pérez</h3>
<p class="text-sm text-slate-500 mb-3">Miembro desde 2023</p>
<div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
<div class="flex gap-2 text-sm text-blue-800 dark:text-blue-300">
<span class="material-symbols-outlined text-[20px]">info</span>
<p class="font-medium">Tu foto de perfil debe ser actual.</p>
</div>
<p class="text-xs text-blue-600 dark:text-blue-400 mt-1 pl-7">Debe mostrar tu cara completa y sin filtros para generar confianza en los clientes.</p>
</div>
</div>
</div>
<!-- Form Fields -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<label class="block">
<span class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">Nombre</span>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-3" type="text" value="Juan"/>
</label>
<label class="block">
<span class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">Apellidos</span>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-3" type="text" value="Pérez"/>
</label>
<label class="block">
<span class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">Ciudad de Residencia</span>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-3" type="text" value="Madrid"/>
</label>
<label class="block">
<span class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">Teléfono</span>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary h-11 px-3" type="tel" value="+34 600 000 000"/>
</label>
<label class="block md:col-span-2">
<span class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">Biografía (Visible para clientes)</span>
<textarea class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary px-3 py-2 resize-none" rows="3">¡Hola! Soy un profesional comprometido con la excelencia. Tengo experiencia en reparaciones domésticas y mudanzas.</textarea>
</label>
</div>
<div class="mt-8 flex justify-end border-t border-slate-100 dark:border-slate-800 pt-6">
<button class="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-medium py-2 px-6 rounded-lg transition-colors mr-3">Cancelar</button>
<button class="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-lg transition-colors shadow-sm">Guardar cambios</button>
</div>
</div>
</div>
</div>
<!-- Right Column: Verification Action -->
<div class="space-y-6">
<!-- Verification Card -->
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden sticky top-24">
<div class="p-6">
<h2 class="text-lg font-bold mb-4 text-slate-900 dark:text-white">Verificación de Identidad</h2>
<p class="text-sm text-slate-500 dark:text-slate-400 mb-6">Para garantizar la seguridad de la comunidad, necesitamos validar tu identidad.</p>
<!-- Document Upload Zone -->
<div class="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group">
<div class="mx-auto size-12 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">upload_file</span>
</div>
<p class="text-sm font-medium text-slate-900 dark:text-white mb-1">Subir documento (DNI/NIE)</p>
<p class="text-xs text-slate-500">Formato JPG, PNG o PDF (Máx 5MB)</p>
</div>
<!-- Uploaded File (Simulated state: Hidden by default or shown if file selected) -->
<div class="hidden mt-4 bg-slate-50 dark:bg-slate-800 rounded-lg p-3 flex items-center justify-between">
<div class="flex items-center gap-3 overflow-hidden">
<span class="material-symbols-outlined text-slate-400">description</span>
<span class="text-sm text-slate-700 dark:text-slate-300 truncate">dni_anverso.jpg</span>
</div>
<button class="text-slate-400 hover:text-red-500">
<span class="material-symbols-outlined text-[18px]">close</span>
</button>
</div>
<!-- Privacy Alert -->
<div class="flex gap-3 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg my-6 border border-amber-100 dark:border-amber-800/30">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-500 shrink-0">lock</span>
<p class="text-xs text-amber-800 dark:text-amber-200 leading-relaxed">
<strong>Documento privado.</strong> No es público y solo se usa para validación interna.
                                </p>
</div>
<button class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2">
<span>Solicitar verificación</span>
<span class="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
<div class="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800">
<div class="flex items-center justify-center gap-2 text-xs text-slate-400">
<span class="material-symbols-outlined filled text-[16px]">verified_user</span>
<span>Validación segura en 24-48h</span>
</div>
</div>
</div>
</div>
</div>
<!-- Legal Disclaimers (Fixed Section) -->
<div class="border-t border-slate-200 dark:border-slate-700 pt-8 mt-12">
<div class="bg-slate-100 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
<h4 class="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Información Legal Importante</h4>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="flex gap-3">
<span class="material-symbols-outlined text-slate-400 shrink-0">business_center</span>
<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
<strong>YaVoy no contrata ni emplea.</strong> La plataforma actúa únicamente como intermediario tecnológico entre clientes y colaboradores.
                            </p>
</div>
<div class="flex gap-3">
<span class="material-symbols-outlined text-slate-400 shrink-0">handshake</span>
<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
<strong>Responsabilidad compartida.</strong> La responsabilidad final de la calidad y ejecución del servicio recae exclusivamente en las partes involucradas.
                            </p>
</div>
<div class="flex gap-3">
<span class="material-symbols-outlined text-slate-400 shrink-0">person</span>
<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
<strong>Independencia.</strong> El colaborador actúa de forma independiente y autónoma, sin relación laboral con YaVoy.
                            </p>
</div>
</div>
</div>
</div>
</div>
</main>
<!-- Simple Footer -->
<footer class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-8">
<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p class="text-sm text-slate-400">© 2023 YaVoy España. Todos los derechos reservados.</p>
</div>
</footer>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .material-symbols-outlined.filled {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }`;

export default function PanelColaboradorPerfilYVerificacion() {
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
