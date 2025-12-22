# Plan de accion YaVoy (web + app movil)

## Seguimiento y estado
- [ ] Seguridad (en curso): claves a `.env*`, rotar keys, RLS, CORS cerrado, roles en JWT y logs criticos.
- [ ] Pagos/ticket: unificar PaymentIntent, totales server-side, webhook completo, comisiones/seguro y flow job.
- [ ] UI/Jobs: publicar/editar, asignar, completar/cancelar, rewards en wallet y ticket unificado.
- [ ] Admin: panel protegido de seguros/incentivos, cron de rewards.
- [ ] Marketplace v1: catalogo empresa, checkout Connect, pedidos con estados, comisiones/fees y facturacion.
- [ ] Chatbot + referidos/incentivos en superficies clave.
- [ ] Logistica de barrio opcional ligada a pedidos.
- [ ] Paridad movil en pantallas clave (publicar, pedidos, chat, wallet).

Para marcar completado: cambia `[ ]` a `[x]` y envuelve el texto del punto terminado en `<span style="color:red"> ... </span>`.

### Detalle seguridad (en curso)
- [x] <span style="color:red">Codigo: mover Supabase URL/anon a `.env*` y limpiar `services/supabase.ts`</span>
- [ ] Rotar anon/service en dashboard y limitar dominios autorizados.
- [ ] RLS: revisar/activar en Jobs, Wallets, Rewards, Payments, Subscriptions, Chats, PlatformSettings.
- [ ] Edge Functions: cerrar CORS a origenes conocidos, verificar token+rol y recalcular importes server-side. (Progreso: `create-payment-intent` y `create-subscription-payment` validan JWT, usan `ALLOWED_ORIGINS` y toman importes desde BD; `stripe-webhook` valida firma, controla PaymentIntent y solo actualiza registros existentes).
- [ ] JWT/roles: claims para PARTICULAR/COMPANY/HELPER/ADMIN y gating de UI.
- [ ] Logs/auditoria: eventos criticos de pagos, seguros, rewards.

## Riesgos y gaps actuales
- Claves Supabase expuestas en `services/supabase.ts`; falta uso de env y rotar keys.
- UI cliente hace lecturas/escrituras criticas (admin, pagos, settings) sin validar rol; depende de RLS.
- Flujo de pagos inconsistente: front llama a function que no existe (`create-payment` vs `create-payment-intent`), importes los define el cliente y `commissionPaymentService` inserta pagos sin Stripe.
- Edge Functions con CORS `*` y sin validacion de usuario/rol; cualquier origen con anon key podria crear PaymentIntents.
- Chat/servicios sin chequeos de pertenencia; riesgo de fuga de datos si RLS no esta fino.
- Falta flujo completo publicar -> pagar comision+seguro -> asignar -> completar -> liberar incentivos/seguro.

## Acciones inmediatas (Seguridad / Config)
1) Mover Supabase URL/keys a `.env*`, regenerar anon y service role, restringir dominios en dashboard.  
2) Revisar/activar RLS en todas las tablas (Jobs, Wallets, Rewards, Payments, Subscriptions, Chats, PlatformSettings).  
3) Edge Functions: cerrar CORS a origenes conocidos, verificar token y rol; recalcular importes server-side.  
4) Claims de rol en JWT (PARTICULAR/COMPANY/HELPER/ADMIN) y filtro de UI por rol.  
5) Logs/auditoria para eventos criticos (pagos, seguros, rewards).

## Pagos, comisiones, seguros
- Unificar function `create-payment-intent` para comision+seguro y usarla desde web/app; corregir `services/paymentService.ts` y `commissionPaymentService.ts`.
- En backend calcular total: seguro (por risk_level), fee plataforma (plan/bono/suscripcion) y comision por venta (marketplace, ver seccion Marketplace).
- Webhook: validar firma, marcar `VoyPayments` y `VoyJobInsurance` como PAID/ACTIVE, soportar reintentos/idempotencia.
- Reembolsos/cancelaciones segun estado del job; timeline de eventos en ticket.

## Publicacion, contratacion, jobs
- Formulario completo de job (sector/microtask/riesgo visible, precio, horario, ubicacion).  
- Ticket unificado (precio trabajo, seguro, fee plataforma, total) usando RPC `get_job_ticket`.  
- Estados: OPEN -> ASSIGNED -> COMPLETED/CANCELLED con control de doble asignacion.  
- Completar/validar: dispara reward, actualiza wallet/ledger y seguro.  
- Edicion/cancelacion con reglas de devolucion.

## Incentivos y wallets
- Mostrar wallet/movimientos/rewards en UI; onboarding de referidos (codigos/links) con antifraude basico.
- Mantener cron (GitHub Actions + Edge Function) para liberar/expirar recompensas con alertas.

## Admin protegido
- CRUD de proveedores/planes/polizas, panel de Jobs, Wallets/Rewards, Subscriptions, Bonos.  
- Solo rol ADMIN (claim + RLS); sin exponer service key en cliente.

## Chatbot gratuito (fase prueba)
- Opcion rapida: Gemini 1.5 Flash (limite tokens) tras pequeno proxy que oculte API key.  
- Alternativa sin coste: modelo ligero local (p.ej. phi-3-mini via Ollama/LocalAI) detras de Edge Function.  
- Casos: FAQ de comisiones/seguros/incentivos, ayuda al publicar, handoff a humano.

## Marketplace (empresa/comercio)
- Perfil empresa: alta/baja/modificacion de productos con imagenes (storage S3/Supabase), precio, IVA, stock, categoria, descripcion/caracteristicas.
- Ordenes y ventas: listado de pedidos, estados (`CREATED`, `PAID`, `PREPARING`, `OUT_FOR_DELIVERY`, `DELIVERED`, `CANCELLED/REFUNDED`), notas internas, timeline.
- Checkout y cobro:
  - Usar Stripe Connect (preferible Express) para que el comercio cobre directo al cliente. 
  - YaVoy cobra fee/plan via application_fee_amount o transferencia separada; el comercio emite la factura de venta al cliente.
  - Nuestra factura de comision/fijo se emite al comercio (no al cliente).
- Modelo de comisiones: tabla de tramos y tipo
  - Hasta X €/mes: 30 €/mes + 2% de ventas.
  - Hasta Y €/mes: 30 €/mes + 4% de ventas.
  - Tramo flexible configurable en BD (p.ej. `VoyMarketplacePlans`).
  - Soportar comision fija por pedido si se quiere A/B test.
- Logistica de barrio opcional:
  - Si YaVoy pone repartidor, crear Job/Assignment para el delivery; pagar al helper desde YaVoy y repercutir coste de envio al pedido.
  - Si el comercio reparte, sin job ni seguro nuestro; opcional seguro de envio.
- Facturacion:
  - Comercio factura al cliente (producto + envio si aplica).
  - YaVoy factura al comercio por el fijo+% aplicado al mes (cierre mensual) o por pedido (application_fee).
  - Registro de IVA y numero de factura de comision, y export CSV/UBL para contabilidad.
- Backoffice empresa:
  - Gestor de catalogo (CRUD + media), stock, precios, variantes basicas.
  - Panel de pedidos con filtros por estado y acciones (confirmar, preparar, marcar enviado/entregado, reembolsar parcial/total si soporta Stripe).
  - Metricas: ventas brutas, comision YaVoy, neto al comercio, ticket medio, devoluciones.

## App movil
- Consumir los mismos endpoints (jobs, marketplace, pedidos, pagos) para evitar logica duplicada.
- En la web priorizar CTA a descarga de app, pero mantener flujo de publicar/checkout para desktop.

## Prioridad sugerida (2-3 sprints)
1) Seguridad: env keys, rotar, RLS, cierre CORS, roles, hardening Edge Functions.  
2) Pagos/ticket: unificar PaymentIntent, recalcular server-side, webhook completo, flujo job+seguro+comision.  
3) UI/Estados job: publicar/editar, asignar, completar, cancelar, rewards en wallet.  
4) Admin seguro/incentivos: panel protegido + cron de rewards.  
5) Marketplace v1: catalogo empresa, checkout Connect, pedidos con estados, modelo de comisiones y facturacion de fees.  
6) Chatbot proxy gratuito y superficies de incentivos/referidos.  
7) Logistica de barrio opcional ligada a pedidos (creacion de jobs de reparto).  
8) Mobile parity en pantallas clave (publicar, pedidos, chat, wallet).

## Marketplace: esquema y validaciones (texto + checks)
- SQL en `sql/marketplace_schema.sql` (sin enums). Tablas:
  - `VoyMarketplacePlans`: fee fijo >=0, % 0-100, umbral mensual >=0, cap opcional >=0, activo.
  - `VoyMarketplaceSellerPlans`: plan asignado a company con fechas start/end y flag activo.
  - `VoyProductCategories`: arbol de categorias con display_order.
  - `VoyProducts`: precio>=0, stock>=0, moneda 3 chars, VAT 0-30, SKU opcional, FK company y categoria.
  - `VoyProductImages`: URLs con display_order.
  - `VoyProductVariants`: delta precio/stock, activo, metadata.
  - `VoyMarketplaceOrders`: estados `CREATED/PAYMENT_PENDING/PAID/PREPARING/OUT_FOR_DELIVERY/DELIVERED/CANCELLED/REFUNDED`, totales/fees>=0, moneda 3 chars, plan opcional, buyer `VoyUsers`, seller `VoyCompanies`.
  - `VoyOrderItems`: qty>0, precios/subtotales>=0, VAT 0-30, snapshot titulo/producto, variant json.
  - `VoyOrderEvents`: timeline con usuario que genera el evento.
  - `VoyOrderShipping`: modo `PICKUP/DELIVERY_YAVOY/DELIVERY_SELLER`, coste>=0, address json, puede enlazar a `VoyJobs` si el reparto lo hace un helper.
  - `VoyPayouts`: cierres mensuales por company, ventas/comision/neto>=0, estados `PENDING/SENT/PAID/DISPUTED`, invoice opcional.
- Indices incluidos: products por company/categoria; orders por seller/buyer+status; items por order; payouts por company+period.
- Checks/pendientes a considerar:
  - Longitudes maximas (titulo/descr/SKU) alineadas con la UI.
  - Triggers server-side para recalcular subtotal/item y total/fees del pedido; y ajuste de stock al crear/cancelar/refundar.
  - RLS: buyer ve solo sus pedidos; seller solo sus ventas; admin todo. Products solo editables por su company.
  - Stripe Connect: anadir `stripe_account_id` en `VoyCompanies` y bloquear `PAID` si falta; `application_fee` guardado en commission_cents.

### Marketplace: operaciones y triggers anadidos
- Columna `stripe_account_id` en `VoyCompanies` para Stripe Connect.
- Columna `restocked` en `VoyMarketplaceOrders` para evitar doble reabastecimiento tras cancel/refund.
- Funcion/trigger `voy_mp_recalc_order` + trigger en `VoyOrderItems` para recalcular `total_gross_cents` y `commission_cents` (si hay plan con percent).
- Trigger de stock `voy_mp_trg_adjust_stock` en `VoyOrderItems` (ajusta stock en insert/update/delete; usa `greatest(...,0)`).
- Trigger de reabastecimiento `voy_mp_trg_restock_on_cancel` en `VoyMarketplaceOrders` (status CANCELLED/REFUNDED suma stock y marca `restocked=true`).
- Pendiente: si se usa cap mensual o fee fijo mensual, aplicar en proceso de liquidacion/payout; estos triggers solo cubren % por pedido.
