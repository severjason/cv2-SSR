import { CssBaseline } from '@material-ui/core';
import App from 'next/app';
import React from 'react';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    );
  }
}

export default MyApp;
