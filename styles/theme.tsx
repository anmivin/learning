import { createTheme } from '@mui/material/';

export const theme = createTheme({
  palette: {
    background: {
      default: '#fbd5ff',
    },
    primary: {
      main: '#d9ffd5',
    },
    secondary: {
      main: '#fbd5ff',
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    h1: {
      fontSize: '5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '3rem',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#90ee90',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: 5,
          textDecoration: 'none',
          color: 'black',
          boxShadow: '1px 1px 2px black',
          fontSize: '1rem',
          '&:hover': {
            cursor: 'pointer',
            boxShadow: '-1px -1px 2px MediumVioletRed',
            color: 'MediumVioletRed',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: '#d8bfd8',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#90ee90',
          boxShadow: '1px 1px 2px black',
        },
      },
    },
  },
});
