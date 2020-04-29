import React from 'react';
import { NextPage, NextPageContext } from 'next';

import App from '../components/App';
import { routToLang } from '../utils/lang';

type Props = {
  lang: string;
  namespacesRequired: string[],
};

const Page: NextPage<Props> = ({lang}) => <App lang={lang}/>;

Page.getInitialProps = async ({query, res}: NextPageContext): Promise<Props> => {

  const {lang} = query;

  const parsedLang = Array.isArray(lang) ? lang[0] : lang;

  const langValue = routToLang(parsedLang);

  if (!langValue) {
    res?.writeHead(301, {Location: '/en'}).end();
  }

  return {
    namespacesRequired: ['common'],
    lang: langValue || 'en',
  }
}

export default Page;
