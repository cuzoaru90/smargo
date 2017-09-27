import React from 'react';
var Link = require('react-router').Link

class Sidebar extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    return(
      <div className="sidebar">
        <div className="sidebar-header">
        </div>
        <div className="sidebar-content">
          <ul className="sidebar-list">
            <li>Record Journey</li>
            <li>Your Drivers</li>
            <li>Add Drivers</li>
            <li>Settings</li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
