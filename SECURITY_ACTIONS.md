# Plan de endurecimiento de seguridad (YaVoy Web)

Este documento resume los cambios necesarios para poner la web en producción de forma segura.

## 1) Gestión de secretos y configuración
- Rotar claves comprometidas: Supabase anon (y service si se usó), Stripe, token OIDC de Vercel.
- Eliminar `.env.local` del repo; cargar secretos vía variables de entorno en Vercel/Supabase.
- Mover `SUPABASE_URL` y `SUPABASE_ANON_KEY` a `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`; no hardcodear en `services/supabase.ts`.
- Verificar que `STRIPE_SECRET_KEY` y `STRIPE_WEBHOOK_SECRET` solo viven en entorno (Edge Functions).

## 2) Row Level Security (RLS)
- Ejecutar `sql/security_policies.sql` en Supabase para activar RLS en todas las tablas `Voy%` con políticas por rol/propiedad.
- Validar que los JWT incluyan claim `role` (admin/user) o ajustar las condiciones en el SQL.
- Probar accesos con usuarios anon/auth/admin para detectar huecos.

## 3) Edge Functions (Stripe)
- Añadir validación de JWT: rechazar peticiones sin `Authorization: Bearer <jwt>` y validar usuario con supabase client.
- Verificar ownership/rol antes de modificar `VoyPayments` y `VoyCompanySubscriptions`.
- Recalcular importes server-side; no fiarse del amount enviado por el cliente.
- Restringir CORS a dominios oficiales; quitar `'*'`.
- Reducir logs (no PII) y manejar errores con códigos claros.

## 4) Frontend
- Consumir Supabase usando env vars (`import.meta.env`) y evitar exponer claves sensibles en el bundle.
- Manejar expiración de sesión y logout correcto; forzar refresh de sesión cuando falle un request 401.
- Validar contraseñas en cambio/registro (longitud, complejidad) y mostrar errores específicos.

## 4.1) Autenticación y roles
- Registro/login: usar Supabase Auth email+password; no almacenar contraseñas en tablas propias. Las políticas RLS deben usar `auth.uid()` y el claim `role` en el JWT.
- Roles: emitir claim `role` en JWT (ej. `admin`, `user`, `company`, `helper`). Configurar en Supabase (Auth → Policies/JWT) o establecerlo al crear el usuario y propagarlo en el JWT.
- Sesiones: guardar solo el `access_token` en memoria (o `localStorage` si no hay alternativa) y refrescar con el `refresh_token`; invalidar tokens en logout y limpiar almacenamiento.
- Autorización en cliente: ocultar rutas/componentes según rol, pero la autoridad final es el RLS en Supabase.
- Recuperación de contraseña: usar el flujo de reset de Supabase (magic link) y rate-limiting; no reenviar contraseñas.

## 5) Datos sensibles y almacenamiento
- Revisar buckets de Storage y sus políticas de acceso; limitar lectura/escritura a roles/usuarios esperados.
- Evitar logs de PII en cliente y funciones; usar IDs u hashes si se necesita trazabilidad.
- Cifrar en tránsito (HTTPS) y considerar cifrado en reposo para datos especialmente sensibles.

## 6) Stripe/Webhooks
- Asegurar que `stripe-webhook` usa `STRIPE_WEBHOOK_SECRET` desde entorno.
- Antes de actualizar pagos/suscripciones en el webhook, verificar estado actual y que el registro existe; evitar sobrescrituras arbitrarias.
- Registrar mínimamente (ids y estados) y alertar en caso de fallos.

## 7) Checklist de verificación
- [ ] Claves rotadas y `.env.local` fuera del repo.
- [ ] RLS activo en todas las `Voy%`; tests con usuarios de rol/propiedad.
- [ ] Edge Functions con JWT + CORS restringido + validación de ownership + importes recalculados.
- [ ] Frontend leyendo env vars y sin secretos hardcodeados.
- [ ] Storage con políticas revisadas; sin PII en logs.
- [ ] Webhook Stripe protegido y con validaciones de estado.

Aplicar este plan antes de abrir la web a usuarios finales y repetir pruebas después de cada despliegue.

## 8) Capa backend/API para aislar lo privado de lo público
- Proxy/backend propio: sirve como único punto público; el frontend habla con tu API y esta usa la service role de Supabase. Ventaja: no expones anon key, puedes aplicar lógica de negocio y validaciones server-side.
- Autenticación: exige `Authorization: Bearer <JWT Supabase>` en tu API; valida el token contra Supabase Admin o JWKS. Propaga `user_id` y `role` a la lógica de negocio.
- Autorización: aplica checks de ownership/rol en el backend además de RLS. Ej.: un pago solo lo inicia el employer dueño del `payment_id` o un admin.
- Rate limiting y anti-abuso: rate limit por IP y por usuario en endpoints sensibles (login, pagos, creación de intents). Añade protección CSRF si usas cookies; si usas tokens Bearer, aplica CORS estricto.
- Stripe: crea PaymentIntent y maneja montos sólo en el backend; el cliente no decide el importe. Valida el `payment_id`/`subscription_id` contra DB antes de crear intent y guarda `stripe_payment_intent_id` de forma transaccional.
- CORS: permite solo dominios oficiales en tu API. Bloquea métodos no usados y cabeceras innecesarias.
- Logging seguro: registra IDs y errores, nunca PII ni tokens. Añade trazas de auditoría para operaciones de pago y cambios de rol.
- Despliegue: usa un entorno privado (p.ej. Vercel serverless/Edge, Fly.io o similar) con variables de entorno; no mezcles service role en cliente.

## 9) Implementación con Next.js (Route Handlers) + Supabase (DB/Auth/RLS)
- División clara: páginas Next.js + API privada con Route Handlers (`app/api/.../route.ts`). El frontend solo llama a `/api/*`; no expone la service role.
- Cliente Supabase en servidor: instanciar con SERVICE_ROLE en los handlers; para el cliente (pages) usar la anon key solo para lecturas públicas mínimas o evitarla.
- Autenticación: en handlers, validar `Authorization: Bearer <JWT Supabase>` recibido del frontend. Verificar el JWT con supabase admin o JWKS y obtener `user_id/role`.
- Autorización server-side: aplicar checks de ownership/rol en cada handler antes de tocar DB o Stripe. RLS sigue activo como red de seguridad.
- Stripe: crear PaymentIntent/suscripciones dentro de handlers; el cliente solo recibe `client_secret`. Montos se calculan server-side.
- CORS: solo necesario si expones dominio distinto; por defecto, mismos dominios. Si hay apps móviles, permitir solo orígenes esperados.
- Rate limiting: middleware en `/api` por IP/usuario para pagos, login, alta de pedidos.
- Entorno: variables en Vercel (`SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_URL`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`). Nunca loguear valores secretos.

## 10) Arquitectura recomendada (simple y estándar)
- Repos separados: Web (Next.js) con frontend + API privada (Stripe + service role), y Móvil (Expo) como cliente.
- Frontend web: Next.js; todo lo sensible via `/api/*` en Next.js. El cliente no ve la service role.
- API privada: Route Handlers para pagos (Stripe), cálculos de importes/comisiones/seguro, admin, cambios de rol, anti-abuso (crear anuncios/pedidos con validaciones).
- Supabase: BD/Auth/RLS. Uso directo desde cliente solo para lecturas/CRUD del propietario protegidas por RLS: listar ofertas, ver perfil propio, ver tus anuncios/pedidos, chat si el modelo/Policies son correctos.
- Móvil (Expo): llama a la API de Next.js para lo sensible; puede usar anon key para lecturas simples bajo RLS si se desea.
- Regla de decisión rápida: API si 💳 pagos, 🧾 facturas/importes, 👮 admin, 🔐 roles/verificaciones, 🧨 operaciones sensibles; directo a Supabase (con RLS) para listas y CRUD de propietario seguro.

Recomendación final: Next.js (web) + API routes/handlers + Supabase + Stripe; móvil (Expo) consumiendo esa API para lo sensible. Menos piezas, menos coste mental, menos riesgo, más velocidad.
