-- Crear tabla de perfiles de agencia (si no existe)
create table if not exists public."VoyAgencyProfiles" (
  id uuid primary key default gen_random_uuid(),
  agency_user_id uuid not null unique,
  brand_name text,
  legal_name text,
  cif text,
  phone text,
  email text,
  website text,
  address text,
  city text,
  district text,
  neighborhood text,
  postal_code text,
  province text,
  country text,
  contact_person text,
  contact_phone text,
  contact_email text,
  billing_iban text,
  billing_holder text,
  billing_tax_id text,
  billing_bank text,
  billing_address text,
  billing_city text,
  billing_postal_code text,
  billing_province text,
  billing_country text,
  billing_consent boolean,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Asegurar RLS (ajustar segun política del proyecto)
alter table public."VoyAgencyProfiles" enable row level security;

-- Facturas: hash y prev_hash encadenado + plan_id/periodos
alter table public."VoyInvoices"
  add column if not exists hash text,
  add column if not exists prev_hash text,
  add column if not exists plan_id uuid,
  add column if not exists period_start timestamptz,
  add column if not exists period_end timestamptz,
  add column if not exists payment_ref text,
  add column if not exists subtotal numeric,
  add column if not exists vat numeric,
  add column if not exists total numeric,
  add column if not exists issued_at timestamptz default now();

create index if not exists voyinvoices_payer_idx on public."VoyInvoices"(payer_user_id, issued_at desc);
