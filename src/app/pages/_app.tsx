import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import App from 'next/app';
import React from 'react';

import { appWithTranslation } from '../i18n'
import theme from '../lib/material-ui/theme';

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline>
          <Component {...pageProps} />
        </CssBaseline>
      </MuiThemeProvider>
    )
  }
}

export default appWithTranslation(MyApp)
