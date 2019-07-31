import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { brown } from '@material-ui/core/colors';

import {
  AppBar,
  Toolbar,
  Typography,
  createMuiTheme,
  CssBaseline
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: brown
  }
});

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            Main
          </Typography>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
};

export default App;
