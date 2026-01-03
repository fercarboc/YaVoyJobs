import React from 'react';

const TITLE = `Ficha de Anuncio (Detalle) - YaVoy`;
const BODY_HTML = `<!-- Top Navigation -->
<header class="sticky top-0 z-50 w-full border-b border-[#e7edf3] dark:border-slate-800 bg-white dark:bg-[#111a23]">
<div class="px-4 md:px-10 py-3 flex items-center justify-between">
<div class="flex items-center gap-8">
<!-- Logo -->
<a class="flex items-center gap-2 text-[#0d141b] dark:text-white" href="#">
<div class="size-6 text-primary">
<span class="material-symbols-outlined !text-2xl">real_estate_agent</span>
</div>
<h2 class="text-xl font-bold tracking-tight">YaVoy</h2>
</a>
<!-- Search Bar (Desktop) -->
<div class="hidden md:flex min-w-[320px]">
<div class="flex w-full items-center rounded-lg bg-[#e7edf3] dark:bg-slate-800 px-4 h-10">
<span class="material-symbols-outlined text-[#4c739a] dark:text-slate-400">search</span>
<input class="w-full bg-transparent border-none text-sm text-[#0d141b] dark:text-white placeholder:text-[#4c739a] focus:ring-0 ml-2" placeholder="Buscar por ciudad, referencia..."/>
</div>
</div>
</div>
<div class="flex items-center gap-6">
<nav class="hidden lg:flex items-center gap-6">
<a class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="#">Comprar</a>
<a class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="#">Alquilar</a>
<a class="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="#">Sobre nosotros</a>
</nav>
<div class="flex items-center gap-3">
<button class="hidden sm:flex h-9 px-4 items-center justify-center rounded-lg border border-[#e7edf3] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                        Publicar anuncio
                    </button>
<button class="h-9 px-4 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm shadow-blue-200 dark:shadow-none">
                        Iniciar sesión
                    </button>
</div>
</div>
</div>
</header>
<main class="w-full max-w-[1280px] mx-auto p-4 md:p-6 lg:px-8 flex flex-col gap-6">
<!-- Breadcrumbs & Actions -->
<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
<div class="flex items-center gap-2">
<a class="hover:text-primary" href="#">Venta</a>
<span class="material-symbols-outlined !text-base">chevron_right</span>
<a class="hover:text-primary" href="#">Madrid</a>
<span class="material-symbols-outlined !text-base">chevron_right</span>
<span class="text-slate-900 dark:text-white font-medium">Centro</span>
</div>
<div class="flex gap-3">
<button class="flex items-center gap-1 hover:text-primary transition-colors">
<span class="material-symbols-outlined !text-xl">favorite</span>
<span class="hidden sm:inline">Guardar</span>
</button>
<button class="flex items-center gap-1 hover:text-primary transition-colors">
<span class="material-symbols-outlined !text-xl">share</span>
<span class="hidden sm:inline">Compartir</span>
</button>
</div>
</div>
<!-- Image Gallery -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-2 h-[400px] rounded-xl overflow-hidden relative group cursor-pointer">
<!-- Main Image -->
<div class="md:col-span-2 md:row-span-2 h-full bg-slate-200 dark:bg-slate-800 relative">
<div class="w-full h-full bg-cover bg-center" data-alt="Spacious living room with modern furniture and natural light in Madrid apartment" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsoBVK08s-w21BjnpOLnGOt7Gg9FLHhxE_hFPsCPZBLh0v38BM1vpyHmFkxa-e78NQUDQgyJeKZ9PuoZ5t31gOspY3pvG5S05S0yNSnUb2oAwbDWTF8ObKrzsO6qmOt2i1D9dpjm54eOLwKXIdMpjoyvRX_Cp8ls2U7Ij6vzsUFLM_QYxv_m1VOjy9X4i23x51yjJbCrQO67mCeId3KsDNxfVRnAQDAgi6y8Z32IoBhPPw5PcUy0IIRMIqmne6y4ntLnV_o8fXIg');"></div>
</div>
<!-- Secondary Images -->
<div class="hidden md:block h-full bg-slate-200 dark:bg-slate-800 relative">
<div class="w-full h-full bg-cover bg-center" data-alt="Modern kitchen with white cabinets and marble island" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlTRrQLD24eG0q79ai06Ic4KTwGIV6O5hn5MzBQVjFR8fSy6tqlDnTjC6O1Jc5vYzW1GlfRX0dPJ_DrZuQIuhMj420SblMfMXLCaZ_Gc8REF3Vf5qPU4qMLi5YTW-CVq9sSGDopzat5Cyy-q28s6vSkhpzNHtNUTSTsu_bhGvlOze-1CHkJgcbNrdv-nuf8zDhWLzkMg94kWcPFdSXvPOp-FslSVK7Q0Ypvsn4tvc5YM6jQjldWDGmVks0DKfRDSAC-4gqlvB94Q');"></div>
</div>
<div class="hidden md:block h-full bg-slate-200 dark:bg-slate-800 relative">
<div class="w-full h-full bg-cover bg-center" data-alt="Cozy bedroom with large window and city view" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhBOJXtWuHquSLPMv4kiyOCxyetoIXVnoz-QOH0ITwvj5AsdNP3EL7O9IShMbpEqjGu-v-ZwfoHBOwi4Z4Bpat6K-CMirBIJkbax4YUH6XoIfyzywe4Zw3SHIFVVx9Ap80h6gaTyx_0XXqzHZ2iT7rdEzEQStQtVf0EMnnCFlbmcsZV7sLkBdDwjTN5gb--LH1kXlairxLB1KrpX10E6G_q5F7JRz05w7jYthvr5IlpD7QtRxTrseVbhgZopN_b-7a3_jng8ZGWg');"></div>
</div>
<div class="hidden md:block h-full bg-slate-200 dark:bg-slate-800 relative">
<div class="w-full h-full bg-cover bg-center" data-alt="Elegant bathroom with glass shower and modern fixtures" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2JEPbjxcD_QyBpyoslHg8dyzHaf3zzPeU9cL2wkAsX4sdy2LUYw9GZEISumzAwb8cQpeK-V722UdwLL8hier5qX58WGyCVLJC1kjH6cyieZZX78_VLyZZKP8QICTk3Jb_Tu7HhbDOCw2Cl-oORmyEx3ZP-D4kXjyE7VGXwdDulC5DTH4Go9qwCw-5H-MTSkE4JSRySPZv2iy4j5PC8IHOQGYca4HJSbGUXvmVF7mCllVsCmQmsLbOAjYQFaBzH7BGGwPubUZR4A');"></div>
</div>
<div class="hidden md:block h-full bg-slate-200 dark:bg-slate-800 relative">
<div class="w-full h-full bg-cover bg-center" data-alt="Sunny terrace with plants and outdoor seating area" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQyboLv2SG29cwXojZDPZ04qeTAIlYNi2HGnZjw4vtsAmZ5ReNt8ZhowVDfkvANSbziqbIfaQAqopMGSMY-jxFRhRdhKUOErW-0vb0ybeIPUZ6fYNSsk8yeqKYdUtC1iirubW-6vkDgburMyn337-opTRR18G1HD-w9YL049BCPHFcYrGYh6nmes8wRGqYUJlk42S8XG9NqlOYhF_Ga62Bv6b2Mf_eSDwBJU4b4bNAtDq39LCEOl9KwO8VoU-GhPKqEkis8HnYhg');"></div>
<div class="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors">
<span class="text-white font-bold flex items-center gap-2">
<span class="material-symbols-outlined">grid_view</span>
                         Ver 15 fotos
                     </span>
</div>
</div>
<!-- Mobile Badge -->
<div class="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold md:hidden flex items-center gap-1">
<span class="material-symbols-outlined !text-sm">photo_camera</span> 1/15
            </div>
</div>
<div class="flex flex-col lg:flex-row gap-8 relative">
<!-- Main Content (Left Column) -->
<div class="flex-1 min-w-0">
<!-- Title & Price Header -->
<div class="mb-6 border-b border-slate-200 dark:border-slate-800 pb-6">
<h1 class="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                        Piso luminoso en Centro, Madrid
                    </h1>
<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div class="flex flex-col gap-1">
<p class="text-slate-500 dark:text-slate-400 text-sm">Calle Mayor, Sol</p>
<div class="flex items-center gap-4 text-slate-700 dark:text-slate-300 mt-2 text-sm md:text-base">
<span class="flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
<span class="material-symbols-outlined !text-lg text-primary">bed</span> 3 habs
                                </span>
<span class="flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
<span class="material-symbols-outlined !text-lg text-primary">shower</span> 2 baños
                                </span>
<span class="flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
<span class="material-symbols-outlined !text-lg text-primary">square_foot</span> 95 m²
                                </span>
<span class="flex items-center gap-1 font-medium bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
<span class="material-symbols-outlined !text-lg text-primary">elevator</span> 3ª ext
                                </span>
</div>
</div>
<div class="text-right">
<div class="text-3xl font-bold text-primary">350.000 €</div>
<p class="text-xs text-slate-500 dark:text-slate-400 mt-1">3.684 €/m²</p>
</div>
</div>
</div>
<!-- Description -->
<div class="mb-8">
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3">Descripción</h3>
<div class="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
<p class="mb-4">
                            Magnífica oportunidad en el corazón de la ciudad. Recién reformado con materiales de alta calidad, este piso exterior destaca por su luminosidad y amplitud. La vivienda cuenta con un gran salón-comedor con acceso a balcón, cocina independiente totalmente equipada con electrodomésticos de gama alta.
                        </p>
<p>
                            Dispone de tres dormitorios dobles, el principal con baño en suite y vestidor. Suelos de tarima flotante, aire acondicionado por conductos y calefacción central. Finca señorial con conserje y ascensor. Ubicación inmejorable, a pocos pasos de la Puerta del Sol y Plaza Mayor, con todos los servicios y transporte público a mano.
                        </p>
</div>
<button class="mt-4 text-primary font-medium text-sm hover:underline flex items-center gap-1">
                        Leer más <span class="material-symbols-outlined !text-base">expand_more</span>
</button>
</div>
<!-- Features Grid -->
<div class="mb-8">
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Características</h3>
<div class="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
<div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
<span class="material-symbols-outlined text-slate-400">ac_unit</span>
<span>Aire acondicionado</span>
</div>
<div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
<span class="material-symbols-outlined text-slate-400">local_fire_department</span>
<span>Calefacción</span>
</div>
<div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
<span class="material-symbols-outlined text-slate-400">balcony</span>
<span>Terraza / Balcón</span>
</div>
<div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
<span class="material-symbols-outlined text-slate-400">kitchen</span>
<span>Cocina equipada</span>
</div>
<div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
<span class="material-symbols-outlined text-slate-400">checkroom</span>
<span>Armarios empotrados</span>
</div>
<div class="flex items-center gap-2 text-slate-700 dark:text-slate-300">
<span class="material-symbols-outlined text-slate-400">elevator</span>
<span>Ascensor</span>
</div>
</div>
</div>
<!-- Map (Approximate) -->
<div class="mb-8">
<h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Ubicación aproximada</h3>
<div class="w-full h-64 bg-slate-200 dark:bg-slate-700 rounded-xl relative overflow-hidden group">
<!-- Static Map Background -->
<div class="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Map view of Madrid city center streets" data-location="Madrid" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhG_2lsrJ6Zn5Y5pwTZmn0eOUwmwTx1swaWwZ-2cJ8vBMFmkalHpSQcKgUWne0E9OQi97N1Q_w6UwvY1G8cvGogFR130vcRvF_7Q-K9r4kQEzyT9hYXE7QUAZ_brnhIoQqxEVe6zZ8tM4S_G0GH_utNh5PGiOFm6g7XfV2noY_W4fT6Q73jHT_JZU4An4nAHp5uloAMcBF_r50_L7kAm5MhWVoiu9GFql9icitE3ZdpBB7Pb4aocLai386Z45xAlNod3H4rjxHvw'); filter: grayscale(20%);"></div>
<!-- Radius Overlay -->
<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
<div class="w-32 h-32 bg-primary/20 rounded-full border-2 border-primary/50 animate-pulse"></div>
<div class="w-8 h-8 bg-primary/40 rounded-full absolute"></div>
</div>
<div class="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-3 py-1.5 rounded-lg shadow text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1">
<span class="material-symbols-outlined !text-sm">info</span>
                            Ubicación aproximada por privacidad
                        </div>
</div>
</div>
<!-- Legal Disclaimer -->
<div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 flex gap-3 items-start">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-500 shrink-0 mt-0.5">warning</span>
<div>
<h4 class="text-sm font-bold text-amber-800 dark:text-amber-400">Aviso importante</h4>
<p class="text-sm text-amber-700 dark:text-amber-300/80 mt-1">
                            YaVoy no verifica la disponibilidad ni garantiza la operación. Toda la información mostrada ha sido proporcionada por el anunciante y debe ser verificada independientemente.
                        </p>
</div>
</div>
</div>
<!-- Sidebar (Right Column) -->
<div class="w-full lg:w-[360px] shrink-0">
<div class="sticky top-24 flex flex-col gap-4">
<!-- Advertiser Card -->
<div class="bg-white dark:bg-[#1e2936] rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
<div class="flex items-center gap-4 mb-6">
<div class="size-14 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600">
<!-- Placeholder Avatar -->
<div class="w-full h-full flex items-center justify-center bg-primary/10 text-primary font-bold text-xl">
                                    IS
                                </div>
</div>
<div>
<h4 class="font-bold text-slate-900 dark:text-white">Inmobiliaria Sol</h4>
<div class="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400 mt-0.5">
<span class="flex text-yellow-400">
<span class="material-symbols-outlined !text-sm filled">star</span>
<span class="material-symbols-outlined !text-sm filled">star</span>
<span class="material-symbols-outlined !text-sm filled">star</span>
<span class="material-symbols-outlined !text-sm filled">star</span>
<span class="material-symbols-outlined !text-sm filled">star_half</span>
</span>
<span>(4.8)</span>
</div>
<p class="text-xs text-slate-400 dark:text-slate-500 mt-1">Ref: 839201</p>
</div>
</div>
<!-- Contact Form -->
<form class="flex flex-col gap-3">
<input class="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-primary focus:border-primary placeholder:text-slate-400" placeholder="Nombre" type="text"/>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-primary focus:border-primary placeholder:text-slate-400" placeholder="Email" type="email"/>
<input class="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-primary focus:border-primary placeholder:text-slate-400" placeholder="Teléfono" type="tel"/>
<textarea class="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-primary focus:border-primary placeholder:text-slate-400 resize-none" rows="3">Hola, estoy interesado en este piso en Centro, Madrid. ¿Podría darme más información?</textarea>
<button class="mt-2 w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md shadow-blue-500/20 active:scale-[0.98] flex justify-center items-center gap-2" type="button">
<span class="material-symbols-outlined">mail</span>
                                Solicitar información
                            </button>
</form>
<div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-center">
<button class="text-primary font-medium text-sm flex items-center gap-2 hover:underline">
<span class="material-symbols-outlined">call</span>
                                Ver teléfono
                            </button>
</div>
</div>
<!-- Safety Tip -->
<div class="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 text-xs text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700/50">
<p class="flex gap-2">
<span class="material-symbols-outlined !text-base shrink-0">security</span>
<span>Nunca envíes dinero por adelantado. YaVoy no interviene en las transacciones.</span>
</p>
</div>
</div>
</div>
</div>
</main>
<!-- Footer Simplified -->
<footer class="mt-12 py-8 bg-white dark:bg-[#111a23] border-t border-slate-200 dark:border-slate-800">
<div class="max-w-[1280px] mx-auto px-4 md:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<div class="flex items-center gap-2 text-slate-400">
<div class="size-5">
<span class="material-symbols-outlined">real_estate_agent</span>
</div>
<span class="font-bold text-slate-700 dark:text-slate-300">YaVoy</span>
<span class="text-sm">© 2024</span>
</div>
<div class="flex gap-6 text-sm text-slate-500 dark:text-slate-400">
<a class="hover:text-primary" href="#">Aviso Legal</a>
<a class="hover:text-primary" href="#">Privacidad</a>
<a class="hover:text-primary" href="#">Cookies</a>
</div>
</div>
</footer>`;
const EXTRA_CSS = ``;

export default function FichaDeAnuncioDetalle() {
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
