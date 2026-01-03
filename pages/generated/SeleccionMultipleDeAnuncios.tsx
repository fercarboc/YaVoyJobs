import React from 'react';

const TITLE = `YaVoy - Selección Múltiple`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div class="flex items-center gap-8">
<!-- Logo -->
<div class="flex items-center gap-2">
<div class="size-8 text-primary">
<svg class="h-full w-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<h1 class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YaVoy</h1>
</div>
<!-- Search Bar -->
<div class="hidden md:flex w-full max-w-sm items-center rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-2">
<span class="material-symbols-outlined text-slate-400">search</span>
<input class="ml-2 w-full border-none bg-transparent p-0 text-sm placeholder-slate-400 focus:ring-0 dark:text-white" placeholder="Madrid, España" type="text"/>
</div>
</div>
<!-- Nav Links & User Actions -->
<div class="flex items-center gap-6">
<nav class="hidden lg:flex items-center gap-6">
<a class="text-sm font-medium hover:text-primary" href="#">Comprar</a>
<a class="text-sm font-medium hover:text-primary" href="#">Alquilar</a>
<a class="text-sm font-medium hover:text-primary" href="#">Hipotecas</a>
</nav>
<div class="flex items-center gap-3">
<button class="hidden sm:flex h-9 items-center justify-center rounded-lg bg-primary/10 px-4 text-sm font-semibold text-primary transition hover:bg-primary/20">
                        Publicar anuncio
                    </button>
<button class="flex h-9 items-center justify-center rounded-lg bg-slate-100 px-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                        Entrar
                    </button>
<div class="h-9 w-9 overflow-hidden rounded-full bg-slate-200" data-alt="User profile picture placeholder" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwXtLognVoZAYVJeUP44AwrWv2Hghm3o4AhnfH3KBzcqVnxzBpscuccVXXMGIjtkdkZtG0Wx1p5OzDeV3UMZCbQq9tbaT4Ha9mq-K1T1EPf1A5WV-VhlifTJfOD6VH2FQ-GrOUiL6CFP-A4EExgZ9fNjT8dBeQnSYj8Hco_-czeWgXTW-nZKiU5vfpZHZg-v5wxuMdv2Yv7wMUmW5QZ58nYsWqcJS9cbXe4FCX0KQVTIF-hvxRi_G2Hs3T9nD1j0ABoeECTtTTNw"); background-size: cover;'></div>
</div>
</div>
</div>
</header>
<!-- Main Content -->
<main class="mx-auto flex max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
<!-- Page Heading -->
<div class="mb-8">
<h2 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-4xl">Viviendas en Madrid</h2>
<p class="mt-2 text-lg text-slate-500 dark:text-slate-400">Selecciona los inmuebles que te interesan para contactar con varios a la vez.</p>
</div>
<!-- Filter Chips -->
<div class="mb-8 flex flex-wrap gap-3">
<button class="group flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750">
<span>Precio</span>
<span class="material-symbols-outlined text-[20px]">expand_more</span>
</button>
<button class="group flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750">
<span>Tipo de vivienda</span>
<span class="material-symbols-outlined text-[20px]">expand_more</span>
</button>
<button class="group flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750">
<span>Habitaciones</span>
<span class="material-symbols-outlined text-[20px]">expand_more</span>
</button>
<button class="group flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750">
<span>Más filtros</span>
<span class="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
<!-- Property List -->
<div class="flex flex-col gap-4">
<!-- Item 1 (Selected) -->
<div class="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:shadow-none dark:ring-1 dark:ring-white/10 sm:flex-row sm:items-center">
<!-- Checkbox (Absolute positioning for mobile, relative for desktop flow) -->
<div class="absolute right-4 top-4 z-10 sm:relative sm:right-auto sm:top-auto">
<input checked="" class="h-6 w-6 cursor-pointer rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700" type="checkbox"/>
</div>
<!-- Image -->
<div class="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-48" data-alt="Modern apartment interior with bright living room" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDUXV9WMlMnQX3-gVg12mtwHpt8-598gsF9HSJhhvOngDwYwUEW0OFaaJOnxJHwCf9zscWtkrXqfv1_58eFSm0n6tOOkX4v1fnDQZLdnFMwHhrZuqqM2hDQLGxUMCeeR3nGSknMp-PWlZB-DpQ1h0MEm5IL6DcSBZu0oXDUppObBFIzmm-_dUxhERPbL0kZYmTJcVxTQHS45Sw_Iyjk2uAfUhIWfZSXygEcTmPXxgl-blx-XxmWIfag8TUVPJ5QGU6WSf8vGVrzOw"); background-size: cover; background-position: center;'>
<div class="absolute bottom-2 left-2 rounded bg-slate-900/75 px-1.5 py-0.5 text-xs font-bold text-white">Recomendado</div>
</div>
<!-- Content -->
<div class="flex flex-1 flex-col gap-1 pr-8 sm:pr-0">
<div class="flex items-baseline gap-2">
<span class="text-xl font-bold text-slate-900 dark:text-white">350.000 €</span>
<span class="text-sm font-medium text-slate-500 line-through dark:text-slate-500">365.000 €</span>
</div>
<h3 class="font-semibold text-slate-900 line-clamp-1 dark:text-slate-100">Piso reformado en Calle de Alcalá</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Madrid, Barrio de Salamanca</p>
<div class="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bed</span> 3 habs.</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bathtub</span> 2 baños</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">square_foot</span> 95 m²</span>
</div>
</div>
<!-- Contact Buttons (Hidden on mobile selection mode usually, but visible here for context) -->
<div class="mt-2 flex gap-2 sm:mt-0 sm:flex-col sm:items-end sm:gap-2">
<button class="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 sm:flex-none">Ver detalles</button>
</div>
</div>
<!-- Item 2 (Selected) -->
<div class="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:shadow-none dark:ring-1 dark:ring-white/10 sm:flex-row sm:items-center">
<div class="absolute right-4 top-4 z-10 sm:relative sm:right-auto sm:top-auto">
<input checked="" class="h-6 w-6 cursor-pointer rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700" type="checkbox"/>
</div>
<div class="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-48" data-alt="Luxurious penthouse terrace with city view" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0Oug4Au2Z1NFbRB61ksnTI3pN3XDoIgVaH8tFoUnI4q4KcjWdtxlI4Qvyp1vTcZ19lBDnueiTqHtFKNHuODGjT6uhp2MuEXoVZ0Og0UbTKmzJ4dIdt5WQlKSynLDtsgLSXiR9G0JCYToMkbH-ympfG2dUXg7_B-3BuM4jOQzmt1r3warypG3VswAe9kdQiFJFmcGsyEGy0xCc9URCeSHkbp6Zzc8Aj_gThNOvMqW_oS7Dwm-JJq5vkHG9lFBp3Vz99-lzO1FI9A"); background-size: cover; background-position: center;'>
</div>
<div class="flex flex-1 flex-col gap-1 pr-8 sm:pr-0">
<div class="flex items-baseline gap-2">
<span class="text-xl font-bold text-slate-900 dark:text-white">520.000 €</span>
</div>
<h3 class="font-semibold text-slate-900 line-clamp-1 dark:text-slate-100">Ático luminoso con terraza</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Madrid, Chamartín</p>
<div class="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bed</span> 2 habs.</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bathtub</span> 2 baños</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">square_foot</span> 110 m²</span>
</div>
</div>
<div class="mt-2 flex gap-2 sm:mt-0 sm:flex-col sm:items-end sm:gap-2">
<button class="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 sm:flex-none">Ver detalles</button>
</div>
</div>
<!-- Item 3 (Not Selected) -->
<div class="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:shadow-none dark:ring-1 dark:ring-white/10 sm:flex-row sm:items-center">
<div class="absolute right-4 top-4 z-10 sm:relative sm:right-auto sm:top-auto">
<input class="h-6 w-6 cursor-pointer rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700" type="checkbox"/>
</div>
<div class="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-48" data-alt="Cozy bedroom with large window" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_Nl5XqQD9cd1eHzNbeJ8Xh2CoSjIb2_2Ta9hL2CiT9dWvYP85Onbuda6mAmlsav69-MjXPt1f49vVDhlhlLqP7w1mBrneR7Nw3J2jnoTRk5XQBAMYFbu3Q0dM0GE8a0R6VxZKvBNHAsTJ5IW0wHxzKopgx3Q1---UdjJ5GcVN2tBhPOS9LbFVkoBFhlAoRXtIu5pdXpAoz41uHRwgBlaZoPCsVd4oTQ5QvKJyXFfbsnCorkLrpliyegVD3ou3CFtFIpN-OyEobQ"); background-size: cover; background-position: center;'>
</div>
<div class="flex flex-1 flex-col gap-1 pr-8 sm:pr-0">
<div class="flex items-baseline gap-2">
<span class="text-xl font-bold text-slate-900 dark:text-white">285.000 €</span>
</div>
<h3 class="font-semibold text-slate-900 line-clamp-1 dark:text-slate-100">Apartamento céntrico</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Madrid, Malasaña</p>
<div class="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bed</span> 2 habs.</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bathtub</span> 1 baño</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">square_foot</span> 75 m²</span>
</div>
</div>
<div class="mt-2 flex gap-2 sm:mt-0 sm:flex-col sm:items-end sm:gap-2">
<button class="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 sm:flex-none">Ver detalles</button>
</div>
</div>
<!-- Item 4 (Not Selected) -->
<div class="group relative flex flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-slate-800 dark:shadow-none dark:ring-1 dark:ring-white/10 sm:flex-row sm:items-center">
<div class="absolute right-4 top-4 z-10 sm:relative sm:right-auto sm:top-auto">
<input class="h-6 w-6 cursor-pointer rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700" type="checkbox"/>
</div>
<div class="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg sm:h-32 sm:w-48" data-alt="Modern kitchen with island" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJJYZhP7sgiU6KQem6a3zOkaHwgqYDnMrbJVjibrBreFyLYay_D1J1sMQe3laDMPpbhdB1E_BsN1t5V1CoV4rx6rp-nBHOaXgWBElYz-n_9Wa6xtiRHztZytd_8v-94KVhyB_tc8RM9Dx6cf5e0a-iID6F5_lDPoZOu5T2Uu2HiQC-DIOUJV_fcvBuut_CKAVohdf5Z7vh1OFmL7oNqnBgn20PzfhypfL4ourXraTJTZ1yT_kcBhMmDpJUamK2tQ-x44Ku2lKBBQ"); background-size: cover; background-position: center;'>
</div>
<div class="flex flex-1 flex-col gap-1 pr-8 sm:pr-0">
<div class="flex items-baseline gap-2">
<span class="text-xl font-bold text-slate-900 dark:text-white">410.000 €</span>
</div>
<h3 class="font-semibold text-slate-900 line-clamp-1 dark:text-slate-100">Loft industrial con garaje</h3>
<p class="text-sm text-slate-500 dark:text-slate-400">Madrid, Arganzuela</p>
<div class="mt-2 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bed</span> 1 hab.</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">bathtub</span> 1 baño</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[18px]">square_foot</span> 120 m²</span>
</div>
</div>
<div class="mt-2 flex gap-2 sm:mt-0 sm:flex-col sm:items-end sm:gap-2">
<button class="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 sm:flex-none">Ver detalles</button>
</div>
</div>
</div>
</main>
<!-- Sticky Bottom Action Bar -->
<div class="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:border-slate-700 dark:bg-slate-900/95 dark:supports-[backdrop-filter]:bg-slate-900/80">
<div class="mx-auto flex h-auto max-w-7xl flex-col items-center justify-between gap-4 px-4 py-3 sm:h-20 sm:flex-row sm:px-6 lg:px-8">
<!-- Left: Counter & Thumbnails -->
<div class="flex w-full items-center justify-between gap-6 sm:w-auto sm:justify-start">
<div class="flex flex-col">
<p class="text-sm font-bold text-slate-900 dark:text-white">2 seleccionados</p>
<button class="text-xs font-medium text-slate-500 hover:text-primary dark:text-slate-400">Borrar selección</button>
</div>
<!-- Mini Cards Row (Hidden on very small screens if needed, but useful) -->
<div class="mini-cards-scroll flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
<div class="relative h-12 w-16 shrink-0 overflow-hidden rounded border border-slate-200 dark:border-slate-700" data-alt="Thumbnail of selected apartment 1" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3Su0dmQEF8HUMO4AWwEuDNvdA2aCB3CvPf09VYfb5O0uJedFfsZNLFKHHtJKmkxG0qrmVo2vSH4XTj6zYJlZ8d5QvQa5W4wMHOJFCI2Ucfh8qYlAVZopMQfu0RuMCU2CjseGrsb0Mau-XRdYzge7SeuJZOTY0XoBhdwYiRq3zBeJpqY680gsRNsnUN8_brwuhfZ2Hzh-eAbW5YZQNwlVvwrBpsKAfcqeXxBEQYwEVRTp9BTnmYI1rctJ0gs_XNLHVyREtR0ZUvA"); background-size: cover; background-position: center;'>
<div class="absolute inset-0 bg-primary/10"></div>
<!-- Remove button for this specific item -->
<div class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm hover:bg-red-500">
<span class="material-symbols-outlined text-[10px]">close</span>
</div>
</div>
<div class="relative h-12 w-16 shrink-0 overflow-hidden rounded border border-slate-200 dark:border-slate-700" data-alt="Thumbnail of selected apartment 2" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd2EskxJUzhzvz_ojnofYZP5OVgh10n9XSM9QTEJz918c5hf-0_RICXAoC8QxplVXvLAwGJ4KgnGfKheiQhCIEemGCbc9qNd_yLYy_uMnkXYaWeJLpZ1yI7DxF95FBCo3MD9-TMlc-hCEBtob9PB98WlY7JKuTJxukYLCJaUL-hphKjUkj8_FALk9rcHi4i-YK_iRFEnEsQneatL96TN1CC9YYknOcCeuF0rSYkg_s4Mx619HJMXEPViC3xXiXbP0qx21JeTBb4g"); background-size: cover; background-position: center;'>
<div class="absolute inset-0 bg-primary/10"></div>
<div class="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm hover:bg-red-500">
<span class="material-symbols-outlined text-[10px]">close</span>
</div>
</div>
</div>
</div>
<!-- Right: Action Button & Helper Text -->
<div class="flex w-full flex-col items-end gap-2 sm:w-auto sm:flex-row sm:items-center">
<p class="hidden text-right text-xs text-slate-500 dark:text-slate-400 lg:block">
                    Tu solicitud se enviará individualmente <br/> a cada anunciante seleccionado.
                </p>
<button class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition hover:bg-blue-600 focus:ring-4 focus:ring-primary/20 sm:w-auto">
<span class="material-symbols-outlined text-[20px]">send</span>
<span>Solicitar información</span>
</button>
</div>
</div>
</div>`;
const EXTRA_CSS = `/* Custom scrollbar for the mini-cards container */
        .mini-cards-scroll::-webkit-scrollbar {
            height: 4px;
        }
        .mini-cards-scroll::-webkit-scrollbar-track {
            background: transparent;
        }
        .mini-cards-scroll::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
        }
        .dark .mini-cards-scroll::-webkit-scrollbar-thumb {
            background-color: #475569;
        }`;

export default function SeleccionMultipleDeAnuncios() {
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
