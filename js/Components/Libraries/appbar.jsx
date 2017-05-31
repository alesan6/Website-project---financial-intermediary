import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MenuExampleNested from './listMenu.jsx'
import chatButton from './chatButton.jsx'
import { Link } from 'react-router'


export default class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <AppBar
          title="FinancialApp Menu"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <Link to="/main/about"><MenuItem>O Nas</MenuItem></Link>
          <MenuExampleNested />
          <Link to="/main/contact"><MenuItem>Kontakt</MenuItem></Link>
          <chatButton />
        </Drawer>
      </div>
    );
  }
}
