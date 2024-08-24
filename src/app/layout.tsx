// src/app/layout.tsx

import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { CssBaseline } from '@mui/material';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
