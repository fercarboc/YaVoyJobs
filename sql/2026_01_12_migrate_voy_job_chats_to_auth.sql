-- Actualiza VoyJobChats para que almacen en auth_user_id en vez de VoyUsers.id.
UPDATE public."VoyJobChats" c
SET client_user_id = u.auth_user_id
FROM public."VoyUsers" u
WHERE c.client_user_id = u.id
  AND u.auth_user_id IS NOT NULL;

UPDATE public."VoyJobChats" c
SET helper_user_id = u.auth_user_id
FROM public."VoyUsers" u
WHERE c.helper_user_id = u.id
  AND u.auth_user_id IS NOT NULL;

-- Garantiza índices y relaciones con auth_user_id si fuera necesario.
