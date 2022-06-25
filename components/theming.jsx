import { createTheme } from '@mui/material/styles';

const themeOptions = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#8f60ff',
      light: '#8f60ff',
      dark: '#8f60ff',
    },
    secondary: {
      main: '#6094ff',
      light: '#6094ff',
      dark: '#6094ff',
    },
    background: {
      paper: '#282b2e',
      default: '#151718',
    },
    text: {
      primary: '#dddddd',
      secondary: 'rgba(221,221,221,0.7)',
      disabled: 'rgba(221,221,221,0.5)',
      hint: 'rgba(221,221,221,0.5)',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
});

export default themeOptions;