import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import React from 'react';

import { useTranslation } from '../../i18n';
import data from '../../data';
import { useLang } from '../../hooks';
import { Title } from '../shared';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Profile = () => {

  const {t} = useTranslation();

  const {currentLang} = useLang();

  const profileData = data[currentLang] && data[currentLang].profile;

  const classes = useStyles();

  return (
    <Grid container>
      <Title icon={AssignmentInd} text={`${t('profile')}`}/>
      <Paper className={classes.paper}>
        {profileData}
      </Paper>
    </Grid>
  );
};

export default Profile;
