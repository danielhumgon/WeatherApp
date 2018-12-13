import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#4a126b',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });





const styles = {
  root: {
    flexGrow: 1,
  },
};

function AppBarComponent(props) {
  const { classes } = props;

  return (
      <MuiThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" color="inherit">
            WeatherApp
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    </MuiThemeProvider>
  );
}

AppBarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarComponent);