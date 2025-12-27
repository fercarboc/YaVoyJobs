
# Integración de la sección Alquiler

Para integrar este nuevo vertical en el proyecto principal (YaVoy), sigue estos pasos sin romper la estructura actual:

1. **Rutas principales**:
En tu archivo de rutas principal (donde esté definido el `Router`), importa y añade el componente de rutas de Alquiler:

```tsx
import AlquilerRoutes from './alquiler/routes/alquiler.routes';

// Dentro de tu <Routes> principal:
<Route path="/alquiler/*" element={<AlquilerRoutes />} />
```

2. **Menú de navegación**:
Añade el enlace al nuevo vertical en tu Navbar global:

```tsx
<Link to="/alquiler">Alquiler</Link>
```

3. **Estado de Autenticación**:
Este módulo espera un hook `useAuth()` que proporcione:
- `isAuthenticated`: boolean
- `activeRole`: 'PARTICULAR' | 'AGENCY' | null
- `setRole`: function (para cambiar roles)

Si ya tienes un AuthProvider, asegúrate de que exponga estas variables o adapta el componente `alquiler/components/ContactButton.tsx` para usar tu lógica actual.

4. **Estilos**:
Todo el módulo utiliza **Tailwind CSS**. No es necesario importar archivos CSS externos adicionales.
