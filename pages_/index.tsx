import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

const HomePage: NextPage = () => {
  const { t } = useTranslation();
  const firstName = t('common:firstName');
  return (
    <div>
      <Link href="/" locale="en">
        <a>English</a>
      </Link>
      <Link href="/" locale="uk">
        <a>Ukraine</a>
      </Link>
      {firstName}
    </div>
  );
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
