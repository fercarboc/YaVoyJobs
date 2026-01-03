import React from "react";

const TITLE = `YaVoy - Colaboradores`;

const BODY_HTML = `<div class="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
<!-- Top Navigation -->
<header class="sticky top-0 z-50 w-full bg-white/80 dark:bg-[#101922]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
  <div class="layout-container flex h-full grow flex-col">
    <div class="px-4 md:px-10 flex flex-1 justify-center py-3">
      <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
        <div class="flex items-center justify-between whitespace-nowrap">
          <div class="flex items-center gap-2">
            <div class="size-8 text-primary">
              <svg class="h-full w-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clip-rule="evenodd" d="M24 4C26.2091 4 28 5.79086 28 8V20H40C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28H28V40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40V28H8C5.79086 28 4 26.2091 4 24C4 21.7909 5.79086 20 8 20H20V8C20 5.79086 21.7909 4 24 4Z" fill="currentColor" fill-rule="evenodd"></path>
              </svg>
            </div>
            <div class="flex flex-col leading-none">
              <h2 class="text-[#0d141b] dark:text-white text-xl font-bold tracking-tight">YaVoy</h2>
              <span class="text-[11px] text-slate-500 dark:text-slate-400">Madrid · Colaboradores</span>
            </div>
          </div>

          <div class="hidden md:flex items-center gap-8">
            <nav class="flex items-center gap-6">
              <a class="text-[#0d141b] dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Inicio</a>
              <a class="text-[#0d141b] dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Soy Cliente</a>
              <a class="text-primary text-sm font-bold leading-normal transition-colors" href="#">Colaboradores</a>
              <a class="text-[#0d141b] dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Seguridad</a>
            </nav>

            <button class="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold shadow-sm">
              <span class="truncate">Acceso Colaboradores</span>
            </button>
          </div>

          <!-- Mobile Menu Icon (Placeholder for responsive design) -->
          <button class="md:hidden text-[#0d141b] dark:text-white">
            <span class="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- Main Content -->
<main class="flex-1">

  <!-- Hero Section -->
  <section class="w-full py-12 md:py-20 px-4 md:px-10 flex justify-center bg-white dark:bg-[#101922]">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <div class="@container">
        <div class="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">

          <!-- Text Content -->
          <div class="flex flex-col gap-6 lg:w-1/2 lg:pr-10">
            <div class="flex flex-col gap-4 text-left">
              <span class="inline-block w-fit rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Para Colaboradores
              </span>

              <h1 class="text-[#0d141b] dark:text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Colabora en tu barrio y genera ingresos por tu tiempo
              </h1>

              <p class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed max-w-[560px]">
                Ayuda a personas y negocios en <strong>Madrid</strong> con tareas puntuales (mudanzas, pequeños portes, recados, mascotas, acompañamientos).
                Tú decides en qué colaboras, cuándo y en qué zona. El acuerdo final se realiza entre las partes.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <button class="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold transition-all shadow-lg hover:shadow-xl">
                <span class="truncate">Crear perfil de Colaborador</span>
              </button>
              <button class="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-transparent border border-slate-200 dark:border-slate-700 text-[#0d141b] dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 text-base font-bold transition-all">
                <span class="truncate">Cómo funciona</span>
              </button>
            </div>

            <div class="flex flex-col gap-2 mt-2">
              <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span class="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                <span>Registro gratuito · Perfil con valoraciones · Chat protegido</span>
              </div>
              <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span class="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                <span>Verificación opcional (selfie + documento) para aumentar confianza</span>
              </div>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="lg:w-1/2 w-full">
            <div class="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-slate-800">
              <div class="absolute inset-0 bg-cover bg-center"
                data-alt="Persona sonriendo con móvil, representando colaboración local"
                style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBUcTlXEuNeycZ4ausITFGmJtPO0pH2BQmJ4J4hR7S32QZ41hcFzyPowXIniyFRNgfeNqkdMQN2D1Qih0rKmMMTOWzuJyFvl4tvtO30j0EeoHq9gFllzkB7qaqoJJ2D1rNjHSDEs7mZ5wDORTrGc9-7DeebiVfxKrlCMaUuGuw1h970J0gGZ24BzLA4kE7TupPGQGKQetn3A6vkgsNnP6W6PdlUcSpBMmRRc7g0mBXImgAeVNXCzwNdnUEDxdhwrPRUflnPEJ4SEg');">
              </div>
              <!-- Decorative overlay gradient -->
              <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="w-full py-16 px-4 md:px-10 flex justify-center bg-background-light dark:bg-background-dark">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">

      <div class="mb-12 text-center md:text-left">
        <h2 class="text-[#0d141b] dark:text-white text-3xl font-bold leading-tight tracking-tight">Cómo funciona</h2>
        <p class="text-slate-500 dark:text-slate-400 mt-2 text-lg">Empieza en tres pasos simples</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-[60px_1fr] gap-x-6 px-4">

        <!-- Step 1 -->
        <div class="hidden md:flex flex-col items-center gap-1 pt-2">
          <div class="flex items-center justify-center size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary">
            <span class="material-symbols-outlined">location_on</span>
          </div>
          <div class="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-2"></div>
        </div>

        <div class="flex flex-1 flex-col pb-12 relative pl-10 md:pl-0 border-l-2 border-slate-200 dark:border-slate-700 md:border-l-0">
          <div class="absolute -left-[21px] top-0 md:hidden flex items-center justify-center size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary border-4 border-background-light dark:border-background-dark">
            <span class="material-symbols-outlined text-[20px]">location_on</span>
          </div>

          <h3 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight mb-2">Explora anuncios por zona</h3>
          <p class="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
            Accede a un mapa o listado y filtra por distrito, barrio o radio. Tú decides dónde quieres colaborar.
          </p>

          <div class="mt-4 w-full h-48 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
            <div class="absolute inset-0 bg-cover bg-center"
              data-alt="Mapa móvil con marcadores en Madrid"
              style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAq7VmtXnW_SYoF5jIaHvH5xbKnX1WZzDsVSJKaapnMnDxIX_r7ddXM7VETC9iET5v4MfqZleJjyywaEC_QYiqSPEm9cKd1PlCcqhC7z5jEuLthUwzGkVrEVzahx6jabeBY2q-UK1Op_Bp-vV6P3o85po3DgbfLyAN7EZKeL0JNs1e7rdHnGLuhijOaCxfHXzBaI1OGAkaQBvY6zFI8cGhIBlqsKWnXBPBiDqs0rsViJCniTwzIkz1yTYM3wY4Iu8ePQGk-lM4wCw'); opacity: 0.85;">
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="hidden md:flex flex-col items-center gap-1">
          <div class="w-[2px] bg-slate-200 dark:bg-slate-700 h-8"></div>
          <div class="flex items-center justify-center size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary">
            <span class="material-symbols-outlined">assignment_turned_in</span>
          </div>
          <div class="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-2"></div>
        </div>

        <div class="flex flex-1 flex-col pb-12 relative pl-10 md:pl-0 border-l-2 border-slate-200 dark:border-slate-700 md:border-l-0">
          <div class="absolute -left-[21px] top-0 md:hidden flex items-center justify-center size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary border-4 border-background-light dark:border-background-dark">
            <span class="material-symbols-outlined text-[20px]">assignment_turned_in</span>
          </div>

          <h3 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight mb-2">Envía tu candidatura</h3>
          <p class="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
            ¿Te interesa un anuncio? Preséntate con un clic. La otra parte verá tu perfil, valoraciones y disponibilidad.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="hidden md:flex flex-col items-center gap-1 pb-3">
          <div class="w-[2px] bg-slate-200 dark:bg-slate-700 h-8"></div>
          <div class="flex items-center justify-center size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary">
            <span class="material-symbols-outlined">chat</span>
          </div>
        </div>

        <div class="flex flex-1 flex-col pb-4 relative pl-10 md:pl-0 border-l-2 border-transparent md:border-l-0">
          <div class="absolute -left-[21px] top-0 md:hidden flex items-center justify-center size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary border-4 border-background-light dark:border-background-dark">
            <span class="material-symbols-outlined text-[20px]">chat</span>
          </div>

          <h3 class="text-[#0d141b] dark:text-white text-xl font-bold leading-tight mb-2">Chat seguro para cerrar detalles</h3>
          <p class="text-slate-600 dark:text-slate-300 text-base font-normal leading-relaxed">
            Cuando exista interés mutuo, se habilita el chat para concretar hora, duración, condiciones y puntos de encuentro.
          </p>
        </div>

      </div>

      <!-- Soft legal note -->
      <div class="mt-10 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#101922] p-5">
        <div class="flex items-start gap-3">
          <span class="material-symbols-outlined text-slate-400">gavel</span>
          <div class="flex flex-col gap-1">
            <h4 class="text-sm font-bold text-[#0d141b] dark:text-white">Nota de transparencia</h4>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              YaVoy facilita la conexión y herramientas digitales. El acuerdo final (importe, tiempos y condiciones) se realiza entre las partes.
              Si una colaboración pudiera encajar en una relación regulada, corresponde a las partes cumplir la normativa aplicable.
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- Feature / Trust Section -->
  <section class="w-full py-16 px-4 md:px-10 flex justify-center bg-white dark:bg-[#101922]">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <div class="flex flex-col gap-10 @container">

        <div class="flex flex-col gap-4 text-center md:text-left">
          <h2 class="text-[#0d141b] dark:text-white tracking-tight text-3xl md:text-4xl font-bold leading-tight max-w-[820px]">
            Haz que tu perfil inspire confianza
          </h2>
          <p class="text-slate-600 dark:text-slate-300 text-lg font-normal leading-relaxed max-w-[820px]">
            Verificación, valoraciones y un perfil cuidado aumentan tus opciones de ser elegido por personas y negocios de tu zona.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div class="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-[#15202b] p-6 hover:shadow-lg transition-shadow">
            <div class="size-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm text-primary">
              <span class="material-symbols-outlined">verified</span>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Verificación de Identidad</h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
                Sube selfie y documento para revisión. Los perfiles verificados suelen generar más confianza.
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-[#15202b] p-6 hover:shadow-lg transition-shadow">
            <div class="size-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm text-primary">
              <span class="material-symbols-outlined">star</span>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Reputación y Valoraciones</h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
                Tras cada colaboración, la valoración ayuda a posicionarte y a que te elijan con más seguridad.
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-background-light dark:bg-[#15202b] p-6 hover:shadow-lg transition-shadow">
            <div class="size-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm text-primary">
              <span class="material-symbols-outlined">person</span>
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-[#0d141b] dark:text-white text-lg font-bold leading-tight">Perfil claro y completo</h3>
              <p class="text-slate-500 dark:text-slate-400 text-sm font-normal leading-relaxed">
                Destaca habilidades, disponibilidad y zona. Un buen perfil reduce preguntas y acelera acuerdos.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="w-full py-20 px-4 md:px-10 flex justify-center bg-primary">
    <div class="layout-content-container flex flex-col items-center text-center max-w-[800px] flex-1 gap-6">
      <h2 class="text-white text-3xl md:text-4xl font-black tracking-tight">
        ¿Listo para empezar con colaboraciones cerca de ti?
      </h2>
      <p class="text-blue-100 text-lg max-w-[650px]">
        Crea tu perfil, configura tu zona y empieza a recibir candidaturas y chats cuando exista interés mutuo.
      </p>
      <button class="flex items-center justify-center rounded-lg h-14 px-8 bg-white text-primary text-lg font-bold hover:bg-slate-100 transition-colors shadow-xl">
        Crear cuenta de Colaborador
      </button>
    </div>
  </section>

</main>

<!-- Footer -->
<footer class="bg-background-light dark:bg-[#0b1218] pt-16 pb-8 border-t border-slate-200 dark:border-slate-800">
  <div class="layout-container flex flex-col items-center">

    <div class="px-4 md:px-10 w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
      <div class="col-span-1 md:col-span-1">
        <div class="flex items-center gap-2 mb-4">
          <div class="size-6 text-primary">
            <svg class="h-full w-full" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" d="M24 4C26.2091 4 28 5.79086 28 8V20H40C42.2091 20 44 21.7909 44 24C44 26.2091 42.2091 28 40 28H28V40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40V28H8C5.79086 28 4 26.2091 4 24C4 21.7909 5.79086 20 8 20H20V8C20 5.79086 21.7909 4 24 4Z" fill="currentColor" fill-rule="evenodd"></path>
            </svg>
          </div>
          <span class="text-[#0d141b] dark:text-white font-bold text-lg">YaVoy Madrid</span>
        </div>
        <p class="text-slate-500 dark:text-slate-400 text-sm">
          Plataforma de colaboración local para conectar necesidades con soluciones en tu barrio.
        </p>
      </div>

      <div>
        <h4 class="text-[#0d141b] dark:text-white font-bold mb-4">Plataforma</h4>
        <ul class="flex flex-col gap-2">
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Soy Cliente</a></li>
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Colaboradores</a></li>
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Seguridad</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-[#0d141b] dark:text-white font-bold mb-4">Soporte</h4>
        <ul class="flex flex-col gap-2">
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Centro de Ayuda</a></li>
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Contacto</a></li>
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Normas de la comunidad</a></li>
        </ul>
      </div>

      <div>
        <h4 class="text-[#0d141b] dark:text-white font-bold mb-4">Legal</h4>
        <ul class="flex flex-col gap-2">
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Términos de uso</a></li>
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Política de privacidad</a></li>
          <li><a class="text-slate-500 dark:text-slate-400 hover:text-primary text-sm" href="#">Cookies</a></li>
        </ul>
      </div>
    </div>

    <div class="w-full max-w-[1200px] border-t border-slate-200 dark:border-slate-800 pt-8 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-slate-400 text-sm">© 2026 YaVoy Madrid. Todos los derechos reservados.</p>
      <div class="flex gap-4">
        <a class="text-slate-400 hover:text-primary" href="#"><span class="material-symbols-outlined text-lg">language</span></a>
        <a class="text-slate-400 hover:text-primary" href="#"><span class="material-symbols-outlined text-lg">public</span></a>
      </div>
    </div>

  </div>
</footer>
</div>`;

const EXTRA_CSS = `body {
  font-family: 'Inter', sans-serif;
}
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
  font-size: 24px;
}`;

export default function Colaboradores() {
  React.useEffect(() => {
    document.title = TITLE;
  }, []);

  return (
    <div className="min-h-screen">
      {EXTRA_CSS && <style dangerouslySetInnerHTML={{ __html: EXTRA_CSS }} />}
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
    </div>
  );
}
