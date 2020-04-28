import React from 'react';
import { NextPage, NextPageContext } from 'next';
import App from '../src/App';

const HomePage: NextPage<{}> = () => {
  return (
    <App lang="en"/>
  )
};

HomePage.getInitialProps = async ({res}: NextPageContext) => {
  res?.writeHead(301, {Location: '/en'}).end();
  return {}
}

export default HomePage;
