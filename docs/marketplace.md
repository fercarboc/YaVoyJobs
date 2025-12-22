# YaVoy Marketplace - Documentación técnica y funcional

## 1. Tablas y Roles

- **VoyUsers**: usuarios principales, campo `role` (PARTICULAR, COMPANY, HELPER, ADMIN, PROVIDER)
- **voy_marketplace.buyer_profiles**: perfiles de comprador (buyer_type: PARTICULAR, PRO, HORECA)
- **voy_marketplace.seller_profiles**: perfiles de proveedor/tienda
- **voy_marketplace.seller_staff**: staff de cada proveedor (OWNER, MANAGER, SALES, SUPPORT)
- **voy_marketplace.products**: productos
- **voy_marketplace.product_prices**: precios (no accesible directo, solo por RPC)
- **voy_marketplace.inventory**: stock
- **voy_marketplace.orders**: pedidos

## 2. RPC y Seguridad

- Los precios de productos solo se obtienen vía:
  - `supabase.rpc('list_products_with_my_price', params)`
- No se permite select directo a `product_prices` (RLS activo)
- El cliente nunca ve precios de otros canales (ej: HORECA) salvo que su perfil lo permita

## 3. Flujos de Registro

### Particular / Helper / Empresa
- Registro estándar, crea usuario en `VoyUsers` con el rol correspondiente
- Empresa puede activar perfil HORECA (checkbox):
  - Upsert en `buyer_profiles` con `buyer_type='HORECA'`, `is_verified=false`

### Proveedor
- Nueva pestaña en /register
- Al registrar:
  - Crea usuario en `VoyUsers` con `role='PROVIDER'`
  - Crea `seller_profile` (campos: store_name, store_slug, sector_principal, tax_id)
  - Crea `seller_staff` OWNER
  - Redirige a `/provider`

## 4. Rutas y Guards

- `/provider`: solo para PROVIDER (RequireAuth + RequireRole)
- `/marketplace`: para cualquier usuario autenticado (RequireAuth + RequireRole)

## 5. ProviderDashboard
- CRUD de productos (crear, editar, eliminar)
- Listado de productos del proveedor

## 6. MarketplaceHome
- Listado público de productos usando solo la RPC segura
- Muestra nombre, descripción, categoría y precio visible para el usuario

## 7. Servicios Supabase
- `userService`: getCurrentVoyUser, updateVoyUserRole
- `buyerProfilesService`: getMyBuyerProfile, upsertMyBuyerProfileHoreca
- `sellerService`: createSellerProfile, getMySellerProfiles
- `productsService`: listProductsWithMyPrice, createProduct, updateProduct, deleteProduct

## 8. Checklist Seguridad
- El front nunca hace select directo a product_prices
- Solo se usa la RPC para precios
- Un particular no puede ver precios HORECA
- RLS protege los datos sensibles

---

Cualquier duda, revisar este documento o contactar con el equipo técnico.
