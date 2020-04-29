import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LangIcon from '@material-ui/icons/Language';
import React from 'react';

import { useTranslation } from '../../i18n';
import data from '../../data/data';
import { useLang } from '../../hooks';
import { Title } from '../shared';
import { LangItem } from '../../ts-types';
import Item from './Item';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Langs = () => {

  const {t} = useTranslation();

  const {currentLang} = useLang();

  const classes = useStyles();

  const langData = data[currentLang] && data[currentLang].langs;

  return (
    <Grid container>
      <Title icon={LangIcon} text={`${t('langs.title')}`}/>
      <Paper className={classes.paper}>
        {langData && langData.map((lang: LangItem) => (
          <Item key={lang.title} title={lang.title} level={lang.level}/>
        ))}
      </Paper>
    </Grid>
  );
};

export default Langs;
