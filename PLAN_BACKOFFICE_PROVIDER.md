# Plan de Refactorización y Seguridad Backoffice Proveedor

## Menú de Opciones a Realizar

1. Crear la estructura de carpetas y archivos recomendada en `supabase/functions/`.
2. Implementar función de ejemplo: `provider-orders` (validación de token y mock de respuesta).
3. Implementar los endpoints mínimos para el backoffice proveedor.
4. Diseñar e implementar el flujo Stripe completo (backend seguro, webhooks, payout, etc.).
5. Revisar y sugerir RLS exactas para las tablas críticas.
6. Crear checklist de producción (seguridad, pagos, logs, etc.).


## Arquitectura Segura y Escalable

### 1. Frontend (React/Vite)
- Solo llama a tu API (Supabase Edge Functions):
  - `/functions/v1/provider-orders`, `/functions/v1/provider-products`, etc.
- Siempre envía el `access_token` en el header Authorization.
- No accede nunca a tablas críticas ni calcula totales/precios.

### 2. Backend (Supabase Edge Functions)
- Verifica el JWT (token) y resuelve el user_id.
- Traduce a seller_id/provider_id.
- Ejecuta queries con service role o RLS + impersonación.
- Devuelve DTOs filtrados y validados (nunca tablas crudas).
- Calcula precios, totales, aplica lógica de negocio y valida roles.
- Integra Stripe (checkout, webhooks, payouts).
- Todas las escrituras críticas pasan por aquí.

### 3. Supabase (DB + Auth)
- Auth solo para login/registro.
- RLS estricta: solo el backend puede modificar/leer datos críticos.
- Policies: los proveedores solo pueden operar vía API (service role).

---

## Estructura recomendada en `supabase/functions/`:
```
supabase/functions/
├─ provider-dashboard/
│  └─ index.ts
├─ provider-products/
│  └─ index.ts
├─ provider-orders/
│  └─ index.ts
├─ provider-returns/
│  └─ index.ts
├─ provider-invoices/
│  └─ index.ts
├─ checkout-create/
│  └─ index.ts
├─ stripe-webhook/
│  └─ index.ts
└─ _shared/
   ├─ supabaseAdmin.ts
   ├─ auth.ts
   └─ cors.ts
```

## Endpoints mínimos (mock/estructura):
- `GET  /functions/v1/provider-dashboard`
- `GET  /functions/v1/provider-products`
- `POST /functions/v1/provider-products`
- `PUT  /functions/v1/provider-products/:id`
- `DELETE /functions/v1/provider-products/:id`
- `GET  /functions/v1/provider-orders`
- `PUT  /functions/v1/provider-orders/:id/status`
- `GET  /functions/v1/provider-returns`
- `PUT  /functions/v1/provider-returns/:id/status`
- `GET  /functions/v1/provider-invoices`
- `GET  /functions/v1/provider-history`
- `POST /functions/v1/checkout-create`
- `POST /functions/v1/stripe-webhook`

---

## Siguientes pasos sugeridos
1. Montar una función de ejemplo lista para copiar/pegar (por ejemplo, provider-orders con validación de token y mock de respuesta).
2. Diseñar el flujo Stripe completo (backend seguro, webhooks, payout, etc.).
3. Revisar y sugerir RLS exactas para tus tablas.
4. Checklist de producción (seguridad, pagos, logs, etc.).

**Mañana continuar desde aquí.**
