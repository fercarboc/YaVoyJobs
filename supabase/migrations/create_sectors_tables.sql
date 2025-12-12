-- Drop the constraint if exists
ALTER TABLE "VoyUsers" DROP CONSTRAINT IF EXISTS check_valid_sector;

-- Create Sectors table
CREATE TABLE IF NOT EXISTS "VoySectors" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "emoji" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "is_primary" BOOLEAN NOT NULL DEFAULT true,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create MicroTasks table
CREATE TABLE IF NOT EXISTS "VoyMicroTasks" (
  "id" TEXT PRIMARY KEY,
  "sector_id" TEXT NOT NULL REFERENCES "VoySectors"("id") ON DELETE CASCADE,
  "name" TEXT NOT NULL,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert Primary Sectors (10)
INSERT INTO "VoySectors" ("id", "name", "emoji", "description", "is_primary") VALUES
('tecnologia-digital', 'Tecnología y Digital', '💻', 'Micro-trabajos digitales, remotos o presenciales', true),
('hogar-mantenimiento', 'Hogar y Mantenimiento', '🏠', 'Servicios domésticos y de apoyo', true),
('mascotas', 'Mascotas', '🐾', 'Servicios para dueños de animales', true),
('compras-recados', 'Compras y Recados', '🛒', 'Ahorro de tiempo para particulares y mayores', true),
('hosteleria-eventos', 'Hostelería y Eventos', '🍽️', 'Muy demandado para micro-trabajos', true),
('transporte-reparto', 'Transporte y Reparto', '🚚', 'Servicios rápidos y por horas', true),
('mayores-dependencia', 'Personas Mayores y Dependencia', '👴', 'Sector clave y en crecimiento', true),
('educacion-formacion', 'Educación y Formación', '📚', 'Micro-clases y apoyo puntual', true),
('comercio-negocios', 'Comercio y Negocios', '🏪', 'Apoyo operativo a comercios', true),
('salud-bienestar', 'Salud, Bienestar y Estética', '💆', 'Servicios personales y de cuidado', true)
ON CONFLICT (id) DO NOTHING;

-- Insert Secondary Sectors (10)
INSERT INTO "VoySectors" ("id", "name", "emoji", "description", "is_primary") VALUES
('creatividad-arte', 'Creatividad y Arte', '🎨', 'Servicios creativos y artísticos', false),
('administracion-oficina', 'Administración y Oficina', '📋', 'Tareas administrativas', false),
('construccion-oficios', 'Construcción y Oficios', '🔧', 'Oficios técnicos básicos', false),
('agricultura-campo', 'Agricultura y Campo', '🌾', 'Trabajos agrícolas y rurales', false),
('turismo-alojamiento', 'Turismo y Alojamiento', '🏨', 'Servicios para alojamientos turísticos', false),
('seguridad-control', 'Seguridad y Control', '🛡️', 'Servicios de vigilancia', false),
('marketing-calle', 'Marketing de Calle', '📣', 'Promoción y publicidad', false),
('tecnologia-domestica', 'Tecnología Doméstica', '📱', 'Instalación y configuración', false),
('moda-textil', 'Moda y Textil', '👗', 'Servicios de costura y moda', false),
('otros-servicios', 'Otros Servicios', '⚙️', 'Servicios diversos', false)
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Tecnología y Digital
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('diseno-web', 'tecnologia-digital', 'Diseño web'),
('marketing-digital', 'tecnologia-digital', 'Marketing digital'),
('gestion-redes', 'tecnologia-digital', 'Gestión de redes sociales'),
('procesamiento-datos', 'tecnologia-digital', 'Procesamiento de datos'),
('bases-datos', 'tecnologia-digital', 'Bases de datos'),
('soporte-tecnico', 'tecnologia-digital', 'Soporte técnico'),
('config-ordenadores', 'tecnologia-digital', 'Configuración de ordenadores'),
('automatizaciones', 'tecnologia-digital', 'Automatizaciones'),
('creacion-contenidos', 'tecnologia-digital', 'Creación de contenidos'),
('seo-sem', 'tecnologia-digital', 'SEO / SEM')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Hogar y Mantenimiento
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('limpieza-hogar', 'hogar-mantenimiento', 'Limpieza del hogar'),
('plancha', 'hogar-mantenimiento', 'Plancha'),
('organizacion-armarios', 'hogar-mantenimiento', 'Organización de armarios'),
('pequenas-reparaciones', 'hogar-mantenimiento', 'Pequeñas reparaciones'),
('pintura-basica', 'hogar-mantenimiento', 'Pintura básica'),
('montaje-muebles', 'hogar-mantenimiento', 'Montaje de muebles'),
('mudanzas-pequenas', 'hogar-mantenimiento', 'Mudanzas pequeñas'),
('limpieza-trasteros', 'hogar-mantenimiento', 'Limpieza de trasteros'),
('jardineria-basica', 'hogar-mantenimiento', 'Jardinería básica'),
('cambio-bombillas', 'hogar-mantenimiento', 'Cambio de bombillas / enchufes')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Mascotas
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('pasear-perros', 'mascotas', 'Pasear perros'),
('cuidado-domicilio', 'mascotas', 'Cuidado a domicilio'),
('llevar-veterinario', 'mascotas', 'Llevar al veterinario'),
('alimentacion', 'mascotas', 'Alimentación'),
('educacion-basica', 'mascotas', 'Educación básica'),
('limpieza-espacios', 'mascotas', 'Limpieza de espacios'),
('guarderia-mascotas', 'mascotas', 'Guardería de mascotas'),
('acompanamiento-viajes', 'mascotas', 'Acompañamiento en viajes'),
('administracion-medicacion', 'mascotas', 'Administración de medicación'),
('peluqueria-basica-mascotas', 'mascotas', 'Peluquería básica')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Compras y Recados
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('compra-supermercado', 'compras-recados', 'Compra de supermercado'),
('compra-farmacias', 'compras-recados', 'Compra en farmacias'),
('recogida-pedidos', 'compras-recados', 'Recogida de pedidos'),
('devoluciones', 'compras-recados', 'Devoluciones'),
('envios-puntuales', 'compras-recados', 'Envíos puntuales'),
('recados-admin', 'compras-recados', 'Recados administrativos'),
('acompanamiento-gestiones', 'compras-recados', 'Acompañamiento a gestiones'),
('entregas-locales', 'compras-recados', 'Entregas locales'),
('compra-regalos', 'compras-recados', 'Compra de regalos'),
('colas-esperas', 'compras-recados', 'Colas y esperas')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Hostelería y Eventos
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('camarero-horas', 'hosteleria-eventos', 'Camarero por horas'),
('ayudante-cocina', 'hosteleria-eventos', 'Ayudante de cocina'),
('montaje-eventos', 'hosteleria-eventos', 'Montaje de eventos'),
('recogida-salas', 'hosteleria-eventos', 'Recogida de salas'),
('catering-puntual', 'hosteleria-eventos', 'Catering puntual'),
('atencion-barra', 'hosteleria-eventos', 'Atención en barra'),
('azafatos', 'hosteleria-eventos', 'Azafatos/as'),
('control-accesos-host', 'hosteleria-eventos', 'Control de accesos'),
('limpieza-post-evento', 'hosteleria-eventos', 'Limpieza post-evento'),
('reposicion-host', 'hosteleria-eventos', 'Reposición')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Transporte y Reparto
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('reparto-local', 'transporte-reparto', 'Reparto local'),
('mensajeria-urbana', 'transporte-reparto', 'Mensajería urbana'),
('mudanzas-pequenas-trans', 'transporte-reparto', 'Mudanzas pequeñas'),
('transporte-paquetes', 'transporte-reparto', 'Transporte de paquetes'),
('traslado-personas', 'transporte-reparto', 'Traslado de personas'),
('conductor-horas', 'transporte-reparto', 'Conductor por horas'),
('recogida-muebles', 'transporte-reparto', 'Recogida de muebles'),
('transporte-compras', 'transporte-reparto', 'Transporte de compras'),
('ayuda-vehiculos', 'transporte-reparto', 'Ayuda con vehículos'),
('traslado-aeropuerto', 'transporte-reparto', 'Traslado al aeropuerto')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Mayores y Dependencia
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('acompanamiento', 'mayores-dependencia', 'Acompañamiento'),
('paseos', 'mayores-dependencia', 'Paseos'),
('ayuda-hogar', 'mayores-dependencia', 'Ayuda en el hogar'),
('control-medicacion', 'mayores-dependencia', 'Control de medicación'),
('acompanar-medico', 'mayores-dependencia', 'Acompañar al médico'),
('compras-mayores', 'mayores-dependencia', 'Compras'),
('estimulacion-cognitiva', 'mayores-dependencia', 'Estimulación cognitiva'),
('conversacion-compania', 'mayores-dependencia', 'Conversación / compañía'),
('apoyo-tecnologico', 'mayores-dependencia', 'Apoyo tecnológico'),
('respiro-familiar', 'mayores-dependencia', 'Respiro familiar')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Educación y Formación
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('clases-particulares', 'educacion-formacion', 'Clases particulares'),
('apoyo-escolar', 'educacion-formacion', 'Apoyo escolar'),
('idiomas', 'educacion-formacion', 'Idiomas'),
('informatica-basica', 'educacion-formacion', 'Informática básica'),
('refuerzo-universitario', 'educacion-formacion', 'Refuerzo universitario'),
('preparacion-examenes', 'educacion-formacion', 'Preparación exámenes'),
('clases-online', 'educacion-formacion', 'Clases online'),
('apoyo-ninos', 'educacion-formacion', 'Apoyo a niños'),
('tecnicas-estudio', 'educacion-formacion', 'Técnicas de estudio'),
('formacion-adultos', 'educacion-formacion', 'Formación adultos')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Comercio y Negocios
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('dependiente-horas', 'comercio-negocios', 'Dependiente por horas'),
('reposicion-comercio', 'comercio-negocios', 'Reposición'),
('inventarios', 'comercio-negocios', 'Inventarios'),
('atencion-cliente', 'comercio-negocios', 'Atención al cliente'),
('caja', 'comercio-negocios', 'Caja'),
('etiquetado', 'comercio-negocios', 'Etiquetado'),
('montaje-escaparates', 'comercio-negocios', 'Montaje de escaparates'),
('promocion-productos', 'comercio-negocios', 'Promoción de productos'),
('degustaciones', 'comercio-negocios', 'Degustaciones'),
('apoyo-rebajas', 'comercio-negocios', 'Apoyo en rebajas')
ON CONFLICT (id) DO NOTHING;

-- Insert MicroTasks for Salud y Bienestar
INSERT INTO "VoyMicroTasks" ("id", "sector_id", "name") VALUES
('masajes', 'salud-bienestar', 'Masajes'),
('entrenador-personal', 'salud-bienestar', 'Entrenador personal'),
('yoga-pilates', 'salud-bienestar', 'Yoga / pilates'),
('fisioterapia-basica', 'salud-bienestar', 'Fisioterapia básica'),
('peluqueria-domicilio', 'salud-bienestar', 'Peluquería a domicilio'),
('manicura-pedicura', 'salud-bienestar', 'Manicura / pedicura'),
('estetica-basica', 'salud-bienestar', 'Estética básica'),
('acompanamiento-saludable', 'salud-bienestar', 'Acompañamiento saludable'),
('cuidado-postural', 'salud-bienestar', 'Cuidado postural'),
('rutinas-personalizadas', 'salud-bienestar', 'Rutinas personalizadas')
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE "VoySectors" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "VoyMicroTasks" ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can read sectors" ON "VoySectors" FOR SELECT USING (true);
CREATE POLICY "Public can read microtasks" ON "VoyMicroTasks" FOR SELECT USING (true);

-- Grant select permissions
GRANT SELECT ON "VoySectors" TO anon, authenticated;
GRANT SELECT ON "VoyMicroTasks" TO anon, authenticated;
