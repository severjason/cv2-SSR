import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    h4: {
      textTransform: 'uppercase',
    },
    h5: {
      textTransform: 'uppercase',
    },
    body2: {
      fontSize: '1.1rem',
    },
    fontFamily: `'Exo 2', Helvetica, sans-serif`,
  },
  palette: {
    primary: {
      light: '#33877c',
      main: '#00695c',
      dark: '#004940',
      contrastText: '#fff',
    },
  },
});

export default theme;
