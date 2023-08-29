import { createTheme } from '@mui/material';
// const breakpoints = {
//   values: {
//     xs: 0,
//     sm: 0, // Phone
//     md: 768, // Tablet/Laptop
//     lg: 1500, // Desktop
//     xl: 2000,
//   },
// };
export const Colors = {
  primary: '#000000',
  secondary: '#735F32',
  teritory: '#735F32',
  success: '#4CAF50',
  info: '#00a2ff',
  danger: '#FF5722',
  warning: '#FFC107',
  dark: '#0e1b20',
  light: '#aaa',
  muted: '#abafb3',
  border: '#DDDFE1',
  inverse: '#2F3D4A',
  shaft: '#333',
  text:'#282A3A',
  footer:'#C69749',
  ///////////////
  // Grays
  ///////////////
  dim_grey: '#696969',
  dove_gray: '#e8e8e8',
  body_bg: '#f3f6f9',
  light_gray: 'rgb(230,230,230)',
  ///////////////
  // Solid Color
  ///////////////
  white: '#fff',
  black: '#000',
};

// const theme = createTheme({
  const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
    text:{
      primary: Colors.warning
    }
  },
  typography: {
    fontFamily: 'Noto Sans Georgian',
    fontSize: 16,
    color: Colors.secondary,
    h4: {
      fontSize: 26,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '2.7rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontSize: 23,
      color: 'black',
      '@media (min-width:1200px)': {
        fontSize: '1.5rem',

      },
    },
    h1: {
      fontSize: 28,
      color: Colors.info,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '2.7rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    h2: {
      fontSize: 28,
      Color: Colors.shaft,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '2.7rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontSize: 20,
      color: Colors.black,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '1.2rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '0.8rem',
      },
    },
    body: {
      fontSize: 18,
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:300px)': {
        fontSize: '0.9rem',
      },
      '@media (max-width:1200px)': {
        fontSize: '0.5rem',
      },
    },
    heading: {
        fontSize: 29,
        '@media (min-width:600px)': {
          fontSize: '2.5rem',
        },
        '@media (min-width:300px)': {
          fontSize: '0.9rem',
        },
        '@media (max-width:1200px)': {
          fontSize: '0.5rem',
        },
      },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
  },
});

export default theme;
