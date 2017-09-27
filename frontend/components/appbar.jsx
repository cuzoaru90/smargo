import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu'
var Link = require('react-router').Link

const Logged = (props) => (
  <IconMenu
  {...props}
  iconButtonElement={
    <IconButton><NavigationMenu /></IconButton>
  }
  targetOrigin={{horizontal: 'right', vertical: 'top'}}
  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
  <MenuItem primaryText="Refresh" containerElement={<Link to="/profile" />}/>
  <MenuItem primaryText="Start Journey" containerElement={<Link to="/startjourney" />}/>
  <a className="nav-item right" href="/sign_out">Sign out</a>
  </IconMenu>
);
var NavbarComponent = React.createClass({

  click: function(val) {
    console.log(val)
  },

  render: function() {
    return (
      <div>
        <AppBar title="Smargo" iconElementLeft={ <Logged/> }>
          <div className="clear"></div>
        </AppBar>
      </div>
    );
  },
  _handleClick: function()
  {
    console.log('REUn')
  }
})


export default NavbarComponent;
