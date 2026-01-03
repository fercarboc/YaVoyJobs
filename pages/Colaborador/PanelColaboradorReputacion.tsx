import React from 'react';

const TITLE = `Panel Colaborador - Reputación | YaVoy`;
const BODY_HTML = `<div class="relative flex min-h-screen flex-col overflow-x-hidden">
<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div class="flex h-16 items-center justify-between">
<!-- Logo Section -->
<div class="flex items-center gap-4">
<div class="flex items-center justify-center size-8 bg-primary rounded-lg text-white">
<span class="material-symbols-outlined">local_shipping</span>
</div>
<h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
<!-- Navigation Links -->
<nav class="hidden md:flex flex-1 justify-center gap-8">
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Perfil</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Ganancias</a>
<a class="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Trabajos</a>
<a class="text-primary font-bold text-sm leading-normal border-b-2 border-primary pb-0.5" href="#">Reputación</a>
</nav>
<!-- Right Actions -->
<div class="flex items-center gap-4">
<button class="relative p-2 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">
<span class="material-symbols-outlined unfilled">notifications</span>
<span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
</button>
<div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border border-slate-200 dark:border-slate-600 cursor-pointer" data-alt="User profile picture showing a smiling collaborator" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhtlNOcMUx1OgYKeRyAu3DVRq5iQCgNkEqob0YRnKGD-0fU-N2Pn4LssmZBSQT8BRO2vSovp-BjR7H7Xw5dFPvCzv56gjPHAS-kcOw_R7DamWKTf5C61CZC8QnTsYm9iesXj1undZ9yAfv5ETKz9OhMx8dere1_cZgWoNY_fpz4Hnv53GvGr_uLs_h-Z97TS3_aX1H6X0nNHtKDsYlPUa9fUFi7jZkJshPx9_pldzlUyx7J0c8EAkyCOOOvxzJbN0KKJYzgTPd7w");'>
</div>
</div>
</div>
</div>
</header>
<main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
<!-- Page Heading & Meta -->
<div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
<div class="flex flex-col gap-2 max-w-2xl">
<h1 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Mi Reputación</h1>
<p class="text-slate-500 dark:text-slate-400 text-lg">Consulta y gestiona las valoraciones que has recibido de los clientes.</p>
</div>
<!-- Info Banner Component -->
<div class="flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-lg px-4 py-3 text-primary-dark dark:text-primary max-w-md self-start">
<span class="material-symbols-outlined">info</span>
<p class="text-sm font-medium">La reputación ayuda a generar confianza en la comunidad.</p>
</div>
</div>
<!-- Stats Overview Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
<!-- Stat Card 1 -->
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 font-medium">Puntuación Media</p>
<span class="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+0.1%</span>
</div>
<div class="flex items-baseline gap-2">
<h3 class="text-4xl font-bold text-slate-900 dark:text-white">4.9</h3>
<span class="text-slate-400 text-sm">/ 5.0</span>
</div>
<div class="w-full bg-slate-100 dark:bg-slate-700 h-1.5 rounded-full mt-auto">
<div class="bg-primary h-1.5 rounded-full" style="width: 98%"></div>
</div>
</div>
<!-- Stat Card 2 -->
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 font-medium">Total Valoraciones</p>
<span class="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+2 nuevas</span>
</div>
<div class="flex items-baseline gap-2">
<h3 class="text-4xl font-bold text-slate-900 dark:text-white">24</h3>
<span class="text-slate-400 text-sm">opiniones</span>
</div>
<div class="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mt-auto">
<span class="material-symbols-outlined text-base">history</span>
<span>Última hace 2 días</span>
</div>
</div>
<!-- Stat Card 3 -->
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4">
<div class="flex justify-between items-start">
<p class="text-slate-500 dark:text-slate-400 font-medium">Tareas Completadas</p>
<span class="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">+5 este mes</span>
</div>
<div class="flex items-baseline gap-2">
<h3 class="text-4xl font-bold text-slate-900 dark:text-white">32</h3>
<span class="text-slate-400 text-sm">servicios</span>
</div>
<div class="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mt-auto">
<span class="material-symbols-outlined text-base">verified</span>
<span>Perfil verificado</span>
</div>
</div>
</div>
<!-- Detailed Breakdown & Review Feed -->
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Left Column: Rating Summary -->
<div class="lg:col-span-1 space-y-6">
<div class="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-6">Resumen de Valoraciones</h3>
<div class="flex flex-col items-center mb-8">
<span class="text-5xl font-black text-slate-900 dark:text-white mb-2">4.9</span>
<div class="flex gap-1 mb-2 text-yellow-400">
<span class="material-symbols-outlined">star</span>
<span class="material-symbols-outlined">star</span>
<span class="material-symbols-outlined">star</span>
<span class="material-symbols-outlined">star</span>
<span class="material-symbols-outlined">star_half</span>
</div>
<span class="text-slate-500 dark:text-slate-400 text-sm">Basado en 24 opiniones</span>
</div>
<!-- Progress Bars -->
<div class="space-y-3">
<div class="flex items-center gap-3">
<span class="text-sm font-medium w-3 text-slate-600 dark:text-slate-300">5</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 84%"></div>
</div>
<span class="text-sm text-slate-500 dark:text-slate-400 w-8 text-right">84%</span>
</div>
<div class="flex items-center gap-3">
<span class="text-sm font-medium w-3 text-slate-600 dark:text-slate-300">4</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 12%"></div>
</div>
<span class="text-sm text-slate-500 dark:text-slate-400 w-8 text-right">12%</span>
</div>
<div class="flex items-center gap-3">
<span class="text-sm font-medium w-3 text-slate-600 dark:text-slate-300">3</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 0%"></div>
</div>
<span class="text-sm text-slate-500 dark:text-slate-400 w-8 text-right">0%</span>
</div>
<div class="flex items-center gap-3">
<span class="text-sm font-medium w-3 text-slate-600 dark:text-slate-300">2</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 4%"></div>
</div>
<span class="text-sm text-slate-500 dark:text-slate-400 w-8 text-right">4%</span>
</div>
<div class="flex items-center gap-3">
<span class="text-sm font-medium w-3 text-slate-600 dark:text-slate-300">1</span>
<div class="flex-1 h-2 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
<div class="bg-primary h-full rounded-full" style="width: 0%"></div>
</div>
<span class="text-sm text-slate-500 dark:text-slate-400 w-8 text-right">0%</span>
</div>
</div>
</div>
<!-- Tips Card -->
<div class="bg-primary text-white rounded-xl p-6 shadow-md relative overflow-hidden">
<div class="relative z-10">
<h3 class="font-bold text-lg mb-2">Consejo Pro</h3>
<p class="text-blue-100 text-sm mb-4">Responder a las valoraciones aumenta un 20% la probabilidad de ser recontratado.</p>
<button class="bg-white text-primary text-sm font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">Ver guía</button>
</div>
<span class="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] opacity-20 rotate-12">verified_user</span>
</div>
</div>
<!-- Right Column: Reviews Feed -->
<div class="lg:col-span-2 space-y-6">
<!-- Feed Header & Filters -->
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200 dark:border-slate-700">
<h3 class="text-xl font-bold text-slate-900 dark:text-white">Comentarios Recientes</h3>
<div class="flex gap-2">
<select class="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2">
<option>Más recientes</option>
<option>Puntuación alta</option>
<option>Puntuación baja</option>
</select>
</div>
</div>
<!-- Reviews List -->
<div class="space-y-4">
<!-- Review Card 1 -->
<div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-shadow hover:shadow-md">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                                        MG
                                    </div>
<div>
<p class="font-semibold text-slate-900 dark:text-white">María González</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Hace 2 días • Mudanza en Madrid</p>
</div>
</div>
<div class="flex text-yellow-400">
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
</div>
</div>
<p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                                "¡Excelente trabajo! Muy puntual y cuidadoso con mis muebles. Definitivamente volvería a contar con él para futuros trabajos. Recomendado 100%."
                            </p>
<div class="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700/50">
<p class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">Tu respuesta:</p>
<p class="text-xs text-slate-600 dark:text-slate-300 italic">"¡Gracias María! Fue un placer ayudarte con la mudanza."</p>
</div>
</div>
<!-- Review Card 2 -->
<div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-shadow hover:shadow-md">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
                                        CR
                                    </div>
<div>
<p class="font-semibold text-slate-900 dark:text-white">Carlos Ruiz</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Hace 1 semana • Montaje de muebles</p>
</div>
</div>
<div class="flex text-yellow-400">
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px] text-slate-300 dark:text-slate-600">star</span>
</div>
</div>
<p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                                "Rápido y eficiente. El trabajo quedó bien hecho, aunque llegó un poco justo de tiempo. Aún así, muy profesional."
                            </p>
<button class="text-primary hover:text-primary-dark text-sm font-medium flex items-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[18px]">reply</span>
                                Responder
                            </button>
</div>
<!-- Review Card 3 -->
<div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-shadow hover:shadow-md">
<div class="flex justify-between items-start mb-4">
<div class="flex items-center gap-3">
<div class="size-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">
                                        AP
                                    </div>
<div>
<p class="font-semibold text-slate-900 dark:text-white">Ana Pérez</p>
<p class="text-xs text-slate-500 dark:text-slate-400">Hace 2 semanas • Limpieza a fondo</p>
</div>
</div>
<div class="flex text-yellow-400">
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
<span class="material-symbols-outlined text-[20px]">star</span>
</div>
</div>
<p class="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                                "Todo correcto, muy amable."
                            </p>
<button class="text-primary hover:text-primary-dark text-sm font-medium flex items-center gap-1 transition-colors">
<span class="material-symbols-outlined text-[18px]">reply</span>
                                Responder
                            </button>
</div>
</div>
<button class="w-full py-3 text-sm text-slate-500 hover:text-primary font-medium border border-dashed border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                        Cargar más comentarios
                    </button>
</div>
</div>
</main>
</div>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings:
            'FILL' 1,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
            vertical-align: middle;
        }
        .material-symbols-outlined.unfilled {
            font-variation-settings: 'FILL' 0;
        }`;

export default function PanelColaboradorReputacion() {
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
