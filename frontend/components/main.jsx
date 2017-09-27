var React = require('react');
import Navbar from './navbar';
import Footer from './footer';
import About from './about'
import HowItWorks from './howitworks'
import Home from './home'
var UserStore = require('../stores/user_store');
import { createStore } from 'redux';

import UserReducer from '../reducers/user_reducer';

var ReactRouter = require('react-router');
var router = ReactRouter.Router;
var hashHistory = ReactRouter.hashHistory;
var FontAwesome = require('react-fontawesome');


class Main extends React.Component{
  constructor(props){
    super(props);
    const store = createStore(UserReducer);
    var action = {type: "GET_USER"}
    store.dispatch(action)
    this.state = {"user": '', "store": store}

  }

  componentWillMount(){
    var that = this
    $.ajax({
      method:"GET",
      url:"/current_user",
      dataType: 'json',
      success: function(response) {
          that.setState({"user": response})
      }
    })
  }

  render() {
    if (!this.state.user){
      return (
        <div className='main'>
          <Navbar user={this.state.user}/>
          <div className="body">
          <div className="segment s1">
          <div className="header">
          <h1></h1>

          <h2>the smart way to manage your cargo</h2>
          <div className="smargo-logo"></div>
          <div className="learn-more">SmarGO is a cargo monitoring and data analytics platform that tracks the conditions of valuable cargo in real-time.  No matter the mode of transportation - on land, at sea or in the air, we can tell you exactly where and what conditions your assets are in.  We deliver critical information so that you can more efficiently manage your supply chain, and be assured that your assets are transported safely and securely.</div>
          <a className="main-button" href="/users/sign_up">Sign up</a>
          </div>
          </div>

          <About/>
          <HowItWorks/>

          </div>
          <Footer/>
        </div>
      )

    } else {
      return (
        <Home user={this.state.user}/>
      )
    }
  }
}

export default Main
