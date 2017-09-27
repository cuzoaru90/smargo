import React from 'react';
var Link = require('react-router').Link

class Navbar extends React.Component{
  constructor(props){
    super(props);
  }



  render(){
    if (this.props.user["user"] != null){
      var a = <a className="nav-item right" href="/sign_out">Log Out</a>
    } else {
      var a = <a className="nav-item right" href="/users/sign_in">Log In</a>
    }
    return(
      <div className="navbar">
        <div className="nav-content">
          <ul className="nav-list">
            <Link className="smargo" to="/"></Link>

            <div className="nav-container ">
              {a}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
