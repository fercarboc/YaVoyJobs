import React from 'react';

const TITLE = `YaVoy - Candidato No Presentado`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- TopNavBar -->
<header class="bg-surface-light dark:bg-surface-dark border-b border-[#e7edf3] dark:border-gray-800 sticky top-0 z-50">
<div class="px-6 lg:px-40 flex justify-center">
<div class="flex flex-1 max-w-[960px] items-center justify-between py-3">
<div class="flex items-center gap-4">
<div class="text-primary size-6 flex items-center justify-center">
<span class="material-symbols-outlined text-3xl">location_on</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex items-center gap-8 hidden md:flex">
<nav class="flex items-center gap-6">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Mis Anuncios</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Reservas</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Mensajes</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Perfil</a>
</nav>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-gray-200 dark:border-gray-700" data-alt="User profile picture placeholder showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcpi_Q0Uo6K_Hjg3az-y3sUphQ8ePms3n13m9_vugTQg8x1aE74Vhe87xqSsznhreDW9m_7WzrXvS9AiTfNJQVYR9dtpYR-SNsT-xvGyUKcb3SBKVN2nBMrHHFBw76joNyVm-1YS4kFX7g7w48iIkZWNcVLe5CSqdCsLrYqI7r8hRw2NxJprmorDI494F2lSktya2ETSEQJtOtlGvc_1xS6yFiApgPlxtr8c3F2_zIAUf3pnu78VPahlKuIHZlvNVSQIcFUhDzTA");'>
</div>
</div>
<div class="md:hidden text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined">menu</span>
</div>
</div>
</div>
</header>
<!-- Main Layout -->
<div class="layout-container flex h-full grow flex-col">
<div class="px-6 lg:px-40 flex flex-1 justify-center py-8">
<div class="layout-content-container flex flex-col max-w-[960px] flex-1 gap-6">
<!-- Breadcrumbs -->
<div class="flex flex-wrap gap-2 text-sm">
<a class="text-text-secondary-light dark:text-text-secondary-dark hover:underline" href="#">Inicio</a>
<span class="text-text-secondary-light dark:text-text-secondary-dark">/</span>
<a class="text-text-secondary-light dark:text-text-secondary-dark hover:underline" href="#">Reservas Confirmadas</a>
<span class="text-text-secondary-light dark:text-text-secondary-dark">/</span>
<span class="font-medium text-text-main-light dark:text-text-main-dark">Incidencia #88291</span>
</div>
<!-- Page Heading & Alert -->
<div class="flex flex-col gap-4">
<div class="flex flex-col gap-2">
<h1 class="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Incidencia con tu servicio</h1>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-lg font-normal leading-normal">
                                Detectamos que el servicio programado no ha comenzado a la hora acordada.
                            </p>
</div>
<!-- Status Alert Banner -->
<div class="bg-warning-light dark:bg-warning-dark border border-yellow-200 dark:border-yellow-900/50 rounded-lg p-4 flex items-start gap-3">
<span class="material-symbols-outlined text-warning-text-light dark:text-warning-text-dark mt-0.5">schedule</span>
<div>
<h3 class="font-bold text-warning-text-light dark:text-warning-text-dark">Servicio Retrasado (+45 min)</h3>
<p class="text-sm text-warning-text-light dark:text-warning-text-dark opacity-90 mt-1">
                                    El colaborador debía iniciar el servicio a las 10:00 AM.
                                </p>
</div>
</div>
</div>
<!-- Meta Info -->
<div class="flex items-center gap-2 text-sm text-text-secondary-light dark:text-text-secondary-dark border-b border-gray-200 dark:border-gray-800 pb-4">
<span class="font-semibold">Servicio ID: #88291</span>
<span>•</span>
<span class="text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-900/30 px-2 py-0.5 rounded text-xs uppercase tracking-wide">Pendiente de inicio</span>
</div>
<!-- Service Card -->
<div class="flex flex-col md:flex-row gap-6">
<!-- Left Column: Service Details -->
<div class="flex-1 flex flex-col gap-6">
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm p-5">
<h3 class="text-sm font-semibold uppercase text-text-secondary-light dark:text-text-secondary-dark mb-4 tracking-wider">Detalles del Servicio</h3>
<div class="flex gap-4 items-start mb-6">
<div class="w-16 h-16 rounded-full bg-cover bg-center shrink-0 border border-gray-100 dark:border-gray-700" data-alt="Portrait of collaborator Maria Garcia looking professional" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWogGTy3K15HPyaS1-mUVxFlcA7fu6lj3GD2uOI7XhjHrd2E0ISEzpMFP64IAi4hYOnGNSJe4RM5Vqzv99M30IgPIVj__jgDIUTvz0Njxx-6nEpGu8nyneHIn8E0kUAsiRugutM29mNbTNImIRXwS-1xhVhm4jVeeWyYGHUcBXbfKrhgi9mNKPRjaWC68g0wjXb-1beZ1xw-90YekUqA5WB8kipqdT_3GMDpkHVUsXpz8yLCEZBLvfIoMbs4r24x4-MtC-CrKOIA");'>
</div>
<div class="flex flex-col">
<p class="text-lg font-bold">Limpieza General - 3 horas</p>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-2">Colaborador: María García</p>
<div class="flex items-center gap-1 text-sm text-text-main-light dark:text-text-main-dark bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded w-fit">
<span class="material-symbols-outlined text-[18px]">calendar_today</span>
<span>Hoy, 10:00 AM - 13:00 PM</span>
</div>
</div>
</div>
<div class="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 flex items-center justify-between">
<div class="flex items-center gap-2 text-sm">
<span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">location_on</span>
<span class="truncate max-w-[200px] text-text-secondary-light dark:text-text-secondary-dark">Calle Gran Vía 24, Madrid</span>
</div>
<a class="text-primary text-sm font-medium hover:underline" href="#">Ver mapa</a>
</div>
<div class="mt-4 flex gap-3">
<button class="flex-1 bg-primary hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-200 dark:shadow-none">
<span class="material-symbols-outlined">chat</span>
                                        Contactar Colaborador
                                    </button>
<button class="bg-surface-light dark:bg-surface-dark border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-text-main-light dark:text-text-main-dark font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2" title="Llamar">
<span class="material-symbols-outlined">call</span>
</button>
</div>
</div>
<!-- Disclaimer Box -->
<div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 flex gap-3">
<span class="material-symbols-outlined text-gray-400 shrink-0">info</span>
<div class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
<strong class="text-gray-700 dark:text-gray-300 block mb-1">Nota legal importante:</strong>
                                    YaVoy conecta profesionales con clientes, pero <strong>no garantiza la ejecución del servicio</strong> ni interviene en compensaciones económicas por servicios no realizados. La responsabilidad final recae en el acuerdo entre las partes.
                                </div>
</div>
</div>
<!-- Right Column: Actions -->
<div class="w-full md:w-[400px] flex flex-col gap-4">
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm p-6 relative overflow-hidden">
<div class="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
<h3 class="text-lg font-bold text-text-main-light dark:text-text-main-dark mb-2">¿El colaborador no ha llegado?</h3>
<p class="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-6">
                                    Si han pasado más de 30 minutos de la hora acordada y no has logrado contactar con María, puedes reportar la incidencia.
                                </p>
<div class="flex flex-col gap-3">
<button class="w-full group bg-surface-light dark:bg-surface-dark border border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-900/20 text-red-600 dark:text-red-400 font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined group-hover:scale-110 transition-transform">person_off</span>
<span>Marcar como No Presentado</span>
</div>
<span class="material-symbols-outlined text-lg opacity-50">arrow_forward_ios</span>
</button>
<button class="w-full group bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined">history_toggle_off</span>
<span>El servicio se realizó tarde</span>
</div>
<span class="material-symbols-outlined text-lg opacity-50">arrow_forward_ios</span>
</button>
</div>
<div class="mt-6 p-3 bg-red-50 dark:bg-red-900/10 rounded border border-red-100 dark:border-red-900/20">
<div class="flex gap-2">
<span class="material-symbols-outlined text-red-500 text-sm mt-0.5">gavel</span>
<p class="text-xs text-red-700 dark:text-red-300">
<strong>Consecuencia:</strong> Al marcar "No Presentado", la reputación del colaborador se verá afectada automáticamente y se registrará una incidencia grave en su perfil.
                                        </p>
</div>
</div>
</div>
<!-- Support Link -->
<div class="text-center mt-2">
<a class="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-primary underline" href="#">¿Necesitas ayuda con otra cosa? Centro de Ayuda</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>`;
const EXTRA_CSS = `body { font-family: 'Inter', sans-serif; }`;

export default function CandidatoNoPresentado() {
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
