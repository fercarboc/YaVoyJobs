import React from 'react';

const TITLE = `YaVoy Panel - Promociones`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="bg-white dark:bg-[#1a2632] border-b border-[#e7edf3] dark:border-gray-700 sticky top-0 z-50">
<div class="px-4 md:px-10 py-3 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] dark:text-white">YaVoy Panel</h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary" href="#">Inicio</a>
<a class="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary" href="#">Pedidos</a>
<a class="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary" href="#">Productos</a>
<a class="text-sm font-bold text-primary" href="#">Promociones</a>
<a class="text-sm font-medium hover:text-primary transition-colors dark:text-slate-300 dark:hover:text-primary" href="#">Perfil</a>
</nav>
<div class="flex items-center gap-4">
<button class="relative p-2 text-gray-500 hover:text-primary dark:text-gray-400">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-gray-100 dark:ring-gray-700 cursor-pointer" data-alt="Supplier profile avatar showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAXYXeUx5bDqYTfkOrfaCeaLDN2hEDf1c585a4fSR63nmRwkXHYbLpSNTKC4pPv_u_VFieJK4h7P75dGOtBE_vmpVyBXksij6cakwCICJe6ylrPRL5mKxp0MJ5BKnfZgQZkVBo-608A4Rmk5JBiNj1L-6Fbt7xHMCfiOPOjbSuc_CqMJXxunO9U_bUWP9dNRR6ZBxkrIhAPliWMrQDhnVFCVvdDVdjhl9ZyypXI9nSph9hQ0Rtwul996KMh5BERYS7vnUscKVfwA");'>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 flex justify-center py-8 px-4 md:px-10">
<div class="w-full max-w-[1200px] flex flex-col gap-8">
<!-- Page Heading & Actions -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 class="text-3xl md:text-4xl font-black leading-tight tracking-tight dark:text-white">Gestión de Promociones</h1>
<p class="text-[#4c739a] dark:text-slate-400 text-base mt-2">Crea y gestiona tus campañas de marketing para aumentar ventas.</p>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-2 h-10 px-4 bg-white dark:bg-[#1a2632] border border-[#e7edf3] dark:border-gray-600 rounded-lg text-sm font-bold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
<span class="material-symbols-outlined text-[20px]">history</span>
<span>Historial</span>
</button>
<button class="flex items-center gap-2 h-10 px-4 bg-primary text-white rounded-lg text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
<span class="material-symbols-outlined text-[20px]">add</span>
<span>Crear Nueva</span>
</button>
</div>
</div>
<!-- Disclaimer Card -->
<div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-6 shadow-sm">
<div class="flex-1">
<div class="flex items-center gap-2 mb-2 text-primary dark:text-blue-400">
<span class="material-symbols-outlined">info</span>
<h3 class="text-base font-bold">Aviso Importante</h3>
</div>
<p class="text-[#4c739a] dark:text-blue-100/80 text-sm leading-relaxed">
                        Las promociones son responsabilidad exclusiva del proveedor y deben cumplir con la normativa vigente de protección al consumidor y competencia desleal. Asegúrate de revisar las fechas de validez antes de publicar.
                    </p>
</div>
<div class="w-full md:w-64 h-24 md:h-20 rounded-lg bg-cover bg-center shrink-0 shadow-inner opacity-90" data-alt="Abstract blue wave pattern representing digital commerce" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSQmMHmbeCQ3h2FzhkGnUz6fGEoh45iMHZj3hGtCPRcw5oeQHdj96bwGSwAzI_04Ki6XsYzR6l-SalPGCew2oIx7Ja6zs2IGER-AKySRCslW2iRBhBT0_cI1LAOw5bMuFyYI8rxw1rcTkyd3LNN8qj9PAT9QVeA9YjpjGhp1bdvdodAdCmrIfRB12L9Z9aHonWxZdrWh-kHFPFNknQgu70BsmHTc772r6p0wRQBkHtnDjTPct6wn3fpwZdPu6fcfpPSqLLrVzRIw");'>
</div>
</div>
<div class="grid lg:grid-cols-3 gap-8 items-start">
<!-- Left Column: New Promotion Form -->
<section class="lg:col-span-2 flex flex-col gap-6">
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e7edf3] dark:border-gray-700 shadow-sm overflow-hidden">
<div class="px-6 py-4 border-b border-[#e7edf3] dark:border-gray-700 flex justify-between items-center">
<h2 class="text-lg font-bold dark:text-white">Nueva Promoción</h2>
<span class="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded font-medium">Borrador</span>
</div>
<div class="p-6 flex flex-col gap-6">
<!-- Campaign Name -->
<label class="flex flex-col gap-2">
<span class="text-sm font-semibold dark:text-slate-300">Nombre de la campaña</span>
<input class="w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-[#131b24] border border-[#cfdbe7] dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white placeholder:text-gray-400" placeholder="Ej. Rebajas de Verano 2024" type="text"/>
</label>
<!-- Discount & Type -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<label class="flex flex-col gap-2">
<span class="text-sm font-semibold dark:text-slate-300">Valor del Descuento</span>
<div class="relative">
<input class="w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-[#131b24] border border-[#cfdbe7] dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white" placeholder="0" type="number"/>
</div>
</label>
<label class="flex flex-col gap-2">
<span class="text-sm font-semibold dark:text-slate-300">Tipo de descuento</span>
<select class="w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-[#131b24] border border-[#cfdbe7] dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white appearance-none cursor-pointer">
<option>Porcentaje (%)</option>
<option>Cantidad Fija (€)</option>
</select>
</label>
</div>
<!-- Dates -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<label class="flex flex-col gap-2">
<span class="text-sm font-semibold dark:text-slate-300">Fecha de Inicio</span>
<div class="relative">
<input class="w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-[#131b24] border border-[#cfdbe7] dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white text-gray-500" type="date"/>
</div>
</label>
<label class="flex flex-col gap-2">
<span class="text-sm font-semibold dark:text-slate-300">Fecha de Fin</span>
<div class="relative">
<input class="w-full h-11 px-4 rounded-lg bg-gray-50 dark:bg-[#131b24] border border-[#cfdbe7] dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white text-gray-500" type="date"/>
</div>
</label>
</div>
<!-- Products -->
<div class="flex flex-col gap-2">
<span class="text-sm font-semibold dark:text-slate-300">Productos Aplicables</span>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-2.5 text-gray-400">search</span>
<input class="w-full h-11 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-[#131b24] border border-[#cfdbe7] dark:border-gray-600 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all dark:text-white placeholder:text-gray-400" placeholder="Buscar en mi catálogo..." type="text"/>
</div>
<div class="mt-2 border border-[#e7edf3] dark:border-gray-700 rounded-lg max-h-48 overflow-y-auto bg-gray-50 dark:bg-[#131b24]">
<!-- Product Item 1 -->
<label class="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-0">
<input class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
<div class="w-8 h-8 rounded bg-gray-200 bg-cover bg-center" data-alt="Small thumbnail of red sneakers" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN7WnZWL-S7U-DS1dxos4KIskOdkJcLWJAzp9dNGh9VrrActVvujIr8Mqv906yIOFsDJcbcsbyQJIktfgS7s67RjIppKVPk0uikjhKFYkgkfENAvq4YGFuovpCD1r8cW7cKJn5PX2HYqrYL7bkBLglHe8DE7FJUeFjvMBO95x2qfQQDfTfvnKBJngYmtRzpNVwXDZQnpRFvJbV1Ffhy-r8OxzQBH3IuLQ0nNnuYQmhT5rAfsVlMZK_psuSZUIfrEkDM753B5YSPA");'></div>
<div class="flex-1">
<p class="text-sm font-medium dark:text-white">Zapatillas Running Pro</p>
<p class="text-xs text-gray-500">REF: ZP-2023-001</p>
</div>
<span class="text-sm font-bold dark:text-white">89,99 €</span>
</label>
<!-- Product Item 2 -->
<label class="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-100 dark:border-gray-700 last:border-0">
<input checked="" class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
<div class="w-8 h-8 rounded bg-gray-200 bg-cover bg-center" data-alt="Small thumbnail of wireless headphones" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBkK_WEK94Hrkz5GRUWI1AcGLztgwS038FI2EvDXGgQMtJoiPa3diAmAVk2Ezr2jGgm6mVgzqS7E5Vt0S_1NXY3czvUNVbOBx4I0WugxEKoeVfqbKTznEl49eC1IqVu_rb1Tk3jdjEOlh4h80kzfZq09gWumABgYo3svTVkU00M6ICRnGs09V5UcU7-LT1mpko1DiNRwC_3trKqP1TFWMO6ZQZdmYxiJ3iqEzLQM0yamJE3qYBBwiwr79Jq8q-QsALc-n4wQvmCyw");'></div>
<div class="flex-1">
<p class="text-sm font-medium dark:text-white">Auriculares Wireless X</p>
<p class="text-xs text-gray-500">REF: AU-2023-055</p>
</div>
<span class="text-sm font-bold dark:text-white">129,50 €</span>
</label>
<!-- Product Item 3 -->
<label class="flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer last:border-0">
<input class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" type="checkbox"/>
<div class="w-8 h-8 rounded bg-gray-200 bg-cover bg-center" data-alt="Small thumbnail of smartwatch" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlrf9IHYKZU8Wf7XKVd6_y_CnFpDE0EVXd3Lro4O_SCPkiYdff64tz_HiIQ_54DZSEKckgRzFlReQau0z2zqCpfxLVym50BHOfFDXiEb6ty1fo9TJ8INojUXPfkRUzPxnIIC3RhSRIeZrwn-GZUhhMaXpLXnTOk5YBScbXGnJoZDPhSgQZI8N-3udPH76TaZCTm2BJ3UoPoXN8OZ4J_Z1RFcHvgr1K9qCjuPYwPsLegXg7JSXcTjyPsSb3sShxpvWjsB39C64AeQ");'></div>
<div class="flex-1">
<p class="text-sm font-medium dark:text-white">Smartwatch Series 5</p>
<p class="text-xs text-gray-500">REF: SW-2023-112</p>
</div>
<span class="text-sm font-bold dark:text-white">249,00 €</span>
</label>
</div>
</div>
</div>
<div class="bg-gray-50 dark:bg-[#131b24] px-6 py-4 flex justify-end gap-3 border-t border-[#e7edf3] dark:border-gray-700">
<button class="px-6 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-bold text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                                Cancelar
                            </button>
<button class="px-6 py-2.5 rounded-lg bg-primary text-white font-bold text-sm hover:bg-blue-600 shadow-md hover:shadow-lg transition-all">
                                Guardar Promoción
                            </button>
</div>
</div>
</section>
<!-- Right Column: Active Promotions Summary -->
<section class="flex flex-col gap-6">
<div class="bg-white dark:bg-[#1a2632] rounded-xl border border-[#e7edf3] dark:border-gray-700 shadow-sm flex flex-col h-full">
<div class="px-6 py-4 border-b border-[#e7edf3] dark:border-gray-700">
<h2 class="text-lg font-bold dark:text-white">Promociones Activas</h2>
</div>
<div class="flex-1 p-0 overflow-hidden">
<!-- Empty State Illustration (Hidden for now, logic would toggle) -->
<!-- <div class="flex flex-col items-center justify-center h-48 p-4 text-center">
                                <span class="material-symbols-outlined text-4xl text-gray-300 mb-2">savings</span>
                                <p class="text-sm text-gray-500">No tienes promociones activas</p>
                            </div> -->
<!-- List -->
<div class="divide-y divide-gray-100 dark:divide-gray-700">
<!-- Item 1 -->
<div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
<div class="flex justify-between items-start mb-1">
<h3 class="font-bold text-sm text-[#0d141b] dark:text-white">Black Friday Anticipado</h3>
<button class="text-gray-400 hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-lg">edit</span>
</button>
</div>
<div class="flex items-center gap-2 mb-3">
<span class="inline-flex items-center gap-1 rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs font-semibold text-green-700 dark:text-green-400">
<span class="w-1.5 h-1.5 rounded-full bg-green-500"></span> Activa
                                        </span>
<span class="text-xs text-gray-500 dark:text-gray-400">Hasta 20 Nov</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-gray-600 dark:text-gray-300">Descuento</span>
<span class="font-bold text-primary">-20%</span>
</div>
<div class="flex justify-between items-center text-sm mt-1">
<span class="text-gray-600 dark:text-gray-300">Productos</span>
<span class="text-[#0d141b] dark:text-white font-medium">15 items</span>
</div>
</div>
<!-- Item 2 -->
<div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
<div class="flex justify-between items-start mb-1">
<h3 class="font-bold text-sm text-[#0d141b] dark:text-white">Liquidación Verano</h3>
<button class="text-gray-400 hover:text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<span class="material-symbols-outlined text-lg">edit</span>
</button>
</div>
<div class="flex items-center gap-2 mb-3">
<span class="inline-flex items-center gap-1 rounded-full bg-yellow-100 dark:bg-yellow-900/30 px-2 py-0.5 text-xs font-semibold text-yellow-700 dark:text-yellow-400">
<span class="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Programada
                                        </span>
<span class="text-xs text-gray-500 dark:text-gray-400">Inicia 01 Dic</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-gray-600 dark:text-gray-300">Descuento</span>
<span class="font-bold text-primary">10.00 €</span>
</div>
<div class="flex justify-between items-center text-sm mt-1">
<span class="text-gray-600 dark:text-gray-300">Productos</span>
<span class="text-[#0d141b] dark:text-white font-medium">Todo el catálogo</span>
</div>
</div>
</div>
</div>
<div class="p-4 border-t border-[#e7edf3] dark:border-gray-700 bg-gray-50 dark:bg-[#131b24] text-center">
<a class="text-sm font-bold text-primary hover:underline" href="#">Ver todas las promociones</a>
</div>
</div>
<!-- Quick Stats or Tips -->
<div class="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-5 text-white shadow-lg relative overflow-hidden">
<div class="relative z-10">
<h3 class="font-bold text-lg mb-1">Consejo Pro</h3>
<p class="text-sm text-blue-100 opacity-90 leading-relaxed mb-3">
                                Las promociones con descuentos superiores al 15% tienen un 40% más de conversión.
                            </p>
<button class="text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded transition-colors backdrop-blur-sm">
                                Ver estadísticas
                            </button>
</div>
<span class="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10 rotate-12">trending_up</span>
</div>
</section>
</div>
</div>
</main>
<!-- Footer Simple -->
<footer class="mt-auto border-t border-[#e7edf3] dark:border-gray-700 py-8 bg-white dark:bg-[#1a2632]">
<div class="container mx-auto px-10 text-center">
<p class="text-sm text-gray-500 dark:text-gray-400">© 2024 YaVoy España. Todos los derechos reservados.</p>
</div>
</footer>`;
const EXTRA_CSS = ``;

export default function PanelProveedorPromociones() {
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
