import React from 'react';

const TITLE = `Panel Proveedor - Chats Clientes | YaVoy`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="flex shrink-0 items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800 px-10 py-3 relative z-20">
<div class="flex items-center gap-4 text-slate-900 dark:text-white">
<div class="size-6 text-primary">
<span class="material-symbols-outlined text-3xl">local_shipping</span>
</div>
<h2 class="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="flex flex-1 justify-end gap-8">
<div class="hidden md:flex items-center gap-9">
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Inicio</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Mis Pedidos</a>
<a class="text-primary text-sm font-bold leading-normal" href="#">Chats</a>
<a class="text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Perfil</a>
</div>
<button class="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<span class="material-symbols-outlined" style="font-size: 20px;">logout</span>
</button>
</div>
</header>
<!-- Main Content -->
<main class="flex-1 flex overflow-hidden">
<!-- Sidebar: Chat List -->
<aside class="w-full max-w-sm flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-10">
<!-- Search Header -->
<div class="p-4 border-b border-slate-100 dark:border-slate-800">
<h1 class="text-xl font-bold text-slate-900 dark:text-white mb-4">Mensajes</h1>
<div class="relative">
<input class="w-full h-10 pl-10 pr-4 rounded-lg bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-sm focus:ring-primary focus:border-primary dark:text-white placeholder-slate-400" placeholder="Buscar cliente o pedido..." type="text"/>
<span class="material-symbols-outlined absolute left-3 top-2.5 text-slate-400" style="font-size: 20px;">search</span>
</div>
</div>
<!-- List Container -->
<div class="flex-1 overflow-y-auto">
<!-- Active Chat Item -->
<div class="flex items-center gap-3 p-4 bg-blue-50 dark:bg-slate-800/50 border-l-4 border-primary cursor-pointer hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Maria Garcia" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPAwXWqiAjTZYVgA7QXii_7f2_8kjLWizgxRWrSJc72ERyDlkS3yZYE80IMprjPLroS3u4OdaPWLsM5rhxrUpnnNchyD_rpMk0SZWD17OCbmcXLbWqNXkAd7Y0z221fegNBOeaRbMHMkfFTXI_H-JP6B_jqJc8DHUT-thYC5twdYkiolQmq3sT-vlJeX9Nc-NHYYWfkCDaBd48VbMO-n6IWKgVIIEAnDpPt6LDQz7wcjMszk58yFdTNLtzrGeKyUc6BiPoor9l_Q');"></div>
<span class="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-1">
<h3 class="text-sm font-semibold text-slate-900 dark:text-white truncate">María García</h3>
<span class="text-xs text-slate-500 dark:text-slate-400">10:30 AM</span>
</div>
<p class="text-xs text-primary font-medium mb-0.5">Pedido #1234</p>
<p class="text-sm text-slate-600 dark:text-slate-300 truncate font-medium">Hola, ¿cuándo llegaría el pedido?</p>
</div>
</div>
<!-- Inactive Chat Item -->
<div class="flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-l-4 border-transparent">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-cover bg-center" data-alt="Portrait of Pedro Lopez" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDL6pIlQNaT90Py6gr11uvxRn4tjFG3BxInvos0Y4VLbS-3j6exADvZDFlHIQBs8s668RXfY16Ybo_OibiYeTSXxFhehx7Qg9qP8OhAmFjrJZP6Ya35YnXgF0s3GQZOyJlRgvoHE_hh8MJOq5ZRiURE5UikAHqI73QXaeXN5Z2-OLBjJHpZa9oFdWYJzBUKiMbQteaDdjByqL9UfKqvpGA4fwwFA5hqvdZTE_NGro5bYBd_XbVmR-ayTOD1Km1-0QKjrZM5V8sozA');"></div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-1">
<h3 class="text-sm font-semibold text-slate-900 dark:text-white truncate">Pedro López</h3>
<span class="text-xs text-slate-500 dark:text-slate-400">Ayer</span>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Solicitud #9988</p>
<p class="text-sm text-slate-500 dark:text-slate-400 truncate">Gracias por la información.</p>
</div>
</div>
<!-- Inactive Chat Item -->
<div class="flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-l-4 border-transparent">
<div class="relative shrink-0">
<div class="size-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg">
                            JL
                        </div>
</div>
<div class="flex-1 min-w-0">
<div class="flex justify-between items-baseline mb-1">
<h3 class="text-sm font-semibold text-slate-900 dark:text-white truncate">Juan Luis</h3>
<span class="text-xs text-slate-500 dark:text-slate-400">Lun</span>
</div>
<p class="text-xs text-slate-500 dark:text-slate-400 mb-0.5">Pedido #1022</p>
<p class="text-sm text-slate-500 dark:text-slate-400 truncate">Perfecto, quedo a la espera.</p>
</div>
</div>
</div>
</aside>
<!-- Chat Area -->
<section class="flex-1 flex flex-col bg-slate-50/50 dark:bg-slate-950 min-w-0 relative">
<!-- Chat Header -->
<div class="h-16 px-6 flex items-center justify-between bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm shrink-0">
<div class="flex items-center gap-3">
<div class="hidden md:block size-10 rounded-full bg-cover bg-center" data-alt="Portrait of Maria Garcia header" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVHso7mb539MkLmrwJWgoogq_yNSVA57O7L9iW5cfuw5Rt7CjP_kT1jliOezboi0XzQ6Wb9ya49jzO4OivbY-3ur8PsDayQSqOEDi-5CDHv2yb6oA5Si13SKROdVGm6uaUFeng2jsFXFuFc2SCHHTfZ61bu15iU7tA4-RJQJQCwahfUsCiVKysmA9jsR3pKl-sj85OaMkca5M-ZyRFHp-PXW-frmDOE_boaeHkuqqaQwDR_jvDW30PM8qbkuzgLRAA3UNhRM7mqA');"></div>
<div>
<h2 class="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            María García 
                            <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Cliente verificado</span>
</h2>
<a class="text-xs text-primary hover:underline flex items-center gap-1" href="#">
                            Ver detalles de Pedido #1234
                            <span class="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
</div>
</div>
<button class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30 rounded-lg transition-colors">
<span class="material-symbols-outlined text-[18px]">block</span>
<span class="hidden sm:inline">Cerrar conversación</span>
</button>
</div>
<!-- Safety Banner -->
<div class="bg-amber-50 dark:bg-amber-900/20 border-b border-amber-100 dark:border-amber-800/30 px-6 py-3 flex items-start gap-3 shrink-0">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-500 shrink-0">warning</span>
<div class="text-sm text-amber-800 dark:text-amber-200">
<p class="font-bold">Aviso de seguridad</p>
<p class="mt-0.5 leading-relaxed opacity-90">Por favor, <span class="font-semibold">no compartas datos sensibles</span> (números de tarjeta, contraseñas, etc.). Recuerda que <span class="font-semibold">YaVoy no interviene en la transacción</span> y solo actúa como intermediario de contacto.</p>
</div>
</div>
<!-- Messages Stream -->
<div class="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
<!-- Date Divider -->
<div class="flex justify-center">
<span class="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Hoy, 24 Octubre</span>
</div>
<!-- System Message -->
<div class="flex justify-center">
<div class="text-xs text-slate-500 flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
<span class="material-symbols-outlined text-[16px]">info</span>
                        Solicitud de información iniciada por el cliente.
                    </div>
</div>
<!-- Customer Message -->
<div class="flex items-end gap-3 max-w-[85%]">
<div class="size-8 rounded-full bg-cover bg-center shrink-0 mb-1" data-alt="Small portrait of Maria" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxZ6fxZo3RKGCOBp42t3pwOljhbWWvx0ebzKGxpZFW-qnUW1OpOHUVm7SsUU-bvEYMvqWeSYuRCkhi_XPkF_hhdQ9gBs_IeiEFX2dt72oxBjXrp6XXlJ53fQnA8vTrHG7IgayE2xM__tghsD2MHS6WsNzNvNF_nEgPjWNGBwmdWKDftggOJXu-l8VHb5B5huTe70VSOtTE3RSLvRklAyxdnKnhCzEBHXC5Hd0qQNgnwb4aoWWOVV1ha4SVuyjdQ5AhG5Do-IKmmQ');"></div>
<div class="flex flex-col gap-1">
<span class="text-xs text-slate-500 ml-1">María García, 10:28 AM</span>
<div class="bg-white dark:bg-slate-800 p-3.5 rounded-2xl rounded-bl-none shadow-sm text-slate-800 dark:text-slate-200 text-sm leading-relaxed border border-slate-100 dark:border-slate-700">
<p>Hola, he realizado el pedido #1234 de los auriculares. Quería saber si vienen con el estuche de carga incluido o si tengo que comprarlo aparte.</p>
</div>
</div>
</div>
<!-- Vendor Message (Me) -->
<div class="flex items-end gap-3 max-w-[85%] ml-auto flex-row-reverse">
<!-- <div class="size-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 mb-1">
                        <span class="material-symbols-outlined text-[18px]">storefront</span>
                    </div> -->
<div class="flex flex-col gap-1 items-end">
<span class="text-xs text-slate-500 mr-1">Tú, 10:29 AM</span>
<div class="bg-primary p-3.5 rounded-2xl rounded-br-none shadow-md text-white text-sm leading-relaxed">
<p>Hola María, gracias por tu compra. Sí, todos nuestros modelos incluyen el estuche de carga y un cable USB-C en la caja.</p>
</div>
</div>
</div>
<!-- Customer Message -->
<div class="flex items-end gap-3 max-w-[85%]">
<div class="size-8 rounded-full bg-cover bg-center shrink-0 mb-1" data-alt="Small portrait of Maria" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDOyko8mN22JdPxAVTRSywFHC_Sn5qJmeoh7L4k_mHtwoWay4LBPa2-KC3VjiXGUntt9BVaQZSwI5wkH8ZSUhWZYfYj9oP7kHmSdv1yT825cqTanWRGkYlAwm8djCuFDMuWpITUOnj8oNXxAqV7mgnFn3Q2_vx7V2cztpb0JGuiRCFK984-87GvLDrYz8b997il-ZEn7mkdXBxh5lRDs6VYlQzj-WPU0zdV6B2thhA_4VXHgtkhBsdwN8ZUlyMsa-x1nXd1rBvRxw');"></div>
<div class="flex flex-col gap-1">
<span class="text-xs text-slate-500 ml-1">María García, 10:30 AM</span>
<div class="bg-white dark:bg-slate-800 p-3.5 rounded-2xl rounded-bl-none shadow-sm text-slate-800 dark:text-slate-200 text-sm leading-relaxed border border-slate-100 dark:border-slate-700">
<p>¡Genial! Muchas gracias. ¿Y cuándo llegaría el pedido aproximadamente?</p>
</div>
</div>
</div>
</div>
<!-- Input Area -->
<div class="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-4 shrink-0">
<form class="flex flex-col gap-3 relative max-w-4xl mx-auto w-full">
<div class="relative w-full">
<textarea class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg p-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-primary focus:border-primary resize-none min-h-[50px] max-h-[120px] pr-12 shadow-sm" placeholder="Escribe una aclaración o mensaje..." rows="2"></textarea>
<!-- Actions inside text area for compactness -->
<div class="absolute bottom-3 right-3 flex gap-2">
<button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1" title="Adjuntar imagen" type="button">
<span class="material-symbols-outlined text-[20px]">image</span>
</button>
<button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors p-1" title="Plantillas rápidas" type="button">
<span class="material-symbols-outlined text-[20px]">bolt</span>
</button>
</div>
</div>
<div class="flex justify-between items-center">
<span class="text-xs text-slate-400">Presiona Enter para enviar</span>
<button class="bg-primary hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg text-sm transition-colors shadow-sm flex items-center gap-2" type="button">
<span>Enviar mensaje</span>
<span class="material-symbols-outlined text-[18px]">send</span>
</button>
</div>
</form>
</div>
</section>
</main>`;
const EXTRA_CSS = ``;

export default function PanelProveedorChatsClientes() {
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
