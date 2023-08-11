import { createTheme, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    green: {
      main: string;
      darkgreen: string;
      lightgreen: string;
    };
    blue: {
      main: string;
      lightblue: string;
    };
    mono: {
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      black: string;
    };
  }

  interface PaletteOptions {
    green?: Palette['green'];
    blue?: Palette['blue'];
    mono?: Palette['mono'];
  }
}

const theme = createTheme({
  palette: {
    green: {
      main: '#2CE477',
      darkgreen: '#2ACF6C',
      lightgreen: '#EAFCF1',
    },
    blue: {
      main: '#71CBFD',
      lightblue: '#2CE477',
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
