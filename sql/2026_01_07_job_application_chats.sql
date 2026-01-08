-- Añade enlace entre chats y aplicaciones para asegurar un chat por candidatura
ALTER TABLE public."VoyJobChats"
  ADD COLUMN IF NOT EXISTS application_id uuid;

ALTER TABLE public."VoyJobChats"
  ADD CONSTRAINT IF NOT EXISTS voyjobchats_application_fkey
    FOREIGN KEY (application_id)
    REFERENCES public."VoyJobApplications"(id)
    ON DELETE CASCADE;

CREATE UNIQUE INDEX IF NOT EXISTS voyjobchats_application_id_key
  ON public."VoyJobChats"(application_id)
  WHERE application_id IS NOT NULL;
