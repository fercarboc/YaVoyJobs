export interface MicroTask {
  id: string;
  name: string;
}

export interface Sector {
  id: string;
  name: string;
  emoji: string;
  description: string;
  microTasks: MicroTask[];
  isPrimary: boolean;
}

export const SECTORS: Sector[] = [
  // SECTORES PRINCIPALES (10)
  {
    id: 'tecnologia-digital',
    name: 'Tecnología y Digital',
    emoji: '💻',
    description: 'Micro-trabajos digitales, remotos o presenciales',
    isPrimary: true,
    microTasks: [
      { id: 'diseno-web', name: 'Diseño web' },
      { id: 'marketing-digital', name: 'Marketing digital' },
      { id: 'gestion-redes', name: 'Gestión de redes sociales' },
      { id: 'procesamiento-datos', name: 'Procesamiento de datos' },
      { id: 'bases-datos', name: 'Bases de datos' },
      { id: 'soporte-tecnico', name: 'Soporte técnico' },
      { id: 'config-ordenadores', name: 'Configuración de ordenadores' },
      { id: 'automatizaciones', name: 'Automatizaciones' },
      { id: 'creacion-contenidos', name: 'Creación de contenidos' },
      { id: 'seo-sem', name: 'SEO / SEM' }
    ]
  },
  {
    id: 'hogar-mantenimiento',
    name: 'Hogar y Mantenimiento',
    emoji: '🏠',
    description: 'Servicios domésticos y de apoyo',
    isPrimary: true,
    microTasks: [
      { id: 'limpieza-hogar', name: 'Limpieza del hogar' },
      { id: 'plancha', name: 'Plancha' },
      { id: 'organizacion-armarios', name: 'Organización de armarios' },
      { id: 'pequenas-reparaciones', name: 'Pequeñas reparaciones' },
      { id: 'pintura-basica', name: 'Pintura básica' },
      { id: 'montaje-muebles', name: 'Montaje de muebles' },
      { id: 'mudanzas-pequenas', name: 'Mudanzas pequeñas' },
      { id: 'limpieza-trasteros', name: 'Limpieza de trasteros' },
      { id: 'jardineria-basica', name: 'Jardinería básica' },
      { id: 'cambio-bombillas', name: 'Cambio de bombillas / enchufes' }
    ]
  },
  {
    id: 'mascotas',
    name: 'Mascotas',
    emoji: '🐾',
    description: 'Servicios para dueños de animales',
    isPrimary: true,
    microTasks: [
      { id: 'pasear-perros', name: 'Pasear perros' },
      { id: 'cuidado-domicilio', name: 'Cuidado a domicilio' },
      { id: 'llevar-veterinario', name: 'Llevar al veterinario' },
      { id: 'alimentacion', name: 'Alimentación' },
      { id: 'educacion-basica', name: 'Educación básica' },
      { id: 'limpieza-espacios', name: 'Limpieza de espacios' },
      { id: 'guarderia-mascotas', name: 'Guardería de mascotas' },
      { id: 'acompanamiento-viajes', name: 'Acompañamiento en viajes' },
      { id: 'administracion-medicacion', name: 'Administración de medicación' },
      { id: 'peluqueria-basica', name: 'Peluquería básica' }
    ]
  },
  {
    id: 'compras-recados',
    name: 'Compras y Recados',
    emoji: '🛒',
    description: 'Ahorro de tiempo para particulares y mayores',
    isPrimary: true,
    microTasks: [
      { id: 'compra-supermercado', name: 'Compra de supermercado' },
      { id: 'compra-farmacias', name: 'Compra en farmacias' },
      { id: 'recogida-pedidos', name: 'Recogida de pedidos' },
      { id: 'devoluciones', name: 'Devoluciones' },
      { id: 'envios-puntuales', name: 'Envíos puntuales' },
      { id: 'recados-admin', name: 'Recados administrativos' },
      { id: 'acompanamiento-gestiones', name: 'Acompañamiento a gestiones' },
      { id: 'entregas-locales', name: 'Entregas locales' },
      { id: 'compra-regalos', name: 'Compra de regalos' },
      { id: 'colas-esperas', name: 'Colas y esperas' }
    ]
  },
  {
    id: 'hosteleria-eventos',
    name: 'Hostelería y Eventos',
    emoji: '🍽️',
    description: 'Muy demandado para micro-trabajos',
    isPrimary: true,
    microTasks: [
      { id: 'camarero-horas', name: 'Camarero por horas' },
      { id: 'ayudante-cocina', name: 'Ayudante de cocina' },
      { id: 'montaje-eventos', name: 'Montaje de eventos' },
      { id: 'recogida-salas', name: 'Recogida de salas' },
      { id: 'catering-puntual', name: 'Catering puntual' },
      { id: 'atencion-barra', name: 'Atención en barra' },
      { id: 'azafatos', name: 'Azafatos/as' },
      { id: 'control-accesos', name: 'Control de accesos' },
      { id: 'limpieza-post-evento', name: 'Limpieza post-evento' },
      { id: 'reposicion', name: 'Reposición' }
    ]
  },
  {
    id: 'transporte-reparto',
    name: 'Transporte y Reparto',
    emoji: '🚚',
    description: 'Servicios rápidos y por horas',
    isPrimary: true,
    microTasks: [
      { id: 'reparto-local', name: 'Reparto local' },
      { id: 'mensajeria-urbana', name: 'Mensajería urbana' },
      { id: 'mudanzas-pequenas-trans', name: 'Mudanzas pequeñas' },
      { id: 'transporte-paquetes', name: 'Transporte de paquetes' },
      { id: 'traslado-personas', name: 'Traslado de personas' },
      { id: 'conductor-horas', name: 'Conductor por horas' },
      { id: 'recogida-muebles', name: 'Recogida de muebles' },
      { id: 'transporte-compras', name: 'Transporte de compras' },
      { id: 'ayuda-vehiculos', name: 'Ayuda con vehículos' },
      { id: 'traslado-aeropuerto', name: 'Traslado al aeropuerto' }
    ]
  },
  {
    id: 'mayores-dependencia',
    name: 'Personas Mayores y Dependencia',
    emoji: '👴',
    description: 'Sector clave y en crecimiento',
    isPrimary: true,
    microTasks: [
      { id: 'acompanamiento', name: 'Acompañamiento' },
      { id: 'paseos', name: 'Paseos' },
      { id: 'ayuda-hogar', name: 'Ayuda en el hogar' },
      { id: 'control-medicacion', name: 'Control de medicación' },
      { id: 'acompanar-medico', name: 'Acompañar al médico' },
      { id: 'compras-mayores', name: 'Compras' },
      { id: 'estimulacion-cognitiva', name: 'Estimulación cognitiva' },
      { id: 'conversacion-compania', name: 'Conversación / compañía' },
      { id: 'apoyo-tecnologico', name: 'Apoyo tecnológico' },
      { id: 'respiro-familiar', name: 'Respiro familiar' }
    ]
  },
  {
    id: 'educacion-formacion',
    name: 'Educación y Formación',
    emoji: '📚',
    description: 'Micro-clases y apoyo puntual',
    isPrimary: true,
    microTasks: [
      { id: 'clases-particulares', name: 'Clases particulares' },
      { id: 'apoyo-escolar', name: 'Apoyo escolar' },
      { id: 'idiomas', name: 'Idiomas' },
      { id: 'informatica-basica', name: 'Informática básica' },
      { id: 'refuerzo-universitario', name: 'Refuerzo universitario' },
      { id: 'preparacion-examenes', name: 'Preparación exámenes' },
      { id: 'clases-online', name: 'Clases online' },
      { id: 'apoyo-ninos', name: 'Apoyo a niños' },
      { id: 'tecnicas-estudio', name: 'Técnicas de estudio' },
      { id: 'formacion-adultos', name: 'Formación adultos' }
    ]
  },
  {
    id: 'comercio-negocios',
    name: 'Comercio y Negocios',
    emoji: '🏪',
    description: 'Apoyo operativo a comercios',
    isPrimary: true,
    microTasks: [
      { id: 'dependiente-horas', name: 'Dependiente por horas' },
      { id: 'reposicion-comercio', name: 'Reposición' },
      { id: 'inventarios', name: 'Inventarios' },
      { id: 'atencion-cliente', name: 'Atención al cliente' },
      { id: 'caja', name: 'Caja' },
      { id: 'etiquetado', name: 'Etiquetado' },
      { id: 'montaje-escaparates', name: 'Montaje de escaparates' },
      { id: 'promocion-productos', name: 'Promoción de productos' },
      { id: 'degustaciones', name: 'Degustaciones' },
      { id: 'apoyo-rebajas', name: 'Apoyo en rebajas' }
    ]
  },
  {
    id: 'salud-bienestar',
    name: 'Salud, Bienestar y Estética',
    emoji: '💆',
    description: 'Servicios personales y de cuidado',
    isPrimary: true,
    microTasks: [
      { id: 'masajes', name: 'Masajes' },
      { id: 'entrenador-personal', name: 'Entrenador personal' },
      { id: 'yoga-pilates', name: 'Yoga / pilates' },
      { id: 'fisioterapia-basica', name: 'Fisioterapia básica' },
      { id: 'peluqueria-domicilio', name: 'Peluquería a domicilio' },
      { id: 'manicura-pedicura', name: 'Manicura / pedicura' },
      { id: 'estetica-basica', name: 'Estética básica' },
      { id: 'acompanamiento-saludable', name: 'Acompañamiento saludable' },
      { id: 'cuidado-postural', name: 'Cuidado postural' },
      { id: 'rutinas-personalizadas', name: 'Rutinas personalizadas' }
    ]
  },

  // SECTORES SECUNDARIOS (10)
  {
    id: 'creatividad-arte',
    name: 'Creatividad y Arte',
    emoji: '🎨',
    description: 'Servicios creativos y artísticos',
    isPrimary: false,
    microTasks: [
      { id: 'fotografia', name: 'Fotografía' },
      { id: 'video', name: 'Vídeo' },
      { id: 'diseno-grafico', name: 'Diseño gráfico' },
      { id: 'ilustracion', name: 'Ilustración' },
      { id: 'edicion-contenido', name: 'Edición de contenido' }
    ]
  },
  {
    id: 'administracion-oficina',
    name: 'Administración y Oficina',
    emoji: '📋',
    description: 'Tareas administrativas',
    isPrimary: false,
    microTasks: [
      { id: 'gestion-documentos', name: 'Gestión de documentos' },
      { id: 'facturacion', name: 'Facturación' },
      { id: 'introduccion-datos', name: 'Introducción de datos' },
      { id: 'atencion-telefonica', name: 'Atención telefónica' }
    ]
  },
  {
    id: 'construccion-oficios',
    name: 'Construcción y Oficios',
    emoji: '🔧',
    description: 'Oficios técnicos básicos',
    isPrimary: false,
    microTasks: [
      { id: 'albanileria-basica', name: 'Albañilería básica' },
      { id: 'fontaneria-basica', name: 'Fontanería básica' },
      { id: 'electricidad-basica', name: 'Electricidad básica' },
      { id: 'carpinteria', name: 'Carpintería' },
      { id: 'soldadura-ligera', name: 'Soldadura ligera' }
    ]
  },
  {
    id: 'agricultura-campo',
    name: 'Agricultura y Campo',
    emoji: '🌾',
    description: 'Trabajos agrícolas y rurales',
    isPrimary: false,
    microTasks: [
      { id: 'recoleccion', name: 'Recolección' },
      { id: 'huertos-urbanos', name: 'Huertos urbanos' },
      { id: 'mantenimiento-fincas', name: 'Mantenimiento fincas' },
      { id: 'riego', name: 'Riego' },
      { id: 'limpieza-parcelas', name: 'Limpieza de parcelas' }
    ]
  },
  {
    id: 'turismo-alojamiento',
    name: 'Turismo y Alojamiento',
    emoji: '🏨',
    description: 'Servicios para alojamientos turísticos',
    isPrimary: false,
    microTasks: [
      { id: 'limpieza-apartamentos', name: 'Limpieza de apartamentos' },
      { id: 'checkin-checkout', name: 'Check-in / check-out' },
      { id: 'atencion-huespedes', name: 'Atención huéspedes' },
      { id: 'mantenimiento-basico', name: 'Mantenimiento básico' }
    ]
  },
  {
    id: 'seguridad-control',
    name: 'Seguridad y Control',
    emoji: '🛡️',
    description: 'Servicios de vigilancia',
    isPrimary: false,
    microTasks: [
      { id: 'vigilancia-eventos', name: 'Vigilancia eventos' },
      { id: 'control-accesos-seg', name: 'Control accesos' },
      { id: 'supervision-nocturna', name: 'Supervisión nocturna' }
    ]
  },
  {
    id: 'marketing-calle',
    name: 'Marketing de Calle',
    emoji: '📣',
    description: 'Promoción y publicidad',
    isPrimary: false,
    microTasks: [
      { id: 'reparto-flyers', name: 'Reparto de flyers' },
      { id: 'promociones', name: 'Promociones' },
      { id: 'encuestas', name: 'Encuestas' },
      { id: 'street-marketing', name: 'Street marketing' }
    ]
  },
  {
    id: 'tecnologia-domestica',
    name: 'Tecnología Doméstica',
    emoji: '📱',
    description: 'Instalación y configuración',
    isPrimary: false,
    microTasks: [
      { id: 'instalacion-wifi', name: 'Instalación WiFi' },
      { id: 'smart-tv', name: 'Smart TV' },
      { id: 'domotica-basica', name: 'Domótica básica' },
      { id: 'camaras', name: 'Cámaras' },
      { id: 'config-apps', name: 'Configuración apps' }
    ]
  },
  {
    id: 'moda-textil',
    name: 'Moda y Textil',
    emoji: '👗',
    description: 'Servicios de costura y moda',
    isPrimary: false,
    microTasks: [
      { id: 'arreglos-ropa', name: 'Arreglos de ropa' },
      { id: 'costura', name: 'Costura' },
      { id: 'personal-shopper', name: 'Personal shopper' },
      { id: 'organizacion-armarios-moda', name: 'Organización de armarios' }
    ]
  },
  {
    id: 'otros-servicios',
    name: 'Otros Servicios',
    emoji: '⚙️',
    description: 'Servicios diversos',
    isPrimary: false,
    microTasks: [
      { id: 'servicios-puntuales', name: 'Servicios puntuales' },
      { id: 'trabajos-urgentes', name: 'Trabajos urgentes' },
      { id: 'ayudas-personalizadas', name: 'Ayudas personalizadas' },
      { id: 'encargos-especiales', name: 'Encargos especiales' }
    ]
  }
];

export const getPrimarySectors = () => SECTORS.filter(s => s.isPrimary);
export const getSecondarySectors = () => SECTORS.filter(s => !s.isPrimary);
export const getSectorById = (id: string) => SECTORS.find(s => s.id === id);
export const getAllSectors = () => SECTORS;
