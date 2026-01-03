import React from 'react';

const TITLE = `YaVoy - Gestión de Visitas`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] dark:border-b-[#2a3441] bg-white dark:bg-[#101922] px-6 md:px-10 py-3 shadow-sm">
<div class="flex items-center gap-4 text-[#0d141b] dark:text-white">
<div class="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
<span class="material-symbols-outlined text-[20px]">real_estate_agent</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">YaVoy Panel</h2>
</div>
<div class="flex flex-1 justify-end gap-4 md:gap-8 items-center">
<nav class="hidden md:flex items-center gap-6">
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mis Anuncios</a>
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mensajes</a>
<a class="text-primary text-sm font-bold leading-normal transition-colors border-b-2 border-primary" href="#">Visitas</a>
<a class="text-[#0d141b] dark:text-gray-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Ayuda</a>
</nav>
<div class="flex items-center gap-3">
<button class="hidden sm:flex h-9 px-4 items-center justify-center rounded-lg border border-[#e7edf3] dark:border-[#2a3441] hover:bg-slate-50 dark:hover:bg-[#1a2632] text-[#0d141b] dark:text-white text-sm font-medium transition-colors">
<span class="truncate">Cerrar Sesión</span>
</button>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 ring-2 ring-white dark:ring-[#101922]" data-alt="User profile picture of a smiling agent" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCGHrzK_tU7y2spk8r1WTX7Hk91j-iyuLkK5wHBfEviCgay8owRpqDKkTgKvLwz6bdVhL9oeZu3ok04MAMjbTymAQmUW0W8SyQiDn1efKkfxj88bDkpIORyGeLMdJy8Kanb44JYwVXsLxFYo8h452j7L3kXSV9KRIeuzSrlacDs5AZHUoMt6kQMzjBTTn7GrqGodJ3O4V7X3bYhhccsqAfb4WIQIc-B-ZbtlLnwf-CVSZIfRtZKqA1csf4RXtp6OFoZTzx8pw48NA");'></div>
<!-- Mobile Menu Button -->
<button class="md:hidden p-1 text-[#0d141b] dark:text-white">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 px-4 md:px-10 lg:px-40 py-8 flex justify-center">
<div class="flex flex-col w-full max-w-[1024px] gap-6">
<!-- Page Heading & Actions -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div class="flex flex-col gap-2">
<h1 class="text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em] text-[#0d141b] dark:text-white">Gestión de Visitas</h1>
<p class="text-[#4c739a] dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
                        Administra tu agenda. Confirma, reprograma o cancela las solicitudes de visita a tus inmuebles publicados.
                    </p>
</div>
<!-- Optional: Sync Calendar Button -->
<button class="flex items-center gap-2 text-primary text-sm font-medium hover:underline">
<span class="material-symbols-outlined text-[18px]">sync</span>
                    Sincronizar calendario
                </button>
</div>
<!-- Filter Chips -->
<div class="flex overflow-x-auto pb-2 scrollbar-hide gap-3 border-b border-[#e7edf3] dark:border-[#2a3441]">
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e7edf3] dark:bg-[#2a3441] px-4 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span class="text-[#0d141b] dark:text-white text-sm font-medium leading-normal">Todas</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-[#e7edf3] dark:bg-[#101922] dark:border-[#2a3441] px-4 hover:bg-slate-50 dark:hover:bg-[#1a2632] transition-colors">
<div class="size-2 rounded-full bg-orange-400"></div>
<span class="text-[#4c739a] dark:text-gray-400 text-sm font-medium leading-normal">Propuestas</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-[#e7edf3] dark:bg-[#101922] dark:border-[#2a3441] px-4 hover:bg-slate-50 dark:hover:bg-[#1a2632] transition-colors">
<div class="size-2 rounded-full bg-green-500"></div>
<span class="text-[#4c739a] dark:text-gray-400 text-sm font-medium leading-normal">Confirmadas</span>
</button>
<button class="flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white border border-[#e7edf3] dark:bg-[#101922] dark:border-[#2a3441] px-4 hover:bg-slate-50 dark:hover:bg-[#1a2632] transition-colors">
<div class="size-2 rounded-full bg-red-500"></div>
<span class="text-[#4c739a] dark:text-gray-400 text-sm font-medium leading-normal">Canceladas</span>
</button>
</div>
<!-- Visits Table Container -->
<div class="flex flex-col bg-white dark:bg-[#1a2632] rounded-xl border border-[#cfdbe7] dark:border-[#2a3441] shadow-sm overflow-hidden">
<!-- Table Header (Desktop) / Hidden on Mobile -->
<div class="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 dark:bg-[#16202a] border-b border-[#cfdbe7] dark:border-[#2a3441] text-sm font-semibold text-[#4c739a] dark:text-gray-400">
<div class="col-span-4">Inmueble</div>
<div class="col-span-3">Interesado</div>
<div class="col-span-3">Fecha y Estado</div>
<div class="col-span-2 text-right">Acciones</div>
</div>
<!-- Row 1: Proposal -->
<div class="group flex flex-col md:grid md:grid-cols-12 gap-4 px-6 py-5 border-b border-[#cfdbe7] dark:border-[#2a3441] hover:bg-slate-50 dark:hover:bg-[#1f2d3b] transition-colors relative">
<!-- Property Info -->
<div class="col-span-4 flex gap-4 items-start">
<div class="shrink-0 size-16 bg-gray-200 rounded-lg bg-cover bg-center" data-alt="Modern apartment interior living room" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvg3yGq6uBBXg-kp1d2T7sH7rxog2lTQ7baCs28Tv4tnusYDVX-nNrXA5JHJC6McQJC2MsZ9lcMbJVpZNIUhttaA4MBbsOJsZfPSAHGr7Q_WXnAURH7jW2HwhgFw2L72oujqBUzsP_OwgYtqXruEu0etB8-ZroSVrVydfm_l-iZN2tOHuaUp7D92wbU1vTGqmcG0vyU0sdRqBAOPuoUwE38t_oMpvmJsndl74mjiJDVlw_cxAWn34DTbwNa2fEEX-cthFDcmj-AA");'></div>
<div class="flex flex-col justify-center h-full">
<h3 class="text-[#0d141b] dark:text-white font-bold text-sm leading-tight line-clamp-2">Ático luminoso en Barrio Salamanca</h3>
<span class="text-[#4c739a] dark:text-gray-400 text-xs mt-1">Ref: 29384-A</span>
</div>
</div>
<!-- User Info -->
<div class="col-span-3 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-[18px] text-[#4c739a]">person</span>
<span class="text-[#0d141b] dark:text-white text-sm font-medium">Juan Pérez</span>
</div>
<div class="flex gap-3 text-xs text-primary">
<a class="hover:underline flex items-center gap-1" href="#"><span class="material-symbols-outlined text-[14px]">chat</span> Chat</a>
<a class="hover:underline flex items-center gap-1" href="#"><span class="material-symbols-outlined text-[14px]">call</span> Llamar</a>
</div>
</div>
<!-- Date & Status -->
<div class="col-span-3 flex flex-col justify-center gap-2">
<div class="flex items-center gap-2 text-[#0d141b] dark:text-white text-sm font-medium">
<span class="material-symbols-outlined text-[18px] text-[#4c739a]">schedule</span>
                            15 Oct, 10:00 AM
                        </div>
<div class="inline-flex w-fit items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800">
<div class="size-1.5 rounded-full bg-orange-500"></div>
<span class="text-orange-700 dark:text-orange-300 text-xs font-semibold">Propuesta</span>
</div>
</div>
<!-- Actions -->
<div class="col-span-2 flex flex-col sm:flex-row md:flex-col justify-center gap-2 items-start md:items-end">
<button class="flex w-full md:w-auto items-center justify-center gap-1 px-3 py-1.5 bg-primary hover:bg-blue-600 text-white text-xs font-bold rounded shadow-sm transition-colors">
<span class="material-symbols-outlined text-[16px]">check</span> Confirmar
                        </button>
<div class="flex gap-2 w-full md:w-auto justify-end">
<button class="p-1.5 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded" title="Proponer cambio">
<span class="material-symbols-outlined text-[20px]">edit_calendar</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded" title="Rechazar">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
</div>
</div>
<!-- Row 2: Confirmed -->
<div class="group flex flex-col md:grid md:grid-cols-12 gap-4 px-6 py-5 border-b border-[#cfdbe7] dark:border-[#2a3441] hover:bg-slate-50 dark:hover:bg-[#1f2d3b] transition-colors relative">
<!-- Property Info -->
<div class="col-span-4 flex gap-4 items-start">
<div class="shrink-0 size-16 bg-gray-200 rounded-lg bg-cover bg-center" data-alt="Small studio apartment kitchen" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZVAsNRq2GFHN4s1hTazEtu9fSwCbF3JRoAKUbnUYvQj7yTZfs7CDMTeblfwyOVDGxmF6Wll11pqYIb23Jn0dnqUmcQfXLnYhE3lBrBKxGFeMabKk9Z3s10Gs3rfyzZwxaCaYZn9g807VZHxik4MtGlr470cwZM-lY1LV2xWEsS1Kv2cwrITUd51GD2-ARw1qhvYJVPqQ0Zf1TRiWfZOUE_76G7CP6aa96LQzUEd2yOs8II7MeQB_VFF-UnkgWtsJhPNp_oG8VuA");'></div>
<div class="flex flex-col justify-center h-full">
<h3 class="text-[#0d141b] dark:text-white font-bold text-sm leading-tight line-clamp-2">Estudio céntrico Calle Pez</h3>
<span class="text-[#4c739a] dark:text-gray-400 text-xs mt-1">Ref: 44001-B</span>
</div>
</div>
<!-- User Info -->
<div class="col-span-3 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-[18px] text-[#4c739a]">person</span>
<span class="text-[#0d141b] dark:text-white text-sm font-medium">María López</span>
</div>
<div class="flex gap-3 text-xs text-primary">
<a class="hover:underline flex items-center gap-1" href="#"><span class="material-symbols-outlined text-[14px]">chat</span> Chat</a>
</div>
</div>
<!-- Date & Status -->
<div class="col-span-3 flex flex-col justify-center gap-2">
<div class="flex items-center gap-2 text-[#0d141b] dark:text-white text-sm font-medium">
<span class="material-symbols-outlined text-[18px] text-[#4c739a]">schedule</span>
                            16 Oct, 11:30 AM
                        </div>
<div class="inline-flex w-fit items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
<div class="size-1.5 rounded-full bg-green-500"></div>
<span class="text-green-700 dark:text-green-300 text-xs font-semibold">Confirmada</span>
</div>
</div>
<!-- Actions -->
<div class="col-span-2 flex flex-col sm:flex-row md:flex-col justify-center gap-2 items-start md:items-end">
<button class="flex w-full md:w-auto items-center justify-center gap-1 px-3 py-1.5 bg-white dark:bg-transparent border border-[#cfdbe7] dark:border-[#4c739a] text-[#4c739a] hover:bg-slate-50 dark:hover:bg-[#2a3441] text-xs font-bold rounded shadow-sm transition-colors">
<span class="material-symbols-outlined text-[16px]">edit</span> Modificar
                        </button>
<button class="text-xs text-red-500 hover:text-red-700 font-medium md:mr-1">
                            Cancelar Visita
                        </button>
</div>
</div>
<!-- Row 3: Cancelled -->
<div class="group flex flex-col md:grid md:grid-cols-12 gap-4 px-6 py-5 border-b border-[#cfdbe7] dark:border-[#2a3441] bg-slate-50/50 dark:bg-[#16202a] relative opacity-75 hover:opacity-100 transition-opacity">
<!-- Property Info -->
<div class="col-span-4 flex gap-4 items-start">
<div class="shrink-0 size-16 bg-gray-200 rounded-lg bg-cover bg-center grayscale" data-alt="Modern house exterior with garden" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvIzJZ4cy9OKt_haMo2QRkxsXtTVSq9c95WZU9YM1N8M1cvzTMwSukjOyvdBXpty-Onw37YRpAC1TNM6Lb2EqF3jZBT2vgAOf3P0usep2b4QU0IzLFvvIgTKlUL0A-wlRcgfBSL7uPweYlR3xXHIuYrvz2m3LxHowyg2O4EfBfamFzVfczB5bKts-pyy2pRVkIGI5b2U4TRMZOxrSOXGYbi3Hyp6ZrydUafX0DqVUBFaiZj1DnJzplnDl1o6J36KPfGkMwSwRppw");'></div>
<div class="flex flex-col justify-center h-full">
<h3 class="text-[#0d141b] dark:text-white font-bold text-sm leading-tight line-clamp-2">Chalet adosado en Pozuelo</h3>
<span class="text-[#4c739a] dark:text-gray-400 text-xs mt-1">Ref: 99283-X</span>
</div>
</div>
<!-- User Info -->
<div class="col-span-3 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-[18px] text-[#4c739a]">person</span>
<span class="text-[#0d141b] dark:text-white text-sm font-medium">Carlos Ruiz</span>
</div>
</div>
<!-- Date & Status -->
<div class="col-span-3 flex flex-col justify-center gap-2">
<div class="flex items-center gap-2 text-[#4c739a] dark:text-gray-500 text-sm font-medium line-through">
<span class="material-symbols-outlined text-[18px]">schedule</span>
                            18 Oct, 16:00 PM
                        </div>
<div class="inline-flex w-fit items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
<span class="material-symbols-outlined text-[14px] text-red-600 dark:text-red-400">cancel</span>
<span class="text-red-700 dark:text-red-300 text-xs font-semibold">Cancelada</span>
</div>
</div>
<!-- Actions -->
<div class="col-span-2 flex flex-col sm:flex-row md:flex-col justify-center gap-2 items-start md:items-end">
<button class="flex w-full md:w-auto items-center justify-center gap-1 px-3 py-1.5 bg-transparent text-[#4c739a] hover:text-red-600 text-xs font-bold rounded transition-colors">
<span class="material-symbols-outlined text-[16px]">delete</span> Eliminar
                        </button>
</div>
</div>
<!-- Row 4: Proposal -->
<div class="group flex flex-col md:grid md:grid-cols-12 gap-4 px-6 py-5 hover:bg-slate-50 dark:hover:bg-[#1f2d3b] transition-colors relative">
<!-- Property Info -->
<div class="col-span-4 flex gap-4 items-start">
<div class="shrink-0 size-16 bg-gray-200 rounded-lg bg-cover bg-center" data-alt="Loft style apartment with brick wall" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjkU31FZZRTDyP7ccJwJP3kUdWlLZexjSX9lGv1k1d0vS1ezKPIrGQzwBEZhx90x2YpVckTmHul-wzsCpMfbCKcqY_9AmfqYcMMe7Is8xrQqAEiyKDdmhZziNqlOKon2oA4DNsNbzXIXE6lo13lq9UwENvcQ5kpmduzf2_9dRszhvY3gkQv4GV17jm7EJiSjAVLakRmLHMzDuqJ5YHupgQ9lVepW8UEQTwc3AlwIzhX177JcBK87ep8pTzIMVErs7nY-kOXJ-BlA");'></div>
<div class="flex flex-col justify-center h-full">
<h3 class="text-[#0d141b] dark:text-white font-bold text-sm leading-tight line-clamp-2">Loft industrial Vallecas</h3>
<span class="text-[#4c739a] dark:text-gray-400 text-xs mt-1">Ref: 55421-L</span>
</div>
</div>
<!-- User Info -->
<div class="col-span-3 flex flex-col justify-center">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-[18px] text-[#4c739a]">person</span>
<span class="text-[#0d141b] dark:text-white text-sm font-medium">Ana Torres</span>
</div>
<div class="flex gap-3 text-xs text-primary">
<a class="hover:underline flex items-center gap-1" href="#"><span class="material-symbols-outlined text-[14px]">chat</span> Chat</a>
<a class="hover:underline flex items-center gap-1" href="#"><span class="material-symbols-outlined text-[14px]">call</span> Llamar</a>
</div>
</div>
<!-- Date & Status -->
<div class="col-span-3 flex flex-col justify-center gap-2">
<div class="flex items-center gap-2 text-[#0d141b] dark:text-white text-sm font-medium">
<span class="material-symbols-outlined text-[18px] text-[#4c739a]">schedule</span>
                            20 Oct, 09:15 AM
                        </div>
<div class="inline-flex w-fit items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800">
<div class="size-1.5 rounded-full bg-orange-500"></div>
<span class="text-orange-700 dark:text-orange-300 text-xs font-semibold">Propuesta</span>
</div>
</div>
<!-- Actions -->
<div class="col-span-2 flex flex-col sm:flex-row md:flex-col justify-center gap-2 items-start md:items-end">
<button class="flex w-full md:w-auto items-center justify-center gap-1 px-3 py-1.5 bg-primary hover:bg-blue-600 text-white text-xs font-bold rounded shadow-sm transition-colors">
<span class="material-symbols-outlined text-[16px]">check</span> Confirmar
                        </button>
<div class="flex gap-2 w-full md:w-auto justify-end">
<button class="p-1.5 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 rounded" title="Proponer cambio">
<span class="material-symbols-outlined text-[20px]">edit_calendar</span>
</button>
<button class="p-1.5 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded" title="Rechazar">
<span class="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
</div>
</div>
</div>
<!-- Legal Disclaimer -->
<div class="flex items-start gap-2 p-4 bg-slate-100 dark:bg-[#1a2632] border border-slate-200 dark:border-[#2a3441] rounded-lg text-xs text-[#4c739a] dark:text-gray-400">
<span class="material-symbols-outlined text-[16px] shrink-0 mt-0.5">info</span>
<p>
<strong>Aviso Legal:</strong> La visita se acuerda directamente entre las partes (Anunciante e Interesado). YaVoy facilita la conexión pero no es responsable de la seguridad física de los inmuebles ni de la veracidad de los perfiles durante el encuentro presencial. Se recomienda precaución y confirmar identidad.
                </p>
</div>
<!-- Empty State (Hidden by default in this demo, but coded as requested) -->
<!-- 
            <div class="hidden flex flex-col items-center justify-center py-16 px-4 bg-white dark:bg-[#1a2632] rounded-xl border border-[#cfdbe7] dark:border-[#2a3441]">
                 <div class="bg-slate-50 dark:bg-[#2a3441] p-4 rounded-full mb-4">
                     <span class="material-symbols-outlined text-4xl text-[#4c739a]">calendar_today</span>
                 </div>
                 <h3 class="text-lg font-bold text-[#0d141b] dark:text-white mb-2">No tienes visitas pendientes</h3>
                 <p class="text-[#4c739a] text-center max-w-md mb-6 text-sm">Impulsa tus anuncios para conseguir más interesados en tus inmuebles y llena tu agenda.</p>
                 <button class="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors">Ir a Mis Anuncios</button>
            </div> 
            -->
</div>
</main>
<!-- Simple Footer for Context -->
<footer class="py-6 text-center text-xs text-[#4c739a] dark:text-gray-500 border-t border-[#e7edf3] dark:border-[#2a3441] bg-white dark:bg-[#101922]">
<div class="flex justify-center gap-4 mb-2">
<a class="hover:text-primary" href="#">Términos y Condiciones</a>
<a class="hover:text-primary" href="#">Privacidad</a>
<a class="hover:text-primary" href="#">Contacto</a>
</div>
<p>© 2023 YaVoy España S.L. Todos los derechos reservados.</p>
</footer>`;
const EXTRA_CSS = `.scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }`;

export default function PanelAnuncianteVisitas() {
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
