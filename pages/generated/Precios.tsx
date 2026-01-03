import React from 'react';

const TITLE = `Precios - YaVoy`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm">
<div class="px-4 lg:px-40 flex justify-center w-full">
<div class="flex h-16 w-full max-w-[1200px] items-center justify-between">
<div class="flex items-center gap-4">
<div class="text-primary">
<span class="material-symbols-outlined text-3xl">rocket_launch</span>
</div>
<h2 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</h2>
</div>
<nav class="hidden md:flex flex-1 justify-end items-center gap-8">
<div class="flex items-center gap-6">
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Inicio</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Servicios</a>
<a class="text-sm font-bold text-primary" href="#">Precios</a>
<a class="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="#">Contacto</a>
</div>
<div class="flex gap-3">
<button class="flex items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors">
                            Registrarse
                        </button>
<button class="flex items-center justify-center rounded-lg h-9 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            Entrar
                        </button>
</div>
</nav>
<!-- Mobile Menu Icon (Placeholder) -->
<button class="md:hidden p-2 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
<main class="flex-grow flex flex-col items-center w-full">
<div class="w-full max-w-[1200px] px-4 lg:px-40 py-10 flex flex-col gap-8">
<!-- Page Heading -->
<div class="text-center md:text-left flex flex-col gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
<h1 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                    Nuestras Tarifas
                </h1>
<p class="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
                    Precios orientativos y transparentes para cada necesidad. Sin costes ocultos.
                </p>
</div>
<!-- Pricing Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
<!-- Card 1: Ayuda puntual -->
<div class="group flex flex-col gap-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
<div class="flex flex-col gap-2">
<div class="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
<span class="material-symbols-outlined">bolt</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Ayuda puntual</h3>
<p class="flex items-baseline gap-1 text-slate-900 dark:text-white">
<span class="text-3xl font-black tracking-tight">Desde 15€</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">/ servicio</span>
</p>
</div>
<div class="flex flex-col gap-3 flex-grow">
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Recados rápidos
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Urgencias
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Pago único
                        </div>
</div>
<button class="mt-auto w-full rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        Solicitar
                    </button>
</div>
<!-- Card 2: Servicio recurrente -->
<div class="group relative flex flex-col gap-5 rounded-xl border-2 border-primary bg-white dark:bg-slate-800 p-6 shadow-lg">
<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        Más popular
                    </div>
<div class="flex flex-col gap-2 pt-2">
<div class="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
<span class="material-symbols-outlined">calendar_month</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Servicio recurrente</h3>
<p class="flex items-baseline gap-1 text-slate-900 dark:text-white">
<span class="text-3xl font-black tracking-tight">Desde 49€</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">/ mes</span>
</p>
</div>
<div class="flex flex-col gap-3 flex-grow">
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Mantenimiento
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Limpieza semanal
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Tarifa plana
                        </div>
</div>
<button class="mt-auto w-full rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20">
                        Suscribirse
                    </button>
</div>
<!-- Card 3: Inmobiliaria particular -->
<div class="group flex flex-col gap-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
<div class="flex flex-col gap-2">
<div class="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
<span class="material-symbols-outlined">key</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Inmobiliaria particular</h3>
<p class="flex items-baseline gap-1 text-slate-900 dark:text-white">
<span class="text-3xl font-black tracking-tight">Desde 20€</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">/ visita</span>
</p>
</div>
<div class="flex flex-col gap-3 flex-grow">
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Gestión de llaves
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Visitas guiadas
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Informes detallados
                        </div>
</div>
<button class="mt-auto w-full rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        Contratar
                    </button>
</div>
<!-- Card 4: Inmobiliaria agencia -->
<div class="group flex flex-col gap-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
<div class="flex flex-col gap-2">
<div class="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
<span class="material-symbols-outlined">apartment</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Inmobiliaria agencia</h3>
<p class="flex items-baseline gap-1 text-slate-900 dark:text-white">
<span class="text-3xl font-black tracking-tight">Consultar</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">pack mensual</span>
</p>
</div>
<div class="flex flex-col gap-3 flex-grow">
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Alto volumen de visitas
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Gestión integral
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Soporte prioritario 24/7
                        </div>
</div>
<button class="mt-auto w-full rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        Contactar
                    </button>
</div>
<!-- Card 5: Marketplace proveedor -->
<div class="group flex flex-col gap-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
<div class="flex flex-col gap-2">
<div class="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
<span class="material-symbols-outlined">storefront</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Marketplace proveedor</h3>
<p class="flex items-baseline gap-1 text-slate-900 dark:text-white">
<span class="text-3xl font-black tracking-tight">% Variable</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">comisión / venta</span>
</p>
</div>
<div class="flex flex-col gap-3 flex-grow">
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Publicación de servicios
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Acceso a base de clientes
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Gestión de cobros segura
                        </div>
</div>
<button class="mt-auto w-full rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        Unirse
                    </button>
</div>
<!-- Card 6: Empleo -->
<div class="group flex flex-col gap-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300">
<div class="flex flex-col gap-2">
<div class="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary flex items-center justify-center mb-2">
<span class="material-symbols-outlined">work</span>
</div>
<h3 class="text-lg font-bold text-slate-900 dark:text-white">Empleo</h3>
<p class="flex items-baseline gap-1 text-slate-900 dark:text-white">
<span class="text-3xl font-black tracking-tight">Gratis</span>
<span class="text-sm font-medium text-slate-500 dark:text-slate-400">plan básico</span>
</p>
</div>
<div class="flex flex-col gap-3 flex-grow">
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Publicar hasta 3 ofertas
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Filtrar candidatos
                        </div>
<div class="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-primary text-[20px]">check</span>
                            Chat directo integrado
                        </div>
</div>
<button class="mt-auto w-full rounded-lg h-10 px-4 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        Publicar
                    </button>
</div>
</div>
<!-- MetaText / Legal Note -->
<div class="w-full mt-8 p-4 bg-slate-100 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
<div class="flex gap-2 items-start">
<span class="material-symbols-outlined text-slate-400 shrink-0">info</span>
<p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
<strong>Nota legal:</strong> Todos los precios incluyen IVA (21%) salvo indicación contraria explícita. Las tarifas mostradas son orientativas y pueden variar ligeramente según la urgencia del servicio, el horario (diurno/nocturno) y la ubicación geográfica específica. Consulte las condiciones finales con cada proveedor antes de contratar. YaVoy España actúa como intermediario tecnológico.
                    </p>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-12">
<div class="px-4 lg:px-40 flex flex-col gap-8 items-center text-center">
<div class="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
<a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">Aviso Legal</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">Política de Privacidad</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">Cookies</a>
<a class="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm font-medium" href="#">Contacto</a>
</div>
<div class="flex justify-center gap-6">
<a class="text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined">public</span>
</a>
<a class="text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined">alternate_email</span>
</a>
<a class="text-slate-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800" href="#">
<span class="material-symbols-outlined">rss_feed</span>
</a>
</div>
<div class="flex flex-col gap-2">
<p class="text-slate-400 text-sm">© 2023 YaVoy España. Todos los derechos reservados.</p>
<p class="text-slate-300 dark:text-slate-600 text-xs">Diseñado con ❤️ en Madrid</p>
</div>
</div>
</footer>`;
const EXTRA_CSS = `body {
            font-family: 'Inter', sans-serif;
        }
        .material-symbols-outlined {
            font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24;
            vertical-align: middle;
        }`;

export default function Precios() {
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
