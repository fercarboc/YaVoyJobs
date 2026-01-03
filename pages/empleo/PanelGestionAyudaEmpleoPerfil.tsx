import React from 'react';

const TITLE = `Perfil - YaVoy`;
const BODY_HTML = `<!-- TopNavBar -->
<header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark shadow-sm">
<div class="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto h-16 flex items-center justify-between">
<div class="flex items-center gap-4">
<div class="size-8 text-primary">
<svg class="h-full w-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">YaVoy</h2>
</div>
<nav class="hidden md:flex items-center gap-8">
<a class="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300" href="#">Inicio</a>
<a class="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300" href="#">Buscar Ayuda</a>
<a class="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300" href="#">Buscar Empleo</a>
<a class="text-sm font-medium hover:text-primary transition-colors text-gray-700 dark:text-gray-300" href="#">Mis Anuncios</a>
<a class="text-sm font-bold text-primary" href="#">Perfil</a>
</nav>
<button class="flex items-center justify-center rounded-lg px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold transition-colors">
<span>Cerrar Sesión</span>
</button>
</div>
</header>
<!-- Main Content -->
<main class="flex-grow w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
<!-- Page Heading -->
<div class="mb-8">
<h1 class="text-3xl font-black tracking-tight mb-2 text-gray-900 dark:text-white">Mi Perfil</h1>
<p class="text-text-sub dark:text-gray-400">Gestiona tu identidad, revisa tu historial y configura tus preferencias.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
<!-- Left Column: Identity & Verification -->
<aside class="lg:col-span-4 space-y-6">
<!-- Profile Header Card -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
<div class="flex flex-col items-center text-center">
<div class="relative mb-4">
<div class="h-24 w-24 rounded-full bg-cover bg-center border-4 border-gray-100 dark:border-gray-700 shadow-inner" data-alt="Portrait of a smiling man named Juan Perez" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuARS4zjsCSD6hqJOKlwsmTkw3juzsgq_xuGfuZdSr02AwJR0Q7SdOm5yiPH2Ojnw7sOy_cXAaREVGDMx73_yoki-_3_wAf6wwi_ixAckPLgw2cHvu2N6AiM46yhr6Drg1YL9PCziy0hS7D2btJuJhNtQuXpusd-Z_r0mlKI1UblbcTaozz4GxK04fAVWh8uTiaUMBJrn1DaZhbKljNNZb3PJMuQ9JdtJRDtiyjhF7Z58zerGgcNqw-rcbBCaaCiIE7e7JEVxEMnEA");'></div>
<div class="absolute bottom-0 right-0 bg-green-500 text-white rounded-full p-1 border-2 border-white dark:border-gray-800">
<span class="material-symbols-outlined text-[16px] leading-none block">check</span>
</div>
</div>
<h2 class="text-xl font-bold text-gray-900 dark:text-white">Juan Pérez</h2>
<p class="text-sm text-text-sub dark:text-gray-400 mb-4">Oferente de Servicios</p>
<div class="w-full flex justify-center mb-6">
<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
<span class="material-symbols-outlined text-[14px] mr-1">verified_user</span>
                                Identidad Verificada
                            </span>
</div>
<button class="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Editar Perfil
                        </button>
</div>
<!-- Contact Details Short -->
<div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 space-y-3">
<div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
<span class="material-symbols-outlined text-[18px] mr-3 text-text-sub">mail</span>
                            juan.perez@email.com
                        </div>
<div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
<span class="material-symbols-outlined text-[18px] mr-3 text-text-sub">call</span>
                            +34 600 000 000
                        </div>
<div class="flex items-center text-sm text-gray-600 dark:text-gray-300">
<span class="material-symbols-outlined text-[18px] mr-3 text-text-sub">location_on</span>
                            Madrid, España
                        </div>
</div>
</div>
<!-- Verification Steps -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
<h3 class="font-bold text-lg mb-4 flex items-center">
<span class="material-symbols-outlined mr-2 text-primary">shield</span>
                        Verificaciones
                    </h3>
<div class="space-y-4">
<div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-green-600 text-[20px]">check_circle</span>
<span class="text-sm font-medium">Correo Electrónico</span>
</div>
</div>
<div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-green-600 text-[20px]">check_circle</span>
<span class="text-sm font-medium">Teléfono Móvil</span>
</div>
</div>
<div class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-gray-400 text-[20px]">radio_button_unchecked</span>
<span class="text-sm font-medium text-gray-500 dark:text-gray-400">Documento de Identidad</span>
</div>
<button class="text-xs font-bold text-primary hover:underline">Verificar</button>
</div>
</div>
</div>
</aside>
<!-- Right Column: History & Preferences -->
<div class="lg:col-span-8 space-y-6">
<!-- History Section -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
<div class="flex items-center justify-between mb-6">
<h3 class="text-lg font-bold">Historial de Anuncios</h3>
<a class="text-sm font-semibold text-primary hover:underline flex items-center" href="#">
                            Ver todos
                            <span class="material-symbols-outlined text-[16px] ml-1">arrow_forward</span>
</a>
</div>
<div class="overflow-x-auto">
<table class="w-full text-sm text-left">
<thead class="text-xs text-text-sub uppercase bg-gray-50 dark:bg-gray-800 dark:text-gray-400">
<tr>
<th class="px-4 py-3 rounded-l-lg">Anuncio</th>
<th class="px-4 py-3">Fecha</th>
<th class="px-4 py-3">Estado</th>
<th class="px-4 py-3 rounded-r-lg text-right">Acción</th>
</tr>
</thead>
<tbody class="divide-y divide-gray-100 dark:divide-gray-800">
<tr class="bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
<td class="px-4 py-4 font-medium text-gray-900 dark:text-white">
                                        Cuidado de mayores fin de semana
                                        <div class="text-xs text-text-sub font-normal mt-0.5">Madrid, Centro</div>
</td>
<td class="px-4 py-4 text-gray-500">12 Oct 2023</td>
<td class="px-4 py-4">
<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Activo</span>
</td>
<td class="px-4 py-4 text-right">
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr class="bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
<td class="px-4 py-4 font-medium text-gray-900 dark:text-white">
                                        Limpieza general piso 90m2
                                        <div class="text-xs text-text-sub font-normal mt-0.5">Madrid, Salamanca</div>
</td>
<td class="px-4 py-4 text-gray-500">28 Sep 2023</td>
<td class="px-4 py-4">
<span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Cerrado</span>
</td>
<td class="px-4 py-4 text-right">
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
<tr class="bg-white dark:bg-surface-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
<td class="px-4 py-4 font-medium text-gray-900 dark:text-white">
                                        Profesor particular Matemáticas
                                        <div class="text-xs text-text-sub font-normal mt-0.5">Online</div>
</td>
<td class="px-4 py-4 text-gray-500">15 Sep 2023</td>
<td class="px-4 py-4">
<span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Pendiente</span>
</td>
<td class="px-4 py-4 text-right">
<button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
<span class="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Notification Preferences -->
<div class="bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-800 p-6 shadow-sm">
<h3 class="text-lg font-bold mb-6">Preferencias de Notificación</h3>
<div class="space-y-6">
<div class="flex items-center justify-between">
<div class="flex flex-col">
<span class="text-sm font-semibold text-gray-900 dark:text-white">Alertas por Correo Electrónico</span>
<span class="text-xs text-text-sub">Recibe resúmenes semanales y alertas de seguridad.</span>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
<div class="flex items-center justify-between">
<div class="flex flex-col">
<span class="text-sm font-semibold text-gray-900 dark:text-white">Notificaciones Push</span>
<span class="text-xs text-text-sub">Mensajes instantáneos sobre tus anuncios.</span>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input checked="" class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
<div class="flex items-center justify-between">
<div class="flex flex-col">
<span class="text-sm font-semibold text-gray-900 dark:text-white">Mensajes SMS</span>
<span class="text-xs text-text-sub">Para notificaciones urgentes.</span>
</div>
<label class="relative inline-flex items-center cursor-pointer">
<input class="sr-only peer" type="checkbox" value=""/>
<div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
</label>
</div>
</div>
</div>
<!-- Legal Disclaimers (Fixed Block) -->
<div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary rounded-r-lg p-5">
<h4 class="text-sm font-bold text-primary mb-2 flex items-center">
<span class="material-symbols-outlined text-[18px] mr-2">info</span>
                        Información Importante
                    </h4>
<ul class="list-disc list-inside text-xs text-gray-700 dark:text-gray-300 space-y-1">
<li>YaVoy no contrata ni emplea a ningún profesional, únicamente conecta usuarios.</li>
<li>YaVoy no dirige ni supervisa los servicios prestados por los usuarios de la plataforma.</li>
<li>La responsabilidad del acuerdo y cumplimiento recae exclusivamente en las partes contratantes.</li>
</ul>
</div>
</div>
</div>
</main>
<!-- Footer -->
<footer class="border-t border-gray-200 dark:border-gray-800 bg-surface-light dark:bg-surface-dark py-8 mt-auto">
<div class="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p class="text-sm text-text-sub">© 2023 YaVoy España. Todos los derechos reservados.</p>
<div class="flex gap-6">
<a class="text-sm text-text-sub hover:text-primary" href="#">Términos</a>
<a class="text-sm text-text-sub hover:text-primary" href="#">Privacidad</a>
<a class="text-sm text-text-sub hover:text-primary" href="#">Contacto</a>
</div>
</div>
</footer>`;
const EXTRA_CSS = `body { font-family: 'Inter', sans-serif; }`;

export default function PanelGestionAyudaEmpleoPerfil() {
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
