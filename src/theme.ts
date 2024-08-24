'use client'

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0070f3',
    },
    secondary: {
      main: '#ff4081',
    },
    text: {
      primary: '#000000', // Black color for primary text
      secondary: '#555555', // Dark grey for secondary text
    },
  },
});

export default theme;

