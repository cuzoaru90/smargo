import React from 'react';

var LocationsUtil = require('../util/location_util')
var JourneysUtil  = require('../util/journey_util')
import Map from './map'

class StartJourney extends React.Component{
  constructor(props){
    super(props);
    this.state = { "position": {}, "journey": {} }
  }

  componentWillMount() {
    this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1})
  }

  startJourney(){
    document.getElementById('stop').classList.remove('hide')
    document.getElementById('start').classList.add('hide')
    let startTracking = (result) => {
      let interval = window.setInterval(() => {
        navigator.geolocation.getCurrentPosition((position) => {
          this.setState({"position": position})
          LocationsUtil.createLocation({journey_id: result.id, longitude: position.coords.longitude, latitude: position.coords.latitude})
        })
        }, 5000)
      this.setState({"interval": interval})
    }

    let getVal = function(result){
      startTracking(result)
    }
    JourneysUtil.createJourney({user_id: this.props.user.user.id}, getVal)
  }

  stopJourney(){
    clearInterval(this.state.interval)
    document.getElementById('stop').classList.add('hide')
    document.getElementById('start').classList.remove('hide')
  }

  render(){
    if (this.state.position.coords){
      var latlng = {lat: this.state.position.coords.latitude, lng:this.state.position.coords.longitude}
    } else {
      var latlng = null
    }
    return(
      <div className="startjourney">

        <button id='start' onClick={this.startJourney.bind(this)}>Start Journey</button>
        <button id='stop' className='hide' onClick={this.stopJourney.bind(this)}>Stop Journey</button>
        <Map coords={latlng}/>
      </div>
    );
  }
}

export default StartJourney;
