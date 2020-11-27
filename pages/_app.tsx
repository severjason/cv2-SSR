import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import React from 'react';

import '../src/styles/fonts.css';
import theme from '../src/styles/theme';

const CVApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
};

export default CVApp;
