import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import { photo } from '../../data';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 250,
    minHeight: 250,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  avatar: {
    width: 200,
    height: 200,
    margin: theme.spacing(1),
  },
}));

const Photo = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const fullName = `${t('common:firstName')} ${t('common:lastName')}`;
  return (
    <Grid item className={classes.root}>
      <Avatar
        alt={`${fullName} photo`}
        className={classes.avatar}
        component="div"
        src={photo}
        imgProps={{ loading: 'lazy', title: `${fullName} photo` }}
      />
    </Grid>
  );
};

export default Photo;
