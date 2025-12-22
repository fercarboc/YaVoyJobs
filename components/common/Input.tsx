// Input reutilizable con theme
import React from 'react';
import { theme } from '../../theme';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, style, ...props }) => (
  <div style={{ marginBottom: theme.spacing.md }}>
    {label && (
      <label style={{
        display: 'block',
        marginBottom: theme.spacing.xs,
        fontWeight: theme.font.weight.bold,
        color: theme.colors.text,
        fontFamily: theme.font.family,
      }}>{label}</label>
    )}
    <input
      style={{
        width: '100%',
        padding: theme.spacing.sm,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius,
        fontFamily: theme.font.family,
        fontSize: theme.font.size,
        color: theme.colors.text,
        background: theme.colors.surface,
        ...style,
      }}
      {...props}
    />
  </div>
);
