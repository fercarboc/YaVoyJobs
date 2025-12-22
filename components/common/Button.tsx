// Botón reutilizable con theme
import React from 'react';
import { theme } from '../../theme';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, style, ...props }) => {
  let bg = theme.colors.primary;
  let color = theme.colors.surface;
  if (variant === 'secondary') {
    bg = theme.colors.secondary;
    color = theme.colors.surface;
  } else if (variant === 'danger') {
    bg = theme.colors.error;
    color = theme.colors.surface;
  }
  return (
    <button
      style={{
        background: bg,
        color,
        border: 'none',
        borderRadius: theme.borderRadius,
        padding: `${theme.spacing.sm} ${theme.spacing.md}`,
        fontWeight: theme.font.weight.bold,
        fontFamily: theme.font.family,
        fontSize: theme.font.size,
        boxShadow: theme.boxShadow,
        cursor: 'pointer',
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};
