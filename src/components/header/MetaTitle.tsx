import { useRouter } from 'next/router';
import React from 'react';
import { Helmet } from 'react-helmet';
import data, { photo } from '../../data';
import useTranslation from 'next-translate/useTranslation';
import { AppLang } from '../../types';

const MetaTitle = () => {
  const { asPath } = useRouter();
  const { t, lang } = useTranslation();
  const fullName = `${t('common:firstName')} ${t('common:lastName')}`;

  const framework = data.addition ? `(${data.addition})` : '';

  const title = `${fullName} | ${t('common:title')} ${framework}`;

  const description = data[lang as AppLang].profile;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={data.website} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={photo} />
      <link rel="canonical" href={asPath} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={data.website} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={photo} />
    </Helmet>
  );
};

export default MetaTitle;
