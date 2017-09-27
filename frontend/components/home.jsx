var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var router = ReactRouter.Router;
import { EventEmitter } from 'events'
var hashHistory = ReactRouter.hashHistory;

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './navbar'

import Sidebar from './sidebar'
import Websocket from 'react-websocket'
import Component from './appbar'
import StartJourney from './startjourney'
import MyJourneys from './myJourneys'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      screenIndex: 2,
      user: []
    }
  }

  componentDidMount() {
    var that = this
    $.ajax({
      method:"GET",
      url:"/api/users/" + this.props.user.user.id,
      dataType: 'json',
      success: function(response) {
        that.setState({"user": response})

      }
    })

    this.eventEmitter = new EventEmitter()
    this.eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
      this.updateScreen({newScreenIndex: screenIndex})
    })
  }

  updateScreen({newScreenIndex}) {
    this.setState({screenIndex: newScreenIndex})
  }

  render() {
    var ActiveScreen
    if (this.state.screenIndex === 1){
      ActiveScreen = <StartJourney user={this.props.user} eventEmitter={this.eventEmitter}/>
    }
    if (this.state.screenIndex === 2){
      ActiveScreen = <MyJourneys/>
    }
    if (this.state.screenIndex === 3){
      ActiveScreen = '123'
    }
    if (this.state.screenIndex === 4){
      ActiveScreen = '123'
    }

    return (
      <div className='home'>
          <MuiThemeProvider>
            <Component />
          </MuiThemeProvider>
          <div className="home-body">
            {ActiveScreen}
          </div>
          <button onClick={this.updateScreen(2)}>Start a Journey</button>
      </div>
    )
  }
}

export default Home
