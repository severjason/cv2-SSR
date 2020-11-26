import { createMuiTheme } from '@material-ui/core/styles';
import color from '@material-ui/core/colors/blueGrey';

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
    primary: color,
  },
});

export default theme;
