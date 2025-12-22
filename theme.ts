// theme.ts
// Sistema de diseño global para la app

export const theme = {
  colors: {
    primary: '#1976d2', // Azul principal
    secondary: '#ff9800', // Naranja
    background: '#f5f6fa',
    surface: '#fff',
    text: '#222',
    muted: '#888',
    border: '#e0e0e0',
    success: '#4caf50',
    error: '#f44336',
    warning: '#ffeb3b',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '32px',
    xl: '64px',
  },
  font: {
    family: 'Inter, Arial, sans-serif',
    size: '16px',
    weight: {
      normal: 400,
      bold: 700,
    },
  },
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
};
