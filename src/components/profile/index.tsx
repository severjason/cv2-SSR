import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

import data from '../../data';
import { AppLang } from '../../types';
import { Title } from '../shared';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Profile = () => {
  const { t, lang } = useTranslation();

  const profileData = data[lang as AppLang]?.profile;

  const classes = useStyles();

  return (
    <Grid container>
      <Title icon={AssignmentInd} text={`${t('common:profile')}`} />
      <Paper className={classes.paper} component="p">
        {profileData}
      </Paper>
    </Grid>
  );
};

export default Profile;
