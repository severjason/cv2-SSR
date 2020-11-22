import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import React, { Fragment } from 'react';

const CVApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <CssBaseline />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default CVApp;
