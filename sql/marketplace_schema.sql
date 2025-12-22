-- Marketplace schema (Voy* tables)
-- Ejecutar en Supabase/Postgres cuando quieras crear el marketplace.

-- Planes y asignacion de plan a cada company/seller
create table if not exists public."VoyMarketplacePlans" (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  fixed_fee_cents integer not null default 0 check (fixed_fee_cents >= 0),        -- fee fijo mensual
  percent_fee numeric(5,2) not null default 0 check (percent_fee >= 0 and percent_fee <= 100),       -- % sobre ventas
  threshold_monthly_gross_cents integer not null default 0 check (threshold_monthly_gross_cents >= 0), -- umbral para aplicar el plan
  monthly_cap_cents integer check (monthly_cap_cents is null or monthly_cap_cents >= 0),             -- tope de comision mensual opcional
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public."VoyMarketplaceSellerPlans" (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public."VoyCompanies"(id),
  plan_id uuid not null references public."VoyMarketplacePlans"(id),
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Catalogo de productos
create table if not exists public."VoyProductCategories" (
  id text primary key,
  name text not null,
  parent_id text references public."VoyProductCategories"(id),
  display_order integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public."VoyProducts" (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public."VoyCompanies"(id),
  title text not null,
  description text,
  price_cents integer not null check (price_cents >= 0),
  currency text not null default 'EUR' check (char_length(currency) = 3),
  stock integer not null default 0 check (stock >= 0),
  category_id text references public."VoyProductCategories"(id),
  vat_rate numeric(5,2) not null default 21 check (vat_rate >= 0 and vat_rate <= 30),
  sku text,
  is_active boolean not null default true,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public."VoyProductImages" (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public."VoyProducts"(id) on delete cascade,
  url text not null,
  alt text,
  display_order integer,
  created_at timestamptz not null default now()
);

create table if not exists public."VoyProductVariants" (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public."VoyProducts"(id) on delete cascade,
  name text not null,
  price_delta_cents integer not null default 0,
  stock_delta integer not null default 0,
  is_active boolean not null default true,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Pedidos y estados
create table if not exists public."VoyMarketplaceOrders" (
  id uuid primary key default gen_random_uuid(),
  buyer_user_id uuid not null references public."VoyUsers"(id),
  seller_company_id uuid not null references public."VoyCompanies"(id),
  status text not null check (status in (
    'CREATED','PAYMENT_PENDING','PAID','PREPARING','OUT_FOR_DELIVERY','DELIVERED','CANCELLED','REFUNDED'
  )),
  currency text not null default 'EUR' check (char_length(currency) = 3),
  total_gross_cents integer not null check (total_gross_cents >= 0),
  delivery_fee_cents integer not null default 0 check (delivery_fee_cents >= 0),
  commission_cents integer not null default 0 check (commission_cents >= 0),
  plan_id uuid references public."VoyMarketplacePlans"(id),
  stripe_payment_intent_id text,
  stripe_connect_charge_id text,
  metadata jsonb not null default '{}',
  placed_at timestamptz not null default now(),
  paid_at timestamptz,
  cancelled_at timestamptz,
  delivered_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public."VoyOrderItems" (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public."VoyMarketplaceOrders"(id) on delete cascade,
  product_id uuid references public."VoyProducts"(id),
  product_title text not null,
  unit_price_cents integer not null check (unit_price_cents >= 0),
  quantity integer not null check (quantity > 0),
  vat_rate numeric(5,2) not null default 21 check (vat_rate >= 0 and vat_rate <= 30),
  subtotal_cents integer not null check (subtotal_cents >= 0),
  variant jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public."VoyOrderEvents" (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public."VoyMarketplaceOrders"(id) on delete cascade,
  event_type text not null,
  note text,
  created_by_user_id uuid references public."VoyUsers"(id),
  created_at timestamptz not null default now()
);

create table if not exists public."VoyOrderShipping" (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references public."VoyMarketplaceOrders"(id) on delete cascade,
  mode text not null check (mode in ('PICKUP','DELIVERY_YAVOY','DELIVERY_SELLER')),
  address jsonb,
  eta timestamptz,
  delivery_job_id uuid references public."VoyJobs"(id),
  cost_cents integer not null default 0 check (cost_cents >= 0),
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Liquidaciones y facturacion de comision
create table if not exists public."VoyPayouts" (
  id uuid primary key default gen_random_uuid(),
  company_id uuid not null references public."VoyCompanies"(id),
  period_month date not null, -- usar primer dia del mes
  gross_sales_cents integer not null default 0 check (gross_sales_cents >= 0),
  commission_cents integer not null default 0 check (commission_cents >= 0),
  net_to_seller_cents integer not null default 0 check (net_to_seller_cents >= 0),
  status text not null check (status in ('PENDING','SENT','PAID','DISPUTED')),
  invoice_number text,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indices sugeridos
create index if not exists idx_voyproducts_company on public."VoyProducts"(company_id);
create index if not exists idx_voyproducts_category on public."VoyProducts"(category_id);
create index if not exists idx_voyorders_seller_status on public."VoyMarketplaceOrders"(seller_company_id,status);
create index if not exists idx_voyorders_buyer_status on public."VoyMarketplaceOrders"(buyer_user_id,status);
create index if not exists idx_voyorderitems_order on public."VoyOrderItems"(order_id);
create index if not exists idx_voypayouts_company_period on public."VoyPayouts"(company_id, period_month);

-- Stripe Connect: cuenta del comercio (usada para payouts directos)
alter table public."VoyCompanies"
  add column if not exists stripe_account_id text;

-- Campo de control para reabastecer al cancelar/refundar
alter table public."VoyMarketplaceOrders"
  add column if not exists restocked boolean not null default false;

-- Recalcula totales y comision (basada en percent del plan si existe)
create or replace function public.voy_mp_recalc_order(p_order_id uuid)
returns void
language plpgsql
security definer
as $$
declare
  v_items int;
  v_delivery int;
  v_plan uuid;
  v_percent numeric(5,2);
  v_comm int;
begin
  select coalesce(sum(subtotal_cents),0) into v_items
  from public."VoyOrderItems"
  where order_id = p_order_id;

  select delivery_fee_cents, plan_id into v_delivery, v_plan
  from public."VoyMarketplaceOrders"
  where id = p_order_id;

  if v_plan is not null then
    select percent_fee into v_percent
    from public."VoyMarketplacePlans"
    where id = v_plan;
    v_comm := coalesce(round(v_items * coalesce(v_percent,0) / 100.0), 0);
  end if;

  update public."VoyMarketplaceOrders"
  set total_gross_cents = v_items + coalesce(v_delivery,0),
      commission_cents = coalesce(v_comm, commission_cents),
      updated_at = now()
  where id = p_order_id;
end;
$$;

create or replace function public.voy_mp_trg_recalc_order()
returns trigger
language plpgsql
security definer
as $$
begin
  perform public.voy_mp_recalc_order(
    coalesce(NEW.order_id, OLD.order_id)
  );
  return null;
end;
$$;

drop trigger if exists trg_voyorderitems_recalc on public."VoyOrderItems";
create trigger trg_voyorderitems_recalc
after insert or update or delete on public."VoyOrderItems"
for each row execute function public.voy_mp_trg_recalc_order();

-- Ajuste de stock en products
create or replace function public.voy_mp_trg_adjust_stock()
returns trigger
language plpgsql
security definer
as $$
declare
  v_diff int := 0;
begin
  if TG_OP = 'INSERT' then
    if NEW.product_id is null then return null; end if;
    v_diff := NEW.quantity;
    update public."VoyProducts"
    set stock = greatest(stock - v_diff, 0),
        updated_at = now()
    where id = NEW.product_id;
  elsif TG_OP = 'UPDATE' then
    if NEW.product_id is null then return null; end if;
    v_diff := coalesce(NEW.quantity,0) - coalesce(OLD.quantity,0);
    update public."VoyProducts"
    set stock = greatest(stock - v_diff, 0),
        updated_at = now()
    where id = NEW.product_id;
  elsif TG_OP = 'DELETE' then
    if OLD.product_id is null then return null; end if;
    v_diff := OLD.quantity;
    update public."VoyProducts"
    set stock = stock + v_diff,
        updated_at = now()
    where id = OLD.product_id;
  end if;
  return null;
end;
$$;

drop trigger if exists trg_voyorderitems_stock on public."VoyOrderItems";
create trigger trg_voyorderitems_stock
after insert or update or delete on public."VoyOrderItems"
for each row execute function public.voy_mp_trg_adjust_stock();

-- Restock al cancelar/refundar pedidos (solo una vez por pedido)
create or replace function public.voy_mp_trg_restock_on_cancel()
returns trigger
language plpgsql
security definer
as $$
begin
  if NEW.restocked is true then
    return NEW;
  end if;

  if NEW.status in ('CANCELLED','REFUNDED') then
    update public."VoyProducts" p
    set stock = p.stock + oi.quantity,
        updated_at = now()
    from public."VoyOrderItems" oi
    where oi.order_id = NEW.id
      and oi.product_id = p.id;

    update public."VoyMarketplaceOrders"
    set restocked = true,
        updated_at = now()
    where id = NEW.id;
  end if;
  return NEW;
end;
$$;

drop trigger if exists trg_voyorders_restock on public."VoyMarketplaceOrders";
create trigger trg_voyorders_restock
after update of status on public."VoyMarketplaceOrders"
for each row execute function public.voy_mp_trg_restock_on_cancel();
