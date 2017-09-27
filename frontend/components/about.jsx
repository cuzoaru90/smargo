var React = require('react');
var ReactRouter = require('react-router');
var router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var FontAwesome = require('react-fontawesome');

class About extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='about'>
        <div className='about-heading'>
          <h1>Smargo is the first full stack solution to tracking and monitoring cargo en route to its destination</h1>
        </div>
        <div className='about-s'>
          <FontAwesome name="globe" className="about-icon"/>
          <div className="about-s-text">
            <h2>Track your cargo anywhere in the world</h2>
            <p>Smargo gives you the ability to check on your cargo in real-time from anywhere on the planet. Accurately monitor where, when, and in what condition your cargo will arrive.</p>
          </div>
        </div>
        <div className='about-s'>
          <FontAwesome name="cloud" className="about-icon"/>
          <div className="about-s-text">
            <h2>Upload your data to the cloud</h2>
            <p>Smargo automatically sends your cargo data to the cloud so you can easily analyze your shipping process and make adjustments as necessary. </p>
          </div>
        </div>
        <div className='about-s'>
          <FontAwesome name="dollar" size="5x" className="about-icon"/>
          <div className="about-s-text">
            <h2>Save money</h2>
            <p>Reduce losses from mishandling, lower your insurance premiums, and save big.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About
