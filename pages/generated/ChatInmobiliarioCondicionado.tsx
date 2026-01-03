import React from 'react';

const TITLE = `YaVoy - Chat Inmobiliario`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="flex-none bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 z-50">
<div class="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1600px] mx-auto w-full">
<div class="flex items-center gap-4 text-text-main-light dark:text-text-main-dark">
<div class="size-8 text-primary">
<svg class="w-full h-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h2 class="text-xl font-bold tracking-tight">YaVoy</h2>
</div>
<nav class="hidden md:flex flex-1 justify-end gap-8 items-center">
<div class="flex items-center gap-6">
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Comprar</a>
<a class="text-sm font-medium hover:text-primary transition-colors" href="#">Alquilar</a>
<a class="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[20px]">notifications</span>
                        Mis Alertas
                    </a>
<a class="text-sm font-medium text-primary flex items-center gap-1" href="#">
<span class="material-symbols-outlined text-[20px] fill-1">chat</span>
                        Mensajes
                    </a>
</div>
<div class="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-gray-700">
<div class="bg-center bg-no-repeat bg-cover rounded-full size-9 ring-2 ring-primary/20" data-alt="User profile picture showing a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIUMVfVeWko6unTtgMskUgKuVfZckMBlNmGBgetLER0D3pFPandW0HaJzQzaNb1J3eFdGbGoIxu7ebXIr1pikmP4H2XCtfkck_bjLMbLtu9FJade6iq8Lw5OPo_AK1AvwerpDBCxdwjUeGwChEIc0t4FmZT1GQaCJX8XJtu3ZQubjvDaS82zEgKa6UhoClm5tIyadxWvz-C1YOzrJGrGi75mi_nIHiCUSUFj7EwHn9VHW-fPjoUQnWbqF7wAM7be7q7hPVi0S5uQ");'>
</div>
</div>
</nav>
<!-- Mobile Menu Icon -->
<button class="md:hidden text-text-main-light dark:text-text-main-dark">
<span class="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<!-- Main Layout Grid -->
<main class="flex-1 overflow-hidden w-full max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
<!-- LEFT COLUMN: Context (Ad Details) -->
<aside class="hidden lg:flex lg:col-span-3 flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 h-full overflow-hidden">
<div class="p-4 border-b border-gray-100 dark:border-gray-800">
<h3 class="font-bold text-lg flex items-center gap-2">
<span class="material-symbols-outlined text-primary">apartment</span>
                        Detalles del Anuncio
                    </h3>
</div>
<div class="flex-1 overflow-y-auto p-4 space-y-5">
<!-- Ad Image -->
<div class="relative w-full aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer">
<div class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Bright living room interior with wooden floors and large window" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAumcVyRjF9_uDNiv2R-27i30J_sRlfa-Y4Nbv7J6wuhk5M9cKP13PcLqZNGbCddUw46imYqXRryOW9r2V4lSsqDmYKBjniy7BkkuNBE23Brbe4dmmYlLD_CFBt0lY53G4w5sFWF3qpOk5bsSozAPTENKkr-_kFXLd2WT8GxkE5BEqmzKB-IkvnUKMsl68EfBpQtYcu8jVburx5b3fi5whMh0-7stC8u5wDB58-rqnbrVJ34rsjm7kXkLlUiEBHbIv8LrLwashUdg");'>
</div>
<div class="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
<span class="material-symbols-outlined text-[14px] align-middle mr-1">photo_camera</span> 12
                        </div>
</div>
<!-- Ad Info -->
<div>
<div class="flex items-start justify-between mb-2">
<h4 class="font-bold text-lg leading-tight">Piso en Calle Mayor</h4>
<span class="text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">Disponible</span>
</div>
<p class="text-text-secondary-light dark:text-text-secondary-dark text-sm mb-3">Centro, Madrid</p>
<div class="flex items-baseline gap-1 mb-4">
<span class="text-2xl font-bold text-primary">1.200€</span>
<span class="text-text-secondary-light dark:text-text-secondary-dark text-sm">/mes</span>
</div>
<div class="grid grid-cols-3 gap-2 text-center mb-6">
<div class="bg-background-light dark:bg-background-dark p-2 rounded-lg">
<span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl block mb-1">bed</span>
<span class="text-xs font-semibold">3 hab</span>
</div>
<div class="bg-background-light dark:bg-background-dark p-2 rounded-lg">
<span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl block mb-1">shower</span>
<span class="text-xs font-semibold">2 baños</span>
</div>
<div class="bg-background-light dark:bg-background-dark p-2 rounded-lg">
<span class="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark text-xl block mb-1">square_foot</span>
<span class="text-xs font-semibold">85m²</span>
</div>
</div>
<div class="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800 mb-4">
<div class="flex items-center gap-2 mb-1">
<span class="material-symbols-outlined text-primary text-sm">verified</span>
<span class="text-xs font-bold text-primary">Inmobiliaria Sol</span>
</div>
<p class="text-xs text-text-secondary-light dark:text-text-secondary-dark">Ref: 839201 • Respuesta rápida</p>
</div>
</div>
</div>
<div class="p-4 border-t border-gray-100 dark:border-gray-800 bg-background-light dark:bg-background-dark/50">
<button class="w-full flex items-center justify-center gap-2 bg-white dark:bg-surface-dark border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-text-main-light dark:text-text-main-dark font-medium py-2.5 rounded-lg transition-colors">
<span>Ver anuncio completo</span>
<span class="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</aside>
<!-- CENTER COLUMN: Chat Interface -->
<section class="col-span-1 lg:col-span-6 flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-md overflow-hidden h-full relative">
<!-- Chat Header -->
<div class="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-white dark:bg-surface-dark z-10">
<div class="flex items-center gap-4">
<div class="relative">
<div class="size-12 rounded-full bg-cover bg-center" data-alt="Real estate agent portrait woman" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzPHFxLZrQ0aNUs8Ll4edxc2GiAUvuxbvV-GazokCjZbS31UkP7zzLXcGQX3FhOcPbl5OouHmvWICmZ_BgRixhmTLyQEVsc77NAkcpQHvFYnNHSFQ6olXH2EGtmUoeHvCnzJxHR17Udj4JY4PWf6-NXaZxVzqFwU6mRHWwlC32Z44Xf4tVjueuR-KfXe7K1ysXAq9k5VLcNarDtrm7kOUGTakC5ytByrAmpX2SAJZHNFkGTkHxWqlmAyteDnG8KCCkuca7ykUjhQ");'>
</div>
<div class="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-white dark:border-surface-dark"></div>
</div>
<div>
<h2 class="font-bold text-lg leading-tight">Inmobiliaria Sol</h2>
<p class="text-xs text-text-secondary-light dark:text-text-secondary-dark flex items-center gap-1">
<span class="material-symbols-outlined text-[14px] text-green-600">check_circle</span>
                                Solicitud aceptada • En línea
                            </p>
</div>
</div>
<div class="flex gap-2">
<button class="p-2 text-text-secondary-light hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors" title="Llamar">
<span class="material-symbols-outlined">call</span>
</button>
<button class="p-2 text-text-secondary-light hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors lg:hidden" title="Ver detalles">
<span class="material-symbols-outlined">info</span>
</button>
</div>
</div>
<!-- Chat Messages Area -->
<div class="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 bg-slate-50 dark:bg-[#0b1116]">
<!-- System Notification -->
<div class="flex justify-center my-4">
<div class="bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-800 dark:text-blue-200 text-xs md:text-sm px-4 py-2 rounded-full shadow-sm text-center max-w-[90%]">
<span class="font-semibold">Solicitud aceptada.</span> El anunciante ha revisado tu perfil y ha abierto el chat.
                        </div>
</div>
<!-- Date Separator -->
<div class="flex justify-center">
<span class="text-[11px] font-medium text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">Hoy, 10:23 AM</span>
</div>
<!-- Message Received (Agent) -->
<div class="flex gap-3 max-w-[85%] md:max-w-[75%]">
<div class="size-8 rounded-full bg-cover bg-center flex-shrink-0 self-end mb-1 hidden md:block" data-alt="Real estate agent small portrait" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVmr5nGdT7pmbkWE7_ZdaDiEF_vRniNuCUbY8nisB91FsKbY6J4J2DCrL8XioWhqrIDeNuR4cfGG1Dgf8O-999NwKABkZrbF2tfAwau1yELGnZs1jUatxbsbr5FOi0A6Q3Y7b61W5_dF1Tf9wHoNgJK4C_8-CEo_hxtwFSbBbj3mcOiTVZRYHWu_TNXeu031IA9seyrD1gV94_PpYC-PULTRdHaJ5SAbPQ-T240UC1Eu9DFqX6kpQO6-yIRWBsc5ijcBgcC9Ovkw");'>
</div>
<div class="flex flex-col gap-1">
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark ml-1">Inmobiliaria Sol</span>
<div class="bg-white dark:bg-gray-700 p-3.5 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-600">
<p class="text-sm leading-relaxed">Hola Laura, he revisado tu solicitud. Tu perfil encaja con lo que busca el propietario. ¿Tienes disponibilidad para visitar el piso esta semana?</p>
</div>
<span class="text-[10px] text-text-secondary-light dark:text-text-secondary-dark ml-1">10:25 AM</span>
</div>
</div>
<!-- Message Sent (User) -->
<div class="flex gap-3 max-w-[85%] md:max-w-[75%] self-end justify-end">
<div class="flex flex-col gap-1 items-end">
<div class="bg-primary text-white p-3.5 rounded-2xl rounded-br-none shadow-md">
<p class="text-sm leading-relaxed">¡Hola! Muchas gracias. Sí, estoy muy interesada. Podría pasarme el jueves por la tarde a partir de las 18:00. ¿Os viene bien?</p>
</div>
<span class="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mr-1 flex items-center gap-1">
                                10:28 AM
                                <span class="material-symbols-outlined text-[14px] text-primary">done_all</span>
</span>
</div>
</div>
<!-- Message Received (Agent) -->
<div class="flex gap-3 max-w-[85%] md:max-w-[75%]">
<div class="size-8 rounded-full bg-cover bg-center flex-shrink-0 self-end mb-1 hidden md:block" data-alt="Real estate agent small portrait" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhWVXLEl1kavPPYhO0dNgBMn2Gg4_sjRlfOpErNvrKnGyZerEsw-z4TI3O7Q6QIp3VdxW6pP6f5-ZoWUZtAtVzEI6DeNLmH6mkR2rbeJXCTx-i5D3YTajdaFbFPw2cBQ_QZyqqaL26hvZTDp1daeODdkte87xMJ7hz5t-Ql14R-FNsQRf9AG0KvOYAUj1MSvcilCq-4zlXuK3qS_W3SxlRBzDX9cKepuvSkqtU3lh3vhOstahEjRZjXJuV3xehHJHvQuWZIsG33g");'>
</div>
<div class="flex flex-col gap-1">
<span class="text-xs text-text-secondary-light dark:text-text-secondary-dark ml-1">Inmobiliaria Sol</span>
<div class="bg-white dark:bg-gray-700 p-3.5 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 dark:border-gray-600">
<p class="text-sm leading-relaxed">El jueves a las 18:30 sería perfecto. Para agilizar el proceso, si te gusta el piso, sería ideal que trajeras o subieras aquí tu documentación de solvencia.</p>
</div>
<span class="text-[10px] text-text-secondary-light dark:text-text-secondary-dark ml-1">10:30 AM</span>
</div>
</div>
</div>
<!-- Input Area -->
<div class="p-4 bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800">
<div class="flex items-end gap-3">
<button class="p-2.5 text-text-secondary-light dark:text-text-secondary-dark hover:text-primary hover:bg-primary/10 rounded-full transition-colors flex-shrink-0" title="Adjuntar archivo">
<span class="material-symbols-outlined">attach_file</span>
</button>
<div class="flex-1 bg-background-light dark:bg-background-dark rounded-2xl border border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary transition-all">
<textarea class="w-full bg-transparent border-none text-sm p-3 focus:ring-0 resize-none max-h-32 text-text-main-light dark:text-text-main-dark placeholder-gray-400" placeholder="Escribe un mensaje..." rows="1"></textarea>
</div>
<button class="size-11 flex items-center justify-center bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg shadow-primary/30 transition-all transform hover:scale-105 flex-shrink-0">
<span class="material-symbols-outlined fill-1">send</span>
</button>
</div>
</div>
</section>
<!-- RIGHT COLUMN: Safety & Documents -->
<aside class="hidden lg:flex lg:col-span-3 flex-col gap-6 h-full overflow-hidden">
<!-- Safety Warning Box -->
<div class="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl p-5 shadow-sm">
<div class="flex items-start gap-3 mb-2">
<div class="bg-amber-100 dark:bg-amber-900/50 p-1.5 rounded-full text-amber-600 dark:text-amber-500">
<span class="material-symbols-outlined text-xl">shield</span>
</div>
<h3 class="font-bold text-amber-900 dark:text-amber-100 text-sm pt-1">Consejo de Seguridad</h3>
</div>
<p class="text-xs text-amber-800 dark:text-amber-200/80 leading-relaxed mb-3">
                        Por tu seguridad, <span class="font-bold">no compartas datos bancarios</span> ni realices pagos hasta haber visitado el inmueble y confirmado la confianza con el anunciante.
                    </p>
<a class="text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1" href="#">
                        Ver guía de seguridad <span class="material-symbols-outlined text-[12px]">arrow_outward</span>
</a>
</div>
<!-- Document Sharing Widget -->
<div class="flex-1 flex flex-col bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
<div class="p-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
<h3 class="font-bold text-sm">Mis Documentos</h3>
<span class="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">Privado</span>
</div>
<div class="flex-1 overflow-y-auto p-4 space-y-4">
<p class="text-xs text-text-secondary-light dark:text-text-secondary-dark text-center mb-4">
                            Comparte documentos solo cuando el anunciante te lo pida y confíes en él.
                        </p>
<!-- Document Item: Shared -->
<div class="group relative flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors bg-white dark:bg-slate-800/50">
<div class="size-10 flex items-center justify-center bg-red-50 dark:bg-red-900/20 text-red-500 rounded-lg">
<span class="material-symbols-outlined">picture_as_pdf</span>
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium truncate">Nomina_Abril.pdf</p>
<p class="text-[10px] text-green-600 flex items-center gap-1">
<span class="material-symbols-outlined text-[10px]">check_circle</span> Compartido
                                </p>
</div>
<button class="opacity-0 group-hover:opacity-100 text-text-secondary-light hover:text-red-500 transition-all p-1">
<span class="material-symbols-outlined text-lg">delete</span>
</button>
</div>
<!-- Document Item: Ready to share -->
<div class="group relative flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-colors bg-white dark:bg-slate-800/50">
<div class="size-10 flex items-center justify-center bg-blue-50 dark:bg-blue-900/20 text-blue-500 rounded-lg">
<span class="material-symbols-outlined">image</span>
</div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium truncate">DNI_Frontal.jpg</p>
<p class="text-[10px] text-text-secondary-light dark:text-text-secondary-dark">Listo para enviar</p>
</div>
<button class="text-primary hover:bg-primary/10 rounded p-1.5 transition-colors" title="Compartir ahora">
<span class="material-symbols-outlined text-lg">send</span>
</button>
</div>
<!-- Upload Placeholder -->
<button class="w-full border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col items-center justify-center gap-2 text-text-secondary-light hover:text-primary hover:border-primary/50 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group">
<span class="material-symbols-outlined text-3xl group-hover:scale-110 transition-transform">cloud_upload</span>
<span class="text-xs font-medium">Subir nuevo documento</span>
</button>
</div>
<div class="p-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-800">
<button class="w-full text-xs font-medium text-text-secondary-light hover:text-red-500 flex items-center justify-center gap-2 py-2">
<span class="material-symbols-outlined text-sm">flag</span>
                            Reportar usuario o bloquear
                        </button>
</div>
</div>
</aside>
</div>
</main>`;
const EXTRA_CSS = `/* Custom scrollbar for better aesthetic */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: transparent; 
        }
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8; 
        }
        .dark ::-webkit-scrollbar-thumb {
            background: #475569; 
        }`;

export default function ChatInmobiliarioCondicionado() {
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
