import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import App from '../src/components';

const HomePage: NextPage = () => {
  return <App />;
};

export default HomePage;

export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {
  return {
    props: {
      locale,
      locales,
    },
  };
};
