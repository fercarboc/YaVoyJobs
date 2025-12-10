-- ============================================
-- Chat System Schema for YaVoy
-- Execute in Supabase SQL Editor
-- ============================================

-- 1. Create Chat Conversations Table
CREATE TABLE public."VoyChats" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id UUID NOT NULL REFERENCES public."VoyJobs"(id) ON DELETE CASCADE,
  company_user_id UUID NOT NULL REFERENCES public."VoyUsers"(id) ON DELETE CASCADE,
  helper_user_id UUID NOT NULL REFERENCES public."VoyUsers"(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_message_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT unique_chat UNIQUE (job_id, company_user_id, helper_user_id)
);

-- 2. Create Messages Table
CREATE TABLE public."VoyMessages" (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chat_id UUID NOT NULL REFERENCES public."VoyChats"(id) ON DELETE CASCADE,
  sender_user_id UUID NOT NULL REFERENCES public."VoyUsers"(id) ON DELETE CASCADE,
  content TEXT,
  file_url TEXT,
  file_name TEXT,
  file_type TEXT, -- 'document', 'image', 'other'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Create Indexes
CREATE INDEX idx_voychats_company ON public."VoyChats"(company_user_id);
CREATE INDEX idx_voychats_helper ON public."VoyChats"(helper_user_id);
CREATE INDEX idx_voychats_job ON public."VoyChats"(job_id);
CREATE INDEX idx_voymessages_chat ON public."VoyMessages"(chat_id);
CREATE INDEX idx_voymessages_sender ON public."VoyMessages"(sender_user_id);
CREATE INDEX idx_voymessages_created ON public."VoyMessages"(created_at DESC);

-- 4. Enable RLS
ALTER TABLE public."VoyChats" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyMessages" ENABLE ROW LEVEL SECURITY;

-- 5. RLS Policies for VoyChats

-- SELECT: Users can see chats they're part of
CREATE POLICY "VoyChats_select_participants"
ON public."VoyChats"
FOR SELECT
USING (
  auth.uid() IN (
    (SELECT auth_user_id FROM public."VoyUsers" WHERE id = company_user_id),
    (SELECT auth_user_id FROM public."VoyUsers" WHERE id = helper_user_id)
  )
);

-- INSERT: Allow creation of chats (anyone can initiate)
CREATE POLICY "VoyChats_insert_any"
ON public."VoyChats"
FOR INSERT
WITH CHECK ( TRUE );

-- UPDATE: Participants can update
CREATE POLICY "VoyChats_update_participants"
ON public."VoyChats"
FOR UPDATE
USING (
  auth.uid() IN (
    (SELECT auth_user_id FROM public."VoyUsers" WHERE id = company_user_id),
    (SELECT auth_user_id FROM public."VoyUsers" WHERE id = helper_user_id)
  )
)
WITH CHECK (
  auth.uid() IN (
    (SELECT auth_user_id FROM public."VoyUsers" WHERE id = company_user_id),
    (SELECT auth_user_id FROM public."VoyUsers" WHERE id = helper_user_id)
  )
);

-- 6. RLS Policies for VoyMessages

-- SELECT: Users can read messages in their chats
CREATE POLICY "VoyMessages_select_in_chat"
ON public."VoyMessages"
FOR SELECT
USING (
  chat_id IN (
    SELECT id FROM public."VoyChats" 
    WHERE auth.uid() IN (
      (SELECT auth_user_id FROM public."VoyUsers" WHERE id = company_user_id),
      (SELECT auth_user_id FROM public."VoyUsers" WHERE id = helper_user_id)
    )
  )
);

-- INSERT: Users can send messages to their chats
CREATE POLICY "VoyMessages_insert_in_chat"
ON public."VoyMessages"
FOR INSERT
WITH CHECK (
  chat_id IN (
    SELECT id FROM public."VoyChats" 
    WHERE auth.uid() IN (
      (SELECT auth_user_id FROM public."VoyUsers" WHERE id = company_user_id),
      (SELECT auth_user_id FROM public."VoyUsers" WHERE id = helper_user_id)
    )
  )
  AND sender_user_id = (SELECT id FROM public."VoyUsers" WHERE auth_user_id = auth.uid() LIMIT 1)
);

-- UPDATE: Users can update their own messages
CREATE POLICY "VoyMessages_update_own"
ON public."VoyMessages"
FOR UPDATE
USING (
  sender_user_id = (SELECT id FROM public."VoyUsers" WHERE auth_user_id = auth.uid() LIMIT 1)
)
WITH CHECK (
  sender_user_id = (SELECT id FROM public."VoyUsers" WHERE auth_user_id = auth.uid() LIMIT 1)
);

-- 7. Trigger to update chat's last_message_at
CREATE OR REPLACE FUNCTION update_chat_last_message()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public."VoyChats" 
  SET last_message_at = NEW.created_at
  WHERE id = NEW.chat_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_chat_timestamp
AFTER INSERT ON public."VoyMessages"
FOR EACH ROW
EXECUTE FUNCTION update_chat_last_message();
