'use client';
import { createTheme } from '@mui/material/styles';
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: outfit.style.fontFamily,
  },
  palette: {
    primary: {
      dark: '#66cc33', 
      main: '#187b3d',
      text: '#031722' 
    },
    secondary: {
      main: '#f6f6f6',
      light: '#969696',
      text: '#201957'
    },
    footer: {
      main: '#263B2F',
      light: '#f6f6f6'
    }
  },
});

export default theme;