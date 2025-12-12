-- Update existing company_sector values to match new sector IDs

UPDATE "VoyUsers" 
SET company_sector = 'hosteleria-eventos'
WHERE company_sector = 'HOSTELERIA_RESTAURACION';

-- You can add more mappings if needed for other old values
-- UPDATE "VoyUsers" SET company_sector = 'tecnologia-digital' WHERE company_sector = 'OLD_TECH_VALUE';
