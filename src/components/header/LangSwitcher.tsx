import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import { LANGS } from '../../constants';
import { AppLang } from '../../types';

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    right: 0,
    position: 'absolute',
    padding: theme.spacing(0.5),
  },
}));

const LangSwitcher = () => {
  const { t, lang } = useTranslation();

  const classes = useStyles();

  const Icon = LANGS[lang as AppLang].flagIcon;

  const nextLocale = LANGS[lang as AppLang].nextLang;

  return (
    <Grid item className={classes.root}>
      <Link href={`/`} locale={nextLocale}>
        <a>
          <IconButton title={t('common:langSwitch')}>
            <Icon />
          </IconButton>
        </a>
      </Link>
    </Grid>
  );
};

export default LangSwitcher;
