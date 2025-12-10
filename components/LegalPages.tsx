import React from 'react';

const LegalContainer = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-gray-50 py-12 px-4">
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100">
      <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4">{title}</h1>
      <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
        {children}
      </div>
    </div>
  </div>
);

export const LegalNotice = () => (
  <LegalContainer title="Aviso Legal">
    <p>
      En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), se exponen a continuación los datos identificativos del titular del sitio web.
    </p>
    
    <h3 className="text-xl font-bold text-slate-800 mt-6">1. Identidad del Titular</h3>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Titular:</strong> YaVoy App</li>
      <li><strong>Domicilio Social:</strong> Madrid, España</li>
      <li><strong>Email de contacto:</strong> hola@yavoy.app</li>
      <li><strong>Actividad:</strong> Plataforma tecnológica de intermediación de servicios de proximidad.</li>
    </ul>

    <h3 className="text-xl font-bold text-slate-800 mt-6">2. Objeto</h3>
    <p>
      El presente Aviso Legal regula el acceso y la utilización del sitio web YaVoy (en adelante, el "Sitio Web"), que ponemos a disposición de los usuarios de Internet interesados en nuestros servicios y contenidos.
    </p>
    <p>
      El acceso al Sitio Web implica la aceptación sin reservas del presente Aviso Legal.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">3. Uso del Sitio Web</h3>
    <p>
      El Usuario se compromete a utilizar el Sitio Web, los contenidos y servicios de conformidad con la Ley, el presente Aviso Legal, las buenas costumbres y el orden público. Del mismo modo, el Usuario se obliga a no utilizar el Sitio Web o los servicios que se presten a través de él con fines o efectos ilícitos o contrarios al contenido del presente Aviso Legal, lesivos de los intereses o derechos de terceros, o que de cualquier forma pueda dañar, inutilizar o deteriorar el Sitio Web o sus servicios.
    </p>
  </LegalContainer>
);

export const PrivacyPolicy = () => (
  <LegalContainer title="Política de Privacidad">
    <p>
      En YaVoy nos tomamos muy en serio la privacidad de tus datos. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos tu información personal.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">1. Responsable del Tratamiento</h3>
    <p>
      Los datos personales recabados a través del Sitio Web o la App serán responsabilidad de YaVoy. Puedes contactarnos en hola@yavoy.app para cualquier cuestión relacionada con la protección de datos.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">2. Finalidad del Tratamiento</h3>
    <p>Tratamos tus datos personales para las siguientes finalidades:</p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Gestionar tu registro y cuenta de usuario en la plataforma.</li>
      <li>Conectar a usuarios que solicitan ayuda con aquellos que la ofrecen (Emparejamiento de servicios).</li>
      <li>Gestionar las comunicaciones y notificaciones relacionadas con los servicios.</li>
      <li>Mejorar nuestros servicios y la experiencia de usuario.</li>
      <li>Cumplir con nuestras obligaciones legales.</li>
    </ul>

    <h3 className="text-xl font-bold text-slate-800 mt-6">3. Legitimación</h3>
    <p>
      La base legal para el tratamiento de tus datos es la ejecución del contrato de prestación de servicios (Términos de Uso) al registrarte en la plataforma, así como tu consentimiento expreso para determinadas finalidades.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">4. Destinatarios de los datos</h3>
    <p>
      Tus datos no serán cedidos a terceros salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, proveedores de infraestructura tecnológica como Supabase).
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">5. Derechos del Usuario</h3>
    <p>
      Tienes derecho a acceder, rectificar y suprimir tus datos, así como a limitar su tratamiento u oponerte al mismo, enviando una solicitud a hola@yavoy.app.
    </p>
  </LegalContainer>
);

export const CookiesPolicy = () => (
  <LegalContainer title="Política de Cookies">
    <p>
      Este sitio web utiliza cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias mediante el análisis de sus hábitos de navegación.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">¿Qué son las cookies?</h3>
    <p>
      Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">Tipos de cookies utilizadas</h3>
    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Cookies técnicas:</strong> Son aquellas necesarias para la navegación y el buen funcionamiento de nuestra página web (ej. gestión de la sesión, acceso a áreas restringidas).</li>
      <li><strong>Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
    </ul>

    <h3 className="text-xl font-bold text-slate-800 mt-6">Administración de cookies</h3>
    <p>
      Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
    </p>
  </LegalContainer>
);

export const TermsOfUse = () => (
  <LegalContainer title="Términos de Uso">
    <p>
      Bienvenido a YaVoy. Al registrarse y utilizar nuestra plataforma, usted acepta los siguientes términos y condiciones.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">1. Descripción del Servicio</h3>
    <p>
      YaVoy es una plataforma tecnológica que actúa como intermediaria facilitando el contacto entre usuarios que necesitan realizar tareas domésticas o recados ("Clientes") y usuarios dispuestos a realizar dichas tareas ("Ayudantes" o "Trabajadores"). YaVoy no presta directamente los servicios domésticos.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">2. Registro y Seguridad</h3>
    <p>
      Para utilizar los servicios, debe registrarse y mantener la confidencialidad de su cuenta y contraseña. Usted es responsable de todas las actividades que ocurran bajo su cuenta. Es obligatorio proporcionar información veraz y actualizada.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">3. Relación entre Usuarios</h3>
    <p>
      La relación contractual por la prestación del servicio se establece exclusivamente entre el Cliente y el Ayudante. YaVoy no es parte de dicho contrato ni responsable de la ejecución del servicio, aunque facilitará mecanismos de mediación y seguros en la medida de lo especificado en la plataforma.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">4. Conducta del Usuario</h3>
    <p>
      Los usuarios se comprometen a tratarse con respeto y profesionalidad. Queda prohibido el uso de la plataforma para fines ilegales, discriminatorios o que atenten contra la integridad de las personas.
    </p>

    <h3 className="text-xl font-bold text-slate-800 mt-6">5. Limitación de Responsabilidad</h3>
    <p>
      YaVoy no se hace responsable de los daños o perjuicios que pudieran derivarse de la relación entre usuarios, más allá de la cobertura que pudiera ofrecer el seguro de la plataforma si aplicase.
    </p>
  </LegalContainer>
);