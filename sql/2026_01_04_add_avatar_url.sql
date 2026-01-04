-- Añade columna para guardar el avatar basado en la selfie
ALTER TABLE "VoyUsers" ADD COLUMN IF NOT EXISTS avatar_url text;
