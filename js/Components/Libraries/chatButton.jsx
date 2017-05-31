import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

class chatButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return
      <div>
        <RaisedButton
          label="Chat z pracownikami"
          onTouchTap={this.handleToggle}
        />
        <Drawer width={200} openSecondary={true} open={this.state.open} >
          <AppBar title="Doradcy" />
        </Drawer>
      </div>
    
  }
}
 export default chatButton
