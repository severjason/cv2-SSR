import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import { NextPage, NextPageContext } from 'next';
import React from 'react';
import Link from 'next/link';

import { LANGS } from '../constants';
import { useTranslation } from '../i18n';
import IntlWrapper from '../components/IntlWrapper';
import { routToLang } from '../utils/lang';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.common.black,
    },
    '&:visited': {
      color: theme.palette.common.black,
    }
  },
}));

type Props = {
  statusCode?: number | null;
  namespacesRequired: string[],
  lang: string;
}

const Error: NextPage<Props> = ({ statusCode, lang }) => {
  const {t} = useTranslation();
  const classes = useStyles();

  return (
    <IntlWrapper lang={lang}>
      <Container className={classes.root}>
        <Link href={'/[lang]'} as={`/${LANGS[lang].route}`}>
          <a className={classes.link}>
            <Typography align="center">
              {statusCode
                ? t('error-with-status', { statusCode })
                : t('error-without-status')}
            </Typography>
          </a>
        </Link>
      </Container>
    </IntlWrapper>
  )
}

Error.getInitialProps = async ({ res, err, asPath = '' }: NextPageContext): Promise<Props> => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res)
  } else if (err) {
    ({ statusCode } = err)
  }
  res?.writeHead(301, {Location: '/en'}).end();
  return {
    namespacesRequired: ['common'],
    statusCode,
    lang: routToLang(asPath.split('/')[1]) || 'en'
  }
}

export default Error;
