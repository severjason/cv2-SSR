import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LangIcon from '@material-ui/icons/Language';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import data from '../../data';
import { Title } from '../shared';
import type { AppLang, LangItem } from '../../types';
import Item from './Item';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: 0,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1),
    },
  },
}));

const Langs = () => {
  const { t, lang } = useTranslation();

  const classes = useStyles();

  const langData = data[lang as AppLang]?.langs;

  return (
    <Grid container>
      <Title icon={LangIcon} text={`${t('common:langs.title')}`} />
      <Paper className={classes.paper}>
        {langData?.map((lang: LangItem) => (
          <Item key={lang.title} title={lang.title} level={lang.level} />
        ))}
      </Paper>
    </Grid>
  );
};

export default Langs;
