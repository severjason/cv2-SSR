import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import MarkerIcon from '@material-ui/icons/Room';
import React, { ReactElement } from 'react';
import useTranslation from 'next-translate/useTranslation';

import data from '../../data';
import { AppLang } from '../../types';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(1),
  },
  itemRoot: {
    paddingTop: theme.spacing(0.5),
  },
  iconDiv: {
    display: 'flex',
  },
  title: {
    paddingLeft: theme.spacing(1),
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

type ItemProps = {
  title: string | ReactElement;
  icon: ReactElement;
};

const Item: React.FC<ItemProps> = ({ title, icon }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.itemRoot} alignItems="center">
      <Grid item className={classes.iconDiv}>
        {icon}
      </Grid>
      <Grid item className={classes.title}>
        {title}
      </Grid>
    </Grid>
  );
};

const Info = () => {
  const classes = useStyles();
  const { t, lang } = useTranslation();

  return (
    <Grid container className={classes.root}>
      <Item
        icon={<PhoneIcon />}
        title={
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            href={`tel:${data.phone}`}
            title={t('common:links.phone')}
          >
            {data.phone}
          </a>
        }
      />
      <Item
        icon={<EmailIcon />}
        title={
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            href={`mailto:${data.email}`}
            title={t('common:links.email')}
          >
            {data.email}
          </a>
        }
      />
      <Item
        icon={<MarkerIcon />}
        title={
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
            href={data.locationLink}
            title={t('common:links.location')}
          >
            {data[lang as AppLang].location}
          </a>
        }
      />
    </Grid>
  );
};

export default Info;
