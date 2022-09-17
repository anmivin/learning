import { createTheme } from '@mui/material/';

const defaultTheme = createTheme({
  palette: {
    background: {
      default: '#fbd5ff',
    },
    primary: {
      main: '#d8bfd8',
      dark: '#dda0dd',
      light: '#c71585',
    },
  },

  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    h1: {
      fontSize: '2em',
      color: 'Plum',
      fontWeight: 'bold',
      textShadow: '0px 0px 10px black, 2px 2px 2px black',
      padding: '15px',
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
  },

  components: {
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
      default: '#502796',
    },
    primary: {
      main: '#340a7a',
      dark: '#1c014a',
      light: '#93ecfa',
    },
  },
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    h1: {
      fontSize: '2em',
      color: '#93ecfa',
      fontWeight: 'bold',
      textShadow: '0px 0px 10px black, 2px 2px 2px black',
      padding: '15px',
    },
    button: {
      textDecoration: 'none',
    },
    h2: {
      fontSize: '1.1em',
      borderBottom: 'solid 1px white',
      margin: '10px 0',
      color: 'white',
    },
    h3: {
      fontSize: '1em',
      marginTop: '15px',
      padding: '15px',
      borderLeft: 'double 3px white',
      color: 'white',
    },
    h4: {
      fontSize: '0.9em',
      textAlign: 'end',
      padding: '0 5px 5px 0',
      color: 'white',
    },
    h5: {
      fontSize: '1em',
      padding: '15px',
      color: 'white',
    },
    h6: {
      fontSize: '1em',
      padding: '5px',
      fontWeight: 'bald',
      color: 'white',
    },
    body1: {
      color: 'white',
    },
    body2: {
      color: 'white',
      fontSize: '0.9em',
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#340a7a',
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
          color: 'white',
          boxShadow: '1px 1px 2px white',
          borderRadius: 4,
          backgroundColor: '#1c014a',
          size: 'small',
          fontFamily: 'Roboto',

          '&:hover': {
            cursor: 'pointer',
            boxShadow: '-1px -1px 2px #63f7ff',
            color: '#63f7ff',
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
          boxShadow: '1px 1px 2px #abfff9, -1px -1px 2px #abfff9',
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
          boxShadow: '1px 1px 2px #abfff9, -1px -1px 2px #abfff9',
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
