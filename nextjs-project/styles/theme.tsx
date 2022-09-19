import { createTheme } from '@mui/material/';

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#fbd5ff',
    },
    primary: {
      main: '#d8bfd8',
      dark: '#dda0dd',
      light: '#000000',
    },
    secondary: {
      main: '#000000',
    },
  },

  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    h1: {
      fontSize: '1.5em',
      color: 'black',
      fontWeight: 'bold',
      textShadow: '2px 2px 2px #c71585',
      padding: '10px',
    },
    button: {
      textDecoration: 'none',
    },
    h2: {
      fontSize: '1.1em',
      borderBottom: 'solid 1px black',
      margin: '10px 0',
    },
    h3: {
      fontSize: '1em',
      marginTop: '15px',
      padding: '15px',
      borderLeft: 'double 3px black',
    },
    h4: {
      fontSize: '0.9em',
      textAlign: 'end',
      padding: '0 5px 5px 0',
    },
    h5: {
      fontSize: '1em',
      padding: '15px',
    },
    h6: {
      fontSize: '1em',
      padding: '5px',
      fontWeight: 'bald',
    },
    body1: {
      color: '#000000',
      padding: '5px',
    },
  },

  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: '#000000',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          padding: '0 10px',
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#d8bfd8',
          width: '10%',
          height: '100vh',
          margin: 0,
          borderRadius: 0,
        },
        root: {
          width: '10%',
          flexShrink: 0,
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
          borderRadius: 4,
          backgroundColor: '#fbd5ff',
          size: 'small',
          fontFamily: 'Roboto',

          '&:hover': {
            cursor: 'pointer',
            boxShadow: '-1px -1px 2px #c71585',
            color: '#c71585',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          margin: '10px 0',
          padding: '10px',
          justifyContent: 'space-between',
          flexDirection: 'row',
          borderRadius: 5,
          boxShadow: '1px 1px 2px black,  -1px -1px 2px black',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '10px',
          boxShadow: '1px 1px 2px black, -1px -1px 2px black',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'left',
          flexDirection: 'column',
          borderRadius: 10,
          marginBottom: '10px',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    background: {
      default: '#240d4d',
    },
    primary: {
      main: '#180538',
      dark: '#0e0124',
      light: '#d9c2ff',
    },
    secondary: {
      main: '#d9c2ff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    h1: {
      fontSize: '1.5em',
      color: '#d9c2ff',
      fontWeight: 'bold',
      textShadow: '0px 0px 10px black, 2px 2px 2px black',
      padding: '10px',
    },
    button: {
      textDecoration: 'none',
    },
    h2: {
      fontSize: '1.1em',
      borderBottom: 'solid 1px #d9c2ff',
      margin: '10px 0',
      color: '#d9c2ff',
    },
    h3: {
      fontSize: '1em',
      marginTop: '15px',
      padding: '15px',
      borderLeft: 'double 3px #d9c2ff',
      color: '#d9c2ff',
    },
    h4: {
      fontSize: '0.9em',
      textAlign: 'end',
      padding: '0 5px 5px 0',
      color: '#d9c2ff',
    },
    h5: {
      fontSize: '1em',
      padding: '15px',
      color: '#d9c2ff',
    },
    h6: {
      fontSize: '1em',
      padding: '5px',
      fontWeight: 'bald',
      color: '#d9c2ff',
    },
    body1: {
      color: '#d9c2ff',
      padding: '5px',
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          color: '#d9c2ff',
          backgroundColor: 'rgba(171, 255, 249, 0.2)',
          padding: '0 10px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#000000',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#180538',
          width: '10%',
          height: '100vh',
          margin: 0,
          borderRadius: 0,
        },
        root: {
          width: '10%',
          flexShrink: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          margin: 5,
          textDecoration: 'none',
          color: '#d9c2ff',
          boxShadow: '1px 1px 2px #d9c2ff',
          borderRadius: 4,
          backgroundColor: '#0e0124',
          size: 'small',
          fontFamily: 'Roboto',

          '&:hover': {
            cursor: 'pointer',
            boxShadow: '-1px -1px 2px #f5f0ff',
            color: '#f5f0ff',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          margin: '10px 0',
          padding: '10px',
          justifyContent: 'space-between',
          boxShadow: '1px 1px 2px #d9c2ff, -1px -1px 2px #d9c2ff',
          flexDirection: 'row',
          borderRadius: 5,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          boxShadow: '1px 1px 2px #d9c2ff, -1px -1px 2px #d9c2ff',
          alignItems: 'left',
          flexDirection: 'column',
          borderRadius: 10,
          marginBottom: '10px',
        },
      },
    },
  },
});

const themes = {
  dark: darkTheme,
  light: defaultTheme,
};

export default themes;
