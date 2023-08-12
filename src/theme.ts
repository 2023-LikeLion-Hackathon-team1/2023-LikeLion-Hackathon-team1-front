import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    color: {
      main: string;
      green2: string;
      green3: string;
      green4: string;
      sub: string;
      blue2: string;
    };
    mono: {
      white: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      black: string;
    };
  }

  interface PaletteOptions {
    color?: Palette['color'];
    mono?: Palette['mono'];
  }
}

const theme = createTheme({
  palette: {
    color: {
      main: '#2CE477',
      green2: '#2ACF6C',
      green3: '#C5DF9D',
      green4: '#EAFCF1',
      sub: '#71CBFD',
      blue2: '#C8EBFE',
    },
    mono: {
      black: '#1A1C19',
      gray1: '#1A1C19',
      gray2: '#8D948C',
      gray3: '#CFD1D5',
      gray4: '#F1F2F1',
      white: '#FFFFFF',
    },
  },
});

export default theme;
