import { createTheme } from '@mui/material/styles';

const providerBackofficeTheme = createTheme({
  typography: {
    fontSize: 13,
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: 13,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          minHeight: 32,
          fontWeight: 600,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        variant: 'outlined',
        margin: 'dense',
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '6px 12px',
          fontSize: 13,
        },
        head: {
          fontWeight: 700,
          background: '#f5f7fa',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: 22,
          fontSize: 12,
          borderRadius: 6,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: '0 2px 8px 0 rgba(0,0,0,0.06)',
        },
      },
    },
  },
});

export default providerBackofficeTheme;
