import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import Info from './Info';
import MetaTitle from './MetaTitle';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flex: 1,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
  },
  name: {
    paddingBottom: theme.spacing(2),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  divider: {
    backgroundColor: fade(theme.palette.primary.contrastText, 0.3),
  },
}));

const Titles = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  const fullName = `${t('common:firstName')} ${t('common:lastName')}`;

  return (
    <Grid item className={classes.root}>
      <MetaTitle />
      <Typography variant="h4" component="h1" className={classes.name}>
        {fullName}
      </Typography>
      <Typography variant="h5" component="h2" className={classes.title}>
        {t('common:title')}
      </Typography>
      <Divider component="hr" className={classes.divider} />
      <Info />
    </Grid>
  );
};

export default Titles;
