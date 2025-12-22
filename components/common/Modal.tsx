// Modal reutilizable con theme
import React from 'react';
import { theme } from '../../theme';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: number | string;
  height?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  padding?: number | string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  width,
  height,
  minWidth = 320,
  maxWidth = 480,
  minHeight,
  maxHeight = '90vh',
  padding = theme.spacing.lg,
}) => {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        background: theme.colors.surface,
        borderRadius: theme.borderRadius,
        boxShadow: theme.boxShadow,
        minWidth,
        maxWidth,
        width,
        height,
        minHeight,
        maxHeight,
        padding,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {title && <h2 style={{ marginBottom: theme.spacing.md, color: theme.colors.text }}>{title}</h2>}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: theme.spacing.sm,
            right: theme.spacing.sm,
            background: 'transparent',
            border: 'none',
            fontSize: 20,
            cursor: 'pointer',
            color: theme.colors.muted,
          }}
          aria-label="Cerrar"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
