import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';
import { Helmet } from 'react-helmet';

import data, { photo } from '../../data';
import { AppLang } from '../../types';

const MetaTitle = () => {
  const { locale } = useRouter();
  const { t, lang } = useTranslation();
  const fullName = `${t('common:firstName')} ${t('common:lastName')}`;

  const framework = data.addition ? `(${data.addition})` : '';

  const title = `${fullName} | ${t('common:title')} ${framework}`;

  const description = data[lang as AppLang].profile;

  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.website} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={photo} />
      <link rel="canonical" href={`${data.website}${locale === 'en' ? '' : `/${locale}`}`} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.website} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={photo} />
    </Helmet>
  );
};

export default MetaTitle;
