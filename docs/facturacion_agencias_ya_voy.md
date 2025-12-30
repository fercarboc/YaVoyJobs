# 📄 Facturación de Agencias – YaVoy

Este documento describe **de forma completa y ordenada** el sistema de facturación para **Agencias / Empresas** en YaVoy, incluyendo **modelo de datos, SQL, relaciones, RLS, triggers y flujo funcional**.  
Objetivo: que puedas **entenderlo, auditarlo y mantenerlo** sin depender del contexto del código.

---

## 1️⃣ Visión general

La facturación de agencias en YaVoy se basa en:

- **Usuarios (`VoyUsers`)** con rol `AGENCY` / `COMPANY`
- **Planes (`voyplans`)** que definen precios y periodos
- **Facturas (`VoyInvoices`)** generadas por suscripciones o acciones
- **PDF de factura** generado a partir del snapshot de datos
- **Cadena de hashes** (estilo VeriFactu simplificado)

Cada factura es:
- Inmutable una vez emitida
- Asociada a un usuario pagador
- Opcionalmente ligada a un plan
- Trazable mediante hash + prev_hash

---

## 2️⃣ Tablas implicadas

### 2.1 `VoyUsers`

Usuarios de la plataforma.

Campos relevantes:
```sql
id uuid PK
auth_user_id uuid (auth.users.id)
email text
role text -- ADMIN | AGENCY | COMPANY | HELPER
```

Relación:
- `VoyInvoices.payer_user_id → VoyUsers.id`

---

### 2.2 `voyplans`

Catálogo de planes comerciales.

```sql
id uuid PK
plan_code text
plan_scope text
name text
price numeric
currency text
billing_period text  -- monthly | semester | annual
limits jsonb
is_active boolean
created_at timestamptz
updated_at timestamptz
```

⚠️ **Importante**: la tabla real es `voyplans` (minúsculas), no `VoyPlans`.

---

### 2.3 `VoyInvoices`

Tabla central del sistema de facturación.

```sql
id uuid PK
issuer_user_id uuid        -- quién emite (normalmente ADMIN)
payer_user_id uuid         -- quién paga (AGENCY / COMPANY)
company_user_id uuid       -- redundante para reporting

amount numeric
subtotal numeric
vat numeric
total numeric
currency text

status text                -- PENDING | PAID | CANCELED
issued_at timestamptz
paid_at timestamptz

plan_id uuid               -- referencia lógica a voyplans
period text                -- monthly | semester | annual
period_start timestamptz
period_end timestamptz

invoice_series text        -- ej: A-2025
invoice_number integer     -- incremental por serie

payment_ref text           -- ej: SIM_STRIPE_xxx
metadata jsonb             -- forma de pago, billing_period, etc

hash text
prev_hash text
hash_algorithm text
hash_payload jsonb
```

---

## 3️⃣ Relaciones (conceptuales)

> **Nota**: no todas están como FK físicas (a propósito)

```text
VoyUsers (1) ──── (N) VoyInvoices
voyplans (1) ──── (N) VoyInvoices   [lógica, no FK]
```

¿Por qué `plan_id` **no es FK**?
- Permite conservar facturas aunque el plan se elimine
- Evita romper históricos
- El PDF es el snapshot legal

---

## 4️⃣ Row Level Security (RLS)

### 4.1 Lectura de facturas

Un usuario solo puede **ver sus propias facturas**:

```sql
CREATE POLICY "select_own_invoices"
ON public."VoyInvoices"
FOR SELECT
USING (
  payer_user_id = public.current_voy_user_id()
);
```

Requisitos:
- `current_voy_user_id()` debe devolver `VoyUsers.id`

---

### 4.2 Inserción

Las facturas **no se crean desde el frontend**.

```sql
CREATE POLICY "insert_invoices_admin"
ON public."VoyInvoices"
FOR INSERT
WITH CHECK (
  public.is_admin()
);
```

---

### 4.3 Actualización

Solo se permite para procesos internos controlados:

```sql
CREATE POLICY "update_invoices_admin"
ON public."VoyInvoices"
FOR UPDATE
USING (public.is_admin());
```

---

## 5️⃣ Funciones clave

### 5.1 `current_voy_user_id()`

Función crítica usada por RLS.

```sql
CREATE OR REPLACE FUNCTION public.current_voy_user_id()
RETURNS uuid
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT id
  FROM public."VoyUsers"
  WHERE auth_user_id = auth.uid()
  LIMIT 1;
$$;
```

Si esta función devuelve `NULL` → **no se ve ninguna factura**.

---

## 6️⃣ Generación de factura (flujo)

### Paso 1 – Evento de facturación

Ejemplos:
- Alta de suscripción
- Renovación
- Compra puntual

---

### Paso 2 – Inserción en `VoyInvoices`

```sql
INSERT INTO "VoyInvoices" (
  id, payer_user_id, issuer_user_id,
  total, currency, status,
  issued_at, paid_at,
  plan_id, period,
  payment_ref, metadata
) VALUES (...);
```

---

### Paso 3 – Numeración

- `invoice_series`: `A-2025`
- `invoice_number`: incremental

---

### Paso 4 – Hash

```json
{
  "invoiceId": "...",
  "total": 156.60,
  "period": "semester",
  "plan_id": "...",
  "issued_at": "...",
  "previous": "prev_hash"
}
```

Hash encadenado:
```text
hash(n) = SHA256(payload + prev_hash)
```

---

## 7️⃣ Consulta desde frontend

### 7.1 Facturas

```ts
supabase
  .from("VoyInvoices")
  .select("*")
  .eq("payer_user_id", user.id)
  .order("issued_at", { ascending: false });
```

---

### 7.2 Planes (lookup)

```ts
supabase
  .from("voyplans")
  .select("id,name")
  .in("id", planIds);
```

Resultado: `Map<plan_id, plan_name>`

---

## 8️⃣ PDF de factura

El PDF:
- **NO depende de joins**
- Usa datos de `VoyInvoices`
- Incluye:
  - Serie + número
  - Datos fiscales
  - Forma de pago
  - Hash

El PDF es la **fuente legal**, la UI solo es informativa.

---

## 9️⃣ Errores comunes (ya resueltos)

❌ `relation "VoyPlans" does not exist`
➡️ Tabla real: `voyplans`

❌ No aparecen facturas
➡️ `current_voy_user_id()` devolvía NULL

❌ Plan aparece como UUID
➡️ Falta lookup a `voyplans`

---

## 🔟 Recomendaciones finales

- ❗ No convertir `plan_id` en FK
- 🧾 Mantener hash encadenado
- 🔒 RLS siempre basado en `payer_user_id`
- 📦 El PDF manda sobre la UI

---

📌 **Estado actual**: sistema funcional y coherente.  
📌 **Listo para auditoría y producción controlada**.

---

¿Siguiente paso cuando quieras:
- versión VeriFactu AEAT
- migración a facturación electrónica
- control de rectificativas

