import { createTheme, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    mono: {
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      black: string;
    };
  }

  interface PaletteOptions {
    mono: Palette['mono'];
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FC441E',
    },
    secondary: {
      main: '#FFFF00',
    },
    info: {
      main: '#0000FF',
    },
    mono: {
      white: '#FFFFFF',
      gray1: '#F2F2F2',
      gray2: '#D9D9D9',
      gray3: '#828282',
      black: '#000000',
    },
  },
});

export default theme;
