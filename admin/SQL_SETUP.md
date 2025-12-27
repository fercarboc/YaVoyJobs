## Tablas necesarias

> Las tablas VoyProviderProfiles y VoyInvites ya existen, pero dejo el SQL de referencia (usar en Supabase si falta algo).

```sql
-- Perfil de proveedor
create table if not exists "VoyProviderProfiles" (
  id uuid primary key default gen_random_uuid(),
  provider_user_id uuid not null references "VoyUsers"(id) unique,
  provider_type text not null check (provider_type in ('HOUSING_AGENCY','MARKET_VENDOR')),
  display_name text,
  phone text,
  email text,
  address text,
  city text,
  district text,
  neighborhood text,
  postal_code text,
  province text,
  country text,
  contact_person text,
  website text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create trigger set_voyproviderprofiles_updated_at
before update on "VoyProviderProfiles"
for each row execute procedure public.set_current_timestamp_updated_at();

-- Invitaciones para proveedores
create table if not exists "VoyInvites" (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  target_role text not null check (target_role = 'PROVIDER'),
  provider_type text not null check (provider_type in ('HOUSING_AGENCY','MARKET_VENDOR')),
  token text unique not null,
  expires_at timestamptz not null,
  created_at timestamptz default now(),
  accepted_at timestamptz null
);

create index if not exists idx_voyinvites_token on "VoyInvites"(token);
create index if not exists idx_voyinvites_email on "VoyInvites"(email);
```

## Función de validación de invitaciones

Se asume disponible `get_valid_invite(token text)` que devuelve la fila de VoyInvites solo si no ha expirado y no está aceptada.
