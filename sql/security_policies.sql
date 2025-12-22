-- Activa RLS y define políticas por tabla
-- Requiere JWT con claim "role" (admin|user). Ajusta nombres de columnas según tu esquema.

-----------------------------
-- Usuarios y perfiles
-----------------------------
ALTER TABLE public."VoyUsers" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voyusers_select_own
  ON public."VoyUsers" FOR SELECT TO authenticated
  USING (id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voyusers_update_own
  ON public."VoyUsers" FOR UPDATE TO authenticated
  USING (id = auth.uid() OR auth.jwt()->>'role' = 'admin')
  WITH CHECK (id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voyusers_insert_self
  ON public."VoyUsers" FOR INSERT TO authenticated
  WITH CHECK (id = auth.uid() OR auth.jwt()->>'role' = 'admin');

-----------------------------
-- Notificaciones
-----------------------------
ALTER TABLE public."VoyNotifications" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voynotifications_select_own
  ON public."VoyNotifications" FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voynotifications_write_own
  ON public."VoyNotifications" FOR ALL TO authenticated
  USING (user_id = auth.uid() OR auth.jwt()->>'role' = 'admin')
  WITH CHECK (user_id = auth.uid() OR auth.jwt()->>'role' = 'admin');

-----------------------------
-- Chats / Mensajes
-- Supuestos: VoyChatParticipants(user_id, chat_id), VoyMessages(chat_id, sender_user_id)
-----------------------------
ALTER TABLE public."VoyChats" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyChatParticipants" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyMessages" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voychats_participant_select
  ON public."VoyChats" FOR SELECT TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin' OR
    EXISTS (
      SELECT 1 FROM public."VoyChatParticipants" p
      WHERE p.chat_id = "VoyChats".id AND p.user_id = auth.uid()
    )
  );

CREATE POLICY voychats_participant_update
  ON public."VoyChats" FOR UPDATE TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin' OR
    EXISTS (
      SELECT 1 FROM public."VoyChatParticipants" p
      WHERE p.chat_id = "VoyChats".id AND p.user_id = auth.uid()
    )
  )
  WITH CHECK (auth.jwt()->>'role' = 'admin');

CREATE POLICY voychatparticipants_own
  ON public."VoyChatParticipants" FOR ALL TO authenticated
  USING (user_id = auth.uid() OR auth.jwt()->>'role' = 'admin')
  WITH CHECK (user_id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voymsgs_participant
  ON public."VoyMessages" FOR ALL TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin' OR
    EXISTS (
      SELECT 1 FROM public."VoyChatParticipants" p
      WHERE p.chat_id = "VoyMessages".chat_id AND p.user_id = auth.uid()
    )
  )
  WITH CHECK (
    auth.jwt()->>'role' = 'admin' OR
    sender_user_id = auth.uid()
  );

-----------------------------
-- Jobs / Aplicaciones / Asignaciones
-- Supuestos: VoyJobs(creator_user_id), VoyJobApplications(job_id, helper_user_id),
-- VoyJobAssignments(job_id, helper_user_id, requester_user_id)
-----------------------------
ALTER TABLE public."VoyJobs" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyJobApplications" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyJobAssignments" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voyjobs_owner_or_assignee
  ON public."VoyJobs" FOR SELECT TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR creator_user_id = auth.uid()
  );

CREATE POLICY voyjobs_insert_employer
  ON public."VoyJobs" FOR INSERT TO authenticated
  WITH CHECK (creator_user_id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voyjobs_update_owner
  ON public."VoyJobs" FOR UPDATE TO authenticated
  USING (creator_user_id = auth.uid() OR auth.jwt()->>'role' = 'admin')
  WITH CHECK (creator_user_id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voyjobapps_owner
  ON public."VoyJobApplications" FOR ALL TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR helper_user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyJobApplications".job_id
        AND j.creator_user_id = auth.uid()
    )
  )
  WITH CHECK (helper_user_id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voyjobassign_owner
  ON public."VoyJobAssignments" FOR ALL TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR helper_user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyJobAssignments".job_id
        AND j.creator_user_id = auth.uid()
    )
  )
  WITH CHECK (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyJobAssignments".job_id
        AND j.creator_user_id = auth.uid()
    )
  );

-----------------------------
-- Pagos y suscripciones
-- Supuestos: VoyPayments(user_id, helper_user_id?, job_id/application_id), VoyCompanySubscriptions(company_user_id),
-- VoyInvoices(assignment_id, issuer_user_id, payer_user_id), VoyWallets(user_id), VoyWalletLedger(wallet_id -> wallets.id)
-----------------------------
ALTER TABLE public."VoyPayments" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyCompanySubscriptions" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyInvoices" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyWallets" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyWalletLedger" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voypayments_view
  ON public."VoyPayments" FOR SELECT TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyPayments".job_id
        AND j.creator_user_id = auth.uid()
    )
    OR EXISTS (
      SELECT 1 FROM public."VoyJobApplications" a
      WHERE a.id = "VoyPayments".application_id
        AND a.helper_user_id = auth.uid()
    )
  );

CREATE POLICY voypayments_insert_employer
  ON public."VoyPayments" FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voypayments_update_owner
  ON public."VoyPayments" FOR UPDATE TO authenticated
  USING (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid())
  WITH CHECK (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid());

CREATE POLICY voycompanysubs_view
  ON public."VoyCompanySubscriptions" FOR SELECT TO authenticated
  USING (auth.jwt()->>'role' = 'admin' OR company_user_id = auth.uid());

CREATE POLICY voycompanysubs_insert_owner
  ON public."VoyCompanySubscriptions" FOR INSERT TO authenticated
  WITH CHECK (company_user_id = auth.uid() OR auth.jwt()->>'role' = 'admin');

CREATE POLICY voycompanysubs_update_owner
  ON public."VoyCompanySubscriptions" FOR UPDATE TO authenticated
  USING (auth.jwt()->>'role' = 'admin' OR company_user_id = auth.uid())
  WITH CHECK (auth.jwt()->>'role' = 'admin' OR company_user_id = auth.uid());

CREATE POLICY voyinvoices_view
  ON public."VoyInvoices" FOR SELECT TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR issuer_user_id = auth.uid()
    OR payer_user_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public."VoyJobAssignments" a
      WHERE a.id = "VoyInvoices".assignment_id
        AND (a.requester_user_id = auth.uid() OR a.helper_user_id = auth.uid())
    )
  );

CREATE POLICY voywallets_owner
  ON public."VoyWallets" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid())
  WITH CHECK (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid());

CREATE POLICY voywalletledger_owner
  ON public."VoyWalletLedger" FOR ALL TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyWallets" w
      WHERE w.id = "VoyWalletLedger".wallet_id
        AND w.user_id = auth.uid()
    )
  )
  WITH CHECK (
    auth.jwt()->>'role' = 'admin' OR
    EXISTS (
      SELECT 1 FROM public."VoyWallets" w
      WHERE w.id = "VoyWalletLedger".wallet_id
        AND w.user_id = auth.uid()
    )
  );

-----------------------------
-- Referidos / Recompensas
-- Supuestos: VoyReferralCodes(owner_user_id), VoyReferralEvents(referrer_user_id, referred_user_id),
-- VoyRewards(user_id), VoyRewardCampaigns(admin-only)
-----------------------------
ALTER TABLE public."VoyReferralCodes" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyReferralEvents" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyRewards" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyRewardCampaigns" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voyrefcodes_owner
  ON public."VoyReferralCodes" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin' OR owner_user_id = auth.uid())
  WITH CHECK (auth.jwt()->>'role' = 'admin' OR owner_user_id = auth.uid());

CREATE POLICY voyrefevents_owner
  ON public."VoyReferralEvents" FOR SELECT TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR referrer_user_id = auth.uid()
    OR referred_user_id = auth.uid()
  );

CREATE POLICY voyrewards_owner
  ON public."VoyRewards" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid())
  WITH CHECK (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid());

CREATE POLICY voyrewardcampaigns_admin
  ON public."VoyRewardCampaigns" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin')
  WITH CHECK (auth.jwt()->>'role' = 'admin');

-----------------------------
-- Emergencias
-- Supuestos: VoyEmergencyContacts(user_id), VoyEmergencyAlerts(user_id),
-- VoyEmergencyAlertResponses(alert_id, contact_id, responder_* datos libres)
-----------------------------
ALTER TABLE public."VoyEmergencyContacts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyEmergencyAlerts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyEmergencyAlertResponses" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voyemgcontacts_owner
  ON public."VoyEmergencyContacts" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid())
  WITH CHECK (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid());

CREATE POLICY voyemgalerts_owner
  ON public."VoyEmergencyAlerts" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid())
  WITH CHECK (auth.jwt()->>'role' = 'admin' OR user_id = auth.uid());

CREATE POLICY voyemgresponses_responder_or_owner
  ON public."VoyEmergencyAlertResponses" FOR SELECT TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyEmergencyAlerts" a
      WHERE a.id = "VoyEmergencyAlertResponses".alert_id
        AND a.user_id = auth.uid()
    )
  );

CREATE POLICY voyemgresponses_insert_responder
  ON public."VoyEmergencyAlertResponses" FOR INSERT TO authenticated
  WITH CHECK (
    auth.jwt()->>'role' = 'admin' OR
    EXISTS (
      SELECT 1 FROM public."VoyEmergencyAlerts" a
      WHERE a.id = "VoyEmergencyAlertResponses".alert_id
        AND a.user_id = auth.uid()
    )
  );

-----------------------------
-- Seguros
-- Supuestos: VoyInsuranceProviders (admin), VoyInsurancePolicies(provider_id, plan_id), VoyJobInsurance(job_id, policy_id)
-----------------------------
ALTER TABLE public."VoyInsuranceProviders" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyInsurancePlans" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyInsurancePolicies" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyJobInsurance" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voyinsproviders_admin
  ON public."VoyInsuranceProviders" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin')
  WITH CHECK (auth.jwt()->>'role' = 'admin');

-- Planes son gestionados por admin; si necesitas per-proveedor, añade columna en plans y ajusta aquí.
CREATE POLICY voyinsplans_admin
  ON public."VoyInsurancePlans" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin')
  WITH CHECK (auth.jwt()->>'role' = 'admin');

CREATE POLICY voyinspolicies_owner
  ON public."VoyInsurancePolicies" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin')
  WITH CHECK (auth.jwt()->>'role' = 'admin');

CREATE POLICY voyjobinsurance_link
  ON public."VoyJobInsurance" FOR ALL TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyJobInsurance".job_id
        AND j.creator_user_id = auth.uid()
    )
    OR EXISTS (
      SELECT 1 FROM public."VoyJobAssignments" a
      WHERE a.job_id = "VoyJobInsurance".job_id
        AND a.helper_user_id = auth.uid()
    )
  )
  WITH CHECK (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyJobInsurance".job_id
        AND j.creator_user_id = auth.uid()
    )
  );

-----------------------------
-- Work Contracts / Schedules
-- Supuestos: VoyWorkContracts(job_id), VoyWorkSchedules(job_id)
-----------------------------
ALTER TABLE public."VoyWorkContracts" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyWorkSchedules" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voycontracts_owner
  ON public."VoyWorkContracts" FOR ALL TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyWorkContracts".job_id
        AND j.creator_user_id = auth.uid()
    )
    OR EXISTS (
      SELECT 1 FROM public."VoyJobAssignments" a
      WHERE a.job_id = "VoyWorkContracts".job_id
        AND a.helper_user_id = auth.uid()
    )
  )
  WITH CHECK (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyWorkContracts".job_id
        AND j.creator_user_id = auth.uid()
    )
  );

CREATE POLICY voyschedules_owner
  ON public."VoyWorkSchedules" FOR ALL TO authenticated
  USING (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyWorkSchedules".job_id
        AND j.creator_user_id = auth.uid()
    )
    OR EXISTS (
      SELECT 1 FROM public."VoyJobAssignments" a
      WHERE a.job_id = "VoyWorkSchedules".job_id
        AND a.helper_user_id = auth.uid()
    )
  )
  WITH CHECK (
    auth.jwt()->>'role' = 'admin'
    OR EXISTS (
      SELECT 1 FROM public."VoyJobs" j
      WHERE j.id = "VoyWorkSchedules".job_id
        AND j.creator_user_id = auth.uid()
    )
  );

-----------------------------
-- Catálogos públicos (solo lectura)
-- Supuestos: VoySectors, VoyMicroTasks
-----------------------------
ALTER TABLE public."VoySectors" ENABLE ROW LEVEL SECURITY;
ALTER TABLE public."VoyMicroTasks" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voysectors_public_read
  ON public."VoySectors" FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY voymicrotasks_public_read
  ON public."VoyMicroTasks" FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY voysectors_admin_write
  ON public."VoySectors" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin')
  WITH CHECK (auth.jwt()->>'role' = 'admin');

CREATE POLICY voymicrotasks_admin_write
  ON public."VoyMicroTasks" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin')
  WITH CHECK (auth.jwt()->>'role' = 'admin');

-----------------------------
-- Logs de admin
-----------------------------
ALTER TABLE public."VoyAdminLogs" ENABLE ROW LEVEL SECURITY;

CREATE POLICY voyadminlogs_admin
  ON public."VoyAdminLogs" FOR ALL TO authenticated
  USING (auth.jwt()->>'role' = 'admin')
  WITH CHECK (auth.jwt()->>'role' = 'admin');

-- Fin del script
