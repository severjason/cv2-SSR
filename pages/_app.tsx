import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
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
