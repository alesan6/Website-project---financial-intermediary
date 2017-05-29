import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import DrawerNav from './Libraries/Navbar.jsx'

const Main = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    {/*<AppBar title="My AppBar" />*/}
    <DrawerNav />
  </MuiThemeProvider>
);

export default Main
