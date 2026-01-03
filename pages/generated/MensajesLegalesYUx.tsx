import React from 'react';

const TITLE = `YaVoy - Consulta Inmobiliaria`;
const BODY_HTML = `<!-- Top Navigation Bar -->
<header class="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md">
<div class="px-4 md:px-10 lg:px-40 py-3 flex items-center justify-between">
<div class="flex items-center gap-4">
<a class="flex items-center gap-2 group" href="#">
<div class="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined" style="font-size: 20px;">home_work</span>
</div>
<h2 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">YaVoy</h2>
</a>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-[#0d141b] dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Comprar</a>
<a class="text-[#0d141b] dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Alquilar</a>
<a class="text-[#0d141b] dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Sobre nosotros</a>
</nav>
<div class="flex items-center gap-4">
<button class="hidden sm:flex h-9 px-4 items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors">
                    Login
                </button>
<div class="size-9 rounded-full bg-slate-200 dark:bg-slate-700 bg-center bg-cover border border-slate-300 dark:border-slate-600 cursor-pointer" data-alt="User profile avatar placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTIZsJHg_7Tzsho50mBgY3r88Apky21sLDscyEKkYPGgd4jitNAXki1BiWDdgBAgbhwYeREzCY50vRBoYSTOiCixMWukzmCx8ArPqDzlCllqrdQytcejw_HsP4LZFjxpfXmhBnYm8EpzXK_WVeF5o-TABmr_EDkut3LR34jrR5tqg1-hMa--QAe0AKHYmcrgRovRCClWnxuR10ZQ_FZSU3YSx2v3npAu2CsjJlg7gQ7F9dxN3upG3Fxsve5zToVpjStW-qsEtP2g");'></div>
</div>
</div>
</header>
<!-- Main Content Area -->
<main class="flex-grow px-4 md:px-10 lg:px-40 py-8 md:py-12">
<div class="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
<!-- Left Column: Property Summary (Context) -->
<div class="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
<div class="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 sticky top-24">
<div class="relative h-56 bg-cover bg-center group cursor-pointer" data-alt="Modern apartment interior living room with natural light" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-va5aFxUdnuLf1h-Y-RZoOQ1XiUSpvYDDGzN--P4OMacc81fzRISycvjCj9sDeFImTWXI_R8gwUL81l7f5IJgtu206EAx8Qsq2OPLWycbMxKAaM1-q42Qh1v7vW0gQG2YYDAlBBzrz4K9wiqpaaOdCOI4Bb5c5hDZXmVTYAZbrUHlbibrkjmkogXMV8a7u6Yg9DbjBzHSfHCRLc7W-yWuR7ij8HfPQ6lxU9ltOcwPgHjI3iGUav3lbElKWmQ0CusTkmSFLwvw1g");'>
<div class="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all"></div>
<div class="absolute bottom-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded text-xs font-bold uppercase tracking-wide text-slate-800 dark:text-white shadow-sm">
                            Venta
                        </div>
</div>
<div class="p-5 flex flex-col gap-4">
<div class="flex flex-col gap-1">
<h3 class="text-xl font-bold text-slate-900 dark:text-white leading-tight">Piso luminoso en Calle de Alcalá</h3>
<p class="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
<span class="material-symbols-outlined text-[16px]">location_on</span>
                                Madrid, Salamanca
                            </p>
</div>
<div class="flex items-center gap-4 py-3 border-y border-slate-100 dark:border-slate-700">
<div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-[20px]">bed</span>
<span class="text-sm font-medium">3 Hab.</span>
</div>
<div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-[20px]">bathtub</span>
<span class="text-sm font-medium">2 Baños</span>
</div>
<div class="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
<span class="material-symbols-outlined text-[20px]">square_foot</span>
<span class="text-sm font-medium">120 m²</span>
</div>
</div>
<div class="flex items-end justify-between">
<div>
<p class="text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">Precio</p>
<p class="text-primary text-2xl font-black">350.000 €</p>
</div>
<a class="text-sm font-medium text-slate-500 hover:text-primary flex items-center gap-1 transition-colors" href="#">
                                Ver ficha completa
                                <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
<!-- Safe Space Tip -->
<div class="hidden lg:flex gap-3 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/10 dark:border-primary/5">
<span class="material-symbols-outlined text-primary">security</span>
<p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
<strong class="text-primary block mb-1">Tu seguridad es primero</strong>
                        Nunca envíes dinero por adelantado. Si algo parece sospechoso, repórtalo inmediatamente.
                    </p>
</div>
</div>
<!-- Right Column: Inquiry Form -->
<div class="lg:col-span-7 order-1 lg:order-2">
<div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
<div class="mb-8">
<h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-2">Consulta Inmobiliaria</h1>
<p class="text-slate-500 dark:text-slate-400">Rellena el formulario para contactar directamente con el anunciante.</p>
</div>
<form action="#" class="flex flex-col gap-5">
<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
<label class="flex flex-col flex-1 gap-2">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Nombre completo</span>
<input class="form-input w-full rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-white px-4 h-12 text-sm focus:border-primary focus:ring-primary/20 placeholder:text-slate-400" placeholder="Ej: María García" type="text"/>
</label>
<label class="flex flex-col flex-1 gap-2">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Teléfono</span>
<input class="form-input w-full rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-white px-4 h-12 text-sm focus:border-primary focus:ring-primary/20 placeholder:text-slate-400" placeholder="+34 600 000 000" type="tel"/>
</label>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
<label class="flex flex-col flex-1 gap-2">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
<input class="form-input w-full rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-white px-4 h-12 text-sm focus:border-primary focus:ring-primary/20 placeholder:text-slate-400" placeholder="tu@email.com" type="email"/>
</label>
<label class="flex flex-col flex-1 gap-2">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Horario preferente</span>
<div class="relative">
<select class="form-select w-full rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-white px-4 h-12 text-sm focus:border-primary focus:ring-primary/20 text-slate-600 dark:text-slate-300 appearance-none">
<option>Cualquier hora</option>
<option>Mañanas (9:00 - 14:00)</option>
<option>Tardes (15:00 - 20:00)</option>
</select>
</div>
</label>
</div>
<label class="flex flex-col gap-2">
<span class="text-sm font-semibold text-slate-700 dark:text-slate-200">Mensaje</span>
<textarea class="form-textarea w-full rounded-lg border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:text-white p-4 text-sm focus:border-primary focus:ring-primary/20 placeholder:text-slate-400 resize-none" placeholder="Hola, estoy interesado en este piso y me gustaría concertar una visita..." rows="4"></textarea>
</label>
<!-- UX/Legal Microcopy Module - High Priority Requirement -->
<div class="mt-2 p-4 bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700 rounded-lg group hover:border-primary/30 transition-colors">
<div class="flex items-start gap-3">
<div class="shrink-0 mt-0.5 text-primary/80 dark:text-primary">
<span class="material-symbols-outlined text-[20px]">info</span>
</div>
<div class="flex flex-col gap-2">
<p class="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Transparencia</p>
<div class="grid gap-2 sm:grid-cols-2">
<div class="flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-slate-400 dark:text-slate-500 mt-0.5">check_circle</span>
<p class="text-xs text-slate-600 dark:text-slate-300 font-medium">YaVoy no es agencia inmobiliaria</p>
</div>
<div class="flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-slate-400 dark:text-slate-500 mt-0.5">handshake</span>
<p class="text-xs text-slate-600 dark:text-slate-300 font-medium">El cierre depende del anunciante</p>
</div>
<div class="col-span-1 sm:col-span-2 flex items-start gap-2">
<span class="material-symbols-outlined text-[16px] text-slate-400 dark:text-slate-500 mt-0.5">verified_user</span>
<p class="text-xs text-slate-600 dark:text-slate-300 font-medium">La información es responsabilidad del anunciante</p>
</div>
</div>
</div>
</div>
</div>
<div class="flex flex-col gap-3 mt-2">
<button class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary hover:bg-blue-600 text-white h-12 font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" type="button">
<span class="material-symbols-outlined text-[20px]">send</span>
                                Contactar Anunciante
                            </button>
<p class="text-[11px] text-center text-slate-400 dark:text-slate-500">
                                Tus datos están seguros. Al enviar aceptas nuestra <a class="underline hover:text-primary" href="#">Política de Privacidad</a>.
                            </p>
</div>
</form>
</div>
</div>
</div>
</main>
<!-- Simple Footer -->
<footer class="bg-white dark:bg-[#101922] border-t border-slate-200 dark:border-slate-800 py-8">
<div class="px-4 md:px-10 lg:px-40 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-slate-500 dark:text-slate-400 text-sm">© 2024 YaVoy España. Todos los derechos reservados.</p>
<div class="flex gap-6">
<a class="text-slate-400 hover:text-primary text-sm" href="#">Aviso Legal</a>
<a class="text-slate-400 hover:text-primary text-sm" href="#">Privacidad</a>
<a class="text-slate-400 hover:text-primary text-sm" href="#">Cookies</a>
</div>
</div>
</footer>`;
const EXTRA_CSS = `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        /* Custom scrollbar for textareas if needed */
        textarea::-webkit-scrollbar {
            width: 8px;
        }
        textarea::-webkit-scrollbar-track {
            background: transparent;
        }
        textarea::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }`;

export default function MensajesLegalesYUx() {
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
