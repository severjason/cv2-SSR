import React from 'react';
import { NextPage, NextPageContext } from 'next';

import App from '../src/App';
import { getLangFromRoute } from '../src/utils';

type Props = {
  lang: string;
};

const Page: NextPage<Props> = ({lang}) => <App lang={lang}/>;

Page.getInitialProps = async ({query, res}: NextPageContext): Promise<Props> => {

  const {lang} = query;

  const parsedLang = Array.isArray(lang) ? lang[0] : lang;

  const langValue = getLangFromRoute(parsedLang);

  if (!langValue) {
    res?.writeHead(301, {Location: '/en'}).end();
  }

  return {
    lang: langValue || 'en',
  }
}

export default Page;
