import React from 'react';

const TITLE = `Panel Gestión Ayuda - Cierre del Servicio`;
const BODY_HTML = `<!-- TopNavBar -->
<div class="w-full bg-white dark:bg-[#1a2632] border-b border-[#e7edf3] dark:border-gray-800">
<div class="max-w-[1280px] mx-auto px-4 sm:px-10">
<header class="flex items-center justify-between h-16 whitespace-nowrap">
<div class="flex items-center gap-4 text-text-main dark:text-white">
<div class="size-8 flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-3xl">handshake</span>
</div>
<h2 class="text-lg font-bold leading-tight tracking-[-0.015em]">YaVoy</h2>
</div>
<div class="hidden md:flex flex-1 justify-end gap-8">
<div class="flex items-center gap-9">
<a class="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Mis Anuncios</a>
<a class="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Buscar Ayuda</a>
<a class="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Mensajes</a>
<a class="text-text-main dark:text-gray-200 text-sm font-medium hover:text-primary transition-colors" href="#">Perfil</a>
</div>
<div class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200 dark:border-gray-700" data-alt="User profile picture of a smiling person" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAXHgLw20EM_O3yArJIeS774k2rtveCOXvcqG4zTL2zAtxVXqnxHTvykFLGOv29Pna1HqBTnydowdWHaWiaCy3-rclBkB9WR0_udUzH5NV2AuBmEjrhReN-68qR9O4zKwix-1ptQvuvIyAWQrmdsZawvXdGdKp0o0EDskugnOwx8M6KqwJrYzvS6dSyz2P-kR8OcgJeRwlL7uP1WPuy_EvBbq55cTlZxW-gqQ_PdRzYOJhq7Tkqffal5UHUh1463faf4VssTHUA5Q");'>
</div>
</div>
<!-- Mobile Menu Icon -->
<div class="md:hidden text-text-main dark:text-white">
<span class="material-symbols-outlined">menu</span>
</div>
</header>
</div>
</div>
<!-- Main Content -->
<main class="flex-1 flex justify-center py-8 px-4 sm:px-6">
<div class="w-full max-w-[720px] flex flex-col gap-6">
<!-- PageHeading -->
<div class="flex flex-col gap-2">
<h1 class="text-text-main dark:text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Cierre del Servicio</h1>
<p class="text-text-secondary dark:text-gray-400 text-base font-normal">Confirma que el trabajo ha terminado y valora tu experiencia.</p>
</div>
<!-- Service Card Summary -->
<div class="rounded-xl bg-white dark:bg-[#1a2632] p-4 shadow-sm border border-gray-100 dark:border-gray-800">
<div class="flex flex-col sm:flex-row items-stretch gap-4">
<div class="w-full sm:w-32 h-32 sm:h-auto shrink-0 rounded-lg bg-center bg-cover" data-alt="Modern living room interior showing cleanliness" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmMkLzrkIDni1xJVL5OUPCtIxcz1q3K-yDJai3HddjeHhWcelWtt8kFAUIv3B4CYOouuCfg3hoxX0CalAaP-1Ou9ujlJDecQWBXHSEFRFbcKW4T7zUt1gttbPmtzOl30IK7FWcXFEjJ5S0GfViF7SiTtQwj67-9BTJIZIZyiQJyjVM9P0hu0_XBgohbrowbFkdVSlcAvQbuXY0oWH4Uzsq4vXi8_1Dsc3VICwUHerOHxSq19biVYJZ_Z71QnwpRIXKxQk3ners4A");'>
</div>
<div class="flex flex-col justify-center flex-1 gap-1">
<div class="flex items-center gap-2 mb-1">
<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                                Pendiente de cierre
                            </span>
</div>
<h3 class="text-text-main dark:text-white text-xl font-bold leading-tight">Limpieza de Hogar</h3>
<div class="flex items-center gap-2 mt-2">
<div class="size-6 rounded-full bg-cover bg-center" data-alt="Portrait of Maria G, the service provider" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBKjbS1FP1UWvPJcqMykqrHU95TL0IxuAdd_rq5uyI1slXyxGGLLgIz6RRMCEnZPsc8dIEIPomhWbaF8uzeKJJBbne1Se67MbFcoHYDhehU5c0O4GCq3r4hf5qgqlgnNOwBI4dQlz9vzxjNbbqYKIRjRiLX71OiOxkoudDUZ_rYkZ0dX_z2xjwdnIttUwqoPQKaNOU4CZVoP0nCPWXOjohu8-Ybtlz8QiAl0tHSfAACszOQ59wCzj1Ukh8D-z1BQ0QzPMXCJKKRjQ");'></div>
<p class="text-text-secondary dark:text-gray-400 text-sm font-normal">Realizado por <span class="text-text-main dark:text-white font-medium">María G.</span></p>
</div>
<p class="text-text-secondary dark:text-gray-500 text-xs mt-1">Fecha: 15 Oct 2023 • Madrid</p>
</div>
</div>
</div>
<!-- Trust Notice (EmptyState adapted) -->
<div class="bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 p-4 flex items-start gap-4">
<div class="bg-white dark:bg-primary/20 p-2 rounded-full shrink-0 text-primary">
<span class="material-symbols-outlined">verified_user</span>
</div>
<div class="flex flex-col">
<p class="text-text-main dark:text-white text-sm font-bold leading-tight mb-1">
                        Las valoraciones ayudan a la confianza de la comunidad.
                    </p>
<p class="text-text-secondary dark:text-gray-400 text-sm font-normal">
                        Tu opinión sincera es vital para mantener la calidad en YaVoy y ayudar a otros usuarios.
                    </p>
</div>
</div>
<!-- Rating Form Section -->
<div class="bg-white dark:bg-[#1a2632] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 sm:p-8 flex flex-col gap-8">
<!-- Star Rating -->
<div class="flex flex-col gap-4">
<h3 class="text-text-main dark:text-white text-xl font-bold leading-tight">¿Cómo fue tu experiencia?</h3>
<div class="flex items-center gap-2 star-rating" dir="ltr">
<!-- Using Material Symbols for Stars with interactive hover effect simulation via CSS above -->
<span class="material-symbols-outlined text-4xl star text-gray-300 dark:text-gray-600 filled font-variation-settings-fill-1 hover:text-primary">star</span>
<span class="material-symbols-outlined text-4xl star text-gray-300 dark:text-gray-600 hover:text-primary">star</span>
<span class="material-symbols-outlined text-4xl star text-gray-300 dark:text-gray-600 hover:text-primary">star</span>
<span class="material-symbols-outlined text-4xl star text-gray-300 dark:text-gray-600 hover:text-primary">star</span>
<span class="material-symbols-outlined text-4xl star text-gray-300 dark:text-gray-600 hover:text-primary">star</span>
</div>
<div class="flex flex-wrap gap-2 mt-2">
<button class="px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-text-secondary dark:text-gray-400 hover:bg-primary/5 hover:border-primary hover:text-primary transition-colors">
                            Puntualidad
                        </button>
<button class="px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-text-secondary dark:text-gray-400 hover:bg-primary/5 hover:border-primary hover:text-primary transition-colors">
                            Amabilidad
                        </button>
<button class="px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-text-secondary dark:text-gray-400 hover:bg-primary/5 hover:border-primary hover:text-primary transition-colors">
                            Eficiencia
                        </button>
<button class="px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 text-sm text-text-secondary dark:text-gray-400 hover:bg-primary/5 hover:border-primary hover:text-primary transition-colors">
                            Limpieza
                        </button>
</div>
</div>
<!-- Comment Section -->
<div class="flex flex-col gap-3">
<label class="text-text-main dark:text-white text-sm font-semibold" for="feedback">Comentario (Opcional)</label>
<textarea class="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 p-3 text-sm text-text-main dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" id="feedback" placeholder="Describe tu experiencia con María G. ¿Qué es lo que más te gustó?" rows="4"></textarea>
<p class="text-xs text-text-secondary dark:text-gray-500 text-right">Mínimo 10 caracteres</p>
</div>
<!-- Action Buttons -->
<div class="flex flex-col-reverse sm:flex-row gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
<button class="flex-1 sm:flex-none px-6 py-3 rounded-lg text-text-secondary dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-bold transition-colors">
                        Reportar un problema
                    </button>
<button class="flex-1 px-6 py-3 rounded-lg bg-primary text-white hover:bg-blue-600 text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2">
<span>Finalizar y Publicar Valoración</span>
<span class="material-symbols-outlined text-lg">send</span>
</button>
</div>
</div>
<p class="text-center text-xs text-text-secondary dark:text-gray-500 mt-4">
                Si el servicio no se realizó, por favor <a class="text-primary underline hover:text-blue-600" href="#">contacta con soporte</a> antes de cerrar.
            </p>
</div>
</main>`;
const EXTRA_CSS = `/* Custom styles for star rating interaction */
        .star-rating:hover .star {
            font-variation-settings: 'FILL' 1;
            color: #137fec; 
        }
        .star-rating .star:hover ~ .star {
            font-variation-settings: 'FILL' 0;
            color: #cbd5e1; 
        }
        .star-rating .star {
            cursor: pointer;
            transition: color 0.2s, font-variation-settings 0.2s;
        }`;

export default function PanelGestionAyudaEmpleoCierre() {
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
