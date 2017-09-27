var React = require('react');
var ReactRouter = require('react-router');
var router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var FontAwesome = require('react-fontawesome');


class HowItWorks extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='howitworks'>
          <h2>How It Works</h2>
          <div className="howitworks-body">
              <div className="howitworks-sec">
                <FontAwesome name="user" className="howitworks-icon"/>
                <h3>Sign Up</h3>
                <p>Register with Smargo and gain access to your personal portal for monitoring and managing your assets. </p>
              </div>
              <div className="howitworks-sec">
                <FontAwesome name="wrench" className="howitworks-icon"/>
                <h3>Setup</h3>
                <p>Use our Smargo sensors to easily track the position, altitude, temperature, humidity, and vibration of your cargo. Alternatively, if all you need to track is the position of your cargo, just give us the mobile number of whoever will be transporting your shipment and we'll take care of the rest.</p>
              </div>
              <div className="howitworks-sec">
                <FontAwesome name="map-marker" className="howitworks-icon"/>
                <h3>Monitor and Manage</h3>
                <p>Log into Smargo and gain access to a variety of tools to help you manage and monitor your valuable cargo. Smargo provides state of the art tools to help you analyze the status of your cargo. Improve the efficiency of your shipping process, prevent loss, and save big.</p>
              </div>

          </div>
      </div>
    )
  }
}

export default HowItWorks
