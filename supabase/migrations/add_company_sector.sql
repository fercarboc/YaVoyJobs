-- Add company_sector column to VoyUsers table
ALTER TABLE "VoyUsers" 
ADD COLUMN IF NOT EXISTS "company_sector" TEXT;

-- Add comment to document the column
COMMENT ON COLUMN "VoyUsers"."company_sector" IS 'Main business sector for company users. One of: tecnologia-digital, hogar-mantenimiento, mascotas, compras-recados, hosteleria-eventos, transporte-reparto, mayores-dependencia, educacion-formacion, comercio-negocios, salud-bienestar, creatividad-arte, administracion-oficina, construccion-oficios, agricultura-campo, turismo-alojamiento, seguridad-control, marketing-calle, tecnologia-domestica, moda-textil, otros-servicios';

-- Optional: Add check constraint to ensure valid sector values (can be commented out if too restrictive)
ALTER TABLE "VoyUsers"
ADD CONSTRAINT check_valid_sector CHECK (
  company_sector IS NULL OR
  company_sector IN (
    'tecnologia-digital',
    'hogar-mantenimiento',
    'mascotas',
    'compras-recados',
    'hosteleria-eventos',
    'transporte-reparto',
    'mayores-dependencia',
    'educacion-formacion',
    'comercio-negocios',
    'salud-bienestar',
    'creatividad-arte',
    'administracion-oficina',
    'construccion-oficios',
    'agricultura-campo',
    'turismo-alojamiento',
    'seguridad-control',
    'marketing-calle',
    'tecnologia-domestica',
    'moda-textil',
    'otros-servicios'
  )
);
