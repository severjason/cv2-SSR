import { grey } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

//import Footer from './app/footer';
import Header from './header';
//import Main from './app/main';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%',
    boxShadow: theme.shadows[2],
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: grey[100],
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Header />
    </Container>
  );
};

export default App;
