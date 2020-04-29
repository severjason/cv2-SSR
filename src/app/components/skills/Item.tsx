import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';

import type { SkillsData } from '../../ts-types';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 0,
  },
  title: {
    fontWeight: 600,
  },
  chip: {
    margin: theme.spacing(1),
    marginLeft: 0,
  },
  important: {
    fontWeight: 600,
  }
}));

const Item: React.FC<SkillsData> = ({title, list}) => {

  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root}>
      <Grid container alignItems="center">
        <Typography variant="body2" className={classes.title}>
          {title}:
        </Typography>
      </Grid>
      <Grid>
        {list.map(skill => (
          <Chip
            key={skill.name}
            label={skill.name}
            size="small"
            className={[
              classes.chip,
              skill.important ? classes.important : ''
            ].join(' ')}
            color="primary"
            variant={'outlined'}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Item;
