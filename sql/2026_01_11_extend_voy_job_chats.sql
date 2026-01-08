-- Amplía VoyJobChats con columnas para participantes y políticas RLS seguras.
ALTER TABLE public."VoyJobChats"
  ADD COLUMN IF NOT EXISTS client_user_id uuid,
  ADD COLUMN IF NOT EXISTS helper_user_id uuid,
  ADD COLUMN IF NOT EXISTS application_id uuid;

ALTER TABLE public."VoyJobChats"
  ADD CONSTRAINT IF NOT EXISTS voyjobchats_application_fkey
    FOREIGN KEY (application_id)
    REFERENCES public."VoyJobApplications"(id)
    ON DELETE CASCADE;

CREATE UNIQUE INDEX IF NOT EXISTS voyjobchats_unique_idx
  ON public."VoyJobChats"(job_id, client_user_id, helper_user_id)
  WHERE client_user_id IS NOT NULL AND helper_user_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS voyjobchats_client_idx ON public."VoyJobChats"(client_user_id);
CREATE INDEX IF NOT EXISTS voyjobchats_helper_idx ON public."VoyJobChats"(helper_user_id);

ALTER TABLE public."VoyJobChats" ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS voyjobchats_participant_select ON public."VoyJobChats";
CREATE POLICY voyjobchats_participant_select
  ON public."VoyJobChats" FOR SELECT TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR client_user_id = auth.uid()
    OR helper_user_id = auth.uid()
  );

DROP POLICY IF EXISTS voyjobchats_participant_insert ON public."VoyJobChats";
CREATE POLICY voyjobchats_participant_insert
  ON public."VoyJobChats" FOR INSERT TO authenticated
  WITH CHECK (
    auth.jwt()->>'role' = 'admin'
    OR client_user_id = auth.uid()
    OR helper_user_id = auth.uid()
  )
  USING (
    auth.jwt()->>'role' = 'admin'
    OR client_user_id = auth.uid()
    OR helper_user_id = auth.uid()
  );

DROP POLICY IF EXISTS voyjobchats_participant_update ON public."VoyJobChats";
CREATE POLICY voyjobchats_participant_update
  ON public."VoyJobChats" FOR UPDATE TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR client_user_id = auth.uid()
    OR helper_user_id = auth.uid()
  )
  WITH CHECK (
    auth.jwt()->>'role' = 'admin'
    OR client_user_id = auth.uid()
    OR helper_user_id = auth.uid()
  );

ALTER TABLE public."VoyJobMessages" ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS voyjobmessages_participant_select ON public."VoyJobMessages";
CREATE POLICY voyjobmessages_participant_select
  ON public."VoyJobMessages" FOR SELECT TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyJobChats" c
      WHERE c.id = "VoyJobMessages".chat_id
        AND (c.client_user_id = auth.uid() OR c.helper_user_id = auth.uid())
    )
  );

DROP POLICY IF EXISTS voyjobmessages_participant_insert ON public."VoyJobMessages";
CREATE POLICY voyjobmessages_participant_insert
  ON public."VoyJobMessages" FOR INSERT TO authenticated
  WITH CHECK (
    (sender_user_id = auth.uid())
    AND EXISTS (
      SELECT 1 FROM public."VoyJobChats" c
      WHERE c.id = "VoyJobMessages".chat_id
        AND (c.client_user_id = auth.uid() OR c.helper_user_id = auth.uid())
    )
  )
  USING (
    (sender_user_id = auth.uid())
    AND EXISTS (
      SELECT 1 FROM public."VoyJobChats" c
      WHERE c.id = "VoyJobMessages".chat_id
        AND (c.client_user_id = auth.uid() OR c.helper_user_id = auth.uid())
    )
  );
