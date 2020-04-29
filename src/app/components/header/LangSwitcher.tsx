import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from '../../i18n';

import { LANGS } from '../../constants';
import { useLang } from '../../hooks';

const useStyles = makeStyles(theme => ({
  root: {
    top: 0,
    right: 0,
    position: 'absolute',
    padding: theme.spacing(0.5),
  },
}));

const LangSwitcher = () => {

  const {t} = useTranslation();

  const {currentLang} = useLang();

  const classes = useStyles();

  const Icon = LANGS[currentLang].flagIcon;

  const link = LANGS[currentLang].nextRoute;

  return (
    <Grid item className={classes.root}>
      <Link href="/[lang]" as={`/${link}`}>
        <a>
          <IconButton title={t['langSwitch']}>
            <Icon/>
          </IconButton>
        </a>
      </Link>
    </Grid>
  );
};

export default LangSwitcher;
