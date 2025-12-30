# 📌 Estado técnico YaVoy – Pagos Stripe y Housing (resumen hasta hoy)

Este documento deja **cerrado y documentado** el estado actual del sistema de **pagos con Stripe** y del módulo **Alquileres (Housing)** para que puedas continuar con tranquilidad en otras partes (perfil de trabajador, etc.) sin perder contexto.

---

## 1️⃣ Arquitectura general (resumen)

- **Frontend**: React + TypeScript
- **Backend**: Supabase (Postgres + Auth + Storage + Edge Functions)
- **Pagos**: Stripe (modo test)
- **Imágenes**: Supabase Storage

---

## 2️⃣ Pagos – Modelo de datos actual

### Tabla `VoyPayments`

```sql
id                       uuid (PK)
user_id                  uuid              -- usuario que debe pagar
job_id                   uuid
application_id           uuid
amount                   numeric
currency                 varchar
status                   varchar           -- pending | succeeded | failed (pendiente de cerrar)
stripe_payment_intent_id varchar
stripe_charge_id         varchar
payment_method           varchar
error_message             text
metadata                 jsonb
created_at               timestamptz
updated_at               timestamptz
description              text
payment_type             varchar           -- commission, etc.
```

### Estado real de los datos

- Existen **registros pending** con `stripe_payment_intent_id` ya creado
- El **cobro manual en Stripe** se ha hecho solo para pruebas
- ❗ **No existe aún** el campo `completed_at` (error visto en SQL)

➡️ Conclusión: **el flujo de pago está a medias a propósito** (correcto para este momento).

---

## 3️⃣ Edge Function: `create-payment-intent`

### Qué hace correctamente

- Valida JWT del usuario
- Verifica que el pago pertenece al usuario
- Crea un `payment_intent` en Stripe
- Guarda `stripe_payment_intent_id` en `VoyPayments`
- Devuelve `clientSecret`

### Qué NO hace aún (importante)

- ❌ No marca el pago como `succeeded`
- ❌ No guarda `stripe_charge_id`
- ❌ No hay webhook final conectado a lógica de negocio

👉 **Esto es correcto**, porque:
- Aún no está cerrado el flujo del trabajador
- No hay liberación de pagos ni lógica antifraude

---

## 4️⃣ Stripe – Estado actual

- Cuenta en **modo test**
- Pagos creados manualmente desde Dashboard solo para pruebas
- Webhook activo y respondiendo `200 OK`

Ejemplo visto:
- `payment_intent.succeeded`
- Stripe confirma pago
- Supabase responde `{"received": true, "ignored": true}`

➡️ El webhook **recibe**, pero **no procesa lógica** (correcto por ahora).

---

## 5️⃣ Decisión clave (muy importante)

🔒 **NO avanzar más en pagos ahora**

Motivo:
- Falta el perfil de trabajador
- Falta el flujo completo de job → aceptación → finalización
- Falta definir cuándo se cobra y cuándo se libera dinero

✅ Decisión correcta: **parar pagos aquí** y continuar con el core funcional.

---

## 6️⃣ Housing (Alquileres) – Estado actual

### Storage

- Bucket: `housing-images`
- Archivos **sí existen** y están bien subidos
- Bucket **NO es público** ❌

```text
housing-images/
 └── ads/
     └── <ad_id>/
         ├── 1766878....jpeg
         ├── 1766879....jpeg
```

### Problema detectado

- Las imágenes **no cargan en la web pública**
- El frontend espera URLs accesibles directamente

### Causa

- Bucket no es `public`
- O no se están generando URLs firmadas

---

## 7️⃣ Soluciones posibles (no ejecutar aún si no quieres)

### Opción A (la más simple)

✔️ Hacer `housing-images` **PUBLIC**

- Ideal para anuncios públicos
- Menos complejidad

### Opción B (más segura)

- Mantener bucket privado
- Generar URLs firmadas desde backend

➡️ Recomendación realista ahora: **Opción A**.

---

## 8️⃣ Frontend Housing – Estado del código

### PublicList

- Filtros ✔️
- Paginación ✔️
- Listado ✔️
- Map placeholder ✔️

### PropertyDetail

- Galería preparada ✔️
- Lightbox ✔️
- Fallback de imágenes ✔️

⚠️ El código **está bien**, el problema es **Storage / URLs**, no React.

---

## 9️⃣ Estado general del proyecto (realista)

🟢 Auth y roles → funcional
🟢 Housing UI → muy bien avanzada
🟡 Pagos → **bloqueados conscientemente**
🔴 Worker profile → pendiente (siguiente paso correcto)

---

## 🔟 Próximo paso recomendado

🎯 **Centrarte ahora en:**

### Perfil del trabajador

- Datos personales
- Verificación
- Cuenta Stripe (más adelante)
- Historial de trabajos

➡️ Cuando esto esté:
- Se retoma pagos
- Se cierra webhook
- Se define antifraude

---

📌 Este documento representa un **punto de control limpio**.

Cuando quieras, retomamos exactamente desde aquí.

