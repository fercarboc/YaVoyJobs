import React from 'react';

const TITLE = `YaVoy - Panel Colaborador`;
const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Navbar -->
<header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-b-[#2a3441] bg-white dark:bg-[#1a2632] px-6 lg:px-10 py-3 sticky top-0 z-50">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_330)">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</g>
<defs>
<clippath id="clip0_6_330"><rect fill="white" height="48" width="48"></rect></clippath>
</defs>
</svg>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8 items-center">
<nav class="flex items-center gap-9">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Perfil</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Historial</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Ajustes</a>
</nav>
<div class="flex items-center gap-4">
<button class="flex items-center justify-center rounded-lg size-10 bg-[#e7edf3] dark:bg-[#2a3441] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
<span class="material-symbols-outlined text-[#0d141b] dark:text-white" style="font-size: 20px;">notifications</span>
</button>
<div class="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-[#2a3441] shadow-sm" data-alt="User avatar placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA6kbsCUYCgvq8d3njnFl4weZZ3XYt5X2eApT_oIOZ-PV_4TiGXJQt2NiZ1qCJIWI5GmVp8Os8CL6WLRjJ3NMojehTCwU56ONrt9jhXJ7HcO-FL8L7-yuZk7SxLseXXljKhwYN-K8mOyfVCE4TXmcOq57GW-8ByhtxZXXbCcmsXgvSlapxQCvHd1BfN8kWP5RTJNczCs6tdtHliwo8WlFgbHqrOrg5e5LhmOvmoJuL5jfmCV5t5XIT4eBINilyZ2EVC2THbPIxB4w");'></div>
</div>
</div>
<!-- Mobile Menu Icon -->
<button class="md:hidden flex items-center justify-center p-2 text-gray-600 dark:text-gray-300">
<span class="material-symbols-outlined">menu</span>
</button>
</header>
<main class="flex-1 flex flex-col items-center py-6 px-4 md:px-10 lg:px-40 w-full max-w-[1440px] mx-auto">
<div class="w-full max-w-[1100px] flex flex-col gap-6">
<!-- Page Heading -->
<div class="flex flex-wrap justify-between gap-3 items-end">
<div class="flex flex-col gap-1">
<h1 class="text-3xl md:text-[32px] font-bold leading-tight">Hola, Javier</h1>
<p class="text-[#4c739a] dark:text-[#94a3b8] text-sm font-normal">Aquí tienes el resumen de tu actividad hoy.</p>
</div>
<div class="flex gap-2">
<button class="hidden sm:flex items-center gap-2 bg-white dark:bg-[#1a2632] border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
<span class="material-symbols-outlined text-sm">calendar_month</span>
                            Ver Calendario
                        </button>
</div>
</div>
<!-- Action Panel (Warning) -->
<div class="w-full">
<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-xl border border-l-4 border-l-orange-500 border-[#cfdbe7] dark:border-[#2a3441] bg-white dark:bg-[#1a2632] p-5 shadow-sm">
<div class="flex gap-4">
<div class="hidden md:flex items-center justify-center size-10 rounded-full bg-orange-100 text-orange-600 shrink-0">
<span class="material-symbols-outlined">warning</span>
</div>
<div class="flex flex-col gap-1">
<p class="text-base font-bold leading-tight flex items-center gap-2">
<span class="md:hidden text-orange-600 material-symbols-outlined text-sm">warning</span>
                                    Importante
                                </p>
<p class="text-[#4c739a] dark:text-[#94a3b8] text-sm md:text-base font-normal">Preséntate solo a servicios que puedas realizar con excelencia.</p>
</div>
</div>
<button class="self-end md:self-auto px-5 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 text-sm font-bold transition-colors">
                            Entendido
                        </button>
</div>
</div>
<!-- Dashboard Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<!-- Nuevos Anuncios Cerca (Map Card) -->
<div class="flex flex-col bg-white dark:bg-[#1a2632] rounded-xl border border-[#cfdbe7] dark:border-[#2a3441] shadow-sm overflow-hidden h-full">
<div class="flex items-center justify-between px-5 pt-5 pb-3">
<h3 class="font-bold text-lg flex items-center gap-2">
<span class="material-symbols-outlined text-primary">location_on</span>
                                Nuevos Anuncios
                            </h3>
<span class="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">3 Nuevos</span>
</div>
<div class="px-5 pb-2 text-sm text-[#4c739a] dark:text-[#94a3b8]">
                            Oportunidades cerca de Madrid Centro
                        </div>
<div class="flex-1 min-h-[160px] w-full bg-gray-100 relative group cursor-pointer">
<!-- Map Image Placeholder -->
<div class="w-full h-full bg-cover bg-center" data-alt="Map showing Madrid city center with location pins" data-location="Madrid, Spain" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOpTDeCWPpdYYYTogmVE70SA5VZrs6hElsRGu8B4Mq4mdta2B7Q01BLMUs6lr_szS0wg5Xoq-bAmyMiasiU03rkOJJ3C_YJ6UJD0DMT3YgHlfmNoiWyJsm31aQaetzACjsAKZzEQYC0m_yz2nj6S6g4N31d10U0JZ4b7qDtNlzbk9YZ98OYoqWTFxYTo5MbjSgcr0I7gal6qplJH93aGxYwpsIbBcXoOkirv9O9S2HMt_svIq9LOzDW-QHaRHOnrUq7xaVy7Ov_A");'>
<div class="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<button class="bg-white text-black px-4 py-2 rounded-full shadow-lg text-sm font-medium transform scale-95 group-hover:scale-100 transition-transform">Ver Mapa</button>
</div>
</div>
</div>
<div class="p-4 border-t border-[#cfdbe7] dark:border-[#2a3441] bg-gray-50 dark:bg-[#151f2a]">
<button class="w-full text-center text-primary text-sm font-bold hover:underline">Ver 12 anuncios disponibles</button>
</div>
</div>
<!-- Ingresos Recientes -->
<div class="flex flex-col bg-white dark:bg-[#1a2632] rounded-xl border border-[#cfdbe7] dark:border-[#2a3441] shadow-sm h-full">
<div class="px-5 pt-5 pb-2">
<h3 class="font-bold text-lg flex items-center gap-2">
<span class="material-symbols-outlined text-green-600">payments</span>
                                Ingresos Recientes
                            </h3>
</div>
<div class="flex-1 flex flex-col justify-center items-center p-6 gap-2">
<p class="text-[#4c739a] dark:text-[#94a3b8] text-sm">Total este mes</p>
<h2 class="text-4xl font-bold tracking-tight text-[#0d141b] dark:text-white">450,00 €</h2>
<div class="flex items-center gap-1 text-green-600 text-sm font-medium mt-1">
<span class="material-symbols-outlined text-base">trending_up</span>
<span>+12% vs mes anterior</span>
</div>
</div>
<div class="p-4 border-t border-[#cfdbe7] dark:border-[#2a3441]">
<button class="w-full py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors">
                                Ver detalles de pagos
                            </button>
</div>
</div>
<!-- Candidaturas Activas -->
<div class="flex flex-col bg-white dark:bg-[#1a2632] rounded-xl border border-[#cfdbe7] dark:border-[#2a3441] shadow-sm h-full">
<div class="px-5 pt-5 pb-3 flex justify-between items-center">
<h3 class="font-bold text-lg flex items-center gap-2">
<span class="material-symbols-outlined text-purple-600">assignment_ind</span>
                                Candidaturas
                            </h3>
<span class="text-sm text-[#4c739a] dark:text-[#94a3b8]">2 activas</span>
</div>
<div class="flex-1 flex flex-col gap-0">
<!-- Item 1 -->
<div class="p-5 border-b border-[#cfdbe7] dark:border-[#2a3441] hover:bg-gray-50 dark:hover:bg-[#151f2a] transition-colors cursor-pointer group">
<div class="flex justify-between items-start mb-1">
<p class="font-semibold text-sm group-hover:text-primary transition-colors">Limpieza en Calle Alcalá</p>
<span class="text-xs font-medium bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">Pendiente</span>
</div>
<p class="text-xs text-[#4c739a] dark:text-[#94a3b8]">Enviado hace 2h</p>
</div>
<!-- Item 2 -->
<div class="p-5 hover:bg-gray-50 dark:hover:bg-[#151f2a] transition-colors cursor-pointer group">
<div class="flex justify-between items-start mb-1">
<p class="font-semibold text-sm group-hover:text-primary transition-colors">Montaje Muebles IKEA</p>
<span class="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Visto</span>
</div>
<p class="text-xs text-[#4c739a] dark:text-[#94a3b8]">Enviado ayer</p>
</div>
</div>
<div class="p-4 border-t border-[#cfdbe7] dark:border-[#2a3441] bg-gray-50 dark:bg-[#151f2a]">
<button class="w-full text-center text-primary text-sm font-bold hover:underline">Ver todas</button>
</div>
</div>
<!-- Servicios Confirmados (Wide card on medium screens) -->
<div class="md:col-span-2 lg:col-span-2 flex flex-col bg-white dark:bg-[#1a2632] rounded-xl border border-[#cfdbe7] dark:border-[#2a3441] shadow-sm">
<div class="px-5 pt-5 pb-3 border-b border-[#cfdbe7] dark:border-[#2a3441] flex justify-between items-center">
<h3 class="font-bold text-lg flex items-center gap-2">
<span class="material-symbols-outlined text-blue-600">event_available</span>
                                Próximos Servicios
                            </h3>
<button class="text-sm text-primary font-medium hover:underline">Ver agenda completa</button>
</div>
<div class="p-5">
<div class="flex flex-col gap-4">
<!-- Service Item -->
<div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg bg-[#f8fafc] dark:bg-[#151f2a] border border-transparent hover:border-primary/30 transition-all">
<div class="flex flex-col items-center justify-center bg-white dark:bg-[#2a3441] border border-gray-200 dark:border-gray-600 rounded-lg h-14 w-14 shrink-0 shadow-sm">
<span class="text-xs font-bold text-red-500 uppercase">Mañana</span>
<span class="text-lg font-bold">10</span>
</div>
<div class="flex-1 min-w-0">
<h4 class="font-bold text-[#0d141b] dark:text-white truncate">Pintura Salón + Pasillo</h4>
<div class="flex items-center gap-3 text-sm text-[#4c739a] dark:text-[#94a3b8] mt-1">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> 10:00 - 14:00</span>
<span class="hidden sm:flex items-center gap-1"><span class="material-symbols-outlined text-sm">location_on</span> Paseo de la Castellana, 45</span>
</div>
</div>
<div class="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0">
<div class="bg-cover bg-center h-8 w-8 rounded-full border border-gray-200" data-alt="Client avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuA4Z_4z55JrkEEFN2p-qaWfxgfMRD8eVgfbKBrWcsytW2V86t_jnXupZ3f_MPUoyxSpCMR_95pmSaIRuYWmD92xtzsD0zFvFY0Uwvrn12bbVNg31R29k5si6Cs4031FE015N31J7lXZMxiOxOCkhDuz03Cfugk_qp-8_5HyWrhuLNwsm4TbCrGUTfsfYlOPfcbeEHVWO5OlMMspzG2vUYKwBuNooc5RqyQXN9X8EoCSwZdBvZNNQj4dsRKvSX3AVwlNznR5CCkybA");'></div>
<button class="flex-1 sm:flex-none px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">Detalles</button>
</div>
</div>
</div>
</div>
</div>
<!-- Chats Abiertos -->
<div class="flex flex-col bg-white dark:bg-[#1a2632] rounded-xl border border-[#cfdbe7] dark:border-[#2a3441] shadow-sm">
<div class="px-5 pt-5 pb-3 border-b border-[#cfdbe7] dark:border-[#2a3441]">
<h3 class="font-bold text-lg flex items-center gap-2">
<span class="material-symbols-outlined text-teal-600">chat</span>
                                Chats
                            </h3>
</div>
<div class="flex-1 overflow-y-auto max-h-[300px]">
<!-- Chat Item -->
<div class="p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#151f2a] cursor-pointer transition-colors relative">
<div class="flex items-start gap-3">
<div class="relative">
<div class="bg-cover bg-center size-10 rounded-full" data-alt="User avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHjUHOkA2-jbeKSzhKq77H956yqcfHUJpjD2114Z59q5UHq1woRYhWl9W4-Hrty0ElWVBTaAvkPcR1rn4iHssPaPXhR5S-ixdSWtuYndp4Q1qJgZIJmaZ42ZjP4OVrjDzyztG-uq8xWZ5ppBPLftGLnF5-erGDYbJRufTFLpc5pqOm0YDreO5WS6X4se1BgU_ORoz_0g93MWV49vokmj_5X16Lc_wwsv1oWAywVr5y9B3iQivZh6VbfeFYDoz8bepQwOFxLQAgyw");'></div>
<div class="absolute bottom-0 right-0 size-2.5 bg-green-500 rounded-full border-2 border-white dark:border-[#1a2632]"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-1">
<p class="font-bold text-sm text-[#0d141b] dark:text-white">María González</p>
<span class="text-xs text-[#4c739a] dark:text-[#94a3b8]">10:42</span>
</div>
<p class="text-sm text-[#4c739a] dark:text-[#94a3b8] truncate italic">está escribiendo...</p>
</div>
</div>
</div>
<!-- Chat Item -->
<div class="p-4 hover:bg-gray-50 dark:hover:bg-[#151f2a] cursor-pointer transition-colors">
<div class="flex items-start gap-3">
<div class="bg-cover bg-center size-10 rounded-full" data-alt="User avatar" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDl8SvvI-5WCMeao9g-mADBd4MZtQk661DNAQ6UYG-ZXULJQTliPmfyb8MQFnkPVpV6riD7KBbgL1Q1Z6epGitHb6Zfb5UmXilPeldAuRgpcjm7_bCevyvZc2sECkYIJHgSiCkXkeZhDm-1cMevJQDPj-eGws2Z-p7CdUQRq9qkFAhHRBVixvRP4j0mk_C1rP1Z1F8-Kx0ayf-n-9SlDnF687owOAJNwNCfy7EF7qfE4q70s7ik5ydMoNc6kWSSYTWa3kn8EoJu0Q");'></div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-1">
<p class="font-bold text-sm text-[#0d141b] dark:text-white">Carlos Ruiz</p>
<span class="text-xs text-[#4c739a] dark:text-[#94a3b8]">Ayer</span>
</div>
<p class="text-sm text-[#0d141b] dark:text-gray-300 truncate">Perfecto, nos vemos el martes a las 10.</p>
</div>
</div>
</div>
</div>
<div class="p-3">
<button class="w-full py-2 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#151f2a] transition-colors">
                                Ir a Mensajes
                            </button>
</div>
</div>
</div>
<!-- Footer-like spacing -->
<div class="h-10"></div>
</div>
</main>
</div>`;
const EXTRA_CSS = ``;

export default function PanelColaboradorResumen() {
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
